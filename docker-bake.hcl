group "default" {
    targets = ["frontend", "mariner2-toolchain"]
}

target "frontend" {
    target = "frontend"
    tags = ["ghcr.io/azure/dalec/frontend:latest", "local/dalec/frontend", BUILDKIT_SYNTAX]
}

// Toolchain builds the full mariner container with the mariner build tookit
target "mariner2-toolchain" {
    dockerfile = "./frontend/mariner2/Dockerfile"
    target = "toolchain"
    tags = ["ghcr.io/azure/dalec/mariner/toolchain:latest", "local/dalec/mariner/toolchain"]
}

# Run linters
# Note: CI is using the github actions golangci-lint action which automatically sets up caching for us rather than using this bake target
# If you change this, please also change the github action
target "lint" {
    context = "."
    dockerfile-inline = <<EOT
    FROM golangci/golangci-lint:v1.54
    WORKDIR /build
    RUN \
        --mount=type=cache,target=/go/pkg/mod \
        --mount=type=cache,target=/root/.cache,id=golangci-lint \
        --mount=type=bind,source=.,target=/build \
        golangci-lint run -v
    EOT
}

variable "RUNC_COMMIT" {
    default = "v1.1.9"
}

variable "RUNC_VERSION" {
    default = "1.1.9"
}

variable "RUNC_REVISION" {
    default = "1"
}


variable "BUILDKIT_SYNTAX" {
    default = "local/dalec/frontend"
}

target "runc" {
    name = "runc-${distro}-${tgt}"
    dockerfile = "test/fixtures/moby-runc.yml"
    args = {
        "RUNC_COMMIT" = RUNC_COMMIT
        "VERSION" = RUNC_VERSION
        "BUILDKIT_SYNTAX" = BUILDKIT_SYNTAX
    }
    matrix = {
        distro = ["mariner2"]
        tgt = ["rpm", "container", "toolkitroot"]
    }
    target = "${distro}/${tgt}"
    // only tag the container target
    tags = tgt == "container" ? ["runc:${distro}"] : []
    // only output non-container targets to the fs
    output = tgt != "container" ? ["_output"] : []
}


target "test-runc" {
    matrix = {
        distro = ["mariner2"]
    }
    contexts = {
        "dalec-runc-img" = "target:runc-${distro}-container"
    }

    dockerfile-inline = <<EOT
    FROM dalec-runc-img
    RUN [ -f /usr/bin/runc ]
    RUN for i in /usr/share/man/man8/runc-*; do [ -f "$i" ]; done
    # TODO: The spec is not currently setting the revision in the runc version
    RUN runc --version | tee /dev/stderr | grep "runc version ${replace(RUNC_VERSION, ".", "\\.")}"
    EOT
}
