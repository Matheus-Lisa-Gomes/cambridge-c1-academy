/**
 * FluentEdge — Topic-Generation Engine
 * Architecture: SUBJECT x THEME x TENSION x PARAMETERS x PROMPT_TYPE -> WRITING TASK
 *
 * complexity: 1 = Easy (B2/C1 accessible), 2 = Medium (C1), 3 = Hard (C1/C2)
 * keywords[]: terms used for topic-adherence enforcement (client-side, no API)
 */

// =============================================================================
// 1. SUBJECTS
// =============================================================================

export const MAIN_SUBJECTS = [

  // ── EASY (complexity: 1) ─────────────────────────────────────────────────

  {
    id: 'social-media-daily',
    name: 'Social Media & Daily Life',
    shortName: 'Social Media',
    domain: 'Digital Sociology',
    complexity: 1,
    keywords: ['social media', 'platform', 'post', 'share', 'online', 'content',
      'feed', 'scroll', 'follower', 'profile', 'digital', 'network', 'app',
      'instagram', 'twitter', 'tiktok', 'facebook', 'interact'],
    compatibleThemes: ['addiction', 'psychological-health', 'identity',
      'society', 'civil-liberties', 'truth-integrity', 'corporate-power']
  },
  {
    id: 'remote-work',
    name: 'Remote Work & Technology',
    shortName: 'Remote Work',
    domain: 'Labour & Technology',
    complexity: 1,
    keywords: ['remote work', 'work from home', 'flexible', 'video call', 'digital',
      'virtual', 'home office', 'collaboration', 'productivity', 'telework',
      'hybrid', 'online meeting', 'workplace', 'commute'],
    compatibleThemes: ['autonomy', 'psychological-health', 'economics',
      'society', 'identity', 'corporate-power']
  },
  {
    id: 'sports-competition',
    name: 'Sports, Competition & Teamwork',
    shortName: 'Sports',
    domain: 'Sport & Sociology',
    complexity: 1,
    keywords: ['sport', 'competition', 'athlete', 'team', 'fitness', 'training',
      'champion', 'coach', 'performance', 'win', 'lose', 'fair play', 'physical',
      'tournament', 'game', 'player', 'exercise'],
    compatibleThemes: ['identity', 'ethics', 'equity', 'society',
      'psychological-health', 'autonomy']
  },
  {
    id: 'travel-exchange',
    name: 'Travel & Cultural Exchange',
    shortName: 'Travel',
    domain: 'Tourism & Anthropology',
    complexity: 1,
    keywords: ['travel', 'tourism', 'culture', 'exchange', 'destination',
      'abroad', 'experience', 'foreign', 'visit', 'tourist', 'trip', 'journey',
      'local', 'language', 'customs', 'tradition'],
    compatibleThemes: ['cultural-preservation', 'identity', 'society',
      'environment', 'economics', 'equity']
  },
  {
    id: 'healthy-lifestyle',
    name: 'Healthy Lifestyle & Well-Being',
    shortName: 'Healthy Living',
    domain: 'Health & Sociology',
    complexity: 1,
    keywords: ['health', 'diet', 'exercise', 'well-being', 'nutrition',
      'lifestyle', 'fitness', 'mental health', 'balance', 'sleep', 'stress',
      'physical', 'food', 'activity', 'habit', 'wellness'],
    compatibleThemes: ['psychological-health', 'autonomy', 'society',
      'identity', 'equity', 'economics']
  },
  {
    id: 'environmental-habits',
    name: 'Environmental Habits & Sustainability',
    shortName: 'Green Habits',
    domain: 'Ecology & Consumer Behaviour',
    complexity: 1,
    keywords: ['recycling', 'reduce', 'reuse', 'waste', 'environment',
      'green', 'sustainable', 'plastic', 'carbon', 'footprint', 'eco',
      'habit', 'pollution', 'energy', 'clean', 'nature'],
    compatibleThemes: ['environment', 'intergenerational-justice', 'society',
      'autonomy', 'corporate-power', 'identity']
  },
  {
    id: 'reading-digital',
    name: 'Reading Habits & Digital Media',
    shortName: 'Reading & Media',
    domain: 'Education & Digital Culture',
    complexity: 1,
    keywords: ['reading', 'book', 'digital', 'media', 'literacy', 'screen',
      'text', 'story', 'knowledge', 'e-book', 'print', 'attention', 'information',
      'library', 'publish', 'author'],
    compatibleThemes: ['truth-integrity', 'identity', 'society', 'autonomy',
      'psychological-health', 'cultural-preservation']
  },
  {
    id: 'volunteering',
    name: 'Volunteering & Community Service',
    shortName: 'Volunteering',
    domain: 'Sociology & Civil Society',
    complexity: 1,
    keywords: ['volunteer', 'community', 'service', 'charity', 'donation',
      'nonprofit', 'help', 'social', 'civic', 'engagement', 'contribution',
      'solidarity', 'local', 'welfare', 'support'],
    compatibleThemes: ['society', 'equity', 'identity', 'ethics',
      'autonomy', 'trust']
  },

  // ── MEDIUM (complexity: 2) ──────────────────────────────────────────────

  {
    id: 'mental-health-society',
    name: 'Mental Health & Modern Society',
    shortName: 'Mental Health',
    domain: 'Public Health & Sociology',
    complexity: 2,
    keywords: ['mental health', 'anxiety', 'depression', 'wellbeing', 'therapy',
      'stigma', 'stress', 'support', 'counselling', 'disorder', 'psychiatric',
      'psychological', 'burnout', 'resilience', 'awareness', 'treatment'],
    compatibleThemes: ['psychological-health', 'equity', 'society',
      'identity', 'governance', 'corporate-power', 'addiction']
  },
  {
    id: 'urban-transportation',
    name: 'Urban Transportation & Mobility',
    shortName: 'Urban Mobility',
    domain: 'Urban Planning & Policy',
    complexity: 2,
    keywords: ['transport', 'traffic', 'commute', 'public transport', 'urban',
      'mobility', 'infrastructure', 'congestion', 'electric vehicle', 'bus',
      'metro', 'cycling', 'pedestrian', 'car', 'road', 'emissions', 'city'],
    compatibleThemes: ['environment', 'equity', 'governance', 'economics',
      'intergenerational-justice', 'corporate-power']
  },
  {
    id: 'healthcare-access',
    name: 'Healthcare Access & Inequality',
    shortName: 'Healthcare',
    domain: 'Public Health & Social Policy',
    complexity: 2,
    keywords: ['healthcare', 'access', 'inequality', 'insurance', 'treatment',
      'patient', 'hospital', 'public health', 'universal', 'system', 'doctor',
      'medicine', 'private', 'funding', 'policy', 'preventive'],
    compatibleThemes: ['equity', 'governance', 'corporate-power', 'economics',
      'intergenerational-justice', 'oversight', 'trust']
  },
  {
    id: 'immigration-integration',
    name: 'Immigration & Social Integration',
    shortName: 'Immigration',
    domain: 'Political Sociology & Policy',
    complexity: 2,
    keywords: ['immigration', 'migrant', 'integration', 'refugee', 'border',
      'asylum', 'diversity', 'community', 'host country', 'cultural', 'identity',
      'policy', 'population', 'citizenship', 'minority', 'foreign'],
    compatibleThemes: ['cultural-preservation', 'identity', 'equity', 'society',
      'governance', 'civil-liberties', 'trust']
  },
  {
    id: 'food-security',
    name: 'Food Security & Modern Agriculture',
    shortName: 'Food Security',
    domain: 'Agriculture & Global Policy',
    complexity: 2,
    keywords: ['food security', 'agriculture', 'farming', 'crop', 'hunger',
      'supply chain', 'production', 'distribution', 'drought', 'soil', 'organic',
      'food system', 'pesticide', 'yield', 'nutrition', 'arable'],
    compatibleThemes: ['environment', 'equity', 'intergenerational-justice',
      'governance', 'corporate-power', 'economics', 'oversight']
  },
  {
    id: 'digital-privacy',
    name: 'Digital Privacy & Personal Data',
    shortName: 'Digital Privacy',
    domain: 'Technology & Civil Liberties',
    complexity: 2,
    keywords: ['privacy', 'data', 'personal information', 'tracking', 'consent',
      'breach', 'protection', 'cookie', 'collection', 'surveillance', 'profile',
      'regulation', 'GDPR', 'digital rights', 'platform', 'user data'],
    compatibleThemes: ['civil-liberties', 'oversight', 'trust', 'corporate-power',
      'governance', 'autonomy', 'truth-integrity']
  },
  {
    id: 'gender-equality',
    name: 'Gender Equality & the Workplace',
    shortName: 'Gender Equality',
    domain: 'Gender Studies & Labour Policy',
    complexity: 2,
    keywords: ['gender equality', 'gender', 'workplace', 'discrimination',
      'diversity', 'inclusion', 'pay gap', 'opportunity', 'representation',
      'female', 'male', 'bias', 'sexism', 'leadership', 'career', 'policy'],
    compatibleThemes: ['equity', 'identity', 'ethics', 'governance',
      'corporate-power', 'society', 'autonomy']
  },
  {
    id: 'tourism-impact',
    name: 'Mass Tourism & Cultural Impact',
    shortName: 'Mass Tourism',
    domain: 'Tourism Studies & Ecology',
    complexity: 2,
    keywords: ['tourism', 'cultural impact', 'heritage', 'local community',
      'overtourism', 'economy', 'destination', 'tourist', 'sustainability',
      'gentrification', 'infrastructure', 'mass travel', 'preservation',
      'cultural site', 'revenue'],
    compatibleThemes: ['cultural-preservation', 'environment', 'economics',
      'equity', 'governance', 'intergenerational-justice', 'identity']
  },

  // ── HARD (complexity: 3) — ORIGINAL 20 ──────────────────────────────────

  {
    id: 'artificial-intelligence',
    name: 'Artificial Intelligence',
    shortName: 'AI',
    domain: 'Technology & Society',
    complexity: 3,
    keywords: ['artificial intelligence', 'AI', 'machine learning', 'algorithm',
      'neural network', 'automation', 'model', 'data', 'deep learning', 'system',
      'decision-making', 'bias', 'language model', 'predictive', 'cognitive'],
    compatibleThemes: ['autonomy', 'ethics', 'oversight', 'equity', 'identity',
      'corporate-power', 'governance', 'psychological-health', 'economics']
  },
  {
    id: 'algorithms',
    name: 'Algorithmic & Automated Systems',
    shortName: 'Algorithms',
    domain: 'Computer Science & Society',
    complexity: 3,
    keywords: ['algorithm', 'automated', 'recommendation', 'filter bubble',
      'amplification', 'ranking', 'curation', 'system', 'platform', 'data',
      'profiling', 'output', 'black box', 'decision', 'bias', 'targeted'],
    compatibleThemes: ['oversight', 'ethics', 'equity', 'governance',
      'corporate-power', 'psychological-health', 'addiction', 'truth-integrity',
      'civil-liberties']
  },
  {
    id: 'biotechnology',
    name: 'Biotechnology & Genetic Engineering',
    shortName: 'Biotechnology',
    domain: 'Bioethics & Medicine',
    complexity: 3,
    keywords: ['biotechnology', 'genetics', 'genetic engineering', 'gene editing',
      'CRISPR', 'genome', 'DNA', 'biomedical', 'hereditary', 'modification',
      'cloning', 'embryo', 'therapy', 'bioethics', 'organism'],
    compatibleThemes: ['ethics', 'equity', 'identity', 'autonomy', 'governance',
      'intergenerational-justice', 'corporate-power', 'oversight']
  },
  {
    id: 'mass-surveillance',
    name: 'Mass Surveillance & Digital Privacy',
    shortName: 'Surveillance',
    domain: 'Civil Liberties & Politics',
    complexity: 3,
    keywords: ['surveillance', 'monitoring', 'facial recognition', 'CCTV',
      'data collection', 'state', 'tracking', 'metadata', 'privacy', 'security',
      'intelligence', 'biometric', 'profiling', 'spying', 'control'],
    compatibleThemes: ['civil-liberties', 'autonomy', 'governance', 'oversight',
      'trust', 'ethics', 'corporate-power', 'truth-integrity']
  },
  {
    id: 'climate-transition',
    name: 'Climate Transition & Renewable Energy',
    shortName: 'Climate Policy',
    domain: 'Ecology & Global Governance',
    complexity: 3,
    keywords: ['climate', 'renewable energy', 'carbon', 'emissions', 'fossil fuel',
      'net zero', 'transition', 'decarbonisation', 'solar', 'wind', 'green energy',
      'warming', 'Paris Agreement', 'policy', 'ecological', 'temperature'],
    compatibleThemes: ['intergenerational-justice', 'governance', 'equity',
      'corporate-power', 'economics', 'oversight', 'environment']
  },
  {
    id: 'sustainable-urbanism',
    name: 'Sustainable Megacities & Urbanism',
    shortName: 'Urbanism',
    domain: 'Architecture & Sociology',
    complexity: 3,
    keywords: ['urbanism', 'megacity', 'urban planning', 'smart city', 'housing',
      'density', 'zoning', 'gentrification', 'infrastructure', 'sustainability',
      'metropolitan', 'land use', 'mixed use', 'municipal', 'sprawl'],
    compatibleThemes: ['environment', 'equity', 'governance', 'economics',
      'intergenerational-justice', 'identity', 'psychological-health']
  },
  {
    id: 'higher-education',
    name: 'Higher Education & Academic Commodification',
    shortName: 'Academia',
    domain: 'Education & Economics',
    complexity: 3,
    keywords: ['higher education', 'university', 'tuition', 'academic', 'degree',
      'commodification', 'student debt', 'credential', 'research', 'faculty',
      'access', 'institutional', 'scholarship', 'knowledge economy', 'campus'],
    compatibleThemes: ['equity', 'corporate-power', 'economics', 'autonomy',
      'truth-integrity', 'identity', 'governance']
  },
  {
    id: 'globalization',
    name: 'Globalization & Cultural Identity',
    shortName: 'Globalization',
    domain: 'Geopolitics & Anthropology',
    complexity: 3,
    keywords: ['globalisation', 'globalization', 'cultural identity', 'homogenisation',
      'trade', 'multinational', 'westernization', 'sovereignty', 'cultural exchange',
      'economic integration', 'migration', 'interdependence', 'diaspora'],
    compatibleThemes: ['cultural-preservation', 'identity', 'equity', 'governance',
      'economics', 'truth-integrity', 'intergenerational-justice']
  },
  {
    id: 'workforce-automation',
    name: 'Workforce Automation & the Future of Labour',
    shortName: 'Automation',
    domain: 'Labour Economics & Policy',
    complexity: 3,
    keywords: ['workforce automation', 'automation', 'labour', 'job displacement',
      'robot', 'manufacturing', 'reskilling', 'unemployment', 'technology',
      'productivity', 'gig economy', 'task', 'human capital', 'disruption'],
    compatibleThemes: ['economics', 'equity', 'psychological-health', 'identity',
      'governance', 'corporate-power', 'autonomy']
  },
  {
    id: 'neurotechnology',
    name: 'Neurotechnology & Cognitive Enhancement',
    shortName: 'Neurotechnology',
    domain: 'Neuroscience & Philosophy',
    complexity: 3,
    keywords: ['neurotechnology', 'brain', 'cognitive enhancement', 'implant',
      'brain-computer interface', 'neural', 'nootropic', 'consciousness',
      'mental augmentation', 'cognition', 'memory', 'neuroscience', 'chip'],
    compatibleThemes: ['identity', 'ethics', 'equity', 'autonomy',
      'corporate-power', 'oversight', 'psychological-health']
  },
  {
    id: 'media-monopolies',
    name: 'Media Monopolies & Disinformation',
    shortName: 'Media',
    domain: 'Media, Politics & Epistemology',
    complexity: 3,
    keywords: ['media monopoly', 'disinformation', 'misinformation', 'fake news',
      'propaganda', 'ownership', 'editorial', 'journalism', 'bias', 'narrative',
      'platform', 'echo chamber', 'censorship', 'press freedom', 'broadcasting'],
    compatibleThemes: ['truth-integrity', 'governance', 'corporate-power',
      'civil-liberties', 'addiction', 'psychological-health', 'equity']
  },
  {
    id: 'circular-economy',
    name: 'The Circular Economy & Consumerism',
    shortName: 'Circular Economy',
    domain: 'Economics & Sustainability',
    complexity: 3,
    keywords: ['circular economy', 'consumerism', 'waste', 'reuse', 'recycle',
      'product lifecycle', 'linear economy', 'manufacturing', 'disposable',
      'sustainable production', 'supply chain', 'material', 'cradle-to-cradle'],
    compatibleThemes: ['environment', 'corporate-power', 'economics', 'equity',
      'intergenerational-justice', 'governance', 'identity']
  },
  {
    id: 'space-exploration',
    name: 'Space Exploration & Resource Exploitation',
    shortName: 'Space Policy',
    domain: 'Science & International Law',
    complexity: 3,
    keywords: ['space exploration', 'space', 'satellite', 'asteroid', 'resource',
      'colonisation', 'NASA', 'private spaceflight', 'Outer Space Treaty', 'orbit',
      'Moon', 'Mars', 'telescope', 'launch', 'interplanetary'],
    compatibleThemes: ['governance', 'equity', 'intergenerational-justice',
      'corporate-power', 'ethics', 'environment', 'oversight']
  },
  {
    id: 'demographic-shifts',
    name: 'Demographic Ageing & Social Welfare',
    shortName: 'Demographics',
    domain: 'Demography & Public Health',
    complexity: 3,
    keywords: ['demographic', 'ageing', 'elderly', 'pension', 'birth rate',
      'fertility', 'social welfare', 'healthcare', 'retirement', 'dependency ratio',
      'longevity', 'geriatric', 'workforce', 'generational', 'immigration'],
    compatibleThemes: ['intergenerational-justice', 'equity', 'governance',
      'economics', 'identity', 'psychological-health', 'autonomy']
  },
  {
    id: 'epistemic-authority',
    name: 'Epistemic Authority & Scientific Consensus',
    shortName: 'Epistemology',
    domain: 'Philosophy of Science',
    complexity: 3,
    keywords: ['epistemic', 'scientific consensus', 'knowledge', 'authority',
      'denial', 'post-truth', 'evidence', 'expert', 'science', 'empirical',
      'credibility', 'misinformation', 'peer review', 'discourse', 'inquiry'],
    compatibleThemes: ['truth-integrity', 'governance', 'trust', 'oversight',
      'civil-liberties', 'identity', 'ethics']
  },
  {
    id: 'social-platforms',
    name: 'Social Media Architectures & Public Discourse',
    shortName: 'Social Platforms',
    domain: 'Digital Sociology',
    complexity: 3,
    keywords: ['social media architecture', 'platform design', 'engagement',
      'virality', 'public discourse', 'moderation', 'algorithm', 'hate speech',
      'amplification', 'content policy', 'user behaviour', 'network effect'],
    compatibleThemes: ['addiction', 'psychological-health', 'truth-integrity',
      'governance', 'civil-liberties', 'corporate-power', 'identity', 'equity']
  },
  {
    id: 'autonomous-weapons',
    name: 'Autonomous Weaponry & Modern Warfare',
    shortName: 'Autonomous Weapons',
    domain: 'Military Ethics & Geopolitics',
    complexity: 3,
    keywords: ['autonomous weapon', 'drone', 'lethal autonomous', 'military AI',
      'warfare', 'international law', 'targeting', 'accountability', 'robot',
      'combat', 'armed conflict', 'treaty', 'geopolitics', 'security'],
    compatibleThemes: ['ethics', 'governance', 'oversight', 'autonomy',
      'intergenerational-justice', 'civil-liberties', 'equity']
  },
  {
    id: 'synthetic-biology',
    name: 'Synthetic Biology & Ecological Intervention',
    shortName: 'Synthetic Biology',
    domain: 'Genetics & Ecology',
    complexity: 3,
    keywords: ['synthetic biology', 'gene drive', 'engineered organism', 'ecosystem',
      'biological', 'intervention', 'microorganism', 'pathogen', 'biodiversity',
      'ecological engineering', 'lab-grown', 'biosafety', 'release'],
    compatibleThemes: ['environment', 'ethics', 'intergenerational-justice',
      'oversight', 'corporate-power', 'equity', 'governance']
  },
  {
    id: 'financialization',
    name: 'Financialization & Global Wealth Disparity',
    shortName: 'Financial Markets',
    domain: 'Macroeconomics & Social Justice',
    complexity: 3,
    keywords: ['financialization', 'wealth disparity', 'inequality', 'capital',
      'stock market', 'asset', 'hedge fund', 'fiscal policy', 'tax avoidance',
      'offshore', 'speculation', 'monetary policy', 'redistribution', 'poverty'],
    compatibleThemes: ['equity', 'governance', 'corporate-power', 'economics',
      'civil-liberties', 'intergenerational-justice', 'oversight']
  },
  {
    id: 'transhumanism',
    name: 'Transhumanism & Human Augmentation',
    shortName: 'Transhumanism',
    domain: 'Philosophy & Future Studies',
    complexity: 3,
    keywords: ['transhumanism', 'augmentation', 'enhancement', 'posthuman',
      'cyborg', 'longevity', 'biohacking', 'singularity', 'implant',
      'human potential', 'cognitive', 'physical enhancement', 'ethical'],
    compatibleThemes: ['identity', 'ethics', 'equity', 'autonomy', 'governance',
      'corporate-power', 'intergenerational-justice']
  }
];

