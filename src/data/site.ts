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
  tagline: 'Commercial contracts and business counsel.',
  description:
    'Claemont Ridge Law drafts, reviews, and refines commercial agreements for technology companies, established businesses, agencies, consultants, online enterprises, and independent professionals.',
  url: 'https://claemontridgelaw.com',
} as const;

export const contact = {
  /** Swap to the firm-domain address as soon as one exists. */
  email: 'claemontridgelaw@gmail.com',
  careersEmail: 'claemontridgelaw@gmail.com',
  founderEmail: 'claemontridgelaw@gmail.com',
  /** The firm is remote: no public office, no telephone, no directions. */
  availability: 'Remote consultations available',
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
  { label: 'Contract Services', href: '/services' },
  { label: 'Founder', href: '/founder' },
  { label: 'Approach', href: '/#approach' },
  { label: 'Contact', href: '/contact' },
] as const;

export const footerColumns = [
  {
    title: 'Commercial services',
    links: [
      { label: 'Commercial Agreements', href: '/services#commercial-agreements' },
      { label: 'Technology Contracts', href: '/services#technology-contracts' },
      { label: 'Digital Terms & Policies', href: '/services#digital-terms-and-policies' },
      { label: 'Work & Employment Agreements', href: '/services#work-and-employment-agreements' },
      { label: 'Contract Review & Negotiation', href: '/services' },
    ],
  },
  {
    title: 'Firm',
    links: [
      { label: 'Founder', href: '/founder' },
      { label: 'Approach', href: '/#approach' },
      { label: 'Contact', href: '/contact' },
    ],
  },
  {
    title: 'Contact',
    links: [
      { label: contact.email, href: `mailto:${contact.email}` },
      { label: 'Request a consultation', href: '/contact' },
    ],
  },
] as const;

export const legalDisclaimer = [
  'The materials on this website are provided for general information only and do not constitute legal advice. Viewing this website, submitting an inquiry, or communicating with the firm does not by itself create a lawyer client relationship. Do not send confidential information until the firm has confirmed an engagement in writing.',
  'Services involving the law of a particular jurisdiction are offered only where professionally authorized or in coordination with appropriately qualified local counsel.',
] as const;

/** Privacy, Terms and Legal Notice all resolve to the single /legal page. */
export const legalLinks = [
  { label: 'Privacy', href: '/legal' },
  { label: 'Terms', href: '/legal' },
  { label: 'Legal Notice', href: '/legal' },
] as const;
