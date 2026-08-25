const unsplash = (id, params = "auto=format&fit=crop&w=1600&q=80") =>
  `https://images.unsplash.com/photo-${id}?${params}`;

export const destinations = [
  {
    code: "MSM",
    name: "Maasai Mara",
    region: "Narok County",
    blurb: "Migration plains, Rift Valley light, and camps that put you in the middle of it.",
    img: unsplash("1547970810-dc1eac37d174", "auto=format&fit=crop&w=1200&h=1500&q=80"),
    size: "large",
  },
  {
    code: "ASI",
    name: "Amboseli",
    region: "Kajiado County",
    blurb: "Elephant herds walking beneath Kilimanjaro's snowcap, close enough to feel small.",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Amboseli_Park_-_Kilimanjaro_elephant.jpg/1920px-Amboseli_Park_-_Kilimanjaro_elephant.jpg",
    size: "medium",
  },
  {
    code: "SBU",
    name: "Samburu",
    region: "Northern Kenya",
    blurb: "Red-earth riverbanks, reticulated giraffe, and a wilder, less-visited north.",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/Elephants_crossing_the_Ewaso_Ng%27iro_river_at_Samburu_Park%2C_Kenya.jpg/1920px-Elephants_crossing_the_Ewaso_Ng%27iro_river_at_Samburu_Park%2C_Kenya.jpg",
    size: "medium",
  },
  {
    code: "NAK",
    name: "Lake Nakuru",
    region: "Rift Valley",
    blurb: "Flamingo-pink shorelines on a Rift Valley lake ringed by acacia and rhino.",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/70/Lake_Nakuru_National_Park_02_-_Lesser_Flamingo_%28Phoeniconaias_minor%29.jpg/1920px-Lake_Nakuru_National_Park_02_-_Lesser_Flamingo_%28Phoeniconaias_minor%29.jpg",
    size: "small",
  },
  {
    code: "TSV",
    name: "Tsavo",
    region: "Taita-Taveta County",
    blurb: "Kenya's largest wilderness — red-dust elephants and horizons that don't end.",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Majestic_red_elephant_of_Tsavo_East_%285232098119%29.jpg/1920px-Majestic_red_elephant_of_Tsavo_East_%285232098119%29.jpg",
    size: "small",
  },
  {
    code: "DIA",
    name: "Diani Beach",
    region: "Kenyan Coast",
    blurb: "White sand, Swahili coast culture, and the slow finish to a highland safari.",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Diani_Beach%2C_Kenya_-_51984253041.jpg/1920px-Diani_Beach%2C_Kenya_-_51984253041.jpg",
    size: "small",
  },
];

export const departures = [
  { code: "MSM-07", route: "Nairobi — Masai Mara", style: "Wildlife", nights: 7, from: "$6,400" },
  { code: "CUZ-10", route: "Cusco — Sacred Valley", style: "Trekking", nights: 10, from: "$4,950" },
  { code: "KIX-09", route: "Kyoto — Takayama", style: "Culture", nights: 9, from: "$5,600" },
  { code: "RAK-08", route: "Marrakech — Sahara", style: "Desert", nights: 8, from: "$4,200" },
  { code: "KEF-06", route: "Reykjavik — Highlands", style: "Landscape", nights: 6, from: "$5,100" },
  { code: "PBH-11", route: "Paro — Bumthang", style: "Himalayan", nights: 11, from: "$7,300" },
  { code: "ZNZ-05", route: "Zanzibar — Stone Town", style: "Coastal", nights: 5, from: "$3,300" },
  { code: "PAT-12", route: "El Calafate — Torres del Paine", style: "Expedition", nights: 12, from: "$8,150" },
];

export const testimonials = [
  {
    quote:
      "Every detail felt considered before we even thought to ask. Altheon designed ten days in Kenya that read like they'd known us for years.",
    name: "Naomi R.",
    trip: "Kenya, migration season",
    avatar: unsplash("1544005313-94ddf0286df2", "auto=format&fit=crop&w=160&h=160&q=80"),
  },
  {
    quote:
      "We told them we wanted slow mornings and no crowds. That's exactly what Peru became — even the train times worked in our favour.",
    name: "Daniel & Priya K.",
    trip: "Peru, Sacred Valley",
    avatar: unsplash("1500648767791-00dcc994a43e", "auto=format&fit=crop&w=160&h=160&q=80"),
  },
  {
    quote:
      "Our guide in the Atlas knew every village by name. It stopped feeling like a tour and started feeling like being shown home.",
    name: "Foster M.",
    trip: "Morocco, Atlas & Sahara",
    avatar: unsplash("1506794778202-cad84cf45f1d", "auto=format&fit=crop&w=160&h=160&q=80"),
  },
];

