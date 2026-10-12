export interface JacketStyle {
  id: string;
  sku: string;
  name: string;
  collection: 'corporate' | 'campus' | 'healthcare' | 'logistics' | 'tactical' | 'mining' | 'safari' | 'sport';
  category: 'Puffer' | 'Softshell' | 'Parka' | 'Fleece' | 'Safety' | 'Bomber' | 'Windbreaker' | 'Vest' | 'Technical' | 'Safety jacket' | 'Bodywarmer';
  kind: string;
  industry: string;
  tagline: string;
  description: string;
  moq: number;
  leadTime: string;
  weatherRating: 'Waterproof (10k)' | 'Water-Resistant' | 'Windproof' | 'Extreme Cold (-20°C)' | 'All-Weather';
  availableColours: { name: string; hex: string; accentHex?: string }[];
  brandingMethods: ('Embroidery' | 'Screen Printing' | '3D Silicone Badge' | 'Reflective Transfer')[];
  recommendedPlacements: ('Left Chest' | 'Right Chest' | 'Back Center' | 'Left Sleeve' | 'Right Sleeve' | 'Collar')[];
  featured?: boolean;
  priceGuide: string;
  fabricSpecs: string;
  image: string;
  aspect: number;
}

export const COMPANY_INFO = {
  name: 'JD Jackets by JD & Co BW',
  legalName: 'JD & Co.BW — Jacket Manufacturers of Distinction',
  location: 'Gaborone, Botswana',
  email: 'info@jdandcobw.com',
  phone: '+267 75 296 591',
  whatsappRaw: '26775296591',
  motto: 'FEEL IT. WEAR IT. REPRESENT IT. PROUDLY.',
  vision: 'YOUR VISION. OUR CRAFT. YOUR IDENTITY.',
  defaultWhatsAppMessage: 'Hello JD Jackets, I am interested in custom jackets for my business and would like to get more information.',
};

