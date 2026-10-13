import{a as _wrap,n as _reactGetter,t as e}from"./jsx-runtime-D3jfb0Ew.js";import{t}from"./file-text-SQwuk_d4.js";import{S as n,b as r}from"./index-D_s9ipWq.js";var i={name:`download`,size:24,node:[[`path`,{d:`M12 15V3`,key:`m9g1x1`}],[`path`,{d:`M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4`,key:`ih7n3h`}],[`path`,{d:`m7 10 5 5 5-5`,key:`brsn70`}]]};i.node;var a=n(i),o=e();
var _reactWrap = _wrap(_reactGetter(), 1);
var _SLIDES_MAP = {
  "corporate": [
    "/gallery/slides/corporate-pro/page-01.jpg",
    "/gallery/slides/corporate-pro/page-02.jpg",
    "/gallery/slides/corporate-pro/page-03.jpg",
    "/gallery/slides/corporate-pro/page-04.jpg",
    "/gallery/slides/corporate-pro/page-05.jpg"
  ],
  "logistics": [
    "/gallery/slides/logistics-pro/page-01.jpg",
    "/gallery/slides/logistics-pro/page-02.jpg",
    "/gallery/slides/logistics-pro/page-03.jpg",
    "/gallery/slides/logistics-pro/page-04.jpg",
    "/gallery/slides/logistics-pro/page-05.jpg",
    "/gallery/slides/logistics-pro/page-06.jpg"
  ],
  "tactical": [
    "/gallery/slides/tactical-pro/page-01.jpg",
    "/gallery/slides/tactical-pro/page-02.jpg",
    "/gallery/slides/tactical-pro/page-03.jpg",
    "/gallery/slides/tactical-pro/page-04.jpg",
    "/gallery/slides/tactical-pro/page-05.jpg",
    "/gallery/slides/tactical-pro/page-06.jpg"
  ],
  "campus": [
    "/gallery/slides/campus-pro/page-01.jpg",
    "/gallery/slides/campus-pro/page-02.jpg",
    "/gallery/slides/campus-pro/page-03.jpg",
    "/gallery/slides/campus-pro/page-04.jpg",
    "/gallery/slides/campus-pro/page-05.jpg",
    "/gallery/slides/campus-pro/page-06.jpg"
  ],
  "safari": [
    "/gallery/slides/safari-pro/page-01.jpg",
    "/gallery/slides/safari-pro/page-02.jpg",
    "/gallery/slides/safari-pro/page-03.jpg",
    "/gallery/slides/safari-pro/page-04.jpg",
    "/gallery/slides/safari-pro/page-05.jpg",
    "/gallery/slides/safari-pro/page-06.jpg"
  ],
  "sport": [
    "/gallery/slides/sport-pro/page-01.jpg",
    "/gallery/slides/sport-pro/page-02.jpg",
    "/gallery/slides/sport-pro/page-03.jpg",
    "/gallery/slides/sport-pro/page-04.jpg"
  ],
  "mining": [
    "/gallery/slides/mining-pro/page-01.jpg",
    "/gallery/slides/mining-pro/page-02.jpg",
    "/gallery/slides/mining-pro/page-03.jpg",
    "/gallery/slides/mining-pro/page-04.jpg",
    "/gallery/slides/mining-pro/page-05.jpg",
    "/gallery/slides/mining-pro/page-06.jpg"
  ],
  "healthcare": [
    "/gallery/slides/healthcare-pro/page-01.jpg",
    "/gallery/slides/healthcare-pro/page-02.jpg",
    "/gallery/slides/healthcare-pro/page-03.jpg",
    "/gallery/slides/healthcare-pro/page-04.jpg",
    "/gallery/slides/healthcare-pro/page-05.jpg",
    "/gallery/slides/healthcare-pro/page-06.jpg"
  ],
  "customization": [
    "/gallery/slides/customization-system/page-01.jpg",
    "/gallery/slides/customization-system/page-02.jpg",
    "/gallery/slides/customization-system/page-03.jpg",
    "/gallery/slides/customization-system/page-04.jpg"
  ]
};

