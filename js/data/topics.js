/**
 * FluentEdge — C1/C2 Topic-Generation Engine
 *
 * Architecture (Phases 2–8):
 *   SUBJECT x THEME x TENSION x PARAMETERS x PROMPT_TYPE -> WRITING TASK
 *
 * Design principle: Build a controlled system that generates coherent questions,
 * not a database of pre-written ones.
 *
 * Combinatorial space (approximate):
 *   20 subjects x 18 themes x 12 tensions x 4 scopes x 7 stakeholder groups
 *   x 6 prompt types x 2 difficulty profiles = tens of thousands of valid tasks.
 */

// =============================================================================
// 1. SUBJECTS (20 academic domains)
// =============================================================================

export const MAIN_SUBJECTS = [
  {
    id: 'artificial-intelligence',
    name: 'Artificial Intelligence',
    shortName: 'AI',
    domain: 'Technology & Society',
    // Themes that pair most strongly with this subject (IDs from SUB_THEMES)
    compatibleThemes: ['autonomy', 'ethics', 'oversight', 'equity', 'identity', 'corporate-power', 'governance', 'psychological-health', 'economics']
  },
  {
    id: 'algorithms',
    name: 'Algorithmic & Automated Systems',
    shortName: 'Algorithms',
    domain: 'Computer Science & Society',
    compatibleThemes: ['oversight', 'ethics', 'equity', 'governance', 'corporate-power', 'psychological-health', 'addiction', 'truth-integrity', 'civil-liberties']
  },
  {
    id: 'biotechnology',
    name: 'Biotechnology & Genetic Engineering',
    shortName: 'Biotechnology',
    domain: 'Bioethics & Medicine',
    compatibleThemes: ['ethics', 'equity', 'identity', 'autonomy', 'governance', 'intergenerational-justice', 'corporate-power', 'oversight']
  },
  {
    id: 'mass-surveillance',
    name: 'Mass Surveillance & Digital Privacy',
    shortName: 'Surveillance',
    domain: 'Civil Liberties & Politics',
    compatibleThemes: ['civil-liberties', 'autonomy', 'governance', 'oversight', 'trust', 'ethics', 'corporate-power', 'truth-integrity']
  },
  {
    id: 'climate-transition',
    name: 'Climate Transition & Renewable Energy',
    shortName: 'Climate Policy',
    domain: 'Ecology & Global Governance',
    compatibleThemes: ['intergenerational-justice', 'governance', 'equity', 'corporate-power', 'economics', 'oversight', 'environment']
  },
  {
    id: 'sustainable-urbanism',
    name: 'Sustainable Megacities & Urbanism',
    shortName: 'Urbanism',
    domain: 'Architecture & Sociology',
    compatibleThemes: ['environment', 'equity', 'governance', 'economics', 'intergenerational-justice', 'identity', 'psychological-health']
  },
  {
    id: 'higher-education',
    name: 'Higher Education & Academic Commodification',
    shortName: 'Academia',
    domain: 'Education & Economics',
    compatibleThemes: ['equity', 'corporate-power', 'economics', 'autonomy', 'truth-integrity', 'identity', 'governance']
  },
  {
    id: 'globalization',
    name: 'Globalization & Cultural Identity',
    shortName: 'Globalization',
    domain: 'Geopolitics & Anthropology',
    compatibleThemes: ['cultural-preservation', 'identity', 'equity', 'governance', 'economics', 'truth-integrity', 'intergenerational-justice']
  },
  {
    id: 'workforce-automation',
    name: 'Workforce Automation & the Future of Labour',
    shortName: 'Automation',
    domain: 'Labour Economics & Policy',
    compatibleThemes: ['economics', 'equity', 'psychological-health', 'identity', 'governance', 'corporate-power', 'autonomy']
  },
  {
    id: 'neurotechnology',
    name: 'Neurotechnology & Cognitive Enhancement',
    shortName: 'Neurotechnology',
    domain: 'Neuroscience & Philosophy',
    compatibleThemes: ['identity', 'ethics', 'equity', 'autonomy', 'corporate-power', 'oversight', 'psychological-health']
  },
  {
    id: 'media-monopolies',
    name: 'Media Monopolies & Disinformation',
    shortName: 'Media',
    domain: 'Media, Politics & Epistemology',
    compatibleThemes: ['truth-integrity', 'governance', 'corporate-power', 'civil-liberties', 'addiction', 'psychological-health', 'equity']
  },
  {
    id: 'circular-economy',
    name: 'The Circular Economy & Consumerism',
    shortName: 'Circular Economy',
    domain: 'Economics & Sustainability',
    compatibleThemes: ['environment', 'corporate-power', 'economics', 'equity', 'intergenerational-justice', 'governance', 'identity']
  },
  {
    id: 'space-exploration',
    name: 'Space Exploration & Resource Exploitation',
    shortName: 'Space Policy',
    domain: 'Science & International Law',
    compatibleThemes: ['governance', 'equity', 'intergenerational-justice', 'corporate-power', 'ethics', 'environment', 'oversight']
  },
  {
    id: 'demographic-shifts',
    name: 'Demographic Ageing & Social Welfare',
    shortName: 'Demographics',
    domain: 'Demography & Public Health',
    compatibleThemes: ['intergenerational-justice', 'equity', 'governance', 'economics', 'identity', 'psychological-health', 'autonomy']
  },
  {
    id: 'epistemic-authority',
    name: 'Epistemic Authority & Scientific Consensus',
    shortName: 'Epistemology',
    domain: 'Philosophy of Science',
    compatibleThemes: ['truth-integrity', 'governance', 'trust', 'oversight', 'civil-liberties', 'identity', 'ethics']
  },
  {
    id: 'social-platforms',
    name: 'Social Media Architectures & Public Discourse',
    shortName: 'Social Platforms',
    domain: 'Digital Sociology',
    compatibleThemes: ['addiction', 'psychological-health', 'truth-integrity', 'governance', 'civil-liberties', 'corporate-power', 'identity', 'equity']
  },
  {
    id: 'autonomous-weapons',
    name: 'Autonomous Weaponry & Modern Warfare',
    shortName: 'Autonomous Weapons',
    domain: 'Military Ethics & Geopolitics',
    compatibleThemes: ['ethics', 'governance', 'oversight', 'autonomy', 'intergenerational-justice', 'civil-liberties', 'equity']
  },
  {
    id: 'synthetic-biology',
    name: 'Synthetic Biology & Ecological Intervention',
    shortName: 'Synthetic Biology',
    domain: 'Genetics & Ecology',
    compatibleThemes: ['environment', 'ethics', 'intergenerational-justice', 'oversight', 'corporate-power', 'equity', 'governance']
  },
  {
    id: 'financialization',
    name: 'Financialization & Global Wealth Disparity',
    shortName: 'Financial Markets',
    domain: 'Macroeconomics & Social Justice',
    compatibleThemes: ['equity', 'governance', 'corporate-power', 'economics', 'civil-liberties', 'intergenerational-justice', 'oversight']
  },
  {
    id: 'transhumanism',
    name: 'Transhumanism & Human Augmentation',
    shortName: 'Transhumanism',
    domain: 'Philosophy & Future Studies',
    compatibleThemes: ['identity', 'ethics', 'equity', 'autonomy', 'governance', 'corporate-power', 'intergenerational-justice']
  }
];

