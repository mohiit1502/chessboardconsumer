(this.webpackJsonptruecallerassignmentconsumer=this.webpackJsonptruecallerassignmentconsumer||[]).push([[3],{58:function(e,r,o){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.createHasSelector=r.invertSelector=r.createGetSelector=r.createPropsSelector=r.ensureJSSelector=r.selectorToJS=r.createImmutableComparingSelector=void 0;var t,l="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n=o(59),a=o(9),u=(t=a)&&t.__esModule?t:{default:t};var c=r.createImmutableComparingSelector=(0,n.createSelectorCreator)(n.defaultMemoize,u.default.is),s=(r.selectorToJS=function(e){return c(e,(function(e){return e?e.toJS():null}))},r.ensureJSSelector=function(e){return c(e,(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;return e&&"object"===("undefined"===typeof e?"undefined":l(e))&&"toJS"in e&&"function"===typeof e.toJS?e.toJS():e}))});r.createPropsSelector=function(e){var r={};return Object.keys(e).forEach((function(o){r[o]=s(e[o])})),(0,n.createStructuredSelector)(r)},r.createGetSelector=function(e,r,o){return"function"===typeof r?(0,n.createSelector)(e,r,(function(e,r){return e.get(r,o)})):(0,n.createSelector)(e,(function(e){return e.get(r,o)}))},r.invertSelector=function(e){return(0,n.createSelector)(e,(function(e){return!e}))},r.createHasSelector=function(e,r){return"function"===typeof r?(0,n.createSelector)(e,r,(function(e,r){return e.has(r)})):(0,n.createSelector)(e,(function(e){return e.has(r)}))}},59:function(e,r,o){"use strict";function t(e,r){return e===r}function l(e,r,o){if(null===r||null===o||r.length!==o.length)return!1;for(var t=r.length,l=0;l<t;l++)if(!e(r[l],o[l]))return!1;return!0}function n(e){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:t,o=null,n=null;return function(){return l(r,o,arguments)||(n=e.apply(null,arguments)),o=arguments,n}}function a(e){var r=Array.isArray(e[0])?e[0]:e;if(!r.every((function(e){return"function"===typeof e}))){var o=r.map((function(e){return typeof e})).join(", ");throw new Error("Selector creators expect all input-selectors to be functions, instead received the following types: ["+o+"]")}return r}function u(e){for(var r=arguments.length,o=Array(r>1?r-1:0),t=1;t<r;t++)o[t-1]=arguments[t];return function(){for(var r=arguments.length,t=Array(r),l=0;l<r;l++)t[l]=arguments[l];var u=0,c=t.pop(),s=a(t),d=e.apply(void 0,[function(){return u++,c.apply(null,arguments)}].concat(o)),i=n((function(){for(var e=[],r=s.length,o=0;o<r;o++)e.push(s[o].apply(null,arguments));return d.apply(null,e)}));return i.resultFunc=c,i.recomputations=function(){return u},i.resetRecomputations=function(){return u=0},i}}r.__esModule=!0,r.defaultMemoize=n,r.createSelectorCreator=u,r.createStructuredSelector=function(e){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:c;if("object"!==typeof e)throw new Error("createStructuredSelector expects first argument to be an object where each property is a selector, instead received a "+typeof e);var o=Object.keys(e);return r(o.map((function(r){return e[r]})),(function(){for(var e=arguments.length,r=Array(e),t=0;t<e;t++)r[t]=arguments[t];return r.reduce((function(e,r,t){return e[o[t]]=r,e}),{})}))};var c=r.createSelector=u(n)},60:function(e,r,o){"use strict";o.d(r,"b",(function(){return a})),o.d(r,"a",(function(){return u})),o.d(r,"c",(function(){return c}));var t=o(61),l=o(58),n=Object(t.a)((function(e){return e.data}),(function(e){return e.pages.home})),a=Object(l.createGetSelector)(n,"formValues"),u=Object(l.createGetSelector)(n,"formErrors"),c=Object(l.createGetSelector)(n,"route")},61:function(e,r,o){"use strict";function t(e,r){return e===r}function l(e,r,o){if(null===r||null===o||r.length!==o.length)return!1;for(var t=r.length,l=0;l<t;l++)if(!e(r[l],o[l]))return!1;return!0}function n(e){var r=Array.isArray(e[0])?e[0]:e;if(!r.every((function(e){return"function"===typeof e}))){var o=r.map((function(e){return typeof e})).join(", ");throw new Error("Selector creators expect all input-selectors to be functions, instead received the following types: ["+o+"]")}return r}o.d(r,"a",(function(){return a}));var a=function(e){for(var r=arguments.length,o=Array(r>1?r-1:0),t=1;t<r;t++)o[t-1]=arguments[t];return function(){for(var r=arguments.length,t=Array(r),l=0;l<r;l++)t[l]=arguments[l];var a=0,u=t.pop(),c=n(t),s=e.apply(void 0,[function(){return a++,u.apply(null,arguments)}].concat(o)),d=e((function(){for(var e=[],r=c.length,o=0;o<r;o++)e.push(c[o].apply(null,arguments));return s.apply(null,e)}));return d.resultFunc=u,d.dependencies=c,d.recomputations=function(){return a},d.resetRecomputations=function(){return a=0},d}}((function(e){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:t,o=null,n=null;return function(){return l(r,o,arguments)||(n=e.apply(null,arguments)),o=arguments,n}}))},62:function(e){e.exports=JSON.parse('[{"row":2,"column":3,"order":1,"allowedMoves":"5-3,  2-6,  4-1,  4-5"},{"row":5,"column":3,"order":2,"allowedMoves":"2-3,  8-3,  5-6,  3-1,  3-5,  7-1,  7-5"},{"row":8,"column":3,"order":3,"allowedMoves":"5-3,  8-6,  6-1,  6-5,  10-1,  10-5"},{"row":8,"column":6,"order":4,"allowedMoves":"5-6,  8-3,  8-9,  6-4,  6-8,  10-4,  10-8"},{"row":5,"column":6,"order":5,"allowedMoves":"2-6,  8-6,  5-3,  5-9,  3-4,  3-8,  7-4,  7-8"},{"row":2,"column":6,"order":6,"allowedMoves":"5-6,  2-3,  2-9,  4-4,  4-8"},{"row":2,"column":9,"order":7,"allowedMoves":"5-9,  2-6,  4-7"},{"row":5,"column":9,"order":8,"allowedMoves":"2-9,  8-9,  5-6,  3-7,  7-7"},{"row":8,"column":9,"order":9,"allowedMoves":"5-9,  8-6,  6-7,  10-7"},{"row":6,"column":7,"order":10,"allowedMoves":"3-7,  9-7,  6-4,  6-10,  4-5,  4-9,  8-5,  8-9"},{"row":3,"column":7,"order":11,"allowedMoves":"6-7,  3-4,  3-10,  1-5,  1-9,  5-5,  5-9"},{"row":3,"column":4,"order":12,"allowedMoves":"6-4,  3-1,  3-7,  1-2,  1-6,  5-2,  5-6"},{"row":6,"column":4,"order":13,"allowedMoves":"3-4,  9-4,  6-1,  6-7,  4-2,  4-6,  8-2,  8-6"},{"row":9,"column":4,"order":14,"allowedMoves":"6-4,  9-1,  9-7,  7-2,  7-6"},{"row":9,"column":1,"order":15,"allowedMoves":"6-1,  9-4,  7-3"},{"row":6,"column":1,"order":16,"allowedMoves":"3-1,  9-1,  6-4,  4-3,  8-3"},{"row":3,"column":1,"order":17,"allowedMoves":"6-1,  3-4,  1-3,  5-3"},{"row":1,"column":3,"order":18,"allowedMoves":"4-3,  1-6,  3-1,  3-5"},{"row":4,"column":3,"order":19,"allowedMoves":"1-3,  7-3,  4-6,  2-1,  2-5,  6-1,  6-5"},{"row":7,"column":3,"order":20,"allowedMoves":"4-3,  10-3,  7-6,  5-1,  5-5,  9-1,  9-5"},{"row":10,"column":3,"order":21,"allowedMoves":"7-3,  10-6,  8-1,  8-5"},{"row":10,"column":6,"order":22,"allowedMoves":"7-6,  10-3,  10-9,  8-4,  8-8"},{"row":7,"column":6,"order":23,"allowedMoves":"4-6,  10-6,  7-3,  7-9,  5-4,  5-8,  9-4,  9-8"},{"row":4,"column":6,"order":24,"allowedMoves":"1-6,  7-6,  4-3,  4-9,  2-4,  2-8,  6-4,  6-8"},{"row":1,"column":6,"order":25,"allowedMoves":"4-6,  1-3,  1-9,  3-4,  3-8"},{"row":1,"column":9,"order":26,"allowedMoves":"4-9,  1-6,  3-7"},{"row":4,"column":9,"order":27,"allowedMoves":"1-9,  7-9,  4-6,  2-7,  6-7"},{"row":7,"column":9,"order":28,"allowedMoves":"4-9,  10-9,  7-6,  5-7,  9-7"},{"row":10,"column":9,"order":29,"allowedMoves":"7-9,  10-6,  8-7"},{"row":8,"column":7,"order":30,"allowedMoves":"5-7,  8-4,  8-10,  6-5,  6-9,  10-5,  10-9"},{"row":5,"column":7,"order":31,"allowedMoves":"2-7,  8-7,  5-4,  5-10,  3-5,  3-9,  7-5,  7-9"},{"row":2,"column":7,"order":32,"allowedMoves":"5-7,  2-4,  2-10,  4-5,  4-9"},{"row":2,"column":4,"order":33,"allowedMoves":"5-4,  2-1,  2-7,  4-2,  4-6"},{"row":5,"column":4,"order":34,"allowedMoves":"2-4,  8-4,  5-1,  5-7,  3-2,  3-6,  7-2,  7-6"},{"row":8,"column":4,"order":35,"allowedMoves":"5-4,  8-1,  8-7,  6-2,  6-6,  10-2,  10-6"},{"row":8,"column":1,"order":36,"allowedMoves":"5-1,  8-4,  6-3,  10-3"},{"row":5,"column":1,"order":37,"allowedMoves":"2-1,  8-1,  5-4,  3-3,  7-3"},{"row":2,"column":1,"order":38,"allowedMoves":"5-1,  2-4,  4-3"},{"row":3,"column":3,"order":39,"allowedMoves":"6-3,  3-6,  1-1,  1-5,  5-1,  5-5"},{"row":6,"column":3,"order":40,"allowedMoves":"3-3,  9-3,  6-6,  4-1,  4-5,  8-1,  8-5"},{"row":9,"column":3,"order":41,"allowedMoves":"6-3,  9-6,  7-1,  7-5"},{"row":9,"column":6,"order":42,"allowedMoves":"6-6,  9-3,  9-9,  7-4,  7-8"},{"row":6,"column":6,"order":43,"allowedMoves":"3-6,  9-6,  6-3,  6-9,  4-4,  4-8,  8-4,  8-8"},{"row":3,"column":6,"order":44,"allowedMoves":"6-6,  3-3,  3-9,  1-4,  1-8,  5-4,  5-8"},{"row":3,"column":9,"order":45,"allowedMoves":"6-9,  3-6,  1-7,  5-7"},{"row":6,"column":9,"order":46,"allowedMoves":"3-9,  9-9,  6-6,  4-7,  8-7"},{"row":9,"column":9,"order":47,"allowedMoves":"6-9,  9-6,  7-7"},{"row":7,"column":7,"order":48,"allowedMoves":"4-7,  10-7,  7-4,  7-10,  5-5,  5-9,  9-5,  9-9"},{"row":4,"column":7,"order":49,"allowedMoves":"1-7,  7-7,  4-4,  4-10,  2-5,  2-9,  6-5,  6-9"},{"row":1,"column":7,"order":50,"allowedMoves":"4-7,  1-4,  1-10,  3-5,  3-9"},{"row":1,"column":4,"order":51,"allowedMoves":"4-4,  1-1,  1-7,  3-2,  3-6"},{"row":4,"column":4,"order":52,"allowedMoves":"1-4,  7-4,  4-1,  4-7,  2-2,  2-6,  6-2,  6-6"},{"row":7,"column":4,"order":53,"allowedMoves":"4-4,  10-4,  7-1,  7-7,  5-2,  5-6,  9-2,  9-6"},{"row":10,"column":4,"order":54,"allowedMoves":"7-4,  10-1,  10-7,  8-2,  8-6"},{"row":10,"column":1,"order":55,"allowedMoves":"7-1,  10-4,  8-3"},{"row":7,"column":1,"order":56,"allowedMoves":"4-1,  10-1,  7-4,  5-3,  9-3"},{"row":4,"column":1,"order":57,"allowedMoves":"1-1,  7-1,  4-4,  2-3,  6-3"},{"row":1,"column":1,"order":58,"allowedMoves":"4-1,  1-4,  3-3"},{"row":10,"column":7,"order":59,"allowedMoves":"7-7,  10-4,  10-10,  8-5,  8-9"},{"row":10,"column":10,"order":60,"allowedMoves":"7-10,  10-7,  8-8"},{"row":7,"column":10,"order":61,"allowedMoves":"4-10,  10-10,  7-7,  5-8,  9-8"},{"row":4,"column":10,"order":62,"allowedMoves":"1-10,  7-10,  4-7,  2-8,  6-8"},{"row":1,"column":10,"order":63,"allowedMoves":"4-10,  1-7,  3-8"},{"row":3,"column":8,"order":64,"allowedMoves":"6-8,  3-5,  1-6,  1-10,  5-6,  5-10"},{"row":6,"column":8,"order":65,"allowedMoves":"3-8,  9-8,  6-5,  4-6,  4-10,  8-6,  8-10"},{"row":9,"column":8,"order":66,"allowedMoves":"6-8,  9-5,  7-6,  7-10"},{"row":9,"column":5,"order":67,"allowedMoves":"6-5,  9-2,  9-8,  7-3,  7-7"},{"row":6,"column":5,"order":68,"allowedMoves":"3-5,  9-5,  6-2,  6-8,  4-3,  4-7,  8-3,  8-7"},{"row":3,"column":5,"order":69,"allowedMoves":"6-5,  3-2,  3-8,  1-3,  1-7,  5-3,  5-7"},{"row":3,"column":2,"order":70,"allowedMoves":"6-2,  3-5,  1-4,  5-4"},{"row":6,"column":2,"order":71,"allowedMoves":"3-2,  9-2,  6-5,  4-4,  8-4"},{"row":9,"column":2,"order":72,"allowedMoves":"6-2,  9-5,  7-4"},{"row":8,"column":10,"order":73,"allowedMoves":"5-10,  8-7,  6-8,  10-8"},{"row":5,"column":10,"order":74,"allowedMoves":"2-10,  8-10,  5-7,  3-8,  7-8"},{"row":2,"column":10,"order":75,"allowedMoves":"5-10,  2-7,  4-8"},{"row":4,"column":8,"order":76,"allowedMoves":"1-8,  7-8,  4-5,  2-6,  2-10,  6-6,  6-10"},{"row":1,"column":8,"order":77,"allowedMoves":"4-8,  1-5,  3-6,  3-10"},{"row":1,"column":5,"order":78,"allowedMoves":"4-5,  1-2,  1-8,  3-3,  3-7"},{"row":4,"column":5,"order":79,"allowedMoves":"1-5,  7-5,  4-2,  4-8,  2-3,  2-7,  6-3,  6-7"},{"row":7,"column":5,"order":80,"allowedMoves":"4-5,  10-5,  7-2,  7-8,  5-3,  5-7,  9-3,  9-7"},{"row":10,"column":5,"order":81,"allowedMoves":"7-5,  10-2,  10-8,  8-3,  8-7"},{"row":10,"column":2,"order":82,"allowedMoves":"7-2,  10-5,  8-4"},{"row":7,"column":2,"order":83,"allowedMoves":"4-2,  10-2,  7-5,  5-4,  9-4"},{"row":4,"column":2,"order":84,"allowedMoves":"1-2,  7-2,  4-5,  2-4,  6-4"},{"row":1,"column":2,"order":85,"allowedMoves":"4-2,  1-5,  3-4"},{"row":10,"column":8,"order":86,"allowedMoves":"7-8,  10-5,  8-6,  8-10"},{"row":7,"column":8,"order":87,"allowedMoves":"4-8,  10-8,  7-5,  5-6,  5-10,  9-6,  9-10"},{"row":9,"column":10,"order":88,"allowedMoves":"6-10,  9-7,  7-8"},{"row":6,"column":10,"order":89,"allowedMoves":"3-10,  9-10,  6-7,  4-8,  8-8"},{"row":3,"column":10,"order":90,"allowedMoves":"6-10,  3-7,  1-8,  5-8"},{"row":5,"column":8,"order":91,"allowedMoves":"2-8,  8-8,  5-5,  3-6,  3-10,  7-6,  7-10"},{"row":2,"column":8,"order":92,"allowedMoves":"5-8,  2-5,  4-6,  4-10"},{"row":2,"column":5,"order":93,"allowedMoves":"5-5,  2-2,  2-8,  4-3,  4-7"},{"row":5,"column":5,"order":94,"allowedMoves":"2-5,  8-5,  5-2,  5-8,  3-3,  3-7,  7-3,  7-7"},{"row":8,"column":5,"order":95,"allowedMoves":"5-5,  8-2,  8-8,  6-3,  6-7,  10-3,  10-7"},{"row":8,"column":2,"order":96,"allowedMoves":"5-2,  8-5,  6-4,  10-4"},{"row":5,"column":2,"order":97,"allowedMoves":"2-2,  8-2,  5-5,  3-4,  7-4"},{"row":2,"column":2,"order":98,"allowedMoves":"5-2,  2-5,  4-4"},{"row":8,"column":8,"order":99,"allowedMoves":"5-8,  8-5,  6-6,  6-10,  10-6,  10-10"},{"row":9,"column":7,"order":100,"allowedMoves":"6-7,  9-4,  9-10,  7-5,  7-9"}]')},63:function(e,r,o){},64:function(e){e.exports=JSON.parse('{"rule":{"row":{"label":"Row","placeholder":"Enter row number","type":"text","id":"row","elementType":"input","validation":{"required":{"isRequired":"true","error_message":"This field is required."},"rules":{"minlength":1,"maxlength":1},"dataRuleRegex":{"regex":"^[1-9]+$"}}},"column":{"label":"Column","placeholder":"Enter column number","type":"text","id":"column","elementType":"input","validation":{"required":{"isRequired":"true","error_message":"This field is required."},"rules":{"minlength":1,"maxlength":1},"dataRuleRegex":{"regex":"^[1-9]+$"}}}}}')},65:function(e,r,o){},66:function(e,r,o){e.exports={"c-TCAssignmentHome":"TCAssignmentHome_c-TCAssignmentHome__3LpWu",container:"TCAssignmentHome_container__b3J9a",ruleContainer:"TCAssignmentHome_ruleContainer__378Tc","c-rule-intimation":"TCAssignmentHome_c-rule-intimation__3fkDI",ruleSplitter:"TCAssignmentHome_ruleSplitter__vnhZu"}},69:function(e,r,o){"use strict";o.r(r);var t=o(0),l=o.n(t),n=o(23),a=function(e){return l.a.createElement("div",{className:"c-Jumbotron"},l.a.createElement("h1",{className:"display-4"},e.jumboText),l.a.createElement("p",{className:"lead"},e.subText),l.a.createElement("hr",{className:"my-4"}),l.a.createElement("p",null,e.jumboDescription),l.a.createElement("p",{className:"lead"},"true"===e.renderLink1&&l.a.createElement(n.b,{className:"btn btn-primary btn-lg",to:"/view/demo",role:"button"},e.link1text),"true"===e.renderLink2&&l.a.createElement(n.b,{className:"btn btn-primary btn-lg float-right",to:"/view/demo",role:"button",style:{marginLeft:"15px"}},e.link2Text)))},u=o(24),c=o(8),s=o(58),d=o(13),i=o(60),m=o(20),w=o(21),p=o(22),v=o(25),f=o(26);function h(e,r,o){return r in e?Object.defineProperty(e,r,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[r]=o,e}function g(e,r){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),o.push.apply(o,t)}return o}function b(e){for(var r=1;r<arguments.length;r++){var o=null!=arguments[r]?arguments[r]:{};r%2?g(Object(o),!0).forEach((function(r){h(e,r,o[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):g(Object(o)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(o,r))}))}return e}var M=function(e){var r=e.meta;return l.a.createElement("div",{className:"c-InputField"},l.a.createElement("div",{className:"form-group row ".concat(r.container_class?r.container_class:""),"aria-required":r.aria_required},l.a.createElement("label",{htmlFor:r.id,className:"col-12 col-sm-3 col-lg-12 col-form-label"},r.validation.required.isRequired&&!r.isStandAloneField&&l.a.createElement("span",{className:"required-indicator"},"* "),r.label),r.secondaryLabel?l.a.createElement("span",{className:"field--label-description"},r.secondaryLabel):null,l.a.createElement("div",{className:"col-12 col-sm-9 col-12"},r.error&&l.a.createElement("span",{className:"form-wrapper__field-error"},r.errorMessage),l.a.createElement("input",{className:"form-control ".concat(r.error?"error":""),type:r.type,id:r.id,name:r.name,"data-firstname":"null",value:r.fieldValues&&void 0!==r.fieldValues.stateValue?r.fieldValues.stateValue:r.fieldValues.propsValue,required:r.validation.required.isRequired?"required":"",minLength:r.validation.rules.minlength,maxLength:r.validation.rules.maxlength,placeholder:r.placeholder,"aria-required":r.aria_required,"aria-invalid":r.aria_invalid,onBlur:function(e){return r.handlers.onBlurHandler(r.validation,r.handlers.customBlurHandler,e)},onFocus:r.handlers.onFocusHandler,onChange:r.handlers.onChangeHandler,style:{width:"100%"}}))))};M.defaultProps={};var y=M,S=o(63),E=o.n(S),j=function(e){return l.a.createElement("div",{className:E.a.root})},O=function(e){Object(f.a)(o,e);var r=Object(v.a)(o);function o(e){var t;Object(m.a)(this,o);var l=(t=r.call(this,e)).props.propsData&&t.props.propsData.id,n=t.props.value||t.props.propsData&&t.props.propsData.value;return t.state={error:!1,errorMessage:null},t.props.updateFormValues({formValues:h({},l,n||"")}),t.props.updateFormErrors({formErrors:h({},l,"")}),t.onChangeHandler=t.onChangeHandler.bind(Object(p.a)(t)),t.onBlurHandler=t.onBlurHandler.bind(Object(p.a)(t)),t.onFocusHandler=t.onFocusHandler.bind(Object(p.a)(t)),t}return Object(w.a)(o,[{key:"validateFormField",value:function(e,r){var o=this.props,t=o.propsData,l=o.formErrors,n=o.formValues,a=o.updateFormErrors,u=o.updateFormValues,c=e.target.value&&e.target.value,s=!1,d="",i=t.id,m=r.dataRuleRegex&&new RegExp(r.dataRuleRegex.regex).test(c),w="address1"===e.target.id&&r.dataRuleRegex.po_regex&&new RegExp(r.dataRuleRegex.po_regex,"i").test(c);return e.target.tagName&&"SELECT"===e.target.tagName?r.required.isRequired&&0===e.target.selectedIndex&&!r.required.preSelected&&(s=!0,d=r.required.error_message):e.target.tagName&&"INPUT"===e.target.tagName?r.required.isRequired&&(""===c.trim("")?(s=!0,d=r.required.error_message):r.dataRuleRegex&&!m?(s=!0,d=r.dataRuleRegex.error_message):r.dataRuleRegex&&w&&(s=!0,d=r.dataRuleRegex.po_error_message)):(s=!1,d=null),this.setState({error:s}),a({formErrors:b({},l,h({},i,d))}),u({formValues:b({},n,h({},i,c))}),s}},{key:"onChangeHandler",value:function(e){var r=e.target.value;this.setState({value:r})}},{key:"onFocusHandler",value:function(e){this.setState({oldValue:e.target.value})}},{key:"onBlurHandler",value:function(e,r,o){o.oldValue=this.state.oldValue;var t=this.props.customBlurFormatter;this.validateFormField(o,e)||(r&&"function"===typeof r&&r(o),t&&"function"===typeof t&&this.setState({value:t(o)}))}},{key:"render",value:function(){var e=this.props,r=e.customBlurHandler,o=e.formErrors,t=e.propsData,n=t.elementType,a=o&&o[t.id],u=b({},this.props.propsData,{className:this.state.error?"error":"",error:this.state.error||a,errorMessage:a,handlers:{onBlurHandler:this.onBlurHandler,customBlurHandler:r,onChangeHandler:this.onChangeHandler,onFocusHandler:this.onFocusHandler},fieldValues:{propsValue:this.props.value,stateValue:this.state.value}});switch(n){case"input":return l.a.createElement(y,{meta:u});case"select":return l.a.createElement(j,{meta:u});default:return l.a.createElement("input",null)}}}]),o}(l.a.Component),x=function(e){Object(f.a)(o,e);var r=Object(v.a)(o);function o(e){var t;return Object(m.a)(this,o),(t=r.call(this,e)).state={name:"",greeting:""},t.handleChange=t.handleChange.bind(Object(p.a)(t)),t.handleSubmit=t.handleSubmit.bind(Object(p.a)(t)),t.onFocusHandler=t.onFocusHandler.bind(Object(p.a)(t)),t}return Object(w.a)(o,[{key:"handleChange",value:function(e){this.setState({name:e.target.value})}},{key:"handleSubmit",value:function(e){e.preventDefault(),(0,this.props.formSubmitAction)()}},{key:"onFocusHandler",value:function(){console.log("Parent, on focus handler")}},{key:"render",value:function(){var e=this,r=this.props,o=r.context,t=r.fieldValues,n=r.formErrors,a=r.formValues,u=r.metaData,c=r.updateFormErrors,s=r.updateFormValues,d=u&&o?Object.keys(u[o]):[],i=d&&d.map((function(r,d){var i=u[o][r];return i?l.a.createElement(O,{propsData:i,key:d,onFocus:e.onFocusHandler,value:t&&t[r],formErrors:n,formValues:a,updateFormErrors:c,updateFormValues:s}):null}));return i=i.filter((function(e){return null!==e})),l.a.createElement("form",{className:"c-Form",onSubmit:this.handleSubmit},l.a.createElement("fieldset",null,i),l.a.createElement("button",{type:"submit",className:"btn btn-primary btn-block",style:{marginTop:"15px",background:"black"}},"Submit"))}}]),o}(l.a.Component),F=o(64),_=(o(65),o(62),Object(s.createPropsSelector)({formErrors:i.a,formValues:i.b})),H={updateFormErrors:d.e,updateFormValues:d.f,dispatchResponse:d.d},R=Object(u.b)(_,H)(Object(c.e)((function(e){var r=e.formErrors,o=e.formValues,t=e.history,n=e.dispatchResponse,a=e.updateFormErrors,u=e.updateFormValues;return l.a.createElement("div",{className:"c-RuleContainer"},l.a.createElement(x,{metaData:F,context:"rule",updateFormValues:u,updateFormErrors:a,formErrors:r,formValues:o,formSubmitAction:function(){var e=o.row,r=o.column,l="".concat("http://localhost:8080","/").concat("findpath","?row=").concat(e,"&column=").concat(r);fetch(l).then((function(e){return e.json()})).then((function(e){n(e),t.push("/view/demo")})).catch((function(e){return console.log(e)}))}}))}))),N=(o(66),function(e){return l.a.createElement("div",{className:"c-TCAssignmentHome container"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-12 col-lg-8"},l.a.createElement(a,{jumboText:"Welcome to Chess Board Demo",subText:"This demo will show path of a chess piece as per defined rules",jumboDescription:"This app is built using React JS.",link2Text:"Head To Demo",renderLink1:"false",renderLink2:"true"})),l.a.createElement("div",{className:"col-12 col-lg-4"},l.a.createElement("div",{className:"rulesContainer"},l.a.createElement("p",{className:"c-rule-intimation"},"Let's  specify the rules for this demo!"),l.a.createElement(R,null)))))});N.defaultProps={};var C=N;r.default=C}}]);
//# sourceMappingURL=3.0a96e1a7.chunk.js.map