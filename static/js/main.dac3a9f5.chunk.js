(this["webpackJsonpneurotech-web"]=this["webpackJsonpneurotech-web"]||[]).push([[0],{14:function(e,a,t){},19:function(e,a,t){},20:function(e,a,t){"use strict";t.r(a);var s=t(1),c=t.n(s),i=t(6),n=t.n(i),l=(t(14),t(3)),r=t(0),o=function(e){return Object(r.jsx)("nav",{id:"menu",className:"navbar navbar-default navbar-fixed-top",children:Object(r.jsxs)("div",{className:"container",children:[Object(r.jsxs)("div",{className:"navbar-header",children:[Object(r.jsxs)("button",{type:"button",className:"navbar-toggle collapsed","data-toggle":"collapse","data-target":"#bs-example-navbar-collapse-1",children:[" ",Object(r.jsx)("span",{className:"sr-only",children:"Toggle navigation"})," ",Object(r.jsx)("span",{className:"icon-bar"})," ",Object(r.jsx)("span",{className:"icon-bar"})," ",Object(r.jsx)("span",{className:"icon-bar"})," "]}),Object(r.jsx)("img",{src:"img/logo.png",className:"img-responsive",href:"#page-top",alt:""})," "]}),Object(r.jsx)("div",{className:"collapse navbar-collapse",id:"bs-example-navbar-collapse-1",children:Object(r.jsxs)("ul",{className:"nav navbar-nav navbar-right",children:[Object(r.jsx)("li",{children:Object(r.jsx)("a",{href:"#about",className:"page-scroll",children:"About"})}),Object(r.jsx)("li",{children:Object(r.jsx)("a",{href:"#services",className:"page-scroll",children:"Services"})}),Object(r.jsx)("li",{children:Object(r.jsx)("a",{href:"#team",className:"page-scroll",children:"Team"})}),Object(r.jsx)("li",{children:Object(r.jsx)("a",{href:"#contact",className:"page-scroll",children:"Contact"})})]})})]})})},m=function(e){return Object(r.jsx)("header",{id:"header",children:Object(r.jsx)("div",{className:"intro",children:Object(r.jsx)("div",{className:"overlay",children:Object(r.jsx)("div",{className:"container",children:Object(r.jsx)("div",{className:"row",children:Object(r.jsxs)("div",{className:"col-md-8 col-md-offset-2 intro-text",children:[Object(r.jsxs)("h1",{children:[e.data?e.data.title:"Loading",Object(r.jsx)("span",{})]}),Object(r.jsx)("p",{children:e.data?e.data.paragraph:"Loading"}),Object(r.jsx)("a",{href:"#about",className:"btn btn-custom btn-lg page-scroll",children:"Learn More"})," "]})})})})})})},d=function(e){return Object(r.jsx)("div",{id:"about",children:Object(r.jsx)("div",{className:"container",children:Object(r.jsxs)("div",{className:"row",children:[Object(r.jsxs)("div",{className:"col-xs-12 col-md-6",children:[" ",Object(r.jsx)("img",{src:"img/about.jpg",className:"img-responsive",alt:""})," "]}),Object(r.jsx)("div",{className:"col-xs-12 col-md-6",children:Object(r.jsxs)("div",{className:"about-text",children:[Object(r.jsx)("h2",{children:"About Us"}),Object(r.jsx)("p",{children:e.data?e.data.paragraph:"loading..."}),Object(r.jsx)("a",{href:"https://github.com/NeuroTechGTU",className:"btn btn-custom btn-lg page-scroll",children:"VIEW ON GITHUB"})," "]})})]})})})},j=function(e){return Object(r.jsx)("div",{id:"services",className:"text-center",children:Object(r.jsxs)("div",{className:"container",children:[Object(r.jsxs)("div",{className:"section-title",children:[Object(r.jsx)("h2",{children:"SleepNIR"}),Object(r.jsx)("p",{children:"SleepNIR is designed to calculate sleep indices such as total sleep time and sleep efficiency. It is an easy-to-use wearable sleep tracker with a mobile application."})]}),Object(r.jsx)("div",{className:"row",children:e.data?e.data.map((function(e,a){return Object(r.jsxs)("div",{className:"col-md-4",children:[" ",Object(r.jsxs)("div",{className:"service-desc",children:[Object(r.jsx)("h3",{children:e.name}),Object(r.jsx)("p",{children:e.text})]})]},"".concat(e.name,"-").concat(a))})):"loading"})]})})},b=function(e){return Object(r.jsx)("div",{id:"team",className:"text-center",children:Object(r.jsxs)("div",{className:"container",children:[Object(r.jsx)("div",{className:"col-md-8 col-md-offset-2 section-title",children:Object(r.jsx)("h2",{children:"Meet the Team"})}),Object(r.jsx)("div",{id:"row",children:e.data?e.data.map((function(e,a){return Object(r.jsx)("div",{className:"col-md-3 col-sm-6 team",children:Object(r.jsxs)("div",{className:"thumbnail",children:[" ",Object(r.jsx)("img",{src:e.img,alt:"...",className:"team-img img-responsive"}),Object(r.jsxs)("div",{className:"caption",children:[Object(r.jsx)("h4",{children:e.name}),Object(r.jsx)("p",{children:e.job})]})]})},"".concat(e.name,"-").concat(a))})):"loading"})]})})},h=t(2),p=t(4),u=t(7),x=t.n(u),g={name:"",email:"",message:""},O=function(e){var a=Object(s.useState)(g),t=Object(l.a)(a,2),c=t[0],i=c.name,n=c.email,o=c.message,m=t[1],d=function(e){var a=e.target,t=a.name,s=a.value;m((function(e){return Object(p.a)(Object(p.a)({},e),{},Object(h.a)({},t,s))}))};return Object(r.jsxs)("div",{children:[Object(r.jsx)("div",{id:"contact",children:Object(r.jsxs)("div",{className:"container",children:[Object(r.jsx)("div",{className:"col-md-8",children:Object(r.jsxs)("div",{className:"row",children:[Object(r.jsxs)("div",{className:"section-title",children:[Object(r.jsx)("h2",{children:"Get In Touch"}),Object(r.jsx)("p",{children:"Please fill out the form below to send us an email and we will get back to you as soon as possible."})]}),Object(r.jsxs)("form",{name:"sentMessage",validate:!0,onSubmit:function(e){e.preventDefault(),console.log(i,n,o),x.a.sendForm("service_r01rg3i","template_ugb7us9",e.target,"GwRWOJ2yBHtXEQ988").then((function(e){console.log(e.text),m(Object(p.a)({},g))}),(function(e){console.log(e.text)}))},children:[Object(r.jsxs)("div",{className:"row",children:[Object(r.jsx)("div",{className:"col-md-6",children:Object(r.jsxs)("div",{className:"form-group",children:[Object(r.jsx)("input",{type:"text",id:"name",name:"name",className:"form-control",placeholder:"Name",required:!0,onChange:d}),Object(r.jsx)("p",{className:"help-block text-danger"})]})}),Object(r.jsx)("div",{className:"col-md-6",children:Object(r.jsxs)("div",{className:"form-group",children:[Object(r.jsx)("input",{type:"email",id:"email",name:"email",className:"form-control",placeholder:"Email",required:!0,onChange:d}),Object(r.jsx)("p",{className:"help-block text-danger"})]})})]}),Object(r.jsxs)("div",{className:"form-group",children:[Object(r.jsx)("textarea",{name:"message",id:"message",className:"form-control",rows:"4",placeholder:"Message",required:!0,onChange:d}),Object(r.jsx)("p",{className:"help-block text-danger"})]}),Object(r.jsx)("div",{id:"success"}),Object(r.jsx)("button",{type:"submit",className:"btn btn-custom btn-lg",children:"Send Message"})]})]})}),Object(r.jsxs)("div",{className:"col-md-3 col-md-offset-1 contact-info",children:[Object(r.jsxs)("div",{className:"contact-item",children:[Object(r.jsx)("h3",{children:"Contact Info"}),Object(r.jsxs)("p",{children:[Object(r.jsxs)("span",{children:[Object(r.jsx)("i",{className:"fa fa-map-marker"})," Address"]}),e.data?e.data.address:"loading"]})]}),Object(r.jsx)("div",{className:"contact-item",children:Object(r.jsxs)("p",{children:[Object(r.jsxs)("span",{children:[Object(r.jsx)("i",{className:"fa fa-envelope-o"})," Email"]})," ",e.data?e.data.email:"loading"]})})]})]})}),Object(r.jsx)("div",{id:"footer",children:Object(r.jsx)("div",{className:"container text-center",children:Object(r.jsx)("p",{children:"\xa9 2022 NeuroTech"})})})]})},f=t(8),v=t(9),N=t.n(v),y=(t(19),new N.a('a[href*="#"]',{speed:1e3,speedAsDuration:!0}),function(){var e=Object(s.useState)({}),a=Object(l.a)(e,2),t=a[0],c=a[1];return Object(s.useEffect)((function(){c(f)}),[]),Object(r.jsxs)("div",{children:[Object(r.jsx)(o,{}),Object(r.jsx)(m,{data:t.Header}),Object(r.jsx)(d,{data:t.About}),Object(r.jsx)(j,{data:t.Services}),Object(r.jsx)(b,{data:t.Team}),Object(r.jsx)(O,{data:t.Contact})]})});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n.a.render(Object(r.jsx)(c.a.StrictMode,{children:Object(r.jsx)(y,{})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},8:function(e){e.exports=JSON.parse('{"Header":{"title":"NeuroTech","paragraph":"NeuroTech provides fNIRS solutions to measure brain activity."},"About":{"paragraph":"NeuroTech is developing and deploying a wearable sensor to measure brain activity.  We use infrared light to non-invasively measure changing oxygen concentration in the user\u2019s brain, and relate this to changes in the user\u2019s condition."},"Gallery":[],"Services":[{"name":"Sleep Efficiency Analysis","text":"View analysis of your sleep efficiency with a graphic interface."},{"name":"Identify Sleep Stages","text":"Identify the different sleep stages including the time you fall asleep, wake up, and enter or exit deep/light sleep."},{"name":"View Sleep Data","text":"View your daily, weekly, monthly, and yearly sleep data."},{"name":"","text":""},{"name":"Instant Data","text":"Measure your instant oxyhemoglobin level and compare it with scientific data."},{"name":"Compare Your Data","text":"Compare your sleep data with a scientific basis."},{"name":"Set Goal","text":"Set a sleep time or efficiency goal daily or weekly and track them."}],"Testimonials":[{"img":"img/testimonials/01.jpeg","text":"\\"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam sedasd commodo nibh ante facilisis bibendum dolor feugiat at.\\"","name":"John Doe"}],"Team":[{"img":"img/team/01.jpeg","name":"Sena Ulukaya","job":""},{"img":"img/team/02.jpeg","name":"Mustafa Karaka\u015f","job":""},{"img":"img/team/03.jpeg","name":"\u015eevval Ate\u015f","job":""},{"img":"img/team/04.jpeg","name":"Sefa \xc7i\xe7ek","job":""},{"img":"img/team/05.jpeg","name":"\u0130brahim Hilmi Akarg\xfcl","job":""},{"img":"img/team/06.jpeg","name":"Fatih Do\u011fa\xe7","job":""},{"img":"img/team/07.jpeg","name":"Okan Torun","job":""},{"img":"img/team/08.jpeg","name":"Sinan Sar\u0131","job":""},{"img":"img/team/09.jpeg","name":"Hatice Sevra Gen\xe7","job":""},{"img":"img/team/11.jpeg","name":"Atakan Alt\u0131n","job":""},{"img":"img/team/10.jpeg","name":"O\u011fuz Mutlu","job":""},{"img":"img/team/placeholder.jpeg","name":"Ay\u015fe De\u011firmenci","job":""}],"Contact":{"address":"Gebze Teknik \xdcniversitesi, Bilgisayar M\xfchendisli\u011fi, 41400 Gebze/Kocaeli","phone":"+1 123 456 1234","email":"neurotechgtu@gmail.com"},"Features":[{"icon":"fa fa-comments-o","title":"Lorem ipsum","text":"Lorem ipsum dolor sit amet placerat facilisis felis mi in tempus eleifend pellentesque natoque etiam."},{"icon":"fa fa-bullhorn","title":"Lorem ipsum","text":"Lorem ipsum dolor sit amet placerat facilisis felis mi in tempus eleifend pellentesque natoque etiam."},{"icon":"fa fa-group","title":"Lorem ipsum","text":"Lorem ipsum dolor sit amet placerat facilisis felis mi in tempus eleifend pellentesque natoque etiam."},{"icon":"fa fa-magic","title":"Lorem ipsum","text":"Lorem ipsum dolor sit amet placerat facilisis felis mi in tempus eleifend pellentesque natoque etiam."}]}')}},[[20,1,2]]]);
//# sourceMappingURL=main.dac3a9f5.chunk.js.map