/**
 * Practice areas.
 *
 * `tone` drives the alternating ink/bone rhythm down the services page — the
 * components read it rather than deciding for themselves, so reordering this
 * array reflows the page correctly. Keep it alternating.
 */

export type Tone = 'ink' | 'bone';

export type Service = {
  num: string;
  /** Anchor target, also used by the footer links. */
  slug: string;
  /** Who the area is for, shown as the eyebrow. */
  audience: string;
  /** Lowercase noun used in "Discuss a ___ matter". */
  short: string;
  title: string;
  /** Two lines, for the card on the homepage. */
  teaser: string;
  /** 40–60 words, for the services page. */
  body: string;
  matters: readonly string[];
  tone: Tone;
};

export const services: readonly Service[] = [
  {
    num: '01',
    slug: 'criminal-defence',
    audience: 'For individuals',
    short: 'criminal',
    title: 'Criminal Defence',
    teaser:
      'Representation from first interview through trial. Discreet, immediate, and available out of hours.',
    body: 'If you have been arrested, charged, or asked to attend a police interview, you need advice before you say anything. The firm acts from the first phone call through to trial or resolution, explains each stage in plain terms, and keeps your matter as private as the law allows.',
    matters: [
      'Police station attendance and interview under caution',
      'Bail applications and conditions',
      'Assault and public order offences',
      'Drug possession and supply',
      'Driving offences and disqualification',
      'Fraud and dishonesty allegations',
    ],
    tone: 'ink',
  },
  {
    num: '02',
    slug: 'business-contract-law',
    audience: 'For businesses',
    short: 'commercial',
    title: 'Business & Contract Law',
    teaser:
      'Drafting, review and negotiation for owner-managed businesses. Plain scopes, fixed fees where possible.',
    body: 'Owner-managed businesses need contracts that hold up and can be read without a lawyer present. The firm drafts, reviews and negotiates agreements, advises on disputes before they reach court, and quotes a fixed fee wherever the scope of work allows it.',
    matters: [
      'Supplier and customer agreements',
      'Terms of business and service contracts',
      'Shareholder and partnership agreements',
      'Employment contracts and consultancy terms',
      'Commercial lease review',
      'Contract disputes and recovery of debts',
    ],
    tone: 'bone',
  },
  {
    num: '03',
    slug: 'practice-area-3',
    audience: '[AUDIENCE]',
    short: '[practice area 3]',
    title: '[PRACTICE AREA 3]',
    teaser: 'Two-line description of who this serves and what the firm does for them. Replace with real copy.',
    body: '[40–60 words explaining this practice area to a non-lawyer: who it is for, what typically brings a client to the firm, and what the firm does for them at each stage. Plain language, no jargon, no promises of outcomes.]',
    matters: [
      '[Matter handled 1]',
      '[Matter handled 2]',
      '[Matter handled 3]',
      '[Matter handled 4]',
      '[Matter handled 5]',
      '[Matter handled 6]',
    ],
    tone: 'ink',
  },
  {
    num: '04',
    slug: 'practice-area-4',
    audience: '[AUDIENCE]',
    short: '[practice area 4]',
    title: '[PRACTICE AREA 4]',
    teaser: 'Two-line description of who this serves and what the firm does for them. Replace with real copy.',
    body: '[40–60 words explaining this practice area to a non-lawyer: who it is for, what typically brings a client to the firm, and what the firm does for them at each stage. Plain language, no jargon, no promises of outcomes.]',
    matters: [
      '[Matter handled 1]',
      '[Matter handled 2]',
      '[Matter handled 3]',
      '[Matter handled 4]',
    ],
    tone: 'bone',
  },
] as const;

/** How a matter proceeds — the four-step band on the services page. */
export const processSteps = [
  { num: '01', title: 'Enquiry', body: 'Call or write. You reach the firm directly and hear back the same business day.' },
  { num: '02', title: 'Consultation', body: 'A confidential conversation, without charge, to understand your position.' },
  { num: '03', title: 'Strategy', body: 'A written scope, a fee arrangement, and a plan you have agreed to.' },
  { num: '04', title: 'Resolution', body: 'The matter is carried through, with a progress update at every stage.' },
] as const;

/** "What you can hold us to" — the three commitments on the homepage. */
export const commitments = [
  {
    num: '01',
    title: 'The founder, directly',
    body: 'Your matter is handled by [FOUNDER NAME] personally. You have his direct line and email from the first meeting.',
  },
  {
    num: '02',
    title: 'Fees agreed in writing',
    body: 'A written scope and fee arrangement before any work begins. Fixed fees for contract work wherever the scope allows.',
  },
  {
    num: '03',
    title: 'Same-day response',
    body: 'Calls and emails are returned the same business day. Clients facing arrest or interview reach the out-of-hours line at any time.',
  },
] as const;
