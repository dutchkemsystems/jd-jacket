export interface JacketStyle {
  id: string;
  sku: string;
  name: string;
  category: 'Puffer' | 'Softshell' | 'Parka' | 'Fleece' | 'Safety' | 'Bomber' | 'Windbreaker' | 'Vest' | 'Hybrid' | 'Technical';
  industry: string;
  tagline: string;
  description: string;
  moq: number; // Minimum Order Quantity
  leadTime: string;
  weatherRating: 'Waterproof (10k)' | 'Water-Resistant' | 'Windproof' | 'Extreme Cold (-20°C)' | 'All-Weather';
  availableColours: { name: string; hex: string; accentHex?: string }[];
  brandingMethods: ('Embroidery' | 'Screen Printing' | '3D Silicone Badge' | 'Reflective Transfer')[];
  recommendedPlacements: ('Left Chest' | 'Right Chest' | 'Back Center' | 'Left Sleeve' | 'Right Sleeve' | 'Collar')[];
  featured?: boolean;
  priceGuide: string;
  fabricSpecs: string;
}

export const JACKET_STYLES: JacketStyle[] = [
  {
    id: 'executive-puffer',
    sku: 'JD-EP01',
    name: 'Executive Puffer Jacket',
    category: 'Puffer',
    industry: 'Corporate & Office Teams',
    tagline: 'Refined insulation engineered for corporate leadership and modern workplace agility.',
    description: 'Matte micro-ripstop shell filled with eco-down insulation. Features hidden internal security pocket, fleece-lined chin guard, and ergonomic cut designed to fit comfortably over suits and business attire.',
    moq: 15,
    leadTime: '7–10 days',
    weatherRating: 'Water-Resistant',
    availableColours: [
      { name: 'Midnight Obsidian', hex: '#141416', accentHex: '#262629' },
      { name: 'Corporate Navy', hex: '#16233B', accentHex: '#25385C' },
      { name: 'Steel Graphite', hex: '#34383F', accentHex: '#4A4F59' },
      { name: 'Alpine Moss', hex: '#243329', accentHex: '#354D3D' },
    ],
    brandingMethods: ['Embroidery', '3D Silicone Badge'],
    recommendedPlacements: ['Left Chest', 'Left Sleeve', 'Collar'],
    featured: true,
    priceGuide: 'From $48 / unit',
    fabricSpecs: '100% Recycled Nylon Ripstop with DWR finish, 280gsm synthetic cluster insulation'
  },
  {
    id: 'technical-softshell',
    sku: 'JD-TS02',
    name: 'Technical Softshell Jacket',
    category: 'Softshell',
    industry: 'Logistics & Transport',
    tagline: 'Breathable 3-layer stretch membrane tailored for active dispatch and field operations.',
    description: 'Engineered bonded softshell with breathable micro-fleece interior. Water-shedding exterior with articulated sleeves and bonded zip pockets for daily mobility.',
    moq: 15,
    leadTime: '7–10 days',
    weatherRating: 'Waterproof (10k)',
    availableColours: [
      { name: 'Carbon Black', hex: '#171717', accentHex: '#262626' },
      { name: 'Royal Fleet', hex: '#1E3A8A', accentHex: '#2563EB' },
      { name: 'Storm Grey', hex: '#4B5563', accentHex: '#6B7280' },
      { name: 'Signal Orange Trim', hex: '#1C1917', accentHex: '#EA580C' }
    ],
    brandingMethods: ['Embroidery', 'Screen Printing', 'Reflective Transfer'],
    recommendedPlacements: ['Left Chest', 'Back Center', 'Right Sleeve'],
    priceGuide: 'From $42 / unit',
    fabricSpecs: '320gsm 3-layer bonded polyester/spandex with TPU waterproof membrane (8,000mm/3,000g)'
  },
  {
    id: 'heavy-weather-parka',
    sku: 'JD-HW03',
    name: 'Heavy Weather Expedition Parka',
    category: 'Parka',
    industry: 'Construction, Mining & Engineering',
    tagline: 'Rugged severe-weather protection with storm-flap seals and thermal containment.',
    description: 'Heavyweight ripstop outer shell with seam-sealed taped waterproofing and detachable storm hood. Built for sub-zero outdoor sites and industrial field teams.',
    moq: 10,
    leadTime: '10–14 days',
    weatherRating: 'Extreme Cold (-20°C)',
    availableColours: [
      { name: 'Tough Black', hex: '#121212', accentHex: '#292524' },
      { name: 'Worksite Navy', hex: '#172554', accentHex: '#1D4ED8' },
      { name: 'Industrial Khaki', hex: '#57534E', accentHex: '#78716C' }
    ],
    brandingMethods: ['Embroidery', 'Reflective Transfer', '3D Silicone Badge'],
    recommendedPlacements: ['Left Chest', 'Back Center', 'Left Sleeve'],
    priceGuide: 'From $68 / unit',
    fabricSpecs: '450D Oxford Nylon with PU 10,000mm coating, 350gsm quilted thermal fill'
  },
  {
    id: 'corporate-microfleece',
    sku: 'JD-CF04',
    name: 'Corporate Microfleece Full-Zip',
    category: 'Fleece',
    industry: 'Corporate & Office Teams',
    tagline: 'Anti-pill bonded microfleece for climate-controlled offices and transitional layering.',
    description: 'Lightweight, ultra-soft anti-pill fleece featuring raglan sleeve construction and tonal coil zippers. Ideal for indoor corporate staff uniforms and customer-facing teams.',
    moq: 20,
    leadTime: '5–7 days',
    weatherRating: 'Windproof',
    availableColours: [
      { name: 'Executive Black', hex: '#18181B', accentHex: '#27272A' },
      { name: 'Heather Charcoal', hex: '#374151', accentHex: '#4B5563' },
      { name: 'Deep Harbor Blue', hex: '#0F172A', accentHex: '#1E293B' },
      { name: 'Burgundy Wine', hex: '#4C0519', accentHex: '#881337' }
    ],
    brandingMethods: ['Embroidery', '3D Silicone Badge'],
    recommendedPlacements: ['Left Chest', 'Right Chest', 'Collar'],
    priceGuide: 'From $32 / unit',
    fabricSpecs: '260gsm 100% Anti-pill Polyester microfleece, double-brushed'
  },
  {
    id: 'high-vis-safety-shell',
    sku: 'JD-HV05',
    name: 'High-Vis Safety Shell Jacket',
    category: 'Safety',
    industry: 'Security & Operational Teams',
    tagline: 'Certified ANSI/EN compliant high-visibility outer shell with 3M reflective tape.',
    description: 'Fluorescent waterproof outer shell with certified retro-reflective chevron striping, radio loops, and ID badge window. Keeps field personnel safe and immediately identifiable.',
    moq: 15,
    leadTime: '7–10 days',
    weatherRating: 'Waterproof (10k)',
    availableColours: [
      { name: 'Safety Hi-Vis Yellow', hex: '#CA8A04', accentHex: '#000000' },
      { name: 'Hi-Vis Safety Orange', hex: '#C2410C', accentHex: '#000000' },
      { name: 'Two-Tone Navy & Yellow', hex: '#1E293B', accentHex: '#EAB308' }
    ],
    brandingMethods: ['Reflective Transfer', 'Screen Printing', 'Embroidery'],
    recommendedPlacements: ['Left Chest', 'Back Center', 'Right Sleeve'],
    priceGuide: 'From $46 / unit',
    fabricSpecs: '300D Polyester Oxford with PU backing, Class 3 certified 3M Scotchlite tape'
  },
  {
    id: 'heritage-varsity-bomber',
    sku: 'JD-VB06',
    name: 'Heritage Varsity Bomber',
    category: 'Bomber',
    industry: 'Schools & Education',
    tagline: 'Classic collegiate wool-blend torso with leatherette sleeves and striped rib trim.',
    description: 'Iconic varsity silhouette popular with secondary schools, universities, alumni associations, and creative brand agencies. Fully custom striped collar and cuff tipping.',
    moq: 20,
    leadTime: '12–16 days',
    weatherRating: 'Windproof',
    availableColours: [
      { name: 'School Navy & Cream', hex: '#1E3A8A', accentHex: '#FEF3C7' },
      { name: 'Varsity Black & White', hex: '#18181B', accentHex: '#F4F4F5' },
      { name: 'Maroon & Gold', hex: '#7F1D1D', accentHex: '#F59E0B' },
      { name: 'Forest Green & Cream', hex: '#14532D', accentHex: '#FEF3C7' }
    ],
    brandingMethods: ['Embroidery', 'Screen Printing'],
    recommendedPlacements: ['Left Chest', 'Back Center', 'Left Sleeve'],
    priceGuide: 'From $54 / unit',
    fabricSpecs: 'Heavyweight 450gsm wool blend body with premium vegan leather sleeves and satin lining'
  },
  {
    id: 'packable-windbreaker',
    sku: 'JD-LW07',
    name: 'Lightweight Packable Windbreaker',
    category: 'Windbreaker',
    industry: 'Sports & Events',
    tagline: 'Featherweight weather shield that packs into its own pocket for event crews.',
    description: 'Compact 85gsm ripstop nylon with water-repellent coating. Features elastic storm hood, hem cinch toggles, and breathable underarm eyelets.',
    moq: 25,
    leadTime: '5–7 days',
    weatherRating: 'Water-Resistant',
    availableColours: [
      { name: 'Matte Black', hex: '#0A0A0A', accentHex: '#27272A' },
      { name: 'Electric Cyan', hex: '#0284C7', accentHex: '#38BDF8' },
      { name: 'Team Crimson', hex: '#B91C1C', accentHex: '#EF4444' },
      { name: 'Pure White Shell', hex: '#F8FAFC', accentHex: '#0F172A' }
    ],
    brandingMethods: ['Screen Printing', 'Reflective Transfer', 'Embroidery'],
    recommendedPlacements: ['Left Chest', 'Back Center', 'Right Sleeve'],
    priceGuide: 'From $28 / unit',
    fabricSpecs: '85gsm 100% Micro-polyester with water-repellent and wind-lock weave'
  },
  {
    id: 'quilted-field-vest',
    sku: 'JD-QV08',
    name: 'Quilted Field Bodywarmer Vest',
    category: 'Vest',
    industry: 'Tourism & Hospitality',
    tagline: 'Sleeveless diamond-quilted warmth that allows unrestricted hospitality service.',
    description: 'Sophisticated diamond quilt pattern with brass-finish snaps and high stand collar. Perfect for safari lodges, vineyard staff, outdoor tour guides, and hotel concierges.',
    moq: 15,
    leadTime: '7–10 days',
    weatherRating: 'Windproof',
    availableColours: [
      { name: 'Safari Olive', hex: '#36453B', accentHex: '#596F62' },
      { name: 'Tavern Navy', hex: '#1E293B', accentHex: '#334155' },
      { name: 'Rich Tobacco', hex: '#451A03', accentHex: '#78350F' },
      { name: 'Shadow Black', hex: '#171717', accentHex: '#262626' }
    ],
    brandingMethods: ['Embroidery', '3D Silicone Badge'],
    recommendedPlacements: ['Left Chest', 'Collar'],
    priceGuide: 'From $39 / unit',
    fabricSpecs: 'Diamond-stitched matte peach-finish polyester with 180gsm polyfill'
  },
  {
    id: 'hybrid-bonded-knit',
    sku: 'JD-HB09',
    name: 'Hybrid Bonded Performance Jacket',
    category: 'Hybrid',
    industry: 'Corporate & Office Teams',
    tagline: 'Padded insulated core combined with stretch-knit active sleeves.',
    description: 'The modern executive uniform standard: lightweight baffle insulation across the chest and back paired with technical knit stretch sleeves for all-day computer & travel comfort.',
    moq: 15,
    leadTime: '7–10 days',
    weatherRating: 'Water-Resistant',
    availableColours: [
      { name: 'Anthracite / Black', hex: '#1C1917', accentHex: '#44403C' },
      { name: 'Navy / Heather Slate', hex: '#0F172A', accentHex: '#334155' }
    ],
    brandingMethods: ['Embroidery', '3D Silicone Badge'],
    recommendedPlacements: ['Left Chest', 'Left Sleeve', 'Collar'],
    priceGuide: 'From $49 / unit',
    fabricSpecs: 'Body: 100% nylon 120gsm with insulation; Sleeves: 94% polyester 6% spandex knit'
  },
  {
    id: 'all-weather-storm-shield',
    sku: 'JD-SS10',
    name: 'All-Weather Storm Shield Jacket',
    category: 'Technical',
    industry: 'Logistics & Transport',
    tagline: 'Fully taped seams with waterproof storm flap and concealed helmet hood.',
    description: 'Engineered for rainy delivery routes and seaport cargo handlers. Features waterproof zippers, storm storm cuffs with thumb loops, and drop-tail hem for cycling/driving.',
    moq: 15,
    leadTime: '8–12 days',
    weatherRating: 'Waterproof (10k)',
    availableColours: [
      { name: 'Black Seal', hex: '#0F172A', accentHex: '#1E293B' },
      { name: 'Dark Petrol', hex: '#134E4A', accentHex: '#0D9488' },
      { name: 'Storm Grey', hex: '#374151', accentHex: '#6B7280' }
    ],
    brandingMethods: ['Reflective Transfer', 'Screen Printing', 'Embroidery'],
    recommendedPlacements: ['Left Chest', 'Back Center', 'Right Sleeve'],
    priceGuide: 'From $52 / unit',
    fabricSpecs: '3-layer ripstop taslan with microporous 10,000mm/10,000g waterproof membrane'
  },
  {
    id: 'corporate-track-zip',
    sku: 'JD-CT11',
    name: 'Athletic Team Track Jacket',
    category: 'Technical',
    industry: 'Sports & Events',
    tagline: 'Moisture-wicking tricot poly zip with contrast shoulder piping for athletic staff.',
    description: 'Designed for coaching staff, marathon event directors, and university sports delegations. Features ribbed cuffs and hem with quick-dry inner mesh lining.',
    moq: 20,
    leadTime: '6–8 days',
    weatherRating: 'Windproof',
    availableColours: [
      { name: 'Stadium Red & White', hex: '#991B1B', accentHex: '#F8FAFC' },
      { name: 'Cobalt Blue & White', hex: '#1D4ED8', accentHex: '#F8FAFC' },
      { name: 'Pitch Black & Gold', hex: '#18181B', accentHex: '#EAB308' },
      { name: 'Emerald & White', hex: '#065F46', accentHex: '#F8FAFC' }
    ],
    brandingMethods: ['Embroidery', 'Screen Printing'],
    recommendedPlacements: ['Left Chest', 'Back Center', 'Left Sleeve'],
    priceGuide: 'From $34 / unit',
    fabricSpecs: '240gsm brushed tricot polyester with anti-static and anti-odor treatment'
  },
  {
    id: 'tactical-ops-jacket',
    sku: 'JD-TO12',
    name: 'Tactical Operations Jacket',
    category: 'Technical',
    industry: 'Security & Operational Teams',
    tagline: 'Concealed utility pockets, reinforced elbow patches, and mic loop tabs.',
    description: 'Specialist outerwear designed for private security details, cash transit escorts, and airport field security. Features heavy-duty YKK two-way zips and discreet side sidearm access.',
    moq: 15,
    leadTime: '10–14 days',
    weatherRating: 'Waterproof (10k)',
    availableColours: [
      { name: 'Tactical Black', hex: '#121212', accentHex: '#262626' },
      { name: 'Operational Navy', hex: '#0B132B', accentHex: '#1C2541' },
      { name: 'Ranger Olive', hex: '#283618', accentHex: '#606C38' }
    ],
    brandingMethods: ['3D Silicone Badge', 'Embroidery', 'Reflective Transfer'],
    recommendedPlacements: ['Left Chest', 'Right Chest', 'Left Sleeve', 'Right Sleeve'],
    priceGuide: 'From $59 / unit',
    fabricSpecs: 'Teflon-coated 330D Cordura-reinforced stretch ripstop with fleece backing'
  },
  {
    id: 'hospitality-tailored-blazer',
    sku: 'JD-HT13',
    name: 'Hospitality Soft-Shell Tailored Blazer',
    category: 'Softshell',
    industry: 'Tourism & Hospitality',
    tagline: 'Structured corporate blazer styling with modern weather-resistant stretch fabric.',
    description: 'Bridges the gap between formal corporate front-of-house blazers and practical outdoor hotel management outerwear. Resists rain splatters while looking crisp and professional.',
    moq: 12,
    leadTime: '10–14 days',
    weatherRating: 'Water-Resistant',
    availableColours: [
      { name: 'Formal Charcoal', hex: '#27272A', accentHex: '#3F3F46' },
      { name: 'Concierge Navy', hex: '#1E293B', accentHex: '#334155' },
      { name: 'Luxe Camel', hex: '#78350F', accentHex: '#B45309' }
    ],
    brandingMethods: ['Embroidery', '3D Silicone Badge'],
    recommendedPlacements: ['Left Chest', 'Collar'],
    priceGuide: 'From $58 / unit',
    fabricSpecs: '280gsm stretch woven polyester with micro-repellent finish and soft viscose lining'
  },
  {
    id: 'sub-zero-freezer-parka',
    sku: 'JD-SZ14',
    name: 'Sub-Zero Cold Chain Duty Parka',
    category: 'Parka',
    industry: 'Logistics & Transport',
    tagline: 'Extreme thermal barrier certified for cold storage (-30°C) and refrigerated freight.',
    description: 'Engineered specifically for walk-in freezer logistics and pharmaceutical cold chains. Features freeze-resistant nylon teeth, internal hand warmer pockets, and insulated neck baffle.',
    moq: 10,
    leadTime: '12–16 days',
    weatherRating: 'Extreme Cold (-20°C)',
    availableColours: [
      { name: 'Cold Vault Navy', hex: '#0F172A', accentHex: '#0284C7' },
      { name: 'Freezer Black / Orange', hex: '#18181B', accentHex: '#EA580C' }
    ],
    brandingMethods: ['Reflective Transfer', 'Embroidery'],
    recommendedPlacements: ['Left Chest', 'Back Center', 'Right Sleeve'],
    priceGuide: 'From $74 / unit',
    fabricSpecs: '420D Nylon Oxford shell with 400gsm hollow-fiber cold chain insulation'
  },
  {
    id: 'campus-collegiate-jacket',
    sku: 'JD-CC15',
    name: 'Campus Collegiate Pullover Jacket',
    category: 'Windbreaker',
    industry: 'Schools & Education',
    tagline: 'Retro half-zip anorak with kangaroo pouch and contrasting school block panels.',
    description: 'Youth-favourite athletic outerwear for prefect bodies, sports tours, and university societies. Packable into front pouch with custom branded zipper pullers.',
    moq: 20,
    leadTime: '7–10 days',
    weatherRating: 'Windproof',
    availableColours: [
      { name: 'Navy & Golden Amber', hex: '#172554', accentHex: '#F59E0B' },
      { name: 'Black & Forest Green', hex: '#18181B', accentHex: '#15803D' },
      { name: 'Royal & Bright White', hex: '#1D4ED8', accentHex: '#F8FAFC' }
    ],
    brandingMethods: ['Screen Printing', 'Embroidery'],
    recommendedPlacements: ['Left Chest', 'Back Center', 'Left Sleeve'],
    priceGuide: 'From $36 / unit',
    fabricSpecs: '100% Crinkle Taslan Nylon with breathable mesh torso lining'
  },
  {
    id: 'eco-recycled-softshell',
    sku: 'JD-ER16',
    name: 'Eco-Recycled Sustainability Shell',
    category: 'Softshell',
    industry: 'Corporate & Office Teams',
    tagline: 'Certified 100% GRS recycled plastic bottles with GOTS organic trims.',
    description: 'Designed for companies with strict ESG and sustainability mandates. Each jacket repurposes approximately 28 PET plastic bottles from waterways.',
    moq: 20,
    leadTime: '10–12 days',
    weatherRating: 'Water-Resistant',
    availableColours: [
      { name: 'Eco Pine Green', hex: '#14532D', accentHex: '#22C55E' },
      { name: 'Ocean Slate', hex: '#0E7490', accentHex: '#38BDF8' },
      { name: 'Recycled Mineral Black', hex: '#1C1917', accentHex: '#44403C' }
    ],
    brandingMethods: ['Embroidery', '3D Silicone Badge'],
    recommendedPlacements: ['Left Chest', 'Left Sleeve', 'Collar'],
    priceGuide: 'From $45 / unit',
    fabricSpecs: '100% Post-consumer GRS Recycled Polyester with bluesign certified DWR'
  },
  {
    id: 'logistics-transition-anorak',
    sku: 'JD-LA17',
    name: 'Logistics Transition Anorak',
    category: 'Windbreaker',
    industry: 'Logistics & Transport',
    tagline: 'Medium-weight transitional jacket for multi-drop drivers in changing seasons.',
    description: 'Durable water-repellent shell with midweight poly-taffeta lining, reinforced seat panel for driving abrasion, and easy-access tablet front pouch.',
    moq: 15,
    leadTime: '7–10 days',
    weatherRating: 'Water-Resistant',
    availableColours: [
      { name: 'Courier Charcoal', hex: '#262626', accentHex: '#525252' },
      { name: 'Transit Blue', hex: '#1E3A8A', accentHex: '#3B82F6' }
    ],
    brandingMethods: ['Screen Printing', 'Reflective Transfer', 'Embroidery'],
    recommendedPlacements: ['Left Chest', 'Back Center', 'Right Sleeve'],
    priceGuide: 'From $38 / unit',
    fabricSpecs: '210T Ripstop Nylon with acrylic water-seal coating and micro-mesh back vent'
  },
  {
    id: 'healthcare-cleanshield',
    sku: 'JD-HC18',
    name: 'Healthcare CleanShield Warmup Zip',
    category: 'Technical',
    industry: 'Healthcare & Care Teams',
    tagline: 'Antimicrobial and fluid-resistant warmup jacket for medical staff in cold clinics.',
    description: 'Engineered for doctors, nurses, and hospice care workers who need outer warmth without compromising hygiene. Withstands high-temperature industrial laundering.',
    moq: 15,
    leadTime: '6–9 days',
    weatherRating: 'Windproof',
    availableColours: [
      { name: 'Medical Navy', hex: '#0F172A', accentHex: '#38BDF8' },
      { name: 'Ceil Clinical Blue', hex: '#0284C7', accentHex: '#BAE6FD' },
      { name: 'Hospital Pewter', hex: '#4B5563', accentHex: '#9CA3AF' }
    ],
    brandingMethods: ['Embroidery', 'Screen Printing'],
    recommendedPlacements: ['Left Chest', 'Right Chest', 'Left Sleeve'],
    priceGuide: 'From $36 / unit',
    fabricSpecs: '72% Poly / 21% Rayon / 7% Spandex Silvadur antimicrobial treated weave'
  },
  {
    id: 'event-staff-waterproof-shell',
    sku: 'JD-ES19',
    name: 'Event Operations Weatherproof Shell',
    category: 'Technical',
    industry: 'Sports & Events',
    tagline: 'High-visibility branded staff outerwear for festival and concert organizers.',
    description: 'Built for festival crew, outdoor stadium marshals, and VIP coordination. Includes radio mic loops, large back print zone, and concealed hood.',
    moq: 20,
    leadTime: '5–8 days',
    weatherRating: 'Waterproof (10k)',
    availableColours: [
      { name: 'Production Crew Black', hex: '#0A0A0A', accentHex: '#DC2626' },
      { name: 'High-Visibility Neon Amber', hex: '#D97706', accentHex: '#18181B' }
    ],
    brandingMethods: ['Screen Printing', 'Reflective Transfer', 'Embroidery'],
    recommendedPlacements: ['Left Chest', 'Back Center', 'Left Sleeve', 'Right Sleeve'],
    priceGuide: 'From $44 / unit',
    fabricSpecs: 'Ripstop 300D polyester with 10,000mm hydrostatic head rating'
  },
  {
    id: 'executive-merino-hybrid',
    sku: 'JD-EM20',
    name: 'Executive Merino Hybrid Cardigan',
    category: 'Fleece',
    industry: 'Corporate & Office Teams',
    tagline: 'Australian merino wool knitted arms with discreetly quilted windproof chest.',
    description: 'The pinnacle luxury piece for corporate gifts, boardroom executive wear, and high-value client presentations. Subtle, quiet luxury with discrete tonal embroidery.',
    moq: 10,
    leadTime: '12–15 days',
    weatherRating: 'Windproof',
    availableColours: [
      { name: 'Boardroom Midnight', hex: '#0F172A', accentHex: '#1E293B' },
      { name: 'Heather Charcoal Luxe', hex: '#334155', accentHex: '#475569' },
      { name: 'Rich Espresso', hex: '#3B2314', accentHex: '#52341F' }
    ],
    brandingMethods: ['Embroidery', '3D Silicone Badge'],
    recommendedPlacements: ['Left Chest', 'Collar'],
    priceGuide: 'From $62 / unit',
    fabricSpecs: '100% Extra-fine Merino wool knit sleeves (12 gauge) + micro-quilted down-touch chest'
  }
];

