(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{30:function(e,t,n){e.exports=n.p+"static/media/noPosterSmall.87a0eb6a.png"},38:function(e,t,n){e.exports=n(71)},71:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(12),u=n.n(i),l=n(77),c=n(79),o=n(76),s=n(78),p=n(8),m=n.n(p),f=n(10),d=n(4),g=n(3),v=n(6),b=n.n(v),h=n(2),E=n(31),x=n.n(E).a.create({baseURL:"https://api.themoviedb.org/3/",params:{api_key:"e9c9995da493955ca99fe4be4c1d60a4",language:"en-US"}}),j=function(){return x.get("movie/now_playing")},O=function(){return x.get("movie/upcoming")},y=function(){return x.get("movie/popular")},_=function(e){return x.get("movie/".concat(e),{params:{append_to_response:"videos"}})},w=function(e){return x.get("search/movie",{params:{query:encodeURIComponent(e)}})},k=function(){return x.get("tv/top_rated")},R=function(){return x.get("tv/popular")},S=function(){return x.get("tv/airing_today")},U=function(e){return x.get("tv/".concat(e),{params:{append_to_response:"videos"}})},L=function(e){return x.get("search/tv",{params:{query:encodeURIComponent(e)}})};function z(){var e=Object(g.a)(["\n  height: 100vh;\n  width: 100vw;\n  display: flex;\n  justify-content: center;\n  font-size: 28px;\n  margin-top: 20px;\n"]);return z=function(){return e},e}var N=h.default.div(z()),T=function(){return r.a.createElement(N,null,r.a.createElement("span",{role:"img","aria-label":"Loading"},"Loading..."))};function M(){var e=Object(g.a)(["\n  display: grid;\n  grid-template-columns: repeat(auto-fill, 125px);\n  grid-gap: 25px;\n  margin-top: 25px;\n"]);return M=function(){return e},e}function F(){var e=Object(g.a)(["\n  font-size: 14px;\n  font-weight: 600;\n"]);return F=function(){return e},e}function P(){var e=Object(g.a)(["\n  :not(:last-child) {\n    margin-bottom: 50px;\n  }\n"]);return P=function(){return e},e}var I=h.default.div(P()),C=h.default.span(F()),V=h.default.div(M()),q=function(e){var t=e.title,n=e.children;return r.a.createElement(I,null,r.a.createElement(C,null,t),r.a.createElement(V,null,n))},B=n(74);function J(){var e=Object(g.a)(["\n  font-size: 10px;\n  color: rgba(255, 255, 255, 0.5);\n"]);return J=function(){return e},e}function A(){var e=Object(g.a)(["\n  display: block;\n  margin-bottom: 3px;\n"]);return A=function(){return e},e}function D(){var e=Object(g.a)(["\n  margin-bottom: 5px;\n  position: relative;\n  &:hover {\n    "," {\n      opacity: 0.3;\n    }\n    "," {\n      opacity: 1;\n    }\n  }\n"]);return D=function(){return e},e}function G(){var e=Object(g.a)(["\n  bottom: 5px;\n  right: 5px;\n  position: absolute;\n  opacity: 0;\n  transition: opacity 0.1s linear;\n"]);return G=function(){return e},e}function H(){var e=Object(g.a)(["\n  background-image: url(",");\n  height: 180px;\n  background-size: cover;\n  border-radius: 4px;\n  background-position: center center;\n  transition: opacity 0.1s linear;\n"]);return H=function(){return e},e}function K(){var e=Object(g.a)(["\n  font-size: 12px;\n"]);return K=function(){return e},e}var Q=h.default.div(K()),W=h.default.div(H(),function(e){return e.bgURL}),X=h.default.span(G()),Y=h.default.div(D(),W,X),Z=h.default.span(A()),$=h.default.span(J()),ee=function(e){var t=e.id,a=e.imageURL,i=e.title,u=e.rating,l=e.year,c=e.isMovie,o=void 0!==c&&c;return r.a.createElement(B.a,{to:o?"/movie/".concat(t):"/show/".concat(t)},r.a.createElement(Q,null,r.a.createElement(Y,null,r.a.createElement(W,{bgURL:a?"https://image.tmdb.org/t/p/w300".concat(a):n(30)}),r.a.createElement(X,null,r.a.createElement("span",{role:"img","aria-label":"rating"},"\u2605")," ",u,"/10")),r.a.createElement(Z,null,i.length>18?"".concat(i.substring(0,18),"..."):i),r.a.createElement($,null,l)))};function te(){var e=Object(g.a)(["\n  padding: 20px;\n"]);return te=function(){return e},e}var ne=h.default.div(te()),ae=function(){var e=function(){var e=Object(a.useState)(!0),t=Object(d.a)(e,2),n=t[0],r=t[1],i=Object(a.useState)(null),u=Object(d.a)(i,2),l=u[0],c=u[1],o=Object(a.useState)(null),s=Object(d.a)(o,2),p=s[0],g=s[1],v=function(){var e=Object(f.a)(m.a.mark(function e(){var t,n,a,i,u,l;return m.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,j();case 3:return t=e.sent,n=t.data.results,e.next=7,O();case 7:return a=e.sent,i=a.data.results,e.next=11,y();case 11:u=e.sent,l=u.data.results,g({nowPlaying:n,upcoming:i,popular:l}),e.next=19;break;case 16:e.prev=16,e.t0=e.catch(0),c(e.t0);case 19:return e.prev=19,r(!1),e.finish(19);case 22:case"end":return e.stop()}},e,null,[[0,16,19,22]])}));return function(){return e.apply(this,arguments)}}();return Object(a.useEffect)(function(){v()},[]),{loading:n,result:p,error:l}}(),t=e.loading,n=e.result;return r.a.createElement(r.a.Fragment,null,r.a.createElement(b.a,{title:"Movies | Nomflix"}),t?r.a.createElement(T,null):r.a.createElement(ne,null,n&&n.nowPlaying&&n.nowPlaying.length>0&&r.a.createElement(q,{title:"Now Playing"},n.nowPlaying.map(function(e){return r.a.createElement(ee,{key:e.id,id:e.id,imageURL:e.poster_path,title:e.original_title,rating:e.vote_average,year:e.release_date.substring(0,4),isMovie:!0})})),n&&n.upcoming&&n.upcoming.length>0&&r.a.createElement(q,{title:"Upcoming"},n.upcoming.map(function(e){return r.a.createElement(ee,{key:e.id,id:e.id,imageURL:e.poster_path,title:e.original_title,rating:e.vote_average,year:e.release_date.substring(0,4),isMovie:!0})})),n&&n.popular&&n.popular.length>0&&r.a.createElement(q,{title:"Popular"},n.popular.map(function(e){return r.a.createElement(ee,{key:e.id,id:e.id,imageURL:e.poster_path,title:e.original_title,rating:e.vote_average,year:e.release_date.substring(0,4),isMovie:!0})}))))};function re(){var e=Object(g.a)(["\n  padding: 20px;\n"]);return re=function(){return e},e}var ie=h.default.div(re()),ue=function(){var e=function(){var e=Object(a.useState)(!0),t=Object(d.a)(e,2),n=t[0],r=t[1],i=Object(a.useState)(null),u=Object(d.a)(i,2),l=u[0],c=u[1],o=Object(a.useState)(null),s=Object(d.a)(o,2),p=s[0],g=s[1],v=function(){var e=Object(f.a)(m.a.mark(function e(){var t,n,a,i,u,l;return m.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,k();case 3:return t=e.sent,n=t.data.results,e.next=7,R();case 7:return a=e.sent,i=a.data.results,e.next=11,S();case 11:u=e.sent,l=u.data.results,g({topRated:n,popular:i,airingToday:l}),e.next=19;break;case 16:e.prev=16,e.t0=e.catch(0),c(e.t0);case 19:return e.prev=19,r(!1),e.finish(19);case 22:case"end":return e.stop()}},e,null,[[0,16,19,22]])}));return function(){return e.apply(this,arguments)}}();return Object(a.useEffect)(function(){v()},[]),{loading:n,result:p,error:l}}(),t=e.loading,n=e.result;return r.a.createElement(r.a.Fragment,null,r.a.createElement(b.a,{title:"TV Shows | Nomflix"}),t?r.a.createElement(T,null):r.a.createElement(ie,null,n&&n.topRated&&n.topRated.length>0&&r.a.createElement(q,{title:"Top Rated"},n.topRated.map(function(e){return r.a.createElement(ee,{key:e.id,id:e.id,imageURL:e.poster_path,title:e.original_name,rating:e.vote_average,year:e.first_air_date.substring(0,4)})})),n&&n.popular&&n.popular.length>0&&r.a.createElement(q,{title:"Popular"},n.popular.map(function(e){return r.a.createElement(ee,{key:e.id,id:e.id,imageURL:e.poster_path,title:e.original_name,rating:e.vote_average,year:e.first_air_date.substring(0,4)})})),n&&n.airingToday&&n.airingToday.length>0&&r.a.createElement(q,{title:"Airing Today"},n.airingToday.map(function(e){return r.a.createElement(ee,{key:e.id,id:e.id,imageURL:e.poster_path,title:e.original_name,rating:e.vote_average,year:e.first_air_date.substring(0,4)})}))))};function le(){var e=Object(g.a)(["\n  all: unset;\n  font-size: 28px;\n  width: 100%;\n"]);return le=function(){return e},e}function ce(){var e=Object(g.a)(["\n  margin-bottom: 50px;\n  width: 100%;\n"]);return ce=function(){return e},e}function oe(){var e=Object(g.a)(["\n  padding: 20px;\n"]);return oe=function(){return e},e}var se=h.default.div(oe()),pe=h.default.form(ce()),me=h.default.input(le()),fe=function(){var e=function(e){var t=Object(a.useState)(e),n=Object(d.a)(t,2),r=n[0],i=n[1];return{value:r,onChange:function(e){var t=e.currentTarget.value;i(t)}}}(""),t=Object(a.useState)(""),n=Object(d.a)(t,2),i=n[0],u=n[1],l=function(e){var t=Object(a.useState)(!0),n=Object(d.a)(t,2),r=n[0],i=n[1],u=Object(a.useState)(null),l=Object(d.a)(u,2),c=l[0],o=l[1],s=Object(a.useState)(null),p=Object(d.a)(s,2),g=p[0],v=p[1];return Object(a.useEffect)(function(){!function(){var t=Object(f.a)(m.a.mark(function t(){var n,a,r,u;return m.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(t.prev=0,0!==e.length){t.next=3;break}return t.abrupt("return");case 3:return i(!0),t.next=6,w(e);case 6:return n=t.sent,a=n.data.results,t.next=10,L(e);case 10:r=t.sent,u=r.data.results,v({movieResults:a,tvResults:u}),t.next=18;break;case 15:t.prev=15,t.t0=t.catch(0),o(t.t0);case 18:return t.prev=18,i(!1),t.finish(18);case 21:case"end":return t.stop()}},t,null,[[0,15,18,21]])}));return function(){return t.apply(this,arguments)}}()()},[e]),{loading:r,results:g,error:c}}(i),c=l.loading,o=l.results;return r.a.createElement(se,null,r.a.createElement(b.a,{title:"Search | Nomflix"}),r.a.createElement(pe,{onSubmit:function(t){t.preventDefault(),u(e.value)}},r.a.createElement(me,Object.assign({},e,{placeholder:"Search Movies or TV Shows..."}))),c?r.a.createElement(T,null):r.a.createElement(r.a.Fragment,null,o&&o.movieResults&&o.movieResults.length>0&&r.a.createElement(q,{title:"Movie Results"},o.movieResults.map(function(e){return r.a.createElement(ee,{key:e.id,id:e.id,imageURL:e.poster_path,title:e.original_title,rating:e.vote_average,year:e.release_date.substring(0,4),isMovie:!0})})),o&&o.tvResults&&o.tvResults.length>0&&r.a.createElement(q,{title:"TV Show Results"},o.tvResults.map(function(e){return r.a.createElement(ee,{key:e.id,id:e.id,imageURL:e.poster_path,title:e.original_name,rating:e.vote_average,year:e.first_air_date.substring(0,4)})}))))},de=n(34),ge=function(e){var t=e.result;return r.a.createElement(Ne,null,r.a.createElement(b.a,{title:"".concat(t.original_title," | Nomflix")}),r.a.createElement(Te,null,t.original_title),r.a.createElement(Me,null,r.a.createElement(Fe,null,t.release_date.substring(0,4)),r.a.createElement(Pe,null,"\u2022"),r.a.createElement(Fe,null,t.runtime," min"),r.a.createElement(Pe,null,"\u2022"),r.a.createElement(Fe,null,t.genres&&t.genres.map(function(e,n){return n===t.genres.length-1?e.name:"".concat(e.name," / ")}))),r.a.createElement(Ie,null,t.overview))},ve=function(e){var t=e.result;return r.a.createElement(Ne,null,r.a.createElement(b.a,{title:"".concat(t.original_name," | Nomflix")}),r.a.createElement(Te,null,t.original_name),r.a.createElement(Me,null,r.a.createElement(Fe,null,t.first_air_date.substring(0,4)),r.a.createElement(Pe,null,"\u2022"),r.a.createElement(Fe,null,t.episode_run_time[0]," min"),r.a.createElement(Pe,null,"\u2022"),r.a.createElement(Fe,null,t.genres&&t.genres.map(function(e,n){return n===t.genres.length-1?e.name:"".concat(e.name," / ")}))),r.a.createElement(Ie,null,t.overview))},be=function(){return r.a.createElement(Ne,null,r.a.createElement(b.a,{title:"No result | Nomflix"}),r.a.createElement(Te,null,"No result"))};function he(){var e=Object(g.a)(["\n  font-size: 14px;\n  opacity: 0.7;\n  line-height: 1.5;\n  width: 50%;\n"]);return he=function(){return e},e}function Ee(){var e=Object(g.a)(["\n  margin: 0 10px;\n"]);return Ee=function(){return e},e}function xe(){var e=Object(g.a)([""]);return xe=function(){return e},e}function je(){var e=Object(g.a)(["\n  margin: 20px 0;\n"]);return je=function(){return e},e}function Oe(){var e=Object(g.a)(["\n  font-size: 32px;\n"]);return Oe=function(){return e},e}function ye(){var e=Object(g.a)(["\n  width: 70%;\n  margin-left: 40px;\n"]);return ye=function(){return e},e}function _e(){var e=Object(g.a)(["\n  width: 30%;\n  background-image: url(",");\n  background-position: center center;\n  background-size: cover;\n  height: 100%;\n  border-radius: 5px;\n"]);return _e=function(){return e},e}function we(){var e=Object(g.a)(["\n  display: flex;\n  width: 100%;\n  position: relative;\n  z-index: 1;\n  height: 100%;\n"]);return we=function(){return e},e}function ke(){var e=Object(g.a)(["\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background-image: url(",");\n  background-position: center center;\n  background-size: cover;\n  filter: blur(3px);\n  opacity: 0.5;\n  z-index: 0;\n"]);return ke=function(){return e},e}function Re(){var e=Object(g.a)(["\n  height: calc(100vh - 50px);\n  width: 100%;\n  position: relative;\n  padding: 50px;\n"]);return Re=function(){return e},e}var Se=h.default.div(Re()),Ue=h.default.div(ke(),function(e){return e.bgURL}),Le=h.default.div(we()),ze=h.default.div(_e(),function(e){return e.bgURL}),Ne=h.default.div(ye()),Te=h.default.h3(Oe()),Me=h.default.div(je()),Fe=h.default.span(xe()),Pe=h.default.span(Ee()),Ie=h.default.p(he()),Ce=Object(de.a)(function(e){var t=e.location.pathname,i=(e.history.push,function(e,t){var n=Object(a.useState)(!0),r=Object(d.a)(n,2),i=r[0],u=r[1],l=Object(a.useState)(null),c=Object(d.a)(l,2),o=c[0],s=c[1],p=Object(a.useState)(null),g=Object(d.a)(p,2),v=g[0],b=g[1];return Object(a.useEffect)(function(){!function(){var n=Object(f.a)(m.a.mark(function n(){var a,r,i,l,c;return m.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:if(n.prev=0,!t){n.next=18;break}if(a=parseInt(t),!e.includes("/movie/")){n.next=11;break}return n.next=6,_(a);case 6:r=n.sent,i=r.data,b(i),n.next=16;break;case 11:return n.next=13,U(a);case 13:l=n.sent,c=l.data,b(c);case 16:n.next=19;break;case 18:throw Error("Id is undefined.");case 19:n.next=25;break;case 21:n.prev=21,n.t0=n.catch(0),s(n.t0),b(null);case 25:return n.prev=25,u(!1),n.finish(25);case 28:case"end":return n.stop()}},n,null,[[0,21,25,28]])}));return function(){return n.apply(this,arguments)}}()()},[t,e]),{loading:i,result:v,error:o}}(t,e.match.params.id)),u=i.loading,l=i.result;return r.a.createElement(r.a.Fragment,null,u?r.a.createElement(r.a.Fragment,null,r.a.createElement(b.a,{title:"Loading | Nomflix"}),r.a.createElement(T,null)):r.a.createElement(Se,null,l?r.a.createElement(r.a.Fragment,null,r.a.createElement(Ue,{bgURL:"https://image.tmdb.org/t/p/original".concat(l.backdrop_path)}),r.a.createElement(Le,null,r.a.createElement(ze,{bgURL:l.poster_path?"https://image.tmdb.org/t/p/original".concat(l.poster_path):n(30)}),function(e){return"original_title"in e?r.a.createElement(ge,{result:e}):"original_name"in e?r.a.createElement(ve,{result:e}):null}(l))):r.a.createElement(Le,null,r.a.createElement(be,null))))}),Ve=n(75);function qe(){var e=Object(g.a)(["\n  height: 50px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n"]);return qe=function(){return e},e}function Be(){var e=Object(g.a)(["\n  width: 80px;\n  height: 50px;\n  text-align: center;\n  border-bottom: 3px solid\n    ",";\n  transition: border-bottom 0.5s ease-in-out;\n"]);return Be=function(){return e},e}function Je(){var e=Object(g.a)(["\n  display: flex;\n"]);return Je=function(){return e},e}function Ae(){var e=Object(g.a)(["\n  color: #fff;\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 50px;\n  display: flex;\n  align-items: center;\n  background-color: rgba(20, 20, 20, 0.8);\n  z-index: 10;\n  box-shadow: 0px 1px 5px 2px rgba(0, 0, 0, 0.8);\n"]);return Ae=function(){return e},e}var De=h.default.header(Ae()),Ge=h.default.ul(Je()),He=h.default.li(Be(),function(e){return e.current?"#3498db":"transparent"}),Ke=Object(h.default)(B.a)(qe()),Qe=Object(Ve.a)(function(e){var t=e.location.pathname;return r.a.createElement(De,null,r.a.createElement(Ge,null,r.a.createElement(He,{current:"/"===t},r.a.createElement(Ke,{to:"/"},"Movies")),r.a.createElement(He,{current:"/tv"===t},r.a.createElement(Ke,{to:"/tv"},"TV")),r.a.createElement(He,{current:"/search"===t},r.a.createElement(Ke,{to:"/search"},"Search"))))}),We=function(){return r.a.createElement(l.a,null,r.a.createElement(r.a.Fragment,null,r.a.createElement(Qe,null),r.a.createElement(c.a,null,r.a.createElement(o.a,{exact:!0,path:"/",component:ae}),r.a.createElement(o.a,{path:"/tv",component:ue}),r.a.createElement(o.a,{path:"/search",component:fe}),r.a.createElement(o.a,{path:"/movie/:id",component:Ce}),r.a.createElement(o.a,{path:"/show/:id",component:Ce}),r.a.createElement(s.a,{from:"*",to:"/"}))))},Xe=n(36),Ye=n.n(Xe);function Ze(){var e=Object(g.a)(["\n  ",";\n  a {\n    text-decoration: none;\n    color: inherit;\n  }\n  * {\n    box-sizing: border-box;\n  }\n  body {\n    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n    font-size: 12px;\n    background-color: rgba(20, 20, 20, 1);\n    color: white;\n    padding-top: 50px;\n  }\n"]);return Ze=function(){return e},e}var $e=Object(h.createGlobalStyle)(Ze(),Ye.a),et=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement($e,null),r.a.createElement(We,null))};u.a.render(r.a.createElement(et,null),document.getElementById("root"))}},[[38,1,2]]]);
//# sourceMappingURL=main.313eb8da.chunk.js.map