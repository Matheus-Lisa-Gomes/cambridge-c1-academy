/**
 * Cambridge C1+ Academy - Standalone Unified Bundle
 * Works directly on file:// as well as localhost http://
 */

(function() {
  'use strict';

  // ==========================================
  // 1. TOPICS & CEFR DATA
  // ==========================================
/**
 * Cambridge C1 (Advanced) & C2 (Proficiency) Topics and Target Vocabulary
 * Structured according to official Cambridge English assessment specifications.
 */
const CAMBRIDGE_TOPICS = [
  {
    id: "ai-ethics-autonomy",
    title: "Artificial Intelligence, Moral Agency & Societal Autonomy",
    category: "Technology & Ethics",
    type: "Cambridge Part 1 Essay",
    cefrTarget: "C1 / C2",
    recommendedTime: "45 minutes",
    prompt: {
      context: "Your class has attended a panel discussion on the rapid integration of autonomous artificial intelligence systems in professional and ethical decision-making.",
      points: [
        "The displacement of human moral accountability in high-stakes decisions",
        "The socio-economic implications of algorithmic workplace automation"
      ],
      task: "Write an essay discussing both points from your notes. You should explain which point is more pressing, giving reasons in support of your opinion. You may make use of the points, but should use your own words as far as possible."
    },
    targetVocabulary: [
      {
        word: "paramount",
        ipa: "/ˈpær.ə.maʊnt/",
        pos: "adjective",
        definition: "More important than anything else; supreme.",
        collocation: "of paramount importance",
        example: "Maintaining ethical human oversight is of paramount importance.",
        stems: ["paramount"]
      },
      {
        word: "ubiquitous",
        ipa: "/juːˈbɪk.wɪ.təs/",
        pos: "adjective",
        definition: "Present, appearing, or found everywhere.",
        collocation: "ubiquitous adoption",
        example: "The ubiquitous deployment of algorithms alters social dynamics.",
        stems: ["ubiquitous", "ubiquity", "ubiquitously"]
      },
      {
        word: "mitigate",
        ipa: "/ˈmɪt.ɪ.ɡeɪt/",
        pos: "verb",
        definition: "Make something bad less severe, serious, or painful.",
        collocation: "mitigate systemic risks",
        example: "Robust regulatory frameworks are essential to mitigate unintended fallout.",
        stems: ["mitigate", "mitigated", "mitigating", "mitigation", "mitigates"]
      },
      {
        word: "unprecedented",
        ipa: "/ʌnˈpres.ɪ.den.tɪd/",
        pos: "adjective",
        definition: "Never done or known before.",
        collocation: "unprecedented acceleration",
        example: "We are witnessing an unprecedented paradigm shift.",
        stems: ["unprecedented", "unprecedentedly"]
      },
      {
        word: "delineate",
        ipa: "/dɪˈlɪn.i.eɪt/",
        pos: "verb",
        definition: "Describe or portray something precisely.",
        collocation: "clearly delineate boundaries",
        example: "Legislators must delineate the boundaries between algorithmic aid and absolute autonomy.",
        stems: ["delineate", "delineated", "delineating", "delineation", "delineates"]
      },
      {
        word: "catalyst",
        ipa: "/ˈkæt.əl.ɪst/",
        pos: "noun",
        definition: "A person or thing that precipitates an event or change.",
        collocation: "catalyst for transformation",
        example: "Autonomous technologies act as a catalyst for industrial upheaval.",
        stems: ["catalyst", "catalysts", "catalytic"]
      },
      {
        word: "disconcerting",
        ipa: "/ˌdɪs.kənˈsɜː.tɪŋ/",
        pos: "adjective",
        definition: "Causing one to feel unsettled, confused, or worried.",
        collocation: "disconcerting prospect",
        example: "It is a disconcerting reality that accountability can be diffused.",
        stems: ["disconcerting", "disconcertingly", "disconcert"]
      },
      {
        word: "inexorable",
        ipa: "/ɪnˈek.sər.ə.bəl/",
        pos: "adjective",
        definition: "Impossible to stop or prevent; relentless.",
        collocation: "inexorable march of progress",
        example: "Society must adapt to the inexorable proliferation of smart automation.",
        stems: ["inexorable", "inexorably"]
      }
    ],
    recommendedStructures: [
      {
        name: "Negative Inversion",
        pattern: "Seldom / Rarely / Under no circumstances + auxiliary + subject + verb",
        example: "Seldom has humanity confronted a technological dilemma of such magnitude."
      },
      {
        name: "Wh- / What Cleft Sentence",
        pattern: "What + subject + verb + is/was + complement",
        example: "What warrants urgent scrutiny is the abdication of ethical responsibility."
      },
      {
        name: "Passive Reporting Clause",
        pattern: "It is widely contended / purported / postulated that...",
        example: "It is widely contended that algorithmically driven decisions lack empathy."
      },
      {
        name: "Complex Concession Marker",
        pattern: "Be that as it may / Notwithstanding / Albeit",
        example: "Notwithstanding the productivity dividends, ethical repercussions cannot be disregarded."
      }
    ],
    sampleExcerpt: "Seldom has human ingenuity produced an instrument as transformative yet contentious as autonomous machine intelligence. While the ubiquitous integration of algorithmic computing promises unprecedented economic productivity, what remains of paramount concern is the inexorable dilution of human moral agency. It is widely contended that without stringent legislative benchmarks to delineate accountability, society risks delegating critical ethical adjudications to probabilistic models devoid of conscience."
  },
  {
    id: "sustainable-urbanism",
    title: "Sustainable Megacities & High-Density Urban Architecture",
    category: "Environment & Architecture",
    type: "Cambridge Part 1 Essay",
    cefrTarget: "C1 / C2",
    recommendedTime: "45 minutes",
    prompt: {
      context: "You have listened to a university symposium discussing how 21st-century metropolitan centres should balance ecological sustainability with rapid demographic expansion.",
      points: [
        "Revitalising municipal public transport infrastructure",
        "Mandating biophilic architectural designs and carbon-neutral standards"
      ],
      task: "Write an essay discussing both approaches. Explain which strategy delivers more enduring benefits for future generations, providing nuanced arguments."
    },
    targetVocabulary: [
      {
        word: "burgeoning",
        ipa: "/ˈbɜː.dʒən.ɪŋ/",
        pos: "adjective",
        definition: "Beginning to grow or increase rapidly; flourishing.",
        collocation: "burgeoning urban populace",
        example: "Accommodating a burgeoning urban population requires forward-looking municipal planning.",
        stems: ["burgeoning", "burgeon", "burgeoned"]
      },
      {
        word: "imperative",
        ipa: "/ɪmˈper.ə.tɪv/",
        pos: "noun/adjective",
        definition: "Of vital importance; an essential or urgent thing.",
        collocation: "ecological imperative",
        example: "Decarbonising transit systems has become an unequivocal moral imperative.",
        stems: ["imperative", "imperatively", "imperatives"]
      },
      {
        word: "detrimental",
        ipa: "/ˌdet.rɪˈmen.təl/",
        pos: "adjective",
        definition: "Tending to cause harm or damage.",
        collocation: "detrimental ramifications",
        example: "Unregulated suburban sprawl yields detrimental ramifications for local ecosystems.",
        stems: ["detrimental", "detrimentally", "detriment"]
      },
      {
        word: "harmonious",
        ipa: "/hɑːˈməʊ.ni.əs/",
        pos: "adjective",
        definition: "Forming a pleasing or consistent whole; in agreement.",
        collocation: "harmonious coexistence",
        example: "Planners strive for a harmonious balance between vertical density and green space.",
        stems: ["harmonious", "harmoniously", "harmony", "harmonize"]
      },
      {
        word: "reconfigure",
        ipa: "/ˌriː.kənˈfɪɡ.ər/",
        pos: "verb",
        definition: "Rearrange the elements or settings of something.",
        collocation: "reconfigure municipal layouts",
        example: "Cities must reconfigure their transport arteries to disincentivize private vehicles.",
        stems: ["reconfigure", "reconfigured", "reconfiguring", "reconfiguration"]
      },
      {
        word: "ubiquity",
        ipa: "/juːˈbɪk.wə.ti/",
        pos: "noun",
        definition: "The state of being everywhere at once.",
        collocation: "ubiquity of public transit",
        example: "The ubiquity of clean mobility options determines commuter compliance.",
        stems: ["ubiquity", "ubiquitous"]
      },
      {
        word: "ameliorate",
        ipa: "/əˈmiː.li.ə.reɪt/",
        pos: "verb",
        definition: "Make (something bad or unsatisfactory) better.",
        collocation: "ameliorate urban congestion",
        example: "Strategic light rail expansions significantly ameliorate peak-hour bottlenecks.",
        stems: ["ameliorate", "ameliorated", "ameliorating", "amelioration"]
      },
      {
        word: "judicious",
        ipa: "/dʒuːˈdɪʃ.əs/",
        pos: "adjective",
        definition: "Having, showing, or done with good judgement or sense.",
        collocation: "judicious resource allocation",
        example: "A judicious blend of retrofitting older structures and green building yields optimal results.",
        stems: ["judicious", "judiciously"]
      }
    ],
    recommendedStructures: [
      {
        name: "Conditionals with Inversion",
        pattern: "Were cities to implement... / Had authorities prioritized...",
        example: "Were municipal leaders to implement punitive carbon tolls, commuter habits would adjust precipitously."
      },
      {
        name: "It-Cleft Focus",
        pattern: "It is [focus] that [relative clause]",
        example: "It is through comprehensive infrastructure renewal that lasting environmental resilience is achieved."
      },
      {
        name: "Double Comparative",
        pattern: "The more... the greater / more...",
        example: "The more integrated public transit becomes, the less reliance citizens place upon private vehicles."
      },
      {
        name: "Sophisticated Participle Clause",
        pattern: "Having neglected... / Confronted with burgeoning demographics, planners...",
        example: "Confronted with burgeoning demographics, metropolitan planners can no longer defer structural reform."
      }
    ],
    sampleExcerpt: "Confronted with the escalating challenges of urban density, contemporary metropolises must address environmental sustainability with urgency. It is through the judicious modernization of public transit systems, rather than cosmetic architectural interventions, that cities can genuinely ameliorate carbon emissions. Were municipal authorities to reconfigure transit hubs into seamless green corridors, the reliance upon private transport would diminish considerably, cementing an enduring ecological legacy."
  },
  {
    id: "language-cultural-heritage",
    title: "Global Lingua Franca vs The Preservation of Indigenous Languages",
    category: "Culture, Linguistics & Society",
    type: "Cambridge Part 1 Essay",
    cefrTarget: "C1 / C2",
    recommendedTime: "45 minutes",
    prompt: {
      context: "You have participated in an academic debate on whether the global dominance of international languages inevitably erodes endangered regional languages and ancestral cultures.",
      points: [
        "The economic and collaborative benefits of universal linguistic cohesion",
        "The irreparable cultural and epistemological loss when an indigenous tongue expires"
      ],
      task: "Write an essay discussing both perspectives. Evaluate whether globalization and indigenous language conservation can coexist harmoniously, substantiating your stance."
    },
    targetVocabulary: [
      {
        word: "indispensable",
        ipa: "/ˌɪn.dɪˈspen.sə.bəl/",
        pos: "adjective",
        definition: "Absolutely necessary, essential, or requisite.",
        collocation: "indispensable asset",
        example: "A global lingua franca is indispensable for transnational academic discourse.",
        stems: ["indispensable", "indispensability", "indispensably"]
      },
      {
        word: "irretrievable",
        ipa: "/ˌɪr.ɪˈtriː.və.bəl/",
        pos: "adjective",
        definition: "Not able to be retrieved or put right; irreversible.",
        collocation: "irretrievable cultural loss",
        example: "The extinction of a vernacular dialect constitutes an irretrievable loss of heritage.",
        stems: ["irretrievable", "irretrievably"]
      },
      {
        word: "homogenisation",
        ipa: "/həˌmɒdʒ.ə.naɪˈzeɪ.ʃən/",
        pos: "noun",
        definition: "The process of making things uniform or similar.",
        collocation: "cultural homogenisation",
        example: "Critics caution against the creeping cultural homogenisation fostered by global media.",
        stems: ["homogenisation", "homogenization", "homogenise", "homogenize", "homogeneous"]
      },
      {
        word: "epistemology",
        ipa: "/ɪˌpɪs.tɪˈmɒl.ə.dʒi/",
        pos: "noun",
        definition: "The theory of knowledge, especially with regard to its methods and scope.",
        collocation: "ancestral epistemology",
        example: "Native idioms preserve unique epistemologies and ecological taxonomies.",
        stems: ["epistemology", "epistemological", "epistemologies"]
      },
      {
        word: "resurgence",
        ipa: "/rɪˈsɜː.dʒəns/",
        pos: "noun",
        definition: "An increase or revival after a period of little activity or popularity.",
        collocation: "fuel a resurgence",
        example: "Digital archiving initiatives have catalyzed a noticeable resurgence in regional tongues.",
        stems: ["resurgence", "resurgent"]
      },
      {
        word: "predominance",
        ipa: "/prɪˈdɒm.ɪ.nəns/",
        pos: "noun",
        definition: "The state or condition of being greater in number or having more power.",
        collocation: "undisputed predominance",
        example: "The predominance of English in commerce need not preclude linguistic bilingualism.",
        stems: ["predominance", "predominant", "predominantly"]
      },
      {
        word: "perpetuate",
        ipa: "/pəˈpetʃ.u.eɪt/",
        pos: "verb",
        definition: "Make (something, typically an undesirable situation) continue indefinitely.",
        collocation: "perpetuate oral folklore",
        example: "Community schools play a pivotal role in perpetuating endangered oral traditions.",
        stems: ["perpetuate", "perpetuated", "perpetuating", "perpetuation"]
      },
      {
        word: "symbiotic",
        ipa: "/ˌsɪm.baɪˈɒt.ɪk/",
        pos: "adjective",
        definition: "Involving interaction between two entities that is mutually advantageous.",
        collocation: "symbiotic relationship",
        example: "Global literacy and regional dialect conservation can establish a symbiotic equilibrium.",
        stems: ["symbiotic", "symbiotically", "symbiosis"]
      }
    ],
    recommendedStructures: [
      {
        name: "Not only... but also (Inversion)",
        pattern: "Not only does [subject] [verb], but it also...",
        example: "Not only does a native tongue encode centuries of folklore, but it also reflects distinct cognitive nuances."
      },
      {
        name: "Subjunctive / Formulaic Form",
        pattern: "Be it A or B... / It is essential that governments preserve...",
        example: "Be it through grassroots curricula or governmental endowments, revitalisation must remain prioritized."
      },
      {
        name: "Adcessive Conjunctions",
        pattern: "Inasmuch as... / For all that...",
        example: "Inasmuch as universal fluency accelerates international diplomacy, cultural roots must not be forsaken."
      },
      {
        name: "Negative Adverbial Fronting",
        pattern: "Under no circumstances should...",
        example: "Under no circumstances should the pursuit of economic uniformity sanction the demise of ancestral dialects."
      }
    ],
    sampleExcerpt: "Not only does an indigenous idiom represent a medium of everyday communication, but it also encapsulates centuries of ancestral epistemology. While the predominance of an international lingua franca is undeniably indispensable for multilateral enterprise, what must be resisted is the insidious homogenisation of human expression. Under no circumstances should globalization be treated as a zero-sum contest; rather, through digitized pedagogical platforms, minority languages can experience an enduring resurgence."
  },
  {
    id: "higher-education-commodification",
    title: "The Commodification of Academia & The Future of Tertiary Education",
    category: "Education & Sociology",
    type: "Cambridge Part 1 Essay",
    cefrTarget: "C1 / C2",
    recommendedTime: "45 minutes",
    prompt: {
      context: "You have attended a debate regarding whether universities should operate as vocational training providers tailored to market demands, or as autonomous sanctuaries for pure scholarly inquiry.",
      points: [
        "Aligning university curricula strictly with commercial employment trends",
        "Preserving philosophical, humanities and theoretical pure research disciplines"
      ],
      task: "Write an essay discussing both viewpoints. Argue which trajectory universities should prioritize to foster intellectual progress and societal prosperity."
    },
    targetVocabulary: [
      {
        word: "commodification",
        ipa: "/kəˌmɒd.ɪ.fɪˈkeɪ.ʃən/",
        pos: "noun",
        definition: "The transformation of goods, services, ideas and people into commodities or objects of trade.",
        collocation: "rampant commodification",
        example: "The rampant commodification of tertiary education reduces students to mere consumers.",
        stems: ["commodification", "commodify", "commodified"]
      },
      {
        word: "sanctuary",
        ipa: "/ˈsæŋk.tʃʊə.ri/",
        pos: "noun",
        definition: "A place of safety, refuge, or intellectual immunity.",
        collocation: "intellectual sanctuary",
        example: "Universities historically served as sanctuaries for uninhibited critical inquiry.",
        stems: ["sanctuary", "sanctuaries"]
      },
      {
        word: "pragmatism",
        ipa: "/ˈpræɡ.mə.tɪ.zəm/",
        pos: "noun",
        definition: "An approach that assesses the truth of meaning of theories in terms of the success of their practical application.",
        collocation: "economic pragmatism",
        example: "Educational policies frequently surrender to short-term economic pragmatism.",
        stems: ["pragmatism", "pragmatic", "pragmatically"]
      },
      {
        word: "myopic",
        ipa: "/maɪˈɒp.ɪk/",
        pos: "adjective",
        definition: "Lacking foresight or intellectual breadth; narrow-minded.",
        collocation: "myopic approach",
        example: "Defunding theoretical disciplines represents a dangerously myopic calculation.",
        stems: ["myopic", "myopically", "myopia"]
      },
      {
        word: "intrinsic",
        ipa: "/ɪnˈtrɪn.zɪk/",
        pos: "adjective",
        definition: "Belonging naturally; essential.",
        collocation: "intrinsic value",
        example: "Pure philosophical scholarship possesses an intrinsic value that defies metric quantification.",
        stems: ["intrinsic", "intrinsically"]
      },
      {
        word: "lucrative",
        ipa: "/ˈluː.krə.tɪv/",
        pos: "adjective",
        definition: "Producing a great deal of profit.",
        collocation: "lucrative career paths",
        example: "While technical degrees offer lucrative outcomes, holistic reasoning remains vital.",
        stems: ["lucrative", "lucratively"]
      },
      {
        word: "disseminate",
        ipa: "/dɪˈsem.ɪ.neɪt/",
        pos: "verb",
        definition: "Spread or disperse (something, especially information) widely.",
        collocation: "disseminate knowledge",
        example: "Academia must continue to disseminate impartial knowledge for the common good.",
        stems: ["disseminate", "disseminated", "disseminating", "dissemination"]
      },
      {
        word: "equilibrium",
        ipa: "/ˌek.wɪˈlɪb.ri.əm/",
        pos: "noun",
        definition: "A state in which opposing forces or influences are balanced.",
        collocation: "strike a delicate equilibrium",
        example: "Institutions must strike an equilibrium between corporate sponsorship and academic autonomy.",
        stems: ["equilibrium", "equilibria"]
      }
    ],
    recommendedStructures: [
      {
        name: "Fronted Correlative Comparison",
        pattern: "Hardly had / No sooner had... or Just as..., so too...",
        example: "Just as foundational science underpins medical breakthroughs, so too does philosophical inquiry sustain ethical governance."
      },
      {
        name: "Cleft with Prepositional Phrase",
        pattern: "It is within the realm of... that...",
        example: "It is within the realm of pure scholarship that transformative breakthroughs germinate."
      },
      {
        name: "Modal Perfect Speculation",
        pattern: "Had it not been for... / Might well have resulted in...",
        example: "Had it not been for unrestricted basic research, many technological keystones would never have materialized."
      },
      {
        name: "Concessive Inversion",
        pattern: "Much as one might sympathize with vocational goals, ...",
        example: "Much as one might understand vocational anxieties, gutting the humanities remains indefensible."
      }
    ],
    sampleExcerpt: "Much as one might sympathize with undergraduates seeking immediate vocational security, the rampant commodification of tertiary institutions poses an existential threat to intellectual discovery. It is within the unhurried sanctuary of theoretical scholarship that humanity’s most foundational ideas have historically germinated. To subordinate academia entirely to short-term market pragmatism is a myopic venture that compromises our collective capacity for critical introspection."
  },
  {
    id: "media-literacy-echo-chambers",
    title: "Algorithmic Echo Chambers, Disinformation & Modern Democracy",
    category: "Media, Politics & Psychology",
    type: "Cambridge Part 1 Essay",
    cefrTarget: "C1 / C2",
    recommendedTime: "45 minutes",
    prompt: {
      context: "You have listened to a panel discussion concerning how recommendation algorithms and social media polarization threaten rational democratic deliberation.",
      points: [
        "Implementing mandatory digital and media literacy in school curriculums",
        "Enforcing state and international antitrust regulations on digital monopolies"
      ],
      task: "Write an essay evaluating both remediation measures. State which method holds greater promise for safeguarding civil discourse, giving sound justification."
    },
    targetVocabulary: [
      {
        word: "insidious",
        ipa: "/ɪnˈsɪd.i.əs/",
        pos: "adjective",
        definition: "Proceeding in a gradual, subtle way, but with very harmful effects.",
        collocation: "insidious polarization",
        example: "The insidious distortion of public discourse undermines electoral integrity.",
        stems: ["insidious", "insidiously"]
      },
      {
        word: "polarization",
        ipa: "/ˌpəʊ.lə.raɪˈzeɪ.ʃən/",
        pos: "noun",
        definition: "Division into two sharply contrasting groups or sets of opinions.",
        collocation: "entrenched polarization",
        example: "Algorithmic feedback loops amplify entrenched social polarization.",
        stems: ["polarization", "polarise", "polarize", "polarized"]
      },
      {
        word: "discernment",
        ipa: "/dɪˈsɜːn.mənt/",
        pos: "noun",
        definition: "The ability to judge well and distinguish nuances.",
        collocation: "critical discernment",
        example: "Media literacy instills critical discernment among impressionable readers.",
        stems: ["discernment", "discern", "discerning"]
      },
      {
        word: "monopolistic",
        ipa: "/məˌnɒp.əlˈɪs.tɪk/",
        pos: "adjective",
        definition: "Relating to or having the characteristics of a monopoly.",
        collocation: "monopolistic hegemony",
        example: "A handful of tech conglomerates wield monopolistic control over information dissemination.",
        stems: ["monopolistic", "monopoly", "monopolize"]
      },
      {
        word: "pervasive",
        ipa: "/pəˈveɪ.sɪv/",
        pos: "adjective",
        definition: "Spreading widely throughout an area or a group of people.",
        collocation: "pervasive misinformation",
        example: "Combating pervasive misinformation requires multifaceted societal intervention.",
        stems: ["pervasive", "pervasiveness", "pervasively"]
      },
      {
        word: "curb",
        ipa: "/kɜːb/",
        pos: "verb",
        definition: "Restrain or keep in check.",
        collocation: "curb digital abuses",
        example: "Strict legislative statutes are indispensable to curb predatory data collection.",
        stems: ["curb", "curbed", "curbing", "curbs"]
      },
      {
        word: "corrosive",
        ipa: "/kəˈrəʊ.sɪv/",
        pos: "adjective",
        definition: "Tending to cause corrosion; damaging or weakening something gradually.",
        collocation: "corrosive effect",
        example: "Sensationalist clickbait exerts a corrosive influence upon civil civic debate.",
        stems: ["corrosive", "corrosively", "corrode"]
      },
      {
        word: "fortify",
        ipa: "/ˈfɔː.tɪ.faɪ/",
        pos: "verb",
        definition: "Strengthen mentally, morally, or structurally.",
        collocation: "fortify democratic institutions",
        example: "Empowering citizens with analytical skills helps fortify democratic structures.",
        stems: ["fortify", "fortified", "fortifying", "fortification"]
      }
    ],
    recommendedStructures: [
      {
        name: "Inversion with 'Only when / Only by'",
        pattern: "Only by [gerund] can / will [subject] [verb]",
        example: "Only by cultivating rigorous intellectual skepticism can citizens navigate pervasive digital disinformation."
      },
      {
        name: "Passive Modal Inversion",
        pattern: "Should regulations fail to materialize, ...",
        example: "Should legislative safeguards fail to materialize, public discourse will become ever more fragmented."
      },
      {
        name: "Pseudo-Cleft Focus",
        pattern: "The reason why... is that...",
        example: "The reason why regulatory intervention alone proves insufficient is that algorithmic models mutate continually."
      },
      {
        name: "Contrastive Subordinate Clause",
        pattern: "Whereas [clause A], [clause B]...",
        example: "Whereas legislative fines punish past transgressions, proactive pedagogical instruction inoculates future generations."
      }
    ],
    sampleExcerpt: "Only by cultivating deep critical discernment among consumers can society curb the corrosive repercussions of algorithmic echo chambers. While antitrust litigation aimed at curbing monopolistic tech titans is undoubtedly necessary, what proves far more transformative is pedagogical empowerment. Should educational curricula fail to adapt, citizens will remain susceptible to insidious manipulation, regardless of regulatory fines."
  },
  {
    id: "circular-economy-consumerism",
    title: "The Circular Economy vs Planned Obsolescence & Consumer Culture",
    category: "Economics & Sustainability",
    type: "Cambridge Part 1 Essay",
    cefrTarget: "C1 / C2",
    recommendedTime: "45 minutes",
    prompt: {
      context: "Your class attended a lecture analyzing modern industrial production and whether transition to a closed-loop zero-waste circular economy is feasible.",
      points: [
        "Enforcing stringent legal liability on corporations for planned product obsolescence",
        "Subsidizing circular recycling infrastructure and regenerative business models"
      ],
      task: "Write an essay discussing both approaches. Explain which mechanism offers the most impactful solution to decouple economic prosperity from resource depletion."
    },
    targetVocabulary: [
      {
        word: "obsolescence",
        ipa: "/ˌɒb.səˈles.əns/",
        pos: "noun",
        definition: "The process of becoming obsolete or out of date and no longer used.",
        collocation: "planned obsolescence",
        example: "Manufacturers deliberately engineer planned obsolescence to artificially sustain consumption.",
        stems: ["obsolescence", "obsolete"]
      },
      {
        word: "regenerative",
        ipa: "/rɪˈdʒen.ər.ə.tɪv/",
        pos: "adjective",
        definition: "Tending to or characterized by regeneration, renewal, or restoration.",
        collocation: "regenerative economic model",
        example: "Transitioning to regenerative agriculture prevents systemic topsoil depletion.",
        stems: ["regenerative", "regenerate", "regeneration"]
      },
      {
        word: "profligate",
        ipa: "/ˈprɒf.lɪ.ɡət/",
        pos: "adjective",
        definition: "Recklessly extravagant or wasteful in the use of resources.",
        collocation: "profligate consumption",
        example: "Linear industrial models encourage profligate resource exploitation.",
        stems: ["profligate", "profligately", "profligacy"]
      },
      {
        word: "decouple",
        ipa: "/diːˈkʌp.əl/",
        pos: "verb",
        definition: "Separate, disengage, or dissociate (something) from something else.",
        collocation: "decouple growth from emissions",
        example: "Modern policy must decouple GDP growth from ecological degradation.",
        stems: ["decouple", "decoupled", "decoupling"]
      },
      {
        word: "penalize",
        ipa: "/ˈpiː.nəl.aɪz/",
        pos: "verb",
        definition: "Subject to a penalty or disadvantage.",
        collocation: "penalize wasteful practices",
        example: "Tax schemes should penalize manufacturers of unrepairable hardware.",
        stems: ["penalize", "penalized", "penalizing", "penalty"]
      },
      {
        word: "ubiquitous",
        ipa: "/juːˈbɪk.wɪ.təs/",
        pos: "adjective",
        definition: "Present, appearing, or found everywhere.",
        collocation: "ubiquitous disposable culture",
        example: "Single-use plastics have become ubiquitous across global supply chains.",
        stems: ["ubiquitous", "ubiquity"]
      },
      {
        word: "tenable",
        ipa: "/ˈten.ə.bəl/",
        pos: "adjective",
        definition: "Able to be maintained or defended against attack or objection.",
        collocation: "scarcely tenable in the long run",
        example: "An extractive economic paradigm is no longer environmentally tenable.",
        stems: ["tenable", "untenable"]
      },
      {
        word: "paradigm",
        ipa: "/ˈpær.ə.daɪm/",
        pos: "noun",
        definition: "A typical example or pattern of something; a model.",
        collocation: "fundamental paradigm shift",
        example: "Embracing closed-loop manufacturing necessitates a fundamental paradigm shift.",
        stems: ["paradigm", "paradigms", "paradigmatic"]
      }
    ],
    recommendedStructures: [
      {
        name: "Inversion with 'Scarcely / Barely'",
        pattern: "Scarcely had [subject] [verb] when...",
        example: "Scarcely had industrialization modernized living standards when its environmental costs became manifest."
      },
      {
        name: "Complex Participle Clause",
        pattern: "Given the alarming rate of... / Having long incentivized waste, ...",
        example: "Having long incentivized consumer waste, governments must now enforce circularity."
      },
      {
        name: "Emphatic Auxiliary Do/Did",
        pattern: "[Subject] do/does indeed [verb]...",
        example: "Corporate penalties do indeed stimulate innovation when systematically enforced."
      },
      {
        name: "Conditional without 'If'",
        pattern: "Had governments enacted stricter standards, ...",
        example: "Had governments enacted stricter right-to-repair statutes earlier, e-waste mountains might have been avoided."
      }
    ],
    sampleExcerpt: "Scarcely can a linear economic model be deemed tenable in an era of acute ecological fragility. For decades, profligate corporate practices have relied upon planned obsolescence to artificially stimulate consumer turnover. What is urgently required is a paradigm shift toward a regenerative circular economy. Were legislators to penalize built-in product expiry while subsidizing repair infrastructure, businesses would rapidly decouple profitability from gratuitous resource depletion."
  },
  {
    id: "genetic-enhancement-human-future",
    title: "Genetic Enhancement, Human Evolution & Social Equality",
    category: "Science, Ethics & Society",
    type: "Cambridge Part 1 Essay",
    cefrTarget: "C1 / C2",
    recommendedTime: "45 minutes",
    prompt: {
      context: "Your class has attended a panel discussion on the rapid development of genetic technologies capable of preventing inherited diseases and potentially enhancing human abilities.",
      points: [
        "The ethical implications of using genetic technologies to enhance human capabilities",
        "The potential for unequal access to genetic enhancement to deepen existing social inequalities"
      ],
      task: "Write an essay discussing both points from your notes. You should explain which point is more pressing, giving reasons in support of your opinion. You may make use of the points, but should use your own words as far as possible."
    },
    targetVocabulary: [
      {
        word: "pervasive",
        ipa: "/pəˈveɪ.sɪv/",
        pos: "adjective",
        definition: "Existing or spreading widely throughout something.",
        collocation: "pervasive influence",
        example: "The pervasive influence of genetic technologies could fundamentally alter how society understands human potential.",
        stems: ["pervasive", "pervasively", "pervasiveness"]
      },
      {
        word: "hereditary",
        ipa: "/həˈred.ɪ.tər.i/",
        pos: "adjective",
        definition: "Passed genetically from parents to their children.",
        collocation: "hereditary condition",
        example: "Gene-editing technologies may eventually eliminate certain hereditary conditions before they can be passed to future generations.",
        stems: ["hereditary", "hereditarily"]
      },
      {
        word: "disparity",
        ipa: "/dɪˈspær.ə.ti/",
        pos: "noun",
        definition: "A significant difference between two or more things, especially in a way that is considered unfair.",
        collocation: "socio-economic disparity",
        example: "Unrestricted access to genetic enhancement could exacerbate existing socio-economic disparities.",
        stems: ["disparity", "disparities"]
      },
      {
        word: "contentious",
        ipa: "/kənˈten.ʃəs/",
        pos: "adjective",
        definition: "Likely to cause disagreement or controversy.",
        collocation: "contentious ethical issue",
        example: "The distinction between treating disease and enhancing ability remains a contentious ethical issue.",
        stems: ["contentious", "contentiously", "contentiousness"]
      },
      {
        word: "exacerbate",
        ipa: "/ɪɡˈzæs.ə.beɪt/",
        pos: "verb",
        definition: "To make a problem or negative situation worse.",
        collocation: "exacerbate inequality",
        example: "Commercially driven enhancement could exacerbate inequality if access remains restricted to affluent communities.",
        stems: ["exacerbate", "exacerbated", "exacerbating", "exacerbation", "exacerbates"]
      },
      {
        word: "imperative",
        ipa: "/ɪmˈper.ə.tɪv/",
        pos: "adjective",
        definition: "Extremely important or necessary.",
        collocation: "ethical imperative",
        example: "Establishing transparent regulatory standards is an ethical imperative as genetic technologies become more accessible.",
        stems: ["imperative", "imperatively"]
      },
      {
        word: "inadvertently",
        ipa: "/ˌɪn.ədˈvɜː.tənt.li/",
        pos: "adverb",
        definition: "Without intending to do so; accidentally.",
        collocation: "inadvertently reinforce",
        example: "Attempts to optimise human characteristics could inadvertently reinforce narrow definitions of normality.",
        stems: ["inadvertent", "inadvertently", "inadvertence"]
      },
      {
        word: "profound",
        ipa: "/prəˈfaʊnd/",
        pos: "adjective",
        definition: "Very great, intense, or having a significant effect.",
        collocation: "profound implications",
        example: "The ability to modify human traits could have profound implications for future generations.",
        stems: ["profound", "profoundly", "profundity"]
      }
    ],
    recommendedStructures: [
      {
        name: "Inverted Conditional",
        pattern: "Had / Were / Should + subject + past participle / adjective / verb + ...",
        example: "Were genetic enhancement to become commercially available, existing inequalities could be significantly intensified."
      },
      {
        name: "Not Only...But Also Inversion",
        pattern: "Not only + auxiliary + subject + verb, but + subject + also + verb",
        example: "Not only could genetic enhancement transform individual lives, but it could also redefine society's conception of equality."
      },
      {
        name: "Participle Clause",
        pattern: "Present / Past participle + main clause",
        example: "Driven primarily by commercial interests, genetic enhancement could develop in ways that society has not adequately anticipated."
      },
      {
        name: "Concessive Inversion",
        pattern: "Much as / Try as + subject + may/might + verb, ...",
        example: "Much as genetic intervention may alleviate human suffering, its long-term social consequences cannot be dismissed."
      }
    ],
    sampleExcerpt: "Were genetic enhancement to become widely accessible, its implications would extend far beyond the realm of individual choice. Not only could such technologies eliminate a range of hereditary conditions, but they could also inadvertently reinforce profound socio-economic disparities. Much as proponents may emphasise the therapeutic potential of genetic intervention, the prospect of enhancement becoming a privilege reserved for the affluent remains a contentious ethical concern."
  },
  {
    id: "four-day-workweek-productivity",
    title: "The Four-Day Workweek, Productivity & the Future of Employment",
    category: "Work & Society",
    type: "Cambridge Part 1 Essay",
    cefrTarget: "C1 / C2",
    recommendedTime: "45 minutes",
    prompt: {
      context: "Your class has attended a panel discussion on whether traditional working patterns remain appropriate in an economy increasingly focused on productivity, employee wellbeing and flexible employment.",
      points: [
        "The potential effects of shorter working weeks on productivity and organisational performance",
        "The implications of reduced working hours for employee wellbeing and social life"
      ],
      task: "Write an essay discussing both points from your notes. You should explain which point is more pressing, giving reasons in support of your opinion. You may make use of the points, but should use your own words as far as possible."
    },
    targetVocabulary: [
      {
        word: "productivity",
        ipa: "/ˌprɒd.ʌkˈtɪv.ə.ti/",
        pos: "noun",
        definition: "The rate at which goods or services are produced, or the efficiency with which work is performed.",
        collocation: "enhance productivity",
        example: "Advocates argue that a shorter working week could enhance productivity by reducing fatigue and improving concentration.",
        stems: ["productivity", "productive", "productively", "productiveness"]
      },
      {
        word: "recalibrate",
        ipa: "/ˌriːˈkæl.ɪ.breɪt/",
        pos: "verb",
        definition: "To adjust something carefully in order to make it more appropriate or effective.",
        collocation: "recalibrate expectations",
        example: "Employers may need to recalibrate expectations regarding how working time translates into meaningful output.",
        stems: ["recalibrate", "recalibrated", "recalibrating", "recalibration", "recalibrates"]
      },
      {
        word: "sustainable",
        ipa: "/səˈsteɪ.nə.bəl/",
        pos: "adjective",
        definition: "Able to continue over a long period without causing serious problems or exhaustion.",
        collocation: "sustainable working practices",
        example: "Companies are increasingly examining whether conventional working patterns constitute sustainable practices in the long term.",
        stems: ["sustainable", "sustainably", "sustainability"]
      },
      {
        word: "counterproductive",
        ipa: "/ˌkaʊn.tə.prəˈdʌk.tɪv/",
        pos: "adjective",
        definition: "Having the opposite effect to the one intended.",
        collocation: "counterproductive measure",
        example: "Excessive working hours may ultimately prove counterproductive by undermining concentration and employee motivation.",
        stems: ["counterproductive", "counterproductively", "counterproductiveness"]
      },
      {
        word: "remuneration",
        ipa: "/rɪˌmjuː.nəˈreɪ.ʃən/",
        pos: "noun",
        definition: "Payment or other financial compensation received for work.",
        collocation: "competitive remuneration",
        example: "A reduction in working hours raises difficult questions about remuneration and the value attributed to different forms of labour.",
        stems: ["remuneration", "remunerate", "remunerated", "remunerating"]
      },
      {
        word: "alleviate",
        ipa: "/əˈliː.vi.eɪt/",
        pos: "verb",
        definition: "To make a problem, difficulty or unpleasant situation less severe.",
        collocation: "alleviate workplace stress",
        example: "Greater flexibility could alleviate workplace stress while allowing employees to devote more time to their families.",
        stems: ["alleviate", "alleviated", "alleviating", "alleviation", "alleviates"]
      },
      {
        word: "feasibility",
        ipa: "/ˌfiː.zəˈbɪl.ə.ti/",
        pos: "noun",
        definition: "The degree to which something is possible or practical.",
        collocation: "assess the feasibility",
        example: "Before implementing a four-day week, organisations must assess its feasibility across different sectors and occupational roles.",
        stems: ["feasibility", "feasible", "feasibly"]
      },
      {
        word: "repercussion",
        ipa: "/ˌriː.pəˈkʌʃ.ən/",
        pos: "noun",
        definition: "An unintended or indirect consequence of an action or event.",
        collocation: "far-reaching repercussions",
        example: "A widespread reduction in working hours could have far-reaching repercussions for businesses, households and the wider economy.",
        stems: ["repercussion", "repercussions"]
      }
    ],
    recommendedStructures: [
      {
        name: "Inverted Conditional",
        pattern: "Were / Should + subject + verb, ...",
        example: "Were shorter working weeks to become the norm, employers would need to reconsider how productivity is measured."
      },
      {
        name: "Fronted Negative Adverbial",
        pattern: "Only + adverbial phrase + auxiliary + subject + verb",
        example: "Only by reassessing conventional assumptions about productivity can organisations determine whether fewer hours genuinely improve performance."
      },
      {
        name: "Reduced Relative Clause",
        pattern: "Noun + present/past participle phrase",
        example: "Employees working fewer hours may experience greater motivation and a stronger sense of control over their personal lives."
      },
      {
        name: "Concessive Clause",
        pattern: "However + adjective/adverb + subject + may/might + verb, ...",
        example: "However attractive a shorter working week may appear, its feasibility will inevitably vary between industries."
      }
    ],
    sampleExcerpt: "Only by reassessing deeply entrenched assumptions about productivity can employers determine whether long working hours genuinely translate into superior performance. However attractive a four-day working week may appear, its feasibility will inevitably vary between sectors, particularly where continuous staffing is indispensable. Nevertheless, should organisations succeed in maintaining output while reducing working hours, the repercussions could extend well beyond the workplace, potentially recalibrating society's expectations regarding the relationship between employment, remuneration and quality of life."
  },
  {
    id: "digital-privacy-surveillance",
    title: "Digital Privacy, Mass Surveillance & Personal Autonomy",
    category: "Technology & Society",
    type: "Cambridge Part 1 Essay",
    cefrTarget: "C1 / C2",
    recommendedTime: "45 minutes",
    prompt: {
      context: "Your class has attended a panel discussion on the growing collection of personal data by governments and technology companies and its implications for individual freedom in an increasingly connected society.",
      points: [
        "The benefits of large-scale data collection for security and the provision of personalised digital services",
        "The potential threat that pervasive surveillance poses to individual privacy and personal autonomy"
      ],
      task: "Write an essay discussing both points from your notes. You should explain which point is more pressing, giving reasons in support of your opinion. You may make use of the points, but should use your own words as far as possible."
    },
    targetVocabulary: [
      {
        word: "intrusive",
        ipa: "/ɪnˈtruː.sɪv/",
        pos: "adjective",
        definition: "Having an unwanted effect on someone's private life or activities.",
        collocation: "intrusive surveillance",
        example: "The widespread use of facial recognition has raised concerns about increasingly intrusive forms of surveillance.",
        stems: ["intrusive", "intrusively", "intrusiveness"]
      },
      {
        word: "pervasive",
        ipa: "/pəˈveɪ.sɪv/",
        pos: "adjective",
        definition: "Existing or spreading widely throughout something.",
        collocation: "pervasive monitoring",
        example: "The pervasive monitoring of online behaviour has made it increasingly difficult for individuals to remain anonymous.",
        stems: ["pervasive", "pervasively", "pervasiveness"]
      },
      {
        word: "consent",
        ipa: "/kənˈsent/",
        pos: "noun",
        definition: "Permission for something to happen or agreement to something being done.",
        collocation: "informed consent",
        example: "Users are frequently asked to provide consent without fully understanding how their personal information will be processed.",
        stems: ["consent", "consent", "consented", "consenting"]
      },
      {
        word: "anonymisation",
        ipa: "/ˌæn.ə.maɪˈzeɪ.ʃən/",
        pos: "noun",
        definition: "The process of removing or modifying information so that an individual cannot readily be identified.",
        collocation: "data anonymisation",
        example: "Effective data anonymisation can allow organisations to conduct research while reducing the risks associated with exposing personal information.",
        stems: ["anonymisation", "anonymise", "anonymised", "anonymising"]
      },
      {
        word: "encroachment",
        ipa: "/ɪnˈkrəʊtʃ.mənt/",
        pos: "noun",
        definition: "The gradual taking away of someone's rights, freedom or space.",
        collocation: "encroachment on privacy",
        example: "The gradual encroachment on digital privacy may go unnoticed when each individual technological development appears relatively harmless.",
        stems: ["encroachment", "encroach", "encroached", "encroaching"]
      },
      {
        word: "scrutiny",
        ipa: "/ˈskruː.tɪ.ni/",
        pos: "noun",
        definition: "Careful and detailed examination of something.",
        collocation: "under intense scrutiny",
        example: "Technology companies should be subject to greater scrutiny when handling sensitive personal information.",
        stems: ["scrutiny", "scrutinise", "scrutinised", "scrutinising", "scrutinises"]
      },
      {
        word: "disseminate",
        ipa: "/dɪˈsem.ɪ.neɪt/",
        pos: "verb",
        definition: "To spread information, ideas or something similar widely.",
        collocation: "disseminate personal information",
        example: "Once personal information has been collected, it can be difficult to control how widely it is disseminated.",
        stems: ["disseminate", "disseminated", "disseminating", "dissemination", "disseminates"]
      },
      {
        word: "impunity",
        ipa: "/ɪmˈpjuː.nə.ti/",
        pos: "noun",
        definition: "Freedom from punishment or negative consequences for doing something wrong.",
        collocation: "act with impunity",
        example: "Without meaningful regulatory oversight, organisations may be able to exploit personal data with relative impunity.",
        stems: ["impunity"]
      }
    ],
    recommendedStructures: [
      {
        name: "Inversion with Only",
        pattern: "Only + adverbial phrase + auxiliary + subject + verb",
        example: "Only through rigorous regulation can individuals retain meaningful control over their personal information."
      },
      {
        name: "Mixed Conditional",
        pattern: "If + past perfect, subject + would + base verb",
        example: "If citizens had understood the extent of data collection earlier, many might now demand substantially stricter safeguards."
      },
      {
        name: "Fronted Participle Clause",
        pattern: "Having + past participle, subject + main verb",
        example: "Having surrendered vast quantities of personal data, users may find it virtually impossible to reclaim control over their digital identities."
      },
      {
        name: "Concessive Inversion",
        pattern: "Much as + subject + may/might + verb, ...",
        example: "Much as mass data collection may improve the efficiency of digital services, its implications for individual autonomy cannot be overlooked."
      }
    ],
    sampleExcerpt: "Only through rigorous scrutiny can society determine whether the convenience afforded by pervasive data collection justifies its implications for individual privacy. Much as personalised digital services may enhance efficiency, the gradual encroachment upon personal autonomy is a disconcerting prospect, particularly when meaningful consent is difficult to obtain. Having surrendered vast quantities of personal information, individuals may ultimately find themselves unable to determine who can access it, how it is disseminated, or for what purposes it is subsequently employed."
  },
  {
    id: "failure-resilience-success",
    title: "Failure, Resilience & the Pursuit of Success",
    category: "Society & Personal Development",
    type: "Cambridge Part 1 Essay",
    cefrTarget: "C1 / C2",
    recommendedTime: "45 minutes",
    prompt: {
      context: "Your class has attended a discussion on the growing emphasis placed on achievement and success in contemporary society and whether failure should be regarded as an obstacle or as an essential part of personal development.",
      points: [
        "The role of failure in developing resilience and long-term personal growth",
        "The pressure to succeed and its influence on people's decisions and behaviour"
      ],
      task: "Write an essay discussing both points from your notes. You should explain which point is more pressing, giving reasons in support of your opinion. You may make use of the points, but should use your own words as far as possible."
    },
    targetVocabulary: [
      {
        word: "adversity",
        ipa: "/ədˈvɜː.sə.ti/",
        pos: "noun",
        definition: "A difficult or unpleasant situation that someone has to deal with.",
        collocation: "overcome adversity",
        example: "Learning to overcome adversity can equip individuals with the resilience required to cope with future challenges.",
        stems: ["adversity"]
      },
      {
        word: "setback",
        ipa: "/ˈset.bæk/",
        pos: "noun",
        definition: "A problem or difficulty that delays or prevents progress.",
        collocation: "temporary setback",
        example: "A temporary setback need not determine the eventual outcome of an individual's efforts.",
        stems: ["setback", "setbacks"]
      },
      {
        word: "resilience",
        ipa: "/rɪˈzɪl.i.əns/",
        pos: "noun",
        definition: "The ability to recover from difficulties and continue despite challenges.",
        collocation: "develop resilience",
        example: "Experiencing manageable difficulties during childhood may help individuals develop resilience later in life.",
        stems: ["resilience", "resilient", "resiliently"]
      },
      {
        word: "perseverance",
        ipa: "/ˌpɜː.sɪˈvɪə.rəns/",
        pos: "noun",
        definition: "Continued effort and determination despite difficulties or delays.",
        collocation: "demonstrate perseverance",
        example: "Long-term achievement often depends less on innate ability than on the perseverance to continue after repeated failures.",
        stems: ["perseverance", "persevere", "persevered", "persevering"]
      },
      {
        word: "expectation",
        ipa: "/ˌek.spekˈteɪ.ʃən/",
        pos: "noun",
        definition: "A belief that something will happen or that someone should behave in a particular way.",
        collocation: "societal expectations",
        example: "Unrealistic societal expectations can cause people to perceive ordinary setbacks as evidence of personal inadequacy.",
        stems: ["expectation", "expect", "expected", "expecting", "expectantly"]
      },
      {
        word: "adversely",
        ipa: "/ˈæd.vɜːs.li/",
        pos: "adverb",
        definition: "In a way that produces an unwanted or harmful effect.",
        collocation: "adversely affect",
        example: "Constant pressure to achieve may adversely affect people's willingness to take risks or pursue unfamiliar opportunities.",
        stems: ["adverse", "adversely", "adversity"]
      },
      {
        word: "formidable",
        ipa: "/ˈfɔː.mɪ.də.bəl/",
        pos: "adjective",
        definition: "Very difficult or impressive and therefore deserving serious consideration.",
        collocation: "formidable challenge",
        example: "What initially appears to be a formidable challenge can become a valuable learning experience.",
        stems: ["formidable", "formidably"]
      },
      {
        word: "self-perpetuating",
        ipa: "/ˌself.pəˈpetʃ.u.ə.tɪŋ/",
        pos: "adjective",
        definition: "Continuing or increasing because of its own effects, without needing an external cause.",
        collocation: "self-perpetuating cycle",
        example: "Fear of failure can create a self-perpetuating cycle in which people avoid challenging situations and consequently lose confidence.",
        stems: ["self-perpetuating", "self-perpetuate", "self-perpetuation"]
      }
    ],
    recommendedStructures: [
      {
        name: "Inverted Conditional",
        pattern: "Had + subject + past participle, subject + would/could/might + have + past participle",
        example: "Had every setback been interpreted as a definitive failure, many significant achievements would never have materialised."
      },
      {
        name: "Emphatic It-Cleft",
        pattern: "It is/was + emphasised element + that/who + clause",
        example: "It is often through confronting failure that individuals develop a realistic understanding of their own limitations."
      },
      {
        name: "Comparative Correlative",
        pattern: "The + comparative + ..., the + comparative + ...",
        example: "The more heavily success is emphasised, the more intimidating the prospect of failure may become."
      },
      {
        name: "Concessive Clause",
        pattern: "While / Although + subject + may/might + verb, ...",
        example: "While repeated failure may undermine confidence, it can also provide insights that success alone would never reveal."
      }
    ],
    sampleExcerpt: "The more heavily society equates achievement with personal worth, the more intimidating the prospect of failure becomes. Yet it is often through confronting adversity that individuals acquire the resilience required to navigate future challenges. While repeated setbacks may initially undermine confidence, they can also expose weaknesses that would otherwise remain unnoticed. Had failure invariably been regarded as evidence of inadequacy, many individuals might never have developed the perseverance necessary to overcome formidable obstacles."
  },
];
const CAMBRIDGE_CEFR_DESCRIPTORS = {
  C2: {
    band: "Band 5 (C2 - Mastery / CPE)",
    minScore: 85,
    summary: "Exceeds C1 requirements. Demonstrates effortless command of complex syntax, nuanced academic register, sophisticated idiomatic collocations, and masterful cohesion.",
    badgeClass: "badge-c2"
  },
  C1: {
    band: "Band 4 (C1 - Certified / CAE)",
    minScore: 70,
    summary: "Meets full Cambridge C1 standard. Sustained formal academic register, flexible use of complex structures (inversions, clefts), precise lexical choice, clear paragraph architecture.",
    badgeClass: "badge-c1"
  },
  B2: {
    band: "Band 2-3 (B2 - Vantage / Upper-Intermediate)",
    minScore: 50,
    summary: "Competent communication, but lacks sufficient C1 syntactic complexity, range of academic collocations, or sustained formal register. Needs revision before speaking certification.",
    badgeClass: "badge-b2"
  },
  B1: {
    band: "Band 1 (B1 - Threshold)",
    minScore: 0,
    summary: "Significantly below Cambridge C1. Repetitive vocabulary, basic sentence structures, and lack of advanced cohesive linkers. Comprehensive rewrite required.",
    badgeClass: "badge-b1"
  }
};


  // ==========================================
  // 2. C1/C2 EVALUATOR ENGINE
  // ==========================================
/**
 * Cambridge C1/C2 Text Assessment Engine
 * Evaluates written submissions according to official Cambridge English C1 Advanced (CAE)
 * and C2 Proficiency (CPE) assessment scales:
 * 1. Content (0-5)
 * 2. Communicative Achievement (0-5)
 * 3. Organisation (0-5)
 * 4. Language (0-5)
 */
// Advanced CEFR C1/C2 Academic Markers & Collocations
const ACADEMIC_C1_MARKERS = [
  "furthermore", "consequently", "nevertheless", "notwithstanding", "conversely",
  "inasmuch", "albeit", "predominantly", "manifestly", "unequivocally",
  "compelling", "scrutiny", "ramifications", "paradigm", "delineate",
  "substantiate", "corroborate", "imperative", "pivotal", "catalyst",
  "concomitant", "ubiquitous", "salient", "paramount", "myopic",
  "unprecedented", "inexorable", "disconcerting", "ameliorate", "tenable"
];

// Informal expressions penalized in Cambridge C1/C2 formal essays
const INFORMAL_PATTERNS = [
  /\b(gonna|wanna|kinda|sorta|dunno)\b/i,
  /\b(a lot of|lots of|tons of|heaps of)\b/i,
  /\b(kids|guys|cops|stuff|things)\b/i,
  /\b(can't|don't|won't|isn't|aren't|didn't|doesn't|haven't|hasn't|hadn't)\b/i // Contractions discouraged in formal Cambridge essays
];

// Complex C1/C2 Syntactic Patterns
const SYNTACTIC_PATTERNS = {
  negativeInversion: {
    name: "Negative / Limiting Inversion",
    description: "Seldom / Rarely / Under no circumstances / Not only... inversion",
    regex: /\b(seldom|rarely|scarcely|hardly|under no circumstances|on no account|in no way|at no time|little did|not only)\s+(did|does|do|had|have|has|is|was|were|can|could|should|will|would)\s+[a-z]+/i,
    weight: 1.2
  },
  cleftSentence: {
    name: "Cleft / Focus Structure",
    description: "What [clause] is/was... or It is/was [focus] that/who...",
    regex: /\b(what\s+[a-z\s]{3,25}\s+(is|was|remains|proves)|it\s+(is|was)\s+[a-z\s]{3,25}\s+(that|who|which))\b/i,
    weight: 1.0
  },
  passiveReporting: {
    name: "Passive Reporting Clause",
    description: "It is widely contended / maintained / believed / postulated that...",
    regex: /\bit\s+is\s+(widely|frequently|commonly|generally|often)?\s*(contended|maintained|argued|asserted|held|claimed|believed|acknowledged|postulated|purported|surmised)\s+that\b/i,
    weight: 1.0
  },
  invertedConditional: {
    name: "Inverted / Conditional without 'If'",
    description: "Were [subject] to... / Had [subject] [participle]... / Should [subject]...",
    regex: /\b(were\s+[a-z\s]{2,20}\s+to\s+[a-z]+|had\s+[a-z\s]{2,20}\s+[a-z]+ed|should\s+[a-z\s]{2,20}\s+[a-z]+)\b/i,
    weight: 1.1
  },
  complexConcession: {
    name: "Advanced Concession / Contrast Marker",
    description: "Notwithstanding, Albeit, Inasmuch as, Be that as it may",
    regex: /\b(notwithstanding\s+the|albeit\s+|inasmuch\s+as|be\s+that\s+as\s+it\s+may|for\s+all\s+that|much\s+as\s+[a-z]+)\b/i,
    weight: 0.9
  },
  participleClause: {
    name: "Fronted Participle / Gerund Clause",
    description: "Having considered... / Confronted with... / Bearing in mind...",
    regex: /^(having\s+[a-z]+ed|confronted\s+with|bearing\s+in\s+mind|given\s+the|judging\s+by)\s+[a-z\s,]+/im,
    weight: 0.8
  }
};

/**
 * Check if a target word or any of its stems/variants exists in the text
 */
function checkTargetWordUsage(wordObj, text) {
  const normalizedText = text.toLowerCase();
  const stems = wordObj.stems || [wordObj.word];
  
  for (const stem of stems) {
    const regex = new RegExp(`\\b${escapeRegExp(stem.toLowerCase())}\\b`, 'i');
    const match = normalizedText.match(regex);
    if (match) {
      return {
        used: true,
        matchedStem: stem,
        index: match.index
      };
    }
  }
  
  return { used: false, matchedStem: null, index: -1 };
}

function escapeRegExp(string) {
  return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

/**
 * Real-time quick metrics for the editor
 */
function analyzeQuickMetrics(text, targetVocabulary = []) {
  const words = text.trim() ? text.trim().split(/\s+/) : [];
  const wordCount = words.length;
  
  // Paragraphs
  const paragraphs = text
    .split(/\n\s*\n/)
    .map(p => p.trim())
    .filter(p => p.length > 0);

  // Target vocabulary status
  const vocabStatus = targetVocabulary.map(v => {
    const res = checkTargetWordUsage(v, text);
    return {
      word: v.word,
      used: res.used,
      matchedStem: res.matchedStem,
      collocation: v.collocation,
      ipa: v.ipa
    };
  });

  const targetWordsUsed = vocabStatus.filter(v => v.used).length;
  const targetWordsTotal = targetVocabulary.length;

  // Grammar detection
  const detectedGrammar = [];
  for (const [key, struct] of Object.entries(SYNTACTIC_PATTERNS)) {
    if (struct.regex.test(text)) {
      detectedGrammar.push({
        id: key,
        name: struct.name,
        description: struct.description
      });
    }
  }

  // Informal checks
  const informalFindings = [];
  INFORMAL_PATTERNS.forEach(pattern => {
    const match = text.match(pattern);
    if (match) {
      informalFindings.push(match[0]);
    }
  });

  return {
    wordCount,
    paragraphCount: paragraphs.length,
    targetWordsUsed,
    targetWordsTotal,
    vocabStatus,
    detectedGrammar,
    informalFindings
  };
}

/**
 * Full Cambridge C1/C2 Assessment Algorithm
 */
function evaluateEssay(text, currentTopic) {
  const words = text.trim() ? text.trim().split(/\s+/) : [];
  const wordCount = words.length;

  const paragraphs = text
    .split(/\n\s*\n/)
    .map(p => p.trim())
    .filter(p => p.length > 0);

  const sentences = text
    .split(/[.!?]+/)
    .map(s => s.trim())
    .filter(s => s.length > 0);

  // 1. Target Vocabulary Analysis
  const targetVocabulary = currentTopic.targetVocabulary || [];
  const targetUsageResults = targetVocabulary.map(v => {
    const usage = checkTargetWordUsage(v, text);
    return {
      ...v,
      used: usage.used,
      matchedStem: usage.matchedStem
    };
  });
  const usedTargetCount = targetUsageResults.filter(v => v.used).length;
  const targetCoveragePct = targetVocabulary.length > 0 ? (usedTargetCount / targetVocabulary.length) * 100 : 100;

  // 2. Lexical Sophistication & Academic Marker Density
  let academicMarkerCount = 0;
  const lowerText = text.toLowerCase();
  ACADEMIC_C1_MARKERS.forEach(marker => {
    const regex = new RegExp(`\\b${marker}\\b`, 'gi');
    const matches = lowerText.match(regex);
    if (matches) academicMarkerCount += matches.length;
  });

  // Type-Token Ratio (Lexical Diversity)
  const uniqueWords = new Set(words.map(w => w.toLowerCase().replace(/[^a-z]/g, ''))).size;
  const typeTokenRatio = wordCount > 0 ? (uniqueWords / wordCount) : 0;

  // Average Sentence Length (C1 target: 18 - 28 words per sentence)
  const avgSentenceLength = sentences.length > 0 ? (wordCount / sentences.length) : 0;

  // 3. Syntactic Structure Detection
  const identifiedStructures = [];
  let syntacticScoreBoost = 0;
  for (const [key, struct] of Object.entries(SYNTACTIC_PATTERNS)) {
    const match = text.match(struct.regex);
    if (match) {
      identifiedStructures.push({
        id: key,
        name: struct.name,
        snippet: match[0],
        description: struct.description
      });
      syntacticScoreBoost += struct.weight;
    }
  }

  // 4. Informalisms and Contractions Check
  const informalMatches = [];
  INFORMAL_PATTERNS.forEach(pat => {
    const found = text.match(new RegExp(pat.source, 'gi'));
    if (found) {
      informalMatches.push(...found);
    }
  });

  // ==========================================
  // SCORING ACCORDING TO CAMBRIDGE SCALES (0-5)
  // ==========================================

  // Scale 1: CONTENT (Target: 220-260 words, covers prompt points)
  let contentScore = 5.0;
  const feedbackContent = [];
  if (wordCount < 180) {
    contentScore -= 2.0;
    feedbackContent.push(`Essay length (${wordCount} words) is critically below Cambridge C1 recommendation (220-260 words). Insufficient development of arguments.`);
  } else if (wordCount < 220) {
    contentScore -= 0.8;
    feedbackContent.push(`Slightly under the 220-word threshold (${wordCount} words). Expand on your analytical justifications.`);
  } else if (wordCount > 340) {
    contentScore -= 0.5;
    feedbackContent.push(`Essay is verbose (${wordCount} words). Cambridge examiners penalize lack of conciseness and redundancy.`);
  } else {
    feedbackContent.push(`Optimal word length (${wordCount} words) adhering strictly to Cambridge C1 Part 1 guidelines.`);
  }

  if (paragraphs.length < 3) {
    contentScore -= 1.0;
    feedbackContent.push("Needs clear separation into Introduction, Body Arguments (covering both prompt points), and Conclusion.");
  } else {
    feedbackContent.push(`Strong essay architecture with ${paragraphs.length} structured paragraphs.`);
  }
  contentScore = Math.max(1, Math.min(5, contentScore));

  // Scale 2: COMMUNICATIVE ACHIEVEMENT (Academic tone, register, objective stance)
  let commScore = 4.0;
  const feedbackComm = [];
  if (informalMatches.length > 0) {
    const penalty = Math.min(2.0, informalMatches.length * 0.5);
    commScore -= penalty;
    feedbackComm.push(`Detected informal colloquialisms or contractions: "${informalMatches.slice(0, 4).join(', ')}". In Cambridge C1/C2, avoid contractions ("don't", "can't") and maintain an objective scholarly register.`);
  } else {
    commScore += 0.5;
    feedbackComm.push("Flawless formal academic register maintained with no informal contractions or conversational vernacular.");
  }

  if (identifiedStructures.some(s => s.id === 'passiveReporting' || s.id === 'cleftSentence')) {
    commScore += 0.5;
    feedbackComm.push("Masterful use of objective hedging and cleft framing typical of Cambridge band 5 essays.");
  }
  commScore = Math.max(1, Math.min(5, commScore));

  // Scale 3: ORGANISATION (Linking devices, cohesion, discourse markers)
  let orgScore = 3.5;
  const feedbackOrg = [];
  if (paragraphs.length >= 4) orgScore += 0.5;
  if (academicMarkerCount >= 4) {
    orgScore += 0.8;
    feedbackOrg.push(`Exceptional deployment of cohesive devices (${academicMarkerCount} advanced discourse markers detected).`);
  } else if (academicMarkerCount >= 2) {
    orgScore += 0.3;
    feedbackOrg.push("Adequate transitional markers, but could incorporate more nuanced logical connectors (e.g., 'notwithstanding', 'inasmuch as').");
  } else {
    orgScore -= 0.8;
    feedbackOrg.push("Discourse cohesion is underdeveloped. Integrate formal Cambridge cohesive markers to link paragraphs smoothly.");
  }
  orgScore = Math.max(1, Math.min(5, orgScore));

  // Scale 4: LANGUAGE (Lexical range, target vocabulary, complex syntax)
  let langScore = 2.5;
  const feedbackLang = [];

  // Target vocabulary weight
  const vocabRatio = usedTargetCount / Math.max(1, targetVocabulary.length);
  if (vocabRatio >= 0.75) {
    langScore += 1.5;
    feedbackLang.push(`Outstanding command of required Cambridge C1/C2 topic vocabulary (${usedTargetCount}/${targetVocabulary.length} words seamlessly integrated).`);
  } else if (vocabRatio >= 0.5) {
    langScore += 0.8;
    feedbackLang.push(`Good integration of target vocabulary (${usedTargetCount}/${targetVocabulary.length} words used), but aim for at least 6 to secure higher band.`);
  } else {
    feedbackLang.push(`Target vocabulary underutilized: only ${usedTargetCount}/${targetVocabulary.length} required words incorporated. University examiners look for advanced lexical precision.`);
  }

  // Syntactic complexity
  if (identifiedStructures.length >= 3) {
    langScore += 1.0;
    feedbackLang.push(`High grammatical ambition demonstrated: successfully incorporated ${identifiedStructures.length} advanced syntactic structures (${identifiedStructures.map(s => s.name).join(', ')}).`);
  } else if (identifiedStructures.length >= 1) {
    langScore += 0.4;
    feedbackLang.push(`Used advanced syntax (${identifiedStructures[0].name}). Incorporating an inverted conditional or negative inversion would propel this to C2.`);
  } else {
    langScore -= 0.5;
    feedbackLang.push("Syntax relies predominantly on simple/compound sentences. Cambridge C1 requires varied complex structures such as inversions, clefts, or participle clauses.");
  }

  // Lexical diversity
  if (typeTokenRatio > 0.55 && wordCount > 150) {
    langScore += 0.3;
  }
  langScore = Math.max(1, Math.min(5, langScore));

  // Total Cambridge Score out of 20 (standard Cambridge 4 scales * 5)
  const rawTotal = contentScore + commScore + orgScore + langScore; // max 20
  const normalizedPercentage = Math.round((rawTotal / 20) * 100);

  // CEFR Determination
  let cefrResult;
  let meetsC1 = false;

  if (normalizedPercentage >= CAMBRIDGE_CEFR_DESCRIPTORS.C2.minScore && usedTargetCount >= 5 && identifiedStructures.length >= 2) {
    cefrResult = CAMBRIDGE_CEFR_DESCRIPTORS.C2;
    meetsC1 = true;
  } else if (normalizedPercentage >= CAMBRIDGE_CEFR_DESCRIPTORS.C1.minScore && usedTargetCount >= 4) {
    cefrResult = CAMBRIDGE_CEFR_DESCRIPTORS.C1;
    meetsC1 = true;
  } else if (normalizedPercentage >= CAMBRIDGE_CEFR_DESCRIPTORS.B2.minScore) {
    cefrResult = CAMBRIDGE_CEFR_DESCRIPTORS.B2;
    meetsC1 = false;
  } else {
    cefrResult = CAMBRIDGE_CEFR_DESCRIPTORS.B1;
    meetsC1 = false;
  }

  return {
    rawTotal: Number(rawTotal.toFixed(1)),
    percentage: normalizedPercentage,
    cefr: cefrResult,
    meetsC1,
    scales: {
      content: { score: Number(contentScore.toFixed(1)), max: 5, feedback: feedbackContent },
      communicative: { score: Number(commScore.toFixed(1)), max: 5, feedback: feedbackComm },
      organisation: { score: Number(orgScore.toFixed(1)), max: 5, feedback: feedbackOrg },
      language: { score: Number(langScore.toFixed(1)), max: 5, feedback: feedbackLang }
    },
    metrics: {
      wordCount,
      paragraphsCount: paragraphs.length,
      sentencesCount: sentences.length,
      avgSentenceLength: Math.round(avgSentenceLength),
      typeTokenRatio: Math.round(typeTokenRatio * 100),
      usedTargetCount,
      totalTargetCount: targetVocabulary.length,
      targetUsageResults,
      identifiedStructures,
      informalMatches
    }
  };
}


  // ==========================================
  // 3. SPEECH & PRONUNCIATION ENGINE
  // ==========================================
/**
 * Cambridge Speaking & Pronunciation Evaluation Engine
 * Uses Web Speech Recognition for live spoken analysis,
 * Web Speech Synthesis for native British English model pronunciation,
 * and Web Audio API for real-time waveform visualization.
 */
class CambridgeSpeechEngine {
  constructor() {
    this.recognition = null;
    this.synth = window.speechSynthesis || null;
    this.audioContext = null;
    this.analyser = null;
    this.mediaStream = null;
    this.visualizerAnimationId = null;

    this.isListening = false;
    this.isSpeakingModel = false;
    this.startTime = null;
    this.elapsedSeconds = 0;
    this.durationInterval = null;

    this.targetTokens = []; // Array of word objects { text, clean, status: 'pending'|'matched'|'deviation'|'omitted' }
    this.spokenTranscripts = [];
    this.currentWordIndex = 0;

    // Callbacks
    this.onWordUpdate = null;
    this.onStateChange = null;
    this.onMetricsUpdate = null;
    this.onError = null;

    this.initRecognition();
  }

  isSpeechSupported() {
    return !!(window.SpeechRecognition || window.webkitSpeechRecognition);
  }

  initRecognition() {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SpeechRecognition) {
      console.warn("SpeechRecognition API not available in this browser.");
      return;
    }

    this.recognition = new SpeechRecognition();
    this.recognition.continuous = true;
    this.recognition.interimResults = true;
    this.recognition.lang = 'en-GB'; // British English for Cambridge standard

    this.recognition.onstart = () => {
      this.isListening = true;
      this.startTime = Date.now();
      this.startDurationTracker();
      if (this.onStateChange) this.onStateChange({ status: 'recording' });
    };

    this.recognition.onresult = (event) => {
      let interimTranscript = '';
      let finalTranscript = '';

      for (let i = event.resultIndex; i < event.results.length; ++i) {
        const transcript = event.results[i][0].transcript;
        if (event.results[i].isFinal) {
          finalTranscript += transcript + ' ';
        } else {
          interimTranscript += transcript;
        }
      }

      const activeText = (finalTranscript + ' ' + interimTranscript).trim();
      if (activeText) {
        this.processSpokenSpeech(activeText);
      }
    };

    this.recognition.onerror = (event) => {
      console.error("Speech recognition error:", event.error);
      if (event.error === 'not-allowed') {
        if (this.onError) this.onError("Microphone permission denied. Please allow microphone access to evaluate speaking.");
      }
      this.stopListening();
    };

    this.recognition.onend = () => {
      // If stopped naturally or manually
      this.isListening = false;
      this.stopDurationTracker();
      this.stopAudioVisualizer();
      if (this.onStateChange) this.onStateChange({ status: 'idle' });
    };
  }

  /**
   * Set target essay text to be read aloud
   */
  setTargetText(text) {
    // Break into tokens while preserving original casing and punctuation for display
    const rawWords = text.trim().split(/\s+/);
    this.targetTokens = rawWords.map((word, idx) => ({
      index: idx,
      text: word,
      clean: word.toLowerCase().replace(/[^a-z0-9]/g, ''),
      status: 'pending' // 'pending' | 'matched' | 'deviation' | 'omitted'
    })).filter(w => w.clean.length > 0);

    this.currentWordIndex = 0;
    this.spokenTranscripts = [];
    this.elapsedSeconds = 0;
  }

  /**
   * Align spoken stream with target tokens
   */
  processSpokenSpeech(spokenText) {
    const spokenWords = spokenText.toLowerCase().replace(/[^a-z0-9\s]/g, '').trim().split(/\s+/);
    if (!spokenWords.length) return;

    let targetIdx = this.currentWordIndex;

    // Scan backwards from recent spoken words to align
    for (const spokenWord of spokenWords) {
      if (targetIdx >= this.targetTokens.length) break;

      const targetWord = this.targetTokens[targetIdx];
      const similarity = calculateWordSimilarity(spokenWord, targetWord.clean);

      if (similarity >= 0.82) {
        targetWord.status = 'matched';
        targetIdx++;
      } else if (similarity >= 0.60) {
        targetWord.status = 'deviation'; // slight pronunciation slant / accent variance
        targetIdx++;
      } else {
        // Check lookahead of up to 2 words in case user skipped or mispronounced one
        let foundAhead = false;
        for (let lookahead = 1; lookahead <= 2 && targetIdx + lookahead < this.targetTokens.length; lookahead++) {
          const aheadWord = this.targetTokens[targetIdx + lookahead];
          if (calculateWordSimilarity(spokenWord, aheadWord.clean) >= 0.80) {
            // Mark skipped words as omitted
            for (let k = 0; k < lookahead; k++) {
              if (this.targetTokens[targetIdx + k].status === 'pending') {
                this.targetTokens[targetIdx + k].status = 'omitted';
              }
            }
            aheadWord.status = 'matched';
            targetIdx = targetIdx + lookahead + 1;
            foundAhead = true;
            break;
          }
        }
        // If not found ahead and current is pending, allow it to remain or mark deviation
      }
    }

    this.currentWordIndex = Math.min(targetIdx, this.targetTokens.length);

    // Calculate real-time metrics
    const matchedCount = this.targetTokens.filter(t => t.status === 'matched').length;
    const deviationCount = this.targetTokens.filter(t => t.status === 'deviation').length;
    const totalAttempted = Math.max(1, this.currentWordIndex);
    const accuracy = Math.round(((matchedCount + deviationCount * 0.7) / totalAttempted) * 100);

    const minutes = Math.max(0.05, this.elapsedSeconds / 60);
    const wpm = Math.round(matchedCount / minutes);

    if (this.onWordUpdate) {
      this.onWordUpdate({
        tokens: this.targetTokens,
        currentIndex: this.currentWordIndex,
        matchedCount,
        deviationCount,
        accuracy,
        wpm,
        elapsedSeconds: this.elapsedSeconds
      });
    }
  }

  async startListening(canvasElement) {
    if (!this.isSpeechSupported()) {
      if (this.onError) this.onError("Your browser does not support Speech Recognition. Try Chrome, Edge, or Safari.");
      return;
    }

    try {
      this.initRecognition();
      this.recognition.start();
      if (canvasElement) {
        await this.startAudioVisualizer(canvasElement);
      }
    } catch (err) {
      console.error("Failed to start speech recognition:", err);
      if (this.onError) this.onError("Could not start microphone: " + err.message);
    }
  }

  stopListening() {
    if (this.recognition && this.isListening) {
      try {
        this.recognition.stop();
      } catch (e) {
        // ignore
      }
    }
    this.isListening = false;
    this.stopDurationTracker();
    this.stopAudioVisualizer();
  }

  startDurationTracker() {
    this.stopDurationTracker();
    this.durationInterval = setInterval(() => {
      this.elapsedSeconds++;
      if (this.onMetricsUpdate) {
        const minutes = Math.max(0.05, this.elapsedSeconds / 60);
        const matchedCount = this.targetTokens.filter(t => t.status === 'matched').length;
        const wpm = Math.round(matchedCount / minutes);
        this.onMetricsUpdate({ elapsedSeconds: this.elapsedSeconds, wpm });
      }
    }, 1000);
  }

  stopDurationTracker() {
    if (this.durationInterval) {
      clearInterval(this.durationInterval);
      this.durationInterval = null;
    }
  }

  /**
   * Final Cambridge Speaking Assessment based on recorded performance
   */
  getFinalSpeakingAssessment() {
    const totalWords = this.targetTokens.length;
    const matchedCount = this.targetTokens.filter(t => t.status === 'matched').length;
    const deviationCount = this.targetTokens.filter(t => t.status === 'deviation').length;
    const omittedCount = this.targetTokens.filter(t => t.status === 'omitted').length;
    const readRatio = totalWords > 0 ? ((matchedCount + deviationCount) / totalWords) : 0;

    const minutes = Math.max(0.1, this.elapsedSeconds / 60);
    const wpm = Math.round(matchedCount / minutes);

    // Accuracy %
    const pronunciationAccuracy = totalWords > 0 
      ? Math.min(100, Math.round(((matchedCount + (deviationCount * 0.65)) / totalWords) * 100))
      : 0;

    // Cambridge Speaking Scales (0-5)
    // 1. Pronunciation (Individual sounds, stress, intelligibility)
    let pronunciationScore = 5.0;
    const pronunciationFeedback = [];
    if (pronunciationAccuracy >= 90) {
      pronunciationScore = 5.0;
      pronunciationFeedback.push("Exceptional phonological precision and phonemic clarity across polysyllabic vocabulary.");
    } else if (pronunciationAccuracy >= 78) {
      pronunciationScore = 4.2;
      pronunciationFeedback.push("Clear intelligibility with natural intonation. Minor phoneme deviations did not impede comprehension.");
    } else if (pronunciationAccuracy >= 65) {
      pronunciationScore = 3.2;
      pronunciationFeedback.push("Noticeable accent interference or slurred word endings on complex C1 terms. Requires stress pattern practice.");
    } else {
      pronunciationScore = 2.0;
      pronunciationFeedback.push("Frequent mispronunciations or omitted clauses requiring deliberate articulation practice.");
    }

    // 2. Fluency & Discourse Speed (Cambridge C1 Target: 130 - 160 WPM)
    let fluencyScore = 5.0;
    const fluencyFeedback = [];
    if (wpm >= 130 && wpm <= 165) {
      fluencyScore = 5.0;
      fluencyFeedback.push(`Optimal Cambridge native-speed pacing at ${wpm} WPM with confident, uninterrupted delivery.`);
    } else if ((wpm >= 110 && wpm < 130) || (wpm > 165 && wpm <= 185)) {
      fluencyScore = 4.0;
      fluencyFeedback.push(`Acceptable speaking rate (${wpm} WPM). Aim for consistent 135-150 WPM cadence with natural thought-group pauses.`);
    } else if (wpm < 110) {
      fluencyScore = 3.0;
      fluencyFeedback.push(`Hesitant pace (${wpm} WPM). Work on smooth transitional phrasing to minimize unnatural pauses.`);
    } else {
      fluencyScore = 3.5;
      fluencyFeedback.push(`Rushed pace (${wpm} WPM). Slow down slightly to emphasize rhetorical stress on key academic vocabulary.`);
    }

    // 3. Completion & Discourse Management
    let discourseScore = 5.0;
    const discourseFeedback = [];
    if (readRatio >= 0.90) {
      discourseScore = 5.0;
      discourseFeedback.push("Completed reading full text with coherent rhythm, thought-group boundaries, and steady lung-power control.");
    } else if (readRatio >= 0.70) {
      discourseScore = 3.8;
      discourseFeedback.push(`Read ${Math.round(readRatio * 100)}% of the essay. Strive to complete entire stretch of discourse without fatigue.`);
    } else {
      discourseScore = 2.5;
      discourseFeedback.push(`Incomplete presentation (${Math.round(readRatio * 100)}% completed).`);
    }

    const overallSpeakingTotal = (pronunciationScore + fluencyScore + discourseScore) / 3;
    const overallPercentage = Math.round((overallSpeakingTotal / 5) * 100);

    let speakingBand = "B2 (Vantage)";
    let meetsC1Speaking = false;

    if (overallPercentage >= 85 && pronunciationAccuracy >= 82) {
      speakingBand = "Band 5 (C2 - Exceptional Fluency & Native Cadence)";
      meetsC1Speaking = true;
    } else if (overallPercentage >= 70 && pronunciationAccuracy >= 75) {
      speakingBand = "Band 4 (C1 - Passed / Cambridge Advanced Level)";
      meetsC1Speaking = true;
    } else if (overallPercentage >= 50) {
      speakingBand = "Band 2-3 (B2 - Competent but Needs Fluidity Practice)";
      meetsC1Speaking = false;
    } else {
      speakingBand = "Band 1 (B1 - Substantial Phonetic Revision Needed)";
      meetsC1Speaking = false;
    }

    return {
      pronunciationAccuracy,
      wpm,
      elapsedSeconds: this.elapsedSeconds,
      matchedCount,
      deviationCount,
      omittedCount,
      totalWords,
      readRatio: Math.round(readRatio * 100),
      speakingBand,
      overallPercentage,
      meetsC1Speaking,
      scores: {
        pronunciation: { score: Number(pronunciationScore.toFixed(1)), max: 5, feedback: pronunciationFeedback },
        fluency: { score: Number(fluencyScore.toFixed(1)), max: 5, feedback: fluencyFeedback },
        discourse: { score: Number(discourseScore.toFixed(1)), max: 5, feedback: discourseFeedback }
      }
    };
  }

  /**
   * Play Native British (RP) English Model Audio using SpeechSynthesis
   */
  speakText(text, rate = 0.95, onEndCallback = null) {
    if (!this.synth) {
      if (this.onError) this.onError("Speech synthesis is not supported in this browser.");
      return;
    }

    this.stopSpeakingModel();

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.rate = rate; // Cambridge standard pacing
    utterance.pitch = 1.0;

    // Search for high quality British English voices
    const voices = this.synth.getVoices();
    const britishVoice = voices.find(v => 
      (v.lang === 'en-GB' || v.lang === 'en_GB') && 
      (v.name.includes('Natural') || v.name.includes('Google') || v.name.includes('British') || v.name.includes('Daniel') || v.name.includes('George'))
    ) || voices.find(v => v.lang === 'en-GB' || v.lang === 'en_GB') || voices.find(v => v.lang.startsWith('en'));

    if (britishVoice) {
      utterance.voice = britishVoice;
    }

    utterance.onstart = () => {
      this.isSpeakingModel = true;
      if (this.onStateChange) this.onStateChange({ status: 'model_speaking' });
    };

    utterance.onend = () => {
      this.isSpeakingModel = false;
      if (onEndCallback) onEndCallback();
      if (this.onStateChange) this.onStateChange({ status: 'idle' });
    };

    utterance.onerror = (e) => {
      console.error("SpeechSynthesis error:", e);
      this.isSpeakingModel = false;
      if (this.onStateChange) this.onStateChange({ status: 'idle' });
    };

    this.synth.speak(utterance);
  }

  stopSpeakingModel() {
    if (this.synth && (this.synth.speaking || this.synth.pending)) {
      this.synth.cancel();
      this.isSpeakingModel = false;
    }
  }

  /**
   * Real-time Audio Visualizer with HTML5 Canvas & Web Audio API
   */
  async startAudioVisualizer(canvas) {
    try {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (!AudioCtx) return;

      this.audioContext = new AudioCtx();
      this.mediaStream = await navigator.mediaDevices.getUserMedia({ audio: true, video: false });
      const source = this.audioContext.createMediaStreamSource(this.mediaStream);
      this.analyser = this.audioContext.createAnalyser();
      this.analyser.fftSize = 256;
      source.connect(this.analyser);

      const ctx = canvas.getContext('2d');
      const bufferLength = this.analyser.frequencyBinCount;
      const dataArray = new Uint8Array(bufferLength);

      const draw = () => {
        if (!this.isListening) return;

        this.visualizerAnimationId = requestAnimationFrame(draw);
        this.analyser.getByteFrequencyData(dataArray);

        ctx.clearRect(0, 0, canvas.width, canvas.height);

        const barWidth = (canvas.width / bufferLength) * 2.5;
        let barHeight;
        let x = 0;

        for (let i = 0; i < bufferLength; i++) {
          barHeight = (dataArray[i] / 255) * (canvas.height * 0.85);

          // Elegant Cambridge Gold-to-Cyan gradient
          const gradient = ctx.createLinearGradient(0, canvas.height, 0, 0);
          gradient.addColorStop(0, 'rgba(223, 177, 91, 0.2)');
          gradient.addColorStop(0.6, 'rgba(223, 177, 91, 0.8)');
          gradient.addColorStop(1, 'rgba(78, 205, 196, 1)');

          ctx.fillStyle = gradient;
          ctx.beginPath();
          ctx.roundRect(x, canvas.height - barHeight, barWidth - 1, barHeight, [3, 3, 0, 0]);
          ctx.fill();

          x += barWidth + 1;
        }
      };

      draw();
    } catch (err) {
      console.warn("Could not start visualizer audio context:", err);
    }
  }

  stopAudioVisualizer() {
    if (this.visualizerAnimationId) {
      cancelAnimationFrame(this.visualizerAnimationId);
      this.visualizerAnimationId = null;
    }
    if (this.mediaStream) {
      this.mediaStream.getTracks().forEach(track => track.stop());
      this.mediaStream = null;
    }
    if (this.audioContext && this.audioContext.state !== 'closed') {
      try {
        this.audioContext.close();
      } catch (e) {
        // ignore
      }
      this.audioContext = null;
    }
  }
}

/**
 * Word similarity calculation using normalized Levenshtein distance
 */
function calculateWordSimilarity(s1, s2) {
  if (s1 === s2) return 1.0;
  if (!s1 || !s2) return 0.0;

  // Suffix strip matching (e.g., "mitigating" vs "mitigate", "paradigms" vs "paradigm")
  if (s1.startsWith(s2) || s2.startsWith(s1)) {
    const diff = Math.abs(s1.length - s2.length);
    if (diff <= 3) return 0.88;
  }

  const distance = levenshteinDistance(s1, s2);
  const maxLength = Math.max(s1.length, s2.length);
  return 1 - (distance / maxLength);
}

function levenshteinDistance(a, b) {
  const matrix = [];
  for (let i = 0; i <= b.length; i++) {
    matrix[i] = [i];
  }
  for (let j = 0; j <= a.length; j++) {
    matrix[0][j] = j;
  }
  for (let i = 1; i <= b.length; i++) {
    for (let j = 1; j <= a.length; j++) {
      if (b.charAt(i - 1) === a.charAt(j - 1)) {
        matrix[i][j] = matrix[i - 1][j - 1];
      } else {
        matrix[i][j] = Math.min(
          matrix[i - 1][j - 1] + 1, // substitution
          matrix[i][j - 1] + 1,     // insertion
          matrix[i - 1][j] + 1      // deletion
        );
      }
    }
  }
  return matrix[b.length][a.length];
}


  // ==========================================
  // 4. MAIN APP LOGIC
  // ==========================================
/**
 * Cambridge C1+ Academy - Main Application Controller
 */
class CambridgeApp {
  constructor() {
    this.topics = CAMBRIDGE_TOPICS;
    this.currentTopicIndex = 0;
    this.currentTopic = this.topics[0];

    this.speechEngine = new CambridgeSpeechEngine();
    this.lastEvaluationResult = null;
    this.meetsC1Threshold = false;

    this.dom = {};
    this.init();
  }

  init() {
    this.cacheDomElements();
    this.bindEvents();
    this.bindHotkeys();
    this.setupSpeechEngineCallbacks();
    this.loadTopic(0);
    this.renderHistory();
  }

  cacheDomElements() {
    this.dom = {
      // Header
      historyDrawerBtn: document.getElementById('historyDrawerBtn'),
      historyDrawer: document.getElementById('historyDrawer'),
      closeHistoryBtn: document.getElementById('closeHistoryBtn'),
      clearHistoryBtn: document.getElementById('clearHistoryBtn'),
      historyList: document.getElementById('historyList'),

      // Stepper
      stepIndicator1: document.getElementById('stepIndicator1'),
      stepIndicator2: document.getElementById('stepIndicator2'),
      stepIndicator3: document.getElementById('stepIndicator3'),
      step3LockIcon: document.getElementById('step3LockIcon'),

      // Workspaces
      mainWritingWorkspace: document.getElementById('mainWritingWorkspace'),
      speakingStudio: document.getElementById('speakingStudio'),

      // Topic Card
      topicCounterCurrent: document.getElementById('topicCounterCurrent'),
      topicCounterTotal: document.getElementById('topicCounterTotal'),
      prevTopicBtn: document.getElementById('prevTopicBtn'),
      nextTopicBtn: document.getElementById('nextTopicBtn'),
      topicCategory: document.getElementById('topicCategory'),
      topicType: document.getElementById('topicType'),
      topicTime: document.getElementById('topicTime'),
      topicTitle: document.getElementById('topicTitle'),
      topicContext: document.getElementById('topicContext'),
      topicPoints: document.getElementById('topicPoints'),
      topicTask: document.getElementById('topicTask'),
      vocabGrid: document.getElementById('vocabGrid'),
      vocabUsedCounter: document.getElementById('vocabUsedCounter'),
      toggleStructuresBtn: document.getElementById('toggleStructuresBtn'),
      structuresBody: document.getElementById('structuresBody'),
      structuresCaret: document.getElementById('structuresCaret'),
      toggleSampleExcerptBtn: document.getElementById('toggleSampleExcerptBtn'),
      sampleExcerptBox: document.getElementById('sampleExcerptBox'),

      // Writing Studio
      essayInput: document.getElementById('essayInput'),
      liveWordCount: document.getElementById('liveWordCount'),
      liveParaCount: document.getElementById('liveParaCount'),
      lengthGuidanceBadge: document.getElementById('lengthGuidanceBadge'),
      radarBadgesRow: document.getElementById('radarBadgesRow'),
      radarCountDisplay: document.getElementById('radarCountDisplay'),
      evaluateEssayBtn: document.getElementById('evaluateEssayBtn'),
      loadSampleEssayBtn: document.getElementById('loadSampleEssayBtn'),
      clearEssayBtn: document.getElementById('clearEssayBtn'),

      // Evaluation Modal
      evalModalBackdrop: document.getElementById('evalModalBackdrop'),
      closeEvalModalBtn: document.getElementById('closeEvalModalBtn'),
      evalScoreTotal: document.getElementById('evalScoreTotal'),
      evalPercentage: document.getElementById('evalPercentage'),
      evalVerdictTitle: document.getElementById('evalVerdictTitle'),
      evalVerdictDesc: document.getElementById('evalVerdictDesc'),
      scaleContentScore: document.getElementById('scaleContentScore'),
      scaleContentFeedback: document.getElementById('scaleContentFeedback'),
      scaleCommScore: document.getElementById('scaleCommScore'),
      scaleCommFeedback: document.getElementById('scaleCommFeedback'),
      scaleOrgScore: document.getElementById('scaleOrgScore'),
      scaleOrgFeedback: document.getElementById('scaleOrgFeedback'),
      scaleLangScore: document.getElementById('scaleLangScore'),
      scaleLangFeedback: document.getElementById('scaleLangFeedback'),
      gatekeeperBanner: document.getElementById('gatekeeperBanner'),
      gatekeeperHeading: document.getElementById('gatekeeperHeading'),
      gatekeeperSubtext: document.getElementById('gatekeeperSubtext'),
      gatekeeperActionBtn: document.getElementById('gatekeeperActionBtn'),

      // Speaking Studio
      returnToWritingBtn: document.getElementById('returnToWritingBtn'),
      teleprompterText: document.getElementById('teleprompterText'),
      startSpeakingBtn: document.getElementById('startSpeakingBtn'),
      stopSpeakingBtn: document.getElementById('stopSpeakingBtn'),
      playModelAudioBtn: document.getElementById('playModelAudioBtn'),
      stopModelAudioBtn: document.getElementById('stopModelAudioBtn'),
      visualizerCanvas: document.getElementById('visualizerCanvas'),
      liveSpeakingWpm: document.getElementById('liveSpeakingWpm'),
      liveSpeakingAcc: document.getElementById('liveSpeakingAcc'),
      liveSpeakingTime: document.getElementById('liveSpeakingTime'),
      speakingReportPanel: document.getElementById('speakingReportPanel'),

      // Toast
      toastContainer: document.getElementById('toastContainer')
    };
  }

  bindEvents() {
    // Topic events
    this.dom.prevTopicBtn.addEventListener('click', () => this.cyclePrevTopic());
    this.dom.nextTopicBtn.addEventListener('click', () => this.cycleNextTopic());
    this.dom.toggleStructuresBtn.addEventListener('click', () => this.toggleStructuresAccordion());
    this.dom.toggleSampleExcerptBtn.addEventListener('click', () => this.toggleSampleExcerpt());

    // Editor events
    this.dom.essayInput.addEventListener('input', () => this.handleEditorInput());
    this.dom.clearEssayBtn.addEventListener('click', () => this.clearEssay());
    this.dom.loadSampleEssayBtn.addEventListener('click', () => this.loadSampleDraft());
    this.dom.evaluateEssayBtn.addEventListener('click', () => this.triggerEvaluation());

    // Modal events
    this.dom.closeEvalModalBtn.addEventListener('click', () => this.closeEvaluationModal());
    this.dom.evalModalBackdrop.addEventListener('click', (e) => {
      if (e.target === this.dom.evalModalBackdrop) this.closeEvaluationModal();
    });
    this.dom.gatekeeperActionBtn.addEventListener('click', () => this.handleGatekeeperAction());

    // Speaking Studio events
    this.dom.returnToWritingBtn.addEventListener('click', () => this.returnToWriting());
    this.dom.startSpeakingBtn.addEventListener('click', () => this.startSpeakingSession());
    this.dom.stopSpeakingBtn.addEventListener('click', () => this.stopSpeakingSession());
    this.dom.playModelAudioBtn.addEventListener('click', () => this.playModelAudio());
    this.dom.stopModelAudioBtn.addEventListener('click', () => this.stopModelAudio());

    // History drawer events
    this.dom.historyDrawerBtn.addEventListener('click', () => this.openHistoryDrawer());
    this.dom.closeHistoryBtn.addEventListener('click', () => this.closeHistoryDrawer());
    this.dom.clearHistoryBtn.addEventListener('click', () => this.clearHistory());
  }

  bindHotkeys() {
    document.addEventListener('keydown', (e) => {
      const modalOpen = this.dom.evalModalBackdrop.classList.contains('visible') ||
                        this.dom.evalModalBackdrop.style.display === 'flex';
      const inTextField = ['INPUT', 'TEXTAREA', 'SELECT'].includes(document.activeElement.tagName);

      // Alt+ArrowLeft  →  Previous Topic
      if (e.altKey && e.key === 'ArrowLeft' && !inTextField && !modalOpen) {
        e.preventDefault();
        this.cyclePrevTopic();
        return;
      }

      // Alt+ArrowRight  →  Next Topic
      if (e.altKey && e.key === 'ArrowRight' && !inTextField && !modalOpen) {
        e.preventDefault();
        this.cycleNextTopic();
        return;
      }

      // Ctrl+Enter  →  Evaluate (works even from inside the essay textarea)
      if (e.ctrlKey && e.key === 'Enter' && !modalOpen) {
        e.preventDefault();
        this.triggerEvaluation();
      }
    });
  }

  setupSpeechEngineCallbacks() {
    this.speechEngine.onStateChange = ({ status }) => {
      if (status === 'recording') {
        this.dom.startSpeakingBtn.style.display = 'none';
        this.dom.stopSpeakingBtn.style.display = 'inline-flex';
        this.showToast("Microphone active. Read aloud into your mic.", "info");
      } else if (status === 'idle') {
        this.dom.startSpeakingBtn.style.display = 'inline-flex';
        this.dom.stopSpeakingBtn.style.display = 'none';
      } else if (status === 'model_speaking') {
        this.dom.playModelAudioBtn.style.display = 'none';
        this.dom.stopModelAudioBtn.style.display = 'inline-flex';
      }
    };

    this.speechEngine.onWordUpdate = ({ tokens, accuracy, wpm, elapsedSeconds }) => {
      this.updateTeleprompterDisplay(tokens);
      this.dom.liveSpeakingAcc.textContent = `${accuracy}%`;
      this.dom.liveSpeakingWpm.textContent = `${wpm}`;
      this.dom.liveSpeakingTime.textContent = this.formatSeconds(elapsedSeconds);
    };

    this.speechEngine.onMetricsUpdate = ({ elapsedSeconds, wpm }) => {
      this.dom.liveSpeakingTime.textContent = this.formatSeconds(elapsedSeconds);
      this.dom.liveSpeakingWpm.textContent = `${wpm}`;
    };

    this.speechEngine.onError = (message) => {
      this.showToast(message, "error");
    };
  }

  // ==========================================
  // TOPIC & VOCABULARY ENGINE
  // ==========================================

  loadTopic(index) {
    this.currentTopicIndex = index;
    this.currentTopic = this.topics[index];

    // Update topic counter badge
    this.dom.topicCounterCurrent.textContent = index + 1;
    this.dom.topicCounterTotal.textContent = this.topics.length;

    this.dom.topicCategory.textContent = this.currentTopic.category;
    this.dom.topicType.textContent = this.currentTopic.type;
    this.dom.topicTime.textContent = this.currentTopic.recommendedTime;
    this.dom.topicTitle.textContent = this.currentTopic.title;
    this.dom.topicContext.textContent = this.currentTopic.prompt.context;

    // Points
    this.dom.topicPoints.innerHTML = this.currentTopic.prompt.points
      .map(p => `<li>${p}</li>`)
      .join('');

    this.dom.topicTask.textContent = this.currentTopic.prompt.task;

    // Target Vocabulary Chips
    this.renderVocabularyChips();

    // Recommended Structures
    this.renderRecommendedStructures();

    // Sample Excerpt
    this.dom.sampleExcerptBox.textContent = `"${this.currentTopic.sampleExcerpt}"`;
    this.dom.sampleExcerptBox.style.display = 'none';

    // Reset editor analysis for new topic
    this.handleEditorInput();
  }

  cyclePrevTopic() {
    const prevIndex = (this.currentTopicIndex - 1 + this.topics.length) % this.topics.length;
    this.loadTopic(prevIndex);
    this.showToast(`Loaded Cambridge topic (${prevIndex + 1}/${this.topics.length}): "${this.currentTopic.title.slice(0, 35)}..."`, "info");
  }

  cycleNextTopic() {
    const nextIndex = (this.currentTopicIndex + 1) % this.topics.length;
    this.loadTopic(nextIndex);
    this.showToast(`Loaded Cambridge topic (${nextIndex + 1}/${this.topics.length}): "${this.currentTopic.title.slice(0, 35)}..."`, "info");
  }

  renderVocabularyChips() {
    const text = this.dom.essayInput.value || "";
    this.dom.vocabGrid.innerHTML = this.currentTopic.targetVocabulary.map((v, i) => {
      const usage = checkTargetWordUsage(v, text);
      return `
        <div class="vocab-chip ${usage.used ? 'used' : ''}" data-word="${v.word}">
          <div class="vocab-chip-top">
            <div class="vocab-word-title">
              <span>${v.word}</span>
              <span class="vocab-ipa">${v.ipa}</span>
            </div>
            <div style="display: flex; align-items: center; gap: 4px;">
              <span class="vocab-used-check">✓ USED</span>
              <button class="vocab-audio-btn" data-speak="${v.word}" title="Hear native British pronunciation">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><path d="M15.54 8.46a5 5 0 0 1 0 7.07"></path></svg>
              </button>
            </div>
          </div>
          <div class="vocab-collocation">${v.collocation}</div>
          <div class="vocab-definition">${v.definition}</div>
        </div>
      `;
    }).join('');

    // Attach individual word TTS audio listeners
    this.dom.vocabGrid.querySelectorAll('.vocab-audio-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const word = btn.getAttribute('data-speak');
        this.speechEngine.speakText(word, 0.85);
      });
    });
  }

  renderRecommendedStructures() {
    this.dom.structuresBody.innerHTML = this.currentTopic.recommendedStructures.map(s => `
      <div class="struct-item">
        <div class="struct-title">${s.name}</div>
        <div class="struct-pattern">${s.pattern}</div>
        <div class="struct-example">"${s.example}"</div>
      </div>
    `).join('');
  }

  toggleStructuresAccordion() {
    const isHidden = this.dom.structuresBody.style.display === 'none';
    this.dom.structuresBody.style.display = isHidden ? 'flex' : 'none';
    this.dom.structuresCaret.style.transform = isHidden ? 'rotate(180deg)' : 'rotate(0deg)';
  }

  toggleSampleExcerpt() {
    const isHidden = this.dom.sampleExcerptBox.style.display === 'none';
    this.dom.sampleExcerptBox.style.display = isHidden ? 'block' : 'none';
  }

  // ==========================================
  // WRITING STUDIO & REAL-TIME C1 RADAR
  // ==========================================

  handleEditorInput() {
    const text = this.dom.essayInput.value;
    const metrics = analyzeQuickMetrics(text, this.currentTopic.targetVocabulary);

    // Live word count
    this.dom.liveWordCount.textContent = metrics.wordCount;
    this.dom.liveParaCount.textContent = metrics.paragraphCount;

    // Word count color indicator (Cambridge CAE Part 1 target is 220-260 words)
    this.dom.liveWordCount.className = "metric-live-val";
    if (metrics.wordCount >= 220 && metrics.wordCount <= 280) {
      this.dom.liveWordCount.classList.add("optimal");
      this.dom.lengthGuidanceBadge.textContent = "Optimal C1 Length (220-260)";
      this.dom.lengthGuidanceBadge.className = "radar-badge active";
    } else if (metrics.wordCount > 0 && metrics.wordCount < 220) {
      this.dom.liveWordCount.classList.add("warning");
      this.dom.lengthGuidanceBadge.textContent = `Need ${220 - metrics.wordCount} more words`;
      this.dom.lengthGuidanceBadge.className = "radar-badge";
    } else if (metrics.wordCount > 280) {
      this.dom.liveWordCount.classList.add("warning");
      this.dom.lengthGuidanceBadge.textContent = "Exceeding target (be concise)";
      this.dom.lengthGuidanceBadge.className = "radar-badge";
    } else {
      this.dom.lengthGuidanceBadge.textContent = "Awaiting input";
      this.dom.lengthGuidanceBadge.className = "radar-badge";
    }

    // Update target vocabulary chips & counter
    this.dom.vocabUsedCounter.textContent = `${metrics.targetWordsUsed}/${metrics.targetWordsTotal}`;
    metrics.vocabStatus.forEach(status => {
      const chip = this.dom.vocabGrid.querySelector(`[data-word="${status.word}"]`);
      if (chip) {
        if (status.used) {
          chip.classList.add('used');
        } else {
          chip.classList.remove('used');
        }
      }
    });

    // Real-time grammar radar
    if (metrics.detectedGrammar.length > 0) {
      this.dom.radarCountDisplay.textContent = `${metrics.detectedGrammar.length} advanced structures detected`;
      this.dom.radarBadgesRow.innerHTML = metrics.detectedGrammar.map(g => `
        <span class="radar-badge active" title="${g.description}">
          ✓ ${g.name}
        </span>
      `).join('');
    } else {
      this.dom.radarCountDisplay.textContent = `0 structures detected`;
      this.dom.radarBadgesRow.innerHTML = `
        <span class="radar-badge-empty">Write complex structures (e.g. "Seldom has...", "What is of paramount...", "It is widely contended that...") to activate radar.</span>
      `;
    }
  }

  loadSampleDraft() {
    this.dom.essayInput.value = this.currentTopic.sampleExcerpt;
    this.handleEditorInput();
    this.showToast("Loaded sample Cambridge draft for evaluation.", "info");
  }

  clearEssay() {
    if (confirm("Clear your current draft?")) {
      this.dom.essayInput.value = "";
      this.handleEditorInput();
    }
  }

  // ==========================================
  // CAMBRIDGE C1 WRITING ASSESSMENT & GATEKEEPER
  // ==========================================

  triggerEvaluation() {
    const text = this.dom.essayInput.value.trim();
    if (!text) {
      this.showToast("Please write or paste an essay first before evaluating.", "error");
      return;
    }

    if (text.split(/\s+/).length < 50) {
      this.showToast("Essay is too short for a full Cambridge C1 evaluation. Write at least 150 words.", "error");
      return;
    }

    const evalResult = evaluateEssay(text, this.currentTopic);
    this.lastEvaluationResult = evalResult;
    this.meetsC1Threshold = evalResult.meetsC1;

    // Render results into modal
    this.dom.evalScoreTotal.textContent = evalResult.rawTotal;
    this.dom.evalPercentage.textContent = `${evalResult.percentage}%`;
    this.dom.evalVerdictTitle.textContent = evalResult.cefr.band;
    this.dom.evalVerdictTitle.className = `cefr-verdict-title ${evalResult.meetsC1 ? 'pass' : 'revise'}`;
    this.dom.evalVerdictDesc.textContent = evalResult.cefr.summary;

    // Scales breakdown
    const renderScale = (scoreEl, feedbackEl, scale) => {
      scoreEl.textContent = `${scale.score} / ${scale.max}`;
      feedbackEl.innerHTML = scale.feedback.map(fb => `<li>${fb}</li>`).join('');
    };

    renderScale(this.dom.scaleContentScore, this.dom.scaleContentFeedback, evalResult.scales.content);
    renderScale(this.dom.scaleCommScore, this.dom.scaleCommFeedback, evalResult.scales.communicative);
    renderScale(this.dom.scaleOrgScore, this.dom.scaleOrgFeedback, evalResult.scales.organisation);
    renderScale(this.dom.scaleLangScore, this.dom.scaleLangFeedback, evalResult.scales.language);

    // Gatekeeper Banner
    if (evalResult.meetsC1) {
      this.dom.gatekeeperBanner.className = "gatekeeper-banner unlocked";
      this.dom.gatekeeperHeading.textContent = "✓ Cambridge C1 Standard Confirmed";
      this.dom.gatekeeperSubtext.textContent = "Your text demonstrates the syntactic complexity and vocabulary breadth required by Cambridge University. Proceed to read your text aloud for pronunciation evaluation.";
      this.dom.gatekeeperActionBtn.className = "btn btn-emerald";
      this.dom.gatekeeperActionBtn.textContent = "Proceed to Phase 3: Speaking →";
      
      // Update step indicator
      this.dom.stepIndicator2.classList.add('completed');
      this.dom.stepIndicator3.classList.add('active');
      this.dom.step3LockIcon.innerHTML = "3";
    } else {
      this.dom.gatekeeperBanner.className = "gatekeeper-banner locked";
      this.dom.gatekeeperHeading.textContent = "Threshold Not Reached (Revision Recommended)";
      this.dom.gatekeeperSubtext.textContent = `Your draft scored below Cambridge C1 requirements (${evalResult.percentage}%). We recommend revising your text using the examiner notes above, or you may choose to practice speaking in Practice Mode.`;
      this.dom.gatekeeperActionBtn.className = "btn btn-secondary";
      this.dom.gatekeeperActionBtn.textContent = "Practice Speaking Anyway (Override)";
    }

    // Open Modal
    this.dom.evalModalBackdrop.classList.add('open');

    // Save to history
    this.saveSessionToHistory({
      type: 'writing',
      topicTitle: this.currentTopic.title,
      text: text,
      score: evalResult.rawTotal,
      percentage: evalResult.percentage,
      band: evalResult.cefr.band,
      meetsC1: evalResult.meetsC1,
      date: new Date().toISOString()
    });
  }

  closeEvaluationModal() {
    this.dom.evalModalBackdrop.classList.remove('open');
  }

  handleGatekeeperAction() {
    this.closeEvaluationModal();
    this.proceedToSpeakingPhase();
  }

  // ==========================================
  // PHASE 3: SPEAKING & PRONUNCIATION STUDIO
  // ==========================================

  proceedToSpeakingPhase() {
    const text = this.dom.essayInput.value.trim();
    if (!text) return;

    this.dom.mainWritingWorkspace.style.display = 'none';
    this.dom.speakingStudio.style.display = 'block';

    // Highlight step 3
    this.dom.stepIndicator1.classList.remove('active');
    this.dom.stepIndicator2.classList.remove('active');
    this.dom.stepIndicator3.classList.add('active');

    // Initialize speech engine with text
    this.speechEngine.setTargetText(text);

    // Render Teleprompter tokens
    this.renderTeleprompterTokens(this.speechEngine.targetTokens);

    // Reset Speaking metrics
    this.dom.liveSpeakingWpm.textContent = '0';
    this.dom.liveSpeakingAcc.textContent = '0%';
    this.dom.liveSpeakingTime.textContent = '00:00';
    this.dom.speakingReportPanel.style.display = 'none';

    this.showToast("Speaking Studio ready. Click words to hear model pronunciation, or press 'Start Reading Aloud'.", "info");
  }

  renderTeleprompterTokens(tokens) {
    this.dom.teleprompterText.innerHTML = tokens.map(token => `
      <span class="teleprompter-word ${token.status}" data-index="${token.index}" title="Click to hear native pronunciation: ${token.text}">
        ${token.text}
      </span>
    `).join(' ');

    // Add click to speak word
    this.dom.teleprompterText.querySelectorAll('.teleprompter-word').forEach(el => {
      el.addEventListener('click', () => {
        const wordText = el.textContent.trim();
        this.speechEngine.speakText(wordText, 0.85);
      });
    });
  }

  updateTeleprompterDisplay(tokens) {
    const spans = this.dom.teleprompterText.querySelectorAll('.teleprompter-word');
    tokens.forEach((token, i) => {
      if (spans[i]) {
        spans[i].className = `teleprompter-word ${token.status}`;
      }
    });
  }

  returnToWriting() {
    this.speechEngine.stopListening();
    this.speechEngine.stopSpeakingModel();
    this.dom.speakingStudio.style.display = 'none';
    this.dom.mainWritingWorkspace.style.display = 'grid';
    this.dom.stepIndicator3.classList.remove('active');
    this.dom.stepIndicator2.classList.add('active');
  }

  async startSpeakingSession() {
    await this.speechEngine.startListening(this.dom.visualizerCanvas);
  }

  stopSpeakingSession() {
    this.speechEngine.stopListening();
    const report = this.speechEngine.getFinalSpeakingAssessment();
    this.renderSpeakingReport(report);

    // Save to history
    this.saveSessionToHistory({
      type: 'speaking',
      topicTitle: this.currentTopic.title,
      accuracy: report.pronunciationAccuracy,
      wpm: report.wpm,
      band: report.speakingBand,
      duration: report.elapsedSeconds,
      date: new Date().toISOString()
    });
  }

  renderSpeakingReport(report) {
    this.dom.speakingReportPanel.style.display = 'block';
    this.dom.speakingReportPanel.innerHTML = `
      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 20px;">
        <h3>Official Cambridge Speaking Assessment</h3>
        <span class="cefr-pill ${report.meetsC1Speaking ? 'badge-c1' : 'badge-b2'}">${report.speakingBand}</span>
      </div>

      <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 16px; margin-bottom: 24px;">
        <div class="scale-card" style="text-align: center;">
          <div style="font-size: 11px; text-transform: uppercase; color: var(--text-muted);">Pronunciation Precision</div>
          <div style="font-size: 32px; font-weight: 800; color: var(--gold-light); font-family: var(--font-serif);">${report.pronunciationAccuracy}%</div>
          <div style="font-size: 12px; color: var(--emerald);">${report.matchedCount} words accurately recognized</div>
        </div>

        <div class="scale-card" style="text-align: center;">
          <div style="font-size: 11px; text-transform: uppercase; color: var(--text-muted);">Fluency & Pacing</div>
          <div style="font-size: 32px; font-weight: 800; color: var(--blue-accent); font-family: var(--font-serif);">${report.wpm} <span style="font-size: 14px;">WPM</span></div>
          <div style="font-size: 12px; color: var(--text-secondary);">Target: 130-160 WPM</div>
        </div>

        <div class="scale-card" style="text-align: center;">
          <div style="font-size: 11px; text-transform: uppercase; color: var(--text-muted);">Discourse Duration</div>
          <div style="font-size: 32px; font-weight: 800; color: var(--text-primary); font-family: var(--font-mono);">${this.formatSeconds(report.elapsedSeconds)}</div>
          <div style="font-size: 12px; color: var(--text-secondary);">${report.readRatio}% text covered</div>
        </div>
      </div>

      <div class="scales-grid">
        <div class="scale-card">
          <div class="scale-card-header">
            <span class="scale-name">Phonology & Individual Sounds</span>
            <span class="scale-score-pill">${report.scores.pronunciation.score} / 5</span>
          </div>
          <ul class="scale-feedback-list">
            ${report.scores.pronunciation.feedback.map(f => `<li>${f}</li>`).join('')}
          </ul>
        </div>

        <div class="scale-card">
          <div class="scale-card-header">
            <span class="scale-name">Speech Cadence & Rhythm</span>
            <span class="scale-score-pill">${report.scores.fluency.score} / 5</span>
          </div>
          <ul class="scale-feedback-list">
            ${report.scores.fluency.feedback.map(f => `<li>${f}</li>`).join('')}
          </ul>
        </div>
      </div>

      <div style="margin-top: 18px; text-align: center;">
        <button id="retrySpeakingBtn" class="btn btn-secondary">
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21.5 2v6h-6M2.5 22v-6h6M2 11.5a10 10 0 0 1 18.8-4.3M22 12.5a10 10 0 0 1-18.8 4.2"></path></svg>
          Record Another Attempt
        </button>
      </div>
    `;

    document.getElementById('retrySpeakingBtn')?.addEventListener('click', () => {
      this.speechEngine.setTargetText(this.dom.essayInput.value.trim());
      this.renderTeleprompterTokens(this.speechEngine.targetTokens);
      this.dom.speakingReportPanel.style.display = 'none';
      this.startSpeakingSession();
    });
  }

  playModelAudio() {
    const text = this.dom.essayInput.value.trim();
    if (!text) return;
    this.speechEngine.speakText(text, 0.92, () => {
      this.dom.playModelAudioBtn.style.display = 'inline-flex';
      this.dom.stopModelAudioBtn.style.display = 'none';
    });
  }

  stopModelAudio() {
    this.speechEngine.stopSpeakingModel();
    this.dom.playModelAudioBtn.style.display = 'inline-flex';
    this.dom.stopModelAudioBtn.style.display = 'none';
  }

  formatSeconds(totalSeconds) {
    const mins = Math.floor(totalSeconds / 60);
    const secs = totalSeconds % 60;
    return `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
  }

  // ==========================================
  // HISTORY & LOCALSTORAGE
  // ==========================================

  saveSessionToHistory(entry) {
    try {
      const history = JSON.parse(localStorage.getItem('cambridge_history') || '[]');
      history.unshift(entry);
      localStorage.setItem('cambridge_history', JSON.stringify(history.slice(0, 30)));
      this.renderHistory();
    } catch (e) {
      console.warn("Could not save to localStorage:", e);
    }
  }

  renderHistory() {
    try {
      const history = JSON.parse(localStorage.getItem('cambridge_history') || '[]');
      if (history.length === 0) {
        this.dom.historyList.innerHTML = `<div style="text-align: center; color: var(--text-muted); padding: 24px; font-size: 13px;">No past sessions yet. Complete an essay or speaking test to track your C1 progression.</div>`;
        return;
      }

      this.dom.historyList.innerHTML = history.map(item => `
        <div class="history-item">
          <div class="history-item-top">
            <span>${item.type === 'writing' ? 'Writing Task' : 'Speaking Test'}</span>
            <span>${new Date(item.date).toLocaleDateString()}</span>
          </div>
          <div class="history-item-title">${item.topicTitle}</div>
          <div class="history-item-scores">
            ${item.type === 'writing' 
              ? `<span>Score: ${item.score}/20 (${item.percentage}%)</span> • <span>${item.band}</span>`
              : `<span>Accuracy: ${item.accuracy}%</span> • <span>${item.wpm} WPM</span>`
            }
          </div>
        </div>
      `).join('');
    } catch (e) {
      // ignore
    }
  }

  openHistoryDrawer() {
    this.dom.historyDrawer.classList.add('open');
  }

  closeHistoryDrawer() {
    this.dom.historyDrawer.classList.remove('open');
  }

  clearHistory() {
    if (confirm("Clear your Cambridge training logs?")) {
      localStorage.removeItem('cambridge_history');
      this.renderHistory();
      this.showToast("History cleared.", "info");
    }
  }

  // ==========================================
  // TOAST ALERTS
  // ==========================================

  showToast(message, type = 'info') {
    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    toast.textContent = message;
    this.dom.toastContainer.appendChild(toast);

    setTimeout(() => {
      toast.style.opacity = '0';
      toast.style.transform = 'translateX(100%)';
      toast.style.transition = 'all 0.3s ease';
      setTimeout(() => toast.remove(), 300);
    }, 4000);
  }
}



  // Bootstrap Application on DOM ready
  document.addEventListener('DOMContentLoaded', () => {
    window.app = new CambridgeApp();
  });
})();