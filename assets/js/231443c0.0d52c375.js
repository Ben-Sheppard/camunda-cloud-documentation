(self.webpackChunkcamunda_cloud_documentation=self.webpackChunkcamunda_cloud_documentation||[]).push([[21370],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return l},kt:function(){return m}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):u(u({},t),e)),n},l=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),d=c(n),m=a,g=d["".concat(s,".").concat(m)]||d[m]||p[m]||o;return n?r.createElement(g,u(u({ref:t},l),{},{components:n})):r.createElement(g,u({ref:t},l))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,u=new Array(o);u[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,u[1]=i;for(var c=2;c<o;c++)u[c]=n[c];return r.createElement.apply(null,u)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},21267:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return u},metadata:function(){return i},toc:function(){return s},default:function(){return l}});var r=n(22122),a=n(19756),o=(n(67294),n(3905)),u={id:"next-steps-resources",title:"Next steps and resources"},i={unversionedId:"product-manuals/zeebe/deployment-guide/getting-started/next-steps-resources",id:"product-manuals/zeebe/deployment-guide/getting-started/next-steps-resources",isDocsHomePage:!1,title:"Next steps and resources",description:"Zeebe's Java and Go clients each have getting started guides of their own, showing in much greater detail how you can use the clients in the worker services you orchestrate with Zeebe.",source:"@site/docs/product-manuals/zeebe/deployment-guide/getting-started/next-steps-resources.md",sourceDirName:"product-manuals/zeebe/deployment-guide/getting-started",slug:"/product-manuals/zeebe/deployment-guide/getting-started/next-steps-resources",permalink:"/docs/product-manuals/zeebe/deployment-guide/getting-started/next-steps-resources",editUrl:"https://github.com/camunda-cloud/camunda-cloud-documentation/edit/master/docs/product-manuals/zeebe/deployment-guide/getting-started/next-steps-resources.md",version:"current",frontMatter:{id:"next-steps-resources",title:"Next steps and resources"},sidebar:"Product Manuals",previous:{title:"Create and complete process instances",permalink:"/docs/product-manuals/zeebe/deployment-guide/getting-started/create-process-instance"},next:{title:"Configuration",permalink:"/docs/product-manuals/zeebe/deployment-guide/configuration/configuration"}},s=[],c={toc:s};function l(e){var t=e.components,n=(0,a.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Zeebe's Java and Go clients each have getting started guides of their own, showing in much greater detail how you can use the clients in the worker services you orchestrate with Zeebe."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/camunda-cloud/camunda-cloud-get-started"},"Getting started with the Java client")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/product-manuals/clients/go-client/get-started"},"Getting started with the Go client"))),(0,o.kt)("p",null,"Beyond Java and Go, it's possible to create clients for Zeebe in a range of other programming languages, including JavaScript and C#, via community-supported libraries. The ",(0,o.kt)("a",{parentName:"p",href:"https://awesome.zeebe.io/"},"Awesome Zeebe")," page includes community-contributed clients in other languages, and ",(0,o.kt)("a",{parentName:"p",href:"https://camunda.com/blog/2018/11/grpc-generating-a-zeebe-python-client/"},"this blog post")," walks through how to generate a new client stub for Zeebe using gRPC."),(0,o.kt)("p",null,"The ",(0,o.kt)("a",{parentName:"p",href:"/"},"Zeebe docs")," (where this tutorial is located) contain resources to help you move your Zeebe project forward."),(0,o.kt)("p",null,"If you have questions, you can get in touch with us via the:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://forum.camunda.io/"},"User forum")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://zeebe-slack-invite.herokuapp.com/"},"Public Slack channel")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/camunda-cloud/zeebe/issues"},"GitHub issue tracker"))),(0,o.kt)("p",null,"Please reach out if we can help you! We're here to offer support."),(0,o.kt)("p",null,"Lastly, we do a lot of writing about project news along with an occasional deep dive into the product in the ",(0,o.kt)("a",{parentName:"p",href:"https://camunda.com/blog/"},"Camunda Cloud blog"),"."),(0,o.kt)("p",null,"Thanks so much for working through this tutorial with us. We're really glad you're here, and we're happy to welcome you to the Zeebe community!"))}l.isMDXComponent=!0}}]);