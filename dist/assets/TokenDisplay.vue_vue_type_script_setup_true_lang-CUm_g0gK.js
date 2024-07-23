import{_ as R}from"./BaseSwitch-DT-2nMN-.js";import{d as C,r as u,o as S,a as O,c as T,i as c,j as U,h as b,w as f,I as k,f as r,a1 as h,q as A}from"./index-BydDwyEi.js";import{_ as D}from"./BaseCodeSnippet.vue_vue_type_script_setup_true_lang-Cgovahqq.js";function p(s,e,o){const n=`SET @bb = CONCAT("CHANGE REPLICATION SOURCE TO SOURCE_PASSWORD='my-secret-pw', SOURCE_RETRY_COUNT=1, SOURCE_PORT=3306, SOURCE_HOST='${s}', SOURCE_USER='${e}", @@lc_time_names, @@hostname, "';")`,d=btoa(`SET @bb = CONCAT("CHANGE REPLICATION SOURCE TO SOURCE_PASSWORD='my-secret-pw', SOURCE_RETRY_COUNT=1, SOURCE_PORT=3306, SOURCE_HOST='${s}', SOURCE_USER='${e}", @@lc_time_names, @@hostname, "';"`);return o?`SET @b = ${d};
SET @s2 = FROM_BASE64(@b);
PREPARE stmt1 FROM @s2;
EXECUTE stmt1;
PREPARE stmt2 FROM @bb;
EXECUTE stmt2;
START REPLICA;`:`${n};
PREPARE stmt FROM @bb;
EXECUTE stmt;
START REPLICA;`}const w=r("p",{class:"mt-16 mb-16"},"1. Insert it into a MySQL dump of your own",-1),P=r("p",{class:"mt-32"}," 2. Download a (pseudo) random MySQL dump with a token already embedded in it ",-1),N=C({__name:"TokenDisplay",props:{tokenData:{}},setup(s){const e=s,o=u(e.tokenData.encoded||!0),n=u("");S(()=>{n.value=p(e.tokenData.hostname,e.tokenData.token,o.value)});function d(){o.value=!o.value,n.value=p(e.tokenData.hostname,e.tokenData.token,o.value)}function m(){var t,l;const _={fmt:"my_sql",auth:(t=e.tokenData)==null?void 0:t.auth,token:(l=e.tokenData)==null?void 0:l.token,encoded:o.value};h(_).then(a=>{window.location.href=a.request.responseURL}).catch(a=>{console.log(a,"err")}).finally(()=>{console.log("File downloaded")})}return(_,t)=>{const l=D,a=A,i=R;return O(),T(k,null,[w,c(l,{lang:"sql",label:"Your MYSQL code",code:n.value},null,8,["code"]),P,c(a,{class:"mt-16",onClick:m},{default:U(()=>[b("Download a MySQL Dump file")]),_:1}),c(i,{id:"encoded_mysql",modelValue:o.value,"onUpdate:modelValue":t[0]||(t[0]=E=>o.value=E),class:"mt-16",label:"Encode Snippet","helper-message":"Encode snippet to make it harder to spot",onInput:t[1]||(t[1]=f(E=>d(),["stop"]))},null,8,["modelValue"])],64)}}});export{N as _};
