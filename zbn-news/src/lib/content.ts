export const SITE = {
  name: "ZBN News",
  firstName: "ZBN",
  role: "Independent News Network",
  show: "ZBN News",
  network: "Zero Boundary Network",
  brandMark: "ZBN",
  channelHandle: "@omarstalkshow",
  channelUrl: "https://www.youtube.com/@omarstalkshow",
  email: "omarstalkshow@gmail.com",
  location: "NYC, New York",

  tagline:
    "Daily news, real insight, and fact-based commentary on politics, business, media narratives, and the stories reshaping New York and the country.",

  heroStatement: "Independent reporting. Fact-based analysis. Serious presentation.",

  missionEyebrow: "Network Mission",
  missionHeadline: "Build an independent network viewers can treat like a real daily briefing.",
  missionBody:
    "ZBN News is designed as a more serious network wrapper around the urgency, reporting instinct, and directness already working inside the current coverage.",
  missionBlurb:
    "The goal is to keep the independent voice while upgrading the presentation: stronger structure, fact-based framing, and a website that feels like a real newsroom instead of a one-off channel landing page.",

  aboutShort:
    "ZBN News is the Zero Boundary Network website: a sharper independent newsroom for breaking analysis, city politics, economic stress, media narratives, and current-issue briefings.",

  aboutLong: [
    "ZBN News is a network-style evolution of the independent commentary work already happening around Omar's Talk Show. The aim is not to sand down the edge. It is to present that edge with more institutional weight: cleaner sections, stronger editorial hierarchy, and a visual system that feels closer to a modern digital bureau than a creator homepage.",
    "The network is based in New York City and is built around independent, fact-based analysis. Omar brings the New York lens, particularly around corporate movement, fiscal pressure, and city-level political fallout. Felmon broadens the desk with fast-turn political analysis and a national commentary cadence suited to headline-driven coverage.",
    "The result is a site built to scale. ZBN News introduces a network identity that can support more shows, more recurring beats, and a stronger sense of editorial continuity over time.",
  ],

  beats: [
    "City Politics",
    "Economic Shifts",
    "Media Narratives",
    "Breaking Analysis",
  ],

  credentials: [
    "Independent, fact-based editorial positioning with a network-style presentation",
    "Years of commentary, analysis, and on-camera reporting experience across the desk",
    "Launch structure built around embedded video briefings and reporting-led coverage",
    "Current featured reporting sourced from Omar's active YouTube output",
    "Designed as a more formal web front door for long-term network growth",
  ],

  social: {
    youtube: "https://www.youtube.com/@omarstalkshow",
    x: "https://x.com/OmarsTalkShow",
    instagram: "",
    linkedin: "",
  },
}

export type Host = {
  name: string
  role: string
  base: string
  focus: string
  blurb: string
  image: string
}

export const HOSTS: Host[] = [
  {
    name: "Omar I.",
    role: "Founding Host",
    base: "",
    focus: "Corporate exits, tax policy, city politics, and New York's economic realignment.",
    blurb:
      "Omar anchors the network's city-and-economy lane with reporting-heavy commentary built around filings, relocations, budget math, and the quiet institutional changes rewriting New York.",
    image: "/omar-host.jpg",
  },
  {
    name: "Felmon N.",
    role: "Founding Host",
    base: "",
    focus: "Political flashpoints, party fractures, media narratives, and fast-turn analysis.",
    blurb:
      "Felmon expands the desk into a broader headline machine: sharper reaction, argument-first episode framing, and a national political read built for fast-moving stories.",
    image: "/felmon-host.jpg",
  },
]

export const NETWORK_PILLARS = [
  {
    label: "Independent",
    title: "Editorially independent",
    body: "ZBN News is positioned around independent judgment, not party talking points, cable habits, or institutional spin.",
  },
  {
    label: "Fact-Based",
    title: "Receipts first",
    body: "Every segment is framed to feel grounded in reporting, documents, public statements, and verifiable context before opinion enters the frame.",
  },
  {
    label: "Experienced",
    title: "Built by seasoned commentators",
    body: "The network presents itself as a serious desk shaped by years of analysis, on-camera delivery, and repeated coverage of high-stakes stories.",
  },
  {
    label: "Daily Briefing",
    title: "Made for the live news cycle",
    body: "The format is designed to move quickly without looking sloppy: direct briefings, embedded video, and a site built to update like a newsroom.",
  },
]

export const DESK_NOTES = [
  {
    label: "Headquarters",
    value: "New York City",
    body: "The station identity is anchored in New York City, New York, with the brand framed like a serious local-to-national digital news desk.",
  },
  {
    label: "Current Feed",
    value: "ZBN Transition",
    body: "The current embedded lineup still runs through Omar's existing YouTube channel while the network brand transitions into place.",
  },
  {
    label: "Editorial Standard",
    value: "Fact-Based",
    body: "The presentation emphasizes independent reporting, credible tone, and a cleaner editorial structure over creator-style branding.",
  },
]

export type Video = {
  id: string
  title: string
  host: string
  date?: string
  summary?: string[]
}

const CTA =
  "This is the kind of story ZBN can package more credibly: a direct host voice, a formal briefing layout, and a cleaner network front door for the work."