// =============================================================================
// 2. THEMES (Analytical Lenses)
// =============================================================================

export const SUB_THEMES = [

  // ── EASY themes (complexity: 1) ──────────────────────────────────────────

  {
    id: 'personal-growth',
    name: 'Personal Growth & Self-Improvement',
    shortName: 'Personal Growth',
    complexity: 1,
    lens: 'How does this subject shape individual growth, self-development and aspiration?',
    keywords: ['growth', 'improvement', 'learn', 'develop', 'achieve', 'goal',
      'progress', 'motivation', 'skill', 'potential', 'self-discipline', 'ambition']
  },
  {
    id: 'community',
    name: 'Community & Belonging',
    shortName: 'Community',
    complexity: 1,
    lens: 'How does this subject affect the sense of belonging and social connection?',
    keywords: ['community', 'belong', 'connect', 'social', 'together', 'support',
      'local', 'group', 'inclusion', 'shared', 'bond', 'neighbourhood', 'cohesion']
  },
  {
    id: 'creativity',
    name: 'Creativity & Innovation',
    shortName: 'Creativity',
    complexity: 1,
    lens: 'Does this subject nurture or constrain human creativity and originality?',
    keywords: ['creative', 'innovation', 'idea', 'imagination', 'design', 'art',
      'invent', 'original', 'novel', 'experiment', 'expression', 'inspiration']
  },
  {
    id: 'family-relationships',
    name: 'Family & Social Relationships',
    shortName: 'Relationships',
    complexity: 1,
    lens: 'How does this subject influence family structures and interpersonal bonds?',
    keywords: ['family', 'relationship', 'friend', 'connection', 'communication',
      'bond', 'parent', 'support', 'interact', 'social', 'partner', 'household']
  },

  // ── MEDIUM themes (complexity: 2) ─────────────────────────────────────────

  {
    id: 'public-health',
    name: 'Public Health & Social Responsibility',
    shortName: 'Public Health',
    complexity: 2,
    lens: 'What public health dimensions and responsibilities arise from this subject?',
    keywords: ['public health', 'prevention', 'awareness', 'community health',
      'policy', 'disease', 'well-being', 'sanitation', 'campaign', 'responsibility',
      'vaccination', 'screening', 'healthcare system', 'epidemic']
  },
  {
    id: 'education-access',
    name: 'Education Policy & Access',
    shortName: 'Education Access',
    complexity: 2,
    lens: 'How does this subject affect access to quality education and knowledge?',
    keywords: ['education', 'policy', 'access', 'school', 'curriculum', 'reform',
      'inequality', 'funding', 'teacher', 'learning', 'literacy', 'student', 'class']
  },
  {
    id: 'media-influence',
    name: 'Media Influence & Information Consumption',
    shortName: 'Media Influence',
    complexity: 2,
    lens: 'How does this subject shape or distort the information people consume?',
    keywords: ['media', 'influence', 'consumption', 'audience', 'narrative',
      'representation', 'broadcast', 'journalism', 'news', 'source', 'frame',
      'opinion', 'public', 'disinformation', 'press']
  },
  {
    id: 'migration-diversity',
    name: 'Migration & Social Diversity',
    shortName: 'Migration & Diversity',
    complexity: 2,
    lens: 'How does this subject shape the composition and cohesion of diverse societies?',
    keywords: ['migration', 'diversity', 'inclusion', 'multicultural', 'integration',
      'background', 'minority', 'ethnic', 'cultural', 'community', 'refugee',
      'immigrant', 'host', 'belonging', 'discrimination']
  },

  // ── HARD themes (complexity: 3) — ORIGINAL 18 ───────────────────────────

  {
    id: 'autonomy',
    name: 'Individual Autonomy & Free Will',
    shortName: 'Autonomy',
    complexity: 3,
    lens: 'To what degree does this subject constrain or enable personal agency?',
    keywords: ['autonomy', 'agency', 'free will', 'self-determination', 'choice',
      'control', 'freedom', 'independence', 'voluntary', 'consent', 'rational',
      'paternalism', 'coercion', 'liberty', 'personal']
  },
  {
    id: 'ethics',
    name: 'Ethics & Accountability',
    shortName: 'Ethics',
    complexity: 3,
    lens: 'What ethical obligations arise from this subject, and who is accountable?',
    keywords: ['ethics', 'accountability', 'moral', 'obligation', 'responsibility',
      'harm', 'principle', 'duty', 'virtue', 'utilitarian', 'justice', 'wrong',
      'right', 'deontological', 'consequentialist', 'normative']
  },
  {
    id: 'equity',
    name: 'Social Equity & Systemic Inequality',
    shortName: 'Equity',
    complexity: 3,
    lens: 'How does this subject distribute benefits and harms across social groups?',
    keywords: ['equity', 'inequality', 'systemic', 'disparity', 'privilege',
      'marginalised', 'class', 'race', 'disadvantaged', 'redistribution',
      'opportunity', 'fairness', 'structural', 'bias', 'underrepresented']
  },
  {
    id: 'governance',
    name: 'Democratic Governance & Institutional Trust',
    shortName: 'Governance',
    complexity: 3,
    lens: 'How does this subject challenge or reinforce democratic institutions?',
    keywords: ['governance', 'democracy', 'institution', 'regulation', 'policy',
      'law', 'parliament', 'accountability', 'political', 'authority',
      'legislation', 'sovereignty', 'public sector', 'rule of law', 'power']
  },
  {
    id: 'economics',
    name: 'Economic Displacement & Labour',
    shortName: 'Economics',
    complexity: 3,
    lens: 'What are the economic incentives, costs, and distributional effects?',
    keywords: ['economic', 'labour', 'market', 'wage', 'income', 'capital',
      'productivity', 'growth', 'recession', 'fiscal', 'inequality', 'supply',
      'demand', 'employment', 'trade', 'monetary', 'GDP', 'investment']
  },
  {
    id: 'identity',
    name: 'Human Identity & Existential Meaning',
    shortName: 'Identity',
    complexity: 3,
    lens: 'Does this subject threaten or enrich what it means to be human?',
    keywords: ['identity', 'existential', 'meaning', 'self', 'human', 'consciousness',
      'personhood', 'dignity', 'authentic', 'cultural', 'belonging', 'narrative',
      'sense of self', 'ontological', 'subjective']
  },
  {
    id: 'environment',
    name: 'Environmental Resilience & Ecology',
    shortName: 'Environment',
    complexity: 3,
    lens: 'What are the ecological consequences, short- and long-term?',
    keywords: ['environment', 'ecological', 'biodiversity', 'ecosystem', 'climate',
      'species', 'habitat', 'pollution', 'carbon', 'deforestation', 'ocean',
      'resilience', 'natural resource', 'sustainability', 'biosphere']
  },
  {
    id: 'intergenerational-justice',
    name: 'Intergenerational Justice & Future Heritage',
    shortName: 'Future Justice',
    complexity: 3,
    lens: 'What obligations do present decisions impose on future generations?',
    keywords: ['intergenerational', 'future generation', 'legacy', 'heritage',
      'long-term', 'posterity', 'sustainability', 'irreversible', 'obligation',
      'inheritance', 'children', 'century', 'future', 'enduring', 'stewardship']
  },
  {
    id: 'oversight',
    name: 'Regulatory Oversight & Algorithmic Transparency',
    shortName: 'Oversight',
    complexity: 3,
    lens: 'Who regulates this subject, and are current frameworks adequate?',
    keywords: ['oversight', 'regulation', 'transparency', 'accountability',
      'framework', 'audit', 'compliance', 'regulator', 'enforce', 'watchdog',
      'inspect', 'standard', 'guideline', 'mechanism', 'self-regulation']
  },
  {
    id: 'cultural-preservation',
    name: 'Cultural Preservation & Linguistic Diversity',
    shortName: 'Cultural Heritage',
    complexity: 3,
    lens: 'How does this subject affect minority cultures, languages, and local identities?',
    keywords: ['cultural preservation', 'heritage', 'linguistic', 'diversity',
      'minority', 'indigenous', 'language', 'tradition', 'intangible heritage',
      'extinction', 'assimilation', 'homogenisation', 'dialect', 'folklore']
  },
  {
    id: 'corporate-power',
    name: 'Corporate Power & Commercial Monopoly',
    shortName: 'Corporate Power',
    complexity: 3,
    lens: 'To what extent do private commercial interests shape this subject?',
    keywords: ['corporate power', 'monopoly', 'corporation', 'profit', 'shareholder',
      'market dominance', 'lobbying', 'commercial', 'privatisation', 'CEO',
      'accountability', 'big tech', 'antitrust', 'rent-seeking', 'market power']
  },
  {
    id: 'psychological-health',
    name: 'Psychological Well-Being & Mental Health',
    shortName: 'Mental Well-Being',
    complexity: 3,
    lens: 'What are the measurable effects on cognitive and emotional well-being?',
    keywords: ['psychological', 'mental health', 'well-being', 'anxiety', 'stress',
      'cognitive', 'emotional', 'depression', 'trauma', 'burnout', 'mindfulness',
      'therapeutic', 'resilience', 'distress', 'psychiatric', 'wellbeing']
  },
  {
    id: 'civil-liberties',
    name: 'Civil Liberties & State Authority',
    shortName: 'Civil Liberties',
    complexity: 3,
    lens: 'How does this subject affect freedom of expression, movement, or privacy?',
    keywords: ['civil liberties', 'free speech', 'freedom', 'rights', 'privacy',
      'censorship', 'state power', 'authoritarian', 'protest', 'surveillance',
      'constitutional', 'democratic', 'expression', 'assembly', 'liberty']
  },
  {
    id: 'truth-integrity',
    name: 'Epistemic Integrity & Post-Truth Discourse',
    shortName: 'Truth & Integrity',
    complexity: 3,
    lens: 'How does this subject affect the ability to access reliable information?',
    keywords: ['truth', 'integrity', 'epistemic', 'misinformation', 'disinformation',
      'fact', 'evidence', 'post-truth', 'credibility', 'source', 'verify',
      'accuracy', 'fake', 'propaganda', 'objective', 'narrative']
  },
  {
    id: 'addiction',
    name: 'Addiction & Behavioural Dependency',
    shortName: 'Behavioural Dependency',
    complexity: 3,
    lens: 'Does this subject exploit or create compulsive patterns of behaviour?',
    keywords: ['addiction', 'dependency', 'compulsive', 'behavioural', 'dopamine',
      'habit', 'withdrawal', 'craving', 'reward', 'compulsion', 'engagement',
      'hook', 'variable reward', 'relapse', 'desensitisation']
  },
  {
    id: 'trust',
    name: 'Public Trust & Institutional Legitimacy',
    shortName: 'Public Trust',
    complexity: 3,
    lens: 'How does this subject affect citizens\' confidence in institutions?',
    keywords: ['trust', 'legitimacy', 'credibility', 'institution', 'confidence',
      'public', 'scepticism', 'accountability', 'transparency', 'reliable',
      'faith', 'corruption', 'scandal', 'perception', 'social contract']
  },
  {
    id: 'morality',
    name: 'Morality & Moral Agency',
    shortName: 'Morality',
    complexity: 3,
    lens: 'What moral responsibilities does this subject generate, and can agents bear them?',
    keywords: ['morality', 'moral', 'agency', 'conscience', 'virtue', 'obligation',
      'ethical framework', 'right', 'wrong', 'duty', 'principle', 'norm',
      'value', 'sin', 'justification', 'moral reasoning']
  },
  {
    id: 'society',
    name: 'Society & Social Cohesion',
    shortName: 'Social Cohesion',
    complexity: 3,
    lens: 'How does this subject strengthen or fragment collective social bonds?',
    keywords: ['society', 'social cohesion', 'collective', 'fragmentation',
      'solidarity', 'polarisation', 'division', 'community', 'norms', 'shared',
      'social fabric', 'integration', 'belonging', 'trust', 'civic']
  }
];

