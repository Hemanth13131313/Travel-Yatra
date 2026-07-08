export interface Blog {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  author: string;
  authorRole: string;
  publishedDate: string;
  readTime: string;
  tags: string[];
  imageGradient: string;
  featured: boolean;
}

export const blogs: Blog[] = [
  {
    id: 'blog-001',
    slug: 'hidden-gems-bali-beyond-tourist-trail',
    title: 'Hidden Gems of Bali: 10 Places Beyond the Tourist Trail',
    excerpt:
      'Most visitors stick to Seminyak and Ubud — but Bali\'s real magic lies in its lesser-known corners. From secret waterfalls in the highlands to untouched black-sand beaches in the east, here are ten hidden gems that will make you fall in love with the Island of the Gods all over again.',
    content:
      'Full article content covering Sekumpul Waterfall, Sidemen Valley, Amed Beach, Munduk village, Nyang Nyang Beach, Tirta Gangga Water Palace, Tukad Cepung Waterfall, Penglipuran Village, Balian Beach, and Pura Lempuyang Temple.',
    category: 'Destination Guide',
    author: 'Priya Menon',
    authorRole: 'Senior Travel Writer',
    publishedDate: '2026-06-15',
    readTime: '8 min read',
    tags: ['Bali', 'Indonesia', 'Hidden Gems', 'Off the Beaten Path'],
    imageGradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    featured: true,
  },
  {
    id: 'blog-002',
    slug: 'ultimate-japan-cherry-blossom-guide',
    title: 'The Ultimate Japan Cherry Blossom Guide: When, Where & How',
    excerpt:
      'Cherry blossom season transforms Japan into a pink-petalled wonderland — but timing is everything. Our comprehensive guide covers the best sakura viewing spots from Okinawa to Hokkaido, festival dates, bloom forecasts, and insider tips for photographing the fleeting blossoms like a pro.',
    content:
      'Full article covering sakura forecast methodology, best spots in Tokyo (Shinjuku Gyoen, Meguro River, Ueno Park), Kyoto (Philosopher\'s Path, Maruyama Park), Osaka Castle, Mount Yoshino, and Hokkaido\'s late blooms.',
    category: 'Travel Tips',
    author: 'Kenji Watanabe',
    authorRole: 'Japan Specialist',
    publishedDate: '2026-06-02',
    readTime: '10 min read',
    tags: ['Japan', 'Cherry Blossoms', 'Seasonal Travel', 'Photography'],
    imageGradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
    featured: true,
  },
  {
    id: 'blog-003',
    slug: 'maldives-on-budget-local-islands',
    title: 'Maldives on a Budget? It\'s Possible with Local Island Stays',
    excerpt:
      'The Maldives doesn\'t have to cost $1,000 a night. Since 2009, guesthouses on local islands have opened the Maldives to budget travellers. We spent two weeks island-hopping through Maafushi, Thulusdhoo, and Fulidhoo — here\'s how we did it for under $100 a day.',
    content:
      'Full article covering budget guesthouse options, local island transport, sandbank excursions, snorkelling without resort fees, cultural etiquette on local islands, food costs, and a complete daily budget breakdown.',
    category: 'Budget Travel',
    author: 'Sarah Chen',
    authorRole: 'Budget Travel Expert',
    publishedDate: '2026-05-20',
    readTime: '7 min read',
    tags: ['Maldives', 'Budget Travel', 'Local Islands', 'Snorkelling'],
    imageGradient: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
    featured: false,
  },
  {
    id: 'blog-004',
    slug: 'paris-food-lovers-neighbourhood-guide',
    title: 'A Food Lover\'s Neighbourhood Guide to Paris',
    excerpt:
      'Forget the tourist traps near the Eiffel Tower — the real Paris lives in its neighbourhood bistros, boulangeries, and wine bars. We ate our way through Le Marais, Montmartre, Saint-Germain, and Belleville to bring you the definitive foodie\'s guide to the City of Light.',
    content:
      'Full article covering must-visit bakeries, cheese shops, wine bars, bistros, markets (Marché d\'Aligre), and street food across Paris\'s best food neighbourhoods.',
    category: 'Food & Culture',
    author: 'Marie Dubois',
    authorRole: 'Food & Culture Correspondent',
    publishedDate: '2026-05-08',
    readTime: '9 min read',
    tags: ['Paris', 'France', 'Food', 'Culinary Travel', 'Wine'],
    imageGradient: 'linear-gradient(135deg, #a18cd1 0%, #fbc2eb 100%)',
    featured: true,
  },
  {
    id: 'blog-005',
    slug: 'iceland-ring-road-10-day-itinerary',
    title: 'Driving Iceland\'s Ring Road: The Perfect 10-Day Itinerary',
    excerpt:
      'Route 1, Iceland\'s famous Ring Road, loops 1,322 km around the entire island — past volcanoes, glaciers, whale-filled fjords, and some of the most alien landscapes on Earth. Here\'s our tested 10-day self-drive itinerary with daily stops, accommodation picks, and insider tips.',
    content:
      'Full article covering daily itinerary from Reykjavik through Golden Circle, South Coast, Eastfjords, Mývatn, Akureyri, Snæfellsnes Peninsula, and back. Includes accommodation recommendations, fuel stops, and seasonal advice.',
    category: 'Itineraries',
    author: 'Erik Nordström',
    authorRole: 'Adventure Travel Editor',
    publishedDate: '2026-04-25',
    readTime: '12 min read',
    tags: ['Iceland', 'Road Trip', 'Ring Road', 'Self-Drive', 'Northern Lights'],
    imageGradient: 'linear-gradient(135deg, #d4fc79 0%, #96e6a1 100%)',
    featured: false,
  },
  {
    id: 'blog-006',
    slug: 'how-ai-is-changing-travel-planning',
    title: 'How AI Is Revolutionising Travel Planning in 2026',
    excerpt:
      'From AI-powered itinerary builders to smart packing assistants and real-time language translation, artificial intelligence is transforming how we plan, book, and experience travel. We explore the most impactful AI travel tools — including our own Aria trip planner — and what the future holds.',
    content:
      'Full article covering AI trip planners, chatbot concierges, dynamic pricing, personalised recommendations, language translation, and the future of AI in the travel industry.',
    category: 'Travel Tech',
    author: 'Arun Kapoor',
    authorRole: 'Tech & Innovation Writer',
    publishedDate: '2026-04-10',
    readTime: '6 min read',
    tags: ['AI', 'Travel Tech', 'Innovation', 'Trip Planning'],
    imageGradient: 'linear-gradient(135deg, #0ba360 0%, #3cba92 100%)',
    featured: false,
  },
  {
    id: 'blog-007',
    slug: 'best-honeymoon-destinations-2026',
    title: 'The 8 Best Honeymoon Destinations for 2026',
    excerpt:
      'Planning the most romantic trip of your life? From the overwater villas of the Maldives to the candlelit trattorias of the Amalfi Coast, we\'ve handpicked eight extraordinary honeymoon destinations that combine luxury, intimacy, and unforgettable experiences for newlyweds.',
    content:
      'Full article covering Maldives, Santorini, Bali, Amalfi Coast, Bora Bora, Kyoto, Seychelles, and Swiss Alps — with budget ranges, best time to visit, and curated experiences for each.',
    category: 'Honeymoon',
    author: 'Priya Menon',
    authorRole: 'Senior Travel Writer',
    publishedDate: '2026-03-28',
    readTime: '8 min read',
    tags: ['Honeymoon', 'Romance', 'Luxury', 'Couples Travel'],
    imageGradient: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
    featured: true,
  },
  {
    id: 'blog-008',
    slug: 'solo-female-travel-safety-tips',
    title: 'Solo Female Travel: 15 Safety Tips from Women Who\'ve Been There',
    excerpt:
      'Solo travel is empowering, transformative, and — let\'s be honest — sometimes nerve-wracking. We spoke to 15 experienced solo female travellers from around the world to compile their hard-won safety wisdom, from choosing accommodation to navigating unfamiliar cities with confidence.',
    content:
      'Full article covering accommodation safety, transport tips, digital safety, cultural awareness, packing a safety kit, sharing itineraries, trusting instincts, and country-specific advice.',
    category: 'Travel Tips',
    author: 'Sarah Chen',
    authorRole: 'Budget Travel Expert',
    publishedDate: '2026-03-15',
    readTime: '11 min read',
    tags: ['Solo Travel', 'Female Travel', 'Safety', 'Tips'],
    imageGradient: 'linear-gradient(135deg, #89f7fe 0%, #66a6ff 100%)',
    featured: false,
  },
  {
    id: 'blog-009',
    slug: 'swiss-trains-complete-guide',
    title: 'Switzerland by Rail: The Complete Guide to Swiss Scenic Trains',
    excerpt:
      'Switzerland\'s rail network is the envy of the world — and its scenic trains are destinations unto themselves. From the legendary Glacier Express to the panoramic Bernina Express, we cover routes, ticketing, Swiss Travel Pass hacks, and the best seats for jaw-dropping Alpine views.',
    content:
      'Full article covering Glacier Express, Bernina Express, GoldenPass Line, Wilhelm Tell Express, Jungfrau Railways, Swiss Travel Pass benefits, and booking strategies.',
    category: 'Destination Guide',
    author: 'Erik Nordström',
    authorRole: 'Adventure Travel Editor',
    publishedDate: '2026-02-28',
    readTime: '9 min read',
    tags: ['Switzerland', 'Rail Travel', 'Scenic Trains', 'Alps'],
    imageGradient: 'linear-gradient(135deg, #c3cfe2 0%, #f5f7fa 100%)',
    featured: false,
  },
];