export const JACKET_STYLES: JacketStyle[] = [
  {
    id: 'corporate-puffer',
    sku: 'JD-EP01',
    name: 'Corporate Executive Puffer',
    collection: 'corporate',
    category: 'Puffer',
    kind: 'Puffer',
    industry: 'Corporate & Office Teams',
    tagline: 'Refined insulation engineered for corporate leadership and modern workplace agility.',
    description: 'Matte micro-ripstop shell filled with eco-down insulation. Features hidden internal security pocket, fleece-lined chin guard, and ergonomic cut designed to fit comfortably over business attire.',
    moq: 15,
    leadTime: '7–10 days',
    weatherRating: 'Water-Resistant',
    image: '/gallery/images/corporate-puffer.f163f7f5fd.png',
    aspect: 0.75,
    availableColours: [
      { name: 'Black', hex: '#1c1d1a', accentHex: '#31332e' },
      { name: 'Corporate Navy', hex: '#16233b', accentHex: '#25385c' },
      { name: 'Steel Graphite', hex: '#424b57', accentHex: '#5b6470' },
      { name: 'Alpine Moss', hex: '#2b3629', accentHex: '#3e4d3a' },
    ],
    brandingMethods: ['Embroidery', '3D Silicone Badge'],
    recommendedPlacements: ['Left Chest', 'Left Sleeve', 'Collar'],
    featured: true,
    priceGuide: 'From $48 / unit',
    fabricSpecs: '100% Recycled Nylon Ripstop with DWR finish, 280gsm synthetic cluster insulation'
  },
  {
    id: 'campus-softshell',
    sku: 'JD-CS02',
    name: 'Campus Crest Softshell',
    collection: 'campus',
    category: 'Softshell',
    kind: 'Softshell',
    industry: 'Schools & Education',
    tagline: 'Breathable 3-layer stretch membrane tailored for academic teams, faculty, and prefect bodies.',
    description: 'Brings your school or university identity to life with sharp contrast trims, high-density crest embroidery, and all-weather micro-fleece lining.',
    moq: 20,
    leadTime: '7–10 days',
    weatherRating: 'Waterproof (10k)',
    image: '/gallery/images/campus-softshell.e6de842396.png',
    aspect: 0.75,
    availableColours: [
      { name: 'Navy', hex: '#233a57', accentHex: '#3b587d' },
      { name: 'Varsity Black', hex: '#1a1c19', accentHex: '#333630' },
      { name: 'Deep Maroon', hex: '#5c1d24', accentHex: '#802b34' }
    ],
    brandingMethods: ['Embroidery', 'Screen Printing'],
    recommendedPlacements: ['Left Chest', 'Back Center', 'Left Sleeve'],
    featured: true,
    priceGuide: 'From $42 / unit',
    fabricSpecs: '320gsm 3-layer bonded polyester/spandex with TPU waterproof membrane (8,000mm/3,000g)'
  },
  {
    id: 'healthcare-softshell',
    sku: 'JD-HS03',
    name: 'Healthcare Executive Softshell',
    collection: 'healthcare',
    category: 'Softshell',
    kind: 'Softshell',
    industry: 'Healthcare & Care Teams',
    tagline: 'Antimicrobial and fluid-resistant outerwear for clinical teams and healthcare administrators.',
    description: 'Creates a comfortable, coordinated look for the people who care for others, tailored with medical department insignias and cleanable stretch fabric.',
    moq: 15,
    leadTime: '6–9 days',
    weatherRating: 'Water-Resistant',
    image: '/gallery/images/healthcare-softshell.0eb3f2e404.png',
    aspect: 1,
    availableColours: [
      { name: 'Navy', hex: '#26496f', accentHex: '#3d6796' },
      { name: 'Hospital Pewter', hex: '#4d555e', accentHex: '#69727d' },
      { name: 'Ceil Blue', hex: '#2b75a6', accentHex: '#4d99cc' }
    ],
    brandingMethods: ['Embroidery', 'Screen Printing'],
    recommendedPlacements: ['Left Chest', 'Right Chest', 'Left Sleeve'],
    priceGuide: 'From $44 / unit',
    fabricSpecs: 'Silvadur antimicrobial treated bonded micro-poly with silent-stretch weave'
  },
  {
    id: 'logistics-red',
    sku: 'JD-LR04',
    name: 'Logistics Contrast Softshell',
    collection: 'logistics',
    category: 'Softshell',
    kind: 'Softshell',
    industry: 'Logistics & Transport',
    tagline: 'High-visibility contrast styling for courier dispatch, delivery drivers, and freight supervisors.',
    description: 'Designed for the people who keep your fleet moving. Features reinforced elbow panels, bonded zipper pockets, and bold contrast red shoulder panels.',
    moq: 15,
    leadTime: '7–10 days',
    weatherRating: 'Waterproof (10k)',
    image: '/gallery/images/logistics-red.5423c2ad91.png',
    aspect: 0.75,
    availableColours: [
      { name: 'Black / Red', hex: '#1c1d1a', accentHex: '#e85a2a' },
      { name: 'Navy / Orange', hex: '#1e2d42', accentHex: '#ea580c' }
    ],
    brandingMethods: ['Embroidery', 'Reflective Transfer', 'Screen Printing'],
    recommendedPlacements: ['Left Chest', 'Back Center', 'Right Sleeve'],
    priceGuide: 'From $43 / unit',
    fabricSpecs: '320gsm windproof bonded softshell with Teflon water-shedding treatment'
  },
  {
    id: 'logistics-black',
    sku: 'JD-LB05',
    name: 'Logistics Classic Softshell',
    collection: 'logistics',
    category: 'Softshell',
    kind: 'Softshell',
    industry: 'Logistics & Transport',
    tagline: 'Understated all-black workwear shell for fleet managers and logistics coordinators.',
    description: 'Streamlined design with ergonomic articulated sleeves, interior documents pouch, and heavy-duty YKK zips.',
    moq: 15,
    leadTime: '7–10 days',
    weatherRating: 'Water-Resistant',
    image: '/gallery/images/logistics-black.aea021da83.png',
    aspect: 0.75,
    availableColours: [
      { name: 'Black', hex: '#181a17', accentHex: '#30332d' },
      { name: 'Slate Gray', hex: '#424749', accentHex: '#5e6366' }
    ],
    brandingMethods: ['Embroidery', 'Screen Printing'],
    recommendedPlacements: ['Left Chest', 'Back Center'],
    priceGuide: 'From $40 / unit',
    fabricSpecs: 'Bonded poly-spandex with storm-sealed chest pocket'
  },
  {
    id: 'logistics-industrial',
    sku: 'JD-LI06',
    name: 'Logistics Industrial Softshell',
    collection: 'logistics',
    category: 'Softshell',
    kind: 'Softshell',
    industry: 'Logistics & Transport',
    tagline: 'Heavy-duty abrasive-resistant fabric engineered for warehouse and cargo terminals.',
    description: 'Built for strenuous loading bays and cross-docking hubs. Reinforced shoulder patches prevent premature wear from backpack and strap friction.',
    moq: 15,
    leadTime: '7–10 days',
    weatherRating: 'Waterproof (10k)',
    image: '/gallery/images/logistics-industrial.2dcf1671d8.png',
    aspect: 0.75,
    availableColours: [
      { name: 'Black / Red', hex: '#1b1c19', accentHex: '#c93b20' },
      { name: 'Black / High-Vis', hex: '#1b1c19', accentHex: '#eab308' }
    ],
    brandingMethods: ['Embroidery', 'Reflective Transfer'],
    recommendedPlacements: ['Left Chest', 'Back Center', 'Right Sleeve'],
    priceGuide: 'From $46 / unit',
    fabricSpecs: '350gsm ballistic-woven poly with polar fleece bonding'
  },
  {
    id: 'mining-reflective',
    sku: 'JD-MR07',
    name: 'Mining Reflective Softshell',
    collection: 'mining',
    category: 'Safety',
    kind: 'Softshell',
    industry: 'Construction, Mining & Engineering',
    tagline: 'Certified 3M Scotchlite reflective striping over rugged graphite worksite fabric.',
    description: 'Purpose-built for site engineers, mining supervisors, and field contractors requiring certified visibility and heavy-duty abrasion resistance.',
    moq: 15,
    leadTime: '8–12 days',
    weatherRating: 'Waterproof (10k)',
    image: '/gallery/images/mining-reflective.b3c6690ea6.png',
    aspect: 0.75,
    availableColours: [
      { name: 'Black / High-Vis', hex: '#1f201d', accentHex: '#eab308' },
      { name: 'Navy / High-Vis', hex: '#1a273b', accentHex: '#eab308' }
    ],
    brandingMethods: ['Reflective Transfer', 'Embroidery'],
    recommendedPlacements: ['Left Chest', 'Back Center', 'Right Sleeve'],
    priceGuide: 'From $52 / unit',
    fabricSpecs: '300D Oxford reinforced panels with EN ISO 20471 certified reflective tape'
  },
  {
    id: 'mining-orange',
    sku: 'JD-MO08',
    name: 'Mining Orange Safety Jacket',
    collection: 'mining',
    category: 'Safety jacket',
    kind: 'Safety jacket',
    industry: 'Construction, Mining & Engineering',
    tagline: 'Fluorescent worksite safety jacket with maximum chromatic visibility.',
    description: 'Designed for earthmoving sites, open-cast mines, and road infrastructure projects. Features heavy storm flaps and double radio loops.',
    moq: 15,
    leadTime: '8–12 days',
    weatherRating: 'Waterproof (10k)',
    image: '/gallery/images/mining-orange.575ce5697c.png',
    aspect: 1,
    availableColours: [
      { name: 'Orange', hex: '#e85a2a', accentHex: '#1f201d' },
      { name: 'Hi-Vis Amber', hex: '#ea580c', accentHex: '#0f172a' }
    ],
    brandingMethods: ['Reflective Transfer', 'Screen Printing'],
    recommendedPlacements: ['Left Chest', 'Back Center'],
    priceGuide: 'From $49 / unit',
    fabricSpecs: 'High-visibility fluorescent PU-backed Oxford with seam sealed taping'
  },
  {
    id: 'mining-yellow',
    sku: 'JD-MY09',
    name: 'Mining Yellow Safety Jacket',
    collection: 'mining',
    category: 'Safety jacket',
    kind: 'Safety jacket',
    industry: 'Construction, Mining & Engineering',
    tagline: 'High-contrast yellow & black worksite shell with waterproof taped construction.',
    description: 'Provides daytime fluorescent prominence and nighttime 360-degree beam bounce for heavy equipment environments.',
    moq: 15,
    leadTime: '8–12 days',
    weatherRating: 'Waterproof (10k)',
    image: '/gallery/images/mining-yellow.54644a82c2.png',
    aspect: 0.75,
    availableColours: [
      { name: 'Yellow / Black', hex: '#ca8a04', accentHex: '#181917' },
      { name: 'All Yellow Hi-Vis', hex: '#eab308', accentHex: '#ca8a04' }
    ],
    brandingMethods: ['Reflective Transfer', 'Screen Printing', 'Embroidery'],
    recommendedPlacements: ['Left Chest', 'Back Center', 'Right Sleeve'],
    priceGuide: 'From $49 / unit',
    fabricSpecs: 'Fluorescent yellow ripstop with dark soil-resistant lower torso'
  },
  {
    id: 'mining-bodywarmer',
    sku: 'JD-MB10',
    name: 'Mining High-Vis Bodywarmer',
    collection: 'mining',
    category: 'Bodywarmer',
    kind: 'Bodywarmer',
    industry: 'Construction, Mining & Engineering',
    tagline: 'Sleeveless insulated safety vest offering arm agility for machinery operators.',
    description: 'Warm quilted core that layers effortlessly over thermal shirts, high-vis polo shirts, or technical hoodies.',
    moq: 20,
    leadTime: '6–9 days',
    weatherRating: 'Windproof',
    image: '/gallery/images/mining-bodywarmer.4724c156a5.png',
    aspect: 0.75,
    availableColours: [
      { name: 'Yellow', hex: '#d97706', accentHex: '#1c1d1b' },
      { name: 'Safety Orange', hex: '#c2410c', accentHex: '#1c1d1b' }
    ],
    brandingMethods: ['Reflective Transfer', 'Embroidery'],
    recommendedPlacements: ['Left Chest', 'Back Center'],
    priceGuide: 'From $36 / unit',
    fabricSpecs: 'Thermal quilted polyester with heavy-duty front zip and mic tabs'
  },
  {
    id: 'mining-puffer',
    sku: 'JD-MP11',
    name: 'Mining Heavy-Duty Puffer',
    collection: 'mining',
    category: 'Puffer',
    kind: 'Puffer',
    industry: 'Construction, Mining & Engineering',
    tagline: 'Extreme-cold winter site insulation paired with certified contrast safety panels.',
    description: 'Engineered for freezing high-altitude pits and night shifts. Thick baffle insulation with tear-resistant outer ripstop shell.',
    moq: 12,
    leadTime: '10–14 days',
    weatherRating: 'Extreme Cold (-20°C)',
    image: '/gallery/images/mining-puffer.6ba7c5f111.png',
    aspect: 0.75,
    availableColours: [
      { name: 'Orange / Navy', hex: '#c2410c', accentHex: '#172554' },
      { name: 'Black / Orange', hex: '#1c1d1b', accentHex: '#ea580c' }
    ],
    brandingMethods: ['Embroidery', 'Reflective Transfer'],
    recommendedPlacements: ['Left Chest', 'Back Center', 'Left Sleeve'],
    priceGuide: 'From $64 / unit',
    fabricSpecs: '450D Oxford ripstop with 350gsm thermal fill and storm draft seal'
  },
  {
    id: 'safari-puffer',
    sku: 'JD-SP12',
    name: 'Safari Olive Puffer',
    collection: 'safari',
    category: 'Puffer',
    kind: 'Puffer',
    industry: 'Tourism & Hospitality',
    tagline: 'Earthy tone thermal insulation crafted for game drives, bush camps, and morning safari departures.',
    description: 'Quiet-rustle peached fabric in authentic bush veld olive. Protects guides and guests from biting sunrise breezes in open safari cruisers.',
    moq: 15,
    leadTime: '7–10 days',
    weatherRating: 'Water-Resistant',
    image: '/gallery/images/safari-puffer.9077a10df8.png',
    aspect: 0.75,
    availableColours: [
      { name: 'Olive', hex: '#4a503e', accentHex: '#646b54' },
      { name: 'Safari Khaki', hex: '#77704e', accentHex: '#918961' }
    ],
    brandingMethods: ['Embroidery', '3D Silicone Badge'],
    recommendedPlacements: ['Left Chest', 'Collar'],
    priceGuide: 'From $47 / unit',
    fabricSpecs: 'Silent peached micro-ripstop with 260gsm synthetic down loft'
  },
  {
    id: 'safari-olive-parka',
    sku: 'JD-SO13',
    name: 'Safari Olive Hooded Parka',
    collection: 'safari',
    category: 'Parka',
    kind: 'Parka',
    industry: 'Tourism & Hospitality',
    tagline: 'Full-length hooded protection with deep bellowed equipment pockets.',
    description: 'Designed for lodge managers, wilderness trackers, and river boat guides. Weatherproof storm hood with brushed cotton inner trim.',
    moq: 12,
    leadTime: '9–12 days',
    weatherRating: 'Waterproof (10k)',
    image: '/gallery/images/safari-olive-parka.cfd40c09c4.png',
    aspect: 0.75,
    availableColours: [
      { name: 'Olive', hex: '#3d4533', accentHex: '#525c45' },
      { name: 'Dark Savanna', hex: '#4f4937', accentHex: '#6b634b' }
    ],
    brandingMethods: ['Embroidery', '3D Silicone Badge'],
    recommendedPlacements: ['Left Chest', 'Right Chest', 'Left Sleeve'],
    priceGuide: 'From $59 / unit',
    fabricSpecs: 'Heavyweight weather-proof canvas blend with Sherpa fleece lining'
  },
  {
    id: 'safari-camo',
    sku: 'JD-SC14',
    name: 'Safari Camouflage Parka',
    collection: 'safari',
    category: 'Parka',
    kind: 'Parka',
    industry: 'Tourism & Hospitality',
    tagline: 'Tactical field camouflage pattern for conservation rangers and wildlife anti-poaching units.',
    description: 'Discreet non-reflective fabric weave engineered for rugged savannah scrubland and riverine forests.',
    moq: 15,
    leadTime: '10–14 days',
    weatherRating: 'All-Weather',
    image: '/gallery/images/safari-camo.5f8a812bd0.png',
    aspect: 0.75,
    availableColours: [
      { name: 'Bush Camouflage', hex: '#48523b', accentHex: '#6b664d' },
      { name: 'Dark Savanna Camo', hex: '#373f2c', accentHex: '#525c42' }
    ],
    brandingMethods: ['Embroidery', '3D Silicone Badge'],
    recommendedPlacements: ['Left Chest', 'Left Sleeve', 'Right Sleeve'],
    priceGuide: 'From $62 / unit',
    fabricSpecs: 'Ripstop tactical blend with reinforced elbow shields and two-way zipper'
  },
  {
    id: 'safari-brown',
    sku: 'JD-SB15',
    name: 'Safari Earth-Tone Parka',
    collection: 'safari',
    category: 'Parka',
    kind: 'Parka',
    industry: 'Tourism & Hospitality',
    tagline: 'Classic African savannah earth brown tailored for lodge concierges and hospitality hosts.',
    description: 'Combines rugged outdoor resilience with an elegant front-of-house hospitality presence.',
    moq: 15,
    leadTime: '7–10 days',
    weatherRating: 'Water-Resistant',
    image: '/gallery/images/safari-brown.d54f953d3d.png',
    aspect: 0.75,
    availableColours: [
      { name: 'Earth Brown', hex: '#544636', accentHex: '#735f49' },
      { name: 'Tobacco Tan', hex: '#6b583f', accentHex: '#8a7252' }
    ],
    brandingMethods: ['Embroidery', '3D Silicone Badge'],
    recommendedPlacements: ['Left Chest', 'Collar'],
    priceGuide: 'From $56 / unit',
    fabricSpecs: 'Pre-washed cotton-poly twill with water-repellent backing'
  },
  {
    id: 'sport-gradient',
    sku: 'JD-SG16',
    name: 'Sport White-to-Blue Windbreaker',
    collection: 'sport',
    category: 'Windbreaker',
    kind: 'Windbreaker',
    industry: 'Sports & Events',
    tagline: 'Sublimated dynamic color transition with featherweight wind resistance for athletic crews.',
    description: 'Put your club or tournament identity on show with vibrant sublimation, water resistance, and breathable back ventilation.',
    moq: 20,
    leadTime: '6–9 days',
    weatherRating: 'Windproof',
    image: '/gallery/images/sport-gradient.78a2110b32.png',
    aspect: 1,
    availableColours: [
      { name: 'White / Blue', hex: '#51a7cf', accentHex: '#f6f5f0' },
      { name: 'White / Red', hex: '#dc2626', accentHex: '#f6f5f0' }
    ],
    brandingMethods: ['Screen Printing', 'Embroidery'],
    recommendedPlacements: ['Left Chest', 'Back Center', 'Right Sleeve'],
    priceGuide: 'From $32 / unit',
    fabricSpecs: '85gsm micro-polyester with wind-lock coating and moisture-wicking lining'
  },
  {
    id: 'sport-blue',
    sku: 'JD-SBL17',
    name: 'Sport Sky-Blue Windbreaker',
    collection: 'sport',
    category: 'Windbreaker',
    kind: 'Windbreaker',
    industry: 'Sports & Events',
    tagline: 'Electric sky blue shell with black raglan sleeve accents for running clubs and fitness squads.',
    description: 'Features zipped storm pockets, chin zip guard, and elasticated cuffs for active outdoor workouts.',
    moq: 20,
    leadTime: '6–8 days',
    weatherRating: 'Water-Resistant',
    image: '/gallery/images/sport-blue.07af5c18cd.png',
    aspect: 0.75,
    availableColours: [
      { name: 'Sky Blue / Black', hex: '#38bdf8', accentHex: '#181a17' },
      { name: 'Royal / Black', hex: '#1d4ed8', accentHex: '#181a17' }
    ],
    brandingMethods: ['Screen Printing', 'Embroidery'],
    recommendedPlacements: ['Left Chest', 'Back Center'],
    priceGuide: 'From $34 / unit',
    fabricSpecs: 'Durable water-repellent ripstop with breathable underarm eyelets'
  },
  {
    id: 'sport-bodywarmer',
    sku: 'JD-SPB18',
    name: 'Sport Performance Bodywarmer',
    collection: 'sport',
    category: 'Bodywarmer',
    kind: 'Bodywarmer',
    industry: 'Sports & Events',
    tagline: 'Athletic core thermal vest designed for touchline coaching and training sessions.',
    description: 'Sleeveless freedom of movement with zippered warmth. Features two outer pockets and inner smartphone security sleeve.',
    moq: 20,
    leadTime: '6–8 days',
    weatherRating: 'Windproof',
    image: '/gallery/images/sport-bodywarmer.265e5e5146.png',
    aspect: 0.75,
    availableColours: [
      { name: 'Blue / Black', hex: '#1e3a8a', accentHex: '#181a17' },
      { name: 'All Black', hex: '#181a17', accentHex: '#31332f' }
    ],
    brandingMethods: ['Embroidery', '3D Silicone Badge'],
    recommendedPlacements: ['Left Chest', 'Collar'],
    priceGuide: 'From $38 / unit',
    fabricSpecs: 'Channel-quilted micro-poly with lightweight thermal fiber fill'
  },
  {
    id: 'sport-fleece',
    sku: 'JD-SF19',
    name: 'Sport Technical Fleece',
    collection: 'sport',
    category: 'Fleece',
    kind: 'Fleece',
    industry: 'Sports & Events',
    tagline: 'High-density anti-pill bonded fleece with striking sport contrast piping.',
    description: 'Keeps substitutes, event marshals, and track officials warm on chilly training fields and stadium bleachers.',
    moq: 20,
    leadTime: '5–8 days',
    weatherRating: 'Windproof',
    image: '/gallery/images/sport-fleece.dd1c943f52.png',
    aspect: 0.75,
    availableColours: [
      { name: 'Black / Orange', hex: '#181a17', accentHex: '#e85a2a' },
      { name: 'Navy / Amber', hex: '#172554', accentHex: '#f59e0b' }
    ],
    brandingMethods: ['Embroidery', '3D Silicone Badge'],
    recommendedPlacements: ['Left Chest', 'Back Center', 'Left Sleeve'],
    priceGuide: 'From $35 / unit',
    fabricSpecs: '280gsm double-brushed anti-pill technical fleece'
  },
  {
    id: 'sport-coach',
    sku: 'JD-SC20',
    name: 'Sport Extreme-Cold Coaches Parka',
    collection: 'sport',
    category: 'Parka',
    kind: 'Parka',
    industry: 'Sports & Events',
    tagline: 'Bench-length insulated storm parka for head coaches and sideline support personnel.',
    description: 'Generous mid-thigh length coverage keeps coaches and staff completely sheltered in torrential rain, wind, and freezing cold.',
    moq: 12,
    leadTime: '8–12 days',
    weatherRating: 'Extreme Cold (-20°C)',
    image: '/gallery/images/sport-coach.eeab99bbc4.png',
    aspect: 0.75,
    availableColours: [
      { name: 'Black', hex: '#181a17', accentHex: '#2d302a' },
      { name: 'Deep Stadium Navy', hex: '#131e33', accentHex: '#253557' }
    ],
    brandingMethods: ['Embroidery', 'Screen Printing'],
    recommendedPlacements: ['Left Chest', 'Back Center', 'Left Sleeve', 'Right Sleeve'],
    priceGuide: 'From $65 / unit',
    fabricSpecs: 'Full-length 10,000mm waterproof Oxford shell with 320gsm thermal padding'
  }
];

