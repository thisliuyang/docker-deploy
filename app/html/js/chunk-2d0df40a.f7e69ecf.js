(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0df40a"],{"88b6":function(e,t,n){"use strict";n.r(t);var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("basic-container",[n("avue-crud",{ref:"crud",attrs:{option:e.option,"table-loading":e.loading,data:e.data,permission:e.permissionList,"before-open":e.beforeOpen,"before-close":e.beforeClose},on:{"row-del":e.rowDel,"row-update":e.rowUpdate,"row-save":e.rowSave,"search-change":e.searchChange,"search-reset":e.searchReset,"selection-change":e.selectionChange,"current-change":e.currentChange,"size-change":e.sizeChange,"refresh-change":e.refreshChange,"on-load":e.onLoad,"tree-load":e.treeLoad},scopedSlots:e._u([{key:"menu",fn:function(t){return[e.userInfo.role_name.includes("admin")&&3!==t.row.deptCategory?n("el-button",{attrs:{type:"text",icon:"el-icon-circle-plus-outline",size:"small"},on:{click:function(n){return n.stopPropagation(),e.handleAdd(t.row,t.index)}}},[e._v("新增子项\n      ")]):e._e()]}},{key:"deptCategory",fn:function(t){var i=t.row;return[n("el-tag",[e._v(e._s(i.deptCategoryName))])]}}]),model:{value:e.form,callback:function(t){e.form=t},expression:"form"}},[n("template",{slot:"menuLeft"},[e.permission.dept_delete?n("el-button",{attrs:{type:"danger",size:"small",icon:"el-icon-delete",plain:""},on:{click:e.handleDelete}},[e._v("删 除\n      ")]):e._e()],1)],2)],1)},a=[],r=(n("8e6e"),n("456d"),n("6762"),n("2fdb"),n("ac6a"),n("bd86")),o=(n("7514"),n("fcb7")),s=n("2f62");function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){Object(r["a"])(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var d={data:function(){var e=this;return{form:{},selectionList:[],query:{},loading:!0,parentId:0,page:{pageSize:10,currentPage:1,total:0},option:{lazy:!0,tip:!1,simplePage:!0,searchShow:!0,searchMenuSpan:6,tree:!0,excelBtn:!0,border:!0,stripe:!0,index:!0,selection:!0,viewBtn:!0,labelWidth:150,menuWidth:300,dialogClickModal:!1,column:[{label:"机构名称",prop:"deptName",search:!0,rules:[{required:!0,message:"请输入机构名称",trigger:"blur"}]},{label:"机构全称",prop:"fullName",search:!0,rules:[{required:!0,message:"请输入机构全称",trigger:"blur"}]},{label:"上级机构",prop:"parentId",dicData:[],type:"tree",hide:!0,addDisabled:!1,disabled:!1,props:{label:"title"},rules:[{required:!1,message:"请选择上级机构",trigger:"click"}]},{label:"机构类型",type:"select",dicUrl:"/api/blade-system/dict/dictionary?code=org_category",props:{label:"dictValue",value:"dictKey"},dataType:"number",width:120,prop:"deptCategory",slot:!0,change:function(t){var n=t.value,i=t.column,a=e.$refs.crud.DIC.deptCategory;if(a){var r=a.find((function(e){return e["dictKey"]===n}));e.form.deptCategoryName=r.dictValue,console.log("值改变",n,i,r)}},rules:[{required:!0,message:"请输入机构类型",trigger:"blur"}]},{label:"排序",prop:"sort",type:"number",align:"right",width:80,rules:[{required:!0,message:"请输入排序",trigger:"blur"}]},{type:"tree",label:"地区",dicUrl:"/api/blade-system/region/lazy-tree",props:{label:"title",value:"value"},cascaderItem:[],span:12,display:!0,prop:"region",rules:[{required:!0,message:"请选择地区"}]},{label:"技术转让大额标准",prop:"technicalTransfer",type:"number",hide:!0},{label:"技术许可大额标准",prop:"technicalLicensing",type:"number",hide:!0},{label:"技术服务大额标准",prop:"technicalService",type:"number",hide:!0},{label:"技术开发大额标准",prop:"technicalDevelopment",type:"number",hide:!0},{label:"技术咨询大额标准",prop:"technicalConsultation",type:"number",hide:!0,display:!0},{label:"备注",prop:"remark",rules:[{required:!1,message:"请输入备注",trigger:"blur"}],hide:!0}]},data:[]}},computed:l(l({},Object(s["b"])(["userInfo","permission"])),{},{permissionList:function(){return{addBtn:this.vaildData(this.permission.dept_add,!1),viewBtn:!0,delBtn:this.vaildData(this.permission.dept_delete,!1),editBtn:this.vaildData(this.permission.dept_edit,!1)}},ids:function(){var e=[];return this.selectionList.forEach((function(t){e.push(t.id)})),e.join(",")}}),methods:{initData:function(){var e=this;if(this.userInfo.role_name.includes("djc")){var t=["technicalTransfer","technicalLicensing","technicalService","technicalDevelopment","technicalConsultation"];t.forEach((function(t){var n=e.findObject(e.option.column,t);n.display=!1}))}Object(o["getDeptTree"])().then((function(t){var n=e.findObject(e.option.column,"parentId");n.dicData=t.data.data,e.userInfo.role_name.includes("djc")&&setTimeout((function(){e.form.parentId=e.userInfo.dept_id,n.disabled=!0}),300)}))},handleAdd:function(e){this.parentId=e.id;var t=this.findObject(this.option.column,"parentId");t.value=e.id,t.addDisabled=!0,this.$refs.crud.rowAdd()},rowSave:function(e,t,n){var i=this;Object(o["add"])(e).then((function(n){var a=n.data.data;e.id=a.id,e.deptCategoryName=a.deptCategoryName,e.tenantId=a.tenantId,i.$message({type:"success",message:"操作成功!"}),t()}),(function(e){window.console.log(e),n()}))},rowUpdate:function(e,t,n,i){var a=this;Object(o["update"])(e).then((function(){a.$message({type:"success",message:"操作成功!"}),n(e)}),(function(e){window.console.log(e),i()}))},rowDel:function(e,t,n){var i=this;this.$confirm("确定将选择数据删除?",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){return Object(o["remove"])(e.id)})).then((function(){i.$message({type:"success",message:"操作成功!"}),n(e)})).catch((function(){i.$message({type:"info",message:"已取消"})}))},handleDelete:function(){var e=this;0!==this.selectionList.length?this.$confirm("确定将选择数据删除?",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){return Object(o["remove"])(e.ids)})).then((function(){e.data=[],e.parentId=0,e.$refs.crud.refreshTable(),e.$refs.crud.toggleSelection(),e.onLoad(e.page),e.$message({type:"success",message:"操作成功!"})})).catch((function(){e.$message({type:"info",message:"已取消"})})):this.$message.warning("请选择至少一条数据")},searchReset:function(){this.query={},this.parentId=0,this.onLoad(this.page)},searchChange:function(e,t){this.query=e,this.parentId="",this.page.currentPage=1,this.onLoad(this.page,e),t()},selectionChange:function(e){this.selectionList=e},selectionClear:function(){this.selectionList=[],this.$refs.crud.toggleSelection()},beforeOpen:function(e,t){var n=this;["add","edit"].includes(t)&&this.initData(),["edit","view"].includes(t)&&Object(o["getDept"])(this.form.id).then((function(e){n.form=e.data.data})),e()},beforeClose:function(e){this.parentId="";var t=this.findObject(this.option.column,"parentId");t.value="",t.addDisabled=!1,e()},currentChange:function(e){this.page.currentPage=e},sizeChange:function(e){this.page.pageSize=e},refreshChange:function(){this.onLoad(this.page,this.query)},onLoad:function(e){var t=this,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};this.loading=!0,this.userInfo.role_name.includes("djc")&&(this.parentId=this.userInfo.dept_id),Object(o["getLazyList"])(this.parentId,Object.assign(n,this.query)).then((function(e){t.data=e.data.data,t.loading=!1,t.selectionClear(),t.$nextTick((function(){var e=document.getElementsByClassName("el-table__expand-icon")[0];e&&e.click()}))}))},treeLoad:function(e,t,n){var i=e.id;Object(o["getLazyList"])(i).then((function(e){n(e.data.data)}))}}},u=d,p=n("2877"),h=Object(p["a"])(u,i,a,!1,null,null,null);t["default"]=h.exports}}]);