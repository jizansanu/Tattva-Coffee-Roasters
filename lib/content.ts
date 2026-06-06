// Centralized content for Tattva Coffee Roasters.
// Structure mirrors the Beano reference; copy is Tattva-specific (Indian
// single-origin, JP Nagar Bengaluru). Replace // TODO markers with real data.
// Brand: Tattva (Sanskrit: तत्त्व, "essence" / "the fundamental principle")

export const brand = {
  name: "Tattva",
  fullName: "Tattva Coffee Roasters",
  tagline: "South Indian filter coffee, done properly.",
  meaning: "Tattva (तत्त्व) — Sanskrit for essence, the underlying truth.",
};

// ---- The real café menu (from Tattva's physical menu) --------------------
// Multi-tier prices kept as ordered { size, price } rows.
export type MenuItem = {
  name: string;
  note?: string;                       // bracketed description on the menu
  prices: { size: string; price: string }[];
};
export type MenuGroup = { title: string; items: MenuItem[] };

export const cafeMenu: MenuGroup[] = [
  {
    title: "Filter Coffee",
    items: [
      { name: "House Blend", note: "70:30", prices: [
        { size: "Small", price: "₹30" }, { size: "Medium", price: "₹40" }, { size: "Large", price: "₹50" },
      ] },
      { name: "Pure Blend", note: "100% Arabica", prices: [
        { size: "Small", price: "₹35" }, { size: "Medium", price: "₹45" }, { size: "Large", price: "₹55" },
      ] },
    ],
  },
  {
    title: "Black Coffee",
    items: [
      { name: "Black Coffee", note: "Hot / Cold", prices: [
        { size: "Medium", price: "₹25" }, { size: "Large", price: "₹50" },
      ] },
    ],
  },
  {
    title: "Signature Coffee Drinks",
    items: [
      { name: "Filter Tonic",    note: "Tonic Water + Decoction",  prices: [{ size: "Medium", price: "₹69" }, { size: "Large", price: "₹129" }] },
      { name: "Filter Ale",      note: "Ginger Ale + Decoction",   prices: [{ size: "Medium", price: "₹69" }, { size: "Large", price: "₹129" }] },
      { name: "Filter Affogato", note: "Vanilla Gelato + Decoction", prices: [{ size: "One size", price: "₹149" }] },
    ],
  },
  {
    title: "Cold Coffee",
    items: [
      { name: "Classic Cold Coffee",   prices: [{ size: "Medium", price: "₹59" }, { size: "Large", price: "₹109" }] },
      { name: "Chocolate Cold Coffee", prices: [{ size: "Medium", price: "₹69" }, { size: "Large", price: "₹129" }] },
    ],
  },
  {
    title: "Coffee Powder",
    items: [
      { name: "House Blend", note: "Take home", prices: [{ size: "250g", price: "₹449" }, { size: "500g", price: "₹799" }] },
      { name: "Pure Blend",  note: "Take home", prices: [{ size: "250g", price: "₹549" }, { size: "500g", price: "₹899" }] },
    ],
  },
];

export const newAdditions: MenuGroup[] = [
  {
    title: "Maggie",
    items: [
      { name: "Plain Maggie",         prices: [{ size: "", price: "₹49" }] },
      { name: "Butter Garlic Maggie", prices: [{ size: "", price: "₹69" }] },
      { name: "Cheese Maggie",        prices: [{ size: "", price: "₹69" }] },
      { name: "Garlic Cheese Maggie", prices: [{ size: "", price: "₹79" }] },
    ],
  },
  {
    title: "Iced Tea",
    items: [
      { name: "Lemon", prices: [{ size: "", price: "₹50" }] },
      { name: "Peach", prices: [{ size: "", price: "₹50" }] },
    ],
  },
  {
    title: "Korean Bun",
    items: [
      { name: "Korean Bun", prices: [{ size: "", price: "₹59" }] },
    ],
  },
];

