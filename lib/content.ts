// Centralized content for Tattva Coffee Roasters.
// Structure mirrors the Beano reference; copy is Tattva-specific (Indian
// single-origin, JP Nagar Bengaluru). Replace // TODO markers with real data.
// Brand: Tattva (Sanskrit: तत्त्व, "essence" / "the fundamental principle")

export const brand = {
  name: "Tattva",
  fullName: "Tattva Coffee Roasters",
  tagline: "Coffee, the way it should be.",
  meaning: "Tattva (तत्त्व) — Sanskrit for essence, the underlying truth.",
};

export const contact = {
  address: "JP Nagar, Bengaluru — Karnataka 560078", // TODO: exact phase + street
  phone: "+91 00000 00000", // TODO
  email: "hello@tattvacoffee.in", // TODO
  hours: [
    { day: "Mon – Fri", time: "7:30 AM – 9:30 PM" }, // TODO confirm
    { day: "Sat – Sun", time: "8:00 AM – 10:00 PM" }, // TODO confirm
  ],
  instagram: "https://www.instagram.com/tattvacoffeeroasters/",
  twitter: "#",
  linkedin: "#",
  mapsUrl: "https://maps.google.com/?q=Tattva+Coffee+Roasters+JP+Nagar+Bangalore",
};

// ---- Navigation ----------------------------------------------------------
export const navCenter = [
  { label: "Home", href: "/" },
  { label: "About us", href: "/about-us" },
  { label: "Coffee", href: "/coffee" },
  { label: "Menu", href: "/menu" },
];
export const navRight = [
  { label: "Gallery", href: "/gallery" },
  { label: "Contact", href: "/contact-us" },
];

// hero left-rail categories (also the coffee sub-categories)
export const heroCategories = [
  { label: "Decaf", href: "/coffee/decaf" },
  { label: "Filter", href: "/coffee/filter" },
  { label: "Espresso", href: "/coffee/espresso" },
  { label: "Cold Brew", href: "/coffee/cold-brew" },
  { label: "Single Origin", href: "/coffee/single-origin" },
  { label: "Signature Blends", href: "/coffee/signature-blends" },
];

export const heroCopy = {
  eyebrow: "JP Nagar · Bengaluru",
  // Headline is rendered in two visual lines: "Coffee, at its" + italic "essence."
  headlineLead: "Coffee, at its",
  headlineEmph: "essence.",
  sub: "Single-origin Indian beans, slow-roasted in small batches at our JP Nagar roastery.",
  primaryCta: { label: "Explore our coffee", href: "/coffee" },
  secondaryCta: { label: "Visit the café", href: "/contact-us" },
};

// "Today's pour-over" chip — change weekly. Easy to wire to CMS later.
export const todaysFeature = {
  eyebrow: "Today's pour-over",
  name: "Araku Dawn",
  notes: "Honey · Jasmine · Stone fruit",
  detail: "₹220 at the bar",
};

// Provenance keywords for the bottom-of-hero marquee.
export const provenance = [
  "Single Origin",
  "Chikmagalur",
  "Slow Roasted",
  "Coorg",
  "Small Batch",
  "Wayanad",
  "Roasted in JP Nagar",
  "Araku Valley",
  "Direct Trade",
  "Nilgiris",
];

// ---- Crafted coffee collection (16 products) -----------------------------
export type Product = {
  slug: string;
  name: string;
  origin: string;        // Estate / region — short ("Chikmagalur, Karnataka")
  notes: string;         // Tasting notes
  price: string;
  weight: string;
  category: string;
  image: string;
  fresh?: boolean;       // Show "Fresh this week" pill
};

export const collectionSection = {
  eyebrow: "The Shelf · Refreshed Weekly",
  sub: "Roasted small-batch at our JP Nagar roastery. Every bag carries the estate, the varietal, and the week it was roasted — nothing hidden.",
  pickupNote: "Whole bean by default — we'll grind to your brew method at pickup.",
};

export const productFilters = [
  "All Coffee",
  "Decaf",
  "Filter",
  "Espresso",
  "Cold Brew",
  "Single Origin",
  "Signature",
];

