/**
 * Founder details.
 *
 * The firm has one lawyer, so the title is "Founder" — never "Partner".
 * Nothing here may assert a qualification, placement or publication unless the
 * client has supplied it; everything below was supplied by the client.
 *
 * The two quotations are Ali's own statements, not historical quotations.
 */

export const founder = {
  fullName: 'Ali Faraz Bhatti',
  firstName: 'Ali Faraz',
  title: 'Founder',
  /** Founder page, under the name. */
  professionalLine: 'Founder · Commercial Contracts & Business Counsel',
  /** Homepage feature, under the name. */
  credentialLine: 'Founder · BA-LLB (Hons.), Lahore University of Management Sciences',
  supportingLine: 'Chuo University Tokyo',
  /** Homepage feature. */
  quote:
    'The purpose of a contract is not to make a transaction look formal. It is to make the parties’ obligations clear before their expectations begin to diverge.',
  /** Founder page, closing the biography. */
  bioQuote:
    'A sound contract should do more than survive a dispute. It should make the parties’ obligations clear enough to help prevent one.',
  intro:
    'Ali Faraz Bhatti leads the firm and works directly with each team from initial scope through drafting, review, revision, and completion. His background spans commercial legal practice, courtroom work, regulatory research, and legal scholarship.',
} as const;

/**
 * Biography. `opening` is set in the larger display face; the rest are ordinary
 * paragraphs, kept short so the page stays readable on a phone.
 *
 * The date the firm was founded is deliberately absent.
 */
export const bio = {
  opening:
    'Ali Faraz Bhatti founded Claemont Ridge Law to provide direct, commercially grounded assistance with the agreements on which businesses and professional relationships depend.',
  paragraphs: [
    'Before establishing the firm, Ali worked across commercial, contractual, civil, and corporate matters at CMT Law Associates. His work included legal research, contract and document drafting, client counseling, dispute analysis, negotiations, and the preparation of legal opinions, notices, pleadings, and case materials.',
    'His earlier experience includes legal placements with Haidermota & Co., the Securities and Exchange Commission (SECP), the Federal Prosecutor General’s Office, and CMT Law Associates. Those roles exposed him to corporate advisory work, contract review, regulatory questions, commercial disputes, court procedure, and the disciplined analysis required when the facts and legal position are contested.',
    'Ali has also built and operated a consumer business of his own. That experience informs how he approaches contracts: not as documents that exist apart from the business, but as working arrangements concerning payment, delivery, ownership, risk, confidentiality, performance, and the possibility that circumstances may change.',
    'Through Claemont Ridge Law, Ali has worked with numerous international clients on commercial agreements, contract review, negotiation support, employment and contractor documents, confidentiality agreements, online terms, and related business matters. Each accepted engagement begins with a defined scope and is handled directly by the founder.',
  ],
} as const;

export type BackgroundEntry = {
  main: string;
  /** One line per sub-entry; several where a single role covers a set. */
  lines?: readonly string[];
};

/** Education, experience, and scholarship — three columns on the founder page. */
export const background: readonly { title: string; entries: readonly BackgroundEntry[] }[] = [
  {
    title: 'Education',
    entries: [
      {
        main: 'B.A. LL.B. (Honors)',
        lines: ['Lahore University of Management Sciences (LUMS)'],
      },
      {
        main: 'Introduction to Japanese Law',
        lines: ['Chuo University, Tokyo'],
      },
    ],
  },
  {
    title: 'Professional experience',
    entries: [
      { main: 'CMT Law Associates' },
      {
        main: 'Legal apprenticeship',
        lines: [
          'Haidermota & Co.',
          'Securities and Exchange Commission (SECP)',
          'Federal Prosecutor General’s Office',
        ],
      },
    ],
  },
  {
    title: 'Research & publication',
    entries: [
      {
        main: 'Published author',
        lines: [
          'Human Right Case No. 8157-P of 2023, 2024 SCMR 40',
          'LUMS Shaikh Ahmad Hassan School of Law Journal',
        ],
      },
      { main: 'Editorial team', lines: ['LUMS Law Journal'] },
      {
        main: 'Research assistant',
        lines: [
          'Research concerning labor law, judicial review, and constitutional protections of workers’ rights for an amicus curiae contribution before the Lahore High Court.',
        ],
      },
      {
        main: 'Academic research paper',
        lines: [
          'Redefining Liability: A Comprehensive Study on Tort Liability in the Age of Automated Motor Vehicles',
        ],
      },
      { main: 'LUMS Policy Research Institute', lines: ['Associate researcher'] },
    ],
  },
] as const;

/** Supplied by the client. Stated plainly and nowhere else on the site. */
export const barAdmission = {
  title: 'Bar admission',
  main: 'Attorney / Advocate',
  line: 'Punjab Bar Council',
} as const;
