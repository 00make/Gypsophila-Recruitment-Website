(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{1350:function(t,e,a){},1391:function(t,e,a){"use strict";a(1350)},1425:function(t,e,a){"use strict";var s=a(66),n=a.n(s),i={data:function(){return{industryList:[]}},created:function(){this.getIndustryData()},methods:{getIndustryData:function(){var t=this;n()({url:urlConfig.industryList,method:"get"}).then((function(e){0===e.data.code&&(t.industryList=e.data.zpData)})).catch((function(e){t.$toast({type:"error",content:e.message||"网络错误"})}))},closeDialog:function(){this.$emit("hiddenCheckIndustry",!1)},checkIndustry:function(t){this.$emit("checkIndustry",t),this.closeDialog()}}},o=a(0),r=Object(o.a)(i,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"dialog-wrap industry-wrapper"},[a("div",{staticClass:"dialog-layer"}),t._v(" "),a("div",{staticClass:"dialog-container"},[a("span",{staticClass:"icon-dialog-arrow"}),t._v(" "),a("div",{staticClass:"dialog-title"},[a("h3",{staticClass:"title"},[t._v("请选择行业类别")]),t._v(" "),a("a",{staticClass:"close",attrs:{href:"javascript:;"},on:{click:t.closeDialog}},[a("i",{staticClass:"icon-close"})])]),t._v(" "),a("div",{staticClass:"dialog-con"},[a("div",{staticClass:"industry-panel"},[a("table",[a("tbody",t._l(t.industryList,(function(e,s){return a("tr",{key:s},[a("td",{staticClass:"industry-category"},[t._v(t._s(e.name))]),t._v(" "),a("td",t._l(e.subLevelModelList,(function(e,s){return a("p",{key:s},[a("span",{on:{click:function(a){return t.checkIndustry(e)}}},[t._v(t._s(e.name))])])})),0)])})),0)])])])])])}),[],!1,null,null,null);e.a=r.exports},1426:function(t,e,a){"use strict";var s={name:"postion-industry",data:function(){return{industryList:this.positions,showPop:!1,checkValue:""}},props:{positions:{type:Array,default:function(){return[]}}},watch:{positions:function(t){this.industryList=t}},methods:{selectItem:function(t){this.$emit("input",t),this.showPop=!1,this.checkValue=t.code}}},n=(a(1391),a(0)),i=Object(n.a)(s,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{directives:[{name:"show",rawName:"v-show",value:t.showPop,expression:"showPop"}],staticClass:"popup-postion-industry"},[a("div",{staticClass:"popup-container"},[a("div",{staticClass:"title"},[t._v("请选择行业类别")]),t._v(" "),a("a",{staticClass:"close",attrs:{href:"javascript:;"},on:{click:function(e){t.showPop=!1}}},[a("i",{staticClass:"icon-close"})]),t._v(" "),a("div",{staticClass:"industry-panel"},[a("div",{staticClass:"list"},t._l(t.industryList,(function(e){return a("div",{key:e.code,staticClass:"item"},[a("div",{staticClass:"level1-name"},[t._v(t._s(e.name))]),t._v(" "),a("div",{staticClass:"level2-content"},t._l(e.subLevelModelList,(function(e){return a("p",{key:e.code},[a("span",{staticClass:"level2-name",class:{cur:t.checkValue===e.code},on:{click:function(a){return t.selectItem(e)}}},[t._v(t._s(e.name))])])})),0)])})),0)])])])}),[],!1,null,"d46d27ce",null);e.a=i.exports},1459:function(t,e,a){},1460:function(t,e,a){},1461:function(t,e,a){},1462:function(t,e,a){},1463:function(t,e,a){},1464:function(t,e,a){},1745:function(t,e,a){"use strict";var s=a(245),n=a(12),i=a(17);function o(t,e,a,s,n,i,o){try{var r=t[i](o),c=r.value}catch(t){return void a(t)}r.done?e(c):Promise.resolve(c).then(s,n)}var r={props:{showDialog:{type:Boolean,default:!1}},data:function(){return{companyName:"",companyList:[],isShowCompanyList:!1,showError:!1,show:!0,isInputIng:!1}},directives:{clickoutside:n.a},watch:{showDialog:function(t){t&&(this.show=!1)}},mounted:function(){var t=this;try{this.$nextTick((function(){t.$refs.input.addEventListener("input",(function(){t.isInputIng||t.inputCompanyName()})),t.$refs.input.addEventListener("compositionstart",(function(){t.isInputIng=!0})),t.$refs.input.addEventListener("compositionend",(function(){t.isInputIng=!1,t.inputCompanyName()}))}))}catch(t){}},methods:{strLength:function(t){for(var e=0,a=t.replace(/(^[\s\n\r]*)|([\s\n\r]*$)/g,""),s=a.length,n=0;n<s;n++)e+=a.charCodeAt(n)>255?2:1;return e},closeDialog:function(){this.$emit("closeDialog")},inputCompanyName:function(t){this.companyName?(this.getCompanyList(),this.show=!0):(this.companyList=[],this.isShowCompanyList=!1),this.isShowErrorTips(this.companyName)},isShowErrorTips:function(t){this.showError=this.strLength(t)<8},getCompanyList:function(){var t,e=this;return(t=regeneratorRuntime.mark((function t(){var a;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(s.a)({companyName:e.companyName});case 2:0===(a=t.sent).code?(e.companyList=a.zpData.companyList,e.isShowCompanyList=!0):e.$toast({content:a.message,type:"error"});case 4:case"end":return t.stop()}}),t)})),function(){var e=this,a=arguments;return new Promise((function(s,n){var i=t.apply(e,a);function r(t){o(i,s,n,r,c,"next",t)}function c(t){o(i,s,n,r,c,"throw",t)}r(void 0)}))})()},closeCompanyListDropdown:function(){this.isShowCompanyList=!1},selectCompany:function(t){this.closeCompanyListDropdown(),this.companyName=t,this.isShowErrorTips(this.companyName)},next:function(){this.companyName&&this.strLength(this.companyName)<=92&&this.strLength(this.companyName)>=8&&this.$emit("checkCompany",this.companyName)},_getLength:function(t){return Object(i.g)(t)}}},c=(a(1786),a(0)),d=Object(c.a)(r,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"dialog-container"},[a("div",{staticClass:"dialog-title"},[a("h3",{staticClass:"title"},[t._v("填写你所在的公司全称")]),t._v(" "),a("a",{directives:[{name:"ka",rawName:"v-ka",value:{k:"comany_change_form_dialog_close"},expression:"{k: 'comany_change_form_dialog_close'}"}],staticClass:"close",attrs:{href:"javascript:;"},on:{click:t.closeDialog}},[a("i",{staticClass:"icon-close"})])]),t._v(" "),a("div",{staticClass:"dialog-con"},[a("div",{staticClass:"dialog-step company-form"},[a("div",{staticClass:"form-row"},[a("div",{directives:[{name:"clickoutside",rawName:"v-clickoutside",value:t.closeCompanyListDropdown,expression:"closeCompanyListDropdown"}],staticClass:"c"},[a("span",{staticClass:"ipt-wrap"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.companyName,expression:"companyName"}],ref:"input",staticClass:"ipt required ipt-company",attrs:{type:"text","data-blank":"公司全称不能为空",placeholder:"请输入您所属公司营业执照上的公司名称"},domProps:{value:t.companyName},on:{input:function(e){e.target.composing||(t.companyName=e.target.value)}}}),t._v(" "),a("span",{staticClass:"count-num"},[a("em",{domProps:{innerHTML:t._s(t._getLength(t.companyName))}}),t._v("/46\n                        ")])]),t._v(" "),t.isShowCompanyList?a("div",{staticClass:"result-selecter"},t._l(t.companyList,(function(e,s){return a("li",{key:s,domProps:{innerHTML:t._s(e.highlightItem.hlname)},on:{click:function(a){return t.selectCompany(e.name)}}})})),0):t._e(),t._v(" "),t.showError&&t.show?a("span",{staticClass:"error-tip"},[t._v("不少于4个字")]):t._e()])]),t._v(" "),t._m(0)])]),t._v(" "),a("div",{staticClass:"dialog-footer"},[a("div",{staticClass:"btns"},[a("span",{staticClass:"btn btn-sure",class:{disabled:t.strLength(t.companyName)<8},on:{click:t.next}},[t._v("下一步")])])])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"tips"},[e("p",[this._v("注意事项：")]),this._v(" "),e("p",[this._v("1.请输入您所属公司营业执照上的公司名称")]),this._v(" "),e("p",[this._v("2.请注意区分总公司和分公司")]),this._v(" "),e("p",[this._v("3.公司名称将用于后续的企业认证使用，请确保准确性")])])}],!1,null,"54d0e134",null).exports,l={props:{brandList:Array,isIndividual:{type:Boolean,default:!1}},methods:{closeDialog:function(){this.$emit("closeDialog")},goToBrandDetail:function(t){var e="/gongsi/".concat(t,".html");window.open(e)},addBrand:function(){this.$emit("addBrand")},backToPreStep:function(){this.$emit("backToPreStep")},selectBrand:function(t){this.$emit("selectBrand",t)}},updated:function(){}},m=(a(1787),Object(c.a)(l,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"dialog-container"},[a("div",{staticClass:"dialog-title"},[a("h3",{staticClass:"title"},[t._v("请选择你所在的公司")]),t._v(" "),a("a",{staticClass:"close",attrs:{href:"javascript:;",ka:"comany_change_form_dialog_close"},on:{click:t.closeDialog}},[a("i",{staticClass:"icon-close"})])]),t._v(" "),a("div",{staticClass:"dialog-con"},[a("div",{staticClass:"dialog-step company-list"},[a("div",{staticClass:"company-container"},[t._l(t.brandList,(function(e,s){return a("li",{key:s,on:{click:function(a){return t.selectBrand(e)}}},[a("div",{staticClass:"img-wrap"},[e.brandLogo?a("img",{attrs:{src:e.brandLogo}}):t._e()]),t._v(" "),a("div",{staticClass:"text"},[a("div",{staticClass:"name"},[t._v("\n                            "+t._s(e.brandName)+"\n                            "),a("em",{staticClass:"vline"}),t._v("\n                            "+t._s(e.brandIndustryName)+"\n                        ")]),t._v(" "),a("p",{staticClass:"gray"},[t._v(t._s(e.comName))]),t._v(" "),a("a",{staticClass:"view-company",attrs:{href:"javascript:void(0)"},on:{click:function(a){return a.stopPropagation(),t.goToBrandDetail(e.encryptBrandId)}}},[t._v("查看公司")]),t._v(" "),a("p",[t._l(e.userAvatarList,(function(t,e){return a("img",{key:e,attrs:{src:t}})})),t._v(" "),a("span",[t._v(t._s(e.userCount)+"个boss")])],2)])])})),t._v(" "),t.isIndividual?t._e():a("li",{staticClass:"add",attrs:{ka:"comany_change_dialog_list_add"},on:{click:t.addBrand}},[a("i",{staticClass:"icon-company-add"}),t._v(" "),a("span",[t._v("创建新的公司品牌")])])],2)])]),t._v(" "),a("div",{staticClass:"dialog-footer"},[a("div",{staticClass:"btns"},[a("span",{staticClass:"link-prev",attrs:{ka:"comany_change_dialog_list_prev"},on:{click:t.backToPreStep}},[t._v("上一步")])])])])}),[],!1,null,"65df734a",null).exports),u=a(1425),p=a(1426);function h(t,e,a,s,n,i,o){try{var r=t[i](o),c=r.value}catch(t){return void a(t)}r.done?e(c):Promise.resolve(c).then(s,n)}function v(t){return function(){var e=this,a=arguments;return new Promise((function(s,n){var i=t.apply(e,a);function o(t){h(i,s,n,o,r,"next",t)}function r(t){h(i,s,n,o,r,"throw",t)}o(void 0)}))}}var C={directives:{clickoutside:n.a},props:{companyName:{type:String,default:""},suggestCompany:{type:Object,default:function(){return{}}},selectCompany:{type:Object,default:function(){return{}}},showForm:{type:Boolean,default:!1},isIndividual:{type:Boolean,default:!1},limitBrandName:{type:String,default:""}},components:{CheckIndustry:u.a,PositionIndustry:p.a},data:function(){return{isShowCheckIndustry:!1,showError:!1,brandName:"",scaleList:[{label:"0-20人",value:301},{label:"20-99人",value:302},{label:"100-499人",value:303},{label:"500-999人",value:304},{label:"1000-9999人",value:305},{label:"10000人以上",value:306}],brandScale:"",industryList:[],selectIndustry:{},codeType:0,creditCode:"",regCode:"",taxCode:"",suggestShow:!1,suggestCompList:[]}},computed:{showCreateForm:function(){return!!this.showForm||(1==this.suggestCompany.jumpType?!(this.selectCompany.comId>0||""!=this.selectCompany.kgId):!(this.suggestCompany.comId>0||""!=this.suggestCompany.kgId))}},watch:{companyName:function(t,e){""!=t&&this.searchBrandName()},codeType:function(t,e){this.showError=!1,this.creditCode="",this.regCode="",this.taxCode=""},limitBrandName:function(t,e){this.brandName=t}},methods:{checkIndustry:function(){this.isShowCheckIndustry=!0},closeDialog:function(){this.$emit("closeDialog")},backToPreStep:function(){this.$emit("backToPreStep")},_getLength:function(t){return Object(i.g)(t)},checkBrandName:function(){this._getLength(this.brandName)>10?this.showError="brandName":this.showError=""},getIndustryList:function(){var t=this;return v(regeneratorRuntime.mark((function e(){var a;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t.industryList.length){e.next=4;break}t.$refs.industry.showPop=!0,e.next=8;break;case 4:return e.next=6,Object(s.n)();case 6:0===(a=e.sent).code&&(t.industryList=a.zpData,t.$refs.industry.showPop=!0);case 8:case"end":return e.stop()}}),e)})))()},validate:function(t){var e=/^[0-9A-Z]+$/;"creditCode"==t&&(!this.creditCode||18==this.creditCode.length&&e.test(this.creditCode)?this.showError="":this.showError="creditCode"),"taxCode"==t&&(this.taxCode&&(this.taxCode.length>18||!e.test(this.taxCode))?this.showError="taxCode":this.showError=""),"regCode"==t&&(this.regCode&&(this.regCode.length>15||!/^[0-9]*$/.test(this.regCode))?this.showError="regCode":this.showError="")},searchBrandName:function(){var t=this;return v(regeneratorRuntime.mark((function e(){var a;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(s.y)({comName:t.companyName});case 2:0==(a=e.sent).code&&a.zpData&&a.zpData.brandNameList&&0!=a.zpData.brandNameList.length?t.suggestCompList=a.zpData.brandNameList:t.suggestCompList=[];case 4:case"end":return e.stop()}}),e)})))()},blur:function(){var t=this;setTimeout((function(){t.suggestShow=!1}),200)},choseSuggest:function(t){var e=this;this.brandName=t,this.$nextTick((function(){e.suggestShow=!1}))},createBrand:function(){var t=/^[0-9A-Z]+$/;if(!this.showError&&(!this.showCreateForm||this.taxCode||this.regCode||this.creditCode))if(!this.creditCode||18==this.creditCode.length&&t.test(this.creditCode))if(this.taxCode&&(this.taxCode.length>18||!t.test(this.taxCode)))this.showError="taxCode";else if(this.regCode&&(this.regCode.length>15||!/^[0-9]*$/.test(this.regCode)))this.showError="regCode";else{this.showError="";var e={brandName:this.brandName,brandScale:this.brandScale,brandIndustryName:this.selectIndustry.name,brandIndustry:this.selectIndustry.code,creditCode:this.creditCode,regCode:this.regCode,taxCode:this.taxCode,encryptComId:this.suggestCompany.encryptComId};this.showForm?e.comName=this.suggestCompany.comName:1==this.suggestCompany.jumpType?(e.comName=this.selectCompany.comName,e.comId=this.selectCompany.comId,e.kgId=this.selectCompany.kgId,e.encryptComId=this.selectCompany.encryptComId):(e.comName=this.suggestCompany.comName,e.comId=this.suggestCompany.comId,e.kgId=this.suggestCompany.kgId,e.encryptComId=this.suggestCompany.encryptComId),this.$emit("createBrand",e)}else this.showError="creditCode"}}},g=(a(1789),Object(c.a)(C,(function(){var t=this,e=this,s=e.$createElement,n=e._self._c||s;return n("div",{staticClass:"dialog-container"},[n("div",{staticClass:"dialog-title"},[n("h3",{staticClass:"title"},[e._v("创建公司")]),e._v(" "),n("a",{directives:[{name:"ka",rawName:"v-ka",value:{k:"comany_change_dialog_create_close"},expression:"{k: 'comany_change_dialog_create_close'}"}],staticClass:"close",attrs:{href:"javascript:;"},on:{click:e.closeDialog}},[n("i",{staticClass:"icon-close"})])]),e._v(" "),n("div",{staticClass:"dialog-con"},[n("div",{staticClass:"dialog-step brand-form"},[n("div",{staticClass:"tip-text"},[e._v("公司信息将被审核，请确保你输入的信息真实有效。")]),e._v(" "),e.isIndividual?e._e():n("div",{staticClass:"company-sample"},[e._m(0),e._v(" "),n("img",{attrs:{src:a(1788),alt:"",srcset:""}})]),e._v(" "),n("form",{staticClass:"dialog-form",attrs:{action:"/boss/brand/brandcom/join.json",method:"post"}},[e.isIndividual?e._e():n("div",{staticClass:"form-row row-companyshort"},[n("div",{staticClass:"t"},[e._v("公司简称：")]),e._v(" "),n("div",{staticClass:"c"},[n("span",{staticClass:"ipt-wrap"},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.brandName,expression:"brandName"}],staticClass:"ipt required ipt-brand ipt-error",attrs:{type:"text",name:"brandName","data-blank":"公司简称不能为空","data-range":"1,10",autocomplete:"off",placeholder:"建议使用企业的字号、商号、常用词、关键词","data-url":"/user/brand/suggest/","data-ajax":"/boss/brand/matchbrand/check.json"},domProps:{value:e.brandName},on:{input:[function(t){t.target.composing||(e.brandName=t.target.value)},function(t){return e.checkBrandName()}],focus:function(){t.suggestShow=!0},blur:e.blur}}),e._v(" "),n("span",{staticClass:"count-num"},[n("em",{domProps:{innerHTML:e._s(e._getLength(e.brandName))}}),e._v("/10\n                            ")])]),e._v(" "),e._m(1),e._v(" "),"brandName"==e.showError?n("span",{staticClass:"error-tip"},[e._v("公司简称请控制在10字以内")]):e._e()]),e._v(" "),e.suggestShow&&0!=e.suggestCompList.length?n("div",{staticClass:"suggest-container"},[n("p",{staticClass:"suggest-title"},[e._v("推荐使用")]),e._v(" "),n("div",{staticClass:"suggest-content"},e._l(e.suggestCompList,(function(t,a){return n("p",{key:a,staticClass:"suggest-item",on:{click:function(a){return e.choseSuggest(t)}}},[e._v("\n                                "+e._s(t)+"\n                            ")])})),0)]):e._e()]),e._v(" "),n("div",{staticClass:"form-row row-industry"},[n("div",{staticClass:"t"},[e._v("所属行业：")]),e._v(" "),n("div",{staticClass:"c"},[n("div",{staticClass:"dropdown-wrap dropdown-industry",on:{click:function(t){return e.getIndustryList()}}},[n("span",{},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.selectIndustry.name,expression:"selectIndustry.name"}],staticClass:"ipt",attrs:{type:"text",placeholder:"选择行业",readonly:""},domProps:{value:e.selectIndustry.name},on:{input:function(t){t.target.composing||e.$set(e.selectIndustry,"name",t.target.value)}}})])]),e._v(" "),n("position-industry",{ref:"industry",attrs:{positions:e.industryList},model:{value:e.selectIndustry,callback:function(t){e.selectIndustry=t},expression:"selectIndustry"}})],1)]),e._v(" "),n("div",{staticClass:"form-row row-scale"},[n("div",{staticClass:"t"},[e._v("人员规模：")]),e._v(" "),n("div",{staticClass:"c"},[n("ui-select",{model:{value:e.brandScale,callback:function(t){e.brandScale=t},expression:"brandScale"}},e._l(e.scaleList,(function(t){return n("ui-option",{key:t.value,attrs:{value:t.value}},[e._v(e._s(t.label))])})),1)],1)]),e._v(" "),e.showCreateForm?n("div",{staticClass:"form-new"},[n("p",{staticClass:"form-title"},[e._v("请选择一项营业执照中的信息进行补充：")]),e._v(" "),n("ui-radio-group",{model:{value:e.codeType,callback:function(t){e.codeType=t},expression:"codeType"}},[n("ui-radio",{attrs:{label:0}},[e._v("统一社会信用代码")]),e._v(" "),n("ui-radio",{attrs:{label:1}},[e._v("纳税人识别号")]),e._v(" "),n("ui-radio",{attrs:{label:2}},[e._v("工商注册号")])],1),e._v(" "),0==e.codeType?n("div",{staticClass:"form-row"},[n("div",{staticClass:"c"},[n("span",{staticClass:"ipt-wrap"},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.creditCode,expression:"creditCode"}],staticClass:"ipt",attrs:{type:"text",autocomplete:"off",name:"creditCode",placeholder:"请填写18位统一社会信用代码",maxlength:"18"},domProps:{value:e.creditCode},on:{blur:function(t){return e.validate("creditCode")},input:function(t){t.target.composing||(e.creditCode=t.target.value)}}}),e._v(" "),n("span",{staticClass:"count-num"},[n("em",{domProps:{innerHTML:e._s(e.creditCode.length)}}),e._v("/18\n                                ")])]),e._v(" "),"creditCode"==e.showError?n("span",{staticClass:"error-tip"},[e._v("请输入正确的统一社会信用代码")]):e._e()])]):e._e(),e._v(" "),1==e.codeType?n("div",{staticClass:"form-row"},[n("div",{staticClass:"c"},[n("span",{staticClass:"ipt-wrap"},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.taxCode,expression:"taxCode"}],staticClass:"ipt",attrs:{type:"text",autocomplete:"off",name:"taxCode",placeholder:"请填写纳税人识别号",maxlength:"18"},domProps:{value:e.taxCode},on:{blur:function(t){return e.validate("taxCode")},input:function(t){t.target.composing||(e.taxCode=t.target.value)}}}),e._v(" "),n("span",{staticClass:"count-num"},[n("em",{domProps:{innerHTML:e._s(e.taxCode.length)}}),e._v("/18\n                                ")])]),e._v(" "),"taxCode"==e.showError?n("span",{staticClass:"error-tip"},[e._v("请输入正确的纳税人识别号")]):e._e()])]):e._e(),e._v(" "),2==e.codeType?n("div",{staticClass:"form-row"},[n("div",{staticClass:"c"},[n("span",{staticClass:"ipt-wrap"},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.regCode,expression:"regCode"}],staticClass:"ipt",attrs:{type:"text",autocomplete:"off",name:"regCode",placeholder:"请填写工商注册号",maxlength:"15"},domProps:{value:e.regCode},on:{blur:function(t){return e.validate("regCode")},input:function(t){t.target.composing||(e.regCode=t.target.value)}}}),e._v(" "),n("span",{staticClass:"count-num"},[n("em",{domProps:{innerHTML:e._s(e.regCode.length)}}),e._v("/15\n                                ")])]),e._v(" "),"regCode"==e.showError?n("span",{staticClass:"error-tip"},[e._v("请输入正确的工商注册号")]):e._e()])]):e._e()],1):e._e()])])]),e._v(" "),n("div",{staticClass:"dialog-footer"},[n("div",{staticClass:"btns"},[n("a",{directives:[{name:"ka",rawName:"v-ka",value:{k:"comany_change_dialog_create_prev"},expression:"{k: 'comany_change_dialog_create_prev'}"}],staticClass:"link-prev",attrs:{href:"javascript:;"},on:{click:e.backToPreStep}},[e._v("上一步")]),e._v(" "),e.showCreateForm?n("span",{directives:[{name:"ka",rawName:"v-ka",value:{k:"comany_change_dialog_create_submit"},expression:"{k: 'comany_change_dialog_create_submit'}"}],staticClass:"btn btn-sure",class:{disabled:!(e.brandName&&e.selectIndustry.name&&e.brandScale&&(e.taxCode||e.regCode||e.creditCode))},staticStyle:{display:"inline-block"},on:{click:e.createBrand}},[e._v("创建并加入")]):n("span",{directives:[{name:"ka",rawName:"v-ka",value:{k:"comany_change_dialog_create_submit"},expression:"{k: 'comany_change_dialog_create_submit'}"}],staticClass:"btn btn-sure",class:{disabled:!e.brandName||!e.selectIndustry.name||!e.brandScale},staticStyle:{display:"inline-block"},on:{click:e.createBrand}},[e._v("创建并加入")])])])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("p",{staticClass:"sample-title"},[e("i",{staticClass:"iboss-xinxi"}),this._v("公司简称在求职者端的展示效果：")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"result-selecter company-selecter",staticStyle:{display:"none"}},[e("ul",{staticStyle:{display:"none"}})])}],!1,null,"77412772",null).exports),_={data:function(){return{isShowCheckIndustry:!1,showError:!1,brandName:"",scaleList:[{label:"0-20人",value:301},{label:"20-99人",value:302},{label:"100-499人",value:303},{label:"500-999人",value:304},{label:"1000-9999人",value:305},{label:"10000人以上",value:306}],brandScale:"",industryList:[],selectIndustry:{}}},props:{newBrand:{type:Object,default:function(){return{}}},oldBrand:{type:Object,default:function(){return{}}},sameBrandInfo:{type:Array,default:function(){return[]}},isFromCreate:{type:Boolean,default:!1}},created:function(){},methods:{closeDialog:function(){this.$emit("closeDialog")},changeCompany:function(){this.$emit("changeCompany")},backToPreStep:function(){this.$emit("backToPreStep")}}},y=(a(1790),Object(c.a)(_,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"dialog-container"},[a("div",{staticClass:"dialog-title"},[t.oldBrand.comName?a("h3",{staticClass:"title"},[t._v("确认公司")]):t.isFromCreate?a("h3",{staticClass:"title"},[t._v("确认新建")]):a("h3",{staticClass:"title"},[t._v("确认加入")]),t._v(" "),a("a",{directives:[{name:"ka",rawName:"v-ka",value:{k:"comany_change_dialog_create_close"},expression:"{k: 'comany_change_dialog_create_close'}"}],staticClass:"close",attrs:{href:"javascript:;"},on:{click:t.closeDialog}},[a("i",{staticClass:"icon-close"})])]),t._v(" "),a("div",{staticClass:"dialog-con"},[a("div",{staticClass:"dialog-step change-form"},[t.oldBrand.comName?a("p",{staticClass:"info-text"},[t._v("您的就职公司将从")]):t._e(),t._v(" "),t.oldBrand.comName?a("ul",[a("li",[a("div",{staticClass:"img-wrap"},[t.oldBrand.brandLogo?a("img",{attrs:{src:t.oldBrand.brandLogo}}):t._e()]),t._v(" "),a("div",{staticClass:"text"},[a("div",{staticClass:"name"},[t._v(t._s(t.oldBrand.brandName)),a("em",{staticClass:"vline"}),t._v(t._s(t.oldBrand.brandIndustryName))]),t._v(" "),a("p",{staticClass:"gray"},[t._v(t._s(t.oldBrand.comName))])])])]):t._e(),t._v(" "),t.oldBrand.comName?a("p",{staticClass:"info-text"},[t._v("变更为")]):t.isFromCreate?a("p",{staticClass:"info-text"},[t._v("您即将新建并加入公司")]):a("p",{staticClass:"info-text"},[t._v("您即将加入")]),t._v(" "),a("ul",[a("li",[a("div",{staticClass:"img-wrap"},[t.newBrand.brandLogo?a("img",{attrs:{src:t.newBrand.brandLogo}}):t._e()]),t._v(" "),a("div",{staticClass:"text"},[a("div",{staticClass:"name"},[t._v(t._s(t.newBrand.brandName)),a("em",{staticClass:"vline"}),t._v(t._s(t.newBrand.brandIndustryName))]),t._v(" "),a("p",{staticClass:"gray"},[t._v(t._s(t.newBrand.comName))])])])]),t._v(" "),t.sameBrandInfo.length?a("div",{staticClass:"same-container"},[a("div",{staticClass:"btn-container"},[a("button",{staticClass:"btn",on:{click:t.changeCompany}},[t._v("确认新建")])]),t._v(" "),a("p",{staticClass:"info-text"},[t._v("以下公司与您的简称重名")]),t._v(" "),a("div",{staticClass:"same-list"},[a("ul",t._l(t.sameBrandInfo,(function(e,s){return a("li",{key:s},[a("div",{staticClass:"img-wrap"},[e.brandLogo?a("img",{attrs:{src:e.brandLogo}}):t._e()]),t._v(" "),a("div",{staticClass:"text"},[a("div",{staticClass:"name"},[t._v(t._s(e.brandName)),a("em",{staticClass:"vline"}),t._v(t._s(e.brandIndustryName))]),t._v(" "),a("p",{staticClass:"gray"},[t._v(t._s(e.comName))]),t._v(" "),e.brandIdStr?a("a",{staticClass:"view-company",attrs:{href:"/gongsi/"+e.brandIdStr+".html",target:"_blank"}},[t._v("查看公司")]):t._e(),t._v(" "),a("p",[t._l(e.userAvatarList,(function(t,e){return a("img",{key:e,attrs:{src:t}})})),t._v(" "),a("span",[t._v(t._s(e.userCount)+"个boss")])],2)])])})),0)])]):t._e()])]),t._v(" "),a("div",{staticClass:"dialog-footer"},[a("div",{staticClass:"btns"},[a("a",{directives:[{name:"ka",rawName:"v-ka",value:{k:"comany_change_dialog_confirm_prev"},expression:"{k: 'comany_change_dialog_confirm_prev'}"}],staticClass:"link-prev",attrs:{href:"javascript:;"},on:{click:t.backToPreStep}},[t._v("上一步")]),t._v(" "),t.sameBrandInfo.length?t._e():a("span",{directives:[{name:"ka",rawName:"v-ka",value:{k:"comany_change_dialog_confirm_submit"},expression:"{k: 'comany_change_dialog_confirm_submit'}"}],staticClass:"btn btn-sure",staticStyle:{display:"inline-block"},on:{click:t.changeCompany}},[t.oldBrand.comName?[t._v("确认更改")]:t.isFromCreate?[t._v("确认新建")]:[t._v("确认加入")]],2)])])])}),[],!1,null,"d1e49866",null).exports),f={name:"same-company",props:{companyData:{type:Object,default:function(){return{}}}},data:function(){return{}},methods:{closeDialog:function(){this.$emit("closeDialog")},backToPreStep:function(){this.$emit("backToPreStep")},checkBrand:function(t){this.$emit("checkBrand",t)},addBrand:function(){this.$emit("showCreateBrand");var t=this.companyData.sameNameList.map((function(t){return t.comId}));try{this.sendAction({action:"userinfo-company-same-addcompany",p:t.join("#")})}catch(t){}}}},w=(a(1791),Object(c.a)(f,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"dialog-container dialog-same"},[a("div",{staticClass:"dialog-title"},[a("h3",{staticClass:"title"},[t._v("有同名公司存在，请选择公司")]),t._v(" "),a("a",{directives:[{name:"ka",rawName:"v-ka",value:{k:"comany_change_form_dialog_close"},expression:"{k: 'comany_change_form_dialog_close'}"}],staticClass:"close",attrs:{href:"javascript:;"},on:{click:t.closeDialog}},[a("i",{staticClass:"icon-close"})])]),t._v(" "),a("div",{staticClass:"dialog-con"},[a("ul",{staticClass:"company-list"},t._l(t.companyData.sameNameList,(function(e,s){return a("li",{key:s},[a("h4",{staticClass:"company-name"},[t._v(t._s(e.comName))]),t._v(" "),a("span",{staticClass:"icon-span",on:{click:function(a){return t.checkBrand(e)}}},[a("i")]),t._v(" "),a("p",[t._v("法人定代表人："+t._s(e.legalPerson))]),t._v(" "),a("p",[t._v("成立日期："+t._s(e.startDate))]),t._v(" "),a("p",[t._v("地址："+t._s(e.address))])])})),0)]),t._v(" "),a("div",{staticClass:"dialog-footer"},[a("div",{staticClass:"btns"},[a("a",{directives:[{name:"ka",rawName:"v-ka",value:{k:"comany_change_dialog_create_prev"},expression:"{k: 'comany_change_dialog_create_prev'}"}],staticClass:"link-prev",attrs:{href:"javascript:;"},on:{click:t.backToPreStep}},[t._v("上一步")])])])])}),[],!1,null,"6c2ef632",null).exports);function b(t,e,a,s,n,i,o){try{var r=t[i](o),c=r.value}catch(t){return void a(t)}r.done?e(c):Promise.resolve(c).then(s,n)}function k(t){return function(){var e=this,a=arguments;return new Promise((function(s,n){var i=t.apply(e,a);function o(t){b(i,s,n,o,r,"next",t)}function r(t){b(i,s,n,o,r,"throw",t)}o(void 0)}))}}var I={props:{brandInfo:{type:Object,default:function(){}}},data:function(){return{isShowCompanyName:!0,isShowCheckBrand:!1,isShowCreateBrand:!1,isShowChangeCompany:!1,isShowCompanySame:!1,showDialogArr:["isShowCompanyName"],curDialog:"isShowCompanyName",brandList:[],newBrandInfo:{},sameBrandInfo:[],companyName:"",selectCompanyData:{},selectCompany:{},showForm:!1,isFromCreate:!0,isIndividual:!1,limitBrandName:"",submiting:{changeCompany:!1}}},components:{CompanyName:d,CheckBrand:m,CreateBrand:g,ChangeCompany:y,SameCompany:w},methods:{closeDialog:function(){this.$emit("closeWriteCompanyDialog")},backToPreStep:function(){var t,e=this;this.hideDialog(),this.showDialogArr.forEach((function(a,s){a==e.curDialog?(t=e.showDialogArr[s-1],e.showDialogArr=e.showDialogArr.splice(0,s)):t=e.showDialogArr[0]})),this[t]=!0,this.curDialog=t},updateCurDialog:function(t){-1==this.showDialogArr.indexOf(t)&&this.showDialogArr.push(t),this.curDialog=t},hideDialog:function(){this.isShowCompanyName=!1,this.isShowCheckBrand=!1,this.isShowCreateBrand=!1,this.isShowChangeCompany=!1,this.isShowCompanySame=!1},checkIsIndividual:function(t){var e=this;return k(regeneratorRuntime.mark((function a(){var n;return regeneratorRuntime.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,Object(s.r)({kgId:t.kgId,encryptComId:t.encryptComId});case 2:0===(n=a.sent).code&&n.zpData&&"string"==typeof n.zpData.limitBrandName&&n.zpData.limitBrandName.length?(e.limitBrandName=n.zpData.limitBrandName,e.isIndividual=!0):(e.limitBrandName="",e.isIndividual=!1);case 4:case"end":return a.stop()}}),a)})))()},checkCompany:function(t){var e=this;return k(regeneratorRuntime.mark((function a(){var n,i,o;return regeneratorRuntime.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,Object(s.e)({comName:t});case 2:if(n=a.sent,e.companyName=t,0!==n.code){a.next=13;break}return i=n.zpData,o=void 0===i?{}:i,e.hideDialog(),e.selectCompanyData=o,a.next=10,e.checkIsIndividual(o);case 10:0==o.jumpType?(e.isShowCreateBrand=!0,e.updateCurDialog("isShowCreateBrand")):1==o.jumpType?(e.isShowCompanySame=!0,e.updateCurDialog("isShowCompanySame")):e.checkBrand({comName:e.selectCompanyData.comName,comId:e.selectCompanyData.comId,encryptComId:e.selectCompanyData.encryptComId}),a.next=14;break;case 13:e.$toast({content:n.message,type:"error"});case 14:case"end":return a.stop()}}),a)})))()},checkBrand:function(t){var e=this;return k(regeneratorRuntime.mark((function a(){var n;return regeneratorRuntime.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,Object(s.j)({companyName:t.comName,encryptComId:t.encryptComId});case 2:if(n=a.sent,e.selectCompany=t,e.companyName=t.companyName,0!==n.code){a.next=12;break}return e.hideDialog(),a.next=9,e.checkIsIndividual(t);case 9:n.zpData.brandComList.length?(e.isShowCheckBrand=!0,e.brandList=n.zpData.brandComList,e.updateCurDialog("isShowCheckBrand")):(e.isShowCreateBrand=!0,e.updateCurDialog("isShowCreateBrand"),e.showForm=!1),a.next=13;break;case 12:e.$toast({content:n.message,type:"error"});case 13:case"end":return a.stop()}}),a)})))()},selectBrand:function(t){this.newBrandInfo=t,this.hideDialog(),this.isShowChangeCompany=!0,this.updateCurDialog("isShowChangeCompany"),this.isFromCreate=!1},showCreateBrand:function(){this.hideDialog(),this.isShowCreateBrand=!0,this.showForm=!0,this.updateCurDialog("isShowCreateBrand"),this.isFromCreate=!0},addBrand:function(t){this.newBrandInfo=t,this.hideDialog(),this.isShowCreateBrand=!0,this.updateCurDialog("isShowCreateBrand"),this.showForm=!1},createBrand:function(t){var e=this;return k(regeneratorRuntime.mark((function a(){var n;return regeneratorRuntime.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,Object(s.d)({brandName:t.brandName});case 2:0===(n=a.sent).code?(e.hideDialog(),e.isShowChangeCompany=!0,e.updateCurDialog("isShowChangeCompany"),e.isFromCreate=!0,e.newBrandInfo=t,n.zpData.brandList&&(e.sameBrandInfo=n.zpData.brandList)):e.$toast({content:n.message,type:"error"});case 4:case"end":return a.stop()}}),a)})))()},changeCompany:function(){var t=this;return k(regeneratorRuntime.mark((function e(){var a,n,i,o,r,c,d,l;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t.submiting.changeCompany){e.next=2;break}return e.abrupt("return");case 2:return t.submiting.changeCompany=!0,a={brandName:t.newBrandInfo.brandName||"",brandIndustry:t.newBrandInfo.brandIndustry||"",brandScale:t.newBrandInfo.brandScale||"",kgId:t.newBrandInfo.kgId||"",creditCode:t.newBrandInfo.creditCode||"",regCode:t.newBrandInfo.regCode||"",taxCode:t.newBrandInfo.taxCode||"",newEncryptComId:t.newBrandInfo.encryptComId||"",newEncryptBrandId:t.newBrandInfo.encryptBrandId||"",companyName:t.newBrandInfo.comName||""},Object.keys(t.brandInfo).length&&(a.oldEncryptComId=t.brandInfo.encryptComId,a.oldEncryptBrandId=t.brandInfo.encryptBrandId),n=Object.keys(t.brandInfo).length?s.c:s.s,e.next=8,n(a);case 8:i=e.sent,t.submiting.changeCompany=!1,0===i.code?(t.closeDialog(),o=i.zpData,r=o.company,c=void 0===r?{}:r,d=o.brand,l=void 0===d?{}:d,t.$emit("updateBrand",{companyFullName:c.name,name:l.name,logo:l.logo,industry:l.industryName,comId:c.comId,brandId:l.brandId,encryptComId:c.encryptComId,encryptBrandId:l.encryptBrandId}),t.$toast({content:"加入成功",type:"success"})):t.$toast({content:i.message,type:"error"});case 11:case"end":return e.stop()}}),e)})))()}}},N=(a(1792),Object(c.a)(I,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"dialog-wrap dialog-company-manage dialog-company-manage-my"},[a("div",{staticClass:"dialog-layer"}),t._v(" "),a("CompanyName",{directives:[{name:"show",rawName:"v-show",value:t.isShowCompanyName,expression:"isShowCompanyName"}],attrs:{showDialog:t.isShowCompanyName},on:{closeDialog:t.closeDialog,checkCompany:t.checkCompany}}),t._v(" "),a("SameCompany",{directives:[{name:"show",rawName:"v-show",value:t.isShowCompanySame,expression:"isShowCompanySame"}],attrs:{companyData:t.selectCompanyData},on:{backToPreStep:t.backToPreStep,closeDialog:t.closeDialog,checkBrand:t.checkBrand,showCreateBrand:t.showCreateBrand}}),t._v(" "),a("CheckBrand",{directives:[{name:"show",rawName:"v-show",value:t.isShowCheckBrand,expression:"isShowCheckBrand"}],attrs:{brandList:t.brandList,isIndividual:t.isIndividual},on:{backToPreStep:t.backToPreStep,closeDialog:t.closeDialog,selectBrand:t.selectBrand,addBrand:t.addBrand}}),t._v(" "),a("CreateBrand",{directives:[{name:"show",rawName:"v-show",value:t.isShowCreateBrand,expression:"isShowCreateBrand"}],attrs:{suggestCompany:t.selectCompanyData,selectCompany:t.selectCompany,showForm:t.showForm,isShowCreateBrand:t.isShowCreateBrand,companyName:t.companyName,isIndividual:t.isIndividual,limitBrandName:t.limitBrandName},on:{backToPreStep:t.backToPreStep,closeDialog:t.closeDialog,createBrand:t.createBrand}}),t._v(" "),a("ChangeCompany",{directives:[{name:"show",rawName:"v-show",value:t.isShowChangeCompany,expression:"isShowChangeCompany"}],attrs:{isFromCreate:t.isFromCreate,oldBrand:t.brandInfo,newBrand:t.newBrandInfo,sameBrandInfo:t.sameBrandInfo},on:{backToPreStep:t.backToPreStep,closeDialog:t.closeDialog,changeCompany:t.changeCompany}})],1)}),[],!1,null,null,null));e.a=N.exports},1786:function(t,e,a){"use strict";a(1459)},1787:function(t,e,a){"use strict";a(1460)},1788:function(t,e,a){t.exports=a.p+"static/images/sample-bg.png"},1789:function(t,e,a){"use strict";a(1461)},1790:function(t,e,a){"use strict";a(1462)},1791:function(t,e,a){"use strict";a(1463)},1792:function(t,e,a){"use strict";a(1464)}}]);