export const products: Product[] = [
  { slug: "baba-budan",        name: "Baba Budan",         origin: "Chikmagalur, Karnataka",  notes: "Cocoa, Dried fig, Brown sugar",             price: "₹650", weight: "250g", category: "Single Origin",  image: "/images/products/p01.png", fresh: true },
  { slug: "midnight-roast",    name: "Midnight Roast",     origin: "House blend",             notes: "Dark chocolate, Smoky roast, Molasses",     price: "₹620", weight: "250g", category: "Espresso",       image: "/images/products/p02.png" },
  { slug: "coorg-coastline",   name: "Coorg Coastline",    origin: "Coorg, Karnataka",        notes: "Bright acidity, Citrus peel, Clean finish", price: "₹540", weight: "250g", category: "Filter",         image: "/images/products/p03.png" },
  { slug: "forest-shade",      name: "Forest Shade",       origin: "Chikmagalur, Karnataka",  notes: "Cocoa, Toasted almond, Earthy undertone",   price: "₹700", weight: "250g", category: "Single Origin",  image: "/images/products/p04.png" },
  { slug: "araku-dawn",        name: "Araku Dawn",         origin: "Araku Valley, AP",        notes: "Honey, Jasmine, Stone fruit",               price: "₹820", weight: "250g", category: "Single Origin",  image: "/images/products/p05.png", fresh: true },
  { slug: "wayanad-wild",      name: "Wayanad Wild",       origin: "Wayanad, Kerala",         notes: "Dark chocolate, Black currant, Spice",      price: "₹680", weight: "250g", category: "Single Origin",  image: "/images/products/p06.png" },
  { slug: "chikmagalur-gold",  name: "Chikmagalur Gold",   origin: "Chikmagalur, Karnataka",  notes: "Cocoa powder, Roasted peanut, Low acidity", price: "₹720", weight: "250g", category: "Filter",         image: "/images/products/p07.png" },
  { slug: "monsoon-malabar",   name: "Monsoon Malabar",    origin: "Malabar Coast, Kerala",   notes: "Stone fruit, Caramel, Balanced sweetness",  price: "₹690", weight: "250g", category: "Espresso",       image: "/images/products/p08.png" },
  { slug: "nilgiri-blue",      name: "Nilgiri Blue",       origin: "Nilgiris, Tamil Nadu",    notes: "Milk chocolate, Red apple, Brown sugar",    price: "₹670", weight: "250g", category: "Single Origin",  image: "/images/products/p09.png" },
  { slug: "decaf-nilgiri",     name: "Decaf Nilgiri",      origin: "Nilgiris, Tamil Nadu",    notes: "Plum, Cocoa, Almond",                       price: "₹760", weight: "250g", category: "Decaf",          image: "/images/products/p10.png" },
  { slug: "cold-brew-reserve", name: "Cold Brew Reserve",  origin: "House blend",             notes: "Bright acidity, Citrus peel, Clean finish", price: "₹520", weight: "250g", category: "Cold Brew",      image: "/images/products/p11.png" },
  { slug: "filter-house-blend",name: "Filter House Blend", origin: "House blend",             notes: "Chicory, Toffee, Malt",                     price: "₹540", weight: "250g", category: "Signature",      image: "/images/products/p12.png" },
  { slug: "everyday-blend",    name: "Everyday Blend",     origin: "House blend",             notes: "Balanced sweetness, Mild acidity, Smooth",  price: "₹510", weight: "250g", category: "Signature",      image: "/images/products/p01.png" },
  { slug: "tattva-reserve",    name: "Tattva Reserve",     origin: "Estates blend",           notes: "Dark cocoa, Dried fruit, Full body",        price: "₹920", weight: "250g", category: "Signature",      image: "/images/products/p04.png" },
  { slug: "south-light",       name: "South Light",        origin: "Karnataka & Tamil Nadu",  notes: "Orange zest, Toffee, Crisp acidity",        price: "₹670", weight: "250g", category: "Filter",         image: "/images/products/p07.png" },
  { slug: "spice-route",       name: "Spice Route",        origin: "Karnataka & Kerala",      notes: "Baking spice, Cocoa, Creamy body",          price: "₹740", weight: "250g", category: "Espresso",       image: "/images/products/p02.png" },
];