export const menuNotes = {
  takeaway: "Takeaway add ₹10",
  origin: "Single-origin beans from Coorg",
  more: "More coming soon…",
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

// coffee sub-categories (used by the /coffee/[category] routes)
export const heroCategories = [
  { label: "Filter", href: "/coffee/filter" },
  { label: "Signature", href: "/coffee/signature" },
  { label: "Cold", href: "/coffee/cold" },
  { label: "Black", href: "/coffee/black" },
  { label: "Take Home", href: "/coffee/take-home" },
];

export const heroCopy = {
  eyebrow: "JP Nagar · Bengaluru",
  // Headline is rendered in two visual lines: "Filter coffee, at its" + italic "essence."
  headlineLead: "Filter coffee, at its",
  headlineEmph: "essence.",
  sub: "South Indian filter coffee on a fresh decoction, single-origin beans from Coorg, and signature pours you won't find anywhere else.",
  primaryCta: { label: "See what we pour", href: "/coffee" },
  secondaryCta: { label: "Visit the café", href: "/contact-us" },
};

// "Signature pour" chip — change weekly. Easy to wire to CMS later.
export const todaysFeature = {
  eyebrow: "Try the signature",
  name: "Filter Tonic",
  notes: "Tonic water + fresh decoction",
  detail: "₹69 at the bar",
};

// Provenance keywords for the bottom-of-hero marquee.
export const provenance = [
  "Single Origin",
  "Coorg Beans",
  "Fresh Decoction",
  "Filter Tonic",
  "70:30 House Blend",
  "Roasted in JP Nagar",
  "100% Arabica",
  "Filter Affogato",
  "South Indian Filter",
  "Take ₹10 Off In-Store",
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
  eyebrow: "What We Pour",
  sub: "Everything starts with a fresh decoction and single-origin Coorg beans. From the everyday filter cup to a Filter Tonic you won't find anywhere else.",
  pickupNote: "Prices from. Sizes and full menu in-store — takeaway just ₹10 more.",
};

export const productFilters = [
  "All",
  "Filter",
  "Signature",
  "Cold",
  "Black",
  "Take Home",
];

// Tattva's real lineup — filter coffee on a fresh decoction, signature
// decoction drinks, cold coffees, and take-home single-origin Coorg powder.
export const products: Product[] = [
  // ── Take home (retail powder) ──
  { slug: "house-blend-powder", name: "House Blend Powder", origin: "Single-origin · Coorg", notes: "70:30 chicory blend — bold, rounded, the South Indian classic.", price: "₹449", weight: "250g", category: "Take Home", image: "/images/sections/ground.jpg", fresh: true },
  { slug: "pure-blend-powder",  name: "Pure Blend Powder",  origin: "Single-origin · Coorg", notes: "100% Arabica — clean, aromatic, a little brighter.",            price: "₹549", weight: "250g", category: "Take Home", image: "/images/sections/beans2.jpg" },

  // ── Filter coffee (café) ──
  { slug: "house-filter",  name: "House Filter Coffee", origin: "Fresh decoction · 70:30",      notes: "The daily cup. Strong decoction, hot milk, the right sweetness.", price: "₹30", weight: "Small", category: "Filter", image: "/images/sections/foam-cup.webp", fresh: true },
  { slug: "pure-filter",   name: "Pure Filter Coffee",  origin: "Fresh decoction · 100% Arabica", notes: "Same ritual, a cleaner, brighter cup from single-estate Arabica.", price: "₹35", weight: "Small", category: "Filter", image: "/images/sections/explore-cup.webp" },

  // ── Signature decoction drinks ──
  { slug: "filter-tonic",    name: "Filter Tonic",    origin: "Tonic water + decoction",   notes: "Fizzy, bittersweet, deeply refreshing. Our signature pour.",    price: "₹69",  weight: "Medium",   category: "Signature", image: "/images/sections/frame8.webp" },
  { slug: "filter-ale",      name: "Filter Ale",      origin: "Ginger ale + decoction",    notes: "Ginger heat meets filter coffee. Sharp and warming.",           price: "₹69",  weight: "Medium",   category: "Signature", image: "/images/sections/brew.webp" },
  { slug: "filter-affogato", name: "Filter Affogato", origin: "Vanilla gelato + decoction", notes: "Hot decoction poured over cold gelato. Dessert and coffee in one.", price: "₹149", weight: "One size", category: "Signature", image: "/images/sections/frame7.webp" },

  // ── Cold coffee ──
  { slug: "classic-cold-coffee",   name: "Classic Cold Coffee",   origin: "Blended cold", notes: "Smooth, sweet, properly cold. The crowd-pleaser.", price: "₹59", weight: "Medium", category: "Cold", image: "/images/sections/brew.webp" },
  { slug: "chocolate-cold-coffee", name: "Chocolate Cold Coffee", origin: "Blended cold", notes: "Cocoa-rich and indulgent, still built on real decoction.", price: "₹69", weight: "Medium", category: "Cold", image: "/images/sections/frame8.webp" },

  // ── Black ──
  { slug: "black-coffee", name: "Black Coffee", origin: "Hot or cold", notes: "Just decoction and water. Nowhere to hide — and it doesn't need to.", price: "₹25", weight: "Medium", category: "Black", image: "/images/sections/frame7.webp" },
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
    name: "Filter Affogato",
    notes: "Hot decoction over vanilla gelato",
    detail: "₹149",
  },
  // Numbers only, zero-padded for editorial rhythm. All verifiable Tattva facts.
  stats: [
    { value: "01", label: "Single origin — Coorg" },
    { value: "70:30", label: "House Blend ratio" },
    { value: "₹30", label: "Filter coffee, from" },
  ],
  image: "/images/sections/explore-cup.webp",
};

