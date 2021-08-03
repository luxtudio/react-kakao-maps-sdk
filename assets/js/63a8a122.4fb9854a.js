"use strict";(self.webpackChunkreact_kakao_maps_sdk=self.webpackChunkreact_kakao_maps_sdk||[]).push([[457],{2422:function(e,a,n){n.r(a),n.d(a,{contentTitle:function(){return k},default:function(){return f},frontMatter:function(){return d},metadata:function(){return u},toc:function(){return M}});var t=n(7462),o=n(3366),p=n(7294),i=n(3905),s=n(8086),r=n(1925),c=n(3857),m=function(){var e=(0,r.iu)({apiKey:"6ec8020798deac7ef2f8897ad1c5ccf1"});return p.createElement(c.D,{loading:e,center:{lat:33.450701,lng:126.570667},size:{width:"100%",height:"450px"},option:{level:3}})},l=["components"],d={title:"\uc9c0\ub3c4 \uc0dd\uc131\ud558\uae30",sidebar_position:1},k=void 0,u={unversionedId:"sample/basicMap",id:"sample/basicMap",isDocsHomePage:!1,title:"\uc9c0\ub3c4 \uc0dd\uc131\ud558\uae30",description:"\uc9c0\ub3c4\ub97c \uc0dd\uc131\ud558\ub294 \uac00\uc7a5 \uae30\ubcf8\uc801\uc778 \uc608\uc81c\uc785\ub2c8\ub2e4.",source:"@site/docs/sample/basicMap.mdx",sourceDirName:"sample",slug:"/sample/basicMap",permalink:"/docs/sample/basicMap",editUrl:"https://github.com/JaeSeoKim/react-kakao-maps-sdk/edit/main/docs/sample/basicMap.mdx",version:"current",sidebarPosition:1,frontMatter:{title:"\uc9c0\ub3c4 \uc0dd\uc131\ud558\uae30",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"index",permalink:"/docs/sample/"},next:{title:"\uc9c0\ub3c4 \uc774\ub3d9\uc2dc\ud0a4\uae30",permalink:"/docs/sample/moveMap"}},M=[{value:"Source Code",id:"source-code",children:[]}],b={toc:M};function f(e){var a=e.components,n=(0,o.Z)(e,l);return(0,i.kt)("wrapper",(0,t.Z)({},b,n,{components:a,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"\uc9c0\ub3c4\ub97c \uc0dd\uc131\ud558\ub294 \uac00\uc7a5 \uae30\ubcf8\uc801\uc778 \uc608\uc81c\uc785\ub2c8\ub2e4."),(0,i.kt)(m,{mdxType:"SampleCreateMap"}),(0,i.kt)("h3",{id:"source-code"},"Source Code"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"original docs : ",(0,i.kt)("a",{parentName:"p",href:"https://apis.map.kakao.com/web/sample/basicMap/"},"https://apis.map.kakao.com/web/sample/basicMap/"))),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"\uc544\ub798\uc758 ",(0,i.kt)("inlineCode",{parentName:"p"},"from")," \uc758 ",(0,i.kt)("inlineCode",{parentName:"p"},"../../src/Component/Kakaomap/")," \ub294 npm package(",(0,i.kt)("inlineCode",{parentName:"p"},"react-kakao-maps-sdk"),")\uc73c\ub85c \ub9de\ucdb0\uc11c \uc0ac\uc6a9\ud574\uc8fc\uc138\uc694.")),(0,i.kt)(s.Z,{className:"language-jsx",mdxType:"CodeBlock"},'import React from "react";\nimport { useKakaoMapsSDK } from "../../src/Component/Kakaomap/hooks";\nimport { Map } from "../../src/Component/Kakaomap";\n\nconst SampleCreateMap = () => {\n  //  script \ub3d9\uc801 \ub85c\ub529\ud558\ub294 hook, HTML\uc5d0 Sciprt \uc0bd\uc785 \ud558\uc5ec \uc0ac\uc6a9\ud558\uc5ec\ub3c4 \uac00\ub2a5\ud568.\n  const loading = useKakaoMapsSDK({\n    apiKey: process.env.KAKAOMAP_API_KEY,\n  });\n\n  return (\n    <Map // \uc9c0\ub3c4\ub97c \ud45c\uc2dc\ud560 Container\n      loading={loading} // useKakaoMapsSDK\ub97c \uc774\uc6a9\ud558\uc5ec script \ub3d9\uc801 \ub85c\ub529 \ud560 \ub54c \uc0ac\uc6a9\n      center={{\n        // \uc9c0\ub3c4\uc758 \uc911\uc2ec\uc88c\ud45c\n        lat: 33.450701,\n        lng: 126.570667,\n      }}\n      size={{\n        // \uc9c0\ub3c4\uc758 \ud06c\uae30\n        width: "100%",\n        height: "450px",\n      }}\n      option={{\n        level: 3, // \uc9c0\ub3c4\uc758 \ud655\ub300 \ub808\ubca8\n      }}\n    />\n  );\n};\n\nexport default SampleCreateMap;\n'))}f.isMDXComponent=!0}}]);