// ---- "How we make our coffee" (video band) -------------------------------
export const makeSection = {
  eyebrow: "How we make our coffee",
  heading: "We select quality beans, roast in small batches, and focus on balance in every cup.",
  cta: { label: "Learn more about process", href: "/about-us" },
  video: { mp4: "/video/beans-in-hand.mp4", webm: "/video/beans-in-hand.webm", poster: "/video/beans-in-hand-poster.jpg" },
};

// ---- "Behind the Bar" (gallery teaser) -----------------------------------
// Two-line headline; we italicize "craft." for editorial emphasis.
export const exploreSection = {
  eyebrow: "Behind the Bar",
  headingLead: "Every cup is",
  headingEmph: "craft.",
  headingTail: "Slow, exact, made deliberately.",
  sub: "Espresso pulled to weight. Milk steamed to texture. Filter coffee timed to the second. Drop by and we'll show you the work.",
  cta: { label: "Step into the gallery", href: "/gallery" },
  // Floating glass card pinned over the image — live espresso bar moment
  nowBrewing: {
    label: "Now at the bar",
    name: "Midnight Roast",
    notes: "Dark chocolate · Smoky · Molasses",
    detail: "₹190 espresso",
  },
  // Numbers only, zero-padded for editorial rhythm. All three are
  // verifiable Tattva facts (count of SKUs, freshness promise, brew methods).
  stats: [
    { value: "16", label: "Coffees on the shelf" },
    { value: "07", label: "Days max, roast to cup" },
    { value: "04", label: "Brew methods at the bar" },
  ],
  image: "/images/sections/explore-cup.webp",
};

// ---- Our story + values --------------------------------------------------
export const story = {
  eyebrow: "Our story",
  heading:
    "Our journey begins with carefully selected coffee beans sourced from estates who share our values.",
  body: [
    "We work with growers across Chikmagalur, Coorg, Wayanad and Araku — relationships built on trust, fair prices, and a shared love of the craft.",
    "Tattva is more than a brand — it's a place for people who appreciate well-made coffee and the quiet moments that come with it.",
  ],
  cta: { label: "Learn more", href: "/about-us" },
  image: "/images/sections/story.webp",
};

export const values = [
  { n: "01", title: "Quality", body: "Beans cupped before they're bought. Roasted within the week." },
  { n: "02", title: "Simplicity", body: "No syrups, no theatrics. Just the coffee, made well." },
  { n: "03", title: "Care", body: "Small batches, profiled bean by bean for flavour." },
  { n: "04", title: "People", body: "Growers we know by name. Regulars we know by order." },
];

// ---- Process -------------------------------------------------------------
// Tattva-specific concrete copy — names the gear (Probat), the estates
// (Chikmagalur, Coorg, Wayanad, Araku), and the freshness promise (7 days).
export const process = {
  eyebrow: "Our Process",
  heading: "From the estate to your cup, in seven days.",
  body: "We cup at origin. Roast small. Date every bag. The work between us and the bean is on display — that's the whole idea.",
  image: "/images/sections/foam-cup.webp",
  steps: [
    {
      n: "01",
      title: "Source",
      body:
        "We cup before we buy. Lots that pass come from estates in Chikmagalur, Coorg, Wayanad and Araku — relationships built one season at a time.",
    },
    {
      n: "02",
      title: "Roast",
      body:
        "Small batches on a Probat at our JP Nagar roastery. Each profile is built bean-by-bean to pull out what the origin actually gave us.",
    },
    {
      n: "03",
      title: "Serve",
      body:
        "Within seven days of the roast, every bag is sealed, dated, and on the shelf. What's not on the shelf is in your cup at the bar.",
    },
  ],
};

// ---- Founder quote -------------------------------------------------------
// quoteLead = bright white. quoteTail = faded/muted. (Two-tone for emphasis.)
export const founderNote = {
  eyebrow: "Quote from a founder",
  quoteLead: "Our goal was never to complicate coffee, but to respect it—",
  quoteTail: "by choosing good beans, roasting carefully, and staying consistent.",
  author: "The Tattva team", // TODO: real founder name
  role: "Founder, Tattva Coffee Roasters",
  // TODO: replace with a real founder portrait — currently a serif monogram chip
  avatar: null as string | null,
  image: "/images/sections/story.webp", // roasting drum + falling beans
};