// =============================================================================
// 3. TENSIONS
// =============================================================================

export const TENSIONS = [
  {
    id: 'innovation-vs-regulation',
    name: 'Innovation vs Regulation',
    pole1: 'the pace of innovation',
    pole2: 'the need for regulatory constraint',
    compatibleThemes: ['oversight', 'governance', 'ethics', 'corporate-power', 'civil-liberties']
  },
  {
    id: 'individual-vs-collective',
    name: 'Individual Freedom vs Collective Welfare',
    pole1: 'individual freedom',
    pole2: 'collective social welfare',
    compatibleThemes: ['autonomy', 'civil-liberties', 'governance', 'ethics',
      'psychological-health', 'society', 'community']
  },
  {
    id: 'efficiency-vs-equity',
    name: 'Efficiency vs Equity',
    pole1: 'economic efficiency',
    pole2: 'equitable distribution of outcomes',
    compatibleThemes: ['equity', 'economics', 'governance', 'corporate-power', 'intergenerational-justice']
  },
  {
    id: 'convenience-vs-independence',
    name: 'Convenience vs Human Independence',
    pole1: 'the convenience it provides',
    pole2: 'the erosion of human independence it causes',
    compatibleThemes: ['autonomy', 'addiction', 'identity', 'psychological-health', 'personal-growth']
  },
  {
    id: 'progress-vs-heritage',
    name: 'Progress vs Preservation',
    pole1: 'the imperatives of progress',
    pole2: 'the preservation of cultural and natural heritage',
    compatibleThemes: ['cultural-preservation', 'environment', 'identity',
      'intergenerational-justice', 'society', 'community']
  },
  {
    id: 'transparency-vs-privacy',
    name: 'Transparency vs Privacy',
    pole1: 'greater public transparency',
    pole2: 'the right to individual privacy',
    compatibleThemes: ['civil-liberties', 'truth-integrity', 'oversight', 'governance', 'trust']
  },
  {
    id: 'growth-vs-sustainability',
    name: 'Economic Growth vs Ecological Sustainability',
    pole1: 'economic growth',
    pole2: 'long-term ecological sustainability',
    compatibleThemes: ['environment', 'intergenerational-justice', 'economics',
      'corporate-power', 'governance']
  },
  {
    id: 'national-vs-global',
    name: 'National Sovereignty vs Global Cooperation',
    pole1: 'national sovereignty and self-determination',
    pole2: 'the necessity of global governance frameworks',
    compatibleThemes: ['governance', 'equity', 'civil-liberties', 'intergenerational-justice',
      'environment', 'oversight']
  },
  {
    id: 'access-vs-quality',
    name: 'Democratisation vs Dilution of Standards',
    pole1: 'democratising access',
    pole2: 'maintaining rigorous standards',
    compatibleThemes: ['equity', 'identity', 'truth-integrity', 'economics',
      'cultural-preservation', 'education-access']
  },
  {
    id: 'human-vs-machine',
    name: 'Human Judgement vs Algorithmic Optimisation',
    pole1: 'human deliberation and contextual judgement',
    pole2: 'algorithmic speed and statistical optimisation',
    compatibleThemes: ['oversight', 'ethics', 'autonomy', 'trust', 'governance', 'morality']
  },
  {
    id: 'short-term-vs-long-term',
    name: 'Immediate Benefit vs Long-Term Consequences',
    pole1: 'short-term measurable benefits',
    pole2: 'the potential for long-term irreversible harm',
    compatibleThemes: ['intergenerational-justice', 'environment', 'ethics',
      'governance', 'corporate-power']
  },
  {
    id: 'security-vs-freedom',
    name: 'Security vs Freedom',
    pole1: 'collective security and risk mitigation',
    pole2: 'the protection of individual freedoms',
    compatibleThemes: ['civil-liberties', 'governance', 'oversight', 'trust', 'autonomy']
  },
  {
    id: 'tradition-vs-change',
    name: 'Tradition vs Change',
    pole1: 'preserving established traditions and values',
    pole2: 'embracing progressive social change',
    compatibleThemes: ['cultural-preservation', 'identity', 'society', 'family-relationships',
      'community', 'governance']
  },
  {
    id: 'local-vs-global',
    name: 'Local Identity vs Global Interconnection',
    pole1: 'the value of local identity and community',
    pole2: 'the benefits of global interconnection',
    compatibleThemes: ['cultural-preservation', 'community', 'identity', 'society',
      'economics', 'migration-diversity']
  }
];

