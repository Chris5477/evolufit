"use strict";(self.webpackChunkevolufit=self.webpackChunkevolufit||[]).push([[584],{3411:function(e,t,i){i.r(t),i.d(t,{default:function(){return S}});var a=i(885),s=i.p+"static/media/breakfeast.e9e53231af01ba05b50f.png",n=i.p+"static/media/etude.c946bb6fd3fd475d13ae.png",r=[{id:"0",title:"Petit d\xe9jeun\xe9 sant\xe9",article:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Constur neatibus nostrum modi. Dolorem saepe incidunt laborum beatae, atque laudantium reiciendis!",urlImg:s},{id:"1",title:"Bonne reprise",article:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Conntur necatibus nostrum modi. Dolorem saepe incidunt laborum beatae, atque laudantium reiciendis!",urlImg:i.p+"static/media/reprise.44a9d8d522e1d5a9935f.png"},{id:"",title:"L'importance du sommeil",article:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Constur necetatibus nostrum modi. Dolorem saepe incidunt laborum beatae, atque laudantium reiciendis!",urlImg:n}],l=i.p+"static/media/athlete3.03b8354528b825070ae8.png",c=function(){return null},d=i(184),o=function(e){var t=e.title,i=e.article,a=e.urlImg;return(0,d.jsxs)("article",{onClick:c,"data-testid":"slide",className:"item",children:[(0,d.jsx)("img",{src:a,alt:"illustration"}),(0,d.jsxs)("aside",{className:"overlay",children:[(0,d.jsx)("h3",{className:"color-light",children:t}),(0,d.jsx)("p",{className:"color-light",children:i})]})]})},u=i(2791),m=i(2165),h=i(8811),x=function(e){var t=e.label,i=e.data,a="poids"===t?"weight":t;return(0,d.jsx)("div",{"data-testid":"linechart",children:(0,d.jsx)(m.w,{width:80,height:80,data:i,children:(0,d.jsx)(h.x,{dot:!1,type:"linear",dataKey:a,stroke:"#ff7700",strokeWidth:3})})})};var p=i.p+"static/media/eye.5b2e3e1a417834e16813a95ac85f4ebb.svg",j=i(4164),f=i(46),g=i(7321),v=i(1920),b=function(e){var t=e.setModal,i=e.data,a=e.label;return(0,j.createPortal)((0,d.jsxs)("div",{"data-testid":"modal",className:"modal posFixed flex-center",children:[(0,d.jsx)("img",{className:"close-modal",onClick:function(){return t(!1)},src:g.Z,alt:"cross"}),(0,d.jsxs)("h2",{className:"uppercase",children:[a," ",(0,d.jsx)("br",{})," 7 derniers jours"]}),(0,d.jsx)(f.Z,{data:i,label:a}),"distance"===a&&(0,d.jsx)(v.Z,{})]}),document.body)},N=function(e,t){var i=e.map((function(e){return e[t]})).reduce((function(e,t){return e+t}));return i="distance"===t?Number(i/100):i,Number.isInteger(i)?i:i.toFixed(2)},k=function(e){var t=e.label,i=e.unity,s=e.initialWeight,n=e.data,r=function(e,t,i,a,s){if("poids"===e){var n=function(e,t){var i=e-t;return e>t?"+ ".concat(i," kg \ud83d\udd3a"):e<t?"".concat(i," kg \ud83d\udd3b"):e}(t,i);return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)("p",{children:t}),(0,d.jsx)("p",{children:i!==n&&n})]})}return(0,d.jsxs)("p",{children:[N(a,e)," ",(0,d.jsx)("br",{})," ",s]})}(t,n.at(-1).weight,s,n,i),l=(0,u.useState)(!1),c=(0,a.Z)(l,2),o=c[0],m=c[1];return(0,d.jsxs)("section",{"data-testid":"progress",className:"progress container",children:[(0,d.jsxs)("div",{className:"space-flex",children:[(0,d.jsxs)("h2",{children:[t," (",i,")"]}),(0,d.jsx)("img",{className:"open-btn",onClick:function(){return m(!0)},src:p,alt:"See more..."})]}),(0,d.jsxs)("div",{className:"space-flex",children:[(0,d.jsx)("div",{className:"indication",children:r}),(0,d.jsx)(x,{label:t,data:n})]}),o&&(0,d.jsx)(b,{setModal:m,data:n,label:t})]})},C=i(7689),I=i(9261),w=function(e){var t=e.title,i=e.content,a=e.setModal,s=e.other;return(0,j.createPortal)((0,d.jsxs)("div",{"data-testid":"modal",className:"modal posFixed flex-center",children:[(0,d.jsx)("img",{className:"close-modal",onClick:function(){return a(!1)},src:g.Z,alt:"cross"}),(0,d.jsxs)("div",{className:"container-modal",children:[(0,d.jsx)("div",{className:"header-modal",children:(0,d.jsx)("h2",{className:"uppercase",children:t})}),(0,d.jsxs)("div",{className:"content-modal",children:[(0,d.jsx)("div",{className:"content-other",children:s}),i]})]})]}),document.body)},y=function(){var e,t=(0,u.useContext)(I.Z)[1],i=t.weight.length>0?t.weight.at(-1).weight:0,s=t.size/100,n=(i/Math.pow(s,2)).toFixed(2),r=(e=100*n/40,(0,d.jsxs)("div",{className:"imc",children:[(0,d.jsx)("div",{className:"part-imc",children:(0,d.jsx)("p",{children:"Insuffisance Pond\xe9rale"})}),(0,d.jsx)("div",{className:"part-imc",children:(0,d.jsx)("p",{children:"Corpulence Normale"})}),(0,d.jsx)("div",{className:"part-imc",children:(0,d.jsx)("p",{children:"Surpoids"})}),(0,d.jsx)("div",{className:"part-imc",children:(0,d.jsx)("p",{children:"Ob\xe9sit\xe9"})}),(0,d.jsx)("input",{onChange:function(){return null},className:"range",type:"range",value:e})]})),l=(0,u.useState)(!1),c=(0,a.Z)(l,2),o=c[0],m=c[1];return 0!=i&&(0,d.jsxs)("section",{className:"info-imc container flex-center","data-testid":"info-imc",children:[(0,d.jsxs)("h2",{children:["Mon IMC ",(0,d.jsx)("img",{onClick:function(){return m(!0)},src:p,alt:"more"})]}),(0,d.jsx)("h3",{children:n}),(0,d.jsx)("p",{children:"En fonction de votre taille et de poids"}),r,o&&(0,d.jsx)(w,{title:"Indice de masse corporelle ?",content:"L'indice de masse corporelle (IMC) mesure la corpulence. Il se calcule \xe0 partir de ton poids et de ta taille. Pour calculer l'IMC, il suffit de diviser ton poids (kg) par ta taille (m) au carr\xe9. Un IMC id\xe9al serait compris entre 18.5 \xe0 24.8",other:r,setModal:m})]})},Z=i(5428),M=i(1365),S=function(){var e=(0,u.useState)(330),t=(0,a.Z)(e,2),i=t[0],s=t[1],n=(0,C.s0)(),c=(0,u.useRef)(),m=(0,u.useContext)(I.Z),h=m[0],x=h.firstName,p=(h.signinDate,m[1]),j=p.weight,f=p.initialWeight,g=m[2].flatMap((function(e){return e.week}));return(0,u.useEffect)((function(){var e=setInterval((function(){return function(e,t,i){var a=e.current;i(t<660?t+330:t-660),a.style.transform="translateX("+-t+"px)",a.style.transition="2s"}(c,i,s)}),4e3);return function(){return clearInterval(e)}}),[i]),(0,u.useEffect)((function(){null==localStorage.getItem("data")&&n("/")}),[]),(0,d.jsxs)("div",{"data-testid":"profil-page",className:"profil container flex-center",children:[(0,d.jsx)("div",{className:"banner-profil container flex-center",children:(0,d.jsx)("img",{src:l,alt:"athletes",width:"100%"})}),(0,d.jsx)("section",{className:"info-user container",children:(0,d.jsxs)("h2",{className:"greet-user uppercase ",children:["Bonjour ",(0,d.jsx)("span",{children:x})]})}),(0,d.jsx)("q",{children:"Marcher sur la lune est compliqu\xe9, mais pas marcher jusqu'\xe0 la salle !"}),(0,d.jsxs)("section",{className:"slider container",children:[(0,d.jsx)("h2",{className:"uppercase subtitle",children:"Actualit\xe9s"}),(0,d.jsx)("div",{ref:c,className:"items container uppercase",children:r.map((function(e){var t=e.id,i=e.title,a=e.article,s=e.urlImg;return(0,d.jsx)(o,{title:i,article:a,urlImg:s},t)}))})]}),(0,d.jsx)(Z.Z,{title:"Progr\xe8s"}),(0,d.jsxs)("section",{className:"container",children:[j.length>0?(0,d.jsx)(k,{label:"poids",unity:"kg",data:j,initialWeight:f}):(0,d.jsx)(M.Z,{title:"Suivi poids"}),g.length>0?(0,d.jsx)(k,{label:"distance",unity:"km",data:g}):(0,d.jsx)(M.Z,{title:"Suivi calories"}),g.length>0?(0,d.jsx)(k,{label:"calories",unity:"Kcal",data:g}):(0,d.jsx)(M.Z,{title:"Suivi distance"})]}),(0,d.jsx)(y,{})]})}}}]);
//# sourceMappingURL=584.d12c5bf7.chunk.js.map