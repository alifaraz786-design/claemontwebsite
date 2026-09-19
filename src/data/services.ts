/**
 * Commercial service groups.
 *
 * These are service groups within one focused practice — not separate or
 * unrelated practice areas. Copy should never describe them as such.
 *
 * Each group is named twice on purpose. The homepage cards use the short,
 * sector-facing pair (`cardAudience` / `cardTitle`); the Contract Services page
 * uses the fuller pair (`audience` / `title`). The client supplied both sets
 * and they are deliberately different — do not collapse them into one.
 *
 * `tone` drives the alternating ink/bone rhythm down the Contract Services
 * page; the components read it rather than deciding for themselves, so
 * reordering this array reflows the page correctly. Keep it alternating.
 */

export type Tone = 'ink' | 'bone';

export type Service = {
  num: string;
  /** Anchor target on /services, also used by the homepage cards and footer. */
  slug: string;

  /* --- Homepage card ---------------------------------------------------- */
  /** Card eyebrow, shown after the numeral. */
  cardAudience: string;
  cardTitle: string;
  /** Card body on the homepage. */
  teaser: string;

  /* --- Contract Services page ------------------------------------------- */
  /** Who the group serves, shown above the section heading. */
  audience: string;
  title: string;
  /** Reads after "Discuss" — e.g. "a technology agreement". */
  short: string;
  /** Opening paragraph on the Contract Services page. */
  body: string;
  matters: readonly string[];
  tone: Tone;
};

export const services: readonly Service[] = [
  {
    num: '01',
    slug: 'commercial-agreements',
    cardAudience: 'Companies & Agencies',
    cardTitle: 'Commercial Agreements',
    teaser:
      'Service agreements, consulting agreements, master service agreements, statements of work, supplier terms, partnership arrangements, and other contracts used in day to day business.',
    audience: 'For businesses & professionals',
    title: 'Commercial Agreements',
    short: 'a commercial agreement',
    body: 'Commercial relationships work better when responsibilities are settled before performance begins. The firm drafts and reviews agreements for businesses, agencies, consultants, suppliers, customers, and independent professionals, with close attention to scope, payment, ownership, confidentiality, liability, termination, and the practical operation of the relationship.',
    matters: [
      'Service and consulting agreements',
      'Master service agreements and statements of work',
      'Customer, supplier, and vendor agreements',
      'Partnership and collaboration agreements',
      'NDAs and confidentiality agreements',
      'Contract review and negotiation support',
    ],
    tone: 'ink',
  },
  {
    num: '02',
    slug: 'technology-contracts',
    cardAudience: 'Technology & Software',
    cardTitle: 'Technology Contracts',
    teaser:
      'SaaS agreements, software and subscription terms, licensing arrangements, implementation terms, support agreements, and contracts for technology enabled services.',
    audience: 'For technology companies',
    title: 'Technology & SaaS Contracts',
    short: 'a technology agreement',
    body: 'Technology agreements must explain more than price and delivery. They must address access, licensing, data, implementation, support, ownership, service levels, permitted use, and what happens when the relationship ends. Claemont Ridge Law helps technology businesses and their commercial partners put those terms into a document that can be understood and used.',
    matters: [
      'SaaS and subscription agreements',
      'Software licenses and end-user terms',
      'Development and implementation agreements',
      'Cloud, hosting, maintenance, and support terms',
      'API, platform, and marketplace agreements',
      'Technology services and data related provisions',
    ],
    tone: 'bone',
  },
  {
    num: '03',
    slug: 'digital-terms-and-policies',
    cardAudience: 'Online Business',
    cardTitle: 'Digital Terms & Policies',
    teaser:
      'Website terms, privacy and cookie notices, e-commerce terms, refund and return policies, platform rules, and customer facing documents for digital businesses.',
    audience: 'For online businesses',
    title: 'Websites & E-Commerce',
    short: 'your online terms',
    body: 'A website is part storefront, part contract. Claemont Ridge Law prepares customer facing terms and policies for online retailers, subscription businesses, digital platforms, agencies, creators, and service providers. Each document is developed around the business model, customer journey, payment structure, and jurisdictions relevant to the engagement.',
    matters: [
      'Website terms of use',
      'Privacy and cookie notices',
      'Refund, return, and cancellation policies',
      'Subscription and renewal terms',
      'Marketplace and platform terms',
      'Creator, influencer, and digital service agreements',
    ],
    tone: 'ink',
  },
  {
    num: '04',
    slug: 'work-and-employment-agreements',
    cardAudience: 'Professional Relationships',
    cardTitle: 'Work & Employment Agreements',
    teaser:
      'Independent contractor agreements, employment agreement review, confidentiality terms, non-disclosure agreements, non-solicitation provisions, and agreements for professional services.',
    audience: 'For individuals & teams',
    title: 'Work & Independent Contracting',
    short: 'a work agreement',
    body: 'Employment and independent contractor agreements can affect compensation, ownership, confidentiality, future work, and the right to end a relationship. The firm reviews and prepares these documents for businesses, contractors, consultants, and individuals, subject to the governing jurisdiction and the scope the firm is professionally authorized to accept.',
    matters: [
      'Employment agreement review',
      'Independent contractor agreements',
      'Confidentiality and intellectual property provisions',
      'Non-compete and non-solicitation review',
    ],
    tone: 'bone',
  },
] as const;

/**
 * How an engagement proceeds — the four-step band on the Contract Services
 * page. Nothing here promises a fee, a price or a turnaround time.
 */
export const processSteps = [
  {
    num: '01',
    title: 'Inquiry',
    body: 'Send a short description of the agreement, the parties, the relevant locations, and any known deadline. Do not send confidential documents at this stage.',
  },
  {
    num: '02',
    title: 'Scope',
    body: 'The firm considers professional authority, conflicts, timing, and fit. If the matter can be accepted, the work, deliverables, and fee arrangement are confirmed in writing.',
  },
  {
    num: '03',
    title: 'Draft or Review',
    body: 'The agreement is prepared or examined against the commercial objectives and information provided. Questions and material drafting choices are addressed directly with the client.',
  },
  {
    num: '04',
    title: 'Completion',
    body: 'The agreed revisions are incorporated and the completed document is delivered with an explanation of significant terms, limitations, and any identified next steps.',
  },
] as const;

/**
 * The Approach — three principles shown on the homepage and anchored at
 * /#approach. These describe how the firm works. They are not guarantees:
 * no fixed fee and no response time is promised here or anywhere else.
 */
export const principles = [
  {
    num: '01',
    title: 'Directly handled',
    body: 'Your matter is handled by a team of professionals from the first substantive discussion through the final work. The person who learns the transaction is the person responsible for the document.',
  },
  {
    num: '02',
    title: 'Clearly scoped',
    body: 'Before substantive work begins, the engagement identifies the work to be undertaken, the expected deliverables, and the applicable fee arrangement.',
  },
  {
    num: '03',
    title: 'Commercially considered',
    body: 'Drafting begins with the business relationship, not a generic form. The objective is language that allocates responsibility clearly and remains workable after signature.',
  },
] as const;
