import{d as e,r as t,w as a,o as n,p as s,m as o,c as l,a as i,b as r,i as c,e as h,f as u,g as d,h as m,j as p,n as f,k as g,l as C,q as _,v,s as b,t as y,u as x,x as k,y as w,F as T,z as L,A as S,B as D,C as I,D as $,E as V,G as M,H as W,I as F,J as N,K as U}from"./vendor.c668e9e7.js";!function(){const e=document.createElement("link").relList;if(!(e&&e.supports&&e.supports("modulepreload"))){for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver((e=>{for(const a of e)if("childList"===a.type)for(const e of a.addedNodes)"LINK"===e.tagName&&"modulepreload"===e.rel&&t(e)})).observe(document,{childList:!0,subtree:!0})}function t(e){if(e.ep)return;e.ep=!0;const t=function(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),"use-credentials"===e.crossorigin?t.credentials="include":"anonymous"===e.crossorigin?t.credentials="omit":t.credentials="same-origin",t}(e);fetch(e.href,t)}}();var z=e({props:{accordion:Boolean,modelValue:{type:[Array,String,Number],default:()=>[]}},emits:["update:modelValue","change"],setup(e,{emit:l}){const i=t([].concat(e.modelValue)),r=o(),c=t=>{i.value=[].concat(t);const a=e.accordion?i.value[0]:i.value;l("update:modelValue",a),l("change",a)},h=t=>{if(e.accordion)c(!i.value[0]&&0!==i.value[0]||i.value[0]!==t?t:"");else{const e=i.value.slice(0),a=e.indexOf(t);a>-1?e.splice(a,1):e.push(t),c(e)}};return a((()=>e.modelValue),(()=>{i.value=[].concat(e.modelValue)})),r.on("item-click",h),n((()=>{r.all.clear()})),s("collapse",{activeNames:i,collapseMitt:r}),{activeNames:i,setActiveNames:c,handleItemClick:h}}});const R={class:"cv-collapse el-collapse"};z.render=function(e,t,a,n,s,o){return r(),l("div",R,[i(e.$slots,"default")])};const A=()=>Math.floor(1e4*Math.random());var B=e({props:{title:{type:String,default:""},name:{type:[String,Number],default:()=>A()},disabled:Boolean,func:String},setup(e){const a=c("collapse"),n=null==a?void 0:a.collapseMitt,s=t({height:"auto",display:"block"}),o=t(0),l=t(!1),i=t(!1),r=t(!1),u=t(A());return{isActive:h((()=>(null==a?void 0:a.activeNames.value.indexOf(e.name))>-1)),contentWrapStyle:s,contentHeight:o,focusing:l,isClick:i,id:u,handleFocus:()=>{setTimeout((()=>{i.value?i.value=!1:l.value=!0}),50)},handleHeaderClick:()=>{e.disabled||(null==n||n.emit("item-click",e.name),l.value=!1,i.value=!0)},handleEnterClick:()=>{null==n||n.emit("item-click",e.name)},collapse:a,doThis:e=>{console.log("doThis!"+e)},checked:r}}});const P=["id","tabindex"],j=["id"],K={class:"el-collapse-item__content"};B.render=function(e,t,a,n,s,o){const c=u("el-checkbox"),h=u("el-collapse-transition");return r(),l("div",{class:f(["cv-collapse-item el-collapse-item",{"is-active":e.isActive,"is-disabled":e.disabled}])},[d("div",{id:`el-collapse-head-${e.id}`,class:f(["el-collapse-item__header",{focusing:e.focusing,"is-active":e.isActive}]),tabindex:e.disabled?-1:0,onClick:t[2]||(t[2]=(...t)=>e.handleHeaderClick&&e.handleHeaderClick(...t)),onKeyup:t[3]||(t[3]=g(p(((...t)=>e.handleEnterClick&&e.handleEnterClick(...t)),["stop"]),["space","enter"])),onFocus:t[4]||(t[4]=(...t)=>e.handleFocus&&e.handleFocus(...t)),onBlur:t[5]||(t[5]=t=>e.focusing=!1)},[m(c,{modelValue:e.checked,"onUpdate:modelValue":t[0]||(t[0]=t=>e.checked=t),onChange:e.doThis,onClick:t[1]||(t[1]=p((()=>{}),["stop"]))},null,8,["modelValue","onChange"]),i(e.$slots,"header"),d("i",{class:f(["el-collapse-item__arrow el-icon-arrow-right",{"is-active":e.isActive}])},null,2)],42,P),m(h,null,{default:C((()=>[_(d("div",{id:`el-collapse-content-${e.id}`,class:"el-collapse-item__wrap"},[d("div",K,[i(e.$slots,"default")])],8,j),[[v,e.isActive]])])),_:3})],2)};const X={data:()=>({randomNumber:0}),props:{name:String},components:{CvCollapseItem:B},methods:{getRandom(){this.randomNumber=this.getRandomFromBackend()},getRandomFromBackend(){b.get("http://localhost:5000/api/").then((e=>{this.randomNumber=e.data})).catch((e=>{console.log(e)}))}},created(){this.getRandom()}},Y=d("div",null,"Paint",-1);X.render=function(e,t,a,n,s,o){const l=u("cv-collapse-item");return r(),y(l,{name:a.name},{header:C((()=>[Y])),default:C((()=>[d("div",null,"CvFuncPaint "+x(s.randomNumber),1)])),_:1},8,["name"])};const E={data:()=>({argForm:{name:"",region:"",date1:"",date2:"",delivery:!1,type:[],resource:"",desc:""}}),props:{name:String,argForm0:{type:Object,default:()=>({name:"",region:"",date1:"",date2:"",delivery:!1,type:[],resource:"",desc:""})}},emits:["update:argForm"],components:{CvCollapseItem:B},methods:{onSubmit(){console.log("submit!")}},watch:{argForm:{handler(e,t){this.$emit("update:argForm",e),console.log("funcCut",e)},deep:!0}}},H=d("div",null,"cv2.GaussianBlur",-1),O=k("-"),G=k("立即创建"),q=k("取消");E.render=function(e,t,a,n,s,o){const l=u("el-input"),i=u("el-form-item"),c=u("el-option"),h=u("el-select"),d=u("el-date-picker"),p=u("el-col"),f=u("el-time-picker"),g=u("el-checkbox-button"),_=u("el-checkbox-group"),v=u("el-radio"),b=u("el-radio-group"),x=u("el-button"),k=u("el-form"),w=u("cv-collapse-item");return r(),y(w,{name:a.name},{header:C((()=>[H])),default:C((()=>[m(k,{ref:"form",model:s.argForm,"label-width":"80px",size:"mini"},{default:C((()=>[m(i,{label:"活动名称"},{default:C((()=>[m(l,{modelValue:s.argForm.name,"onUpdate:modelValue":t[0]||(t[0]=e=>s.argForm.name=e)},null,8,["modelValue"])])),_:1}),m(i,{label:"活动区域"},{default:C((()=>[m(h,{modelValue:s.argForm.region,"onUpdate:modelValue":t[1]||(t[1]=e=>s.argForm.region=e),placeholder:"请选择活动区域"},{default:C((()=>[m(c,{label:"区域一",value:"shanghai"}),m(c,{label:"区域二",value:"beijing"})])),_:1},8,["modelValue"])])),_:1}),m(i,{label:"活动时间"},{default:C((()=>[m(p,{span:11},{default:C((()=>[m(d,{type:"date",placeholder:"选择日期",modelValue:s.argForm.date1,"onUpdate:modelValue":t[2]||(t[2]=e=>s.argForm.date1=e),style:{width:"100%"}},null,8,["modelValue"])])),_:1}),m(p,{class:"line",span:2},{default:C((()=>[O])),_:1}),m(p,{span:11},{default:C((()=>[m(f,{placeholder:"选择时间",modelValue:s.argForm.date2,"onUpdate:modelValue":t[3]||(t[3]=e=>s.argForm.date2=e),style:{width:"100%"}},null,8,["modelValue"])])),_:1})])),_:1}),m(i,{label:"活动性质"},{default:C((()=>[m(_,{modelValue:s.argForm.type,"onUpdate:modelValue":t[4]||(t[4]=e=>s.argForm.type=e)},{default:C((()=>[m(g,{label:"美食/餐厅线上活动",name:"type"}),m(g,{label:"地推活动",name:"type"}),m(g,{label:"线下主题活动",name:"type"})])),_:1},8,["modelValue"])])),_:1}),m(i,{label:"特殊资源"},{default:C((()=>[m(b,{modelValue:s.argForm.resource,"onUpdate:modelValue":t[5]||(t[5]=e=>s.argForm.resource=e),size:"medium"},{default:C((()=>[m(v,{border:"",label:"线上品牌商赞助"}),m(v,{border:"",label:"线下场地免费"})])),_:1},8,["modelValue"])])),_:1}),m(i,null,{default:C((()=>[m(x,{type:"primary",onClick:o.onSubmit},{default:C((()=>[G])),_:1},8,["onClick"]),m(x,null,{default:C((()=>[q])),_:1})])),_:1})])),_:1},8,["model"])])),_:1},8,["name"])};const J={data:()=>({activeNames:[],change:"two"}),emits:["update:modelValue"],props:{func:String,name:String,modelValue:Array},components:{CvCollapse:z,CvFuncPaint:X,CvFuncCut:E},methods:{handleChange(e){console.log(e),console.log("func",this.modelValue)}},computed:{getFullComName(){return"cv-func-"+this.func}}};J.render=function(e,t,a,n,s,o){const i=u("cv-collapse");return r(),y(i,{modelValue:s.activeNames,"onUpdate:modelValue":t[0]||(t[0]=e=>s.activeNames=e),onChange:o.handleChange},{default:C((()=>[(r(!0),l(T,null,w(a.modelValue,(e=>(r(),y(L("cv-func-"+e.func),{key:e.name,name:e.name,argForm:e.argForm,"onUpdate:argForm":t=>e.argForm=t},null,8,["name","argForm","onUpdate:argForm"])))),128))])),_:1},8,["modelValue","onChange"])},J.__scopeId="data-v-71df1d63";const Z={data:()=>({frameSrc:"/static/canvas.png",mCan_ctx:null,cCan_ctx:null,tCan1_ctx:null,tCan2_ctx:null,cWater_ctx:null,boxHeight:0,boxScale:1,cursorSize:20,emptyData_b64:"",isDrawMoving:!1,isCanvasMoving:!1,isLassoMoving:!1,canvasXc:0,canvasYc:0}),computed:{cusorScale(){return this.boxHeight/540},cusorStyle(){return{transform:`translate(-50%, -50%) scale(${this.cusorScale})`,width:this.annTool.brushSize+"px",height:this.annTool.brushSize+"px"}}},inject:["host","annTool","activeLabel"],emits:["output"],created(){this.$nextTick((()=>{this.mCan_ctx=this.$refs.mCan.getContext("2d"),this.cCan_ctx=this.$refs.cCan.getContext("2d"),this.tCan1_ctx=this.$refs.tCan1.getContext("2d"),this.tCan2_ctx=this.$refs.tCan2.getContext("2d"),this.cWater_ctx=this.$refs.cWater.getContext("2d"),this.emptyData_b64=this.getImageData_b64(this.mCan_ctx),this.canvasPushdo(),document.body.addEventListener("mousemove",this.cursorMove),document.addEventListener("mousemove",this.whenMouseMove),document.addEventListener("mouseup",this.whenMouseUp),this.boxHeight=this.$refs.canBox.getBoundingClientRect().height})),this.$store.watch(((e,t)=>t.getUndoMCan),(e=>this.mCan_ctx.putImageData(this.$store.getters.toImgData(e),0,0))),this.$store.watch(((e,t)=>t.getUndoCCan),(e=>this.cCan_ctx.putImageData(this.$store.getters.toImgData(e),0,0)))},mounted(){b.defaults.baseURL=this.host,this.canvasInitsize()},methods:{cursorMove(e){let t=this.$refs.canWrapper.getBoundingClientRect();this.$refs.cursor.style.left=e.clientX-t.left+"px",this.$refs.cursor.style.top=e.clientY-t.top+"px"},whenMouseDown(e){0==e.button?(this.isdrawMoving=!0,this.drawMoving(e)):1==e.button&&(e.preventDefault&&e.preventDefault(),this.canvasXc=e.pageX-this.$refs.canBox.offsetLeft,this.canvasYc=e.pageY-this.$refs.canBox.offsetTop,this.isCanvasMoving=!0)},whenMouseUp(e){0==e.button&&this.isdrawMoving?(this.isdrawMoving=!1,this.putTempData(e.shiftKey),this.canvasPushdo()):1==e.button&&(this.isCanvasMoving=!1)},whenMouseMove(e){if(this.isdrawMoving){let t=this.$refs.cCan.getBoundingClientRect(),a=parseInt(this.annTool.brushSize),n=parseInt(a/2),s=parseInt((e.clientX-t.left)/t.width*960),o=parseInt((e.clientY-t.top)/t.height*540);this.tCan1_ctx.beginPath(),this.tCan1_ctx.arc(s+1,o+1,n,0,2*Math.PI,!1),this.tCan1_ctx.fillStyle="#"+this.activeLabel.bgc,this.tCan1_ctx.fill()}else if(this.isCanvasMoving)this.$refs.canBox.style.left=e.pageX-this.canvasXc+"px",this.$refs.canBox.style.top=e.pageY-this.canvasYc+"px";else if(this.isLassoMoving){e.preventDefault&&e.preventDefault();let t=this.$refs.cCan.getBoundingClientRect(),a=parseInt((e.clientX-t.left)/t.width*960),n=parseInt((e.clientY-t.top)/t.height*540);this.tCan1_ctx.lineTo(a,n),this.tCan2_ctx.beginPath(),this.tCan2_ctx.lineWidth="3",this.tCan2_ctx.strokeStyle="green",this.tCan2_ctx.moveTo(a-e.movementX,n-e.movementY),this.tCan2_ctx.lineTo(a,n),this.tCan2_ctx.stroke()}},whenRightClick(e){if(this.isLassoMoving)this.isLassoMoving=!1,this.tCan1_ctx.fillStyle="#ffffff",this.tCan1_ctx.fill(),this.putTempData(e.shiftKey);else{this.isLassoMoving=!0,this.tCan1_ctx.beginPath();let t=this.$refs.cCan.getBoundingClientRect(),a=parseInt((e.clientX-t.left)/t.width*960),n=parseInt((e.clientY-t.top)/t.height*540);this.tCan1_ctx.moveTo(a,n)}},whenMouseWheel(e){let t=e.wheelDelta>0?1:-1,a=.1*t;if(e.shiftKey){let e=this.boxScale+a;e>=.5&&(this.annTool.brushSize*=this.boxScale/e,this.boxScale+=a)}else this.annTool.brushSize+=t,this.annTool.brushSize<1?this.annTool.brushSize=1:this.annTool.brushSize>50&&(this.annTool.brushSize=50)},getImageData:e=>e.getImageData(0,0,960,540),getImageData_b64(e){let t=e.getImageData(0,0,960,540),a=I.deflate(t.data,{level:6});return window.btoa(String.fromCharCode(...a))},putTempData(e){let t=this.getImageData(this.tCan1_ctx).data,a=Uint8ClampedArray.from(this.getImageData(this.cCan_ctx).data),n=Uint8ClampedArray.from(this.getImageData(this.mCan_ctx).data),s=parseInt(this.activeLabel.bgc.substr(0,2),16),o=parseInt(this.activeLabel.bgc.substr(2,2),16),l=parseInt(this.activeLabel.bgc.substr(4,2),16);for(let i=0;i<t.length;i+=4)t[i+3]>250&&(e?(a[i+0]=0,a[i+1]=0,a[i+2]=0,a[i+3]=0,n[i+0]=0,n[i+1]=0,n[i+2]=0,n[i+3]=0):(a[i+0]=s,a[i+1]=o,a[i+2]=l,a[i+3]=255,n[i+0]=this.activeLabel.id,n[i+1]=this.activeLabel.id,n[i+2]=this.activeLabel.id,n[i+3]=255));this.cCan_ctx.putImageData(new ImageData(a,960,540),0,0),this.mCan_ctx.putImageData(new ImageData(n,960,540),0,0),this.tCan1_ctx.clearRect(0,0,960,540),this.tCan2_ctx.clearRect(0,0,960,540)},putImageData_b64(e,t){let a=atob(t).split("").map((e=>e.charCodeAt(0))),n=new Uint8Array(a),s=Uint8ClampedArray.from(I.inflate(n)),o=new ImageData(s,960,540);e.putImageData(o,0,0)},canvasClear(){this.cCan_ctx.clearRect(0,0,960,540),this.mCan_ctx.clearRect(0,0,960,540),this.canvasPushdo()},canvasResize(){this.annTool.brushSize*=this.boxScale,this.boxScale=1,this.$refs.canBox.style.left="0px",this.$refs.canBox.style.top="0px"},canvasInitsize(){let e=this.$refs.canWrapper.getBoundingClientRect();e.width/e.height<16/9&&(this.$refs.canBox.style.height=e.width/e.height/16*900+"%")},canvasUndo(){this.$store.commit("canvasUndo")},canvasRedo(){this.$store.commit("canvasRedo")},canvasPushdo(){this.$store.commit("canvasPushdo",{cCanData:this.getImageData(this.cCan_ctx),mCanData:this.getImageData(this.mCan_ctx)})},genWater(){let e=this.getImageData_b64(this.mCan_ctx);e!=this.emptyData_b64&&(console.time("genWater time"),b.post("/api/send/gen_water",{frameNum:this.annTool.frameNum,mCanData_b64:e}).then((e=>{this.putImageData_b64(this.cWater_ctx,e.data),this.annTool.isShowCWater=!0,this.$store.commit("store3Can",{num:this.annTool.frameNum,mCanData:this.getImageData(this.mCan_ctx),cCanData:this.getImageData(this.cCan_ctx),cWaterData:this.getImageData(this.cWater_ctx)}),console.timeEnd("genWater time")})))},getFrame(e){if(this.frameSrc=this.host+"/api/frame/"+e,this.annTool.isTracking){let t=this.getImageData_b64(this.cCan_ctx),a=this.getImageData_b64(this.mCan_ctx);if(a==this.emptyData_b64)return;console.time("getframe0 time"),b.post("/api/send/getframe0",{frameNum:e,cCanData_b64:t,mCanData_b64:a}).then((e=>{let{cCanData_b64:t,mCanData_b64:a,cWaterData_b64:n}=e.data;this.putImageData_b64(this.cCan_ctx,t),this.putImageData_b64(this.mCan_ctx,a),this.putImageData_b64(this.cWater_ctx,n),this.annTool.isShowCWater=!0,this.$store.commit("store3Can",{num:this.annTool.frameNum,mCanData:this.getImageData(this.mCan_ctx),cCanData:this.getImageData(this.cCan_ctx),cWaterData:this.getImageData(this.cWater_ctx)}),console.timeEnd("getframe0 time"),this.$emit("output","auto tracking done")}))}else this.cCan_ctx.clearRect(0,0,960,540),this.mCan_ctx.clearRect(0,0,960,540),this.canvasPushdo(),b.post("/api/send/getframe",{frameNum:e}).then((e=>{})),this.$store.state.cWater_dic[e]?(this.annTool.isShowCWater=!0,this.cWater_ctx.putImageData(this.$store.getters.getCWater(e),0,0)):this.annTool.isShowCWater=!1,this.$store.state.mCan_dic[e]&&this.mCan_ctx.putImageData(this.$store.getters.getMCan(e),0,0),this.$store.state.cCan_dic[e]&&this.cCan_ctx.putImageData(this.$store.getters.getCCan(e),0,0)}},watch:{boxScale(){this.$nextTick((()=>{this.boxHeight=this.$refs.canBox.getBoundingClientRect().height}))},"annTool.frameNum":{handler(e){this.getFrame(e)},deep:!0}}};S("data-v-48fbff86");const Q={class:"workspace__canvas-wrapper",style:{"user-select":"none"},ref:"canWrapper"},ee=["src"],te={id:"maskCan",class:"workspace__canvas",width:"960",height:"540",ref:"mCan",style:{opacity:"0"}},ae={id:"tempCan1",class:"workspace__canvas",width:"960",height:"540",ref:"tCan1",style:{opacity:"1"}},ne={id:"tempCan2",class:"workspace__canvas",width:"960",height:"540",ref:"tCan2",style:{opacity:"1"}},se={xmlns:"http://www.w3.org/2000/svg",version:"1.1"},oe=["cx","cy","r"];D(),Z.render=function(e,t,a,n,s,o){return r(),l("div",Q,[d("div",{class:"workspace__canvas-box",ref:"canBox",style:$({transform:`scale(${this.boxScale})`}),onMousedown:t[0]||(t[0]=e=>o.whenMouseDown(e)),onContextmenu:t[1]||(t[1]=p((e=>o.whenRightClick(e)),["right","prevent"])),onMousewheel:t[2]||(t[2]=e=>o.whenMouseWheel(e))},[d("img",{class:"workspace__frame",src:s.frameSrc,alt:""},null,8,ee),_(d("canvas",{id:"colorWater",class:"workspace__canvas",width:"960",height:"540",ref:"cWater",style:$({opacity:this.annTool.cWaterAlpha})},null,4),[[v,this.annTool.isShowCWater]]),d("canvas",te,null,512),_(d("canvas",{id:"colorCan",class:"workspace__canvas",width:"960",height:"540",ref:"cCan",style:$({opacity:this.annTool.cCanAlpha})},null,4),[[v,this.annTool.isShowCCan]]),d("canvas",ae,null,512),d("canvas",ne,null,512)],36),d("div",{class:"workspace__cursor",style:$(o.cusorStyle),ref:"cursor"},[(r(),l("svg",se,[d("circle",{cx:o.annTool.brushSize/2+1,cy:o.annTool.brushSize/2+1,r:o.annTool.brushSize/2,stroke:"red","stroke-width":"2",style:$({fill:"#"+this.activeLabel.bgc})},null,12,oe)]))],4)],512)},Z.__scopeId="data-v-48fbff86";const le={props:["styles"],inject:["annTool"],data:()=>({chart:null,diffValue:null,options:{animation:!1,tooltip:{axisPointer:{type:"cross",label:{precision:0}}},grid:{top:10,bottom:25,left:10,right:15},xAxis:{type:"category"},yAxis:{splitNumber:3,axisLabel:{show:!1}},series:[{name:"diffValue",type:"bar",data:[]}],visualMap:{type:"piecewise",show:!1,pieces:[{min:1e7,color:"#FF9655"},{max:1e7}]}}}),mounted(){this.initChart()},methods:{initChart(){this.chart=V(this.$el),this.chart.setOption(this.options),this.chart.getZr().on("click",(e=>{const t=[e.offsetX,e.offsetY];if(this.chart.containPixel("grid",t)){let e=this.chart.convertFromPixel({seriesIndex:0},t);this.annTool.frameNum=e[0]+this.chart.getOption().series[0].data[0][0]}})),this.initData()},initData(){b.post("/api/get",{keys:["diffValue_cut"]}).then((e=>{let t=e.data.diffValue;t&&(this.diffValue=t.map(((e,t)=>[t,e])),this.updateChart(this.annTool.frameNum))}))},updateChart(e){if(!this.diffValue)return;let t=e-200,a=e+200;t<0?(t=0,a=400):a>this.diffValue.length&&(t=this.diffValue.length-400,a=this.diffValue.length),this.chart.setOption({xAxis:{type:"category"},series:[{name:"diffValue",data:this.diffValue.slice(t,a),markLine:{symbol:"none",label:{show:!1},silent:!0,lineStyle:{color:"#0bd699",width:3,type:"solid"},data:[{xAxis:e-t}]}}]})}},watch:{"annTool.frameNum":{handler(e){this.updateChart(e)},deep:!0}}};S("data-v-dd302454");const ie={class:"e-charts"};D(),le.render=function(e,t,a,n,s,o){return r(),l("div",ie)},le.__scopeId="data-v-dd302454";const re={components:{CvFunc:J,CvCollapse:z,CvCollapseItem:B,WorkSpace:Z,ECharts:le},data:()=>({cvFunc:[{func:"cut",name:"func1",argForm:{}},{func:"cut",name:"func2",argForm:{}},{func:"cut",name:"func3",argForm:{}}],annTool:{brushSize:20,cCanAlpha:.7,isShowCCan:!0,cWaterAlpha:.7,isShowCWater:!0,frameNum:0,frameStep:3,jumpMethod:2,isTracking:!1,isPreGet:!1},activeLabel:{},labelList:[],value1:1,labelKeyMap:{f:0,q:1,w:2,e:3,r:4,z:5,x:6,c:7,v:8},keyframes:[],gettingKeyframes:!1,outputText:""}),inject:["host"],computed:{undoLength(){return this.$store.state.cCan_undoL.length-1},redoLength(){return this.$store.state.cCan_redoL.length},cusorStyle(){return{transform:`translate(-50%, -50%) scale(${this.cusorScale})`,width:this.annTool.brushSize+"px",height:this.annTool.brushSize+"px"}}},methods:{doPreGet(){if(0==this.annTool.jumpMethod)for(let e=0;e<10;e++)(new Image).src=this.host+"/api/frame/"+(this.annTool.frameNum+e);else if(1==this.annTool.jumpMethod)for(let e=0;e<10;e++)(new Image).src=this.host+"/api/frame/"+(this.annTool.frameNum+e*this.annTool.frameStep);else if(2==this.annTool.jumpMethod&&this.keyframes){let e=this.keyframes.findIndex((e=>e>this.annTool.frameNum));for(let t=0;t<10;t++)(new Image).src=this.host+"/api/frame/"+this.keyframes[e+t]}},showfunc(){console.log(this.cvFunc)},whenClickLabel(e){Object.assign(this.activeLabel,e)},canvasClear(){this.$refs.workSpace.canvasClear()},canvasResize(){this.$refs.workSpace.canvasResize()},canvasUndo(){this.$refs.workSpace.canvasUndo()},canvasRedo(){this.$refs.workSpace.canvasRedo()},genWater(){this.$refs.workSpace.genWater()},preKeyframe(){if(!this.keyframes)return this.output("no keyframe");let e=this.keyframes.findIndex((e=>e>this.annTool.frameNum-1));this.annTool.frameNum=this.keyframes[e>0?e-1:this.keyframes.length-1]},nextKeyframe(){if(!this.keyframes)return this.output("no keyframe");let e=this.keyframes.find((e=>e>this.annTool.frameNum));this.annTool.frameNum=e||this.keyframes[0]},output(e){this.outputText+=e+"\n",this.$refs.output.scrollTop=this.$refs.output.scrollHeight},genKeyframes(){this.gettingKeyframes=!0;var e=new EventSource(this.host+"/api/ana_keyframes");e.onmessage=e=>this.output(e.data),e.onerror=t=>{e.close(),this.output("source.error")},e.addEventListener("yield_end",(t=>{e.close(),this.output(t.data),this.output("yield_end"),b.post("/api/get",{keys:["keyframes"]}).then((e=>this.keyframes=e.data.keyframes)),this.$refs.eCharts.initData()}))}},provide(){return{annTool:this.annTool,activeLabel:this.activeLabel}},mounted(){b.post("/api/get",{keys:["keyframes","labelList"]}).then((e=>{this.keyframes=e.data.keyframes,this.labelList=e.data.labelList,this.whenClickLabel(this.labelList[0]),this.annTool.frameNum=1,this.annTool.frameNum=0})),document.addEventListener("mousemove",(e=>{this.$refs.mouseInfo.innerHTML=`clientX${e.clientX},clientY${e.clientY}<br>screenX:${e.screenX},screenY${e.screenY}<br>pageX:${e.pageX},pageY:${e.pageY}<br>offsetX:${e.offsetX},offsetY${e.offsetY}<br>x:${e.x},y:${e.y}<br>movementX:${e.movementX},movementY:${e.movementY}`})),document.addEventListener("keydown",(e=>{if(!e.repeat)if(this.output("keydown: "+e.key),e.key in this.labelKeyMap)this.whenClickLabel(this.labelList[this.labelKeyMap[e.key]]);else if(" "==e.key)this.genWater();else if("a"==e.key)0==this.annTool.jumpMethod?this.annTool.frameNum--:1==this.annTool.jumpMethod?this.annTool.frameNum-=this.annTool.frameStep:2==this.annTool.jumpMethod&&this.preKeyframe();else if("d"==e.key)0==this.annTool.jumpMethod?this.annTool.frameNum++:1==this.annTool.jumpMethod?this.annTool.frameNum+=this.annTool.frameStep:2==this.annTool.jumpMethod&&this.nextKeyframe(),this.annTool.isPreGet&&this.doPreGet();else if("g"==e.key)this.canvasClear();else if("s"==e.key)this.annTool.isShowCWater=!this.annTool.isShowCWater;else{if("Shift"!=e.key)return;this.annTool.brushSize*=2}})),document.addEventListener("keyup",(e=>{"Shift"!=e.key||e.repeat||(this.output("keyup: "+e.key),this.annTool.brushSize/=2)}))}},ce=k("菜单"),he=k("保存"),ue=k("撤销"),de=k("重做"),me=d("label",null,"笔刷大小",-1),pe=d("label",null,"画布",-1),fe=d("label",null,"分割结果",-1),ge=k("重置画布"),Ce=k("清空画布"),_e=k("生成分割"),ve={class:"ann-label__box"},be=["onClick"],ye={class:"ann-label__id"},xe=["value"],ke={style:{color:"royalblue"}},we={key:0},Te={key:1},Le=d("span",null,"未找到keyframes信息",-1),Se=k("上一帧"),De=k("下一帧"),Ie=k("步退"),$e=k("步进"),Ve=k("上一关键帧"),Me=k("下一关键帧"),We=k("跳帧"),Fe=k("跳步"),Ne=k("跳关键帧"),Ue={class:"mouse-info",ref:"mouseInfo"},ze=k("展开");re.render=function(e,t,a,n,s,o){const i=u("el-button"),c=u("el-col"),h=u("el-row"),p=u("el-header"),g=u("el-aside"),v=u("el-input-number"),b=u("el-form-item"),L=u("el-radio-button"),S=u("el-radio-group"),D=u("el-switch"),I=u("el-form"),V=u("work-space"),F=u("el-main"),N=u("e-charts"),U=u("el-footer"),z=u("el-container"),R=u("cv-func"),A=u("el-scrollbar");return r(),y(z,{style:{height:"100%"}},{default:C((()=>[m(p,{class:"page-header",height:"28px"},{default:C((()=>[m(h,{align:"middle",style:{width:"100%"}},{default:C((()=>[m(c,{span:8},{default:C((()=>[m(i,{type:"text",icon:"el-icon-edit"},{default:C((()=>[ce])),_:1}),m(i,{type:"text",icon:"el-icon-share"},{default:C((()=>[he])),_:1}),m(i,{type:"text",icon:"el-icon-delete"},{default:C((()=>[ue])),_:1}),m(i,{type:"text",icon:"el-icon-search"},{default:C((()=>[de])),_:1})])),_:1}),m(c,{span:16},{default:C((()=>[me,_(d("input",{type:"number",min:"1",max:"50","onUpdate:modelValue":t[0]||(t[0]=e=>s.annTool.brushSize=e)},null,512),[[M,s.annTool.brushSize]]),pe,_(d("input",{type:"number",min:"0",max:"1",step:"0.1","onUpdate:modelValue":t[1]||(t[1]=e=>s.annTool.cCanAlpha=e)},null,512),[[M,s.annTool.cCanAlpha]]),_(d("input",{type:"checkbox","onUpdate:modelValue":t[2]||(t[2]=e=>s.annTool.isShowCCan=e)},null,512),[[W,s.annTool.isShowCCan]]),fe,_(d("input",{type:"number",min:"0",max:"1",step:"0.1","onUpdate:modelValue":t[3]||(t[3]=e=>s.annTool.cWaterAlpha=e)},null,512),[[M,s.annTool.cWaterAlpha]]),_(d("input",{type:"checkbox","onUpdate:modelValue":t[4]||(t[4]=e=>s.annTool.isShowCWater=e)},null,512),[[W,s.annTool.isShowCWater]]),m(i,{onClick:o.canvasResize},{default:C((()=>[ge])),_:1},8,["onClick"]),m(i,{onClick:o.canvasClear},{default:C((()=>[Ce])),_:1},8,["onClick"]),m(i,{onClick:o.canvasUndo},{default:C((()=>[k("撤销 "+x(o.undoLength),1)])),_:1},8,["onClick"]),m(i,{onClick:o.canvasRedo},{default:C((()=>[k("反撤销 "+x(o.redoLength),1)])),_:1},8,["onClick"]),m(i,{onClick:o.genWater},{default:C((()=>[_e])),_:1},8,["onClick"])])),_:1})])),_:1})])),_:1}),m(z,{class:"page-body"},{default:C((()=>[m(g,{class:"page-body__left",width:"200px"},{default:C((()=>[d("div",ve,[(r(!0),l(T,null,w(s.labelList,(e=>(r(),l("div",{class:f(["ann-label__item",{active:e.id==s.activeLabel.id}]),key:e.id,onClick:t=>o.whenClickLabel(e)},[d("div",{class:"ann-label__color",style:$({backgroundColor:"#"+e.bgc})},null,4),d("span",ye,x(e.id),1),d("input",{type:"text",class:"ann-label__name",readonly:"",value:e.name},null,8,xe)],10,be)))),128))]),d("div",ke,[s.keyframes?(r(),l("span",we,"已加载keyframes")):s.gettingKeyframes?(r(),l("span",Te," 正在获取keyframes...")):(r(),l(T,{key:2},[Le,d("button",{type:"button",onClick:t[5]||(t[5]=(...e)=>o.genKeyframes&&o.genKeyframes(...e))},"生成keyframes")],64))]),_(d("textarea",{class:"page-body__output",readonly:"","onUpdate:modelValue":t[6]||(t[6]=e=>s.outputText=e),ref:"output"},null,512),[[M,s.outputText]])])),_:1}),m(z,null,{default:C((()=>[m(p,{class:"workspace__header",height:"54px"},{default:C((()=>[m(h,{align:"middle"},{default:C((()=>[m(c,{span:24},{default:C((()=>[m(i,{onClick:t[7]||(t[7]=e=>s.annTool.frameNum--)},{default:C((()=>[Se])),_:1}),m(i,{onClick:t[8]||(t[8]=e=>s.annTool.frameNum++)},{default:C((()=>[De])),_:1}),m(i,{onClick:t[9]||(t[9]=e=>s.annTool.frameNum-=s.annTool.frameStep)},{default:C((()=>[Ie])),_:1}),m(i,{onClick:t[10]||(t[10]=e=>s.annTool.frameNum+=s.annTool.frameStep)},{default:C((()=>[$e])),_:1}),m(i,{onClick:o.preKeyframe},{default:C((()=>[Ve])),_:1},8,["onClick"]),m(i,{onClick:o.nextKeyframe},{default:C((()=>[Me])),_:1},8,["onClick"]),m(I,{inline:!0,style:{display:"inline-block"},size:"mini"},{default:C((()=>[m(b,{label:"当前帧"},{default:C((()=>[m(v,{modelValue:s.annTool.frameNum,"onUpdate:modelValue":t[11]||(t[11]=e=>s.annTool.frameNum=e),"controls-position":"right",min:0},null,8,["modelValue"])])),_:1}),m(b,{label:"步长"},{default:C((()=>[m(v,{modelValue:s.annTool.frameStep,"onUpdate:modelValue":t[12]||(t[12]=e=>s.annTool.frameStep=e),"controls-position":"right",min:1},null,8,["modelValue"])])),_:1}),m(b,null,{default:C((()=>[m(S,{modelValue:s.annTool.jumpMethod,"onUpdate:modelValue":t[13]||(t[13]=e=>s.annTool.jumpMethod=e)},{default:C((()=>[m(L,{label:"0"},{default:C((()=>[We])),_:1}),m(L,{label:"1"},{default:C((()=>[Fe])),_:1}),m(L,{label:"2"},{default:C((()=>[Ne])),_:1})])),_:1},8,["modelValue"])])),_:1}),m(b,{label:"追踪"},{default:C((()=>[m(D,{modelValue:s.annTool.isTracking,"onUpdate:modelValue":t[14]||(t[14]=e=>s.annTool.isTracking=e)},null,8,["modelValue"])])),_:1}),m(b,{label:"预加载"},{default:C((()=>[m(D,{modelValue:s.annTool.isPreGet,"onUpdate:modelValue":t[15]||(t[15]=e=>s.annTool.isPreGet=e)},null,8,["modelValue"])])),_:1})])),_:1})])),_:1})])),_:1})])),_:1}),m(F,{class:"workspace"},{default:C((()=>[m(V,{ref:"workSpace",onOutput:o.output},null,8,["onOutput"])])),_:1}),m(U,{class:"workspace__footer",height:"120px"},{default:C((()=>[m(N,{ref:"eCharts"},null,512)])),_:1})])),_:1}),m(g,{class:"page-body__right",width:"250px"},{default:C((()=>[m(z,{style:{height:"100%"}},{default:C((()=>[m(p,{height:"130px"},{default:C((()=>[d("div",Ue,null,512)])),_:1}),m(F,null,{default:C((()=>[m(A,null,{default:C((()=>[m(R,{modelValue:s.cvFunc,"onUpdate:modelValue":t[16]||(t[16]=e=>s.cvFunc=e)},null,8,["modelValue"]),m(i,{onClick:o.showfunc},{default:C((()=>[ze])),_:1},8,["onClick"])])),_:1})])),_:1}),m(U,{height:"30px"})])),_:1})])),_:1})])),_:1})])),_:1})};let Re=Uint8ClampedArray;var Ae=F({state:()=>({mCan_dic:{},cCan_dic:{},cWater_dic:{},mCan_undoL:[],mCan_redoL:[],cCan_undoL:[],cCan_redoL:[]}),getters:{getCWater:e=>t=>{let a=Re.from(I.inflate(e.cWater_dic[t]));return new ImageData(a,960,540)},getMCan:e=>t=>{let a=Re.from(I.inflate(e.mCan_dic[t]));return new ImageData(a,960,540)},getCCan:e=>t=>{let a=Re.from(I.inflate(e.cCan_dic[t]));return new ImageData(a,960,540)},getUndoMCan:e=>e.mCan_undoL[e.mCan_undoL.length-1],getUndoCCan:e=>e.cCan_undoL[e.cCan_undoL.length-1],toImgData:e=>e=>new ImageData(e,960,540)},mutations:{canvasPushdo(e,t){let a=t.cCanData.data,n=t.mCanData.data;e.cCan_undoL.push(a),e.mCan_undoL.push(n),e.cCan_undoL.length>60&&(e.cCan_undoL=e.cCan_undoL.slice(50,-1),e.mCan_undoL=e.mCan_undoL.slice(50,-1))},canvasUndo(e){e.cCan_undoL.length<=1||(e.cCan_redoL.push(e.cCan_undoL.pop()),e.mCan_redoL.push(e.mCan_undoL.pop()),e.cCan_redoL.length>60&&(e.cCan_redoL=e.cCan_redoL.slice(50,-1),e.mCan_redoL=e.mCan_redoL.slice(50,-1)))},canvasRedo(e){e.cCan_redoL.length<=0||(e.cCan_undoL.push(e.cCan_redoL.pop()),e.mCan_undoL.push(e.mCan_redoL.pop()),e.cCan_undoL.length>60&&(e.cCan_undoL=e.cCan_undoL.slice(50,-1),e.mCan_undoL=e.mCan_undoL.slice(50,-1)))},storeMCan(e,t){e.mCan_dic[t.num]=I.deflate(t.imgData.data)},storeCCan(e,t){e.cCan_dic[t.num]=I.deflate(t.imgData.data)},storeCWater(e,t){e.cWater_dic[t.num]=I.deflate(t.imgData.data)},store3Can(e,t){e.mCan_dic[t.num]=I.deflate(t.mCanData.data),e.cCan_dic[t.num]=I.deflate(t.cCanData.data),e.cWater_dic[t.num]=I.deflate(t.cWaterData.data)}}});const Be=N(re);Be.config.unwrapInjectedRef=!0,Be.use(Ae),Be.use(U),Be.provide("host","http://127.0.0.1:5000"),Be.mount("#app");