// =============================================================================
// 4. SCOPES
// =============================================================================

export const SCOPES = [
  { id: 'individual', label: 'at the individual level',  framing: 'for individual citizens' },
  { id: 'national',  label: 'at the national level',     framing: 'for nation-states' },
  { id: 'global',    label: 'at the global level',       framing: 'for the international community' },
  { id: 'sectoral',  label: 'within a specific sector',  framing: 'across professional and institutional domains' }
];

// =============================================================================
// 5. STAKEHOLDERS
// =============================================================================

export const STAKEHOLDERS = [
  { id: 'individuals',   name: 'Individuals & Citizens' },
  { id: 'governments',   name: 'Governments & Regulators' },
  { id: 'corporations',  name: 'Technology & Corporate Sector' },
  { id: 'academia',      name: 'Academic & Research Institutions' },
  { id: 'civil-society', name: 'Civil Society & NGOs' },
  { id: 'future-gen',    name: 'Future Generations' },
  { id: 'vulnerable',    name: 'Marginalised & Vulnerable Populations' }
];

// =============================================================================
// 6. PROMPT TYPES
// =============================================================================

export const PROMPT_TYPES = [
  {
    id: 'to-what-extent',
    label: 'To What Extent',
    generate: function(subject, theme, tension, scope) {
      return 'To what extent does ' + tension.pole1 + ' associated with ' + subject.name +
        ' justify the risks it poses to ' + theme.shortName.toLowerCase() + ' ' + scope.framing + '?';
    }
  },
  {
    id: 'evaluate',
    label: 'Evaluate the Claim',
    generate: function(subject, theme, tension, scope) {
      return 'Evaluate the claim that ' + subject.name + ' ultimately undermines rather than advances ' +
        theme.shortName.toLowerCase() + ' ' + scope.label + '.';
    }
  },
  {
    id: 'argue-for-or-against',
    label: 'Argue For or Against',
    generate: function(subject, theme) {
      return 'Argue for or against the proposition that regulating ' + subject.name +
        ' is essential to preserving ' + theme.shortName.toLowerCase() + ' in contemporary society.';
    }
  },
  {
    id: 'discuss-both-sides',
    label: 'Discuss Both Sides',
    generate: function(subject, theme, tension) {
      return 'Discuss the view that ' + tension.pole1 + ' brought by ' + subject.name +
        ' must be balanced against ' + tension.pole2 + ', with particular regard to ' +
        theme.shortName.toLowerCase() + '.';
    }
  },
  {
    id: 'ethical-evaluation',
    label: 'Ethical Evaluation',
    generate: function(subject, theme, tension, scope, stakeholders) {
      var sh = _stk(stakeholders);
      return 'Critically assess the ethical responsibilities of ' + sh +
        ' in managing the relationship between ' + subject.name + ' and ' +
        theme.shortName.toLowerCase() + ' ' + scope.framing + '.';
    }
  },
  {
    id: 'comparative-analysis',
    label: 'Comparative Analysis',
    generate: function(subject, theme, tension) {
      return 'Compare the relative weight of ' + tension.pole1 + ' and ' + tension.pole2 +
        ' when evaluating the societal impact of ' + subject.name + ' on ' +
        theme.shortName.toLowerCase() + '.';
    }
  }
];

