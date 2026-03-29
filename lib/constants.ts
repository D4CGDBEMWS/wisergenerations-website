export const SITE_NAME = 'Wiser Generations'
export const SITE_TAGLINE = 'Your Life Is a Project. Are You Managing It?™'
export const SITE_URL = process.env.NEXT_PUBLIC_BASE_URL || 'https://wisergenerations.com'
export const FOUNDER = 'Crystal Stewart'
export const FOUNDER_TITLE = 'The Project Management Evangelist™'
export const COMPANY = 'Enterprise Academy™'
export const LOCATION = 'Smyrna, GA (Metro Atlanta)'

export const PRINCIPLES = [
  {
    number: 1,
    name: 'Initiate Intentionally',
    pm: 'Project Charter',
    life: 'Own your story. Launch your life with purpose, not reaction.',
    phase: 'internal',
  },
  {
    number: 2,
    name: 'Define Your Scope',
    pm: 'Scope Statement',
    life: "Know what you're building — and what you're not.",
    phase: 'internal',
  },
  {
    number: 3,
    name: 'Execute the Critical Path',
    pm: 'Critical Path Method',
    life: 'Do what matters most. Protect your priority sequence.',
    phase: 'internal',
  },
  {
    number: 4,
    name: 'Align Your Stakeholders',
    pm: 'Stakeholder Management',
    life: 'Build relationships where everyone wins or the project fails.',
    phase: 'relational',
  },
  {
    number: 5,
    name: 'Listen to the Requirements',
    pm: 'Requirements Gathering',
    life: 'Understand before you solve. Seek truth before you speak.',
    phase: 'relational',
  },
  {
    number: 6,
    name: 'Integrate Your Team',
    pm: 'Integration Management',
    life: 'You cannot build anything great alone. Synergy is a skill.',
    phase: 'relational',
  },
  {
    number: 7,
    name: 'Run Your Retrospective',
    pm: 'Lessons Learned / Kaizen',
    life: 'Continuous renewal is not optional — it is the project plan.',
    phase: 'regenerative',
  },
]

export const SESSIONS = [
  { number: 1, title: 'You Are the Project Manager of Your Life', phase: 'INITIATE', principle: 'Framework Introduction' },
  { number: 2, title: 'Your Project Charter: Identity & Purpose', phase: 'INITIATE', principle: 'Framework Introduction' },
  { number: 3, title: 'Principle 1 — Initiate Intentionally', phase: 'PLAN', principle: 'Initiate Intentionally' },
  { number: 4, title: 'Principle 2 — Define Your Scope', phase: 'PLAN', principle: 'Define Your Scope' },
  { number: 5, title: 'Principle 3 — Execute the Critical Path', phase: 'PLAN', principle: 'Execute the Critical Path' },
  { number: 6, title: 'Principle 4 — Align Your Stakeholders', phase: 'EXECUTE', principle: 'Align Your Stakeholders' },
  { number: 7, title: 'Principle 5 — Listen to the Requirements', phase: 'EXECUTE', principle: 'Listen to the Requirements' },
  { number: 8, title: 'Principle 6 — Integrate Your Team', phase: 'EXECUTE', principle: 'Integrate Your Team' },
  { number: 9, title: 'Leadership Pitch Day', phase: 'EXECUTE', principle: 'All 6 Principles Applied' },
  { number: 10, title: 'Mid-Project Review', phase: 'EXECUTE', principle: 'Principles 1–6 Synthesis' },
  { number: 11, title: 'Principle 7 — Run Your Retrospective', phase: 'CLOSE', principle: 'Run Your Retrospective' },
  { number: 12, title: 'Spheres of Influence', phase: 'CLOSE', principle: 'Purpose Layer Integration' },
  { number: 13, title: 'Capstone Preparation & Peer Review', phase: 'CLOSE', principle: 'Portfolio Completion' },
  { number: 14, title: 'Capstone Presentation & Celebration', phase: 'CLOSE', principle: 'Program Close' },
]

export const PRICING_TIERS = [
  {
    id: 'digital',
    name: 'Digital Access',
    price: 497,
    priceId: process.env.NEXT_PUBLIC_STRIPE_PRICE_DIGITAL || '',
    description: 'Full online program at your own pace',
    features: [
      'All 14 sessions — self-paced online',
      'Student Workbook PDF download',
      'Completion certificate (23 PMI hours)',
      'CAPM pathway documentation',
      'Lifetime access to course materials',
    ],
    highlight: false,
    badge: '',
  },
  {
    id: 'community',
    name: 'Digital + Community',
    price: 697,
    priceId: process.env.NEXT_PUBLIC_STRIPE_PRICE_COMMUNITY || '',
    description: 'Online program plus cohort community',
    features: [
      'Everything in Digital Access',
      'Wiser Generations community membership',
      'Sprint Wall — weekly accountability',
      'CAPM study group access',
      'Alumni network',
    ],
    highlight: true,
    badge: 'Most Popular',
  },
  {
    id: 'inperson',
    name: 'In-Person Cohort',
    price: 997,
    priceId: process.env.NEXT_PUBLIC_STRIPE_PRICE_INPERSON || '',
    description: 'Live sessions in Metro Atlanta',
    features: [
      'All 14 sessions — live in Smyrna, GA',
      'Small cohort (max 20 students)',
      'Facilitator-led by Crystal Stewart',
      'Physical Student Workbook',
      'Capstone presentation ceremony',
    ],
    highlight: false,
    badge: 'Limited Seats',
  },
  {
    id: 'complete',
    name: 'Complete Program',
    price: 1497,
    priceId: process.env.NEXT_PUBLIC_STRIPE_PRICE_COMPLETE || '',
    description: 'The full Enterprise Academy™ experience',
    features: [
      'In-Person Cohort access',
      'Digital access (online backup)',
      'Community membership',
      'Priority certificate processing',
      'One-on-one sponsor orientation call',
    ],
    highlight: false,
    badge: 'All-Inclusive',
  },
]
