(this["webpackJsonpnetflix-datastax-clone"]=this["webpackJsonpnetflix-datastax-clone"]||[]).push([[0],{11:function(e,t,n){},13:function(e,t,n){"use strict";n.r(t);var c=n(1),s=n.n(c),a=n(6),r=n.n(a),i=n(3),o=n(4),j=n(2),u=(n(11),n(0)),l=function(e){var t=e.movie,n=Object(c.useState)(!1),s=Object(j.a)(n,2),a=s[0],r=s[1];return Object(u.jsxs)("div",{className:"card",onMouseEnter:function(){return r(!0)},onMouseLeave:function(){return r(!1)},children:[!a&&Object(u.jsx)("video",{className:"video",controls:!0,children:Object(u.jsx)("source",{src:t.thumbnail,type:"video/mp4"})}),a&&Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("video",{className:"video",controls:!0,autoPlay:!0,loop:!0,children:Object(u.jsx)("source",{src:t.thumbnail,type:"video/mp4"})}),Object(u.jsx)("div",{className:"info-box",children:Object(u.jsx)("p",{children:t.title})})]})]})},b=function(e){var t=e.genre,n=Object(c.useState)(null),s=Object(j.a)(n,2),a=s[0],r=s[1],b=Object(c.useState)(null),O=Object(j.a)(b,2),d=O[0],f=O[1],h=function(){var e=Object(o.a)(Object(i.a)().mark((function e(){var n,c;return Object(i.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/.netlify/functions/getMovies",{method:"POST",body:JSON.stringify({genre:t,pageState:d})});case 2:return n=e.sent,e.next=5,n.json();case 5:c=e.sent,r(c.data.movies_by_genre.values),f(c.data.movies_by_genre.pageState);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(c.useEffect)((function(){h()}),[]),Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("h2",{id:t,children:t}),a&&Object(u.jsxs)("div",{className:"movie-section",children:[a.map((function(e,t){return Object(u.jsx)(l,{movie:e},e.title)})),Object(u.jsx)("div",{className:"more-button",onClick:function(){f(d),h()},children:Object(u.jsx)("i",{className:"fas fa-angle-right"})})]})]})},O=function(){var e=Object(c.useState)(null),t=Object(j.a)(e,2),n=t[0],s=t[1],a=function(){var e=Object(o.a)(Object(i.a)().mark((function e(){var t,n,c;return Object(i.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/.netlify/functions/getMovies",{method:"POST",body:JSON.stringify({genre:"Sci-Fi",pageState:null})});case 2:return t=e.sent,e.next=5,t.json();case 5:n=e.sent,c=n.data.movies_by_genre.values,s(c[Math.floor(Math.random()*c.length)]);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(c.useEffect)((function(){a()}),[]),Object(u.jsx)(u.Fragment,{children:n&&Object(u.jsxs)("div",{className:"hero",children:[Object(u.jsx)("video",{className:"hero-video",muted:!0,controls:!0,autoPlay:!0,loop:!0,children:Object(u.jsx)("source",{src:n.thumbnail,type:"video/mp4"})}),Object(u.jsxs)("div",{className:"info-section",children:[Object(u.jsx)("h3",{className:"hero-blurb",children:n.synopsis}),Object(u.jsxs)("div",{className:"button-section",children:[Object(u.jsxs)("div",{className:"button play",children:[Object(u.jsx)("span",{children:Object(u.jsx)("i",{className:"fas fa-play"})}),"Play"]}),Object(u.jsxs)("div",{className:"button more",children:[Object(u.jsx)("span",{children:Object(u.jsx)("i",{className:"fas fa-info-circle"})}),"More info"]})]})]})]})})},d=function(){return Object(u.jsx)("div",{className:"navbar",children:Object(u.jsxs)("ul",{children:[Object(u.jsx)("li",{children:Object(u.jsx)("div",{className:"logo"})}),Object(u.jsx)("li",{children:Object(u.jsx)("a",{href:"/",children:"Home"})})]})})},f=function(){var e=Object(c.useState)(0),t=Object(j.a)(e,2),n=t[0],s=t[1],a=Object(c.useState)(null),r=Object(j.a)(a,2),l=r[0],f=r[1],h=Object(c.useState)(null),x=Object(j.a)(h,2),v=x[0],m=x[1],p=Object(c.useState)(!1),g=Object(j.a)(p,2),y=g[0],N=g[1],S=function(){var e=Object(o.a)(Object(i.a)().mark((function e(){var t,n;return Object(i.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(y){e.next=11;break}return N(!0),e.next=4,fetch("/.netlify/functions/getGenres",{method:"POST",body:JSON.stringify({pageState:l,pageSize:4})});case 4:return t=e.sent,e.next=7,t.json();case 7:n=e.sent,f(n.data.reference_list.pageState),m((function(e){return(e||[]).concat(n.data.reference_list.values)})),N(!1);case 11:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(c.useEffect)((function(){s(1)}),[]),Object(c.useEffect)((function(){var e=4*n,t=(v||[]).length;e>t&&!(t>0&&null===l)&&S()}),[n]),Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(d,{}),Object(u.jsx)(O,{}),v&&Object(u.jsx)("div",{className:"container",children:Object.values(v).map((function(e){return Object(u.jsx)(b,{genre:e.value},e.value)}))}),Object(u.jsx)("div",{className:"page-end",onMouseEnter:function(){s((function(e){return e+1}))}})]})};r.a.render(Object(u.jsx)(s.a.StrictMode,{children:Object(u.jsx)(f,{})}),document.getElementById("root"))}},[[13,1,2]]]);
//# sourceMappingURL=main.a18716c7.chunk.js.map