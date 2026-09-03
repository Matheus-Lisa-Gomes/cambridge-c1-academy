/**
 * Cambridge C1 (Advanced) & C2 (Proficiency) Topics and Target Vocabulary
 * Structured according to official Cambridge English assessment specifications.
 */

export const CAMBRIDGE_TOPICS = [
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
  }
];

export const CAMBRIDGE_CEFR_DESCRIPTORS = {
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