export interface IndustryItem {
  id: string;
  name: string;
  shortName: string;
  audience: string;
  description: string;
  iconName: string;
  recommendedStyles: string[];
  keyNeed: string;
  typicalOrderSize: string;
  teams: string[];
  focus: string[];
  brandTag: string;
  accentColor: string;
}

export const INDUSTRIES: IndustryItem[] = [
  {
    id: 'corporate',
    name: 'Corporate & Office Teams',
    shortName: 'Corporate',
    audience: 'Employees, management teams, corporate events and company activities.',
    description: 'Create a coordinated, professional appearance for your staff, from the office to client visits and company events.',
    iconName: 'Building2',
    recommendedStyles: ['corporate-puffer'],
    keyNeed: 'Polished executive fit, lightweight indoor/outdoor versatility',
    typicalOrderSize: '25–150 units',
    teams: [
      'Businesses and professional services',
      'Office staff and management teams',
      'Corporate events and associations'
    ],
    focus: [
      'Company colours and a consistent team appearance',
      'Chest, back or sleeve branding',
      'Puffer, softshell and parka options'
    ],
    brandTag: 'JD CORPORATE PRO™',
    accentColor: '#424b57'
  },
  {
    id: 'logistics',
    name: 'Logistics & Transport',
    shortName: 'Logistics',
    audience: 'Delivery companies, fleet operators, warehouse staff and distribution teams.',
    description: 'Branded outerwear for the people who keep your business moving, with practical details for busy working days.',
    iconName: 'Truck',
    recommendedStyles: ['logistics-red', 'logistics-black', 'logistics-industrial'],
    keyNeed: 'Abrasion resistance, weatherproofing, driving mobility',
    typicalOrderSize: '50–500 units',
    teams: [
      'Courier and delivery businesses',
      'Fleet and transport operators',
      'Warehouse and distribution teams'
    ],
    focus: [
      'Recognisable company branding',
      'Practical pockets and comfortable movement',
      'Softshell, fleece and high-visibility options'
    ],
    brandTag: 'JD LOGISTICS PRO™',
    accentColor: '#87372d'
  },
  {
    id: 'tactical',
    name: 'Security & Operational Teams',
    shortName: 'Security',
    audience: 'Security companies, patrol teams, supervisors and professional operational crews.',
    description: 'Build a clear, consistent team identity for security and operational staff, with functional outerwear suited to their duties.',
    iconName: 'ShieldCheck',
    recommendedStyles: ['safari-camo'],
    keyNeed: 'Tough ripstop durability, tactical utility, high visibility',
    typicalOrderSize: '30–200 units',
    teams: [
      'Private security companies',
      'Patrol and site security teams',
      'Operational supervisors and field crews'
    ],
    focus: [
      'Company logos, names and role identification',
      'Practical features and fit for operational work',
      'Materials and requirements agreed in your specification'
    ],
    brandTag: 'JD TACTICAL PRO™',
    accentColor: '#4a503e'
  },
  {
    id: 'campus',
    name: 'Schools & Education',
    shortName: 'Education',
    audience: 'Schools, colleges, universities, teachers, student groups and campus teams.',
    description: 'Bring your school or institution’s identity to life with custom jackets in your colours, carrying your crest and team details.',
    iconName: 'GraduationCap',
    recommendedStyles: ['campus-softshell'],
    keyNeed: 'School colour matching, long-lasting embroidery, mixed student sizing',
    typicalOrderSize: '50–400 units',
    teams: [
      'Schools, colleges and universities',
      'Teaching and campus staff',
      'Student groups, clubs and school associations'
    ],
    focus: [
      'School crests and institution colours',
      'Mixed sizes across staff and student groups',
      'Softshell, bomber and puffer options'
    ],
    brandTag: 'JD CAMPUS PRO™',
    accentColor: '#233a57'
  },
  {
    id: 'safari',
    name: 'Tourism & Hospitality',
    shortName: 'Hospitality',
    audience: 'Lodges, hotels, safari guides, hospitality businesses and outdoor crews.',
    description: 'Give guests a recognisable team to turn to. Create branded outerwear for guides, lodge staff and hospitality teams working indoors and out.',
    iconName: 'Compass',
    recommendedStyles: ['safari-puffer', 'safari-olive-parka', 'safari-brown'],
    keyNeed: 'Impeccable first impressions, warmth without bulk, guest comfort',
    typicalOrderSize: '20–100 units',
    teams: [
      'Safari lodges and tour operators',
      'Hotels and hospitality businesses',
      'Guides, outdoor crews and guest-facing staff'
    ],
    focus: [
      'A coordinated guest-facing team identity',
      'Earth-tone palettes and your organisation’s logo',
      'Puffer, parka and bodywarmer options'
    ],
    brandTag: 'JD SAFARI PRO™',
    accentColor: '#77704e'
  },
  {
    id: 'sport',
    name: 'Sports & Events',
    shortName: 'Sports',
    audience: 'Sports clubs, coaches, training teams, event staff and associations.',
    description: 'Put your club, event or association’s identity on show with team colours, sponsor branding and coordinated jackets for the whole group.',
    iconName: 'Trophy',
    recommendedStyles: ['sport-gradient', 'sport-blue', 'sport-bodywarmer', 'sport-fleece', 'sport-coach'],
    keyNeed: 'Team colours, names, sponsor branding, lightweight packing',
    typicalOrderSize: '40–300 units',
    teams: [
      'Sports clubs and coaching teams',
      'Event organisers and staff',
      'Associations and community organisations'
    ],
    focus: [
      'Team colours, names and sponsor logos',
      'Plain, trimmed and sublimated designs',
      'Windbreaker and bodywarmer options'
    ],
    brandTag: 'JD SPORT PRO™',
    accentColor: '#51a7cf'
  },
  {
    id: 'mining',
    name: 'Construction, Mining & Engineering',
    shortName: 'Construction',
    audience: 'Construction companies, engineers, site workers, maintenance teams and industrial crews.',
    description: 'Custom work-focused jackets for companies working on site and in the field, with branding and practical features planned around your environment.',
    iconName: 'HardHat',
    recommendedStyles: ['mining-reflective', 'mining-orange', 'mining-yellow', 'mining-bodywarmer', 'mining-puffer'],
    keyNeed: 'Company & role identification, high-visibility and extreme cold performance',
    typicalOrderSize: '25–250 units',
    teams: [
      'Construction and engineering companies',
      'Mining and industrial workforces',
      'Site supervisors, maintenance teams and field workers'
    ],
    focus: [
      'Company and role identification',
      'High-visibility and reflective options',
      'Fabric and performance needs reviewed for your work environment'
    ],
    brandTag: 'JD MINING PRO™',
    accentColor: '#e79727'
  },
  {
    id: 'healthcare',
    name: 'Healthcare & Care Teams',
    shortName: 'Healthcare',
    audience: 'Clinics, hospitals, care organisations, support staff and outreach teams.',
    description: 'Create a professional, coordinated look for the teams who care for others, with your organisation’s colours, names and roles.',
    iconName: 'HeartHandshake',
    recommendedStyles: ['healthcare-softshell'],
    keyNeed: 'Organisation logos, fluid resistance, comfortable staff outerwear',
    typicalOrderSize: '20–150 units',
    teams: [
      'Hospitals, clinics and medical practices',
      'Care organisations and support teams',
      'Community health and outreach teams'
    ],
    focus: [
      'Organisation logos, names and role branding',
      'Comfortable, coordinated staff outerwear',
      'Softshell, puffer and parka options'
    ],
    brandTag: 'JD HEALTHCARE PRO™',
    accentColor: '#26496f'
  }
];

