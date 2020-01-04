(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(e,t,a){},16:function(e,t,a){},17:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),o=a(3),i=a.n(o),c=(a(15),a(4)),s=a(5),l=a(8),m=a(6),p=a(1),d=a(7),u=(a(16),function(){return n.a.createElement("div",{id:"profile"},n.a.createElement("div",{id:"minimize"},n.a.createElement("header",null,n.a.createElement("h1",null,"Kelechi Chinaka"),n.a.createElement("p",{style:{marginTop:"5px"}},"Software Engineer")),n.a.createElement("main",null,n.a.createElement("div",{id:"profilePic"},n.a.createElement("img",{src:"Image/Desert.jpg",alt:""})),n.a.createElement("div",{id:"about"},n.a.createElement("p",null,"A software engineer with experience building web and mobile applications. I'm a constant learner who enjoys problem solving."),n.a.createElement("p",null,"I enjoy building web applications using the MERN stack and iOS applications.")),n.a.createElement("div",{id:"skills"},n.a.createElement("h3",null,"Programming Languages:"),n.a.createElement("div",{id:"skill"},n.a.createElement("span",{style:{background:"#cea11a"}},"JavaScript"),n.a.createElement("span",{style:{background:"#f5824c"}},"Swift"),n.a.createElement("span",{style:{background:"#5f3f88"}},"Python"),n.a.createElement("span",{style:{background:"#172c45"}},"C"),n.a.createElement("span",{style:{background:"#218e94"}},"Java"))),n.a.createElement("div",{class:"button_cont",align:"center"},n.a.createElement("a",{class:"example_d",href:"https://docs.google.com/document/d/12lxOXrq--ik-huewpJ-bHGeVyqjL9c2EGuQJIIzuO9M/edit?usp=sharing",target:"_blank",rel:"noopener noreferrer"},"Resume"))),n.a.createElement("footer",null,n.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://github.com/ke1echi",className:"icons"},n.a.createElement("i",{className:"fa fa-github"}),n.a.createElement("span",null,"Github")),n.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://twitter.com/ke1echi",className:"icons"},n.a.createElement("i",{className:"fa fa-twitter"}),n.a.createElement("span",null,"Twitter")),n.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://www.linkedin.com/in/kelechi-chinaka-353861124/",className:"icons"},n.a.createElement("i",{className:"fa fa-linkedin"}),n.a.createElement("span",null,"Linkedin")))))}),h=function(e){var t={react:{name:"React",background:"#218e94"},html5:{name:"HTML5",background:"#ca2b03"},javascript:{name:"JavaScript",background:"#cea11a"},d3:{name:"D3",background:"#f5824c"},sass:{name:"Sass",background:"#b55f8c"},express:{name:"Express.js",background:"#888585"},mongodb:{name:"MongoDB",background:"#4aad3a"},css3:{name:"CSS3",background:"#379ad6"}}[e];return t||{name:e,background:"#284748"}},g=function(e){var t,a,r,o=e.project.description;return o&&(t=o.split(".").map(function(e){return n.a.createElement("p",null,e,".")}),a=new Date(e.project.create_on).toDateString(),r=e.project.skills.map(function(e,t){return n.a.createElement("span",{style:{background:h(e).background,top:30*t}},h(e).name)})),n.a.createElement("div",{className:"contents",style:{backgroundColor:e.backgr}},n.a.createElement("div",{className:"each-project"},n.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:e.project.demo_url,className:"project-img"},r,n.a.createElement("img",{src:e.project.img_url,alt:""})),n.a.createElement("div",{className:"project-info"},n.a.createElement("h1",null,n.a.createElement("span",null,e.project.name),n.a.createElement("span",{className:"dates"},a)),n.a.createElement("div",{className:"text-btn"},n.a.createElement("div",{className:"text"},t),n.a.createElement("div",{className:"btn-container"},n.a.createElement("div",{className:"buttons"},n.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:e.project.code_url},"Code"),n.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:e.project.demo_url},"Demo")))))))},k=function(e){return n.a.createElement("div",{id:"projects",ref:e.scroll},n.a.createElement("header",null,n.a.createElement("div",{className:"contacts"},n.a.createElement("button",{id:"all",className:"active example_d",onClick:e.control},"Projects"))),n.a.createElement("main",null,n.a.createElement("div",{id:"list-header"},n.a.createElement("nav",null,n.a.createElement("ul",null))),n.a.createElement("div",{id:"all-project",className:"first"},e.project.map(function(e,t){return t%2===0?n.a.createElement(g,{project:e,backgr:"rgb(43, 43, 43)",key:t}):n.a.createElement(g,{project:e,index:t,key:t})}))),n.a.createElement("footer",{id:"footer"},n.a.createElement("div",{style:{textAlign:"center"}},n.a.createElement("h2",null,"Let's work together..."),n.a.createElement("p",null,"How do you take your coffee?",n.a.createElement("a",{href:"mailto:mrkelechichinaka@gmail.com"},"Email Me!")))))},f=[{skills:["html5","css3","express","mongodb","Node.js"],name:"Message board",description:"A fullstack app that allows people to post a thread on a board and others can reply to that thread. This app uses basic CRUD operations",code_url:"https://github.com/ke1echi/information-security-and-quality-assurance-projects-repo/tree/master/messageboard-project",demo_url:"https://ke1echi-anonymous-message-board-2.glitch.me/",type:"fullstack",create_on:"2019-08-04T14:41:35.932Z",img_url:"/Image/boardPage.PNG"},{skills:["html5","css3","React"],name:"Pomodoro Clock",description:"This app is built to improve your productivity level. With features like pause, reset and more, this app is made just for you.",code_url:"https://github.com/ke1echi/frontend-projects/tree/master/pomodoro-clock",demo_url:"https://codepen.io/kelechichinaka/full/NmdRLb",type:"frontend",create_on:"2019-08-04T14:41:35.932Z",img_url:"/Image/pomodoroClockPage.PNG"},{skills:["html5","css3","d3","javascript"],name:"Bar Chart",description:"A bar chart that displays the GDP of America. This is another project I did while learning data visualization with D3.",code_url:"https://codepen.io/kelechichinaka/pen/mdymzRP",demo_url:"https://codepen.io/kelechichinaka/full/mdymzRP",type:"frontend",create_on:"2019-08-04T14:41:35.932Z",img_url:"/Image/barChartPage.PNG"},{skills:["html5","css3","mongodb","express","Node.js"],name:"Personal Library",description:"A simple fullstack application showing the basic operations of a library. It uses basic CRUD operations",code_url:"https://github.com/ke1echi/information-security-and-quality-assurance-projects-repo/tree/master/personal-library-project",demo_url:"https://ke1echi-personal-library.glitch.me/",type:"fullstack",create_on:"2019-08-04T14:41:35.932Z",img_url:"/Image/libraryPage.PNG"},{skills:["html5","css3","React"],name:"Drum Machine",description:"Checkout this fun music app. Drum machine uses an external sound api to generate just the right sound for your entertainment.",code_url:"https://github.com/ke1echi/frontend-projects/tree/master/drum-machine",demo_url:"https://codepen.io/kelechichinaka/full/OqKejG",type:"frontend",create_on:"2019-08-04T14:41:35.932Z",img_url:"/Image/drumMachinePage.PNG"},{skills:["html5","css3","mongodb","express","Node.js"],name:"Issue Tracker",description:"A simple fullstack application that uses basic CRUD operations. Users can create, assign, update or delete issues on the board when working on a project.",code_url:"https://github.com/ke1echi/information-security-and-quality-assurance-projects-repo/tree/master/issue-tracker-project",demo_url:"https://ke1echi-issue-tracker-fcc-1.glitch.me/",type:"fullstack",create_on:"2019-08-04T14:41:35.932Z",img_url:"/Image/issueTrackerPage.PNG"},{skills:["html5","css3","d3","javascript"],name:"Choropleth Map",description:"A map which uses differences in shading and colouring to indicate the average percentage of adults age 25 and older with a bachelor's degree or higher (2010-2014) in America. This is another project I did while learning data visualization with D3.",code_url:"https://codepen.io/kelechichinaka/pen/gObGwpe",demo_url:"https://codepen.io/kelechichinaka/full/gObGwpe",type:"frontend",create_on:"2019-08-04T14:41:35.932Z",img_url:"/Image/ChoroplethMapPage.PNG"},{skills:["d3","sass","javascript"],name:"Heat Map",description:"A graphical representation of data showing the Monthly Global Land-Surface Temperature from 1753 - 2015 represented as colors. This is another project I did while learning data visualization with D3.",code_url:"https://codepen.io/kelechichinaka/pen/xxbXEbV",demo_url:"https://codepen.io/kelechichinaka/full/xxbXEbV",type:"frontend",create_on:"2019-08-04T14:41:35.932Z",img_url:"/Image/heatmapPage.PNG"},{skills:["html5","css3","React"],name:"Calculator",description:"I built this calculator as one of freeCodeCamp projects while learning react. This app works exactly as a live calculator, with almost all basic functionality and even a simple design.",code_url:"https://codepen.io/kelechichinaka/pen/qwZZmP",demo_url:"https://codepen.io/kelechichinaka/full/qwZZmP",type:"frontend",create_on:"2019-08-04T14:41:35.932Z",img_url:"/Image/calculatorPage.PNG"},{skills:["html5","css3","React"],name:"Markdown Previewer",description:"Markdown Previewer is a react app that works similar to github readme file. It is used for code formatting and a lot more.",code_url:"https://github.com/ke1echi/frontend-projects/tree/master/markdown-previewer",demo_url:"https://codepen.io/kelechichinaka/full/aPgZBX",type:"frontend",create_on:"2019-08-04T14:41:35.932Z",img_url:"/Image/markdownPreviewerPage.PNG"},{skills:["html5","css3","d3","javascript"],name:"Tree Map",description:"A graphical representation of Top 100 Most Sold Video Games Grouped by Platform. This is another project I did while learning data visualization with D3.",code_url:"https://codepen.io/kelechichinaka/pen/qBEPaOq",demo_url:"https://codepen.io/kelechichinaka/full/qBEPaOq",type:"frontend",create_on:"2019-08-04T14:41:35.932Z",img_url:"/Image/treemapPage.PNG"},{skills:["html5","css3","express","Node.js"],name:"Stock Price Checker",description:"This app helps makes sure you know what the stock market rates are. It makes use of an external api to get current stock rates, with a feature where you can compare two different stocks.",code_url:"https://github.com/ke1echi/information-security-and-quality-assurance-projects-repo/tree/master/stock-price-checker",demo_url:"https://ke1echi-stock-price-checker.glitch.me/",type:"fullstack",create_on:"2019-08-04T14:41:35.932Z",img_url:"/Image/stockPricePage.PNG"},{skills:["html5","css3","React"],name:"Random Quote Machine",description:"Checkout my first react application. This app makes use of an external api to generate random quote and a feature to tweet quotes.",code_url:"https://github.com/ke1echi/frontend-projects/tree/master/quote-generator",demo_url:"https://codepen.io/kelechichinaka/full/QdjwEY",type:"frontend",create_on:"2019-08-04T14:41:35.932Z",img_url:"/Image/quoteMachinePage.PNG"},{skills:["html5","css3","express","Node.js"],name:"Converter",description:"A converter application. This app is used to convert between different units, eg km - mi and vice versa.",code_url:"https://github.com/ke1echi/information-security-and-quality-assurance-projects-repo/tree/master/metric-imperial-converter-app",demo_url:"https://ke1echi-metric-app-1.glitch.me/",type:"fullstack",create_on:"2019-08-04T14:41:35.932Z",img_url:"/Image/converterPage.PNG"},{skills:["d3","sass","javascript"],name:"Scatter Plot",description:"A graph which shows Professional Bicycle Racers and their doping records using the x and y axis. This is another project I did while learning data visualization with D3.",code_url:"https://codepen.io/kelechichinaka/pen/QWwMNdp",demo_url:"https://codepen.io/kelechichinaka/full/QWwMNdp",type:"frontend",create_on:"2019-08-04T14:41:35.932Z",img_url:"/Image/scatterPlotPage.PNG"},{skills:["html5","css3"],name:"Documentation Page",description:"This is a documentation page I built about D3. Its a javascript library for data visualization.",code_url:"https://github.com/ke1echi/responsive-web-design-projects/tree/master/Technical_Documentation_Page",demo_url:"https://codepen.io/kelechichinaka/full/GPNbGG",type:"frontend",create_on:"2019-08-04T14:41:35.932Z",img_url:"/Image/documentationPage.PNG"},{skills:["html5","css3"],name:"Tribute Page",description:"This is was my first project built while learning on freeCodeCamp. A tribute page to one of my favourite writers.",code_url:"https://github.com/ke1echi/responsive-web-design-projects/tree/master/Tribute_Page",demo_url:"https://codepen.io/kelechichinaka/full/MbGLew",type:"frontend",create_on:"2019-08-04T14:41:35.932Z",img_url:"/Image/tributePageImage.PNG"}],b=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(l.a)(this,Object(m.a)(t).call(this,e))).state={store:f,project:f,activeTag:"All Projects"},a.controlTag=a.controlTag.bind(Object(p.a)(a)),a.childDiv=n.a.createRef(),a}return Object(d.a)(t,e),Object(s.a)(t,[{key:"controlTag",value:function(e){var t=document.getElementsByClassName("active")[0],a=document.getElementById("all-project");t&&(t.className="No Name"),a.className="first"!==a.className?"first":"second";var r=this.state.store,n="all"===e.target.id?r:r.filter(function(t){return t.type===e.target.id});e.target.className="active",this.setState({project:n})}},{key:"render",value:function(){return n.a.createElement("div",{className:"App"},n.a.createElement(u,null),n.a.createElement(k,{project:this.state.project,tag:this.state.activeTag,control:this.controlTag,scroll:this.childDiv}))}}]),t}(n.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(n.a.createElement(b,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},9:function(e,t,a){e.exports=a(17)}},[[9,1,2]]]);
//# sourceMappingURL=main.ac3c02b5.chunk.js.map