import{_ as e,l as o,G as i,k as n,H as p}from"../app.COpfheGB.js";import{p as g}from"./gitGraph-YCYPL57B.B4hPBT20.js";import"./framework.DZuLV8wC.js";import"./theme.Dndip7Bp.js";import"./baseUniq.CcrECuIz.js";import"./basePickBy.DpFtE_ox.js";import"./clone.CjYI2Fxy.js";var m={parse:e(async r=>{const a=await g("info",r);o.debug(a)},"parse")},v={version:p},d=e(()=>v.version,"getVersion"),c={getVersion:d},l=e((r,a,s)=>{o.debug(`rendering info diagram
`+r);const t=i(a);n(t,100,400,!0),t.append("g").append("text").attr("x",100).attr("y",40).attr("class","version").attr("font-size",32).style("text-anchor","middle").text(`v${s}`)},"draw"),f={draw:l},D={parser:m,db:c,renderer:f};export{D as diagram};
