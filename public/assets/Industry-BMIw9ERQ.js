import{a as e,n as t,t as n}from"./jsx-runtime-D3jfb0Ew.js";import{t as r}from"./arrow-left-C1aTj3vf.js";import{r as i,t as a}from"./catalogues-BhFR8xm6.js";import{_ as o,b as s,c,d as l,f as u,i as d,l as f,p,t as m,u as h,v as g}from"./index-D_s9ipWq.js";var _=e(t(),1),v=n();
var _INDUSTRY_SLIDES_CONFIG = {
  corporate: { name: "Corporate Pro", slides: ["/gallery/slides/corporate-pro/page-01.jpg", "/gallery/slides/corporate-pro/page-02.jpg", "/gallery/slides/corporate-pro/page-03.jpg", "/gallery/slides/corporate-pro/page-04.jpg", "/gallery/slides/corporate-pro/page-05.jpg"] },
  logistics: { name: "Logistics Pro", slides: ["/gallery/slides/logistics-pro/page-01.jpg", "/gallery/slides/logistics-pro/page-02.jpg", "/gallery/slides/logistics-pro/page-03.jpg", "/gallery/slides/logistics-pro/page-04.jpg", "/gallery/slides/logistics-pro/page-05.jpg", "/gallery/slides/logistics-pro/page-06.jpg"] },
  tactical: { name: "Tactical Pro", slides: ["/gallery/slides/tactical-pro/page-01.jpg", "/gallery/slides/tactical-pro/page-02.jpg", "/gallery/slides/tactical-pro/page-03.jpg", "/gallery/slides/tactical-pro/page-04.jpg", "/gallery/slides/tactical-pro/page-05.jpg", "/gallery/slides/tactical-pro/page-06.jpg"] },
  campus: { name: "Campus Pro", slides: ["/gallery/slides/campus-pro/page-01.jpg", "/gallery/slides/campus-pro/page-02.jpg", "/gallery/slides/campus-pro/page-03.jpg", "/gallery/slides/campus-pro/page-04.jpg", "/gallery/slides/campus-pro/page-05.jpg", "/gallery/slides/campus-pro/page-06.jpg"] },
  safari: { name: "Safari Pro", slides: ["/gallery/slides/safari-pro/page-01.jpg", "/gallery/slides/safari-pro/page-02.jpg", "/gallery/slides/safari-pro/page-03.jpg", "/gallery/slides/safari-pro/page-04.jpg", "/gallery/slides/safari-pro/page-05.jpg", "/gallery/slides/safari-pro/page-06.jpg"] },
  sport: { name: "Sport Pro", slides: ["/gallery/slides/sport-pro/page-01.jpg", "/gallery/slides/sport-pro/page-02.jpg", "/gallery/slides/sport-pro/page-03.jpg", "/gallery/slides/sport-pro/page-04.jpg"] },
  mining: { name: "Mining Pro", slides: ["/gallery/slides/mining-pro/page-01.jpg", "/gallery/slides/mining-pro/page-02.jpg", "/gallery/slides/mining-pro/page-03.jpg", "/gallery/slides/mining-pro/page-04.jpg", "/gallery/slides/mining-pro/page-05.jpg", "/gallery/slides/mining-pro/page-06.jpg"] },
  healthcare: { name: "Healthcare Pro", slides: ["/gallery/slides/healthcare-pro/page-01.jpg", "/gallery/slides/healthcare-pro/page-02.jpg", "/gallery/slides/healthcare-pro/page-03.jpg", "/gallery/slides/healthcare-pro/page-04.jpg", "/gallery/slides/healthcare-pro/page-05.jpg", "/gallery/slides/healthcare-pro/page-06.jpg"] }
};