// ---- Our story + values --------------------------------------------------
export const story = {
  eyebrow: "Our story",
  heading:
    "Our journey begins with single-origin beans from one estate in Coorg.",
  body: [
    "We keep it to one source we trust, roast it small-batch in JP Nagar, and pour it as proper South Indian filter coffee — neat, or as one of our signature decoction drinks.",
    "Tattva is more than a brand — it's a neighbourhood place for people who appreciate a well-made cup and the quiet moments around it.",
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
// Single-origin Coorg → filter coffee. Source, roast & grind, brew.
export const process = {
  eyebrow: "Our Process",
  heading: "From a Coorg hillside to your cup.",
  body: "One origin. One ritual. We keep it simple on purpose — good beans, a fresh decoction, and nothing in the way of the coffee.",
  image: "/images/sections/foam-cup.webp",
  steps: [
    {
      n: "01",
      title: "Source",
      body:
        "Single-origin beans from a Coorg estate we trust — about 240 km from the roastery. One source, season after season.",
    },
    {
      n: "02",
      title: "Roast & Grind",
      body:
        "Roasted small-batch in JP Nagar, then ground for filter — a 70:30 House Blend and a 100% Arabica Pure Blend.",
    },
    {
      n: "03",
      title: "Brew",
      body:
        "A fresh decoction, every cup. Drunk neat as filter coffee, or turned into a Filter Tonic, Ale, or Affogato at the bar.",
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
  body: "Neat filter coffee for the purists. Filter Tonic and Ale for the curious. Cold coffee for the afternoons. Same decoction at the heart of all of it.",
  cta: { label: "See the menu", href: "/menu" },
  // small label strip under the body — the real menu families
  methods: ["Filter", "Signature", "Cold", "Black"],
  // Concrete commitments instead of platitudes
  features: [
    { title: "Fresh decoction", body: "Brewed through the day, never sitting. The base of every cup we pour." },
    { title: "Single origin",   body: "Only Coorg beans — House Blend or Pure Blend. No mystery house mix." },
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
      "The Filter Tonic sounds strange and tastes incredible — fizzy, bittersweet, completely addictive. I order two every visit. Nothing else in JP Nagar does this.",
    name: "Karthik M.",
    role: "JP Nagar regular",
    featured: true,
    mentionsProduct: "filter-tonic",
  },
  {
    quote:
      "Proper South Indian filter coffee at ₹40. Strong, sweet, exactly right. My grandmother would approve, and that's the highest bar I have.",
    name: "Aishwarya R.",
    role: "Banashankari",
  },
  {
    quote:
      "Took home the House Blend powder and now I can't go back to supermarket coffee. You can taste it's single-origin.",
    name: "Naina S.",
    role: "Home brewer",
  },
  {
    quote:
      "Filter Affogato is dessert and coffee in one cup. Hot decoction over cold gelato — genius. Quiet space, friendly staff too.",
    name: "Rohan D.",
    role: "Jayanagar",
  },
  {
    quote:
      "The chocolate cold coffee is the best thing about Bengaluru summers. They've earned my Saturday afternoons.",
    name: "Aditi K.",
    role: "Koramangala",
  },
  {
    quote:
      "Stumbled in for a Maggie, left with a bag of beans and a new daily spot. Unpretentious and just really good.",
    name: "Rajesh P.",
    role: "Indiranagar",
  },
  {
    quote:
      "Black coffee here is just decoction and water and it's the cleanest cup I've had in ages. I work from here most afternoons.",
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
  heading: "Come have a filter coffee",
  body: "Single-origin Coorg beans, a fresh decoction, and a quiet corner of JP Nagar. Drop by — we open early.",
  cta: { label: "See what we pour", href: "/coffee" },
};

// ---- FAQ -----------------------------------------------------------------
export const faqs = [
  { q: "What kind of coffee do you serve?", a: "South Indian filter coffee, made fresh on a decoction. Neat as House Blend (70:30) or Pure Blend (100% Arabica), plus signature drinks like the Filter Tonic, Filter Ale and Filter Affogato." },
  { q: "Where do your beans come from?", a: "A single estate in Coorg, Karnataka — about 240 km from the café. One origin, roasted small-batch in JP Nagar." },
  { q: "What's a Filter Tonic?", a: "Our signature: fresh coffee decoction over tonic water. Fizzy, bittersweet, and unlike anything else you've had. We also do a Filter Ale (ginger ale) and Filter Affogato (vanilla gelato)." },
  { q: "Can I buy beans to take home?", a: "Yes — our House Blend and Pure Blend coffee powders come in 250g and 500g packs. Ground for South Indian filter, same single-origin Coorg beans we use at the bar." },
  { q: "Do you do takeaway?", a: "We do — takeaway is just ₹10 more on any drink. Perfect for the walk to work." },
  { q: "What else is on the menu?", a: "Beyond coffee: cold coffee, lemon and peach iced teas, Maggie (plain, butter garlic, cheese, garlic cheese), and Korean buns. More coming soon." },
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
  { slug: "what-is-decoction", title: "What makes a good decoction", excerpt: "The heart of South Indian filter coffee — and how we get it right, every cup.", image: "/images/sections/frame7.webp", date: "Mar 2026" },
];

// ---- About page ----------------------------------------------------------
export const aboutHero = {
  eyebrow: "Since 2025 · JP Nagar, Bengaluru",
  headingLead: "Coffee that tells",
  headingEmph: "its own",
  headingTail: "truth.",
  sub: "Tattva — Sanskrit for essence — is a filter-coffee café and roastery in JP Nagar, working with single-origin beans from one Coorg estate.",
  cta: { label: "See what we pour", href: "/coffee" },
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
    "We thought a small filter-coffee place in Bengaluru, built on one good single-origin from Coorg, could do something quieter. So we started in 2025 with one roaster, one estate, and a short list of opinions about how filter coffee should taste.",
    "That hasn't really changed. Single origin, fresh decoction, neat filter coffee — plus a few signature pours of our own.",
  ],
  pullquote: "Tattva — the underlying truth of a thing.",
  stats: [
    { value: "2025", label: "Opened in JP Nagar" },
    { value: "01",   label: "Single origin — Coorg" },
    { value: "70:30", label: "House Blend ratio" },
    { value: "₹30",  label: "Filter coffee, from" },
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
      body: "Set up a small roaster in JP Nagar and locked in a single Coorg estate for our beans — the same one we still buy from today.",
      image: "/images/sections/story.webp",
      stats: [
        { value: "01", label: "Roaster set up" },
        { value: "01", label: "Coorg estate" },
      ],
    },
    {
      year: "Apr 2025",
      chapter: "Chapter 03",
      title: "Café opens.",
      body: "Doors open in JP Nagar with a proper filter setup and a single mission: South Indian filter coffee, done right. Open before sunrise.",
      image: "/images/sections/brew.webp",
      stats: [
        { value: "70:30", label: "House Blend" },
        { value: "₹30", label: "Filter, from" },
      ],
    },
    {
      year: "Aug 2025",
      chapter: "Chapter 04",
      title: "The signatures.",
      body: "Filter Tonic, Filter Ale, Filter Affogato — we started bending the decoction into drinks no one else in the area was making.",
      image: "/images/sections/beans1.jpg",
      stats: [
        { value: "03", label: "Signature pours" },
        { value: "₹69", label: "From" },
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
    { name: "Manoj P.",  role: "Sourcing",                 since: "Since '24", bio: "Visits our Coorg estate twice a season. Speaks Kannada, Tamil, Malayalam.",                       image: "/images/people/manoj.jpg" },
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
// Single-origin Coorg, shown as the bean's journey from hillside to cup.
export const originsBand = {
  eyebrow: "Single-Origin · Coorg",
  heading: "From one hillside to your cup.",
  origins: [
    { name: "Coorg", state: "Karnataka",      distance: "Grown" },
    { name: "JP Nagar", state: "Our roastery", distance: "Roasted" },
    { name: "The Bar", state: "Fresh decoction", distance: "Brewed" },
    { name: "Your Cup", state: "Filter coffee", distance: "Served" },
  ],
  footnote:
    "One origin, ~240 km away. Roasted within seven days and poured the South Indian way.",
  promise: "Nothing else added.",
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
