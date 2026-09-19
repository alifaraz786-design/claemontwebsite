/**
 * Contact page form options.
 *
 * These are sent verbatim to Web3Forms, so editing a label here changes what
 * arrives in the firm's inbox. Keep each list in its given order — it runs from
 * the most common request to the least.
 */

/** Client inquiry — "What do you need?" */
export const needOptions = [
  'Draft a new agreement',
  'Review an existing agreement',
  'Revise or negotiate an agreement',
  'NDA or confidentiality agreement',
  'Service or consulting agreement',
  'Technology or SaaS agreement',
  'Website, e-commerce, or digital terms',
  'Employment agreement review',
  'Independent contractor agreement',
  'Other contract matter',
] as const;

/** Client inquiry — "Does a draft already exist?" */
export const draftOptions = ['Yes', 'No', 'I am not sure'] as const;

/** Career inquiry — "Area of interest" */
export const interestOptions = [
  'Legal research',
  'Contract drafting support',
  'Legal writing or editorial work',
  'Operations or administration',
  'Marketing or content',
  'Internship',
  'Other',
] as const;
