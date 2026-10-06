import t31 from "../assets/t31.png";
import t322 from "../assets/t322.png";
import t33 from "../assets/t33.png";
import t344 from "../assets/t344.png";
import t355 from "../assets/t355.png";
import t366 from "../assets/t366.png";
import t377 from "../assets/t377.png";
import t388 from "../assets/t388.png";
import tt01 from "../assets/tt01.png";
import tt02 from "../assets/tt02.png";
import tt03 from "../assets/tt03.png";
import tt04 from "../assets/tt04.png";
import tt05 from "../assets/tt05.png";
import tt06 from "../assets/tt06.png";
import t077 from "../assets/t077.png";
import tt08 from "../assets/tt08.png";
import tt09 from "../assets/tt09.png";
import tt10 from "../assets/tt10.png";
import tt11 from "../assets/tt11.png";
import tt12 from "../assets/tt12.png";
import tt13 from "../assets/tt13.png";
import tt14 from "../assets/tt14.png";
import tt15 from "../assets/tt15.png";
import t166 from "../assets/t166.png";
import tt17 from "../assets/tt17.png";
import tt18 from "../assets/tt18.png";
import ht1 from "../assets/ht1.png";
import ht2 from "../assets/ht2.png";
import ht3 from "../assets/ht3.png";
import ht4 from "../assets/ht4.png";
import ht5 from "../assets/ht5.png";
import ht6 from "../assets/ht6.png";
import ht7 from "../assets/ht7.png";
import ht8 from "../assets/ht8.png";
import ht9 from "../assets/ht9.png";
import ht10 from "../assets/ht10.png";
import ht11 from "../assets/ht11.png";
import ht12 from "../assets/ht12.png";

