(this.webpackJsonpstarlink=this.webpackJsonpstarlink||[]).push([[0],{171:function(t,e,a){},330:function(t,e,a){"use strict";a.r(e);var n=a(1),s=a.n(n),i=a(6),r=a.n(i),c=(a(171),a(22)),o=a(23),l=a(27),u=a(29),d=a.p+"static/media/spacex_logo.ad25dfff.svg",h=a(5),j=function(t){Object(l.a)(a,t);var e=Object(u.a)(a);function a(){return Object(c.a)(this,a),e.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return Object(h.jsxs)("header",{className:"App-header",children:[Object(h.jsx)("img",{src:d,className:"App-logo",alt:"logo"}),Object(h.jsx)("p",{className:"title",children:"StarLink Tracker"})]})}}]),a}(n.Component),p=function(t){Object(l.a)(a,t);var e=Object(u.a)(a);function a(){return Object(c.a)(this,a),e.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return Object(h.jsx)("footer",{className:"footer",children:"\xa92020 StarLink Tracker. All Rights Reserved. Website Made by Zhao Tang"})}}]),a}(n.Component),b=a(93),f=a(55),m=a(339),g=a(340),O=a(67),v=a.n(O),x=a(344),y=a(347),w=a(348),L=function(t){Object(l.a)(a,t);var e=Object(u.a)(a);function a(){var t;Object(c.a)(this,a);for(var n=arguments.length,s=new Array(n),i=0;i<n;i++)s[i]=arguments[i];return(t=e.call.apply(e,[this].concat(s))).showSatellite=function(e){e.preventDefault(),t.props.form.validateFields((function(e,a){e||t.props.onShow(a)}))},t}return Object(o.a)(a,[{key:"render",value:function(){var t=this.props.form.getFieldDecorator;return Object(h.jsxs)(x.a,Object(f.a)(Object(f.a)({className:"sat-setting"},{labelCol:{xs:{span:24},sm:{span:11}},wrapperCol:{xs:{span:24},sm:{span:13}}}),{},{onSubmit:this.showSatellite,children:[Object(h.jsx)(x.a.Item,{label:"Longitude(degrees)",children:t("longitude",{rules:[{required:!0,message:"Please input your Longitude"}]})(Object(h.jsx)(y.a,{min:-180,max:180,style:{width:"100%"},placeholder:"Please input Longitude"}))}),Object(h.jsx)(x.a.Item,{label:"Latitude(degrees)",children:t("latitude",{rules:[{required:!0,message:"Please input your Latitude"}]})(Object(h.jsx)(y.a,{placeholder:"Please input Latitude",min:-90,max:90,style:{width:"100%"}}))}),Object(h.jsx)(x.a.Item,{label:"Elevation(meters)",children:t("elevation",{rules:[{required:!0,message:"Please input your Elevation"}]})(Object(h.jsx)(y.a,{placeholder:"Please input Elevation",min:-413,max:8850,style:{width:"100%"}}))}),Object(h.jsx)(x.a.Item,{label:"Altitude(degrees)",children:t("altitude",{rules:[{required:!0,message:"Please input your Altitude"}]})(Object(h.jsx)(y.a,{placeholder:"Please input Altitude",min:0,max:90,style:{width:"100%"}}))}),Object(h.jsx)(x.a.Item,{label:"Duration(secs)",children:t("duration",{rules:[{required:!0,message:"Please input your Duration"}]})(Object(h.jsx)(y.a,{placeholder:"Please input Duration",min:0,max:90,style:{width:"100%"}}))}),Object(h.jsx)(x.a.Item,{className:"show-nearby",children:Object(h.jsx)(w.a,{type:"primary",htmlType:"submit",style:{textAlign:"center"},children:"Find Nearby Satellite"})})]}))}}]),a}(n.Component),S=x.a.create()(L),k=a(156),N=a(342),D=a(349),I=a(337),P=a.p+"static/media/satellite.d327b26a.svg",C=function(t){Object(l.a)(a,t);var e=Object(u.a)(a);function a(t){var n;return Object(c.a)(this,a),(n=e.call(this,t)).onChange=function(t){console.log(t.target);var e=t.target,a=e.dataInfo,s=e.checked,i=n.state.selected,r=n.addOrRemove(a,s,i);n.setState({selected:r})},n.addOrRemove=function(t,e,a){var n=a.some((function(e){return e.satid===t.satid}));return e&&!n?a=[].concat(Object(b.a)(a),[t]):!e&&n&&(a=a.filter((function(e){return e.satid!==t.satid}))),console.log(a),a},n.onShowSatMap=function(){n.props.onShowMap(n.state.selected)},n.state={selected:[],isLoad:!1},n}return Object(o.a)(a,[{key:"render",value:function(){var t=this,e=this.props.satInfo?this.props.satInfo.above:[],a=this.props.isLoad,n=this.state.selected;return Object(h.jsxs)("div",{className:"sat-list-box",children:[Object(h.jsx)("div",{className:"btn-container",children:Object(h.jsx)(w.a,{className:"sat-list-btn",type:"primary",size:"large",disabled:0===n.length,onClick:this.onShowSatMap,children:"Track on the map"})}),Object(h.jsx)("hr",{}),a?Object(h.jsx)("div",{className:"spin-box",children:Object(h.jsx)(k.a,{tip:"Loading...",size:"large"})}):Object(h.jsx)(N.a,{className:"sat-list",itemLayout:"horizontal",size:"small",dataSource:e,renderItem:function(e){return Object(h.jsx)(N.a.Item,{actions:[Object(h.jsx)(D.a,{dataInfo:e,onChange:t.onChange})],children:Object(h.jsx)(N.a.Item.Meta,{avatar:Object(h.jsx)(I.a,{size:50,src:P}),title:Object(h.jsx)("p",{children:e.satname}),description:"Launch Date: ".concat(e.launchDate)})})}})]})}}]),a}(n.Component),M="NGBQZ2-95EQ5Q-ZTE3F5-4NOW",T=a(163),E=a(343),A=a(341),F=a(350),R=a(346),z=a(352),B=a(351),q=a(345),W=960,H=600,Q=function(t){Object(l.a)(a,t);var e=Object(u.a)(a);function a(t){var n;return Object(c.a)(this,a),(n=e.call(this,t)).generateMap=function(t){var e=Object(E.a)().scale(170).translate([480,300]).precision(.1),a=Object(F.a)(),s=Object(A.a)(n.refMap.current).attr("width",W).attr("height",H),i=Object(A.a)(n.refTrack.current).attr("width",W).attr("height",H),r=s.node().getContext("2d"),c=i.node().getContext("2d"),o=Object(R.a)().projection(e).context(r);t.forEach((function(t){r.fillStyle="#B3DDEF",r.strokeStyle="#000",r.globalAlpha=.7,r.beginPath(),o(t),r.fill(),r.stroke(),r.strokeStyle="rgba(220, 220, 220, 0.1)",r.beginPath(),o(a()),r.lineWidth=.1,r.stroke(),r.beginPath(),r.lineWidth=.5,o(a.outline()),r.stroke()})),n.map={context:r,context2:c,projection:e}},n.track=function(t){if(0===t.length||!t[0].hasOwnProperty("positions"))throw new Error("No position data");var e=t[0].positions.length,a=(n.props.observeData.duration,n.map.context2),s=new Date,i=0,r=setInterval((function(){var c=new Date,o=0===i?0:c-s,l=new Date(s.getTime()+60*o);if(a.clearRect(0,0,W,H),a.font="bold 14px sans-serif",a.fillStyle="#333",a.textAlign="center",a.fillText(Object(q.a)(l),480,10),i>=e)return clearInterval(r),n.setState({isDrawing:!1}),void(document.getElementsByClassName("hint")[0].innerHTML="");t.forEach((function(t){var e=t.info,a=t.positions;n.drawSat(e,a[i])})),i+=60}),1e3)},n.drawSat=function(t,e){var a=e.satlongitude,s=e.satlatitude;if(a&&s){var i=t.satname.match(/\d+/g).join(""),r=n.map,c=r.projection,o=r.context2,l=c([a,s]);o.fillStyle=n.color(i),o.beginPath(),o.arc(l[0],l[1],4,0,2*Math.PI),o.fill(),o.font="bold 11px sans-serif",o.textAlign="center",o.fillText(i,l[0],l[1]+14)}},n.state={isLoading:!1,isDrawing:!1},n.map=null,n.color=B.a(z.a),n.refMap=s.a.createRef(),n.refTrack=s.a.createRef(),n}return Object(o.a)(a,[{key:"componentDidMount",value:function(){var t=this;v.a.get("https://unpkg.com/world-atlas@1/world/110m.json").then((function(e){var a=e.data,n=Object(T.a)(a,a.objects.countries).features;t.generateMap(n)})).catch((function(t){console.log("Error in fetching world map data: ",t)}))}},{key:"componentDidUpdate",value:function(t,e,a){var n=this;if(t.satData!==this.props.satData){var s=this.props.observeData,i=s.latitude,r=s.longitude,c=s.elevation,o=60*s.duration;this.setState({isLoading:!0});var l=this.props.satData.map((function(t){var e=t.satid,a="/api/".concat("rest/v1/satellite/positions","/").concat(e,"/").concat(i,"/").concat(r,"/").concat(c,"\n                /").concat(o,"/&apiKey=").concat(M);return v.a.get(a)}));Promise.all(l).then((function(t){var a=t.map((function(t){return t.data}));(n.setState({isLoading:!1,isDrawing:!0}),e.isDrawing)?document.getElementsByClassName("hint")[0].innerHTML="Please wait until selected satellites are shown...":n.track(a)})).catch((function(t){console.log("Error in fetching satellite positions: ",t.message)}))}}},{key:"render",value:function(){var t=this.state.isLoading;return Object(h.jsxs)("div",{className:"map-box",children:[t?Object(h.jsx)("div",{className:"spinner",children:Object(h.jsx)(k.a,{tip:"Loading...",size:"large"})}):null,Object(h.jsx)("canvas",{className:"map",ref:this.refMap}),Object(h.jsx)("canvas",{className:"track",ref:this.refTrack}),Object(h.jsx)("div",{className:"hint"})]})}}]),a}(n.Component),Z=function(t){Object(l.a)(a,t);var e=Object(u.a)(a);function a(t){var n;return Object(c.a)(this,a),(n=e.call(this,t)).showNearbySatellite=function(t){n.setState({isLoading:!0,setting:t}),n.fetchSatellite(t)},n.fetchSatellite=function(t){var e=t.latitude,a=t.longitude,s=t.elevation,i=t.altitude,r="api/".concat("rest/v1/satellite/above","/").concat(e,"/").concat(a,"/").concat(s,"/").concat(i,"/").concat("52","/&apiKey=").concat(M);n.setState({isLoadingList:!0}),v.a.get(r).then((function(t){console.log("HTTP response: ",t.data),n.setState({satInfo:t.data,isLoadingList:!1})})).catch((function(t){console.log("Error in fetching satellite data: ",t)}))},n.showMap=function(t){n.setState((function(e){return Object(f.a)(Object(f.a)({},e),{},{isLoadingMap:!0,satList:Object(b.a)(t)})}))},n.state={satInfo:null,setting:null,satList:null,isLoadingList:!1},n}return Object(o.a)(a,[{key:"render",value:function(){var t=this.state,e=t.isLoadingList,a=t.satInfo,n=t.setting,s=t.satList;return Object(h.jsxs)(m.a,{className:"main",children:[Object(h.jsxs)(g.a,{span:8,className:"left-side",children:[Object(h.jsx)(S,{onShow:this.showNearbySatellite}),Object(h.jsx)(C,{satInfo:a,isLoad:e,onShowMap:this.showMap})]}),Object(h.jsx)(g.a,{span:16,className:"right-side",children:Object(h.jsx)(Q,{observeData:n,satData:s})})]})}}]),a}(n.Component);var J=function(){return Object(h.jsxs)("div",{className:"App",children:[Object(h.jsx)(j,{}),Object(h.jsx)(Z,{}),Object(h.jsx)(p,{})]})},K=function(t){t&&t instanceof Function&&a.e(3).then(a.bind(null,353)).then((function(e){var a=e.getCLS,n=e.getFID,s=e.getFCP,i=e.getLCP,r=e.getTTFB;a(t),n(t),s(t),i(t),r(t)}))};r.a.render(Object(h.jsx)(J,{}),document.getElementById("root")),K()}},[[330,1,2]]]);
//# sourceMappingURL=main.2ace8e6a.chunk.js.map