// ---- Brew section --------------------------------------------------------
// Tattva-specific: declares the 4 brew methods, makes 2 concrete operational
// commitments. Headline italicizes "own" in clay for editorial emphasis.
export const brewSection = {
  eyebrow: "Brewed to Order",
  headingLead: "Each bean asks for its",
  headingEmph: "own",
  headingTail: "brew.",
  body: "Espresso for the dense and sweet. Filter for the clean and bright. Pour-over for the delicate. Cold brew for the bold. We pick the method that serves the bean.",
  cta: { label: "See the menu", href: "/menu" },
  // small label strip under the body — proves the "4 methods" claim
  methods: ["Espresso", "Filter", "Pour-over", "Cold Brew"],
  // Concrete commitments instead of platitudes
  features: [
    { title: "Weighed in",   body: "Every shot pulled by weight. Scales stay on the bar — no eye-balling." },
    { title: "Tasted daily", body: "We cup the bar coffee every morning. If it's off, we adjust before service." },
  ],
  video: { mp4: "/video/barista-foam.mp4", webm: "/video/barista-foam.webm", poster: "/video/barista-foam-poster.jpg" },
};

// ---- Testimonials --------------------------------------------------------
// One featured (renders as the pull-quote centerpiece, with the mentioned
// product floating beside it) + six supporting (scroll past in a marquee).
export type Testimonial = {
  quote: string;
  name: string;
  role: string;
  featured?: boolean;
  mentionsProduct?: string; // slug → looked up in `products` for the floating card
};

export const testimonials: Testimonial[] = [
  {
    quote:
      "Their Coorg Coastline has been my morning ritual for six months. The notes on the bag actually taste the way they're written — that's rare.",
    name: "Karthik M.",
    role: "Home brewer · Bengaluru",
    featured: true,
    mentionsProduct: "coorg-coastline",
  },
  {
    quote:
      "Walked in for a flat white, stayed two hours. The pour-over flight on a Saturday is the most peaceful thing in JP Nagar.",
    name: "Aishwarya R.",
    role: "JP Nagar regular",
  },
  {
    quote:
      "The Araku Dawn ruined other coffees for me. Floral, clean, completely honest. Worth every rupee.",
    name: "Naina S.",
    role: "Banashankari",
  },
  {
    quote:
      "Best South Indian filter coffee outside my grandmother's kitchen. Quiet space and the staff actually knows the beans.",
    name: "Rohan D.",
    role: "Jayanagar",
  },
  {
    quote:
      "Cold brew tonic is the best thing about Bengaluru summers. They've earned my Saturday afternoons.",
    name: "Aditi K.",
    role: "Koramangala",
  },
  {
    quote:
      "Bought a bag for a friend who's a coffee snob. She texted asking where I got it. Mission accomplished.",
    name: "Rajesh P.",
    role: "Indiranagar",
  },
  {
    quote:
      "Quiet, unfussy, and the espresso is the cleanest I've had in JP Nagar. I work from here most afternoons.",
    name: "Sneha V.",
    role: "HSR Layout",
  },
];

// Aggregate rating for the trust ribbon
export const ratingBadge = {
  value: "4.9",
  count: "240+",
  source: "Google reviews",
};

// ---- Closing CTA ---------------------------------------------------------
export const closingCta = {
  heading: "Ready to enjoy Tattva",
  body: "Explore our selection of carefully roasted coffee, made for everyday moments and easy enjoyment.",
  cta: { label: "Find your coffee", href: "/coffee" },
};

// ---- FAQ -----------------------------------------------------------------
export const faqs = [
  { q: "Do you roast your own beans?", a: "Yes. Every bean is roasted in small batches at our roastery in JP Nagar, usually within the week you receive it." },
  { q: "Where do your beans come from?", a: "Indian estates we work with directly — Chikmagalur, Coorg, Wayanad, Araku and the Nilgiris. Origin and process are named on every bag." },
  { q: "How should I store my coffee?", a: "Keep it in a cool, dry place in an airtight container, away from light. Avoid the fridge. Use within 3–4 weeks of the roast date for best flavour." },
  { q: "Do you grind to order?", a: "We sell whole bean by default to keep it fresh, but we're happy to grind for your brew method — just ask in-store or note it on your order." },
  { q: "Do you offer subscriptions?", a: "Yes — a rotating single-origin or a fixed favourite, delivered fortnightly or monthly. Ask us in-store or over email to set one up." },
  { q: "Can I visit the roastery?", a: "Absolutely. Drop by the café in JP Nagar any day of the week. If you'd like a guided cupping, message us ahead on Instagram." },
];

