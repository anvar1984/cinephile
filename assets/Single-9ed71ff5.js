import{r as d,o as i,c as a,f as t,u as m,m as v,t as c,l as g,a as o,i as p,n as y,p as k,j as h,q as I}from"./index-ff61e4a8.js";const x={key:0,class:"single__wrapper"},D=["src"],b={class:"single__content"},w={class:"single__left"},$={class:"single__title"},B={class:"single__desc"},S={class:"single__about"},A={key:0},C={class:"single__right"},N=["src"],V={class:"single__block"},j=t("h3",{class:"single__subtitle"},"В главных ролях",-1),F={class:"single__actors"},M={__name:"SingleContent",props:["type","current"],setup(e){return console.log(e.current),(n,l)=>{const r=d("Trailer"),_=d("Actors");return e.current?(i(),a("div",x,[t("img",{src:m(v)+e.current.backdrop_path,alt:"",class:"single__bg"},null,8,D),t("div",b,[t("div",w,[t("h2",$,c(e.current.title||e.current.name),1),t("p",B,c(e.current.overview),1),t("p",S,[t("span",null,c(new Date(e.current.release_date||e.current.first_air_date).getFullYear())+", "+c(e.current.genres.map(u=>u.name).join(", ")),1),e.current.runtime?(i(),a("span",A,c(new Date(0,0,0,0,e.current.runtime).getHours())+"h "+c(new Date(0,0,0,0,e.current.runtime).getMinutes())+"m ",1)):g("",!0)]),o(r)]),t("div",C,[t("img",{src:m(p)+e.current.poster_path,alt:"",class:"single__img"},null,8,N)]),t("div",V,[j,t("div",F,[o(_,{type:e.type,id:e.current.id,count:"6"},null,8,["type","id"])])])])])):g("",!0)}}},f=(e,s)=>{const n=e.__vccOpts||e;for(const[l,r]of s)n[l]=r;return n},R={};function T(e,s){return i(),a("div")}const U=f(R,[["render",T]]),q={};function E(e,s){return i(),a("div")}const H=f(q,[["render",E]]),O={class:"single"},G={__name:"Single",props:["type"],setup(e){const s=e,n=y(),l=k(),r=h(()=>l.params.id);n.getDetails(r.value,s.type);const _=h(()=>s.type=="movie"?n.movieInfo:n.tvInfo);return I(()=>{n.movieInfo,n.tvInfo}),(u,Y)=>(i(),a("section",O,[o(M,{type:e.type,current:_.value},null,8,["type","current"]),o(U),o(H)]))}};export{G as _};