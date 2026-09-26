/**
 * FluentEdge C1 (Advanced) & C2 (Proficiency) Topics
 * Tree-Structured Topic Architecture:
 * - Main Subjects (Randomized academic root domain)
 * - Sub-Themes (2 randomized universal subtopics available across all main subjects)
 * - Synthesizes dynamic titles, prompt directives, and CEFR metadata.
 */

export const MAIN_SUBJECTS = [
  {
    id: "artificial-intelligence",
    name: "Artificial Intelligence",
    shortName: "AI",
    category: "Technology & Ethics"
  },
  {
    id: "algorithms",
    name: "Algorithms & Automated Systems",
    shortName: "Algorithms",
    category: "Computer Science & Society"
  },
  {
    id: "biotechnology",
    name: "Biotechnology & Genetic Engineering",
    shortName: "Biotechnology",
    category: "Bioethics & Medicine"
  },
  {
    id: "mass-surveillance",
    name: "Mass Surveillance & Digital Privacy",
    shortName: "Surveillance",
    category: "Civil Liberties & Politics"
  },
  {
    id: "climate-transition",
    name: "Climate Transition & Renewable Energy",
    shortName: "Climate Policy",
    category: "Ecology & Global Governance"
  },
  {
    id: "sustainable-urbanism",
    name: "Sustainable Megacities & Urbanism",
    shortName: "Urbanism",
    category: "Architecture & Sociology"
  },
  {
    id: "higher-education",
    name: "Higher Education & Academic Commodification",
    shortName: "Academia",
    category: "Education & Economics"
  },
  {
    id: "globalization",
    name: "Globalization & Cultural Identity",
    shortName: "Globalization",
    category: "Geopolitics & Anthropology"
  },
  {
    id: "workforce-automation",
    name: "Workforce Automation & The Future of Labor",
    shortName: "Automation",
    category: "Labor Economics & Policy"
  },
  {
    id: "neurotechnology",
    name: "Neurotechnology & Cognitive Enhancement",
    shortName: "Neurotechnology",
    category: "Neuroscience & Philosophy"
  },
  {
    id: "media-monopolies",
    name: "Media Monopolies & Disinformation",
    shortName: "Media",
    category: "Media, Politics & Epistemology"
  },
  {
    id: "circular-economy",
    name: "The Circular Economy & Consumerism",
    shortName: "Circular Economy",
    category: "Economics & Sustainability"
  },
  {
    id: "space-exploration",
    name: "Space Exploration & Resource Exploitation",
    shortName: "Space Policy",
    category: "Science & International Law"
  },
  {
    id: "demographic-shifts",
    name: "Demographic Aging & Social Welfare",
    shortName: "Demographics",
    category: "Demography & Public Health"
  },
  {
    id: "epistemic-authority",
    name: "Epistemic Authority & Scientific Consensus",
    shortName: "Epistemology",
    category: "Philosophy of Science"
  },
  {
    id: "social-platforms",
    name: "Social Media Architectures & Public Discourse",
    shortName: "Social Platforms",
    category: "Digital Sociology"
  },
  {
    id: "autonomous-weapons",
    name: "Autonomous Weaponry & Modern Warfare",
    shortName: "Autonomous Weapons",
    category: "Military Ethics & Geopolitics"
  },
  {
    id: "synthetic-biology",
    name: "Synthetic Biology & Ecological Intervention",
    shortName: "Synthetic Biology",
    category: "Genetics & Ecology"
  },
  {
    id: "financialization",
    name: "Financialization & Global Wealth Disparity",
    shortName: "Financial Markets",
    category: "Macroeconomics & Social Justice"
  },
  {
    id: "transhumanism",
    name: "Transhumanism & Human Augmentation",
    shortName: "Transhumanism",
    category: "Philosophy & Future Studies"
  }
];

