import{_ as C,a as F,b as I}from"./GenerateTokenSettingsNotifications.vue_vue_type_script_setup_true_lang-8iTW0-ON.js";import{d as x,r as y,ag as B,ah as $,a as i,c,f as s,E as m,I as w,P as M,n as h,a8 as g,ai as j,af as A,a9 as E,u as _,y as N,i as r,j as P}from"./index-OwSyuLdt.js";import{p as b}from"./pwaIconService-CKctCUnq.js";const T={class:"mb-8 font-semibold text-center"},V={class:"flex flex-row flex-wrap items-center justify-center gap-8"},z=["for"],D=["id","value","aria-checked"],G={class:"sr-only"},R=x({__name:"BaseFormImageSelect",props:{id:{},options:{},imageClass:{},label:{}},emits:["image-selected"],setup(v,{emit:t}){const u=v,n=t,e=y(""),l=B(u,"id"),{value:d,errorMessage:o}=$(l),k=()=>{d.value=e.value,n("image-selected",e.value)};return(p,f)=>(i(),c("fieldset",null,[s("legend",T,m(p.label),1),s("div",V,[(i(!0),c(w,null,M(p.options,a=>(i(),c("label",{key:a.value,for:a.value,class:h([e.value===a.value?" border-green-500":"border-grey-200","relative flex items-center justify-center p-8 duration-100 bg-white border cursor-pointer rounded-2xl"])},[g(s("input",{id:a.value,"onUpdate:modelValue":f[0]||(f[0]=S=>e.value=S),type:"radio",value:a.value,"aria-checked":e.value===a.value,onChange:k},null,40,D),[[j,e.value]]),s("div",{class:h(["bg-cover min-w-[2.5rem] min-h-[2.5rem] rounded-2xl duration-100",[e.value===a.value?"opacity-100":"opacity-40",p.imageClass]]),style:A({backgroundImage:`url(${a.url})`})},[s("span",G,m(a.value),1)],6)],10,z))),128))]),g(s("p",{id:"error",class:"mt-8 text-xs leading-4 text-center text-red"},m(_(o)),513),[[E,_(o)]])]))}}),L=N(R,[["__scopeId","data-v-7a3e4d8a"]]),J=x({__name:"GenerateTokenForm",setup(v){const t=y("");function u(n){const e=b.find(l=>l.value===n);(e==null?void 0:e.label)===void 0?t.value="":t.value=e.label}return(n,e)=>{const l=L,d=F,o=I;return i(),c(w,null,[r(o,{"setting-type":"Canarytoken"},{default:P(()=>[r(l,{id:"icon",label:"Select App icon",options:_(b),class:"mb-16",onImageSelected:u},null,8,["options"]),r(d,{id:"app_name",value:t.value,type:"text",placeholder:"E.g. Password Manager",label:"App name (optional)","helper-message":"If you leave this blank, we'll use a reasonable default.","full-width":"",class:"text-center"},null,8,["value"])]),_:1}),r(C,{"memo-helper-example":"Fake Password Manager app on Alice's phone"})],64)}}});export{J as default};