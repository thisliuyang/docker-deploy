(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0c73f0ed"],{1226:function(e,t,a){"use strict";a("b8dd")},"889f":function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("basic-container",[e.userInfo?a("avue-crud",{ref:"crud",attrs:{option:e.option,"table-loading":e.loading,data:e.data,page:e.page,search:e.query,permission:e.permissionList,"before-open":e.beforeOpen},on:{"update:page":function(t){e.page=t},"update:search":function(t){e.query=t},"row-update":e.rowUpdate,"row-save":e.rowSave,"row-del":e.rowDel,"search-change":e.searchChange,"search-reset":e.searchReset,"selection-change":e.selectionChange,"current-change":e.currentChange,"size-change":e.sizeChange,"refresh-change":e.refreshChange,"on-load":e.onLoad},scopedSlots:e._u([{key:"contractTotalAmountSearch",fn:function(t){var n=t.disabled,i=t.size;return[a("div",{staticClass:"contractTotalAmountSearch"},[a("el-input",{staticStyle:{width:"200px"},attrs:{placeholder:"最小金额",disabled:n,size:i},model:{value:e.query.startContractTotalAmount,callback:function(t){e.$set(e.query,"startContractTotalAmount",t)},expression:"query.startContractTotalAmount"}}),a("span",[e._v("(<)")]),a("el-input",{staticStyle:{width:"200px"},attrs:{placeholder:"最大金额",disabled:n,size:i},model:{value:e.query.endContractTotalAmount,callback:function(t){e.$set(e.query,"endContractTotalAmount",t)},expression:"query.endContractTotalAmount"}})],1)]}},{key:"contractStatusSearch",fn:function(t){var n=t.disabled,i=t.size,r=t.dic,o=t.column;return[a("div",[a("avue-select",{attrs:{multiple:"",disabled:n,size:i,placeholder:"请选择内容",type:"tree",dic:r,props:o.props},model:{value:e.query.contractStatus,callback:function(t){e.$set(e.query,"contractStatus",t)},expression:"query.contractStatus"}})],1)]}},{key:"menu",fn:function(t){var n=t.type,i=t.size,r=t.row;return[a("el-button",{attrs:{icon:"el-icon-view",size:i,type:n},on:{click:function(t){return e.handleView(r)}}},[e._v("合同信息")]),a("el-button",{attrs:{icon:"el-icon-view",type:n,size:i},on:{click:function(t){return e.handleFree(r)}}},[e._v("免税记录")]),a("el-button",{attrs:{type:"text",size:"small",icon:"el-icon-s-check"},on:{click:function(t){return t.stopPropagation(),e.handleHistory(r)}}},[e._v("审核意见\n      ")]),e.isSwAdmin?a("el-button",{attrs:{icon:"el-icon-close",type:n,size:i},on:{click:function(t){return e.handleReject(r)}}},[e._v("驳回")]):e._e()]}}],null,!1,4138877170),model:{value:e.form,callback:function(t){e.form=t},expression:"form"}}):e._e(),a("el-dialog",{staticClass:"contract-info-dialog",attrs:{title:"合同详情","append-to-body":"",width:"80%",visible:e.contractInfoIsShow},on:{"update:visible":function(t){e.contractInfoIsShow=t}}},[e.contractInfoIsShow?a("contractInfo",{attrs:{query:e.contractInfoQuery},on:{close:e.handleContractClose}}):e._e()],1),a("el-dialog",{staticClass:"contract-info-dialog",attrs:{title:"审核意见","append-to-body":"",width:"70%",visible:e.flowListIsShow},on:{"update:visible":function(t){e.flowListIsShow=t}}},[a("el-row",{staticClass:"row-bg",attrs:{type:"flex"}},[a("avue-crud",{ref:"flowListCrud",attrs:{option:e.flowListOption,"table-loading":e.loading,data:e.flowList}})],1),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{attrs:{type:"primary",loading:e.loading},on:{click:function(t){e.flowListIsShow=!1}}},[e._v("确 定")])],1)],1),a("el-dialog",{directives:[{name:"dialogdrag",rawName:"v-dialogdrag"}],staticClass:"avue-dialog",attrs:{title:"驳回",visible:e.rejectIsShow,width:"60%","append-to-body":""},on:{"update:visible":function(t){e.rejectIsShow=t}}},[a("avue-form",{ref:"rejectForm",attrs:{option:e.rejectOption},model:{value:e.rejectForm,callback:function(t){e.rejectForm=t},expression:"rejectForm"}}),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(t){e.rejectIsShow=!1}}},[e._v("取 消")]),a("el-button",{attrs:{type:"primary"},on:{click:e.handleSubmit}},[e._v("提 交")])],1)],1)],1)},i=[],r=(a("8e6e"),a("28a5"),a("456d"),a("96cf"),a("3b8d")),o=(a("6762"),a("2fdb"),a("ac6a"),a("bd86")),s=a("799f"),c=a("2f62"),l=a("fcb7"),d=a("21a6"),u=a.n(d),p=a("c0c7"),h=a("096f"),f=a("c832"),m=a.n(f),g=a("4ba7"),b=a("8ddc");function y(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function v(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?y(Object(a),!0).forEach((function(t){Object(o["a"])(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):y(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var w={data:function(){return{contractInfoIsShow:!1,contractInfoQuery:{},userInfo:null,form:{},query:{},loading:!0,page:{pageSize:10,currentPage:1,total:0},selectionList:[],option:{height:"auto",calcHeight:30,tip:!1,searchMenuSpan:6,menuWidth:300,searchLabelWidth:130,border:!0,stripe:!0,index:!0,viewBtn:!1,editBtn:!1,delBtn:!1,excelBtn:!1,addBtn:!1,selection:!1,searchShow:!0,searchIndex:2,searchIcon:!0,dialogClickModal:!1,column:[{label:"状态",prop:"contractStatus",searchSpan:12,type:"select",dataType:"number",minWidth:160,searchslot:!0,multiple:!0,overHidden:!0,search:!1,props:{label:"dictValue",value:"dictKey"},dicUrl:"/api/blade-system/dict-biz/dictionary?code=contract_status",rules:[{required:!0,message:"请输入状态",trigger:"blur"}]},{label:"项目名称",prop:"projectName",overHidden:!0,minWidth:160,searchSpan:8,search:!0,rules:[{required:!0,message:"请输入项目名称",trigger:"blur"}]},{label:"合同登记号",prop:"contractRegistrationNumber",minWidth:160,searchSpan:8,overHidden:!0,search:!0,rules:[]},{label:"办件编号",prop:"contractCode",minWidth:160,searchSpan:8,overHidden:!0,search:!0,rules:[]},{label:"合同成交总金额",prop:"contractTotalAmount",bind:"contractinfo.contractTotalAmount",searchslot:!0,search:!0,minWidth:130,searchSpan:12,rules:[{required:!0,message:"请输入合同成交总金额",trigger:"blur"}]},{type:"select",label:"合同申请类型",prop:"type",dataType:"string",display:!1,search:!0,minWidth:100,value:"1",dicData:[{label:"个人合同",value:"0"},{label:"单位合同",value:"1"}]},{type:"radio",label:"申报类型",span:24,display:!0,search:!0,props:{label:"dictValue",value:"dictKey"},prop:"declareType",dataType:"string",value:"1",dicUrl:"/api/blade-system/dict-biz/dictionary?code=declare_type",dicFlag:!0,border:!1,button:!1,size:"medium",disabled:!1,required:!0,rules:[{required:!0,message:"请选择申报类型"}],dicMethod:"get"},{type:"radio",label:"合同类型",search:!0,span:24,display:!0,props:{label:"dictValue",value:"dictKey"},prop:"contractType",dicUrl:"/api/blade-system/dict-biz/child-list?current=1&size=10&parentId=518",required:!0,rules:[{required:!0,message:"请选择合同类型"}]},{type:"input",label:"登记单位",minWidth:100,overHidden:!0,span:12,display:!0,prop:"registrationUnit",required:!0,rules:[{required:!0,message:"登记单位必须填写"}]},{type:"tree",label:"登记站",span:24,display:!0,overHidden:!0,searchSpan:8,minWidth:100,parent:!1,props:{label:"title",value:"value"},prop:"kiosk",dicData:[],defaultExpandedKeys:["1123598813738675201"],search:!0,rules:[{required:!0,message:"请选择登记站"}]},{type:"tree",label:"登记处",span:12,overHidden:!0,searchSpan:8,minWidth:100,defaultExpandedKeys:[],parent:!1,search:!0,props:{label:"title",value:"value"},dicData:[],prop:"registrationPoint",rules:[{required:!0,message:"请选择登记处"}]},{type:"tree",label:"项目计划来源",search:!0,searchLabelWidth:100,searchSpan:8,minWidth:100,span:24,display:!0,parent:!1,props:{label:"dictValue",value:"dictKey"},prop:"projectPlanFrom",dicUrl:"/api/blade-system/dict-biz/child-list?current=1&size=100&parentId=520",required:!0,overHidden:!0,rules:[{required:!0,message:"请选择项目计划来源"}]},{type:"radio",label:"是否军民两用合同",search:!0,searchLabelWidth:130,minWidth:120,span:24,display:!0,prop:"isClassified",dicData:[{label:"是",value:"1"},{label:"否",value:"0"}],required:!0,rules:[{required:!0,message:"请选择是否为军民两用合同"}]},{type:"radio",label:"是否申请免税",minWidth:100,span:24,display:!0,labelTip:"计划外的技术开发、技术转让、技术许可合同才可以申请免税",labelTipPlacement:"right",rules:[{required:!0,message:"请选择是否申请免税"}],prop:"isFree",hide:!0,dicData:[{label:"是",value:1},{label:"否",value:0}]},{type:"radio",label:"是否大额合同",search:!0,minWidth:100,span:24,display:!0,rules:[{required:!0,message:"请选择是否大额合同"}],prop:"isLarge",dicData:[{label:"是",value:"1"},{label:"否",value:"0"}]},{type:"radio",label:"是否涉外合同",search:!0,minWidth:100,span:24,display:!0,rules:[{required:!0,message:"请选择是否涉外合同"}],prop:"isOutside",dicData:[{label:"是",value:"1"},{label:"否",value:"0"}]},{label:"税务驳回状态",prop:"rejectStatus",type:"select",dataType:"string",minWidth:100,overHidden:!0,search:!0,props:{label:"dictValue",value:"dictKey"},dicUrl:"/api/blade-system/dict-biz/dictionary?code=reject_status",rules:[{required:!0,message:"请输入驳回状态",trigger:"blur"}]},{label:"提交时间",prop:"applyTime",type:"datetime",minWidth:150,searchRange:!0,searchSpan:10,search:!0,valueFormat:"yyyy-MM-dd HH:mm:ss"},{label:"创建时间",prop:"createTime",type:"datetime",searchSpan:10,minWidth:150,searchRange:!0,search:!0,valueFormat:"yyyy-MM-dd HH:mm:ss"}]},data:[],flowList:[],flowListIsShow:!1,flowListOption:g["flowListOption"],rejectIsShow:!1,rejectForm:{},rejectOption:{height:"auto",calcHeight:30,tip:!1,searchShow:!0,searchMenuSpan:6,border:!0,index:!0,viewBtn:!0,selection:!0,dialogClickModal:!1,submitBtn:!1,emptyBtn:!1,labelWidth:80,column:[{label:"驳回原因",span:24,type:"textarea",prop:"reason",rules:[]}]}}},components:{contractInfo:h["default"]},computed:v(v({},Object(c["b"])(["permission"])),{},{permissionList:function(){return{addBtn:this.vaildData(this.permission.contractlist_add,!1),viewBtn:this.vaildData(this.permission.contractlist_view,!1),delBtn:this.vaildData(this.permission.contractlist_delete,!1),contractDelBtn:this.vaildData(this.permission.contract_search_delete,!1),editBtn:this.vaildData(this.permission.contract_search_edit,!1)}},ids:function(){var e=[];return this.selectionList.forEach((function(t){e.push(t.id)})),e.join(",")},isSwAdmin:function(){var e=this,t=["1372376795654664194"],a=t.some((function(t){return m()(e,"userInfo.roleId","").includes(t)}));return a}}),created:function(){this.initData(),this.getUserInfo()},methods:{initData:function(e){var t=this;Object(l["getDeptTree"])(e).then((function(e){var a=t.findObject(t.option.column,"kiosk"),n=e.data.data,i=n[0].children;i=i.filter((function(e){return"1364024711664652289"!==e.id&&e.hasChildren})),n[0].children=i,a.dicData=n;var r=t.findObject(t.option.column,"registrationPoint"),o=t.deepClone(n),s=o[0].children;s.forEach((function(e){return e.children=[]})),r.dicData=o})),Object(b["getDictionary"])({code:"reason"}).then((function(e){var a=t.findObject(t.flowListOption.column,"reason");a.dicData=m()(e,"data.data",[])}))},getUserInfo:function(){var e=Object(r["a"])(regeneratorRuntime.mark((function e(){var t,a,n,i,r,o,s,c,l=this;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Object(p["getUserInfo"])();case 3:t=e.sent,a=t.data,n=a.data,this.$nextTick((function(){l.userInfo=n})),i=n.roleId,i.includes("1375342244055232513")&&(r=this.findObject(this.option.column,"contractCode"),r.hide=!0),o=["1351364540907913218","1351364671552094210"],s=o.some((function(e){return i.includes(e)})),s&&(c=["isClassified","isLarge","isOutside","rejectStatus","isFree"],c.forEach((function(e){var t=l.findObject(l.option.column,e);t.hide=!0}))),e.next=17;break;case 14:e.prev=14,e.t0=e["catch"](0),console.warn("error :>> ",e.t0);case 17:case"end":return e.stop()}}),e,this,[[0,14]])})));function t(){return e.apply(this,arguments)}return t}(),handleAdd:function(e){this.$router.push({path:"/contract/contract-info",query:{contractType:e}})},handleDownload:function(e){this.contractDownload(e)},contractDownload:function(){var e=Object(r["a"])(regeneratorRuntime.mark((function e(t){var a,n,i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return a=[t.id],e.prev=1,e.next=4,this.$http({url:"/api/api/downloadPDF/exportPdf",method:"POST",data:a,responseType:"blob"});case 4:n=e.sent,i=n.data,u()(i,t.projectName+".pdf"),e.next=12;break;case 9:e.prev=9,e.t0=e["catch"](1),window.console.log(e.t0);case 12:case"end":return e.stop()}}),e,this,[[1,9]])})));function t(t){return e.apply(this,arguments)}return t}(),handleListDowload:function(){var e=this;0!==this.selectionList.length?this.selectionList.forEach((function(t){e.contractDownload(t)})):this.$message.warning("请选择至少一条数据")},handleListBatchVoid:function(){var e=this;0!==this.selectionList.length?this.$confirm("确定将选择数据作废?",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){return Object(s["batchVoid"])(e.ids)})).then((function(){e.onLoad(e.page),e.$message({type:"success",message:"操作成功!"}),e.$refs.crud.toggleSelection()})):this.$message.warning("请选择至少一条数据")},handleCopy:function(){if(0!==this.selectionList.length)if(1===this.selectionList.length){var e=this.selectionList[0].id;this.$router.push({path:"/contract/contract-info",query:{contractType:0,copyId:e}})}else this.$message.warning("只能选择一条条数据");else this.$message.warning("请选择至少一条数据")},handleAddClassified:function(e){this.$router.push({path:"/contract/contract-info",query:{contractType:e,isClassified:1}})},rowSave:function(e,t,a){var n=this;Object(s["add"])(e).then((function(){n.onLoad(n.page),n.$message({type:"success",message:"操作成功!"}),t()}),(function(e){a(),window.console.log(e)}))},rowUpdate:function(e){this.contractInfoQuery={contractId:e.id,type:"admin-edit"},this.contractInfoIsShow=!0},handleView:function(e){this.contractInfoQuery={contractId:e.id,type:"detail"},this.contractInfoIsShow=!0},handleFree:function(e){this.$router.push({path:"/free/free-list",query:{contractId:e.id}})},handleReject:function(e){this.rejectForm.id=e.id,this.rejectIsShow=!0},handleSubmit:function(){this.reject()},reject:function(){var e=Object(r["a"])(regeneratorRuntime.mark((function e(){var t,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,this.$http({method:"POST",url:"/api/api/contractlist/reject",params:this.rejectForm});case 3:t=e.sent,a=t.data,this.$message({type:"success",message:"操作成功!"}),this.rejectIsShow=!1,a&&this.onLoad(this.page),e.next=13;break;case 10:e.prev=10,e.t0=e["catch"](0),console.warn("error :>> ",e.t0);case 13:case"end":return e.stop()}}),e,this,[[0,10]])})));function t(){return e.apply(this,arguments)}return t}(),rowDel:function(e){var t=this;this.$confirm("确定将选择数据删除?",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){return Object(s["remove"])(e.id)})).then((function(){t.onLoad(t.page),t.$message({type:"success",message:"操作成功!"})}))},handleDelete:function(){var e=this;0!==this.selectionList.length?this.$confirm("确定将选择数据删除?",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){return Object(s["remove"])(e.ids)})).then((function(){e.onLoad(e.page),e.$message({type:"success",message:"操作成功!"}),e.$refs.crud.toggleSelection()})):this.$message.warning("请选择至少一条数据")},beforeOpen:function(e,t){var a=this;["edit","view"].includes(t)&&Object(s["getDetail"])(this.form.id).then((function(e){a.form=e.data.data})),e()},searchReset:function(){this.query={},this.onLoad(this.page)},searchChange:function(e,t){this.query=e,this.page.currentPage=1,this.onLoad(this.page,e),t()},selectionChange:function(e){this.selectionList=e},selectionClear:function(){this.selectionList=[],this.$refs.crud.toggleSelection()},currentChange:function(e){this.page.currentPage=e},sizeChange:function(e){this.page.pageSize=e},refreshChange:function(){this.onLoad(this.page,this.query)},onLoad:function(e){var t=this,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};this.loading=!0;var n=v(v(v({},a),this.query),{},{contractStatusList:[10,14],isFree:1}),i=this.userInfo,r=i.roleId,o=i.unitId,c=i.deptId,l=i.id;r.includes("1351364540907913218")&&(n.createUser=l,n.registrationUnitId=o||0),r.includes("1351364671552094210")&&(n.registrationUnitId=o),r.includes("1375342244055232513")&&(n.kiosk=c),r.includes("1351364770906767361")&&(n.kiosk=c),r.includes("1351364845053673474")&&(n.registrationPoint=c);var d=n.applyTime,u=n.createTime;d&&(n.startApplyTime=d[0],n.endApplyTime=d[1],n.applyTime=null),u&&(n.startTime=u[0],n.endTime=u[1],n.createTime=null),n.contractStatusList=[10,14],delete n.contractStatus,Object.keys(n).forEach((function(e){(t.validatenull(n[e])||e.includes("$"))&&delete n[e]})),Object(s["getListPage"])(e.currentPage,e.pageSize,n).then((function(e){var a=e.data.data;t.page.total=a.total,t.data=a.records,t.loading=!1,t.selectionClear()}))},handleHistory:function(e){var t=this;Object(s["historyFlowList"])({contractId:e.id}).then((function(e){var a=m()(e,"data.data");a&&(a=a.map((function(e){var t=e.comment.split("###$$$");return e.comment=t[0],e.reason=t[1],e})),t.flowList=a,t.flowListIsShow=!0)}))},handleContractClose:function(){this.contractInfoIsShow=!1,this.onLoad(this.page)}}},S=w,j=(a("1226"),a("2877")),I=Object(j["a"])(S,n,i,!1,null,null,null);t["default"]=I.exports},b8dd:function(e,t,a){}}]);