// ---- Gallery (reuse downloaded media) ------------------------------------
export const gallery = [
  "/images/sections/story.webp",
  "/images/sections/brew.webp",
  "/images/sections/foam-cup.webp",
  "/images/sections/beans1.jpg",
  "/images/sections/process.webp",
  "/images/sections/explore-cup.webp",
  "/images/sections/ground.jpg",
  "/images/sections/beans3.jpg",
  "/images/sections/beans2.jpg",
];

// ---- Blog (placeholder posts) --------------------------------------------
export const posts = [
  { slug: "common-coffee-mistakes", title: "Common coffee mistakes and how to fix them", excerpt: "Small changes to grind, water and timing that make an outsized difference to your cup.", image: "/images/sections/ground.jpg", date: "May 2026" },
  { slug: "why-single-origin", title: "Why we love single-origin", excerpt: "What 'single origin' actually means, and why it tastes the way it does.", image: "/images/sections/beans1.jpg", date: "Apr 2026" },
  { slug: "filter-vs-espresso", title: "Filter vs espresso: which bean, which brew", excerpt: "Matching roast profiles to brew methods for the cup you actually want.", image: "/images/sections/frame7.webp", date: "Mar 2026" },
];

// ---- About page ----------------------------------------------------------
export const aboutHero = {
  eyebrow: "Since 2025 · JP Nagar, Bengaluru",
  headingLead: "Coffee that tells",
  headingEmph: "its own",
  headingTail: "truth.",
  sub: "Tattva — Sanskrit for essence — is a roastery and café making single-origin Indian coffee from the estates that grow it best.",
  cta: { label: "See our coffees", href: "/coffee" },
  video: {
    mp4: "/video/latte-art.mp4",
    webm: "/video/latte-art.webm",
    poster: "/video/latte-art-poster.jpg",
  },
};

export const aboutStory = {
  eyebrow: "Our Story",
  heading: "Tattva began with a question.",
  paras: [
    "Why does so much café coffee taste the same — louder, sweeter, hidden behind syrups?",
    "We thought a roastery in Bengaluru, working only with Indian estates we actually knew, could do something quieter. So we started in 2025 with one Probat, four estates, and a short list of opinions about how coffee should taste.",
    "That hasn't really changed. We still buy lots we've cupped, still roast in small batches, and still name exactly what's in every bag.",
  ],
  pullquote: "Tattva — the underlying truth of a thing.",
  stats: [
    { value: "2025", label: "Founded in JP Nagar" },
    { value: "05",   label: "Estates we work with" },
    { value: "16",   label: "Coffees on the shelf" },
    { value: "<7d",  label: "Roast to cup, always" },
  ],
  image: "/images/sections/about-2.webp",
};

export const aboutTimeline = {
  eyebrow: "The Journey",
  heading: "How Tattva grew.",
  sub: "Five chapters, in roughly the order they happened.",
  items: [
    {
      year: "2023",
      chapter: "Chapter 01",
      title: "The idea.",
      body: "Cupped at twelve cafés across South India. Found maybe three that named where the coffee came from. Decided to build the kind of roastery we wanted to drink from.",
      image: "/images/sections/explore-cup.webp",
      stats: [
        { value: "12", label: "Cafés visited" },
        { value: "03", label: "Named origin" },
      ],
    },
    {
      year: "2024",
      chapter: "Chapter 02",
      title: "First roast.",
      body: "Installed a Probat at a small space in JP Nagar. The first six lots came from a single Chikmagalur estate — the same one we still buy from today.",
      image: "/images/sections/story.webp",
      stats: [
        { value: "01", label: "Probat installed" },
        { value: "01", label: "First estate" },
      ],
    },
    {
      year: "Apr 2025",
      chapter: "Chapter 03",
      title: "Café opens.",
      body: "Twelve seats, a four-group La Marzocco, and a window onto the roaster. Doors open at 7:30 AM — before sunrise, on Saturdays.",
      image: "/images/sections/brew.webp",
      stats: [
        { value: "12", label: "Seats at the bar" },
        { value: "04", label: "Brew methods" },
      ],
    },
    {
      year: "Aug 2025",
      chapter: "Chapter 04",
      title: "Direct trade.",
      body: "Signed our first direct-trade lot from a Coorg grower. No middleman, fair price, repeat orders — the start of how we want to work.",
      image: "/images/sections/beans1.jpg",
      stats: [
        { value: "01", label: "Direct lot" },
        { value: "00", label: "Middlemen" },
      ],
    },
    {
      year: "2026",
      chapter: "Chapter 05",
      title: "Cuppings begin.",
      body: "Saturday mornings turn into open cuppings. Anyone can join, no experience needed, all of it free.",
      image: "/images/sections/about-1.webp",
      stats: [
        { value: "Sat", label: "Every week" },
        { value: "Free", label: "To attend" },
      ],
    },
  ],
};

