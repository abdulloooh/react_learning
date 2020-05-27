(this.webpackJsonpvidly=this.webpackJsonpvidly||[]).push([[0],{42:function(e,t,a){e.exports=a(77)},73:function(e,t,a){},76:function(e,t,a){},77:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(21),s=a.n(o),l=a(4),c=a(5),i=a(7),u=a(6),m=a(22),p=a(18),d=a(16),v=a(27),h=a(2),f=a.n(h),b=a(10),g=a(8),E=a(15),y=a.n(E);var k=function(e){var t=e.pageSize,a=e.itemsCount,n=e.currentPage,o=e.onPageChange,s=Math.ceil(a/t);if(1===s)return null;var l=y.a.range(1,s+1);return r.a.createElement("nav",null,r.a.createElement("ul",{className:"pagination"},l.map((function(e){return r.a.createElement("li",{key:e,className:e===n?"page-item active":"page-item"},r.a.createElement("a",{href:"#",className:"page-link",onClick:function(){o(e)}},e))}))))},w=function(e){var t=e.items,a=e.onItemSelect,n=e.selectedItem,o=e.keyProperty,s=e.valueProperty;return r.a.createElement("ul",{className:"list-group py-5"},t.map((function(e){return r.a.createElement("li",{key:e[o],style:{cursor:"pointer"},className:e===n?"list-group-item active":"list-group-item",onClick:function(){return a(e)}},e[s])})))};w.defaultProps={keyProperty:"_id",valueProperty:"name"};var j=w,O=a(20),S=function(e){var t=e.name,a=Object(O.a)(e,["name"]);return r.a.createElement("div",{className:"form-group"},r.a.createElement("input",Object.assign({type:"text",className:"form-control",id:t},a)))},C=a(19),N=a.n(C);var x={init:function(){},log:function(e){console.error("Error Message:",e)}};N.a.defaults.baseURL="https://boiling-sands-70974.herokuapp.com/api",N.a.interceptors.response.use(null,(function(e){return e.response&&e.response.status>=400&&e.response.status<500||(p.b.error("Unexpected error encountered"),x.log(e)),Promise.reject(e)}));var I={get:N.a.get,post:N.a.post,put:N.a.put,delete:N.a.delete,patch:N.a.patch,setJwt:function(e){N.a.defaults.headers.common["x-auth-token"]=e}};function P(e){return"".concat("/movies","/").concat(e)}function M(e){return I.get(P(e))}function _(e){var t=Object(d.a)({},e);return delete t._id,e._id?I.put(P(e._id),t):I.post("/movies",t)}function R(e){I.delete(P(e))}function A(){return I.get("/genres")}var D=a(39),T=a.n(D),q="vidly_token";function G(){return(G=Object(b.a)(f.a.mark((function e(t,a){var n,r;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,I.post("/auth",{email:t,password:a});case 2:n=e.sent,r=n.data,localStorage.setItem(q,r);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function U(){return localStorage.getItem(q)}I.setJwt(U());var F={login:function(e,t){return G.apply(this,arguments)},loginWithJWT:function(e){localStorage.setItem(q,e)},logout:function(){localStorage.removeItem(q)},getCurrentUser:function(){try{return T()(localStorage.getItem(q))}catch(e){return null}},getJwt:U},B=function(e){var t="fa fa-heart";return e.liked||(t+="-o"),r.a.createElement("i",{className:t,onClick:e.onClick,style:{cursor:"pointer"}})},J=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,o=new Array(n),s=0;s<n;s++)o[s]=arguments[s];return(e=t.call.apply(t,[this].concat(o))).raiseSort=function(t){var a="asc";t===e.props.sortColumn.path&&(a="asc"===e.props.sortColumn.order?"desc":"asc"),e.props.onSort({path:t,order:a})},e.renderSortIcon=function(t){var a=e.props.sortColumn;return t.path!==a.path?null:"asc"===a.order?r.a.createElement("i",{className:"fa fa-sort-asc"}):r.a.createElement("i",{className:"fa fa-sort-desc"})},e}return Object(c.a)(a,[{key:"render",value:function(){var e=this,t=this.props.columns;return r.a.createElement("thead",null,r.a.createElement("tr",null,t.map((function(t){return r.a.createElement("th",{className:"clickable",key:t.path||t.key,onClick:function(){e.raiseSort(t.path)}},t.label,e.renderSortIcon(t))}))))}}]),a}(n.Component),W=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).renderCell=function(e,t){return t.content?t.content(e):y.a.get(e,t.path)},e}return Object(c.a)(a,[{key:"render",value:function(){var e=this,t=this.props,a=t.data,n=t.columns;return r.a.createElement("tbody",null,a.map((function(t){return r.a.createElement("tr",{key:t._id},n.map((function(a){return r.a.createElement("td",{key:a.path||a.key},e.renderCell(t,a))})))})))}}]),a}(n.Component),L=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(l.a)(this,a),(e=t.call(this)).columns=[{path:"title",label:"Title",content:function(t){return e.props.adminCheck?r.a.createElement(g.b,{to:"/movies/".concat(t._id)},t.title):t.title}},{path:"genre.name",label:"Genre"},{path:"numberInStock",label:"Stock"},{path:"dailyRentalRate",label:"Rate"},{key:"like",content:function(t){return r.a.createElement(B,{liked:t.like,onClick:function(){return e.props.onClick(t)}})}}];var n=F.getCurrentUser();return n&&n.isAdmin&&e.columns.push({key:"delete",content:function(t){return r.a.createElement("button",{className:"btn btn-danger btn-sm mt-2",onClick:function(){e.props.onDelete(t)}},"Delete")}}),e}return Object(c.a)(a,[{key:"render",value:function(){var e=this.props,t=e.movies,a=e.onSort,n=e.sortColumn;return r.a.createElement("table",{className:"table"},r.a.createElement(J,{columns:this.columns,sortColumn:n,onSort:a}),r.a.createElement(W,{data:t,columns:this.columns}))}}]),a}(n.Component),z=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={allMovies:[],allGenres:[],pageSize:3,currentPage:1,searchQuery:"",sortColumn:{path:"title",order:"asc"}},e.genreChange=function(t){e.setState({currentPage:1}),e.setState({selectedGenre:t,searchQuery:""})},e.handleDelete=function(){var t=Object(b.a)(f.a.mark((function t(a){var n,r;return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.state.allMovies,r=e.state.allMovies.filter((function(e){return e._id!==a._id})),e.setState({allMovies:r}),t.prev=3,t.next=6,R(a._id);case 6:t.next=12;break;case 8:t.prev=8,t.t0=t.catch(3),t.t0.response&&404===t.t0.response.status?p.b.error("This movie can not be found"):t.t0.response&&400===t.t0.response.status&&p.b.error("Invalid request"),e.setState({allMovies:n});case 12:case"end":return t.stop()}}),t,null,[[3,8]])})));return function(e){return t.apply(this,arguments)}}(),e.handleClick=function(t){var a=Object(v.a)(e.state.allMovies),n=a.indexOf(t);a[n]=Object(d.a)({},e.state.allMovies[n]),a[n].like=!a[n].like,e.setState({allMovies:a})},e.handleSort=function(t){e.setState({sortColumn:t})},e.handlePageChange=function(t){e.setState({currentPage:t})},e.handleSearch=function(t){var a=t.currentTarget.value;e.setState({searchQuery:a,currentPage:1,selectedGenre:null})},e}return Object(c.a)(a,[{key:"componentDidMount",value:function(){var e=Object(b.a)(f.a.mark((function e(){var t,a,n,r;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,A();case 2:return t=e.sent,a=t.data,e.next=6,I.get("/movies");case 6:n=e.sent,r=n.data,this.setState({allMovies:r,allGenres:[{_id:"",name:"All Genres"}].concat(Object(v.a)(a))});case 9:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=F.getCurrentUser(),t=this.state,a=t.allMovies,n=t.allGenres,o=t.pageSize,s=t.currentPage,l=t.selectedGenre,c=t.sortColumn,i=t.searchQuery,u=a.length,m=this.getPagedData(l,a,c,o,s,i),p=m.totalCount,d=m.movies;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"row mt-5"},r.a.createElement("div",{className:"col-sm-2"},r.a.createElement(j,{items:n,onItemSelect:this.genreChange,selectedItem:l})),r.a.createElement("div",{className:"col"},e&&r.a.createElement(g.b,{className:"btn btn-primary",to:"/movies/new"},"Add Movie"),r.a.createElement("p",{className:"mt-2"},"Showing ",p," movie",1===u?"":"s"," in the database"),r.a.createElement(S,{name:"search",placeholder:"Search...",onChange:this.handleSearch,value:i}),r.a.createElement(L,{movies:d,onClick:this.handleClick,onDelete:this.handleDelete,onSort:this.handleSort,sortColumn:c}),r.a.createElement(k,{pageSize:o,itemsCount:p,currentPage:s,onPageChange:this.handlePageChange}))))}},{key:"getPagedData",value:function(e,t,a,n,r,o){var s=e&&e._id?t.filter((function(t){return t.genre._id===e._id})):o?t.filter((function(e){return e.title.toLowerCase().startsWith(o)})):t,l=function(e,t,a){var n=(a-1)*t;return y()(e).slice(n).take(t).value()}(y.a.orderBy(s,a.path,a.order),n,r);return{totalCount:s.length,movies:l}}}]),a}(n.Component),Q=function(e){var t=e.user;return r.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-light bg-light"},r.a.createElement(g.c,{className:"navbar-brand",to:"/"},"Vidly"),r.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation"},r.a.createElement("span",{className:"navbar-toggler-icon"})),r.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarNav"},r.a.createElement("ul",{className:"navbar-nav"},r.a.createElement("li",{className:"nav-item"},r.a.createElement(g.c,{className:"nav-link",to:"/movies"},"Movies")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(g.c,{className:"nav-link",to:"/customers"},"Customers")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(g.c,{className:"nav-link",to:"/rentals"},"Rentals")),!t&&r.a.createElement(r.a.Fragment,null,r.a.createElement("li",{className:"nav-item"},r.a.createElement(g.c,{className:"nav-link",to:"/login"},"Login")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(g.c,{className:"nav-link",to:"/register"},"Register"))),t&&r.a.createElement(r.a.Fragment,null,r.a.createElement("li",{className:"nav-item"},r.a.createElement(g.c,{className:"nav-link",to:"/profile"},t.name)),r.a.createElement("li",{className:"nav-item"},r.a.createElement(g.c,{className:"nav-link",to:"/logout"},"Logout"))))))},V=function(){return r.a.createElement("h1",null,"Not Found")},$=function(){return r.a.createElement("h1",null,"Customers")},H=function(){return r.a.createElement("h1",null,"Rentals")},K=a(9),X=a.n(K),Y=function(e){var t=e.label,a=e.name,n=e.error,o=Object(O.a)(e,["label","name","error"]);return r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:a},t),r.a.createElement("input",Object.assign({},o,{name:a,className:"form-control"})),r.a.createElement("br",null),n&&(n.constructor!==Array?r.a.createElement("div",{key:n,className:"alert alert-danger"},n):n.map((function(e){return r.a.createElement("div",{key:e,className:"alert alert-danger"},e)}))))},Z=function(e){var t=e.label,a=e.name,n=e.options,o=e.error,s=Object(O.a)(e,["label","name","options","error"]);return r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:""},t),r.a.createElement("select",Object.assign({},s,{name:a,className:"form-control"}),n.map((function(e){return r.a.createElement("option",{key:e._id,value:e._id},e.name)}))),r.a.createElement("br",null),o&&(o.constructor!==Array?r.a.createElement("div",{key:o,className:"alert alert-danger"},o):o.map((function(e){return r.a.createElement("div",{key:e,className:"alert alert-danger"},e)}))))},ee=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={data:{},errors:{}},e.validate=function(){var t={},a=X.a.validate(e.state.data,e.schema,{abortEarly:!1});return a.error?(a.error.details.map((function(e){return t[e.path[0]]?t[e.path[0]].push(e.message):t[e.path[0]]=new Array(e.message)})),t):null},e.handleSubmit=function(t){t.preventDefault();var a=e.validate();if(e.setState({errors:a||{}}),a)return!1;e.doSubmit()},e.validateProperty=function(t,a){var n=X.a.validate(a,e.schema[t]).error;return n?n.details[0].message:null},e.handleChange=function(t){var a=t.currentTarget,n=a.name,r=a.value,o=Object(d.a)({},e.state.data);o[n]=r,e.setState({data:o});var s=Object(d.a)({},e.state.errors),l=e.validateProperty(n,r);l?s[n]=l:delete s[n],e.setState({errors:s})},e}return Object(c.a)(a,[{key:"renderInput",value:function(e,t){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"text",n=this.state,o=n.errors,s=n.data;return r.a.createElement(Y,{id:t,label:e,name:t,type:a,value:y.a.get(s,t),onChange:this.handleChange,error:o[t],autoComplete:"new-password"})}},{key:"renderSelect",value:function(e,t,a){var n=this.state,o=n.errors,s=n.data;return r.a.createElement(Z,{label:e,id:t,name:t,value:y.a.get(s,t),onChange:this.handleChange,options:a,error:o[t]})}},{key:"renderButton",value:function(e){return r.a.createElement("button",{type:"submit",className:"btn btn-primary"},e)}}]),a}(n.Component),te=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={data:{_id:"",title:"",genreId:"",numberInStock:"",dailyRentalRate:""},errors:{},genres:[]},e.schema={_id:X.a.required(),title:X.a.string().required().label("Title"),genreId:X.a.string().required().label("Genre"),numberInStock:X.a.number().min(0).max(100).required().label("Stock"),dailyRentalRate:X.a.number().min(0).max(10).required().label("Rate")},e.populateGenre=Object(b.a)(f.a.mark((function t(){var a,n;return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,A();case 2:a=t.sent,n=a.data,e.setState({genres:n});case 5:case"end":return t.stop()}}),t)}))),e.populateMovie=Object(b.a)(f.a.mark((function t(){var a,n;return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if("new"!==e.props.match.params.id){t.next=2;break}return t.abrupt("return");case 2:return"new"!==e.props.match.params.id&&(F.getCurrentUser().isAdmin||(window.location="/")),t.prev=3,t.next=6,M(e.props.match.params.id);case 6:a=t.sent,n=a.data,e.setState({data:e.mapToViewModel(n)}),t.next=16;break;case 11:if(t.prev=11,t.t0=t.catch(3),!t.t0.response||404!==t.t0.response.status){t.next=16;break}return p.b.error("This movie can not be found",{autoclose:3e3}),t.abrupt("return",e.props.history.replace("/not-found"));case 16:case"end":return t.stop()}}),t,null,[[3,11]])}))),e.doSubmit=Object(b.a)(f.a.mark((function t(){return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,_(e.state.data);case 3:t.next=8;break;case 5:t.prev=5,t.t0=t.catch(0),t.t0.response&&404===t.t0.response.status?p.b.error("This movie can not be found"):t.t0.response&&400===t.t0.response.status&&p.b.error("Invalid request");case 8:e.props.history.replace("/movies");case 9:case"end":return t.stop()}}),t,null,[[0,5]])}))),e}return Object(c.a)(a,[{key:"componentDidMount",value:function(){var e=Object(b.a)(f.a.mark((function e(){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.populateGenre();case 2:return e.next=4,this.populateMovie();case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"mapToViewModel",value:function(e){return{_id:e._id,title:e.title,genreId:e.genre._id,numberInStock:e.numberInStock,dailyRentalRate:e.dailyRentalRate}}},{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",null,"Movie Form"),r.a.createElement("form",{action:"",onSubmit:this.handleSubmit},this.renderInput("Title","title"),this.renderSelect("Genre","genreId",this.state.genres),this.renderInput("Number in Stock","numberInStock"),this.renderInput("Rate","dailyRentalRate"),this.renderButton("Update")))}}]),a}(ee),ae=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={data:{username:"",password:""},errors:{}},e.schema={username:X.a.string().min(3).max(30).required().label("Email"),password:X.a.string().min(5).required().label("Password")},e}return Object(c.a)(a,[{key:"doSubmit",value:function(){var e=Object(b.a)(f.a.mark((function e(){var t,a,n,r,o;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t=this.state.data,a=t.username,n=t.password,e.next=4,F.login(a,n);case 4:r=this.props.location.state,window.location=r?r.from.pathname:"/",e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),e.t0.response&&400===e.t0.response.status&&((o=Object(d.a)({},this.state.errors)).username=e.t0.response.data,this.setState({errors:o}));case 11:case"end":return e.stop()}}),e,this,[[0,8]])})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return F.getCurrentUser()?r.a.createElement(m.a,{to:"/"}):r.a.createElement("div",null,r.a.createElement("h1",null,"Login"),r.a.createElement("form",{action:"",onSubmit:this.handleSubmit},this.renderInput("Username","username","email"),this.renderInput("Password","password","password"),this.renderButton("Login")))}}]),a}(ee);function ne(e){return I.post("/users",{email:e.email,password:e.password,name:e.name})}var re=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={data:{email:"",password:"",name:""},errors:{}},e.schema={email:X.a.string().email({minDomainAtoms:2}).required().label("Email"),password:X.a.string().min(5).required().label("Password"),name:X.a.string().required()},e.doSubmit=Object(b.a)(f.a.mark((function t(){var a,n;return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,ne(e.state.data);case 3:a=t.sent,F.loginWithJWT(a.headers["x-auth-token"]),window.location="/",t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),t.t0.response&&400===t.t0.response.status&&((n=Object(d.a)({},e.state.errors)).email=t.t0.response.data,e.setState({errors:n}));case 11:case"end":return t.stop()}}),t,null,[[0,8]])}))),e}return Object(c.a)(a,[{key:"render",value:function(){return F.getCurrentUser()?r.a.createElement(m.a,{to:"/"}):r.a.createElement("form",{action:"",onSubmit:this.handleSubmit},this.renderInput("Email","email"),this.renderInput("Password","password","password"),this.renderInput("Name","name"),this.renderButton("Register"))}}]),a}(ee),oe=function(e){var t=e.component,a=Object(O.a)(e,["component"]);return r.a.createElement(m.b,Object.assign({},a,{render:function(e){return F.getCurrentUser()?r.a.createElement(t,e):r.a.createElement(m.a,{to:{pathname:"/login",state:{from:e.location}}})}}))},se=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"componentDidMount",value:function(){F.logout(),window.location="/"}},{key:"render",value:function(){return null}}]),a}(n.Component),le=(a(72),a(73),function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={},e}return Object(c.a)(a,[{key:"componentDidMount",value:function(){var e=F.getCurrentUser();this.setState({user:e})}},{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(p.a,null),r.a.createElement(Q,{user:this.state.user}),r.a.createElement("main",{role:"main",className:"container"},r.a.createElement(m.d,null,r.a.createElement(oe,{component:te,path:"/movies/:id"}),r.a.createElement(m.b,{path:"/movies",component:z}),"} />",r.a.createElement(m.b,{path:"/customers",component:$}),r.a.createElement(m.b,{path:"/rentals",component:H}),r.a.createElement(m.b,{path:"/login",component:ae}),r.a.createElement(m.b,{path:"/register",component:re}),r.a.createElement(m.b,{path:"/logout",component:se}),r.a.createElement(m.a,{exact:!0,from:"/",to:"/movies"}),r.a.createElement(m.b,{path:"/not-found",component:V}),r.a.createElement(m.a,{to:"not-found"}))))}}]),a}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(74),a(75),a(76);x.init(),s.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(g.a,null,r.a.createElement(le,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[42,1,2]]]);
//# sourceMappingURL=main.0e8701e1.chunk.js.map