/* ======================================
   Shared Data for Travel Yatra Frontend
   ====================================== */

export interface Destination {
  id: string;
  slug: string;
  name: string;
  country: string;
  continent: string;
  tagline: string;
  description: string;
  highlights: string[];
  bestTimeToVisit: string;
  averageCostPerDay: string;
  currency: string;
  weather: { summer: string; winter: string; monsoon?: string };
  popularAttractions: string[];
  foodRecommendations: string[];
  travelTips: string[];
  imageUrl: string;
  detailImages: {
    highlights: string;
    trip: string;
    food: string;
  };
  rating: number;
  reviewCount: number;
  featured: boolean;
}

export interface Expedition {
  id: string;
  slug: string;
  title: string;
  destination: string;
  duration: string;
  price: number;
  originalPrice: number;
  currency: string;
  category: string;
  description: string;
  included: string[];
  excluded: string[];
  hotels: string;
  activities: string[];
  transport: string;
  meals: string;
  groupSize: string;
  difficulty: string;
  rating: number;
  reviewCount: number;
  featured: boolean;
  imageUrl: string;
}

export interface Story {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  author: string;
  date: string;
  readTime: string;
  imageUrl: string;
}

// ── Explore (Destinations) ─────────────────────────────────
export const destinations: Destination[] = [
  {
    id: '1',
    slug: 'bali',
    name: 'Bali',
    country: 'Indonesia',
    continent: 'Asia',
    tagline: 'Where the jungle meets the soul.',
    description: 'A sanctuary of terraced rice paddies, ancient temples, and pristine beaches. Bali invites you to disconnect from the noise and reconnect with nature. Discover hidden waterfalls, dive into vibrant coral reefs, and immerse yourself in centuries-old spiritual traditions.',
    highlights: ['Sacred Water Temples', 'Emerald Rice Terraces', 'Hidden Jungle Waterfalls', 'Volcano Sunrise Treks'],
    bestTimeToVisit: 'April — October',
    averageCostPerDay: '₹5,000 — ₹15,000',
    currency: 'Indonesian Rupiah (IDR)',
    weather: { summer: '27°C — 30°C', winter: '24°C — 28°C', monsoon: 'Nov — Mar' },
    popularAttractions: ['Sekumpul Waterfall', 'Tegallalang Rice Terraces', 'Campuhan Ridge Walk', 'Mount Batur Sunrise'],
    foodRecommendations: ['Nasi Campur', 'Sate Lilit', 'Fresh Coconut Water', 'Lawar'],
    travelTips: ['Embrace the slow pace (Jam Karet)', 'Respect local ceremonies', 'Venture north for untouched nature'],
    imageUrl: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=1600&q=80',
    detailImages: {
      highlights: 'https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?auto=format&fit=crop&w=800&q=80',
      trip: 'https://images.unsplash.com/photo-1539367628448-4bc5c9d171c8?auto=format&fit=crop&w=800&q=80',
      food: 'https://images.unsplash.com/photo-1563245372-f21724e3856d?auto=format&fit=crop&w=800&q=80'
    },
    rating: 4.9,
    reviewCount: 320,
    featured: true,
  },
  {
    id: '2',
    slug: 'japan',
    name: 'Japan',
    country: 'Japan',
    continent: 'Asia',
    tagline: 'A harmony of ancient tradition and breathless innovation.',
    description: 'Wander through serene bamboo groves, witness the fleeting beauty of cherry blossoms, and explore alpine villages seemingly frozen in time. Japan is a tapestry of profound contrasts, where every detail tells a story of craftsmanship and deep respect for nature.',
    highlights: ['Alpine Villages', 'Ancient Shrines', 'Forest Bathing', 'Culinary Artistry'],
    bestTimeToVisit: 'March — May, October — November',
    averageCostPerDay: '₹8,000 — ₹20,000',
    currency: 'Japanese Yen (JPY)',
    weather: { summer: '25°C — 35°C', winter: '2°C — 10°C' },
    popularAttractions: ['Arashiyama Bamboo Grove', 'Shirakawa-go', 'Fushimi Inari Shrine', 'Mount Fuji'],
    foodRecommendations: ['Kaiseki Ryori', 'Authentic Matcha', 'Fresh Sashimi', 'Mountain Soba'],
    travelTips: ['Experience a traditional Ryokan', 'Learn the art of bowing', 'Travel quietly on trains'],
    imageUrl: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=1600&q=80',
    detailImages: {
      highlights: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=800&q=80',
      trip: 'https://images.unsplash.com/photo-1522850959516-58f958dde2c1?auto=format&fit=crop&w=800&q=80',
      food: 'https://images.unsplash.com/photo-1615361200141-f45040f367be?auto=format&fit=crop&w=800&q=80'
    },
    rating: 5.0,
    reviewCount: 450,
    featured: true,
  },
  {
    id: '3',
    slug: 'switzerland',
    name: 'Swiss Alps',
    country: 'Switzerland',
    continent: 'Europe',
    tagline: 'Breathe in the alpine majesty.',
    description: 'Discover a landscape defined by towering snow-capped peaks, crystal-clear glacial lakes, and sweeping emerald valleys. The Swiss Alps are the ultimate playground for the curious explorer, offering breathtaking trails and dramatic scenic railways.',
    highlights: ['Glacial Lakes', 'Scenic Railways', 'Alpine Hiking', 'Stargazing'],
    bestTimeToVisit: 'June — September',
    averageCostPerDay: '₹12,000 — ₹35,000',
    currency: 'Swiss Franc (CHF)',
    weather: { summer: '18°C — 28°C', winter: '-5°C — 5°C' },
    popularAttractions: ['Matterhorn Base', 'Lauterbrunnen Valley', 'Oeschinensee', 'Glacier Express Route'],
    foodRecommendations: ['Alpine Cheese', 'Rösti', 'Fresh Mountain Berries'],
    travelTips: ['Hike the less-traveled trails early morning', 'Carry sustainable water bottles for glacial springs'],
    imageUrl: 'https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?auto=format&fit=crop&w=1600&q=80',
    detailImages: {
      highlights: 'https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?auto=format&fit=crop&w=800&q=80',
      trip: 'https://images.unsplash.com/photo-1528901166007-3784c7dd3653?auto=format&fit=crop&w=800&q=80',
      food: 'https://images.unsplash.com/photo-1603569283847-aa295f0d016a?auto=format&fit=crop&w=800&q=80'
    },
    rating: 4.9,
    reviewCount: 290,
    featured: true,
  },
  {
    id: '4',
    slug: 'patagonia',
    name: 'Patagonia',
    country: 'Chile & Argentina',
    continent: 'South America',
    tagline: 'The end of the earth, the beginning of adventure.',
    description: 'A vast, untamed wilderness of jagged granite peaks, massive shifting glaciers, and windswept steppes. Patagonia calls to the adventurous soul, promising profound solitude and an overwhelming sense of scale.',
    highlights: ['Perito Moreno Glacier', 'Torres del Paine', 'Wild Guanacos', 'Untamed Steppes'],
    bestTimeToVisit: 'November — early March',
    averageCostPerDay: '₹10,000 — ₹25,000',
    currency: 'CLP / ARS',
    weather: { summer: '10°C — 20°C', winter: '-5°C — 5°C' },
    popularAttractions: ['W Trek', 'Fitz Roy', 'Marble Caves', 'Tierra del Fuego'],
    foodRecommendations: ['Patagonian Lamb', 'Calafate Berry', 'Mate'],
    travelTips: ['Prepare for all four seasons in one day', 'Leave no trace principles are strictly enforced'],
    imageUrl: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=1600&q=80',
    detailImages: {
      highlights: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=800&q=80',
      trip: 'https://images.unsplash.com/photo-1526666923127-b2970f64b422?auto=format&fit=crop&w=800&q=80',
      food: 'https://images.unsplash.com/photo-1544148103-0773bf10d330?auto=format&fit=crop&w=800&q=80'
    },
    rating: 5.0,
    reviewCount: 180,
    featured: true,
  },
  {
    id: '5',
    slug: 'iceland',
    name: 'Iceland',
    country: 'Iceland',
    continent: 'Europe',
    tagline: 'A canvas of fire, ice, and aurora skies.',
    description: 'Wander across landscapes that feel distinctly otherworldly. From black sand beaches battered by the Atlantic to geothermal pools steaming under the midnight sun, Iceland is a testament to the raw, creative power of nature.',
    highlights: ['Northern Lights', 'Geothermal Pools', 'Volcanic Craters', 'Glacier Ice Caves'],
    bestTimeToVisit: 'September — March (Aurora), June — August (Midnight Sun)',
    averageCostPerDay: '₹12,000 — ₹35,000',
    currency: 'Icelandic Króna (ISK)',
    weather: { summer: '10°C — 15°C', winter: '-3°C — 3°C' },
    popularAttractions: ['Diamond Beach', 'Skógafoss', 'Landmannalaugar', 'Skaftafell Ice Cave'],
    foodRecommendations: ['Skyr', 'Rúgbrauð (Geothermal Bread)'],
    travelTips: ['Always check road conditions', 'Respect the unpredictable weather'],
    imageUrl: 'https://images.unsplash.com/photo-1476610182048-b716b8518aae?auto=format&fit=crop&w=1600&q=80',
    detailImages: {
      highlights: 'https://images.unsplash.com/photo-1476610182048-b716b8518aae?auto=format&fit=crop&w=800&q=80',
      trip: 'https://images.unsplash.com/photo-1520769945061-0a448c463865?auto=format&fit=crop&w=800&q=80',
      food: 'https://images.unsplash.com/photo-1559847844-5315695dadae?auto=format&fit=crop&w=800&q=80'
    },
    rating: 4.8,
    reviewCount: 310,
    featured: true,
  },
  {
    id: '6',
    slug: 'new-zealand',
    name: 'New Zealand',
    country: 'New Zealand',
    continent: 'Oceania',
    tagline: 'Wander into the heart of Middle-earth.',
    description: 'A haven of deep fiords, ancient native forests, and geothermal wonders. New Zealand embraces the spirit of exploration, offering endless winding roads that lead to spectacular, crowd-free vistas.',
    highlights: ['Milford Sound', 'Glowworm Caves', 'Maori Culture', 'Alpine Hikes'],
    bestTimeToVisit: 'December — March',
    averageCostPerDay: '₹9,000 — ₹25,000',
    currency: 'NZ Dollar (NZD)',
    weather: { summer: '20°C — 25°C', winter: '10°C — 15°C' },
    popularAttractions: ['Fiordland National Park', 'Mount Cook', 'Tongariro Alpine Crossing'],
    foodRecommendations: ['Green-lipped Mussels', 'Manuka Honey', 'Flat White Coffee'],
    travelTips: ['Embrace the campervan lifestyle', 'Protect the fragile native ecosystem'],
    imageUrl: 'https://images.unsplash.com/photo-1507699622108-4be3abd695ad?auto=format&fit=crop&w=1600&q=80',
    detailImages: {
      highlights: 'https://images.unsplash.com/photo-1506459225024-1428097a7e18?auto=format&fit=crop&w=800&q=80',
      trip: 'https://images.unsplash.com/photo-1469827160215-9d29e96e72f4?auto=format&fit=crop&w=800&q=80',
      food: 'https://images.unsplash.com/photo-1563245372-f21724e3856d?auto=format&fit=crop&w=800&q=80'
    },
    rating: 4.9,
    reviewCount: 275,
    featured: true,
  }
];