export interface FaqItem {
  question: string;
  answer: string;
  category: string;
}

export const FAQS: FaqItem[] = [
  {
    category: 'Branding',
    question: 'Can I customize the jacket with my company logo?',
    answer: 'Yes. Share your company logo, brand colours and preferred placement. We work with you to confirm the branding and artwork before production. We provide four commercial techniques: high-density multi-thread embroidery, precision screen printing, 3D raised silicone badges, and reflective heat transfer.'
  },
  {
    category: 'Sizing',
    question: 'Can I order different sizes in one order?',
    answer: 'Yes. Enter a quantity for each size in the order form, from XS to XXXL, or include custom fitting requirements. Your total is calculated automatically and included in your WhatsApp request. Mixed sizes carry zero penalty.'
  },
  {
    category: 'Order Quantities',
    question: 'What is the minimum order quantity?',
    answer: 'Minimum quantities depend on the jacket style and customization. Standard corporate puffers and softshells start at 15 units. Send your business requirements on WhatsApp and our team will confirm the applicable minimum and quotation.'
  },
  {
    category: 'Styles',
    question: 'What jacket styles are available?',
    answer: 'Our eight JD Pro collections include puffer jackets, softshells, parkas, windbreakers, fleece, bodywarmers and other collection-specific styles. Explore the gallery or ask us to recommend a style for your team.'
  },
  {
    category: 'Colours',
    question: 'Can I choose my own colours?',
    answer: 'Yes. Tell us your preferred colours or brand colour codes. Our team will discuss suitable fabrics, trims and design options and confirm availability with you. We also offer custom Pantone (PMS) dyed shells for large orders.'
  },
  {
    category: 'Embroidery vs Printing',
    question: 'Can you embroider or print our logo?',
    answer: 'Embroidery and printing are branding options. Select what you need in the order form, including front, back or sleeve placement. We will confirm the right method for your artwork and jacket: embroidery for puffers & fleeces, screen printing for large back motifs, and reflective transfers for safety.'
  },
  {
    category: 'Artwork',
    question: 'Can I upload my own design?',
    answer: 'Yes. Select your logo, artwork or reference image in the form. The filenames are added to your WhatsApp message. Files stay on your device, so attach the actual artwork (AI, EPS, PDF, or PNG) in the WhatsApp conversation.'
  },
  {
    category: 'Timing',
    question: 'How long does production take?',
    answer: 'Timing depends on your jacket style, quantity, customization and approvals. Standard production takes 7 to 10 working days upon proof sign-off. Include your required delivery date and we will confirm a production schedule with your quotation.'
  },
  {
    category: 'Delivery',
    question: 'Do you deliver to my location?',
    answer: 'Include your town or city and country in the order form. Based in Gaborone, Botswana, our team ships across Southern Africa and globally. We will confirm delivery arrangements, costs and timing for your location on WhatsApp.'
  }
];