export const VIDEOS: Video[] = [
  {
    id: "_wWuYJ0F5YE",
    host: "Omar",
    title: "California Governor SHOCKED After Mark Zuckerberg OFFICIALLY Flees To $170M Miami Mansion!",
    date: "May 6, 2026",
    summary: [
      "A high-profile wealth-migration story that uses Zuckerberg's move to examine prestige, power, and why elite figures increasingly choose Florida over legacy blue-state strongholds.",
      "As a ZBN lead briefing, it works because it combines a globally recognizable name with the network's recurring themes: exit decisions, political consequences, and what those moves say about where power wants to live. " + CTA,
    ],
  },
  {
    id: "M1L5LmF7h0Q",
    host: "Omar",
    title: "Governor of New Jersey ERUPTS After ExxonMobil LEAVES For Texas After 144 Years!",
    date: "May 6, 2026",
    summary: [
      "A legacy-corporate relocation story with a strong historical hook: a 144-year relationship breaking apart under the pressure of modern cost, tax, and strategic incentives.",
      "This fits naturally into the ZBN catalog because it treats a major corporate departure as a regional political story, not just a business memo.",
    ],
  },
  {
    id: "s_KGFlj-gn8",
    host: "Omar",
    title: "JPMorgan Just Announced MASSIVE NYC Office Reduction - Jamie Dimon's Statement Is BRUTAL",
    date: "May 6, 2026",
    summary: [
      "A straight New York business-and-power story built around office reduction, executive signaling, and what a major Wall Street institution is really saying about the city through its footprint decisions.",
      "As a ZBN supporting story, it keeps the network anchored in its strongest lane: New York, institutional retreat, and what the fine print means in real terms.",
    ],
  },
  {
    id: "XCYGsvF17IM",
    host: "Omar",
    title: "Mamdani IN SHOCK After Ken Griffin SCRAPS NYC Tower To DOUBLE DOWN On $2.5 Billion Miami HQ",
    date: "May 6, 2026",
    summary: [
      "A major relocation-and-capital story where one billionaire's real-estate decision is used to tell a larger narrative about confidence, taxation, and the competitive pull of Miami over New York.",
      "For ZBN, it remains strong archive material because it frames a single real-estate move as evidence of a deeper confidence problem in the city.",
    ],
  },
  {
    id: "DWrzweyNNIQ",
    host: "Omar",
    title: "Mamdani HUMILIATED After Trump DESTROYS His Tax Plan - BRUTAL",
    date: "May 5, 2026",
    summary: [
      "A sharp political-reaction segment built around tax policy, public humiliation, and the way a city-level idea can become instantly national once a major political opponent enters the frame.",
      "In the ZBN archive, it plays as a clean political hit connected to a real fiscal fight rather than empty outrage.",
    ],
  },
  {
    id: "rXCFm6VU7ow",
    host: "Omar",
    title: "Mamdani LOSES IT After Hochul OFFICIALLY REJECTS $5.4B NYC Bailout For Good!",
    date: "May 5, 2026",
    summary: [
      "A city-budget and governor-versus-mayor clash that gives the network a very clean public-interest frame: money, leverage, and who gets left exposed when a rescue plan dies.",
      "This stays valuable in the recent catalog because it feels like a real accountability story with clear stakes for the city.",
    ],
  },
  {
    id: "OSnIRrnyxRI",
    host: "Omar",
    title: "Mayor Mamdani HUMILIATED As His Own Governor BLOCKS $1 Billion Wall Street Tax",
    date: "May 4, 2026",
    summary: [
      "A tax-and-intra-party conflict story that pairs neatly with the bailout coverage: a mayor boxed in not only by outside critics, but by resistance from within his own political camp.",
      "For ZBN, it reinforces the station's strongest lane around New York power struggles, Wall Street taxation, and institutional pressure points.",
    ],
  },
  {
    id: "-FPUNwuZNh8",
    host: "Omar",
    title: "Sergey Brin FINALLY Reveals Why He Left California - What He Said Changes EVERYTHING",
    date: "May 4, 2026",
    summary: [
      "A billionaire relocation story that broadens the desk beyond New York while staying inside the same editorial theme: capital flight, state competitiveness, and the language elites use when they leave.",
      "It remains useful catalog material because it expands ZBN's geography while keeping the same money-movement thesis intact.",
    ],
  },
  {
    id: "DrnDyPfxaAw",
    host: "Omar",
    title: "Hedge Fund CEOs ERUPT After Mamdani's $1 Billion New Tax SLAMS Wall Street",
    date: "May 2, 2026",
    summary: [
      "A clear Wall Street backlash story centered on taxation, elite reaction, and the financial sector's willingness to push back when city politics threatens its margins.",
      "In the ZBN archive, it works as a direct collision between politics and finance with obvious implications for the city's tax base.",
    ],
  },
]

export const PRESS: Array<{ name: string; url?: string }> = [
  { name: "Launch-ready newsroom shell" },
  { name: "Multi-host identity system" },
  { name: "Embedded lead-story playback" },
  { name: "Expandable network archive" },
]

export type PullQuote = { quote: string; attribution: string }

export const QUOTES: PullQuote[] = [
  {
    quote:
      "ZBN is the version of the brand that treats the work like a desk instead of a lone channel.",
    attribution: "Network Positioning",
  },
  {
    quote:
      "The independent voice stays intact, but the presentation earns more trust the moment the page loads.",
    attribution: "Design Direction",
  },
]