// =============================================================================
// 7. DIFFICULTY PROFILES
// =============================================================================

const DIFFICULTY_PROFILES = {
  C1: {
    cefrTarget: 'C1 / C2',
    type: 'C1/C2 Academic Essay',
    recommendedTime: '45 minutes',
    minWordCount: 220,
    maxWordCount: 260,
    preferredPromptTypes: ['to-what-extent', 'argue-for-or-against', 'discuss-both-sides'],
    preferredComplexities: [1, 2, 3]
  },
  C2: {
    cefrTarget: 'C2',
    type: 'C2 Proficiency Discursive Essay',
    recommendedTime: '50 minutes',
    minWordCount: 280,
    maxWordCount: 320,
    preferredPromptTypes: ['evaluate', 'ethical-evaluation', 'comparative-analysis'],
    preferredComplexities: [2, 3]
  }
};

// =============================================================================
// 8. TOPIC ADHERENCE — keyword-based enforcement (no external API)
// =============================================================================

/**
 * Checks whether an essay sufficiently addresses the obligatory topic.
 * All matching is purely client-side: case-insensitive word-boundary substring search.
 *
 * Thresholds:
 *   Subject  → at least 2 distinct keyword matches
 *   Theme 1  → at least 1 distinct keyword match
 *   Theme 2  → at least 1 distinct keyword match
 *
 * @param {string} essayText
 * @param {Object} topic  — full topic object from generateTopicFromTree / generateRandomTreeTopic
 * @returns {{ passes: boolean, subjectOk: boolean, theme1Ok: boolean, theme2Ok: boolean,
 *             subjectFound: string[], theme1Found: string[], theme2Found: string[],
 *             subjectNeeded: number, theme1Needed: number, theme2Needed: number,
 *             feedback: string }}
 */
