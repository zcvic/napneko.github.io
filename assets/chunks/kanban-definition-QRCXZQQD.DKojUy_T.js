import{_ as c,l as te,d as W,G as fe,ag as ye,ah as be,ai as me,ac as _e,B as Y,i as F,r as Ee,J as ke,ad as Se,ae as le,af as ce}from"../app.DW9yaZv1.js";import"./framework.DZuLV8wC.js";import"./theme.ByDL__NK.js";var $=function(){var t=c(function(_,s,n,a){for(n=n||{},a=_.length;a--;n[_[a]]=s);return n},"o"),g=[1,4],d=[1,13],r=[1,12],p=[1,15],E=[1,16],f=[1,20],h=[1,19],L=[6,7,8],C=[1,26],w=[1,24],N=[1,25],i=[6,7,11],M=[1,31],x=[6,7,11,24],P=[1,6,13,16,17,20,23],U=[1,35],j=[1,36],A=[1,6,7,11,13,16,17,20,23],H=[1,38],B={trace:c(function(){},"trace"),yy:{},symbols_:{error:2,start:3,mindMap:4,spaceLines:5,SPACELINE:6,NL:7,KANBAN:8,document:9,stop:10,EOF:11,statement:12,SPACELIST:13,node:14,shapeData:15,ICON:16,CLASS:17,nodeWithId:18,nodeWithoutId:19,NODE_DSTART:20,NODE_DESCR:21,NODE_DEND:22,NODE_ID:23,SHAPE_DATA:24,$accept:0,$end:1},terminals_:{2:"error",6:"SPACELINE",7:"NL",8:"KANBAN",11:"EOF",13:"SPACELIST",16:"ICON",17:"CLASS",20:"NODE_DSTART",21:"NODE_DESCR",22:"NODE_DEND",23:"NODE_ID",24:"SHAPE_DATA"},productions_:[0,[3,1],[3,2],[5,1],[5,2],[5,2],[4,2],[4,3],[10,1],[10,1],[10,1],[10,2],[10,2],[9,3],[9,2],[12,3],[12,2],[12,2],[12,2],[12,1],[12,2],[12,1],[12,1],[12,1],[12,1],[14,1],[14,1],[19,3],[18,1],[18,4],[15,2],[15,1]],performAction:c(function(s,n,a,o,u,e,V){var l=e.length-1;switch(u){case 6:case 7:return o;case 8:o.getLogger().trace("Stop NL ");break;case 9:o.getLogger().trace("Stop EOF ");break;case 11:o.getLogger().trace("Stop NL2 ");break;case 12:o.getLogger().trace("Stop EOF2 ");break;case 15:o.getLogger().info("Node: ",e[l-1].id),o.addNode(e[l-2].length,e[l-1].id,e[l-1].descr,e[l-1].type,e[l]);break;case 16:o.getLogger().info("Node: ",e[l].id),o.addNode(e[l-1].length,e[l].id,e[l].descr,e[l].type);break;case 17:o.getLogger().trace("Icon: ",e[l]),o.decorateNode({icon:e[l]});break;case 18:case 23:o.decorateNode({class:e[l]});break;case 19:o.getLogger().trace("SPACELIST");break;case 20:o.getLogger().trace("Node: ",e[l-1].id),o.addNode(0,e[l-1].id,e[l-1].descr,e[l-1].type,e[l]);break;case 21:o.getLogger().trace("Node: ",e[l].id),o.addNode(0,e[l].id,e[l].descr,e[l].type);break;case 22:o.decorateNode({icon:e[l]});break;case 27:o.getLogger().trace("node found ..",e[l-2]),this.$={id:e[l-1],descr:e[l-1],type:o.getType(e[l-2],e[l])};break;case 28:this.$={id:e[l],descr:e[l],type:0};break;case 29:o.getLogger().trace("node found ..",e[l-3]),this.$={id:e[l-3],descr:e[l-1],type:o.getType(e[l-2],e[l])};break;case 30:this.$=e[l-1]+e[l];break;case 31:this.$=e[l];break}},"anonymous"),table:[{3:1,4:2,5:3,6:[1,5],8:g},{1:[3]},{1:[2,1]},{4:6,6:[1,7],7:[1,8],8:g},{6:d,7:[1,10],9:9,12:11,13:r,14:14,16:p,17:E,18:17,19:18,20:f,23:h},t(L,[2,3]),{1:[2,2]},t(L,[2,4]),t(L,[2,5]),{1:[2,6],6:d,12:21,13:r,14:14,16:p,17:E,18:17,19:18,20:f,23:h},{6:d,9:22,12:11,13:r,14:14,16:p,17:E,18:17,19:18,20:f,23:h},{6:C,7:w,10:23,11:N},t(i,[2,24],{18:17,19:18,14:27,16:[1,28],17:[1,29],20:f,23:h}),t(i,[2,19]),t(i,[2,21],{15:30,24:M}),t(i,[2,22]),t(i,[2,23]),t(x,[2,25]),t(x,[2,26]),t(x,[2,28],{20:[1,32]}),{21:[1,33]},{6:C,7:w,10:34,11:N},{1:[2,7],6:d,12:21,13:r,14:14,16:p,17:E,18:17,19:18,20:f,23:h},t(P,[2,14],{7:U,11:j}),t(A,[2,8]),t(A,[2,9]),t(A,[2,10]),t(i,[2,16],{15:37,24:M}),t(i,[2,17]),t(i,[2,18]),t(i,[2,20],{24:H}),t(x,[2,31]),{21:[1,39]},{22:[1,40]},t(P,[2,13],{7:U,11:j}),t(A,[2,11]),t(A,[2,12]),t(i,[2,15],{24:H}),t(x,[2,30]),{22:[1,41]},t(x,[2,27]),t(x,[2,29])],defaultActions:{2:[2,1],6:[2,2]},parseError:c(function(s,n){if(n.recoverable)this.trace(s);else{var a=new Error(s);throw a.hash=n,a}},"parseError"),parse:c(function(s){var n=this,a=[0],o=[],u=[null],e=[],V=this.table,l="",z=0,ie=0,ue=2,re=1,ge=e.slice.call(arguments,1),b=Object.create(this.lexer),T={yy:{}};for(var J in this.yy)Object.prototype.hasOwnProperty.call(this.yy,J)&&(T.yy[J]=this.yy[J]);b.setInput(s,T.yy),T.yy.lexer=b,T.yy.parser=this,typeof b.yylloc>"u"&&(b.yylloc={});var q=b.yylloc;e.push(q);var de=b.options&&b.options.ranges;typeof T.yy.parseError=="function"?this.parseError=T.yy.parseError:this.parseError=Object.getPrototypeOf(this).parseError;function pe(S){a.length=a.length-2*S,u.length=u.length-S,e.length=e.length-S}c(pe,"popStack");function ae(){var S;return S=o.pop()||b.lex()||re,typeof S!="number"&&(S instanceof Array&&(o=S,S=o.pop()),S=n.symbols_[S]||S),S}c(ae,"lex");for(var k,R,v,Q,G={},X,I,oe,K;;){if(R=a[a.length-1],this.defaultActions[R]?v=this.defaultActions[R]:((k===null||typeof k>"u")&&(k=ae()),v=V[R]&&V[R][k]),typeof v>"u"||!v.length||!v[0]){var Z="";K=[];for(X in V[R])this.terminals_[X]&&X>ue&&K.push("'"+this.terminals_[X]+"'");b.showPosition?Z="Parse error on line "+(z+1)+`:
`+b.showPosition()+`
Expecting `+K.join(", ")+", got '"+(this.terminals_[k]||k)+"'":Z="Parse error on line "+(z+1)+": Unexpected "+(k==re?"end of input":"'"+(this.terminals_[k]||k)+"'"),this.parseError(Z,{text:b.match,token:this.terminals_[k]||k,line:b.yylineno,loc:q,expected:K})}if(v[0]instanceof Array&&v.length>1)throw new Error("Parse Error: multiple actions possible at state: "+R+", token: "+k);switch(v[0]){case 1:a.push(k),u.push(b.yytext),e.push(b.yylloc),a.push(v[1]),k=null,ie=b.yyleng,l=b.yytext,z=b.yylineno,q=b.yylloc;break;case 2:if(I=this.productions_[v[1]][1],G.$=u[u.length-I],G._$={first_line:e[e.length-(I||1)].first_line,last_line:e[e.length-1].last_line,first_column:e[e.length-(I||1)].first_column,last_column:e[e.length-1].last_column},de&&(G._$.range=[e[e.length-(I||1)].range[0],e[e.length-1].range[1]]),Q=this.performAction.apply(G,[l,ie,z,T.yy,v[1],u,e].concat(ge)),typeof Q<"u")return Q;I&&(a=a.slice(0,-1*I*2),u=u.slice(0,-1*I),e=e.slice(0,-1*I)),a.push(this.productions_[v[1]][0]),u.push(G.$),e.push(G._$),oe=V[a[a.length-2]][a[a.length-1]],a.push(oe);break;case 3:return!0}}return!0},"parse")},m=function(){var _={EOF:1,parseError:c(function(n,a){if(this.yy.parser)this.yy.parser.parseError(n,a);else throw new Error(n)},"parseError"),setInput:c(function(s,n){return this.yy=n||this.yy||{},this._input=s,this._more=this._backtrack=this.done=!1,this.yylineno=this.yyleng=0,this.yytext=this.matched=this.match="",this.conditionStack=["INITIAL"],this.yylloc={first_line:1,first_column:0,last_line:1,last_column:0},this.options.ranges&&(this.yylloc.range=[0,0]),this.offset=0,this},"setInput"),input:c(function(){var s=this._input[0];this.yytext+=s,this.yyleng++,this.offset++,this.match+=s,this.matched+=s;var n=s.match(/(?:\r\n?|\n).*/g);return n?(this.yylineno++,this.yylloc.last_line++):this.yylloc.last_column++,this.options.ranges&&this.yylloc.range[1]++,this._input=this._input.slice(1),s},"input"),unput:c(function(s){var n=s.length,a=s.split(/(?:\r\n?|\n)/g);this._input=s+this._input,this.yytext=this.yytext.substr(0,this.yytext.length-n),this.offset-=n;var o=this.match.split(/(?:\r\n?|\n)/g);this.match=this.match.substr(0,this.match.length-1),this.matched=this.matched.substr(0,this.matched.length-1),a.length-1&&(this.yylineno-=a.length-1);var u=this.yylloc.range;return this.yylloc={first_line:this.yylloc.first_line,last_line:this.yylineno+1,first_column:this.yylloc.first_column,last_column:a?(a.length===o.length?this.yylloc.first_column:0)+o[o.length-a.length].length-a[0].length:this.yylloc.first_column-n},this.options.ranges&&(this.yylloc.range=[u[0],u[0]+this.yyleng-n]),this.yyleng=this.yytext.length,this},"unput"),more:c(function(){return this._more=!0,this},"more"),reject:c(function(){if(this.options.backtrack_lexer)this._backtrack=!0;else return this.parseError("Lexical error on line "+(this.yylineno+1)+`. You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).
`+this.showPosition(),{text:"",token:null,line:this.yylineno});return this},"reject"),less:c(function(s){this.unput(this.match.slice(s))},"less"),pastInput:c(function(){var s=this.matched.substr(0,this.matched.length-this.match.length);return(s.length>20?"...":"")+s.substr(-20).replace(/\n/g,"")},"pastInput"),upcomingInput:c(function(){var s=this.match;return s.length<20&&(s+=this._input.substr(0,20-s.length)),(s.substr(0,20)+(s.length>20?"...":"")).replace(/\n/g,"")},"upcomingInput"),showPosition:c(function(){var s=this.pastInput(),n=new Array(s.length+1).join("-");return s+this.upcomingInput()+`
`+n+"^"},"showPosition"),test_match:c(function(s,n){var a,o,u;if(this.options.backtrack_lexer&&(u={yylineno:this.yylineno,yylloc:{first_line:this.yylloc.first_line,last_line:this.last_line,first_column:this.yylloc.first_column,last_column:this.yylloc.last_column},yytext:this.yytext,match:this.match,matches:this.matches,matched:this.matched,yyleng:this.yyleng,offset:this.offset,_more:this._more,_input:this._input,yy:this.yy,conditionStack:this.conditionStack.slice(0),done:this.done},this.options.ranges&&(u.yylloc.range=this.yylloc.range.slice(0))),o=s[0].match(/(?:\r\n?|\n).*/g),o&&(this.yylineno+=o.length),this.yylloc={first_line:this.yylloc.last_line,last_line:this.yylineno+1,first_column:this.yylloc.last_column,last_column:o?o[o.length-1].length-o[o.length-1].match(/\r?\n?/)[0].length:this.yylloc.last_column+s[0].length},this.yytext+=s[0],this.match+=s[0],this.matches=s,this.yyleng=this.yytext.length,this.options.ranges&&(this.yylloc.range=[this.offset,this.offset+=this.yyleng]),this._more=!1,this._backtrack=!1,this._input=this._input.slice(s[0].length),this.matched+=s[0],a=this.performAction.call(this,this.yy,this,n,this.conditionStack[this.conditionStack.length-1]),this.done&&this._input&&(this.done=!1),a)return a;if(this._backtrack){for(var e in u)this[e]=u[e];return!1}return!1},"test_match"),next:c(function(){if(this.done)return this.EOF;this._input||(this.done=!0);var s,n,a,o;this._more||(this.yytext="",this.match="");for(var u=this._currentRules(),e=0;e<u.length;e++)if(a=this._input.match(this.rules[u[e]]),a&&(!n||a[0].length>n[0].length)){if(n=a,o=e,this.options.backtrack_lexer){if(s=this.test_match(a,u[e]),s!==!1)return s;if(this._backtrack){n=!1;continue}else return!1}else if(!this.options.flex)break}return n?(s=this.test_match(n,u[o]),s!==!1?s:!1):this._input===""?this.EOF:this.parseError("Lexical error on line "+(this.yylineno+1)+`. Unrecognized text.
`+this.showPosition(),{text:"",token:null,line:this.yylineno})},"next"),lex:c(function(){var n=this.next();return n||this.lex()},"lex"),begin:c(function(n){this.conditionStack.push(n)},"begin"),popState:c(function(){var n=this.conditionStack.length-1;return n>0?this.conditionStack.pop():this.conditionStack[0]},"popState"),_currentRules:c(function(){return this.conditionStack.length&&this.conditionStack[this.conditionStack.length-1]?this.conditions[this.conditionStack[this.conditionStack.length-1]].rules:this.conditions.INITIAL.rules},"_currentRules"),topState:c(function(n){return n=this.conditionStack.length-1-Math.abs(n||0),n>=0?this.conditionStack[n]:"INITIAL"},"topState"),pushState:c(function(n){this.begin(n)},"pushState"),stateStackSize:c(function(){return this.conditionStack.length},"stateStackSize"),options:{"case-insensitive":!0},performAction:c(function(n,a,o,u){switch(o){case 0:return this.pushState("shapeData"),a.yytext="",24;case 1:return this.pushState("shapeDataStr"),24;case 2:return this.popState(),24;case 3:const e=/\n\s*/g;return a.yytext=a.yytext.replace(e,"<br/>"),24;case 4:return 24;case 5:this.popState();break;case 6:return n.getLogger().trace("Found comment",a.yytext),6;case 7:return 8;case 8:this.begin("CLASS");break;case 9:return this.popState(),17;case 10:this.popState();break;case 11:n.getLogger().trace("Begin icon"),this.begin("ICON");break;case 12:return n.getLogger().trace("SPACELINE"),6;case 13:return 7;case 14:return 16;case 15:n.getLogger().trace("end icon"),this.popState();break;case 16:return n.getLogger().trace("Exploding node"),this.begin("NODE"),20;case 17:return n.getLogger().trace("Cloud"),this.begin("NODE"),20;case 18:return n.getLogger().trace("Explosion Bang"),this.begin("NODE"),20;case 19:return n.getLogger().trace("Cloud Bang"),this.begin("NODE"),20;case 20:return this.begin("NODE"),20;case 21:return this.begin("NODE"),20;case 22:return this.begin("NODE"),20;case 23:return this.begin("NODE"),20;case 24:return 13;case 25:return 23;case 26:return 11;case 27:this.begin("NSTR2");break;case 28:return"NODE_DESCR";case 29:this.popState();break;case 30:n.getLogger().trace("Starting NSTR"),this.begin("NSTR");break;case 31:return n.getLogger().trace("description:",a.yytext),"NODE_DESCR";case 32:this.popState();break;case 33:return this.popState(),n.getLogger().trace("node end ))"),"NODE_DEND";case 34:return this.popState(),n.getLogger().trace("node end )"),"NODE_DEND";case 35:return this.popState(),n.getLogger().trace("node end ...",a.yytext),"NODE_DEND";case 36:return this.popState(),n.getLogger().trace("node end (("),"NODE_DEND";case 37:return this.popState(),n.getLogger().trace("node end (-"),"NODE_DEND";case 38:return this.popState(),n.getLogger().trace("node end (-"),"NODE_DEND";case 39:return this.popState(),n.getLogger().trace("node end (("),"NODE_DEND";case 40:return this.popState(),n.getLogger().trace("node end (("),"NODE_DEND";case 41:return n.getLogger().trace("Long description:",a.yytext),21;case 42:return n.getLogger().trace("Long description:",a.yytext),21}},"anonymous"),rules:[/^(?:@\{)/i,/^(?:["])/i,/^(?:["])/i,/^(?:[^\"]+)/i,/^(?:[^}^"]+)/i,/^(?:\})/i,/^(?:\s*%%.*)/i,/^(?:kanban\b)/i,/^(?::::)/i,/^(?:.+)/i,/^(?:\n)/i,/^(?:::icon\()/i,/^(?:[\s]+[\n])/i,/^(?:[\n]+)/i,/^(?:[^\)]+)/i,/^(?:\))/i,/^(?:-\))/i,/^(?:\(-)/i,/^(?:\)\))/i,/^(?:\))/i,/^(?:\(\()/i,/^(?:\{\{)/i,/^(?:\()/i,/^(?:\[)/i,/^(?:[\s]+)/i,/^(?:[^\(\[\n\)\{\}@]+)/i,/^(?:$)/i,/^(?:["][`])/i,/^(?:[^`"]+)/i,/^(?:[`]["])/i,/^(?:["])/i,/^(?:[^"]+)/i,/^(?:["])/i,/^(?:[\)]\))/i,/^(?:[\)])/i,/^(?:[\]])/i,/^(?:\}\})/i,/^(?:\(-)/i,/^(?:-\))/i,/^(?:\(\()/i,/^(?:\()/i,/^(?:[^\)\]\(\}]+)/i,/^(?:.+(?!\(\())/i],conditions:{shapeDataEndBracket:{rules:[],inclusive:!1},shapeDataStr:{rules:[2,3],inclusive:!1},shapeData:{rules:[1,4,5],inclusive:!1},CLASS:{rules:[9,10],inclusive:!1},ICON:{rules:[14,15],inclusive:!1},NSTR2:{rules:[28,29],inclusive:!1},NSTR:{rules:[31,32],inclusive:!1},NODE:{rules:[27,30,33,34,35,36,37,38,39,40,41,42],inclusive:!1},INITIAL:{rules:[0,6,7,8,11,12,13,16,17,18,19,20,21,22,23,24,25,26],inclusive:!0}}};return _}();B.lexer=m;function O(){this.yy={}}return c(O,"Parser"),O.prototype=B,B.Parser=O,new O}();$.parser=$;var Ne=$,D=[],ne=[],ee=0,se={},xe=c(()=>{D=[],ne=[],ee=0,se={}},"clear"),ve=c(t=>{if(D.length===0)return null;const g=D[0].level;let d=null;for(let r=D.length-1;r>=0;r--)if(D[r].level===g&&!d&&(d=D[r]),D[r].level<g)throw new Error('Items without section detected, found section ("'+D[r].label+'")');return t===(d==null?void 0:d.level)?null:d},"getSection"),he=c(function(){return ne},"getSections"),De=c(function(){const t=[],g=[],d=he(),r=W();for(const p of d){const E={id:p.id,label:F(p.label??"",r),isGroup:!0,ticket:p.ticket,shape:"kanbanSection",level:p.level,look:r.look};g.push(E);const f=D.filter(h=>h.parentId===p.id);for(const h of f){const L={id:h.id,parentId:p.id,label:F(h.label??"",r),isGroup:!1,ticket:h==null?void 0:h.ticket,priority:h==null?void 0:h.priority,assigned:h==null?void 0:h.assigned,icon:h==null?void 0:h.icon,shape:"kanbanItem",level:h.level,rx:5,ry:5,cssStyles:["text-align: left"]};g.push(L)}}return{nodes:g,edges:t,other:{},config:W()}},"getData"),Le=c((t,g,d,r,p)=>{var C,w;const E=W();let f=((C=E.mindmap)==null?void 0:C.padding)??Y.mindmap.padding;switch(r){case y.ROUNDED_RECT:case y.RECT:case y.HEXAGON:f*=2}const h={id:F(g,E)||"kbn"+ee++,level:t,label:F(d,E),width:((w=E.mindmap)==null?void 0:w.maxNodeWidth)??Y.mindmap.maxNodeWidth,padding:f,isGroup:!1};if(p!==void 0){let N;p.includes(`
`)?N=p+`
`:N=`{
`+p+`
}`;const i=Ee(N,{schema:ke});if(i.shape&&(i.shape!==i.shape.toLowerCase()||i.shape.includes("_")))throw new Error(`No such shape: ${i.shape}. Shape names should be lowercase.`);i!=null&&i.shape&&i.shape==="kanbanItem"&&(h.shape=i==null?void 0:i.shape),i!=null&&i.label&&(h.label=i==null?void 0:i.label),i!=null&&i.icon&&(h.icon=i==null?void 0:i.icon.toString()),i!=null&&i.assigned&&(h.assigned=i==null?void 0:i.assigned.toString()),i!=null&&i.ticket&&(h.ticket=i==null?void 0:i.ticket.toString()),i!=null&&i.priority&&(h.priority=i==null?void 0:i.priority)}const L=ve(t);L?h.parentId=L.id||"kbn"+ee++:ne.push(h),D.push(h)},"addNode"),y={DEFAULT:0,NO_BORDER:0,ROUNDED_RECT:1,RECT:2,CIRCLE:3,CLOUD:4,BANG:5,HEXAGON:6},Oe=c((t,g)=>{switch(te.debug("In get type",t,g),t){case"[":return y.RECT;case"(":return g===")"?y.ROUNDED_RECT:y.CLOUD;case"((":return y.CIRCLE;case")":return y.CLOUD;case"))":return y.BANG;case"{{":return y.HEXAGON;default:return y.DEFAULT}},"getType"),Ie=c((t,g)=>{se[t]=g},"setElementForId"),Ce=c(t=>{if(!t)return;const g=W(),d=D[D.length-1];t.icon&&(d.icon=F(t.icon,g)),t.class&&(d.cssClasses=F(t.class,g))},"decorateNode"),we=c(t=>{switch(t){case y.DEFAULT:return"no-border";case y.RECT:return"rect";case y.ROUNDED_RECT:return"rounded-rect";case y.CIRCLE:return"circle";case y.CLOUD:return"cloud";case y.BANG:return"bang";case y.HEXAGON:return"hexgon";default:return"no-border"}},"type2Str"),Ae=c(()=>te,"getLogger"),Te=c(t=>se[t],"getElementById"),Re={clear:xe,addNode:Le,getSections:he,getData:De,nodeType:y,getType:Oe,setElementForId:Ie,decorateNode:Ce,type2Str:we,getLogger:Ae,getElementById:Te},Pe=Re,Be=c(async(t,g,d,r)=>{var U,j,A,H,B;te.debug(`Rendering kanban diagram
`+t);const E=r.db.getData(),f=W();f.htmlLabels=!1;const h=fe(g),L=h.append("g");L.attr("class","sections");const C=h.append("g");C.attr("class","items");const w=E.nodes.filter(m=>m.isGroup);let N=0;const i=10,M=[];let x=25;for(const m of w){const O=((U=f==null?void 0:f.kanban)==null?void 0:U.sectionWidth)||200;N=N+1,m.x=O*N+(N-1)*i/2,m.width=O,m.y=0,m.height=O*3,m.rx=5,m.ry=5,m.cssClasses=m.cssClasses+" section-"+N;const _=await ye(L,m);x=Math.max(x,(j=_==null?void 0:_.labelBBox)==null?void 0:j.height),M.push(_)}let P=0;for(const m of w){const O=M[P];P=P+1;const _=((A=f==null?void 0:f.kanban)==null?void 0:A.sectionWidth)||200,s=-_*3/2+x;let n=s;const a=E.nodes.filter(e=>e.parentId===m.id);for(const e of a){if(e.isGroup)throw new Error("Groups within groups are not allowed in Kanban diagrams");e.x=m.x,e.width=_-1.5*i;const l=(await be(C,e,{config:f})).node().getBBox();e.y=n+l.height/2,await me(e),n=e.y+l.height/2+i/2}const o=O.cluster.select("rect"),u=Math.max(n-s+3*i,50)+(x-25);o.attr("height",u)}_e(void 0,h,((H=f.mindmap)==null?void 0:H.padding)??Y.kanban.padding,((B=f.mindmap)==null?void 0:B.useMaxWidth)??Y.kanban.useMaxWidth)},"draw"),Ve={draw:Be},Ge=c(t=>{let g="";for(let r=0;r<t.THEME_COLOR_LIMIT;r++)t["lineColor"+r]=t["lineColor"+r]||t["cScaleInv"+r],Se(t["lineColor"+r])?t["lineColor"+r]=le(t["lineColor"+r],20):t["lineColor"+r]=ce(t["lineColor"+r],20);const d=c((r,p)=>t.darkMode?ce(r,p):le(r,p),"adjuster");for(let r=0;r<t.THEME_COLOR_LIMIT;r++){const p=""+(17-3*r);g+=`
    .section-${r-1} rect, .section-${r-1} path, .section-${r-1} circle, .section-${r-1} polygon, .section-${r-1} path  {
      fill: ${d(t["cScale"+r],10)};
      stroke: ${d(t["cScale"+r],10)};

    }
    .section-${r-1} text {
     fill: ${t["cScaleLabel"+r]};
    }
    .node-icon-${r-1} {
      font-size: 40px;
      color: ${t["cScaleLabel"+r]};
    }
    .section-edge-${r-1}{
      stroke: ${t["cScale"+r]};
    }
    .edge-depth-${r-1}{
      stroke-width: ${p};
    }
    .section-${r-1} line {
      stroke: ${t["cScaleInv"+r]} ;
      stroke-width: 3;
    }

    .disabled, .disabled circle, .disabled text {
      fill: lightgray;
    }
    .disabled text {
      fill: #efefef;
    }

  .node rect,
  .node circle,
  .node ellipse,
  .node polygon,
  .node path {
    fill: ${t.background};
    stroke: ${t.nodeBorder};
    stroke-width: 1px;
  }

  .kanban-ticket-link {
    fill: ${t.background};
    stroke: ${t.nodeBorder};
    text-decoration: underline;
  }
    `}return g},"genSections"),Fe=c(t=>`
  .edge {
    stroke-width: 3;
  }
  ${Ge(t)}
  .section-root rect, .section-root path, .section-root circle, .section-root polygon  {
    fill: ${t.git0};
  }
  .section-root text {
    fill: ${t.gitBranchLabel0};
  }
  .icon-container {
    height:100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .edge {
    fill: none;
  }
  .cluster-label, .label {
    color: ${t.textColor};
    fill: ${t.textColor};
    }
  .kanban-label {
    dy: 1em;
    alignment-baseline: middle;
    text-anchor: middle;
    dominant-baseline: middle;
    text-align: center;
  }
`,"getStyles"),Me=Fe,We={db:Pe,renderer:Ve,parser:Ne,styles:Me};export{We as diagram};
