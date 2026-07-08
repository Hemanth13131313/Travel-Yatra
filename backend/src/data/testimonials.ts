export interface Testimonial {
  id: string;
  name: string;
  location: string;
  avatar: string;
  rating: number;
  tripDestination: string;
  tripType: string;
  tripDate: string;
  title: string;
  review: string;
  highlights: string[];
}

export const testimonials: Testimonial[] = [
  {
    id: 'test-001',
    name: 'Ananya & Rohan Sharma',
    location: 'Mumbai, India',
    avatar: 'AS',
    rating: 5,
    tripDestination: 'Bali, Indonesia',
    tripType: 'Honeymoon',
    tripDate: 'March 2026',
    title: 'Our Bali honeymoon was absolute perfection',
    review:
      'Voyana Travels planned every detail of our honeymoon with incredible care. The private pool villa in Ubud was a dream — waking up to the sounds of the rainforest and having breakfast delivered to our terrace. The Mount Batur sunrise trek was challenging but breathtaking, and the candlelit dinner on Jimbaran beach was the most romantic evening of our lives. Our driver, Made, became like a friend and showed us hidden temples that aren\'t in any guidebook. We cannot recommend Voyana enough for couples seeking a truly magical experience.',
    highlights: ['Private pool villa in Ubud', 'Mount Batur sunrise trek', 'Candlelit beach dinner'],
  },
  {
    id: 'test-002',
    name: 'James & Claire Mitchell',
    location: 'London, United Kingdom',
    avatar: 'JM',
    rating: 5,
    tripDestination: 'Japan',
    tripType: 'Cultural Tour',
    tripDate: 'April 2026',
    title: 'Japan exceeded every expectation — and we had high ones',
    review:
      'We\'ve travelled extensively, but Japan with Voyana was next-level. The ryokan in Hakone with its private onsen overlooking the mountains was the most serene experience of our lives. The Tsukiji food tour opened our eyes to flavours we didn\'t know existed, and the private tea ceremony in Kyoto was deeply moving. Having the JR Pass sorted and every transfer pre-arranged meant zero stress. The capsule hotel night was a brilliant touch of fun amidst the luxury.',
    highlights: ['Hakone ryokan with private onsen', 'Kyoto tea ceremony', 'Tsukiji food tour'],
  },
  {
    id: 'test-003',
    name: 'Sofia Reyes',
    location: 'Mexico City, Mexico',
    avatar: 'SR',
    rating: 5,
    tripDestination: 'Maldives',
    tripType: 'Honeymoon',
    tripDate: 'February 2026',
    title: 'The Maldives felt like another planet — in the best way',
    review:
      'Stepping off the seaplane onto a floating pontoon in the middle of the Indian Ocean was surreal. Our overwater villa had a glass floor where we watched reef sharks and rays glide beneath us at night. The whale shark snorkelling trip was the highlight — swimming alongside these gentle giants brought me to tears. The private sandbank picnic with champagne felt like we had our own island. Voyana made an already magical place feel transcendent.',
    highlights: ['Glass-floor overwater villa', 'Whale shark snorkelling', 'Private sandbank picnic'],
  },
  {
    id: 'test-004',
    name: 'David & Emma Thompson',
    location: 'Sydney, Australia',
    avatar: 'DT',
    rating: 4,
    tripDestination: 'Switzerland',
    tripType: 'Adventure',
    tripDate: 'June 2026',
    title: 'Switzerland was the adventure of a lifetime',
    review:
      'Paragliding over Interlaken with the Jungfrau peaks behind us was utterly indescribable. The Swiss Travel Pass was genius — we hopped on trains, boats, and cable cars without a second thought. The Glacier Express journey through mountain tunnels and over viaducts was like being inside a moving postcard. The only reason we\'re not giving five stars is that we wished we\'d had one more day in Zermatt — the Matterhorn deserves more time. Already planning our return!',
    highlights: ['Paragliding over Interlaken', 'Glacier Express journey', 'Matterhorn views from Gornergrat'],
  },
  {
    id: 'test-005',
    name: 'Fatima Al-Rashid',
    location: 'Dubai, UAE',
    avatar: 'FA',
    rating: 5,
    tripDestination: 'Santorini, Greece',
    tripType: 'Family Luxury',
    tripDate: 'May 2026',
    title: 'Santorini with kids? Voyana made it effortless',
    review:
      'I was nervous about taking three young children to Santorini, but Voyana planned everything with families in mind. The caldera-view suite had a separate kids\' room, the wine tour included grape juice tastings for the little ones, and the boat cruise kept everyone entertained with swimming stops and a BBQ lunch on board. Watching the Oia sunset as a family — with the kids oohing at the colours — is a memory I\'ll treasure forever. Thank you, Voyana, for proving that luxury travel and family travel are not mutually exclusive.',
    highlights: ['Family-friendly caldera suite', 'Caldera boat cruise', 'Oia sunset with the family'],
  },
  {
    id: 'test-006',
    name: 'Michael O\'Brien',
    location: 'Dublin, Ireland',
    avatar: 'MO',
    rating: 5,
    tripDestination: 'Iceland',
    tripType: 'Adventure',
    tripDate: 'January 2026',
    title: 'The Northern Lights left me speechless — literally',
    review:
      'I\'d dreamed of seeing the aurora borealis for years, and Voyana\'s Iceland package delivered beyond imagination. Our guide Björk (yes, really) drove us to a remote lava field on the second night and there they were — green and purple curtains rippling across the sky for over two hours. Walking on the glacier, snorkelling between tectonic plates in crystal-clear water, and soaking in the Blue Lagoon under a snow-dusted sky were experiences that redefined what travel means to me.',
    highlights: ['Northern Lights in a lava field', 'Glacier hiking', 'Blue Lagoon under snow'],
  },
  {
    id: 'test-007',
    name: 'Priya & Amit Patel',
    location: 'Chicago, USA',
    avatar: 'PP',
    rating: 5,
    tripDestination: 'Paris, France',
    tripType: 'Anniversary',
    tripDate: 'September 2025',
    title: 'Paris for our 10th anniversary — absolutely magical',
    review:
      'Voyana planned the perfect Paris escape for our anniversary. Dining at Le Jules Verne — literally inside the Eiffel Tower — with the city sparkling below us was the most memorable meal of our lives. The private Seine cruise with just the two of us, champagne in hand, felt like a movie scene. The perfume workshop in Le Marais was a unique surprise, and our hotel in Saint-Germain-des-Prés was the epitome of Parisian elegance. Every detail was curated with care.',
    highlights: ['Dinner at Le Jules Verne', 'Private Seine cruise', 'Perfume workshop in Le Marais'],
  },
  {
    id: 'test-008',
    name: 'Liam Henderson',
    location: 'Toronto, Canada',
    avatar: 'LH',
    rating: 4,
    tripDestination: 'Thailand',
    tripType: 'Group Adventure',
    tripDate: 'November 2025',
    title: 'Best group trip I\'ve ever been on — and I\'ve done a few',
    review:
      'I joined Voyana\'s Thailand group explorer as a solo traveller and left with friends for life. The group was perfectly sized (12 of us), the itinerary struck the ideal balance between structured activities and free time, and the variety — from Bangkok\'s chaotic energy to Chiang Mai\'s peaceful temples to Krabi\'s stunning beaches — kept things exciting throughout. The elephant sanctuary visit was deeply emotional, and the cooking class was a riot. Only wish we\'d had more time in Krabi.',
    highlights: ['Elephant sanctuary in Chiang Mai', 'Thai cooking class', 'Four Islands boat tour in Krabi'],
  },
  {
    id: 'test-009',
    name: 'Elena Volkov',
    location: 'Moscow, Russia',
    avatar: 'EV',
    rating: 5,
    tripDestination: 'Singapore',
    tripType: 'City Break',
    tripDate: 'December 2025',
    title: 'Singapore surprised me — it\'s so much more than skyscrapers',
    review:
      'I expected glass and steel, but Singapore charmed me with its incredible diversity. The hawker food tour was a revelation — $3 Michelin-starred chicken rice that was genuinely the best chicken I\'ve ever eaten. The Night Safari was atmospheric and exciting, Gardens by the Bay at night looked like a sci-fi movie set, and exploring Little India and Kampong Glam gave me genuine cultural depth. Marina Bay Sands infinity pool at sunset? Yes, it\'s as good as Instagram suggests.',
    highlights: ['Hawker centre food tour', 'Gardens by the Bay light show', 'Marina Bay Sands infinity pool'],
  },
  {
    id: 'test-010',
    name: 'Rachel & Tom Nguyen',
    location: 'San Francisco, USA',
    avatar: 'RN',
    rating: 5,
    tripDestination: 'New York City',
    tripType: 'City Break',
    tripDate: 'October 2025',
    title: 'NYC through Voyana\'s eyes was a completely different city',
    review:
      'We\'d both been to New York before, but Voyana showed us a city we didn\'t know existed. The DUMBO food tour introduced us to incredible small-batch chocolatiers and artisanal pizza makers. Walking the Brooklyn Bridge at golden hour, then looking back at the Manhattan skyline, was pure magic. The Broadway show (Hamilton!) was an emotional powerhouse, and the curated dinner at a hidden speakeasy in Greenwich Village was unforgettable. Voyana doesn\'t just plan trips — they craft experiences.',
    highlights: ['DUMBO food tour', 'Brooklyn Bridge at golden hour', 'Broadway Hamilton performance'],
  },
  {
    id: 'test-011',
    name: 'Carlos Mendez',
    location: 'Barcelona, Spain',
    avatar: 'CM',
    rating: 5,
    tripDestination: 'Dubai',
    tripType: 'Family',
    tripDate: 'January 2026',
    title: 'Dubai with kids — non-stop wonder from start to finish',
    review:
      'Our family of five had the time of our lives in Dubai. The kids went absolutely wild at Aquaventure Waterpark and couldn\'t stop talking about the desert safari dune bashing. The Burj Khalifa sunset was a family moment we\'ll never forget, and Ski Dubai blew their minds — skiing in the desert! Atlantis The Palm was the perfect family hotel with activities around every corner. Voyana arranged child seats in every transfer and had kid-friendly restaurant recommendations ready. Truly thought of everything.',
    highlights: ['Aquaventure Waterpark', 'Desert safari dune bashing', 'Ski Dubai indoor skiing'],
  },
];
