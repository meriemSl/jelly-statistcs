(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{38:function(e,t,a){e.exports=a(71)},43:function(e,t,a){},44:function(e,t,a){},71:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(22),c=a.n(r),s=(a(43),a(44),a(19)),o=a(15),i=a(4),u=a.n(i),m=a(13),d=a(8),h=a(9),b=a(11),E=a(10),p=a(12),g=a(1),v=a(18),f=a.n(v),C=[{value:"dashboard ",to:"/",icon:"home",LinkComponent:Object(o.f)(s.b),useExact:!0},{value:"liquidityProviders",to:"/liquidityProviders",icon:"check-square",LinkComponent:Object(o.f)(s.b),useExact:!0},{value:"liquidity ",to:"/liquidity",icon:"check-square",LinkComponent:Object(o.f)(s.b)}],y=function(e){function t(){var e,a;Object(d.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(a=Object(b.a)(this,(e=Object(E.a)(t)).call.apply(e,[this].concat(l)))).state={},a}return Object(p.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){return n.createElement(g.j.Wrapper,{headerProps:{href:"/",alt:"Tabler React",imageURL:"./images/jelly.png"},navProps:{itemsObjects:C},routerContextComponentType:Object(o.f)(g.i),footerProps:{links:[n.createElement("a",{href:"/"},"First Link"),n.createElement("a",{href:"/"},"Second Link"),n.createElement("a",{href:"/"},"Third Link")],copyright:n.createElement(n.Fragment,null,"Copyright \xa9 2020",n.createElement("a",{href:"."}," Jelly dashboard"),". Theme by All rights reserved."),nav:n.createElement(n.Fragment,null,n.createElement(g.d.Col,{auto:!0},n.createElement(g.f,{className:"list-inline list-inline-dots mb-0"},n.createElement(g.f.Item,{className:"list-inline-item"},n.createElement("a",{href:"./docs/index.html"},"Documentation")))))}},this.props.children)}}]),t}(n.Component),T=function(e){function t(e){var a;return Object(d.a)(this,t),(a=Object(b.a)(this,Object(E.a)(t).call(this,e))).state={prices:[],bitcoin:"",eth:"",dai:"",trx:"",ae:"",usdt:""},a}return Object(p.a)(t,e),Object(h.a)(t,[{key:"componentDidMount",value:function(){var e=Object(m.a)(u.a.mark(function e(){var t=this;return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.a.get("https://spacejelly.network/price/").then(function(e){console.log(e.data),t.setState({prices:e.data}),t.setState({bitcoin:Number(parseFloat(e.data.BTC.USDT).toFixed(1))}),t.setState({eth:Number(parseFloat(e.data.ETH.USDT).toFixed(1))}),t.setState({dai:Number(parseFloat(e.data.DAI.USDT).toFixed(1))}),t.setState({trx:Number(parseFloat(e.data.TRX.USDT).toFixed(2))}),t.setState({ae:Number(parseFloat(e.data.AE.USDT).toFixed(1))}),t.setState({usdt:Number(parseFloat(e.data.USDT.USDT).toFixed(1))}),console.log(t.state.prices)});case 2:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return n.createElement(y,null,n.createElement(g.g.Content,{title:"Dashboard"},n.createElement(g.d.Row,{cards:!0},n.createElement(g.d.Col,{width:6,sm:4,lg:2},n.createElement(g.k,{layout:1,movement:6,total:this.state.bitcoin,label:"price Bitcoin"})),n.createElement(g.d.Col,{width:6,sm:4,lg:2},n.createElement(g.k,{layout:1,movement:-3,total:this.state.eth,label:"ETH"})),n.createElement(g.d.Col,{width:6,sm:4,lg:2},n.createElement(g.k,{layout:1,movement:-2,total:this.state.dai,label:"DAI"})),n.createElement(g.d.Col,{width:6,sm:4,lg:2},n.createElement(g.k,{layout:1,movement:9,total:this.state.trx,label:"TRX"})),n.createElement(g.d.Col,{width:6,sm:4,lg:2},n.createElement(g.k,{layout:1,movement:3,total:this.state.ae,label:"AE"})),n.createElement(g.d.Col,{width:6,sm:4,lg:2},n.createElement(g.k,{layout:1,movement:-1,total:this.state.usdt,label:"USDT"})),n.createElement(g.d.Col,{lg:6})),n.createElement(g.d.Row,{cards:!0,deck:!0},n.createElement(g.d.Col,{width:12},n.createElement(g.a,null,n.createElement(g.l,{responsive:!0,highlightRowOnHover:!0,hasOutline:!0,verticalAlign:"center",cards:!0,className:"text-nowrap"},n.createElement(g.l.Header,null,n.createElement(g.l.Row,null,n.createElement(g.l.ColHeader,{alignContent:"center",className:"w-1"},n.createElement("i",{className:"icon-people"})),n.createElement(g.l.ColHeader,null,"User"),n.createElement(g.l.ColHeader,null,"Usage"),n.createElement(g.l.ColHeader,{alignContent:"center"},"Payment"),n.createElement(g.l.ColHeader,null,"Activity"),n.createElement(g.l.ColHeader,{alignContent:"center"},"Satisfaction"),n.createElement(g.l.ColHeader,{alignContent:"center"},n.createElement("i",{className:"icon-settings"})))),n.createElement(g.l.Body,null,n.createElement(g.l.Row,null,n.createElement(g.l.Col,null,n.createElement("div",null,"Elizabeth Martin"),n.createElement(g.m,{size:"sm",muted:!0},"Registered: Mar 19, 2018")),n.createElement(g.l.Col,null,n.createElement("div",{className:"clearfix"},n.createElement("div",{className:"float-left"},n.createElement("strong",null,"42%")),n.createElement("div",{className:"float-right"},n.createElement(g.m.Small,{muted:!0},"Jun 11, 2015 - Jul 10, 2015"))),n.createElement(g.h,{size:"xs"},n.createElement(g.h.Bar,{color:"yellow",width:42}))),n.createElement(g.l.Col,{alignContent:"center"},n.createElement(g.e,{payment:!0,name:"visa"})),n.createElement(g.l.Col,null,n.createElement(g.m,{size:"sm",muted:!0},"Last login"),n.createElement("div",null,"4 minutes ago")),n.createElement(g.l.Col,{alignContent:"center"},"42%"),n.createElement(g.l.Col,{alignContent:"center"},n.createElement(g.b,{trigger:n.createElement(g.b.Trigger,{icon:"more-vertical",toggle:!1}),position:"right",items:n.createElement(n.Fragment,null,n.createElement(g.b.Item,{icon:"tag"},"Action "),n.createElement(g.b.Item,{icon:"edit-2"},"Another action"," "),n.createElement(g.b.Item,{icon:"message-square"},"Something else here"),n.createElement(g.b.ItemDivider,null),n.createElement(g.b.Item,{icon:"link"}," ","Separated link"))})))))))),n.createElement(g.d.Row,null)))}}]),t}(n.Component),k=a(14),w=a(20),S=a.n(w),j=function(e){function t(e){var a;return Object(d.a)(this,t),(a=Object(b.a)(this,Object(E.a)(t).call(this,e))).state={value:"",balances:[],data:[]},a.handleChange=a.handleChange.bind(Object(k.a)(Object(k.a)(a))),a}return Object(p.a)(t,e),Object(h.a)(t,[{key:"handleChange",value:function(){var e=Object(m.a)(u.a.mark(function e(t){return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:e.prev=0,this.setState({value:t.target.value}),this.state.balances=[],e.t0=t.target.value,e.next="ETH"===e.t0?6:"BTC"===e.t0?10:"AE"===e.t0?15:19;break;case 6:return console.log("ETH"),this.state.balances.push([this.state.data.balances.ETH.address,parseFloat(this.state.data.balances.ETH.balanceShort)]),console.log(this.state.balances),e.abrupt("break",21);case 10:return console.log("btc"),this.state.balances.push([this.state.data.balances.BTC.address,parseFloat(this.state.data.balances.BTC.balanceShort)]),this.setState({balances:this.state.balances}),console.log(this.state.balances),e.abrupt("break",21);case 15:return console.log("AE"),this.state.balances.push([this.state.data.balances.AE.address,parseFloat(this.state.data.balances.AE.balanceShort)]),console.log(this.state.balances),e.abrupt("break",21);case 19:console.log("default"),this.state.balances.push([this.state.data.balances.ETH.balanceShort,parseFloat(this.state.data.balances.ETH.address)]);case 21:e.next=26;break;case 23:e.prev=23,e.t1=e.catch(0),console.log(e.t1);case 26:case"end":return e.stop()}},e,this,[[0,23]])}));return function(t){return e.apply(this,arguments)}}()},{key:"componentDidMount",value:function(){var e=Object(m.a)(u.a.mark(function e(){var t=this;return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.a.get("https://spacejelly.network/listener/provider/info").then(function(e){t.setState({data:e.data}),t.state.balances.push([t.state.data.balances.ETH.address,parseFloat(t.state.data.balances.ETH.balanceShort)]),t.setState({balances:t.state.balances})});case 2:console.log(this.state.balances);case 3:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return l.a.createElement(y,null,l.a.createElement(g.g.Content,{title:"Liquidity provider"},l.a.createElement(g.d.Row,{cards:!0},l.a.createElement(g.a,null,l.a.createElement(g.a.Header,null,l.a.createElement(g.a.Title,null,"Providers by tokens ")),l.a.createElement(g.a.Body,null,l.a.createElement(g.c.Group,{label:"Currency"},l.a.createElement(g.c.Select,{value:this.state.value,onChange:this.handleChange},l.a.createElement("option",{value:"ETH"},"ETH"),l.a.createElement("option",{value:"BTC"},"BTC"),l.a.createElement("option",{value:"AE"},"AE"))),l.a.createElement(S.a,{style:{height:"20rem"},data:{columns:this.state.balances,type:"pie"},legend:{show:!1},padding:{bottom:0,top:0}}))))))}}]),t}(l.a.Component),O=function(e){function t(e){var a;return Object(d.a)(this,t),(a=Object(b.a)(this,Object(E.a)(t).call(this,e))).state={balances:[],data:[]},a.handleChange=a.handleChange.bind(Object(k.a)(Object(k.a)(a))),a}return Object(p.a)(t,e),Object(h.a)(t,[{key:"handleChange",value:function(){var e=Object(m.a)(u.a.mark(function e(t){return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:try{this.setState({value:t.target.value})}catch(a){console.log(a)}case 1:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()},{key:"componentDidMount",value:function(){var e=Object(m.a)(u.a.mark(function e(){var t=this;return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.a.get("https://spacejelly.network/listener/provider/info").then(function(e){t.setState({data:e.data}),t.state.balances.push(["eth",e.data.balances.ETH.balanceShort*e.data.prices.ETH.USDT/.994]),t.state.balances.push(["dai",e.data.balances.DAI.balanceShort*e.data.prices.DAI.USDT/.994]),t.state.balances.push(["AE",e.data.balances.AE.balanceShort*e.data.prices.AE.USDT/.994]),t.state.balances.push(["BTC",e.data.balances.BTC.balanceShort*e.data.prices.BTC.USDT/.994]),t.setState({balances:t.state.balances})});case 2:console.log(this.state.balances);case 3:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return l.a.createElement(y,null,l.a.createElement(g.g.Content,null,l.a.createElement(g.d.Row,{cards:!0},l.a.createElement(g.a,null,l.a.createElement(g.a.Header,null,l.a.createElement(g.a.Title,null,"Liquidity value in dollar ")),l.a.createElement(g.a.Body,null,l.a.createElement(S.a,{style:{height:"20rem"},data:{columns:this.state.balances,type:"pie"},legend:{show:!1},padding:{bottom:0,top:0}}))))))}}]),t}(l.a.Component);a(70);var x=function(e){return n.createElement(n.StrictMode,null,n.createElement(s.a,null,n.createElement(o.c,null,n.createElement(o.a,{exact:!0,path:"/",component:T}),n.createElement(o.a,{exact:!0,path:"/liquidityProviders",component:j}),n.createElement(o.a,{exact:!0,path:"/liquidity",component:O}))))},H=document.getElementById("root");if(!H)throw new Error("Could not find root element to mount to!");c.a.render(l.a.createElement(x,null),H)}},[[38,1,2]]]);
//# sourceMappingURL=main.c42ce105.chunk.js.map