(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[142],{1446:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/jobs",function(){return n(160)}])},4683:function(e,t,n){"use strict";var r=n(7568),o=n(655),s=n(5893),i=n(1664),c=n.n(i);n(7294),n(5675),n(5305);var l=n(8384),a=n(5935),u=n(1163),d=function(){var e=(0,l.Eu)(),t=e.currentUser;e.isUserLoading;var n=(0,u.useRouter)();return(0,s.jsx)("div",{children:(0,s.jsx)("nav",{className:"bg-white shadow ",children:(0,s.jsx)("div",{className:"max-w-7xl mx-auto px-8",children:(0,s.jsxs)("div",{className:"flex items-center justify-between h-16",children:[(0,s.jsxs)("div",{className:"w-full justify-between flex items-center",children:[(0,s.jsx)(c(),{className:"flex-shrink-0 cursor-pointer font-bold",href:"/",children:"LOGO"}),(0,s.jsx)("div",{className:"hidden md:block",children:(0,s.jsxs)("div",{className:"ml-10 flex items-baseline space-x-11",children:[(0,s.jsx)(c(),{className:"text-gray-300 hover:text-blue-400 px-3 py-2 rounded-md text-sm font-medium",href:"/home",children:"Home"}),(0,s.jsx)(c(),{className:"text-gray-300 hover:text-blue-400 px-3 py-2 rounded-md text-sm font-medium",href:"/jobs",children:"Jobs"}),t.admin?(0,s.jsx)(c(),{className:"text-gray-300 hover:text-blue-400 px-3 py-2 rounded-md text-sm font-medium",href:"/admin",children:(0,s.jsx)("span",{className:"underline text-pink_red cursor-pointer",children:"Admin"})}):(0,s.jsx)(s.Fragment,{}),(0,s.jsx)("a",{onClick:(0,r.Z)(function(){return(0,o.__generator)(this,function(e){switch(e.label){case 0:return[4,a.I8.signOut().then(function(){console.log("signed out")}).catch(function(e){console.log(e)})];case 1:return e.sent(),n.push("/"),[2]}})}),className:"underline text-pink_red cursor-pointer",children:"Log Out"})]})})]}),(0,s.jsx)("div",{className:"block",children:(0,s.jsx)("div",{className:"ml-4 flex items-center md:ml-6"})}),(0,s.jsx)("div",{className:"-mr-2 flex md:hidden",children:(0,s.jsx)("button",{className:"text-gray-800 dark:text-white hover:text-gray-300 inline-flex items-center justify-center p-2 rounded-md focus:outline-none",children:(0,s.jsx)("svg",{width:"20",height:"20",fill:"currentColor",className:"h-8 w-8",viewBox:"0 0 1792 1792",xmlns:"http://www.w3.org/2000/svg",children:(0,s.jsx)("path",{d:"M1664 1344v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45zm0-512v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45zm0-512v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45z"})})})})]})})})})};t.Z=d},6559:function(e,t,n){"use strict";n.d(t,{EC:function(){return a},Kd:function(){return _},WO:function(){return p},cg:function(){return v},d$:function(){return d},jT:function(){return h},mS:function(){return j},mv:function(){return x},qW:function(){return c}});var r=n(7568),o=n(655),s=n(5935),i=n(7632);function c(e){return l.apply(this,arguments)}function l(){return(l=(0,r.Z)(function(e){return(0,o.__generator)(this,function(t){return s.RZ.collection("routes").doc(e).delete().then(function(){console.log("route deleted")}),[2]})})).apply(this,arguments)}function a(e){return u.apply(this,arguments)}function u(){return(u=(0,r.Z)(function(e){return(0,o.__generator)(this,function(t){return s.RZ.collection("busses").doc(e).delete().then(function(){console.log("bus deleted")}),[2]})})).apply(this,arguments)}function d(e){return f.apply(this,arguments)}function f(){return(f=(0,r.Z)(function(e){return(0,o.__generator)(this,function(t){return s.RZ.collection("bookings").doc(e).delete().then(function(){console.log("route deleted")}),[2]})})).apply(this,arguments)}function h(e){return m.apply(this,arguments)}function m(){return(m=(0,r.Z)(function(e){return(0,o.__generator)(this,function(t){return s.RZ.collection("bookings").doc(e).update({paid:!0}).then(function(){console.log("Booking payment approved")}).catch(function(e){console.log(e)}),[2]})})).apply(this,arguments)}function x(e,t,n,r,o,c,l){var a=(0,i.Z)();s.RZ.collection("bookings").doc(a).set({uid:a,user_uid:e,bus_id:t,route_id:n,departure_time:r,number_of_tickets:o,total_price:c,date:l,paid:!1}).then(function(){console.log("booking made")}).catch(function(e){console.log(e)})}function p(e,t,n,r){return g.apply(this,arguments)}function g(){return(g=(0,r.Z)(function(e,t,n,r){var c;return(0,o.__generator)(this,function(o){return c=(0,i.Z)(),s.RZ.collection("busses").doc(c).set({departure_time:e,number_of_seats:t,number_plate:n,routes_uid:r,uid:c}).then(function(){console.log("bus added")}).catch(function(e){console.log(e)}),[2]})})).apply(this,arguments)}function j(e,t,n,r,o){return y.apply(this,arguments)}function y(){return(y=(0,r.Z)(function(e,t,n,r,i){return(0,o.__generator)(this,function(o){return s.RZ.collection("busses").doc(e).update({departure_time:t,number_of_seats:n,number_plate:r,routes_uid:i}).then(function(){console.log("bus changes made")}).catch(function(e){console.log(e)}),[2]})})).apply(this,arguments)}function v(e,t){return b.apply(this,arguments)}function b(){return(b=(0,r.Z)(function(e,t){var n,r;return(0,o.__generator)(this,function(n){return r=(0,i.Z)(),s.RZ.collection("routes").where("from.name","==",e.name).where("to.name","==",t.name).get().then(function(n){n.empty?s.RZ.collection("routes").doc(r).set({from:e,to:t,uid:r}).then(function(){console.log("Route added")}).catch(function(e){console.log(e)}):console.log("route already exists")}),[2]})})).apply(this,arguments)}function _(e,t,n){return w.apply(this,arguments)}function w(){return(w=(0,r.Z)(function(e,t,n){return(0,o.__generator)(this,function(r){return s.RZ.collection("routes").doc(e).update({from:t,to:n}).then(function(){console.log("Route changes made")}).catch(function(e){console.log(e)}),[2]})})).apply(this,arguments)}},160:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return p}});var r=n(7568),o=n(655),s=n(5893),i=n(7294),c=n(4683),l=n(8384),a=n(7302),u=n(5675),d=n.n(u);n(6559);var f=n(5935),h=n(1163),m=n(1664),x=n.n(m),p=function(){var e,t=(0,l.Eu)(),n=t.currentUser,u=t.isUserLoading,m=(0,h.useRouter)(),p=(0,i.useState)(1);p[0],p[1];var g=(0,i.useState)(new Date);g[0],g[1];var j=(0,i.useState)(!1),y=(j[0],j[1]),v=(0,i.useState)([]),b=v[0],_=v[1],w=(0,i.useState)(""),N=w[0];w[1];var Z=(0,i.useState)(""),k=Z[0];return Z[1],((0,r.Z)(function(){return(0,o.__generator)(this,function(e){switch(e.label){case 0:return y(!0),[4,f.RZ.collection("routes").where("from.name","==",N).where("to.name","==",k).get().then(function(e){var t=[];e.docs.forEach(function(e){t=e.data()}),t.uid})];case 1:return e.sent(),y(!1),[2]}})}),(0,i.useEffect)(function(){var e;u||n||(console.log("something is wrong"),console.log(u),console.log(n),m.push("/")),(e=(0,r.Z)(function(){return(0,o.__generator)(this,function(e){switch(e.label){case 0:return[4,f.RZ.collection("jobs").get().then(function(e){var t=[];e.docs.forEach(function(e){t.push(e.data())}),_(t),console.log(t)})];case 1:return e.sent(),[2]}})}),function(){return e.apply(this,arguments)})()},[n,u]),b.map(function(e){return{value:e.name,label:e.name}}),u)?(0,s.jsx)("div",{className:"flex flex-col items-center justify-center h-screen",children:(0,s.jsx)(d(),{src:a.Z,alt:"Loading..."})}):(0,s.jsxs)("div",{className:"min-h-screen w-screen",children:[(0,s.jsx)(c.Z,{}),(0,s.jsx)("section",{className:"my-14",id:"how_section",children:b.length<=0?(0,s.jsx)("div",{className:"text-center p-10 text-4xl h-full",children:(0,s.jsx)("h1",{children:"No jobs"})}):(0,s.jsx)("section",{className:"text-gray-600 body-font overflow-hidden",children:(0,s.jsx)("div",{className:"container px-5 py-24 mx-auto",children:(0,s.jsx)("div",{className:"flex flex-wrap -m-12",children:b.map(function(e){var t;return(0,s.jsxs)("div",{className:"p-12 md:w-1/2 flex flex-col items-start",children:[(0,s.jsx)("span",{className:"inline-block py-1 px-2 rounded bg-indigo-50 text-indigo-500 text-xs font-medium tracking-widest",children:e.type}),(0,s.jsx)("h2",{className:"sm:text-3xl text-2xl title-font font-medium text-gray-900 mt-4 mb-4",children:e.title}),(0,s.jsxs)("span",{className:"flex-grow flex flex-col mb-8",children:[(0,s.jsx)("span",{className:"title-font font-medium text-gray-900",children:"Position"}),(0,s.jsx)("span",{className:"text-gray-400 text-xs tracking-widest mt-0.5",children:e.position})]}),(0,s.jsx)("a",{className:"inline-flex items-center",children:(0,s.jsxs)("span",{className:"flex-grow flex flex-col mb-4",children:[(0,s.jsx)("span",{className:"title-font font-medium text-gray-900",children:"Salary"}),(0,s.jsx)("span",{className:"text-gray-400 text-xs tracking-widest mt-0.5",children:e.salary+"Ksh Per Month"})]})}),(0,s.jsxs)("div",{className:"flex items-center flex-wrap pb-4 mb-4 border-b-2 border-gray-100 mt-auto w-full ",children:[(0,s.jsx)(x(),{passHref:!0,href:"/jobs/".concat((t=e.uid).toLowerCase().replace(/\s+/g,"-")),className:"text-indigo-500 inline-flex items-center ",children:(0,s.jsx)("h1",{className:"hover:text-indigo-500 hover:scale-105 hover:cursor-pointer flex align-middle justify-center space-x-4 font-bold",children:"Learn More"})}),(0,s.jsxs)("span",{className:"text-gray-400 mr-3 inline-flex items-center ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200",children:[(0,s.jsxs)("svg",{className:"w-4 h-4 mr-1",stroke:"currentColor","stroke-width":"2",fill:"none","stroke-linecap":"round","stroke-linejoin":"round",viewBox:"0 0 24 24",children:[(0,s.jsx)("path",{d:"M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"}),(0,s.jsx)("circle",{cx:"12",cy:"12",r:"3"})]}),"1.2K"]}),(0,s.jsxs)("span",{className:"text-gray-400 inline-flex items-center leading-none text-sm",children:[(0,s.jsx)("svg",{className:"w-4 h-4 mr-1",stroke:"currentColor","stroke-width":"2",fill:"none","stroke-linecap":"round","stroke-linejoin":"round",viewBox:"0 0 24 24",children:(0,s.jsx)("path",{d:"M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"})}),e.applications.length]})]})]},e.uid)})})})})})]})}},7632:function(e,t,n){"use strict";n.d(t,{Z:function(){return u}});let r="undefined"!=typeof crypto&&crypto.randomUUID&&crypto.randomUUID.bind(crypto);var o={randomUUID:r};let s,i=new Uint8Array(16);function c(){if(!s&&!(s="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)))throw Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return s(i)}let l=[];for(let a=0;a<256;++a)l.push((a+256).toString(16).slice(1));var u=function(e,t,n){if(o.randomUUID&&!t&&!e)return o.randomUUID();e=e||{};let r=e.random||(e.rng||c)();if(r[6]=15&r[6]|64,r[8]=63&r[8]|128,t){n=n||0;for(let s=0;s<16;++s)t[n+s]=r[s];return t}return function(e,t=0){return(l[e[t+0]]+l[e[t+1]]+l[e[t+2]]+l[e[t+3]]+"-"+l[e[t+4]]+l[e[t+5]]+"-"+l[e[t+6]]+l[e[t+7]]+"-"+l[e[t+8]]+l[e[t+9]]+"-"+l[e[t+10]]+l[e[t+11]]+l[e[t+12]]+l[e[t+13]]+l[e[t+14]]+l[e[t+15]]).toLowerCase()}(r)}}},function(e){e.O(0,[640,951,774,888,179],function(){return e(e.s=1446)}),_N_E=e.O()}]);