export const aboutPeople = {
  eyebrow: "The People",
  heading: "Small team. Big opinions about coffee.",
  intro: "Four people. Different paths in, same standards. You'll meet most of us if you drop by the bar.",
  // TODO: replace placeholder portraits with real Tattva team photos
  members: [
    { name: "Vikram R.", role: "Founder & Head Roaster",  since: "Since '23", bio: "Five years cupping for a specialty importer before opening Tattva. Won't shut up about Karnataka.", image: "/images/people/vikram.jpg" },
    { name: "Aisha K.",  role: "Café Lead",                since: "Since '25", bio: "Trained at a Chennai roastery. Builds the seasonal menu and runs the bar.",                       image: "/images/people/aisha.jpg" },
    { name: "Manoj P.",  role: "Sourcing",                 since: "Since '24", bio: "Visits every estate twice a season. Speaks Kannada, Tamil, Malayalam.",                          image: "/images/people/manoj.jpg" },
    { name: "Priya S.",  role: "Community & Cuppings",     since: "Since '26", bio: "Runs the Saturday cuppings and writes our journal. Pours a precise V60.",                        image: "/images/people/priya.jpg" },
  ],
};

export const aboutCommunity = {
  eyebrow: "Come Closer",
  heading: "Weekly cuppings, free to attend.",
  body: "Saturday mornings, 10:30 to noon. We cup four coffees, talk about origin and process, and answer whatever questions you bring. No experience needed. RSVP via Instagram.",
  cta: { label: "Message us on Instagram", href: "https://www.instagram.com/tattvacoffeeroasters/" },
  image: "/images/sections/about-1.webp",
};

// ---- Origins band --------------------------------------------------------
// Five Indian estates with distance from the JP Nagar roastery. Shown as a
// horizontal journey-line interstitial between sections (see OriginsBand.tsx).
// Order from west-to-east-ish for a natural visual flow.
export const originsBand = {
  eyebrow: "Sourced Across South India",
  heading: "Coffee worth travelling for.",
  origins: [
    { name: "Chikmagalur",  state: "Karnataka",      distance: "250 km" },
    { name: "Coorg",        state: "Karnataka",      distance: "240 km" },
    { name: "Wayanad",      state: "Kerala",         distance: "270 km" },
    { name: "Nilgiris",     state: "Tamil Nadu",     distance: "290 km" },
    { name: "Araku Valley", state: "Andhra Pradesh", distance: "1,100 km" },
  ],
  footnote:
    "Every bag travels under 1,100 km from estate to roastery to your hands.",
  promise: "7 days from roast.",
};

// ---- Section images (general) --------------------------------------------
export const images = {
  hero: "/images/hero-crema.webp",
  brew: "/images/sections/brew.webp",
  foam: "/images/sections/foam-cup.webp",
  beans1: "/images/sections/beans1.jpg",
  beans2: "/images/sections/beans2.jpg",
  beans3: "/images/sections/beans3.jpg",
  ground: "/images/sections/ground.jpg",
  espressoGlass: "/images/sections/frame7.webp",
  cupCutout: "/images/sections/frame8.webp",
  grain: "/images/sections/grain.webp",
};
