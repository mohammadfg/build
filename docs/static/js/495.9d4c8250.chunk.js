"use strict";(self.webpackChunkfilmnet=self.webpackChunkfilmnet||[]).push([[495],{6630:function(e,t,r){r.d(t,{V:function(){return c}});var n=r(4165),a=r(1413),s=r(5861);function c(e,t){return i.apply(this,arguments)}function i(){return(i=(0,s.Z)((0,n.Z)().mark((function e(t,r){var s,c,i,l;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:s="https://core.gapfilm.ir/api/v3.3/GetFirstPageByPlatform?",c={PageIndex:0,PageSize:10,ContentRows:18,PlatformId:1,PageType:1,PlatformType:1,ParentType:2},e.t0=t,e.next="Home"===e.t0?5:"Movies"===e.t0?7:"Crime"===e.t0?9:"Actions"===e.t0?11:"Adventure"===e.t0?13:"History"===e.t0?15:"Horror"===e.t0?18:"Mystery"===e.t0?20:"Kids"===e.t0?23:"Search"===e.t0?25:"Related"===e.t0?28:31;break;case 5:return c.PlatformId=1,e.abrupt("break",33);case 7:return c.ParentEntityId=6,e.abrupt("break",33);case 9:return c.PlatformId=7,e.abrupt("break",33);case 11:return c.PlatformId=10,e.abrupt("break",33);case 13:return c.PlatformId=17,e.abrupt("break",33);case 15:return c.PlatformId=15,c.ContentRows=r,e.abrupt("break",33);case 18:return c.PlatformId=16,e.abrupt("break",33);case 20:return c.PlatformId=22,c.ContentRows=r,e.abrupt("break",33);case 23:return c.PlatformId=9,e.abrupt("break",33);case 25:return s="https://core.gapfilm.ir/api/v3.2/AdvanceSearchContent?Title="+r+"&OrderBy=updatedate& Order=desc&PageSize=10&PageIndex=0&AgeRangeId=5",c={},e.abrupt("break",33);case 28:return s="https://core.gapfilm.ir/api/v4.0/Contents/"+r+"/RelatedContents?OrderBy=ContentId&PageSize=12&PageIndex=0&Zones=3,4&AgeRangeId=5",c={},e.abrupt("break",33);case 31:return s="https://core.gapfilm.ir/api/v3.1/GetContent?Id="+t+"&",e.abrupt("break",33);case 33:return e.prev=33,i=new URLSearchParams(c).toString(),e.next=37,fetch(s+i,{headers:{accept:"application/json, text/plain, */*",sourceenvironment:"Website"}});case 37:return l=e.sent,e.t1=a.Z,e.t2=a.Z,e.t3={},e.next=43,l.json();case 43:return e.t4=e.sent,e.t5=(0,e.t2)(e.t3,e.t4),e.t6={},e.next=48,l.status;case 48:return e.t7=e.sent,e.t8={Status:e.t7},e.abrupt("return",(0,e.t1)(e.t5,e.t6,e.t8));case 53:return e.prev=53,e.t9=e.catch(33),e.abrupt("return",{Status:402,message:"\u062e\u0637\u0627\u06cc\u06cc \u0631\u062e \u062f\u0627\u062f\u0647 \u0627\u0633\u062a . \u0644\u0637\u0641\u0627 \u0627\u062a\u0635\u0627\u0644 \u062e\u0648\u062f \u0631\u0627 \u0628\u0631\u0633\u06cc \u06a9\u0646\u06cc\u062f"});case 56:case"end":return e.stop()}}),e,null,[[33,53]])})))).apply(this,arguments)}},9229:function(e,t,r){r.d(t,{Z:function(){return a}});r(2791);var n=r(184);function a(){return(0,n.jsx)("footer",{children:(0,n.jsxs)("div",{className:"flex justify-center items-center w-full flex-col",children:[(0,n.jsxs)("div",{className:"flex border rounded-full mb-2 justify-center items-center gap-x-4 px-3",children:[(0,n.jsx)("a",{href:"https://t.me/mohamaadfg",target:"_blank",rel:"noreferrer",children:(0,n.jsx)("img",{src:"/icons/telegram.svg",alt:"telegram",className:"w-8"})}),(0,n.jsx)("a",{href:"mailto:mohamadfg822@gmail.com",target:"_blank",rel:"noreferrer",children:(0,n.jsx)("img",{src:"/icons/email.svg",alt:"email",className:"w-8 p-1"})}),(0,n.jsx)("a",{href:"/",target:"_blank",rel:"noreferrer",children:(0,n.jsx)("img",{src:"/icons/whatsapp.svg",alt:"whatsapp",className:"w-8 p-1"})})]}),(0,n.jsx)("p",{className:"text-sm text-center p-2 bg-zinc-800 w-full",children:"\u06a9\u0644\u06cc\u0647\u200c\u06cc \u062d\u0642\u0648\u0642 \u0645\u0627\u062f\u06cc \u0648 \u0645\u0639\u0646\u0648\u06cc \u0627\u067e\u0644\u06cc\u06a9\u06cc\u0634\u0646 \xab\u0646\u062a \u0641\u06cc\u0644\u0645\xbb \u0645\u062a\u0639\u0644\u0642 \u0628\u0647 \u062f\u0627\u0646\u0634\u06a9\u062f\u0647 \u0641\u0646\u06cc \u0648 \u062d\u0631\u0641\u0647 \u0627\u06cc \u062e\u0648\u0631\u0627\u0632\u0645\u06cc \u0627\u0633\u062a."})]})})}},7599:function(e,t,r){r.d(t,{Z:function(){return f}});var n=r(4165),a=r(5861),s=r(9439),c=r(1087),i=r(2791),l=r(184);function o(e){var t=e.title,r=e.summery,n=e.id;return(0,l.jsx)("li",{className:"mt-3 border-b p-2 border-b-zinc-900",children:(0,l.jsxs)(c.rU,{to:"/contents/".concat(n),className:"flex gap-3",children:[(0,l.jsx)("img",{loading:"lazy",className:"rounded-md w-36",src:"https://cdn.tek-nic.com/image/362/panel/"+n+"/portrait.jpg",alt:"poster"}),(0,l.jsxs)("div",{className:"flex-col",children:[(0,l.jsx)("p",{className:"text-2xl text-right",children:t}),(0,l.jsx)("p",{className:"h-16 overflow-hidden",children:r})]})]})})}var u=r(307),p=r(6630),d=r(9085),m=(r(5462),r(8062));function f(){var e=(0,i.useState)(!1),t=(0,s.Z)(e,2),r=t[0],f=t[1],x=(0,i.useState)(!1),h=(0,s.Z)(x,2),g=h[0],b=h[1],v=(0,i.useState)(""),j=(0,s.Z)(v,2),w=j[0],k=j[1],y=(0,i.useState)(),N=(0,s.Z)(y,2),Z=N[0],I=N[1];function C(){return P.apply(this,arguments)}function P(){return(P=(0,a.Z)((0,n.Z)().mark((function e(){var t,r;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("object"==typeof w){e.next=6;break}return e.next=3,(0,p.V)("Search",w);case 3:t=e.sent,r=t.Contents,k(r);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function S(){window.scrollY>=200?f(!0):f(!1)}return(0,i.useEffect)((function(){return(0,u.PO)().then((function(e){I(e)})),C(),window.addEventListener("scroll",S),function(){window.removeEventListener("scroll",S)}}),[]),(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(d.Ix,{rtl:!0,position:"top-right",style:{padding:"10px"}}),(0,l.jsxs)("nav",{className:"fixed mt-10 p-3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-[3] rounded-xl w-11/12 container transition ".concat(r?"bg-[#ffffff21]":"bg-transparent"),children:[(0,l.jsx)("a",{href:"/",className:"float-right",onClick:function(e){e.preventDefault(),window.location.replace("/")},children:(0,l.jsx)("img",{src:"/images/logo.svg",alt:"logo",className:"h-6"})}),Z?(0,l.jsxs)("div",{className:"float-left mx-1  p-1 px-3 group",children:[(0,l.jsx)("img",{src:"/icons/user.svg",alt:"Profile"}),(0,l.jsx)("button",{className:"absolute rounded-md text-black bg-white group-hover:block hidden py-1 px-4 mt-1 text-xs",onClick:function(){(0,u.ni)(),d.Am.success("\u0628\u0627 \u0645\u0648\u0641\u0642\u06cc\u062a \u0627\u0632 \u062d\u0633\u0627\u0628 \u062e\u0648\u062f \u062e\u0627\u0631\u062c \u0634\u062f\u06cc\u062f"),I()},children:"\u062e\u0631\u0648\u062c"})]}):(0,l.jsx)(c.rU,{to:"/login",className:"float-left bg-slate-200 mx-1 rounded-md p-1 px-3 text-black",children:"\u0648\u0631\u0648\u062f"}),(0,l.jsx)("button",{to:"/",className:"float-left m-1 mb-0 mx-3",onClick:function(){b(!0)},children:(0,l.jsx)("img",{src:"/icons/search.svg",alt:"search"})})]}),(0,l.jsxs)("div",{className:"fixed z-[3] flex bg-[#000000e3]  transition-all duration-300 ease-in-out w-full h-full justify-center items-center ".concat(g?"visible opacity-100":"invisible opacity-0"),onClick:function(){b(!1)},children:[(0,l.jsx)("button",{className:"text-red-700 absolute top-4 right-4 text-4xl p-2 z-[1] bg-[#4242428a] rounded-full pb-0",onClick:function(){b(!1)},children:"X"}),(0,l.jsxs)("div",{className:"flex-col w-full flex items-center h-full overflow-y-scroll",children:[(0,l.jsxs)("div",{className:"relative w-11/12 mt-32",onClick:function(e){e.stopPropagation()},children:[(0,l.jsx)("input",{type:"text",placeholder:"\u062c\u0633\u062a\u062c\u0648\u06cc \u0627\u0646\u0648\u0627\u0639 \u0641\u06cc\u0644\u0645 \u0648 \u0627\u0646\u06cc\u0645\u06cc\u0634\u0646",className:"bg-stone-900 rounded-md p-4 w-full",onChange:function(e){k(e.target.value)},onKeyDown:function(e){"Enter"===e.key&&C()}}),(0,l.jsx)("button",{className:"absolute mt-[14px] -mr-11",onClick:C,children:(0,l.jsx)("img",{src:"/icons/search.svg",alt:"search"})})]}),(0,l.jsx)("ul",{className:"p-3 sm:w-4/5 w-full",children:Array.isArray(w)?w.length>=1?w.map((function(e){var t=e.Title,r=e.Summary,n=e.ContentID;if(4===e.ZoneID)return(0,l.jsx)(o,{title:t,summery:r,id:n},n)})):(0,l.jsx)(m.J5,{src:"/animation/search.json",loop:!0,autoplay:!0,style:{width:"150px"}}):null})]})]})]})}},6156:function(e,t,r){r.d(t,{Z:function(){return i}});var n=r(1413),a=r(1087),s=r(184),c=r(2791);function i(e){var t=e.listValue,r=e.title,n=e.background,c=e.sectionsCount;if(4===t[0].ZoneId||t.length>=2)return(0,s.jsxs)("div",{className:"p-4 pt-0 bg-cover sm:bg-contain"+(n.length>0?" h-80 sm:h-[400px]":""),style:n.length>0?{backgroundImage:" url(".concat(t.length>2?n:"https://cdn.tek-nic.com/media/images/panel/"+t[0].ContentId+"/landscape9x4.jpg",")"),backgroundRepeat:"no-repeat"}:null,children:[(0,s.jsx)("h3",{className:"sm:text-4xl text-2xl pt-2",children:r}),(0,s.jsx)("div",{className:"relative "+(1===t.length?" mt-6":"mt-2"),children:t.length>=2?(0,s.jsx)("ul",{className:"lists flex flex-wrap justify-center overflow-x-scroll",children:c>3||void 0===c?(0,s.jsx)("swiper-container",{"update-on-window-resize":"true",width:"130","centered-slides":"true",style:{"--swiper-navigation-size":"20px","--swiper-navigation-color":"#fff"},navigation:!0,children:(0,s.jsx)(l,{props:t})}):(0,s.jsx)(l,{props:t,cloumns:!0})}):(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(a.rU,{to:"/contents/"+t[0].ContentId,className:"bg-green-600 text-black rounded-md p-2 mx-3",children:"\u062a\u0645\u0627\u0634\u0627 \u06a9\u0646\u06cc\u062f"}),(0,s.jsx)(a.rU,{to:"/contents/"+t[0].ContentId,className:"bg-slate-200 text-black rounded-md p-2",children:"\u0627\u0637\u0644\u0627\u0639\u0627\u062a \u0628\u06cc\u0634\u062a\u0631"})]})})]})}function l(e){var t=e.props,r=e.cloumns;return t.map((function(e){var t=e.ContentId,a=e.ZoneId,i=e.ZoneID,l=e.ContentID;return 4!==a&&4!==i||!r?4===a||4===i?(0,s.jsx)("swiper-slide",{children:(0,s.jsx)(o,(0,n.Z)({},e))},null!==t&&void 0!==t?t:l):void 0:(0,c.createElement)(o,(0,n.Z)((0,n.Z)({},e),{},{key:null!==t&&void 0!==t?t:l,responsible:"true"}))}))}function o(e){var t=e.ContentId,r=e.Title,n=e.Properties,c=e.ContentID,i=e.responsible;return(0,s.jsx)("li",{className:"p-1 flex-shrink-0 mb-2 group"+(i?" sm:w-32 w-40":" w-32"),children:(0,s.jsxs)(a.rU,{to:"/contents/".concat(null!==t&&void 0!==t?t:c),children:[(0,s.jsxs)("div",{className:"relative",children:[(0,s.jsx)("img",{loading:"lazy",className:"rounded-md",src:"https://cdn.tek-nic.com/media/images/panel/"+(null!==t&&void 0!==t?t:c)+"/portrait.jpg",alt:"poster"}),(0,s.jsx)("div",{className:"opacity-0 h-full transition group-hover:opacity-100 absolute p-2 leading-loose text-sm bg-[#000000ab] top-0 w-full",children:n.map((function(e,t){var r=e.Name,n=e.Value;return"\u0633\u0627\u0644"===r||"\u0698\u0627\u0646\u0631"===r?(0,s.jsx)("p",{children:r+":"+n},t):"\u0631\u062a\u0628\u0647 IMDB"===r?(0,s.jsxs)("span",{children:[(0,s.jsx)("img",{src:"/icons/imdb.svg",alt:"imdb",className:"inline w-1/4"}),(0,s.jsx)("span",{className:"inline mr-4",children:n})]},t):void 0}))})]}),(0,s.jsx)("p",{className:"mt-1 text-xs",children:r})]})},null!==t&&void 0!==t?t:c)}},307:function(e,t,r){r.d(t,{PO:function(){return u},iW:function(){return f},jc:function(){return l},ni:function(){return d}});var n=r(4165),a=r(5861),s=r(2047),c=r.n(s),i="PCFt5CTwZhu8qWl0mXGAAoHqL3I5R53iefKu7ZKr";function l(e,t){return o.apply(this,arguments)}function o(){return(o=(0,a.Z)((0,n.Z)().mark((function e(t,r){var a,s,l;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a=t.email,s=t.password,(l=new(c().User)).set("username",a),l.set("email",a),!("iss"in t)){e.next=19;break}return e.prev=5,e.next=8,l.linkWith("google",{authData:{id:t.sub,id_token:r}});case 8:return e.abrupt("return",{code:200,message:"\u0628\u0627 \u0645\u0648\u0641\u0642\u06cc\u062a \u062b\u0628\u062a \u0646\u0627\u0645 \u0648 \u0648\u0627\u0631\u062f \u0634\u062f\u06cc\u062f"});case 11:if(e.prev=11,e.t0=e.catch(5),202!==e.t0.code){e.next=16;break}return localStorage.setItem("Parse/"+i+"/currentUser",JSON.stringify({username:a,email:a,emailVerified:!0,ACL:{"*":{read:!0},Wk1i7R3EEe:{read:!0,write:!0}},objectId:"Wk1i7R3EEe",className:"_User"})),e.abrupt("return",{code:200,message:"\u0628\u0627 \u0645\u0648\u0641\u0642\u06cc\u062a \u0648\u0627\u0631\u062f \u0634\u062f\u06cc\u062f"});case 16:return e.abrupt("return",{code:205,message:"\u062a\u0644\u0627\u0634 \u0646\u0627\u0645\u0648\u0641\u0642 \u0628\u0648\u062f \u0644\u0637\u0641\u0627\u0652 \u0627\u0632 \u0631\u0648\u0634 \u062f\u06cc\u06af\u0631\u06cc \u0627\u0645\u062a\u062d\u0627\u0646 \u06a9\u0646\u06cc\u062f"});case 17:e.next=47;break;case 19:return l.set("password",s),e.prev=20,e.next=23,l.signUp();case 23:return e.next=25,c().User.logOut();case 25:return e.abrupt("return",{code:205,message:"\u0628\u0631\u0627\u06cc \u062a\u06a9\u0645\u06cc\u0644 \u062b\u0628\u062a \u0646\u0627\u0645 \u0627\u06cc\u0645\u06cc\u0644 \u062e\u0648\u062f \u0631\u0627 \u062a\u0627\u06cc\u06cc\u062f \u06a9\u0646\u06cc\u062f"});case 28:return e.prev=28,e.t1=e.catch(20),e.prev=30,e.next=33,c().User.logIn(a,s);case 33:return e.abrupt("return",{code:200,message:"\u0628\u0627 \u0645\u0648\u0641\u0642\u06cc\u062a \u0648\u0627\u0631\u062f \u0634\u062f\u06cc\u062f"});case 36:if(e.prev=36,e.t2=e.catch(30),101!==e.t2.code&&202!==e.t2.code){e.next=42;break}return e.abrupt("return",{code:101,message:"\u0646\u0627\u0645 \u06a9\u0627\u0631\u0628\u0631\u06cc \u06cc\u0627 \u06af\u0630\u0631\u0648\u0627\u0698\u0647 \u0646\u0627\u0645\u0639\u062a\u0628\u0631 \u0627\u0633\u062a"});case 42:if(205!==e.t2.code){e.next=46;break}return e.abrupt("return",{code:205,message:"\u0644\u0637\u0641\u0627 \u0627\u06cc\u0645\u06cc\u0644 \u062e\u0648\u062f \u0631\u0627 \u062a\u0627\u06cc\u06cc\u062f \u06a9\u0646\u06cc\u062f"});case 46:return e.abrupt("return",{message:e.t2.message});case 47:case"end":return e.stop()}}),e,null,[[5,11],[20,28],[30,36]])})))).apply(this,arguments)}function u(){return p.apply(this,arguments)}function p(){return(p=(0,a.Z)((0,n.Z)().mark((function e(){return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c().User.currentAsync();case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function d(){return m.apply(this,arguments)}function m(){return(m=(0,a.Z)((0,n.Z)().mark((function e(){return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,c().User.logOut();case 3:return e.abrupt("return",{code:200,message:"\u0628\u0627 \u0645\u0648\u0641\u0642\u06cc\u062a \u062e\u0627\u0631\u062c \u0634\u062f\u06cc\u062f"});case 6:return e.prev=6,e.t0=e.catch(0),e.abrupt("return",{code:205,message:"\u062e\u0637\u0627\u06cc\u06cc \u0631\u062e \u062f\u0627\u062f\u0647 \u0627\u0633\u062a"});case 9:case"end":return e.stop()}}),e,null,[[0,6]])})))).apply(this,arguments)}function f(e){return x.apply(this,arguments)}function x(){return(x=(0,a.Z)((0,n.Z)().mark((function e(t){return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,c().User.requestPasswordReset(t);case 3:return e.abrupt("return",!0);case 6:return e.prev=6,e.t0=e.catch(0),e.abrupt("return",!1);case 9:case"end":return e.stop()}}),e,null,[[0,6]])})))).apply(this,arguments)}c().initialize(i,"J594GmROMXF0u83jr1Wy11tSitNWNcfT5nv12HNp"),c().serverURL="https://parseapi.back4app.com/"}}]);
//# sourceMappingURL=495.9d4c8250.chunk.js.map