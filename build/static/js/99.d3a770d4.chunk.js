(window.webpackJsonp=window.webpackJsonp||[]).push([[99],{1573:function(e,t,n){"use strict";var a=n(3),c=n(1),r=n.n(c),o=n(27),i=n(28),u=n(33),s=n(34),l=n(23);function f(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}();return function(){var n,a=Object(l.a)(e);if(t){var c=Object(l.a)(this).constructor;n=Reflect.construct(a,arguments,c)}else n=a.apply(this,arguments);return Object(s.a)(this,n)}}var d=function(e){Object(u.a)(n,e);var t=f(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(i.a)(n,[{key:"render",value:function(){return r.a.createElement("thead",null,r.a.createElement("tr",null,this.props.columns.map(function(e){return r.a.createElement("th",{key:e.path||e.key},e.label)})))}}]),n}(c.Component),m=n(1583),p=n.n(m),b=n(53),g=n(43),v=/[0-9\-+#]/,h=/[^\d\-+#]/g;function O(e){return e.search(v)}function j(e,t,n){var a=!1,c={value:e};e<0&&(a=!0,c.value=-c.value),c.sign=a?"-":"",c.value=Number(c.value).toFixed(t.fraction&&t.fraction.length),c.value=Number(c.value).toString();var r=t.fraction&&t.fraction.lastIndexOf("0"),o=c.value.split("."),i=Object(g.a)(o,2),u=i[0],s=void 0===u?"0":u,l=i[1],f=void 0===l?"":l;return(!f||f&&f.length<=r)&&(f=r<0?"":Number("0."+f).toFixed(r+1).replace("0.","")),c.integer=s,c.fraction=f,function(e,t){e.result="";var n=t.integer.split(t.separator),a=n.join(""),c=a&&a.indexOf("0");if(c>-1)for(;e.integer.length<a.length-c;)e.integer="0"+e.integer;else 0===Number(e.integer)&&(e.integer="");var r=n[1]&&n[n.length-1].length;if(r)for(var o=e.integer.length,i=o%r,u=0;u<o;u++)e.result+=e.integer.charAt(u),!((u-i+1)%r)&&u<o-r&&(e.result+=t.separator);else e.result=e.integer;e.result+=t.fraction&&e.fraction?t.decimal+e.fraction:""}(c,t),"0"!==c.result&&""!==c.result||(a=!1,c.sign=""),!a&&t.maskHasPositiveSign?c.sign="+":a&&t.maskHasPositiveSign?c.sign="-":a&&(c.sign=n&&n.enforceMaskSign&&!t.maskHasNegativeSign?"":"-"),c}var E=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if(!e||isNaN(Number(t)))return t;var a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"#.##",t={},n=e.length,a=O(e);t.prefix=a>0?e.substring(0,a):"";var c=O(e.split("").reverse().join("")),r=n-c,o=e.substring(r,r+1),i=r+("."===o||","===o?1:0);t.suffix=c>0?e.substring(i,n):"",t.mask=e.substring(a,i),t.maskHasNegativeSign="-"===t.mask.charAt(0),t.maskHasPositiveSign="+"===t.mask.charAt(0);var u=t.mask.match(h);return t.decimal=u&&u[u.length-1]||".",t.separator=u&&u[1]&&u[0]||",",u=t.mask.split(t.decimal),t.integer=u[0],t.fraction=u[1],t}(e),c=j(t,a,n);return a.prefix+c.sign+c.result+a.suffix},_=n(1578),y=n(1584);function S(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}();return function(){var n,a=Object(l.a)(e);if(t){var c=Object(l.a)(this).constructor;n=Reflect.construct(a,arguments,c)}else n=a.apply(this,arguments);return Object(s.a)(this,n)}}var C=function(e){Object(u.a)(n,e);var t=S(n);function n(){var e;Object(o.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).renderCell=function(e,t,n){if(console.log("loaded",n),t.content)return t.content(e,n);var a=p.a.get(e,t.path),c=_.findIndex(function(e){return e===String(t.path)});return y.findIndex(function(e){return e===String(t.path)})>=0?Object(b.e)(a):c>=0?E("#,###.00",a,{enforceMaskSign:!0}):a?String(a):""},e.createKey=function(e,t){return e._id+(t.path||t.key)},e}return Object(i.a)(n,[{key:"render",value:function(){var e=this,t=this.props,n=t.data,a=t.columns;return r.a.createElement("tbody",null,n.map(function(t){return r.a.createElement("tr",{key:t.id},a.map(function(n){return r.a.createElement("td",{key:e.createKey(t,n)},e.renderCell(t,n,e.props.loading))}))}))}}]),n}(c.Component),k=n(1643),x=n(1644),P=n(1645),G=n(109),w=n(1575),N=function(){var e=Object(c.useContext)(G.a),t=e.rootState,n=e.dispatch,a=Object(c.useState)(0),o=Object(g.a)(a,2),i=o[0],u=o[1],s=Object(c.useState)(0),l=Object(g.a)(s,2),f=l[0],d=l[1],m=Object(c.useState)(0),p=Object(g.a)(m,2),b=p[0],v=p[1],h=Object(c.useState)(0),O=Object(g.a)(h,2),j=O[0],E=O[1],_=Object(c.useState)(!1),y=Object(g.a)(_,2),S=y[0],C=y[1],N=Object(c.useState)(!1),R=Object(g.a)(N,2),D=R[0],A=R[1],M=Object(c.useState)({count:0,results:[]}),F=Object(g.a)(M,2),L=F[0],I=F[1],T=Object(c.useState)(0),U=Object(g.a)(T,2),z=U[0],H=U[1],q=Object(c.useState)(""),V=Object(g.a)(q,2),J=V[0],K=V[1];Object(c.useEffect)(function(){Object(w.a)(t)},[t]),Object(c.useEffect)(function(){var e=L.count,t=L.results;0===t.length&&0===e||(E(Math.ceil(e/t.length)),d(t.length),v(e),C(!0))},[J,E,d,v,C]),Object(c.useEffect)(function(){if(z){var e=L.count,t=L.results;f<=t.length&&(E(Math.ceil(e/t.length)),d(t.length),v(e),C(!0))}},[z,L]),Object(c.useEffect)(function(){try{var e=Object(w.b)(t),n=e.results,a=e.amount,c=e.activeTab;if(""!==c?K(c):console.warn("Pass active tab for paginations"),a!==z&&"undefined"!==typeof a&&(H(a),I(n)),"undefined"!==String(n)&&!S){var r=n.count,o=n.results;E(Math.ceil(r/o.length)),d(o.length),v(r),C(!0)}}catch(i){}},[t,H,I]);var W=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;D||A(!0),u(e),t&&d(t)};return Object(c.useEffect)(function(){i<b&&D&&Object(w.c)({},n,{offset:i,limit:f,onClick:D})},[i,f]),r.a.createElement("div",null,r.a.createElement(k.a,{className:"pagination left",size:"md",color:"primary"},r.a.createElement(x.a,{disabled:0===i},r.a.createElement(P.a,{first:!0,href:"#",onClick:function(){return W(0)}},"First")),r.a.createElement(x.a,null,r.a.createElement(P.a,{previous:!0,disabled:0===i,onClick:function(){return W(i-f)}})),Array(j).fill("").map(function(e,t){return r.a.createElement(x.a,{active:t===Math.floor(i/f)},r.a.createElement(P.a,{onClick:function(){return W(t*f)}},t+1))}),r.a.createElement(x.a,null,r.a.createElement(P.a,{next:!0,onClick:function(){return W(i+f)},disabled:i+f>=b})),r.a.createElement(x.a,{disabled:i+f>=b},r.a.createElement(P.a,{last:!0,onClick:function(){return W((j-1)*f)}},"Last"))))},R=n(1549),D=n(1554),A=n(1619),M=n(177);t.a=Object(M.b)(function(e,t){return Object(a.a)({state:e},t)})(function(e){var t=e.columns,n=e.data,a=e.title,o=e.state,i=e.getLoading;Object(c.useEffect)(function(){"function"===typeof i&&console.log("result",i(o,{isPatch:!0}))},[o,i]);var u=Object(c.useContext)(G.a).rootState;return Object(c.useEffect)(function(){},[u]),console.log(i(o,{isPatch:!0})),r.a.createElement(R.a,{className:"p-2"},r.a.createElement(D.a,{className:"tableHeaders border-0"},r.a.createElement("div",null,""+a?a:"")),r.a.createElement(A.a,{size:"md",responsive:!0,striped:!0},r.a.createElement(d,{columns:t}),r.a.createElement(C,{data:n,columns:t,loading:"fucntion"===typeof i?i(o,{isPatch:!0}):{}}),r.a.createElement(N,null)))})},1575:function(e,t,n){"use strict";n.d(t,"b",function(){return c}),n.d(t,"d",function(){return r}),n.d(t,"a",function(){return o}),n.d(t,"c",function(){return i});var a=n(38),c=function(e){return e.page_values?e.page_values:null},r=function(e,t,n){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:"";if("undefined"!==typeof n){if(0===n.count)return null;t({type:a.a.UPDATE,stateName:"page_values",payload:{results:n,options:r,pageLimit:n.length?5*Math.ceil(n.length/5):5,amount:c(e)?c(e).amount+1:0,activeTab:o}})}},o=function(e){var t=e.page_values;try{var n=t.pageLimit?t.pageLimit:0;return n||0}catch(a){}},i=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{offset:0,limit:0};t({type:a.a.UPDATE,stateName:"page_values",payload:{options:n}})}},1578:function(e){e.exports=["credit","debit","total","total_amount","paid_amount","account_balance","balance","price","unit_price","tax","unit_cost","tax_amount","amount_excl_vat","quantity","inventory_quantity","account.balance"]},1582:function(e,t,n){"use strict";n.d(t,"a",function(){return a});var a=function(){return arguments.length>0&&void 0!==arguments[0]?arguments[0]:[]}},2402:function(e,t,n){"use strict";n.r(t);var a=n(43),c=n(1),r=n.n(c),o=n(3),i=n(1574),u=n(1555),s=n(1788),l=n(1549),f=n(1550),d=n(1579),m=n(27),p=n(28),b=n(33),g=n(34),v=n(23),h=n(1577),O=n(1576),j=n.n(O),E=n(1556),_=n(1787),y=n(1622),S=n(177),C=n(71);function k(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}();return function(){var n,a=Object(v.a)(e);if(t){var c=Object(v.a)(this).constructor;n=Reflect.construct(a,arguments,c)}else n=a.apply(this,arguments);return Object(g.a)(this,n)}}var x=function(e){Object(b.a)(n,e);var t=k(n);function n(e){var a;return Object(m.a)(this,n),(a=t.call(this,e)).initialState={data:{id:"",code:"",name:"",receivable_account:"",withholding_tax_receivable_account:""},lockUpdate:!1,errors:{}},a.state=a.initialState,a.schema={id:j.a.string().allow("").optional(),code:j.a.string().required().label("Code"),name:j.a.string().required().label("name"),receivable_account:j.a.string(),withholding_tax_receivable_account:j.a.string()},a}return Object(p.a)(n,[{key:"doSubmit",value:function(){this.props.submit(this.state.data)}},{key:"componentDidMount",value:function(){this.componentDidUpdate()}},{key:"populateState",value:function(e){var t=Object(o.a)({},this.state,{data:{id:e.id?e.id:"",code:e.code?e.code:"",name:e.name?e.name:"",receivable_account:e.receivable_account?e.receivable_account:"",withholding_tax_receivable_account:e.withholding_tax_receivable_account?e.withholding_tax_receivable_account:""},lockUpdate:!0});this.setState(t)}},{key:"componentDidUpdate",value:function(){!this.props.isEdit&&!this.props.isView||this.state.lockUpdate||this.populateState(this.props.data)}},{key:"render",value:function(){var e=this.props.options.accounts;return r.a.createElement(l.a,{className:"border-0"},r.a.createElement(f.a,null,r.a.createElement(E.a,{onSubmit:this.handleSubmit},r.a.createElement(_.a,null,r.a.createElement(s.a,{md:4,sm:12,xs:12},this.renderInput("name"," Name")),r.a.createElement(s.a,{md:4,sm:12,xs:12},this.renderInput("code"," Code")),r.a.createElement(s.a,{md:4,sm:12,xs:12},this.renderSelect({name:"receivable_account",label:"Receivable Account",options:e,optionsFrom:"server"})),r.a.createElement(s.a,{md:4,sm:12,xs:12},this.renderSelect({name:"withholding_tax_receivable_account",label:"Withholding Tax Receivable Account",options:e,optionsFrom:"server"}))),r.a.createElement(y.a,{align:"center"},this.renderButton("Save")))))}}]),n}(h.a),P=Object(S.b)(C.e)(x),G=n(1573),w=n(1582),N=n(17),R=n(1581),D=n(53),A=function(e){var t=e.postingGroups,n=e.addCustomerPostingGroup,m=e.editCustomerPostingGroup,p=e.deleteCustomerPostingGroup,b=e.doneAdd,g=e.doneEdit,v=e.accounts,h=Object(c.useReducer)(R.c,R.b),O=Object(a.a)(h,2),j=O[0],E=O[1],_=function(e){p(e)};Object(c.useEffect)(function(){(b||g)&&Object(R.a)({type:"CLOSE"},E)},[b,g]);var y=[{path:"name",label:"Name"},{path:"updated_at",label:"Last Modified"},{key:"view",content:function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement(u.a,{className:"m-1",size:"sm",outline:!0,color:"info",onClick:function(){Object(R.a)({type:"VIEW",Component:P,data:e,title:"View Customer Posting Group",options:{accounts:v}},E)}},r.a.createElement(N.M,null)),r.a.createElement(u.a,{className:"m-1",size:"sm",outline:!0,color:"warning",onClick:function(){Object(R.a)({type:"EDIT",Component:P,data:e,submit:m,title:"Edit Customer Posting Group",options:{accounts:v}},E)}},r.a.createElement(N.s,null)),r.a.createElement(u.a,{className:"m-1",size:"sm",outline:!0,color:"danger",onClick:function(){Object(R.a)({type:"DELETE",deleteOptions:{okCallback:_,title:"Are you sure?",id:e.id,message:""}},E)}},r.a.createElement(N.p,null)))}}];return r.a.createElement("div",null,r.a.createElement(d.a,{data:j.data,openModal:j.openModal,component:j.Component,title:j.title,toggle:R.a,dispatch:E}),r.a.createElement(i.a,null,r.a.createElement(s.a,{align:"right",className:"mb-1 pl-3 pr-3"},r.a.createElement(u.a,{onClick:function(){return Object(R.a)({type:"ADD",Component:P,submit:n,title:"Add Customer Posting Group",options:{accounts:v}},E)},outline:!0,size:"sm"},"New Customer Posting Group")),r.a.createElement(l.a,{className:"border-0"},r.a.createElement(f.a,null,r.a.createElement(G.a,{title:"Customer Posting Group",columns:y,data:Object(w.a)(t.map(function(e){return Object(o.a)({},e,{updated_at:Object(D.d)(e.updated_at)})}))})))))},M=n(102),F=n(19),L=n(44);t.default=Object(S.b)(function(e){return{fetchStatus:Object(C.k)(e),addStatus:Object(C.g)(e),postingGroups:Object(C.h)(e),editStatus:Object(C.j)(e),deleteStatus:Object(C.i)(e),accounts:Object(L.h)(e)}},function(e){return{fetchCustomerPostingGroups:function(){return e(Object(C.c)())},addCustomerPostingGroup:function(t){return e(Object(C.a)(t))},editCustomerPostingGroup:function(t){return e(Object(C.b)(t))},deleteCustomerPostingGroup:function(t){return e(Object(C.d)(t))}}})(function(e){var t=e.fetchStatus,n=e.addStatus,o=e.fetchCustomerPostingGroups,i=e.addCustomerPostingGroup,u=e.editStatus,s=e.editCustomerPostingGroup,l=e.deleteStatus,f=e.deleteCustomerPostingGroup,d=e.postingGroups,m=e.accounts,p=Object(c.useState)(!0),b=Object(a.a)(p,2),g=b[0],v=b[1],h=Object(c.useState)(!0),O=Object(a.a)(h,2),j=O[0],E=O[1],_=Object(c.useState)(!0),y=Object(a.a)(_,2),S=y[0],C=y[1],k=Object(c.useState)(!0),x=Object(a.a)(k,2),P=x[0],G=x[1];Object(c.useEffect)(function(){v(!1),o()},[o,v]),Object(c.useEffect)(function(){t.status!==F.e.failure||g||(M.toast.error("Failed Fetching Customer Posting Groups"),v(!0))},[t,v]),Object(c.useEffect)(function(){var e=n.status;e!==F.e.failure||j?e!==F.e.success||j||(M.toast.success("Added Customer Posting Group"),E(!0)):E(!0)},[n,E]),Object(c.useEffect)(function(){var e=u.status;e!==F.e.failure||S?e!==F.e.success||S||(M.toast.success("Edited Customer Posting Group"),C(!0)):C(!0)},[u,C]),Object(c.useEffect)(function(){var e=l.status;e!==F.e.failure||P?e!==F.e.success||P||(M.toast.success("Deleted Customer Posting Group"),G(!0)):G(!0)},[l,G]);return r.a.createElement(A,{postingGroups:d,doneAdd:n.status===F.e.success&&!j,addCustomerPostingGroup:function(e){E(!1);var t={name:e.name?e.name:"",code:e.code?e.code:"",receivable_account:e.receivable_account?e.receivable_account:"",withholding_tax_receivable_account:e.withholding_tax_receivable_account?e.withholding_tax_receivable_account:""};i(t)},doneEdit:u.status===F.e.success&&!S,editCustomerPostingGroup:function(e){C(!1);var t={id:e.id?e.id:"",name:e.name?e.name:"",code:e.code?e.code:"",receivable_account:e.receivable_account?e.receivable_account:"",withholding_tax_receivable_account:e.withholding_tax_receivable_account?e.withholding_tax_receivable_account:""};s(t)},doneDelete:l.status===F.e.success&&!P,deleteCustomerPostingGroup:function(e){G(!1),f(e)},accounts:m})})}}]);
//# sourceMappingURL=99.d3a770d4.chunk.js.map