export interface SizeChartRow {
  size: 'XS' | 'S' | 'M' | 'L' | 'XL' | 'XXL' | 'XXXL';
  chestInches: string;
  chestCm: string;
  lengthCm: string;
  sleeveCm: string;
}

export const SIZE_CHART: SizeChartRow[] = [
  { size: 'XS', chestInches: '34–36"', chestCm: '86–91 cm', lengthCm: '67 cm', sleeveCm: '63 cm' },
  { size: 'S', chestInches: '36–38"', chestCm: '91–97 cm', lengthCm: '69 cm', sleeveCm: '64 cm' },
  { size: 'M', chestInches: '38–40"', chestCm: '97–102 cm', lengthCm: '72 cm', sleeveCm: '66 cm' },
  { size: 'L', chestInches: '40–42"', chestCm: '102–107 cm', lengthCm: '74 cm', sleeveCm: '67 cm' },
  { size: 'XL', chestInches: '42–44"', chestCm: '107–112 cm', lengthCm: '76 cm', sleeveCm: '69 cm' },
  { size: 'XXL', chestInches: '44–46"', chestCm: '112–117 cm', lengthCm: '78 cm', sleeveCm: '70 cm' },
  { size: 'XXXL', chestInches: '46–48"', chestCm: '117–122 cm', lengthCm: '80 cm', sleeveCm: '71 cm' },
];

