(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-jingsaixinxi-detail"],{"061f":function(t,r,i){"use strict";i.r(r);var e=i("5f8f"),o=i("52c2");for(var a in o)"default"!==a&&function(t){i.d(r,t,(function(){return o[t]}))}(a);i("831c");var n,d=i("f0c5"),s=Object(d["a"])(o["default"],e["b"],e["c"],!1,null,"6ed1d12d",null,!1,e["a"],n);r["default"]=s.exports},3933:function(t,r,i){"use strict";var e=i("4ea4");Object.defineProperty(r,"__esModule",{value:!0}),r.default=void 0,i("28a5"),i("a481"),i("f559"),i("55dd"),i("96cf");var o=e(i("3b8d")),a={data:function(){return{autoplaySwiper:!0,intervalSwiper:5e3,btnColor:["#409eff","#67c23a","#909399","#e6a23c","#f56c6c","#356c6c","#351c6c","#f093a9","#a7c23a","#104eff","#10441f","#a21233","#503319"],id:"",userid:"",detail:{},swiperList:[],commentList:[],mescroll:null,downOption:{auto:!1},upOption:{noMoreSize:3,textNoMore:"~ 没有更多了 ~"},hasNext:!0,user:{},sfshIndex:-1,sfshOptions:["通过","不通过"],storeupFlag:0,count:0,timer:null}},computed:{baseUrl:function(){return this.$base.url},SecondToDate:function(){var t=this.count;return null!=t&&""!=t&&(t=t>60&&t<3600?parseInt(t/60)+"分钟"+parseInt(60*(parseFloat(t/60)-parseInt(t/60)))+"秒":t>=3600&&t<86400?parseInt(t/3600)+"小时"+parseInt(60*(parseFloat(t/3600)-parseInt(t/3600)))+"分钟"+parseInt(60*(parseFloat(60*(parseFloat(t/3600)-parseInt(t/3600)))-parseInt(60*(parseFloat(t/3600)-parseInt(t/3600)))))+"秒":t>=86400?parseInt(t/3600/24)+"天"+parseInt(24*(parseFloat(t/3600/24)-parseInt(t/3600/24)))+"小时"+parseInt(60*(parseFloat(t/3600)-parseInt(t/3600)))+"分钟"+parseInt(60*(parseFloat(60*(parseFloat(t/3600)-parseInt(t/3600)))-parseInt(60*(parseFloat(t/3600)-parseInt(t/3600)))))+"秒":parseInt(t)+"秒"),t}},onLoad:function(){var t=(0,o.default)(regeneratorRuntime.mark((function t(r){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:this.id=r.id,r.userid&&(this.userid=r.userid);case 2:case"end":return t.stop()}}),t,this)})));function r(r){return t.apply(this,arguments)}return r}(),onShow:function(){var t=(0,o.default)(regeneratorRuntime.mark((function t(r){var i,e,o;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return this.init(),i=uni.getStorageSync("nowTable"),t.next=4,this.$api.session(i);case 4:e=t.sent,this.user=e.data,this.btnColor=this.btnColor.sort((function(){return.5-Math.random()})),this.getStoreup(),o=uni.getStorageSync("discussjingsaixinxiCleanType"),o&&(uni.removeStorageSync("discussjingsaixinxiCleanType"),this.mescroll.num=1,this.upCallback(this.mescroll));case 10:case"end":return t.stop()}}),t,this)})));function r(r){return t.apply(this,arguments)}return r}(),destroyed:function(){},methods:{onPayTap:function(){uni.setStorageSync("paytable","jingsaixinxi"),uni.setStorageSync("payObject",this.detail),this.$utils.jump("../pay-confirm/pay-confirm?type=1")},getStoreup:function(){var t=(0,o.default)(regeneratorRuntime.mark((function t(){var r,i;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return r={page:1,limit:1,refid:this.id,tablename:"jingsaixinxi",userid:this.user.id,type:1},t.next=3,this.$api.list("storeup",r);case 3:i=t.sent,this.storeupFlag=i.data.list.length;case 5:case"end":return t.stop()}}),t,this)})));function r(){return t.apply(this,arguments)}return r}(),shoucang:function(){var t=(0,o.default)(regeneratorRuntime.mark((function t(){var r,i,e,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return r=this,i={page:1,limit:1,refid:r.detail.id,tablename:"jingsaixinxi",userid:r.user.id,type:1},t.next=4,r.$api.list("storeup",i);case 4:if(e=t.sent,1!=e.data.list.length){t.next=9;break}return a=e.data.list[0].id,uni.showModal({title:"提示",content:"是否取消",success:function(){var t=(0,o.default)(regeneratorRuntime.mark((function t(i){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!i.confirm){t.next=5;break}return t.next=3,r.$api.del("storeup",JSON.stringify([a]));case 3:r.$utils.msg("取消成功"),r.getStoreup();case 5:case"end":return t.stop()}}),t)})));function i(r){return t.apply(this,arguments)}return i}()}),t.abrupt("return");case 9:uni.showModal({title:"提示",content:"是否收藏",success:function(){var t=(0,o.default)(regeneratorRuntime.mark((function t(i){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!i.confirm){t.next=5;break}return t.next=3,r.$api.add("storeup",{userid:r.user.id,name:r.detail.jingsaibiaoti,inteltype:r.detail.jingsaifenlei,picture:r.swiperList[0],refid:r.detail.id,tablename:"jingsaixinxi",type:1});case 3:r.$utils.msg("收藏成功"),r.getStoreup();case 5:case"end":return t.stop()}}),t)})));function i(r){return t.apply(this,arguments)}return i}()});case 10:case"end":return t.stop()}}),t,this)})));function r(){return t.apply(this,arguments)}return r}(),onAcrossTap:function(t,r,i,e,o){if("是"!=r||"是"==this.detail.sfsh){if(uni.setStorageSync("crossTable","jingsaixinxi"),uni.setStorageSync("crossObj",this.detail),uni.setStorageSync("statusColumnName",i),uni.setStorageSync("statusColumnValue",o),uni.setStorageSync("tips",e),""!=i&&!i.startsWith("[")){var a=uni.getStorageSync("crossObj");for(var n in a)if(n==i&&a[n]==o)return void this.$utils.msg(e)}this.$utils.jump("../".concat(t,"/add-or-update?cross=true"))}else this.$utils.msg("请审核通过后再操作")},init:function(){var t=(0,o.default)(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.$api.info("jingsaixinxi",this.id);case 2:r=t.sent,this.detail=r.data,this.detail.jingsaineirong=this.detail.jingsaineirong.replace(/img src/gi,'img style="width:100%;" src'),this.swiperList=this.detail.jingsaifengmian?this.detail.jingsaifengmian.split(","):[];case 6:case"end":return t.stop()}}),t,this)})));function r(){return t.apply(this,arguments)}return r}(),mescrollInit:function(t){this.mescroll=t},downCallback:function(t){this.hasNext=!0,t.resetUpScroll()},upCallback:function(){var t=(0,o.default)(regeneratorRuntime.mark((function t(r){var i;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.$api.list("discussjingsaixinxi",{page:r.num,limit:10,refid:this.id});case 2:i=t.sent,1==r.num&&(this.commentList=[]),this.commentList=this.commentList.concat(i.data.list),0==i.data.list.length&&(this.hasNext=!1),r.endSuccess(r.size,this.hasNext);case 7:case"end":return t.stop()}}),t,this)})));function r(r){return t.apply(this,arguments)}return r}(),onChatTap:function(){this.$utils.jump("../chat/chat")},download:function(t){var r=this;t=r.$base.url+t,uni.downloadFile({url:t,success:function(i){200===i.statusCode&&(r.$utils.msg("下载成功"),window.open(t))}})},onCartTabTap:function(){this.$utils.tab("../shop-cart/shop-cart")},onCommentTap:function(){var t=(0,o.default)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:this.$utils.jump("../discussjingsaixinxi/add-or-update?refid=".concat(this.id));case 1:case"end":return t.stop()}}),t,this)})));function r(){return t.apply(this,arguments)}return r}(),onSHTap:function(){this.$refs.popup.open()},onFinishTap:function(){var t=(0,o.default)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(this.detail.sfsh){t.next=3;break}return this.$utils.msg("请选择审核状态"),t.abrupt("return");case 3:if(this.detail.shhf){t.next=6;break}return this.$utils.msg("请填写审核回复"),t.abrupt("return");case 6:return"通过"==this.detail.sfsh&&(this.detail.sfsh="是"),"不通过"==this.detail.sfsh&&(this.detail.sfsh="否"),t.next=10,this.$api.update("jingsaixinxi",this.detail);case 10:this.$utils.msg("审核成功"),this.$refs.popup.close();case 12:case"end":return t.stop()}}),t,this)})));function r(){return t.apply(this,arguments)}return r}(),onCloseWinTap:function(){this.$refs.popup.close()},sfshChange:function(t){console.log(this.detail),this.sfshIndex=t.target.value,this.detail.sfsh=this.sfshOptions[this.sfshIndex]}}};r.default=a},"52c2":function(t,r,i){"use strict";i.r(r);var e=i("3933"),o=i.n(e);for(var a in e)"default"!==a&&function(t){i.d(r,t,(function(){return e[t]}))}(a);r["default"]=o.a},"5f8f":function(t,r,i){"use strict";var e={"mescroll-uni":i("f05e").default,"uni-popup":i("1c89").default},o=function(){var t=this,r=t.$createElement,i=t._self._c||r;return i("mescroll-uni",{attrs:{up:t.upOption,down:t.downOption,bottom:100},on:{init:function(r){arguments[0]=r=t.$handleEvent(r),t.mescrollInit.apply(void 0,arguments)},down:function(r){arguments[0]=r=t.$handleEvent(r),t.downCallback.apply(void 0,arguments)},up:function(r){arguments[0]=r=t.$handleEvent(r),t.upCallback.apply(void 0,arguments)}}},[i("v-uni-view",{staticClass:"container"},[i("v-uni-swiper",{staticClass:"swiper",style:{padding:"0",boxShadow:"0 2rpx 12rpx rgba(0,0,0,0)",margin:"20rpx 3%",borderColor:"rgba(0,0,0,0)",backgroundColor:"rgba(255, 255, 255, 0)",borderRadius:"0",borderWidth:"0",width:"94%",borderStyle:"solid",height:"300rpx"},attrs:{"indicator-dots":!0,autoplay:t.autoplaySwiper,circular:!0,"indicator-active-color":"rgba(173, 219, 140, 1)","indicator-color":"rgba(0, 0, 0, .3)",duration:1e3,interval:t.intervalSwiper,vertical:!1}},t._l(t.swiperList,(function(r,e){return i("v-uni-swiper-item",{key:e,style:{padding:"0",boxShadow:"0 2rpx 12rpx rgba(0,0,0,0)",margin:"0",borderColor:"rgba(0,0,0,0)",backgroundColor:"rgba(255,255,255,1)",borderRadius:"20rpx",borderWidth:"0",width:"100%",borderStyle:"solid",height:"300rpx"}},[i("v-uni-image",{style:{padding:"0",boxShadow:"0 2rpx 12rpx rgba(0,0,0,0)",margin:"0",borderColor:"rgba(0,0,0,0)",backgroundColor:"rgba(255,255,255,1)",borderRadius:"20rpx",borderWidth:"0",width:"100%",borderStyle:"solid",height:"300rpx"},attrs:{mode:"aspectFill",src:t.baseUrl+r}})],1)})),1),i("v-uni-view",{staticClass:"detail-content"},[i("v-uni-view",{staticClass:"price detail-list-item",style:{padding:"0 24rpx",boxShadow:"0 0 6rpx rgba(0,0,0,.3)",margin:"0",borderColor:"#fff",backgroundColor:"#fff",borderRadius:"0",borderWidth:"0",width:"100%",borderStyle:"solid",height:"auto"}},[i("v-uni-view",{staticClass:"text icon",style:{padding:"0",boxShadow:"0 0 12rpx rgba(0,0,0,0)",margin:"0 0 0 -40rpx",borderColor:"rgba(0,0,0,0)",backgroundColor:"rgba(165, 0, 0, 1)",color:"rgba(255, 255, 255, 1)",textAlign:"center",borderRadius:"40rpx 0 0 40rpx",borderWidth:"0",width:"20%",lineHeight:"50rpx",fontSize:"32rpx",borderStyle:"solid"}},[1==t.storeupFlag?i("v-uni-view",{staticClass:"cuIcon-favorfill",staticStyle:{"line-height":"1"},on:{click:function(r){arguments[0]=r=t.$handleEvent(r),t.shoucang.apply(void 0,arguments)}}}):t._e(),0==t.storeupFlag?i("v-uni-view",{staticClass:"cuIcon-favor",staticStyle:{"line-height":"1"},on:{click:function(r){arguments[0]=r=t.$handleEvent(r),t.shoucang.apply(void 0,arguments)}}}):t._e()],1)],1),i("v-uni-view",{staticClass:"name shop-title",style:{padding:"0 24rpx",boxShadow:"0 0 0px rgba(0,0,0,.3)",margin:"0 0 20rpx 0",borderColor:"#fff",backgroundColor:"#fff",color:"#000",borderRadius:"0",borderWidth:"0",width:"100%",lineHeight:"60rpx",fontSize:"36rpx",borderStyle:"solid"}},[t._v("竞赛标题："+t._s(t.detail.jingsaibiaoti))]),i("v-uni-view",{staticClass:"detail-list-item",style:{padding:"0 24rpx",boxShadow:"0 0 6rpx rgba(0,0,0,.3)",margin:"0",borderColor:"#fff",backgroundColor:"#fff",borderRadius:"0",borderWidth:"0",width:"100%",borderStyle:"solid",height:"auto"}},[i("v-uni-view",{staticClass:"lable",style:{padding:"0",boxShadow:"0 0 12rpx rgba(0,0,0,0)",margin:"0",borderColor:"rgba(0,0,0,0)",backgroundColor:"rgba(0,0,0,0)",color:"#333",textAlign:"left",borderRadius:"0",borderWidth:"0",width:"160rpx",lineHeight:"80rpx",fontSize:"28rpx",borderStyle:"solid"}},[t._v("竞赛编号：")]),i("v-uni-view",{staticClass:"text",style:{padding:"0",boxShadow:"0 0 12rpx rgba(0,0,0,0)",margin:"0",borderColor:"rgba(0,0,0,0)",backgroundColor:"rgba(0,0,0,0)",color:"#333",textAlign:"left",borderRadius:"0",borderWidth:"0",width:"calc(100% - 160rpx)",lineHeight:"auto",fontSize:"28rpx",borderStyle:"solid"}},[t._v(t._s(t.detail.jingsaibianhao))])],1),i("v-uni-view",{staticClass:"detail-list-item",style:{padding:"0 24rpx",boxShadow:"0 0 6rpx rgba(0,0,0,.3)",margin:"0",borderColor:"#fff",backgroundColor:"#fff",borderRadius:"0",borderWidth:"0",width:"100%",borderStyle:"solid",height:"auto"}},[i("v-uni-view",{staticClass:"lable",style:{padding:"0",boxShadow:"0 0 12rpx rgba(0,0,0,0)",margin:"0",borderColor:"rgba(0,0,0,0)",backgroundColor:"rgba(0,0,0,0)",color:"#333",textAlign:"left",borderRadius:"0",borderWidth:"0",width:"160rpx",lineHeight:"80rpx",fontSize:"28rpx",borderStyle:"solid"}},[t._v("竞赛分类：")]),i("v-uni-view",{staticClass:"text",style:{padding:"0",boxShadow:"0 0 12rpx rgba(0,0,0,0)",margin:"0",borderColor:"rgba(0,0,0,0)",backgroundColor:"rgba(0,0,0,0)",color:"#333",textAlign:"left",borderRadius:"0",borderWidth:"0",width:"calc(100% - 160rpx)",lineHeight:"auto",fontSize:"28rpx",borderStyle:"solid"}},[t._v(t._s(t.detail.jingsaifenlei))])],1),i("v-uni-view",{staticClass:"detail-list-item",style:{padding:"0 24rpx",boxShadow:"0 0 6rpx rgba(0,0,0,.3)",margin:"0",borderColor:"#fff",backgroundColor:"#fff",borderRadius:"0",borderWidth:"0",width:"100%",borderStyle:"solid",height:"auto"}},[i("v-uni-view",{staticClass:"lable",style:{padding:"0",boxShadow:"0 0 12rpx rgba(0,0,0,0)",margin:"0",borderColor:"rgba(0,0,0,0)",backgroundColor:"rgba(0,0,0,0)",color:"#333",textAlign:"left",borderRadius:"0",borderWidth:"0",width:"160rpx",lineHeight:"80rpx",fontSize:"28rpx",borderStyle:"solid"}},[t._v("截至时间：")]),i("v-uni-view",{staticClass:"text",style:{padding:"0",boxShadow:"0 0 12rpx rgba(0,0,0,0)",margin:"0",borderColor:"rgba(0,0,0,0)",backgroundColor:"rgba(0,0,0,0)",color:"#333",textAlign:"left",borderRadius:"0",borderWidth:"0",width:"calc(100% - 160rpx)",lineHeight:"auto",fontSize:"28rpx",borderStyle:"solid"}},[t._v(t._s(t.detail.jiezhishijian))])],1),i("v-uni-view",{staticClass:"detail-list-item",style:{padding:"0 24rpx",boxShadow:"0 0 6rpx rgba(0,0,0,.3)",margin:"0",borderColor:"#fff",backgroundColor:"#fff",borderRadius:"0",borderWidth:"0",width:"100%",borderStyle:"solid",height:"auto"}},[i("v-uni-view",{staticClass:"lable",style:{padding:"0",boxShadow:"0 0 12rpx rgba(0,0,0,0)",margin:"0",borderColor:"rgba(0,0,0,0)",backgroundColor:"rgba(0,0,0,0)",color:"#333",textAlign:"left",borderRadius:"0",borderWidth:"0",width:"160rpx",lineHeight:"80rpx",fontSize:"28rpx",borderStyle:"solid"}},[t._v("竞赛地点：")]),i("v-uni-view",{staticClass:"text",style:{padding:"0",boxShadow:"0 0 12rpx rgba(0,0,0,0)",margin:"0",borderColor:"rgba(0,0,0,0)",backgroundColor:"rgba(0,0,0,0)",color:"#333",textAlign:"left",borderRadius:"0",borderWidth:"0",width:"calc(100% - 160rpx)",lineHeight:"auto",fontSize:"28rpx",borderStyle:"solid"}},[t._v(t._s(t.detail.jingsaididian))])],1),i("v-uni-view",{staticClass:"detail-list-item",style:{padding:"0 24rpx",boxShadow:"0 0 6rpx rgba(0,0,0,.3)",margin:"0",borderColor:"#fff",backgroundColor:"#fff",borderRadius:"0",borderWidth:"0",width:"100%",borderStyle:"solid",height:"auto"}},[i("v-uni-view",{staticClass:"lable",style:{padding:"0",boxShadow:"0 0 12rpx rgba(0,0,0,0)",margin:"0",borderColor:"rgba(0,0,0,0)",backgroundColor:"rgba(0,0,0,0)",color:"#333",textAlign:"left",borderRadius:"0",borderWidth:"0",width:"160rpx",lineHeight:"80rpx",fontSize:"28rpx",borderStyle:"solid"}},[t._v("名称：")]),i("v-uni-view",{staticClass:"text",style:{padding:"0",boxShadow:"0 0 12rpx rgba(0,0,0,0)",margin:"0",borderColor:"rgba(0,0,0,0)",backgroundColor:"rgba(0,0,0,0)",color:"#333",textAlign:"left",borderRadius:"0",borderWidth:"0",width:"calc(100% - 160rpx)",lineHeight:"auto",fontSize:"28rpx",borderStyle:"solid"}},[t._v(t._s(t.detail.mingcheng))])],1),i("v-uni-view",{staticClass:"detail-list-item",style:{padding:"0 24rpx",boxShadow:"0 0 6rpx rgba(0,0,0,.3)",margin:"0",borderColor:"#fff",backgroundColor:"#fff",borderRadius:"0",borderWidth:"0",width:"100%",borderStyle:"solid",height:"auto"}},[i("v-uni-view",{staticClass:"lable",style:{padding:"0",boxShadow:"0 0 12rpx rgba(0,0,0,0)",margin:"0",borderColor:"rgba(0,0,0,0)",backgroundColor:"rgba(0,0,0,0)",color:"#333",textAlign:"left",borderRadius:"0",borderWidth:"0",width:"160rpx",lineHeight:"80rpx",fontSize:"28rpx",borderStyle:"solid"}},[t._v("负责人：")]),i("v-uni-view",{staticClass:"text",style:{padding:"0",boxShadow:"0 0 12rpx rgba(0,0,0,0)",margin:"0",borderColor:"rgba(0,0,0,0)",backgroundColor:"rgba(0,0,0,0)",color:"#333",textAlign:"left",borderRadius:"0",borderWidth:"0",width:"calc(100% - 160rpx)",lineHeight:"auto",fontSize:"28rpx",borderStyle:"solid"}},[t._v(t._s(t.detail.fuzeren))])],1),i("v-uni-view",{staticClass:"detail-list-item",style:{padding:"0 24rpx",boxShadow:"0 0 6rpx rgba(0,0,0,.3)",margin:"0",borderColor:"#fff",backgroundColor:"#fff",borderRadius:"0",borderWidth:"0",width:"100%",borderStyle:"solid",height:"auto"}},[i("v-uni-view",{staticClass:"lable",style:{padding:"0",boxShadow:"0 0 12rpx rgba(0,0,0,0)",margin:"0",borderColor:"rgba(0,0,0,0)",backgroundColor:"rgba(0,0,0,0)",color:"#333",textAlign:"left",borderRadius:"0",borderWidth:"0",width:"160rpx",lineHeight:"80rpx",fontSize:"28rpx",borderStyle:"solid"}},[t._v("点击次数：")]),i("v-uni-view",{staticClass:"text",style:{padding:"0",boxShadow:"0 0 12rpx rgba(0,0,0,0)",margin:"0",borderColor:"rgba(0,0,0,0)",backgroundColor:"rgba(0,0,0,0)",color:"#333",textAlign:"left",borderRadius:"0",borderWidth:"0",width:"calc(100% - 160rpx)",lineHeight:"auto",fontSize:"28rpx",borderStyle:"solid"}},[t._v(t._s(t.detail.clicknum))])],1)],1),t.userid?i("v-uni-view",{staticClass:"detail-list-item",style:{padding:"0 24rpx",boxShadow:"0 0 6rpx rgba(0,0,0,.3)",margin:"0",borderColor:"#fff",backgroundColor:"#fff",borderRadius:"0",borderWidth:"0",width:"100%",borderStyle:"solid",height:"auto"}},[i("v-uni-view",{staticClass:"lable",style:{padding:"0",boxShadow:"0 0 12rpx rgba(0,0,0,0)",margin:"0",borderColor:"rgba(0,0,0,0)",backgroundColor:"rgba(0,0,0,0)",color:"#333",textAlign:"left",borderRadius:"0",borderWidth:"0",width:"160rpx",lineHeight:"80rpx",fontSize:"28rpx",borderStyle:"solid"}},[t._v("审核状态：")]),"是"==t.detail.sfsh?i("v-uni-view",{staticClass:"text",style:{padding:"0",boxShadow:"0 0 12rpx rgba(0,0,0,0)",margin:"0",borderColor:"rgba(0,0,0,0)",backgroundColor:"rgba(0,0,0,0)",color:"#333",textAlign:"left",borderRadius:"0",borderWidth:"0",width:"calc(100% - 160rpx)",lineHeight:"auto",fontSize:"28rpx",borderStyle:"solid"}},[t._v("通过")]):t._e(),"是"!=t.detail.sfsh?i("v-uni-view",{staticClass:"text",style:{padding:"0",boxShadow:"0 0 12rpx rgba(0,0,0,0)",margin:"0",borderColor:"rgba(0,0,0,0)",backgroundColor:"rgba(0,0,0,0)",color:"#333",textAlign:"left",borderRadius:"0",borderWidth:"0",width:"calc(100% - 160rpx)",lineHeight:"auto",fontSize:"28rpx",borderStyle:"solid"}},[t._v("不通过")]):t._e()],1):t._e(),t.userid?i("v-uni-view",{staticClass:"time-content",staticStyle:{height:"auto !important"},style:{padding:"24rpx",boxShadow:"0 0 6rpx rgba(0,0,0,.3)",margin:"0 0 10rpx 0",borderColor:"#fff",backgroundColor:"#fff",borderRadius:"0",borderWidth:"0",width:"100%",borderStyle:"solid",height:"auto"}},[i("v-uni-view",{staticClass:"header",style:{padding:"0",boxShadow:"0 0 12rpx rgba(0,0,0,0)",margin:"0",borderColor:"rgba(0,0,0,0)",backgroundColor:"#fff",borderRadius:"0",color:"#333",borderWidth:"0",width:"100%",lineHeight:"80rpx",fontSize:"28rpx",borderStyle:"solid"}},[t._v("审核回复")]),i("v-uni-view",{staticClass:"content",style:{padding:"24rpx",boxShadow:"0 0 0px rgba(0,0,0,0)",margin:"0",borderColor:"rgba(201, 201, 201, 1)",backgroundColor:"#fff",borderRadius:"8rpx",color:"#333",borderWidth:"2rpx",width:"100%",fontSize:"28rpx",borderStyle:"solid",height:"auto"}},[t._v(t._s(t.detail.shhf))])],1):t._e(),i("v-uni-view",{staticClass:"time-content",staticStyle:{height:"auto !important"},style:{padding:"24rpx",boxShadow:"0 0 6rpx rgba(0,0,0,.3)",margin:"0 0 10rpx 0",borderColor:"#fff",backgroundColor:"#fff",borderRadius:"0",borderWidth:"0",width:"100%",borderStyle:"solid",height:"auto"}},[i("v-uni-view",{staticClass:"header",style:{padding:"0",boxShadow:"0 0 12rpx rgba(0,0,0,0)",margin:"0",borderColor:"rgba(0,0,0,0)",backgroundColor:"#fff",borderRadius:"0",color:"#333",borderWidth:"0",width:"100%",lineHeight:"80rpx",fontSize:"28rpx",borderStyle:"solid"}},[t._v("竞赛内容")]),i("v-uni-view",{staticClass:"content",style:{padding:"24rpx",boxShadow:"0 0 0px rgba(0,0,0,0)",margin:"0",borderColor:"rgba(201, 201, 201, 1)",backgroundColor:"#fff",borderRadius:"8rpx",color:"#333",borderWidth:"2rpx",width:"100%",fontSize:"28rpx",borderStyle:"solid",height:"auto"}},[i("v-uni-rich-text",{staticStyle:{"font-size":"33upx","line-height":"50upx","letter-spacing":"5upx"},attrs:{nodes:t.detail.jingsaineirong}})],1)],1),i("v-uni-view",{staticClass:"time-content",style:{padding:"24rpx",boxShadow:"0 0 4rpx rgba(0,0,0,0)",margin:"0 0 20rpx 0",borderColor:"red",backgroundColor:"#fff",borderRadius:"0",borderWidth:"0",width:"100%",borderStyle:"solid",height:"auto"}},[i("v-uni-view",{staticClass:"comoment-header",style:{padding:"0",boxShadow:"0 0 16rpx rgba(0,0,0,0)",margin:"0",borderColor:"rgba(0,0,0,.2)",backgroundColor:"#fff",borderRadius:"0",borderWidth:"0 0 2rpx 0",width:"100%",borderStyle:"solid",height:"auto"}},[i("v-uni-view",{style:{padding:"0",boxShadow:"0 0 12rpx rgba(0,0,0,0)",margin:"0",borderColor:"#ccc",backgroundColor:"#fff",borderRadius:"0",color:"#333",borderWidth:"0",width:"auto",lineHeight:"80rpx",fontSize:"28rpx",borderStyle:"solid"}},[t._v("评论")]),i("v-uni-view",{staticClass:"btn-comment-content",staticStyle:{display:"flex","align-items":"center"},style:{padding:"0 10rpx",boxShadow:"0 0 12rpx rgba(0,0,0,0)",margin:"0",borderColor:"rgba(64, 174, 54, 1)",backgroundColor:"rgba(173, 219, 140, 1)",color:"#333",isBtn:!0,borderRadius:"10rpx",borderWidth:"2rpx",width:"auto",lineHeight:"80rpx",fontSize:"28rpx",borderStyle:"dashed "},on:{click:function(r){arguments[0]=r=t.$handleEvent(r),t.onCommentTap.apply(void 0,arguments)}}},[i("v-uni-view",{staticClass:"cuIcon-add"}),t._v("添加评论")],1)],1),i("v-uni-view",{staticClass:"cu-list comment",staticStyle:{"margin-top":"20upx"}},t._l(t.commentList,(function(r,e){return i("v-uni-view",{key:e,staticClass:"cu-item comment-item",style:{padding:"0",boxShadow:"0 0 16rpx rgba(0,0,0,0)",margin:"0",borderColor:"rgba(0,0,0,.2)",backgroundColor:"#fff",borderRadius:"0",borderWidth:"0 0 2rpx 0",width:"100%",borderStyle:"dashed",height:"auto"}},[i("v-uni-view",{staticClass:"content"},[i("v-uni-view",{staticClass:"text-grey",style:{padding:"0",boxShadow:"0 0 12rpx rgba(0,0,0,0)",margin:"0",borderColor:"#ccc",backgroundColor:"#fff",color:"rgba(0, 0, 0, 1)",textAlign:"left",borderRadius:"0",borderWidth:"0",width:"auto",lineHeight:"80rpx",fontSize:"28rpx",borderStyle:"solid"}},[t._v(t._s(r.nickname))]),i("v-uni-view",{staticClass:"text-gray text-content text-df content",style:{padding:"0",boxShadow:"0 0 12rpx rgba(0,0,0,0)",margin:"0",borderColor:"#ccc",backgroundColor:"#fff",color:"rgba(164, 164, 164, 1)",textAlign:"left",borderRadius:"0",borderWidth:"0",width:"100%",lineHeight:"32rpx",fontSize:"24rpx",borderStyle:"solid"}},[t._v(t._s(r.content))]),i("v-uni-view",{staticClass:"margin-top-sm text-gray text-df",style:{padding:"14rpx 0",boxShadow:"0 0 12rpx rgba(0,0,0,0)",margin:"0",borderColor:"#ccc",backgroundColor:"#fff",color:"rgba(164, 164, 164, 1)",textAlign:"left",borderRadius:"0",borderWidth:"0",width:"100%",lineHeight:"auto",fontSize:"24rpx",borderStyle:"solid"}},[t._v(t._s(r.addtime))]),r.reply?i("v-uni-view",{staticClass:"text-gray text-content text-df content",style:{padding:"0",boxShadow:"0 0 12rpx rgba(0,0,0,0)",margin:"0",borderColor:"#ccc",backgroundColor:"#fff",color:"rgba(164, 164, 164, 1)",textAlign:"left",borderRadius:"0",borderWidth:"0",width:"100%",lineHeight:"32rpx",fontSize:"24rpx",borderStyle:"solid"}},[t._v("回复:"+t._s(r.reply))]):t._e()],1)],1)})),1)],1),i("v-uni-view",{staticClass:"bottom-content cu-bar bg-white tabbar border shop",style:{padding:"0px",boxShadow:"rgb(0 0 0 / 0%) 0px 0px 12rpx",margin:"0px",borderColor:"rgb(204, 204, 204)",backgroundColor:"rgb(255, 255, 255)",borderRadius:"0px",borderWidth:"2rpx 0 0 0",width:"100%",borderStyle:"solid",height:"100rpx"}},[i("v-uni-view",{staticStyle:{"text-align":"left",display:"flex"}}),i("v-uni-view",{staticStyle:{"text-align":"right"}},[t.userid&&t.isAuth("jingsaixinxi","报名")?i("v-uni-button",{staticClass:"cu-btn bg-brown round shadow-blur",staticStyle:{"margin-right":"10upx","min-width":"180upx"},style:{width:"auto",borderRadius:"8rpx",height:"80rpx",fontSize:"28rpx",color:"#fff",backgroundColor:t.btnColor[6],borderColor:t.btnColor[6]},on:{click:function(r){arguments[0]=r=t.$handleEvent(r),t.onAcrossTap("baomingxinxi","是","[1]","已报名")}}},[t._v("报名")]):t._e(),!t.userid&&t.isAuthFront("jingsaixinxi","报名")?i("v-uni-button",{staticClass:"cu-btn bg-brown round shadow-blur",staticStyle:{"margin-right":"10upx","min-width":"180upx"},style:{width:"auto",borderRadius:"8rpx",height:"80rpx",fontSize:"28rpx",color:"#fff",backgroundColor:t.btnColor[6],borderColor:t.btnColor[6]},on:{click:function(r){arguments[0]=r=t.$handleEvent(r),t.onAcrossTap("baomingxinxi","是","[1]","已报名")}}},[t._v("报名")]):t._e(),t.userid&&t.isAuth("jingsaixinxi","竞赛成绩")?i("v-uni-button",{staticClass:"cu-btn bg-brown round shadow-blur",staticStyle:{"margin-right":"10upx","min-width":"180upx"},style:{width:"auto",borderRadius:"8rpx",height:"80rpx",fontSize:"28rpx",color:"#fff",backgroundColor:t.btnColor[7],borderColor:t.btnColor[7]},on:{click:function(r){arguments[0]=r=t.$handleEvent(r),t.onAcrossTap("jingsaichengji","是","[1]","已公布竞赛成绩")}}},[t._v("竞赛成绩")]):t._e(),!t.userid&&t.isAuthFront("jingsaixinxi","竞赛成绩")?i("v-uni-button",{staticClass:"cu-btn bg-brown round shadow-blur",staticStyle:{"margin-right":"10upx","min-width":"180upx"},style:{width:"auto",borderRadius:"8rpx",height:"80rpx",fontSize:"28rpx",color:"#fff",backgroundColor:t.btnColor[7],borderColor:t.btnColor[7]},on:{click:function(r){arguments[0]=r=t.$handleEvent(r),t.onAcrossTap("jingsaichengji","是","[1]","已公布竞赛成绩")}}},[t._v("竞赛成绩")]):t._e(),t.userid&&t.isAuth("jingsaixinxi","审核")?i("v-uni-button",{staticClass:"cu-btn bg-red round shadow-blur",staticStyle:{"margin-right":"10upx"},style:{width:"auto",borderRadius:"8rpx",height:"80rpx",fontSize:"28rpx",color:"#fff",backgroundColor:t.btnColor[4],borderColor:t.btnColor[4]},on:{click:function(r){arguments[0]=r=t.$handleEvent(r),t.onSHTap.apply(void 0,arguments)}}},[t._v("审核")]):t._e(),!t.userid&&t.isAuthFront("jingsaixinxi","审核")?i("v-uni-button",{staticClass:"cu-btn bg-red round shadow-blur",staticStyle:{"margin-right":"10upx"},style:{width:"auto",borderRadius:"8rpx",height:"80rpx",fontSize:"28rpx",color:"#fff",backgroundColor:t.btnColor[4],borderColor:t.btnColor[4]},on:{click:function(r){arguments[0]=r=t.$handleEvent(r),t.onSHTap.apply(void 0,arguments)}}},[t._v("审核")]):t._e()],1)],1)],1),i("uni-popup",{ref:"popup",staticClass:"popup-content",attrs:{type:"center"}},[i("v-uni-form",{staticClass:"popup-form"},[i("v-uni-view",{staticClass:"cu-form-group margin-top"},[i("v-uni-picker",{attrs:{value:t.sfshIndex,range:t.sfshOptions},on:{change:function(r){arguments[0]=r=t.$handleEvent(r),t.sfshChange.apply(void 0,arguments)}}},[i("v-uni-view",{staticClass:"uni-input"},[t._v(t._s(t.detail.sfsh?t.detail.sfsh:"选择审核结果"))])],1)],1),i("v-uni-view",{staticClass:"cu-form-group"},[i("v-uni-textarea",{staticStyle:{width:"200px"},attrs:{placeholder:"审核回复"},model:{value:t.detail.shhf,callback:function(r){t.$set(t.detail,"shhf",r)},expression:"detail.shhf"}})],1),i("v-uni-view",{staticClass:"btn-content"},[i("v-uni-button",{staticClass:"cu-btn bg-cyan",on:{click:function(r){arguments[0]=r=t.$handleEvent(r),t.onCloseWinTap.apply(void 0,arguments)}}},[t._v("取消")]),i("v-uni-button",{staticClass:"cu-btn bg-red",on:{click:function(r){arguments[0]=r=t.$handleEvent(r),t.onFinishTap.apply(void 0,arguments)}}},[t._v("确认")])],1)],1)],1)],1)},a=[];i.d(r,"b",(function(){return o})),i.d(r,"c",(function(){return a})),i.d(r,"a",(function(){return e}))},"831c":function(t,r,i){"use strict";var e=i("f9ff"),o=i.n(e);o.a},"891e":function(t,r,i){var e=i("24fb");r=e(!1),r.push([t.i,'@charset "UTF-8";\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.container[data-v-6ed1d12d]:after{position:fixed;top:0;right:0;left:0;bottom:0;content:"";background-attachment:fixed;background-size:cover;background-position:50%}.swiper[data-v-6ed1d12d]{width:100%;height:%?450?%}.swiper uni-image[data-v-6ed1d12d]{width:100%}.detail-content[data-v-6ed1d12d]{font-size:%?28?%;color:#888;background:#fff;line-height:%?45?%}.detail-content .name[data-v-6ed1d12d]{font-size:%?38?%;font-weight:blod;padding-top:%?20?%}.detail-content .price[data-v-6ed1d12d]{font-size:%?33?%;color:red}.time-content[data-v-6ed1d12d]{background:#fff;padding:%?30?%;font-size:%?30?%;border-radius:%?20?%;margin-top:%?20?%}.time-content .header[data-v-6ed1d12d]{font-size:%?33?%;margin-bottom:%?20?%}.bottom-content[data-v-6ed1d12d]{position:fixed;bottom:0;left:0;width:100%}.bottom-content uni-button[data-v-6ed1d12d]{margin:0 0 0 %?20?%!important;padding:0 %?20?%;box-shadow:0 0 %?12?% transparent}.comoment-header[data-v-6ed1d12d]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;-webkit-box-align:center;-webkit-align-items:center;align-items:center;padding-bottom:%?12?%}.comoment-header .btn-comment-content[data-v-6ed1d12d]{color:#dd514c;font-weight:700;padding:0 %?12?%}.comment-item[data-v-6ed1d12d]{margin-bottom:%?10?%;border-bottom:1px solid #eee;padding-bottom:%?20?%}.comment-item .content[data-v-6ed1d12d]{margin-left:%?20?%;margin-top:%?20?%}.icon[data-v-6ed1d12d]{width:%?50?%;height:%?50?%}.popup-content .popup-form[data-v-6ed1d12d]{background:#fff;margin-top:%?20?%}.popup-content .btn-content[data-v-6ed1d12d]{text-align:right;background:#fff}.popup-content .btn-content uni-button[data-v-6ed1d12d]{margin-left:%?20?%;margin-right:%?20?%;margin-bottom:%?20?%}.detail-list-item[data-v-6ed1d12d]{padding:0 %?24?%;box-sizing:border-box;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;height:%?68?%;border-bottom:%?2?% solid #efefef;background-color:#fff}.detail-list-item .lable[data-v-6ed1d12d]{font-size:%?28?%;color:#000}.detail-list-item .text[data-v-6ed1d12d]{-webkit-box-flex:1;-webkit-flex:1;flex:1;font-size:%?24?%;color:#f0f;text-align:left}.detail-list-item.favor .el-icon-star-on[data-v-6ed1d12d]{color:inherit;font-size:inherit}.detail-content .shop-title[data-v-6ed1d12d]{padding:%?20?% %?24?%;box-sizing:border-box;line-height:1.4}',""]),t.exports=r},f9ff:function(t,r,i){var e=i("891e");"string"===typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);var o=i("4f06").default;o("5d2629c8",e,!0,{sourceMap:!1,shadowMode:!1})}}]);