export const faqs = [
  {
    q: "What can Altheon coordinate for me?",
    a: "We coordinate flights, accommodation, transfers, itineraries, business travel, meetings, retreats, team gatherings, events and personalised leisure experiences. You can give us one requirement or the complete brief.",
  },
  {
    q: "Do you work with both companies and individual travellers?",
    a: "Yes. We serve corporate organisations, SMEs, hybrid and remote companies, NGOs, executives, couples, families, friends and organised groups. Each solution is shaped around the client's objective.",
  },
  {
    q: "Can you handle urgent or last-minute travel?",
    a: "Yes. The A&T Travel Desk supports both carefully planned journeys and urgent requests, subject to supplier availability. Share the dates and requirements and we will identify the most practical options.",
  },
  {
    q: "How does corporate or hybrid-team coordination work?",
    a: "Your company deals with Altheon as the coordination partner while we bring together the required accommodation, transport, venues, meals, activities and event suppliers. You receive a clear plan instead of managing multiple providers.",
  },
  {
    q: "Are leisure experiences standard packages?",
    a: "No. Couples' getaways, honeymoons, family holidays and group experiences are personalised. Where suitable, we can include activities, special dinners, adventures, wellness moments and other experiences that help people connect.",
  },
  {
    q: "What happens after I send a request?",
    a: "We clarify your objective, preferences, timing and budget, design the most suitable solution, coordinate the agreed arrangements and provide a clear itinerary. We remain available for support within the agreed scope and follow up afterwards.",
  },
];