export function checkTopicAdherence(essayText, topic) {
  if (!essayText || !topic) {
    return {
      passes: false,
      subjectOk: false,
      theme1Ok: false,
      theme2Ok: false,
      subjectFound: [],
      theme1Found: [],
      theme2Found: [],
      subjectNeeded: 2,
      theme1Needed: 1,
      theme2Needed: 1,
      feedback: 'No essay or topic provided.'
    };
  }

  var lowerText = essayText.toLowerCase();

  function findKeywords(keywords) {
    if (!keywords || keywords.length === 0) return [];
    var found = [];
    keywords.forEach(function(kw) {
      if (!kw || typeof kw !== 'string') return;
      var trimmed = kw.trim();
      if (!trimmed) return;
      var escaped = trimmed.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
      // For short words (<= 3 letters e.g. "AI", "car", "law"), require exact word boundary
      // For longer words / phrases, require leading word boundary so e.g. "algorithm" matches "algorithms"
      var pattern = (trimmed.length <= 3)
        ? '\\b' + escaped + '\\b'
        : '\\b' + escaped;
      var regex = new RegExp(pattern, 'i');
      if (regex.test(lowerText) && !found.includes(trimmed)) {
        found.push(trimmed);
      }
    });
    return found;
  }

  // Collect keywords including names and shortNames
  var subjectKeywords = (topic.mainSubject && topic.mainSubject.keywords) ? topic.mainSubject.keywords.slice() : [];
  if (topic.mainSubject && topic.mainSubject.name) subjectKeywords.push(topic.mainSubject.name);
  if (topic.mainSubject && topic.mainSubject.shortName && !subjectKeywords.includes(topic.mainSubject.shortName)) {
    subjectKeywords.push(topic.mainSubject.shortName);
  }

  var theme1Keywords = (topic.subTheme1 && topic.subTheme1.keywords) ? topic.subTheme1.keywords.slice() : [];
  if (topic.subTheme1 && topic.subTheme1.name) theme1Keywords.push(topic.subTheme1.name);
  if (topic.subTheme1 && topic.subTheme1.shortName && !theme1Keywords.includes(topic.subTheme1.shortName)) {
    theme1Keywords.push(topic.subTheme1.shortName);
  }

  var theme2Keywords = (topic.subTheme2 && topic.subTheme2.keywords) ? topic.subTheme2.keywords.slice() : [];
  if (topic.subTheme2 && topic.subTheme2.name) theme2Keywords.push(topic.subTheme2.name);
  if (topic.subTheme2 && topic.subTheme2.shortName && !theme2Keywords.includes(topic.subTheme2.shortName)) {
    theme2Keywords.push(topic.subTheme2.shortName);
  }

  var subjectFound = findKeywords(subjectKeywords);
  var theme1Found  = findKeywords(theme1Keywords);
  var theme2Found  = findKeywords(theme2Keywords);

  var SUBJECT_MIN = 2;
  var THEME_MIN   = 1;

  var subjectOk = subjectFound.length >= SUBJECT_MIN;
  var theme1Ok  = theme1Found.length  >= THEME_MIN;
  var theme2Ok  = theme2Found.length  >= THEME_MIN;
  var passes    = subjectOk && theme1Ok && theme2Ok;

  var parts = [];
  var sName = topic.mainSubject ? topic.mainSubject.shortName || topic.mainSubject.name : 'the subject';
  var t1Name = topic.subTheme1 ? topic.subTheme1.shortName || topic.subTheme1.name : 'Sub-theme 1';
  var t2Name = topic.subTheme2 ? topic.subTheme2.shortName || topic.subTheme2.name : 'Sub-theme 2';

  if (!subjectOk) {
    parts.push('address the root subject (' + sName + ' — at least ' + SUBJECT_MIN + ' core terms/concepts needed, currently ' + subjectFound.length + ')');
  }
  if (!theme1Ok) {
    parts.push('engage with ' + t1Name + ' (at least ' + THEME_MIN + ' thematic concept needed, currently ' + theme1Found.length + ')');
  }
  if (!theme2Ok) {
    parts.push('engage with ' + t2Name + ' (at least ' + THEME_MIN + ' thematic concept needed, currently ' + theme2Found.length + ')');
  }

  var feedback = passes
    ? 'Essay sufficiently addresses all required topic areas (' + sName + ' + ' + t1Name + ' & ' + t2Name + ').'
    : 'Your essay must ' + parts.join(', ') + ' to satisfy the Obligatory Focus requirement.';

  return {
    passes: passes,
    subjectOk: subjectOk,
    theme1Ok: theme1Ok,
    theme2Ok: theme2Ok,
    subjectFound: subjectFound,
    theme1Found: theme1Found,
    theme2Found: theme2Found,
    subjectNeeded: SUBJECT_MIN,
    theme1Needed: THEME_MIN,
    theme2Needed: THEME_MIN,
    subjectName: sName,
    theme1Name: t1Name,
    theme2Name: t2Name,
    feedback: feedback
  };
}

// =============================================================================
// 9. VALIDATION
// =============================================================================

export function isCompatible(subject, theme) {
  if (!subject || !theme) return false;
  return subject.compatibleThemes.includes(theme.id);
}

export function tensionCompatible(tension, theme) {
  if (!tension || !theme) return false;
  return tension.compatibleThemes.includes(theme.id);
}

