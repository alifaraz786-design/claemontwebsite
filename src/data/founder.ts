/**
 * Founder details.
 *
 * The firm has one lawyer, so the title is "Founder" — never "Partner".
 * Nothing here may assert a bar admission or a number of years in practice
 * unless the client has supplied evidence for it.
 */

export const founder = {
  fullName: 'Ali Faraz Bhatti',
  firstName: 'Ali Faraz',
  title: 'Founder',
  /** Shown under the name on the homepage feature and the founder page. */
  credentialLine: 'Founder · BA-LLB (Hons.), Lahore University of Management Sciences',
  supportingLine: 'Chuo University Tokyo',
  quote:
    'The purpose of a contract is not to make a transaction look formal. It is to make the parties\u2019 obligations clear before their expectations begin to diverge.',
  bioQuote:
    'People come to me on the worst week of their lives. The least I owe them is a straight answer and a phone that gets picked up.',
} as const;

export const credentials = [
  {
    title: 'Education',
    items: [
      { main: 'BA-LLB (Hons.)', sub: 'Lahore University of Management Sciences' },
      { main: 'Chuo University', sub: 'Tokyo' },
    ],
  },
  {
    title: 'Professional Affiliations',
    items: [
      { main: '[COMMERCIAL OR CORPORATE LAW ASSOCIATION]', sub: 'Member' },
      { main: '[LOCAL CHAMBER OF COMMERCE]', sub: '[Role]' },
    ],
  },
] as const;

export const timeline = [
  {
    year: 'Now',
    role: 'Founder, Claemont Ridge Law',
    line: 'Advises businesses and professionals on the commercial agreements they depend on.',
  },
  {
    year: '[PERIOD]',
    role: '[ROLE], [PRIOR FIRM 2]',
    line: '[One line: the nature of the commercial work and the kinds of clients he acted for.]',
  },
  {
    year: '[PERIOD]',
    role: '[ROLE], [PRIOR FIRM 1]',
    line: '[One line: early drafting and review work, or the commercial practice group he joined.]',
  },
  {
    year: '[PERIOD]',
    role: 'BA-LLB (Hons.), Lahore University of Management Sciences',
    line: '[One line: a distinction, moot, journal, or clinic worth noting; otherwise delete this line.]',
  },
] as const;