// =============================================================================
// 2. ANALYTICAL LENSES / THEMES (18 universal lenses)
// =============================================================================

export const SUB_THEMES = [
  {
    id: 'autonomy',
    name: 'Individual Autonomy & Free Will',
    shortName: 'Autonomy',
    lens: 'To what degree does this subject constrain or enable personal agency?'
  },
  {
    id: 'ethics',
    name: 'Ethics & Accountability',
    shortName: 'Ethics',
    lens: 'What ethical obligations arise from this subject, and who is accountable?'
  },
  {
    id: 'equity',
    name: 'Social Equity & Systemic Inequality',
    shortName: 'Equity',
    lens: 'How does this subject distribute benefits and harms across social groups?'
  },
  {
    id: 'governance',
    name: 'Democratic Governance & Institutional Trust',
    shortName: 'Governance',
    lens: 'How does this subject challenge or reinforce democratic institutions?'
  },
  {
    id: 'economics',
    name: 'Economic Displacement & Labour',
    shortName: 'Economics',
    lens: 'What are the economic incentives, costs, and distributional effects?'
  },
  {
    id: 'identity',
    name: 'Human Identity & Existential Meaning',
    shortName: 'Identity',
    lens: 'Does this subject threaten or enrich what it means to be human?'
  },
  {
    id: 'environment',
    name: 'Environmental Resilience & Ecology',
    shortName: 'Environment',
    lens: 'What are the ecological consequences, short- and long-term?'
  },
  {
    id: 'intergenerational-justice',
    name: 'Intergenerational Justice & Future Heritage',
    shortName: 'Future Justice',
    lens: 'What obligations do present decisions impose on future generations?'
  },
  {
    id: 'oversight',
    name: 'Regulatory Oversight & Algorithmic Transparency',
    shortName: 'Oversight',
    lens: 'Who regulates this subject, and are current frameworks adequate?'
  },
  {
    id: 'cultural-preservation',
    name: 'Cultural Preservation & Linguistic Diversity',
    shortName: 'Cultural Heritage',
    lens: 'How does this subject affect minority cultures, languages, and local identities?'
  },
  {
    id: 'corporate-power',
    name: 'Corporate Power & Commercial Monopoly',
    shortName: 'Corporate Power',
    lens: 'To what extent do private commercial interests shape this subject?'
  },
  {
    id: 'psychological-health',
    name: 'Psychological Well-Being & Mental Health',
    shortName: 'Mental Well-Being',
    lens: 'What are the measurable effects on cognitive and emotional well-being?'
  },
  {
    id: 'civil-liberties',
    name: 'Civil Liberties & State Authority',
    shortName: 'Civil Liberties',
    lens: 'How does this subject affect freedom of expression, movement, or privacy?'
  },
  {
    id: 'truth-integrity',
    name: 'Epistemic Integrity & Post-Truth Discourse',
    shortName: 'Truth & Integrity',
    lens: 'How does this subject affect the ability to access reliable information?'
  },
  {
    id: 'addiction',
    name: 'Addiction & Behavioural Dependency',
    shortName: 'Behavioural Dependency',
    lens: 'Does this subject exploit or create compulsive patterns of behaviour?'
  },
  {
    id: 'trust',
    name: 'Public Trust & Institutional Legitimacy',
    shortName: 'Public Trust',
    lens: 'How does this subject affect citizens confidence in institutions?'
  },
  {
    id: 'morality',
    name: 'Morality & Moral Agency',
    shortName: 'Morality',
    lens: 'What moral responsibilities does this subject generate, and can agents bear them?'
  },
  {
    id: 'society',
    name: 'Society & Social Cohesion',
    shortName: 'Social Cohesion',
    lens: 'How does this subject strengthen or fragment collective social bonds?'
  }
];

