(this.webpackJsonpempdir=this.webpackJsonpempdir||[]).push([[0],[,function(e){e.exports=JSON.parse('[{"id":1,"image":"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQfR-wr9qSvl0q18HMt_LK7fB4Ssh6Acsca2A&usqp=CAU","name":"Tommy Cheng","email":"tcheng@gmail.com","number":"(909) 204-0000"},{"id":2,"image":"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ2SLR6byGmXxkk14ay0q83ZdZleTkYYb5BSg&usqp=CAU","name":"Lisa Ann","email":"lann@gmail.com","number":"(909) 204-0200"},{"id":3,"image":"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRk1WGsx1XXxlgbvWS-ZyHW2cyAnjc9u9U_uQ&usqp=CAU","name":"Gianna Dior","email":"gdior@gmail.com","number":"(909) 204-0300"},{"id":4,"image":"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ4lT6c3OEoasZOhpZmzNUMBuE73eW7TBuCgg&usqp=CAU","name":"Hannah Smith","email":"hsmith@gmail.com","number":"(909) 204-0400"},{"id":5,"image":"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQyo_veil_WdXR9XZP2WJAGr9Gu8sIx2Pfpfw&usqp=CAU","name":"Sarah Lopez","email":"slopez@gmail.com","number":"(909) 204-0500"},{"id":6,"image":"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQR5kf1m4RVKiD5J6o-8TnJNLiU4evWxOR2tw&usqp=CAU","name":"Greg Sneed","email":"gsneed@gmail.com","number":"(909) 204-0600"},{"id":7,"image":"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQsC37E7vwhWOKS4EQefvQF-TK_1XxXzP7Uwg&usqp=CAU","name":"Randy Moore","email":"tCheng@gmail.com","number":"(909) 204-0700"},{"id":8,"image":"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcScqUYPeB8FcKqUK_EClWpM5f0_bAktsw-cEw&usqp=CAU","name":"Andrew Hampton","email":"tCheng@gmail.com","number":"(909) 204-0800"},{"id":9,"image":"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTAbzpU65pn4sfc5sAodcVpOLFFqxptYruGBw&usqp=CAU","name":"Wendy Wagner","email":"wwagner@gmail.com","number":"(909) 204-0900"},{"id":10,"image":"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTswPETV2Qxxv5JlusyaqlqdkwfR-omoHjB8g&usqp=CAU","name":"Matt Colt","email":"mcolt@gmail.com","number":"(909) 204-0100"}]')},,,,,,,function(e,t,a){e.exports=a(15)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),m=a(3),c=a.n(m),i=(a(13),a(4)),l=a(5),o=a(7),s=a(6);function u(e){return r.a.createElement("table",{className:"table table-striped"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"image"),r.a.createElement("th",null,r.a.createElement("button",{onClick:function(){return e.sortBy()}},"Name")),r.a.createElement("th",null,"email"),r.a.createElement("th",null,"number"))),r.a.createElement("tbody",null,e.data.map((function(e){return r.a.createElement("tr",{key:e.id},r.a.createElement("th",{scope:"row"},r.a.createElement("img",{alt:"",src:e.image})),r.a.createElement("td",null,e.name),r.a.createElement("td",null,e.email),r.a.createElement("td",null,e.number))}))))}a(14);var d=a(1),g=function(e){Object(o.a)(a,e);var t=Object(s.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).sortBy=function(){var e=n.state.rawData;if("d"===n.state.sortedDirection){var t=e.sort((function(e,t){return e.name.toLowerCase()>t.name.toLowerCase()?-1:1}));n.setState({filteredData:t,sortedDirection:"u"})}else{var a=e.sort((function(e,t){return e.name.toLowerCase()<t.name.toLowerCase()?-1:1}));n.setState({filteredData:a,sortedDirection:"d"})}},n.filter=function(e){var t=e.target.value;console.log(t)},n.state={filteredData:d,rawData:d,search:"",sortedDirection:null},n}return Object(l.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-dark bg-dark fixed"},r.a.createElement("div",{className:"search-area col-4"},r.a.createElement("div",{className:"searchbox"},r.a.createElement("form",{className:"form-inline"},r.a.createElement("input",{className:"form-control mr-sm-2",type:"search",placeholder:"Name","aria-label":"Search",onChange:this.filter}),r.a.createElement("button",{className:"btn my-2 my-sm-0",type:"submit"},"Search"))))),r.a.createElement("div",{className:"header"},r.a.createElement("h1",null,"Employee Directory"),r.a.createElement("p",null,"Click on each heading to filter or use the search box to narrow your results")),r.a.createElement("div",{className:"page-container"},r.a.createElement(u,{data:this.state.filteredData,sortBy:this.sortBy})))}}]),a}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(g,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[8,1,2]]]);
//# sourceMappingURL=main.69d3f496.chunk.js.map