(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{142:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(150),o=n(144),u=n(149),l=function(e){var t=e.title,n=e.date,a=e.path;return r.a.createElement("article",null,r.a.createElement("h3",null,r.a.createElement(o.Link,{to:a},t)),r.a.createElement("small",null,r.a.createElement(u.a,null,n)))};n.d(t,"query",function(){return c});t.default=function(e){var t=e.data;return r.a.createElement(i.a,null,t.allMarkdownRemark.edges.map(function(e){return r.a.createElement(l,{key:e.node.id,title:e.node.frontmatter.title,date:e.node.frontmatter.date,path:e.node.fields.slug})}))};var c="3830057741"},144:function(e,t,n){"use strict";n.r(t),n.d(t,"graphql",function(){return h}),n.d(t,"StaticQueryContext",function(){return m}),n.d(t,"StaticQuery",function(){return f});var a=n(0),r=n.n(a),i=n(4),o=n.n(i),u=n(143),l=n.n(u);n.d(t,"Link",function(){return l.a}),n.d(t,"withPrefix",function(){return u.withPrefix}),n.d(t,"navigate",function(){return u.navigate}),n.d(t,"push",function(){return u.push}),n.d(t,"replace",function(){return u.replace}),n.d(t,"navigateTo",function(){return u.navigateTo});var c=n(145),d=n.n(c);n.d(t,"PageRenderer",function(){return d.a});var s=n(33);n.d(t,"parsePath",function(){return s.a});var m=r.a.createContext({}),f=function(e){return r.a.createElement(m.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function h(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}f.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},145:function(e,t,n){var a;e.exports=(a=n(147))&&a.default||a},146:function(e){e.exports={data:{site:{siteMetadata:{title:"Hitochan's website"}}}}},147:function(e,t,n){"use strict";n.r(t);n(32);var a=n(0),r=n.n(a),i=n(4),o=n.n(i),u=n(53),l=n(2),c=function(e){var t=e.location,n=l.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(u.a,Object.assign({location:t,pageResources:n},n.json))};c.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=c},148:function(e,t,n){},149:function(e,t,n){"use strict";var a=n(0),r=n.n(a);t.a=function(e){var t,n,a=e.children;return r.a.createElement("span",null,(t=new Date(a),n={month:"short",day:"numeric"},t.getFullYear()!==(new Date).getFullYear()&&(n.year="numeric"),t.toLocaleString("en-us",n)))}},150:function(e,t,n){"use strict";var a=n(146),r=n(0),i=n.n(r),o=n(144),u=function(e){var t=e.siteTitle;return i.a.createElement("div",{style:{background:"orange",marginBottom:"1.45rem"}},i.a.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"1.45rem 1.0875rem"}},i.a.createElement("h1",{style:{margin:0}},i.a.createElement(o.Link,{to:"/",style:{color:"black",textDecoration:"none"}},t))))},l=n(151).a.footer.withConfig({displayName:"footer__Footer",componentId:"sc-1o4kh6a-0"})(["width:100%;text-align:center;min-height:3rem;background-color:orange;display:flex;flex-direction:column;justify-content:center;position:absolute;bottom:0;"]),c=function(){return i.a.createElement(l,null,i.a.createElement("div",null,"© ",(new Date).getFullYear(),", Built by"," ",i.a.createElement("a",{href:"https://github.com/hitochan777"},"hitochan777")," with love♡"))};n(148),t.a=function(e){var t=e.children;return i.a.createElement(o.StaticQuery,{query:"755544856",render:function(e){return i.a.createElement("div",{style:{position:"relative",minHeight:"100vh"}},i.a.createElement(u,{siteTitle:e.site.siteMetadata.title}),i.a.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"0px 1.0875rem 3rem"}},t),i.a.createElement(c,null))},data:a})}}}]);
//# sourceMappingURL=component---src-pages-index-tsx-1bbcf0b503a369acdddd.js.map