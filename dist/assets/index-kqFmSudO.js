var A=t=>{throw TypeError(t)};var H=(t,e,s)=>e.has(t)||A("Cannot "+s);var F=(t,e,s)=>e.has(t)?A("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,s);var j=(t,e,s)=>(H(t,e,"access private method"),s);import{m as P,T as M,_ as W}from"./typography-nzZg5pHe.js";import{d as p,o as l,c as m,w as _,r as w,n as $,u as a,e as N,_ as S,f as K,g,h as O,i as n,a as i,b,j as h,t as f,F as z,k as q,p as Q,l as X,m as Y,q as Z}from"./index-SVHS4BvU.js";function x(t,e=300){let s;return(...c)=>{clearTimeout(s),s=setTimeout(()=>{t.apply(null,c)},e)}}const ee=p({__name:"badge",props:{mods:{},tag:{}},setup(t){return(e,s)=>(l(),m(N(e.tag?e.tag:"span"),{class:$(["badge",a(P)(e.mods,"badge")])},{default:_(()=>[w(e.$slots,"default",{},void 0,!0)]),_:3},8,["class"]))}}),D=S(ee,[["__scopeId","data-v-29abb9fb"]]),E=p({__name:"loaderCircle",props:{mods:{},size:{},color:{}},setup(t){return K(e=>({"6ebd6893":e.size,"6810b911":e.color})),(e,s)=>(l(),g("span",{class:$(["loader",a(P)(e.mods,"loader")])},null,2))}}),se=p({__name:"button",props:{href:{},mods:{},type:{},loading:{type:Boolean}},setup(t){return(e,s)=>(l(),m(N(e.href?"a":"button"),{href:e.href,type:e.type?e.type:"button",class:$(["btn",a(P)(e.mods,"btn"),{loading:e.loading}])},{default:_(()=>[e.loading?(l(),m(a(E),{key:1,size:"14px",color:"white"})):w(e.$slots,"default",{key:0},void 0,!0)]),_:3},8,["href","type","class"]))}}),V=S(se,[["__scopeId","data-v-3bac5963"]]),ae=p({__name:"avatar",props:{mods:{},img:{}},setup(t){return(e,s)=>(l(),g("div",{class:$(["avatar",a(P)(e.mods,"avatar")]),style:O(`--icon: url(/images/${e.img})`)},[w(e.$slots,"default",{},void 0,!0)],6))}}),te=S(ae,[["__scopeId","data-v-1e25f1d5"]]),ne={},oe={class:"lang"};function le(t,e){return l(),g("div",oe,"En")}const ce=S(ne,[["render",le],["__scopeId","data-v-c9256dbb"]]),re={class:"account-header"},ie={class:"account-header__left"},de={class:"account-header__right"},ue=p({__name:"account-header",setup(t){return(e,s)=>(l(),g("header",re,[n("div",ie,[i(a(M),{tag:"h1",mods:"heading1"},{default:_(()=>[b("Vehicles")]),_:1}),i(a(D),null,{default:_(()=>[b("256")]),_:1})]),n("div",de,[i(a(V),{mods:"icon, outline",style:"--icon: url(/images/i-plus.svg)",class:"account-header__btn-plus"}),i(a(te),{img:"avatar.jpg",class:"account-header__avatar"},{default:_(()=>[b("John Doe")]),_:1}),i(a(ce))])]))}}),_e=S(ue,[["__scopeId","data-v-63b5c6da"]]),pe=p({__name:"grid",props:{columns:{},mods:{},tag:{}},setup(t){return(e,s)=>(l(),m(N(e.tag?e.tag:"div"),{class:$(["grid",e.columns?"grid--"+e.columns:"",e.tag==="ul"?"grid--list":"",a(P)(e.mods,"grid")])},{default:_(()=>[w(e.$slots,"default")]),_:3},8,["class"]))}}),ge=["type","required","placeholder","value"],he=p({__name:"field",props:{mods:{},required:{type:Boolean},placeholder:{},value:{},type:{},icon:{}},setup(t){return(e,s)=>(l(),g("div",{class:$(["field",a(P)(e.mods,"field")]),style:O(`--icon: url(/images/${e.icon})`)},[n("input",{class:"field__input",type:e.type,required:e.required,placeholder:e.placeholder,value:e.value},null,8,ge)],6))}}),ve=S(he,[["__scopeId","data-v-9f2bd75c"]]),me={class:"select__items"},fe=["onClick"],Pe={type:"button"},$e=p({__name:"select",props:{mods:{},options:{},onChange:{type:Function}},setup(t){const{mods:e="",options:s,onChange:c=()=>{}}=t,o=h(!1),d=h(s),r=v=>{const y=d.value.find(u=>u.isSelected),C=d.value.find(u=>u.value===v);y.isSelected=!1,C.isSelected=!0,d.value=d.value,o.value=!1,c(v)};return(v,y)=>{var C;return l(),g("div",{class:$(["select",o.value?"open":"",a(P)(v.mods,"select")])},[n("div",{class:"select__selected",onClick:y[0]||(y[0]=u=>o.value=!o.value)},f(((C=d.value.find(u=>u.isSelected))==null?void 0:C.name)||d.value[0].name),1),n("ul",me,[(l(!0),g(z,null,q(d.value.filter(u=>!u.isSelected),u=>(l(),g("li",{class:"select__item",key:u.value,onClick:T=>r(u.value)},[n("button",Pe,f(u.name),1)],8,fe))),128))])],2)}}}),J=t=>(Q("data-v-db0a952e"),t=t(),X(),t),ye=J(()=>n("div",{class:"card__header"},[n("div",{class:"card__header-right"})],-1)),be={class:"card__main"},Se={class:"card__img"},Ce=["src","alt"],ke={class:"card__title"},Ie={class:"card__subtitle"},we={class:"card__footer"},Ve={class:"card__footer-left"},Ne=J(()=>n("div",{class:"card__footer-right"},[n("div",{class:"card__desc"},"3 days left")],-1)),Be=p({__name:"card",props:{mods:{},img:{},tag:{},data:{}},setup(t){return(e,s)=>(l(),m(N(e.tag?e.tag:"article"),{class:$(["card",a(P)(e.mods,"card")])},{default:_(()=>[ye,n("div",be,[n("picture",Se,[n("img",{src:e.data.preview,alt:e.data.vehicle_name,loading:"lazy",width:"315",height:"135"},null,8,Ce)]),n("h2",ke,f(e.data.vehicle_name),1),n("span",Ie,"WDB "+f(e.data.vin),1)]),n("div",we,[n("div",Ve,[i(a(D),{mods:"alt"},{default:_(()=>[b("17/30")]),_:1})]),Ne])]),_:1},8,["class"]))}}),je=S(Be,[["__scopeId","data-v-db0a952e"]]),ze={class:"pagination"},Le={class:"pagination__item"},Te=["disabled"],Ae={class:"pagination__item"},Fe=n("li",{class:"pagination__separator"},"of",-1),Oe={class:"pagination__item"},qe={class:"pagination__item"},De=["disabled"],Ee=p({__name:"pagination",props:{currentPage:{},lastPage:{},onPrevPage:{type:Function},onNextPage:{type:Function}},setup(t){return(e,s)=>(l(),g("ul",ze,[n("li",Le,[n("button",{class:"pagination__prev",onClick:s[0]||(s[0]=c=>e.onPrevPage()),disabled:e.currentPage===1},null,8,Te)]),n("li",Ae,[i(a(V),{mods:"outline-ghost, small",class:"pagination__link-current"},{default:_(()=>[b(f(e.currentPage),1)]),_:1})]),Fe,n("li",Oe,[i(a(V),{mods:"outline-ghost, small",class:"pagination__link-future"},{default:_(()=>[b(f(e.lastPage),1)]),_:1})]),n("li",qe,[n("button",{class:"pagination__next",onClick:s[1]||(s[1]=c=>e.onNextPage()),disabled:e.currentPage===e.lastPage},null,8,De)])]))}}),Je={class:"vehicles-filters"},Re={class:"vehicles-filters__select"},Ue=n("span",{class:"vehicles-filters__select-label"},"Select vehicles per page:",-1),Ge={class:"vehicles-pagination"},He={class:"vehicles-pagination__counts"},Me=p({__name:"vehicles",setup(t){const e=[{value:"9",name:"9",isSelected:!0},{value:"27",name:"27"},{value:"54",name:"54"}],s=Xe(),c=x(o=>s.onSearch(o),1e3);return Y(()=>{s.onChangePerPage(s.currentPerPage)}),(o,d)=>(l(),g(z,null,[n("div",Je,[i(a(ve),{placeholder:"Search VIN",mods:"icon-append",icon:"i-zoom.svg",class:"vehicles-filters__search",value:a(s).searchInput,onInput:d[0]||(d[0]=r=>a(c)(r.target.value))},null,8,["value"]),n("div",Re,[Ue,i(a($e),{options:e.map(r=>({...r,isSelected:+r.value===a(s).currentPerPage})),onChange:r=>a(s).onChangePerPage(+r)},null,8,["options","onChange"])]),i(a(V),{mods:"icon-prepend",style:"--icon: url(/images/i-plus.svg)",class:"vehicles-filters__btn"},{default:_(()=>[b("Add Vehicle")]),_:1})]),a(s).isLoading?(l(),m(a(E),{key:0,color:"var(--color-surface-secondary)",size:"40px",mods:"center"})):w(o.$slots,"default",{key:1},()=>[i(a(pe),{columns:"3"},{default:_(()=>[(l(!0),g(z,null,q(a(s).list,r=>(l(),m(a(je),{key:r.id??0,data:r},null,8,["data"]))),128))]),_:1}),n("div",Ge,[n("span",He,"Showing "+f(a(s).currentPerPage)+" out of "+f(a(s).countPagesVehicles),1),i(a(Ee),{currentPage:a(s).currentPage,lastPage:a(s).lastPage,onPrevPage:()=>a(s).onPrevPage(),onNextPage:()=>a(s).onNextPage()},null,8,["currentPage","lastPage","onPrevPage","onNextPage"])])])],64))}}),We="https://api.caiman-app.de/api/cars-test";var I,L;class Ke{constructor(){F(this,I)}async get(e){try{const c=await(await fetch(j(this,I,L).call(this,e),{referrerPolicy:"strict-origin-when-cross-origin"})).json();if(c){try{c.msg=JSON.parse(c.msg)}catch{}return c}}catch(s){return s}}async post(e={},{upload:s=!1,params:c=""}){try{const o={method:"POST",body:e};return s||(o.headers={"Content-Type":"application/json"}),await(await fetch(j(this,I,L).call(this,c),o)).json()}catch(o){return o}}}I=new WeakSet,L=function(e=""){return`${We}?${e!==""?`${e}`:""}`};const Qe=new Ke,Xe=Z("vehicles",()=>{const t=h([]),e=h(!0),s=h(""),c=h(9),o=h(1),d=h(0),r=h(0);async function v(){e.value=!0;const k=`page=${o.value}&per_page=${c.value}${s.value!==""?`&search=${s.value}`:""}`;Qe.get(k).then(U=>{e.value=!1;const{data:G,meta:B}=U;t.value=G,o.value=B.current_page,r.value=B.last_page,d.value=B.total})}function y(){o.value=1,v()}function C(k){s.value=k,y()}function u(k){c.value=k,y()}function T(){o.value>1&&(o.value--,o.value=o.value,v())}function R(){o.value<r.value&&(o.value++,o.value=o.value,v())}return{list:t,isLoading:e,searchInput:s,currentPerPage:c,currentPage:o,countPagesVehicles:d,lastPage:r,onSearch:C,onChangePerPage:u,onPrevPage:T,onNextPage:R}}),es=p({__name:"vehicles",setup(t){return(e,s)=>(l(),m(a(W),null,{default:_(()=>[i(a(_e)),i(a(Me))]),_:1}))}});export{es as default};
