(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{100:function(e,a,t){},101:function(e,a,t){},118:function(e,a,t){},130:function(e,a,t){"use strict";t.r(a);var r=t(0),n=t.n(r),c=t(10),i=t.n(c),s=(t(100),t(83)),l=t(31),d=(t(101),t(88)),o=t(175),h=t(61),p=t(76),u=t.n(p),v=t(160),b=t(162),f=t(43),m=t(163),g=t(164),y=t(165),k=t(131),w=t(166),_=t(167),E=t(179),S=t(168),q=t(178),O=t(42),L=t(46);function T(){var e=Object(O.b)(),a=e.t,t=e.i18n,r=n.a.useState("en"),c=Object(h.a)(r,2),i=c[0],s=c[1],l=n.a.useState(null),d=Object(h.a)(l,2),o=d[0],p=d[1],T=function(e){var a=e.target.value;t.changeLanguage(a),p(null)},C=Boolean(o),N=C?"simple-popper":void 0;return n.a.createElement(v.a,{position:"static"},n.a.createElement(b.a,null,n.a.createElement(f.a,{edge:"start",variant:"h6"},"OpenWrt Firmware Selector Wizard"),n.a.createElement("div",{style:{flexGrow:1}}),n.a.createElement(m.a,{"aria-describedby":N,color:"secondary",variant:"contained",onClick:function(e){s(L.a.language.substring(0,2)),p(o?null:e.currentTarget)}},a("components.changeLanguage")," \xa0",n.a.createElement(u.a,null)),n.a.createElement(g.a,{id:N,open:C,anchorEl:o,transition:!0,disablePortal:!0},function(e){var a=e.TransitionProps;return n.a.createElement(y.a,Object.assign({},a,{timeout:350}),n.a.createElement(k.a,{className:"language-selector-popper"},n.a.createElement(w.a,{component:"fieldset"},n.a.createElement(_.a,{component:"legend"},"Change Language"),n.a.createElement("br",null),n.a.createElement(E.a,{"aria-label":"Language",name:"language",value:i,onChange:T},n.a.createElement(S.a,{value:"en",control:n.a.createElement(q.a,null),label:"English"}),n.a.createElement(S.a,{value:"de",control:n.a.createElement(q.a,null),label:"German"})))))})))}var C=t(78),N=t(79),P=t(89),j=t(80),D=t(90),W=t(177),A=t(171),I=t(172),x=t(170),R=t(173),z=t(174),F=t(169),B=t(11),G=t(82),V=t.n(G),M=(t(118),t(21)),J=t(81),K=t.n(J),$=Object(F.a)(function(e){return{root:{borderColor:"#e2e2e1",overflow:"hidden",margin:0,borderRadius:4,transition:e.transitions.create(["border-color","box-shadow"]),"&:hover":{borderColor:Object(B.b)(e.palette.primary.main,.25)},"&$focused":{backgroundColor:"#fff",boxShadow:"".concat(Object(B.b)(e.palette.primary.main,.25)," 0 0 0 2px"),borderColor:e.palette.primary.main}},focused:{}}});function H(e){var a=$();return n.a.createElement(W.a,Object.assign({variant:"outlined",label:n.a.createElement("div",{className:"search-label"},e.labelText),InputProps:{classes:a,endAdornment:n.a.createElement(A.a,{position:"start"},n.a.createElement(V.a,{className:a.label}))}},e))}var Q=function(e){function a(){var e,t;Object(C.a)(this,a);for(var r=arguments.length,n=new Array(r),c=0;c<r;c++)n[c]=arguments[c];return(t=Object(P.a)(this,(e=Object(j.a)(a)).call.apply(e,[this].concat(n)))).deviceNames=[],t.deviceNamesID={},t.state={showDeviceData:!1,device:null,searchResults:[],showSearch:!1,selectedSearchIndex:0,query:""},t.selectDevice=function(e){null!=e&&t.setState({device:M.devices[e],showDeviceData:!0,query:M.devices[e].vendor+" "+M.devices[e].model+" "+M.devices[e].variant})},t.search=function(e){var a=e.target.value,r=!1;t.setState({query:a,searchResults:[],showSearch:r});var n=t.fuzzySet.get(a,void 0,0),c=[];if(null!=n)for(var i=0;i<n.length&&i<6;i++)c.push(M.devices[t.deviceNamesID[n[i][1]]]);r=!0,""===a&&(r=!1),t.setState({searchResults:c,showSearch:r})},t.hideSearch=function(){setTimeout(function(){t.setState({showSearch:!1})},300)},t}return Object(D.a)(a,e),Object(N.a)(a,[{key:"componentDidMount",value:function(){var e=this;Object.keys(M.devices).forEach(function(a){var t="";"vendor"in M.devices[a]&&(t+=M.devices[a].vendor+" "),t+=M.devices[a].model,"variant"in M.devices[a]&&""!==M.devices[a].variant&&(t+=" "+M.devices[a].variant),e.deviceNames.push(t),e.deviceNamesID[t]=a}),this.fuzzySet=K()(this.deviceNames)}},{key:"render",value:function(){var e=this;return n.a.createElement(I.a,{className:"home-container"},n.a.createElement(k.a,{className:"home-container-paper"},n.a.createElement(f.a,{variant:"h5"},this.props.t("appIntro.head")),n.a.createElement(f.a,null,this.props.t("appIntro.para")),n.a.createElement("br",null),n.a.createElement(w.a,{fullWidth:!0},n.a.createElement(H,{id:"outlined-adornment-search-devices",labelText:this.props.t("components.search.label"),value:this.state.query,onChange:this.search,onClick:this.search,onBlur:this.hideSearch})),this.state.showSearch&&n.a.createElement(k.a,{elevation:4,className:"search-results"},n.a.createElement(x.a,null,this.state.searchResults.map(function(a,t){return n.a.createElement(R.a,{key:a.device_id,button:!0,onClick:function(){return e.selectDevice(a.device_id)}},n.a.createElement(z.a,{primary:n.a.createElement("div",null,a.vendor," ",a.model," ",a.variant)}))}))),0===this.state.searchResults.length&&this.state.showSearch&&n.a.createElement(k.a,{elevation:4,className:"search-results"},n.a.createElement(R.a,null,n.a.createElement(z.a,{primary:this.props.t("components.search.noResults")}))),n.a.createElement("br",null),this.state.showDeviceData?n.a.createElement("table",{className:"device-table"},n.a.createElement("tbody",null,n.a.createElement("tr",null,n.a.createElement("td",null,this.props.t("table.model")),n.a.createElement("td",null,this.state.device.model)),n.a.createElement("tr",null,n.a.createElement("td",null,this.props.t("table.vendor")),n.a.createElement("td",null,this.state.device.vendor)),null===this.state.device.variant||""===this.state.device.variant?"":n.a.createElement("tr",null,n.a.createElement("td",null,this.props.t("table.variant")),n.a.createElement("td",null,this.state.device.variant)),this.state.device.images.map(function(a,t){return n.a.createElement("tr",{key:t},n.a.createElement("td",null,a.type),n.a.createElement("td",null,n.a.createElement("a",{href:"http://downloads.openwrt.org/snapshots/targets/"+e.state.device.target+"/"+e.state.device.subtarget+"/"+a.name},a.name)))}))):""))}}]),a}(n.a.Component),U=Object(O.c)()(Q),X=Object(F.a)(function(e){return{root:{padding:e.spacing(3,2)}}});function Y(){var e=X();return n.a.createElement(I.a,{style:{marginTop:"50px"}},n.a.createElement(k.a,{className:e.root,elevation:3},n.a.createElement(f.a,{variant:"h5",component:"h3"},"404 Page Not Found"),n.a.createElement(f.a,{component:"p"},"Please head to the home.")))}var Z=t(176),ee=Object(d.a)({palette:{primary:{main:"#3F51B5"},secondary:{main:"#009688"}}});var ae=function(){return n.a.createElement(o.a,{theme:ee},n.a.createElement(r.Suspense,{fallback:n.a.createElement(Z.a,null)},n.a.createElement("div",{className:"App"},n.a.createElement(T,null),n.a.createElement(s.a,null,n.a.createElement(l.c,null,n.a.createElement(l.a,{path:"",component:U}),n.a.createElement(l.a,{default:!0,component:Y}))))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var te=t(85),re=t.n(te),ne={en:{translation:t(86)},de:{translation:t(87)}};L.a.use(re.a).use(O.a).init({resources:ne,fallbackLng:"en",debug:!0,interpolation:{escapeValue:!1}});L.a;i.a.render(n.a.createElement(ae,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},21:function(e){e.exports={release_version:"SNAPSHOT",release_commit:"r10241+1-865e25e049",devices:{"tplink_archer-c5-v1":{device_id:"tplink_archer-c5-v1",supported_devices:["tplink,archer-c5-v1","archer-c5"],vendor:"TP-Link",model:"Archer C5",variant:"v1",target:"ath79",subtarget:"generic",images:[{type:"sysupgrade",name:"openwrt-ath79-generic-tplink_archer-c5-v1-squashfs-sysupgrade.bin",hash:"92e699c555d8b17423105f5d5fcf3faa6b9edd66f90480372aa5da69b0be5576"},{type:"factory",name:"openwrt-ath79-generic-tplink_archer-c5-v1-squashfs-factory.bin",hash:"e42a929f742e6ac141e277f676b86608ed8468afa3479f0f03a94138ff96ad42"}]},"tplink_archer-c7-v2":{device_id:"tplink_archer-c7-v2",supported_devices:["tplink,archer-c7-v2","archer-c7"],vendor:"TP-Link",model:"Archer C7",variant:"v2",target:"ath79",subtarget:"generic",images:[{type:"sysupgrade",name:"openwrt-ath79-generic-tplink_archer-c7-v2-squashfs-sysupgrade.bin",hash:"a9b49a62bbc5dbef0df90cb365d552a366760b8468c5feaed60d3c1845ab8d29"},{type:"factory",name:"openwrt-ath79-generic-tplink_archer-c7-v2-squashfs-factory.bin",hash:"6bea6065b621d5b34736c1394b08721bbe4efa932068bd4b724e9905d6dcb7d9"},{type:"factory-us",name:"openwrt-ath79-generic-tplink_archer-c7-v2-squashfs-factory-us.bin",hash:"20e8fc84bb315508874e3feb1734e315c003eed2a1294dcc6ab63050692126c5"},{type:"factory-eu",name:"openwrt-ath79-generic-tplink_archer-c7-v2-squashfs-factory-eu.bin",hash:"e7ec8fd5a563f0832531063de52e0c207fbedc305d452e6914328d36a9a364e6"}]},"tplink_tl-wdr4300":{device_id:"tplink_tl-wdr4300",supported_devices:["tplink,tl-wdr4300","tl-wdr4300"],vendor:"TP-Link",model:"TL-WDR4300",variant:"",target:"ath79",subtarget:"generic",images:[{type:"sysupgrade",name:"openwrt-ath79-generic-tplink_tl-wdr4300-squashfs-sysupgrade.bin",hash:"45b4f33e7f0c357dc61166032bf40891458ee9941e443daf896ae9b825639770"},{type:"factory",name:"openwrt-ath79-generic-tplink_tl-wdr4300-squashfs-factory.bin",hash:"21c0d11b7343f233f0e35dbf306c1269a0fcd602b0d26dbb5938c80e71e86a27"}]},"tplink_archer-c7-v4":{device_id:"tplink_archer-c7-v4",supported_devices:["tplink,archer-c7-v4","archer-c7-v4"],vendor:"TP-Link",model:"Archer C7",variant:"v4",target:"ath79",subtarget:"generic",images:[{type:"sysupgrade",name:"openwrt-ath79-generic-tplink_archer-c7-v4-squashfs-sysupgrade.bin",hash:"a0c9ea31608f35bcf88bd5090b721263d6f65396ecc23edaecbfb5ffae007a33"},{type:"factory",name:"openwrt-ath79-generic-tplink_archer-c7-v4-squashfs-factory.bin",hash:"7b44e8942a5ce5ceee04ac02e5cd7582c6e13653c8ce83adc5a60efca93bf25e"}]},"tplink_archer-c59-v1":{device_id:"tplink_archer-c59-v1",supported_devices:["tplink,archer-c59-v1","archer-c59-v1"],vendor:"TP-Link",model:"Archer C59",variant:"v1",target:"ath79",subtarget:"generic",images:[{type:"sysupgrade",name:"openwrt-ath79-generic-tplink_archer-c59-v1-squashfs-sysupgrade.bin",hash:"e0e6612dfbb961c62877cc347476d699e7f4b5aeca0355c468ac5716f3696b94"},{type:"factory",name:"openwrt-ath79-generic-tplink_archer-c59-v1-squashfs-factory.bin",hash:"99134ef23c69d055f45e20cfa638a287fc5182bec0825128d9cb0458471727d7"}]},"tplink_archer-c2-v3":{device_id:"tplink_archer-c2-v3",supported_devices:["tplink,archer-c2-v3"],vendor:"TP-Link",model:"Archer C2",variant:"v3",target:"ath79",subtarget:"generic",images:[{type:"sysupgrade",name:"openwrt-ath79-generic-tplink_archer-c2-v3-squashfs-sysupgrade.bin",hash:"fd213ce0adaf8ba6434862a208a520887f8d26c6d2a8145acce15d0e243b4578"},{type:"factory",name:"openwrt-ath79-generic-tplink_archer-c2-v3-squashfs-factory.bin",hash:"034a015d3fa00be116055ee11b2a2e7bbf8ac8bf4f26273dda49f2dcb959e3ff"}]},"tplink_archer-c6-v2":{device_id:"tplink_archer-c6-v2",supported_devices:["tplink,archer-c6-v2"],vendor:"TP-Link",model:"Archer C6",variant:"v2",target:"ath79",subtarget:"generic",images:[{type:"factory",name:"openwrt-ath79-generic-tplink_archer-c6-v2-squashfs-factory.bin",hash:"793473938124b55c9808e3d755fadf331dbc555e3e8d48506755b28a49260d2e"},{type:"sysupgrade",name:"openwrt-ath79-generic-tplink_archer-c6-v2-squashfs-sysupgrade.bin",hash:"ec130a2f5d3d3db5f883274584823e6018bb1d8f8f0c7177a0853cd70bc75186"}]},"tplink_archer-c7-v5":{device_id:"tplink_archer-c7-v5",supported_devices:["tplink,archer-c7-v5","archer-c7-v5"],vendor:"TP-Link",model:"Archer C7",variant:"v5",target:"ath79",subtarget:"generic",images:[{type:"sysupgrade",name:"openwrt-ath79-generic-tplink_archer-c7-v5-squashfs-sysupgrade.bin",hash:"cf673e3af5f9e985f30a3adf2c7f96e5210b036a4cc43a080c9f5c023e1bdd84"},{type:"factory",name:"openwrt-ath79-generic-tplink_archer-c7-v5-squashfs-factory.bin",hash:"523a5fe3a8616ecd52d5a5117b49f9f114c496f720fc7b8fc97c4f82bf077822"}]},"tplink_archer-c7-v1":{device_id:"tplink_archer-c7-v1",supported_devices:["tplink,archer-c7-v1","archer-c7"],vendor:"TP-Link",model:"Archer C7",variant:"v1",target:"ath79",subtarget:"generic",images:[{type:"sysupgrade",name:"openwrt-ath79-generic-tplink_archer-c7-v1-squashfs-sysupgrade.bin",hash:"13728d071e4c357ca3cbcad6064b26e0caec422191ddbc0cf109c5021bc0ed47"},{type:"factory",name:"openwrt-ath79-generic-tplink_archer-c7-v1-squashfs-factory.bin",hash:"8096c5a5decfa8af6e7195a49d71fbb3da02d1a014a553974bcd6dc59b64778c"}]},"tplink_archer-c58-v1":{device_id:"tplink_archer-c58-v1",supported_devices:["tplink,archer-c58-v1","archer-c58-v1"],vendor:"TP-Link",model:"Archer C58",variant:"v1",target:"ath79",subtarget:"generic",images:[{type:"factory",name:"openwrt-ath79-generic-tplink_archer-c58-v1-squashfs-factory.bin",hash:"a740142322a9c6e814b7c42398d47004c15db9f2aec9b913e8d9ad34e18a80ae"},{type:"sysupgrade",name:"openwrt-ath79-generic-tplink_archer-c58-v1-squashfs-sysupgrade.bin",hash:"cb36b50b646137ff05ed23ed7fbaabffeb032d0b5da214a3586d7b086088c17a"}]},"tplink_tl-wdr3600":{device_id:"tplink_tl-wdr3600",supported_devices:["tplink,tl-wdr3600","tl-wdr4300"],vendor:"TP-Link",model:"TL-WDR3600",variant:"",target:"ath79",subtarget:"generic",images:[{type:"sysupgrade",name:"openwrt-ath79-generic-tplink_tl-wdr3600-squashfs-sysupgrade.bin",hash:"fbbcbd9e1174026c001d002149a641db8ebeb459892eff442c975d9043bf2b64"},{type:"factory",name:"openwrt-ath79-generic-tplink_tl-wdr3600-squashfs-factory.bin",hash:"2d7120d2f4593d6e0a8d5d8164666aaa54c51bcbeef6f9c8c2ab1f2a75e7b728"}]},"tplink_tl-wdr4900-v2":{device_id:"tplink_tl-wdr4900-v2",supported_devices:["tplink,tl-wdr4900-v2"],vendor:"TP-Link",model:"TL-WDR4900",variant:"v2",target:"ath79",subtarget:"generic",images:[{type:"factory",name:"openwrt-ath79-generic-tplink_tl-wdr4900-v2-squashfs-factory.bin",hash:"f4b096db93eb4cc504d2b98972c8a638b14a811eb0643c1fdac40d1ca0e7ae33"},{type:"sysupgrade",name:"openwrt-ath79-generic-tplink_tl-wdr4900-v2-squashfs-sysupgrade.bin",hash:"d5286e54feca1a9ce1c2d4b5d6b05b027796b755a00550629741cb9318106d75"}]}}}},86:function(e){e.exports={title:"OpenWrt Firmware Selector Wizard",appIntro:{head:"Download OpenWrt firmware for your device!",para:"Please use the input below to download firmware for your device!"},components:{submit:"Submit",changeLanguage:"Change Language",select:{placeholder:"Select...",noOptions:"No options"},search:{label:"Search your device",noResults:"No results"}},table:{model:"Model",vendor:"Vendor",variant:"Variant"}}},87:function(e){e.exports={title:"OpenWrt Firmware Selector Wizard",appIntro:{head:"Laden Sie die OpenWrt-Firmware f\xfcr Ihr Ger\xe4t herunter!",para:"Bitte benutzen Sie den unten stehenden Eingang, um die Firmware f\xfcr Ihr Ger\xe4t herunterzuladen!"},components:{submit:"einreichen",changeLanguage:"Sprache \xe4ndern",select:{placeholder:"W\xe4hlen...",noOptions:"Keine Optionen"},search:{label:"Suchen Sie Ihr Ger\xe4t",noResults:"Keine Ergebnisse"}},table:{model:"Modell",vendor:"Verk\xe4ufer",variant:"Variante"}}},95:function(e,a,t){e.exports=t(130)}},[[95,1,2]]]);
//# sourceMappingURL=main.b1bbf5a9.chunk.js.map