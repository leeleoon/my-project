!function(k){"use strict";var R="ht",I=k[R],C=function(){return document},n=function(){return C().body},q=function($,b,p){$.style.setProperty(b,p,null)},J=function(S){return C().createElement(S)},A=function(){return J("div")},f=function(){var P=J("canvas");return P},m=function(r,p){q(r,"-webkit-transform",p),q(r,"-ms-transform",p),q(r,"transform",p)},u=function(C,K){q(C,"-webkit-transform-origin",K),q(C,"-ms-transform-origin",K),q(C,"transform-origin",K)},z=function(D,W){D.appendChild(W)},X=function(b,i){b.removeChild(i)},s=k.parseInt,B=I.Default,Z=B.eventListenerOptionsFalse,M=(B.eventListenerOptionsTrue,function(V,v,M,J){V.addEventListener(v,M,J?Z:Z)}),W=B.getInternal(),D=Math.PI,d="white-space",K="visibility",G="left",V="top",P="width",U="height",y="position",L="display",$="z-index",c="px",F="0 0",x="absolute",a="visible",r="hidden",l="none",E="block",h="nowrap",t="rgba(0, 0, 0, 0.005)";B.setImage("node_dragger","data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAN9JREFUeNrsV9sNhDAMKyzQVdgARmGzrMJNUFZhAh6nfkVcG9PQgHSR8lEksJs6pnGuLCimSRzAa0yyBK9O4gy8GokU+O0kJOAwiQYg0LP1xNYDW3+0CfBYNb7VOuN4LAGpiOaYUhFDas9F2NPHDELNENJqaHgBgSQJ3ufakfQJqckERcOiK+Ae1FGWBNKGh9oX5WPpLpdNYfffijbsxTHh7VKP7388n1g1h7OKUoUuyGpJakQEuhwkZAKcDXVOdWcrOrL/feBVBHI/q8fcjE1nA9PpyHQ+NJ2Qi8A3AQYAOtS27fCoRY0AAAAASUVORK5CYII=");var w=I.graph.GraphView.prototype,p=w._42;w.adjustHtmlNodeIndex=!0,w._42=function(g,e){if(p.call(this,g,e),this.adjustHtmlNodeIndex)for(var V=this.getDataModel()._datas._as,I=V.length,A=1,m=0;I>m;m++){var r=V[m];if(r instanceof S){var y=this.getDataUI(r);q(y.$2f,$,A+""),q(y.$3f,$,A+1+""),A+=2}}};var b=I.HtmlNodeUI=function(T,s){var N=this;b.superClass.constructor.call(N,T,s);var W=N.$2f=A(),P=N.$3f=f();q(W,y,x),q(W,K,r),q(W,d,h),P.draggable=!1,q(P,y,x),q(P,L,l),u(P,F),M(W,"change",function(R){var y=R.target,S=y.bind||y.getAttribute("bind"),W=y.type&&"checkbox"===y.type?y.checked:y.value,f=s.getContext();S&&f&&(f[S]=W,N.$4f=JSON.stringify(f))}),["mousedown","touchstart","keydown","mousewheel","DOMMouseScroll"].forEach(function(s){M(W,s,this.$9f.bind(this))},N)};B.def(b,W.ui().NodeUI,{_visible:!0,$11f:function(){var a=this,x=a.$3f,Y=a._data,_=Y.getDraggerImageWidth(),A=Y.getDraggerImageHeight(),P=Y.getDraggerImage(),c=W.initContext(x);c.beginPath(),W.setCanvas(x,_,A),W.translateAndScale(c,0,0,1),c.clearRect(0,0,_,A),B.drawImage(c,B.getImage(P),0,0,_,A),c.restore()},_80o:function(W){b.superClass._80o.call(this,W);var o=this,n=o._data,u=n._padding,p=2*u,i=o.$2f,N=o.$3f,Q=o.gv,v=Q.getZoom(),C=Q.getTranslateX(),F=Q.getTranslateY(),Z=Q.getView(),T=o._83o,I=n._width,e=n._height,O=T.position,f=T.rotation,j=(I-p)/n.$5f*v,H=(e-p)/n.$6f*v,d=o._html,B=n._html,h=n.getHtmlType();if("html"===h){var g=n.getContext()||{},X=o.$4f,_=n.$10f,M=JSON.stringify(g);d&&X&&d===B&&X===M||(o.$4f=M,o._html=B,i.innerHTML=_?_(g):B)}else if(null!=h){var k=n.getHtml();"ht"===h&&(k=k.getView()),d&&d===k&&i.contains(d)||(o._html=k,i.innerHTML="",z(i,k))}if(!i.parentNode){var S=Q.$1f;if(!S){var J=A();q(J,y,x),q(J,$,"0"),S=Q.$1f=J;var R=Q._canvas.nextSibling;R?Z.insertBefore(J,R):z(Z,J)}z(S,i),z(S,N),n.onContentInitialized&&n.onContentInitialized(i)}if(n._scalable){var w=n.$5f,Y=n.$6f;m(i,"rotate("+180*(f/D)+"deg) scale("+j+","+H+")"),q(i,P,""),q(i,U,""),q(i,G,(O.x-w/v/2)*v+C+c),q(i,V,(O.y-Y/v/2)*v+F+c)}else{var wf=s(i.style.width),yr=s(i.style.height),Fc=s((I-p)*v),xi=s((e-p)*v),Jn="100%",Fm=i.children[0];q(Fm,P,Jn),q(Fm,U,Jn),(wf!==Fc||yr!==xi)&&(q(i,P,Fc+c),q(i,U,xi+c),"ht"===h&&B.invalidate()),m(i,"rotate("+180*(f/D)+"deg)"),q(i,G,(O.x-Fc/v/2)*v+C+c),q(i,V,(O.y-xi/v/2)*v+F+c)}var rk=o.dragRect;Q.isMovable(n)&&Q.isSelected(n)&&rk?(W.save(),W.fillStyle=t,W.fillRect(rk.x,rk.y,rk.width,rk.height),W.restore(),q(N,G,rk.x*v+C+c),q(N,V,rk.y*v+F+c),m(N,"scale("+v+","+v+")"),q(N,L,E),o.$11f()):q(N,L,l),q(i,K,this._visible?a:r)},dispose:function(){var E=this.gv.$1f;this.$2f.parentNode===E&&E.removeChild(this.$2f),this.$3f.parentNode===E&&E.removeChild(this.$3f)},_84o:function(b){this._visible=b,q(this.$2f,K,b?a:r),q(this.$3f,L,b?E:l)},_3O:function(){var R=this,s=R.gv,U=R._data;b.superClass._3O.call(R);var C=U.getRect();s.isEditable(U)&&(R.dragRect={x:C.x+C.width+U._padding,y:C.y+10,width:U.getDraggerImageWidth(),height:U.getDraggerImageHeight()},R._68o(R.dragRect))},rectIntersects:function(F){var x=this._79o();return I.Default.intersection(x,F)?!0:void 0},$9f:function(P){var w=this.gv,F=this._data;w.sm().contains(F)&&P.stopPropagation()}});var S=I.HtmlNode=function(){S.superClass.constructor.call(this)};I.Default.def(S,I.Node,{ms_ac:["html","context","scalable","padding","draggerImage","draggerImageWidth","draggerImageHeight"],_padding:I.Default.isTouchable?12:6,_image:null,_scalable:!0,_draggerImage:"node_dragger",_draggerImageWidth:20,_draggerImageHeight:20,setHtml:function(C){var m=this,Z=m._html;m._html=C,"html"===m.getHtmlType()&&"Handlebars"in k&&(m.$10f=Handlebars.compile(C)),m.$13f(),m.fp("html",Z,C)},setContext:function(s){var k=this,B=k._context;k._context=s,k.fp("context",B,s),k.$13f()},setScalable:function(t){var P=this,j=P._scalable;P._scalable=t,P.fp("scalable",j,t),P.$13f()},getHtmlType:function(){var g=this._html;return g?"string"==typeof g?"html":g.getView?"ht":"dom":null},$13f:function(){var O=this,D=O._html,f=O.$10f;if(D){var C=A(),G=!1,P=O.getHtmlType();if(q(C,y,x),q(C,d,h),q(C,K,r),"html"===P?(C.innerHTML=f?f(O.getContext()||{}):D,G=!0):"ht"===P?(z(C,D.getView()),G=!0):"dom"===P&&(z(C,D),G=!0),G){var F=2*O._padding;z(n(),C),O.$5f=C.scrollWidth,O.$6f=C.scrollHeight,O._width=O.$5f+F,O._height=O.$6f+F,O._originWidth=O._width,O._originHeight=O._height,X(n(),C)}}},getUIClass:function(){return I.HtmlNodeUI}})}("undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:(0,eval)("this"),Object);