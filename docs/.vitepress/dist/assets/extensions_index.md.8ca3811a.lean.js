import{o as p,c as m,a as t,t as l,n as c,b as d,d as i}from"./app.a2671795.js";const u={class:"extension-card"},h={class:"extension-card-info"},g={class:"extension-card-description"},w={class:"extension-card-install"},r={__name:"index",props:{name:{type:String,default:""},homePage:{type:String,default:""},author:{type:String,default:""},authorHomePage:{type:String,default:""},description:{type:String,default:""},zip:{type:String,default:""},composer:{type:String,default:""}},setup(e){const s=a=>{window.open(a)};return(a,o)=>(p(),m("div",u,[t("div",h,[t("div",{class:"extension-card-name cursor-pointer",title:"打开扩展主页",onClick:o[0]||(o[0]=n=>s(e.homePage))},l(e.name),1),t("div",{class:"extension-card-author cursor-pointer",title:"打开作者主页",onClick:o[1]||(o[1]=n=>s(e.authorHomePage))},l(e.author),1)]),t("div",g,l(e.description),1),t("div",w,[t("div",{class:c(["extension-card-zip cursor-pointer",{"hide-box":!e.zip}]),onClick:o[2]||(o[2]=n=>s(e.zip))}," zip下载 ",2),d("   "),t("div",{class:c(["extension-card-composer cursor-pointer",{"hide-box":!e.composer}]),onClick:o[3]||(o[3]=n=>s(e.composer))}," 复制命令 ",2)])]))}},x=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"extensions/index.md","lastUpdated":1677165072000}'),y={name:"extensions/index.md"},f=Object.assign(y,{setup(e){return(s,a)=>(p(),m("div",null,[t("div",null,[i(r,{name:"登录保护","home-page":"https://gitee.com/slowlyo/slow-login-guard",author:"slowlyo","author-home-page":"https://gitee.com/slowlyo",description:"登录保护，防止暴力破解密码",composer:"composer require slowlyo/slow-login-guard",zip:"https://gitee.com/slowlyo/slow-login-guard/repository/archive/master.zip"}),i(r,{name:"后台功能-通知公告管理","home-page":"https://gitee.com/slowlyo/slow-module-notice",author:"slowlyo","author-home-page":"https://gitee.com/slowlyo",description:"增加通知公告管理",composer:"composer require slowlyo/slow-notice",zip:"https://gitee.com/slowlyo/slow-module-notice/repository/archive/master.zip"}),i(r,{name:"数据字典","home-page":"https://gitee.com/slowlyo/slow-dict",author:"slowlyo","author-home-page":"https://gitee.com/slowlyo",description:"增加数据字典功能",composer:"composer require slowlyo/slow-dict",zip:"https://gitee.com/slowlyo/slow-dict/repository/archive/master.zip"}),i(r,{name:"amis json 解析","home-page":"https://gitee.com/slowlyo/slow-amis-json-parse",author:"slowlyo","author-home-page":"https://gitee.com/slowlyo",description:"将 amis json schema 转换成 php 代码",composer:"composer require slowlyo/slow-amis-json-parse",zip:"https://gitee.com/slowlyo/slow-amis-json-parse/repository/archive/master.zip"})])]))}});export{x as __pageData,f as default};