// =============================================================================
// 3. TENSIONS (12 universal rhetorical fault-lines)
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
    compatibleThemes: ['autonomy', 'civil-liberties', 'governance', 'ethics', 'psychological-health', 'society']
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
    compatibleThemes: ['autonomy', 'addiction', 'identity', 'psychological-health']
  },
  {
    id: 'progress-vs-heritage',
    name: 'Progress vs Preservation',
    pole1: 'the imperatives of progress',
    pole2: 'the preservation of cultural and natural heritage',
    compatibleThemes: ['cultural-preservation', 'environment', 'identity', 'intergenerational-justice', 'society']
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
    compatibleThemes: ['environment', 'intergenerational-justice', 'economics', 'corporate-power', 'governance']
  },
  {
    id: 'national-vs-global',
    name: 'National Sovereignty vs Global Cooperation',
    pole1: 'national sovereignty and self-determination',
    pole2: 'the necessity of global governance frameworks',
    compatibleThemes: ['governance', 'equity', 'civil-liberties', 'intergenerational-justice', 'environment', 'oversight']
  },
  {
    id: 'access-vs-quality',
    name: 'Democratisation vs Dilution of Standards',
    pole1: 'democratising access',
    pole2: 'maintaining rigorous standards',
    compatibleThemes: ['equity', 'identity', 'truth-integrity', 'economics', 'cultural-preservation']
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
    compatibleThemes: ['intergenerational-justice', 'environment', 'ethics', 'governance', 'corporate-power']
  },
  {
    id: 'security-vs-freedom',
    name: 'Security vs Freedom',
    pole1: 'collective security and risk mitigation',
    pole2: 'the protection of individual freedoms',
    compatibleThemes: ['civil-liberties', 'governance', 'oversight', 'trust', 'autonomy']
  }
];

