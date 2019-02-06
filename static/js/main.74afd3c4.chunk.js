(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{16:function(e,t,a){e.exports=a(27)},25:function(e,t,a){},27:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(15),o=a.n(c),s=a(6),l=a(7),i=a(11),u=a(8),h=a(12),m=a(29),f=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={submit:!1},a.handleSubmit=function(e){e.preventDefault(),a.props.search(a.input.value),e.currentTarget.reset(),a.setState({submit:!0})},a}return Object(h.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this;return this.state.submit?(this.setState({submit:!1}),r.a.createElement(m.a,{to:"/search"})):r.a.createElement("form",{className:"search-form",onSubmit:this.handleSubmit},r.a.createElement("input",{type:"search",name:"search",placeholder:"Search",ref:function(t){return e.input=t},required:!0}),r.a.createElement("button",{type:"submit",className:"search-button"},r.a.createElement("svg",{fill:"#fff",height:"24",viewBox:"0 0 23 23",width:"24",xmlns:"http://www.w3.org/2000/svg"},r.a.createElement("path",{d:"M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"}),r.a.createElement("path",{d:"M0 0h24v24H0z",fill:"none"}))))}}]),t}(n.Component),p=a(31),d=function(){return r.a.createElement("nav",{className:"main-nav"},r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement(p.a,{to:"/cats"},"Cats")),r.a.createElement("li",null,r.a.createElement(p.a,{to:"/dogs"},"Dogs")),r.a.createElement("li",null,r.a.createElement(p.a,{to:"/computers"},"Computers"))))},g=function(e){var t=e.url;return r.a.createElement("li",null,r.a.createElement("img",{src:t,alt:""}))},E=function(e){var t=e.urls,a=e.loading,n=e.searchTerm;return r.a.createElement("div",{className:"photo-container"},r.a.createElement("h2",null,"Results for ",n),r.a.createElement("ul",null,function(){var e=t.map(function(e,t){return r.a.createElement(g,{key:t,url:e})});return 0===e.length?a?r.a.createElement("li",{className:"not-found"},r.a.createElement("h3",null,"Loading...")):r.a.createElement("li",{className:"not-found"},r.a.createElement("h3",null,"No Results Found"),r.a.createElement("p",null,"You search did not return any results. Please try again.")):e}()))},v=function(e){e.url;return r.a.createElement("h2",null,"404 Page Not Found")},b=function(){return r.a.createElement("h2",null,"Enter a search term or click a link above for images.")},k="ed23e04c27c008007b020808b181f9ab",j=a(30),w=a(28),y=a(32),S=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={search:{urls:[],loading:!0,q:""},cats:{urls:[],loading:!0},dogs:{urls:[],loading:!0},computers:{urls:[],loading:!0}},a}return Object(h.a)(t,e),Object(l.a)(t,[{key:"handleSearch",value:function(e){var t=this;this.setState({search:{urls:[],loading:!0}}),fetch("https://api.flickr.com/services/rest/?per_page=24&method=flickr.photos.search&api_key=".concat(k,"&tags=").concat(e,"&format=json&nojsoncallback=1")).then(function(e){return e.json()}).then(function(e){return e.photos.photo.map(function(e){return"https://farm".concat(e.farm,".staticflickr.com/").concat(e.server,"/").concat(e.id,"_").concat(e.secret,".jpg")})}).then(function(a){return t.setState({search:{urls:a,loading:!1,q:e}})}).catch(function(e){return console.log("error fetching and parsing data",e)})}},{key:"componentDidMount",value:function(){var e=this;fetch("https://api.flickr.com/services/rest/?per_page=24&method=flickr.photos.search&api_key=".concat(k,"&tags=cats&format=json&nojsoncallback=1")).then(function(e){return e.json()}).then(function(e){return e.photos.photo.map(function(e){return"https://farm".concat(e.farm,".staticflickr.com/").concat(e.server,"/").concat(e.id,"_").concat(e.secret,".jpg")})}).then(function(t){return e.setState({cats:{urls:t,loading:!1}})}).catch(function(e){return console.log("error fetching and parsing data",e)}),fetch("https://api.flickr.com/services/rest/?per_page=24&method=flickr.photos.search&api_key=".concat(k,"&tags=dogs&format=json&nojsoncallback=1")).then(function(e){return e.json()}).then(function(e){return e.photos.photo.map(function(e){return"https://farm".concat(e.farm,".staticflickr.com/").concat(e.server,"/").concat(e.id,"_").concat(e.secret,".jpg")})}).then(function(t){return e.setState({dogs:{urls:t,loading:!1}})}).catch(function(e){return console.log("error fetching and parsing data",e)}),fetch("https://api.flickr.com/services/rest/?per_page=24&method=flickr.photos.search&api_key=".concat(k,"&tags=computers&format=json&nojsoncallback=1")).then(function(e){return e.json()}).then(function(e){return e.photos.photo.map(function(e){return"https://farm".concat(e.farm,".staticflickr.com/").concat(e.server,"/").concat(e.id,"_").concat(e.secret,".jpg")})}).then(function(t){return e.setState({computers:{urls:t,loading:!1}})}).catch(function(e){return console.log("error fetching and parsing data",e)})}},{key:"render",value:function(){var e=this;return r.a.createElement(j.a,null,r.a.createElement("div",{className:"App"},r.a.createElement(w.a,{render:function(){return r.a.createElement(f,{search:e.handleSearch.bind(e)})}}),r.a.createElement(d,null),r.a.createElement(y.a,null,r.a.createElement(w.a,{path:"/cats",render:function(){return r.a.createElement(E,{urls:e.state.cats.urls,loading:e.state.cats.loading,searchTerm:"cats"})}}),r.a.createElement(w.a,{path:"/dogs",render:function(){return r.a.createElement(E,{urls:e.state.dogs.urls,loading:e.state.dogs.loading,searchTerm:"dogs"})}}),r.a.createElement(w.a,{path:"/computers",render:function(){return r.a.createElement(E,{urls:e.state.computers.urls,loading:e.state.computers.loading,searchTerm:"computers"})}}),r.a.createElement(w.a,{path:"/search",render:function(){return r.a.createElement(E,{urls:e.state.search.urls,loading:e.state.search.loading,searchTerm:e.state.search.q})}}),r.a.createElement(w.a,{path:"/",exact:!0,component:b}),r.a.createElement(w.a,{component:v}))))}}]),t}(n.Component);a(25),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(S,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[16,2,1]]]);
//# sourceMappingURL=main.74afd3c4.chunk.js.map