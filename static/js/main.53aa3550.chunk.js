(this.webpackJsonpadminkp=this.webpackJsonpadminkp||[]).push([[0],{21:function(e,t,a){},25:function(e,t,a){},26:function(e,t,a){"use strict";a.r(t);var n=a(3),c=a(7),r=a.n(c),u=a(14),o=a.n(u),i=(a(21),a(9)),s=a(15).a.initializeApp({apiKey:"AIzaSyDM6BfefxnTromSl8BmEoGCGaJllI2ivqM",authDomain:"xpark-492ae.firebaseapp.com",databaseURL:"https://xpark-492ae.firebaseio.com",projectId:"xpark-492ae",storageBucket:"xpark-492ae.appspot.com",messagingSenderId:"705611960944",appId:"1:705611960944:web:fb175c971f725b4dac5ab5",measurementId:"G-RJN23G402P"}),l=(a(25),function(e){var t=e.pw,a=e.setPw,c=e.handleLogin,r=e.pwError;return Object(n.jsx)("section",{className:"login",children:Object(n.jsxs)("div",{className:"loginContainer",children:[Object(n.jsx)("h1",{children:"X-Park Admin Pannel"}),Object(n.jsx)("label",{children:"Password"}),Object(n.jsx)("input",{type:"password",autofocus:!0,required:!0,value:t,onChange:function(e){return a(e.target.value)}}),Object(n.jsx)("p",{className:"errorMsg",children:r}),Object(n.jsx)("div",{className:"btnContainer",children:Object(n.jsx)("button",{onClick:c,children:"Sign in"})})]})})}),d=function(e){var t=e.handleLogout,a=Object(c.useState)(""),r=Object(i.a)(a,2),u=r[0],o=r[1],l=Object(c.useState)(""),d=Object(i.a)(l,2),j=d[0],b=d[1],p=Object(c.useState)(""),h=Object(i.a)(p,2),O=h[0],f=h[1],g=Object(c.useState)(""),x=Object(i.a)(g,2),m=x[0],v=x[1],C=Object(c.useState)(""),S=Object(i.a)(C,2),k=S[0],w=S[1],P=Object(c.useState)(""),A=Object(i.a)(P,2),y=A[0],I=A[1],N=Object(c.useState)(""),q=Object(i.a)(N,2),E=q[0],K=q[1],T=Object(c.useState)(""),_=Object(i.a)(T,2),R=_[0],L=_[1],B=Object(c.useState)(""),F=Object(i.a)(B,2),G=F[0],M=F[1];return Object(n.jsxs)("section",{className:"Pannel",children:[Object(n.jsxs)("nav",{children:[Object(n.jsx)("h2",{children:"X-Park Admin Paneline Ho\u015fgeldiniz"}),Object(n.jsx)("button",{onClick:t,children:"\xc7\u0131k\u0131\u015f Yap"})]}),Object(n.jsxs)("div",{className:"addCarParkContainer",children:[Object(n.jsx)("label",{children:"Otopark Ekle"}),Object(n.jsx)("input",{type:"text",autofocus:!0,required:!0,placeholder:"\u015eehir",value:O,onChange:function(e){return f(e.target.value)}}),Object(n.jsx)("input",{type:"text",autofocus:!0,required:!0,placeholder:"Semt",value:j,onChange:function(e){return b(e.target.value)}}),Object(n.jsx)("input",{type:"text",placeholder:"Otopark ismi",autofocus:!0,required:!0,value:m,onChange:function(e){return v(e.target.value)}}),Object(n.jsx)("input",{type:"text",placeholder:"Posta Kodu",autofocus:!0,required:!0,value:k,onChange:function(e){return w(e.target.value)}}),Object(n.jsx)("input",{type:"text",autofocus:!0,required:!0,placeholder:"Telefon numaras\u0131",value:y,onChange:function(e){return I(e.target.value)}}),Object(n.jsx)("input",{type:"text",autofocus:!0,required:!0,placeholder:"Enlem (Konum)",value:E,onChange:function(e){return K(e.target.value)}}),Object(n.jsx)("input",{type:"text",autofocus:!0,required:!0,placeholder:"Boylam (Konum)",value:R,onChange:function(e){return L(e.target.value)}}),Object(n.jsx)("input",{type:"number",autofocus:!0,required:!0,placeholder:"Kapasite",value:G,onChange:function(e){return M(e.target.value)}}),Object(n.jsx)("button",{onClick:function(){var e,t=k+"_"+j+"_"+O,a=0;if(s.database().ref("CAR_PARKS/"+t).on("value",(function(e){a=e.numChildren()+parseInt("1000000")})),parseInt(a)>=1e6)try{e={capacity:parseInt(G),coordinates:{latitude:parseFloat(E),longitude:parseFloat(R)},freeArea:parseInt(G),generalid:k+"_"+j+"_"+O+"-"+a.toString(),id:a.toString(),name:m,phone:y,used:0},s.database().ref("CAR_PARKS/"+t+"/"+a).set(e)}catch(n){console.log(n)}console.log(e)},children:"Ekle"})]}),Object(n.jsxs)("div",{className:"discContainer",children:[Object(n.jsx)("label",{children:"\u0130ndirim Miktar\u0131"}),Object(n.jsx)("input",{type:"number",autofocus:!0,required:!0,value:u,onChange:function(e){return o(e.target.value)}}),Object(n.jsx)("button",{onClick:function(){s.database().ref("XPARK_CONSTANTS/discount").set({value:u})},children:"\u0130ndirimi Herkese G\xf6nder"})]})]})},j=function(){var e=Object(c.useState)(""),t=Object(i.a)(e,2),a=t[0],r=t[1],u=Object(c.useState)(""),o=Object(i.a)(u,2),j=o[0],b=o[1],p=Object(c.useState)(""),h=Object(i.a)(p,2),O=h[0],f=h[1],g=Object(c.useState)(""),x=Object(i.a)(g,2),m=x[0],v=x[1],C=function(){s.auth().onAuthStateChanged((function(e){e?(b(""),r(e)):r("")}))};Object(c.useEffect)((function(){C()}),[]);return Object(n.jsx)("div",{className:"App",children:a?Object(n.jsx)(d,{handleLogout:function(){s.auth().signOut()}}):Object(n.jsx)(l,{pw:j,setPw:b,handleLogin:function(){f(""),s.database().ref("XPARK_CONSTANTS/admin_password/value").on("value",(function(e){e.val()==j?s.auth().signInWithEmailAndPassword("admin@xpark.com","admin0").catch((function(e){switch(e.code){case"auth/wrong-password":f(e.message)}})):f("Invalid Password")}),(function(e){f("The read password where from database failed: "+e.code)}))},hasAcc:m,setHasAcc:v,pwError:O})})},b=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,27)).then((function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,r=t.getLCP,u=t.getTTFB;a(e),n(e),c(e),r(e),u(e)}))};o.a.render(Object(n.jsx)(r.a.StrictMode,{children:Object(n.jsx)(j,{})}),document.getElementById("root")),b()}},[[26,1,2]]]);
//# sourceMappingURL=main.53aa3550.chunk.js.map