function IndustryHeroSlideViewer({industryId: indId}) {
  let cfg = _INDUSTRY_SLIDES_CONFIG[indId] || _INDUSTRY_SLIDES_CONFIG["corporate"];
  let slides = cfg.slides;
  let [curr, setCurr] = (0,_.useState)(0);
  let [hovered, setHovered] = (0,_.useState)(false);

  (0,_.useEffect)(() => {
    if (hovered) return;
    let timer = setInterval(() => {
      setCurr(prev => (prev + 1) % slides.length);
    }, 4500);
    return () => clearInterval(timer);
  }, [hovered, slides.length]);

  return (0,v.jsxs)("div", {
    className: "jacket-slide-box",
    onMouseEnter: () => setHovered(true),
    onMouseLeave: () => setHovered(false),
    style: { position: "relative", minHeight: "320px", display: "flex", alignItems: "center", justifyContent: "center", padding: "16px 18px 32px" },
    children: [
      (0,v.jsx)("img", {
        src: slides[curr],
        alt: `${cfg.name} slide ${curr + 1}`,
        loading: "eager",
        decoding: "async",
        style: { maxWidth: "100%", maxHeight: "340px", objectFit: "contain", borderRadius: "8px", boxShadow: "0 10px 30px rgba(0,0,0,0.18)" }
      }),
      (0,v.jsx)("button", {
        type: "button",
        className: "jacket-slide-btn prev",
        onClick: (e) => { e.preventDefault(); setCurr(p => (p - 1 + slides.length) % slides.length); },
        children: "‹"
      }),
      (0,v.jsx)("button", {
        type: "button",
        className: "jacket-slide-btn next",
        onClick: (e) => { e.preventDefault(); setCurr(p => (p + 1) % slides.length); },
        children: "›"
      }),
      (0,v.jsxs)("div", {
        className: "jacket-slide-counter",
        children: [
          (0,v.jsxs)("span", { style: { fontWeight: "700" }, children: [curr + 1, " / ", slides.length] }),
          (0,v.jsx)("div", {
            className: "dots",
            children: slides.map((_, i) => (0,v.jsx)("span", {
              className: "dot",
              onClick: (e) => { e.preventDefault(); setCurr(i); },
              style: { width: i === curr ? "12px" : "4px", backgroundColor: i === curr ? "#e85a2a" : "rgba(255,255,255,0.45)" }
            }, i))
          })
        ]
      })
    ]
  });
}

