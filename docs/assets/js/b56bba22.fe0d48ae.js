"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[703],{6155:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>i,default:()=>h,frontMatter:()=>c,metadata:()=>r,toc:()=>l});var s=t(4848),o=t(8453);const c={},i="Sources",r={id:"sources",title:"Sources",description:'A "source" in Dalec is an abstraction for fetching dependencies of a build.',source:"@site/docs/sources.md",sourceDirName:".",slug:"/sources",permalink:"/dalec/sources",draft:!1,unlisted:!1,editUrl:"https://github.com/Azure/dalec/blob/main/website/docs/docs/sources.md",tags:[],version:"current",frontMatter:{},sidebar:"sidebar",previous:{title:"Dalec Specification",permalink:"/dalec/spec"},next:{title:"Targets",permalink:"/dalec/targets"}},a={},l=[{value:"Top-level source configuration",id:"top-level-source-configuration",level:2},{value:"Source Types",id:"source-types",level:2},{value:"Git",id:"git",level:3},{value:"HTTP",id:"http",level:3},{value:"Build context",id:"build-context",level:3},{value:"Inline",id:"inline",level:3},{value:"Docker Image",id:"docker-image",level:3},{value:"Build",id:"build",level:3},{value:"Generators",id:"generators",level:2},{value:"Gomod",id:"gomod",level:3},{value:"Patches",id:"patches",level:2},{value:"Advanced Source Configurations",id:"advanced-source-configurations",level:2}];function d(e){const n={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,o.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"sources",children:"Sources"}),"\n",(0,s.jsx)(n.p,{children:'A "source" in Dalec is an abstraction for fetching dependencies of a build.\nUsually this is source code but technically it could be anything.\nThe source abstraction enables fetching build sources over various protocols.'}),"\n",(0,s.jsx)(n.p,{children:"Some sources are considered as inherently file-based sources, like HTTP URLs or local directories.\nOther sources are considered as inherently directory-based sources, like git repositories.\nDepending on the source type, the behavior of certain things may be different, depending on the target implementation (e.g. mariner2, jammy, windows, etc).\nSources are injected into the root path of the build environment using the name of the source."}),"\n",(0,s.jsx)(n.p,{children:"Ideally the content of a source is platform agnostic (e.g. no platform specific binaries).\nThese sources are used to create source packages for the target platform, such as an srpm or a debian dsc.\nHowever, some source types may allow you to mount another source type in or are wrappers for other source types, like docker images or build sources respectively.\nOnly the output of a top-level source is included in the build environment.\nThese wrapper types (docker image, build) are useful for more advanced use-cases where you need to generate content or utilize other tooling in order to create the source."}),"\n",(0,s.jsx)(n.h2,{id:"top-level-source-configuration",children:"Top-level source configuration"}),"\n",(0,s.jsx)(n.p,{children:"For all source types, you can specify the following top-level configuration:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"path"}),": The path to extract from the source type"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"includes"}),": A list of glob patterns to include from the source"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"excludes"}),": A list of glob patterns to exclude from the source"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"generate"}),": See ",(0,s.jsx)(n.a,{href:"#Generators",children:"Generators"})]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["The below example uses a ",(0,s.jsx)(n.a,{href:"#build-context",children:(0,s.jsx)(n.code,{children:"context"})})," source type.\nThe root of the source is the ",(0,s.jsx)(n.code,{children:"path/in/source"})," directory.\nThe source will include all ",(0,s.jsx)(n.code,{children:".txt"})," files within ",(0,s.jsx)(n.code,{children:"path/in/source"})," except for ",(0,s.jsx)(n.code,{children:"secret.txt"}),"."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",children:'sources:\n  someSource:\n    path: path/in/source\n    includes:\n      - "*.txt"\n    excludes:\n      - "secret.txt"\n    context: {}\n'})}),"\n",(0,s.jsx)(n.h2,{id:"source-types",children:"Source Types"}),"\n",(0,s.jsx)(n.h3,{id:"git",children:"Git"}),"\n",(0,s.jsx)(n.p,{children:"Git sources fetch a git repository at a specific commit.\nYou can use either an SSH style git URL or an HTTPS style git URL."}),"\n",(0,s.jsx)(n.p,{children:"For SSH style git URLs, if the client (such as the docker CLI) has provided\naccess to an SSH agent, that agent will be used to authenticate with the git\nserver."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",children:"sources:\n  someSource1:\n    git:\n      # This uses an SSH style git URL.\n      url: git@github.com:myOrg/myRepo.git\n      commit: 1234567890abcdef\n  someSource2:\n    git:\n      # This uses an HTTPS style git URL.\n      url: https://github.com/myOrg/myRepo.git\n      commit: 1234567890abcdef\n      keepGitDir: true # [Optional] Keep the .git directory when fetching the git source. Default: false\n"})}),"\n",(0,s.jsxs)(n.p,{children:["By default, Dalec will discard the ",(0,s.jsx)(n.code,{children:".git"})," directory when fetching a git source.\nYou can override this behavior by setting ",(0,s.jsx)(n.code,{children:"keepGitDir: true"})," in the git configuration."]}),"\n",(0,s.jsx)(n.p,{children:'Git repositories are considered to be "directory" sources.'}),"\n",(0,s.jsx)(n.h3,{id:"http",children:"HTTP"}),"\n",(0,s.jsx)(n.p,{children:"HTTP sources fetch a file from an HTTP URL.\nHTTP content is not verified by digest today, but it is in the roadmap."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",children:"sources:\n  someSource1:\n    http:\n      # No Digest verification\n      url: https://example.com/someFile.txt\n"})}),"\n",(0,s.jsx)(n.p,{children:'The HTTP source type is considered to be a "file" source.'}),"\n",(0,s.jsx)(n.h3,{id:"build-context",children:"Build context"}),"\n",(0,s.jsx)(n.p,{children:"Clients provide a build context to Dalec.\nAs an example, here is how the Docker client provides a build context to Dalec:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"$ docker build <some args> .\n"})}),"\n",(0,s.jsxs)(n.p,{children:["In this case the ",(0,s.jsx)(n.code,{children:"."}),", or current directory, is the build context.\nDalec is able to use the build context as a source:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",children:"sources:\n  someSource:\n    context: {}\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Note the empty brackets.\nThis is an unfortunate syntax requirement to not have ",(0,s.jsx)(n.code,{children:"context"})," considered as a nil value.\nThis is the equivelent of the following:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",children:'sources:\n  someSource:\n    context:\n      name: "context"\n'})}),"\n",(0,s.jsxs)(n.p,{children:["Where ",(0,s.jsx)(n.code,{children:'name: "context"'}),", not to be confused with the source type ",(0,s.jsx)(n.code,{children:"context"}),", is named by convention by the docker CLI.\nAdditionally contexts can be passed in from the docker cli: ",(0,s.jsx)(n.code,{children:"docker build --build-context <name>=<path>"}),".\nThe ",(0,s.jsx)(n.code,{children:"<name>"})," would be the name to use in your yaml to access it."]}),"\n",(0,s.jsxs)(n.p,{children:["This could also be written as below, since the ",(0,s.jsx)(n.code,{children:"name: context"})," is the default and is the main build context passed in by the client:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",children:"sources:\n  someSource:\n    context: {}\n"})}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"context"}),' source type is considered to be a "directory" source.']}),"\n",(0,s.jsx)(n.h3,{id:"inline",children:"Inline"}),"\n",(0,s.jsxs)(n.p,{children:["Inline sources are sources that are defined inline in the Dalec configuration.\nYou can only specify one of ",(0,s.jsx)(n.code,{children:"file"})," or ",(0,s.jsx)(n.code,{children:"dir"})," in an inline source.\nDirectories cannot be nested in inline sources.\nFilenames must not contain a path separator (",(0,s.jsx)(n.code,{children:"/"}),")."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",children:"sources:\n  someInlineFile:\n    inline:\n      # This is the content of the source.\n      file:\n        uid: 0\n        gid: 0\n        permissions: 0644\n        contents: |\n          some content\n          some more content\n\n  someInlineDir:\n    inline:\n      dir:\n        uid: 0\n        gid: 0\n        permissions: 0755\n        files:\n          # This is the content of the source.\n          file1:\n            contents: |\n              some content\n              some more content\n            permissions: 0644\n            uid: 0\n            gid: 0\n          file2:\n            contents: |\n              some content\n              some more content\n            permissions: 0644\n            uid: 0\n            gid: 0\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Inline sources with ",(0,s.jsx)(n.code,{children:"file"}),' are considered to be "file" sources.\nInline sources with ',(0,s.jsx)(n.code,{children:"dir"}),' are considered to be "directory" sources.']}),"\n",(0,s.jsx)(n.h3,{id:"docker-image",children:"Docker Image"}),"\n",(0,s.jsx)(n.p,{children:"Docker image sources fetch a docker image from a registry.\nThe output of this source is a directory containing the contents of the image."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",children:"sources:\n  someDockerImage:\n    image:\n      ref: docker.io/library/alpine:3.14\n"})}),"\n",(0,s.jsx)(n.p,{children:"You can also run commands in the image before fetching the contents.\nThis is especially useful for generating content."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",children:"sources:\n  someDockerImage:\n    image:\n      ref: docker.io/library/alpine:3.14\n      cmd:\n        dir: / # Default path that command steps are executed in\n        cache_dirs: null # Map of cache mounts. Default value: `null`\n          /foo: {\n            mode: shared # The other options are `locked` or `private`\n            key: myCacheKey\n            include_distro_key: false # Add the target key from the target being built into the cache key\n            include_arch_key: false # add the architecture of the image to run the command in into the cache key\n          }\n\n        steps:\n          - command: echo ${FOO} ${BAR}\n            env: # Environment variables to set for the step\n              FOO: foo\n              BAR: bar\n"})}),"\n",(0,s.jsx)(n.p,{children:"You can mount any other source type into the image as well.\nHere's an example mounting an inline source, modifying it, and extracting the result:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",children:"sources:\n  someDockerImage:\n    path: /bar # Extract `/bar` fromt he result of running the command in the docker image below\n    image:\n      ref: docker.io/library/alpine:3.14\n      cmd:\n        mounts: # Mount other sources into each command step\n          - dest: /foo\n            spec:\n              inline:\n                file:\n                  uid: 0\n                  gid: 0\n                  permissions: 0644\n                  contents: |\n                    some content\n                    some more content\n        steps:\n          - command: echo add some extra stuff >> /foo; mkdir /bar; cp /foo /bar\n\n"})}),"\n",(0,s.jsx)(n.p,{children:"You can use the docker image source to produce any kind of content for your build."}),"\n",(0,s.jsx)(n.p,{children:'Docker image sources are considered to be "directory" sources.'}),"\n",(0,s.jsx)(n.h3,{id:"build",children:"Build"}),"\n",(0,s.jsxs)(n.p,{children:["Build sources allow you to build a dockerfile and use the resulting image as a source.\nIt takes as input another source which must include the dockerfile to build.\nThe default dockerfile path is ",(0,s.jsx)(n.code,{children:"Dockerfile"})," just like a normal docker build."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",children:"sources:\n  someBuild:\n    build:\n      source: # Specfy another source to use as the build context of this build operation\n        git:\n          url: https://github.com/Azure/dalec.git\n          commit: v0.1.0\n"})}),"\n",(0,s.jsx)(n.p,{children:"The above example will fetch the git repo and build the dockerfile at the root of the repo."}),"\n",(0,s.jsx)(n.p,{children:"Here's another example using an inline source as the build source:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",children:'  someBuild:\n    path: /hello.txt\n    build:\n      dockerfile_path: other.Dockerfile # [Optional] Change dockerfile path. Default value: "Dockerfile"\n      source:\n        inline:\n          dir:\n            uid: 0\n            gid: 0\n            permissions: 0755\n            files:\n              Dockerfile:\n                contents: |\n                  FROM alpine:3.14 AS base\n                  RUN echo "hello world" > /hello.txt\n\n                  FROM scratch\n                  COPY --from=base /hello.txt /hello.txt\n'})}),"\n",(0,s.jsxs)(n.p,{children:["You can also specify a ",(0,s.jsx)(n.code,{children:"target"})," which is the name of the build stage to execute.\nBuild args can be specified as well as ",(0,s.jsx)(n.code,{children:"args"})," which is a map of key value pairs."]}),"\n",(0,s.jsx)(n.p,{children:'Build sources are considered to be "directory" sources.'}),"\n",(0,s.jsx)(n.h2,{id:"generators",children:"Generators"}),"\n",(0,s.jsxs)(n.p,{children:["Generators are used to generate a source from another source.\nCurrently the only generator supported is ",(0,s.jsx)(n.code,{children:"gomod"}),"."]}),"\n",(0,s.jsx)(n.h3,{id:"gomod",children:"Gomod"}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"gomod"})," generator manages a single go module cache for all sources that\nspecify it in the spec. It is expected that the build dependencies include a\ngo toolchain suitable for fetching go module dependencies."]}),"\n",(0,s.jsx)(n.p,{children:"Adding a gomod generator to 1 or more sources causes the following to occur automatically:"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["Fetch all go module dependencies for ",(0,s.jsx)(n.em,{children:"all"})," sources in the spec that specify the generator"]}),"\n",(0,s.jsx)(n.li,{children:"Keeps a single go module cache directory for all go module deps."}),"\n",(0,s.jsx)(n.li,{children:"Adds the go module cache directory a source which gets included in source packages like a normal source."}),"\n",(0,s.jsxs)(n.li,{children:["Adds the ",(0,s.jsx)(n.code,{children:"GOMODCACHE"})," environment variable to the build environment."]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",children:'sources:\n  md2man:\n    git:\n        url: https://github.com/cpuguy83/go-md2man.git\n        commit: v2.1.0\n    generate:\n        subpath: "" # path inside the source to use as the root for the generator\n        gomod: {} # Generates a go module cache to cache dependencies\n'})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"gomod"})," currently does not have any options but may in the future."]}),"\n",(0,s.jsx)(n.h2,{id:"patches",children:"Patches"}),"\n",(0,s.jsx)(n.p,{children:"Dalec supports applying patches to sources. Patches must be specified in the\nsources section just like any other type of source.\nTo apply a source as a patch to another source there is a patches section that\nis a mapping of the source name you want to apply a patch to, to an ordered list\nof sources that are the patch to apply."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",children:'sources:\n  md2man:\n    git:\n      url: https://github.com/cpuguy83/go-md2man.git\n        commit: v2.0.3\n    generate:\n      gomod: {} # Generates a go module cache to cache dependencies\n  md2man-patch:\n    http:\n      url: https://github.com/cpuguy83/go-md2man/commit/fd6bc094ed445b6954a67df55e75d7db95fa8879.patch\n\npatches:\n  m2dman: # Name of the source we want to patch.\n      # Each entry is a patch spec and points to a source listed in the `sources` section\n    - source: md2man-patch # The name of the source that contains the patch\n      path: "" # Path inside the patch source where the patch file is located.\n    # Add more patches to the list (After adding them to the sources section) if needed\n'})}),"\n",(0,s.jsxs)(n.p,{children:["Each patch in the list of patch sources MUST be pointing to a file. When the\npatch source is a file-based source, such as ",(0,s.jsx)(n.code,{children:"http"}),", the ",(0,s.jsx)(n.code,{children:"path"})," parameter in the\npatch spec must not be set. When the patch is a directory-based source, such as\n",(0,s.jsx)(n.code,{children:"context"}),", the ",(0,s.jsx)(n.code,{children:"path"})," parameter in the patch spec must be set AND referencing a file\nin the source.\nSee the source type definitions for if a source type is directory or file based."]}),"\n",(0,s.jsx)(n.p,{children:"Here is another example using a directory-backed source for patches. In the\nexample we'll also sow using multiple patch files from the same source."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",children:"sources:\n  md2man:\n    git:\n      url: https://github.com/cpuguy83/go-md2man.git\n      commit: v2.0.3\n  localPatches:\n    context: {}\n\n\npatches:\n  md2man:\n    - source: localPatches\n      path: patches/some0.patch\n    - source: localPatches\n      path: patches/some2.patch\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Note: If you want to optimize the above example you can use the ",(0,s.jsx)(n.code,{children:"includes"}),"\nfeature on the context source so that only the needed files are fetched during\nthe build."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",children:"sources:\n  md2man:\n    git:\n      url: https://github.com/cpuguy83/go-md2man.git\n      commit: v2.0.3\n  localPatches:\n    context: {}\n    includes:\n      - patches/some0.patch\n      - patches/some1.patch\n\npatches:\n  md2man:\n    - source: localPatches\n      path: patches/some0.patch\n    - source: localPatches\n      path: patches/some2.patch\n"})}),"\n",(0,s.jsx)(n.p,{children:"Here is another example where we have a directory-based source with a subpath\ndefined on the source. Note that even if the subpath is pointing to a file, it\nis still considered a directory-based source and still requires specifying a path\nin the patch spec."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",children:"sources:\n  md2man:\n    git:\n      url: https://github.com/cpuguy83/go-md2man.git\n      commit: v2.0.3\n  localPatches:\n    context: {}\n    path: patches/some0.patch\n\npatches:\n  md2man:\n    - source: localPatches\n      path: some0.patch\n"})}),"\n",(0,s.jsx)(n.h2,{id:"advanced-source-configurations",children:"Advanced Source Configurations"}),"\n",(0,s.jsxs)(n.p,{children:["You can see more advanced configurations in our ",(0,s.jsx)(n.a,{href:"https://github.com/Azure/dalec/tree/main/test/fixtures",children:"test fixtures"}),".\nThese are in here to test lots of different edge cases and are only mentioned to provide examples of what might be possible\nwhen these simple configurations are not enough.\nThe examples in that directory are not exhaustive and are not guaranteed to work in all cases or with all inputs and are\nthere strictly for testing purposes."]})]})}function h(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>r});var s=t(6540);const o={},c=s.createContext(o);function i(e){const n=s.useContext(c);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),s.createElement(c.Provider,{value:n},e.children)}}}]);