export const WHO_WE_SERVE_TAGS = [
  'Companies',
  'Businesses',
  'Corporate teams',
  'Staff teams',
  'Organizations',
  'Schools',
  'Construction companies',
  'Security companies',
  'Logistics companies',
  'Hospitality businesses',
  'Sports teams',
  'Events & associations'
];

export const WHY_CHOOSE_CARDS = [
  {
    title: 'Professional Appearance',
    kicker: 'First Impressions',
    description: 'Give your team an authoritative, cohesive presence on client visits, company events, and daily operations with tailored, premium cuts.',
    metric: '94% of clients',
    metricDetail: 'report heightened brand trust when client-facing staff wear branded outerwear'
  },
  {
    title: 'Team Identity',
    kicker: 'Company Culture',
    description: 'Bring your organization’s identity to life. From executive management to logistics dispatch, unified gear people wear proudly.',
    metric: 'Over 25,000+ staff',
    metricDetail: 'outfitted across corporate teams, logistics fleets, and education cohorts'
  },
  {
    title: 'Brand Visibility',
    kicker: 'Walking Billboard',
    description: 'Turn your everyday team mobility into high-impact marketing. Permanent Madeira embroidery and high-density logos stand out everywhere.',
    metric: '3.2M Impressions',
    metricDetail: 'estimated lifetime brand visibility generated per 100 branded corporate jackets'
  },
  {
    title: 'Staff & Company Branding',
    kicker: 'Engineered Durability',
    description: 'Invest in garments that outlast typical promotional apparel. Industrial-grade stitching, weather-sealed zips, and wash-fast colourways.',
    metric: '5-Year Longevity',
    metricDetail: 'grade fabrics tested for repeated commercial laundering and outdoor exposure'
  }
];

