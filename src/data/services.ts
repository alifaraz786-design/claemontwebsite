/**
 * Commercial service groups.
 *
 * These are service groups within one focused practice — not separate or
 * unrelated practice areas. Copy should never describe them as such.
 *
 * `tone` drives the alternating ink/bone rhythm down the Commercial Services
 * page; the components read it rather than deciding for themselves, so
 * reordering this array reflows the page correctly. Keep it alternating.
 */

export type Tone = 'ink' | 'bone';

export type Service = {
  num: string;
  /** Anchor target on /services, also used by the homepage cards and footer. */
  slug: string;
  /** Who the group serves, shown as the card eyebrow. */
  audience: string;
  /** Reads after "Discuss" — e.g. "a technology contract". */
  short: string;
  title: string;
  /** Card body on the homepage. */
  teaser: string;
  /** Opening paragraph on the Commercial Services page. */
  body: string;
  matters: readonly string[];
  tone: Tone;
};

export const services: readonly Service[] = [
  {
    num: '01',
    slug: 'commercial-agreements',
    audience: 'Companies & Agencies',
    short: 'a commercial agreement',
    title: 'Commercial Agreements',
    teaser:
      'Service agreements, consulting agreements, master service agreements, statements of work, supplier terms, partnership arrangements, and other contracts used in day to day business.',
    body: 'Service agreements, consulting agreements, master service agreements, statements of work, supplier terms, partnership arrangements, and other contracts used in day to day business.',
    matters: [
      'Service agreements',
      'Consulting agreements',
      'Master service agreements',
      'Statements of work',
      'Supplier terms',
      'Partnership arrangements',
    ],
    tone: 'ink',
  },
  {
    num: '02',
    slug: 'technology-contracts',
    audience: 'Technology & Software',
    short: 'a technology contract',
    title: 'Technology Contracts',
    teaser:
      'SaaS agreements, software and subscription terms, licensing arrangements, implementation terms, support agreements, and contracts for technology enabled services.',
    body: 'SaaS agreements, software and subscription terms, licensing arrangements, implementation terms, support agreements, and contracts for technology enabled services.',
    matters: [
      'SaaS agreements',
      'Software and subscription terms',
      'Licensing arrangements',
      'Implementation terms',
      'Support agreements',
      'Contracts for technology enabled services',
    ],
    tone: 'bone',
  },
  {
    num: '03',
    slug: 'digital-terms-and-policies',
    audience: 'Online Business',
    short: 'your digital terms',
    title: 'Digital Terms & Policies',
    teaser:
      'Website terms, privacy and cookie notices, e-commerce terms, refund and return policies, platform rules, and customer facing documents for digital businesses.',
    body: 'Website terms, privacy and cookie notices, e-commerce terms, refund and return policies, platform rules, and customer facing documents for digital businesses.',
    matters: [
      'Website terms',
      'Privacy and cookie notices',
      'E-commerce terms',
      'Refund and return policies',
      'Platform rules',
      'Customer facing documents',
    ],
    tone: 'ink',
  },
  {
    num: '04',
    slug: 'work-and-employment-agreements',
    audience: 'Professional Relationships',
    short: 'a work agreement',
    title: 'Work & Employment Agreements',
    teaser:
      'Independent contractor agreements, employment agreement review, confidentiality terms, non-disclosure agreements, non-solicitation provisions, and agreements for professional services.',
    body: 'Independent contractor agreements, employment agreement review, confidentiality terms, non-disclosure agreements, non-solicitation provisions, and agreements for professional services.',
    matters: [
      'Independent contractor agreements',
      'Employment agreement review',
      'Confidentiality terms',
      'Non-disclosure agreements',
      'Non-solicitation provisions',
      'Agreements for professional services',
    ],
    tone: 'bone',
  },
] as const;

/** How a matter proceeds — the four-step band on the Commercial Services page. */
export const processSteps = [
  { num: '01', title: 'Enquiry', body: 'Call or write. You reach the firm directly, not an intake team.' },
  { num: '02', title: 'Consultation', body: 'A confidential conversation, without charge, to understand the transaction.' },
  { num: '03', title: 'Scope', body: 'A written scope, a fee arrangement, and a plan you have agreed to before work begins.' },
  { num: '04', title: 'Delivery', body: 'The documents are drafted and settled, with a progress update at every stage.' },
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