export const SUB_THEMES = [
  {
    id: "morality",
    name: "Morality & Moral Agency",
    shortName: "Morality"
  },
  {
    id: "ethics",
    name: "Ethics & Statutory Accountability",
    shortName: "Ethics"
  },
  {
    id: "society",
    name: "Society & Social Cohesion",
    shortName: "Society"
  },
  {
    id: "social-media",
    name: "Social Media Dynamics & Echo Chambers",
    shortName: "Social Media"
  },
  {
    id: "addiction",
    name: "Addiction & Behavioral Dependency",
    shortName: "Addiction"
  },
  {
    id: "autonomy",
    name: "Individual Autonomy & Free Will",
    shortName: "Autonomy"
  },
  {
    id: "equity",
    name: "Social Equity & Systemic Inequality",
    shortName: "Equity"
  },
  {
    id: "governance",
    name: "Democratic Governance & Public Trust",
    shortName: "Governance"
  },
  {
    id: "economics",
    name: "Economic Displacement & Employment",
    shortName: "Economics"
  },
  {
    id: "identity",
    name: "Human Identity & Existential Meaning",
    shortName: "Identity"
  },
  {
    id: "environment",
    name: "Environmental Resilience & Ecology",
    shortName: "Environment"
  },
  {
    id: "intergenerational-justice",
    name: "Intergenerational Justice & Long-Term Heritage",
    shortName: "Intergenerational Justice"
  },
  {
    id: "oversight",
    name: "Statutory Oversight & Algorithmic Transparency",
    shortName: "Oversight"
  },
  {
    id: "cultural-preservation",
    name: "Cultural Preservation & Linguistic Diversity",
    shortName: "Cultural Preservation"
  },
  {
    id: "corporate-power",
    name: "Corporate Monopolies & Commercial Dominance",
    shortName: "Corporate Power"
  },
  {
    id: "psychological-health",
    name: "Psychological Well-Being & Mental Health",
    shortName: "Mental Well-Being"
  },
  {
    id: "civil-liberties",
    name: "Civil Liberties & State Surveillance",
    shortName: "Civil Liberties"
  },
  {
    id: "truth-integrity",
    name: "Discursive Integrity & Post-Truth Realities",
    shortName: "Truth & Integrity"
  }
];

const TITLE_PATTERNS = [
  (sub, th1, th2) => `${sub.name}: ${th1.shortName} and ${th2.shortName}`,
  (sub, th1, th2) => `The Impact of ${sub.name} on ${th1.shortName} and ${th2.shortName}`,
  (sub, th1, th2) => `${sub.name}, ${th1.shortName} & the Crisis of ${th2.shortName}`,
  (sub, th1, th2) => `${th1.shortName} in the Realm of ${sub.name}: Evaluating ${th2.shortName}`,
  (sub, th1, th2) => `${sub.name} and ${th1.shortName}: Structural Consequences for ${th2.shortName}`
];

const DIRECTIVE_PATTERNS = [
  (sub, th1, th2) => `Write an academic essay examining the implications of ${sub.name} regarding ${th1.name.toLowerCase()} and ${th2.name.toLowerCase()}. Discuss the extent to which these developments threaten or enhance societal well-being.`,
  (sub, th1, th2) => `Evaluate the effects of ${sub.name} on ${th1.name.toLowerCase()}, focusing specifically on how it influences ${th2.name.toLowerCase()} in contemporary society.`,
  (sub, th1, th2) => `Critically analyze how ${sub.name} intersects with ${th1.name.toLowerCase()} and ${th2.name.toLowerCase()}. Address the principal tensions and broader societal ramifications.`,
  (sub, th1, th2) => `Assess the relationship between ${sub.name}, ${th1.name.toLowerCase()}, and ${th2.name.toLowerCase()}, arguing whether the anticipated benefits outweigh the potential systemic risks.`
];

/**
 * Builds a concrete topic instance given a main subject and two sub-themes.
 */
export function generateTopicFromTree(mainSubjectRef, subTheme1Ref, subTheme2Ref, targetLevel = 'C1', options = {}) {
  const mainSubject = typeof mainSubjectRef === 'string'
    ? (MAIN_SUBJECTS.find(s => s.id === mainSubjectRef) || MAIN_SUBJECTS[0])
    : mainSubjectRef;

  const subTheme1 = typeof subTheme1Ref === 'string'
    ? (SUB_THEMES.find(t => t.id === subTheme1Ref) || SUB_THEMES[0])
    : subTheme1Ref;

  const subTheme2 = typeof subTheme2Ref === 'string'
    ? (SUB_THEMES.find(t => t.id === subTheme2Ref) || SUB_THEMES[1])
    : subTheme2Ref;

  const titleIdx = typeof options.titleIdx === 'number'
    ? options.titleIdx % TITLE_PATTERNS.length
    : Math.floor(Math.random() * TITLE_PATTERNS.length);

  const directiveIdx = typeof options.directiveIdx === 'number'
    ? options.directiveIdx % DIRECTIVE_PATTERNS.length
    : Math.floor(Math.random() * DIRECTIVE_PATTERNS.length);

  const isC2 = targetLevel === 'C2';
  const customId = options.id || `tree-${mainSubject.id}-${subTheme1.id}-${subTheme2.id}`;
  const customTitle = options.customTitle || TITLE_PATTERNS[titleIdx](mainSubject, subTheme1, subTheme2);
  const customDirective = options.customDirective || DIRECTIVE_PATTERNS[directiveIdx](mainSubject, subTheme1, subTheme2);

  return {
    id: customId,
    title: customTitle,
    directive: customDirective,
    mainSubject,
    subTheme1,
    subTheme2,
    category: mainSubject.category || 'Contemporary Academic Discourse',
    type: isC2 ? 'C2 Proficiency Discursive Essay' : 'C1/C2 Academic Essay',
    cefrTarget: isC2 ? 'C2' : 'C1 / C2',
    recommendedTime: isC2 ? '50 minutes' : '45 minutes'
  };
}

