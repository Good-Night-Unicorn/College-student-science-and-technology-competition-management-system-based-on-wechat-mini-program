(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/zhubanfang/add-or-update"],{"0059":function(e,n,r){"use strict";(function(e){r("c2b2");t(r("66fd"));var n=t(r("0b76"));function t(e){return e&&e.__esModule?e:{default:e}}e(n.default)}).call(this,r("543d")["createPage"])},"0267":function(e,n,r){"use strict";(function(e){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var t=a(r("a34a"));function a(e){return e&&e.__esModule?e:{default:e}}function u(e,n,r,t,a,u,i){try{var o=e[u](i),s=o.value}catch(c){return void r(c)}o.done?n(s):Promise.resolve(s).then(t,a)}function i(e){return function(){var n=this,r=arguments;return new Promise((function(t,a){var i=e.apply(n,r);function o(e){u(i,t,a,o,s,"next",e)}function s(e){u(i,t,a,o,s,"throw",e)}o(void 0)}))}}var o=function(){Promise.all([r.e("common/vendor"),r.e("components/w-picker/w-picker")]).then(function(){return resolve(r("e20f"))}.bind(null,r)).catch(r.oe)},s={data:function(){return{cross:"",ruleForm:{mingcheng:"",fuzeren:"",mima:"",shoujihaoma:"",xingbie:"",youxiang:"",sfsh:"",shhf:""},xingbieOptions:[],xingbieIndex:0,user:{},ro:{mingcheng:!1,fuzeren:!1,mima:!1,shoujihaoma:!1,xingbie:!1,youxiang:!1,sfsh:!1,shhf:!1}}},components:{wPicker:o},computed:{baseUrl:function(){return this.$base.url}},onLoad:function(n){var r=this;return i(t.default.mark((function a(){var u,i,o,s;return t.default.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return u=e.getStorageSync("nowTable"),a.next=3,r.$api.session(u);case 3:if(i=a.sent,r.user=i.data,r.xingbieOptions="男,女".split(","),r.ruleForm.userid=e.getStorageSync("userid"),n.refid&&(r.ruleForm.refid=n.refid,r.ruleForm.nickname=e.getStorageSync("nickname")),!n.id){a.next=14;break}return r.ruleForm.id=n.id,a.next=12,r.$api.info("zhubanfang",r.ruleForm.id);case 12:i=a.sent,r.ruleForm=i.data;case 14:if(r.cross=n.cross,!n.cross){a.next=46;break}o=e.getStorageSync("crossObj"),a.t0=t.default.keys(o);case 18:if((a.t1=a.t0()).done){a.next=46;break}if(s=a.t1.value,"mingcheng"!=s){a.next=24;break}return r.ruleForm.mingcheng=o[s],r.ro.mingcheng=!0,a.abrupt("continue",18);case 24:if("fuzeren"!=s){a.next=28;break}return r.ruleForm.fuzeren=o[s],r.ro.fuzeren=!0,a.abrupt("continue",18);case 28:if("mima"!=s){a.next=32;break}return r.ruleForm.mima=o[s],r.ro.mima=!0,a.abrupt("continue",18);case 32:if("shoujihaoma"!=s){a.next=36;break}return r.ruleForm.shoujihaoma=o[s],r.ro.shoujihaoma=!0,a.abrupt("continue",18);case 36:if("xingbie"!=s){a.next=40;break}return r.ruleForm.xingbie=o[s],r.ro.xingbie=!0,a.abrupt("continue",18);case 40:if("youxiang"!=s){a.next=44;break}return r.ruleForm.youxiang=o[s],r.ro.youxiang=!0,a.abrupt("continue",18);case 44:a.next=18;break;case 46:r.styleChange();case 47:case"end":return a.stop()}}),a)})))()},methods:{styleChange:function(){this.$nextTick((function(){}))},xingbieChange:function(e){this.xingbieIndex=e.target.value,this.ruleForm.xingbie=this.xingbieOptions[this.xingbieIndex]},getUUID:function(){return(new Date).getTime()},onSubmitTap:function(){var n=this;return i(t.default.mark((function r(){var a,u,i,o,s,c,f,l,m,g;return t.default.wrap((function(r){while(1)switch(r.prev=r.next){case 0:if(n.ruleForm.mingcheng){r.next=3;break}return n.$utils.msg("名称不能为空"),r.abrupt("return");case 3:if(n.ruleForm.fuzeren){r.next=6;break}return n.$utils.msg("负责人不能为空"),r.abrupt("return");case 6:if(n.ruleForm.mima){r.next=9;break}return n.$utils.msg("密码不能为空"),r.abrupt("return");case 9:if(!n.ruleForm.shoujihaoma||n.$validate.isMobile(n.ruleForm.shoujihaoma)){r.next=12;break}return n.$utils.msg("手机号码应输入手机格式"),r.abrupt("return");case 12:if(!n.ruleForm.youxiang||n.$validate.isEmail(n.ruleForm.youxiang)){r.next=15;break}return n.$utils.msg("邮箱应输入邮件格式"),r.abrupt("return");case 15:if(!n.cross){r.next=31;break}if(o=e.getStorageSync("statusColumnName"),s=e.getStorageSync("statusColumnValue"),""==o){r.next=31;break}if(c=e.getStorageSync("crossObj"),o.startsWith("[")){r.next=27;break}for(f in c)f==o&&(c[f]=s);return l=e.getStorageSync("crossTable"),r.next=25,n.$api.update("".concat(l),c);case 25:r.next=31;break;case 27:a=Number(e.getStorageSync("userid")),u=c["id"],i=e.getStorageSync("statusColumnName"),i=i.replace(/\[/,"").replace(/\]/,"");case 31:if(!u||!a){r.next=53;break}return n.ruleForm.crossuserid=a,n.ruleForm.crossrefid=u,m={page:1,limit:10,crossuserid:a,crossrefid:u},r.next=37,n.$api.list("zhubanfang",m);case 37:if(g=r.sent,!(g.data.total>=i)){r.next=43;break}return n.$utils.msg(e.getStorageSync("tips")),r.abrupt("return",!1);case 43:if(!n.ruleForm.id){r.next=48;break}return r.next=46,n.$api.update("zhubanfang",n.ruleForm);case 46:r.next=50;break;case 48:return r.next=50,n.$api.add("zhubanfang",n.ruleForm);case 50:n.$utils.msgBack("提交成功");case 51:r.next=61;break;case 53:if(!n.ruleForm.id){r.next=58;break}return r.next=56,n.$api.update("zhubanfang",n.ruleForm);case 56:r.next=60;break;case 58:return r.next=60,n.$api.add("zhubanfang",n.ruleForm);case 60:n.$utils.msgBack("提交成功");case 61:case"end":return r.stop()}}),r)})))()},optionsChange:function(e){this.index=e.target.value},bindDateChange:function(e){this.date=e.target.value},getDate:function(e){var n=new Date,r=n.getFullYear(),t=n.getMonth()+1,a=n.getDate();return"start"===e?r-=60:"end"===e&&(r+=2),t=t>9?t:"0"+t,a=a>9?a:"0"+a,"".concat(r,"-").concat(t,"-").concat(a)},toggleTab:function(e){this.$refs[e].show()}}};n.default=s}).call(this,r("543d")["default"])},"0b76":function(e,n,r){"use strict";r.r(n);var t=r("c9cf"),a=r("ccba");for(var u in a)"default"!==u&&function(e){r.d(n,e,(function(){return a[e]}))}(u);r("8dd6");var i,o=r("f0c5"),s=Object(o["a"])(a["default"],t["b"],t["c"],!1,null,"d671998a",null,!1,t["a"],i);n["default"]=s.exports},8889:function(e,n,r){},"8dd6":function(e,n,r){"use strict";var t=r("8889"),a=r.n(t);a.a},c9cf:function(e,n,r){"use strict";var t;r.d(n,"b",(function(){return a})),r.d(n,"c",(function(){return u})),r.d(n,"a",(function(){return t}));var a=function(){var e=this,n=e.$createElement;e._self._c},u=[]},ccba:function(e,n,r){"use strict";r.r(n);var t=r("0267"),a=r.n(t);for(var u in t)"default"!==u&&function(e){r.d(n,e,(function(){return t[e]}))}(u);n["default"]=a.a}},[["0059","common/runtime","common/vendor"]]]);