export function validateTopic(topic) {
  var errors = [];
  if (!topic.mainSubject)  errors.push('Missing mainSubject');
  if (!topic.subTheme1)    errors.push('Missing subTheme1');
  if (!topic.subTheme2)    errors.push('Missing subTheme2');
  if (!topic.tension)      errors.push('Missing tension');
  if (!topic.promptType)   errors.push('Missing promptType');
  if (!topic.scope)        errors.push('Missing scope');
  if (!topic.directive || topic.directive.trim().length < 20) errors.push('Directive too short');
  if (!topic.title || topic.title.trim().length < 5)          errors.push('Title too short');
  if (topic.mainSubject && topic.subTheme1 && !isCompatible(topic.mainSubject, topic.subTheme1)) {
    errors.push('Theme "' + topic.subTheme1.id + '" incompatible with subject "' + topic.mainSubject.id + '"');
  }
  if (topic.tension && topic.subTheme1 && !tensionCompatible(topic.tension, topic.subTheme1)) {
    errors.push('Tension "' + topic.tension.id + '" incompatible with theme "' + topic.subTheme1.id + '"');
  }
  return { valid: errors.length === 0, errors: errors };
}

// =============================================================================
// 10. COOLDOWN / REPETITION PREVENTION
// =============================================================================

const COOLDOWN_SIZE = 8;
const _recentCombos = [];

function _markUsed(subjectId, themeId) {
  _recentCombos.push(subjectId + '::' + themeId);
  if (_recentCombos.length > COOLDOWN_SIZE) _recentCombos.shift();
}

function _isOnCooldown(subjectId, themeId) {
  return _recentCombos.includes(subjectId + '::' + themeId);
}

// =============================================================================
// 11. INTERNAL HELPERS
// =============================================================================

function _pick(arr, rng) {
  rng = rng || Math.random;
  return arr[Math.floor(rng() * arr.length)];
}

function _weightedPick(arr, weightFn, rng) {
  rng = rng || Math.random;
  var weights = arr.map(weightFn);
  var total = weights.reduce(function(s, w) { return s + w; }, 0);
  var r = rng() * total;
  for (var i = 0; i < arr.length; i++) {
    r -= weights[i];
    if (r <= 0) return arr[i];
  }
  return arr[arr.length - 1];
}

function _stk(stakeholders) {
  if (!stakeholders || stakeholders.length === 0) return 'relevant stakeholders';
  if (stakeholders.length === 1) return stakeholders[0].name.toLowerCase();
  var last = stakeholders[stakeholders.length - 1].name.toLowerCase();
  var rest = stakeholders.slice(0, -1).map(function(s) { return s.name.toLowerCase(); });
  return rest.join(', ') + ' and ' + last;
}

function _buildTitle(subject, primaryTheme, secondaryTheme, tension) {
  var patterns = [
    function() { return subject.name + ': ' + primaryTheme.shortName + ' and ' + secondaryTheme.shortName; },
    function() { return subject.name + ', ' + primaryTheme.shortName + ' & the Tension of ' + tension.name; },
    function() { return primaryTheme.shortName + ' in the Age of ' + subject.name + ': The ' + tension.name + ' Debate'; },
    function() { return subject.name + ' and ' + primaryTheme.shortName + ': Implications for ' + secondaryTheme.shortName; },
    function() { return 'The ' + tension.name + ' Dilemma: ' + subject.name + ' through the Lens of ' + primaryTheme.shortName; }
  ];
  return _pick(patterns)();
}

// =============================================================================
// 12. CORE TOPIC GENERATOR (backward compatible)
// =============================================================================

export function generateTopicFromTree(subject, primaryTheme, secondaryTheme, targetLevel, overrides) {
  targetLevel = targetLevel || 'C1';
  overrides   = overrides || {};

  var sub = (typeof subject === 'string')
    ? (MAIN_SUBJECTS.find(function(s) { return s.id === subject; }) || MAIN_SUBJECTS[0])
    : subject;
  var th1 = (typeof primaryTheme === 'string')
    ? (SUB_THEMES.find(function(t) { return t.id === primaryTheme; }) || SUB_THEMES[0])
    : primaryTheme;
  var th2 = (typeof secondaryTheme === 'string')
    ? (SUB_THEMES.find(function(t) { return t.id === secondaryTheme; }) || SUB_THEMES[1])
    : secondaryTheme;

  var tension = (overrides.tension && typeof overrides.tension === 'object')
    ? overrides.tension
    : (TENSIONS.find(function(t) { return t.compatibleThemes.includes(th1.id); }) || TENSIONS[0]);

  var scope         = overrides.scope       || SCOPES[1];
  var promptTypeObj = overrides.promptType  || PROMPT_TYPES[0];
  var stakeholders  = overrides.stakeholders || [STAKEHOLDERS[0], STAKEHOLDERS[1]];
  var profile       = DIFFICULTY_PROFILES[targetLevel] || DIFFICULTY_PROFILES.C1;

  var directive = overrides.customDirective
    || promptTypeObj.generate(sub, th1, tension, scope, stakeholders);

  var title = overrides.customTitle || _buildTitle(sub, th1, th2, tension);
  var id    = overrides.id || ('tree-' + sub.id + '-' + th1.id + '-' + th2.id);

  return {
    id: id,
    title: title,
    directive: directive,
    mainSubject: sub,
    subTheme1: th1,
    subTheme2: th2,
    complexity: sub.complexity || 2,
    complexityLabel: sub.complexity === 1 ? 'Easy' : (sub.complexity === 2 ? 'Medium' : 'Hard'),
    category: sub.domain || 'Contemporary Academic Discourse',
    type: profile.type,
    cefrTarget: profile.cefrTarget,
    recommendedTime: profile.recommendedTime,
    tension: tension,
    scope: scope,
    stakeholders: stakeholders,
    promptType: promptTypeObj,
    targetLevel: targetLevel,
    seed: {
      subjectId: sub.id,
      themeId: th1.id,
      secondaryThemeId: th2.id,
      tensionId: tension.id,
      promptTypeId: promptTypeObj.id,
      scopeId: scope.id,
      stakeholderIds: stakeholders.map(function(s) { return s.id; }),
      targetLevel: targetLevel
    }
  };
}

// =============================================================================
// 13. FULLY RANDOMIZED TREE TOPIC
// =============================================================================

