(this.webpackJsonpblog=this.webpackJsonpblog||[]).push([[0],{175:function(t,n,e){},176:function(t,n,e){"use strict";e.r(n);var r=e(1),o=e(0),i=e(62),c=e.n(i),a=(e(71),function(t){t&&t instanceof Function&&e.e(3).then(e.bind(null,177)).then((function(n){var e=n.getCLS,r=n.getFID,o=n.getFCP,i=n.getLCP,c=n.getTTFB;e(t),r(t),o(t),i(t),c(t)}))}),u=e(17),b=e(4),s=e(2),l=(e(72),"/github-blog"),d=e(31),f=e(3);function j(){var t=Object(s.a)(["\n\tbox-sizing: border-box;\n\tdisplay: flex;\n\twidth: 60px;\n\theight: 35px;\n\tborder: 1px solid black;\n\tborder-radius: 10px;\n\tbackground-color: white;\n\tcolor: black;\n\talign-items: center;\n\tjustify-content: center;\n\tcursor: pointer;\n"]);return j=function(){return t},t}function x(){var t=Object(s.a)(["\n\twidth: 200px;\n\theight: 50px;\n\tbox-sizing: border-box;\n\tdisplay: flex;\n\talign-items: center;\n"]);return x=function(){return t},t}function h(){var t=Object(s.a)(["\n\tdisplay: flex;\n\tflex-direction: column;\n"]);return h=function(){return t},t}function g(){var t=Object(s.a)(["\n\tbox-sizing: border-box;\n\tdisplay: flex;\n\tflex-direction: column;\n"]);return g=function(){return t},t}function p(){var t=Object(s.a)(["\n\tfont-size: 13px;\n\tbox-sizing: border-box;\n\tdisplay: flex;\n"]);return p=function(){return t},t}var O=f.b.div(p()),v=f.b.span(g());f.b.span(h()),f.b.input.attrs((function(t){return{type:"text"}}))(x()),f.b.span(j());function m(){var t=Object(s.a)(["\n\t\tfont-size: 20px;\n\t\tcolor: #eceef0;\n\t"]);return m=function(){return t},t}function y(){var t=Object(s.a)(["\n\t\tfont-size: 30px;\n\t\tcolor: #333333;\n\t\tcursor: pointer;\n\t\tfont-weight: bold;\n\t"]);return y=function(){return t},t}function C(){var t=Object(s.a)(["\n\t\twidth: 100%;\n\t\theight: 150px;\n\t\tpadding: 20px;\n\t\tbackground-color: white;\n\t"]);return C=function(){return t},t}function w(){var t=Object(s.a)(["\n\t\twidth: 100%;\n\t\theight: 300px;\n\t\tbackground-color: #999999;\n\t\tcursor: pointer;\n\t"]);return w=function(){return t},t}function k(){var t=Object(s.a)(["\n\t\t\t\t\tmargin-top: 10px;\n\t\t\t\t\tbox-shadow: rgba(0, 0, 0, 0.04) 0px 0px 10px 0px;\n\t\t\t\t"]);return k=function(){return t},t}function I(){var t=Object(s.a)(["\n\t\theight: 450px;\n\t\twidth: 100%;\n\t\tborder-radius: 6px;\n\t\toverflow: hidden;\n\t\tbox-shadow: rgba(0, 0, 0, 0.3) 0px 0px 10px 0px;\n\t\tmargin: 0px 0;\n\t\ttransition: all 0.25s;\n\t\t","\n\t"]);return I=function(){return t},t}function B(){var t=Object(s.a)(["\n\t\twidth: 50%;\n\t\theight: 470px;\n\t\tbackground-color: rgb(248, 249, 250);\n\t\tpadding: 0px 10px;\n\t"]);return B=function(){return t},t}var T=function(t){var n=t.item,e=(t.index,t.onClickBlogItem),i=Object(o.useState)(!1),c=Object(d.a)(i,2),a=c[0],u=c[1];return Object(r.jsx)(P.Container,{onClick:function(){return e(n)},children:Object(r.jsxs)(P.InnderContainer,{onMouseOver:function(){u(!0)},onMouseLeave:function(){u(!1)},mouseOver:a,children:[Object(r.jsx)(P.ImgBox,{children:Object(r.jsx)("img",{style:{width:"100%",height:"100%"},src:n.img,alt:"none"})}),Object(r.jsxs)(P.TextBox,{children:[Object(r.jsx)(_.Title,{children:n.title}),Object(r.jsx)(_.SubTitle,{children:n.date+"  |  "+n.categories})]})]})})},P={Container:Object(f.b)(v)(B()),InnderContainer:Object(f.b)(v)(I(),(function(t){if(!t.mouseOver)return Object(f.a)(k())})),ImgBox:Object(f.b)(v)(w()),TextBox:Object(f.b)(v)(C())},_={Title:Object(f.b)(O)(y()),SubTitle:Object(f.b)(O)(m())},z=e(29),S=e.n(z),D=e(30),M=e.n(D);var R=function(t){var n=t.value;return Object(r.jsx)("span",{style:{background:"#ff0"},children:n})};var J=function(t){var n=t.children,e=t.align,o={textAlin:e||"center",padding:5};return t.isHeader?(o.background="#ff0",o.border="1px solid #ccc",o.borderLeft=0,o.borderRight=0):o.borderBottom="1px solid #eee",Object(r.jsx)("td",{style:o,children:n})};function L(){var t=Object(s.a)(["\n\t\tborder-left: 5px blue solid;\n\t\tpadding-left: 30px;\n\t\tbackground-color: rgb(248, 249, 250);\n\t\tmargin: 30px 0;\n\t"]);return L=function(){return t},t}var N=function(t){var n=t.children;return Object(r.jsx)(F.Container,{children:n})},F={Container:Object(f.b)(v)(L())};function A(){var t=Object(s.a)(["\n\t\tbackground-color: #000;\n\t\tcolor: #fff;\n\t\tpadding: 50px;\n\t\twidth: 100%;\n\t"]);return A=function(){return t},t}var q=function(t){var n=t.value;return Object(r.jsx)(E.Container,{style:{background:"#000",color:"#fff",padding:50},children:Object(r.jsx)("code",{children:n})})},E={Container:f.b.pre(A())};e(61);var K=function(){return Object(r.jsx)(S.a,{plugins:[M.a],source:'\n         \n\n# Page 12\n\nCreated: Dec 16, 2020 11:15 PM\n\n# Git hub \ube14\ub85c\uadf8 \ub9cc\ub4e4\uae301.\n\n> \uac1c\ubc1c \uc5f0\ucc28\uac00 \uc870\uae08\uc529 \uc313\uc774\ub2e4 \ubcf4\ub2c8 \uc5b4\ub290\uc21c\uac04 \ube14\ub85c\uadf8\ub97c \ud558\uaca0\ub2e4\uace0 \uc120\ud3ec\ud558\uace0 \ub2e4\ub154\ub2e4. \ud558\uc9c0\ub9cc \ud604 \uc9c1\uc7a5\uc73c\ub85c \uc774\uc9c1\ud558\uace0 \ubc14\uc05c \uc5c5\ubb34\uc5d0 \uce58\uc5ec \uc0dd\ud65c\ud558\uae30\ub97c 1\ub144\uc774 \ub118\uc5b4... \uc2dc\uac04\uc774 \uc5c6\ub2e4\ub294 \ud551\uacc4\ub85c \ud56d\uc0c1 \ubbf8\ub904\uc654\ub2e4. \uc774\uc9c1\uc744 \uc704\ud574 \uc0c8\ub85c \ud3ec\ud2b8\ud3f4\ub9ac\uc624\ub97c \uc791\uc131\ud558\uba70, 1\ub144\uac04 \ub9ce\uc740 \uc77c\ub4e4\uc744 \ud588\ub2e4\ub294 \ubfcc\ub4ef\ud55c \ub9c8\uc74c \ud55c\ud3b8\uc73c\ub85c\ub294 \ube14\ub85c\uadf8\uc5d0 \ub300\ud55c \uc544\uc26c\uc6c0\uc774 \uac00\ub4dd\ud588\ub2e4.\n\n### \uadf8\ub798 \uc774\uc81c\ub294 \uc2dc\uc791\ud574\uc57c\uc9c0..\n\n\ube14\ub85c\uadf8\ub97c \uc2dc\uc791\ud558\ub294 \ubc29\ubc95\uc740 \ucc38 \ub2e4\uc591\ud558\ub2e4. Medium, Velog, T-story \ub4f1 \ube14\ub85c\uadf8 \uc804\uc6a9 \ud50c\ub81b\ud3fc\ub4e4\ub3c4 \uc0c1\ub2f9\ud788 \ub9ce\ub2e4. \uc774\uac83\ub4e4\uc758 \uc11c\ub85c\ub2e4\ub978 \uc7a5\ub2e8\uc740 \uc788\uc9c0\ub9cc \uadf8\uac83\uc744 \ub530\uc9c0\uae30 \uc774\uc804\uc5d0 \uac1c\ubc1c\uc790\uc758 \ud0c0\uc774\ud2c0\uc744 \ub2ec\uace0 \uadf8\ub798\ub3c4 \ube14\ub85c\uadf8\ub294 \uc9c1\uc811 \ub9cc\ub4e4\uc5b4\uc57c \ud558\uc9c0 \uc54a\ub098 \uc2f6\uc5c8\ub2e4. \ud558\uc9c0\ub9cc \ube14\ub85c\uadf8\ub97c \uc9c1\uc811 \ub9cc\ub4dc\ub294 \uac83\uc740 \ub9ce\uc740 \ube44\uc6a9\uc774 \uc18c\uc694\ub41c\ub2e4. \ubb3c\ub860 \uadf8\ub807\uac8c \uc5b4\ub824\uc6b4 \uc791\uc5c5\uc740 \uc544\ub2c8\ub098 \ud504\ub860\ud2b8, \ubc31, \uc11c\ubc84, DB, \ud638\uc2a4\ud305 \ub4f1 \uc2e0\uacbd\uc368\uc57c \ud560 \uac83\uc774 \ub108\ubb34 \ub9ce\uace0 \uacb0\uc815\uc801\uc73c\ub85c \uc11c\ubc84 \ube44\uc6a9\uacfc \ub3c4\uba54\uc778 \ube44\uc6a9\uc740 \ud53c\ud560 \uc218 \uc5c6\ub2e4\ub294 \uac83\uc774\uc5c8\ub2e4. \ubb3c\ub860 \ud504\ub9ac\ud2f0\uc5b4 \uacc4\uc815\uc5d0 \ubb34\ub8cc \ub3c4\uba54\uc778\uc744 \uc0ac\uc6a9\ud560 \uc218 \uc788\uaca0\uc9c0\ub9cc \ud504\ub9ac\ud2f0\uc5b4\uac00 \ub05d\ub09c\uc9c0\ub3c4 \uc624\ub798\uc774\uace0 \ud504\ub9ac\ud2f0\uc5b4 \ubbff\uace0 \uacfc\ub3c4\ud558\uac8c \uc0ac\uc6a9\ud558\ub2e4 \uba87 \uc2ed \ub9cc\uc6d0\uc774 \uae68\uc9c4 \uc801\uc774 \uc788\ub2e4.\n\n### \ud56d\uc0c1 \uc2dc\uc791\uc740 \uae30\ud68d\ubd80\ud130!\n\n\ubaa8\ub4e0 \ud504\ub85c\uc81d\ud2b8\ub294 \uc694\uad6c\uc0ac\ud56d\uc5d0 \ub300\ud55c \uc815\uc758\uc5d0\uc11c \uc2dc\uc791\ub41c\ub2e4. \ud074\ub77c\uc774\uc5b8\ud2b8(\ub098)\uc758 \uc694\uad6c\uc0ac\ud56d\uc740 \ub2e4\uc74c\uacfc \uac19\ub2e4.\n\n1. \ube14\ub85c\uadf8 \uc804\uc6a9 \ud50c\ub81b\ud3fc\uc744 \uc0ac\uc6a9\ud558\uc9c0 \uc54a\uc544\uc57c \ud55c\ub2e4.\n2. \uc790\uc720\ub3c4\uac00 \ub192\uc558\uc73c\uba74 \uc88b\uaca0\ub2e4.(\uae30\ubd84\uc5d0 \ub530\ub77c \ub514\uc790\uc778\uc774 \uc790\uc8fc \ubc14\ub014 \uc608\uc815)\n3. \uad11\uace0\ub3c4 \uac8c\uc7ac\ud560 \uc218 \uc788\uc5c8\uc73c\uba74 \uc88b\uaca0\ub2e4.\n4. \uc0ac\ub78c\ub4e4\uacfc \uc18c\ud1b5\ud560 \uc218 \uc788\uac8c \ub313\uae00 \uae30\ub2a5\ub3c4 \ud3ec\ud568\ub418\uc5c8\uc73c\uba74 \uc88b\uaca0\ub2e4.\n5. \ucd08\uae30 \ud22c\uc790 \ube44\uc6a9\uc740 \uc801\uc5c8\uc73c\uba74 \uc88b\uaca0\ub2e4.\n6. \ub098\uc758 \uc2a4\ud0dd\uc744 \ucd5c\ub300\ud55c \ud65c\uc6a9\ud560 \uc218 \uc788\uc5c8\uc73c\uba74 \uc88b\uaca0\ub2e4.\n\n\uc704\uc758 \ubaa8\ub4e0 \uc694\uad6c\uc0ac\ud56d\uc744 \ucda9\uc871\ud560 \uc218 \uc788\ub294 \ubc29\uc548\uc740 "github page" \uc774\ub2e4. github page\ub294 github\uc5d0\uc11c \uc81c\uacf5\ud558 \ud638\uc2a4\ud305 \uc11c\ube44\uc2a4\uc758 \uc77c\uc885\uc73c\ub85c github \uacc4\uc815\ub2f9 \ud55c\uac1c\uc529 \ud2b9\ubcc4\ud55c \uc81c\ud55c\uc5c6\uc774 \uc0ac\uc6a9\ud560 \uc218 \uc788\ub2e4. " githubId.github.io"\ub97c \ub3c4\uba54\uc778\uc73c\ub85c \uc0ac\uc6a9\ud560 \uc218 \uc788\uc73c\uba70 \uc815\uc801 \ud398\uc774\uc9c0 \ud615\ud0dc\ub85c \ube14\ub85c\uadf8\ub97c \ub9cc\ub4e4 \uc218 \uc788\ub2e4. \ub2e4\uc591\ud55c \uc9c0\ud0ac(jekyll) \ud15c\ud50c\ub9bf\uc744 \uc801\uc6a9\ud560 \uc218 \uc788\uace0, react \ub4f1\uc758 js \ub77c\uc774\ube0c\ub7ec\ub9ac\ub97c \uc774\uc6a9\ud558\uc5ec \uc790\uc720\ub3c4 \ub192\uc740 \ube14\ub85c\uadf8\ub97c \ub9cc\ub4e4 \uc218 \uc788\ub2e4.\n\n```\njs\n```\n\n### \uc55e\uc73c\ub85c\uc758 \uacc4\ud68d\n\n\ucd5c\ub300\ud55c \ub9ce\uc740 \uc2a4\ud0dd\uc744 \ud65c\uc6a9\ud558\uc5ec \uc9c0\ub8e8\ud558\uc9c0 \uc54a\uac8c \ub2e8\uae30\uac04\uc5d0 \ube14\ub85c\uadf8\ub97c \ub9cc\ub4e4\uace0\uc790 \ud55c\ub2e4. \ucda9\ubd84\ud55c \uc790\ub8cc\uc870\uc0ac \ud6c4 \ub2e4\uc74c\uacfc \uac19\uc740 \uac1c\ubc1c \uc2a4\ud0dd\uc744 \uc815\uc758 \ud558\uc600\ub2e4.\n\n- React JS\n- Node JS\n- Github\n- Disqus\n- MarkDown\n- Javascript / Typescript\n- Jest\n- Firebase admob\n\n\ub9e4\uc6b0 \ubc14\uc05c \uc774 \uc2dc\uae30\uc5d0 \uc774\ub807\uac8c \uac1c\uc778\ud504\ub85c\uc81d\ud2b8\ub97c \ud558\ub294 \uac83\uc774 \ub098\uc758 \uc815\uc2e0 \uac74\uac15\uc5d0 \uc88b\uc744\uc9c0 \uc758\uc2ec\uc774\ub418\uae34 \ud558\uc9c0\ub9cc, \ubb34\uc5b8\uac00 \uc0c8\ub85c \uc2dc\uc791\ud55c\ub2e4\ub294 \uac83\uc740 \ub298 \uc124\ub808\ub294 \uc77c\uc774\uae30\uc5d0 \uc55e\uc73c\ub85c \uc2a4\ud2b8\ub808\uc2a4\ub3c4 \uc990\uac70\uc6c0\ub3c4 \uae30\ub300\uac00 \ub41c\ub2e4. \uc774 \uce74\ud14c\uace0\ub9ac\uc758 Version0 \uac00 \uc644\uc131\ub418\uace0 \ub0b4\uac00 \ub9cc\ub4e0 \ube14\ub85c\uadf8\uc5d0 \uc774 \uae00\uc774 \uac8c\uc7ac\ub418\uba74 \uc5bc\ub9c8\ub098 \ubfcc\ub4ef\ud560\uae4c... \uae30\ub300\ub41c\ub2e4.\n\n    ',renderers:{code:q,tableCell:J,inlineCode:R,blockquote:N}})};var V=function(){return Object(r.jsx)(S.a,{plugins:[M.a],source:"\n         \n\n## TEST2 \uc785\ub2c8\ub2e4.\n\n> \uc774\uac74 \ud14c\uc2a4\ud2b8\uc5d0\uc694\n\n1. \uc548\ub155\ud558\uc138\uc694.\n2. \ud14c\uc2a4\ud2b82\n3. \uc785\ub2c8\ub2e4.\n\n    ",renderers:{code:q,tableCell:J,inlineCode:R,blockquote:N}})},W={Post_0:{component:"",path:"../src/_posts/test1.md",fileName:"Post_0",title:"\ube14\ub85c\uadf8\ub9cc\ub4e4\uae30",author:"Xenossys",date:"2020-12-15 16:00:00 +0800",categories:"[React-Native]",tags:"[React-native, error, test]",img:"https://user-images.githubusercontent.com/68272155/103173725-3076ee80-48a0-11eb-9ea4-ac50925bb99f.png",toc:"false"},Post_1:{component:"",path:"../src/_posts/test2.md",fileName:"Post_1",title:"\ub3c4\ucee4 \uc124\uce58\ud558\uae30 (ubuntu 18)",author:"Xenossys",date:"2020-12-15 16:00:00 +0800",categories:"[React-Native, KKK]",img:"https://pbs.twimg.com/profile_images/1273307847103635465/lfVWBmiW_400x400.png",tags:"[react-native, android, error]",toc:"false"}};W.Post_0.component=K,W.Post_1.component=V;var X=function(){var t=Object(b.g)(),n=function(n){console.log(n),t.push("/github-blog/posts/".concat(n.title+"-"+n.fileName))};return Object(r.jsx)("div",{style:{display:"flex",width:"100%",flex:1,justifyContent:"space-between",alignItems:"flex-start",alignSelf:"flex-start",flexDirection:"row",flexWrap:"wrap"},children:Object.keys(W).map((function(t,e){return Object(r.jsx)(T,{onClickBlogItem:n,item:W[t],index:e})}))})};var G=function(){return Object(r.jsx)("div",{style:{width:"100%",height:"100%",backgroundColor:"red",justifyContent:"center",alignItems:"center"},children:"Tag"})};var H=function(){return Object(r.jsx)("div",{style:{width:"100%",height:"100%",backgroundColor:"red",justifyContent:"center",alignItems:"center"},children:"Category"})};var Q=function(){return Object(r.jsx)("div",{style:{width:"100%",height:"100%",backgroundColor:"blue",justifyContent:"center",alignItems:"center"},children:"About"})};var U=function(){var t=Object(b.h)().params,n=Object(o.useState)(""),e=Object(d.a)(n,2),i=e[0],c=e[1];return Object(o.useEffect)((function(){if(t&&t.postId){var n=t.postId.split("-"),e=t.postId.split("-")[n.length-1];c(e)}}),[]),Object(r.jsx)("div",{style:{display:"flex",width:"100%",flex:1,justifyContent:"flex-start",alignItems:"flex-start",flexDirection:"column"},children:""!==i&&W[i].component()})};e(175);function Y(){var t=Object(s.a)(["\n\t\tfont-size: 30px;\n\t\tcolor: #333333;\n\t\tcursor: pointer;\n\t\tfont-weight: bold;\n\t"]);return Y=function(){return t},t}function Z(){var t=Object(s.a)(["\n\t\tflex: 1;\n\t\theight: 100%;\n\t\tjustify-content: center;\n\t\tfont-size: 30px;\n\t"]);return Z=function(){return t},t}function $(){var t=Object(s.a)(["\n\t\twidth: 100%;\n\t\theight: 100%;\n\t\tflex-direction: row;\n\t\talign-items: center;\n\t\tjustify-content: center;\n\t"]);return $=function(){return t},t}var tt=function(){var t=Object(b.g)();return Object(r.jsxs)(nt.Container,{children:[Object(r.jsx)(nt.LogoBox,{children:"Xenossy"}),Object(r.jsx)(et.Title,{onClick:function(){t.push("/github-blog/about")},children:"about"})]})},nt={Container:Object(f.b)(v)($()),LogoBox:Object(f.b)(v)(Z())},et={Title:Object(f.b)(O)(Y())};function rt(){var t=Object(s.a)(["\n\t\tdisplay: flex;\n\t\twidth: 100%;\n\t\talign-items: center;\n\t\tflex-direction: column;\n\t"]);return rt=function(){return t},t}function ot(){var t=Object(s.a)(["\n\t\tflex: 1;\n\n\t\twidth: 100%;\n\t\t/* height: 100%; */\n\t"]);return ot=function(){return t},t}function it(){var t=Object(s.a)(["\n\t\twidth: 100%;\n\t\theight: 70px;\n\t\t/* border-bottom: 1px black solid; */\n\t\tjustify-content: center;\n\t"]);return it=function(){return t},t}function ct(){var t=Object(s.a)(["\n\t\tmargin: 0px auto;\n\t\twidth: 100%;\n\t\tmax-width: 1000px;\n\t"]);return ct=function(){return t},t}function at(){var t=Object(s.a)(["\n\t\twidth: 100%;\n\t\theight: 100vh;\n\t\tflex-direction: column;\n\t\tbackground-color: rgb(248, 249, 250);\n\t\toverflow-y: scroll;\n\t"]);return at=function(){return t},t}var ut=function(){return Object(r.jsx)(bt.Container,{children:Object(r.jsxs)(bt.InnerContainer,{children:[Object(r.jsx)(bt.TabMenuBox,{children:Object(r.jsx)(tt,{})}),Object(r.jsx)(bt.ContentsArea,{children:Object(r.jsx)(bt.RouterBox,{children:(console.log(l+"/home"),Object(r.jsxs)(b.d,{children:[Object(r.jsx)(b.b,{path:l+"/home",component:X,exact:!0}),Object(r.jsx)(b.b,{path:l+"/tags",component:G}),Object(r.jsx)(b.b,{path:l+"/posts/:postId",component:U}),Object(r.jsx)(b.b,{path:l+"/category",component:H,exact:!0}),Object(r.jsx)(b.b,{path:l+"/about",component:Q,exact:!0}),Object(r.jsx)(b.a,{from:l,to:l+"/home"})]}))})})]})})},bt={Container:Object(f.b)(v)(at()),InnerContainer:Object(f.b)(v)(ct()),TabMenuBox:Object(f.b)(v)(it()),ContentsArea:Object(f.b)(v)(ot()),RouterBox:Object(f.b)(v)(rt())};c.a.render(Object(r.jsx)(u.a,{children:Object(r.jsxs)(b.d,{children:[Object(r.jsx)(b.b,{path:l,component:ut}),Object(r.jsx)(b.a,{from:"/",to:"/github-blog/home"})]})}),document.getElementById("root")),a()},61:function(t,n,e){},71:function(t,n,e){},72:function(t,n,e){}},[[176,1,2]]]);
//# sourceMappingURL=main.74ff62fb.chunk.js.map