export const journal = [
  {
    slug: "reading-the-mara-before-migration",
    tag: "Field Notes",
    title: "Reading the Mara before the migration arrives",
    excerpt:
      "What the grass height and river flow tell our guides weeks before the herds do.",
    pullQuote: "The Mara doesn't announce the migration. It whispers it, weeks ahead, to anyone who knows where to look.",
    date: "July 2026",
    author: "Wanjiru Kamau",
    authorRole: "Head Guide, East Africa",
    readTime: "6 min read",
    cover: unsplash("1547970810-dc1eac37d174", "auto=format&fit=crop&w=1400&h=900&q=80"),
    inline: unsplash("1516426122078-c23e76319801", "auto=format&fit=crop&w=1200&h=800&q=80"),
    body: [
      "Long before the first wildebeest crosses the Mara River, the land is already talking. Our guides read it the way a sailor reads weather — grass height on the Loita Plains, the colour of the Sand River, the direction pied kingfishers are hunting. By the time the herds arrive, we've usually known their route for a fortnight.",
      "This year's dry spell pushed the short grass plains further south than usual, which means the crossings at Lookout Point are running earlier than the guidebooks suggest. It's the kind of detail that never makes it into a fixed-departure itinerary, because a fixed-departure itinerary is written months before anyone knows it.",
      "We build every Kenya trip with float days around the crossings for exactly this reason — two or three mornings held open, so when a guide radios in that the herds are massing at the river, we can be there within the hour instead of reading about it in someone else's trip report.",
      "None of this is guesswork. It's pattern recognition built over decades, held by people who live on this land year-round rather than flying in for a season. That's the difference between a safari that follows a map and one that follows the migration.",
    ],
    related: ["wildebeest-crossing-explained", "gorilla-permits-nine-months-out"],
  },
  {
    slug: "nine-days-sacred-valley-slowly",
    tag: "Editor's Pick",
    title: "Nine days across the Sacred Valley, slowly",
    excerpt:
      "A route built around altitude, not attractions — and why it changes everything.",
    pullQuote: "Most Sacred Valley itineraries are built around sights. Ours is built around altitude — and it changes everything downstream.",
    date: "June 2026",
    author: "Diego Salazar",
    authorRole: "Trip Designer, South America",
    readTime: "7 min read",
    cover: unsplash("1526392060635-9d6019884377", "auto=format&fit=crop&w=1400&h=900&q=80"),
    inline: unsplash("1587595431973-160d0d94add1", "auto=format&fit=crop&w=1200&h=800&q=80"),
    body: [
      "Most Peru itineraries move you upward as fast as flights and trains allow: Lima to Cusco to Machu Picchu in five days, altitude sickness treated as an inconvenience rather than a design constraint. We build the opposite trip.",
      "Nine days lets us stage the ascent — two nights in the Sacred Valley at 2,800m before Cusco's 3,400m, acclimatising while you're already doing something worthwhile: visiting a weaving cooperative in Chinchero, walking the Moray terraces at your own pace, eating lunch with a family in Ollantaytambo rather than at a tour-bus buffet.",
      "By the time you reach Machu Picchu, your body has caught up with the altitude and your itinerary has caught up with the place — you arrive unhurried, on a train timed for the light, not the schedule.",
      "The families who travel this route tell us the same thing afterward: it didn't feel like they'd seen Peru's highlights. It felt like they'd spent nine days actually being in the Andes, which — as it turns out — was the whole point.",
    ],
    related: ["what-we-pack-for-the-andes", "reading-the-mara-before-migration"],
  },
  {
    slug: "the-two-week-window-iceland",
    tag: "Almanac",
    title: "The two-week window for Iceland's quiet season",
    excerpt:
      "Between the crowds and the closures sits a stretch few travellers plan for.",
    pullQuote: "Late September holds two weeks when the F-roads are still open, the crowds have gone home, and the aurora starts to show.",
    date: "May 2026",
    author: "Elin Thorvaldsdóttir",
    authorRole: "Trip Designer, Nordics",
    readTime: "5 min read",
    cover: unsplash("1504829857797-ddff29c27927", "auto=format&fit=crop&w=1400&h=900&q=80"),
    inline: unsplash("1531168556467-80aace0d0144", "auto=format&fit=crop&w=1200&h=800&q=80"),
    body: [
      "Iceland's calendar has two well-known seasons: the crowded, expensive light of June through August, and the dark, weather-locked stretch from November on, when many highland roads close entirely. Almost no one plans for the two weeks in between.",
      "From roughly the third week of September, the tour buses thin out, hotel rates ease, and — critically — most F-roads into the highlands are still passable before the first serious snow. It's also early enough in the aurora season that clear nights reliably deliver, without the deep-winter cold that turns a night of aurora-watching into an endurance exercise.",
      "We route clients through the South Coast and Diamond Beach first, then push into the highlands via Landmannalaugar while the roads hold, finishing along the Snæfellsnes peninsula as the days shorten and the skies clear for the aurora.",
      "It's a narrow window — closer to two weeks than a month — and it moves slightly year to year depending on the season's first snowfall. We track road openings daily through it, which is the only way to actually catch it.",
    ],
    related: ["nine-days-sacred-valley-slowly", "atlas-at-first-light"],
  },
  {
    slug: "atlas-at-first-light",
    tag: "Field Notes",
    title: "The Atlas at first light: why we start before dawn",
    excerpt:
      "The one hour of light that decides whether a Morocco trip feels ordinary or extraordinary.",
    pullQuote: "By nine, the light has gone flat and the buses have arrived. Everything that matters in the Atlas happens before that.",
    date: "April 2026",
    author: "Youssef Amrani",
    authorRole: "Head Guide, North Africa",
    readTime: "5 min read",
    cover: unsplash("1489749798305-4fea3ae63d43", "auto=format&fit=crop&w=1400&h=900&q=80"),
    inline: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Kasbah_Ait_Ben_Haddou_%2837718032425%29.jpg/1920px-Kasbah_Ait_Ben_Haddou_%2837718032425%29.jpg",
    body: [
      "Every Morocco itinerary we design has the same unfashionable instruction in it: wake before dawn. Not for the sunrise photograph, although you'll get one — but because the Atlas villages and the Sahara dunes both belong to a different hour than the one most travellers see them in.",
      "At first light, the High Atlas villages are already awake — bread going into communal ovens, mules loaded for the day's work — and the light comes in low and gold across terraced fields that turn flat and hazy by mid-morning. By nine, the tour buses from Marrakech have arrived and the hour is gone.",
      "In the Sahara it's more dramatic still: the half-hour before sunrise, when the dune ridges hold their shape in near-silhouette and the temperature is still cool enough to climb them properly, is simply a different desert than the one you'll see at noon.",
      "It costs guests an early alarm. It buys them the Morocco that's actually worth the trip — which is why we've never once softened the instruction.",
    ],
    related: ["the-two-week-window-iceland", "gorilla-permits-nine-months-out"],
  },
  {
    slug: "gorilla-permits-nine-months-out",
    tag: "Almanac",
    title: "Why gorilla and Bhutan permits need nine months, not four",
    excerpt:
      "The allocation systems behind two of our most requested — and most limited — journeys.",
    pullQuote: "There are only eight gorilla permits per group per day. Bhutan's daily tariff isn't negotiable, either. Both reward planning early.",
    date: "March 2026",
    author: "Tenzin Wangmo",
    authorRole: "Trip Designer, Himalayas",
    readTime: "6 min read",
    cover: unsplash("1544735716-392fe2489ffa", "auto=format&fit=crop&w=1400&h=900&q=80"),
    inline: unsplash("1626621341517-bbf3d9990a23", "auto=format&fit=crop&w=1200&h=800&q=80"),
    body: [
      "Two of the journeys we book most are also the two with the least flexibility once dates are set — mountain gorilla trekking and travel in Bhutan — and both run on allocation systems most travellers only discover after it's too late to plan around them.",
      "Each habituated gorilla family permits exactly eight visitors a day. There are a fixed number of families open to trekking across Rwanda and Uganda combined, and permits for the peak June-to-September and December-to-February windows are often gone six to nine months out.",
      "Bhutan works differently but arrives at the same constraint: the government's Sustainable Development Fee structure caps how the country manages visitor flow, and the camps and guides worth having are booked by trip designers like us well before the fee makes headlines each year.",
      "Neither system rewards spontaneity. Both reward a phone call nine months before you want to travel — which is the single piece of advice we repeat most often to anyone mentioning either destination for 'someday'.",
    ],
    related: ["reading-the-mara-before-migration", "atlas-at-first-light"],
  },
  {
    slug: "kyoto-off-the-hour",
    tag: "Editor's Pick",
    title: "Kyoto off the hour: temples before the tour groups",
    excerpt:
      "The same seven temples everyone visits, timed to the twenty minutes when they're empty.",
    pullQuote: "Fushimi Inari at 6am belongs to joggers and a handful of monks. By 10, it belongs to everyone else.",
    date: "February 2026",
    author: "Aiko Tanaka",
    authorRole: "Trip Designer, East Asia",
    readTime: "5 min read",
    cover: unsplash("1493976040374-85c8e12f0c0e", "auto=format&fit=crop&w=1400&h=900&q=80"),
    inline: unsplash("1545569341-9eb8b30979d9", "auto=format&fit=crop&w=1200&h=800&q=80"),
    body: [
      "Kyoto's temples aren't secret. Fushimi Inari, Kinkaku-ji, Arashiyama's bamboo grove — every one of them is on every list, and every one of them is genuinely worth the visit. The trick isn't finding somewhere else to go. It's timing.",
      "We build Kyoto mornings around a simple rule: arrive within thirty minutes of opening, or before it where the site allows early entry. Fushimi Inari has no gate at all, so we route clients through its upper torii paths at 6am, an hour that belongs to joggers, resident cats, and almost nobody with a tour flag.",
      "By 10am, the calculus flips entirely — coach parking fills, guided groups arrive in blocks of forty, and the same paths that felt private two hours earlier are a slow shuffle. We've simply moved the itinerary to work with that tide rather than against it.",
      "It means early alarms for a week straight. It also means our clients' photographs of Kyoto look like the ones that convinced them to book the trip in the first place — because they were taken in the same quiet hour.",
    ],
    related: ["atlas-at-first-light", "chasing-the-aurora-realistically"],
  },
  {
    slug: "wildebeest-crossing-explained",
    tag: "Editor's Pick",
    title: "The wildebeest crossing, explained",
    excerpt:
      "What's actually happening when two million animals decide, all at once, to jump into a river full of crocodiles.",
    pullQuote: "It isn't one crossing. It's a decision half a million animals make and unmake, sometimes a dozen times, before the herd finally commits.",
    date: "August 2026",
    author: "Wanjiru Kamau",
    authorRole: "Head Guide, East Africa",
    readTime: "7 min read",
    cover:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Wildebeest_Jumping_Into_the_Mara_River.jpg/1920px-Wildebeest_Jumping_Into_the_Mara_River.jpg",
    inline:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Western_white-bearded_wildebeest_%28Connochaetes_taurinus_mearnsi%29_Mara_River_crossing_2b.jpg/1920px-Western_white-bearded_wildebeest_%28Connochaetes_taurinus_mearnsi%29_Mara_River_crossing_2b.jpg",
    body: [
      "From a vehicle on the bank, a crossing looks like chaos: thousands of wildebeest surging into brown water, crocodiles somewhere beneath it, zebras threading through for reasons of their own. Up close, over years of watching it, our guides see something closer to a negotiation.",
      "The herd doesn't cross because it decides to. It crosses because enough individual animals, standing at the front of a queue that can run half a mile back from the water, each independently decide the risk is acceptable — and then all commit within seconds of each other, because a wildebeest alone at a crossing point is a wildebeest a crocodile can choose without competition. The safety is in the timing, not the water.",
      "That's also why herds balk. A crossing can build for hours — thousands of animals pacing a bank, dust rising, calves calling for mothers — and then disperse without a single animal entering the river, only to reform an hour later, or a kilometre downstream, or not until the next morning.",
      "We don't promise clients a crossing on a fixed day, because no honest operator can. What we do is hold float time in every Mara itinerary and keep a guide on radio with the other vehicles tracking herd movement, so when a crossing does build, we're already close enough to reach it before it resolves one way or the other.",
    ],
    related: ["reading-the-mara-before-migration", "gorilla-permits-nine-months-out"],
  },
  {
    slug: "chasing-the-aurora-realistically",
    tag: "Almanac",
    title: "Chasing the aurora, realistically",
    excerpt:
      "What the forecast apps don't tell you, and why we build aurora nights as a bonus, never a promise.",
    pullQuote: "Anyone who guarantees you the northern lights on a fixed date is selling you a forecast, not a sighting.",
    date: "September 2026",
    author: "Elin Thorvaldsdóttir",
    authorRole: "Trip Designer, Nordics",
    readTime: "6 min read",
    cover:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/039_Northern_lights_over_M%C3%BDvatn_%28Iceland%29_Photo_by_Giles_Laurent.jpg/1920px-039_Northern_lights_over_M%C3%BDvatn_%28Iceland%29_Photo_by_Giles_Laurent.jpg",
    inline: unsplash("1531168556467-80aace0d0144", "auto=format&fit=crop&w=1200&h=800&q=80"),
    body: [
      "The aurora is a solar weather event happening 100km up, and every app that promises you a precise viewing window is rounding a genuinely chaotic system into a tidy number. We've learned to treat the KP index as a rough mood, not a booking.",
      "What actually matters more than the forecast is logistics: getting far enough from Reykjavik's light pollution, having a driver who knows which farm roads are still open in September's shoulder season, and being willing to stay out past midnight on a clear night rather than calling it after an hour of nothing.",
      "So we build it as what it is — a bonus, stacked on nights that already have their own reason to exist. A dinner at a highland farmstead. A soak in a quiet, unheated-pool version of a hot spring, away from the tour-bus circuit. If the sky delivers, which it does more often than the guidebooks suggest for a clear September or October night, our clients see it from somewhere worth being anyway.",
      "The travellers who leave disappointed are almost always the ones who booked a single night and treated the aurora as the whole trip. The ones who leave delighted booked five nights in the right season and let it become the best of several good evenings.",
    ],
    related: ["the-two-week-window-iceland", "kyoto-off-the-hour"],
  },
  {
    slug: "what-we-pack-for-the-andes",
    tag: "Field Notes",
    title: "What we actually pack for ten days in the Andes",
    excerpt:
      "The kit list our guides have refined over a decade of altitude, sun, and afternoon rain that arrives on schedule.",
    pullQuote: "Andean weather doesn't have four seasons. It has four seasons before lunch.",
    date: "October 2026",
    author: "Diego Salazar",
    authorRole: "Trip Designer, South America",
    readTime: "6 min read",
    cover: "https://images.unsplash.com/photo-1551632811-561732d1e306?auto=format&fit=crop&w=1400&h=900&q=80",
    inline: unsplash("1587595431973-160d0d94add1", "auto=format&fit=crop&w=1200&h=800&q=80"),
    body: [
      "Cusco sits at 3,400m, and the Sacred Valley swings from bright, thin-air sun to a cold afternoon downpour with almost no warning most of the year. The kit list we send clients isn't aspirational gear-shop copy — it's the version that's survived a decade of guides packing for the same route.",
      "Layers do more work than any single garment: a base that manages sweat at altitude, an insulating mid-layer for the cold mornings before the sun clears the ridgeline, and a genuinely waterproof — not just water-resistant — outer shell for the afternoon rain that arrives on schedule from about November through March.",
      "Sun protection matters more than most travellers expect. At altitude, with thinner atmosphere and less cloud cover than sea level, sunburn and altitude headaches compound each other quickly. We tell clients to over-pack sunscreen and a proper hat, and to treat hydration as seriously as they'd treat it on a desert trip.",
      "The one item guests forget most often: a second, warmer layer for the evenings than they think they'll need. Sacred Valley nights drop fast once the sun is behind the ridgeline, and a highland dinner at a family table is a lot better enjoyed without shivering through it.",
    ],
    related: ["nine-days-sacred-valley-slowly", "wildebeest-crossing-explained"],
  },
];