/**
 * Generates a completely randomized topic from the Subject-Subtheme tree.
 */
export function generateRandomTreeTopic(targetLevel = 'C1', excludeSubjectId = null) {
  let eligibleSubjects = MAIN_SUBJECTS;
  if (excludeSubjectId && MAIN_SUBJECTS.length > 1) {
    eligibleSubjects = MAIN_SUBJECTS.filter(s => s.id !== excludeSubjectId);
  }
  const randomSubject = eligibleSubjects[Math.floor(Math.random() * eligibleSubjects.length)];

  // Draw 2 distinct random sub-themes
  const shuffledSubThemes = [...SUB_THEMES].sort(() => 0.5 - Math.random());
  const subTheme1 = shuffledSubThemes[0];
  const subTheme2 = shuffledSubThemes[1];

  return generateTopicFromTree(randomSubject, subTheme1, subTheme2, targetLevel);
}

/**
 * Pre-seeded list of authentic tree topics for deterministic testing and instant initial state.
 * Preserves backward compatibility with legacy topic IDs.
 */
export const TOPICS = [
  generateTopicFromTree(
    MAIN_SUBJECTS.find(s => s.id === 'artificial-intelligence'),
    SUB_THEMES.find(t => t.id === 'morality'),
    SUB_THEMES.find(t => t.id === 'society'),
    'C1',
    {
      id: 'ai-ethics-autonomy',
      customTitle: 'Artificial Intelligence, Moral Agency & Societal Autonomy',
      customDirective: 'Write an academic essay examining the influence of Artificial Intelligence on morality and societal autonomy. Discuss whether algorithmic delegation threatens human agency.'
    }
  ),
  generateTopicFromTree(
    MAIN_SUBJECTS.find(s => s.id === 'algorithms'),
    SUB_THEMES.find(t => t.id === 'social-media'),
    SUB_THEMES.find(t => t.id === 'addiction'),
    'C1',
    {
      id: 'algorithms-social-media-addiction',
      customTitle: 'Algorithmic Systems: Social Media Dynamics and Behavioral Addiction',
      customDirective: 'Evaluate the effects of algorithmic recommendation architectures on social media addiction and behavioral dependency among digital citizens.'
    }
  ),
  generateTopicFromTree(
    MAIN_SUBJECTS.find(s => s.id === 'sustainable-urbanism'),
    SUB_THEMES.find(t => t.id === 'environment'),
    SUB_THEMES.find(t => t.id === 'society'),
    'C1',
    {
      id: 'sustainable-urbanism',
      customTitle: 'Sustainable Megacities & High-Density Urban Architecture',
      customDirective: 'Critically assess how megacities balance environmental resilience with social cohesion and human well-being.'
    }
  ),
  generateTopicFromTree(
    MAIN_SUBJECTS.find(s => s.id === 'globalization'),
    SUB_THEMES.find(t => t.id === 'cultural-preservation'),
    SUB_THEMES.find(t => t.id === 'identity'),
    'C1',
    {
      id: 'language-cultural-heritage',
      customTitle: 'Global Lingua Franca vs The Preservation of Indigenous Languages',
      customDirective: 'Assess the tensions between the rise of a global lingua franca, cultural preservation, and individual linguistic identity.'
    }
  ),
  generateTopicFromTree(
    MAIN_SUBJECTS.find(s => s.id === 'higher-education'),
    SUB_THEMES.find(t => t.id === 'corporate-power'),
    SUB_THEMES.find(t => t.id === 'equity'),
    'C1',
    {
      id: 'higher-education-commodification',
      customTitle: 'The Commodification of Academia & The Future of Tertiary Education',
      customDirective: 'Analyze the impact of academic commodification and corporate power on equitable access to higher education.'
    }
  ),
  generateTopicFromTree(
    MAIN_SUBJECTS.find(s => s.id === 'media-monopolies'),
    SUB_THEMES.find(t => t.id === 'social-media'),
    SUB_THEMES.find(t => t.id === 'governance'),
    'C1',
    {
      id: 'media-literacy-echo-chambers',
      customTitle: 'Algorithmic Echo Chambers, Disinformation & Modern Democracy',
      customDirective: 'Evaluate the extent to which media monopolies and social echo chambers undermine democratic governance and institutional trust.'
    }
  ),
  generateTopicFromTree(
    MAIN_SUBJECTS.find(s => s.id === 'circular-economy'),
    SUB_THEMES.find(t => t.id === 'corporate-power'),
    SUB_THEMES.find(t => t.id === 'environment'),
    'C1',
    {
      id: 'circular-economy-consumerism',
      customTitle: 'The Circular Economy vs Planned Obsolescence & Consumer Culture',
      customDirective: 'Examine the viability of the circular economy in curtailing planned obsolescence and rampant corporate consumerism.'
    }
  ),
  generateTopicFromTree(
    MAIN_SUBJECTS.find(s => s.id === 'biotechnology'),
    SUB_THEMES.find(t => t.id === 'equity'),
    SUB_THEMES.find(t => t.id === 'ethics'),
    'C1',
    {
      id: 'genetic-enhancement-human-future',
      customTitle: 'Genetic Enhancement, Human Evolution & Social Equality',
      customDirective: 'Critically analyze the ethical dilemmas and social equity disparities posed by emerging germline genetic engineering.'
    }
  ),
  generateTopicFromTree(
    MAIN_SUBJECTS.find(s => s.id === 'workforce-automation'),
    SUB_THEMES.find(t => t.id === 'economics'),
    SUB_THEMES.find(t => t.id === 'psychological-health'),
    'C1',
    {
      id: 'four-day-workweek-productivity',
      customTitle: 'Workforce Automation, Economic Productivity & Employee Well-Being',
      customDirective: 'Discuss the socioeconomic ramifications of workplace automation, productivity metrics, and psychological well-being.'
    }
  ),
  generateTopicFromTree(
    MAIN_SUBJECTS.find(s => s.id === 'mass-surveillance'),
    SUB_THEMES.find(t => t.id === 'civil-liberties'),
    SUB_THEMES.find(t => t.id === 'autonomy'),
    'C1',
    {
      id: 'digital-privacy-surveillance',
      customTitle: 'Digital Privacy, Mass Surveillance & Personal Autonomy',
      customDirective: 'Assess the degree to which mass surveillance regimes erode civil liberties and personal autonomy in the digital sphere.'
    }
  ),
  generateTopicFromTree(
    MAIN_SUBJECTS.find(s => s.id === 'epistemic-authority'),
    SUB_THEMES.find(t => t.id === 'truth-integrity'),
    SUB_THEMES.find(t => t.id === 'governance'),
    'C2',
    {
      id: 'epistemic-authority-truth',
      customTitle: 'Epistemic Authority, Algorithmic Truth & Post-Empirical Discourse',
      customDirective: 'Deliver a rigorous discursive critique evaluating how the fragmentation of epistemic authority destabilizes democratic consensus and discursive integrity.'
    }
  ),
  generateTopicFromTree(
    MAIN_SUBJECTS.find(s => s.id === 'transhumanism'),
    SUB_THEMES.find(t => t.id === 'identity'),
    SUB_THEMES.find(t => t.id === 'ethics'),
    'C2',
    {
      id: 'biotech-transhumanism-ethics',
      customTitle: 'Biotechnological Enhancement, Transhumanism & Existential Ethics',
      customDirective: 'Synthesize competing philosophical arguments regarding whether transhumanist augmentation preserves or dismantles human identity and existential ethics.'
    }
  )
];

