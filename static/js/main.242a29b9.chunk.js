(this.webpackJsonpmyapp=this.webpackJsonpmyapp||[]).push([[0],{104:function(e,t,n){e.exports=n(182)},180:function(e,t,n){},182:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),o=n(9),i=n.n(o),r=n(55),l=n(11),s=n(24),u=n(25),m=n(27),p=n(26),d=n(13),h=(n(96),function(e){Object(m.a)(n,e);var t=Object(p.a)(n);function n(){var e;Object(s.a)(this,n);for(var a=arguments.length,c=new Array(a),o=0;o<a;o++)c[o]=arguments[o];return(e=t.call.apply(t,[this].concat(c))).state={data:[1,2,3],imgHeight:176},e}return Object(u.a)(n,[{key:"componentDidMount",value:function(){var e=this;setTimeout((function(){e.setState({data:["https://picasso.alicdn.com/imgextra/i3/382208/O1CNA1iyU1IP100ff4af62860b14de730004_!!382208-0-picassobanner.jpg","https://img.alicdn.com/imgextra/i2/96/O1CN014g0ADB1Ca0eWkU60Z_!!96-0-luban.jpg","https://img.alicdn.com/imgextra/i3/27/O1CN019CAYMI1C4PK6mp9qX_!!27-0-luban.jpg"]})}),100)}},{key:"render",value:function(){var e=this;return c.a.createElement(d.b,{autoplay:!0,infinite:!0},this.state.data.map((function(t){return c.a.createElement("a",{key:t,href:"http://www.alipay.com",style:{display:"inline-block",height:e.state.imgHeight}},c.a.createElement("img",{src:"".concat(t),alt:"",style:{width:"100%",height:"176px",verticalAlign:"top"},onLoad:function(){window.dispatchEvent(new Event("resize")),e.setState({imgHeight:"auto"})}}))})))}}]),n}(a.Component)),f=n(12),E=n(19),g=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{userinfo:""},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"LOGIN":return Object.assign(e,{},{usr:"abc"}),{userinfo:t.userinfo};default:return e}},b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{datalist:[]},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"LIST":return{datalist:t.datalist};default:return e}},y=n(42),v=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;if("COLLECT"===t.type&&e.map((function(n,a){return t.value.img===n.img?(e.splice(a,1),console.log(e),e):[].concat(Object(y.a)(e),[t.value])})),"DELETE"===t.type){var n=Object(y.a)(e);return n.splice(t.index,1),n}return e},O=Object(E.c)({login:g,datalist:b,shoucang:v});var j=Object(E.e)(O,Object(E.d)(Object(E.a)((function(e){var t=e.getState;return function(e){return function(n){console.log("will dispatch",n);var a=e(n);return"COLLECT"===n.type&&t().shoucang.push(n.value),console.log("state after dispatch",t()),a}}}),(function(e){var t=e.dispatch,n=e.getState;return function(e){return function(a){return console.log("thunk"),"function"===typeof a?a(t,n):e(a)}}})),window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__())),w=Object(f.b)((function(e){return console.log(555555,e),{datalist:e.datalist.datalist}}))((function(e){console.log(11111,e.datalist);return c.a.createElement("div",{onLoad:void e.dispatch((function(e){fetch("https://www.fastmock.site/mock/9e4bbf9e35ad15942010865690c87ac6/api/getgoodslist",{method:"post",headers:{"Content-Type":"application/json"}}).then((function(e){return e.json()})).then((function(t){console.log(t.data),e({type:"LIST",datalist:t.data})}))}))},c.a.createElement("ul",null,e.datalist.map((function(t,n){return c.a.createElement("li",{key:n,style:{width:"160px",height:"220px",background:"white",float:"left",margin:"10px 10px",borderRadius:"10px"}},c.a.createElement("img",{src:"".concat(t.img),style:{width:"160px",height:"160px",borderRadius:"10px"},onClick:function(){e.data.history.push("/details",[t.img,t.id,t.title]),console.log(t.img)}}),c.a.createElement("p",{style:{fontSize:"14px",fontFamily:"\u5b8b\u4f53"}},t.title),c.a.createElement("p",{style:{fontSize:"12px",paddingBottom:"10px"}},c.a.createElement("span",{style:{fontSize:"15px",color:"red",fontWeight:"bold"}},"\uffe5",t.price)))}))))})),x=(n(180),Object(f.b)((function(e){return console.log(e),{userinfo:e.login.userinfo,mydata:e.shoucang}}))((function(e){return Object(a.useEffect)((function(){var t=document.getElementById("sc");e.mydata.map((function(n){e.location.state[0]===n.img&&(t.className="iconfont icon-shoucang1")}))})),c.a.createElement("div",{className:"details"},c.a.createElement("img",{src:e.location.state[0]}),c.a.createElement(d.c,{type:"left",size:"lg",style:{position:"relative",top:"-400px",opacity:"0.5"},onClick:function(){return e.history.push("/home")}}),c.a.createElement("div",{className:"bot"},c.a.createElement("ul",null,c.a.createElement("li",{className:"iconfont icon-dianpu"},c.a.createElement("div",{id:"store"},"\u5e97\u94fa")),c.a.createElement("li",{className:"iconfont icon-kefuxiaoxixinxi"},c.a.createElement("div",{id:"service"},"\u5ba2\u670d")),c.a.createElement("li",{className:"iconfont icon-shoucang ",id:"sc",onClick:function(){""===e.userinfo?e.history.push("/login"):(document.getElementById("sc").className="iconfont icon-shoucang1",e.dispatch({type:"COLLECT",value:{img:e.location.state[0],title:e.location.state[2]}}))}},c.a.createElement("div",{id:"collect"},"\u6536\u85cf")),c.a.createElement("li",{id:"bright"},c.a.createElement("span",{id:"bright1"},"\u52a0\u5165\u8d2d\u7269\u8f66"),c.a.createElement("span",{id:"bright2"},"\u7acb\u5373\u8d2d\u4e70")))))}))),k=Object(f.b)((function(e){return console.log(e.login.userinfo),{userinfo:e.login.userinfo}}))((function(e){return console.log(e),c.a.createElement("div",null,e.userinfo?c.a.createElement("div",null,e.history.push("/shoucang")):c.a.createElement("div",{style:{background:"blue",width:"375px",height:"667px"}},c.a.createElement("form",null,c.a.createElement("input",{type:"text",name:"name",style:{margin:"250px 55px 30px",width:"250px",height:"35px"},placeholder:"\u7528\u6237\u540d"}),c.a.createElement("input",{type:"password",name:"password",style:{marginLeft:"55px",width:"250px",height:"35px"},placeholder:"\u5bc6\u7801"})),c.a.createElement("button",{style:{marginLeft:"130px",marginTop:"40px",width:"100px",height:"35px"},onClick:function(){e.dispatch((function(e){fetch("https://www.fastmock.site/mock/9e4bbf9e35ad15942010865690c87ac6/api/login",{method:"post",headers:{"Content-Type":"application/json"}}).then((function(e){return e.json()})).then((function(t){e({type:"LOGIN",userinfo:t.data.name})}))}))}},"\u767b\u5f55")))})),N=(n(97),function(e){Object(m.a)(n,e);var t=Object(p.a)(n);function n(e){var a;return Object(s.a)(this,n),(a=t.call(this,e)).state={hidden:!1,fullScreen:!1},a}return Object(u.a)(n,[{key:"render",value:function(){var e=this,t=this.props.location.pathname;return c.a.createElement("div",{style:{position:"fixed",bottom:"0",width:"100%"}},c.a.createElement(d.e,{unselectedTintColor:"#949494",tintColor:"#33A3F4",barTintColor:"white"},c.a.createElement(d.e.Item,{title:"\u9996\u9875",key:"\u9996\u9875",icon:c.a.createElement("i",{className:"iconfont icon-Homehomepagemenu"}),selectedIcon:c.a.createElement("i",{className:"iconfont icon-Homehomepagemenu1"}),selected:"/home"===t,onPress:function(){e.props.history.push("/home")},"data-seed":"logId"}),c.a.createElement(d.e.Item,{icon:c.a.createElement("i",{className:"iconfont icon-shoucang"}),selectedIcon:c.a.createElement("i",{className:"iconfont icon-tubiao14"}),title:"\u6536\u85cf",key:"\u6536\u85cf",selected:"/shoucang"===t,onPress:function(){e.props.history.push("/login")},"data-seed":"logId1"}),c.a.createElement(d.e.Item,{icon:c.a.createElement("i",{className:"iconfont icon-gouwuche"}),selectedIcon:c.a.createElement("i",{className:"iconfont icon-gouwuche1"}),title:"\u8d2d\u7269\u8f66",key:"\u8d2d\u7269\u8f66",selected:"/cart"===t,onPress:function(){e.props.history.push("/cart")},"data-seed":"logId1"}),c.a.createElement(d.e.Item,{icon:c.a.createElement("i",{className:"iconfont icon-dingdan"}),selectedIcon:c.a.createElement("i",{className:"iconfont icon-dingdan1"}),title:"\u8ba2\u5355\u5217\u8868",key:"\u8ba2\u5355\u5217\u8868",selected:"/list"===t,onPress:function(){e.props.history.push("/list")}}),c.a.createElement(d.e.Item,{icon:c.a.createElement("i",{className:"iconfont icon-wode"}),selectedIcon:c.a.createElement("i",{className:"iconfont icon-wodedangxuan"}),title:"\u6211\u7684\u6dd8\u5b9d",key:"\u6211\u7684\u6dd8\u5b9d",selected:"/my"===t,onPress:function(){e.props.history.push("/my")}})))}}]),n}(c.a.Component)),C=Object(l.g)(N),_=function(e){return c.a.createElement("div",{className:"home"},c.a.createElement("div",{className:"top0"},c.a.createElement("div",{className:"search0",onClick:function(){return e.history.push("/search")}},c.a.createElement("p",null,"\u6dd8"),c.a.createElement("div",{className:"tright"},c.a.createElement("span",{className:"iconfont icon-wode"},"  \u5bfb\u627e\u5b9d\u8d1d\u5e97\u94fa"))),c.a.createElement("div",{className:"imgs"},c.a.createElement(h,null)),c.a.createElement("div",{className:"shops"},c.a.createElement(w,{data:e})),c.a.createElement("div",{className:"bottom"}),c.a.createElement(C,null)))},I=function(e){Object(m.a)(n,e);var t=Object(p.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){return c.a.createElement("div",null,"cart",c.a.createElement(C,null))}}]),n}(a.Component),T=function(e){Object(m.a)(n,e);var t=Object(p.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){return c.a.createElement("div",null,"List",c.a.createElement(C,null))}}]),n}(a.Component),L=function(e){Object(m.a)(n,e);var t=Object(p.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){return c.a.createElement("div",null,"My",c.a.createElement(C,null))}}]),n}(a.Component),D=function(e){return c.a.createElement("div",null,c.a.createElement(d.d,{placeholder:"\u641c\u7d22\u5b9d\u8d1d",onCancel:function(){return e.history.push("/home")},showCancelButton:"true"}))},S=Object(f.b)((function(e){return{mydata:e.shoucang}}))((function(e){return c.a.createElement("div",null,c.a.createElement("h1",{style:{textAlign:"center"}},"\u6536\u85cf\u5217\u8868"),e.mydata.map((function(t,n){return c.a.createElement("div",{key:n,style:{margin:"auto"}},c.a.createElement("img",{src:t.img,style:{width:"200px",height:"250px"}}),c.a.createElement("li",{style:{width:"200px"}},t.title,c.a.createElement("button",{onClick:function(t){return e.dispatch({type:"DELETE",index:n})}},"\u5220\u9664")))})),c.a.createElement("div",{style:{height:"50px",width:"100%"}}),c.a.createElement(C,null))})),A=function(){return c.a.createElement(f.a,{store:j},c.a.createElement(r.a,null,c.a.createElement(l.a,{to:"/home"}),c.a.createElement(l.d,null,c.a.createElement(l.b,{exact:!0,path:"/home",component:_}),c.a.createElement(l.b,{path:"/cart",component:I}),c.a.createElement(l.b,{path:"/list",component:T}),c.a.createElement(l.b,{path:"/my",component:L}),c.a.createElement(l.b,{path:"/details",component:x}),c.a.createElement(l.b,{path:"/search",component:D}),c.a.createElement(l.b,{path:"/shops",component:w}),c.a.createElement(l.b,{path:"/shoucang",component:S}),c.a.createElement(l.b,{path:"/login",component:k}))))},X=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{username:""},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"LOGIN":return Object.assign(e,{},{usr:"abc"}),{username:t.username};default:return e}},P=[1,2,3];var B=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:P,t=arguments.length>1?arguments[1]:void 0;if("ADD_TODO"===t.type)return[].concat(Object(y.a)(e),[t.value]);if("DEL_TODO"===t.type){var n=Object(y.a)(e);return n.splice(t.index,1),n}return e},R=Object(E.c)({todo:B,home:X});Object(E.e)(R,Object(E.d)(Object(E.a)((function(e){var t=e.getState;return function(e){return function(n){console.log("will dispatch",n);var a=e(n);return console.log("state after dispatch",t()),a}}}),(function(e){var t=e.dispatch,n=e.getState;return function(e){return function(a){return console.log("thunk"),"function"===typeof a?a(t,n):e(a)}}})),window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__())),Object(f.b)((function(e){return{mydata:e.todo}}))((function(e){return c.a.createElement("div",null,e.mydata.map((function(t,n){return c.a.createElement("li",{key:n},t,c.a.createElement("button",{onClick:function(t){return e.dispatch({type:"DEL_TODO",index:n})}},"\u5220\u9664"))})))})),Object(f.b)()((function(e){return console.log(e),c.a.createElement("div",null,c.a.createElement("input",{type:"text",onKeyDown:function(t){13===t.keyCode&&e.dispatch({type:"ADD_TODO",value:t.target.value})}}))}));var U=n(103);Object(f.b)((function(e){return console.log(e.login.username),{username:e.home.username}}))((function(e){var t=Object(a.useState)(!1),n=Object(U.a)(t,2),o=n[0],i=(n[1],function(){e.dispatch((function(e){fetch("https://www.fastmock.site/mock/9e4bbf9e35ad15942010865690c87ac6/api/login",{method:"post",headers:{"Content-Type":"application/json"}}).then((function(e){return e.json()})).then((function(t){e({type:"LOGIN",username:t.data.name})}))}))});return c.a.createElement("div",null,e.username?c.a.createElement("div",null,e.username,c.a.createElement("button",{onClick:i},"\u9000\u51fa")):c.a.createElement("button",{onClick:i},"\u767b\u5f55"),c.a.createElement(d.a,{toast:!0,text:"\u767b\u5f55\u4e2d...",animating:o}))}));i.a.render(c.a.createElement(A,null),document.getElementById("root"))},96:function(e,t,n){}},[[104,1,2]]]);
//# sourceMappingURL=main.242a29b9.chunk.js.map