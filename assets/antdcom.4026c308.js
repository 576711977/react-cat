import{s as r,b as e}from"./index.e0f65b85.js";const o=r.div`
    .tabsContainer {
        position: fixed;
        top: ${t=>t.appear==1?"2rem":"0"};
        transition: all 0.5s;
        z-index: 100;
        background: var(--adm-color-background);
        width: 100%;
        .tabs {
            --content-padding: 0;
            --active-title-color: ${e["theme-color-red"]};
            --active-line-color: ${e["theme-color-red"]};
        }
        .activefont {
            --title-font-size: 19px;
        }
    }
    .content {
        margin-top: 0.5rem;
        width: 100%;
    }
    h2 {
        margin: 0;
        padding: 0.6rem 0.25rem;
    }
    .content-text {
        overflow: hidden;
        margin: 0 0.6rem;
        font-size: ${e["font-size-m"]};
        word-wrap: break-word;
        letter-spacing: 0.1rem;
        line-height: 1.2rem;
        img {
            width: 100%;
        }
        .content-btn {
            height: 1.25rem;
            width: 3.5rem;
            border-radius: 0.625rem;
            border: none;
            font-size: ${e["font-size-m"]};
            color: white;
            background-color: ${e["theme-color-red"]};
            float: right;
            margin-top: -1.8rem;
        }
    }
    .separate {
        width: 100%;
        height: 0.5rem;
        background-color: #f5f5f5;
    }
`,a=r.div`
    letter-spacing: 0.1rem;
    line-height: 1.2rem;
    .evaluate-head {
        display: flex;
    }
    .evaluate-photo {
        border-radius: 100%;
        height: 2.5rem;
        width: 2.5rem;
        overflow: hidden;
    }
    img {
        width: 100%;
    }
    .evaluate-message {
        margin-left: 10px;
        p:first-child {
            color: #496a8b;
        }
        p:last-child {
            margin-top: 6px;
            color: ${e["font-color-gray"]};
            font-size: ${e["font-size-s"]};
        }
    }
    .rate-star {
        --star-size: ${e["font-size-m"]};
        --active-color: ${t=>t.star<2?"#ffff01":t.star<3.5?"#ffd21e":t.star<5?"#ffa43f":"#ff4e3f"};
    }
    .evaluate-body {
        margin: 1rem 0;
    }
`;var n="./assets/head.7d595b2f.jpg";export{a as E,o as T,n as h};