export interface IndustryItem {
  id: string;
  name: string;
  shortName: string;
  description: string;
  iconName: string;
  recommendedStyles: string[];
  keyNeed: string;
  typicalOrderSize: string;
}

export const INDUSTRIES: IndustryItem[] = [
  {
    id: 'corporate-office',
    name: 'Corporate & Office Teams',
    shortName: 'Corporate',
    description: 'Modern executive puffers, sleek fleece layers, and hybrid blazers designed to elevate your company brand from boardroom meetings to client commutes.',
    iconName: 'Building2',
    recommendedStyles: ['executive-puffer', 'corporate-microfleece', 'hybrid-bonded-knit', 'executive-merino-hybrid'],
    keyNeed: 'Polished executive fit, lightweight indoor/outdoor versatility',
    typicalOrderSize: '25–150 units'
  },
  {
    id: 'logistics-transport',
    name: 'Logistics & Transport',
    shortName: 'Logistics',
    description: 'Weatherproof softshells and transition anoraks tailored for truck fleets, parcel delivery couriers, warehouse managers, and freight terminals.',
    iconName: 'Truck',
    recommendedStyles: ['technical-softshell', 'all-weather-storm-shield', 'logistics-transition-anorak', 'sub-zero-freezer-parka'],
    keyNeed: 'Abrasion resistance, weatherproofing, driving mobility',
    typicalOrderSize: '50–500 units'
  },
  {
    id: 'security-operations',
    name: 'Security & Operational Teams',
    shortName: 'Security',
    description: 'Discreet tactical ops jackets and certified high-visibility safety coats engineered with durable fabrics, radio loops, and weather barriers.',
    iconName: 'ShieldCheck',
    recommendedStyles: ['tactical-ops-jacket', 'high-vis-safety-shell', 'heavy-weather-parka'],
    keyNeed: 'Tough ripstop durability, tactical utility, high visibility',
    typicalOrderSize: '30–200 units'
  },
  {
    id: 'schools-education',
    name: 'Schools & Education',
    shortName: 'Education',
    description: 'Heritage varsity bomber jackets, track outerwear, and collegiate pullovers for prefect councils, sports tours, teacher faculties, and alumni cohorts.',
    iconName: 'GraduationCap',
    recommendedStyles: ['heritage-varsity-bomber', 'campus-collegiate-jacket', 'packable-windbreaker'],
    keyNeed: 'School colour matching, long-lasting embroidery, mixed student sizing',
    typicalOrderSize: '50–400 units'
  },
  {
    id: 'tourism-hospitality',
    name: 'Tourism & Hospitality',
    shortName: 'Hospitality',
    description: 'Quilted field vests and tailored softshells crafted for safari lodges, luxury hotels, winery tour guides, resort front desks, and concierge teams.',
    iconName: 'Compass',
    recommendedStyles: ['quilted-field-vest', 'hospitality-tailored-blazer', 'executive-puffer'],
    keyNeed: 'Impeccable first impressions, warmth without bulk, guest comfort',
    typicalOrderSize: '20–100 units'
  },
  {
    id: 'sports-events',
    name: 'Sports & Events',
    shortName: 'Sports',
    description: 'Athletic track jackets, festival crew windbreakers, and race marshal coats with moisture-wicking linings and high-impact branding zones.',
    iconName: 'Trophy',
    recommendedStyles: ['corporate-track-zip', 'packable-windbreaker', 'event-staff-waterproof-shell'],
    keyNeed: 'Vibrant sponsor branding, sweat management, lightweight packing',
    typicalOrderSize: '40–300 units'
  },
  {
    id: 'construction-mining',
    name: 'Construction, Mining & Engineering',
    shortName: 'Construction',
    description: 'Severe-weather expedition parkas with 10k waterproof membranes, heavy-duty Oxford reinforcement, and taped thermal insulation for worksites.',
    iconName: 'HardHat',
    recommendedStyles: ['heavy-weather-parka', 'high-vis-safety-shell', 'all-weather-storm-shield'],
    keyNeed: 'Extreme cold resistance, heavy tear strength, site safety',
    typicalOrderSize: '25–250 units'
  },
  {
    id: 'healthcare-care',
    name: 'Healthcare & Care Teams',
    shortName: 'Healthcare',
    description: 'CleanShield warmup zips and soft fleeces with antimicrobial fabric finishes, tailored for cold hospital wards, emergency EMS, and hospice workers.',
    iconName: 'HeartHandshake',
    recommendedStyles: ['healthcare-cleanshield', 'corporate-microfleece', 'eco-recycled-softshell'],
    keyNeed: 'Fluid resistance, silent stretch fabric, industrial wash endurance',
    typicalOrderSize: '20–150 units'
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
    question: 'How do you apply our company logo and branding to the jackets?',
    answer: 'We provide four commercial branding techniques: (1) High-Density Multi-Thread Embroidery — ideal for corporate puffers, softshells, and fleeces with up to 15 thread colours; (2) Precision Screen Printing — high durability for waterproof rain shells and large back prints; (3) 3D Embossed Silicone/Rubber Badges — a sleek, modern finish used by premium outdoor retail brands; and (4) 3M Reflective Heat Transfer — vital for high-visibility and security teams working in low light.'
  },
  {
    category: 'Sizing',
    question: 'What sizing options are available and can we mix sizes across our order?',
    answer: 'Yes, absolutely. We support standard unisex and tailored women’s sizing from XS through 3XL (and 4XL/5XL on select industrial models). You can mix any distribution of sizes across your order (e.g. 8x Small, 20x Medium, 15x Large, 4x XL) with zero penalty. We provide detailed measurement specs including chest circumference, sleeve length, and jacket length.'
  },
  {
    category: 'Order Quantities',
    question: 'What is the Minimum Order Quantity (MOQ)?',
    answer: 'Our standard Minimum Order Quantity is 15 units per style for standard corporate puffers and softshells, and 20 units for custom-dyed varsity jackets. For specialized heavy-duty industrial parkas, we accommodate orders starting at 10 units. We happily quote large corporate rollouts of 500+ units with tiered volume pricing.'
  },
  {
    category: 'Styles',
    question: 'Can we inspect or choose between different jacket styles and cuts?',
    answer: 'Yes! We feature 20 distinct outerwear styles spanning Executive Puffers, Technical 3-Layer Softshells, Heavy Weather Expedition Parkas, Diamond Quilted Vests, and Varsity Bombers. You can inspect front, back, and 360-degree views in our interactive showcase, and our team will recommend the optimal fabric weight for your region’s climate.'
  },
  {
    category: 'Colours',
    question: 'Can you match our exact corporate Pantone / brand colours?',
    answer: 'We stock core commercial colors (Midnight Black, Corporate Navy, Steel Charcoal, Forest Green, Burgundy, Hi-Vis Yellow/Orange) for immediate production turnaround. For orders exceeding 50 units, we offer custom Pantone (PMS) dyed shells, custom zipper pulls, and branded interior lining fabrics.'
  },
  {
    category: 'Embroidery vs Printing',
    question: 'Should we choose embroidery or printing for our team jackets?',
    answer: 'For textured materials like puffer jackets, micro-fleece, and softshell, high-density embroidery is the industry standard because it provides a rich, tactile, and permanent professional finish that will never peel or crack. For lightweight waterproof shells or oversized back graphics (e.g. 25cm across the shoulders for event marshals), screen printing or reflective heat transfer is recommended.'
  },
  {
    category: 'Artwork',
    question: 'What artwork format should we send on WhatsApp or email?',
    answer: 'We prefer vector files: PDF, Adobe Illustrator (.AI), EPS, or SVG with text converted to outlines. If you only have high-resolution PNG or JPG images (at least 300 DPI), our in-house graphics department will vectorize and digitize your logo for embroidery proofing at no extra fee.'
  },
  {
    category: 'Timeline',
    question: 'How fast is production and turnaround time?',
    answer: 'Once you approve your digital visual mock-up and quote on WhatsApp, standard production takes 7 to 10 working days. Rush orders (3–5 working days) can be accommodated depending on stock availability and branding complexity.'
  },
  {
    category: 'Delivery',
    question: 'Where do you deliver and how are the jackets packaged?',
    answer: 'We ship nationwide and internationally via reliable tracked courier services right to your corporate headquarters, factory gate, or distributed branch locations. Each jacket is individually steamed, folded, and polybagged with size labels for easy distribution to your staff members.'
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
    description: 'Give your team an authoritative, cohesive presence on client sites, corporate conferences, and daily operations with tailored, premium cuts.',
    metric: '94% of clients',
    metricDetail: 'report heightened brand trust when field representatives wear branded outerwear'
  },
  {
    title: 'Team Identity',
    kicker: 'Company Culture',
    description: 'Foster belonging and organizational pride across departments, from warehouse dispatchers to executive suites, with unified gear people love wearing.',
    metric: 'Over 25,000+ staff',
    metricDetail: 'outfitted across corporate teams, logistics fleets, and education cohorts'
  },
  {
    title: 'Brand Visibility',
    kicker: 'Walking Billboard',
    description: 'Turn your everyday team mobility into high-impact marketing. High-density embroidery and weather-resistant logos stand out in any environment.',
    metric: '3.2M Impressions',
    metricDetail: 'estimated lifetime brand visibility generated per 100 branded corporate jackets'
  },
  {
    title: 'Staff & Company Branding',
    kicker: 'Engineered Durability',
    description: 'Invest in garments that outlast typical promotional apparel. Industrial-grade stitching, weather-sealed zips, and colour-fast fabrics that endure washing.',
    metric: '5-Year Longevity',
    metricDetail: 'grade fabrics tested for repeated commercial laundering and outdoor exposure'
  }
];