// =============================================================================
// 4. SCOPES (units of analysis)
// =============================================================================

export const SCOPES = [
  { id: 'individual', label: 'at the individual level',   framing: 'for individual citizens' },
  { id: 'national',  label: 'at the national level',      framing: 'for nation-states' },
  { id: 'global',    label: 'at the global level',        framing: 'for the international community' },
  { id: 'sectoral',  label: 'within a specific sector',   framing: 'across professional and institutional domains' }
];

// =============================================================================
// 5. STAKEHOLDER GROUPS
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
// 6. PROMPT TYPES (6 rhetorical modes with template generators)
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
// 7. DIFFICULTY PROFILES (C1 vs C2)
// =============================================================================

const DIFFICULTY_PROFILES = {
  C1: {
    cefrTarget: 'C1 / C2',
    type: 'C1/C2 Academic Essay',
    recommendedTime: '45 minutes',
    minWordCount: 220,
    maxWordCount: 260,
    preferredPromptTypes: ['to-what-extent', 'argue-for-or-against', 'discuss-both-sides'],
    maxKnowledgeDependency: 2
  },
  C2: {
    cefrTarget: 'C2',
    type: 'C2 Proficiency Discursive Essay',
    recommendedTime: '50 minutes',
    minWordCount: 280,
    maxWordCount: 320,
    preferredPromptTypes: ['evaluate', 'ethical-evaluation', 'comparative-analysis'],
    maxKnowledgeDependency: 3
  }
};

// =============================================================================
// 8. VALIDATION
// =============================================================================

/**
 * Returns true if a subject/theme combination is declared compatible.
 */
export function isCompatible(subject, theme) {
  if (!subject || !theme) return false;
  return subject.compatibleThemes.includes(theme.id);
}

/**
 * Returns true if a tension is compatible with the chosen primary theme.
 */
export function tensionCompatible(tension, theme) {
  if (!tension || !theme) return false;
  return tension.compatibleThemes.includes(theme.id);
}

/**
 * Validates a fully-assembled topic object.
 * @returns {{ valid: boolean, errors: string[] }}
 */
export function validateTopic(topic) {
  var errors = [];
  if (!topic.mainSubject)  errors.push('Missing mainSubject');
  if (!topic.subTheme1)    errors.push('Missing subTheme1');
  if (!topic.subTheme2)    errors.push('Missing subTheme2');
  if (!topic.tension)      errors.push('Missing tension');
  if (!topic.promptType)   errors.push('Missing promptType');
  if (!topic.scope)        errors.push('Missing scope');
  if (!topic.directive || topic.directive.trim().length < 20) errors.push('Directive too short');
  if (!topic.title || topic.title.trim().length < 5)         errors.push('Title too short');
  if (topic.mainSubject && topic.subTheme1 && !isCompatible(topic.mainSubject, topic.subTheme1)) {
    errors.push('Theme "' + topic.subTheme1.id + '" incompatible with subject "' + topic.mainSubject.id + '"');
  }
  if (topic.tension && topic.subTheme1 && !tensionCompatible(topic.tension, topic.subTheme1)) {
    errors.push('Tension "' + topic.tension.id + '" incompatible with theme "' + topic.subTheme1.id + '"');
  }
  return { valid: errors.length === 0, errors: errors };
}

