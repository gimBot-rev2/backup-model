(window.webpackJsonp=window.webpackJsonp||[]).push([[81],{1573:function(t,e,a){"use strict";var n=a(3),i=a(1),r=a.n(i),c=a(27),u=a(28),l=a(33),o=a(34),s=a(23);function d(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(t){return!1}}();return function(){var a,n=Object(s.a)(t);if(e){var i=Object(s.a)(this).constructor;a=Reflect.construct(n,arguments,i)}else a=n.apply(this,arguments);return Object(o.a)(this,a)}}var f=function(t){Object(l.a)(a,t);var e=d(a);function a(){return Object(c.a)(this,a),e.apply(this,arguments)}return Object(u.a)(a,[{key:"render",value:function(){return r.a.createElement("thead",null,r.a.createElement("tr",null,this.props.columns.map(function(t){return r.a.createElement("th",{key:t.path||t.key},t.label)})))}}]),a}(i.Component),m=a(1583),h=a.n(m),p=a(53),b=a(43),g=/[0-9\-+#]/,v=/[^\d\-+#]/g;function O(t){return t.search(g)}function j(t,e,a){var n=!1,i={value:t};t<0&&(n=!0,i.value=-i.value),i.sign=n?"-":"",i.value=Number(i.value).toFixed(e.fraction&&e.fraction.length),i.value=Number(i.value).toString();var r=e.fraction&&e.fraction.lastIndexOf("0"),c=i.value.split("."),u=Object(b.a)(c,2),l=u[0],o=void 0===l?"0":l,s=u[1],d=void 0===s?"":s;return(!d||d&&d.length<=r)&&(d=r<0?"":Number("0."+d).toFixed(r+1).replace("0.","")),i.integer=o,i.fraction=d,function(t,e){t.result="";var a=e.integer.split(e.separator),n=a.join(""),i=n&&n.indexOf("0");if(i>-1)for(;t.integer.length<n.length-i;)t.integer="0"+t.integer;else 0===Number(t.integer)&&(t.integer="");var r=a[1]&&a[a.length-1].length;if(r)for(var c=t.integer.length,u=c%r,l=0;l<c;l++)t.result+=t.integer.charAt(l),!((l-u+1)%r)&&l<c-r&&(t.result+=e.separator);else t.result=t.integer;t.result+=e.fraction&&t.fraction?e.decimal+t.fraction:""}(i,e),"0"!==i.result&&""!==i.result||(n=!1,i.sign=""),!n&&e.maskHasPositiveSign?i.sign="+":n&&e.maskHasPositiveSign?i.sign="-":n&&(i.sign=a&&a.enforceMaskSign&&!e.maskHasNegativeSign?"":"-"),i}var E=function(t,e){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if(!t||isNaN(Number(e)))return e;var n=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"#.##",e={},a=t.length,n=O(t);e.prefix=n>0?t.substring(0,n):"";var i=O(t.split("").reverse().join("")),r=a-i,c=t.substring(r,r+1),u=r+("."===c||","===c?1:0);e.suffix=i>0?t.substring(u,a):"",e.mask=t.substring(n,u),e.maskHasNegativeSign="-"===e.mask.charAt(0),e.maskHasPositiveSign="+"===e.mask.charAt(0);var l=e.mask.match(v);return e.decimal=l&&l[l.length-1]||".",e.separator=l&&l[1]&&l[0]||",",l=e.mask.split(e.decimal),e.integer=l[0],e.fraction=l[1],e}(t),i=j(e,n,a);return n.prefix+i.sign+i.result+n.suffix},y=a(1578),x=a(1584);function _(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(t){return!1}}();return function(){var a,n=Object(s.a)(t);if(e){var i=Object(s.a)(this).constructor;a=Reflect.construct(n,arguments,i)}else a=n.apply(this,arguments);return Object(o.a)(this,a)}}var S=function(t){Object(l.a)(a,t);var e=_(a);function a(){var t;Object(c.a)(this,a);for(var n=arguments.length,i=new Array(n),r=0;r<n;r++)i[r]=arguments[r];return(t=e.call.apply(e,[this].concat(i))).renderCell=function(t,e,a){if(console.log("loaded",a),e.content)return e.content(t,a);var n=h.a.get(t,e.path),i=y.findIndex(function(t){return t===String(e.path)});return x.findIndex(function(t){return t===String(e.path)})>=0?Object(p.e)(n):i>=0?E("#,###.00",n,{enforceMaskSign:!0}):n?String(n):""},t.createKey=function(t,e){return t._id+(e.path||e.key)},t}return Object(u.a)(a,[{key:"render",value:function(){var t=this,e=this.props,a=e.data,n=e.columns;return r.a.createElement("tbody",null,a.map(function(e){return r.a.createElement("tr",{key:e.id},n.map(function(a){return r.a.createElement("td",{key:t.createKey(e,a)},t.renderCell(e,a,t.props.loading))}))}))}}]),a}(i.Component),k=a(1643),T=a(1644),w=a(1645),W=a(109),C=a(1575),N=function(){var t=Object(i.useContext)(W.a),e=t.rootState,a=t.dispatch,n=Object(i.useState)(0),c=Object(b.a)(n,2),u=c[0],l=c[1],o=Object(i.useState)(0),s=Object(b.a)(o,2),d=s[0],f=s[1],m=Object(i.useState)(0),h=Object(b.a)(m,2),p=h[0],g=h[1],v=Object(i.useState)(0),O=Object(b.a)(v,2),j=O[0],E=O[1],y=Object(i.useState)(!1),x=Object(b.a)(y,2),_=x[0],S=x[1],N=Object(i.useState)(!1),A=Object(b.a)(N,2),M=A[0],R=A[1],D=Object(i.useState)({count:0,results:[]}),P=Object(b.a)(D,2),I=P[0],L=P[1],q=Object(i.useState)(0),z=Object(b.a)(q,2),F=z[0],H=z[1],V=Object(i.useState)(""),U=Object(b.a)(V,2),J=U[0],K=U[1];Object(i.useEffect)(function(){Object(C.a)(e)},[e]),Object(i.useEffect)(function(){var t=I.count,e=I.results;0===e.length&&0===t||(E(Math.ceil(t/e.length)),f(e.length),g(t),S(!0))},[J,E,f,g,S]),Object(i.useEffect)(function(){if(F){var t=I.count,e=I.results;d<=e.length&&(E(Math.ceil(t/e.length)),f(e.length),g(t),S(!0))}},[F,I]),Object(i.useEffect)(function(){try{var t=Object(C.b)(e),a=t.results,n=t.amount,i=t.activeTab;if(""!==i?K(i):console.warn("Pass active tab for paginations"),n!==F&&"undefined"!==typeof n&&(H(n),L(a)),"undefined"!==String(a)&&!_){var r=a.count,c=a.results;E(Math.ceil(r/c.length)),f(c.length),g(r),S(!0)}}catch(u){}},[e,H,L]);var B=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;M||R(!0),l(t),e&&f(e)};return Object(i.useEffect)(function(){u<p&&M&&Object(C.c)({},a,{offset:u,limit:d,onClick:M})},[u,d]),r.a.createElement("div",null,r.a.createElement(k.a,{className:"pagination left",size:"md",color:"primary"},r.a.createElement(T.a,{disabled:0===u},r.a.createElement(w.a,{first:!0,href:"#",onClick:function(){return B(0)}},"First")),r.a.createElement(T.a,null,r.a.createElement(w.a,{previous:!0,disabled:0===u,onClick:function(){return B(u-d)}})),Array(j).fill("").map(function(t,e){return r.a.createElement(T.a,{active:e===Math.floor(u/d)},r.a.createElement(w.a,{onClick:function(){return B(e*d)}},e+1))}),r.a.createElement(T.a,null,r.a.createElement(w.a,{next:!0,onClick:function(){return B(u+d)},disabled:u+d>=p})),r.a.createElement(T.a,{disabled:u+d>=p},r.a.createElement(w.a,{last:!0,onClick:function(){return B((j-1)*d)}},"Last"))))},A=a(1549),M=a(1554),R=a(1619),D=a(177);e.a=Object(D.b)(function(t,e){return Object(n.a)({state:t},e)})(function(t){var e=t.columns,a=t.data,n=t.title,c=t.state,u=t.getLoading;Object(i.useEffect)(function(){"function"===typeof u&&console.log("result",u(c,{isPatch:!0}))},[c,u]);var l=Object(i.useContext)(W.a).rootState;return Object(i.useEffect)(function(){},[l]),console.log(u(c,{isPatch:!0})),r.a.createElement(A.a,{className:"p-2"},r.a.createElement(M.a,{className:"tableHeaders border-0"},r.a.createElement("div",null,""+n?n:"")),r.a.createElement(R.a,{size:"md",responsive:!0,striped:!0},r.a.createElement(f,{columns:e}),r.a.createElement(S,{data:a,columns:e,loading:"fucntion"===typeof u?u(c,{isPatch:!0}):{}}),r.a.createElement(N,null)))})},1575:function(t,e,a){"use strict";a.d(e,"b",function(){return i}),a.d(e,"d",function(){return r}),a.d(e,"a",function(){return c}),a.d(e,"c",function(){return u});var n=a(38),i=function(t){return t.page_values?t.page_values:null},r=function(t,e,a){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},c=arguments.length>4&&void 0!==arguments[4]?arguments[4]:"";if("undefined"!==typeof a){if(0===a.count)return null;e({type:n.a.UPDATE,stateName:"page_values",payload:{results:a,options:r,pageLimit:a.length?5*Math.ceil(a.length/5):5,amount:i(t)?i(t).amount+1:0,activeTab:c}})}},c=function(t){var e=t.page_values;try{var a=e.pageLimit?e.pageLimit:0;return a||0}catch(n){}},u=function(t,e){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{offset:0,limit:0};e({type:n.a.UPDATE,stateName:"page_values",payload:{options:a}})}},1578:function(t){t.exports=["credit","debit","total","total_amount","paid_amount","account_balance","balance","price","unit_price","tax","unit_cost","tax_amount","amount_excl_vat","quantity","inventory_quantity","account.balance"]},1582:function(t,e,a){"use strict";a.d(e,"a",function(){return n});var n=function(){return arguments.length>0&&void 0!==arguments[0]?arguments[0]:[]}},2060:function(t){t.exports=["Product","Raw Material","Spare part","Service"]},2398:function(t,e,a){"use strict";a.r(e);var n=a(43),i=a(1),r=a.n(i),c=a(3),u=a(1574),l=a(1555),o=a(1788),s=a(1549),d=a(1550),f=a(1579),m=a(27),h=a(28),p=a(33),b=a(34),g=a(23),v=a(1577),O=a(1576),j=a.n(O),E=a(1554),y=a(1556),x=a(1787),_=a(1622),S=a(2060);function k(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(t){return!1}}();return function(){var a,n=Object(g.a)(t);if(e){var i=Object(g.a)(this).constructor;a=Reflect.construct(n,arguments,i)}else a=n.apply(this,arguments);return Object(b.a)(this,a)}}var T=function(t){Object(p.a)(a,t);var e=k(a);function a(t){var n;return Object(m.a)(this,a),(n=e.call(this,t)).initialState={data:{id:"",item_type:"",min_amount:"",max_amount:"",withholding_value:""},errors:{}},n.state=n.initialState,n.schema={id:j.a.string().allow("").optional(),item_type:j.a.string().required().label("Item Type"),min_amount:j.a.number().required().label("Min Amount"),max_amount:j.a.number().required().label("Max Amount"),withholding_value:j.a.number().required().label("Withholding Value")},n}return Object(h.a)(a,[{key:"populateState",value:function(t){var e=Object(c.a)({},this.state,{data:{id:t.id?t.id:"",item_type:t.item_type?t.item_type:"",min_amount:t.min_amount?t.min_amount:"",max_amount:t.max_amount?t.max_amount:"",withholding_value:t.withholding_value?t.withholding_value:""},lockUpdate:!0});this.setState(e)}},{key:"componentDidUpdate",value:function(){!this.props.isEdit&&!this.props.isView||this.state.lockUpdate||this.populateState(this.props.data)}},{key:"doSubmit",value:function(){this.props.submit(this.state.data)}},{key:"render",value:function(){return r.a.createElement(s.a,{className:"border-0"},r.a.createElement(E.a,{className:"border-0"},this.props.title),r.a.createElement(d.a,null,r.a.createElement(y.a,{onSubmit:this.handleSubmit},r.a.createElement(x.a,null,r.a.createElement(o.a,{md:4,sm:12,xs:12},this.renderSelect({name:"item_type",label:"Item Type",options:S})),r.a.createElement(o.a,{md:4,sm:12,xs:12},this.renderInput({name:"min_amount",label:"Min Amount",type:"number"})),r.a.createElement(o.a,{md:4,sm:12,xs:12},this.renderInput({name:"max_amount",label:"Max Amount",type:"number"})),r.a.createElement(o.a,{md:4,sm:12,xs:12},this.renderInput({name:"withholding_value",label:"Withhodling Value",type:"number"}))),r.a.createElement(_.a,{align:"center"},this.renderButton("Save")))))}}]),a}(v.a),w=a(1573),W=a(1582),C=a(17),N=a(1581),A=a(53),M=function(t){var e=t.addWithholdingTax,a=t.editWithholdingTax,m=t.deleteWithholdingTax,h=t.taxes,p=t.doneAdd,b=t.doneEdit,g=(t.fiscalYears,Object(i.useReducer)(N.c,N.b)),v=Object(n.a)(g,2),O=v[0],j=v[1],E=function(t){m(t)};Object(i.useEffect)(function(){(p||b)&&Object(N.a)({type:"CLOSE"},j)},[p,b]);var y=[{path:"item_type",label:"Item Type"},{path:"min_amount",label:"Min. Amount"},{path:"max_amount",label:"Max. Amount"},{path:"withholding_value",label:"Withholding Value"},{path:"updated_at",label:"Last Modified"},{key:"view",content:function(t){return r.a.createElement(r.a.Fragment,null,r.a.createElement(l.a,{className:"m-1",size:"sm",outline:!0,color:"info",onClick:function(){Object(N.a)({type:"VIEW",Component:T,data:t,title:"View Withholding Tax"},j)}},r.a.createElement(C.M,null)),r.a.createElement(l.a,{className:"m-1",size:"sm",outline:!0,color:"warning",onClick:function(){Object(N.a)({type:"EDIT",Component:T,data:t,submit:a,title:"Edit Withholding Tax"},j)}},r.a.createElement(C.s,null)),r.a.createElement(l.a,{className:"m-1",size:"sm",outline:!0,color:"danger",onClick:function(){Object(N.a)({type:"DELETE",deleteOptions:{okCallback:E,title:"Are you sure?",id:t.id,message:""}},j)}},r.a.createElement(C.p,null)))}}];return r.a.createElement("div",null,r.a.createElement(f.a,{data:O.data,openModal:O.openModal,component:O.Component,title:O.title,toggle:N.a,dispatch:j}),r.a.createElement(u.a,null,r.a.createElement(o.a,{align:"right",className:"mb-1 pl-3 pr-3"},r.a.createElement(l.a,{onClick:function(){return Object(N.a)({type:"ADD",Component:T,submit:e,title:"Add Withholding Tax"},j)},outline:!0,size:"sm"},"New WithholdingTax")),r.a.createElement(s.a,{className:"border-0"},r.a.createElement(d.a,null,r.a.createElement(w.a,{title:"Withholding Taxes",columns:y,data:Object(W.a)(h.map(function(t){return Object(c.a)({},t,{updated_at:Object(A.d)(t.updated_at)})}))})))))},R=a(138),D=a(177),P=a(102),I=a(19);e.default=Object(D.b)(function(t){return{fetchStatus:Object(R.i)(t),addStatus:Object(R.f)(t),editStatus:Object(R.h)(t),deleteStatus:Object(R.g)(t),taxes:Object(R.j)(t)}},function(t){return{fetchWithholdingTaxes:function(){return t(Object(R.c)())},addWithholdingTax:function(e){return t(Object(R.a)(e))},editWithholdingTax:function(e){return t(Object(R.b)(e))},deleteWithholdingTax:function(e){return t(Object(R.d)(e))}}})(function(t){var e=t.fetchStatus,a=t.addStatus,c=t.fetchWithholdingTaxes,u=t.addWithholdingTax,l=t.editStatus,o=t.editWithholdingTax,s=t.deleteStatus,d=t.deleteWithholdingTax,f=t.taxes,m=Object(i.useState)(!0),h=Object(n.a)(m,2),p=h[0],b=h[1],g=Object(i.useState)(!0),v=Object(n.a)(g,2),O=v[0],j=v[1],E=Object(i.useState)(!0),y=Object(n.a)(E,2),x=y[0],_=y[1],S=Object(i.useState)(!0),k=Object(n.a)(S,2),T=k[0],w=k[1];Object(i.useEffect)(function(){b(!1),c()},[c,b]),Object(i.useEffect)(function(){e.status!==I.e.failure||p||(P.toast.error("Failed Fetching taxes"),b(!0))},[e,b]),Object(i.useEffect)(function(){var t=a.status;t!==I.e.failure||O?t!==I.e.success||O||(P.toast.success("Added Withholding Tax"),j(!0)):j(!0)},[a,j]),Object(i.useEffect)(function(){var t=l.status;t!==I.e.failure||x?t!==I.e.success||x||(P.toast.success("Edited Withholding Tax"),_(!0)):_(!0)},[l,_]),Object(i.useEffect)(function(){var t=s.status;t!==I.e.failure||T?t!==I.e.success||T||(P.toast.success("Deleted Withholding Tax"),w(!0)):w(!0)},[s,w]);return r.a.createElement(M,{taxes:f,doneAdd:a.status===I.e.success&&!O,addWithholdingTax:function(t){j(!1);var e={item_type:t.item_type,min_amount:t.min_amount,max_amount:t.max_amount,withholding_value:t.withholding_value};u(e)},doneEdit:l.status===I.e.success&&!x,editWithholdingTax:function(t){_(!1);var e={id:t.id?t.id:"",item_type:t.item_type,min_amount:t.min_amount,max_amount:t.max_amount,withholding_value:t.withholding_value};o(e)},doneDelete:s.status===I.e.success&&!T,deleteWithholdingTax:function(t){w(!1),d(t)}})})}}]);
//# sourceMappingURL=81.8fae06c1.chunk.js.map