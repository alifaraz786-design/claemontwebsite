/** Founder page content. Placeholders await the client's real details. */

export const founder = {
  fullName: 'Ali Faraz Bhatti',
  firstName: '[FIRST NAME]',
  title: 'Founding Attorney',
  jurisdiction: '[JURISDICTION]',
  admittedYear: '[YEAR]',
  yearsInPractice: '[YEARS]',
  credentialLine: 'Founding Partner · [CREDENTIALS] · [YEARS] years in practice · formerly [PRIOR FIRMS]',
  quote:
    'A client should never have to chase their own lawyer. If you have to ask where your matter stands, I have already failed you.',
  bioQuote:
    'People come to me on the worst week of their lives. The least I owe them is a straight answer and a phone that gets picked up.',
} as const;

export const credentials = [
  {
    title: 'Education',
    items: [
      { main: '[LAW DEGREE, e.g. Juris Doctor]', sub: '[LAW SCHOOL], [YEAR]' },
      { main: '[UNDERGRADUATE DEGREE]', sub: '[PLACEHOLDER UNIVERSITY], [YEAR]' },
    ],
  },
  {
    title: 'Admissions & Bar Memberships',
    items: [
      { main: 'Bar of [JURISDICTION]', sub: 'Admitted [YEAR]' },
      { main: '[COURT OR TRIBUNAL ADMISSION]', sub: 'Admitted [YEAR]' },
      { main: '[STATE / REGIONAL BAR ASSOCIATION]', sub: 'Member since [YEAR]' },
    ],
  },
  {
    title: 'Professional Affiliations',
    items: [
      { main: '[CRIMINAL DEFENCE LAWYERS ASSOCIATION]', sub: 'Member' },
      { main: '[COMMERCIAL LAW SECTION OR SOCIETY]', sub: 'Member' },
      { main: '[LOCAL CHAMBER OF COMMERCE OR LEGAL AID PANEL]', sub: '[Role], [YEAR]–present' },
    ],
  },
] as const;

export const timeline = [
  {
    year: '2026',
    role: 'Founding Attorney, Claemont Ridge Law',
    line: 'Opened the firm in [CITY/REGION] to practise criminal defence and commercial law directly for clients.',
  },
  {
    year: '[YEAR]–2026',
    role: '[Senior Associate / Partner], [PRIOR FIRM 2]',
    line: '[One line: the nature of the work and the kinds of clients he acted for.]',
  },
  {
    year: '[YEAR]–[YEAR]',
    role: '[Associate], [PRIOR FIRM 1]',
    line: '[One line: early trial work, first appearances, or the commercial practice group he joined.]',
  },
  {
    year: '[YEAR]',
    role: 'Admitted to the Bar of [JURISDICTION]',
    line: 'Called to the bar following [CLERKSHIP / TRAINING CONTRACT / ARTICLES] at [FIRM OR COURT].',
  },
  {
    year: '[YEAR]',
    role: '[LAW DEGREE], [LAW SCHOOL]',
    line: '[One line: a distinction, moot, journal, or clinic worth noting; otherwise delete this line.]',
  },
] as const;