function y(){let e=window.location.pathname.split(`/`).filter(Boolean)[1],t=l.find(t=>t.id===e),[n,y]=(0,_.useState)(null);if(!t)return(0,v.jsx)(c,{title:`Industry not found`,description:`Explore JD Jackets industries.`,children:(0,v.jsxs)(`section`,{className:`company-section`,children:[(0,v.jsx)(`h1`,{children:`Find your industry.`}),(0,v.jsx)(`a`,{className:`button primary`,href:`/#industries`,children:`Explore all eight industries`})]})});let b=h.find(t=>t.id===e);return(0,v.jsxs)(c,{title:`Custom jackets for ${t.name}`,description:`${t.audience} ${t.description}`,children:[(0,v.jsxs)(`section`,{className:`industry-hero`,children:[(0,v.jsxs)(`div`,{children:[(0,v.jsxs)(`a`,{className:`gallery-back`,href:`/#industries`,children:[(0,v.jsx)(r,{size:14}),` All eight industries`]}),(0,v.jsxs)(`span`,{className:`eyebrow`,children:[(0,v.jsx)(`span`,{className:`tiny-square`}),` CUSTOM JACKETS FOR YOUR INDUSTRY`]}),(0,v.jsx)(`h1`,{children:t.name}),(0,v.jsx)(`p`,{children:t.description}),(0,v.jsxs)(`p`,{className:`industry-audience`,children:[`For `,t.audience.charAt(0).toLowerCase()+t.audience.slice(1)]}),(0,v.jsxs)(`div`,{className:`industry-actions`,children:[(0,v.jsxs)(`button`,{className:`button primary`,onClick:()=>y(b),children:[`ORDER CUSTOM JACKETS FOR MY BUSINESS `,(0,v.jsx)(s,{size:18})]}),(0,v.jsxs)(`a`,{className:`text-button`,href:p(`${u}\nIndustry: ${t.name}`),target:`_blank`,rel:`noreferrer`,children:[(0,v.jsx)(o,{size:17}),` CHAT ON WHATSAPP`]})]})]}),(0,v.jsxs)(`div`,{className:`industry-hero-photo`,children:[(0,v.jsxs)(`span`,{className:`eyebrow`,children:[`JD `,b.name.toUpperCase(),`™`]}),(0,v.jsx)(IndustryHeroSlideViewer,{industryId:e}),e===`tactical`&&(0,v.jsx)(`small`,{children:`Illustrative technical style. Final design agreed with your team.`})]})]}),(0,v.jsx)(i,{catalogue:a[e]}),(0,v.jsxs)(`section`,{className:`company-section industry-details`,children:[(0,v.jsxs)(`div`,{children:[(0,v.jsxs)(`span`,{className:`eyebrow`,children:[(0,v.jsx)(`span`,{className:`tiny-square`}),` WHO WE SERVE`]}),(0,v.jsxs)(`h2`,{children:[`Built around`,(0,v.jsx)(`br`,{}),`your team.`]}),(0,v.jsx)(`ul`,{children:t.teams.map(e=>(0,v.jsxs)(`li`,{children:[(0,v.jsx)(g,{size:18}),e]},e))})]}),(0,v.jsxs)(`div`,{children:[(0,v.jsxs)(`span`,{className:`eyebrow`,children:[(0,v.jsx)(`span`,{className:`tiny-square`}),` `,b.name.toUpperCase(),` COLLECTION`]}),(0,v.jsxs)(`h2`,{children:[`Your work.`,(0,v.jsx)(`br`,{}),`Your requirements.`]}),(0,v.jsx)(`ul`,{children:t.focus.map(e=>(0,v.jsxs)(`li`,{children:[(0,v.jsx)(g,{size:18}),e]},e))}),(0,v.jsx)(`p`,{children:`Tell us your quantities, sizes, colours, branding and delivery needs. Our team will confirm the appropriate options, quotation and production details with you on WhatsApp.`}),(0,v.jsx)(`p`,{className:`industry-note`,children:`For specialist work environments, share your safety and performance requirements so suitability can be reviewed in your specification.`})]})]}),(0,v.jsxs)(`section`,{className:`industry-order company-section`,children:[(0,v.jsxs)(`div`,{children:[(0,v.jsx)(`span`,{className:`eyebrow`,children:`ONE TEAM. A CLEAR BUSINESS IDENTITY.`}),(0,v.jsxs)(`h2`,{children:[`Ready to brief your`,(0,v.jsx)(`br`,{}),`custom jacket order?`]}),(0,v.jsx)(`p`,{children:`Choose your requirements. Send them on WhatsApp. Get a quote from our team.`})]}),(0,v.jsxs)(`div`,{className:`industry-actions`,children:[(0,v.jsxs)(`button`,{className:`button primary`,onClick:()=>y(b),children:[`ORDER CUSTOM JACKETS `,(0,v.jsx)(s,{size:18})]}),(0,v.jsxs)(`a`,{className:`button secondary`,href:p(`${u}\nIndustry: ${t.name}`),target:`_blank`,rel:`noreferrer`,children:[`CHAT ON WHATSAPP `,(0,v.jsx)(o,{size:18})]}),(0,v.jsxs)(`a`,{href:`/gallery`,className:`text-button`,children:[`Explore jacket examples `,(0,v.jsx)(s,{size:16})]})]})]}),(0,v.jsxs)(`section`,{className:`company-section other-industries`,children:[(0,v.jsx)(`h2`,{children:`Explore the other industries.`}),(0,v.jsx)(`div`,{children:l.filter(t=>t.id!==e).map(e=>(0,v.jsxs)(`a`,{href:`/industries/${e.id}`,children:[e.name,(0,v.jsx)(s,{size:16})]},e.id))})]}),n&&(0,v.jsx)(f,{collection:n,onClose:()=>y(null)})]})}export{y as default};