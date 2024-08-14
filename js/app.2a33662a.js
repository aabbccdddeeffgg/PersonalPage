(function(){"use strict";var e={6076:function(e,t,s){var a=s(5130),l=s(6768),n=(s(4114),s(144)),o=s(1387);const r=e=>((0,l.Qi)("data-v-58bfb65a"),e=e(),(0,l.jt)(),e),i={class:"sidebar"},c=r((()=>(0,l.Lk)("div",{class:"sidebar-header"},[(0,l.Lk)("span",{class:"text-2xl font-bold text-white"},"个人主页")],-1)));var u={__name:"SideBar",setup(e){const t=(0,n.KR)("1"),s=(0,o.rd)(),a=e=>{switch(e){case"1":s.push("/PersonalPage");break;case"2":s.push("/PersonalPage/education");break;case"3":s.push("/PersonalPage/projects");break;case"4":s.push("/PersonalPage/internships");break;case"5":s.push("/PersonalPage/skills");break;case"6":s.push("/PersonalPage/certificates");break;default:break}};return(e,s)=>{const n=(0,l.g2)("el-menu-item"),o=(0,l.g2)("el-menu");return(0,l.uX)(),(0,l.CE)("div",i,[c,(0,l.bF)(o,{"default-active":t.value,class:"sidebar-menu",onSelect:a},{default:(0,l.k6)((()=>[(0,l.bF)(n,{index:"1"},{default:(0,l.k6)((()=>[(0,l.eW)("基本信息")])),_:1}),(0,l.bF)(n,{index:"2"},{default:(0,l.k6)((()=>[(0,l.eW)("教育信息")])),_:1}),(0,l.bF)(n,{index:"3"},{default:(0,l.k6)((()=>[(0,l.eW)("项目经验")])),_:1}),(0,l.bF)(n,{index:"4"},{default:(0,l.k6)((()=>[(0,l.eW)("实习经验")])),_:1}),(0,l.bF)(n,{index:"5"},{default:(0,l.k6)((()=>[(0,l.eW)("技能特长")])),_:1}),(0,l.bF)(n,{index:"6"},{default:(0,l.k6)((()=>[(0,l.eW)("荣誉证书")])),_:1})])),_:1},8,["default-active"])])}}},d=s(1241);const p=(0,d.A)(u,[["__scopeId","data-v-58bfb65a"]]);var f=p;const k={class:"flex"},v={class:"flex-1 p-4"};var L={__name:"App",setup(e){return(e,t)=>{const s=(0,l.g2)("router-view");return(0,l.uX)(),(0,l.CE)("div",k,[(0,l.bF)(f),(0,l.Lk)("div",v,[(0,l.bF)(s)])])}}};const m=L;var b=m,y=s(6517),h=(s(4188),s(4232)),g=s.p+"img/myPhote.a9701b2f.jpg",_=s(1576),j=s.n(_);const x=e=>((0,l.Qi)("data-v-01807e20"),e=e(),(0,l.jt)(),e),P={class:"container"},F={class:"info-section"},E=x((()=>(0,l.Lk)("div",{class:"info-header"},[(0,l.Lk)("h2",{class:"info-title"},"基本信息"),(0,l.Lk)("p",{class:"slogan"},"展现真实自我，让每一刻更精彩！")],-1))),C=x((()=>(0,l.Lk)("div",{class:"photo-section"},[(0,l.Lk)("img",{class:"profile-photo",src:g})],-1))),w=x((()=>(0,l.Lk)("div",{class:"decorative-elements"},[(0,l.Lk)("div",{class:"decorative-line"}),(0,l.Lk)("div",{class:"decorative-circle"}),(0,l.Lk)("div",{class:"decorative-triangle"})],-1)));var W={__name:"BasicInfo",setup(e){const t=(0,n.KR)({name:"王彦琪",gender:"男",dob:"2004-05-30",contact:"18016293563",email:"18016293563@163.com",address:"上海市徐汇区"}),s=e=>j()().diff(j()(e),"year"),a=(0,l.EW)((()=>s(t.value.dob)));return(e,s)=>{const n=(0,l.g2)("el-form-item"),o=(0,l.g2)("el-col"),r=(0,l.g2)("el-row"),i=(0,l.g2)("el-form"),c=(0,l.g2)("el-card");return(0,l.uX)(),(0,l.Wv)(c,{class:"basic-info-card",style:{height:"400px"}},{default:(0,l.k6)((()=>[(0,l.Lk)("div",P,[(0,l.Lk)("div",F,[E,(0,l.bF)(i,{"label-width":"120px","label-position":"top"},{default:(0,l.k6)((()=>[(0,l.bF)(r,{gutter:20},{default:(0,l.k6)((()=>[(0,l.bF)(o,{span:8,class:"form-item-col"},{default:(0,l.k6)((()=>[(0,l.bF)(n,{label:"姓名",class:"text-base font-semibold"},{default:(0,l.k6)((()=>[(0,l.Lk)("span",null,(0,h.v_)(t.value.name),1)])),_:1})])),_:1}),(0,l.bF)(o,{span:8,class:"form-item-col"},{default:(0,l.k6)((()=>[(0,l.bF)(n,{label:"性别",class:"text-base font-semibold"},{default:(0,l.k6)((()=>[(0,l.Lk)("span",null,(0,h.v_)(t.value.gender),1)])),_:1})])),_:1}),(0,l.bF)(o,{span:8,class:"form-item-col"},{default:(0,l.k6)((()=>[(0,l.bF)(n,{label:"年龄",class:"text-base font-semibold"},{default:(0,l.k6)((()=>[(0,l.Lk)("span",null,(0,h.v_)(a.value),1)])),_:1})])),_:1}),(0,l.bF)(o,{span:8,class:"form-item-col"},{default:(0,l.k6)((()=>[(0,l.bF)(n,{label:"联系方式",class:"text-base font-semibold"},{default:(0,l.k6)((()=>[(0,l.Lk)("span",null,(0,h.v_)(t.value.contact),1)])),_:1})])),_:1}),(0,l.bF)(o,{span:8,class:"form-item-col"},{default:(0,l.k6)((()=>[(0,l.bF)(n,{label:"电子邮箱",class:"text-base font-semibold"},{default:(0,l.k6)((()=>[(0,l.Lk)("span",null,(0,h.v_)(t.value.email),1)])),_:1})])),_:1}),(0,l.bF)(o,{span:8,class:"form-item-col"},{default:(0,l.k6)((()=>[(0,l.bF)(n,{label:"地址",class:"text-base font-semibold"},{default:(0,l.k6)((()=>[(0,l.Lk)("span",null,(0,h.v_)(t.value.address),1)])),_:1})])),_:1})])),_:1})])),_:1})]),C]),w])),_:1})}}};const I=(0,d.A)(W,[["__scopeId","data-v-01807e20"]]);var B=I;const A=e=>((0,l.Qi)("data-v-4527105a"),e=e(),(0,l.jt)(),e),X={class:"container"},Q={class:"education-section"},Y={key:0,class:"education-background"},O=A((()=>(0,l.Lk)("div",{class:"education-content"},[(0,l.Lk)("h3",{class:"degree"},"上海大学（211）"),(0,l.Lk)("p",{class:"duration"},"2022-09 ~ 至今"),(0,l.Lk)("p",{class:"major"},"人工智能（本科）"),(0,l.Lk)("div",{class:"highlight"},[(0,l.Lk)("p",null,[(0,l.Lk)("strong",null,"专业成绩："),(0,l.eW)("GPA专业前十")]),(0,l.Lk)("p",null,[(0,l.Lk)("strong",null,"主修课程：")]),(0,l.Lk)("ul",null,[(0,l.Lk)("li",null,"高级语言程序设计C++"),(0,l.Lk)("li",null,"面向对象程序设计C++（3.7/4）"),(0,l.Lk)("li",null,"离散数学（3.7/4）"),(0,l.Lk)("li",null,"数据结构（3.7/4）"),(0,l.Lk)("li",null,"计算机组成原理与体系结构"),(0,l.Lk)("li",null,"数据挖掘与知识处理"),(0,l.Lk)("li",null,"运筹与优化（3.7/4）")])])],-1))),K=[O];var R={__name:"EducationInfo",setup(e){const t=(0,n.KR)(!1);(0,l.sV)((()=>{t.value=!0}));const s=e=>{e.style.opacity=0,e.style.transform="scale(0.9)"},o=(e,t)=>{e.offsetHeight,e.style.transition="opacity 0.5s ease, transform 0.5s ease",e.style.opacity=1,e.style.transform="scale(1)",t()},r=(e,t)=>{e.style.transition="opacity 0.3s ease, transform 0.3s ease",e.style.opacity=0,e.style.transform="scale(0.9)",t()};return(e,n)=>{const i=(0,l.g2)("el-card");return(0,l.uX)(),(0,l.Wv)(i,{class:"education-info-card",shadow:"always"},{default:(0,l.k6)((()=>[(0,l.Lk)("div",X,[(0,l.Lk)("div",Q,[(0,l.bF)(a.eB,{name:"fade",onBeforeEnter:s,onEnter:o,onLeave:r},{default:(0,l.k6)((()=>[t.value?((0,l.uX)(),(0,l.CE)("div",Y,K)):(0,l.Q3)("",!0)])),_:1})])])])),_:1})}}};const H=(0,d.A)(R,[["__scopeId","data-v-4527105a"]]);var V=H;const S=e=>((0,l.Qi)("data-v-1ec73a01"),e=e(),(0,l.jt)(),e),T={class:"container"},D={class:"project-section"},G={key:0,class:"project-background"},M=S((()=>(0,l.Lk)("div",{class:"project-content"},[(0,l.Lk)("div",{class:"project-item"},[(0,l.Lk)("h3",{class:"project-title"},"金庸武侠小说人物知识图谱构建"),(0,l.Lk)("p",{class:"project-duration"},"2024-04 ~ 2024-05"),(0,l.Lk)("p",{class:"project-role"},"参与者"),(0,l.Lk)("p",{class:"project-description"},[(0,l.Lk)("strong",null,"项目介绍："),(0,l.eW)("以金庸的《倚天屠龙记》为数据，构建人物关系知识图谱。")]),(0,l.Lk)("p",{class:"project-responsibilities"},[(0,l.Lk)("strong",null,"我的职责："),(0,l.eW)("负责人物实体抽取（使用 thulac 库），参与人物关系抽取（使用预训练的模型如 Bert 以及根据规则的两种抽取方式），参与构建 RDF 三元组并导入 neo4j 图数据库实现知识图谱绘制。")])]),(0,l.Lk)("div",{class:"project-item"},[(0,l.Lk)("h3",{class:"project-title"},"大语言模型 Llama3-8B-Instruct 微调"),(0,l.Lk)("p",{class:"project-duration"},"2024-06 ~ 2024-07"),(0,l.Lk)("p",{class:"project-role"},"参与者"),(0,l.Lk)("p",{class:"project-description"},[(0,l.Lk)("strong",null,"项目介绍："),(0,l.eW)("针对 KDD Cup 中的购物知识推理赛道微调大模型，以提升购物知识的推理能力。")]),(0,l.Lk)("p",{class:"project-responsibilities"},[(0,l.Lk)("strong",null,"我的职责："),(0,l.eW)("负责扩充数据集，参与 lora 微调（包括概念理解，函数编写和参数微调），参与思维链尝试以及 prompt 微调。")]),(0,l.Lk)("p",{class:"project-responsibilities"},[(0,l.Lk)("strong",null,"项目开源地址："),(0,l.eW)("https://github.com/lshAlgorithm/KDD")])])],-1))),J=[M];var q={__name:"ProjectsInfo",setup(e){const t=(0,n.KR)(!1);(0,l.sV)((()=>{t.value=!0}));const s=e=>{e.style.opacity=0,e.style.transform="translateY(20px)"},o=(e,t)=>{e.offsetHeight,e.style.transition="opacity 0.5s ease, transform 0.5s ease",e.style.opacity=1,e.style.transform="translateY(0)",t()},r=(e,t)=>{e.style.transition="opacity 0.3s ease, transform 0.3s ease",e.style.opacity=0,e.style.transform="translateY(20px)",t()};return(e,n)=>{const i=(0,l.g2)("el-card");return(0,l.uX)(),(0,l.Wv)(i,{class:"project-info-card",shadow:"always"},{default:(0,l.k6)((()=>[(0,l.Lk)("div",T,[(0,l.Lk)("div",D,[(0,l.bF)(a.eB,{name:"fade-slide-up",onBeforeEnter:s,onEnter:o,onLeave:r},{default:(0,l.k6)((()=>[t.value?((0,l.uX)(),(0,l.CE)("div",G,J)):(0,l.Q3)("",!0)])),_:1})])])])),_:1})}}};const z=(0,d.A)(q,[["__scopeId","data-v-1ec73a01"]]);var N=z,U=s.p+"img/intern.bf551b8b.png";const Z=e=>((0,l.Qi)("data-v-5079f875"),e=e(),(0,l.jt)(),e),$={class:"container"},ee={class:"internship-section"},te={key:0,class:"internship-background"},se=Z((()=>(0,l.Lk)("div",{class:"internship-content"},[(0,l.Lk)("h3",{class:"position"},"山东杨巴克斯上海分公司"),(0,l.Lk)("p",{class:"duration"},"2024-07 ~ 2024-08"),(0,l.Lk)("p",{class:"role"},"前端工程师"),(0,l.Lk)("div",{class:"highlight"},[(0,l.Lk)("p",null,[(0,l.Lk)("strong",null,"项目介绍："),(0,l.eW)("协助构建禄费项目，禄费是一个企业托管平台，主要为企业赋能，有订单、报销、员工、部门管理等主要功能。")]),(0,l.Lk)("p",null,[(0,l.Lk)("strong",null,"我的职责："),(0,l.eW)("本人作为前端，负责搭建订单管理、员工管理和费用组管理页面，构建三个弹窗组件，搭建路由，与产品后端交互过禄费货运页面，熟悉开发流程。使用技术栈是Vue3+Element Plus。")])])],-1))),ae=[se],le=Z((()=>(0,l.Lk)("img",{style:{width:"350px",height:"450px"},src:U},null,-1)));var ne={__name:"InternshipsInfo",setup(e){const t=(0,n.KR)(!1);(0,l.sV)((()=>{t.value=!0}));const s=e=>{e.style.opacity=0,e.style.transform="translateY(20px)"},o=(e,t)=>{e.offsetHeight,e.style.transition="opacity 0.5s ease, transform 0.5s ease",e.style.opacity=1,e.style.transform="translateY(0)",t()},r=(e,t)=>{e.style.transition="opacity 0.3s ease, transform 0.3s ease",e.style.opacity=0,e.style.transform="translateY(20px)",t()};return(e,n)=>{const i=(0,l.g2)("el-card");return(0,l.uX)(),(0,l.Wv)(i,{class:"internship-info-card",shadow:"always"},{default:(0,l.k6)((()=>[(0,l.Lk)("div",$,[(0,l.Lk)("div",ee,[(0,l.bF)(a.eB,{name:"fade-slide-up",onBeforeEnter:s,onEnter:o,onLeave:r},{default:(0,l.k6)((()=>[t.value?((0,l.uX)(),(0,l.CE)("div",te,ae)):(0,l.Q3)("",!0)])),_:1})]),le])])),_:1})}}};const oe=(0,d.A)(ne,[["__scopeId","data-v-5079f875"]]);var re=oe;const ie=e=>((0,l.Qi)("data-v-1695d103"),e=e(),(0,l.jt)(),e),ce={class:"container"},ue={key:0,class:"skills-background"},de=ie((()=>(0,l.Lk)("div",{class:"skills-content"},[(0,l.Lk)("div",{class:"skills-item"},[(0,l.Lk)("h3",{class:"section-title"},"语言能力"),(0,l.Lk)("p",null,"CET-6 592分，具备优秀的听说读写能力，能够阅读英文文献，能够流畅使用英语进行日常交流。")]),(0,l.Lk)("div",{class:"skills-item"},[(0,l.Lk)("h3",{class:"section-title"},"专业技能"),(0,l.Lk)("ul",null,[(0,l.Lk)("li",null,"熟练运用 office 办公软件"),(0,l.Lk)("li",null,"熟悉 C++/Python 语言"),(0,l.Lk)("li",null,"熟悉 numpy、pandas 等库"),(0,l.Lk)("li",null,"熟悉各种数据挖掘算法"),(0,l.Lk)("li",null,"熟悉神经网络结构"),(0,l.Lk)("li",null,"熟悉基本的数据结构和算法"),(0,l.Lk)("li",null,"了解 Linux 开发环境"),(0,l.Lk)("li",null,"熟悉 git 代码管理操作"),(0,l.Lk)("li",null,"掌握良好的代码语言规范"),(0,l.Lk)("li",null,"善于查找技术资料，常逛相关技术博客"),(0,l.Lk)("li",null,"熟练使用 ChatGPT 等 AI 工具"),(0,l.Lk)("li",null,"有自己的 GitHub 仓库")])]),(0,l.Lk)("div",{class:"skills-item"},[(0,l.Lk)("h3",{class:"section-title"},"前端开发技能"),(0,l.Lk)("ul",null,[(0,l.Lk)("li",null,"熟悉 HTML、CSS、JavaScript 前端技术"),(0,l.Lk)("li",null,"熟悉 Vue 框架"),(0,l.Lk)("li",null,"熟悉 Element 库")])])],-1))),pe=[de];var fe={__name:"SkillsInfo",setup(e){const t=(0,n.KR)(!1);(0,l.sV)((()=>{t.value=!0}));const s=e=>{e.style.opacity=0,e.style.transform="translateY(20px)"},o=(e,t)=>{e.offsetHeight,e.style.transition="opacity 0.5s ease, transform 0.5s ease",e.style.opacity=1,e.style.transform="translateY(0)",t()},r=(e,t)=>{e.style.transition="opacity 0.3s ease, transform 0.3s ease",e.style.opacity=0,e.style.transform="translateY(20px)",t()};return(e,n)=>{const i=(0,l.g2)("el-card");return(0,l.uX)(),(0,l.Wv)(i,{class:"skills-info-card",shadow:"always"},{default:(0,l.k6)((()=>[(0,l.Lk)("div",ce,[(0,l.bF)(a.eB,{name:"fade-slide-up",onBeforeEnter:s,onEnter:o,onLeave:r},{default:(0,l.k6)((()=>[t.value?((0,l.uX)(),(0,l.CE)("div",ue,pe)):(0,l.Q3)("",!0)])),_:1})])])),_:1})}}};const ke=(0,d.A)(fe,[["__scopeId","data-v-1695d103"]]);var ve=ke,Le=s.p+"img/CET6.dfe5231d.png",me=s.p+"img/BlueCup.3c559b1f.jpg",be=s.p+"img/csp.3864cbd7.png";const ye=e=>((0,l.Qi)("data-v-1aeafc84"),e=e(),(0,l.jt)(),e),he={class:"container"},ge={key:0,class:"honors-background"},_e=ye((()=>(0,l.Lk)("div",{class:"honors-content"},[(0,l.Lk)("div",{class:"honors-item"},[(0,l.Lk)("h3",{class:"certificate-title"},"1. 英语四级六级证书"),(0,l.Lk)("img",{class:"certificate-image",src:Le,fit:"cover",alt:"英语四级六级证书"})]),(0,l.Lk)("div",{class:"honors-item"},[(0,l.Lk)("h3",{class:"certificate-title"},"2. 第十五届蓝桥杯全国软件和信息技术专业人才大赛上海赛区C/C++程序设计大学A组三等奖"),(0,l.Lk)("img",{class:"certificate-image",src:me,fit:"cover",alt:"蓝桥杯程序设计奖"})]),(0,l.Lk)("div",{class:"honors-item"},[(0,l.Lk)("h3",{class:"certificate-title"},"3. 第34次CCF计算机软件能力认证220分，排名前27.82%"),(0,l.Lk)("img",{class:"certificate-image",src:be,fit:"cover",alt:"CCF计算机软件能力认证"})]),(0,l.Lk)("div",{class:"honors-item"},[(0,l.Lk)("h3",{class:"certificate-title"},"4. 2024中国国际大学生创新大赛上海大学选拔赛铜奖")])],-1))),je=[_e];var xe={__name:"CertificatesInfo",setup(e){const t=(0,n.KR)(!1);(0,l.sV)((()=>{t.value=!0}));const s=e=>{e.style.opacity=0,e.style.transform="translateY(20px)"},o=(e,t)=>{e.offsetHeight,e.style.transition="opacity 0.5s ease, transform 0.5s ease",e.style.opacity=1,e.style.transform="translateY(0)",t()},r=(e,t)=>{e.style.transition="opacity 0.3s ease, transform 0.3s ease",e.style.opacity=0,e.style.transform="translateY(20px)",t()};return(e,n)=>{const i=(0,l.g2)("el-card");return(0,l.uX)(),(0,l.Wv)(i,{class:"honors-info-card",shadow:"always"},{default:(0,l.k6)((()=>[(0,l.Lk)("div",he,[(0,l.bF)(a.eB,{name:"fade-slide-up",onBeforeEnter:s,onEnter:o,onLeave:r},{default:(0,l.k6)((()=>[t.value?((0,l.uX)(),(0,l.CE)("div",ge,je)):(0,l.Q3)("",!0)])),_:1})])])),_:1})}}};const Pe=(0,d.A)(xe,[["__scopeId","data-v-1aeafc84"]]);var Fe=Pe;const Ee=[{path:"/PersonalPage",component:B},{path:"/PersonalPage/education",component:V},{path:"/PersonalPage/projects",component:N},{path:"/PersonalPage/internships",component:re},{path:"/PersonalPage/skills",component:ve},{path:"/PersonalPage/certificates",component:Fe}],Ce=(0,o.aE)({history:(0,o.LA)(),routes:Ee});var we=Ce;const We=(0,a.Ef)(b);We.use(y.A),We.use(we),We.mount("#app")}},t={};function s(a){var l=t[a];if(void 0!==l)return l.exports;var n=t[a]={exports:{}};return e[a].call(n.exports,n,n.exports,s),n.exports}s.m=e,function(){var e=[];s.O=function(t,a,l,n){if(!a){var o=1/0;for(u=0;u<e.length;u++){a=e[u][0],l=e[u][1],n=e[u][2];for(var r=!0,i=0;i<a.length;i++)(!1&n||o>=n)&&Object.keys(s.O).every((function(e){return s.O[e](a[i])}))?a.splice(i--,1):(r=!1,n<o&&(o=n));if(r){e.splice(u--,1);var c=l();void 0!==c&&(t=c)}}return t}n=n||0;for(var u=e.length;u>0&&e[u-1][2]>n;u--)e[u]=e[u-1];e[u]=[a,l,n]}}(),function(){s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,{a:t}),t}}(),function(){s.d=function(e,t){for(var a in t)s.o(t,a)&&!s.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})}}(),function(){s.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){s.p="/PersonalPage/"}(),function(){var e={524:0};s.O.j=function(t){return 0===e[t]};var t=function(t,a){var l,n,o=a[0],r=a[1],i=a[2],c=0;if(o.some((function(t){return 0!==e[t]}))){for(l in r)s.o(r,l)&&(s.m[l]=r[l]);if(i)var u=i(s)}for(t&&t(a);c<o.length;c++)n=o[c],s.o(e,n)&&e[n]&&e[n][0](),e[n]=0;return s.O(u)},a=self["webpackChunkmy_personal_page"]=self["webpackChunkmy_personal_page"]||[];a.forEach(t.bind(null,0)),a.push=t.bind(null,a.push.bind(a))}();var a=s.O(void 0,[504],(function(){return s(6076)}));a=s.O(a)})();
//# sourceMappingURL=app.2a33662a.js.map