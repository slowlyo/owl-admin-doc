import{_ as e,o as a,c as s,e as o}from"./app.e7e3e4cf.js";const m=JSON.parse('{"title":"使用扩展","description":"","frontmatter":{"title":"使用扩展"},"headers":[{"level":2,"title":"设置扩展相关目录读写权限","slug":"设置扩展相关目录读写权限","link":"#设置扩展相关目录读写权限","children":[{"level":3,"title":"扩展安装","slug":"扩展安装","link":"#扩展安装","children":[]},{"level":3,"title":"启用扩展","slug":"启用扩展","link":"#启用扩展","children":[]}]}],"relativePath":"guide/extensions/use.md","lastUpdated":1676533519000}'),n={name:"guide/extensions/use.md"},d=o(`<h1 id="使用扩展" tabindex="-1">使用扩展 <a class="header-anchor" href="#使用扩展" aria-hidden="true">#</a></h1><h2 id="设置扩展相关目录读写权限" tabindex="-1">设置扩展相关目录读写权限 <a class="header-anchor" href="#设置扩展相关目录读写权限" aria-hidden="true">#</a></h2><p>在使用扩展功能之前，需要先保证所在用户拥有扩展相关目录的读写权限，否则可能造成扩展安装失败，请保证拥有以下几个目录的读写权限</p><ol><li><code>项目目录/extensions</code> 扩展的安装目录，可以根据配置参数 <code>admin.extension.dir</code> 进行更改</li><li><code>resources/admin-views</code> 扩展前端文件发布目录</li><li><code>lang</code> 语言包目录</li></ol><h3 id="扩展安装" tabindex="-1">扩展安装 <a class="header-anchor" href="#扩展安装" aria-hidden="true">#</a></h3><p><code>Slow Admin</code>中扩展支持以下两种安装方式，安装成功后均能在<code>开发/扩展</code> 功能中看到相关扩展信息</p><br><h4 id="_1-本地安装" tabindex="-1">1.本地安装 <a class="header-anchor" href="#_1-本地安装" aria-hidden="true">#</a></h4><p>下载扩展的<code>zip</code>压缩包，注意必须是<code>zip</code>格式，然后打开扩展管理，然后点击表格工具栏的<code>本地安装</code> 按钮上传提交即可。</p><h4 id="_2-composer安装" tabindex="-1">2.composer安装 <a class="header-anchor" href="#_2-composer安装" aria-hidden="true">#</a></h4><p>根据扩展开发者文档提供的说明，直接使用composer安装即可</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">composer</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">require</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">{扩展名称}</span></span>
<span class="line"></span></code></pre></div><h3 id="启用扩展" tabindex="-1">启用扩展 <a class="header-anchor" href="#启用扩展" aria-hidden="true">#</a></h3><p>安装之后，需要在扩展管理页面启用扩展</p>`,14),i=[d];function c(t,r,l,p,h,_){return a(),s("div",null,i)}const x=e(n,[["render",c]]);export{m as __pageData,x as default};