export function generateRandomTreeTopic(targetLevel, excludeSubjectId, rng, difficultyTier) {
  targetLevel      = targetLevel || 'C1';
  excludeSubjectId = excludeSubjectId || null;
  rng              = rng || Math.random;

  var tier = null;
  if (difficultyTier === 1 || difficultyTier === '1' || difficultyTier === 'easy') tier = 1;
  else if (difficultyTier === 2 || difficultyTier === '2' || difficultyTier === 'medium') tier = 2;
  else if (difficultyTier === 3 || difficultyTier === '3' || difficultyTier === 'hard') tier = 3;

  var profile = DIFFICULTY_PROFILES[targetLevel] || DIFFICULTY_PROFILES.C1;
  var preferredComplexities = tier ? [tier] : (profile.preferredComplexities || [1, 2, 3]);

  // Step 1: pick subject (prefer selected tier or complexity appropriate for level, exclude last)
  var eligibleSubjects = MAIN_SUBJECTS.filter(function(s) {
    var notExcluded = s.id !== excludeSubjectId;
    return tier ? (notExcluded && s.complexity === tier) : notExcluded;
  });
  if (eligibleSubjects.length === 0) {
    eligibleSubjects = MAIN_SUBJECTS.filter(function(s) { return s.id !== excludeSubjectId; });
  }
  var subject = _weightedPick(
    eligibleSubjects,
    function(s) { return preferredComplexities.includes(s.complexity) ? 2 : 1; },
    rng
  );

  // Step 2: pick primary theme (cooldown-aware, compatible)
  var compatibleThemeIds = subject.compatibleThemes;
  var eligibleThemes = SUB_THEMES.filter(function(t) {
    var match = compatibleThemeIds.includes(t.id) && !_isOnCooldown(subject.id, t.id);
    return tier ? (match && t.complexity === tier) : match;
  });
  if (eligibleThemes.length === 0) {
    eligibleThemes = SUB_THEMES.filter(function(t) {
      return compatibleThemeIds.includes(t.id) && !_isOnCooldown(subject.id, t.id);
    });
  }
  if (eligibleThemes.length === 0) {
    eligibleThemes = SUB_THEMES.filter(function(t) { return compatibleThemeIds.includes(t.id); });
  }

  var C2_PREFERRED = { 'ethics': true, 'oversight': true, 'identity': true,
    'truth-integrity': true, 'morality': true, 'autonomy': true };
  var primaryTheme = _weightedPick(
    eligibleThemes,
    function(t) {
      var levelBoost = (targetLevel === 'C2' && C2_PREFERRED[t.id]) ? 2 : 1;
      var complexBoost = preferredComplexities.includes(t.complexity) ? 2 : 1;
      return levelBoost * complexBoost;
    },
    rng
  );
  _markUsed(subject.id, primaryTheme.id);

  // Step 3: secondary theme
  var secondaryCandidates = SUB_THEMES.filter(function(t) {
    var match = t.id !== primaryTheme.id && compatibleThemeIds.includes(t.id);
    return tier ? (match && t.complexity === tier) : match;
  });
  if (secondaryCandidates.length === 0) {
    secondaryCandidates = SUB_THEMES.filter(function(t) {
      return t.id !== primaryTheme.id && compatibleThemeIds.includes(t.id);
    });
  }
  var secondaryTheme = secondaryCandidates.length > 0
    ? _pick(secondaryCandidates, rng)
    : _pick(SUB_THEMES.filter(function(t) { return t.id !== primaryTheme.id; }), rng);

  // Step 4: tension compatible with primary theme
  var compatibleTensions = TENSIONS.filter(function(t) {
    return t.compatibleThemes.includes(primaryTheme.id);
  });
  var tension = compatibleTensions.length > 0 ? _pick(compatibleTensions, rng) : _pick(TENSIONS, rng);

  // Step 5: scope
  var scope = _pick(SCOPES, rng);

  // Step 6: stakeholders (2-3 distinct)
  var shuffled = STAKEHOLDERS.slice().sort(function() { return rng() - 0.5; });
  var stakeholders = shuffled.slice(0, 1 + Math.floor(rng() * 2) + 1);

  // Step 7: prompt type (weighted by difficulty profile)
  var preferredSet = {};
  profile.preferredPromptTypes.forEach(function(id) { preferredSet[id] = true; });
  var promptType = _weightedPick(
    PROMPT_TYPES,
    function(pt) { return preferredSet[pt.id] ? 2 : 1; },
    rng
  );

  var topic = generateTopicFromTree(subject, primaryTheme, secondaryTheme, targetLevel, {
    tension: tension, scope: scope, stakeholders: stakeholders, promptType: promptType
  });

  var validation = validateTopic(topic);
  if (!validation.valid) {
    console.warn('[FluentEdge] Topic validation warnings:', validation.errors);
  }

  return topic;
}

// =============================================================================
// 14. LEGACY SEED TOPICS (backward compat)
// =============================================================================

export const TOPICS = [
  generateTopicFromTree(
    MAIN_SUBJECTS.find(function(s) { return s.id === 'artificial-intelligence'; }),
    SUB_THEMES.find(function(t) { return t.id === 'autonomy'; }),
    SUB_THEMES.find(function(t) { return t.id === 'ethics'; }),
    'C1',
    {
      id: 'ai-ethics-autonomy',
      customTitle: 'Artificial Intelligence, Moral Agency & Societal Autonomy',
      customDirective: 'Write an academic essay examining the influence of Artificial Intelligence on morality and societal autonomy. Discuss whether algorithmic delegation threatens human agency.',
      tension: TENSIONS.find(function(t) { return t.id === 'convenience-vs-independence'; }),
      scope: SCOPES.find(function(s) { return s.id === 'individual'; }),
      stakeholders: [STAKEHOLDERS[0], STAKEHOLDERS[2]]
    }
  ),
  generateTopicFromTree(
    MAIN_SUBJECTS.find(function(s) { return s.id === 'algorithms'; }),
    SUB_THEMES.find(function(t) { return t.id === 'addiction'; }),
    SUB_THEMES.find(function(t) { return t.id === 'governance'; }),
    'C1',
    {
      id: 'algorithms-social-media-addiction',
      customTitle: 'Algorithmic Systems: Behavioural Dependency and Institutional Governance',
      customDirective: 'Evaluate the effects of algorithmic recommendation architectures on behavioural addiction, and assess the adequacy of current regulatory frameworks.',
      tension: TENSIONS.find(function(t) { return t.id === 'innovation-vs-regulation'; }),
      scope: SCOPES.find(function(s) { return s.id === 'national'; }),
      stakeholders: [STAKEHOLDERS[2], STAKEHOLDERS[1]]
    }
  ),
  generateTopicFromTree(
    MAIN_SUBJECTS.find(function(s) { return s.id === 'epistemic-authority'; }),
    SUB_THEMES.find(function(t) { return t.id === 'truth-integrity'; }),
    SUB_THEMES.find(function(t) { return t.id === 'governance'; }),
    'C2',
    {
      id: 'epistemic-authority-truth',
      customTitle: 'Epistemic Authority, Algorithmic Truth & Post-Empirical Discourse',
      customDirective: 'Deliver a rigorous discursive critique evaluating how the fragmentation of epistemic authority destabilises democratic consensus and discursive integrity.',
      tension: TENSIONS.find(function(t) { return t.id === 'transparency-vs-privacy'; }) || TENSIONS[0],
      scope: SCOPES.find(function(s) { return s.id === 'global'; }) || SCOPES[0],
      stakeholders: [STAKEHOLDERS[1], STAKEHOLDERS[3]]
    }
  ),
  generateTopicFromTree(
    MAIN_SUBJECTS.find(function(s) { return s.id === 'transhumanism'; }),
    SUB_THEMES.find(function(t) { return t.id === 'identity'; }),
    SUB_THEMES.find(function(t) { return t.id === 'ethics'; }),
    'C2',
    {
      id: 'biotech-transhumanism-ethics',
      customTitle: 'Biotechnological Enhancement, Transhumanism & Existential Ethics',
      customDirective: 'Synthesise competing philosophical arguments regarding whether transhumanist augmentation preserves or dismantles human identity and existential ethics.',
      tension: TENSIONS.find(function(t) { return t.id === 'human-vs-machine'; }) || TENSIONS[0],
      scope: SCOPES.find(function(s) { return s.id === 'global'; }) || SCOPES[0],
      stakeholders: [STAKEHOLDERS[0], STAKEHOLDERS[4]]
    }
  )
];

// =============================================================================
// 15. CEFR DESCRIPTORS
// =============================================================================

export const CEFR_DESCRIPTORS = {
  C2: {
    band: 'Band 5 (C2 - Mastery)',
    minScore: 85,
    summary: 'Exceeds C1 requirements. Demonstrates effortless command of complex syntax, nuanced academic register, sophisticated idiomatic collocations, and masterful cohesion.',
    badgeClass: 'badge-c2'
  },
  C1: {
    band: 'Band 4 (Estimated C1 Level)',
    minScore: 70,
    summary: 'Meets full C1 standard. Sustained formal academic register, flexible use of complex structures (inversions, clefts), precise lexical choice, clear paragraph architecture.',
    badgeClass: 'badge-c1'
  },
  B2: {
    band: 'Band 2-3 (B2 - Vantage / Upper-Intermediate)',
    minScore: 50,
    summary: 'Competent communication, but lacks sufficient C1 syntactic complexity, range of academic collocations, or sustained formal register.',
    badgeClass: 'badge-b2'
  },
  B1: {
    band: 'Band 1 (B1 - Threshold)',
    minScore: 0,
    summary: 'Significantly below C1 standard. Repetitive vocabulary, basic sentence structures, and lack of advanced cohesive linkers.',
    badgeClass: 'badge-b1'
  }
};
