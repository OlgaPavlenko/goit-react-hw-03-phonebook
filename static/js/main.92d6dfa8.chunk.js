(this["webpackJsonpreact-template"]=this["webpackJsonpreact-template"]||[]).push([[0],{122:function(t,e){},124:function(t,e){},134:function(t,e){},136:function(t,e){},163:function(t,e){},165:function(t,e){},166:function(t,e){},171:function(t,e){},173:function(t,e){},192:function(t,e){},204:function(t,e){},207:function(t,e){},211:function(t,e,n){},212:function(t,e,n){"use strict";n.r(e);var a=n(2),c=n(105),o=n.n(c),r=n(108),i=n(30),s=n(31),u=n(33),l=n(32),h=n(17),d=n(106),b=n(107),m=(n(211),function(t){Object(u.a)(n,t);var e=Object(l.a)(n);function n(){var t;Object(i.a)(this,n);for(var a=arguments.length,c=new Array(a),o=0;o<a;o++)c[o]=arguments[o];return(t=e.call.apply(e,[this].concat(c))).state={name:"",number:""},t.handleChange=function(e){var n=e.currentTarget,a=n.name,c=n.value;t.setState(Object(d.a)({id:Object(b.generate)()},a,c))},t.handleSubmit=function(e){e.preventDefault(),t.props.onSubmit(t.state),t.reset()},t.reset=function(){t.setState({name:"",number:""})},t}return Object(s.a)(n,[{key:"render",value:function(){return Object(a.jsxs)("form",{onSubmit:this.handleSubmit,children:[Object(a.jsxs)("label",{htmlFor:this.nameInputId,children:["Name",Object(a.jsx)("input",{type:"phone",name:"name",value:this.state.name,onChange:this.handleChange,id:this.nameInputId})]}),Object(a.jsxs)("label",{htmlFor:this.phoneInputId,children:["Number",Object(a.jsx)("input",{type:"text",name:"number",value:this.state.number,onChange:this.handleChange,id:this.phoneInputId})]}),Object(a.jsx)("button",{type:"submit",children:"Add contact"})]})}}]),n}(h.Component));function f(t){var e=t.contactsList,n=t.onDelete;return Object(a.jsx)(a.Fragment,{children:Object(a.jsx)("ul",{children:e&&e.map((function(t){var e=t.id,c=t.name,o=t.number;return Object(a.jsxs)("li",{children:[Object(a.jsxs)("span",{children:[c," - ",o]}),Object(a.jsx)("button",{type:"button",onClick:function(){return n(e)},children:"Delete"})]},e)}))})})}var j=function(t){var e=t.onFilterChanged;return Object(a.jsxs)("label",{children:["Find contacts by name",Object(a.jsx)("input",{type:"text",onChange:function(t){var n=t.currentTarget.value;e(n)}})]})},p=function(t){Object(u.a)(n,t);var e=Object(l.a)(n);function n(){var t;Object(i.a)(this,n);for(var a=arguments.length,c=new Array(a),o=0;o<a;o++)c[o]=arguments[o];return(t=e.call.apply(e,[this].concat(c))).state={contacts:[{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"}],filter:""},t.addContact=function(e){t.state.contacts.find((function(t){return t.name.toLocaleLowerCase()===e.name.toLocaleLowerCase()}))?alert("".concat(e.name," is already in the contacts")):t.setState((function(t){return{contacts:[e].concat(Object(r.a)(t.contacts))}}))},t.onFilterChanged=function(e){t.setState({filter:e})},t.filterContactList=function(){var e=t.state,n=e.contacts,a=e.filter;return a=a.toLocaleLowerCase(),n.filter((function(t){return t.name.toLocaleLowerCase().includes(a)}))},t.onDelete=function(e){var n=t.state.contacts.filter((function(t){return t.id.toLocaleLowerCase()!==e}));t.setState({contacts:n})},t}return Object(s.a)(n,[{key:"componentDidMount",value:function(){var t=localStorage.getItem("contacts"),e=JSON.parse(t);e&&this.setState({contacts:e})}},{key:"componentDidUpdate",value:function(t,e){this.state.contacts!==e.contacts&&localStorage.setItem("contacts",JSON.stringify(this.state.contacts))}},{key:"render",value:function(){var t=this.filterContactList();return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(m,{onSubmit:this.addContact}),Object(a.jsx)(j,{onFilterChanged:this.onFilterChanged}),Object(a.jsx)(f,{contactsList:t,onDelete:this.onDelete})]})}}]),n}(h.Component);o.a.render(Object(a.jsx)(p,{}),document.querySelector("#root"))}},[[212,1,2]]]);
//# sourceMappingURL=main.92d6dfa8.chunk.js.map