export const HOW_IT_WORKS_STEPS = [
  {
    step: '01',
    title: 'Choose Your Industry',
    subtitle: 'Identify your operational requirements',
    description: 'Select your sector — corporate, transport, security, hospitality, education, or site work — to view purpose-built outerwear tailored for your work conditions.'
  },
  {
    step: '02',
    title: 'Tell Us What You Need',
    subtitle: 'Configure styles, sizes & branding',
    description: 'Specify your jacket style, mix sizes from XS to XXXL, choose your corporate colors, and select your branding method (embroidery, print, or silicone).'
  },
  {
    step: '03',
    title: 'Send Your Order on WhatsApp',
    subtitle: 'Instant direct connection to our team',
    description: 'Click to launch your pre-formatted order summary directly into our dedicated WhatsApp order desk, complete with your exact quantities and specifications.'
  },
  {
    step: '04',
    title: 'Get Your Quote',
    subtitle: 'Free digital mockup proof within 2 hours',
    description: 'Receive an official invoice quote along with a 3D digital mockup showing your exact logo placement, thread colors, and sizing breakdown.'
  },
  {
    step: '05',
    title: 'Approve & Produce',
    subtitle: 'Fast production & tracked courier delivery',
    description: 'Upon proof sign-off, our precision manufacturing kicks off. We inspect every seam, pack individually by size, and ship directly to your door.'
  }
];