function s({catalogue:e}){
  let key = Object.keys(c).find(k => c[k].url === e.url || c[k].title === e.title) || (e.title.toLowerCase().includes('custom') ? 'customization' : 'corporate');
  let slides = _SLIDES_MAP[key] || _SLIDES_MAP['corporate'];
  let [currentIdx, setCurrentIdx] = _reactWrap.useState(0);
  let [autoPlay, setAutoPlay] = _reactWrap.useState(true);

  _reactWrap.useEffect(() => {
    if (!autoPlay) return;
    let timer = setInterval(() => {
      setCurrentIdx(i => (i + 1) % slides.length);
    }, 4500);
    return () => clearInterval(timer);
  }, [autoPlay, slides.length]);

  let prevSlide = (ev) => {
    ev.preventDefault();
    ev.stopPropagation();
    setAutoPlay(false);
    setCurrentIdx(i => (i - 1 + slides.length) % slides.length);
  };

  let nextSlide = (ev) => {
    ev.preventDefault();
    ev.stopPropagation();
    setAutoPlay(false);
    setCurrentIdx(i => (i + 1) % slides.length);
  };

  return (0,o.jsxs)(`section`,{className:`company-section original-catalogue`,id:`original-catalogue`,children:[
    (0,o.jsxs)(`div`,{className:`original-catalogue-heading`,children:[
      (0,o.jsxs)(`div`,{children:[
        (0,o.jsxs)(`span`,{className:`eyebrow`,children:[(0,o.jsx)(`span`,{className:`tiny-square`}),` `,e.title.toUpperCase(),`™ CATALOGUE SLIDES`]}),
        (0,o.jsxs)(`h2`,{children:[e.title,` Catalogue Slides`]}),
        (0,o.jsx)(`p`,{children:`High-resolution slides converted from our official PDF catalogue for smooth viewing.`}),
        e.note && (0,o.jsx)(`p`,{className:`catalogue-edition-note`,children:e.note})
      ]}),
      (0,o.jsxs)(`div`,{className:`original-catalogue-actions`,children:[
        (0,o.jsxs)(`a`,{className:`button primary`,href:e.url,target:`_blank`,rel:`noreferrer`,children:[(0,o.jsx)(t,{size:17}),` View PDF `,(0,o.jsx)(r,{size:17})]}),
        (0,o.jsxs)(`a`,{className:`button secondary`,href:e.url,download:e.filename,children:[(0,o.jsx)(a,{size:17}),` Download PDF`]})
      ]})
    ]}),

    /* Professional Slide Viewer */
    (0,o.jsxs)(`div`,{className:`catalogue-slider-box`,style:{
      position:`relative`,
      background:`#1c1d1a`,
      borderRadius:`12px`,
      overflow:`hidden`,
      boxShadow:`0 12px 36px rgba(0,0,0,0.18)`,
      border:`1px solid #deded5`,
      margin:`0 0 24px 0`
    },children:[
      /* Image Slide */
      (0,o.jsxs)(`div`,{style:{
        position:`relative`,
        width:`100%`,
        height:`min(720px, 78vh)`,
        display:`flex`,
        alignItems:`center`,
        justifyContent:`center`,
        background:`radial-gradient(circle, #2a2c26 0%, #151614 100%)`,
        overflow:`hidden`
      },children:[
        (0,o.jsx)(`img`,{
          src: slides[currentIdx],
          alt: `${e.title} page ${currentIdx + 1}`,
          style:{
            maxWidth:`100%`,
            maxHeight:`100%`,
            width:`auto`,
            height:`auto`,
            objectFit:`contain`,
            display:`block`,
            boxShadow:`0 8px 30px rgba(0,0,0,0.4)`
          }
        }),
        /* Left Arrow Button */
        (0,o.jsx)(`button`,{
          type:`button`,
          onClick: prevSlide,
          "aria-label": `Previous page`,
          style:{
            position:`absolute`,
            left:`16px`,
            top:`50%`,
            transform:`translateY(-50%)`,
            width:`44px`,
            height:`44px`,
            borderRadius:`50%`,
            background:`rgba(255,255,255,0.85)`,
            border:`1px solid rgba(0,0,0,0.15)`,
            display:`flex`,
            alignItems:`center`,
            justifyContent:`center`,
            cursor:`pointer`,
            color:`#20231f`,
            fontWeight:`bold`,
            fontSize:`20px`,
            boxShadow:`0 4px 12px rgba(0,0,0,0.25)`,
            transition:`all 0.2s`
          },
          children: `‹`
        }),
        /* Right Arrow Button */
        (0,o.jsx)(`button`,{
          type:`button`,
          onClick: nextSlide,
          "aria-label": `Next page`,
          style:{
            position:`absolute`,
            right:`16px`,
            top:`50%`,
            transform:`translateY(-50%)`,
            width:`44px`,
            height:`44px`,
            borderRadius:`50%`,
            background:`rgba(255,255,255,0.85)`,
            border:`1px solid rgba(0,0,0,0.15)`,
            display:`flex`,
            alignItems:`center`,
            justifyContent:`center`,
            cursor:`pointer`,
            color:`#20231f`,
            fontWeight:`bold`,
            fontSize:`20px`,
            boxShadow:`0 4px 12px rgba(0,0,0,0.25)`,
            transition:`all 0.2s`
          },
          children: `›`
        }),
        /* Slide Counter Overlay */
        (0,o.jsxs)(`div`,{
          style:{
            position:`absolute`,
            bottom:`16px`,
            left:`20px`,
            background:`rgba(23,25,23,0.78)`,
            color:`#ffffff`,
            padding:`5px 12px`,
            borderRadius:`20px`,
            fontSize:`12px`,
            fontFamily:`monospace`,
            letterSpacing:`1px`,
            backdropFilter:`blur(6px)`,
            display:`flex`,
            alignItems:`center`,
            gap:`6px`
          },
          children:[
            (0,o.jsx)(`span`,{style:{width:`8px`,height:`8px`,background:`#e85a2a`,borderRadius:`50%`,display:`inline-block`}}),
            `PAGE `, currentIdx + 1, ` / `, slides.length
          ]
        })
      ]}),

      /* Thumbnails / Page dots strip */
      (0,o.jsx)(`div`,{
        style:{
          display:`flex`,
          alignItems:`center`,
          justifyContent:`center`,
          gap:`10px`,
          padding:`14px 20px`,
          background:`#151614`,
          borderTop:`1px solid rgba(255,255,255,0.08)`,
          overflowX:`auto`
        },
        children: slides.map((sUrl, idx) => (0,o.jsx)(`button`,{
          key: sUrl,
          type: `button`,
          onClick: (ev) => {
            ev.preventDefault();
            ev.stopPropagation();
            setAutoPlay(false);
            setCurrentIdx(idx);
          },
          style:{
            padding:`4px 10px`,
            borderRadius:`6px`,
            border: idx === currentIdx ? `2px solid #e85a2a` : `1px solid rgba(255,255,255,0.2)`,
            background: idx === currentIdx ? `#e85a2a` : `rgba(255,255,255,0.08)`,
            color: `#ffffff`,
            fontSize:`11px`,
            fontWeight: `bold`,
            cursor:`pointer`,
            fontFamily:`monospace`,
            transition:`all 0.15s`
          },
          children: `0` + (idx + 1)
        }))
      })
    ]}),

    (0,o.jsx)(`p`,{className:`catalogue-mobile-help`,children:`Swipe or use arrows to view catalogue pages converted from PDF to high-resolution JPEG slides.`})
  ]});
}
var c={corporate:{title:`Corporate Pro`,url:`/catalogues/jd-corporate-pro.pdf`,filename:`JD corporate pro.pdf`},logistics:{title:`Logistics Pro`,url:`/catalogues/jd-logistics-pro.pdf`,filename:`JD logistics pro.pdf`},tactical:{title:`Tactical Pro`,url:`/catalogues/jd-tactical-pro.pdf`,filename:`JD tactical pro.pdf`},campus:{title:`Campus Pro`,url:`/catalogues/jd-campus-pro.pdf`,filename:`JD campos pro.pdf`},safari:{title:`Safari Pro`,url:`/catalogues/jd-safari-pro.pdf`,filename:`JD safari pro.pdf`},sport:{title:`Sport Pro`,url:`/catalogues/jd-sport-pro.pdf`,filename:`JD Sport Pro, page 1-12. But page 4-5 and 9-10 to be added.pdf`,note:`The supplied Sport catalogue is marked as awaiting pages 4–5 and 9–10.`},mining:{title:`Mining Pro`,url:`/catalogues/jd-mining-pro.pdf`,filename:`JD mining pro.pdf`},healthcare:{title:`Healthcare Pro`,url:`/catalogues/jd-healthcare-pro.pdf`,filename:`JD healthcare pro.pdf`}},l={title:`JD Customization System`,url:`/catalogues/jd-customization-system.pdf`,filename:`JD Customization System, page 1-8  Separate PDF folder.pdf`};export{a as i,l as n,s as r,c as t};