// =============================================================================
// 9. COOLDOWN / REPETITION PREVENTION
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
// 10. INTERNAL HELPERS
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
// 11. CORE TOPIC GENERATOR (backward compatible)
// =============================================================================

/**
 * Builds a concrete topic from resolved entities. The returned object is
 * backward-compatible with all existing UI consumers.
 *
 * @param {string|Object} subject
 * @param {string|Object} primaryTheme   (subTheme1 in UI)
 * @param {string|Object} secondaryTheme (subTheme2 in UI)
 * @param {'C1'|'C2'}     targetLevel
 * @param {Object}        overrides      optional title/directive/tension/scope overrides
 */
export function generateTopicFromTree(subject, primaryTheme, secondaryTheme, targetLevel, overrides) {
  targetLevel = targetLevel || 'C1';
  overrides = overrides || {};

  // Resolve string IDs -> objects (backward compat)
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

  var scope = overrides.scope || SCOPES[1];
  var promptTypeObj = overrides.promptType || PROMPT_TYPES.find(function(p) { return p.id === 'to-what-extent'; });
  var stakeholders = overrides.stakeholders || [STAKEHOLDERS[0], STAKEHOLDERS[1]];
  var profile = DIFFICULTY_PROFILES[targetLevel] || DIFFICULTY_PROFILES.C1;

  var directive = overrides.customDirective
    || promptTypeObj.generate(sub, th1, tension, scope, stakeholders);

  var title = overrides.customTitle || _buildTitle(sub, th1, th2, tension);
  var id = overrides.id || ('tree-' + sub.id + '-' + th1.id + '-' + th2.id);

  return {
    // Core (backward-compatible) fields
    id: id,
    title: title,
    directive: directive,
    mainSubject: sub,
    subTheme1: th1,
    subTheme2: th2,
    category: sub.domain || 'Contemporary Academic Discourse',
    type: profile.type,
    cefrTarget: profile.cefrTarget,
    recommendedTime: profile.recommendedTime,
    // Extended metadata
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
// 12. FULLY RANDOMIZED TREE TOPIC (main public API)
// =============================================================================

/**
 * Generates a fully randomized, validated, cooldown-aware topic.
 *
 * @param {'C1'|'C2'}   targetLevel
 * @param {string|null} excludeSubjectId  prevents same subject two draws in a row
 * @param {Function}    [rng]             injectable RNG — pass a seeded function for deterministic tests
 * @returns {Object} topic
 */
export function generateRandomTreeTopic(targetLevel, excludeSubjectId, rng) {
  targetLevel = targetLevel || 'C1';
  excludeSubjectId = excludeSubjectId || null;
  rng = rng || Math.random;

  var profile = DIFFICULTY_PROFILES[targetLevel] || DIFFICULTY_PROFILES.C1;

  // Step 1: pick subject (never repeat the immediately previous one)
  var eligibleSubjects = MAIN_SUBJECTS;
  if (excludeSubjectId && MAIN_SUBJECTS.length > 1) {
    eligibleSubjects = MAIN_SUBJECTS.filter(function(s) { return s.id !== excludeSubjectId; });
  }
  var subject = _pick(eligibleSubjects, rng);

  // Step 2: pick a compatible primary theme (cooldown-aware)
  var compatibleThemeIds = subject.compatibleThemes;
  var eligibleThemes = SUB_THEMES.filter(function(t) {
    return compatibleThemeIds.includes(t.id) && !_isOnCooldown(subject.id, t.id);
  });
  if (eligibleThemes.length === 0) {
    // All themes on cooldown — allow any compatible theme (soft reset)
    eligibleThemes = SUB_THEMES.filter(function(t) { return compatibleThemeIds.includes(t.id); });
  }

  // C2 upweights analytically deep themes for richer prompts
  var C2_PREFERRED = { 'ethics': true, 'oversight': true, 'identity': true, 'truth-integrity': true, 'morality': true, 'autonomy': true };
  var primaryTheme = _weightedPick(
    eligibleThemes,
    function(t) { return (targetLevel === 'C2' && C2_PREFERRED[t.id]) ? 2 : 1; },
    rng
  );
  _markUsed(subject.id, primaryTheme.id);

  // Step 3: secondary theme — different from primary, also compatible
  var secondaryCandidates = SUB_THEMES.filter(function(t) {
    return t.id !== primaryTheme.id && compatibleThemeIds.includes(t.id);
  });
  var secondaryTheme = secondaryCandidates.length > 0
    ? _pick(secondaryCandidates, rng)
    : _pick(SUB_THEMES.filter(function(t) { return t.id !== primaryTheme.id; }), rng);

  // Step 4: pick a tension compatible with primary theme
  var compatibleTensions = TENSIONS.filter(function(t) {
    return t.compatibleThemes.includes(primaryTheme.id);
  });
  var tension = compatibleTensions.length > 0 ? _pick(compatibleTensions, rng) : _pick(TENSIONS, rng);

  // Step 5: pick scope
  var scope = _pick(SCOPES, rng);

  // Step 6: pick 2-3 distinct stakeholders
  var shuffled = STAKEHOLDERS.slice().sort(function() { return rng() - 0.5; });
  var count = 1 + Math.floor(rng() * 2); // yields 1 or 2, so slice(0, 2 or 3)
  var stakeholders = shuffled.slice(0, count + 1);

  // Step 7: pick prompt type (weighted by difficulty profile)
  var preferredSet = {};
  profile.preferredPromptTypes.forEach(function(id) { preferredSet[id] = true; });
  var promptType = _weightedPick(
    PROMPT_TYPES,
    function(pt) { return preferredSet[pt.id] ? 2 : 1; },
    rng
  );

  // Step 8: assemble, validate, and return
  var topic = generateTopicFromTree(subject, primaryTheme, secondaryTheme, targetLevel, {
    tension: tension,
    scope: scope,
    stakeholders: stakeholders,
    promptType: promptType
  });

  var validation = validateTopic(topic);
  if (!validation.valid) {
    console.warn('[FluentEdge] Topic validation warnings:', validation.errors);
  }

  return topic;
}

// =============================================================================
// 13. LEGACY SEEDED TOPIC BANK (initial display state — backward compat)
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
      stakeholders: [STAKEHOLDERS.find(function(s) { return s.id === 'individuals'; }), STAKEHOLDERS.find(function(s) { return s.id === 'corporations'; })]
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
      stakeholders: [STAKEHOLDERS.find(function(s) { return s.id === 'corporations'; }), STAKEHOLDERS.find(function(s) { return s.id === 'governments'; })]
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
      tension: TENSIONS.find(function(t) { return t.id === 'transparency-vs-privacy'; }),
      scope: SCOPES.find(function(s) { return s.id === 'global'; }),
      stakeholders: [STAKEHOLDERS.find(function(s) { return s.id === 'governments'; }), STAKEHOLDERS.find(function(s) { return s.id === 'civil-society'; })]
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
      tension: TENSIONS.find(function(t) { return t.id === 'human-vs-machine'; }),
      scope: SCOPES.find(function(s) { return s.id === 'global'; }),
      stakeholders: [STAKEHOLDERS.find(function(s) { return s.id === 'individuals'; }), STAKEHOLDERS.find(function(s) { return s.id === 'academia'; })]
    }
  )
];

// =============================================================================
// 14. CEFR DESCRIPTORS (unchanged — used by evaluator UI)
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
    summary: 'Competent communication, but lacks sufficient C1 syntactic complexity, range of academic collocations, or sustained formal register. Needs revision before progressing to speaking practice.',
    badgeClass: 'badge-b2'
  },
  B1: {
    band: 'Band 1 (B1 - Threshold)',
    minScore: 0,
    summary: 'Significantly below C1 standard. Repetitive vocabulary, basic sentence structures, and lack of advanced cohesive linkers. Comprehensive rewrite required.',
    badgeClass: 'badge-b1'
  }
};