// ── Expeditions ─────────────────────────────────────
export const packages: Expedition[] = [
  {
    id: '1',
    slug: 'patagonia-frontier',
    title: 'The Patagonia Frontier',
    destination: 'Patagonia, Chile & Argentina',
    duration: '14 Days / 13 Nights',
    price: 345000,
    originalPrice: 390000,
    currency: '₹',
    category: 'Adventure',
    description: 'Trek the legendary trails of Torres del Paine and stand before the towering ice walls of Perito Moreno. This expedition is crafted for those who seek profound solitude and connection with the earth\'s most rugged landscapes.',
    included: ['Eco-Lodge Accommodations', 'Expert Mountain Guides', 'Park Permits', 'Domestic Flights', 'All Meals on Trek'],
    excluded: ['International Flights', 'Extreme Sports Insurance', 'Premium Gear Rental'],
    hotels: 'Sustainable Eco-Lodges and Refugios',
    activities: ['W Trek', 'Glacier Ice Hiking', 'Guanaco Tracking', 'Stargazing'],
    transport: 'Overland 4x4 and Domestic Flights',
    meals: 'Locally sourced meals and camp cooking',
    groupSize: '4-8 Explorers',
    difficulty: 'Challenging',
    rating: 5.0,
    reviewCount: 84,
    featured: true,
    imageUrl: 'https://images.unsplash.com/photo-1526666923127-b2970f64b422?auto=format&fit=crop&w=1600&q=80',
  },
  {
    id: '2',
    slug: 'japanese-zen-journey',
    title: 'Japanese Zen Journey',
    destination: 'Kyoto, Kanazawa, Japanese Alps',
    duration: '12 Days / 11 Nights',
    price: 295000,
    originalPrice: 320000,
    currency: '₹',
    category: 'Culture',
    description: 'Step away from the neon lights and delve into the quiet soul of Japan. Walk ancient samurai trails, meditate with monks in hidden temples, and bathe in natural forest hot springs.',
    included: ['Ryokan Stays', 'Japan Rail Pass', 'Tea Ceremony', 'Temple Meditation', 'Guided Hikes'],
    excluded: ['International Flights', 'Travel Insurance'],
    hotels: 'Traditional Ryokans and Heritage Guest Houses',
    activities: ['Nakasendo Trail Hike', 'Zazen Meditation', 'Kenroku-en Gardens', 'Onsen Bathing'],
    transport: 'Shinkansen and Local Trains',
    meals: 'Authentic Kaiseki and local delicacies',
    groupSize: '2-6 Explorers',
    difficulty: 'Moderate',
    rating: 4.9,
    reviewCount: 112,
    featured: true,
    imageUrl: 'https://images.unsplash.com/photo-1522850959516-58f958dde2c1?auto=format&fit=crop&w=1600&q=80',
  },
  {
    id: '3',
    slug: 'icelandic-aurora-expedition',
    title: 'Icelandic Aurora Expedition',
    destination: 'Iceland Ring Road',
    duration: '10 Days / 9 Nights',
    price: 275000,
    originalPrice: 310000,
    currency: '₹',
    category: 'Nature',
    description: 'Chase the ethereal Northern Lights across a landscape of volcanic craters, black sand beaches, and crystal ice caves. A journey that proves magic still exists on Earth.',
    included: ['Boutique Hotels', 'Super Jeep Tours', 'Ice Cave Entry', 'Hot Spring Passes'],
    excluded: ['International Flights', 'Winter Gear'],
    hotels: 'Remote Aurora-Viewing Boutique Hotels',
    activities: ['Ice Caving', 'Glacier Hiking', 'Aurora Hunting', 'Geothermal Bathing'],
    transport: '4x4 Super Jeeps',
    meals: 'Breakfast and 5 traditional dinners',
    groupSize: '4-10 Explorers',
    difficulty: 'Moderate',
    rating: 4.8,
    reviewCount: 95,
    featured: true,
    imageUrl: 'https://images.unsplash.com/photo-1520769945061-0a448c463865?auto=format&fit=crop&w=1600&q=80',
  },
  {
    id: '4',
    slug: 'sacred-valley-peru',
    title: 'Echoes of the Sacred Valley',
    destination: 'Cusco, Sacred Valley, Machu Picchu',
    duration: '9 Days / 8 Nights',
    price: 210000,
    originalPrice: 245000,
    currency: '₹',
    category: 'History',
    description: 'Immerse yourself in the mysteries of the ancient Inca. Trek through high-altitude cloud forests, engage with local Quechua communities, and witness sunrise over Machu Picchu.',
    included: ['Acclimatization Stays', 'Inca Trail Permits', 'Expert Historian Guide', 'Vistadome Train'],
    excluded: ['International Flights', 'Altitude Medication'],
    hotels: 'Heritage Hotels and Luxury Trekking Camps',
    activities: ['Inca Trail Trek', 'Weaving Workshop', 'Machu Picchu Sunrise', 'Salineras de Maras'],
    transport: 'Private Vans and Scenic Trains',
    meals: 'All meals during the trek, plus breakfasts',
    groupSize: '6-12 Explorers',
    difficulty: 'Challenging',
    rating: 5.0,
    reviewCount: 154,
    featured: true,
    imageUrl: 'https://images.unsplash.com/photo-1526392060635-9d6019884377?auto=format&fit=crop&w=1600&q=80',
  }
];

