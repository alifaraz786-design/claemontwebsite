/**
 * Single source of truth for firm-wide details.
 *
 * Everything a client would ask to change — phone, address, email, nav order,
 * footer columns — lives here so it is edited once, not in five templates.
 * Square-bracketed values are placeholders still awaiting real content.
 */

export const site = {
  name: 'Claemont Ridge Law',
  shortName: 'Claemont Ridge',
  founded: 2026,
  region: '[CITY/REGION]',
  tagline: 'Criminal defence and commercial counsel from a single office.',
  description:
    'Claemont Ridge Law advises individuals facing criminal charges and owner-managed businesses across [CITY/REGION]. Every matter is handled by the founding partner.',
  url: 'https://claemontridgelaw.com',
} as const;

export const contact = {
  phone: '+00 000 000 0000',
  /** Digits only, for the tel: href. */
  phoneHref: '+000000000000',
  outOfHours: '[NUMBER]',
  email: 'claemontridgelaw@gmail.com',
  careersEmail: 'careers@claemontridge.law',
  founderEmail: '[first.last]@claemontridge.law',
  addressLines: ['[Office address line 1]', '[Office address line 2]', '[CITY/REGION] [POSTCODE]'],
  /** Used in the CTA band, where the address is set on one line. */
  addressInline: '[OFFICE ADDRESS], [CITY/REGION]',
  directionsUrl: '#',
  hours: [
    { day: 'Monday – Friday', time: '8.30am – 6.00pm' },
    { day: 'Saturday', time: 'By appointment' },
    { day: 'Sunday', time: 'Closed' },
  ],
} as const;

/**
 * Web3Forms access key. The form posts directly to Web3Forms — there is no
 * backend. Get a key at https://web3forms.com and put it in .env as
 * PUBLIC_WEB3FORMS_KEY. It is a public key by design: it only identifies the
 * destination inbox and cannot be used to read submissions.
 */
export const web3FormsKey = import.meta.env.PUBLIC_WEB3FORMS_KEY ?? '[WEB3FORMS ACCESS KEY]';

/** Careers applications go to an external Google Form. Nothing is stored here. */
export const googleFormUrl = import.meta.env.PUBLIC_GOOGLE_FORM_URL ?? '#';

export type NavItem = { label: string; href: string };

export const nav: readonly NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'Practice Areas', href: '/services' },
  { label: 'Founder', href: '/founder' },
  { label: 'Careers', href: '/careers' },
  { label: 'Contact', href: '/contact' },
] as const;

export const footerColumns = [
  {
    title: 'Practice areas',
    links: [
      { label: 'Criminal Defence', href: '/services#criminal-defence' },
      { label: 'Business & Contract Law', href: '/services#business-contract-law' },
      { label: '[PRACTICE AREA 3]', href: '/services#practice-area-3' },
      { label: 'All practice areas', href: '/services' },
    ],
  },
  {
    title: 'Firm',
    links: [
      { label: 'Founder', href: '/founder' },
      { label: 'Careers', href: '/careers' },
      { label: 'Approach', href: '/#why-this-firm' },
      { label: 'Fees', href: '/#why-this-firm' },
    ],
  },
  {
    title: 'Contact',
    links: [
      { label: contact.phone, href: `tel:${contact.phoneHref}` },
      { label: contact.email, href: `mailto:${contact.email}` },
      { label: 'Request a consultation', href: '/contact' },
      { label: 'Directions', href: contact.directionsUrl },
    ],
  },
] as const;

export const legalDisclaimer =
  'The content of this website is provided for general information only and does not constitute legal advice. Contacting the firm does not create a solicitor–client relationship.';