export const toursData = [
  {
    id: 1,
    slug: "swiss-alpine-nature-escape",
    title: "Swiss Alpine Nature Escape",
    price: 1850,
    priceLabel: "$ 1,850",
    duration: "7 Days / 6 Nights",
    days: 7,
    nights: 6,
    image: tt01,
    destination: "Switzerland",
    category: "Nature",
    categories: ["Summer 2026 Tour", "Discovery Tours"],
    groupSize: "2 - 10 People",
    bestTime: "May - Sep",
    stay: "Lakeview Resort + Alpine Lodge",
    overview:
      "Experience Switzerland through alpine scenery, scenic rail routes, peaceful lakes, and charming mountain villages with a premium relaxed pace.",
    highlights: [
      "Alpine mountain landscapes",
      "Panoramic train views",
      "Lakeside moments",
      "Premium mountain stays",
      "Photo-friendly scenic routes",
    ],
    included: [
      "Airport pickup and drop",
      "Hotel + alpine lodge stay",
      "Daily breakfast",
      "Scenic transfers",
      "Guided sightseeing",
    ],
    itinerary: [
      {
        day: "Day 1",
        title: "Arrival in Zurich",
        description:
          "Arrive in Zurich, transfer to your hotel, and enjoy a relaxed evening near the old town.",
      },
      {
        day: "Day 2",
        title: "Lakeside Discovery",
        description:
          "Explore scenic lakefront areas, pretty streets, and enjoy a soft introduction to Swiss culture.",
      },
      {
        day: "Day 3",
        title: "Mountain Rail Journey",
        description:
          "Travel through beautiful alpine routes with wide valley views and charming mountain stops.",
      },
      {
        day: "Day 4",
        title: "Village and Panorama Day",
        description:
          "Visit storybook villages, enjoy local cafés, and capture stunning natural viewpoints.",
      },
      {
        day: "Day 5",
        title: "Leisure in the Alps",
        description:
          "Spend the day soaking in mountain air, walking scenic paths, and enjoying resort comfort.",
      },
      {
        day: "Day 6",
        title: "Scenic Excursion",
        description:
          "Enjoy more natural beauty with a comfortable day trip through lakes and alpine landscapes.",
      },
      {
        day: "Day 7",
        title: "Departure",
        description:
          "Breakfast, checkout, and transfer for your onward journey.",
      },
    ],
  },
  {
    id: 2,
    slug: "bali-tropical-nature-retreat",
    title: "Bali Tropical Nature Retreat",
    price: 980,
    priceLabel: "$ 980",
    duration: "6 Days / 5 Nights",
    days: 6,
    nights: 5,
    image: t388,
    destination: "Bali",
    category: "Nature",
    categories: ["Super Seller Packages", "Summer 2026 Tour"],
    groupSize: "2 - 12 People",
    bestTime: "Apr - Oct",
    stay: "Resort + Villa Stay",
    overview:
      "A tropical Bali journey with lush greenery, coastal charm, cultural warmth, and premium resort comfort.",
    highlights: [
      "Tropical green landscapes",
      "Resort and villa comfort",
      "Cultural local experiences",
      "Peaceful coastal settings",
      "Relaxed premium getaway",
    ],
    included: [
      "Resort stay",
      "Breakfast",
      "Airport transfers",
      "Selected sightseeing",
      "Local assistance",
    ],
    itinerary: [
      {
        day: "Day 1",
        title: "Arrival in Bali",
        description:
          "Arrive in Bali, check in to your resort, and settle into a peaceful tropical evening.",
      },
      {
        day: "Day 2",
        title: "Nature and Culture",
        description:
          "Visit scenic spots, discover local culture, and enjoy relaxed moments surrounded by lush landscapes.",
      },
      {
        day: "Day 3",
        title: "Coastal Views",
        description:
          "Enjoy dramatic coastal scenery, resort leisure time, and memorable viewpoints.",
      },
      {
        day: "Day 4",
        title: "Wellness and Leisure",
        description:
          "Spend a slow day enjoying your resort, tropical surroundings, and flexible leisure time.",
      },
      {
        day: "Day 5",
        title: "Island Discovery",
        description:
          "Explore more of Bali’s beauty through easy excursions and cultural charm.",
      },
      {
        day: "Day 6",
        title: "Departure",
        description: "Breakfast, checkout, and transfer to the airport.",
      },
    ],
  },
  {
    id: 3,
    slug: "africa-wild-nature-safari",
    title: "Africa Wild Nature Safari",
    price: 2250,
    priceLabel: "$ 2,250",
    duration: "8 Days / 7 Nights",
    days: 8,
    nights: 7,
    image: t355,
    destination: "Africa",
    category: "Nature",
    categories: ["Discovery Tours", "Fixed Departure 2026"],
    groupSize: "4 - 14 People",
    bestTime: "Jun - Oct",
    stay: "Premium Safari Lodge",
    overview:
      "An immersive safari journey blending wildlife, vast landscapes, sunrise drives, and premium lodge comfort.",
    highlights: [
      "Wildlife safari drives",
      "Golden sunrise landscapes",
      "Nature lodge stay",
      "Photography-rich experiences",
      "Premium outdoor adventure",
    ],
    included: [
      "Safari lodge stay",
      "Selected meals",
      "Ground transfers",
      "Game drive experiences",
      "Guide support",
    ],
    itinerary: [
      {
        day: "Day 1",
        title: "Arrival and Lodge Check-in",
        description:
          "Arrive and transfer to your lodge surrounded by scenic natural beauty.",
      },
      {
        day: "Day 2",
        title: "First Safari Drive",
        description:
          "Head out on your first guided wildlife safari with expansive outdoor views.",
      },
      {
        day: "Day 3",
        title: "Nature Exploration",
        description:
          "Explore additional wildlife zones and enjoy the peaceful rhythm of the wilderness.",
      },
      {
        day: "Day 4",
        title: "Scenic Safari Day",
        description:
          "Spend a full day discovering wider safari routes with expert local guidance.",
      },
      {
        day: "Day 5",
        title: "Lodge Leisure",
        description:
          "Balance adventure with comfort while taking in the natural surroundings.",
      },
      {
        day: "Day 6",
        title: "Photography and Wildlife",
        description:
          "Capture remarkable outdoor scenes and continue your wildlife encounters.",
      },
      {
        day: "Day 7",
        title: "Final Safari Experience",
        description:
          "Enjoy one last memorable safari day before the journey ends.",
      },
      {
        day: "Day 8",
        title: "Departure",
        description: "Breakfast, checkout, and onward transfer.",
      },
    ],
  },
  {
    id: 4,
    slug: "morocco-atlas-nature-trail",
    title: "Morocco Atlas Nature Trail",
    price: 1580,
    priceLabel: "$ 1,580",
    duration: "8 Days / 7 Nights",
    days: 8,
    nights: 7,
    image: tt02,
    destination: "Morocco",
    category: "Nature",
    categories: ["Discovery Tours", "Super Seller Packages"],
    groupSize: "2 - 12 People",
    bestTime: "Oct - Mar",
    stay: "Desert Camp + Scenic Hotels",
    overview:
      "Travel from cultural cities to mountain roads and desert landscapes on a scenic Moroccan nature-focused journey.",
    highlights: [
      "Atlas mountain routes",
      "Desert scenery",
      "Traditional market visits",
      "Sunset landscape moments",
      "Scenic cultural travel",
    ],
    included: [
      "Airport pickup and drop",
      "Hotel + camp stay",
      "Breakfast and selected dinners",
      "Private transfers",
      "Guided sightseeing",
    ],
    itinerary: [
      {
        day: "Day 1",
        title: "Arrival in Morocco",
        description:
          "Arrive at the airport, transfer to your hotel, and enjoy a relaxed welcome evening.",
      },
      {
        day: "Day 2",
        title: "Old City Discovery",
        description:
          "Explore heritage streets, local markets, and cultural corners with a guide.",
      },
      {
        day: "Day 3",
        title: "Atlas Route Journey",
        description:
          "Travel through mountain roads, scenic viewpoints, and traditional villages.",
      },
      {
        day: "Day 4",
        title: "Toward the Desert",
        description:
          "Continue toward desert landscapes and settle into your next scenic stay.",
      },
      {
        day: "Day 5",
        title: "Desert Experience",
        description:
          "Enjoy desert views, calm outdoor moments, and cultural experiences.",
      },
      {
        day: "Day 6",
        title: "Camp Life",
        description:
          "Experience local hospitality, traditional food, and a peaceful evening setting.",
      },
      {
        day: "Day 7",
        title: "Return Route",
        description:
          "Travel back through charming towns and scenic rest points.",
      },
      {
        day: "Day 8",
        title: "Departure",
        description: "Breakfast, checkout, and airport transfer.",
      },
    ],
  },
  {
    id: 5,
    slug: "italy-lakes-and-vineyards",
    title: "Italy Lakes and Vineyards",
    price: 1460,
    priceLabel: "$ 1,460",
    duration: "7 Days / 6 Nights",
    days: 7,
    nights: 6,
    image: t322,
    destination: "Italy",
    category: "Nature",
    categories: ["Summer 2026 Tour", "Fixed Departure 2026"],
    groupSize: "2 - 10 People",
    bestTime: "Apr - Oct",
    stay: "Boutique Countryside Hotel",
    overview:
      "Explore Italy through elegant lakeside views, vineyard landscapes, charming towns, and a calm premium pace.",
    highlights: [
      "Lakeside scenery",
      "Italian countryside charm",
      "Elegant town stays",
      "Relaxed cultural moments",
      "Premium natural settings",
    ],
    included: [
      "Hotel accommodation",
      "Daily breakfast",
      "Transfers",
      "Guided sightseeing",
      "Tour support",
    ],
    itinerary: [
      {
        day: "Day 1",
        title: "Arrival in Italy",
        description:
          "Arrive, check into your hotel, and enjoy a peaceful evening in a scenic region.",
      },
      {
        day: "Day 2",
        title: "Lake Discovery",
        description:
          "Spend the day around beautiful lakeside areas and relaxed walking routes.",
      },
      {
        day: "Day 3",
        title: "Countryside Journey",
        description:
          "Travel through vineyard landscapes and charming local towns.",
      },
      {
        day: "Day 4",
        title: "Village and Flavors",
        description:
          "Enjoy local food, artisan shops, and refined countryside settings.",
      },
      {
        day: "Day 5",
        title: "Leisure Day",
        description:
          "Slow down and enjoy premium resort comfort with optional exploration.",
      },
      {
        day: "Day 6",
        title: "Scenic Excursion",
        description:
          "Visit more panoramic locations and capture beautiful travel moments.",
      },
      {
        day: "Day 7",
        title: "Departure",
        description: "Breakfast, checkout, and transfer for departure.",
      },
    ],
  },

  {
    id: 6,
    slug: "paris-romantic-classics",
    title: "Paris Romantic Classics",
    price: 1520,
    priceLabel: "$ 1,520",
    duration: "6 Days / 5 Nights",
    days: 6,
    nights: 5,
    image: t33,
    destination: "Paris",
    category: "Romantic",
    categories: ["Honeymoon", "Fixed Departure 2026"],
    groupSize: "2 - 8 People",
    bestTime: "Apr - Jun / Sep - Nov",
    stay: "Central Paris Hotel",
    overview:
      "A refined Paris journey with iconic landmarks, elegant streets, candlelit evenings, and unforgettable romantic city moments.",
    highlights: [
      "Eiffel Tower views",
      "Romantic riverfront moments",
      "Elegant café culture",
      "Landmark exploration",
      "Premium Paris atmosphere",
    ],
    included: [
      "Hotel stay",
      "Breakfast",
      "Airport transfers",
      "Guided city tour",
      "Local assistance",
    ],
    itinerary: [
      {
        day: "Day 1",
        title: "Arrival in Paris",
        description:
          "Arrive, transfer to the hotel, and enjoy a soft first evening in the city.",
      },
      {
        day: "Day 2",
        title: "Paris Icons",
        description:
          "Visit major landmarks and enjoy scenic viewpoints across the city.",
      },
      {
        day: "Day 3",
        title: "Elegant Streets",
        description:
          "Explore stylish neighborhoods, famous avenues, and charming cafés.",
      },
      {
        day: "Day 4",
        title: "River and Romance",
        description:
          "Spend the day around scenic bridges, riverside walks, and memorable photo spots.",
      },
      {
        day: "Day 5",
        title: "Shopping and Leisure",
        description:
          "Enjoy free time for shopping, dining, and slow-paced city discovery.",
      },
      {
        day: "Day 6",
        title: "Departure",
        description: "Breakfast, checkout, and airport transfer.",
      },
    ],
  },
  {
    id: 7,
    slug: "paris-honeymoon-getaway",
    title: "Paris Honeymoon Getaway",
    price: 1180,
    priceLabel: "$ 1,180",
    duration: "5 Days / 4 Nights",
    days: 5,
    nights: 4,
    image: t344,
    destination: "Paris",
    category: "Romantic",
    categories: ["Honeymoon", "Short Breaks"],
    groupSize: "2 - 6 People",
    bestTime: "All Year",
    stay: "Comfort City Hotel",
    overview:
      "A short yet premium Paris escape designed around city lights, charming views, and a gentle romantic atmosphere.",
    highlights: [
      "Romantic Paris evenings",
      "Bridge and river views",
      "Short luxury break",
      "Premium compact itinerary",
      "Couple-friendly experiences",
    ],
    included: [
      "Hotel accommodation",
      "Breakfast",
      "Transfers",
      "Sightseeing support",
    ],
    itinerary: [
      {
        day: "Day 1",
        title: "Arrival and Check-in",
        description:
          "Arrive in Paris, transfer to the hotel, and enjoy an evening city stroll.",
      },
      {
        day: "Day 2",
        title: "Landmark Discovery",
        description:
          "Visit famous Paris attractions and enjoy iconic viewpoints together.",
      },
      {
        day: "Day 3",
        title: "Bridge and River Experience",
        description:
          "Spend the day around scenic bridges, riverside paths, and charming local areas.",
      },
      {
        day: "Day 4",
        title: "Leisure Day",
        description:
          "Enjoy shopping, dining, and relaxed exploration at your own pace.",
      },
      {
        day: "Day 5",
        title: "Departure",
        description: "Checkout and airport transfer for your journey home.",
      },
    ],
  },
  {
    id: 8,
    slug: "venice-romantic-escape",
    title: "Venice Romantic Escape",
    price: 1440,
    priceLabel: "$ 1,440",
    duration: "6 Days / 5 Nights",
    days: 6,
    nights: 5,
    image: tt03,
    destination: "Italy",
    category: "Romantic",
    categories: ["Honeymoon", "Super Seller Packages"],
    groupSize: "2 - 8 People",
    bestTime: "Apr - Oct",
    stay: "Boutique Canal-Side Hotel",
    overview:
      "Experience Venice through canal views, elegant architecture, soft evenings, and timeless romantic atmosphere.",
    highlights: [
      "Canal-side views",
      "Historic architecture",
      "Italian food moments",
      "Relaxed premium pace",
      "Elegant city atmosphere",
    ],
    included: [
      "Hotel accommodation",
      "Breakfast",
      "Transfers",
      "Guided sightseeing",
      "Tour support",
    ],
    itinerary: [
      {
        day: "Day 1",
        title: "Arrival in Venice",
        description:
          "Arrive, check in, and enjoy your first evening by the canals.",
      },
      {
        day: "Day 2",
        title: "Canal Discovery",
        description:
          "Explore waterways, elegant bridges, and beautiful city corners.",
      },
      {
        day: "Day 3",
        title: "Historic Walks",
        description:
          "Enjoy heritage streets, hidden alleys, and cultural landmarks.",
      },
      {
        day: "Day 4",
        title: "Local Flavors",
        description:
          "Spend the day enjoying food, artisan shops, and relaxed surroundings.",
      },
      {
        day: "Day 5",
        title: "Leisure and Views",
        description:
          "Take in scenic viewpoints and revisit your favorite corners of the city.",
      },
      {
        day: "Day 6",
        title: "Departure",
        description: "Breakfast, checkout, and transfer for departure.",
      },
    ],
  },
  {
    id: 9,
    slug: "maldives-couple-luxury-stay",
    title: "Maldives Couple Luxury Stay",
    price: 2350,
    priceLabel: "$ 2,350",
    duration: "5 Days / 4 Nights",
    days: 5,
    nights: 4,
    image: t377,
    destination: "Maldives",
    category: "Romantic",
    categories: ["Honeymoon", "Super Seller Packages"],
    groupSize: "2 People",
    bestTime: "Nov - Apr",
    stay: "Overwater Villa",
    overview:
      "A luxurious Maldives couple escape with turquoise water, elegant stays, and calm island romance.",
    highlights: [
      "Overwater villa stay",
      "Private island atmosphere",
      "Ocean-facing relaxation",
      "Luxury romantic experience",
      "Premium honeymoon feel",
    ],
    included: [
      "Villa accommodation",
      "Breakfast and dinner",
      "Airport speedboat transfers",
      "Resort assistance",
      "Welcome amenities",
    ],
    itinerary: [
      {
        day: "Day 1",
        title: "Arrival in Maldives",
        description:
          "Arrive and transfer to your island resort for a warm welcome and relaxed evening.",
      },
      {
        day: "Day 2",
        title: "Ocean Leisure",
        description:
          "Enjoy resort time, lagoon views, and uninterrupted island relaxation.",
      },
      {
        day: "Day 3",
        title: "Couple Experiences",
        description:
          "Spend time enjoying the island, scenic moments, and luxury comfort together.",
      },
      {
        day: "Day 4",
        title: "Premium Free Day",
        description:
          "Slow down and enjoy your villa, ocean views, and resort atmosphere.",
      },
      {
        day: "Day 5",
        title: "Departure",
        description: "Breakfast, checkout, and return transfer for departure.",
      },
    ],
  },
  {
    id: 10,
    slug: "swiss-lakes-romantic-trail",
    title: "Swiss Lakes Romantic Trail",
    price: 1890,
    priceLabel: "$ 1,890",
    duration: "7 Days / 6 Nights",
    days: 7,
    nights: 6,
    image: tt04,
    destination: "Switzerland",
    category: "Romantic",
    categories: ["Honeymoon", "Summer 2026 Tour"],
    groupSize: "2 - 8 People",
    bestTime: "May - Sep",
    stay: "Lakeview Boutique Hotel",
    overview:
      "A graceful Swiss journey with lakeside elegance, mountain panoramas, and romantic travel moments throughout.",
    highlights: [
      "Lakeside hotel stay",
      "Mountain and lake scenery",
      "Relaxed premium pace",
      "Beautiful photography moments",
      "Elegant couple escape",
    ],
    included: [
      "Hotel stay",
      "Daily breakfast",
      "Transfers",
      "Scenic excursions",
      "Travel assistance",
    ],
    itinerary: [
      {
        day: "Day 1",
        title: "Arrival and Welcome",
        description:
          "Arrive and settle into your hotel with beautiful lake views.",
      },
      {
        day: "Day 2",
        title: "Lake Discovery",
        description:
          "Spend the day around scenic promenades and charming village corners.",
      },
      {
        day: "Day 3",
        title: "Mountain Panorama",
        description:
          "Travel to panoramic mountain regions and enjoy unforgettable natural beauty.",
      },
      {
        day: "Day 4",
        title: "Leisure and Romance",
        description:
          "Slow down, enjoy your surroundings, and take in the peaceful atmosphere.",
      },
      {
        day: "Day 5",
        title: "Scenic Excursion",
        description:
          "Visit more picture-perfect Swiss settings and enjoy premium comfort.",
      },
      {
        day: "Day 6",
        title: "Relaxed Exploration",
        description:
          "Enjoy flexible time for cafés, shopping, or lakeside walks.",
      },
      {
        day: "Day 7",
        title: "Departure",
        description: "Breakfast, checkout, and transfer for departure.",
      },
    ],
  },

  {
    id: 11,
    slug: "morocco-desert-adventure",
    title: "Morocco Desert Adventure",
    price: 1620,
    priceLabel: "$ 1,620",
    duration: "8 Days / 7 Nights",
    days: 8,
    nights: 7,
    image: tt05,
    destination: "Morocco",
    category: "Adventure",
    categories: ["Group Tours", "Discovery Tours"],
    groupSize: "2 - 12 People",
    bestTime: "Oct - Mar",
    stay: "Luxury Desert Camp + Hotel",
    overview:
      "Discover Morocco through dramatic desert routes, cultural towns, local markets, and adventure-filled scenic experiences.",
    highlights: [
      "Luxury desert camp stay",
      "Sunrise and sunset dune experiences",
      "Traditional market exploration",
      "Historic city discovery",
      "Scenic adventure route",
    ],
    included: [
      "Airport pickup and drop",
      "Hotel + desert camp stay",
      "Daily breakfast and selected dinners",
      "Private transfers",
      "Guided sightseeing",
    ],
    itinerary: [
      {
        day: "Day 1",
        title: "Arrival in Morocco",
        description:
          "Arrive at the airport, transfer to your hotel, and enjoy a relaxed welcome evening.",
      },
      {
        day: "Day 2",
        title: "Old City Discovery",
        description:
          "Explore heritage streets, traditional souks, and cultural landmarks.",
      },
      {
        day: "Day 3",
        title: "Atlas Route",
        description:
          "Travel through mountain roads, scenic villages, and beautiful viewpoints.",
      },
      {
        day: "Day 4",
        title: "Journey Toward the Desert",
        description:
          "Continue toward the desert and settle into your scenic stay.",
      },
      {
        day: "Day 5",
        title: "Desert Adventure",
        description:
          "Enjoy dunes, outdoor experiences, and memorable sunset moments.",
      },
      {
        day: "Day 6",
        title: "Camp Life",
        description:
          "Experience the calm beauty of the desert with local hospitality and food.",
      },
      {
        day: "Day 7",
        title: "Return Route",
        description:
          "Travel back through beautiful towns and scenic rest points.",
      },
      {
        day: "Day 8",
        title: "Departure",
        description: "Breakfast, checkout, and airport transfer.",
      },
    ],
  },
  {
    id: 12,
    slug: "africa-big-five-adventure",
    title: "Africa Big Five Adventure",
    price: 2290,
    priceLabel: "$ 2,290",
    duration: "8 Days / 7 Nights",
    days: 8,
    nights: 7,
    image: tt06,
    destination: "Africa",
    category: "Adventure",
    categories: ["Group Tours", "Fixed Departure 2026"],
    groupSize: "4 - 14 People",
    bestTime: "Jun - Oct",
    stay: "Premium Safari Lodge",
    overview:
      "A high-energy safari journey with unforgettable wildlife, premium lodges, and vast outdoor adventure.",
    highlights: [
      "Wildlife safari drives",
      "Golden sunrise scenes",
      "Immersive nature moments",
      "Expert local guidance",
      "Premium safari stay",
    ],
    included: [
      "Safari lodge stay",
      "Selected meals",
      "Ground transfers",
      "Game drive experiences",
      "Guide support",
    ],
    itinerary: [
      {
        day: "Day 1",
        title: "Arrival",
        description:
          "Arrive and transfer to your safari lodge for a relaxed evening.",
      },
      {
        day: "Day 2",
        title: "First Adventure Drive",
        description:
          "Head into the wilderness for your first safari experience.",
      },
      {
        day: "Day 3",
        title: "Outdoor Discovery",
        description:
          "Continue exploring beautiful wildlife zones and scenic tracks.",
      },
      {
        day: "Day 4",
        title: "Full Safari Day",
        description:
          "Spend a full day experiencing nature and premium safari moments.",
      },
      {
        day: "Day 5",
        title: "Adventure and Leisure",
        description: "Balance exciting wildlife viewing with lodge relaxation.",
      },
      {
        day: "Day 6",
        title: "Photography Day",
        description:
          "Capture landscapes and remarkable wildlife scenes across the region.",
      },
      {
        day: "Day 7",
        title: "Final Drive",
        description:
          "Enjoy one final safari outing before departure preparations.",
      },
      {
        day: "Day 8",
        title: "Departure",
        description: "Breakfast, checkout, and onward transfer.",
      },
    ],
  },
  {
    id: 13,
    slug: "new-york-urban-adventure",
    title: "New York Urban Adventure",
    price: 1320,
    priceLabel: "$ 1,320",
    duration: "6 Days / 5 Nights",
    days: 6,
    nights: 5,
    image: t366,
    destination: "New York",
    category: "Adventure",
    categories: ["Short Breaks", "Super Seller Packages"],
    groupSize: "2 - 12 People",
    bestTime: "Apr - Jun / Sep - Dec",
    stay: "Downtown Hotel",
    overview:
      "Discover New York with skyline viewpoints, iconic districts, and a fast-paced premium city adventure.",
    highlights: [
      "Skyline viewpoints",
      "Famous districts",
      "Urban energy",
      "Shopping and dining",
      "Balanced city adventure",
    ],
    included: [
      "Hotel stay",
      "Breakfast",
      "Airport transfers",
      "City tour assistance",
    ],
    itinerary: [
      {
        day: "Day 1",
        title: "Arrival in New York",
        description:
          "Check into your hotel and enjoy your first evening in the city.",
      },
      {
        day: "Day 2",
        title: "Downtown Discovery",
        description:
          "Explore iconic city streets, landmarks, and lively surroundings.",
      },
      {
        day: "Day 3",
        title: "Skyline and Views",
        description:
          "Visit scenic city viewpoints and capture New York’s energy.",
      },
      {
        day: "Day 4",
        title: "Shopping and Food",
        description:
          "Enjoy famous shopping streets and a wide range of dining spots.",
      },
      {
        day: "Day 5",
        title: "Neighborhood Walks",
        description:
          "Spend time exploring different parts of the city at a comfortable pace.",
      },
      {
        day: "Day 6",
        title: "Departure",
        description: "Breakfast, checkout, and transfer for departure.",
      },
    ],
  },
  {
    id: 14,
    slug: "bali-jungle-adventure",
    title: "Bali Jungle Adventure",
    price: 1040,
    priceLabel: "$ 1,040",
    duration: "6 Days / 5 Nights",
    days: 6,
    nights: 5,
    image: t077,
    destination: "Bali",
    category: "Adventure",
    categories: ["Summer 2026 Tour", "Discovery Tours"],
    groupSize: "2 - 12 People",
    bestTime: "Apr - Oct",
    stay: "Resort + Jungle Villa",
    overview:
      "An active Bali journey packed with tropical energy, scenic routes, and premium island adventure.",
    highlights: [
      "Jungle and coastal beauty",
      "Active island exploration",
      "Tropical premium stays",
      "Cultural local moments",
      "Great scenic variety",
    ],
    included: [
      "Resort stay",
      "Breakfast",
      "Transfers",
      "Selected sightseeing",
      "Local assistance",
    ],
    itinerary: [
      {
        day: "Day 1",
        title: "Arrival in Bali",
        description:
          "Check in and enjoy your first tropical evening on the island.",
      },
      {
        day: "Day 2",
        title: "Island Discovery",
        description:
          "Explore scenic routes, local areas, and beautiful landscapes.",
      },
      {
        day: "Day 3",
        title: "Coastal Views",
        description: "Experience dramatic sea views and relaxed resort time.",
      },
      {
        day: "Day 4",
        title: "Adventure and Leisure",
        description:
          "Balance active sightseeing with premium downtime at your resort.",
      },
      {
        day: "Day 5",
        title: "Cultural Exploration",
        description: "Discover more of Bali’s charm through local experiences.",
      },
      {
        day: "Day 6",
        title: "Departure",
        description: "Breakfast, checkout, and airport transfer.",
      },
    ],
  },
  {
    id: 15,
    slug: "swiss-glacier-adventure-trail",
    title: "Swiss Glacier Adventure Trail",
    price: 1940,
    priceLabel: "$ 1,940",
    duration: "7 Days / 6 Nights",
    days: 7,
    nights: 6,
    image: tt08,
    destination: "Switzerland",
    category: "Adventure",
    categories: ["Group Tours", "Summer 2026 Tour"],
    groupSize: "2 - 10 People",
    bestTime: "May - Sep",
    stay: "Alpine Hotel + Glacier View Stay",
    overview:
      "An energetic Swiss journey through alpine trails, dramatic peaks, and premium glacier-side travel comfort.",
    highlights: [
      "Glacier viewpoints",
      "Alpine adventures",
      "Scenic rail movement",
      "Premium mountain stays",
      "Photo-worthy panoramas",
    ],
    included: [
      "Hotel stays",
      "Breakfast",
      "Transfers",
      "Scenic excursions",
      "Travel support",
    ],
    itinerary: [
      {
        day: "Day 1",
        title: "Arrival and Welcome",
        description:
          "Arrive and settle into your alpine hotel with scenic surroundings.",
      },
      {
        day: "Day 2",
        title: "Mountain Discovery",
        description:
          "Head out through beautiful mountain routes and valley scenery.",
      },
      {
        day: "Day 3",
        title: "Glacier Views",
        description:
          "Visit dramatic glacier viewpoints and explore nearby scenic regions.",
      },
      {
        day: "Day 4",
        title: "Leisure in the Alps",
        description:
          "Enjoy premium free time with mountain air and beautiful surroundings.",
      },
      {
        day: "Day 5",
        title: "Scenic Excursion",
        description:
          "Continue your adventure through more panoramic Swiss settings.",
      },
      {
        day: "Day 6",
        title: "Village Trails",
        description:
          "Explore storybook villages and peaceful mountain corners.",
      },
      {
        day: "Day 7",
        title: "Departure",
        description: "Breakfast, checkout, and transfer for departure.",
      },
    ],
  },

  {
    id: 16,
    slug: "europe-group-highlights",
    title: "Europe Group Highlights",
    price: 1720,
    priceLabel: "$ 1,720",
    duration: "8 Days / 7 Nights",
    days: 8,
    nights: 7,
    image: tt09,
    destination: "Europe",
    category: "Group Tours",
    categories: ["Discovery Tours", "Summer 2026 Tour"],
    groupSize: "6 - 20 People",
    bestTime: "Apr - Oct",
    stay: "Premium City Hotels",
    overview:
      "A multi-city Europe trip designed for groups seeking a comfortable, stylish, and memorable shared travel experience.",
    highlights: [
      "Multi-city experience",
      "Premium group comfort",
      "Landmarks and scenic moments",
      "Shared travel energy",
      "Balanced guided pace",
    ],
    included: [
      "Hotel stay",
      "Breakfast",
      "Intercity transfers",
      "Guided sightseeing",
      "Tour manager support",
    ],
    itinerary: [
      {
        day: "Day 1",
        title: "Arrival and Group Welcome",
        description:
          "Arrive, check in, and meet your group for a smooth trip briefing.",
      },
      {
        day: "Day 2",
        title: "City Discovery",
        description:
          "Begin exploring landmarks and key highlights with your group.",
      },
      {
        day: "Day 3",
        title: "Travel Day",
        description:
          "Enjoy scenic movement to the next destination with comfort and ease.",
      },
      {
        day: "Day 4",
        title: "Culture and Landmarks",
        description:
          "Experience local flavor, iconic sights, and well-paced sightseeing.",
      },
      {
        day: "Day 5",
        title: "Shared Leisure",
        description:
          "Enjoy flexible free time while staying connected with the group plan.",
      },
      {
        day: "Day 6",
        title: "Scenic Excursion",
        description:
          "Head out for a beautiful day experience with photo stops and sightseeing.",
      },
      {
        day: "Day 7",
        title: "Final Group Day",
        description:
          "Enjoy the final full day together with relaxed exploration.",
      },
      {
        day: "Day 8",
        title: "Departure",
        description: "Breakfast, checkout, and transfers for departure.",
      },
    ],
  },
  {
    id: 17,
    slug: "africa-group-safari-escape",
    title: "Africa Group Safari Escape",
    price: 2180,
    priceLabel: "$ 2,180",
    duration: "8 Days / 7 Nights",
    days: 8,
    nights: 7,
    image: tt10,
    destination: "Africa",
    category: "Group Tours",
    categories: ["Adventure", "Fixed Departure 2026"],
    groupSize: "6 - 18 People",
    bestTime: "Jun - Oct",
    stay: "Safari Lodge",
    overview:
      "A premium group safari built around shared wildlife encounters, scenic landscapes, and comfortable lodge stays.",
    highlights: [
      "Shared safari drives",
      "Premium lodge comfort",
      "Great group energy",
      "Outdoor scenic moments",
      "Expert local guidance",
    ],
    included: [
      "Lodge accommodation",
      "Selected meals",
      "Transfers",
      "Safari drives",
      "Guide support",
    ],
    itinerary: [
      {
        day: "Day 1",
        title: "Arrival",
        description:
          "Arrive and transfer to the lodge for a warm group welcome.",
      },
      {
        day: "Day 2",
        title: "First Safari Drive",
        description:
          "Enjoy your first shared safari experience in beautiful surroundings.",
      },
      {
        day: "Day 3",
        title: "Wilderness Exploration",
        description:
          "Continue discovering varied wildlife areas and scenic routes.",
      },
      {
        day: "Day 4",
        title: "Full Outdoor Day",
        description:
          "Spend the day deep in nature with a balanced premium pace.",
      },
      {
        day: "Day 5",
        title: "Lodge and Leisure",
        description: "Relax at the lodge and enjoy time with your group.",
      },
      {
        day: "Day 6",
        title: "Photography Journey",
        description: "Capture memorable wildlife and landscape moments.",
      },
      {
        day: "Day 7",
        title: "Final Safari Experience",
        description: "Take in one last exciting outdoor day before departure.",
      },
      {
        day: "Day 8",
        title: "Departure",
        description: "Breakfast, checkout, and onward transfer.",
      },
    ],
  },
  {
    id: 18,
    slug: "new-york-friends-city-tour",
    title: "New York Friends City Tour",
    price: 1280,
    priceLabel: "$ 1,280",
    duration: "6 Days / 5 Nights",
    days: 6,
    nights: 5,
    image: tt11,
    destination: "New York",
    category: "Group Tours",
    categories: ["Adventure", "Super Seller Packages"],
    groupSize: "4 - 16 People",
    bestTime: "Apr - Jun / Sep - Dec",
    stay: "Downtown Hotel",
    overview:
      "A vibrant New York group city experience with skyline views, iconic places, and easy premium planning.",
    highlights: [
      "Iconic New York views",
      "Group-friendly itinerary",
      "Shopping and dining",
      "Urban sightseeing",
      "Comfortable city stay",
    ],
    included: [
      "Hotel stay",
      "Breakfast",
      "Transfers",
      "City tour assistance",
      "Support team",
    ],
    itinerary: [
      {
        day: "Day 1",
        title: "Arrival in New York",
        description: "Check in and settle into the city with your group.",
      },
      {
        day: "Day 2",
        title: "Downtown Highlights",
        description:
          "Explore well-known city points and lively urban areas together.",
      },
      {
        day: "Day 3",
        title: "Skyline Day",
        description: "Enjoy city viewpoints and photo-worthy skyline scenes.",
      },
      {
        day: "Day 4",
        title: "Food and Shopping",
        description:
          "Spend the day among famous shopping areas and dining districts.",
      },
      {
        day: "Day 5",
        title: "Flexible Group Leisure",
        description:
          "Enjoy free time while staying connected to the trip structure.",
      },
      {
        day: "Day 6",
        title: "Departure",
        description: "Breakfast, checkout, and transfer for departure.",
      },
    ],
  },
  {
    id: 19,
    slug: "bali-group-discovery-tour",
    title: "Bali Group Discovery Tour",
    price: 990,
    priceLabel: "$ 990",
    duration: "6 Days / 5 Nights",
    days: 6,
    nights: 5,
    image: tt12,
    destination: "Bali",
    category: "Group Tours",
    categories: ["Nature", "Discovery Tours"],
    groupSize: "6 - 18 People",
    bestTime: "Apr - Oct",
    stay: "Resort + Villa Stay",
    overview:
      "A social Bali trip with scenic beauty, cultural highlights, and easy premium group travel.",
    highlights: [
      "Tropical scenic routes",
      "Culture-rich experiences",
      "Group-friendly planning",
      "Relaxed island comfort",
      "Premium shared stay",
    ],
    included: [
      "Resort stay",
      "Breakfast",
      "Transfers",
      "Selected sightseeing",
      "Local coordination",
    ],
    itinerary: [
      {
        day: "Day 1",
        title: "Arrival in Bali",
        description:
          "Arrive, check in, and settle into your resort with the group.",
      },
      {
        day: "Day 2",
        title: "Scenic Discovery",
        description:
          "Visit beautiful local points and enjoy shared travel moments.",
      },
      {
        day: "Day 3",
        title: "Culture and Coast",
        description:
          "Experience Bali’s island charm through easy guided movement.",
      },
      {
        day: "Day 4",
        title: "Leisure Day",
        description:
          "Relax at the resort or enjoy optional island exploration.",
      },
      {
        day: "Day 5",
        title: "Group Excursion",
        description:
          "Spend the day visiting more of Bali’s scenic and cultural highlights.",
      },
      {
        day: "Day 6",
        title: "Departure",
        description: "Breakfast, checkout, and airport transfer.",
      },
    ],
  },
  {
    id: 20,
    slug: "swiss-group-panorama-journey",
    title: "Swiss Group Panorama Journey",
    price: 1860,
    priceLabel: "$ 1,860",
    duration: "7 Days / 6 Nights",
    days: 7,
    nights: 6,
    image: tt13,
    destination: "Switzerland",
    category: "Group Tours",
    categories: ["Nature", "Summer 2026 Tour"],
    groupSize: "6 - 18 People",
    bestTime: "May - Sep",
    stay: "Scenic Hotels",
    overview:
      "A Switzerland group trip filled with iconic mountain views, scenic train moments, and premium comfort throughout.",
    highlights: [
      "Scenic Swiss rail routes",
      "Group-friendly premium stays",
      "Mountain and lake views",
      "Shared sightseeing moments",
      "Beautiful countryside pace",
    ],
    included: [
      "Hotel stay",
      "Breakfast",
      "Transfers",
      "Scenic sightseeing",
      "Tour support",
    ],
    itinerary: [
      {
        day: "Day 1",
        title: "Arrival and Check-in",
        description: "Arrive and settle into your hotel with your group.",
      },
      {
        day: "Day 2",
        title: "Lakefront Discovery",
        description: "Spend the day by scenic Swiss lakes and charming towns.",
      },
      {
        day: "Day 3",
        title: "Mountain Rail Day",
        description: "Enjoy panoramic rail movement through alpine regions.",
      },
      {
        day: "Day 4",
        title: "Village and Culture",
        description:
          "Experience Swiss villages, local corners, and easy-paced travel.",
      },
      {
        day: "Day 5",
        title: "Leisure and Views",
        description: "Enjoy free time surrounded by premium natural beauty.",
      },
      {
        day: "Day 6",
        title: "Final Excursion",
        description:
          "Visit more scenic points and capture beautiful travel moments.",
      },
      {
        day: "Day 7",
        title: "Departure",
        description: "Breakfast, checkout, and transfer for departure.",
      },
    ],
  },

  {
    id: 21,
    slug: "paris-short-city-break",
    title: "Paris Short City Break",
    price: 1120,
    priceLabel: "$ 1,120",
    duration: "5 Days / 4 Nights",
    days: 5,
    nights: 4,
    image: tt14,
    destination: "Paris",
    category: "Short Breaks",
    categories: ["Romantic", "Fixed Departure 2026"],
    groupSize: "2 - 8 People",
    bestTime: "All Year",
    stay: "Comfort City Hotel",
    overview:
      "A compact Paris break with iconic landmarks, stylish streets, and a smooth premium travel flow.",
    highlights: [
      "Quick luxury city break",
      "Beautiful Paris evenings",
      "Riverfront charm",
      "Premium short itinerary",
      "Easy landmark access",
    ],
    included: ["Hotel stay", "Breakfast", "Transfers", "Sightseeing support"],
    itinerary: [
      {
        day: "Day 1",
        title: "Arrival",
        description: "Arrive in Paris and enjoy a gentle evening city stroll.",
      },
      {
        day: "Day 2",
        title: "Landmarks",
        description: "Discover iconic Paris sights and scenic city viewpoints.",
      },
      {
        day: "Day 3",
        title: "Riverside Walks",
        description:
          "Spend time around bridges, river paths, and charming streets.",
      },
      {
        day: "Day 4",
        title: "Leisure",
        description:
          "Enjoy shopping, cafés, and free exploration at your own pace.",
      },
      {
        day: "Day 5",
        title: "Departure",
        description: "Checkout and transfer for your return journey.",
      },
    ],
  },
  {
    id: 22,
    slug: "venice-weekend-classic",
    title: "Venice Weekend Classic",
    price: 1160,
    priceLabel: "$ 1,160",
    duration: "5 Days / 4 Nights",
    days: 5,
    nights: 4,
    image: tt15,
    destination: "Italy",
    category: "Short Breaks",
    categories: ["Romantic", "Discovery Tours"],
    groupSize: "2 - 8 People",
    bestTime: "Apr - Oct",
    stay: "Boutique Canal Hotel",
    overview:
      "A polished Venice short break with canals, heritage charm, and easy premium sightseeing.",
    highlights: [
      "Canal-side city stay",
      "Compact premium itinerary",
      "Historic streets",
      "Food and culture moments",
      "Relaxed European charm",
    ],
    included: [
      "Hotel accommodation",
      "Breakfast",
      "Transfers",
      "Guided city support",
    ],
    itinerary: [
      {
        day: "Day 1",
        title: "Arrival",
        description: "Arrive and settle into your canal-side hotel.",
      },
      {
        day: "Day 2",
        title: "Waterways and Bridges",
        description: "Explore elegant canals, bridges, and city corners.",
      },
      {
        day: "Day 3",
        title: "Heritage and Flavors",
        description: "Enjoy local streets, artisan shops, and Italian flavors.",
      },
      {
        day: "Day 4",
        title: "Leisure Day",
        description: "Relax and revisit your favorite spots in Venice.",
      },
      {
        day: "Day 5",
        title: "Departure",
        description: "Breakfast, checkout, and transfer.",
      },
    ],
  },
  {
    id: 23,
    slug: "dubai-luxury-short-break",
    title: "Dubai Luxury Short Break",
    price: 1240,
    priceLabel: "$ 1,240",
    duration: "5 Days / 4 Nights",
    days: 5,
    nights: 4,
    image: t166,
    destination: "Dubai",
    category: "Short Breaks",
    categories: ["Adventure", "Super Seller Packages"],
    groupSize: "2 - 10 People",
    bestTime: "Nov - Mar",
    stay: "Downtown Premium Hotel",
    overview:
      "A stylish Dubai break with skyline views, premium shopping, city energy, and desert-inspired luxury.",
    highlights: [
      "Downtown skyline views",
      "Luxury shopping districts",
      "Fast and easy itinerary",
      "Premium city comfort",
      "Iconic urban atmosphere",
    ],
    included: [
      "Hotel stay",
      "Breakfast",
      "Transfers",
      "City sightseeing support",
    ],
    itinerary: [
      {
        day: "Day 1",
        title: "Arrival in Dubai",
        description:
          "Arrive, transfer to the hotel, and enjoy an evening city view.",
      },
      {
        day: "Day 2",
        title: "Downtown Highlights",
        description:
          "Explore premium districts, skyline scenes, and city attractions.",
      },
      {
        day: "Day 3",
        title: "Shopping and Leisure",
        description:
          "Spend the day with relaxed shopping and premium dining options.",
      },
      {
        day: "Day 4",
        title: "Flexible Exploration",
        description: "Enjoy more of the city at your own comfortable pace.",
      },
      {
        day: "Day 5",
        title: "Departure",
        description: "Breakfast, checkout, and airport transfer.",
      },
    ],
  },
  {
    id: 24,
    slug: "bali-quick-island-break",
    title: "Bali Quick Island Break",
    price: 910,
    priceLabel: "$ 910",
    duration: "5 Days / 4 Nights",
    days: 5,
    nights: 4,
    image: tt17,
    destination: "Bali",
    category: "Short Breaks",
    categories: ["Nature", "Summer 2026 Tour"],
    groupSize: "2 - 10 People",
    bestTime: "Apr - Oct",
    stay: "Island Resort",
    overview:
      "A refreshing Bali short getaway with tropical scenery, resort comfort, and a smooth easy pace.",
    highlights: [
      "Tropical island charm",
      "Comfortable short stay",
      "Scenic coastal moments",
      "Relaxed resort experience",
      "Easy premium planning",
    ],
    included: [
      "Resort stay",
      "Breakfast",
      "Airport transfers",
      "Travel assistance",
    ],
    itinerary: [
      {
        day: "Day 1",
        title: "Arrival",
        description:
          "Check in and enjoy your first evening in tropical surroundings.",
      },
      {
        day: "Day 2",
        title: "Coastal Discovery",
        description:
          "Visit beautiful island viewpoints and scenic local areas.",
      },
      {
        day: "Day 3",
        title: "Resort Leisure",
        description: "Slow down and enjoy your resort at a comfortable pace.",
      },
      {
        day: "Day 4",
        title: "Local Charm",
        description:
          "Explore more of Bali’s atmosphere through an easy outing.",
      },
      {
        day: "Day 5",
        title: "Departure",
        description: "Breakfast, checkout, and airport transfer.",
      },
    ],
  },
  {
    id: 25,
    slug: "new-york-weekend-break",
    title: "New York Weekend Break",
    price: 1190,
    priceLabel: "$ 1,190",
    duration: "5 Days / 4 Nights",
    days: 5,
    nights: 4,
    image: tt18,
    destination: "New York",
    category: "Short Breaks",
    categories: ["Adventure", "Fixed Departure 2026"],
    groupSize: "2 - 10 People",
    bestTime: "Apr - Jun / Sep - Dec",
    stay: "Central Hotel",
    overview:
      "A high-style New York short break focused on skyline scenes, signature districts, and efficient premium travel.",
    highlights: [
      "Quick city escape",
      "Skyline and district views",
      "Urban shopping",
      "Comfortable central stay",
      "Easy premium pace",
    ],
    included: ["Hotel stay", "Breakfast", "Transfers", "City assistance"],
    itinerary: [
      {
        day: "Day 1",
        title: "Arrival",
        description:
          "Arrive and settle into your hotel in the heart of the city.",
      },
      {
        day: "Day 2",
        title: "City Highlights",
        description:
          "Discover signature New York locations and major viewpoints.",
      },
      {
        day: "Day 3",
        title: "Shopping and Food",
        description: "Enjoy premium shopping areas and lively food spots.",
      },
      {
        day: "Day 4",
        title: "Leisure Day",
        description: "Take your time exploring the city at your own pace.",
      },
      {
        day: "Day 5",
        title: "Departure",
        description: "Breakfast, checkout, and transfer for departure.",
      },
    ],
  },
  {
    id: 1001,
    slug: "italy-amalfi-coast",
    title: "Amalfi Coast Romantic Escape",
    price: 1480,
    priceLabel: "$ 1,480",
    duration: "5 Days / 4 Nights",
    days: 5,
    nights: 4,
    image: ht1,
    destination: "Italy",
    category: "Romantic",
    categories: ["Trending Destinations", "Coastal Escapes"],
    groupSize: "2 - 10 People",
    bestTime: "Apr - Oct",
    stay: "Sea View Boutique Hotel",
    overview:
      "Discover the Amalfi Coast with luxury stays, cliffside villages, private transfers, and iconic Mediterranean views.",
    highlights: [
      "Positano and Ravello views",
      "Private coastal drive",
      "Sunset boat cruise",
      "Gourmet seaside dining",
      "Boutique hotel comfort",
    ],
    included: [
      "Airport pickup and private transfer",
      "4 nights boutique hotel stay",
      "Daily breakfast",
      "Local guided sightseeing",
      "Boat cruise experience",
    ],
    itinerary: [
      {
        day: "Day 1",
        title: "Arrival in Amalfi",
        description:
          "Arrive along the coast, settle into your hotel, and enjoy a welcome sunset stroll.",
      },
      {
        day: "Day 2",
        title: "Positano & Ravello",
        description:
          "Explore iconic cliffside villages, charming streets, and scenic viewpoints.",
      },
      {
        day: "Day 3",
        title: "Amalfi Coast Drive",
        description:
          "Take a private coastal drive with stops at hidden bays, lemon gardens, and photo spots.",
      },
      {
        day: "Day 4",
        title: "Sunset Boat Cruise",
        description:
          "Enjoy the coastline from the water with refreshments, sea views, and soft evening light.",
      },
      {
        day: "Day 5",
        title: "Departure",
        description:
          "Breakfast at the hotel and transfer to the airport for your onward journey.",
      },
    ],
  },
  {
    id: 1002,
    slug: "greece-santorini",
    title: "Santorini Island Escape",
    price: 1620,
    priceLabel: "$ 1,620",
    duration: "5 Days / 4 Nights",
    days: 5,
    nights: 4,
    image: ht2,
    destination: "Greece",
    category: "Island",
    categories: ["Trending Destinations", "Romantic Escapes"],
    groupSize: "2 - 12 People",
    bestTime: "Apr - Oct",
    stay: "Cliffside Luxury Villa",
    overview:
      "Experience Santorini with sunsets, whitewashed villages, premium stays, and a relaxed island rhythm.",
    highlights: [
      "Iconic Oia sunsets",
      "Caldera views",
      "Beach club day",
      "Winery tasting",
      "Luxury villa stay",
    ],
    included: [
      "Airport transfer",
      "4 nights luxury villa stay",
      "Daily breakfast",
      "Winery arrival tour",
      "Local guided island experience",
    ],
    itinerary: [
      {
        day: "Day 1",
        title: "Welcome to Santorini",
        description:
          "Arrive, transfer to your villa, and enjoy an evening with caldera views.",
      },
      {
        day: "Day 2",
        title: "Oia Village",
        description:
          "Stroll Oia, visit local boutiques, and relax with a sunset view.",
      },
      {
        day: "Day 3",
        title: "Catamaran Cruise",
        description:
          "Sail the caldera, swim in private coves, and enjoy refreshments on board.",
      },
      {
        day: "Day 4",
        title: "Winery Dinner",
        description:
          "Sample premium local wines and enjoy a gourmet dinner overlooking the sea.",
      },
      {
        day: "Day 5",
        title: "Departure",
        description:
          "Breakfast, checkout, and transfer to the airport for departure.",
      },
    ],
  },
  {
    id: 1003,
    slug: "spain-barcelona",
    title: "Barcelona City & Culture Tour",
    price: 1190,
    priceLabel: "$ 1,190",
    duration: "5 Days / 4 Nights",
    days: 5,
    nights: 4,
    image: ht3,
    destination: "Spain",
    category: "City",
    categories: ["Trending Destinations", "City Breaks"],
    groupSize: "2 - 12 People",
    bestTime: "Mar - Oct",
    stay: "Central Boutique Hotel",
    overview:
      "Discover Barcelona’s architecture, culinary scene, beaches, and vibrant city energy in a polished short escape.",
    highlights: [
      "Sagrada Familia visit",
      "Gothic Quarter walk",
      "Tapas tasting",
      "Beach time",
      "Modernist architecture tour",
    ],
    included: [
      "Airport transfer",
      "4 nights boutique hotel stay",
      "Daily breakfast",
      "Guided city walking tour",
      "Tapas dining experience",
    ],
    itinerary: [
      {
        day: "Day 1",
        title: "Arrival in Barcelona",
        description:
          "Arrive in the city, transfer to your hotel, and enjoy a relaxed welcome evening.",
      },
      {
        day: "Day 2",
        title: "Gothic Quarter",
        description:
          "Explore historic streets, plazas, and the old city’s vibrant atmosphere.",
      },
      {
        day: "Day 3",
        title: "Sagrada Familia",
        description:
          "Visit Gaudí’s masterpiece and learn about the city’s architectural heritage.",
      },
      {
        day: "Day 4",
        title: "Beach and Tapas",
        description:
          "Spend time on the beach and savor tapas at a premium local restaurant.",
      },
      {
        day: "Day 5",
        title: "Departure",
        description: "Breakfast and transfer to the airport for onward travel.",
      },
    ],
  },
  {
    id: 1004,
    slug: "portugal-lisbon",
    title: "Lisbon Relaxed Escape",
    price: 980,
    priceLabel: "$ 980",
    duration: "5 Days / 4 Nights",
    days: 5,
    nights: 4,
    image: ht4,
    destination: "Portugal",
    category: "Cultural",
    categories: ["Trending Destinations", "City Breaks"],
    groupSize: "2 - 12 People",
    bestTime: "Mar - Oct",
    stay: "Historic Boutique Hotel",
    overview:
      "Enjoy a charming Lisbon escape with historic neighborhoods, coastal viewpoints, gourmet food, and local culture.",
    highlights: [
      "Alfama district walk",
      "Belém landmarks",
      "Sintra day trip",
      "Food market tasting",
      "Riverside viewpoints",
    ],
    included: [
      "Airport transfer",
      "4 nights boutique hotel stay",
      "Daily breakfast",
      "Guided city tour",
      "Sintra excursion",
    ],
    itinerary: [
      {
        day: "Day 1",
        title: "Arrival in Lisbon",
        description:
          "Arrive and settle into your hotel with a relaxed riverside evening.",
      },
      {
        day: "Day 2",
        title: "Alfama and History",
        description:
          "Explore Lisbon’s oldest neighborhood with its narrow streets and authentic charm.",
      },
      {
        day: "Day 3",
        title: "Belém and Monuments",
        description:
          "Visit Belém Tower, Jerónimos Monastery, and enjoy local pastries.",
      },
      {
        day: "Day 4",
        title: "Sintra Day Trip",
        description:
          "Discover fairy-tale palaces, gardens, and dramatic hills just outside Lisbon.",
      },
      {
        day: "Day 5",
        title: "Departure",
        description:
          "Breakfast and transfer to the airport for your onward plans.",
      },
    ],
  },
  {
    id: 1005,
    slug: "croatia-dubrovnik",
    title: "Dubrovnik Historic Coast Journey",
    price: 1340,
    priceLabel: "$ 1,340",
    duration: "5 Days / 4 Nights",
    days: 5,
    nights: 4,
    image: ht5,
    destination: "Croatia",
    category: "Coastal",
    categories: ["Trending Destinations", "Historic Tours"],
    groupSize: "2 - 10 People",
    bestTime: "Apr - Oct",
    stay: "Seafront Boutique Hotel",
    overview:
      "Experience Dubrovnik’s legendary old town, island escapes, cliffside views, and premium dining on the Adriatic coast.",
    highlights: [
      "Dubrovnik Old Town tour",
      "Island boat trip",
      "City walls walk",
      "Sunset dining",
      "Luxury hotel stay",
    ],
    included: [
      "Airport transfer",
      "4 nights hotel stay",
      "Daily breakfast",
      "Old Town guided tour",
      "Island boat excursion",
    ],
    itinerary: [
      {
        day: "Day 1",
        title: "Arrival in Dubrovnik",
        description:
          "Arrive on the coast, transfer to the hotel, and enjoy your first Dubrovnik views.",
      },
      {
        day: "Day 2",
        title: "Old Town Experience",
        description:
          "Walk the city walls, visit historic landmarks, and enjoy the vibrant stone streets.",
      },
      {
        day: "Day 3",
        title: "Island Escape",
        description:
          "Take a boat trip to a nearby island and relax on the Adriatic water.",
      },
      {
        day: "Day 4",
        title: "Coastal Cuisine",
        description:
          "Spend the day at leisure with premium seaside dining and city views.",
      },
      {
        day: "Day 5",
        title: "Departure",
        description:
          "Breakfast and transfer to the airport for your onward journey.",
      },
    ],
  },
  {
    id: 1006,
    slug: "turkey-cappadocia",
    title: "Cappadocia Adventure Escape",
    price: 1260,
    priceLabel: "$ 1,260",
    duration: "5 Days / 4 Nights",
    days: 5,
    nights: 4,
    image: ht6,
    destination: "Turkey",
    category: "Adventure",
    categories: ["Trending Destinations", "Adventure Tours"],
    groupSize: "2 - 12 People",
    bestTime: "Apr - Oct",
    stay: "Cave Hotel Suite",
    overview:
      "Explore Cappadocia with sunrise balloon flights, valley hikes, cave hotels, and local artisan experiences.",
    highlights: [
      "Hot air balloon sunrise",
      "Cave hotel stay",
      "Valley hiking",
      "Local market visit",
      "Unique landscape photography",
    ],
    included: [
      "Airport transfer",
      "4 nights cave hotel stay",
      "Daily breakfast",
      "Balloon flight experience",
      "Guided valley tour",
    ],
    itinerary: [
      {
        day: "Day 1",
        title: "Arrival in Cappadocia",
        description:
          "Arrive and settle into your cave hotel with a sunset overview of the valleys.",
      },
      {
        day: "Day 2",
        title: "Balloon Sunrise",
        description:
          "Experience an early morning balloon flight and enjoy panoramic views.",
      },
      {
        day: "Day 3",
        title: "Valley Exploration",
        description:
          "Hike through scenic valleys and discover hidden rock formations.",
      },
      {
        day: "Day 4",
        title: "Local Culture",
        description:
          "Visit artisan villages, markets, and taste local specialties.",
      },
      {
        day: "Day 5",
        title: "Departure",
        description: "Breakfast, checkout, and transfer to the airport.",
      },
    ],
  },
  {
    id: 1007,
    slug: "paris-luxury-classic",
    title: "Paris Luxury Classic",
    price: 1710,
    priceLabel: "$ 1,710",
    duration: "5 Days / 4 Nights",
    days: 5,
    nights: 4,
    image: ht7,
    destination: "France",
    category: "Luxury",
    categories: ["Trending Destinations", "Romantic Escapes"],
    groupSize: "2 - 10 People",
    bestTime: "Apr - Oct",
    stay: "Central Paris Luxury Hotel",
    overview:
      "Enjoy Paris with iconic landmarks, luxury shopping, river cruises, and premium city experiences.",
    highlights: [
      "Eiffel Tower evening",
      "Louvre highlights",
      "Seine river cruise",
      "Luxury hotel stay",
      "Gourmet dining",
    ],
    included: [
      "Airport transfer",
      "4 nights luxury hotel stay",
      "Daily breakfast",
      "Guided city sightseeing",
      "River cruise ticket",
    ],
    itinerary: [
      {
        day: "Day 1",
        title: "Arrival in Paris",
        description:
          "Arrive and relax at your luxury hotel before an evening stroll by the Seine.",
      },
      {
        day: "Day 2",
        title: "Eiffel Tower & City Icons",
        description:
          "Visit the Eiffel Tower and explore Paris landmarks with a guide.",
      },
      {
        day: "Day 3",
        title: "Louvre and Galleries",
        description: "Discover world-class art and historic museum highlights.",
      },
      {
        day: "Day 4",
        title: "Luxury Shopping",
        description:
          "Enjoy a stylish day of shopping and a gourmet dining experience.",
      },
      {
        day: "Day 5",
        title: "Departure",
        description:
          "Breakfast, checkout, and transfer to your next destination.",
      },
    ],
  },
  {
    id: 1008,
    slug: "austria-vienna",
    title: "Vienna Elegant City Break",
    price: 1120,
    priceLabel: "$ 1,120",
    duration: "5 Days / 4 Nights",
    days: 5,
    nights: 4,
    image: ht8,
    destination: "Austria",
    category: "Cultural",
    categories: ["Trending Destinations", "City Breaks"],
    groupSize: "2 - 10 People",
    bestTime: "Apr - Oct",
    stay: "Central Vienna Hotel",
    overview:
      "Experience Vienna’s palaces, classical music, refined cafés, and elegant city life.",
    highlights: [
      "Palace visit",
      "Classical concert",
      "Museum district",
      "Viennese cafés",
      "Historic city charm",
    ],
    included: [
      "Airport transfer",
      "4 nights hotel stay",
      "Daily breakfast",
      "Guided palace tour",
      "Concert experience",
    ],
    itinerary: [
      {
        day: "Day 1",
        title: "Arrival in Vienna",
        description:
          "Arrive and enjoy a peaceful evening in the historic city center.",
      },
      {
        day: "Day 2",
        title: "Palace & Museums",
        description: "Visit a royal palace and the vibrant museum quarter.",
      },
      {
        day: "Day 3",
        title: "Café Culture",
        description: "Sample Viennese specialties and stroll elegant streets.",
      },
      {
        day: "Day 4",
        title: "Concert Night",
        description:
          "Attend a classical music performance in a historic venue.",
      },
      {
        day: "Day 5",
        title: "Departure",
        description: "Breakfast and transfer to the airport.",
      },
    ],
  },
  {
    id: 1009,
    slug: "switzerland-interlaken",
    title: "Interlaken Alpine Escape",
    price: 1890,
    priceLabel: "$ 1,890",
    duration: "5 Days / 4 Nights",
    days: 5,
    nights: 4,
    image: ht9,
    destination: "Switzerland",
    category: "Nature",
    categories: ["Trending Destinations", "Adventure Tours"],
    groupSize: "2 - 8 People",
    bestTime: "Jun - Sep",
    stay: "Alpine Lodge Retreat",
    overview:
      "Head to Interlaken for lakeside views, mountain adventures, scenic rail trips, and premium alpine comfort.",
    highlights: [
      "Lake and mountain scenery",
      "Jungfrau area day trip",
      "Outdoor adventure",
      "Boutique lodge stay",
      "Scenic rail journey",
    ],
    included: [
      "Airport transfer",
      "4 nights alpine lodge stay",
      "Daily breakfast",
      "Jungfrau excursion",
      "Guided nature walk",
    ],
    itinerary: [
      {
        day: "Day 1",
        title: "Arrival in Interlaken",
        description:
          "Arrive and take in lakeside views from your garden-view lodge.",
      },
      {
        day: "Day 2",
        title: "Jungfrau Adventure",
        description:
          "Explore the Jungfrau region with dramatic mountain scenery.",
      },
      {
        day: "Day 3",
        title: "Lake Discovery",
        description:
          "Enjoy lakeside walks, boat views, and relaxed alpine moments.",
      },
      {
        day: "Day 4",
        title: "Scenic Rail Journey",
        description:
          "Ride a beautiful alpine train route with panoramic vistas.",
      },
      {
        day: "Day 5",
        title: "Departure",
        description: "Breakfast and transfer to the airport.",
      },
    ],
  },
  {
    id: 1010,
    slug: "netherlands-amsterdam",
    title: "Amsterdam Canal City Experience",
    price: 1290,
    priceLabel: "$ 1,290",
    duration: "5 Days / 4 Nights",
    days: 5,
    nights: 4,
    image: ht10,
    destination: "Netherlands",
    category: "City",
    categories: ["Trending Destinations", "City Breaks"],
    groupSize: "2 - 12 People",
    bestTime: "Apr - Sep",
    stay: "Canal-side Hotel",
    overview:
      "Enjoy Amsterdam’s canals, museums, cycling routes, boutique hotels, and lively cafés in a relaxed city escape.",
    highlights: [
      "Canal cruise",
      "Museum district visit",
      "Cycling tour",
      "Boutique hotel stay",
      "Local cafés",
    ],
    included: [
      "Airport transfer",
      "4 nights hotel stay",
      "Daily breakfast",
      "Canal cruise",
      "Guided city and cycling tour",
    ],
    itinerary: [
      {
        day: "Day 1",
        title: "Arrival in Amsterdam",
        description: "Arrive and unwind with a canal-side welcome walk.",
      },
      {
        day: "Day 2",
        title: "Museum Quarter",
        description: "Visit the city’s top museums and galleries.",
      },
      {
        day: "Day 3",
        title: "Canal Cruise",
        description:
          "Enjoy a scenic cruise through Amsterdam’s historic canals.",
      },
      {
        day: "Day 4",
        title: "Cycling and Markets",
        description:
          "Cycle through charming neighborhoods and visit a local market.",
      },
      {
        day: "Day 5",
        title: "Departure",
        description: "Breakfast and transfer to your onward destination.",
      },
    ],
  },
  {
    id: 1011,
    slug: "czech-republic-prague",
    title: "Prague Old Town Magic",
    price: 1060,
    priceLabel: "$ 1,060",
    duration: "5 Days / 4 Nights",
    days: 5,
    nights: 4,
    image: ht11,
    destination: "Czech Republic",
    category: "Historic",
    categories: ["Trending Destinations", "City Breaks"],
    groupSize: "2 - 12 People",
    bestTime: "Apr - Oct",
    stay: "Historic City Center Hotel",
    overview:
      "Discover Prague’s castle views, river walks, bridges, and old-world city atmosphere on an elegant short break.",
    highlights: [
      "Prague Castle visit",
      "Charles Bridge stroll",
      "Old Town Square",
      "River cruise",
      "Historic hotel stay",
    ],
    included: [
      "Airport transfer",
      "4 nights hotel stay",
      "Daily breakfast",
      "Guided castle and old town tour",
      "River cruise",
    ],
    itinerary: [
      {
        day: "Day 1",
        title: "Arrival in Prague",
        description:
          "Arrive and enjoy your first evening in the historic center.",
      },
      {
        day: "Day 2",
        title: "Old Town Exploration",
        description: "Walk through the charming streets and iconic squares.",
      },
      {
        day: "Day 3",
        title: "Castle Visit",
        description: "Explore Prague Castle and its impressive grounds.",
      },
      {
        day: "Day 4",
        title: "River Cruise",
        description: "Relax on a scenic river cruise through the city.",
      },
      {
        day: "Day 5",
        title: "Departure",
        description: "Breakfast and transfer to the airport.",
      },
    ],
  },
  {
    id: 1012,
    slug: "norway-oslo-fjords",
    title: "Oslo Fjords Nordic Premium",
    price: 1760,
    priceLabel: "$ 1,760",
    duration: "5 Days / 4 Nights",
    days: 5,
    nights: 4,
    image: ht12,
    destination: "Norway",
    category: "Nordic",
    categories: ["Trending Destinations", "Premium Tours"],
    groupSize: "2 - 10 People",
    bestTime: "May - Sep",
    stay: "Waterfront Hotel",
    overview:
      "Explore Oslo and the fjords with scenic coastal drives, modern culture, premium stays, and elegant Nordic comfort.",
    highlights: [
      "Fjord cruise",
      "Oslo cultural highlights",
      "Scenic coastal views",
      "Modern Norwegian design",
      "Premium hotel stay",
    ],
    included: [
      "Airport transfer",
      "4 nights hotel stay",
      "Daily breakfast",
      "Fjord cruise",
      "Guided city tour",
    ],
    itinerary: [
      {
        day: "Day 1",
        title: "Arrival in Oslo",
        description:
          "Arrive and enjoy the waterfront atmosphere in Norway’s capital.",
      },
      {
        day: "Day 2",
        title: "Oslo City Highlights",
        description: "Visit modern cultural landmarks and scenic city parks.",
      },
      {
        day: "Day 3",
        title: "Fjord Cruise",
        description:
          "Cruise the Oslo fjord and admire dramatic coastal scenery.",
      },
      {
        day: "Day 4",
        title: "Nordic Design & Relax",
        description:
          "Enjoy Norwegian design, a relaxed waterfront walk, and premium dining.",
      },
      {
        day: "Day 5",
        title: "Departure",
        description: "Breakfast and transfer to the airport.",
      },
    ],
  },
];