// ── Stories (Blog) ─────────────────────────────────────
export const blogPosts: Story[] = [
  {
    id: '1',
    slug: 'finding-silence-in-the-swiss-alps',
    title: 'Finding Silence in the High Alps',
    excerpt: 'Far from the ski resorts, there are valleys in Switzerland where the only sound is the wind through the pines and the distant crack of shifting ice.',
    category: 'Nature',
    author: 'Elena Rostova',
    date: 'March 15, 2025',
    readTime: '8 min read',
    imageUrl: 'https://images.unsplash.com/photo-1469334031218-e382a71b716b?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: '2',
    slug: 'the-art-of-forest-bathing-japan',
    title: 'Shinrin-Yoku: The Art of Forest Bathing',
    excerpt: 'How losing myself in the ancient cedar forests of Yakushima taught me the true meaning of connection.',
    category: 'Culture',
    author: 'Kenji Sato',
    date: 'February 28, 2025',
    readTime: '6 min read',
    imageUrl: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: '3',
    slug: 'chasing-auroras-iceland',
    title: 'Chasing the Green Dragon in Iceland',
    excerpt: 'It took four nights of freezing winds and countless cups of coffee, but when the sky finally danced, the world stood entirely still.',
    category: 'Adventure',
    author: 'Marcus Vance',
    date: 'February 10, 2025',
    readTime: '12 min read',
    imageUrl: 'https://images.unsplash.com/photo-1520769945061-0a448c463865?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: '4',
    slug: 'patagonia-unplugged',
    title: 'Unplugged at the End of the Earth',
    excerpt: 'What happens when you trade your smartphone for a compass and spend two weeks walking the windswept plains of Patagonia.',
    category: 'Storytelling',
    author: 'Sarah Jenkins',
    date: 'January 22, 2025',
    readTime: '7 min read',
    imageUrl: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=800&q=80',
  }
];

// ── Services ─────────────────────────────────
export const services = [
  {
    id: '1',
    icon: '🧭',
    title: 'Terra Guide (AI)',
    description: 'Our intelligent exploration companion helps you discover destinations that perfectly match your mood, curiosity, and travel style.',
  },
  {
    id: '2',
    icon: '🗺️',
    title: 'Bespoke Expeditions',
    description: 'Custom-crafted journeys designed by experts who have walked the trails, sailed the coasts, and experienced the cultures firsthand.',
  },
  {
    id: '3',
    icon: '🏔️',
    title: 'Adventure Logistics',
    description: 'From securing elusive trekking permits to arranging remote wilderness transport, we handle the complex details of true exploration.',
  },
  {
    id: '4',
    icon: '⛺',
    title: 'Immersive Lodging',
    description: 'Stay in hand-picked eco-lodges, historic ryokans, and wilderness camps that connect you deeply with your surroundings.',
  }
];