export const CEFR_DESCRIPTORS = {
  "C2": {
    "band": "Band 5 (C2 - Mastery)",
    "minScore": 85,
    "summary": "Exceeds C1 requirements. Demonstrates effortless command of complex syntax, nuanced academic register, sophisticated idiomatic collocations, and masterful cohesion.",
    "badgeClass": "badge-c2"
  },
  "C1": {
    "band": "Band 4 (Estimated C1 Level)",
    "minScore": 70,
    "summary": "Meets full C1 standard. Sustained formal academic register, flexible use of complex structures (inversions, clefts), precise lexical choice, clear paragraph architecture.",
    "badgeClass": "badge-c1"
  },
  "B2": {
    "band": "Band 2-3 (B2 - Vantage / Upper-Intermediate)",
    "minScore": 50,
    "summary": "Competent communication, but lacks sufficient C1 syntactic complexity, range of academic collocations, or sustained formal register. Needs revision before progressing to speaking practice.",
    "badgeClass": "badge-b2"
  },
  "B1": {
    "band": "Band 1 (B1 - Threshold)",
    "minScore": 0,
    "summary": "Significantly below C1 standard. Repetitive vocabulary, basic sentence structures, and lack of advanced cohesive linkers. Comprehensive rewrite required.",
    "badgeClass": "badge-b1"
  }
};