export const HOW_IT_WORKS_STEPS = [
  {
    step: '01',
    title: 'Choose Your Industry',
    subtitle: 'Explore 8 JD Pro collections',
    description: 'Select your sector — Corporate, Logistics, Tactical, Campus, Safari, Sport, Mining, or Healthcare — to view purpose-built outerwear.'
  },
  {
    step: '02',
    title: 'Tell Us What You Need',
    subtitle: 'Configure styles, sizes & branding',
    description: 'Choose your jacket style, enter quantities across XS–XXXL or custom measurements, and specify embroidery, printing, or reflective trims.'
  },
  {
    step: '03',
    title: 'Send Your Order on WhatsApp',
    subtitle: 'Instant direct connection to our desk',
    description: 'Click to launch your pre-formatted order summary directly into our Gaborone WhatsApp production desk with your exact specifications.'
  },
  {
    step: '04',
    title: 'Get Your Quote',
    subtitle: 'Fast design proof & quotation',
    description: 'Receive an official invoice quote along with visual digital mockups showing your exact logo placement, thread colors, and sizing breakdown.'
  },
  {
    step: '05',
    title: 'Approve & Produce',
    subtitle: 'Meticulous manufacturing & delivery',
    description: 'Upon proof sign-off, our precision manufacturing kicks off. We inspect every seam, label individually by size, and deliver to your door.'
  }
];
