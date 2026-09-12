/**
 * Careers content.
 *
 * `openRoles` drives which variant the page renders: list the roles and the
 * page shows the position table; empty the array and it falls back to the
 * expression-of-interest panel. Both states were designed — do not delete one.
 */

export const whyJoin = [
  {
    num: '01',
    title: 'Early responsibility',
    body: 'You carry your own files within months, not years, with the founder reviewing your work rather than redoing it.',
  },
  {
    num: '02',
    title: 'Direct mentorship',
    body: 'One senior lawyer, one door, always open. Feedback is given the same day, in person, on the actual document.',
  },
  {
    num: '03',
    title: 'A varied caseload',
    body: 'Technology, commercial and employment agreements in the same week. You learn how each kind of contract informs the others.',
  },
] as const;

export type Role = {
  title: string;
  summary: string;
  location: string;
  type: string;
};

/** Empty this array to show the "no roles listed" variant. */
export const openRoles: readonly Role[] = [
  {
    title: '[ROLE 1]',
    summary: '[One line on what the role involves and who it suits.]',
    location: '[CITY/REGION]',
    type: 'Full-time · Associate',
  },
  {
    title: '[ROLE 2]',
    summary: '[One line on what the role involves and who it suits.]',
    location: '[CITY/REGION]',
    type: 'Full-time · Associate',
  },
  {
    title: '[ROLE 3]',
    summary: '[One line on what the role involves and who it suits.]',
    location: '[CITY/REGION] · Hybrid',
    type: 'Full-time',
  },
] as const;
