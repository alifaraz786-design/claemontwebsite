/**
 * Consultation intake form.
 *
 * The options below are sent verbatim to Web3Forms, so editing a label here
 * changes what arrives in the firm's inbox. Keep them in this order — it runs
 * from the most common request to the least.
 */

export const needOptions = [
  'A new contract drafted',
  'An existing contract reviewed',
  'Contract revisions or negotiation support',
  'NDA or confidentiality agreement',
  'Service or consulting agreement',
  'Employment agreement review',
  'Contractor agreement',
  'SaaS, software, or licensing agreement',
  'Website, privacy, or e-commerce terms',
  'Supplier, customer, or partnership agreement',
  'Something else',
] as const;

export const timingOptions = [
  'No fixed deadline',
  'Within two weeks',
  'Within one week',
  'Within three business days',
] as const;
