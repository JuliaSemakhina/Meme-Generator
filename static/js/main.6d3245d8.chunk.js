(this["webpackJsonpapp-meme"]=this["webpackJsonpapp-meme"]||[]).push([[0],{14:function(e,t,n){},15:function(e,t,n){},17:function(e,t,n){"use strict";n.r(t);var a=n(1),s=n.n(a),c=n(4),o=n.n(c),i=(n(14),n(15),n(0));var l=function(){return Object(i.jsxs)("header",{className:"head",children:[Object(i.jsx)("img",{src:"http://www.pngall.com/wp-content/uploads/2016/05/Trollface.png"}),Object(i.jsx)("p",{children:"Meme Generator"})]})},h=n(5),m=n(6),r=n(7),j=n(2),u=n(9),b=n(8),d=function(e){Object(u.a)(n,e);var t=Object(b.a)(n);function n(){var e;return Object(m.a)(this,n),(e=t.call(this)).state={topText:"",bottomText:"",randomImage:"http://i.imgflip.com/1bij.jpg",allMemeImgs:[]},e.handleChange=e.handleChange.bind(Object(j.a)(e)),e.handleSubmit=e.handleSubmit.bind(Object(j.a)(e)),e}return Object(r.a)(n,[{key:"componentDidMount",value:function(){var e=this;fetch("https://api.imgflip.com/get_memes").then((function(e){return e.json()})).then((function(t){var n=t.data.memes;console.log(t.data.memes[1]),e.setState({allMemeImgs:n})}))}},{key:"handleChange",value:function(e){var t=e.target,n=t.name,a=t.value;this.setState(Object(h.a)({},n,a))}},{key:"handleSubmit",value:function(e){e.preventDefault();var t=Math.floor(Math.random()*(this.state.allMemeImgs.length-1))+0,n=this.state.allMemeImgs[t].url;console.log(n),this.setState({randomImage:n})}},{key:"render",value:function(){return Object(i.jsxs)("div",{children:[Object(i.jsxs)("form",{className:"meme-form",onSubmit:this.handleSubmit,children:[Object(i.jsx)("input",{name:"topText",type:"text",placeholder:"Top Text",value:this.state.topText,onChange:this.handleChange}),Object(i.jsx)("input",{name:"bottomText",type:"text",placeholder:"Bottom Text",value:this.state.bottomText,onChange:this.handleChange}),Object(i.jsx)("button",{children:"Generate"})]}),Object(i.jsx)("hr",{}),Object(i.jsxs)("div",{className:"meme",children:[Object(i.jsx)("img",{src:this.state.randomImage}),Object(i.jsx)("h2",{className:"top",children:this.state.topText}),Object(i.jsx)("h2",{className:"bottom",children:this.state.bottomText})]})]})}}]),n}(s.a.Component);var p=function(){return Object(i.jsxs)("div",{children:[Object(i.jsx)(l,{}),Object(i.jsx)(d,{})]})},g=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,18)).then((function(t){var n=t.getCLS,a=t.getFID,s=t.getFCP,c=t.getLCP,o=t.getTTFB;n(e),a(e),s(e),c(e),o(e)}))};o.a.render(Object(i.jsx)(s.a.StrictMode,{children:Object(i.jsx)(p,{})}),document.getElementById("root")),g()}},[[17,1,2]]]);
//# sourceMappingURL=main.6d3245d8.chunk.js.map