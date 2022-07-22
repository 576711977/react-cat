import{s as L,b as v,r as p,a as t,j as e,c as N,L as D,S as T,T as I,U as z,f as W,R as $,V as S,W as R}from"./index.e0f65b85.js";import{R as _,N as M}from"./index.006838cf.js";import{u as H,T as F,e as G,a as P,_ as V,S as K,P as O,C as q}from"./contest.d91d6e0c.js";import{S as U,c as X}from"./index.34c7d325.js";import{c as Y,T as J}from"./evaluate.363ce078.js";import{T as Q,E as Z,h as ee}from"./antdcom.4026c308.js";import"./use-props-value.99a2cc4d.js";const te=L.div`
    margin-top: 2rem;
    margin-bottom: 3.25rem;
    .buttom-btn {
        position: fixed;
        bottom: 0.5rem;
        left: 50%;
        transform: translateX(-50%);
        width: 17.5rem;
        height: 2.5rem;
        background-color: ${v["theme-color-red"]};
        color: white;
        font-size: 18px;
        border: none;
        border-radius: 1.25rem;
        z-index: 333;
    }
    .detail-top {
        /* background-color: ${a=>{if(a.id!==1){let i=Math.floor(Math.random()*256),o=Math.floor(Math.random()*256),c=Math.floor(Math.random()*256);return`rgb(${i}, ${o}, ${c})`}else return"#353453"}}; */
        background-color: ${a=>{switch(a.id){case"2":return"#453043";case"3":return"#393651";case"4":return"#2c3550";case"5":return"#433b3c";default:return"#353453"}}};
        /* background-color: #353453; #808080*/
        height: 16.5rem;
        padding: 0.7rem;
        .detail-contest {
            display: flex;
            img {
                height: 8rem; 
                border-radius: 0.4rem;
            }
            .detail-text {
                margin-left: 0.5rem;
                font-size: 18px;
                font-weight: 800;
                line-height: 1.2rem;
                color: white;
                position: relative;
                img {
                    width: 3.75rem;
                    height: 1.25rem;
                }
                p:last-child {
                    font-size: ${v["font-size-s"]};
                    font-weight: 400;
                    position: absolute;
                    bottom: 0;
                }
            }
        }
        .detail-date {
            width: 100%;
            height: 3.5rem;
            display: flex;
            border-radius: 0.4rem;
            background-color: #1b1b38;
            margin: 0.6rem 0;
            display: flex;
            justify-content: space-between;
            div {
                display: flex;
                justify-content: space-evenly;
                flex-direction: column;
                margin: 0 1rem;
                color: white;
                font-size: ${v["font-size-s"]};
            }
        }
        .server {
            margin: 0.8rem 0;
            span {
            margin-left: 0.75rem;
            font-size: 12px;
            color: #c9aa8f;
            img {
                width: 0.75rem;
                height: 0.75rem;
            }
        }
        }
        .detail-btn {
            display: flex;
            justify-content: space-between;
            div{
                display: flex;
                justify-content: center;
                align-items: center;
            }
            .box {
                width: 8.25rem;
                height: 2rem;
                border-radius: 0.4rem;
                background-color: #454561;
                .first-btn>i {
                    transition: all .5s;
                    color: ${a=>a.isWant?"#f33c39":"white"};
                    font-size: ${a=>a.isWant?"16px":"14px"}
                }
                .second-btn>i {
                    transition: all .5s;
                    color: ${a=>a.evaluate?"#f33c39":"white"};
                    font-size: ${a=>a.evaluate?"16px":"14px"}
                }
                span {
                    margin-left: 0.45rem;
                    color: white;
                    font-size: ${v["font-size-m"]};
                }
                img {
                    width: 0.75rem;
                    height: 0.75rem;
                }
            }
        }
    }
    
`,C=78;var ae=a=>{const{content:i,contestList:o,evaluate:c}=a,l=p.exports.useRef(),[m,h]=p.exports.useState("1"),[g,b]=p.exports.useState("0");console.log(i,c,"\u5566\u5566\u5566"),p.exports.useEffect(()=>{if(c.length&&!i[1].length){let n=c.reverse().slice(0,3);i.splice(1,0,n)}if(i[1].length){let n=c.reverse().slice(0,3);i.splice(1,1,n)}},[c]);const{run:E}=H(()=>{var f;let n=i[0].key,u=0;const r=(f=l==null?void 0:l.current)==null?void 0:f.getBoundingClientRect();if(!!r){u=r.top<=124?1:0,g!==u&&b(u);for(const d of i){const s=d.length?document.getElementById("anchor-pl"):document.getElementById(`anchor-${d.key}`);if(!s)continue;if((s==null?void 0:s.getBoundingClientRect()).top<=C)n=d.length?"pl":d.key;else break}h(n)}},{leading:!0,trailing:!0,wait:100});return p.exports.useEffect(()=>(window.scrollTo(0,0),window.addEventListener("scroll",E),()=>{window.removeEventListener("scroll",E)}),[]),t(Q,{appear:g,children:[e("div",{className:"tabsContainer",children:e(F,{className:"tabs",activeKey:m,onChange:n=>{var u;(u=document.getElementById(`anchor-${n}`))==null||u.scrollIntoView(),window.scrollTo({top:window.scrollY-C+3})},children:i.map(n=>n.length?e(F.Tab,{title:"\u8BC4\u8BBA",className:N({activefont:m=="pl"})},"pl"):e(F.Tab,{title:n.title,className:N({activefont:m==n.key})},n.key))})}),e("div",{className:"content",ref:l,children:i.map(n=>n.length?t("div",{children:[t("div",{className:"content-text",children:[e("h2",{style:{fontSize:"16px",fontWeight:"900",color:"black"},id:"anchor-pl",children:"\u8BC4\u8BBA"}),e(D,{to:"./evaluate",children:e("input",{type:"button",value:"\u5199\u8BC4\u4EF7",className:"content-btn"})}),n.map(u=>t(Z,{star:u.star,children:[t("div",{className:"evaluate-head",children:[e("div",{className:"evaluate-photo",children:e("img",{src:ee,alt:""})}),t("div",{className:"evaluate-message",children:[e("p",{children:"\u79BB\u6587\u4E0D\u95EE"}),e("p",{children:u.date})]})]}),e("span",{children:"\u6253\u5206"}),e(_,{readOnly:!0,allowHalf:!0,defaultValue:u.star,className:"rate-star"}),e("div",{className:"evaluate-body",children:u.text})]},u.onlyId)),e(D,{to:"./allevaluation",style:{textDecoration:"none"},children:e("p",{style:{textAlign:"center",color:"gray"},children:"\u67E5\u770B\u5168\u90E8  >"})})]}),e("div",{className:"separate"})]},"pl"):t("div",{children:[t("div",{className:"content-text",children:[e("h2",{style:{fontSize:"16px",fontWeight:"900",color:"black"},id:`anchor-${n.key}`,children:n.title}),n.text1&&n.text1.split("@").map((u,r)=>e("p",{children:u},u+r)),e("img",{src:n.img1,alt:""}),n.text2&&n.text2.split("@").map((u,r)=>e("p",{children:u},u+r)),e("img",{src:n.img2,alt:""}),n.text3&&n.text3.split("@").map((u,r)=>e("p",{children:u},u+r))]}),e("div",{className:"separate"})]},n.key))})]})};const w=a=>({type:T,data:a}),k=a=>({type:I,data:a}),ne=a=>({type:z,data:a}),ue=a=>i=>{(async()=>{let{data:o}=await G(a);i(k(!1)),i(w(o))})()};function ie(a){var x;const{detailData:i,contestList:o,enterLoading:c,isWant:l,evaluate:m,evaluateId:h}=a,{getDetailData:g,getContestList:b,changeDetailData:E,changeEnterLoading:n,changeIsWant:u,changeEvaluateId:r}=a,[f,d]=p.exports.useState(!1),{id:s}=S();p.exports.useEffect(()=>{r(s)},[s,m]);const B=R();p.exports.useEffect(()=>{var y;!s||((y=i[0])==null?void 0:y.id)!=s&&(n(!0),g(s),o.length==0&&b())},[s]);const A=()=>{B(-1)},j=()=>e(O,{visible:f,showCloseButton:!0,onClose:()=>{d(!1)},children:t("div",{className:"server-popup",children:[t("div",{className:"server-title",children:[e("h1",{children:"\u670D\u52A1\u4FDD\u969C"}),e("i",{className:"iconfont icon-guanbi",onClick:()=>d(!1)})]}),t("div",{className:"server-detail",children:[t("p",{children:[e("i",{className:"iconfont icon-cuowu"}),"\u4E0D\u652F\u6301\u9000"]}),e("span",{children:"\u7968\u54C1\u4E3A\u6709\u4EF7\u8BC1\u5238\uFF0C\u975E\u666E\u901A\u5546\u54C1\uFF0C\u5176\u80CC\u540E\u627F\u8F7D\u7684\u6587\u5316\u670D\u52A1\u5177\u6709\u65F6\u6548\u3001\u7279\u5B9A\u6027\uFF0C\u5982\u975E\u6D3B\u52A8\u53D8\u66F4\u3001\u53D6\u6D88\u7684\u539F\u56E0\u5916\uFF0C\u4E0D\u652F\u6301\u9000\u6362\u3002\u8D2D\u7968\u65F6\u8BF7\u52A1\u5FC5\u4ED4\u7EC6\u6838\u5BF9\u5E76\u8C28\u614E\u4E0B\u5355"})]}),t("div",{className:"server-detail",children:[t("p",{children:[e("i",{className:"iconfont icon-kongxinduigou"}),"\u5B98\u65B9\u7968"]}),e("span",{children:"\u732B\u773C\u6F14\u51FA\u7684\u7968\u6E90\u7531\u5B98\u65B9\u76F4\u4F9B"})]}),t("div",{className:"server-detail",children:[t("p",{children:[e("i",{className:"iconfont icon-kongxinduigou"}),"\u7535\u5B50\u7968"]}),e("span",{children:"\u8D2D\u4E70\u6210\u529F\u540E\uFF0C\u53EF\u51ED\u4E8C\u7EF4\u7801\u76F4\u63A5\u9A8C\u7968\u5165\u573A"})]}),t("div",{className:"server-detail",children:[t("p",{children:[e("i",{className:"iconfont icon-kongxinduigou"}),"\u7535\u5B50\u53D1\u7968"]}),e("span",{children:"\u8BE5\u9879\u76EE\u652F\u6301\u5F00\u5177\u7535\u5B50\u53D1\u7968\uFF0C\u53D1\u7968\u7531\u7B2C\u4E09\u65B9\u4E3B\u529E\u63D0\u4F9B\uFF0C\u8BF7\u5728\u6F14\u51FA\u7ED3\u675F\u524D\u901A\u8FC7\u8BA2\u5355\u8BE6\u60C5\u9875\u63D0\u4EA4\u53D1\u7968\u7533\u8BF7\uFF0C\u4E00\u822C\u6F14\u51FA\u7ED3\u675F\u540E1\u4E2A\u6708\u5DE6\u53F3\u5F00\u5177\u3002\u5F00\u7968\u65B9\u540D\u79F0\u4EE5\u5B9E\u9645\u6536\u5230\u7684\u53D1\u7968\u4E3A\u51C6\u3002"})]})]})});return t("div",{children:[e(M,{onBack:A,className:"navbar",children:"\u8BE6\u60C5"}),c&&e(U,{direction:"horizontal",wrap:!0,block:!0,style:{"--gap":"16px"},children:e(X,{className:"list-loading",style:{"--size":"40px"}})}),((x=i[0])==null?void 0:x.id)==s&&t(te,{isWant:l[s],evaluate:h.length,id:s,children:[t("div",{className:"detail-top",children:[t("div",{className:"detail-contest",children:[e(V,{placeholder:e(K,{animated:!0,style:{height:"8rem",width:"7rem"}}),children:e("img",{src:i[0].img,alt:""})}),t("div",{className:"detail-text",children:[e("img",{src:"https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/83485b8ef11243d680ca60262e588156~tplv-k3u1fbpfcp-watermark.image?"}),e("p",{children:i[0].text}),e("p",{children:"338\u5143"})]})]}),t("div",{className:"detail-date",children:[t("div",{children:[e("p",{children:i[0].date}),e("p",{children:i[0].pos})]}),e("img",{style:{width:"1rem",height:"1.8rem",marginTop:"1rem",marginRight:"1rem"},src:"https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/61ce6b5d5c334a35a7ed8ffba7e07552~tplv-k3u1fbpfcp-watermark.image?"})]}),t("div",{className:"server",onClick:()=>d(!0),children:[t("span",{children:[e("img",{src:"https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/3b31b8418fd74371b55c6a311c361736~tplv-k3u1fbpfcp-watermark.image?",alt:""}),"\u4E0D\u652F\u6301\u9000"]}),t("span",{children:[e("img",{src:"https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/308399dc0d9e4e93a6fc1cdcce7617d7~tplv-k3u1fbpfcp-watermark.image?",alt:""}),"\u5B98\u65B9\u7968"]}),t("span",{children:[e("img",{src:"https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/5339963f91c449ed8c8542a13eb2cd9b~tplv-k3u1fbpfcp-watermark.image?",alt:""}),"\u7535\u5B50\u7968"]}),t("span",{children:[e("img",{src:"https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/38d5febc965745ae92367018980cf216~tplv-k3u1fbpfcp-watermark.image?",alt:""}),"\u7535\u5B50\u53D1\u7968"]})]}),j(),t("div",{className:"detail-btn",children:[e("div",{className:"box",onClick:()=>{console.log(h,"id\u7684"),J.show({content:l[s]?"\u5DF2\u53D6\u6D88\u60F3\u770B":"\u5DF2\u6807\u8BB0\u60F3\u770B",position:"center"}),l[s]=!l[s],u([...l])},children:t("div",{className:"first-btn",children:[e("i",{className:"iconfont icon-aixin"}),e("span",{children:l[s]?"\u5DF2\u60F3\u770B":"\u60F3\u770B"})]})}),e(D,{to:{pathname:h.length?"./allevaluation":"./evaluate",id:s},children:e("div",{className:"box",children:t("div",{className:"second-btn",children:[e("i",{className:"iconfont icon-wujiaoxingyuanjiao"}),e("span",{children:h.length?"\u8BC4\u4EF7":"\u8BC4\u4EF7\u4E00\u4E0B"})]})})})]})]}),e("input",{type:"button",value:"\u7ACB\u5373\u8D2D\u7968",className:"buttom-btn"}),e(ae,{content:i,evaluate:h,className:"tablist"}),o[0]&&e(q,{contents:o,isReplace:!0})]})]})}var he=W(a=>({detailData:a.detail.detailData,contestList:a.contest.contestList,enterLoading:a.detail.enterLoading,isWant:a.detail.isWant,evaluate:a.evaluate.evaluateData,evaluateId:a.evaluate.evaluateId}),{getDetailData:ue,changeDetailData:w,getContestList:P,changeEnterLoading:k,changeIsWant:ne,changeEvaluateId:Y})($.memo(ie));export{he as default};
