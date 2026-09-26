/**
 * FluentEdge: C1â€“C2 English Training - Standalone Unified Bundle
 * Works directly on file:// as well as localhost http://
 */

(function() {
  'use strict';

  // ==========================================
  // 1. VOCABULARY LEXICON (2,100+ C1/C2 WORDS)
  // ==========================================
/**
 * FluentEdge C1/C2 Vocabulary Lexicon
 * Auto-generated from data/vocabulary.csv
 * Total entries: 2136
 */
const VOCABULARY_LEXICON = [
  {
    "headword": "exterior",
    "pos": "noun",
    "cefr": "C1",
    "definition": "the outer surface, external boundary, or outward appearance"
  },
  {
    "headword": "cloak",
    "pos": "noun",
    "cefr": "C1",
    "definition": "a loose outer garment, or a disguise concealing something"
  },
  {
    "headword": "timid",
    "pos": "adjective",
    "cefr": "C1",
    "definition": "showing a lack of courage, confidence, and easily frightened"
  },
  {
    "headword": "reluctantly",
    "pos": "adverb",
    "cefr": "C1",
    "definition": "with hesitation, reluctance, or unwillingness"
  },
  {
    "headword": "complexity",
    "pos": "noun",
    "cefr": "C1",
    "definition": "the state of being intricate or composed of interconnected parts"
  },
  {
    "headword": "concur",
    "pos": "verb",
    "cefr": "C1",
    "definition": "to agree with an opinion, or occur at the same time"
  },
  {
    "headword": "avid",
    "pos": "adjective",
    "cefr": "C1",
    "definition": "having or showing a keen interest in or enthusiasm for"
  },
  {
    "headword": "marvel",
    "pos": "verb",
    "cefr": "C1",
    "definition": "to be filled with wonder, astonishment, or admiration"
  },
  {
    "headword": "wing",
    "pos": "noun",
    "cefr": "C1",
    "definition": "lateral section or annex of a larger structure or organization"
  },
  {
    "headword": "enviable",
    "pos": "adverb",
    "cefr": "C1",
    "definition": "arousing or likely to arouse envy; highly desirable"
  },
  {
    "headword": "organizational",
    "pos": "adjective",
    "cefr": "C1",
    "definition": "relating to structured coordination, management, and planning"
  },
  {
    "headword": "psychiatrist",
    "pos": "noun",
    "cefr": "C1",
    "definition": "a medical physician specializing in mental disorders"
  },
  {
    "headword": "psychiatric",
    "pos": "adjective",
    "cefr": "C1",
    "definition": "relating to the diagnosis and treatment of mental illness"
  },
  {
    "headword": "clinical",
    "pos": "adjective",
    "cefr": "C1",
    "definition": "relating to medical diagnosis, or detached and unemotional"
  },
  {
    "headword": "corps",
    "pos": "noun",
    "cefr": "C1",
    "definition": "an organized subdivision of military forces or specialists"
  },
  {
    "headword": "forensic",
    "pos": "adjective",
    "cefr": "C1",
    "definition": "relating to scientific methods applied in crime investigation"
  },
  {
    "headword": "juvenile",
    "pos": "noun",
    "cefr": "C1",
    "definition": "youthful, immature, or a person not yet an adult"
  },
  {
    "headword": "juvenile",
    "pos": "adjective",
    "cefr": "C1",
    "definition": "youthful, immature, or a person not yet an adult"
  },
  {
    "headword": "jurisdiction",
    "pos": "noun",
    "cefr": "C1",
    "definition": "the official power to make legal decisions and enforce laws"
  },
  {
    "headword": "accustomed",
    "pos": "adjective",
    "cefr": "C1",
    "definition": "customary or usual; thoroughly familiar with something"
  },
  {
    "headword": "trauma",
    "pos": "noun",
    "cefr": "C1",
    "definition": "a deeply distressing or disturbing experience; physical wound"
  },
  {
    "headword": "traumatic",
    "pos": "adjective",
    "cefr": "C1",
    "definition": "emotionally disturbing or distressing; causing psychological wound"
  },
  {
    "headword": "constraint",
    "pos": "noun",
    "cefr": "C1",
    "definition": "a limitation, restriction, or stricture upon freedom"
  },
  {
    "headword": "revealing",
    "pos": "adjective",
    "cefr": "C1",
    "definition": "making interesting or significant information clearly known"
  },
  {
    "headword": "eccentric",
    "pos": "adjective",
    "cefr": "C1",
    "definition": "unconventional, slightly strange, and idiosyncratic in behavior"
  },
  {
    "headword": "sanctity",
    "pos": "noun",
    "cefr": "C1",
    "definition": "the state or quality of being holy, sacred, or inviolable"
  },
  {
    "headword": "conform",
    "pos": "verb",
    "cefr": "C1",
    "definition": "to comply with societal rules, standards, or peer norms"
  },
  {
    "headword": "norms",
    "pos": "noun",
    "cefr": "C1",
    "definition": "standard patterns of social behavior expected within a group"
  },
  {
    "headword": "quirk",
    "pos": "noun",
    "cefr": "C1",
    "definition": "a peculiar behavioral habit, strange aspect, or twist"
  },
  {
    "headword": "oddity",
    "pos": "noun",
    "cefr": "C1",
    "definition": "a strange, peculiar, or unusual person, thing, or trait"
  },
  {
    "headword": "compel",
    "pos": "verb",
    "cefr": "C1",
    "definition": "to force, constrain, or powerfully induce an action"
  },
  {
    "headword": "compulsion",
    "pos": "noun",
    "cefr": "C1",
    "definition": "an irresistible, irrational urge to perform an action"
  },
  {
    "headword": "conceive",
    "pos": "verb",
    "cefr": "C1",
    "definition": "to formulate an idea in the mind, or become pregnant"
  },
  {
    "headword": "conceivable",
    "pos": "adjective",
    "cefr": "C1",
    "definition": "capable of being imagined, grasped, or mentally believed"
  },
  {
    "headword": "assertion",
    "pos": "noun",
    "cefr": "C1",
    "definition": "a confident, decisive, and forceful declaration of fact"
  },
  {
    "headword": "individuality",
    "pos": "noun",
    "cefr": "C1",
    "definition": "the quality or character that distinguishes a person from all"
  },
  {
    "headword": "psyche",
    "pos": "noun",
    "cefr": "C1",
    "definition": "the human soul, mind, unconscious spirit, or personality"
  },
  {
    "headword": "conformity",
    "pos": "noun",
    "cefr": "C1",
    "definition": "compliance with standards, regulations, or conventional norms"
  },
  {
    "headword": "unconventional",
    "pos": "adjective",
    "cefr": "C1",
    "definition": "not conforming to accepted societal rules or orthodox practices"
  },
  {
    "headword": "congregate",
    "pos": "verb",
    "cefr": "C1",
    "definition": "to gather into a crowd, collective assembly, or mass"
  },
  {
    "headword": "rally",
    "pos": "verb",
    "cefr": "C1",
    "definition": "to bring together again in order to inspire renewed effort"
  },
  {
    "headword": "resent",
    "pos": "verb",
    "cefr": "C1",
    "definition": "to feel bitterness or indignation at a person or circumstance"
  },
  {
    "headword": "self-conscious",
    "pos": "adjective",
    "cefr": "C1",
    "definition": "feeling unduly aware of oneself, one's appearance, or actions"
  },
  {
    "headword": "wary",
    "pos": "adjective",
    "cefr": "C1",
    "definition": "marked by keen vigilance, caution, and prudent suspicion"
  },
  {
    "headword": "stoke",
    "pos": "verb",
    "cefr": "C1",
    "definition": "to encourage, fuel, or incite strong emotions or physical fire"
  },
  {
    "headword": "dynamically",
    "pos": "adverb",
    "cefr": "C1",
    "definition": "in a way that is vigorous, energetic, and constantly changing"
  },
  {
    "headword": "hostess",
    "pos": "noun",
    "cefr": "C1",
    "definition": "a woman who entertains or welcomes guests hospitably"
  },
  {
    "headword": "perpetuate",
    "pos": "verb",
    "cefr": "C1",
    "definition": "to make something continue indefinitely, especially an error"
  },
  {
    "headword": "naturalness",
    "pos": "noun",
    "cefr": "C1",
    "definition": "the state of being spontaneous, genuine, and unforced"
  },
  {
    "headword": "exhibitionist",
    "pos": "noun",
    "cefr": "C1",
    "definition": "a person who behaves extravagantly to attract public attention"
  },
  {
    "headword": "isolate",
    "pos": "verb",
    "cefr": "C1",
    "definition": "to place apart or detach from others in solitude"
  },
  {
    "headword": "isolated",
    "pos": "adjective",
    "cefr": "C1",
    "definition": "far away from others; solitary, remote, or insulated"
  },
  {
    "headword": "humble",
    "pos": "verb",
    "cefr": "C1",
    "definition": "having a modest estimate of one's importance; or to demean"
  },
  {
    "headword": "humble",
    "pos": "adjective",
    "cefr": "C1",
    "definition": "having a modest estimate of one's importance; or to demean"
  },
  {
    "headword": "refreshingly",
    "pos": "adverb",
    "cefr": "C1",
    "definition": "in an invigorating, pleasantly new, and welcome manner"
  },
  {
    "headword": "effortless",
    "pos": "adjective",
    "cefr": "C1",
    "definition": "requiring no apparent effort; easy, natural, and graceful"
  },
  {
    "headword": "vegetation",
    "pos": "noun",
    "cefr": "C1",
    "definition": "plant life considered collectively in a particular habitat"
  },
  {
    "headword": "brief",
    "pos": "verb",
    "cefr": "C1",
    "definition": "to instruct or inform someone thoroughly in advance"
  },
  {
    "headword": "respite",
    "pos": "noun",
    "cefr": "C1",
    "definition": "a short period of rest or relief from something difficult"
  },
  {
    "headword": "suffice",
    "pos": "verb",
    "cefr": "C1",
    "definition": "to be enough or adequate; meet the needs of a situation"
  },
  {
    "headword": "purity",
    "pos": "noun",
    "cefr": "C1",
    "definition": "freedom from adulteration, contamination, or moral guilt"
  },
  {
    "headword": "gruelling",
    "pos": "adjective",
    "cefr": "C1",
    "definition": "extremely tiring, demanding, punishing, and arduous to endure"
  },
  {
    "headword": "cast",
    "pos": "noun",
    "cefr": "C1",
    "definition": "plaster cast, mold"
  },
  {
    "headword": "cast",
    "pos": "verb",
    "cefr": "C1",
    "definition": "hire actors"
  },
  {
    "headword": "cast",
    "pos": "verb",
    "cefr": "C1",
    "definition": "say or suggest something (e.g. doubt)"
  },
  {
    "headword": "comprise",
    "pos": "verb",
    "cefr": "C1",
    "definition": "to consist of, be made up of, or contain elements"
  },
  {
    "headword": "plaster",
    "pos": "noun",
    "cefr": "C1",
    "definition": "a soft mixture used for coating walls, or apply a cast"
  },
  {
    "headword": "plaster",
    "pos": "verb",
    "cefr": "C1",
    "definition": "a soft mixture used for coating walls, or apply a cast"
  },
  {
    "headword": "darkroom",
    "pos": "noun",
    "cefr": "C1",
    "definition": "a light-sealed chamber where photographic film is developed"
  },
  {
    "headword": "induct",
    "pos": "verb",
    "cefr": "C1",
    "definition": "to admit formally into a post, order, or hall of fame"
  },
  {
    "headword": "induction",
    "pos": "noun",
    "cefr": "C1",
    "definition": "the process of inducting, or drawing general laws from data"
  },
  {
    "headword": "stock",
    "pos": "verb",
    "cefr": "C1",
    "definition": "to supply with goods or livestock, or have in regular store"
  },
  {
    "headword": "fossil",
    "pos": "noun",
    "cefr": "C1",
    "definition": "preserved petrified remains or impression of prehistoric life"
  },
  {
    "headword": "geological",
    "pos": "adjective",
    "cefr": "C1",
    "definition": "relating to the physical structure, rocks, and history of earth"
  },
  {
    "headword": "geologically",
    "pos": "adverb",
    "cefr": "C1",
    "definition": "in terms of geology, rock strata, or geological epochs"
  },
  {
    "headword": "house",
    "pos": "verb",
    "cefr": "C1",
    "definition": "to provide accommodation, shelter, or storage space for"
  },
  {
    "headword": "specimen",
    "pos": "noun",
    "cefr": "C1",
    "definition": "an individual animal, plant, piece of mineral used as example"
  },
  {
    "headword": "enormously",
    "pos": "adverb",
    "cefr": "C1",
    "definition": "to a very great degree, extent, volume, or immense scale"
  },
  {
    "headword": "gem",
    "pos": "noun",
    "cefr": "C1",
    "definition": "a precious stone, or an outstandingly prized person or asset"
  },
  {
    "headword": "explanatory",
    "pos": "adjective",
    "cefr": "C1",
    "definition": "serving to explain, clarify, or elucidate something"
  },
  {
    "headword": "vertical",
    "pos": "adjective",
    "cefr": "C1",
    "definition": "standing or pointing straight upward perpendicular to a plane"
  },
  {
    "headword": "knowledgeable",
    "pos": "adjective",
    "cefr": "C1",
    "definition": "intelligent and well informed about a subject or culture"
  },
  {
    "headword": "ordinarily",
    "pos": "adverb",
    "cefr": "C1",
    "definition": "under normal circumstances; usually or customary"
  },
  {
    "headword": "hanging",
    "pos": "noun",
    "cefr": "C1",
    "definition": "the suspension of a person by the neck, or decorative tapestry"
  },
  {
    "headword": "hanging",
    "pos": "noun",
    "cefr": "C1",
    "definition": "the suspension of a person by the neck, or decorative tapestry"
  },
  {
    "headword": "tomb",
    "pos": "noun",
    "cefr": "C1",
    "definition": "a large vault, typically an underground one, for burying dead"
  },
  {
    "headword": "formulate",
    "pos": "verb",
    "cefr": "C1",
    "definition": "to create, prepare, or express systematically and methodically"
  },
  {
    "headword": "resin",
    "pos": "noun",
    "cefr": "C1",
    "definition": "a sticky flammable organic substance exuded by trees"
  },
  {
    "headword": "sacrifice",
    "pos": "noun",
    "cefr": "C1",
    "definition": "the act of giving up something valued for a higher objective"
  },
  {
    "headword": "sacrifice",
    "pos": "verb",
    "cefr": "C1",
    "definition": "the act of giving up something valued for a higher objective"
  },
  {
    "headword": "cleanly",
    "pos": "adverb",
    "cefr": "C1",
    "definition": "in a clean, smooth, precise, and unblemished manner"
  },
  {
    "headword": "endorsement",
    "pos": "noun",
    "cefr": "C1",
    "definition": "an act of giving public approval or formal support to"
  },
  {
    "headword": "stretching",
    "pos": "noun",
    "cefr": "C1",
    "definition": "the act of extending one's limbs or boundaries to maximum"
  },
  {
    "headword": "continuity",
    "pos": "noun",
    "cefr": "C1",
    "definition": "the unbroken and consistent existence or operation of something"
  },
  {
    "headword": "shambles",
    "pos": "noun",
    "cefr": "C1",
    "definition": "a state of total disorder, catastrophic chaos, or ruin"
  },
  {
    "headword": "claustrophobic",
    "pos": "adjective",
    "cefr": "C1",
    "definition": "inducing or suffering from acute fear of confined places"
  },
  {
    "headword": "claustrophobia",
    "pos": "noun",
    "cefr": "C1",
    "definition": "extreme or irrational fear of confined or enclosed spaces"
  },
  {
    "headword": "headstrong",
    "pos": "adjective",
    "cefr": "C1",
    "definition": "energetically willful, obstinate, and determined to have one's way"
  },
  {
    "headword": "tact",
    "pos": "noun",
    "cefr": "C1",
    "definition": "skill and sensitivity in dealing with others or difficult issues"
  },
  {
    "headword": "tactful",
    "pos": "adjective",
    "cefr": "C1",
    "definition": "having or showing a sense of what is fitting and considerate"
  },
  {
    "headword": "tactfully",
    "pos": "adverb",
    "cefr": "C1",
    "definition": "with skill and sensitivity in dealing with people and feelings"
  },
  {
    "headword": "blister",
    "pos": "noun",
    "cefr": "C1",
    "definition": "to swell, bubble, or harshly denounce and criticize"
  },
  {
    "headword": "blister",
    "pos": "verb",
    "cefr": "C1",
    "definition": "to swell, bubble, or harshly denounce and criticize"
  },
  {
    "headword": "sponsorship",
    "pos": "noun",
    "cefr": "C1",
    "definition": "the position of being a sponsor or financial underwriter"
  },
  {
    "headword": "ego",
    "pos": "noun",
    "cefr": "C1",
    "definition": "a person's sense of self-esteem, identity, or self-importance"
  },
  {
    "headword": "class",
    "pos": "verb",
    "cefr": "C1",
    "definition": "to categorize, assign, or regard as belonging to a rank"
  },
  {
    "headword": "saloon",
    "pos": "noun",
    "cefr": "C1",
    "definition": "a public bar, gathering hall, or passenger motorcar"
  },
  {
    "headword": "lap",
    "pos": "noun",
    "cefr": "C1",
    "definition": "e.g. run a lap"
  },
  {
    "headword": "beforehand",
    "pos": "adverb",
    "cefr": "C1",
    "definition": "prior to an event; in advance or anticipated earlier"
  },
  {
    "headword": "slob",
    "pos": "noun",
    "cefr": "C1",
    "definition": "a lazy, untidy, and boorish or slovenly person"
  },
  {
    "headword": "coverage",
    "pos": "noun",
    "cefr": "C1",
    "definition": "the extent to which something deals with or reports an issue"
  },
  {
    "headword": "unplug",
    "pos": "verb",
    "cefr": "C1",
    "definition": "to disconnect from an electrical source or digital routine"
  },
  {
    "headword": "gadget",
    "pos": "noun",
    "cefr": "C1",
    "definition": "a small mechanical or electronic device with a practical use"
  },
  {
    "headword": "rediscover",
    "pos": "verb",
    "cefr": "C1",
    "definition": "to find or become aware of something once again"
  },
  {
    "headword": "subtly",
    "pos": "adverb",
    "cefr": "C1",
    "definition": "in a manner so delicate or precise as to be difficult to analyze"
  },
  {
    "headword": "brainwash",
    "pos": "verb",
    "cefr": "C1",
    "definition": "to pressurize someone into adopting radically different beliefs"
  },
  {
    "headword": "brainwashing",
    "pos": "noun",
    "cefr": "C1",
    "definition": "the systematic process of indoctrinating someone forcibly"
  },
  {
    "headword": "implicate",
    "pos": "verb",
    "cefr": "C1",
    "definition": "to show someone to be involved in a crime or fault"
  },
  {
    "headword": "craft",
    "pos": "verb",
    "cefr": "C1",
    "definition": "an activity involving skill in making things by hand; art"
  },
  {
    "headword": "malfunction",
    "pos": "verb",
    "cefr": "C1",
    "definition": "to fail to function normally or properly; breakdown"
  },
  {
    "headword": "dependent",
    "pos": "noun",
    "cefr": "C1",
    "definition": "contingent on or determined by an external entity"
  },
  {
    "headword": "wayside",
    "pos": "noun",
    "cefr": "C1",
    "definition": "the border, verge, or edge beside a road or path"
  },
  {
    "headword": "expire",
    "pos": "verb",
    "cefr": "C1",
    "definition": "to come to an end, cease to be valid, or breathe one's last"
  },
  {
    "headword": "con",
    "pos": "verb",
    "cefr": "C1",
    "definition": "a persuasive trick or scam; or an argument against a proposal"
  },
  {
    "headword": "con",
    "pos": "noun",
    "cefr": "C1",
    "definition": "a persuasive trick or scam; or an argument against a proposal"
  },
  {
    "headword": "puzzle",
    "pos": "verb",
    "cefr": "C1",
    "definition": "to cause someone to feel confused or perplexed; an enigma"
  },
  {
    "headword": "damply",
    "pos": "adverb",
    "cefr": "C1",
    "definition": "in a moist, clammy, humid, or slightly soggy manner"
  },
  {
    "headword": "ghostly",
    "pos": "adjective",
    "cefr": "C1",
    "definition": "resembling, or characteristic of, a ghost; pale and spectral"
  },
  {
    "headword": "carrier",
    "pos": "noun",
    "cefr": "C1",
    "definition": "a person, entity, or mechanism that conveys or transmits something"
  },
  {
    "headword": "washtub",
    "pos": "noun",
    "cefr": "C1",
    "definition": "a deep basin or vessel used for washing garments"
  },
  {
    "headword": "apt",
    "pos": "adjective",
    "cefr": "C1",
    "definition": "appropriate or suitable in the circumstances; quick to learn"
  },
  {
    "headword": "apt to",
    "pos": "verb",
    "cefr": "C1",
    "definition": "having a natural tendency or inclination to do something"
  },
  {
    "headword": "portable",
    "pos": "adjective",
    "cefr": "C1",
    "definition": "easily carried or moved around; lightweight in design"
  },
  {
    "headword": "portable",
    "pos": "noun",
    "cefr": "C1",
    "definition": "easily carried or moved around; lightweight in design"
  },
  {
    "headword": "ornamental",
    "pos": "adjective",
    "cefr": "C1",
    "definition": "serving or intended as an artistic or aesthetic decoration"
  },
  {
    "headword": "placid",
    "pos": "adjective",
    "cefr": "C1",
    "definition": "not easily upset or excited; calm, tranquil, and peaceful"
  },
  {
    "headword": "placidly",
    "pos": "adverb",
    "cefr": "C1",
    "definition": "in a calm, tranquil, serene, and undisturbed manner"
  },
  {
    "headword": "unmanageable",
    "pos": "adjective",
    "cefr": "C1",
    "definition": "exceedingly difficult or recalcitrant to direct or control"
  },
  {
    "headword": "appliance",
    "pos": "noun",
    "cefr": "C1",
    "definition": "a device or piece of equipment designed for household tasks"
  },
  {
    "headword": "relinquish",
    "pos": "verb",
    "cefr": "C1",
    "definition": "to voluntarily cease to claim or give up rights or assets"
  },
  {
    "headword": "tedious",
    "pos": "adjective",
    "cefr": "C1",
    "definition": "too long, slow, or dull; tiresome, monotonous, and boring"
  },
  {
    "headword": "tedium",
    "pos": "noun",
    "cefr": "C1",
    "definition": "the state of being tedious, monotonous, and wearisome; boredom"
  },
  {
    "headword": "exert",
    "pos": "verb",
    "cefr": "C1",
    "definition": "to apply or bring to bear a force, influence, or effort"
  },
  {
    "headword": "extortion",
    "pos": "noun",
    "cefr": "C1",
    "definition": "the practice of obtaining money or advantages through coercion"
  },
  {
    "headword": "alleviate",
    "pos": "verb",
    "cefr": "C1",
    "definition": "to make suffering, deficiency, or a problem less severe"
  },
  {
    "headword": "elaborate",
    "pos": "adjective",
    "cefr": "C1",
    "definition": "detailed and complicated in design, or to develop in detail"
  },
  {
    "headword": "elaborate",
    "pos": "verb",
    "cefr": "C1",
    "definition": "detailed and complicated in design, or to develop in detail"
  },
  {
    "headword": "elaboration",
    "pos": "noun",
    "cefr": "C1",
    "definition": "the act of adding detail, or an intricate development"
  },
  {
    "headword": "detest",
    "pos": "verb",
    "cefr": "C1",
    "definition": "to feel intense abhorrence, antipathy, or hatred toward"
  },
  {
    "headword": "detestable",
    "pos": "adjective",
    "cefr": "C1",
    "definition": "deserving of intense hatred, loathing, and disgust"
  },
  {
    "headword": "suds",
    "pos": "noun",
    "cefr": "C1",
    "definition": "the froth made from soap and water; lather or foam"
  },
  {
    "headword": "agreeable",
    "pos": "adjective",
    "cefr": "C1",
    "definition": "pleasant, enjoyable, or willing to assent to something"
  },
  {
    "headword": "prowl",
    "pos": "verb",
    "cefr": "C1",
    "definition": "to move around stealthily in search of prey or opportunity"
  },
  {
    "headword": "speculate",
    "pos": "verb",
    "cefr": "C1",
    "definition": "to form a theory or conjecture about a subject without proof"
  },
  {
    "headword": "speculation",
    "pos": "noun",
    "cefr": "C1",
    "definition": "the forming of a theory or conjecture without firm evidence"
  },
  {
    "headword": "speculative",
    "pos": "adjective",
    "cefr": "C1",
    "definition": "engaged in or based on conjecture rather than knowledge"
  },
  {
    "headword": "peacock",
    "pos": "noun",
    "cefr": "C1",
    "definition": "a male peafowl with brilliant plumage, or a vain person"
  },
  {
    "headword": "disdain",
    "pos": "noun",
    "cefr": "C1",
    "definition": "the feeling that someone is unworthy of one's consideration"
  },
  {
    "headword": "reenact",
    "pos": "verb",
    "cefr": "C1",
    "definition": "to act out a past event again in theatrical form"
  },
  {
    "headword": "torment",
    "pos": "verb",
    "cefr": "C1",
    "definition": "severe physical or mental suffering, or cause severe distress"
  },
  {
    "headword": "torment",
    "pos": "noun",
    "cefr": "C1",
    "definition": "severe physical or mental suffering, or cause severe distress"
  },
  {
    "headword": "extravagance",
    "pos": "noun",
    "cefr": "C1",
    "definition": "lack of restraint in spending money or excessive indulgence"
  },
  {
    "headword": "exploit",
    "pos": "verb",
    "cefr": "C1",
    "definition": "to make full use of, or treat someone unfairly for benefit"
  },
  {
    "headword": "exploitation",
    "pos": "noun",
    "cefr": "C1",
    "definition": "the action of making unfair use of someone or resources"
  },
  {
    "headword": "mechanism",
    "pos": "noun",
    "cefr": "C1",
    "definition": "a system of moving parts, or method of achieving a result"
  },
  {
    "headword": "hence",
    "pos": "adverb",
    "cefr": "C1",
    "definition": "as a consequence; for this reason; or from this time forward"
  },
  {
    "headword": "offspring",
    "pos": "noun",
    "cefr": "C1",
    "definition": "a person's child or an animal's young; progeny"
  },
  {
    "headword": "implicate",
    "pos": "verb",
    "cefr": "C1",
    "definition": "to show someone to be involved in a crime or fault"
  },
  {
    "headword": "fit",
    "pos": "adjective",
    "cefr": "C1",
    "definition": "appropriate"
  },
  {
    "headword": "oblige",
    "pos": "verb",
    "cefr": "C1",
    "definition": "to make someone legally or morally bound to an action"
  },
  {
    "headword": "drive",
    "pos": "verb",
    "cefr": "C1",
    "definition": "an innate biological urge, high ambition, or motivated energy"
  },
  {
    "headword": "drive",
    "pos": "noun",
    "cefr": "C1",
    "definition": "an innate biological urge, high ambition, or motivated energy"
  },
  {
    "headword": "collaborate",
    "pos": "verb",
    "cefr": "C1",
    "definition": "to work jointly on an intellectual or creative endeavor"
  },
  {
    "headword": "collaborator",
    "pos": "noun",
    "cefr": "C1",
    "definition": "a person who works jointly on a project or with an occupier"
  },
  {
    "headword": "collaboration",
    "pos": "noun",
    "cefr": "C1",
    "definition": "the action of working together to produce a shared outcome"
  },
  {
    "headword": "collaborative",
    "pos": "adjective",
    "cefr": "C1",
    "definition": "produced by or involving two or more parties working jointly"
  },
  {
    "headword": "showy",
    "pos": "adjective",
    "cefr": "C1",
    "definition": "having a striking, extravagant, or ostentatious appearance"
  },
  {
    "headword": "wrangle",
    "pos": "verb",
    "cefr": "C1",
    "definition": "to engage in a protracted, noisy, or acrimonious dispute"
  },
  {
    "headword": "premise",
    "pos": "noun",
    "cefr": "C1",
    "definition": "a previous statement or proposition from which another is inferred"
  },
  {
    "headword": "advantageous",
    "pos": "adjective",
    "cefr": "C1",
    "definition": "involving or creating favorable circumstances for success"
  },
  {
    "headword": "parasite",
    "pos": "noun",
    "cefr": "C1",
    "definition": "an organism that lives on or in another organism at its cost"
  },
  {
    "headword": "fanciful",
    "pos": "adjective",
    "cefr": "C1",
    "definition": "over-imaginative, unrealistic, quaint, or whimsical in design"
  },
  {
    "headword": "poise",
    "pos": "noun",
    "cefr": "C1",
    "definition": "graceful and elegant bearing in a person; composure"
  },
  {
    "headword": "customary",
    "pos": "adjective",
    "cefr": "C1",
    "definition": "according to established custom, habit, or standard etiquette"
  },
  {
    "headword": "insightful",
    "pos": "adjective",
    "cefr": "C1",
    "definition": "having or showing an accurate and deep understanding"
  },
  {
    "headword": "notable",
    "pos": "adjective",
    "cefr": "C1",
    "definition": "worthy of attention or notice; remarkable and prominent"
  },
  {
    "headword": "vicious",
    "pos": "adjective",
    "cefr": "C1",
    "definition": "deliberately cruel, savage, malicious, or spiteful"
  },
  {
    "headword": "viciously",
    "pos": "adverb",
    "cefr": "C1",
    "definition": "in a fiercely brutal, malicious, or savage manner"
  },
  {
    "headword": "pupil",
    "pos": "noun",
    "cefr": "C1",
    "definition": "a student, or the dark circular opening in center of iris"
  },
  {
    "headword": "withdrawn",
    "pos": "adjective",
    "cefr": "C1",
    "definition": "socially introverted, reserved, and reluctant to communicate"
  },
  {
    "headword": "withdrawal",
    "pos": "noun",
    "cefr": "C1",
    "definition": "the act of removing, retreating, or disengaging from a sphere"
  },
  {
    "headword": "torturous",
    "pos": "adjective",
    "cefr": "C1",
    "definition": "characterized by, involving, or causing excruciating pain or torture"
  },
  {
    "headword": "depict",
    "pos": "verb",
    "cefr": "C1",
    "definition": "to represent or portray by art, painting, or vivid prose"
  },
  {
    "headword": "depiction",
    "pos": "noun",
    "cefr": "C1",
    "definition": "a portrayal, illustration, or rendering of a subject"
  },
  {
    "headword": "upheaval",
    "pos": "noun",
    "cefr": "C1",
    "definition": "a sudden, violent disruption or radical structural upheaval"
  },
  {
    "headword": "shortlist",
    "pos": "verb",
    "cefr": "C1",
    "definition": "a list of selected candidates from which a winner is chosen"
  },
  {
    "headword": "shortlist",
    "pos": "noun",
    "cefr": "C1",
    "definition": "a list of selected candidates from which a winner is chosen"
  },
  {
    "headword": "uneventful",
    "pos": "adjective",
    "cefr": "C1",
    "definition": "marked by tranquility and an absence of striking incidents"
  },
  {
    "headword": "pertinent",
    "pos": "adjective",
    "cefr": "C1",
    "definition": "relevant or applicable to a particular matter; apposite"
  },
  {
    "headword": "pertain to",
    "pos": "verb",
    "cefr": "C1",
    "definition": "to be appropriate, related, or applicable to a subject"
  },
  {
    "headword": "daydream",
    "pos": "noun",
    "cefr": "C1",
    "definition": "a pleasant visionary contemplation or reverie while awake"
  },
  {
    "headword": "daydream",
    "pos": "verb",
    "cefr": "C1",
    "definition": "a pleasant visionary contemplation or reverie while awake"
  },
  {
    "headword": "protagonist",
    "pos": "noun",
    "cefr": "C1",
    "definition": "the leading character in a drama, or active proponent"
  },
  {
    "headword": "simplicity",
    "pos": "noun",
    "cefr": "C1",
    "definition": "the quality or condition of being easy to understand or unadorned"
  },
  {
    "headword": "blockbuster",
    "pos": "noun",
    "cefr": "C1",
    "definition": "a thing of great power or huge commercial and popular success"
  },
  {
    "headword": "resonate",
    "pos": "verb",
    "cefr": "C1",
    "definition": "to produce a deep, reverberating sound, or evoke empathy"
  },
  {
    "headword": "sequel",
    "pos": "noun",
    "cefr": "C1",
    "definition": "a published work that continues the narrative of an earlier one"
  },
  {
    "headword": "irony",
    "pos": "noun",
    "cefr": "C1",
    "definition": "an incongruity between expectation and reality, or dry wit"
  },
  {
    "headword": "acidic",
    "pos": "adjective",
    "cefr": "C1",
    "definition": "containing acid, tasting sour, or sharply critical"
  },
  {
    "headword": "align",
    "pos": "verb",
    "cefr": "C1",
    "definition": "to place in a line or bring into cooperation and agreement"
  },
  {
    "headword": "alignment",
    "pos": "noun",
    "cefr": "C1",
    "definition": "arrangement in a straight line or alliance with a faction"
  },
  {
    "headword": "manipulation",
    "pos": "noun",
    "cefr": "C1",
    "definition": "the action of manipulating, handling, or scheming unfairly"
  },
  {
    "headword": "suitor",
    "pos": "noun",
    "cefr": "C1",
    "definition": "a man who pursues a relationship with a woman with a view to marriage"
  },
  {
    "headword": "deceit",
    "pos": "noun",
    "cefr": "C1",
    "definition": "the practice of misleading, lying, or concealing truth"
  },
  {
    "headword": "alienate",
    "pos": "verb",
    "cefr": "C1",
    "definition": "to cause someone to feel isolated, estranged, or hostile"
  },
  {
    "headword": "persuasively",
    "pos": "adverb",
    "cefr": "C1",
    "definition": "in a convincing manner that wins agreement or compliance"
  },
  {
    "headword": "compel",
    "pos": "verb",
    "cefr": "C1",
    "definition": "to force, constrain, or powerfully induce an action"
  },
  {
    "headword": "confinement",
    "pos": "noun",
    "cefr": "C1",
    "definition": "the state of being restricted, imprisoned, or immobilized"
  },
  {
    "headword": "minutiae",
    "pos": "noun",
    "cefr": "C1",
    "definition": "the small, precise, or trivial details of something"
  },
  {
    "headword": "peasant",
    "pos": "noun",
    "cefr": "C1",
    "definition": "a poor smallholder or agricultural laborer of low status"
  },
  {
    "headword": "inexplicable",
    "pos": "adjective",
    "cefr": "C1",
    "definition": "unable to be explained, justified, or accounted for"
  },
  {
    "headword": "inexplicably",
    "pos": "adverb",
    "cefr": "C1",
    "definition": "in a manner that defies rational explanation or logic"
  },
  {
    "headword": "pigeon",
    "pos": "noun",
    "cefr": "C1",
    "definition": "a stout-bodied bird, or an easily swindled target"
  },
  {
    "headword": "harass",
    "pos": "verb",
    "cefr": "C1",
    "definition": "to subject someone to aggressive pressure, torment, or intimidation"
  },
  {
    "headword": "harassment",
    "pos": "noun",
    "cefr": "C1",
    "definition": "aggressive pressure, unwanted intimidation, or persistent torment"
  },
  {
    "headword": "believably",
    "pos": "adverb",
    "cefr": "C1",
    "definition": "in a manner that inspires rational credence and plausibility"
  },
  {
    "headword": "readable",
    "pos": "adjective",
    "cefr": "C1",
    "definition": "clear and easy to read; enjoyable and engaging in prose"
  },
  {
    "headword": "cleverness",
    "pos": "noun",
    "cefr": "C1",
    "definition": "the quality of being ingenious, quick-witted, or mentally sharp"
  },
  {
    "headword": "persecute",
    "pos": "verb",
    "cefr": "C1",
    "definition": "to subject someone to hostility and ill-treatment systematically"
  },
  {
    "headword": "persecution",
    "pos": "noun",
    "cefr": "C1",
    "definition": "hostility and ill-treatment, especially because of race or faith"
  },
  {
    "headword": "smug",
    "pos": "adjective",
    "cefr": "C1",
    "definition": "having or showing an excessive pride in oneself or achievements"
  },
  {
    "headword": "smugly",
    "pos": "adverb",
    "cefr": "C1",
    "definition": "in an irritatingly self-satisfied, complacent manner"
  },
  {
    "headword": "ferocious",
    "pos": "adjective",
    "cefr": "C1",
    "definition": "savagely fierce, cruel, violent, or intensely aggressive"
  },
  {
    "headword": "ferociously",
    "pos": "adverb",
    "cefr": "C1",
    "definition": "in a savagely fierce, ruthless, or aggressively intense way"
  },
  {
    "headword": "hostile",
    "pos": "adjective",
    "cefr": "C1",
    "definition": "showing or feeling active opposition, animosity, or enmity"
  },
  {
    "headword": "hostility",
    "pos": "noun",
    "cefr": "C1",
    "definition": "unfriendly or aggressive behavior, antagonism, or animosity"
  },
  {
    "headword": "dismay",
    "pos": "verb",
    "cefr": "C1",
    "definition": "consternation, distress, and grief caused by unexpected crisis"
  },
  {
    "headword": "dismay",
    "pos": "noun",
    "cefr": "C1",
    "definition": "consternation, distress, and grief caused by unexpected crisis"
  },
  {
    "headword": "methodical",
    "pos": "adjective",
    "cefr": "C1",
    "definition": "done according to a systematic, established, orderly form"
  },
  {
    "headword": "ruthless",
    "pos": "adjective",
    "cefr": "C1",
    "definition": "having or showing no pity or compassion for others"
  },
  {
    "headword": "ruthlessness",
    "pos": "noun",
    "cefr": "C1",
    "definition": "the quality of having no pity, mercy, or compassion"
  },
  {
    "headword": "talkative",
    "pos": "adjective",
    "cefr": "C1",
    "definition": "fond of or given to talking; garrulous and loquacious"
  },
  {
    "headword": "awe",
    "pos": "verb",
    "cefr": "C1",
    "definition": "a feeling of reverential respect mixed with fear or wonder"
  },
  {
    "headword": "clan",
    "pos": "noun",
    "cefr": "C1",
    "definition": "a group of close-knit, interrelated families or united faction"
  },
  {
    "headword": "privileged",
    "pos": "adjective",
    "cefr": "C1",
    "definition": "having special rights, advantages, or immunities"
  },
  {
    "headword": "crumble",
    "pos": "verb",
    "cefr": "C1",
    "definition": "to disintegrate gradually into small fragments or collapse"
  },
  {
    "headword": "crumb",
    "pos": "noun",
    "cefr": "C1",
    "definition": "a tiny fragment of bread, cake, or small trace of something"
  },
  {
    "headword": "pace",
    "pos": "verb",
    "cefr": "C1",
    "definition": "speed in walking, running, or moving; or a single step"
  },
  {
    "headword": "closeness",
    "pos": "noun",
    "cefr": "C1",
    "definition": "intimacy, proximity, or high density of mutual affection"
  },
  {
    "headword": "rarity",
    "pos": "noun",
    "cefr": "C1",
    "definition": "the state or quality of being rare, scarce, or unique"
  },
  {
    "headword": "evoke",
    "pos": "verb",
    "cefr": "C1",
    "definition": "to bring or recall a feeling, memory, or image to mind"
  },
  {
    "headword": "repel",
    "pos": "verb",
    "cefr": "C1",
    "definition": "to drive or force back, or cause feelings of revulsion"
  },
  {
    "headword": "repellant",
    "pos": "noun",
    "cefr": "C1",
    "definition": "causing disgust, or able to repel a particular substance"
  },
  {
    "headword": "repellant",
    "pos": "adjective",
    "cefr": "C1",
    "definition": "causing disgust, or able to repel a particular substance"
  },
  {
    "headword": "aqua",
    "pos": "adjective",
    "cefr": "C1",
    "definition": "a light greenish-blue color resembling clear ocean water"
  },
  {
    "headword": "aquarium",
    "pos": "noun",
    "cefr": "C1",
    "definition": "a transparent tank of water in which aquatic animals are kept"
  },
  {
    "headword": "insightful",
    "pos": "adjective",
    "cefr": "C1",
    "definition": "having or showing an accurate and deep understanding"
  },
  {
    "headword": "insightfully",
    "pos": "adverb",
    "cefr": "C1",
    "definition": "with perceptive, profound, and penetrating understanding"
  },
  {
    "headword": "flashback",
    "pos": "noun",
    "cefr": "C1",
    "definition": "a sudden vivid memory of an event in the past"
  },
  {
    "headword": "self-worth",
    "pos": "noun",
    "cefr": "C1",
    "definition": "a sense of one's own value, competence, and self-respect"
  },
  {
    "headword": "agonize",
    "pos": "verb",
    "cefr": "C1",
    "definition": "to undergo extreme mental anguish or worry intensely"
  },
  {
    "headword": "cite",
    "pos": "verb",
    "cefr": "C1",
    "definition": "to refer to a book, author, or passage as academic evidence"
  },
  {
    "headword": "citation",
    "pos": "noun",
    "cefr": "C1",
    "definition": "a quotation or formal reference to an authoritative source"
  },
  {
    "headword": "recite",
    "pos": "verb",
    "cefr": "C1",
    "definition": "to repeat aloud or declaim a poem or passage from memory"
  },
  {
    "headword": "ecstasy",
    "pos": "noun",
    "cefr": "C1",
    "definition": "an overwhelming feeling of immense joy or rapturous delight"
  },
  {
    "headword": "ecstatic",
    "pos": "adjective",
    "cefr": "C1",
    "definition": "feeling or expressing overwhelming happiness or joyful excitement"
  },
  {
    "headword": "ecstatically",
    "pos": "adverb",
    "cefr": "C1",
    "definition": "with boundless, rapturous joy and overwhelming delight"
  },
  {
    "headword": "pleasurable",
    "pos": "adjective",
    "cefr": "C1",
    "definition": "giving a sense of enjoyment, satisfaction, or delight"
  },
  {
    "headword": "nature",
    "pos": "noun",
    "cefr": "C1",
    "definition": "basic quality of a noun"
  },
  {
    "headword": "substantially",
    "pos": "adverb",
    "cefr": "C1",
    "definition": "to a great or significant extent; for the most part"
  },
  {
    "headword": "favorably/favourably",
    "pos": "adverb",
    "cefr": "C1",
    "definition": "with approval, endorsement, or in a manner producing advantage"
  },
  {
    "headword": "diversity",
    "pos": "noun",
    "cefr": "C1",
    "definition": "the state of having many different forms, types, or ideas"
  },
  {
    "headword": "elitist",
    "pos": "noun",
    "cefr": "C1",
    "definition": "advocating leadership by an elite, or snobbishly superior"
  },
  {
    "headword": "grumble",
    "pos": "verb",
    "cefr": "C1",
    "definition": "to complain about something in a bad-tempered, muttering way"
  },
  {
    "headword": "rumble",
    "pos": "verb",
    "cefr": "C1",
    "definition": "to make a continuous deep, resonant sound, or brawl"
  },
  {
    "headword": "rumble",
    "pos": "noun",
    "cefr": "C1",
    "definition": "to make a continuous deep, resonant sound, or brawl"
  },
  {
    "headword": "neglectful",
    "pos": "adjective",
    "cefr": "C1",
    "definition": "not giving proper care or attention to someone or something"
  },
  {
    "headword": "roundup",
    "pos": "noun",
    "cefr": "C1",
    "definition": "a systematic gathering together of people, animals, or facts"
  },
  {
    "headword": "conscientious",
    "pos": "adjective",
    "cefr": "C1",
    "definition": "wishing to do what is right, thorough, and scrupulous"
  },
  {
    "headword": "conscientiously",
    "pos": "adverb",
    "cefr": "C1",
    "definition": "with diligent, scrupulous care and moral responsibility"
  },
  {
    "headword": "indefinite",
    "pos": "adjective",
    "cefr": "C1",
    "definition": "lasting for an unknown length; not clearly defined"
  },
  {
    "headword": "indefinitely",
    "pos": "adverb",
    "cefr": "C1",
    "definition": "for an unlimited or unspecified period of time"
  },
  {
    "headword": "atmospheric",
    "pos": "adjective",
    "cefr": "C1",
    "definition": "creating a distinctive mood, aesthetic tone, or ambience"
  },
  {
    "headword": "fuse",
    "pos": "verb",
    "cefr": "C1",
    "definition": "to join or blend together to form a single entity; melt"
  },
  {
    "headword": "fusion",
    "pos": "noun",
    "cefr": "C1",
    "definition": "the process or result of joining two or more things together"
  },
  {
    "headword": "robust",
    "pos": "adjective",
    "cefr": "C1",
    "definition": "strong and healthy; vigorous and resilient against failure"
  },
  {
    "headword": "robustly",
    "pos": "adverb",
    "cefr": "C1",
    "definition": "in a sturdy, vigorous, resilient, and forceful manner"
  },
  {
    "headword": "dismal",
    "pos": "adjective",
    "cefr": "C1",
    "definition": "gloomy, depressing, cheerless, or miserably dreadful"
  },
  {
    "headword": "dismally",
    "pos": "adverb",
    "cefr": "C1",
    "definition": "in a gloomy, dispiriting, or terribly inadequate manner"
  },
  {
    "headword": "crave",
    "pos": "verb",
    "cefr": "C1",
    "definition": "to feel a powerful, urgent, or insatiable desire for"
  },
  {
    "headword": "craving",
    "pos": "noun",
    "cefr": "C1",
    "definition": "a powerful, compelling desire or appetite for something"
  },
  {
    "headword": "prospective",
    "pos": "adjective",
    "cefr": "C1",
    "definition": "expected or expecting to be something specified in future"
  },
  {
    "headword": "swap",
    "pos": "verb",
    "cefr": "C1",
    "definition": "to take part in an exchange of goods, positions, or roles"
  },
  {
    "headword": "remotely",
    "pos": "adverb",
    "cefr": "C1",
    "definition": "from a distance, without human contact, or in the least"
  },
  {
    "headword": "splatter",
    "pos": "verb",
    "cefr": "C1",
    "definition": "to splash with a liquid, or a spot of liquid scattered"
  },
  {
    "headword": "automatic",
    "pos": "verb",
    "cefr": "C1",
    "definition": "working by itself with little or no direct human control"
  },
  {
    "headword": "automatically",
    "pos": "adverb",
    "cefr": "C1",
    "definition": "spontaneously, involuntarily, or via mechanized procedure"
  },
  {
    "headword": "exhaust",
    "pos": "verb",
    "cefr": "C1",
    "definition": "to drain of physical strength, or consume entirely"
  },
  {
    "headword": "violet",
    "pos": "adjective",
    "cefr": "C1",
    "definition": "having a distinct bluish-purple or deep violet hue"
  },
  {
    "headword": "bubbly",
    "pos": "adjective",
    "cefr": "C1",
    "definition": "vivacious, cheerful, and effervescent; or producing bubbles"
  },
  {
    "headword": "chaotically",
    "pos": "adverb",
    "cefr": "C1",
    "definition": "in a wildly disordered, confused, and turbulent manner"
  },
  {
    "headword": "apprehensive",
    "pos": "adjective",
    "cefr": "C1",
    "definition": "anxious, fearful, or uneasy that something bad will happen"
  },
  {
    "headword": "settee",
    "pos": "noun",
    "cefr": "C1",
    "definition": "a long upholstered seat with a back and arms for two or more"
  },
  {
    "headword": "trampoline",
    "pos": "noun",
    "cefr": "C1",
    "definition": "a piece of gymnastic equipment consisting of resilient fabric"
  },
  {
    "headword": "stamina",
    "pos": "noun",
    "cefr": "C1",
    "definition": "the ability to sustain prolonged physical or mental effort"
  },
  {
    "headword": "ploy",
    "pos": "noun",
    "cefr": "C1",
    "definition": "a cunning plan or action designed to turn a situation to advantage"
  },
  {
    "headword": "dither",
    "pos": "verb",
    "cefr": "C1",
    "definition": "to be indecisive, vacillate, or tremble with hesitation"
  },
  {
    "headword": "overalls",
    "pos": "noun",
    "cefr": "C1",
    "definition": "loose protective trousers or garment worn over clothes"
  },
  {
    "headword": "unison",
    "pos": "noun",
    "cefr": "C1",
    "definition": "simultaneous action, harmonious concurrence, or unison performance"
  },
  {
    "headword": "snail",
    "pos": "noun",
    "cefr": "C1",
    "definition": "a slow-moving mollusk with a spiral shell, or sluggish person"
  },
  {
    "headword": "bliss",
    "pos": "noun",
    "cefr": "C1",
    "definition": "supreme happiness, heavenly joy, and complete contentment"
  },
  {
    "headword": "inexhaustible",
    "pos": "adjective",
    "cefr": "C1",
    "definition": "impossible to finish, drain, or consume completely; tireless"
  },
  {
    "headword": "acre",
    "pos": "noun",
    "cefr": "C1",
    "definition": "a unit of land area equal to 4,840 square yards"
  },
  {
    "headword": "calf",
    "pos": "noun",
    "cefr": "C1",
    "definition": "young cow"
  },
  {
    "headword": "heifer",
    "pos": "noun",
    "cefr": "C1",
    "definition": "a young female cow that has not borne a calf"
  },
  {
    "headword": "ewe",
    "pos": "noun",
    "cefr": "C1",
    "definition": "a mature female sheep"
  },
  {
    "headword": "adversary",
    "pos": "noun",
    "cefr": "C1",
    "definition": "one's opponent in a contest, conflict, or dispute"
  },
  {
    "headword": "victorious",
    "pos": "adjective",
    "cefr": "C1",
    "definition": "having triumphed or emerged supreme in a competition or conflict"
  },
  {
    "headword": "victoriously",
    "pos": "adverb",
    "cefr": "C1",
    "definition": "in a celebratory, triumphant, or prevailing manner"
  },
  {
    "headword": "profound",
    "pos": "adjective",
    "cefr": "C1",
    "definition": "very great or intense; having deep intellectual insight"
  },
  {
    "headword": "profoundly",
    "pos": "adverb",
    "cefr": "C1",
    "definition": "to an extreme degree; with deep intellectual or emotional insight"
  },
  {
    "headword": "baldly",
    "pos": "adverb",
    "cefr": "C1",
    "definition": "plainly, bluntly, and without mitigating nuance or apology"
  },
  {
    "headword": "bald",
    "pos": "verb",
    "cefr": "C1",
    "definition": "plain, blunt, and unvarnished; or lacking hair or covering"
  },
  {
    "headword": "bearded",
    "pos": "adjective",
    "cefr": "C1",
    "definition": "having a growth of facial hair on the chin and cheeks"
  },
  {
    "headword": "professionalism",
    "pos": "noun",
    "cefr": "C1",
    "definition": "the competence or skill expected of a trained professional"
  },
  {
    "headword": "artistically",
    "pos": "adverb",
    "cefr": "C1",
    "definition": "in a way that demonstrates skill, creative taste, or art"
  },
  {
    "headword": "popularization",
    "pos": "noun",
    "cefr": "C1",
    "definition": "the act of making something widely known or accessible"
  },
  {
    "headword": "pendulum",
    "pos": "noun",
    "cefr": "C1",
    "definition": "a weight hung from a fixed point swinging freely"
  },
  {
    "headword": "predecessor",
    "pos": "noun",
    "cefr": "C1",
    "definition": "a person who held a job or office before the current holder"
  },
  {
    "headword": "boast",
    "pos": "noun",
    "cefr": "C1",
    "definition": "to talk with excessive pride and self-satisfaction; possess"
  },
  {
    "headword": "lapse",
    "pos": "noun",
    "cefr": "C1",
    "definition": "a brief failure of memory or concentration, or interval"
  },
  {
    "headword": "ceaseless",
    "pos": "adjective",
    "cefr": "C1",
    "definition": "constant, continuous, and never-ending; incessant"
  },
  {
    "headword": "ceaselessly",
    "pos": "adverb",
    "cefr": "C1",
    "definition": "without stopping or pausing; continuously and relentlessly"
  },
  {
    "headword": "climax",
    "pos": "noun",
    "cefr": "C1",
    "definition": "the most intense, decisive, or culminating point of an event"
  },
  {
    "headword": "climactic",
    "pos": "adjective",
    "cefr": "C1",
    "definition": "forming or creating an exciting, decisive, and peak climax"
  },
  {
    "headword": "anticlimactic",
    "pos": "adjective",
    "cefr": "C1",
    "definition": "causing disappointment at the end of an exciting buildup"
  },
  {
    "headword": "scramble",
    "pos": "noun",
    "cefr": "C1",
    "definition": "to move hurriedly or awkwardly, or struggle frantically to get"
  },
  {
    "headword": "forfeit",
    "pos": "verb",
    "cefr": "C1",
    "definition": "to lose or be deprived of property, rights, or privileges"
  },
  {
    "headword": "twitch",
    "pos": "verb",
    "cefr": "C1",
    "definition": "to give or cause to give a short, sudden jerking movement"
  },
  {
    "headword": "twitch",
    "pos": "noun",
    "cefr": "C1",
    "definition": "to give or cause to give a short, sudden jerking movement"
  },
  {
    "headword": "intellect",
    "pos": "noun",
    "cefr": "C1",
    "definition": "the faculty of reasoning, conceptualizing, and objective thought"
  },
  {
    "headword": "descent",
    "pos": "noun",
    "cefr": "C1",
    "definition": "an act of moving downward, or lineage and ancestral origin"
  },
  {
    "headword": "shed",
    "pos": "verb",
    "cefr": "C1",
    "definition": "to discard, cast off, or allow tears or blood to flow"
  },
  {
    "headword": "exodus",
    "pos": "noun",
    "cefr": "C1",
    "definition": "a mass departure of people, especially emigrants or refugees"
  },
  {
    "headword": "immortalize",
    "pos": "verb",
    "cefr": "C1",
    "definition": "to confer enduring fame or perpetual remembrance upon"
  },
  {
    "headword": "genome",
    "pos": "noun",
    "cefr": "C1",
    "definition": "the complete set of genes or genetic material in an organism"
  },
  {
    "headword": "fraction",
    "pos": "noun",
    "cefr": "C1",
    "definition": "a small or tiny part, portion, or division of a whole"
  },
  {
    "headword": "faction",
    "pos": "noun",
    "cefr": "C1",
    "definition": "a small organized dissenting group within a larger faction"
  },
  {
    "headword": "physique",
    "pos": "noun",
    "cefr": "C1",
    "definition": "the form, size, and development of a person's body"
  },
  {
    "headword": "utensil",
    "pos": "noun",
    "cefr": "C1",
    "definition": "an implement, tool, or vessel employed for practical use"
  },
  {
    "headword": "otter",
    "pos": "noun",
    "cefr": "C1",
    "definition": "a semiaquatic fish-eating mammal with dense fur"
  },
  {
    "headword": "clammy",
    "pos": "adjective",
    "cefr": "C1",
    "definition": "unpleasantly damp, slimy, and cool to the touch"
  },
  {
    "headword": "absolute",
    "pos": "noun",
    "cefr": "C1",
    "definition": "not qualified or diminished in any way; total and certain"
  },
  {
    "headword": "dispense",
    "pos": "verb",
    "cefr": "C1",
    "definition": "to distribute or provide a service or medication to consumers"
  },
  {
    "headword": "dispensable",
    "pos": "adjective",
    "cefr": "C1",
    "definition": "able to be replaced or done without; nonessential"
  },
  {
    "headword": "dispensary",
    "pos": "noun",
    "cefr": "C1",
    "definition": "a clinic or room where medicines are prepared and dispensed"
  },
  {
    "headword": "indispensable",
    "pos": "adjective",
    "cefr": "C1",
    "definition": "absolutely necessary, essential, and impossible to manage without"
  },
  {
    "headword": "diverge",
    "pos": "verb",
    "cefr": "C1",
    "definition": "to separate from a route and go in a different direction"
  },
  {
    "headword": "divergence",
    "pos": "noun",
    "cefr": "C1",
    "definition": "the process of drawing apart, differing, or varying from norms"
  },
  {
    "headword": "divergent",
    "pos": "adjective",
    "cefr": "C1",
    "definition": "tending to be different or develop in distinct directions"
  },
  {
    "headword": "burst",
    "pos": "noun",
    "cefr": "C1",
    "definition": "to break open or break out suddenly; explode with energy"
  },
  {
    "headword": "superficial",
    "pos": "adjective",
    "cefr": "C1",
    "definition": "existing or occurring at the surface; lacking depth of insight"
  },
  {
    "headword": "superficially",
    "pos": "adverb",
    "cefr": "C1",
    "definition": "as far as outward appearance or apparent qualities indicate"
  },
  {
    "headword": "aesthetic",
    "pos": "adjective",
    "cefr": "C1",
    "definition": "concerned with beauty, artistic taste, and appreciation"
  },
  {
    "headword": "aesthetically",
    "pos": "adverb",
    "cefr": "C1",
    "definition": "in a manner relating to beauty or artistic refinement"
  },
  {
    "headword": "scrutinize/scrutinise",
    "pos": "verb",
    "cefr": "C1",
    "definition": "to examine or inspect closely, critically, and thoroughly"
  },
  {
    "headword": "scrutiny",
    "pos": "noun",
    "cefr": "C1",
    "definition": "critical observation, rigorous examination, or close inspection"
  },
  {
    "headword": "quip",
    "pos": "noun",
    "cefr": "C1",
    "definition": "a witty, clever, or pithy remark made spontaneously"
  },
  {
    "headword": "quip",
    "pos": "verb",
    "cefr": "C1",
    "definition": "a witty, clever, or pithy remark made spontaneously"
  },
  {
    "headword": "woo",
    "pos": "verb",
    "cefr": "C1",
    "definition": "to solicit the favor, alliance, or affection of someone"
  },
  {
    "headword": "criteria",
    "pos": "noun",
    "cefr": "C1",
    "definition": "principles or standards by which something may be judged"
  },
  {
    "headword": "plausible",
    "pos": "adjective",
    "cefr": "C1",
    "definition": "seeming reasonable, probable, credible, and worthy of belief"
  },
  {
    "headword": "plausibility",
    "pos": "noun",
    "cefr": "C1",
    "definition": "the quality of seeming reasonable, believable, or probable"
  },
  {
    "headword": "plausibly",
    "pos": "adverb",
    "cefr": "C1",
    "definition": "in a credible, persuasive, and reasonably believable manner"
  },
  {
    "headword": "instinctive",
    "pos": "adjective",
    "cefr": "C1",
    "definition": "prompted by natural instinct; unthinking and automatic"
  },
  {
    "headword": "instinctively",
    "pos": "adverb",
    "cefr": "C1",
    "definition": "without conscious thought; by innate, intuitive reaction"
  },
  {
    "headword": "stylistic",
    "pos": "adjective",
    "cefr": "C1",
    "definition": "relating to the distinctive style or art of an author or genre"
  },
  {
    "headword": "stylistically",
    "pos": "adverb",
    "cefr": "C1",
    "definition": "in terms of literary style, aesthetic design, or artistic form"
  },
  {
    "headword": "inheritance",
    "pos": "noun",
    "cefr": "C1",
    "definition": "assets, property, or genetic traits passed from predecessors"
  },
  {
    "headword": "inherent",
    "pos": "adjective",
    "cefr": "C1",
    "definition": "existing in something as a permanent, essential constituent"
  },
  {
    "headword": "inherently",
    "pos": "adverb",
    "cefr": "C1",
    "definition": "in an innate, essential, and fundamentally inseparable manner"
  },
  {
    "headword": "tune",
    "pos": "verb",
    "cefr": "C1",
    "definition": "a melody, or adjust a musical instrument or engine performance"
  },
  {
    "headword": "spontaneous",
    "pos": "adjective",
    "cefr": "C1",
    "definition": "performed or occurring as a result of a sudden impulse"
  },
  {
    "headword": "spontaneously",
    "pos": "adverb",
    "cefr": "C1",
    "definition": "as a result of a sudden impulse and without premeditation"
  },
  {
    "headword": "honk",
    "pos": "verb",
    "cefr": "C1",
    "definition": "to emit a loud, harsh sound like a goose or automobile horn"
  },
  {
    "headword": "honk",
    "pos": "noun",
    "cefr": "C1",
    "definition": "to emit a loud, harsh sound like a goose or automobile horn"
  },
  {
    "headword": "goose",
    "pos": "noun",
    "cefr": "C1",
    "definition": "a large waterbird, or to poke playfully and stimulate"
  },
  {
    "headword": "innovate",
    "pos": "verb",
    "cefr": "C1",
    "definition": "to make changes in something established by introducing novelties"
  },
  {
    "headword": "innovation",
    "pos": "noun",
    "cefr": "C1",
    "definition": "a new method, idea, product, or transformative creation"
  },
  {
    "headword": "innovative",
    "pos": "adjective",
    "cefr": "C1",
    "definition": "featuring new, creative, and advanced methods or ideas"
  },
  {
    "headword": "connoisseur",
    "pos": "noun",
    "cefr": "C1",
    "definition": "an expert judge in matters of taste and fine art"
  },
  {
    "headword": "abstraction",
    "pos": "noun",
    "cefr": "C1",
    "definition": "a conceptual idea not grounded in concrete reality"
  },
  {
    "headword": "tantrum",
    "pos": "noun",
    "cefr": "C1",
    "definition": "an uncontrolled outburst of anger and frustration, typically in young"
  },
  {
    "headword": "institute",
    "pos": "verb",
    "cefr": "C1",
    "definition": "to set in motion, establish, or initiate an inquiry"
  },
  {
    "headword": "discard",
    "pos": "verb",
    "cefr": "C1",
    "definition": "to cast aside, reject, or dispose of as useless"
  },
  {
    "headword": "fatality",
    "pos": "noun",
    "cefr": "C1",
    "definition": "an occurrence of death by accident, in war, or from disease"
  },
  {
    "headword": "angle",
    "pos": "verb",
    "cefr": "C1",
    "definition": "to direct, position, or present from a specific viewpoint"
  },
  {
    "headword": "stiffen",
    "pos": "verb",
    "cefr": "C1",
    "definition": "to make or become stiff, rigid, or firmer and unyielding"
  },
  {
    "headword": "wooded",
    "pos": "adjective",
    "cefr": "C1",
    "definition": "covered densely with trees or flourishing forest growth"
  },
  {
    "headword": "hostile",
    "pos": "adjective",
    "cefr": "C1",
    "definition": "showing or feeling active opposition, animosity, or enmity"
  },
  {
    "headword": "hostility",
    "pos": "noun",
    "cefr": "C1",
    "definition": "unfriendly or aggressive behavior, antagonism, or animosity"
  },
  {
    "headword": "flatter",
    "pos": "verb",
    "cefr": "C1",
    "definition": "to lavish insincere praise upon someone to further an aim"
  },
  {
    "headword": "flattery",
    "pos": "noun",
    "cefr": "C1",
    "definition": "excessive, insincere praise given to further one's interests"
  },
  {
    "headword": "aimless",
    "pos": "adjective",
    "cefr": "C1",
    "definition": "without purpose, direction, or clear objectives"
  },
  {
    "headword": "aimlessly",
    "pos": "adverb",
    "cefr": "C1",
    "definition": "without clear purpose, intention, or trajectory"
  },
  {
    "headword": "meaningless",
    "pos": "adjective",
    "cefr": "C1",
    "definition": "having no meaning, significance, purpose, or sense"
  },
  {
    "headword": "meaninglessly",
    "pos": "adverb",
    "cefr": "C1",
    "definition": "in a futile, pointless, or completely senseless manner"
  },
  {
    "headword": "candid",
    "pos": "adjective",
    "cefr": "C1",
    "definition": "truthful, frank, straightforward, and sincere in expression"
  },
  {
    "headword": "candidly",
    "pos": "adverb",
    "cefr": "C1",
    "definition": "in an honest, open, and frank or blunt manner"
  },
  {
    "headword": "vitality",
    "pos": "noun",
    "cefr": "C1",
    "definition": "abundant physical, mental, or creative vigor and resilience"
  },
  {
    "headword": "provoke",
    "pos": "verb",
    "cefr": "C1",
    "definition": "to stimulate, incite, or give rise to an emotion or reaction"
  },
  {
    "headword": "provocative",
    "pos": "adjective",
    "cefr": "C1",
    "definition": "causing annoyance, anger, or strong intellectual reaction"
  },
  {
    "headword": "provocatively",
    "pos": "adverb",
    "cefr": "C1",
    "definition": "in a way that causes controversy, anger, or interest"
  },
  {
    "headword": "clench",
    "pos": "verb",
    "cefr": "C1",
    "definition": "to close tightly or grasp firmly with hands, teeth, or fists"
  },
  {
    "headword": "haggle",
    "pos": "verb",
    "cefr": "C1",
    "definition": "to dispute or bargain persistently over the cost of an item"
  },
  {
    "headword": "scorn",
    "pos": "noun",
    "cefr": "C1",
    "definition": "the feeling that someone or something is completely worthless"
  },
  {
    "headword": "scornful",
    "pos": "adjective",
    "cefr": "C1",
    "definition": "feeling or expressing contempt or derision; disdainful"
  },
  {
    "headword": "scornfully",
    "pos": "adverb",
    "cefr": "C1",
    "definition": "with deep contempt, disdain, and mocking derision"
  },
  {
    "headword": "animatedly",
    "pos": "adverb",
    "cefr": "C1",
    "definition": "in a lively, spirited, and energetically animated manner"
  },
  {
    "headword": "obscure",
    "pos": "verb",
    "cefr": "C1",
    "definition": "not discovered or known about; uncertain and unclear"
  },
  {
    "headword": "obscure",
    "pos": "adjective",
    "cefr": "C1",
    "definition": "not discovered or known about; uncertain and unclear"
  },
  {
    "headword": "obscurely",
    "pos": "adverb",
    "cefr": "C1",
    "definition": "in an unclear, enigmatic, or little-known manner"
  },
  {
    "headword": "elevate",
    "pos": "verb",
    "cefr": "C1",
    "definition": "to lift to a higher position, or promote in moral stature"
  },
  {
    "headword": "elevation",
    "pos": "noun",
    "cefr": "C1",
    "definition": "the action of elevating, an elevated height, or architectural view"
  },
  {
    "headword": "pose",
    "pos": "verb",
    "cefr": "C1",
    "definition": "to present or constitute a problem, or assume a posture"
  },
  {
    "headword": "tedious",
    "pos": "adjective",
    "cefr": "C1",
    "definition": "too long, slow, or dull; tiresome, monotonous, and boring"
  },
  {
    "headword": "tediously",
    "pos": "adverb",
    "cefr": "C1",
    "definition": "in a boring, tiresome, long-winded, and monotonous manner"
  },
  {
    "headword": "succession",
    "pos": "noun",
    "cefr": "C1",
    "definition": "a number of people or things sharing a specified characteristic in order"
  },
  {
    "headword": "formality",
    "pos": "noun",
    "cefr": "C1",
    "definition": "rigid adherence to established rules, etiquette, or legal custom"
  },
  {
    "headword": "jog",
    "pos": "verb",
    "cefr": "C1",
    "definition": "cause to remember"
  },
  {
    "headword": "mountaineer",
    "pos": "noun",
    "cefr": "C1",
    "definition": "a person who climbs mountains as an athletic discipline"
  },
  {
    "headword": "pioneer",
    "pos": "verb",
    "cefr": "C1",
    "definition": "a person who is among the first to explore or develop a field"
  },
  {
    "headword": "pioneer",
    "pos": "noun",
    "cefr": "C1",
    "definition": "a person who is among the first to explore or develop a field"
  },
  {
    "headword": "quest",
    "pos": "noun",
    "cefr": "C1",
    "definition": "a long or arduous search for something of great value"
  },
  {
    "headword": "transatlantic",
    "pos": "adjective",
    "cefr": "C1",
    "definition": "crossing or concerning both sides of the Atlantic Ocean"
  },
  {
    "headword": "rudiments",
    "pos": "noun",
    "cefr": "C1",
    "definition": "the first principles or basic rudimentary elements of study"
  },
  {
    "headword": "rudimentary",
    "pos": "adjective",
    "cefr": "C1",
    "definition": "involving or limited to basic principles; undeveloped"
  },
  {
    "headword": "paddle",
    "pos": "verb",
    "cefr": "C1",
    "definition": "to propel a vessel with a paddle, or dabble in water"
  },
  {
    "headword": "immense",
    "pos": "adjective",
    "cefr": "C1",
    "definition": "extremely large, vast, great, or boundless in scale"
  },
  {
    "headword": "immensely",
    "pos": "adverb",
    "cefr": "C1",
    "definition": "to a very great or immense degree; exceedingly"
  },
  {
    "headword": "advisory",
    "pos": "adjective",
    "cefr": "C1",
    "definition": "having or exercising the power to make recommendations"
  },
  {
    "headword": "trying",
    "pos": "adjective",
    "cefr": "C1",
    "definition": "hard to endure; challenging, taxing, and testing one's patience"
  },
  {
    "headword": "adrenaline",
    "pos": "noun",
    "cefr": "C1",
    "definition": "a hormone that increases circulation and prepares for action"
  },
  {
    "headword": "tinker",
    "pos": "verb",
    "cefr": "C1",
    "definition": "to attempt to repair or improve something in a casual way"
  },
  {
    "headword": "tinker",
    "pos": "noun",
    "cefr": "C1",
    "definition": "to attempt to repair or improve something in a casual way"
  },
  {
    "headword": "lavatory",
    "pos": "noun",
    "cefr": "C1",
    "definition": "a room equipped with a toilet, washbasin, and facilities"
  },
  {
    "headword": "expedition",
    "pos": "noun",
    "cefr": "C1",
    "definition": "a journey undertaken by an organized group with a purpose"
  },
  {
    "headword": "pinnacle",
    "pos": "noun",
    "cefr": "C1",
    "definition": "the most successful point; culmination or peak peak"
  },
  {
    "headword": "insecure",
    "pos": "adjective",
    "cefr": "C1",
    "definition": "uncertain or anxious about oneself; not firmly fixed"
  },
  {
    "headword": "insecurely",
    "pos": "adverb",
    "cefr": "C1",
    "definition": "without firmness, safety, or confident emotional stability"
  },
  {
    "headword": "reassure",
    "pos": "verb",
    "cefr": "C1",
    "definition": "to say or do something to remove the doubts and fears of"
  },
  {
    "headword": "reassurance",
    "pos": "noun",
    "cefr": "C1",
    "definition": "the action of removing someone's doubts and fears"
  },
  {
    "headword": "insensitive",
    "pos": "adjective",
    "cefr": "C1",
    "definition": "showing or feeling no concern for others' feelings"
  },
  {
    "headword": "insensitively",
    "pos": "adverb",
    "cefr": "C1",
    "definition": "in an unfeeling, thoughtless, and callous manner"
  },
  {
    "headword": "profess",
    "pos": "verb",
    "cefr": "C1",
    "definition": "to claim or affirm openly, or declare religious faith"
  },
  {
    "headword": "drawback",
    "pos": "noun",
    "cefr": "C1",
    "definition": "a feature that renders something less acceptable; disadvantage"
  },
  {
    "headword": "resort",
    "pos": "verb",
    "cefr": "C1",
    "definition": "to turn to and adopt a strategy, or a vacation retreat"
  },
  {
    "headword": "resort",
    "pos": "noun",
    "cefr": "C1",
    "definition": "course of action"
  },
  {
    "headword": "oversee",
    "pos": "verb",
    "cefr": "C1",
    "definition": "to supervise, manage, or direct personnel and processes"
  },
  {
    "headword": "overseer",
    "pos": "noun",
    "cefr": "C1",
    "definition": "a person who supervises others, especially manual workers"
  },
  {
    "headword": "estimation",
    "pos": "noun",
    "cefr": "C1",
    "definition": "a judgment, evaluation, or rough calculation of value"
  },
  {
    "headword": "commission",
    "pos": "verb",
    "cefr": "C1",
    "definition": "an official instruction, command, or duty given to a person"
  },
  {
    "headword": "commission",
    "pos": "noun",
    "cefr": "C1",
    "definition": "an official instruction, command, or duty given to a person"
  },
  {
    "headword": "liaison",
    "pos": "noun",
    "cefr": "C1",
    "definition": "communication or cooperation facilitating a close working link"
  },
  {
    "headword": "stressfully",
    "pos": "adverb",
    "cefr": "C1",
    "definition": "in a manner that produces severe psychological tension and strain"
  },
  {
    "headword": "loom",
    "pos": "verb",
    "cefr": "C1",
    "definition": "to appear as a shadowy, threatening, or impending form"
  },
  {
    "headword": "notwithstanding",
    "pos": "preposition",
    "cefr": "C1",
    "definition": "in spite of, despite, or although something has occurred"
  },
  {
    "headword": "structurally",
    "pos": "adverb",
    "cefr": "C1",
    "definition": "with regard to the underlying physical or conceptual framework"
  },
  {
    "headword": "structural",
    "pos": "adjective",
    "cefr": "C1",
    "definition": "relating to or forming part of the structure of a building"
  },
  {
    "headword": "chauffer",
    "pos": "noun",
    "cefr": "C1",
    "definition": "to drive a private passenger vehicle on behalf of another"
  },
  {
    "headword": "chauffer",
    "pos": "verb",
    "cefr": "C1",
    "definition": "to drive a private passenger vehicle on behalf of another"
  },
  {
    "headword": "sedentary",
    "pos": "adjective",
    "cefr": "C1",
    "definition": "tending to spend much time seated; somewhat inactive"
  },
  {
    "headword": "rapport",
    "pos": "noun",
    "cefr": "C1",
    "definition": "a close and harmonious relationship in which groups understand"
  },
  {
    "headword": "landscape",
    "pos": "verb",
    "cefr": "C1",
    "definition": "all visible features of an area of land, or depict it"
  },
  {
    "headword": "consultation",
    "pos": "noun",
    "cefr": "C1",
    "definition": "a formal meeting for discussion, deliberation, or diagnosis"
  },
  {
    "headword": "consultancy",
    "pos": "noun",
    "cefr": "C1",
    "definition": "a professional firm that provides expert specialized advice"
  },
  {
    "headword": "bloom",
    "pos": "verb",
    "cefr": "C1",
    "definition": "to produce flowers, flourish, or achieve optimal beauty"
  },
  {
    "headword": "engineer",
    "pos": "verb",
    "cefr": "C1",
    "definition": "to design and build, or skillfully orchestrate and bring about"
  },
  {
    "headword": "retention",
    "pos": "noun",
    "cefr": "C1",
    "definition": "the continued possession, use, or control of something"
  },
  {
    "headword": "quarry",
    "pos": "noun",
    "cefr": "C1",
    "definition": "an excavation pit for stone, or an animal pursued by hunter"
  },
  {
    "headword": "specification",
    "pos": "noun",
    "cefr": "C1",
    "definition": "an act of identifying something precisely, or stated requirement"
  },
  {
    "headword": "contract",
    "pos": "verb",
    "cefr": "C1",
    "definition": "hire"
  },
  {
    "headword": "contract",
    "pos": "verb",
    "cefr": "C1",
    "definition": "catch (as in a disease)"
  },
  {
    "headword": "contractor",
    "pos": "noun",
    "cefr": "C1",
    "definition": "a person or firm that undertakes an agreement to furnish labor"
  },
  {
    "headword": "query",
    "pos": "verb",
    "cefr": "C1",
    "definition": "a question, especially one expressing doubt or requesting data"
  },
  {
    "headword": "possessor",
    "pos": "noun",
    "cefr": "C1",
    "definition": "a person who owns, possesses, or controls something"
  },
  {
    "headword": "chill",
    "pos": "verb",
    "cefr": "C1",
    "definition": "an unpleasant feeling of coldness, or to cool down"
  },
  {
    "headword": "chill",
    "pos": "noun",
    "cefr": "C1",
    "definition": "an unpleasant feeling of coldness, or to cool down"
  },
  {
    "headword": "chilly",
    "pos": "adjective",
    "cefr": "C1",
    "definition": "unpleasantly cold, or unfriendly and aloof in demeanor"
  },
  {
    "headword": "frost",
    "pos": "verb",
    "cefr": "C1",
    "definition": "a deposit of minute ice crystals, or a chilly cold demeanor"
  },
  {
    "headword": "frosty",
    "pos": "adjective",
    "cefr": "C1",
    "definition": "cold enough to produce frost; or aloof, unfriendly, and frigid"
  },
  {
    "headword": "frostily",
    "pos": "adverb",
    "cefr": "C1",
    "definition": "in a cold, aloof, unfriendly, or sternly formal manner"
  },
  {
    "headword": "man",
    "pos": "verb",
    "cefr": "C1",
    "definition": "to furnish with staff, or take up position at a station"
  },
  {
    "headword": "unmanned",
    "pos": "adjective",
    "cefr": "C1",
    "definition": "functioning autonomously without human presence on board"
  },
  {
    "headword": "impersonal",
    "pos": "adjective",
    "cefr": "C1",
    "definition": "not influenced by personal feelings; detached or objective"
  },
  {
    "headword": "impersonally",
    "pos": "adverb",
    "cefr": "C1",
    "definition": "in an objective, detached, or coldly neutral manner"
  },
  {
    "headword": "impersonate",
    "pos": "verb",
    "cefr": "C1",
    "definition": "to pretend to be another person for entertainment or fraud"
  },
  {
    "headword": "impersonator",
    "pos": "noun",
    "cefr": "C1",
    "definition": "an entertainer who mimics famous voices and personas"
  },
  {
    "headword": "impersonation",
    "pos": "noun",
    "cefr": "C1",
    "definition": "an act of pretending to be another person convincingly"
  },
  {
    "headword": "buzzer",
    "pos": "noun",
    "cefr": "C1",
    "definition": "an electrical device that makes a buzzing noise as a signal"
  },
  {
    "headword": "desert",
    "pos": "verb",
    "cefr": "C1",
    "definition": "to abandon a person, duty, or cause without permission"
  },
  {
    "headword": "desertion",
    "pos": "noun",
    "cefr": "C1",
    "definition": "the act of abandoning an allegiance, duty, or companion"
  },
  {
    "headword": "unoccupied",
    "pos": "adjective",
    "cefr": "C1",
    "definition": "vacant, uninhibited, or free from occupants or duties"
  },
  {
    "headword": "stuffy",
    "pos": "adjective",
    "cefr": "C1",
    "definition": "lacking fresh air or ventilation; or narrow-minded and prim"
  },
  {
    "headword": "stuffily",
    "pos": "adverb",
    "cefr": "C1",
    "definition": "in a prudish, old-fashioned, or poorly ventilated manner"
  },
  {
    "headword": "stuffiness",
    "pos": "noun",
    "cefr": "C1",
    "definition": "lack of fresh air, or excessive formality and narrowness"
  },
  {
    "headword": "gape",
    "pos": "verb",
    "cefr": "C1",
    "definition": "look at something"
  },
  {
    "headword": "gape",
    "pos": "verb",
    "cefr": "C1",
    "definition": "be or become open"
  },
  {
    "headword": "repute",
    "pos": "verb",
    "cefr": "C1",
    "definition": "the opinion generally held of someone or something; status"
  },
  {
    "headword": "toughness",
    "pos": "noun",
    "cefr": "C1",
    "definition": "the ability to withstand adverse conditions or rough handling"
  },
  {
    "headword": "recall",
    "pos": "noun",
    "cefr": "C1",
    "definition": "to bring a fact, event, or situation back into one's mind"
  },
  {
    "headword": "recollection",
    "pos": "noun",
    "cefr": "C1",
    "definition": "the action of remembering something; a memory recalled"
  },
  {
    "headword": "plumbing",
    "pos": "noun",
    "cefr": "C1",
    "definition": "the system of pipes and fixtures installed in a building"
  },
  {
    "headword": "usher",
    "pos": "noun",
    "cefr": "C1",
    "definition": "an official guide who directs and conducts people to seats"
  },
  {
    "headword": "glum",
    "pos": "adjective",
    "cefr": "C1",
    "definition": "looking or feeling dejected, sullen, morose, and gloomy"
  },
  {
    "headword": "glumly",
    "pos": "adverb",
    "cefr": "C1",
    "definition": "in a dejected, morose, sullen, or dispirited manner"
  },
  {
    "headword": "gamely",
    "pos": "adverb",
    "cefr": "C1",
    "definition": "in a brave, resolute, spirited, and determined manner"
  },
  {
    "headword": "dissect",
    "pos": "verb",
    "cefr": "C1",
    "definition": "to methodically cut apart, examine, or analyze in minute detail"
  },
  {
    "headword": "dissection",
    "pos": "noun",
    "cefr": "C1",
    "definition": "the action of cutting apart to analyze anatomical or logical parts"
  },
  {
    "headword": "commend",
    "pos": "verb",
    "cefr": "C1",
    "definition": "to praise formally or present as suitable and worthy"
  },
  {
    "headword": "commendation",
    "pos": "noun",
    "cefr": "C1",
    "definition": "formal praise, official approval, or recognized award"
  },
  {
    "headword": "thereby",
    "pos": "adverb",
    "cefr": "C1",
    "definition": "by that means; as a result of that action or occurrence"
  },
  {
    "headword": "flick",
    "pos": "verb",
    "cefr": "C1",
    "definition": "to move with a sudden light, quick movement, or light blow"
  },
  {
    "headword": "flicker",
    "pos": "noun",
    "cefr": "C1",
    "definition": "to shine with an unsteady, intermittent light, or waver"
  },
  {
    "headword": "unenviable",
    "pos": "adjective",
    "cefr": "C1",
    "definition": "burdensome, unappealing, or unwelcome to undergo"
  },
  {
    "headword": "unenviably",
    "pos": "adverb",
    "cefr": "C1",
    "definition": "in an unappealing, grueling, or disadvantageous manner"
  },
  {
    "headword": "voice",
    "pos": "verb",
    "cefr": "C1",
    "definition": "to give audible or deliberate expression to an opinion or sentiment"
  },
  {
    "headword": "tread",
    "pos": "noun",
    "cefr": "C1",
    "definition": "to walk in a specified way, or step down on a surface"
  },
  {
    "headword": "allege",
    "pos": "verb",
    "cefr": "C1",
    "definition": "to claim that someone did something illegal without proof"
  },
  {
    "headword": "allegation",
    "pos": "noun",
    "cefr": "C1",
    "definition": "a formal claim or assertion that someone did wrong"
  },
  {
    "headword": "bribe",
    "pos": "verb",
    "cefr": "C1",
    "definition": "to dishonestly persuade someone to act in one's favor by payment"
  },
  {
    "headword": "bribe",
    "pos": "noun",
    "cefr": "C1",
    "definition": "to dishonestly persuade someone to act in one's favor by payment"
  },
  {
    "headword": "bribery",
    "pos": "noun",
    "cefr": "C1",
    "definition": "the giving or offering of bribes to influence official conduct"
  },
  {
    "headword": "inclusion",
    "pos": "noun",
    "cefr": "C1",
    "definition": "the action or state of including within a group or structure"
  },
  {
    "headword": "inclusive",
    "pos": "adjective",
    "cefr": "C1",
    "definition": "containing or including everything, or open to all"
  },
  {
    "headword": "inclusively",
    "pos": "adverb",
    "cefr": "C1",
    "definition": "in a comprehensive manner embracing all varied participants"
  },
  {
    "headword": "unconvincing",
    "pos": "adjective",
    "cefr": "C1",
    "definition": "failing to elicit belief or impart genuine credibility"
  },
  {
    "headword": "unconvincingly",
    "pos": "adverb",
    "cefr": "C1",
    "definition": "in an implausible or unpersuasive manner"
  },
  {
    "headword": "recharge",
    "pos": "verb",
    "cefr": "C1",
    "definition": "to restore electric charge in a battery, or replenish energy"
  },
  {
    "headword": "facilitation",
    "pos": "noun",
    "cefr": "C1",
    "definition": "the act of assisting the progress or smooth execution of"
  },
  {
    "headword": "condition",
    "pos": "verb",
    "cefr": "C1",
    "definition": "to train, accustom, or govern the terms of an agreement"
  },
  {
    "headword": "conditional",
    "pos": "adjective",
    "cefr": "C1",
    "definition": "subject to one or more requirements being fulfilled"
  },
  {
    "headword": "conditionally",
    "pos": "adverb",
    "cefr": "C1",
    "definition": "subject to specific stipulations, covenants, or clauses"
  },
  {
    "headword": "tone",
    "pos": "verb",
    "cefr": "C1",
    "definition": "the general character or attitude of a place, piece of writing"
  },
  {
    "headword": "align",
    "pos": "verb",
    "cefr": "C1",
    "definition": "to place in a line or bring into cooperation and agreement"
  },
  {
    "headword": "alignment",
    "pos": "noun",
    "cefr": "C1",
    "definition": "arrangement in a straight line or alliance with a faction"
  },
  {
    "headword": "supple",
    "pos": "adjective",
    "cefr": "C1",
    "definition": "bending and moving easily and gracefully; flexible and pliant"
  },
  {
    "headword": "manicure",
    "pos": "noun",
    "cefr": "C1",
    "definition": "cosmetic treatment of the hands and fingernails"
  },
  {
    "headword": "manicure",
    "pos": "verb",
    "cefr": "C1",
    "definition": "cosmetic treatment of the hands and fingernails"
  },
  {
    "headword": "pedicure",
    "pos": "noun",
    "cefr": "C1",
    "definition": "a cosmetic treatment of the feet and toenails"
  },
  {
    "headword": "facial",
    "pos": "adjective",
    "cefr": "C1",
    "definition": "pertaining to the face, facial anatomy, or facial expression"
  },
  {
    "headword": "facial",
    "pos": "noun",
    "cefr": "C1",
    "definition": "pertaining to the face, facial anatomy, or facial expression"
  },
  {
    "headword": "bouquet",
    "pos": "noun",
    "cefr": "C1",
    "definition": "an attractively arranged bunch of flowers or distinct scent"
  },
  {
    "headword": "refurbish",
    "pos": "verb",
    "cefr": "C1",
    "definition": "to renovate and redecorate something to restore pristine condition"
  },
  {
    "headword": "refurbishment",
    "pos": "noun",
    "cefr": "C1",
    "definition": "the renovation and redecoration of a building or asset"
  },
  {
    "headword": "grounds",
    "pos": "noun",
    "cefr": "C1",
    "definition": "outdoor area"
  },
  {
    "headword": "grounds",
    "pos": "noun",
    "cefr": "C1",
    "definition": "coffee grounds"
  },
  {
    "headword": "grounds",
    "pos": "noun",
    "cefr": "C1",
    "definition": "reason"
  },
  {
    "headword": "ground",
    "pos": "verb",
    "cefr": "C1",
    "definition": "to base on something"
  },
  {
    "headword": "lethargy",
    "pos": "noun",
    "cefr": "C1",
    "definition": "a lack of energy, vigor, and enthusiasm; sluggish torpor"
  },
  {
    "headword": "lethargic",
    "pos": "adjective",
    "cefr": "C1",
    "definition": "affected by lethargy; sluggish, tired, and apathetic"
  },
  {
    "headword": "lethargically",
    "pos": "adverb",
    "cefr": "C1",
    "definition": "in a sluggish, torpid, indifferent, and weary manner"
  },
  {
    "headword": "stately",
    "pos": "adjective",
    "cefr": "C1",
    "definition": "having a dignified, unhurried, and grand manner; majestic"
  },
  {
    "headword": "conserve",
    "pos": "verb",
    "cefr": "C1",
    "definition": "to protect from harm, decay, waste, or environmental loss"
  },
  {
    "headword": "conservatory",
    "pos": "noun",
    "cefr": "C1",
    "definition": "a greenhouse for plants, or academy of music and fine arts"
  },
  {
    "headword": "disquieting",
    "pos": "adjective",
    "cefr": "C1",
    "definition": "inducing feelings of anxiety, worry, or acute unease"
  },
  {
    "headword": "fiercely",
    "pos": "adverb",
    "cefr": "C1",
    "definition": "in a powerfully intense, aggressive, or ferocious manner"
  },
  {
    "headword": "grapefruit",
    "pos": "noun",
    "cefr": "C1",
    "definition": "a large round yellow citrus fruit with tart juicy pulp"
  },
  {
    "headword": "exotic",
    "pos": "adjective",
    "cefr": "C1",
    "definition": "originating in or characteristic of a distant foreign country"
  },
  {
    "headword": "exotically",
    "pos": "adverb",
    "cefr": "C1",
    "definition": "in an unusual, alluringly foreign, or strikingly novel manner"
  },
  {
    "headword": "flask",
    "pos": "noun",
    "cefr": "C1",
    "definition": "a narrow-necked bottle used in laboratory chemistry or travel"
  },
  {
    "headword": "spacious",
    "pos": "adjective",
    "cefr": "C1",
    "definition": "having ample space; roomy, broad, and voluminous inside"
  },
  {
    "headword": "gourmet",
    "pos": "adjective",
    "cefr": "C1",
    "definition": "a connoisseur of good food, or fine food of high quality"
  },
  {
    "headword": "gourmet",
    "pos": "noun",
    "cefr": "C1",
    "definition": "a connoisseur of good food, or fine food of high quality"
  },
  {
    "headword": "rich",
    "pos": "adjective",
    "cefr": "C1",
    "definition": "containing a lot of fat/flavor"
  },
  {
    "headword": "conjure",
    "pos": "verb",
    "cefr": "C1",
    "definition": "to summon or evoke a mental image or magical appearance"
  },
  {
    "headword": "creamy",
    "pos": "adjective",
    "cefr": "C1",
    "definition": "smooth, rich, and containing cream or resemblance thereto"
  },
  {
    "headword": "sauna",
    "pos": "noun",
    "cefr": "C1",
    "definition": "a small room used as a hot-air or steam bath for relaxation"
  },
  {
    "headword": "remedial",
    "pos": "adjective",
    "cefr": "C1",
    "definition": "giving or intended as a remedy or cure; educational support"
  },
  {
    "headword": "posture",
    "pos": "noun",
    "cefr": "C1",
    "definition": "the position in which someone holds their body; or stance"
  },
  {
    "headword": "sedate",
    "pos": "verb",
    "cefr": "C1",
    "definition": "calm, dignified, and unhurried; or quiet with medication"
  },
  {
    "headword": "sedately",
    "pos": "adverb",
    "cefr": "C1",
    "definition": "in a quiet, unhurried, composed, and dignified manner"
  },
  {
    "headword": "sedate",
    "pos": "adjective",
    "cefr": "C1",
    "definition": "calm, dignified, and unhurried; or quiet with medication"
  },
  {
    "headword": "clutch",
    "pos": "verb",
    "cefr": "C1",
    "definition": "to grasp or seize tightly and eagerly with hands or claws"
  },
  {
    "headword": "clutch",
    "pos": "noun",
    "cefr": "C1",
    "definition": "to grasp or seize tightly and eagerly with hands or claws"
  },
  {
    "headword": "stagger",
    "pos": "verb",
    "cefr": "C1",
    "definition": "to walk or move unsteadily, or astonish and overwhelm someone"
  },
  {
    "headword": "staggering",
    "pos": "adjective",
    "cefr": "C1",
    "definition": "deeply shocking, astonishing, or extraordinary in scale"
  },
  {
    "headword": "dutiful",
    "pos": "adjective",
    "cefr": "C1",
    "definition": "conscientiously or obediently fulfilling one's duty"
  },
  {
    "headword": "dutifully",
    "pos": "adverb",
    "cefr": "C1",
    "definition": "in a conscientious, obedient, and respectful manner"
  },
  {
    "headword": "calorie",
    "pos": "noun",
    "cefr": "C1",
    "definition": "a unit of energy measuring food fuel or heat capacity"
  },
  {
    "headword": "firm",
    "pos": "verb",
    "cefr": "C1",
    "definition": "strongly established, resolute, unyielding, or a company"
  },
  {
    "headword": "fabulously",
    "pos": "adverb",
    "cefr": "C1",
    "definition": "to an extraordinarily impressive degree, or in a legendary way"
  },
  {
    "headword": "premise",
    "pos": "noun",
    "cefr": "C1",
    "definition": "a previous statement or proposition from which another is inferred"
  },
  {
    "headword": "premises",
    "pos": "noun",
    "cefr": "C1",
    "definition": "a house or building together with its land and outbuildings"
  },
  {
    "headword": "eclectic",
    "pos": "adjective",
    "cefr": "C1",
    "definition": "deriving ideas, taste, or style from a broad, diverse range"
  },
  {
    "headword": "eclectic",
    "pos": "noun",
    "cefr": "C1",
    "definition": "deriving ideas, taste, or style from a broad, diverse range"
  },
  {
    "headword": "eclectically",
    "pos": "adverb",
    "cefr": "C1",
    "definition": "in a diverse manner drawing upon varied genres or origins"
  },
  {
    "headword": "revere",
    "pos": "verb",
    "cefr": "C1",
    "definition": "to feel deep respect or admiration for someone or something"
  },
  {
    "headword": "harbor/harbour",
    "pos": "verb",
    "cefr": "C1",
    "definition": "to give shelter to, or maintain a secret thought or malice"
  },
  {
    "headword": "recognizable/recognisable",
    "pos": "adjective",
    "cefr": "C1",
    "definition": "able to be recognized or identified from past knowledge"
  },
  {
    "headword": "recognizably/recognisably",
    "pos": "adverb",
    "cefr": "C1",
    "definition": "in a manner that is clearly identifiable or apparent"
  },
  {
    "headword": "batter",
    "pos": "verb",
    "cefr": "C1",
    "definition": "to strike repeatedly with hard blows; damage severely"
  },
  {
    "headword": "battery",
    "pos": "noun",
    "cefr": "C1",
    "definition": "assault and battery"
  },
  {
    "headword": "batter",
    "pos": "noun",
    "cefr": "C1",
    "definition": "pancake batter"
  },
  {
    "headword": "batter",
    "pos": "",
    "cefr": "C1",
    "definition": "one who bats"
  },
  {
    "headword": "unreliably",
    "pos": "adverb",
    "cefr": "C1",
    "definition": "in an undependable, erratic, or inconsistent fashion"
  },
  {
    "headword": "waterfront",
    "pos": "noun",
    "cefr": "C1",
    "definition": "the boundary of land or commercial development along water"
  },
  {
    "headword": "amply",
    "pos": "adverb",
    "cefr": "C1",
    "definition": "enough or more than enough; plentifully and convincingly"
  },
  {
    "headword": "amplification",
    "pos": "noun",
    "cefr": "C1",
    "definition": "the action of enlarging, expanding, or increasing intensity"
  },
  {
    "headword": "battered",
    "pos": "adjective",
    "cefr": "C1",
    "definition": "beat up"
  },
  {
    "headword": "battered",
    "pos": "adjective",
    "cefr": "C1",
    "definition": "covered in batter before frying"
  },
  {
    "headword": "comply",
    "pos": "verb",
    "cefr": "C1",
    "definition": "to act in accordance with a wish, statute, or command"
  },
  {
    "headword": "compliance",
    "pos": "noun",
    "cefr": "C1",
    "definition": "the action of conforming to a rule, standard, or requirement"
  },
  {
    "headword": "compliant",
    "pos": "adjective",
    "cefr": "C1",
    "definition": "disposed to agree with others or obey statutory rules"
  },
  {
    "headword": "compliantly",
    "pos": "adverb",
    "cefr": "C1",
    "definition": "in an obedient, submissive, or yielding manner"
  },
  {
    "headword": "blankness",
    "pos": "noun",
    "cefr": "C1",
    "definition": "the state of having no expression, marks, or contents"
  },
  {
    "headword": "exuberant",
    "pos": "adjective",
    "cefr": "C1",
    "definition": "filled with or characterized by lively, energetic excitement"
  },
  {
    "headword": "exuberance",
    "pos": "noun",
    "cefr": "C1",
    "definition": "the quality of being full of energy, excitement, and cheer"
  },
  {
    "headword": "exuberantly",
    "pos": "adverb",
    "cefr": "C1",
    "definition": "in an energetic, enthusiastically cheerful, and lively manner"
  },
  {
    "headword": "linear",
    "pos": "adjective",
    "cefr": "C1",
    "definition": "arranged in or extending along a straight line; sequential"
  },
  {
    "headword": "linearly",
    "pos": "adverb",
    "cefr": "C1",
    "definition": "in a direct, sequential, or directly proportionate manner"
  },
  {
    "headword": "flourish",
    "pos": "noun",
    "cefr": "C1",
    "definition": "to grow or develop in a healthy, vigorous, or prosperous way"
  },
  {
    "headword": "flourish",
    "pos": "verb",
    "cefr": "C1",
    "definition": "to grow or develop in a healthy, vigorous, or prosperous way"
  },
  {
    "headword": "anchor",
    "pos": "verb",
    "cefr": "C1",
    "definition": "to secure firmly in position, or provide a stable foundation"
  },
  {
    "headword": "anchored",
    "pos": "adjective",
    "cefr": "C1",
    "definition": "firmly fastened, fixed, or rooted to a secure base"
  },
  {
    "headword": "domination",
    "pos": "noun",
    "cefr": "C1",
    "definition": "the exercise of supreme control or paramount influence"
  },
  {
    "headword": "dominant",
    "pos": "adjective",
    "cefr": "C1",
    "definition": "most important, powerful, or influential; governing"
  },
  {
    "headword": "dominantly",
    "pos": "adverb",
    "cefr": "C1",
    "definition": "in an overwhelmingly powerful or prevailing manner"
  },
  {
    "headword": "interject",
    "pos": "verb",
    "cefr": "C1",
    "definition": "to say something abruptly as an interruption or aside"
  },
  {
    "headword": "interjection",
    "pos": "noun",
    "cefr": "C1",
    "definition": "an abrupt remark or interruption inserted into dialogue"
  },
  {
    "headword": "gush",
    "pos": "verb",
    "cefr": "C1",
    "definition": "to flow out in a rapid, plentiful stream; praise effusively"
  },
  {
    "headword": "gushing",
    "pos": "adjective",
    "cefr": "C1",
    "definition": "praising someone with excessive enthusiasm; or pouring out"
  },
  {
    "headword": "gush",
    "pos": "noun",
    "cefr": "C1",
    "definition": "to flow out in a rapid, plentiful stream; praise effusively"
  },
  {
    "headword": "gushingly",
    "pos": "adverb",
    "cefr": "C1",
    "definition": "with extravagant, effusive, and unrestrained emotional praise"
  },
  {
    "headword": "voracious",
    "pos": "adjective",
    "cefr": "C1",
    "definition": "consuming food or knowledge with ravenous, insatiable zeal"
  },
  {
    "headword": "voraciously",
    "pos": "adverb",
    "cefr": "C1",
    "definition": "with enormous, insatiable enthusiasm or boundless appetite"
  },
  {
    "headword": "sketchbook",
    "pos": "noun",
    "cefr": "C1",
    "definition": "a book of blank pages on which artists make preliminary sketches"
  },
  {
    "headword": "sketch",
    "pos": "noun",
    "cefr": "C1",
    "definition": "a rough or unfinished drawing or outline of an idea"
  },
  {
    "headword": "prop",
    "pos": "verb",
    "cefr": "C1",
    "definition": "to support by placing against something; or a theater object"
  },
  {
    "headword": "prop",
    "pos": "noun",
    "cefr": "C1",
    "definition": "to support by placing against something; or a theater object"
  },
  {
    "headword": "imp",
    "pos": "noun",
    "cefr": "C1",
    "definition": "a mischievous, playful child or small mythical goblin"
  },
  {
    "headword": "impish",
    "pos": "adjective",
    "cefr": "C1",
    "definition": "inclined to do slightly naughty things for fun; mischievous"
  },
  {
    "headword": "impishly",
    "pos": "adverb",
    "cefr": "C1",
    "definition": "in a playful, mischievous, or impudently teasing manner"
  },
  {
    "headword": "wicked",
    "pos": "adjective",
    "cefr": "C1",
    "definition": "morally degenerate, vicious, or playfully mischievous"
  },
  {
    "headword": "wickedly",
    "pos": "adverb",
    "cefr": "C1",
    "definition": "in an immoral, malicious, or cleverly subversive manner"
  },
  {
    "headword": "macabre",
    "pos": "adjective",
    "cefr": "C1",
    "definition": "disturbing, horrifying, and gruesome because of death motifs"
  },
  {
    "headword": "gusto",
    "pos": "noun",
    "cefr": "C1",
    "definition": "enthusiastic enjoyment, zest, and vigorous enthusiasm in doing"
  },
  {
    "headword": "tantamount",
    "pos": "adjective",
    "cefr": "C1",
    "definition": "equivalent in seriousness to; virtually the same as"
  },
  {
    "headword": "antics",
    "pos": "noun",
    "cefr": "C1",
    "definition": "foolish, outrageous, or playfully eccentric behavior"
  },
  {
    "headword": "lapse",
    "pos": "noun",
    "cefr": "C1",
    "definition": "a brief failure of memory or concentration, or interval"
  },
  {
    "headword": "lapse",
    "pos": "verb",
    "cefr": "C1",
    "definition": "a brief failure of memory or concentration, or interval"
  },
  {
    "headword": "relapse",
    "pos": "verb",
    "cefr": "C1",
    "definition": "to deteriorate after a period of improvement; recurrence"
  },
  {
    "headword": "relapse",
    "pos": "noun",
    "cefr": "C1",
    "definition": "to deteriorate after a period of improvement; recurrence"
  },
  {
    "headword": "impede",
    "pos": "verb",
    "cefr": "C1",
    "definition": "to delay, obstruct, or prevent progress and movement"
  },
  {
    "headword": "impediment",
    "pos": "noun",
    "cefr": "C1",
    "definition": "a hindrance or obstruction in doing something; defect"
  },
  {
    "headword": "taut",
    "pos": "adjective",
    "cefr": "C1",
    "definition": "stretched or pulled tight; not slack; concise and tense"
  },
  {
    "headword": "tautly",
    "pos": "adverb",
    "cefr": "C1",
    "definition": "in a tight, strained, tense, or rigorously disciplined way"
  },
  {
    "headword": "jersey",
    "pos": "noun",
    "cefr": "C1",
    "definition": "a knitted garment with sleeves, or distinctive cycling shirt"
  },
  {
    "headword": "jersey",
    "pos": "adjective",
    "cefr": "C1",
    "definition": "a knitted garment with sleeves, or distinctive cycling shirt"
  },
  {
    "headword": "startling",
    "pos": "adjective",
    "cefr": "C1",
    "definition": "very surprising, astonishing, or remarkable; shocking"
  },
  {
    "headword": "startlingly",
    "pos": "adverb",
    "cefr": "C1",
    "definition": "in a very surprising, astonishing, or remarkable manner"
  },
  {
    "headword": "slack",
    "pos": "verb",
    "cefr": "C1",
    "definition": "not taut or held tightly in position; loose or sluggish"
  },
  {
    "headword": "slack",
    "pos": "noun",
    "cefr": "C1",
    "definition": "not taut or held tightly in position; loose or sluggish"
  },
  {
    "headword": "slack",
    "pos": "adjective",
    "cefr": "C1",
    "definition": "not taut or held tightly in position; loose or sluggish"
  },
  {
    "headword": "slackly",
    "pos": "adverb",
    "cefr": "C1",
    "definition": "in a loose, negligent, careless, or sluggish manner"
  },
  {
    "headword": "unwavering",
    "pos": "adjective",
    "cefr": "C1",
    "definition": "steadfast, resolute, and immune to hesitation or doubt"
  },
  {
    "headword": "unwaveringly",
    "pos": "adverb",
    "cefr": "C1",
    "definition": "in a resolute, steadfast, and unyielding manner"
  },
  {
    "headword": "removed",
    "pos": "adjective",
    "cefr": "C1",
    "definition": "distant, separated by distance, or distinct in relationship"
  },
  {
    "headword": "buffoon",
    "pos": "noun",
    "cefr": "C1",
    "definition": "a ridiculous but amusing person; a clownish jester"
  },
  {
    "headword": "beguiling",
    "pos": "adjective",
    "cefr": "C1",
    "definition": "charming, enchanting, or disarming, often in a deceptive way"
  },
  {
    "headword": "beguilingly",
    "pos": "adverb",
    "cefr": "C1",
    "definition": "in a charming, captivating, or deceptively alluring manner"
  },
  {
    "headword": "blithely",
    "pos": "adverb",
    "cefr": "C1",
    "definition": "in a casual, cheerful, and unconcerned or indifferent manner"
  },
  {
    "headword": "stray",
    "pos": "verb",
    "cefr": "C1",
    "definition": "to move away aimlessly from a group or proper path"
  },
  {
    "headword": "stray",
    "pos": "adjective",
    "cefr": "C1",
    "definition": "to move away aimlessly from a group or proper path"
  },
  {
    "headword": "stray",
    "pos": "noun",
    "cefr": "C1",
    "definition": "to move away aimlessly from a group or proper path"
  },
  {
    "headword": "mythological",
    "pos": "adjective",
    "cefr": "C1",
    "definition": "relating to, based on, or appearing in ancient myths"
  },
  {
    "headword": "mythology",
    "pos": "noun",
    "cefr": "C1",
    "definition": "a collection of myths belonging to a particular cultural tradition"
  },
  {
    "headword": "venerate",
    "pos": "verb",
    "cefr": "C1",
    "definition": "to regard with profound deference, respect, and reverence"
  },
  {
    "headword": "veneration",
    "pos": "noun",
    "cefr": "C1",
    "definition": "a profound feeling of deep respect, reverence, and awe"
  },
  {
    "headword": "ethical",
    "pos": "adjective",
    "cefr": "C1",
    "definition": "relating to moral principles or the branch of ethics"
  },
  {
    "headword": "ethically",
    "pos": "adverb",
    "cefr": "C1",
    "definition": "in a manner consistent with moral principles of right conduct"
  },
  {
    "headword": "heroine",
    "pos": "noun",
    "cefr": "C1",
    "definition": "a woman admired for her courage, outstanding feats, or noble traits"
  },
  {
    "headword": "refreshing",
    "pos": "adjective",
    "cefr": "C1",
    "definition": "welcomely new or different; stimulating and restorative"
  },
  {
    "headword": "refresh",
    "pos": "verb",
    "cefr": "C1",
    "definition": "to give new strength or energy to; update display of"
  },
  {
    "headword": "refreshingly",
    "pos": "adverb",
    "cefr": "C1",
    "definition": "in an invigorating, pleasantly new, and welcome manner"
  },
  {
    "headword": "zany",
    "pos": "adjective",
    "cefr": "C1",
    "definition": "eccentrically ludicrous, amusingly bizarre, or clownish"
  },
  {
    "headword": "devotee",
    "pos": "noun",
    "cefr": "C1",
    "definition": "an ardent follower, admirer, or enthusiast of an art or cause"
  },
  {
    "headword": "salve",
    "pos": "noun",
    "cefr": "C1",
    "definition": "an ointment used to promote healing of skin or soothe mind"
  },
  {
    "headword": "salvation",
    "pos": "noun",
    "cefr": "C1",
    "definition": "deliverance from harm, ruin, loss, or spiritual damnation"
  },
  {
    "headword": "salvage",
    "pos": "verb",
    "cefr": "C1",
    "definition": "to rescue a wrecked or disabled ship or its cargo from loss"
  },
  {
    "headword": "staccato",
    "pos": "adjective",
    "cefr": "C1",
    "definition": "composed of short, sharp, distinct musical sounds or words"
  },
  {
    "headword": "staccato",
    "pos": "adverb",
    "cefr": "C1",
    "definition": "composed of short, sharp, distinct musical sounds or words"
  },
  {
    "headword": "verve",
    "pos": "noun",
    "cefr": "C1",
    "definition": "vivacity, vigor, enthusiasm, and animated stylistic energy"
  },
  {
    "headword": "motley",
    "pos": "adjective",
    "cefr": "C1",
    "definition": "incongruously varied in appearance or character; disparate"
  },
  {
    "headword": "preach",
    "pos": "verb",
    "cefr": "C1",
    "definition": "to deliver a sermon, or advocate moral beliefs earnestly"
  },
  {
    "headword": "preacher",
    "pos": "noun",
    "cefr": "C1",
    "definition": "a person who preaches, especially an ordained minister"
  },
  {
    "headword": "behind",
    "pos": "preposition",
    "cefr": "C1",
    "definition": "the cause of"
  },
  {
    "headword": "continuity",
    "pos": "noun",
    "cefr": "C1",
    "definition": "the unbroken and consistent existence or operation of something"
  },
  {
    "headword": "justly",
    "pos": "adverb",
    "cefr": "C1",
    "definition": "according to moral justice, fairness, and valid desert"
  },
  {
    "headword": "wry",
    "pos": "adjective",
    "cefr": "C1",
    "definition": "dryly humorous, ironically sardonic, or contorted"
  },
  {
    "headword": "wryly",
    "pos": "adverb",
    "cefr": "C1",
    "definition": "with dry, sardonic, or understated grim amusement"
  },
  {
    "headword": "poetess",
    "pos": "noun",
    "cefr": "C1",
    "definition": "a female poet who composes verses of literary art"
  },
  {
    "headword": "confide",
    "pos": "verb",
    "cefr": "C1",
    "definition": "to trust someone by imparting private or secret matters"
  },
  {
    "headword": "sentient",
    "pos": "adjective",
    "cefr": "C1",
    "definition": "able to perceive or feel things; endowed with consciousness"
  },
  {
    "headword": "sentiment",
    "pos": "noun",
    "cefr": "C1",
    "definition": "a view of or attitude toward an event; emotion or opinion"
  },
  {
    "headword": "sentimental",
    "pos": "adjective",
    "cefr": "C1",
    "definition": "prompted by feelings of tenderness, sadness, or nostalgia"
  },
  {
    "headword": "sentimentally",
    "pos": "adverb",
    "cefr": "C1",
    "definition": "in a nostalgic, tender, or emotionally indulgent manner"
  },
  {
    "headword": "tangle",
    "pos": "verb",
    "cefr": "C1",
    "definition": "to twist together into a confused mass, or an entangled knot"
  },
  {
    "headword": "tangle",
    "pos": "noun",
    "cefr": "C1",
    "definition": "to twist together into a confused mass, or an entangled knot"
  },
  {
    "headword": "tangled",
    "pos": "adjective",
    "cefr": "C1",
    "definition": "twisted, intertwined, or complicated in an intricate mess"
  },
  {
    "headword": "untangle",
    "pos": "verb",
    "cefr": "C1",
    "definition": "to unravel knots or clarify intricate, perplexing dilemmas"
  },
  {
    "headword": "untangled",
    "pos": "adjective",
    "cefr": "C1",
    "definition": "freed from physical entanglements or cognitive confusion"
  },
  {
    "headword": "perceptive",
    "pos": "adjective",
    "cefr": "C1",
    "definition": "having or showing sensitive insight, discernment, and perception"
  },
  {
    "headword": "perceptively",
    "pos": "adverb",
    "cefr": "C1",
    "definition": "with acute discernment, sharp intuition, and deep insight"
  },
  {
    "headword": "outset",
    "pos": "noun",
    "cefr": "C1",
    "definition": "the start, inception, or initial beginning of an enterprise"
  },
  {
    "headword": "tycoon",
    "pos": "noun",
    "cefr": "C1",
    "definition": "a wealthy, powerful person in business or industry; magnate"
  },
  {
    "headword": "launch",
    "pos": "noun",
    "cefr": "C1",
    "definition": "to set in motion, initiate, or propel a vessel or product"
  },
  {
    "headword": "engross",
    "pos": "verb",
    "cefr": "C1",
    "definition": "to absorb all the attention, focus, or interest of someone"
  },
  {
    "headword": "engrossing",
    "pos": "adjective",
    "cefr": "C1",
    "definition": "absorbing all one's attention, interest, or mental focus"
  },
  {
    "headword": "plague",
    "pos": "verb",
    "cefr": "C1",
    "definition": "a contagious disease, or to cause continual distress to"
  },
  {
    "headword": "orphan",
    "pos": "verb",
    "cefr": "C1",
    "definition": "a child whose parents are deceased, or deprive of parents"
  },
  {
    "headword": "detritus",
    "pos": "noun",
    "cefr": "C1",
    "definition": "waste, debris, or disintegrating particles of organic matter"
  },
  {
    "headword": "detriment",
    "pos": "noun",
    "cefr": "C1",
    "definition": "the state of being harmed, damaged, or impaired in quality"
  },
  {
    "headword": "detrimental",
    "pos": "adjective",
    "cefr": "C1",
    "definition": "tending to cause harm, injury, or disadvantage to someone"
  },
  {
    "headword": "detrimentally",
    "pos": "adverb",
    "cefr": "C1",
    "definition": "in a manner that produces severe harm or disadvantage"
  },
  {
    "headword": "domestically",
    "pos": "adverb",
    "cefr": "C1",
    "definition": "in a manner relating to the home, household, or one's country"
  },
  {
    "headword": "domesticate",
    "pos": "verb",
    "cefr": "C1",
    "definition": "to tame an animal or adapt a plant for human cultivation"
  },
  {
    "headword": "domestication",
    "pos": "noun",
    "cefr": "C1",
    "definition": "the process of taming wildlife for domestic human cultivation"
  },
  {
    "headword": "eccentric",
    "pos": "noun",
    "cefr": "C1",
    "definition": "unconventional, slightly strange, and idiosyncratic in behavior"
  },
  {
    "headword": "eccentric",
    "pos": "adjective",
    "cefr": "C1",
    "definition": "unconventional, slightly strange, and idiosyncratic in behavior"
  },
  {
    "headword": "eccentrically",
    "pos": "adverb",
    "cefr": "C1",
    "definition": "in an idiosyncratic, unconventional, or quirky manner"
  },
  {
    "headword": "render",
    "pos": "verb",
    "cefr": "C1",
    "definition": "to provide or give a service, or cause to become in state"
  },
  {
    "headword": "rendering",
    "pos": "noun",
    "cefr": "C1",
    "definition": "a performance of a piece of music or art, or translation"
  },
  {
    "headword": "pathos",
    "pos": "noun",
    "cefr": "C1",
    "definition": "a quality that evokes pity, compassion, or profound sadness"
  },
  {
    "headword": "tailor",
    "pos": "noun",
    "cefr": "C1",
    "definition": "to adapt or adjust for a particular purpose or person; clothier"
  },
  {
    "headword": "tailor",
    "pos": "verb",
    "cefr": "C1",
    "definition": "to adapt or adjust for a particular purpose or person; clothier"
  },
  {
    "headword": "personalize/personalise",
    "pos": "verb",
    "cefr": "C1",
    "definition": "to design or tailor something to meet someone's requirements"
  },
  {
    "headword": "personalization/personalisation",
    "pos": "noun",
    "cefr": "C1",
    "definition": "the action of designing or tailoring to produce custom fit"
  },
  {
    "headword": "personification",
    "pos": "noun",
    "cefr": "C1",
    "definition": "attribution of human characteristics to something non-human"
  },
  {
    "headword": "limitless",
    "pos": "adjective",
    "cefr": "C1",
    "definition": "without end, boundary, or limit; infinite in scale"
  },
  {
    "headword": "apprentice",
    "pos": "noun",
    "cefr": "C1",
    "definition": "a person learning a trade from a skilled employer"
  },
  {
    "headword": "apprentice",
    "pos": "verb",
    "cefr": "C1",
    "definition": "a person learning a trade from a skilled employer"
  },
  {
    "headword": "apprenticeship",
    "pos": "noun",
    "cefr": "C1",
    "definition": "the position or period of learning under a master craftsman"
  },
  {
    "headword": "precision",
    "pos": "noun",
    "cefr": "C1",
    "definition": "the quality, condition, or fact of being exact and accurate"
  },
  {
    "headword": "swap",
    "pos": "verb",
    "cefr": "C1",
    "definition": "to take part in an exchange of goods, positions, or roles"
  },
  {
    "headword": "swap",
    "pos": "noun",
    "cefr": "C1",
    "definition": "to take part in an exchange of goods, positions, or roles"
  },
  {
    "headword": "perfect",
    "pos": "verb",
    "cefr": "C1",
    "definition": "to make something completely free from faults or defects"
  },
  {
    "headword": "silhouette",
    "pos": "noun",
    "cefr": "C1",
    "definition": "the dark shape and outline of someone or something against light"
  },
  {
    "headword": "nondescript",
    "pos": "adjective",
    "cefr": "C1",
    "definition": "lacking distinctive or interesting features or characteristics"
  },
  {
    "headword": "signal",
    "pos": "verb",
    "cefr": "C1",
    "definition": "a gesture, action, or sound conveying a notice or order"
  },
  {
    "headword": "negligible",
    "pos": "adjective",
    "cefr": "C1",
    "definition": "so small or unimportant as to be not worth considering"
  },
  {
    "headword": "negligent",
    "pos": "adjective",
    "cefr": "C1",
    "definition": "failing to take proper care over something; derelict"
  },
  {
    "headword": "negligently",
    "pos": "adverb",
    "cefr": "C1",
    "definition": "in a careless, inattentive, or neglectful manner"
  },
  {
    "headword": "principally",
    "pos": "adverb",
    "cefr": "C1",
    "definition": "for the most part; chiefly, primarily, and mainly"
  },
  {
    "headword": "altruism",
    "pos": "noun",
    "cefr": "C1",
    "definition": "disinterested and selfless concern for the welfare of others"
  },
  {
    "headword": "altruistic",
    "pos": "adjective",
    "cefr": "C1",
    "definition": "showing a selfless concern for the well-being of others"
  },
  {
    "headword": "scenario",
    "pos": "noun",
    "cefr": "C1",
    "definition": "a postulated sequence or development of future events"
  },
  {
    "headword": "voluntary",
    "pos": "adjective",
    "cefr": "C1",
    "definition": "undertaken out of autonomous personal volition without compulsion"
  },
  {
    "headword": "voluntarily",
    "pos": "adverb",
    "cefr": "C1",
    "definition": "out of uncoerced personal choice and willing agency"
  },
  {
    "headword": "reap",
    "pos": "verb",
    "cefr": "C1",
    "definition": "to harvest crops, or receive as a consequence of actions"
  },
  {
    "headword": "paternal",
    "pos": "adjective",
    "cefr": "C1",
    "definition": "showing a father's affection; related through the father"
  },
  {
    "headword": "maternal",
    "pos": "adjective",
    "cefr": "C1",
    "definition": "relating to a mother, especially during pregnancy or childhood"
  },
  {
    "headword": "maternalistic",
    "pos": "adjective",
    "cefr": "C1",
    "definition": "displaying maternal authority, protection, and benevolence"
  },
  {
    "headword": "paternalistic",
    "pos": "adjective",
    "cefr": "C1",
    "definition": "governing people in a paternal way, providing needs without freedom"
  },
  {
    "headword": "provisions",
    "pos": "noun",
    "cefr": "C1",
    "definition": "foodstuffs"
  },
  {
    "headword": "injustice",
    "pos": "noun",
    "cefr": "C1",
    "definition": "lack of fairness, violation of rights, or unjust conduct"
  },
  {
    "headword": "impoverished",
    "pos": "adjective",
    "cefr": "C1",
    "definition": "reduced to poverty; or exhausted of vital assets"
  },
  {
    "headword": "unsustainable",
    "pos": "adjective",
    "cefr": "C1",
    "definition": "incapable of being continued, endured, or ecologically maintained"
  },
  {
    "headword": "unsustainably",
    "pos": "adverb",
    "cefr": "C1",
    "definition": "in a manner that rapidly depletes essential resources"
  },
  {
    "headword": "sustainable",
    "pos": "adjective",
    "cefr": "C1",
    "definition": "able to be maintained at a certain rate or level; eco-friendly"
  },
  {
    "headword": "sustainably",
    "pos": "adverb",
    "cefr": "C1",
    "definition": "in a way that can be maintained without exhausting resources"
  },
  {
    "headword": "bypass",
    "pos": "verb",
    "cefr": "C1",
    "definition": "to avoid or circumvent an obstacle, procedure, or congestion"
  },
  {
    "headword": "imperative",
    "pos": "adjective",
    "cefr": "C1",
    "definition": "of vital importance; crucial, authoritative, or essential"
  },
  {
    "headword": "imperative",
    "pos": "noun",
    "cefr": "C1",
    "definition": "of vital importance; crucial, authoritative, or essential"
  },
  {
    "headword": "cynic",
    "pos": "noun",
    "cefr": "C1",
    "definition": "a person who believes people are motivated purely by self-interest"
  },
  {
    "headword": "cynical",
    "pos": "adjective",
    "cefr": "C1",
    "definition": "distrustful of human sincerity, morality, or integrity"
  },
  {
    "headword": "cynically",
    "pos": "adverb",
    "cefr": "C1",
    "definition": "with profound pessimism, doubt, or sneering skepticism"
  },
  {
    "headword": "cynicism",
    "pos": "noun",
    "cefr": "C1",
    "definition": "an inclination to question motives and distrust human virtue"
  },
  {
    "headword": "sarcasm",
    "pos": "noun",
    "cefr": "C1",
    "definition": "the use of irony to mock or convey contempt"
  },
  {
    "headword": "sarcastic",
    "pos": "adjective",
    "cefr": "C1",
    "definition": "marked by or given to using irony in order to mock"
  },
  {
    "headword": "sarcastically",
    "pos": "adverb",
    "cefr": "C1",
    "definition": "in an ironically mocking, derisive, or cutting manner"
  },
  {
    "headword": "misplace",
    "pos": "verb",
    "cefr": "C1",
    "definition": "to put in the wrong location and lose temporarily"
  },
  {
    "headword": "symptomatic",
    "pos": "adjective",
    "cefr": "C1",
    "definition": "serving as a symptom or sign, especially of something undesirable"
  },
  {
    "headword": "degrade",
    "pos": "verb",
    "cefr": "C1",
    "definition": "to lower the moral character, quality, or chemical grade of"
  },
  {
    "headword": "degrading",
    "pos": "adjective",
    "cefr": "C1",
    "definition": "causing humiliation or loss of dignity and moral respect"
  },
  {
    "headword": "degradation",
    "pos": "noun",
    "cefr": "C1",
    "definition": "the condition or process of degrading or deteriorating"
  },
  {
    "headword": "discourse",
    "pos": "noun",
    "cefr": "C1",
    "definition": "formal written or spoken debate, dialogue, or academic treatise"
  },
  {
    "headword": "amid",
    "pos": "preposition",
    "cefr": "C1",
    "definition": "surrounded by; in the middle or course of an event"
  },
  {
    "headword": "hedgehog",
    "pos": "noun",
    "cefr": "C1",
    "definition": "a small nocturnal spiny mammal capable of rolling into a ball"
  },
  {
    "headword": "nocturnal",
    "pos": "adjective",
    "cefr": "C1",
    "definition": "done, occurring, or active during the night hours"
  },
  {
    "headword": "hibernate",
    "pos": "verb",
    "cefr": "C1",
    "definition": "to spend winter in a dormant state, or remain inactive"
  },
  {
    "headword": "hibernation",
    "pos": "noun",
    "cefr": "C1",
    "definition": "the state of inactivity and metabolic depression in animals"
  },
  {
    "headword": "convict",
    "pos": "verb",
    "cefr": "C1",
    "definition": "to formally declare guilty of a criminal offense in court"
  },
  {
    "headword": "convict",
    "pos": "noun",
    "cefr": "C1",
    "definition": "to formally declare guilty of a criminal offense in court"
  },
  {
    "headword": "conviction",
    "pos": "noun",
    "cefr": "C1",
    "definition": "a firmly held belief, or formal finding of legal guilt"
  },
  {
    "headword": "latent",
    "pos": "adjective",
    "cefr": "C1",
    "definition": "existing but dormant, concealed, or not yet developed"
  },
  {
    "headword": "snooze",
    "pos": "verb",
    "cefr": "C1",
    "definition": "a brief, light sleep, especially one taken during the day"
  },
  {
    "headword": "classy",
    "pos": "adjective",
    "cefr": "C1",
    "definition": "stylish, sophisticated, elegant, and fashionable in taste"
  },
  {
    "headword": "wrench",
    "pos": "verb",
    "cefr": "C1",
    "definition": "to pull, twist, or extract suddenly with violent effort"
  },
  {
    "headword": "reminisce",
    "pos": "verb",
    "cefr": "C1",
    "definition": "to indulge in enjoyable recollection of past events"
  },
  {
    "headword": "reminiscent",
    "pos": "adjective",
    "cefr": "C1",
    "definition": "tending to remind someone of something; evocative of"
  },
  {
    "headword": "intuit",
    "pos": "verb",
    "cefr": "C1",
    "definition": "to understand or know by instinct rather than conscious logic"
  },
  {
    "headword": "intuition",
    "pos": "noun",
    "cefr": "C1",
    "definition": "the ability to understand something instinctively and immediately"
  },
  {
    "headword": "intuitive",
    "pos": "adjective",
    "cefr": "C1",
    "definition": "based on what one feels to be true without rationale"
  },
  {
    "headword": "intuitively",
    "pos": "adverb",
    "cefr": "C1",
    "definition": "without conscious reasoning; purely through instinct"
  },
  {
    "headword": "marginal",
    "pos": "adjective",
    "cefr": "C1",
    "definition": "of secondary or minor importance; situated at the edge"
  },
  {
    "headword": "marginally",
    "pos": "adverb",
    "cefr": "C1",
    "definition": "to only a limited extent; slightly, barely, or insignificantly"
  },
  {
    "headword": "crude",
    "pos": "adjective",
    "cefr": "C1",
    "definition": "unrefined, raw, or rudimentary and lacking sophistication"
  },
  {
    "headword": "crudely",
    "pos": "adverb",
    "cefr": "C1",
    "definition": "in a rudimentary, unrefined, or blunt and coarse manner"
  },
  {
    "headword": "strap",
    "pos": "noun",
    "cefr": "C1",
    "definition": "a strip of leather or cloth used to fasten or hold things"
  },
  {
    "headword": "strap",
    "pos": "verb",
    "cefr": "C1",
    "definition": "a strip of leather or cloth used to fasten or hold things"
  },
  {
    "headword": "strapping",
    "pos": "adjective",
    "cefr": "C1",
    "definition": "big, tall, robust, and physically strong"
  },
  {
    "headword": "scoff",
    "pos": "verb",
    "cefr": "C1",
    "definition": "to speak about someone or something in a scornfully derisive way"
  },
  {
    "headword": "fiddly",
    "pos": "adjective",
    "cefr": "C1",
    "definition": "awkward to do or handle because of smallness and complexity"
  },
  {
    "headword": "fiddler",
    "pos": "noun",
    "cefr": "C1",
    "definition": "a violin player, or someone who meddles or tampers idly"
  },
  {
    "headword": "fiddle",
    "pos": "verb",
    "cefr": "C1",
    "definition": "to manipulate or touch idly, or dishonestly tamper with data"
  },
  {
    "headword": "fiddle",
    "pos": "noun",
    "cefr": "C1",
    "definition": "to manipulate or touch idly, or dishonestly tamper with data"
  },
  {
    "headword": "unmusical",
    "pos": "adjective",
    "cefr": "C1",
    "definition": "devoid of pleasant melodic harmony or rhythm"
  },
  {
    "headword": "unmusically",
    "pos": "adverb",
    "cefr": "C1",
    "definition": "in a dissonant, discordant, or harsh acoustic manner"
  },
  {
    "headword": "repertory",
    "pos": "noun",
    "cefr": "C1",
    "definition": "the performance of varied plays by a permanent company"
  },
  {
    "headword": "concerto",
    "pos": "noun",
    "cefr": "C1",
    "definition": "a musical composition for a solo instrument and orchestra"
  },
  {
    "headword": "premier",
    "pos": "adjective",
    "cefr": "C1",
    "definition": "first in importance, order, or position; leading prime"
  },
  {
    "headword": "premier",
    "pos": "noun",
    "cefr": "C1",
    "definition": "first in importance, order, or position; leading prime"
  },
  {
    "headword": "fanatic",
    "pos": "noun",
    "cefr": "C1",
    "definition": "a person filled with excessive, single-minded religious or political zeal"
  },
  {
    "headword": "fanatic",
    "pos": "adjective",
    "cefr": "C1",
    "definition": "a person filled with excessive, single-minded religious or political zeal"
  },
  {
    "headword": "fanatically",
    "pos": "adverb",
    "cefr": "C1",
    "definition": "with extreme, obsessive, and single-minded enthusiasm"
  },
  {
    "headword": "acoustically",
    "pos": "adverb",
    "cefr": "C1",
    "definition": "in terms of sound properties, hearing, or acoustic fidelity"
  },
  {
    "headword": "acoustic",
    "pos": "adjective",
    "cefr": "C1",
    "definition": "relating to sound, the sense of hearing, or non-electric music"
  },
  {
    "headword": "acoustics",
    "pos": "noun",
    "cefr": "C1",
    "definition": "the scientific properties or qualities of sound transmission"
  },
  {
    "headword": "compromised",
    "pos": "adjective",
    "cefr": "C1",
    "definition": "vulnerable, damaged, or adjusted via mutual concessions"
  },
  {
    "headword": "daunt",
    "pos": "verb",
    "cefr": "C1",
    "definition": "to intimidate, subdue the courage of, or dismay someone"
  },
  {
    "headword": "daunting",
    "pos": "adjective",
    "cefr": "C1",
    "definition": "seeming difficult to deal with in anticipation; intimidating"
  },
  {
    "headword": "realist",
    "pos": "noun",
    "cefr": "C1",
    "definition": "a person who accepts a situation as it is and is pragmatic"
  },
  {
    "headword": "realism",
    "pos": "noun",
    "cefr": "C1",
    "definition": "the attitude of accepting a situation as it is; fidelity to life"
  },
  {
    "headword": "recess",
    "pos": "noun",
    "cefr": "C1",
    "definition": "part of a wall that is set back"
  },
  {
    "headword": "recess",
    "pos": "noun",
    "cefr": "C1",
    "definition": "break-time"
  },
  {
    "headword": "recessive",
    "pos": "adjective",
    "cefr": "C1",
    "definition": "relating to heritable characteristics masked by dominant genes"
  },
  {
    "headword": "prolific",
    "pos": "adjective",
    "cefr": "C1",
    "definition": "producing much fruit, foliage, or many artistic works"
  },
  {
    "headword": "prolifically",
    "pos": "adverb",
    "cefr": "C1",
    "definition": "in large quantities, high frequency, or with fertile abundance"
  },
  {
    "headword": "proliferate",
    "pos": "verb",
    "cefr": "C1",
    "definition": "to increase rapidly in numbers; multiply and expand"
  },
  {
    "headword": "fragmentation",
    "pos": "noun",
    "cefr": "C1",
    "definition": "the process of breaking into small, separate, isolated parts"
  },
  {
    "headword": "campaign",
    "pos": "verb",
    "cefr": "C1",
    "definition": "an organized course of action to achieve a strategic goal"
  },
  {
    "headword": "astray",
    "pos": "adverb",
    "cefr": "C1",
    "definition": "away from the correct path, moral direction, or intention"
  },
  {
    "headword": "duration",
    "pos": "noun",
    "cefr": "C1",
    "definition": "the length of time that something continues or persists"
  },
  {
    "headword": "durable",
    "pos": "adjective",
    "cefr": "C1",
    "definition": "able to withstand wear, pressure, or damage; hard-wearing"
  },
  {
    "headword": "durable",
    "pos": "noun",
    "cefr": "C1",
    "definition": "able to withstand wear, pressure, or damage; hard-wearing"
  },
  {
    "headword": "likelihood",
    "pos": "noun",
    "cefr": "C1",
    "definition": "the state or fact of something being probable or likely"
  },
  {
    "headword": "naive",
    "pos": "adjective",
    "cefr": "C1",
    "definition": "showing a lack of experience, wisdom, or sound judgment"
  },
  {
    "headword": "naively",
    "pos": "adverb",
    "cefr": "C1",
    "definition": "in an innocent, gullible, or unsophisticated manner"
  },
  {
    "headword": "naivety",
    "pos": "noun",
    "cefr": "C1",
    "definition": "innocence or lack of informed judgment and experience"
  },
  {
    "headword": "impervious",
    "pos": "adjective",
    "cefr": "C1",
    "definition": "unable to be affected, penetrated, or influenced by"
  },
  {
    "headword": "ludicrous",
    "pos": "adjective",
    "cefr": "C1",
    "definition": "so foolish, unreasonable, or out of place as to be amusing"
  },
  {
    "headword": "ludicrously",
    "pos": "adverb",
    "cefr": "C1",
    "definition": "to an absurd, ridiculous, and laughably foolish degree"
  },
  {
    "headword": "cost-effective",
    "pos": "adjective",
    "cefr": "C1",
    "definition": "yielding advantageous commercial returns for outlay incurred"
  },
  {
    "headword": "gruesome",
    "pos": "adjective",
    "cefr": "C1",
    "definition": "causing shock, repulsiveness, horror, and visceral disgust"
  },
  {
    "headword": "gruesomely",
    "pos": "adverb",
    "cefr": "C1",
    "definition": "in a horrifyingly gruesome, macabre, or revolting manner"
  },
  {
    "headword": "envisage",
    "pos": "verb",
    "cefr": "C1",
    "definition": "to contemplate or conceive of as a future possibility"
  },
  {
    "headword": "screenwriter",
    "pos": "noun",
    "cefr": "C1",
    "definition": "a person who writes screenplays for motion pictures or TV"
  },
  {
    "headword": "mingle",
    "pos": "verb",
    "cefr": "C1",
    "definition": "to mix or cause to mix together; socialize at a gathering"
  },
  {
    "headword": "churn",
    "pos": "verb",
    "cefr": "C1",
    "definition": "to agitate vigorously, or produce mechanically in large volume"
  },
  {
    "headword": "buffer",
    "pos": "verb",
    "cefr": "C1",
    "definition": "a person or thing that prevents incompatible things from clashing"
  },
  {
    "headword": "buffer",
    "pos": "noun",
    "cefr": "C1",
    "definition": "a person or thing that prevents incompatible things from clashing"
  },
  {
    "headword": "irate",
    "pos": "adjective",
    "cefr": "C1",
    "definition": "feeling or characterized by intense, fiery anger"
  },
  {
    "headword": "irately",
    "pos": "adverb",
    "cefr": "C1",
    "definition": "in an extremely angry, incensed, or indignant manner"
  },
  {
    "headword": "docile",
    "pos": "adjective",
    "cefr": "C1",
    "definition": "ready to accept control or instruction; submissive"
  },
  {
    "headword": "docilely",
    "pos": "adverb",
    "cefr": "C1",
    "definition": "in a compliant, gentle, and easily managed manner"
  },
  {
    "headword": "fiend",
    "pos": "noun",
    "cefr": "C1",
    "definition": "an evil spirit, cruel person, or obsessive enthusiast"
  },
  {
    "headword": "fiendish",
    "pos": "adjective",
    "cefr": "C1",
    "definition": "extremely cruel, wicked, or diabolically complicated"
  },
  {
    "headword": "fiendishly",
    "pos": "adverb",
    "cefr": "C1",
    "definition": "in an extremely cruel, diabolical, or difficult manner"
  },
  {
    "headword": "transfix",
    "pos": "verb",
    "cefr": "C1",
    "definition": "to cause someone to become motionless with horror, wonder, or awe"
  },
  {
    "headword": "gypsy",
    "pos": "noun",
    "cefr": "C1",
    "definition": "a member of a nomadic people, or free-spirited wanderer"
  },
  {
    "headword": "temperament",
    "pos": "noun",
    "cefr": "C1",
    "definition": "a person's nature, especially as it affects their behavior"
  },
  {
    "headword": "temperamental",
    "pos": "adjective",
    "cefr": "C1",
    "definition": "relating to a person's temperament; erratic and moody"
  },
  {
    "headword": "temperamentally",
    "pos": "adverb",
    "cefr": "C1",
    "definition": "with regard to a person's inborn nature or temperament"
  },
  {
    "headword": "screenplay",
    "pos": "noun",
    "cefr": "C1",
    "definition": "the script of a film, including acting instructions and scenes"
  },
  {
    "headword": "disillusionment",
    "pos": "noun",
    "cefr": "C1",
    "definition": "a feeling of disappointment resulting from shattered ideals"
  },
  {
    "headword": "demise",
    "pos": "noun",
    "cefr": "C1",
    "definition": "a person's death, or the permanent termination of an era"
  },
  {
    "headword": "raunchy",
    "pos": "adjective",
    "cefr": "C1",
    "definition": "earthy, boisterous, sexually explicit, or provocative"
  },
  {
    "headword": "raunchily",
    "pos": "adverb",
    "cefr": "C1",
    "definition": "in a provocative, earthy, sexually crude, or boisterous way"
  },
  {
    "headword": "overdraft",
    "pos": "verb",
    "cefr": "C1",
    "definition": "a deficit in a bank account caused by drawing more funds"
  },
  {
    "headword": "overdraft",
    "pos": "noun",
    "cefr": "C1",
    "definition": "a deficit in a bank account caused by drawing more funds"
  },
  {
    "headword": "synopsis",
    "pos": "noun",
    "cefr": "C1",
    "definition": "a brief summary or general survey of something; overview"
  },
  {
    "headword": "renown",
    "pos": "noun",
    "cefr": "C1",
    "definition": "the condition of being known or talked about by many; fame"
  },
  {
    "headword": "contest",
    "pos": "verb",
    "cefr": "C1",
    "definition": "to dispute, oppose, or challenge the legality of a decision"
  },
  {
    "headword": "contested",
    "pos": "adjective",
    "cefr": "C1",
    "definition": "disputed, vigorously challenged, or subject to debate"
  },
  {
    "headword": "verandah",
    "pos": "noun",
    "cefr": "C1",
    "definition": "a roofed, open-sided porch extending alongside an edifice"
  },
  {
    "headword": "occupational",
    "pos": "adjective",
    "cefr": "C1",
    "definition": "relating to a person's job, profession, or career duties"
  },
  {
    "headword": "verdict",
    "pos": "noun",
    "cefr": "C1",
    "definition": "the definitive judgment, finding, or conclusion reached"
  },
  {
    "headword": "ventilate",
    "pos": "verb",
    "cefr": "C1",
    "definition": "to admit fresh airflow or voice an grievance openly"
  },
  {
    "headword": "ventilation",
    "pos": "noun",
    "cefr": "C1",
    "definition": "the circulation of fresh air or public airing of discourse"
  },
  {
    "headword": "occupant",
    "pos": "noun",
    "cefr": "C1",
    "definition": "a person who resides, works, or is present in a place"
  },
  {
    "headword": "radiator",
    "pos": "noun",
    "cefr": "C1",
    "definition": "a device for heating a room or cooling an engine"
  },
  {
    "headword": "homely",
    "pos": "adjective",
    "cefr": "C1",
    "definition": "simple, comfortable, and unpretentious; or plain in appearance"
  },
  {
    "headword": "bureaucratic",
    "pos": "adjective",
    "cefr": "C1",
    "definition": "relating to rigid, complex administrative systems and rules"
  },
  {
    "headword": "bureaucratically",
    "pos": "adverb",
    "cefr": "C1",
    "definition": "in a manner overly bound by complex red tape and rules"
  },
  {
    "headword": "adjustable",
    "pos": "adjective",
    "cefr": "C1",
    "definition": "capable of being altered or adapted to fit requirements"
  },
  {
    "headword": "fatigue",
    "pos": "noun",
    "cefr": "C1",
    "definition": "extreme tiredness resulting from mental or physical exertion"
  },
  {
    "headword": "muscular",
    "pos": "adjective",
    "cefr": "C1",
    "definition": "having well-developed muscles; strong, robust, and athletic"
  },
  {
    "headword": "versatile",
    "pos": "adjective",
    "cefr": "C1",
    "definition": "capable of adapting adroitly to numerous diverse purposes"
  },
  {
    "headword": "versatility",
    "pos": "noun",
    "cefr": "C1",
    "definition": "the quality of possessing multifaceted adaptability and skills"
  },
  {
    "headword": "stimuli",
    "pos": "noun",
    "cefr": "C1",
    "definition": "things that arouse activity or energy in someone or something"
  },
  {
    "headword": "uninspiring",
    "pos": "adjective",
    "cefr": "C1",
    "definition": "lacking imaginative vitality, dull, or pedestrian"
  },
  {
    "headword": "mutually",
    "pos": "adverb",
    "cefr": "C1",
    "definition": "with mutual, shared action or reciprocal relation"
  },
  {
    "headword": "somber/sombre",
    "pos": "adjective",
    "cefr": "C1",
    "definition": "dark or dull in color or tone; gloomy and solemn"
  },
  {
    "headword": "somberly/sombrely",
    "pos": "adverb",
    "cefr": "C1",
    "definition": "in a solemn, gloomy, grave, or melancholy manner"
  },
  {
    "headword": "clutter",
    "pos": "noun",
    "cefr": "C1",
    "definition": "a disorderly collection or crowded untidiness of objects"
  },
  {
    "headword": "clutter",
    "pos": "verb",
    "cefr": "C1",
    "definition": "a disorderly collection or crowded untidiness of objects"
  },
  {
    "headword": "lodge",
    "pos": "verb",
    "cefr": "C1",
    "definition": "to stay temporarily, provide accommodation, or formally file"
  },
  {
    "headword": "dislodge",
    "pos": "verb",
    "cefr": "C1",
    "definition": "to knock, force, or dislodge out of a fixed position"
  },
  {
    "headword": "carpenter",
    "pos": "noun",
    "cefr": "C1",
    "definition": "a person who builds or repairs wooden structures"
  },
  {
    "headword": "carpentry",
    "pos": "noun",
    "cefr": "C1",
    "definition": "the activity or skill of building wooden structures and artifacts"
  },
  {
    "headword": "transit",
    "pos": "noun",
    "cefr": "C1",
    "definition": "the carrying of people, goods, or materials from one place to another"
  },
  {
    "headword": "plummet",
    "pos": "verb",
    "cefr": "C1",
    "definition": "to fall or drop straight down at high velocity; plunge"
  },
  {
    "headword": "circulate",
    "pos": "verb",
    "cefr": "C1",
    "definition": "to move continuously through a closed system, or spread widely"
  },
  {
    "headword": "circulation",
    "pos": "noun",
    "cefr": "C1",
    "definition": "movement through a system, or distribution count of periodicals"
  },
  {
    "headword": "demography",
    "pos": "noun",
    "cefr": "C1",
    "definition": "the statistical study of human population changes and metrics"
  },
  {
    "headword": "demographic",
    "pos": "adjective",
    "cefr": "C1",
    "definition": "relating to the structure, census, and statistics of populations"
  },
  {
    "headword": "demographic",
    "pos": "noun",
    "cefr": "C1",
    "definition": "relating to the structure, census, and statistics of populations"
  },
  {
    "headword": "demographically",
    "pos": "adverb",
    "cefr": "C1",
    "definition": "in terms of census, age, income, or population demographics"
  },
  {
    "headword": "phenomenal",
    "pos": "adjective",
    "cefr": "C1",
    "definition": "remarkable, extraordinary, or perceptible by the senses"
  },
  {
    "headword": "phenomenally",
    "pos": "adverb",
    "cefr": "C1",
    "definition": "to an extraordinary, remarkable, and exceptional degree"
  },
  {
    "headword": "prophet",
    "pos": "noun",
    "cefr": "C1",
    "definition": "a person regarded as an inspired teacher of divine will"
  },
  {
    "headword": "prophetic",
    "pos": "adjective",
    "cefr": "C1",
    "definition": "accurately describing or predicting what will happen in future"
  },
  {
    "headword": "paywall",
    "pos": "noun",
    "cefr": "C1",
    "definition": "a digital system preventing access to webpage content without fee"
  },
  {
    "headword": "firewall",
    "pos": "noun",
    "cefr": "C1",
    "definition": "a digital security partition blocking unauthorized networks"
  },
  {
    "headword": "launch",
    "pos": "noun",
    "cefr": "C1",
    "definition": "to set in motion, initiate, or propel a vessel or product"
  },
  {
    "headword": "invoice",
    "pos": "noun",
    "cefr": "C1",
    "definition": "a commercial bill itemizing goods sent or services provided"
  },
  {
    "headword": "demolition",
    "pos": "noun",
    "cefr": "C1",
    "definition": "the deliberate destruction or tearing down of a building"
  },
  {
    "headword": "demo",
    "pos": "noun",
    "cefr": "C1",
    "definition": "a demonstration of a product, prototype, or musical recording"
  },
  {
    "headword": "gig",
    "pos": "noun",
    "cefr": "C1",
    "definition": "a live performance, temporary job, or light two-wheeled carriage"
  },
  {
    "headword": "socialization",
    "pos": "noun",
    "cefr": "C1",
    "definition": "the process of learning to behave in a socially acceptable way"
  },
  {
    "headword": "antiquity",
    "pos": "noun",
    "cefr": "C1",
    "definition": "the ancient past, especially the period before the Middle Ages"
  },
  {
    "headword": "antiquated",
    "pos": "adjective",
    "cefr": "C1",
    "definition": "old-fashioned, outdated, or no longer viable"
  },
  {
    "headword": "restoration",
    "pos": "noun",
    "cefr": "C1",
    "definition": "the action of returning something to a former condition"
  },
  {
    "headword": "restorative",
    "pos": "adjective",
    "cefr": "C1",
    "definition": "having the ability to restore health, strength, or well-being"
  },
  {
    "headword": "rotate",
    "pos": "verb",
    "cefr": "C1",
    "definition": "to move or cause to move in a circle around an axis"
  },
  {
    "headword": "till",
    "pos": "noun",
    "cefr": "C1",
    "definition": "to prepare and cultivate land for crops, or a cash drawer"
  },
  {
    "headword": "coupled",
    "pos": "adjective",
    "cefr": "C1",
    "definition": "linked or combined together with a concurrent phenomenon"
  },
  {
    "headword": "itinerary",
    "pos": "noun",
    "cefr": "C1",
    "definition": "a planned route, schedule, or list of journey destinations"
  },
  {
    "headword": "charter",
    "pos": "verb",
    "cefr": "C1",
    "definition": "a formal document granting sovereign rights, or leased vessel"
  },
  {
    "headword": "charter",
    "pos": "noun",
    "cefr": "C1",
    "definition": "a formal document granting sovereign rights, or leased vessel"
  },
  {
    "headword": "terrain",
    "pos": "noun",
    "cefr": "C1",
    "definition": "a stretch of land, especially with regard to physical features"
  },
  {
    "headword": "resilient",
    "pos": "adjective",
    "cefr": "C1",
    "definition": "able to withstand or recover quickly from difficult conditions"
  },
  {
    "headword": "resilience",
    "pos": "noun",
    "cefr": "C1",
    "definition": "the capacity to recover quickly from difficulties; toughness"
  },
  {
    "headword": "enterprising",
    "pos": "adjective",
    "cefr": "C1",
    "definition": "having or showing initiative, resourcefulness, and daring"
  },
  {
    "headword": "integral",
    "pos": "adjective",
    "cefr": "C1",
    "definition": "necessary to make a whole complete; essential component"
  },
  {
    "headword": "canoe",
    "pos": "noun",
    "cefr": "C1",
    "definition": "a narrow, lightweight boat propelled with a paddle"
  },
  {
    "headword": "magnetic",
    "pos": "adjective",
    "cefr": "C1",
    "definition": "having the properties of a magnet, or exerting great charm"
  },
  {
    "headword": "magnetism",
    "pos": "noun",
    "cefr": "C1",
    "definition": "physical magnetic force, or extraordinary personal allure"
  },
  {
    "headword": "magnetically",
    "pos": "adverb",
    "cefr": "C1",
    "definition": "by means of magnetic attraction or captivating allure"
  },
  {
    "headword": "credible",
    "pos": "adjective",
    "cefr": "C1",
    "definition": "able to be believed; convincing, plausible, and sound"
  },
  {
    "headword": "credibly",
    "pos": "adverb",
    "cefr": "C1",
    "definition": "in a convincing, plausible, and trustworthy manner"
  },
  {
    "headword": "credibility",
    "pos": "noun",
    "cefr": "C1",
    "definition": "the quality of being trusted, authentic, and believed in"
  },
  {
    "headword": "credential",
    "pos": "noun",
    "cefr": "C1",
    "definition": "a qualification, achievement, or badge of authority"
  },
  {
    "headword": "acutely",
    "pos": "adverb",
    "cefr": "C1",
    "definition": "in an intense, sharp, or deeply perceptive manner"
  },
  {
    "headword": "prohibitive",
    "pos": "adjective",
    "cefr": "C1",
    "definition": "forbidding, or of a price so high as to prevent purchase"
  },
  {
    "headword": "prohibitively",
    "pos": "adverb",
    "cefr": "C1",
    "definition": "to a degree that discourages, prevents, or forbids participation"
  },
  {
    "headword": "fissure",
    "pos": "noun",
    "cefr": "C1",
    "definition": "a long, narrow opening, crack, or fracture in rock"
  },
  {
    "headword": "pendulum",
    "pos": "noun",
    "cefr": "C1",
    "definition": "a weight hung from a fixed point swinging freely"
  },
  {
    "headword": "pendulous",
    "pos": "adjective",
    "cefr": "C1",
    "definition": "hanging down loosely and swinging freely; sagging"
  },
  {
    "headword": "suspension",
    "pos": "noun",
    "cefr": "C1",
    "definition": "the action of suspending someone or postponing an activity"
  },
  {
    "headword": "aboard",
    "pos": "preposition",
    "cefr": "C1",
    "definition": "on or into a ship, train, aircraft, or vehicle"
  },
  {
    "headword": "drill",
    "pos": "verb",
    "cefr": "C1",
    "definition": "to pierce with a tool, or instruct via intensive repetition"
  },
  {
    "headword": "drill",
    "pos": "noun",
    "cefr": "C1",
    "definition": "practice of what to do (e.g. in an emergency)"
  },
  {
    "headword": "anthropology",
    "pos": "noun",
    "cefr": "C1",
    "definition": "the scientific study of human biological and cultural history"
  },
  {
    "headword": "anthropologist",
    "pos": "noun",
    "cefr": "C1",
    "definition": "an expert in the scientific study of human societies"
  },
  {
    "headword": "squander",
    "pos": "verb",
    "cefr": "C1",
    "definition": "to waste something, especially money or time, in a foolish manner"
  },
  {
    "headword": "munch",
    "pos": "verb",
    "cefr": "C1",
    "definition": "to chew steadily, noisily, and with vigorous mastication"
  },
  {
    "headword": "adjoin",
    "pos": "verb",
    "cefr": "C1",
    "definition": "to be next to and joined with a space or building"
  },
  {
    "headword": "adjoining",
    "pos": "adjective",
    "cefr": "C1",
    "definition": "adjacent, touching, or sharing a common boundary"
  },
  {
    "headword": "wizened",
    "pos": "adjective",
    "cefr": "C1",
    "definition": "shriveled, wrinkled, and weathered with advancing age"
  },
  {
    "headword": "graft",
    "pos": "verb",
    "cefr": "C1",
    "definition": "hard work, insertion of tissue, or corruption in politics"
  },
  {
    "headword": "orchard",
    "pos": "noun",
    "cefr": "C1",
    "definition": "a piece of land planted with fruit trees"
  },
  {
    "headword": "seedling",
    "pos": "noun",
    "cefr": "C1",
    "definition": "a young plant grown from a seed rather than from a cutting"
  },
  {
    "headword": "tract",
    "pos": "noun",
    "cefr": "C1",
    "definition": "an area of land, or a major system of related bodily organs"
  },
  {
    "headword": "folktale",
    "pos": "noun",
    "cefr": "C1",
    "definition": "a traditional story passed on orally among people"
  },
  {
    "headword": "sprout",
    "pos": "verb",
    "cefr": "C1",
    "definition": "to put out shoots, or grow rapidly in large numbers"
  },
  {
    "headword": "sprout",
    "pos": "noun",
    "cefr": "C1",
    "definition": "to put out shoots, or grow rapidly in large numbers"
  },
  {
    "headword": "hypocrisy",
    "pos": "noun",
    "cefr": "C1",
    "definition": "the practice of claiming to possess moral standards one lacks"
  },
  {
    "headword": "hypocrite",
    "pos": "noun",
    "cefr": "C1",
    "definition": "a person who claims virtues or beliefs they do not practice"
  },
  {
    "headword": "hypocritical",
    "pos": "adjective",
    "cefr": "C1",
    "definition": "behaving in a way that contradicts one's stated moral tenets"
  },
  {
    "headword": "hypocritically",
    "pos": "adverb",
    "cefr": "C1",
    "definition": "in a manner that professes moral virtue while practicing deceit"
  },
  {
    "headword": "midwife",
    "pos": "noun",
    "cefr": "C1",
    "definition": "a health practitioner qualified to assist women in childbirth"
  },
  {
    "headword": "harvest",
    "pos": "verb",
    "cefr": "C1",
    "definition": "the gathering of crops, or acquisition of valuable returns"
  },
  {
    "headword": "commercially",
    "pos": "adverb",
    "cefr": "C1",
    "definition": "in a manner regarding business profit or marketplace sales"
  },
  {
    "headword": "uniformity",
    "pos": "noun",
    "cefr": "C1",
    "definition": "the state of remaining identical, invariable, and homogeneous"
  },
  {
    "headword": "numb",
    "pos": "adjective",
    "cefr": "C1",
    "definition": "deprived of the power of physical sensation or feeling"
  },
  {
    "headword": "numb",
    "pos": "verb",
    "cefr": "C1",
    "definition": "deprived of the power of physical sensation or feeling"
  },
  {
    "headword": "tastebud",
    "pos": "noun",
    "cefr": "C1",
    "definition": "a nerve ending on the tongue that detects gustatory flavors"
  },
  {
    "headword": "amateur",
    "pos": "noun",
    "cefr": "C1",
    "definition": "a person who engages in a pursuit without formal payment"
  },
  {
    "headword": "amateur",
    "pos": "adjective",
    "cefr": "C1",
    "definition": "a person who engages in a pursuit without formal payment"
  },
  {
    "headword": "retrace",
    "pos": "verb",
    "cefr": "C1",
    "definition": "to go back over the same route, steps, or history again"
  },
  {
    "headword": "chart",
    "pos": "verb",
    "cefr": "C1",
    "definition": "to map, record, or track the development or progress of"
  },
  {
    "headword": "insubordinate",
    "pos": "adjective",
    "cefr": "C1",
    "definition": "defiant of authority; disobedient to valid orders"
  },
  {
    "headword": "insubordination",
    "pos": "noun",
    "cefr": "C1",
    "definition": "defiance of authority and refusal to obey valid orders"
  },
  {
    "headword": "insubordinately",
    "pos": "adverb",
    "cefr": "C1",
    "definition": "in a defiant, rebellious, and disobedient manner"
  },
  {
    "headword": "subordinate",
    "pos": "noun",
    "cefr": "C1",
    "definition": "lower in rank or position; subservient to higher authority"
  },
  {
    "headword": "primitively",
    "pos": "adverb",
    "cefr": "C1",
    "definition": "in an unsophisticated, crude, or early prehistoric manner"
  },
  {
    "headword": "embark",
    "pos": "verb",
    "cefr": "C1",
    "definition": "to board a vessel, or commence a major new course of action"
  },
  {
    "headword": "expedite",
    "pos": "verb",
    "cefr": "C1",
    "definition": "to make an action or process happen more quickly"
  },
  {
    "headword": "contextual",
    "pos": "adjective",
    "cefr": "C1",
    "definition": "depending on or relating to surrounding circumstances"
  },
  {
    "headword": "contextually",
    "pos": "adverb",
    "cefr": "C1",
    "definition": "in a manner determined by surrounding circumstances or text"
  },
  {
    "headword": "whilst",
    "pos": "conjunction",
    "cefr": "C1",
    "definition": "during the period that; or in contrast to the fact that"
  },
  {
    "headword": "maneuver/manoeuvre",
    "pos": "verb",
    "cefr": "C1",
    "definition": "a movement or series of moves requiring skill and care"
  },
  {
    "headword": "maneuver/manoeuvre",
    "pos": "noun",
    "cefr": "C1",
    "definition": "a movement or series of moves requiring skill and care"
  },
  {
    "headword": "riveting",
    "pos": "adjective",
    "cefr": "C1",
    "definition": "completely engrossing, compelling, and fascinating to observe"
  },
  {
    "headword": "plunge",
    "pos": "verb",
    "cefr": "C1",
    "definition": "to jump, dive, or fall rapidly into water or a crisis"
  },
  {
    "headword": "plunge",
    "pos": "noun",
    "cefr": "C1",
    "definition": "to jump, dive, or fall rapidly into water or a crisis"
  },
  {
    "headword": "debut",
    "pos": "noun",
    "cefr": "C1",
    "definition": "a person's first formal appearance or performance in public"
  },
  {
    "headword": "debut",
    "pos": "verb",
    "cefr": "C1",
    "definition": "a person's first formal appearance or performance in public"
  },
  {
    "headword": "turmoil",
    "pos": "noun",
    "cefr": "C1",
    "definition": "a state of great disturbance, confusion, or uncertain commotion"
  },
  {
    "headword": "scathing",
    "pos": "adjective",
    "cefr": "C1",
    "definition": "witheringly harsh, severely critical, and scornful in tone"
  },
  {
    "headword": "unscathing",
    "pos": "adjective",
    "cefr": "C1",
    "definition": "failing to inflict significant damage, harmless, or unscathed"
  },
  {
    "headword": "convoluted",
    "pos": "adjective",
    "cefr": "C1",
    "definition": "extremely complex, intricate, and difficult to follow"
  },
  {
    "headword": "undaunted",
    "pos": "adjective",
    "cefr": "C1",
    "definition": "courageously resolute and undeterred by adversity or danger"
  },
  {
    "headword": "gutsy",
    "pos": "adjective",
    "cefr": "C1",
    "definition": "showing courage, bold determination, and fighting spirit"
  },
  {
    "headword": "deprivation",
    "pos": "noun",
    "cefr": "C1",
    "definition": "the damaging lack of basic necessities, comfort, or assets"
  },
  {
    "headword": "farce",
    "pos": "noun",
    "cefr": "C1",
    "definition": "an absurd event, or comic dramatic work using buffoonery"
  },
  {
    "headword": "portray",
    "pos": "verb",
    "cefr": "C1",
    "definition": "to depict or represent in a work of art or literature"
  },
  {
    "headword": "portrayal",
    "pos": "noun",
    "cefr": "C1",
    "definition": "a depiction of someone or something in a work of art"
  },
  {
    "headword": "elusive",
    "pos": "adjective",
    "cefr": "C1",
    "definition": "difficult to find, catch, grasp, or achieve; slippery"
  },
  {
    "headword": "elude",
    "pos": "verb",
    "cefr": "C1",
    "definition": "to escape from or avoid by cunning, or fail to be remembered"
  },
  {
    "headword": "incisor",
    "pos": "noun",
    "cefr": "C1",
    "definition": "a narrow-edged tooth at the front adapted for cutting"
  },
  {
    "headword": "incision",
    "pos": "noun",
    "cefr": "C1",
    "definition": "a surgical cut made in skin or flesh, or sharp slit"
  },
  {
    "headword": "chisel",
    "pos": "verb",
    "cefr": "C1",
    "definition": "to cut, sculpt, or carve stone or wood with a blade"
  },
  {
    "headword": "chiselled",
    "pos": "adjective",
    "cefr": "C1",
    "definition": "sharply and clearly defined, especially facial features"
  },
  {
    "headword": "gnaw",
    "pos": "verb",
    "cefr": "C1",
    "definition": "to bite or nibble persistently, or cause persistent anxiety"
  },
  {
    "headword": "elongate",
    "pos": "verb",
    "cefr": "C1",
    "definition": "to make something longer, or extend in duration or spatial length"
  },
  {
    "headword": "telltale",
    "pos": "adjective",
    "cefr": "C1",
    "definition": "revealing, indicating, or betraying what is not intended"
  },
  {
    "headword": "cavity",
    "pos": "noun",
    "cefr": "C1",
    "definition": "an unfilled hollow space within a solid mass or tooth"
  },
  {
    "headword": "rustle",
    "pos": "verb",
    "cefr": "C1",
    "definition": "to make a soft, muffled crackling sound; or steal cattle"
  },
  {
    "headword": "rustle",
    "pos": "noun",
    "cefr": "C1",
    "definition": "to make a soft, muffled crackling sound; or steal cattle"
  },
  {
    "headword": "glean",
    "pos": "verb",
    "cefr": "C1",
    "definition": "to collect information gradually from various diverse sources"
  },
  {
    "headword": "niche",
    "pos": "noun",
    "cefr": "C1",
    "definition": "a specialized segment of the market or comfortable position"
  },
  {
    "headword": "somersault",
    "pos": "noun",
    "cefr": "C1",
    "definition": "an acrobatic movement in which a person turns heels over head"
  },
  {
    "headword": "somersault",
    "pos": "verb",
    "cefr": "C1",
    "definition": "an acrobatic movement in which a person turns heels over head"
  },
  {
    "headword": "exhilarate",
    "pos": "verb",
    "cefr": "C1",
    "definition": "to make someone feel very happy, animated, and elated"
  },
  {
    "headword": "exhilarating",
    "pos": "adjective",
    "cefr": "C1",
    "definition": "making one feel very happy, animated, thrilled, or elated"
  },
  {
    "headword": "exhilaration",
    "pos": "noun",
    "cefr": "C1",
    "definition": "a feeling of great excitement, high animation, and happiness"
  },
  {
    "headword": "physicality",
    "pos": "noun",
    "cefr": "C1",
    "definition": "the quality or state of being physical or bodily robust"
  },
  {
    "headword": "hack",
    "pos": "verb",
    "cefr": "C1",
    "definition": "to cut roughly, gain unauthorized computer access, or endure"
  },
  {
    "headword": "hack",
    "pos": "noun",
    "cefr": "C1",
    "definition": "to cut roughly, gain unauthorized computer access, or endure"
  },
  {
    "headword": "lust",
    "pos": "noun",
    "cefr": "C1",
    "definition": "very strong sexual desire, or overwhelming passion for power"
  },
  {
    "headword": "unsettling",
    "pos": "adjective",
    "cefr": "C1",
    "definition": "disturbing and causing acute emotional or intellectual unease"
  },
  {
    "headword": "unsettle",
    "pos": "verb",
    "cefr": "C1",
    "definition": "to disturb the composure, stability, or certainty of"
  },
  {
    "headword": "suburban",
    "pos": "adjective",
    "cefr": "C1",
    "definition": "relating to or characteristic of a residential suburb; conventional"
  },
  {
    "headword": "suburbia",
    "pos": "noun",
    "cefr": "C1",
    "definition": "the suburbs or their inhabitants regarded collectively"
  },
  {
    "headword": "dramatist",
    "pos": "noun",
    "cefr": "C1",
    "definition": "a person who writes plays; an accomplished playwright"
  },
  {
    "headword": "characterization/characterisation",
    "pos": "noun",
    "cefr": "C1",
    "definition": "the description, portrayal, or analysis of distinctive qualities"
  },
  {
    "headword": "quirky",
    "pos": "adjective",
    "cefr": "C1",
    "definition": "characterized by peculiar or unexpected traits; idiosyncratic"
  },
  {
    "headword": "quirky",
    "pos": "noun",
    "cefr": "C1",
    "definition": "characterized by peculiar or unexpected traits; idiosyncratic"
  },
  {
    "headword": "sprawl",
    "pos": "noun",
    "cefr": "C1",
    "definition": "to spread out over a large area in an untidy or irregular way"
  },
  {
    "headword": "sprawl",
    "pos": "verb",
    "cefr": "C1",
    "definition": "to spread out over a large area in an untidy or irregular way"
  },
  {
    "headword": "ingenuity",
    "pos": "noun",
    "cefr": "C1",
    "definition": "the quality of being clever, inventive, and resourceful"
  },
  {
    "headword": "panorama",
    "pos": "noun",
    "cefr": "C1",
    "definition": "an unbroken view of the whole region surrounding an observer"
  },
  {
    "headword": "panoramic",
    "pos": "adjective",
    "cefr": "C1",
    "definition": "with a wide, comprehensive, and unbroken view of a region"
  },
  {
    "headword": "benign",
    "pos": "adjective",
    "cefr": "C1",
    "definition": "gentle and kindly; not causing harm, damage, or disease"
  },
  {
    "headword": "benignly",
    "pos": "adverb",
    "cefr": "C1",
    "definition": "in a gentle, harmless, and benevolent manner"
  },
  {
    "headword": "explosively",
    "pos": "adverb",
    "cefr": "C1",
    "definition": "suddenly, violently, dramatically, or in a bursting manner"
  },
  {
    "headword": "bequeath",
    "pos": "verb",
    "cefr": "C1",
    "definition": "to leave or pass on to a beneficiary or posterity"
  },
  {
    "headword": "legacy",
    "pos": "noun",
    "cefr": "C1",
    "definition": "an amount of money or historical impact left by predecessors"
  },
  {
    "headword": "synthetic",
    "pos": "adjective",
    "cefr": "C1",
    "definition": "made by chemical synthesis, especially to imitate natural product"
  },
  {
    "headword": "synthetically",
    "pos": "adverb",
    "cefr": "C1",
    "definition": "by artificial or chemical means rather than natural growth"
  },
  {
    "headword": "lackluster/lacklustre",
    "pos": "adjective",
    "cefr": "C1",
    "definition": "lacking in vitality, brilliance, or enthusiasm; mediocre"
  },
  {
    "headword": "elastic",
    "pos": "noun",
    "cefr": "C1",
    "definition": "able to resume normal shape after contraction; adaptable"
  },
  {
    "headword": "elastic",
    "pos": "adjective",
    "cefr": "C1",
    "definition": "able to resume normal shape after contraction; adaptable"
  },
  {
    "headword": "appall/appal",
    "pos": "verb",
    "cefr": "C1",
    "definition": "to greatly dismay, shock, or horrify someone"
  },
  {
    "headword": "appalling",
    "pos": "adjective",
    "cefr": "C1",
    "definition": "causing shock, dismay, or acute disgust; terrible"
  },
  {
    "headword": "appallingly",
    "pos": "adverb",
    "cefr": "C1",
    "definition": "to a shocking, dreadful, or horrifying degree"
  },
  {
    "headword": "pounce",
    "pos": "verb",
    "cefr": "C1",
    "definition": "to spring or swoop suddenly so as to catch prey"
  },
  {
    "headword": "abound",
    "pos": "verb",
    "cefr": "C1",
    "definition": "to exist in large numbers or great quantities"
  },
  {
    "headword": "sap",
    "pos": "noun",
    "cefr": "C1",
    "definition": "the fluid circulating in plants, or to gradually deplete energy"
  },
  {
    "headword": "monotonous",
    "pos": "adjective",
    "cefr": "C1",
    "definition": "dull, tedious, and repetitious; lacking in variety and tone"
  },
  {
    "headword": "monotonously",
    "pos": "adverb",
    "cefr": "C1",
    "definition": "in a tedious, unvarying, and repetitive single tone"
  },
  {
    "headword": "monotony",
    "pos": "noun",
    "cefr": "C1",
    "definition": "lack of variety and interest; tedious repetition and routine"
  },
  {
    "headword": "turn to",
    "pos": "verb",
    "cefr": "C1",
    "definition": "to apply to someone for help, advice, or solace; consult"
  },
  {
    "headword": "ingenious",
    "pos": "adjective",
    "cefr": "C1",
    "definition": "clever, original, and inventive in mental conception"
  },
  {
    "headword": "plaque",
    "pos": "noun",
    "cefr": "C1",
    "definition": "an ornamental tablet fixed to a wall in commemoration"
  },
  {
    "headword": "neutralize/neutralise",
    "pos": "verb",
    "cefr": "C1",
    "definition": "to render something harmless or ineffective by counteracting it"
  },
  {
    "headword": "neutralization/neutralisation",
    "pos": "noun",
    "cefr": "C1",
    "definition": "the act of counteracting or making something harmless"
  },
  {
    "headword": "salivate",
    "pos": "verb",
    "cefr": "C1",
    "definition": "to produce saliva in the mouth, often in anticipation"
  },
  {
    "headword": "cessation",
    "pos": "noun",
    "cefr": "C1",
    "definition": "the fact or process of ending or being brought to a cessation"
  },
  {
    "headword": "remorse",
    "pos": "noun",
    "cefr": "C1",
    "definition": "deep regret or guilt for a wrong committed; contrition"
  },
  {
    "headword": "remorseless",
    "pos": "adjective",
    "cefr": "C1",
    "definition": "never abating in severity, or devoid of moral compassion"
  },
  {
    "headword": "remorsefully",
    "pos": "adverb",
    "cefr": "C1",
    "definition": "with deep guilt, sorrowful contrition, and genuine regret"
  },
  {
    "headword": "remorselessly",
    "pos": "adverb",
    "cefr": "C1",
    "definition": "in an unyielding, relentless, and mercilessly harsh manner"
  },
  {
    "headword": "inexcusable",
    "pos": "adjective",
    "cefr": "C1",
    "definition": "too bad to be justified, defended, or tolerated"
  },
  {
    "headword": "inexcusably",
    "pos": "adverb",
    "cefr": "C1",
    "definition": "in a manner that cannot be justified, forgiven, or excused"
  },
  {
    "headword": "inexhaustible",
    "pos": "adjective",
    "cefr": "C1",
    "definition": "impossible to finish, drain, or consume completely; tireless"
  },
  {
    "headword": "unassisted",
    "pos": "adjective",
    "cefr": "C1",
    "definition": "accomplished independently without external aid or collaboration"
  },
  {
    "headword": "heighten",
    "pos": "verb",
    "cefr": "C1",
    "definition": "to make or become more intense, acute, elevated, or sharper"
  },
  {
    "headword": "fixture",
    "pos": "noun",
    "cefr": "C1",
    "definition": "a piece of equipment fixed in place, or regular recurring event"
  },
  {
    "headword": "bulk",
    "pos": "noun",
    "cefr": "C1",
    "definition": "the greater part, magnitude, or large volume of something"
  },
  {
    "headword": "bulky",
    "pos": "adjective",
    "cefr": "C1",
    "definition": "taking up much space, typically inconvenient; unwieldy"
  },
  {
    "headword": "bulk up",
    "pos": "verb",
    "cefr": "C1",
    "definition": "to increase substantially in physical size, weight, or muscle"
  },
  {
    "headword": "digitalize/digitalise",
    "pos": "verb",
    "cefr": "C1",
    "definition": "to convert information into digital computer format"
  },
  {
    "headword": "digitalization/digitalisation",
    "pos": "noun",
    "cefr": "C1",
    "definition": "the conversion of processes, documents, or systems to digital form"
  },
  {
    "headword": "mark-up",
    "pos": "noun",
    "cefr": "C1",
    "definition": "an amount added to the cost price to determine selling price"
  },
  {
    "headword": "complementary",
    "pos": "adjective",
    "cefr": "C1",
    "definition": "combining in such a way as to enhance or emphasize qualities"
  },
  {
    "headword": "complimentary",
    "pos": "adjective",
    "cefr": "C1",
    "definition": "expressing praise, or provided free of charge as courtesy"
  },
  {
    "headword": "staple",
    "pos": "noun",
    "cefr": "C1",
    "definition": "a main or important element of something; essential foodstuff"
  },
  {
    "headword": "wares",
    "pos": "noun",
    "cefr": "C1",
    "definition": "manufactured goods, merchandise, or commodities offered for sale"
  },
  {
    "headword": "testament",
    "pos": "noun",
    "cefr": "C1",
    "definition": "something that serves as tangible proof or tribute to a fact"
  },
  {
    "headword": "succulent",
    "pos": "noun",
    "cefr": "C1",
    "definition": "tender, juicy, and tasty; or a plant with fleshy leaves"
  },
  {
    "headword": "succulent",
    "pos": "adjective",
    "cefr": "C1",
    "definition": "tender, juicy, and tasty; or a plant with fleshy leaves"
  },
  {
    "headword": "succulently",
    "pos": "adverb",
    "cefr": "C1",
    "definition": "in a juicy, rich, and mouthwateringly tender manner"
  },
  {
    "headword": "tranquil",
    "pos": "adjective",
    "cefr": "C1",
    "definition": "free from disturbance; calm, peaceful, serene, and quiet"
  },
  {
    "headword": "tranquility",
    "pos": "noun",
    "cefr": "C1",
    "definition": "the quality or state of being tranquil; calm and peace"
  },
  {
    "headword": "spartan",
    "pos": "adjective",
    "cefr": "C1",
    "definition": "showing indifference to comfort or luxury; austere and frugal"
  },
  {
    "headword": "peninsula",
    "pos": "noun",
    "cefr": "C1",
    "definition": "a piece of land almost surrounded by water or projecting out"
  },
  {
    "headword": "billiards",
    "pos": "noun",
    "cefr": "C1",
    "definition": "a tabletop game played with cues and balls on cloth"
  },
  {
    "headword": "exude",
    "pos": "verb",
    "cefr": "C2",
    "definition": "to discharge or radiate an emotion, quality, or liquid slowly"
  },
  {
    "headword": "envisage",
    "pos": "verb",
    "cefr": "C2",
    "definition": "to contemplate or conceive of as a future possibility"
  },
  {
    "headword": "headmistress",
    "pos": "noun",
    "cefr": "C2",
    "definition": "a female principal or headteacher of a private school"
  },
  {
    "headword": "mien",
    "pos": "noun",
    "cefr": "C2",
    "definition": "a person's look, facial bearing, or manner indicating character"
  },
  {
    "headword": "timidity",
    "pos": "noun",
    "cefr": "C2",
    "definition": "lack of courage, confidence, or bravery; shy hesitation"
  },
  {
    "headword": "unravel",
    "pos": "verb",
    "cefr": "C2",
    "definition": "to untangle fibers, disintegrate, or solve an enigma"
  },
  {
    "headword": "concurrence",
    "pos": "noun",
    "cefr": "C2",
    "definition": "agreement, concurrence in opinion, or simultaneous occurrence"
  },
  {
    "headword": "unpromising",
    "pos": "adjective",
    "cefr": "C2",
    "definition": "offering scant indication of imminent success or merit"
  },
  {
    "headword": "teem",
    "pos": "verb",
    "cefr": "C2",
    "definition": "to be full of or swarming with living beings or rain"
  },
  {
    "headword": "marvel",
    "pos": "noun",
    "cefr": "C2",
    "definition": "to be filled with wonder, astonishment, or admiration"
  },
  {
    "headword": "outpatient",
    "pos": "noun",
    "cefr": "C2",
    "definition": "a patient receiving medical care without overnight admission"
  },
  {
    "headword": "corpse",
    "pos": "noun",
    "cefr": "C2",
    "definition": "a dead body, especially of a deceased human being"
  },
  {
    "headword": "apprentice",
    "pos": "verb",
    "cefr": "C2",
    "definition": "a person learning a trade from a skilled employer"
  },
  {
    "headword": "constrained",
    "pos": "adjective",
    "cefr": "C2",
    "definition": "severely restricted, stiff, unnatural, or forced"
  },
  {
    "headword": "quirk",
    "pos": "verb",
    "cefr": "C2",
    "definition": "a peculiar behavioral habit, strange aspect, or twist"
  },
  {
    "headword": "indignant",
    "pos": "adjective",
    "cefr": "C2",
    "definition": "feeling or showing anger at unfair treatment or insult"
  },
  {
    "headword": "indignantly",
    "pos": "adverb",
    "cefr": "C2",
    "definition": "in an angry, resentful manner triggered by injustice"
  },
  {
    "headword": "eccentricity",
    "pos": "noun",
    "cefr": "C2",
    "definition": "an odd, peculiar, or unconventional behavioral habit"
  },
  {
    "headword": "locomotive",
    "pos": "noun",
    "cefr": "C2",
    "definition": "a powered rail vehicle used for pulling trains"
  },
  {
    "headword": "locomotion",
    "pos": "noun",
    "cefr": "C2",
    "definition": "movement or the ability to move from one place to another"
  },
  {
    "headword": "individualism",
    "pos": "noun",
    "cefr": "C2",
    "definition": "habit of being independent and self-reliant; libertarian ethos"
  },
  {
    "headword": "enthuse",
    "pos": "verb",
    "cefr": "C2",
    "definition": "to express or inspire intense enthusiasm, vigor, or interest"
  },
  {
    "headword": "belligerent",
    "pos": "adjective",
    "cefr": "C2",
    "definition": "hostile, aggressive, and eager to initiate conflict"
  },
  {
    "headword": "belligerence",
    "pos": "noun",
    "cefr": "C2",
    "definition": "aggressive, hostile, or warlike behavior and disposition"
  },
  {
    "headword": "stoicism",
    "pos": "noun",
    "cefr": "C2",
    "definition": "the endurance of pain or hardship without display of feelings"
  },
  {
    "headword": "deliberate",
    "pos": "verb",
    "cefr": "C2",
    "definition": "done consciously and intentionally; carefully unhurried"
  },
  {
    "headword": "recluse",
    "pos": "noun",
    "cefr": "C2",
    "definition": "a person who lives a solitary life and avoids people"
  },
  {
    "headword": "reclusive",
    "pos": "adjective",
    "cefr": "C2",
    "definition": "avoiding the company of other people; solitary and secluded"
  },
  {
    "headword": "metalled",
    "pos": "adjective",
    "cefr": "C2",
    "definition": "paved or surfaced with crushed gravel or road metal"
  },
  {
    "headword": "brief",
    "pos": "noun",
    "cefr": "C2",
    "definition": "legal term"
  },
  {
    "headword": "oblique",
    "pos": "adjective",
    "cefr": "C2",
    "definition": "neither parallel nor at a right angle; indirect or slanting"
  },
  {
    "headword": "facsimile",
    "pos": "noun",
    "cefr": "C2",
    "definition": "an exact copy, replica, or reproduction of a document"
  },
  {
    "headword": "shamble",
    "pos": "verb",
    "cefr": "C2",
    "definition": "to walk with a slow, shuffling, awkward, or unsteady gait"
  },
  {
    "headword": "whir",
    "pos": "verb",
    "cefr": "C2",
    "definition": "to emit a continuous, subdued buzzing or rotary sound"
  },
  {
    "headword": "blight",
    "pos": "noun",
    "cefr": "C2",
    "definition": "a thing that spoils, damages, or severely impairs something"
  },
  {
    "headword": "blight",
    "pos": "verb",
    "cefr": "C2",
    "definition": "a thing that spoils, damages, or severely impairs something"
  },
  {
    "headword": "puritanical",
    "pos": "adjective",
    "cefr": "C2",
    "definition": "practicing or affecting strict religious or moral behavior"
  },
  {
    "headword": "brood",
    "pos": "verb",
    "cefr": "C2",
    "definition": "to think deeply about something that makes one unhappy"
  },
  {
    "headword": "brood",
    "pos": "noun",
    "cefr": "C2",
    "definition": "to think deeply about something that makes one unhappy"
  },
  {
    "headword": "disdainful",
    "pos": "adjective",
    "cefr": "C2",
    "definition": "showing contempt, arrogance, or lack of respect"
  },
  {
    "headword": "zoologist",
    "pos": "noun",
    "cefr": "C2",
    "definition": "a scientist who investigates animal biology and behavior"
  },
  {
    "headword": "zoology",
    "pos": "noun",
    "cefr": "C2",
    "definition": "the scientific branch dedicated to the study of fauna"
  },
  {
    "headword": "encumbrance",
    "pos": "noun",
    "cefr": "C2",
    "definition": "an impediment, heavy burden, or legal liability upon property"
  },
  {
    "headword": "encumber",
    "pos": "verb",
    "cefr": "C2",
    "definition": "to restrict or burden someone or something with impediment"
  },
  {
    "headword": "hypothesis",
    "pos": "noun",
    "cefr": "C2",
    "definition": "a proposed explanation made on the basis of limited evidence"
  },
  {
    "headword": "hypothesize",
    "pos": "verb",
    "cefr": "C2",
    "definition": "to put forward a hypothesis or theoretical supposition"
  },
  {
    "headword": "hypothetical",
    "pos": "adjective",
    "cefr": "C2",
    "definition": "based on a possible situation rather than actual reality"
  },
  {
    "headword": "parasitic",
    "pos": "adjective",
    "cefr": "C2",
    "definition": "living as a parasite on or in another organism or host"
  },
  {
    "headword": "plumage",
    "pos": "noun",
    "cefr": "C2",
    "definition": "a bird's feathers collectively considered for appearance"
  },
  {
    "headword": "utilitarian",
    "pos": "adjective",
    "cefr": "C2",
    "definition": "designed strictly for pragmatic utility rather than ornamentation"
  },
  {
    "headword": "utilize",
    "pos": "verb",
    "cefr": "C2",
    "definition": "to deploy, harness, or convert into practical application"
  },
  {
    "headword": "utility",
    "pos": "noun",
    "cefr": "C2",
    "definition": "the state of being functionally useful, beneficial, or pragmatic"
  },
  {
    "headword": "predilection",
    "pos": "noun",
    "cefr": "C2",
    "definition": "a preference or special liking for something; a bias"
  },
  {
    "headword": "commensurate",
    "pos": "adjective",
    "cefr": "C2",
    "definition": "corresponding in size, extent, amount, or degree; proportionate"
  },
  {
    "headword": "commensurately",
    "pos": "adverb",
    "cefr": "C2",
    "definition": "in a proportionate, corresponding, or matching manner"
  },
  {
    "headword": "vindicate",
    "pos": "verb",
    "cefr": "C2",
    "definition": "to clear from blame, exonerate, or substantiate validity"
  },
  {
    "headword": "vindication",
    "pos": "noun",
    "cefr": "C2",
    "definition": "exoneration, justification, or proof of correctness against doubt"
  },
  {
    "headword": "parable",
    "pos": "noun",
    "cefr": "C2",
    "definition": "a simple story used to illustrate a moral or spiritual lesson"
  },
  {
    "headword": "poise",
    "pos": "verb",
    "cefr": "C2",
    "definition": "graceful and elegant bearing in a person; composure"
  },
  {
    "headword": "minster",
    "pos": "verb",
    "cefr": "C2",
    "definition": "a large or important church, often originally monastic"
  },
  {
    "headword": "wrack",
    "pos": "verb",
    "cefr": "C2",
    "definition": "to inflict ruin, severe torment, or profound mental anguish upon"
  },
  {
    "headword": "ironic",
    "pos": "adjective",
    "cefr": "C2",
    "definition": "happening in the opposite way to what is expected"
  },
  {
    "headword": "predecessor",
    "pos": "noun",
    "cefr": "C2",
    "definition": "a person who held a job or office before the current holder"
  },
  {
    "headword": "ally",
    "pos": "verb",
    "cefr": "C2",
    "definition": "a state or person formally cooperating with another"
  },
  {
    "headword": "callous",
    "pos": "adjective",
    "cefr": "C2",
    "definition": "showing or having an insensitive and cruel disregard for others"
  },
  {
    "headword": "callously",
    "pos": "adverb",
    "cefr": "C2",
    "definition": "in an unfeeling, heartless, and ruthlessly indifferent manner"
  },
  {
    "headword": "derelict",
    "pos": "adjective",
    "cefr": "C2",
    "definition": "in a very poor condition as a result of disuse and neglect"
  },
  {
    "headword": "derelict",
    "pos": "noun",
    "cefr": "C2",
    "definition": "in a very poor condition as a result of disuse and neglect"
  },
  {
    "headword": "materialism",
    "pos": "noun",
    "cefr": "C2",
    "definition": "preoccupation with material possessions rather than virtues"
  },
  {
    "headword": "materialistic",
    "pos": "adjective",
    "cefr": "C2",
    "definition": "excessively concerned with wealth and material comforts"
  },
  {
    "headword": "ferocity",
    "pos": "noun",
    "cefr": "C2",
    "definition": "the state or quality of being ferociously fierce or cruel"
  },
  {
    "headword": "utter",
    "pos": "adjective",
    "cefr": "C2",
    "definition": "complete, absolute, unqualified, and total in degree"
  },
  {
    "headword": "utter",
    "pos": "verb",
    "cefr": "C2",
    "definition": "to vocalize, express audibly, or articulate in words"
  },
  {
    "headword": "evokingly",
    "pos": "adverb",
    "cefr": "C2",
    "definition": "in a manner that vividly summons emotional memories or images"
  },
  {
    "headword": "recitation",
    "pos": "noun",
    "cefr": "C2",
    "definition": "the action of repeating something aloud from memory"
  },
  {
    "headword": "equable",
    "pos": "adjective",
    "cefr": "C2",
    "definition": "not easily disturbed, calm, tranquil, or steady and uniform"
  },
  {
    "headword": "extant",
    "pos": "adjective",
    "cefr": "C2",
    "definition": "still in existence; surviving despite historical passage"
  },
  {
    "headword": "denounce",
    "pos": "verb",
    "cefr": "C2",
    "definition": "to publicly declare something to be wrong or reprehensible"
  },
  {
    "headword": "denunciation",
    "pos": "noun",
    "cefr": "C2",
    "definition": "a public condemnation of someone or something deemed wicked"
  },
  {
    "headword": "echo",
    "pos": "noun",
    "cefr": "C2",
    "definition": "to reverberate sound, or closely imitate and repeat opinions"
  },
  {
    "headword": "echo",
    "pos": "verb",
    "cefr": "C2",
    "definition": "sound"
  },
  {
    "headword": "echo",
    "pos": "verb",
    "cefr": "C2",
    "definition": "repeat"
  },
  {
    "headword": "requisition",
    "pos": "noun",
    "cefr": "C2",
    "definition": "an official order laying claim to the use of property"
  },
  {
    "headword": "substantiate",
    "pos": "verb",
    "cefr": "C2",
    "definition": "to provide evidence to support or prove the truth of an assertion"
  },
  {
    "headword": "inscrutable",
    "pos": "adjective",
    "cefr": "C2",
    "definition": "impossible to understand, decipher, or interpret; enigmatic"
  },
  {
    "headword": "stratosphere",
    "pos": "noun",
    "cefr": "C2",
    "definition": "the layer of earth's atmosphere above troposphere; high level"
  },
  {
    "headword": "indulge",
    "pos": "verb",
    "cefr": "C2",
    "definition": "to allow oneself to enjoy the pleasure of something"
  },
  {
    "headword": "indulgence",
    "pos": "noun",
    "cefr": "C2",
    "definition": "the action of indulging, pampering, or gratifying desires"
  },
  {
    "headword": "indulgently",
    "pos": "adverb",
    "cefr": "C2",
    "definition": "in an accommodating, lenient, and gratified manner"
  },
  {
    "headword": "laudatory",
    "pos": "adjective",
    "cefr": "C2",
    "definition": "expressing praise, high commendation, and hearty acclaim"
  },
  {
    "headword": "laud",
    "pos": "verb",
    "cefr": "C2",
    "definition": "to praise highly, extol, and acclaim in public"
  },
  {
    "headword": "glitz",
    "pos": "noun",
    "cefr": "C2",
    "definition": "extravagant showiness, flashy glamour, and vulgar spectacle"
  },
  {
    "headword": "glitzy",
    "pos": "adjective",
    "cefr": "C2",
    "definition": "flashy, showy, and dazzling in an ostentatious manner"
  },
  {
    "headword": "automate",
    "pos": "verb",
    "cefr": "C2",
    "definition": "to convert a process to largely automatic operation"
  },
  {
    "headword": "apprehend",
    "pos": "verb",
    "cefr": "C2",
    "definition": "to arrest someone for a crime, or grasp cognitively"
  },
  {
    "headword": "athleticism",
    "pos": "noun",
    "cefr": "C2",
    "definition": "the physical qualities and prowess characteristic of athletes"
  },
  {
    "headword": "daunt",
    "pos": "verb",
    "cefr": "C2",
    "definition": "to intimidate, subdue the courage of, or dismay someone"
  },
  {
    "headword": "daunting",
    "pos": "adjective",
    "cefr": "C2",
    "definition": "seeming difficult to deal with in anticipation; intimidating"
  },
  {
    "headword": "acreage",
    "pos": "noun",
    "cefr": "C2",
    "definition": "an extent or total area of land measured in acres"
  },
  {
    "headword": "affectation",
    "pos": "noun",
    "cefr": "C2",
    "definition": "behavior or speech that is pretentious and artificial"
  },
  {
    "headword": "imposition",
    "pos": "noun",
    "cefr": "C2",
    "definition": "an unfair or unwelcome demand, burden, or regulation"
  },
  {
    "headword": "circuit",
    "pos": "noun",
    "cefr": "C2",
    "definition": "series of games/matches"
  },
  {
    "headword": "stipulate",
    "pos": "verb",
    "cefr": "C2",
    "definition": "to demand or specify a requirement as part of a formal bargain"
  },
  {
    "headword": "stipulation",
    "pos": "noun",
    "cefr": "C2",
    "definition": "a condition, demand, or requirement specified in an agreement"
  },
  {
    "headword": "allot",
    "pos": "verb",
    "cefr": "C2",
    "definition": "to apportion or distribute as a designated share or task"
  },
  {
    "headword": "allotment",
    "pos": "noun",
    "cefr": "C2",
    "definition": "an assigned portion, quota, or dedicated piece of land"
  },
  {
    "headword": "anticlimactically",
    "pos": "adverb",
    "cefr": "C2",
    "definition": "in a manner that falls disappointingly short of expectations"
  },
  {
    "headword": "forfeiture",
    "pos": "noun",
    "cefr": "C2",
    "definition": "the loss or giving up of something as a penalty for wrongdoing"
  },
  {
    "headword": "blitz",
    "pos": "verb",
    "cefr": "C2",
    "definition": "a swift, intensive military or marketing campaign"
  },
  {
    "headword": "blitz",
    "pos": "noun",
    "cefr": "C2",
    "definition": "a swift, intensive military or marketing campaign"
  },
  {
    "headword": "primeval",
    "pos": "adjective",
    "cefr": "C2",
    "definition": "resembling the earliest ages in the history of the world"
  },
  {
    "headword": "tenacity",
    "pos": "noun",
    "cefr": "C2",
    "definition": "the quality or fact of being able to grip firmly; persistence"
  },
  {
    "headword": "tenacious",
    "pos": "adjective",
    "cefr": "C2",
    "definition": "tending to keep a firm hold of something; clinging; persistent"
  },
  {
    "headword": "tenaciously",
    "pos": "adverb",
    "cefr": "C2",
    "definition": "with firm determination, resolute grip, and stubborn perseverance"
  },
  {
    "headword": "exact",
    "pos": "verb",
    "cefr": "C2",
    "definition": "to demand and obtain forcefully, or strictly accurate"
  },
  {
    "headword": "genomic",
    "pos": "adjective",
    "cefr": "C2",
    "definition": "relating to the structure, mapping, and sequencing of genomes"
  },
  {
    "headword": "genomically",
    "pos": "adverb",
    "cefr": "C2",
    "definition": "with regard to genetics, DNA sequencing, or the genome"
  },
  {
    "headword": "capacious",
    "pos": "adjective",
    "cefr": "C2",
    "definition": "having a lot of space inside; roomy and voluminous"
  },
  {
    "headword": "utilitarian",
    "pos": "adjective",
    "cefr": "C2",
    "definition": "designed strictly for pragmatic utility rather than ornamentation"
  },
  {
    "headword": "utilization/utilisation",
    "pos": "noun",
    "cefr": "C2",
    "definition": "the effective harness or deployment of assets for a purpose"
  },
  {
    "headword": "unequivocal",
    "pos": "adjective",
    "cefr": "C2",
    "definition": "unambiguous, unmistakable, and leaving zero room for doubt"
  },
  {
    "headword": "unequivocally",
    "pos": "adverb",
    "cefr": "C2",
    "definition": "in an explicit, definitive, and categorical manner"
  },
  {
    "headword": "spontaneity",
    "pos": "noun",
    "cefr": "C2",
    "definition": "the condition of being spontaneous, impulsive, and unforced"
  },
  {
    "headword": "provocation",
    "pos": "noun",
    "cefr": "C2",
    "definition": "action or speech that makes someone annoyed or angry"
  },
  {
    "headword": "portraiture",
    "pos": "noun",
    "cefr": "C2",
    "definition": "the graphic art or practice of creating portrait depictions"
  },
  {
    "headword": "tedium",
    "pos": "noun",
    "cefr": "C2",
    "definition": "the state of being tedious, monotonous, and wearisome; boredom"
  },
  {
    "headword": "succeed",
    "pos": "verb",
    "cefr": "C2",
    "definition": "come after somebody/something"
  },
  {
    "headword": "circumnavigate",
    "pos": "verb",
    "cefr": "C2",
    "definition": "to sail or travel completely around the world or an obstacle"
  },
  {
    "headword": "circumnavigation",
    "pos": "noun",
    "cefr": "C2",
    "definition": "the act of sailing or travelling completely around an entity"
  },
  {
    "headword": "liaise",
    "pos": "verb",
    "cefr": "C2",
    "definition": "to establish cooperation and act as a link between groups"
  },
  {
    "headword": "contractual",
    "pos": "adjective",
    "cefr": "C2",
    "definition": "agreed in a binding contract or legally enforceable pact"
  },
  {
    "headword": "contractually",
    "pos": "adverb",
    "cefr": "C2",
    "definition": "by virtue of, or according to, a legally binding contract"
  },
  {
    "headword": "repute",
    "pos": "noun",
    "cefr": "C2",
    "definition": "the opinion generally held of someone or something; status"
  },
  {
    "headword": "abject",
    "pos": "adjective",
    "cefr": "C2",
    "definition": "experienced to the maximum degree, wretched, or utterly hopeless"
  },
  {
    "headword": "sheaf",
    "pos": "noun",
    "cefr": "C2",
    "definition": "a bundle of grain stalks tied together, or ream of papers"
  },
  {
    "headword": "articulation",
    "pos": "noun",
    "cefr": "C2",
    "definition": "the clear and distinct expression of an idea in speech"
  },
  {
    "headword": "articulate",
    "pos": "adjective",
    "cefr": "C2",
    "definition": "able to express ideas clearly, coherently, and fluently"
  },
  {
    "headword": "spurious",
    "pos": "adjective",
    "cefr": "C2",
    "definition": "not being what it purports to be; false or fake"
  },
  {
    "headword": "spuriously",
    "pos": "adverb",
    "cefr": "C2",
    "definition": "in a deceitful, illegitimate, or falsely fabricated manner"
  },
  {
    "headword": "posture",
    "pos": "verb",
    "cefr": "C2",
    "definition": "the position in which someone holds their body; or stance"
  },
  {
    "headword": "calorific",
    "pos": "adjective",
    "cefr": "C2",
    "definition": "relating to heat or generating high dietary calorie value"
  },
  {
    "headword": "fabulate",
    "pos": "verb",
    "cefr": "C2",
    "definition": "to invent fantastical stories, legends, or moral fables"
  },
  {
    "headword": "fabulation",
    "pos": "noun",
    "cefr": "C2",
    "definition": "the act of inventing fantastical narratives, fables, or myths"
  },
  {
    "headword": "octogenarian",
    "pos": "noun",
    "cefr": "C2",
    "definition": "a person who is between 80 and 89 years old"
  },
  {
    "headword": "voracity",
    "pos": "noun",
    "cefr": "C2",
    "definition": "insatiable greed, ravenous hunger, or overwhelming desire"
  },
  {
    "headword": "brandish",
    "pos": "verb",
    "cefr": "C2",
    "definition": "to wave or flourish a weapon or tool as a display or threat"
  },
  {
    "headword": "repose",
    "pos": "verb",
    "cefr": "C2",
    "definition": "a state of rest, sleep, or tranquil composure; stillness"
  },
  {
    "headword": "repose",
    "pos": "noun",
    "cefr": "C2",
    "definition": "a state of rest, sleep, or tranquil composure; stillness"
  },
  {
    "headword": "encumber",
    "pos": "verb",
    "cefr": "C2",
    "definition": "to restrict or burden someone or something with impediment"
  },
  {
    "headword": "encumbrance",
    "pos": "noun",
    "cefr": "C2",
    "definition": "an impediment, heavy burden, or legal liability upon property"
  },
  {
    "headword": "unencumbered",
    "pos": "adjective",
    "cefr": "C2",
    "definition": "liberated from burdensome liabilities, debts, or obstacles"
  },
  {
    "headword": "buffoonery",
    "pos": "noun",
    "cefr": "C2",
    "definition": "behavior that is ridiculous, clownish, but amusing"
  },
  {
    "headword": "gauche",
    "pos": "adjective",
    "cefr": "C2",
    "definition": "lacking social ease, grace, or tact; awkward and clumsy"
  },
  {
    "headword": "domesticity",
    "pos": "noun",
    "cefr": "C2",
    "definition": "home or family life and its typical comforts and routines"
  },
  {
    "headword": "accrue",
    "pos": "verb",
    "cefr": "C2",
    "definition": "to accumulate or receive benefits over time"
  },
  {
    "headword": "proliferation",
    "pos": "noun",
    "cefr": "C2",
    "definition": "rapid increase in numbers or amount of something"
  },
  {
    "headword": "blandishment",
    "pos": "noun",
    "cefr": "C2",
    "definition": "flattering or pleasing statements used to gently coax"
  },
  {
    "headword": "pluck",
    "pos": "noun",
    "cefr": "C2",
    "definition": "courageous readiness to fight or persevere against odds; pull"
  },
  {
    "headword": "anthropological",
    "pos": "adjective",
    "cefr": "C2",
    "definition": "relating to the study of human societies and cultures"
  },
  {
    "headword": "anthropologically",
    "pos": "adverb",
    "cefr": "C2",
    "definition": "from the perspective of anthropology or human cultural study"
  },
  {
    "headword": "carbonize/carbonise",
    "pos": "verb",
    "cefr": "C2",
    "definition": "to convert an organic substance into carbon or charcoal"
  },
  {
    "headword": "monastic",
    "pos": "adjective",
    "cefr": "C2",
    "definition": "relating to monks, nuns, or monasteries; secluded and austere"
  },
  {
    "headword": "graft",
    "pos": "noun",
    "cefr": "C2",
    "definition": "e.g. bribery"
  },
  {
    "headword": "midwifery",
    "pos": "noun",
    "cefr": "C2",
    "definition": "the profession or practice of assisting women in childbirth"
  },
  {
    "headword": "adornment",
    "pos": "noun",
    "cefr": "C2",
    "definition": "a decorative element, ornament, or embellishment"
  },
  {
    "headword": "adorn",
    "pos": "verb",
    "cefr": "C2",
    "definition": "to make more attractive or decorative; embellish"
  },
  {
    "headword": "idle",
    "pos": "verb",
    "cefr": "C2",
    "definition": "avoiding work; lazy, inactive, or without purpose"
  },
  {
    "headword": "conjecture",
    "pos": "verb",
    "cefr": "C2",
    "definition": "an opinion or conclusion formed on the basis of incomplete data"
  },
  {
    "headword": "conjecture",
    "pos": "noun",
    "cefr": "C2",
    "definition": "an opinion or conclusion formed on the basis of incomplete data"
  },
  {
    "headword": "malleable",
    "pos": "adjective",
    "cefr": "C2",
    "definition": "able to be hammered or pressed permanently out of shape"
  },
  {
    "headword": "malleability",
    "pos": "noun",
    "cefr": "C2",
    "definition": "the ability to be shaped, hammered, or adaptably molded"
  },
  {
    "headword": "ore",
    "pos": "noun",
    "cefr": "C2",
    "definition": "a naturally occurring mineral containing valuable metals"
  },
  {
    "headword": "gale",
    "pos": "noun",
    "cefr": "C2",
    "definition": "a very strong wind, or an outburst of emotional sound"
  },
  {
    "headword": "promenade",
    "pos": "noun",
    "cefr": "C2",
    "definition": "a paved public walkway, or leisurely walk taken for pleasure"
  },
  {
    "headword": "testimonial",
    "pos": "noun",
    "cefr": "C2",
    "definition": "a formal statement testifying to someone's character or qualities"
  },
  {
    "headword": "distill",
    "pos": "verb",
    "cefr": "C2",
    "definition": "to extract the essential meaning or purify by vaporizing"
  },
  {
    "headword": "distillation",
    "pos": "noun",
    "cefr": "C2",
    "definition": "the purification of liquid by vapor, or extraction of essence"
  },
  {
    "headword": "informant",
    "pos": "noun",
    "cefr": "C2",
    "definition": "a person who gives information to another, often police"
  },
  {
    "headword": "vis-a-vis",
    "pos": "preposition",
    "cefr": "C2",
    "definition": "in direct relation to, as compared with, or opposite to"
  },
  {
    "headword": "overlay",
    "pos": "verb",
    "cefr": "C2",
    "definition": "to cover the surface of with a decorative or functional layer"
  },
  {
    "headword": "nostalgia",
    "pos": "noun",
    "cefr": "C2",
    "definition": "a sentimental longing or wistful affection for the past"
  },
  {
    "headword": "nostalgic",
    "pos": "adjective",
    "cefr": "C2",
    "definition": "feeling, evoking, or characterized by longing for the past"
  },
  {
    "headword": "nostalgically",
    "pos": "adverb",
    "cefr": "C2",
    "definition": "with affectionate, sentimental longing for past memories"
  },
  {
    "headword": "grievance",
    "pos": "noun",
    "cefr": "C2",
    "definition": "a real or perceived cause for complaint, protest, or resentment"
  },
  {
    "headword": "deprivation",
    "pos": "noun",
    "cefr": "C2",
    "definition": "the damaging lack of basic necessities, comfort, or assets"
  },
  {
    "headword": "residue",
    "pos": "noun",
    "cefr": "C2",
    "definition": "a small amount of something that remains after main part gone"
  },
  {
    "headword": "residual",
    "pos": "adjective",
    "cefr": "C2",
    "definition": "remaining after the greater part or quantity has gone"
  },
  {
    "headword": "physiological",
    "pos": "adjective",
    "cefr": "C2",
    "definition": "relating to the branch of biology dealing with normal functions"
  },
  {
    "headword": "physiologically",
    "pos": "adverb",
    "cefr": "C2",
    "definition": "with regard to biological functions and organism systems"
  },
  {
    "headword": "familiarize/familiarise",
    "pos": "verb",
    "cefr": "C2",
    "definition": "to give someone knowledge or understanding of something"
  },
  {
    "headword": "methodology",
    "pos": "noun",
    "cefr": "C2",
    "definition": "a system of methods used in a particular area of study"
  },
  {
    "headword": "methodological",
    "pos": "adjective",
    "cefr": "C2",
    "definition": "relating to the system of methods used in a field of study"
  },
  {
    "headword": "methodologically",
    "pos": "adverb",
    "cefr": "C2",
    "definition": "in a manner conforming to systematic research methodology"
  },
  {
    "headword": "proportional",
    "pos": "adjective",
    "cefr": "C2",
    "definition": "corresponding in size, degree, or intensity; proportionate"
  },
  {
    "headword": "proportionally",
    "pos": "adverb",
    "cefr": "C2",
    "definition": "in a way that corresponds in degree, size, or ratio"
  },
  {
    "headword": "habitation",
    "pos": "noun",
    "cefr": "C2",
    "definition": "the state of living in a place, or a residential settlement"
  },
  {
    "headword": "inartistic",
    "pos": "adjective",
    "cefr": "C2",
    "definition": "lacking artistic taste, visual refinement, or elegance"
  },
  {
    "headword": "ornate",
    "pos": "adjective",
    "cefr": "C2",
    "definition": "made in an intricate shape or decorated with complex patterns"
  },
  {
    "headword": "modernism",
    "pos": "noun",
    "cefr": "C2",
    "definition": "a movement in the arts breaking with classical traditions"
  },
  {
    "headword": "presuppose",
    "pos": "verb",
    "cefr": "C2",
    "definition": "to require as a precondition in order to be true"
  },
  {
    "headword": "presupposition",
    "pos": "noun",
    "cefr": "C2",
    "definition": "a thing tacitly assumed beforehand at the start of argument"
  },
  {
    "headword": "centralized/centralised",
    "pos": "adjective",
    "cefr": "C2",
    "definition": "concentrated under single control or a single authority"
  },
  {
    "headword": "envisage",
    "pos": "verb",
    "cefr": "C2",
    "definition": "to contemplate or conceive of as a future possibility"
  },
  {
    "headword": "contextual",
    "pos": "adjective",
    "cefr": "C2",
    "definition": "depending on or relating to surrounding circumstances"
  },
  {
    "headword": "contextually",
    "pos": "adverb",
    "cefr": "C2",
    "definition": "in a manner determined by surrounding circumstances or text"
  },
  {
    "headword": "transmitter",
    "pos": "noun",
    "cefr": "C2",
    "definition": "a set of equipment used to generate and transmit radio signals"
  },
  {
    "headword": "regulatory",
    "pos": "adjective",
    "cefr": "C2",
    "definition": "serving or intended to regulate an industry or procedure"
  },
  {
    "headword": "archival",
    "pos": "adjective",
    "cefr": "C2",
    "definition": "pertaining to or contained in historical documents and records"
  },
  {
    "headword": "diffuse",
    "pos": "adjective",
    "cefr": "C2",
    "definition": "spread out over a large area; or verbose and unfocused"
  },
  {
    "headword": "diffuse",
    "pos": "verb",
    "cefr": "C2",
    "definition": "spread out over a large area; or verbose and unfocused"
  },
  {
    "headword": "egalitarian",
    "pos": "adjective",
    "cefr": "C2",
    "definition": "believing in or based on the principle that all people are equal"
  },
  {
    "headword": "egalitarian",
    "pos": "noun",
    "cefr": "C2",
    "definition": "believing in or based on the principle that all people are equal"
  },
  {
    "headword": "hindsight",
    "pos": "noun",
    "cefr": "C2",
    "definition": "understanding of a situation only after it has occurred"
  },
  {
    "headword": "materialize/materialise",
    "pos": "verb",
    "cefr": "C2",
    "definition": "to become actual fact, happen, or appear in bodily form"
  },
  {
    "headword": "materialization/materialisation",
    "pos": "noun",
    "cefr": "C2",
    "definition": "the process of becoming actual fact or visible form"
  },
  {
    "headword": "disperse",
    "pos": "verb",
    "cefr": "C2",
    "definition": "to distribute, scatter, or cause to vanish over a wide area"
  },
  {
    "headword": "dispersal",
    "pos": "noun",
    "cefr": "C2",
    "definition": "the action of distributing or spreading things over a wide area"
  },
  {
    "headword": "adverse",
    "pos": "adjective",
    "cefr": "C2",
    "definition": "preventing success or development; harmful and unfavorable"
  },
  {
    "headword": "adversely",
    "pos": "adverb",
    "cefr": "C2",
    "definition": "in a way that prevents success or causes harm; unfavorably"
  },
  {
    "headword": "stabilize/stabilise",
    "pos": "verb",
    "cefr": "C2",
    "definition": "to make or become unlikely to change, fail, or decline"
  },
  {
    "headword": "pervasive",
    "pos": "adjective",
    "cefr": "C2",
    "definition": "spreading widely throughout an area or group of people"
  },
  {
    "headword": "pervasiveness",
    "pos": "noun",
    "cefr": "C2",
    "definition": "the state of being widely diffused, pervasive, or prevalent"
  },
  {
    "headword": "secure",
    "pos": "verb",
    "cefr": "C2",
    "definition": "fixed or fastened so as not to give way, or to obtain"
  },
  {
    "headword": "autonomous",
    "pos": "adjective",
    "cefr": "C2",
    "definition": "acting independently or having the freedom for self-governance"
  },
  {
    "headword": "autonomously",
    "pos": "adverb",
    "cefr": "C2",
    "definition": "with independent authority and self-directed agency"
  },
  {
    "headword": "outmoded",
    "pos": "adjective",
    "cefr": "C2",
    "definition": "old-fashioned, obsolete, and no longer acceptable"
  },
  {
    "headword": "phase",
    "pos": "noun",
    "cefr": "C2",
    "definition": "a distinct period or stage in a process of change"
  },
  {
    "headword": "plum",
    "pos": "adjective",
    "cefr": "C2",
    "definition": "an oval fleshy fruit, or a prize and highly desirable asset"
  },
  {
    "headword": "notorious",
    "pos": "adjective",
    "cefr": "C2",
    "definition": "famous or well known, typically for some bad quality"
  },
  {
    "headword": "notoriously",
    "pos": "adverb",
    "cefr": "C2",
    "definition": "in a way that is famously or infamously well known"
  },
  {
    "headword": "notoriety",
    "pos": "noun",
    "cefr": "C2",
    "definition": "the state of being famous or well known for some bad quality"
  },
  {
    "headword": "menial",
    "pos": "adjective",
    "cefr": "C2",
    "definition": "not requiring much skill and lacking prestige; servile work"
  },
  {
    "headword": "insular",
    "pos": "adjective",
    "cefr": "C2",
    "definition": "ignorant of or uninterested in cultures outside one's own"
  },
  {
    "headword": "antidote",
    "pos": "noun",
    "cefr": "C2",
    "definition": "a remedy to counteract a poison, defect, or unpleasant feeling"
  },
  {
    "headword": "posture",
    "pos": "verb",
    "cefr": "C2",
    "definition": "the position in which someone holds their body; or stance"
  },
  {
    "headword": "postural",
    "pos": "adjective",
    "cefr": "C2",
    "definition": "relating to the posture or bearing of the human body"
  },
  {
    "headword": "posturing",
    "pos": "noun",
    "cefr": "C2",
    "definition": "behavior that is deceptive, artificial, and calculated for impression"
  },
  {
    "headword": "revelatory",
    "pos": "adjective",
    "cefr": "C2",
    "definition": "revealing something previously secret or unexpected"
  },
  {
    "headword": "prostrate",
    "pos": "verb",
    "cefr": "C2",
    "definition": "lying stretched out on the ground face downwards; overwhelmed"
  },
  {
    "headword": "prostrate",
    "pos": "adjective",
    "cefr": "C2",
    "definition": "lying stretched out on the ground face downwards; overwhelmed"
  },
  {
    "headword": "haphazard",
    "pos": "adjective",
    "cefr": "C2",
    "definition": "lacking any obvious principle of organization; random"
  },
  {
    "headword": "haphazardly",
    "pos": "adverb",
    "cefr": "C2",
    "definition": "in a random, disorganized, or chaotic and careless manner"
  },
  {
    "headword": "deficient",
    "pos": "adjective",
    "cefr": "C2",
    "definition": "not having enough of a specified quality or ingredient"
  },
  {
    "headword": "deficiently",
    "pos": "adverb",
    "cefr": "C2",
    "definition": "in an incomplete, insufficient, or inadequately equipped manner"
  },
  {
    "headword": "deficit",
    "pos": "noun",
    "cefr": "C2",
    "definition": "the amount by which an expenditure exceeds revenue acquired"
  },
  {
    "headword": "delicatessen",
    "pos": "noun",
    "cefr": "C2",
    "definition": "a store selling fine, exotic, or imported prepared foods"
  },
  {
    "headword": "muscle-bound",
    "pos": "adjective",
    "cefr": "C2",
    "definition": "having overly bulky muscles that impair bodily flexibility"
  },
  {
    "headword": "dive",
    "pos": "noun",
    "cefr": "C2",
    "definition": "run down bar/restaurant"
  },
  {
    "headword": "maneuver/manoeuvre",
    "pos": "noun",
    "cefr": "C2",
    "definition": "a movement or series of moves requiring skill and care"
  },
  {
    "headword": "maneuver/manoeuvre",
    "pos": "verb",
    "cefr": "C2",
    "definition": "a movement or series of moves requiring skill and care"
  },
  {
    "headword": "posit",
    "pos": "verb",
    "cefr": "C2",
    "definition": "to put forward as fact or as a basis for argument"
  },
  {
    "headword": "cocoon",
    "pos": "verb",
    "cefr": "C2",
    "definition": "a protective casing, or to envelop warmly and shield"
  },
  {
    "headword": "chrysalis",
    "pos": "noun",
    "cefr": "C2",
    "definition": "a transitional quiescent pupa state before emerging transformed"
  },
  {
    "headword": "ignominious",
    "pos": "adjective",
    "cefr": "C2",
    "definition": "deserving or causing public disgrace, humiliation, or shame"
  },
  {
    "headword": "ignominiously",
    "pos": "adverb",
    "cefr": "C2",
    "definition": "in a humiliating, disgraceful, or dishonorable manner"
  },
  {
    "headword": "euphoria",
    "pos": "noun",
    "cefr": "C2",
    "definition": "a state of intense happiness, confidence, and self-satisfaction"
  },
  {
    "headword": "euphoric",
    "pos": "adjective",
    "cefr": "C2",
    "definition": "characterized by or feeling intense, rapturous excitement"
  },
  {
    "headword": "euphorically",
    "pos": "adverb",
    "cefr": "C2",
    "definition": "with immense, soaring happiness and energetic delight"
  },
  {
    "headword": "relegate",
    "pos": "verb",
    "cefr": "C2",
    "definition": "to consign or dismiss to an inferior rank or position"
  },
  {
    "headword": "succumb",
    "pos": "verb",
    "cefr": "C2",
    "definition": "to fail to resist pressure, temptation, or an overwhelming negative force"
  },
  {
    "headword": "treacherous",
    "pos": "adjective",
    "cefr": "C2",
    "definition": "guilty of or involving betrayal or deception; perilous hazard"
  },
  {
    "headword": "treacherously",
    "pos": "adverb",
    "cefr": "C2",
    "definition": "in a deceptive, disloyal, or dangerously hazardous manner"
  },
  {
    "headword": "treachery",
    "pos": "noun",
    "cefr": "C2",
    "definition": "betrayal of trust; deceptive action or treasonous disloyalty"
  },
  {
    "headword": "maggot",
    "pos": "noun",
    "cefr": "C2",
    "definition": "a soft-bodied legless larva of a fly found in decaying matter"
  },
  {
    "headword": "palate",
    "pos": "noun",
    "cefr": "C2",
    "definition": "the roof of the mouth, or a person's appreciation of taste"
  },
  {
    "headword": "palatable",
    "pos": "adjective",
    "cefr": "C2",
    "definition": "pleasant to taste, or acceptable and satisfactory to mind"
  },
  {
    "headword": "hermit",
    "pos": "noun",
    "cefr": "C2",
    "definition": "a person living in solitude as a religious or ascetic discipline"
  },
  {
    "headword": "hermetic",
    "pos": "adjective",
    "cefr": "C2",
    "definition": "airtight, completely sealed, or insulated against outside influence"
  },
  {
    "headword": "irrelevancy",
    "pos": "noun",
    "cefr": "C2",
    "definition": "the state of having no bearing on the subject at hand"
  },
  {
    "headword": "mariner",
    "pos": "noun",
    "cefr": "C2",
    "definition": "a sailor or seafarer navigating oceanic waters"
  },
  {
    "headword": "rift",
    "pos": "noun",
    "cefr": "C2",
    "definition": "a crack, split, break in friendly relations, or fissure"
  },
  {
    "headword": "mere",
    "pos": "adjective",
    "cefr": "C2",
    "definition": "that is solely or no more or better than what is specified"
  },
  {
    "headword": "helm",
    "pos": "noun",
    "cefr": "C2",
    "definition": "a position of leadership and control, or tiller of a ship"
  },
  {
    "headword": "autopilot",
    "pos": "noun",
    "cefr": "C2",
    "definition": "a device or state of operating without conscious attention"
  },
  {
    "headword": "eminence",
    "pos": "noun",
    "cefr": "C2",
    "definition": "fame or recognized superiority within a particular sphere"
  },
  {
    "headword": "eminent",
    "pos": "adjective",
    "cefr": "C2",
    "definition": "famous and respected within a particular profession or field"
  },
  {
    "headword": "preeminent",
    "pos": "adjective",
    "cefr": "C2",
    "definition": "surpassing all others; very distinguished in some sphere"
  },
  {
    "headword": "mold/mould",
    "pos": "verb",
    "cefr": "C2",
    "definition": "to shape into a particular form, or fungal growth"
  },
  {
    "headword": "unsuspected",
    "pos": "adjective",
    "cefr": "C2",
    "definition": "not previously imagined, anticipated, or regarded with suspicion"
  },
  {
    "headword": "abolish",
    "pos": "verb",
    "cefr": "C2",
    "definition": "to formally put an end to a system, practice, or institution"
  },
  {
    "headword": "paralyze/paralyse",
    "pos": "verb",
    "cefr": "C2",
    "definition": "to cause a person or part of the body to become immobile"
  },
  {
    "headword": "paralysis",
    "pos": "noun",
    "cefr": "C2",
    "definition": "loss of the ability to move in part or most of the body"
  },
  {
    "headword": "paralyzingly/paralysingly",
    "pos": "adverb",
    "cefr": "C2",
    "definition": "to an extent that completely immobilizes or renders powerless"
  },
  {
    "headword": "glory in",
    "pos": "verb",
    "cefr": "C2",
    "definition": "to take immense, joyful pride and profound satisfaction in"
  },
  {
    "headword": "decentralize/decentralise",
    "pos": "verb",
    "cefr": "C2",
    "definition": "to distribute administrative powers away from a central hub"
  },
  {
    "headword": "preoccupation",
    "pos": "noun",
    "cefr": "C2",
    "definition": "the state or condition of being engrossed with something"
  },
  {
    "headword": "preoccupy",
    "pos": "verb",
    "cefr": "C2",
    "definition": "to dominate or engross the mind of someone to exclusion"
  },
  {
    "headword": "prolong",
    "pos": "verb",
    "cefr": "C2",
    "definition": "to extend the duration or spatial length of something"
  },
  {
    "headword": "audit",
    "pos": "verb",
    "cefr": "C2",
    "definition": "an official inspection of an individual's or firm's accounts"
  },
  {
    "headword": "audit",
    "pos": "noun",
    "cefr": "C2",
    "definition": "an official inspection of an individual's or firm's accounts"
  },
  {
    "headword": "drudgery",
    "pos": "noun",
    "cefr": "C2",
    "definition": "hard, menial, tedious, or monotonous exhausting work"
  },
  {
    "headword": "pressurize",
    "pos": "verb",
    "cefr": "C2",
    "definition": "to produce artificial atmospheric pressure, or coerce someone"
  },
  {
    "headword": "pressurization",
    "pos": "noun",
    "cefr": "C2",
    "definition": "the maintenance of artificial atmospheric pressure in a vessel"
  },
  {
    "headword": "intermediary",
    "pos": "noun",
    "cefr": "C2",
    "definition": "a person who acts as a mediator or liaison between parties"
  },
  {
    "headword": "hotelier",
    "pos": "noun",
    "cefr": "C2",
    "definition": "a person who owns or manages a residential hotel"
  },
  {
    "headword": "denote",
    "pos": "verb",
    "cefr": "C2",
    "definition": "to be a sign of, indicate, or designate specifically"
  },
  {
    "headword": "denotation",
    "pos": "noun",
    "cefr": "C2",
    "definition": "the primary literal meaning of a word, opposed to connotation"
  },
  {
    "headword": "profitability",
    "pos": "noun",
    "cefr": "C2",
    "definition": "the degree to which a business or activity yields profit"
  },
  {
    "headword": "jargon",
    "pos": "noun",
    "cefr": "C2",
    "definition": "special words or technical expressions used by a profession"
  },
  {
    "headword": "declination",
    "pos": "noun",
    "cefr": "C2",
    "definition": "the downward angular deviation or celestial tilt"
  },
  {
    "headword": "vocational",
    "pos": "adjective",
    "cefr": "C2",
    "definition": "directed toward training for a specific occupation or trade"
  },
  {
    "headword": "spatial",
    "pos": "adjective",
    "cefr": "C2",
    "definition": "relating to, occupying, or having the character of space"
  },
  {
    "headword": "spatially",
    "pos": "adverb",
    "cefr": "C2",
    "definition": "with regard to physical space, dimension, or positioning"
  },
  {
    "headword": "punctual",
    "pos": "adjective",
    "cefr": "C2",
    "definition": "happening or doing something at the agreed or proper time"
  },
  {
    "headword": "punctuality",
    "pos": "noun",
    "cefr": "C2",
    "definition": "the characteristic of being on time and never tardy"
  },
  {
    "headword": "integration",
    "pos": "noun",
    "cefr": "C2",
    "definition": "the action or process of combining into an integral whole"
  },
  {
    "headword": "curriculum",
    "pos": "noun",
    "cefr": "C2",
    "definition": "the subjects comprising an entire educational course of study"
  },
  {
    "headword": "extracurricular",
    "pos": "adjective",
    "cefr": "C2",
    "definition": "pursued in addition to the normal course of study"
  },
  {
    "headword": "extracurricular",
    "pos": "noun",
    "cefr": "C2",
    "definition": "pursued in addition to the normal course of study"
  },
  {
    "headword": "encompass",
    "pos": "verb",
    "cefr": "C2",
    "definition": "to surround, enclose, or include comprehensively within scope"
  },
  {
    "headword": "all-encompassing",
    "pos": "adjective",
    "cefr": "C2",
    "definition": "including or covering every single element or aspect"
  },
  {
    "headword": "accountability",
    "pos": "noun",
    "cefr": "C2",
    "definition": "the obligation to accept responsibility and account for actions"
  },
  {
    "headword": "frolic",
    "pos": "verb",
    "cefr": "C2",
    "definition": "to play and move about cheerfully, playfully, or exuberantly"
  },
  {
    "headword": "minefield",
    "pos": "noun",
    "cefr": "C2",
    "definition": "an area strewn with explosive mines, or hazardous situation"
  },
  {
    "headword": "side-step",
    "pos": "verb",
    "cefr": "C2",
    "definition": "to avoid having to deal with an unpleasant or complex issue"
  },
  {
    "headword": "abundant",
    "pos": "adjective",
    "cefr": "C2",
    "definition": "existing or available in large, generous quantities"
  },
  {
    "headword": "abundantly",
    "pos": "adverb",
    "cefr": "C2",
    "definition": "in large quantities; extremely or unequivocally"
  },
  {
    "headword": "abundance",
    "pos": "noun",
    "cefr": "C2",
    "definition": "a very large quantity or plentiful supply of something"
  },
  {
    "headword": "anarchic",
    "pos": "adjective",
    "cefr": "C2",
    "definition": "with no controlling rules or principles; lawless"
  },
  {
    "headword": "crystallize/crystallise",
    "pos": "verb",
    "cefr": "C2",
    "definition": "to solidify into crystalline structure, or make lucidly clear"
  },
  {
    "headword": "crystallization/crystallisation",
    "pos": "noun",
    "cefr": "C2",
    "definition": "the formation of mineral crystals, or emergence of clarity"
  },
  {
    "headword": "prescriptive",
    "pos": "adjective",
    "cefr": "C2",
    "definition": "enforcing rules, directives, or giving definitive instructions"
  },
  {
    "headword": "slab",
    "pos": "noun",
    "cefr": "C2",
    "definition": "a large, thick, flat piece of stone, concrete, or wood"
  },
  {
    "headword": "retrospect",
    "pos": "noun",
    "cefr": "C2",
    "definition": "a survey or review of a past course of events or period"
  },
  {
    "headword": "retrospective",
    "pos": "adjective",
    "cefr": "C2",
    "definition": "looking back on or dealing with past events; exhibition"
  },
  {
    "headword": "retrospection",
    "pos": "noun",
    "cefr": "C2",
    "definition": "the action of looking back on or reviewing the past"
  },
  {
    "headword": "wordage",
    "pos": "noun",
    "cefr": "C2",
    "definition": "verbal phrasing, lexical composition, or total word count"
  },
  {
    "headword": "brevity",
    "pos": "noun",
    "cefr": "C2",
    "definition": "concise and exact use of words in writing or speech"
  },
  {
    "headword": "uncanny",
    "pos": "adjective",
    "cefr": "C2",
    "definition": "mysteriously strange, eerie, or beyond regular comprehension"
  },
  {
    "headword": "tactic",
    "pos": "noun",
    "cefr": "C2",
    "definition": "an action or strategy carefully planned to achieve a specific end"
  },
  {
    "headword": "tactical",
    "pos": "adjective",
    "cefr": "C2",
    "definition": "showing adroit planning; aiming at an end beyond immediate gain"
  },
  {
    "headword": "tactically",
    "pos": "adverb",
    "cefr": "C2",
    "definition": "with tactical planning, foresight, and strategic calculation"
  },
  {
    "headword": "tactile",
    "pos": "adjective",
    "cefr": "C2",
    "definition": "connected with the sense of touch; tangible and perceptible"
  },
  {
    "headword": "gambit",
    "pos": "noun",
    "cefr": "C2",
    "definition": "an act, remark, or maneuver calculated to gain an advantage"
  },
  {
    "headword": "babble",
    "pos": "verb",
    "cefr": "C2",
    "definition": "to talk rapidly and continuously in a foolish, excited way"
  },
  {
    "headword": "bauble",
    "pos": "noun",
    "cefr": "C2",
    "definition": "a small, showy trinket or decoration of little real value"
  },
  {
    "headword": "correlate",
    "pos": "noun",
    "cefr": "C2",
    "definition": "to have a mutual relationship or connection of dependence"
  },
  {
    "headword": "correlation",
    "pos": "noun",
    "cefr": "C2",
    "definition": "a mutual, reciprocal relationship or interdependence"
  },
  {
    "headword": "correlate",
    "pos": "verb",
    "cefr": "C2",
    "definition": "to have a mutual relationship or connection of dependence"
  },
  {
    "headword": "combustion",
    "pos": "noun",
    "cefr": "C2",
    "definition": "the process of burning something through rapid oxidation"
  },
  {
    "headword": "painstaking",
    "pos": "adjective",
    "cefr": "C2",
    "definition": "done with or employing great care, rigor, and thoroughness"
  },
  {
    "headword": "painstakingly",
    "pos": "adverb",
    "cefr": "C2",
    "definition": "with extreme care, meticulous attention, and diligence"
  },
  {
    "headword": "contraption",
    "pos": "noun",
    "cefr": "C2",
    "definition": "a machine or device that appears strange or needlessly complex"
  },
  {
    "headword": "mesh",
    "pos": "verb",
    "cefr": "C2",
    "definition": "to entangle, interlock smoothly, or harmonize effectively"
  },
  {
    "headword": "enabler",
    "pos": "noun",
    "cefr": "C2",
    "definition": "a person or thing that makes something possible, often negatively"
  },
  {
    "headword": "fluctuate",
    "pos": "verb",
    "cefr": "C2",
    "definition": "to rise and fall irregularly in number, level, or value"
  },
  {
    "headword": "fluctuation",
    "pos": "noun",
    "cefr": "C2",
    "definition": "an irregular rising and falling variation in number or value"
  },
  {
    "headword": "lyricist",
    "pos": "noun",
    "cefr": "C2",
    "definition": "a person who writes the words to songs or theatrical tunes"
  },
  {
    "headword": "lyrical",
    "pos": "adjective",
    "cefr": "C2",
    "definition": "expressing emotions in an imaginative, poetic, melodic way"
  },
  {
    "headword": "lyrically",
    "pos": "adverb",
    "cefr": "C2",
    "definition": "in an emotional, melodic, and poetically evocative manner"
  },
  {
    "headword": "bona fide",
    "pos": "adjective",
    "cefr": "C2",
    "definition": "neither counterfeit nor fraudulent; authentic and in good faith"
  },
  {
    "headword": "moribund",
    "pos": "adjective",
    "cefr": "C2",
    "definition": "at the point of death; in terminal decline or stagnation"
  },
  {
    "headword": "perch",
    "pos": "verb",
    "cefr": "C2",
    "definition": "to settle or balance on an elevated spot; or a fish"
  },
  {
    "headword": "perch",
    "pos": "noun",
    "cefr": "C2",
    "definition": "a high seat or position"
  },
  {
    "headword": "perch",
    "pos": "noun",
    "cefr": "C2",
    "definition": "kind of fish"
  },
  {
    "headword": "solicit",
    "pos": "verb",
    "cefr": "C2",
    "definition": "to ask for or try to obtain something from someone earnestly"
  },
  {
    "headword": "vocalist",
    "pos": "noun",
    "cefr": "C2",
    "definition": "a performing singer who renders musical melodies vocally"
  },
  {
    "headword": "philanthropy",
    "pos": "noun",
    "cefr": "C2",
    "definition": "the desire to promote welfare through generous donations"
  },
  {
    "headword": "philanthropist",
    "pos": "noun",
    "cefr": "C2",
    "definition": "a person who seeks to promote welfare through donations"
  },
  {
    "headword": "philanthropic",
    "pos": "adjective",
    "cefr": "C2",
    "definition": "seeking to promote the welfare of others through donations"
  },
  {
    "headword": "philanthropically",
    "pos": "adverb",
    "cefr": "C2",
    "definition": "out of charitable benevolence and selfless generosity"
  },
  {
    "headword": "precocious",
    "pos": "adjective",
    "cefr": "C2",
    "definition": "having developed abilities or propensities at an earlier age"
  },
  {
    "headword": "precociously",
    "pos": "adverb",
    "cefr": "C2",
    "definition": "in a manner displaying premature intellectual or artistic maturity"
  },
  {
    "headword": "wordsmith",
    "pos": "noun",
    "cefr": "C2",
    "definition": "a proficient, dexterous craftsman of verbal or written expression"
  },
  {
    "headword": "connote",
    "pos": "verb",
    "cefr": "C2",
    "definition": "to imply or suggest an associated secondary meaning"
  },
  {
    "headword": "connotation",
    "pos": "noun",
    "cefr": "C2",
    "definition": "an implied emotional nuance in addition to literal meaning"
  },
  {
    "headword": "herald",
    "pos": "verb",
    "cefr": "C2",
    "definition": "to signal, proclaim, or inaugurate the arrival of something"
  },
  {
    "headword": "herald",
    "pos": "noun",
    "cefr": "C2",
    "definition": "to signal, proclaim, or inaugurate the arrival of something"
  },
  {
    "headword": "philistine",
    "pos": "noun",
    "cefr": "C2",
    "definition": "a person who is hostile or indifferent to culture and arts"
  },
  {
    "headword": "innuendo",
    "pos": "noun",
    "cefr": "C2",
    "definition": "an allusive or oblique remark, typically suggestive or disparaging"
  },
  {
    "headword": "induce",
    "pos": "verb",
    "cefr": "C2",
    "definition": "to succeed in persuading, leading, or bringing about"
  },
  {
    "headword": "inducement",
    "pos": "noun",
    "cefr": "C2",
    "definition": "a thing that persuades or influences someone to act"
  },
  {
    "headword": "anthology",
    "pos": "noun",
    "cefr": "C2",
    "definition": "a published collection of poems, essays, or literary pieces"
  },
  {
    "headword": "lament",
    "pos": "verb",
    "cefr": "C2",
    "definition": "to express passionate grief, sorrow, or profound regret"
  },
  {
    "headword": "lamentation",
    "pos": "noun",
    "cefr": "C2",
    "definition": "the passionate expression of grief, mourning, or sorrow"
  },
  {
    "headword": "conduit",
    "pos": "noun",
    "cefr": "C2",
    "definition": "a channel for conveying water, fluid, or information"
  },
  {
    "headword": "chronology",
    "pos": "noun",
    "cefr": "C2",
    "definition": "the arrangement of events or dates in the order of occurrence"
  },
  {
    "headword": "chronological",
    "pos": "adjective",
    "cefr": "C2",
    "definition": "arranged in the order of occurrence in time"
  },
  {
    "headword": "chronologically",
    "pos": "adverb",
    "cefr": "C2",
    "definition": "according to the temporal order of events as they unfolded"
  },
  {
    "headword": "equilibrium",
    "pos": "noun",
    "cefr": "C2",
    "definition": "a state in which opposing forces or influences are balanced"
  },
  {
    "headword": "rebound",
    "pos": "verb",
    "cefr": "C2",
    "definition": "to bounce back through collision, or recover from adversity"
  },
  {
    "headword": "rebound",
    "pos": "noun",
    "cefr": "C2",
    "definition": "to bounce back through collision, or recover from adversity"
  },
  {
    "headword": "proposition",
    "pos": "noun",
    "cefr": "C2",
    "definition": "a statement or assertion that expresses a judgment or plan"
  },
  {
    "headword": "flagging",
    "pos": "adjective",
    "cefr": "C2",
    "definition": "becoming tired, declining in vigor, or losing momentum"
  },
  {
    "headword": "electrode",
    "pos": "noun",
    "cefr": "C2",
    "definition": "a conductor through which electricity enters or leaves an object"
  },
  {
    "headword": "caffeinate",
    "pos": "verb",
    "cefr": "C2",
    "definition": "to stimulate or supply with caffeine"
  },
  {
    "headword": "cosmic",
    "pos": "adjective",
    "cefr": "C2",
    "definition": "relating to the universe or cosmos, or immeasurably vast"
  },
  {
    "headword": "interlude",
    "pos": "noun",
    "cefr": "C2",
    "definition": "an intervening period of time, or pause between events"
  },
  {
    "headword": "haven",
    "pos": "noun",
    "cefr": "C2",
    "definition": "a place of refuge, sanctuary, safety, or tranquil retreat"
  },
  {
    "headword": "beneficiary",
    "pos": "noun",
    "cefr": "C2",
    "definition": "a person or institution that derives advantage from something"
  },
  {
    "headword": "recuperate",
    "pos": "verb",
    "cefr": "C2",
    "definition": "to recover from illness or exertion; regain lost strength"
  },
  {
    "headword": "recuperation",
    "pos": "noun",
    "cefr": "C2",
    "definition": "recovery from illness, trauma, exhaustion, or setback"
  },
  {
    "headword": "recuperative",
    "pos": "adjective",
    "cefr": "C2",
    "definition": "having the effect of restoring health, vigor, or strength"
  },
  {
    "headword": "cultish",
    "pos": "adjective",
    "cefr": "C2",
    "definition": "resembling, or characteristic of, a fringe dogmatic sect"
  },
  {
    "headword": "seismic",
    "pos": "adjective",
    "cefr": "C2",
    "definition": "relating to earthquakes or other earth vibrations; momentous"
  },
  {
    "headword": "irrevocably",
    "pos": "adverb",
    "cefr": "C2",
    "definition": "in a definitive way that can never be reversed or undone"
  },
  {
    "headword": "irrevocable",
    "pos": "adjective",
    "cefr": "C2",
    "definition": "not able to be changed, reversed, or recalled; final"
  },
  {
    "headword": "slither",
    "pos": "verb",
    "cefr": "C2",
    "definition": "to move smoothly over a surface with a twisting or sliding motion"
  },
  {
    "headword": "unnerve",
    "pos": "verb",
    "cefr": "C2",
    "definition": "to deprive of poise, confidence, fortitude, or resolve"
  },
  {
    "headword": "unnerving",
    "pos": "adjective",
    "cefr": "C2",
    "definition": "disconcerting, unnerving, or eroding inner composure"
  },
  {
    "headword": "unnervingly",
    "pos": "adverb",
    "cefr": "C2",
    "definition": "in a disconcertingly eerie or disquieting manner"
  },
  {
    "headword": "protrude",
    "pos": "verb",
    "cefr": "C2",
    "definition": "to extend beyond or above a surface; stick out"
  },
  {
    "headword": "protrusion",
    "pos": "noun",
    "cefr": "C2",
    "definition": "something that projects out from a surface or boundary"
  },
  {
    "headword": "qualitative",
    "pos": "adjective",
    "cefr": "C2",
    "definition": "relating to, measuring, or measured by the quality of assets"
  },
  {
    "headword": "procedural",
    "pos": "adjective",
    "cefr": "C2",
    "definition": "relating to an established or official way of doing something"
  },
  {
    "headword": "procedural",
    "pos": "noun",
    "cefr": "C2",
    "definition": "relating to an established or official way of doing something"
  },
  {
    "headword": "demystify",
    "pos": "verb",
    "cefr": "C2",
    "definition": "to make a difficult or esoteric subject intelligible to all"
  },
  {
    "headword": "demystification",
    "pos": "noun",
    "cefr": "C2",
    "definition": "the process of making an obscure subject clear and lucid"
  },
  {
    "headword": "proprietary",
    "pos": "adjective",
    "cefr": "C2",
    "definition": "relating to an owner or ownership; protected by patent"
  },
  {
    "headword": "proprietorial",
    "pos": "adjective",
    "cefr": "C2",
    "definition": "behaving as if one owns something or someone; possessive"
  },
  {
    "headword": "tantamount",
    "pos": "adjective",
    "cefr": "C2",
    "definition": "equivalent in seriousness to; virtually the same as"
  },
  {
    "headword": "floodgates",
    "pos": "noun",
    "cefr": "C2",
    "definition": "gates used to control water flow, or barriers against torrents"
  },
  {
    "headword": "imperceptible",
    "pos": "adjective",
    "cefr": "C2",
    "definition": "so slight, gradual, or subtle as not to be perceived"
  },
  {
    "headword": "imperceptibly",
    "pos": "adverb",
    "cefr": "C2",
    "definition": "in a manner so subtle that it escapes conscious detection"
  },
  {
    "headword": "hapless",
    "pos": "adjective",
    "cefr": "C2",
    "definition": "unfortunate, unlucky, and plagued by persistent misfortune"
  },
  {
    "headword": "catastrophic",
    "pos": "adjective",
    "cefr": "C2",
    "definition": "involving or causing sudden, disastrous, and irreversible damage"
  },
  {
    "headword": "catastrophically",
    "pos": "adverb",
    "cefr": "C2",
    "definition": "with disastrous, ruinous, and fatal consequences"
  },
  {
    "headword": "commission",
    "pos": "noun",
    "cefr": "C2",
    "definition": "an official instruction, command, or duty given to a person"
  },
  {
    "headword": "commission",
    "pos": "verb",
    "cefr": "C2",
    "definition": "an official instruction, command, or duty given to a person"
  },
  {
    "headword": "wayward",
    "pos": "adjective",
    "cefr": "C2",
    "definition": "erratic, unruly, willful, and resistant to discipline"
  },
  {
    "headword": "blurb",
    "pos": "noun",
    "cefr": "C2",
    "definition": "a short promotional description on a book jacket or media"
  },
  {
    "headword": "provincial",
    "pos": "adjective",
    "cefr": "C2",
    "definition": "concerning a province; or narrow-minded and unsophisticated"
  },
  {
    "headword": "indolent",
    "pos": "adjective",
    "cefr": "C2",
    "definition": "wanting to avoid activity or exertion; sluggishly lazy"
  },
  {
    "headword": "indolently",
    "pos": "adverb",
    "cefr": "C2",
    "definition": "in a relaxed, sluggish, or habitually lazy manner"
  },
  {
    "headword": "indolence",
    "pos": "noun",
    "cefr": "C2",
    "definition": "avoidance of activity or exertion; habitual laziness"
  },
  {
    "headword": "taste-maker",
    "pos": "noun",
    "cefr": "C2",
    "definition": "a person who influences what is or will become fashionable"
  },
  {
    "headword": "deviant",
    "pos": "noun",
    "cefr": "C2",
    "definition": "departing significantly from accepted societal norms"
  },
  {
    "headword": "deviant",
    "pos": "adjective",
    "cefr": "C2",
    "definition": "departing significantly from accepted societal norms"
  },
  {
    "headword": "deviantly",
    "pos": "adverb",
    "cefr": "C2",
    "definition": "in a manner that diverges sharply from normative standards"
  },
  {
    "headword": "engender",
    "pos": "verb",
    "cefr": "C2",
    "definition": "to cause or give rise to a feeling, situation, or condition"
  },
  {
    "headword": "emolument",
    "pos": "noun",
    "cefr": "C2",
    "definition": "a salary, fee, or financial profit derived from employment"
  },
  {
    "headword": "munificence",
    "pos": "noun",
    "cefr": "C2",
    "definition": "the quality or action of being lavishly generous in giving"
  },
  {
    "headword": "posterity",
    "pos": "noun",
    "cefr": "C2",
    "definition": "all future generations of people collectively considered"
  },
  {
    "headword": "venomous",
    "pos": "adjective",
    "cefr": "C2",
    "definition": "secreting lethal poison, or deeply spiteful and toxic"
  },
  {
    "headword": "venomously",
    "pos": "adverb",
    "cefr": "C2",
    "definition": "with deep spite, acidic hostility, or lethal toxicity"
  },
  {
    "headword": "choreography",
    "pos": "noun",
    "cefr": "C2",
    "definition": "the sequence of steps and movements in dance or design"
  },
  {
    "headword": "choreographical",
    "pos": "adjective",
    "cefr": "C2",
    "definition": "relating to the art of arranging dances and ballets"
  },
  {
    "headword": "archetype",
    "pos": "noun",
    "cefr": "C2",
    "definition": "a very typical example of a certain thing; original model"
  },
  {
    "headword": "archetypal",
    "pos": "adjective",
    "cefr": "C2",
    "definition": "very typical of a certain kind of person, role, or concept"
  },
  {
    "headword": "dissension",
    "pos": "noun",
    "cefr": "C2",
    "definition": "disagreement that leads to discord and factional conflict"
  },
  {
    "headword": "exalted",
    "pos": "adjective",
    "cefr": "C2",
    "definition": "at a high or powerful level; noble, elevated, or joyous"
  },
  {
    "headword": "exaltedly",
    "pos": "adverb",
    "cefr": "C2",
    "definition": "in an elevated, noble, majestic, or ecstatic manner"
  },
  {
    "headword": "adept",
    "pos": "adjective",
    "cefr": "C2",
    "definition": "highly skilled, proficient, or expert at something"
  },
  {
    "headword": "adept",
    "pos": "noun",
    "cefr": "C2",
    "definition": "highly skilled, proficient, or expert at something"
  },
  {
    "headword": "inert",
    "pos": "adjective",
    "cefr": "C2",
    "definition": "lacking the ability or strength to move; chemical unreactive"
  },
  {
    "headword": "hitherto",
    "pos": "adverb",
    "cefr": "C2",
    "definition": "until now or until the particular point in time being discussed"
  },
  {
    "headword": "angst",
    "pos": "noun",
    "cefr": "C2",
    "definition": "a persistent feeling of deep anxiety, dread, or insecurity"
  },
  {
    "headword": "angsty",
    "pos": "adjective",
    "cefr": "C2",
    "definition": "feeling or expressing persistent anxiety, gloom, or dread"
  },
  {
    "headword": "drabness",
    "pos": "noun",
    "cefr": "C2",
    "definition": "dullness, cheerless lack of color, or monotonous gloom"
  },
  {
    "headword": "melodious",
    "pos": "adjective",
    "cefr": "C2",
    "definition": "having a pleasant tune; sweet-sounding and tuneful"
  },
  {
    "headword": "melodiously",
    "pos": "adverb",
    "cefr": "C2",
    "definition": "in a sweet-sounding, tuneful, and musical manner"
  },
  {
    "headword": "magpie",
    "pos": "noun",
    "cefr": "C2",
    "definition": "a bird with long tail, or one who compulsively collects"
  },
  {
    "headword": "lark",
    "pos": "noun",
    "cefr": "C2",
    "definition": "type of bird"
  },
  {
    "headword": "lark",
    "pos": "noun",
    "cefr": "C2",
    "definition": "thing you do for fun"
  },
  {
    "headword": "melancholy",
    "pos": "noun",
    "cefr": "C2",
    "definition": "a deep, pensive, and long-lasting sadness without cause"
  },
  {
    "headword": "melancholy",
    "pos": "adjective",
    "cefr": "C2",
    "definition": "a deep, pensive, and long-lasting sadness without cause"
  },
  {
    "headword": "meteorology",
    "pos": "noun",
    "cefr": "C2",
    "definition": "the branch of science concerned with atmospheric weather"
  },
  {
    "headword": "meteorological",
    "pos": "adjective",
    "cefr": "C2",
    "definition": "relating to the science of weather patterns and atmosphere"
  },
  {
    "headword": "brink",
    "pos": "noun",
    "cefr": "C2",
    "definition": "the extreme edge of land, or point immediately before a crisis"
  },
  {
    "headword": "unsurpassed",
    "pos": "adjective",
    "cefr": "C2",
    "definition": "superior to all alternatives; unmatched and peerless"
  },
  {
    "headword": "loiter",
    "pos": "verb",
    "cefr": "C2",
    "definition": "to stand or wait around idly without apparent purpose"
  },
  {
    "headword": "topple",
    "pos": "verb",
    "cefr": "C2",
    "definition": "to overbalance or become unsteady and fall; overthrow leadership"
  },
  {
    "headword": "intrinsic",
    "pos": "adjective",
    "cefr": "C2",
    "definition": "belonging naturally; essential, innate, and foundational"
  },
  {
    "headword": "intrinsically",
    "pos": "adverb",
    "cefr": "C2",
    "definition": "in an essential, innate, and natural manner; fundamentally"
  },
  {
    "headword": "merit",
    "pos": "noun",
    "cefr": "C2",
    "definition": "the quality of being particularly good or worthy of praise"
  },
  {
    "headword": "merit",
    "pos": "verb",
    "cefr": "C2",
    "definition": "the quality of being particularly good or worthy of praise"
  },
  {
    "headword": "promotable",
    "pos": "adjective",
    "cefr": "C2",
    "definition": "capable or worthy of being promoted to higher rank"
  },
  {
    "headword": "clinch",
    "pos": "verb",
    "cefr": "C2",
    "definition": "to settle, confirm, or conclude decisively a deal or victory"
  },
  {
    "headword": "anonymity",
    "pos": "noun",
    "cefr": "C2",
    "definition": "the condition of being anonymous, unnamed, or unidentified"
  },
  {
    "headword": "splinter",
    "pos": "verb",
    "cefr": "C2",
    "definition": "a small, thin, sharp piece of wood or glass broken off"
  },
  {
    "headword": "reproach",
    "pos": "verb",
    "cefr": "C2",
    "definition": "to address someone in such a way as to express disapproval"
  },
  {
    "headword": "disseminate",
    "pos": "verb",
    "cefr": "C2",
    "definition": "to spread or disperse information, tenets, or ideas widely"
  },
  {
    "headword": "dissemination",
    "pos": "noun",
    "cefr": "C2",
    "definition": "the act of spreading news, doctrine, or data broadly"
  },
  {
    "headword": "dissemble",
    "pos": "verb",
    "cefr": "C2",
    "definition": "to conceal one's true motives, beliefs, or feelings"
  },
  {
    "headword": "mangle",
    "pos": "verb",
    "cefr": "C2",
    "definition": "to severely mutilate, disfigure, or damage by tearing"
  },
  {
    "headword": "bereft",
    "pos": "adjective",
    "cefr": "C2",
    "definition": "deprived of or lacking something valuable or essential"
  },
  {
    "headword": "bereftly",
    "pos": "adverb",
    "cefr": "C2",
    "definition": "in a sorrowful, desolate, and utterly deprived manner"
  },
  {
    "headword": "soliloquy",
    "pos": "noun",
    "cefr": "C2",
    "definition": "an act of speaking one's thoughts aloud when by oneself in drama"
  },
  {
    "headword": "solipsism",
    "pos": "noun",
    "cefr": "C2",
    "definition": "the philosophical theory that the self is the only known reality"
  },
  {
    "headword": "soliloquize",
    "pos": "verb",
    "cefr": "C2",
    "definition": "to talk to oneself or utter a monologue in a dramatic play"
  },
  {
    "headword": "mutinous",
    "pos": "adjective",
    "cefr": "C2",
    "definition": "refusing to obey the orders of a person in authority"
  },
  {
    "headword": "mutinously",
    "pos": "adverb",
    "cefr": "C2",
    "definition": "in an open, rebellious, and defiantly insubordinate manner"
  },
  {
    "headword": "prissy",
    "pos": "adjective",
    "cefr": "C2",
    "definition": "fussily and prudishly respectable; overly prim"
  },
  {
    "headword": "reptilian",
    "pos": "adjective",
    "cefr": "C2",
    "definition": "relating to reptiles, or coldly cruel and predatory"
  },
  {
    "headword": "diminish",
    "pos": "verb",
    "cefr": "C2",
    "definition": "to make or become less, smaller, or reduced in stature"
  },
  {
    "headword": "undiminishing",
    "pos": "adjective",
    "cefr": "C2",
    "definition": "maintaining steadfast intensity without decline or waning"
  },
  {
    "headword": "contagion",
    "pos": "noun",
    "cefr": "C2",
    "definition": "the communication of disease, emotion, or doctrine by contact"
  },
  {
    "headword": "homestead",
    "pos": "noun",
    "cefr": "C2",
    "definition": "a farmhouse and adjoining land, or to settle as a homestead"
  },
  {
    "headword": "computerize/computerise",
    "pos": "verb",
    "cefr": "C2",
    "definition": "to convert a system to operation by electronic computer"
  },
  {
    "headword": "incumbent",
    "pos": "noun",
    "cefr": "C2",
    "definition": "necessary as a duty, or currently holding an official post"
  },
  {
    "headword": "incumbent",
    "pos": "adjective",
    "cefr": "C2",
    "definition": "necessary as a duty, or currently holding an official post"
  },
  {
    "headword": "recumbent",
    "pos": "adjective",
    "cefr": "C2",
    "definition": "lying down in a comfortable or indolent position; horizontal"
  },
  {
    "headword": "nonchalant",
    "pos": "adjective",
    "cefr": "C2",
    "definition": "feeling or appearing casually calm and unenthusiastic"
  },
  {
    "headword": "nonchalantly",
    "pos": "adverb",
    "cefr": "C2",
    "definition": "in an unconcerned, indifferent, or casually calm manner"
  },
  {
    "headword": "mesmeric",
    "pos": "adjective",
    "cefr": "C2",
    "definition": "causing a person to be completely fascinated or spellbound"
  },
  {
    "headword": "stultify",
    "pos": "verb",
    "cefr": "C2",
    "definition": "to cause to lose enthusiasm and initiative; render futile"
  },
  {
    "headword": "stultifyingly",
    "pos": "adverb",
    "cefr": "C2",
    "definition": "to a degree that deadens initiative, enthusiasm, or energy"
  },
  {
    "headword": "wallow",
    "pos": "verb",
    "cefr": "C2",
    "definition": "to roll indolently in mud, or indulge excessively in distress"
  },
  {
    "headword": "ponderous",
    "pos": "adjective",
    "cefr": "C2",
    "definition": "slow and clumsy because of great weight; dull and solemn"
  },
  {
    "headword": "ponderously",
    "pos": "adverb",
    "cefr": "C2",
    "definition": "in a heavy, laborious, ungracefully clumsy manner"
  },
  {
    "headword": "lassitude",
    "pos": "noun",
    "cefr": "C2",
    "definition": "a state of physical or mental weariness; lack of energy"
  },
  {
    "headword": "vicinity",
    "pos": "noun",
    "cefr": "C2",
    "definition": "the surrounding adjacent area, neighborhood, or proximity"
  },
  {
    "headword": "ebb",
    "pos": "verb",
    "cefr": "C2",
    "definition": "to recede, flow back, or gradually decline and diminish"
  },
  {
    "headword": "wax",
    "pos": "verb",
    "cefr": "C2",
    "definition": "to increase progressively in size, intensity, or fullness"
  },
  {
    "headword": "wane",
    "pos": "verb",
    "cefr": "C2",
    "definition": "to diminish gradually in power, luminescence, or prestige"
  },
  {
    "headword": "antediluvian",
    "pos": "adjective",
    "cefr": "C2",
    "definition": "ridiculously old-fashioned, archaic, or primitive"
  },
  {
    "headword": "ostensible",
    "pos": "adjective",
    "cefr": "C2",
    "definition": "stated or appearing to be true, but not necessarily so"
  },
  {
    "headword": "ostensibly",
    "pos": "adverb",
    "cefr": "C2",
    "definition": "apparently or purportedly, but perhaps not in actual fact"
  },
  {
    "headword": "interlocking",
    "pos": "adjective",
    "cefr": "C2",
    "definition": "connecting together so that the parts cannot move apart"
  },
  {
    "headword": "plane",
    "pos": "noun",
    "cefr": "C2",
    "definition": "flat surface"
  },
  {
    "headword": "undemonstrative",
    "pos": "adjective",
    "cefr": "C2",
    "definition": "restrained in exhibiting emotion or affectionate feelings"
  },
  {
    "headword": "undemonstratively",
    "pos": "adverb",
    "cefr": "C2",
    "definition": "in a reserved, emotionally subdued, and discreet manner"
  },
  {
    "headword": "menace",
    "pos": "noun",
    "cefr": "C2",
    "definition": "a person or thing that is likely to cause harm; threat"
  },
  {
    "headword": "menacing",
    "pos": "adjective",
    "cefr": "C2",
    "definition": "suggesting the presence of danger; threatening and ominous"
  },
  {
    "headword": "menacingly",
    "pos": "adverb",
    "cefr": "C2",
    "definition": "in a sinister, ominous, or threateningly hostile manner"
  },
  {
    "headword": "calamity",
    "pos": "noun",
    "cefr": "C2",
    "definition": "an event causing great and often sudden damage, distress, or ruin"
  },
  {
    "headword": "calamitous",
    "pos": "adjective",
    "cefr": "C2",
    "definition": "causing catastrophic disaster, severe misfortune, or widespread ruin"
  },
  {
    "headword": "calamitously",
    "pos": "adverb",
    "cefr": "C2",
    "definition": "in a disastrous, catastrophic, or ruinsome manner"
  },
  {
    "headword": "nigh",
    "pos": "adverb",
    "cefr": "C2",
    "definition": "near in time or place; almost or approaching"
  },
  {
    "headword": "austere",
    "pos": "adjective",
    "cefr": "C2",
    "definition": "severe or strict in manner, attitude, or appearance; frugal"
  },
  {
    "headword": "austerely",
    "pos": "adverb",
    "cefr": "C2",
    "definition": "in a strict, severely simple, or unadorned manner"
  },
  {
    "headword": "austerity",
    "pos": "noun",
    "cefr": "C2",
    "definition": "sternness or severity of manner; strict economic reduction"
  },
  {
    "headword": "idiosyncrasy",
    "pos": "noun",
    "cefr": "C2",
    "definition": "a distinctive, peculiar behavioral trait or characteristic"
  },
  {
    "headword": "idiosyncratic",
    "pos": "adjective",
    "cefr": "C2",
    "definition": "peculiar, unique, and characteristic of an individual"
  },
  {
    "headword": "idiomatic",
    "pos": "adjective",
    "cefr": "C2",
    "definition": "using expressions natural to a native language speaker"
  },
  {
    "headword": "idiomatically",
    "pos": "adverb",
    "cefr": "C2",
    "definition": "in a natural, characteristic linguistic and idiomatic manner"
  },
  {
    "headword": "kinetic",
    "pos": "adjective",
    "cefr": "C2",
    "definition": "relating to, resulting from, or produced by physical motion"
  },
  {
    "headword": "kinetically",
    "pos": "adverb",
    "cefr": "C2",
    "definition": "in terms of physical movement, kinetic energy, or motion"
  },
  {
    "headword": "unmediated",
    "pos": "adjective",
    "cefr": "C2",
    "definition": "direct, authentic, and without intervening interpretive layers"
  },
  {
    "headword": "mediate",
    "pos": "verb",
    "cefr": "C2",
    "definition": "to intervene between parties in a dispute to reconcile them"
  },
  {
    "headword": "mediation",
    "pos": "noun",
    "cefr": "C2",
    "definition": "intervention in a dispute in order to resolve it equitably"
  },
  {
    "headword": "unharried",
    "pos": "adjective",
    "cefr": "C2",
    "definition": "unhurried, calm, and untroubled by frantic pressures"
  },
  {
    "headword": "figurative",
    "pos": "adjective",
    "cefr": "C2",
    "definition": "departing from a literal use of words; metaphorical"
  },
  {
    "headword": "figuratively",
    "pos": "adverb",
    "cefr": "C2",
    "definition": "metaphorically, symbolically, and not in the literal sense"
  },
  {
    "headword": "exorcism",
    "pos": "noun",
    "cefr": "C2",
    "definition": "the religious expulsion of alleged evil spirits from a person"
  },
  {
    "headword": "exorcist",
    "pos": "noun",
    "cefr": "C2",
    "definition": "a person who expels or is believed to expel evil spirits"
  },
  {
    "headword": "mundanity",
    "pos": "noun",
    "cefr": "C2",
    "definition": "the condition of being dull, commonplace, and ordinary"
  },
  {
    "headword": "mediocrity",
    "pos": "noun",
    "cefr": "C2",
    "definition": "the state of being only of moderate or ordinary quality"
  },
  {
    "headword": "dubiously",
    "pos": "adverb",
    "cefr": "C2",
    "definition": "with hesitation, skepticism, or doubtful hesitation"
  },
  {
    "headword": "curate",
    "pos": "verb",
    "cefr": "C2",
    "definition": "to select, organize, and present cultural or artistic items"
  },
  {
    "headword": "curator",
    "pos": "noun",
    "cefr": "C2",
    "definition": "a keeper, custodian, or artistic director of a museum"
  },
  {
    "headword": "antithesis",
    "pos": "noun",
    "cefr": "C2",
    "definition": "a person or thing that is the direct opposite of another"
  },
  {
    "headword": "antithetical",
    "pos": "adjective",
    "cefr": "C2",
    "definition": "directly opposed or mutually incompatible in nature"
  },
  {
    "headword": "parameter",
    "pos": "noun",
    "cefr": "C2",
    "definition": "a numerical or other measurable factor defining a system"
  },
  {
    "headword": "detract",
    "pos": "verb",
    "cefr": "C2",
    "definition": "to diminish the worth, value, or beauty of a quality"
  },
  {
    "headword": "interrogate",
    "pos": "verb",
    "cefr": "C2",
    "definition": "to question someone systematically and aggressively"
  },
  {
    "headword": "interrogation",
    "pos": "noun",
    "cefr": "C2",
    "definition": "the action of interrogating or being questioned intensely"
  },
  {
    "headword": "interrogative",
    "pos": "adjective",
    "cefr": "C2",
    "definition": "having the form or character of a question; questioning"
  },
  {
    "headword": "interrogatively",
    "pos": "adverb",
    "cefr": "C2",
    "definition": "in a questioning, inquiring, or interrogating manner"
  },
  {
    "headword": "perverse",
    "pos": "adjective",
    "cefr": "C2",
    "definition": "showing deliberate desire to behave in an unacceptable way"
  },
  {
    "headword": "perversity",
    "pos": "noun",
    "cefr": "C2",
    "definition": "a deliberate desire to behave unreasonably or wrongly"
  },
  {
    "headword": "attainment",
    "pos": "noun",
    "cefr": "C2",
    "definition": "the achievement of a goal, distinction, or elevated status"
  },
  {
    "headword": "opaque",
    "pos": "adjective",
    "cefr": "C2",
    "definition": "not able to be seen through; not transparent or clear"
  },
  {
    "headword": "opacity",
    "pos": "noun",
    "cefr": "C2",
    "definition": "the condition of lacking transparency or being obscure"
  },
  {
    "headword": "remit",
    "pos": "verb",
    "cefr": "C2",
    "definition": "to cancel or refrain from demanding debts; scope of work"
  },
  {
    "headword": "remittance",
    "pos": "noun",
    "cefr": "C2",
    "definition": "a sum of money sent in payment or as a gift abroad"
  },
  {
    "headword": "recourse",
    "pos": "noun",
    "cefr": "C2",
    "definition": "a source of help in a difficult situation; legal option"
  },
  {
    "headword": "pedestal",
    "pos": "noun",
    "cefr": "C2",
    "definition": "the base or support on which a statue is mounted"
  },
  {
    "headword": "pedestrian",
    "pos": "adjective",
    "cefr": "C2",
    "definition": "lacking inspiration or excitement; dull and commonplace"
  },
  {
    "headword": "lurid",
    "pos": "adjective",
    "cefr": "C2",
    "definition": "very vivid in color, or presenting shocking sensational details"
  },
  {
    "headword": "luridly",
    "pos": "adverb",
    "cefr": "C2",
    "definition": "in an unpleasantly vivid, sensational, or gruesome manner"
  },
  {
    "headword": "fallacy",
    "pos": "noun",
    "cefr": "C2",
    "definition": "a mistaken belief, especially one based on unsound argument"
  },
  {
    "headword": "rife",
    "pos": "adjective",
    "cefr": "C2",
    "definition": "of common or widespread occurrence, especially something bad"
  },
  {
    "headword": "grumble",
    "pos": "verb",
    "cefr": "C2",
    "definition": "to complain about something in a bad-tempered, muttering way"
  },
  {
    "headword": "mercenary",
    "pos": "noun",
    "cefr": "C2",
    "definition": "primarily concerned with making money at expense of ethics"
  },
  {
    "headword": "polysyllabic",
    "pos": "adjective",
    "cefr": "C2",
    "definition": "having more than three syllables in linguistic form"
  },
  {
    "headword": "syllabic",
    "pos": "adjective",
    "cefr": "C2",
    "definition": "relating to or based on syllables in spoken words"
  },
  {
    "headword": "superfluous",
    "pos": "adjective",
    "cefr": "C2",
    "definition": "unnecessary, especially through being more than enough; excess"
  },
  {
    "headword": "superfluously",
    "pos": "adverb",
    "cefr": "C2",
    "definition": "in a manner that is redundant, unnecessary, or extravagant"
  },
  {
    "headword": "snippet",
    "pos": "noun",
    "cefr": "C2",
    "definition": "a small piece or brief extract of information or music"
  },
  {
    "headword": "practitioner",
    "pos": "noun",
    "cefr": "C2",
    "definition": "a person actively engaged in an art, discipline, or profession"
  },
  {
    "headword": "ephemeral",
    "pos": "adjective",
    "cefr": "C2",
    "definition": "lasting for a very short, transient, or fleeting time"
  },
  {
    "headword": "ephemera",
    "pos": "noun",
    "cefr": "C2",
    "definition": "items of collectible or transitory interest meant to last briefly"
  },
  {
    "headword": "ephemerality",
    "pos": "noun",
    "cefr": "C2",
    "definition": "the concept or quality of existing only briefly and fleetingly"
  },
  {
    "headword": "summarily",
    "pos": "adverb",
    "cefr": "C2",
    "definition": "in a summary manner; without customary legal formalities"
  },
  {
    "headword": "skim",
    "pos": "verb",
    "cefr": "C2",
    "definition": "to read or glance through quickly, or remove scum from liquid"
  },
  {
    "headword": "infallibly",
    "pos": "adverb",
    "cefr": "C2",
    "definition": "without fail, reliably, and immune from all error"
  },
  {
    "headword": "infallible",
    "pos": "adjective",
    "cefr": "C2",
    "definition": "incapable of making mistakes or being wrong; unerring"
  },
  {
    "headword": "infallibility",
    "pos": "noun",
    "cefr": "C2",
    "definition": "the inability to be wrong, make mistakes, or fail"
  },
  {
    "headword": "depravity",
    "pos": "noun",
    "cefr": "C2",
    "definition": "moral corruption, licentiousness, and wicked behavior"
  },
  {
    "headword": "depraved",
    "pos": "adjective",
    "cefr": "C2",
    "definition": "morally corrupt, perverted, and wicked in behavior"
  },
  {
    "headword": "deprecate",
    "pos": "verb",
    "cefr": "C2",
    "definition": "to express earnest disapproval of, or belittle modest merit"
  },
  {
    "headword": "deprecatingly",
    "pos": "adverb",
    "cefr": "C2",
    "definition": "in a self-effacing, apologetic, or critical manner"
  },
  {
    "headword": "revile",
    "pos": "verb",
    "cefr": "C2",
    "definition": "to criticize or speak about abusively and insults"
  },
  {
    "headword": "revulsion",
    "pos": "noun",
    "cefr": "C2",
    "definition": "a sense of disgust, repugnance, and loathing in response"
  },
  {
    "headword": "meager/meagre",
    "pos": "adjective",
    "cefr": "C2",
    "definition": "lacking in quantity or quality; lean, scant, and inadequate"
  },
  {
    "headword": "arcane",
    "pos": "adjective",
    "cefr": "C2",
    "definition": "understood by few; mysterious, obscure, and esoteric"
  },
  {
    "headword": "arcanely",
    "pos": "adverb",
    "cefr": "C2",
    "definition": "in an obscure, mysterious, or esoteric manner"
  },
  {
    "headword": "porten",
    "pos": "noun",
    "cefr": "C2",
    "definition": "to be a sign or warning that something momentous will happen"
  },
  {
    "headword": "divination",
    "pos": "noun",
    "cefr": "C2",
    "definition": "the practice of seeking knowledge of the future via augury"
  },
  {
    "headword": "flit",
    "pos": "verb",
    "cefr": "C2",
    "definition": "to move swiftly and lightly from one position to another"
  },
  {
    "headword": "hitch",
    "pos": "verb",
    "cefr": "C2",
    "definition": "a temporary difficulty or problem, or to fasten with a knot"
  },
  {
    "headword": "prone",
    "pos": "adjective",
    "cefr": "C2",
    "definition": "likely or liable to suffer from or do something undesirable"
  },
  {
    "headword": "scavenger",
    "pos": "noun",
    "cefr": "C2",
    "definition": "an animal that feeds on carrion, or one who salvages refuse"
  },
  {
    "headword": "vermin",
    "pos": "noun",
    "cefr": "C2",
    "definition": "parasitic pests, noxious animals, or contemptible humans"
  },
  {
    "headword": "totemic",
    "pos": "adjective",
    "cefr": "C2",
    "definition": "serving as an emblem, symbolic protector, or revered icon"
  },
  {
    "headword": "emulate",
    "pos": "verb",
    "cefr": "C2",
    "definition": "to match or surpass a person or achievement, often by imitation"
  },
  {
    "headword": "emulation",
    "pos": "noun",
    "cefr": "C2",
    "definition": "the effort to match or surpass a person, model, or standard"
  },
  {
    "headword": "avian",
    "pos": "adjective",
    "cefr": "C2",
    "definition": "relating to, characteristic of, or resembling birds"
  },
  {
    "headword": "vestigial",
    "pos": "adjective",
    "cefr": "C2",
    "definition": "surviving as a degenerate remnant of an earlier ancestor"
  },
  {
    "headword": "vestigially",
    "pos": "adverb",
    "cefr": "C2",
    "definition": "in the form of an antiquated or rudimentary trace"
  },
  {
    "headword": "barometer",
    "pos": "noun",
    "cefr": "C2",
    "definition": "something that reflects, gauges, or indicates changes"
  },
  {
    "headword": "lament",
    "pos": "verb",
    "cefr": "C2",
    "definition": "to express passionate grief, sorrow, or profound regret"
  },
  {
    "headword": "lamentation",
    "pos": "noun",
    "cefr": "C2",
    "definition": "the passionate expression of grief, mourning, or sorrow"
  },
  {
    "headword": "brouhaha",
    "pos": "noun",
    "cefr": "C2",
    "definition": "a noisy and overexcited reaction or public uproar"
  },
  {
    "headword": "magnate",
    "pos": "noun",
    "cefr": "C2",
    "definition": "a wealthy and influential person, especially in business"
  },
  {
    "headword": "magnanimous",
    "pos": "adjective",
    "cefr": "C2",
    "definition": "generous, noble, and forgiving toward rivals or the defeated"
  },
  {
    "headword": "magnanimously",
    "pos": "adverb",
    "cefr": "C2",
    "definition": "in a noble, generous, and forgiving or gracious manner"
  },
  {
    "headword": "magnanimity",
    "pos": "noun",
    "cefr": "C2",
    "definition": "generosity, nobility of spirit, and readiness to forgive"
  },
  {
    "headword": "whirlwind",
    "pos": "noun",
    "cefr": "C2",
    "definition": "a rapidly rotating atmospheric column or tempestuous sequence"
  },
  {
    "headword": "strait",
    "pos": "noun",
    "cefr": "C2",
    "definition": "a narrow passage of water connecting two seas; or distress"
  },
  {
    "headword": "secular",
    "pos": "adjective",
    "cefr": "C2",
    "definition": "denoting attitudes or activities that have no religious basis"
  },
  {
    "headword": "secularly",
    "pos": "adverb",
    "cefr": "C2",
    "definition": "in a non-religious, worldly, or civil manner"
  },
  {
    "headword": "euphemism",
    "pos": "noun",
    "cefr": "C2",
    "definition": "a mild or indirect word substituted for one considered harsh"
  },
  {
    "headword": "euphemistic",
    "pos": "adjective",
    "cefr": "C2",
    "definition": "using polite, mild terms to soften an unpleasant truth"
  },
  {
    "headword": "euphemistically",
    "pos": "adverb",
    "cefr": "C2",
    "definition": "by means of a euphemism or softened linguistic phrasing"
  },
  {
    "headword": "condensation",
    "pos": "noun",
    "cefr": "C2",
    "definition": "conversion of vapor to liquid, or concise distillation"
  },
  {
    "headword": "redundant",
    "pos": "adjective",
    "cefr": "C2",
    "definition": "not or no longer needed or useful; superfluous in speech"
  },
  {
    "headword": "redundancy",
    "pos": "noun",
    "cefr": "C2",
    "definition": "the state of being no longer needed, useful, or employed"
  },
  {
    "headword": "redundantly",
    "pos": "adverb",
    "cefr": "C2",
    "definition": "in an unnecessary, repetitive, or superfluous manner"
  },
  {
    "headword": "colloquial",
    "pos": "adjective",
    "cefr": "C2",
    "definition": "used in ordinary or informal conversation; not formal"
  },
  {
    "headword": "colloquium",
    "pos": "noun",
    "cefr": "C2",
    "definition": "an academic conference, seminar, or symposium of specialists"
  },
  {
    "headword": "colloquially",
    "pos": "adverb",
    "cefr": "C2",
    "definition": "in an informal, conversational, or non-academic manner"
  },
  {
    "headword": "allusion",
    "pos": "noun",
    "cefr": "C2",
    "definition": "an indirect or passing reference to an external subject"
  },
  {
    "headword": "allude",
    "pos": "verb",
    "cefr": "C2",
    "definition": "to suggest or call attention to indirectly; hint at"
  },
  {
    "headword": "disparage",
    "pos": "verb",
    "cefr": "C2",
    "definition": "to regard or represent as being of little worth; belittle"
  },
  {
    "headword": "disparaging",
    "pos": "adjective",
    "cefr": "C2",
    "definition": "expressing the opinion that something is of little worth"
  },
  {
    "headword": "disparagingly",
    "pos": "adverb",
    "cefr": "C2",
    "definition": "in a belittling, depreciatory, and derogatory manner"
  },
  {
    "headword": "disparagement",
    "pos": "noun",
    "cefr": "C2",
    "definition": "the act of depreciating, belittling, or speaking slightingly"
  },
  {
    "headword": "huddle",
    "pos": "verb",
    "cefr": "C2",
    "definition": "to crowd closely together, or confer privately in consultation"
  },
  {
    "headword": "huddle",
    "pos": "noun",
    "cefr": "C2",
    "definition": "to crowd closely together, or confer privately in consultation"
  },
  {
    "headword": "topography",
    "pos": "noun",
    "cefr": "C2",
    "definition": "the arrangement of the natural and artificial physical features of land"
  },
  {
    "headword": "topographical",
    "pos": "adjective",
    "cefr": "C2",
    "definition": "relating to the arrangement of the physical features of an area"
  },
  {
    "headword": "topographically",
    "pos": "adverb",
    "cefr": "C2",
    "definition": "with regard to physical terrain, elevation, and contour maps"
  },
  {
    "headword": "confabulate",
    "pos": "verb",
    "cefr": "C2",
    "definition": "to engage in casual talk, or invent fabricated memories"
  },
  {
    "headword": "confabulation",
    "pos": "noun",
    "cefr": "C2",
    "definition": "an informal chat, or psychological fabrication of memories"
  },
  {
    "headword": "surrealist",
    "pos": "noun",
    "cefr": "C2",
    "definition": "an artist or writer associated with the surrealism movement"
  },
  {
    "headword": "surrealism",
    "pos": "noun",
    "cefr": "C2",
    "definition": "a 20th-century avant-garde movement releasing creative unconscious"
  },
  {
    "headword": "contrive",
    "pos": "verb",
    "cefr": "C2",
    "definition": "to create, orchestrate, or bring about by deliberate artifice"
  },
  {
    "headword": "malice",
    "pos": "noun",
    "cefr": "C2",
    "definition": "the intention or desire to do evil, harm, or ill to others"
  },
  {
    "headword": "malicious",
    "pos": "adjective",
    "cefr": "C2",
    "definition": "characterized by malice; intending or intended to do harm"
  },
  {
    "headword": "maliciously",
    "pos": "adverb",
    "cefr": "C2",
    "definition": "with deliberate intent to cause harm, injury, or distress"
  },
  {
    "headword": "cinematography",
    "pos": "noun",
    "cefr": "C2",
    "definition": "the art or science of motion-picture photography and lighting"
  },
  {
    "headword": "cinematographer",
    "pos": "noun",
    "cefr": "C2",
    "definition": "a chief camera operator and lighting director in filmmaking"
  },
  {
    "headword": "maverick",
    "pos": "noun",
    "cefr": "C2",
    "definition": "an unorthodox, independent-minded person who refuses conformity"
  },
  {
    "headword": "diligent",
    "pos": "adjective",
    "cefr": "C2",
    "definition": "having or showing care and conscientious conscientiousness"
  },
  {
    "headword": "diligence",
    "pos": "noun",
    "cefr": "C2",
    "definition": "careful, persistent, and conscientious effort and work"
  },
  {
    "headword": "diligently",
    "pos": "adverb",
    "cefr": "C2",
    "definition": "with persistent, attentive effort and meticulous care"
  },
  {
    "headword": "turret",
    "pos": "noun",
    "cefr": "C2",
    "definition": "a small tower on top of a larger tower or castle wall"
  },
  {
    "headword": "impressionistic",
    "pos": "adjective",
    "cefr": "C2",
    "definition": "based on subjective impression rather than precise facts"
  },
  {
    "headword": "impressionistically",
    "pos": "adverb",
    "cefr": "C2",
    "definition": "through broad, evocative personal impressions rather than detail"
  },
  {
    "headword": "snobbery",
    "pos": "noun",
    "cefr": "C2",
    "definition": "the character or quality of being a snob; arrogant elitism"
  },
  {
    "headword": "parochial",
    "pos": "adjective",
    "cefr": "C2",
    "definition": "having a limited or narrow outlook; small-minded"
  },
  {
    "headword": "gravitate",
    "pos": "verb",
    "cefr": "C2",
    "definition": "to be drawn toward a person, place, or thing by attraction"
  },
  {
    "headword": "gravitational",
    "pos": "adjective",
    "cefr": "C2",
    "definition": "relating to the physical force of attraction between masses"
  },
  {
    "headword": "gravitationally",
    "pos": "adverb",
    "cefr": "C2",
    "definition": "by means of the force of physical gravity or attraction"
  },
  {
    "headword": "consternation",
    "pos": "noun",
    "cefr": "C2",
    "definition": "feelings of anxiety, alarm, or dismay at something unexpected"
  },
  {
    "headword": "haughty",
    "pos": "adjective",
    "cefr": "C2",
    "definition": "arrogantly superior, disdainful, and dismissive toward others"
  },
  {
    "headword": "haughtily",
    "pos": "adverb",
    "cefr": "C2",
    "definition": "in an arrogantly superior, disdainful, and condescending manner"
  },
  {
    "headword": "axiom",
    "pos": "noun",
    "cefr": "C2",
    "definition": "a statement or proposition regarded as self-evidently true"
  },
  {
    "headword": "axiomatic",
    "pos": "adjective",
    "cefr": "C2",
    "definition": "self-evident, unquestionable, or universally recognized"
  },
  {
    "headword": "attrition",
    "pos": "noun",
    "cefr": "C2",
    "definition": "the process of gradually reducing strength through sustained attack"
  },
  {
    "headword": "enduringly",
    "pos": "adverb",
    "cefr": "C2",
    "definition": "in a permanent, lasting, and resilient manner over time"
  },
  {
    "headword": "reissue",
    "pos": "verb",
    "cefr": "C2",
    "definition": "to supply or publish an item or decree again"
  },
  {
    "headword": "sulphur",
    "pos": "noun",
    "cefr": "C2",
    "definition": "a pale yellow nonmetallic element burning with blue flame"
  },
  {
    "headword": "sulphuric",
    "pos": "adjective",
    "cefr": "C2",
    "definition": "containing sulfur, especially in higher oxidation states; acidic"
  },
  {
    "headword": "phantom",
    "pos": "noun",
    "cefr": "C2",
    "definition": "a ghost, figment of imagination, or illusory apparition"
  },
  {
    "headword": "moor",
    "pos": "noun",
    "cefr": "C2",
    "definition": "an expanse of open uncultivated land, or tie up a vessel"
  },
  {
    "headword": "solitary",
    "pos": "adjective",
    "cefr": "C2",
    "definition": "done or existing alone; single, isolated, and secluded"
  },
  {
    "headword": "solitary",
    "pos": "noun",
    "cefr": "C2",
    "definition": "done or existing alone; single, isolated, and secluded"
  },
  {
    "headword": "solitariness",
    "pos": "noun",
    "cefr": "C2",
    "definition": "the state of being solitary, alone, or secluded from others"
  },
  {
    "headword": "solitude",
    "pos": "noun",
    "cefr": "C2",
    "definition": "the state or situation of being alone, especially peacefully"
  },
  {
    "headword": "adhere",
    "pos": "verb",
    "cefr": "C2",
    "definition": "to stick fast to a surface, or faithfully follow a principle"
  },
  {
    "headword": "adhesion",
    "pos": "noun",
    "cefr": "C2",
    "definition": "the action or process of sticking fast to a surface"
  },
  {
    "headword": "proscribe",
    "pos": "verb",
    "cefr": "C2",
    "definition": "to forbid, prohibit, or ban by formal decree or law"
  },
  {
    "headword": "proscription",
    "pos": "noun",
    "cefr": "C2",
    "definition": "the action of forbidding something; a ban or decree"
  },
  {
    "headword": "crony",
    "pos": "noun",
    "cefr": "C2",
    "definition": "a close friend or companion, especially in political favors"
  },
  {
    "headword": "dribble",
    "pos": "verb",
    "cefr": "C2",
    "definition": "pour slowly"
  },
  {
    "headword": "dribble",
    "pos": "verb",
    "cefr": "C2",
    "definition": "bounce a basketball"
  },
  {
    "headword": "dribble",
    "pos": "noun",
    "cefr": "C2",
    "definition": "to fall in small drops, trickle, or guide a ball with steps"
  },
  {
    "headword": "ingrate",
    "pos": "noun",
    "cefr": "C2",
    "definition": "an ungrateful, unappreciative person"
  },
  {
    "headword": "prise",
    "pos": "verb",
    "cefr": "C2",
    "definition": "to use force in order to move, separate, or open something"
  },
  {
    "headword": "rickety",
    "pos": "adjective",
    "cefr": "C2",
    "definition": "poorly made and likely to collapse; shaky and unsteady"
  },
  {
    "headword": "consign",
    "pos": "verb",
    "cefr": "C2",
    "definition": "to deliver to a person's custody or commit to an undesirable fate"
  },
  {
    "headword": "consignment",
    "pos": "noun",
    "cefr": "C2",
    "definition": "a batch of goods sent to an agent for delivery or sale"
  },
  {
    "headword": "fete",
    "pos": "noun",
    "cefr": "C2",
    "definition": "a public festival or outdoor celebration with entertainment"
  },
  {
    "headword": "dole out",
    "pos": "verb",
    "cefr": "C2",
    "definition": "to distribute shares of food, money, or goods sparingly"
  },
  {
    "headword": "opulent",
    "pos": "adjective",
    "cefr": "C2",
    "definition": "ostentatiously rich, lavish, and characterized by luxury"
  },
  {
    "headword": "opulence",
    "pos": "noun",
    "cefr": "C2",
    "definition": "great wealth, lavish abundance, or luxurious splendor"
  },
  {
    "headword": "opulently",
    "pos": "adverb",
    "cefr": "C2",
    "definition": "in a richly luxurious, lavish, and magnificent manner"
  },
  {
    "headword": "plutocrat",
    "pos": "noun",
    "cefr": "C2",
    "definition": "a person whose power derives entirely from their great wealth"
  },
  {
    "headword": "averse",
    "pos": "adjective",
    "cefr": "C2",
    "definition": "having a strong dislike of or deep opposition to something"
  },
  {
    "headword": "edify",
    "pos": "verb",
    "cefr": "C2",
    "definition": "to instruct or improve someone morally or intellectually"
  },
  {
    "headword": "edification",
    "pos": "noun",
    "cefr": "C2",
    "definition": "the moral, intellectual, or spiritual improvement of a person"
  },
  {
    "headword": "converse",
    "pos": "adjective",
    "cefr": "C2",
    "definition": "to engage in conversation, or the opposite of a proposition"
  },
  {
    "headword": "converse",
    "pos": "noun",
    "cefr": "C2",
    "definition": "to engage in conversation, or the opposite of a proposition"
  },
  {
    "headword": "sterility",
    "pos": "noun",
    "cefr": "C2",
    "definition": "the state of being sterile, barren, or devoid of bacteria"
  },
  {
    "headword": "rhetoric",
    "pos": "noun",
    "cefr": "C2",
    "definition": "the art of persuasive speaking or writing; hollow speech"
  },
  {
    "headword": "rhetorical",
    "pos": "adjective",
    "cefr": "C2",
    "definition": "expressed in terms intended to persuade, or art of discourse"
  },
  {
    "headword": "rhetorically",
    "pos": "adverb",
    "cefr": "C2",
    "definition": "in terms of rhetoric or persuasive oratorical speech"
  },
  {
    "headword": "flighty",
    "pos": "adjective",
    "cefr": "C2",
    "definition": "fickle, irresponsible, and easily excited or distracted"
  },
  {
    "headword": "flightiness",
    "pos": "noun",
    "cefr": "C2",
    "definition": "the quality of being fickle, irresponsible, or volatile"
  },
  {
    "headword": "brimstone",
    "pos": "noun",
    "cefr": "C2",
    "definition": "sulfur, traditionally associated with subterranean fire"
  },
  {
    "headword": "impeccable",
    "pos": "adjective",
    "cefr": "C2",
    "definition": "in accordance with the highest standards; faultless and flawless"
  },
  {
    "headword": "impeccably",
    "pos": "adverb",
    "cefr": "C2",
    "definition": "in an exemplary, flawless, and perfectly faultless manner"
  },
  {
    "headword": "romp",
    "pos": "verb",
    "cefr": "C2",
    "definition": "to play roughly and energetically, or win easily"
  },
  {
    "headword": "romper",
    "pos": "noun",
    "cefr": "C2",
    "definition": "a one-piece garment worn by young children for play"
  },
  {
    "headword": "meticulous",
    "pos": "adjective",
    "cefr": "C2",
    "definition": "showing great attention to detail; very careful and precise"
  },
  {
    "headword": "meticulously",
    "pos": "adverb",
    "cefr": "C2",
    "definition": "with extreme, scrupulous attention to detail and accuracy"
  },
  {
    "headword": "ingratiate",
    "pos": "verb",
    "cefr": "C2",
    "definition": "to bring oneself into favor with someone by deliberate flattery"
  },
  {
    "headword": "ingratiating",
    "pos": "adjective",
    "cefr": "C2",
    "definition": "intended to gain approval or favor; sycophantic"
  },
  {
    "headword": "ingratiatingly",
    "pos": "adverb",
    "cefr": "C2",
    "definition": "in a flattering manner calculated to win unearned favor"
  },
  {
    "headword": "shimmer",
    "pos": "verb",
    "cefr": "C2",
    "definition": "to shine with a soft, slightly wavering, tremulous light"
  },
  {
    "headword": "hull",
    "pos": "noun",
    "cefr": "C2",
    "definition": "the main body of a ship, or outer covering of a seed"
  },
  {
    "headword": "cull",
    "pos": "verb",
    "cefr": "C2",
    "definition": "to select, reduce, or slaughter surplus members of a group"
  },
  {
    "headword": "swivel",
    "pos": "verb",
    "cefr": "C2",
    "definition": "to turn around a central point or axis, or a pivot joint"
  },
  {
    "headword": "relinquish",
    "pos": "verb",
    "cefr": "C2",
    "definition": "to voluntarily cease to claim or give up rights or assets"
  },
  {
    "headword": "quiver",
    "pos": "verb",
    "cefr": "C2",
    "definition": "to tremble or shake with a slight rapid motion; arrow case"
  },
  {
    "headword": "quiver",
    "pos": "noun",
    "cefr": "C2",
    "definition": "to tremble or shake with a slight rapid motion; arrow case"
  },
  {
    "headword": "sandwiched",
    "pos": "adjective",
    "cefr": "C2",
    "definition": "compressed or inserted tightly between two surfaces"
  },
  {
    "headword": "mottled",
    "pos": "adjective",
    "cefr": "C2",
    "definition": "marked with spots, blotches, or smears of contrasting color"
  },
  {
    "headword": "epoxy",
    "pos": "noun",
    "cefr": "C2",
    "definition": "a tough, synthetic thermosetting polymer used as adhesive"
  },
  {
    "headword": "resin",
    "pos": "noun",
    "cefr": "C2",
    "definition": "a sticky flammable organic substance exuded by trees"
  },
  {
    "headword": "sedately",
    "pos": "adverb",
    "cefr": "C2",
    "definition": "in a quiet, unhurried, composed, and dignified manner"
  },
  {
    "headword": "angular",
    "pos": "adjective",
    "cefr": "C2",
    "definition": "having sharp angles, lean features, or rigid contours"
  },
  {
    "headword": "angularity",
    "pos": "noun",
    "cefr": "C2",
    "definition": "the condition of possessing sharp, prominent corners or angles"
  },
  {
    "headword": "dampen",
    "pos": "verb",
    "cefr": "C2",
    "definition": "reduce the sound of something"
  },
  {
    "headword": "buccaneer",
    "pos": "verb",
    "cefr": "C2",
    "definition": "a pirate, or a daring and ruthless enterprise adventurer"
  },
  {
    "headword": "buccaneer",
    "pos": "noun",
    "cefr": "C2",
    "definition": "a pirate, or a daring and ruthless enterprise adventurer"
  },
  {
    "headword": "conglomerate",
    "pos": "noun",
    "cefr": "C2",
    "definition": "a multi-industry corporation comprising distinct business entities"
  },
  {
    "headword": "cay",
    "pos": "noun",
    "cefr": "C2",
    "definition": "a low bank or reef of coral, sand, or rock"
  },
  {
    "headword": "singe",
    "pos": "verb",
    "cefr": "C2",
    "definition": "to burn superficially or slightly, especially along edges"
  },
  {
    "headword": "cordon",
    "pos": "verb",
    "cefr": "C2",
    "definition": "a barrier erected to isolate or safeguard a defined area"
  },
  {
    "headword": "fabled",
    "pos": "adjective",
    "cefr": "C2",
    "definition": "renowned through mythological story, celebrated, or fictitious"
  },
  {
    "headword": "glint",
    "pos": "verb",
    "cefr": "C2",
    "definition": "to give out or reflect small flashes of bright light"
  },
  {
    "headword": "glint",
    "pos": "noun",
    "cefr": "C2",
    "definition": "to give out or reflect small flashes of bright light"
  },
  {
    "headword": "infernal",
    "pos": "adjective",
    "cefr": "C2",
    "definition": "relating to hell, or irritating, tiresome, and infuriating"
  },
  {
    "headword": "infernally",
    "pos": "adverb",
    "cefr": "C2",
    "definition": "in an infernal, diabolical, or exasperatingly annoying way"
  },
  {
    "headword": "presentational",
    "pos": "adjective",
    "cefr": "C2",
    "definition": "relating to the display, appearance, and public presentation"
  },
  {
    "headword": "embed",
    "pos": "verb",
    "cefr": "C2",
    "definition": "to fix firmly and deeply in a surrounding solid mass"
  },
  {
    "headword": "plume",
    "pos": "noun",
    "cefr": "C2",
    "definition": "a long, soft feather, or cloud of smoke spreading upward"
  },
  {
    "headword": "happenstance",
    "pos": "noun",
    "cefr": "C2",
    "definition": "a chance circumstance, coincidence, or fortuitous event"
  },
  {
    "headword": "venture",
    "pos": "noun",
    "cefr": "C2",
    "definition": "a risky, audacious undertaking or commercial enterprise"
  },
  {
    "headword": "reconcile",
    "pos": "verb",
    "cefr": "C2",
    "definition": "to restore friendly relations between factions, or make consistent"
  },
  {
    "headword": "reconciliation",
    "pos": "noun",
    "cefr": "C2",
    "definition": "the restoration of friendly relations or harmony of ideas"
  },
  {
    "headword": "conciliatory",
    "pos": "adjective",
    "cefr": "C2",
    "definition": "intended to placate, pacify, or appease hostilities"
  },
  {
    "headword": "conciliation",
    "pos": "noun",
    "cefr": "C2",
    "definition": "the action of mediating or stopping factions from disputing"
  },
  {
    "headword": "preconception",
    "pos": "noun",
    "cefr": "C2",
    "definition": "an opinion formed beforehand without adequate evidence"
  },
  {
    "headword": "baroque",
    "pos": "adjective",
    "cefr": "C2",
    "definition": "highly ornate, extravagantly complex, and richly detailed"
  },
  {
    "headword": "virginal",
    "pos": "adjective",
    "cefr": "C2",
    "definition": "pure, untouched, uncorrupted, and pristine in origin"
  },
  {
    "headword": "spire",
    "pos": "noun",
    "cefr": "C2",
    "definition": "a tapering conical or pyramidal structure on the top of a tower"
  },
  {
    "headword": "elephantine",
    "pos": "adjective",
    "cefr": "C2",
    "definition": "resembling an elephant; clumsy, ponderous, and enormous"
  },
  {
    "headword": "agency",
    "pos": "noun",
    "cefr": "C2",
    "definition": "ability to act"
  },
  {
    "headword": "condone",
    "pos": "verb",
    "cefr": "C2",
    "definition": "to accept or permit behavior that is considered wrong"
  },
  {
    "headword": "commodity",
    "pos": "noun",
    "cefr": "C2",
    "definition": "a raw material, primary product, or useful commercial item"
  },
  {
    "headword": "commode",
    "pos": "noun",
    "cefr": "C2",
    "definition": "a movable washstand or enclosed toilet basin"
  },
  {
    "headword": "unobtrusive",
    "pos": "adjective",
    "cefr": "C2",
    "definition": "discreet, self-effacing, and attracting no undesirable attention"
  },
  {
    "headword": "unobtrusively",
    "pos": "adverb",
    "cefr": "C2",
    "definition": "in an unassuming, discreet, and modest manner"
  },
  {
    "headword": "unobtrusiveness",
    "pos": "noun",
    "cefr": "C2",
    "definition": "the attribute of blending discreetly into an environment"
  },
  {
    "headword": "compellingly",
    "pos": "adverb",
    "cefr": "C2",
    "definition": "in a powerfully captivating, persuasive, or irresistible way"
  },
  {
    "headword": "hauntingly",
    "pos": "adverb",
    "cefr": "C2",
    "definition": "in a poignant, evocative, and unforgettable memorable manner"
  },
  {
    "headword": "brim",
    "pos": "verb",
    "cefr": "C2",
    "definition": "the projecting rim of a hat, or the top edge of a vessel"
  },
  {
    "headword": "hazard",
    "pos": "verb",
    "cefr": "C2",
    "definition": "a danger, risk, or peril that threatens safety or success"
  },
  {
    "headword": "authenticity",
    "pos": "noun",
    "cefr": "C2",
    "definition": "the quality of being genuine, verifiable, and authentic"
  },
  {
    "headword": "scholarly",
    "pos": "adjective",
    "cefr": "C2",
    "definition": "involving or relating to serious academic study and research"
  },
  {
    "headword": "accessibility",
    "pos": "noun",
    "cefr": "C2",
    "definition": "the quality of being readily reached, understood, or used"
  },
  {
    "headword": "cognitive",
    "pos": "adjective",
    "cefr": "C2",
    "definition": "relating to the mental processes of perception and reasoning"
  },
  {
    "headword": "artifact",
    "pos": "noun",
    "cefr": "C2",
    "definition": "an object made by a human being of historical interest"
  },
  {
    "headword": "preservationist",
    "pos": "noun",
    "cefr": "C2",
    "definition": "a person who advocates for the preservation of heritage"
  },
  {
    "headword": "qualm",
    "pos": "noun",
    "cefr": "C2",
    "definition": "an uneasy feeling of doubt, worry, or moral compunction"
  },
  {
    "headword": "besiege",
    "pos": "verb",
    "cefr": "C2",
    "definition": "to crowd around oppressively, overwhelm, or lay siege to"
  },
  {
    "headword": "cloister",
    "pos": "noun",
    "cefr": "C2",
    "definition": "a covered monastic walkway, or secluded spiritual retreat"
  },
  {
    "headword": "cloistered",
    "pos": "adjective",
    "cefr": "C2",
    "definition": "sheltered, secluded, and insulated from the outside world"
  },
  {
    "headword": "annex",
    "pos": "noun",
    "cefr": "C2",
    "definition": "to append or add an extra part, especially a territory"
  },
  {
    "headword": "annex",
    "pos": "verb",
    "cefr": "C2",
    "definition": "to append or add an extra part, especially a territory"
  },
  {
    "headword": "resuscitate",
    "pos": "verb",
    "cefr": "C2",
    "definition": "to revive someone from unconsciousness or apparent death"
  },
  {
    "headword": "resuscitation",
    "pos": "noun",
    "cefr": "C2",
    "definition": "the action of reviving someone from unconsciousness or death"
  },
  {
    "headword": "ravish",
    "pos": "verb",
    "cefr": "C2",
    "definition": "to fill someone with intense delight; enrapture or charm"
  },
  {
    "headword": "fabricate",
    "pos": "verb",
    "cefr": "C2",
    "definition": "to invent or concoct deceitfully, or construct mechanically"
  },
  {
    "headword": "fabrication",
    "pos": "noun",
    "cefr": "C2",
    "definition": "an invented untruth or the process of manufacturing goods"
  },
  {
    "headword": "patchy",
    "pos": "adjective",
    "cefr": "C2",
    "definition": "existing or happening in small, isolated areas; irregular"
  },
  {
    "headword": "patchily",
    "pos": "adverb",
    "cefr": "C2",
    "definition": "in a fragmented, uneven, or inconsistent spatial manner"
  },
  {
    "headword": "resounding",
    "pos": "adjective",
    "cefr": "C2",
    "definition": "unmistakable, emphatic, and loud in impact or success"
  },
  {
    "headword": "resoundingly",
    "pos": "adverb",
    "cefr": "C2",
    "definition": "in an emphatic, unmistakable, and decisive manner"
  },
  {
    "headword": "resound",
    "pos": "verb",
    "cefr": "C2",
    "definition": "to fill a place with sound; be much talked about or acclaimed"
  },
  {
    "headword": "ordain",
    "pos": "verb",
    "cefr": "C2",
    "definition": "to order or decree officially, or invest with ministerial role"
  },
  {
    "headword": "inchoate",
    "pos": "adjective",
    "cefr": "C2",
    "definition": "just begun and so not fully formed or developed; rudimentary"
  },
  {
    "headword": "inchoately",
    "pos": "adverb",
    "cefr": "C2",
    "definition": "in an embryonic, imperfectly formed, or unorganized manner"
  },
  {
    "headword": "elated",
    "pos": "adjective",
    "cefr": "C2",
    "definition": "ecstatically happy, exhilarated, and jubilant in spirits"
  },
  {
    "headword": "elation",
    "pos": "noun",
    "cefr": "C2",
    "definition": "great happiness, exhilaration, and triumphant high spirits"
  },
  {
    "headword": "hysteria",
    "pos": "noun",
    "cefr": "C2",
    "definition": "exaggerated or uncontrollable emotion or excitement among people"
  },
  {
    "headword": "hysterical",
    "pos": "adjective",
    "cefr": "C2",
    "definition": "affected by uncontrolled, wild emotion or hilarious laughter"
  },
  {
    "headword": "hysterically",
    "pos": "adverb",
    "cefr": "C2",
    "definition": "with wild, uncontrolled emotion or uproarious amusement"
  },
  {
    "headword": "jarring",
    "pos": "adjective",
    "cefr": "C2",
    "definition": "causing a physical shock, or incongruous and discordant"
  },
  {
    "headword": "suffuse",
    "pos": "verb",
    "cefr": "C2",
    "definition": "to gradually spread through or over with a liquid, color, or light"
  },
  {
    "headword": "totter",
    "pos": "verb",
    "cefr": "C2",
    "definition": "to move in a feeble or unsteady way; be close to collapse"
  },
  {
    "headword": "pyre",
    "pos": "noun",
    "cefr": "C2",
    "definition": "a heap of combustible material, especially for burning a corpse"
  },
  {
    "headword": "contemptuous",
    "pos": "adjective",
    "cefr": "C2",
    "definition": "scornful, disrespectful, and disdainfully dismissive"
  },
  {
    "headword": "contemptuously",
    "pos": "adverb",
    "cefr": "C2",
    "definition": "with deep scorn, disdain, and disrespectful derision"
  },
  {
    "headword": "forlorn",
    "pos": "adjective",
    "cefr": "C2",
    "definition": "pitifully sad, abandoned, desolate, or unlikely to succeed"
  },
  {
    "headword": "forlornly",
    "pos": "adverb",
    "cefr": "C2",
    "definition": "in a sad, lonely, abandoned, or despairing manner"
  },
  {
    "headword": "rebuke",
    "pos": "verb",
    "cefr": "C2",
    "definition": "to express sharp disapproval or criticism of someone"
  },
  {
    "headword": "rebuke",
    "pos": "noun",
    "cefr": "C2",
    "definition": "to express sharp disapproval or criticism of someone"
  },
  {
    "headword": "abhorrent",
    "pos": "adjective",
    "cefr": "C2",
    "definition": "inspiring disgust and loathing; morally repugnant"
  },
  {
    "headword": "abhor",
    "pos": "verb",
    "cefr": "C2",
    "definition": "to regard with extreme repugnance, disgust, or hatred"
  },
  {
    "headword": "abhorrently",
    "pos": "adverb",
    "cefr": "C2",
    "definition": "in a morally repugnant or detestable manner"
  },
  {
    "headword": "aberration",
    "pos": "noun",
    "cefr": "C2",
    "definition": "a departure from what is normal, standard, or expected"
  },
  {
    "headword": "emulsify",
    "pos": "verb",
    "cefr": "C2",
    "definition": "to disperse one liquid into another immiscible liquid as emulsion"
  },
  {
    "headword": "emulsification",
    "pos": "noun",
    "cefr": "C2",
    "definition": "the process of dispersing two immiscible liquids together"
  },
  {
    "headword": "emulsifier",
    "pos": "noun",
    "cefr": "C2",
    "definition": "a substance that stabilizes an emulsion of oil and water"
  },
  {
    "headword": "additive",
    "pos": "noun",
    "cefr": "C2",
    "definition": "a substance added in small amounts to improve or preserve"
  },
  {
    "headword": "additive",
    "pos": "adjective",
    "cefr": "C2",
    "definition": "a substance added in small amounts to improve or preserve"
  },
  {
    "headword": "confection",
    "pos": "noun",
    "cefr": "C2",
    "definition": "an elaborate sweet dish, pastry, or frivolous creation"
  },
  {
    "headword": "proximal",
    "pos": "adjective",
    "cefr": "C2",
    "definition": "situated nearer to the center of the body or point of origin"
  },
  {
    "headword": "vandalize",
    "pos": "verb",
    "cefr": "C2",
    "definition": "to intentionally deface, mutilate, or ruin public property"
  },
  {
    "headword": "vandal",
    "pos": "noun",
    "cefr": "C2",
    "definition": "one who willfully wrecks, despoils, or defaces property"
  },
  {
    "headword": "feign",
    "pos": "verb",
    "cefr": "C2",
    "definition": "to pretend to be affected by an emotion, injury, or state"
  },
  {
    "headword": "paradoxical",
    "pos": "adjective",
    "cefr": "C2",
    "definition": "seemingly absurd or self-contradictory yet potentially true"
  },
  {
    "headword": "paradoxically",
    "pos": "adverb",
    "cefr": "C2",
    "definition": "in a seemingly contradictory or self-opposed yet true manner"
  },
  {
    "headword": "laryngitis",
    "pos": "noun",
    "cefr": "C2",
    "definition": "inflammation of the larynx, causing hoarseness or vocal loss"
  },
  {
    "headword": "stringent",
    "pos": "adjective",
    "cefr": "C2",
    "definition": "strict, precise, and exacting in statutory requirements"
  },
  {
    "headword": "astringent",
    "pos": "noun",
    "cefr": "C2",
    "definition": "sharply penetrating, severe, or harshly austere in tone"
  },
  {
    "headword": "stringently",
    "pos": "adverb",
    "cefr": "C2",
    "definition": "in a strict, rigorous, and demanding or exacting manner"
  },
  {
    "headword": "standing",
    "pos": "noun",
    "cefr": "C2",
    "definition": "position, status, or reputation in society; or permanence"
  },
  {
    "headword": "economize/economise",
    "pos": "verb",
    "cefr": "C2",
    "definition": "to spend less, reduce expenditure, or practice frugality"
  },
  {
    "headword": "breadwinner",
    "pos": "noun",
    "cefr": "C2",
    "definition": "a person who earns money to support a family household"
  },
  {
    "headword": "cosset",
    "pos": "verb",
    "cefr": "C2",
    "definition": "to pamper, indulge, or coddle with excessive tenderness"
  },
  {
    "headword": "counsel",
    "pos": "noun",
    "cefr": "C2",
    "definition": "to give professional advice, guidance, or legal advocacy"
  },
  {
    "headword": "misdemeanor/misdemanour",
    "pos": "noun",
    "cefr": "C2",
    "definition": "a minor wrongdoing or non-felonious offense"
  },
  {
    "headword": "aptitude",
    "pos": "noun",
    "cefr": "C2",
    "definition": "a natural ability, talent, or capacity to acquire a skill"
  },
  {
    "headword": "torrential",
    "pos": "adjective",
    "cefr": "C2",
    "definition": "falling rapidly and in copious, violent quantities; pouring"
  },
  {
    "headword": "banish",
    "pos": "verb",
    "cefr": "C2",
    "definition": "to send away from a country or place as official punishment"
  },
  {
    "headword": "banishment",
    "pos": "noun",
    "cefr": "C2",
    "definition": "the punishment of being sent away from a realm permanently"
  },
  {
    "headword": "knack",
    "pos": "noun",
    "cefr": "C2",
    "definition": "an acquired or natural skill, talent, or dexterity"
  },
  {
    "headword": "fruition",
    "pos": "noun",
    "cefr": "C2",
    "definition": "the realization or fulfillment of a plan, project, or desire"
  },
  {
    "headword": "tantalize/tantalise",
    "pos": "verb",
    "cefr": "C2",
    "definition": "to torment or tease someone with the sight or promise of unobtainable things"
  },
  {
    "headword": "tantalizingly/tantalisingly",
    "pos": "adverb",
    "cefr": "C2",
    "definition": "in a teasingly alluring, provocative, and tempting manner"
  },
  {
    "headword": "maelstrom",
    "pos": "noun",
    "cefr": "C2",
    "definition": "a powerful whirlpool, or state of confused, violent turmoil"
  },
  {
    "headword": "vortex",
    "pos": "noun",
    "cefr": "C2",
    "definition": "a whirling spiral mass drawing surrounding matter into its core"
  },
  {
    "headword": "depressive",
    "pos": "adjective",
    "cefr": "C2",
    "definition": "characterized by chronic sadness, gloom, and lack of energy"
  },
  {
    "headword": "shoal",
    "pos": "noun",
    "cefr": "C2",
    "definition": "a large number of fish swimming together, or shallow sandbank"
  },
  {
    "headword": "scroll",
    "pos": "noun",
    "cefr": "C2",
    "definition": "a roll of parchment or paper, or move digital text vertically"
  },
  {
    "headword": "collide",
    "pos": "verb",
    "cefr": "C2",
    "definition": "to hit with forceful impact, or clash in conflict"
  },
  {
    "headword": "collider",
    "pos": "noun",
    "cefr": "C2",
    "definition": "an accelerator in which particles collide at high energies"
  },
  {
    "headword": "edifice",
    "pos": "noun",
    "cefr": "C2",
    "definition": "a large, imposing building or an elaborate conceptual system"
  },
  {
    "headword": "thicket",
    "pos": "noun",
    "cefr": "C2",
    "definition": "a dense group of bushes, small trees, or tangled undergrowth"
  },
  {
    "headword": "leaven",
    "pos": "verb",
    "cefr": "C2",
    "definition": "a fermenting agent, or a pervasive transformative influence"
  },
  {
    "headword": "leavening",
    "pos": "noun",
    "cefr": "C2",
    "definition": "a substance that causes dough to rise, or transforming factor"
  },
  {
    "headword": "ethos",
    "pos": "noun",
    "cefr": "C2",
    "definition": "the characteristic spirit of a culture, era, or community"
  },
  {
    "headword": "exhibitionist",
    "pos": "noun",
    "cefr": "C2",
    "definition": "a person who behaves extravagantly to attract public attention"
  },
  {
    "headword": "interweave",
    "pos": "verb",
    "cefr": "C2",
    "definition": "to weave or blend together intricately into a fabric"
  },
  {
    "headword": "burgeoning",
    "pos": "adjective",
    "cefr": "C2",
    "definition": "beginning to grow or increase rapidly; flourishing"
  },
  {
    "headword": "indiscrete",
    "pos": "adjective",
    "cefr": "C2",
    "definition": "not divided into distinct parts; continuous and unbroken"
  },
  {
    "headword": "indiscretion",
    "pos": "noun",
    "cefr": "C2",
    "definition": "behavior or speech that displays lack of good judgment"
  },
  {
    "headword": "telescopic",
    "pos": "adjective",
    "cefr": "C2",
    "definition": "having the power to magnify distant objects, or collapsible"
  },
  {
    "headword": "telescopically",
    "pos": "adverb",
    "cefr": "C2",
    "definition": "by means of a telescope, or sliding within concentric parts"
  },
  {
    "headword": "amorphous",
    "pos": "adjective",
    "cefr": "C2",
    "definition": "without a clearly defined shape, form, or character"
  },
  {
    "headword": "amorphously",
    "pos": "adverb",
    "cefr": "C2",
    "definition": "in a manner lacking structured shape, clarity, or form"
  },
  {
    "headword": "hamper",
    "pos": "verb",
    "cefr": "C2",
    "definition": "to hinder, obstruct, or impede the movement or progress of"
  },
  {
    "headword": "proliferate",
    "pos": "verb",
    "cefr": "C2",
    "definition": "to increase rapidly in numbers; multiply and expand"
  },
  {
    "headword": "proliferation",
    "pos": "noun",
    "cefr": "C2",
    "definition": "rapid increase in numbers or amount of something"
  },
  {
    "headword": "deterrent",
    "pos": "noun",
    "cefr": "C2",
    "definition": "a thing that discourages or restrains an action through fear"
  },
  {
    "headword": "selectivity",
    "pos": "noun",
    "cefr": "C2",
    "definition": "the quality of carefully choosing what is best or suitable"
  },
  {
    "headword": "fractious",
    "pos": "adjective",
    "cefr": "C2",
    "definition": "irritable, quarrelsome, difficult to control, and unruly"
  },
  {
    "headword": "mystique",
    "pos": "noun",
    "cefr": "C2",
    "definition": "a fascinating aura of mystery, awe, and enigmatic power"
  },
  {
    "headword": "assimilate",
    "pos": "verb",
    "cefr": "C2",
    "definition": "to absorb and integrate information, people, or ideas"
  },
  {
    "headword": "assimilation",
    "pos": "noun",
    "cefr": "C2",
    "definition": "the process of integrating into a wider society or culture"
  },
  {
    "headword": "intersperse",
    "pos": "verb",
    "cefr": "C2",
    "definition": "to scatter among or between other things; diversify"
  },
  {
    "headword": "verbatim",
    "pos": "adjective",
    "cefr": "C2",
    "definition": "corresponding word for word exactly to the original utterance"
  },
  {
    "headword": "verbatim",
    "pos": "adverb",
    "cefr": "C2",
    "definition": "corresponding word for word exactly to the original utterance"
  },
  {
    "headword": "verily",
    "pos": "adverb",
    "cefr": "C2",
    "definition": "in unequivocal truth, genuine certainty, or absolute reality"
  },
  {
    "headword": "veritable",
    "pos": "adjective",
    "cefr": "C2",
    "definition": "genuine, authentic, and rightfully entitled to the title"
  },
  {
    "headword": "verisimilitude",
    "pos": "noun",
    "cefr": "C2",
    "definition": "the appearance or persuasive illusion of truth and reality"
  },
  {
    "headword": "artifice",
    "pos": "noun",
    "cefr": "C2",
    "definition": "clever or cunning devices used to trick, deceive, or create"
  },
  {
    "headword": "advantageous",
    "pos": "adjective",
    "cefr": "C2",
    "definition": "involving or creating favorable circumstances for success"
  },
  {
    "headword": "unfeasible",
    "pos": "adjective",
    "cefr": "C2",
    "definition": "impracticable, impossible to accomplish, or unviable"
  },
  {
    "headword": "unfeasibly",
    "pos": "adverb",
    "cefr": "C2",
    "definition": "to a degree that renders implementation completely impossible"
  },
  {
    "headword": "behest",
    "pos": "noun",
    "cefr": "C2",
    "definition": "a person's authoritative order, urgent command, or request"
  },
  {
    "headword": "virtuoso",
    "pos": "noun",
    "cefr": "C2",
    "definition": "an exceptionally gifted and masterful practitioner of an art"
  },
  {
    "headword": "virtuosity",
    "pos": "noun",
    "cefr": "C2",
    "definition": "dazzling, peerless technical and expressive mastery"
  },
  {
    "headword": "cascade",
    "pos": "verb",
    "cefr": "C2",
    "definition": "to pour downward rapidly and in copious, torrential volume"
  },
  {
    "headword": "cascade",
    "pos": "noun",
    "cefr": "C2",
    "definition": "to pour downward rapidly and in copious, torrential volume"
  },
  {
    "headword": "crippling",
    "pos": "adjective",
    "cefr": "C2",
    "definition": "causing severe, disabling harm, damage, or immobility"
  },
  {
    "headword": "nascent",
    "pos": "adjective",
    "cefr": "C2",
    "definition": "just coming into existence and beginning to display potential"
  },
  {
    "headword": "smattering",
    "pos": "noun",
    "cefr": "C2",
    "definition": "a slight, superficial knowledge or small scattered amount of"
  },
  {
    "headword": "corpus",
    "pos": "noun",
    "cefr": "C2",
    "definition": "a comprehensive collection of written texts for analysis"
  },
  {
    "headword": "wheeze",
    "pos": "verb",
    "cefr": "C2",
    "definition": "to breathe with a strained, whistling or rattling sound"
  },
  {
    "headword": "neophyte",
    "pos": "noun",
    "cefr": "C2",
    "definition": "a person who is new to a subject, skill, or belief"
  },
  {
    "headword": "coax",
    "pos": "verb",
    "cefr": "C2",
    "definition": "to persuade gradually or gently using flattery or patience"
  },
  {
    "headword": "formidably",
    "pos": "adverb",
    "cefr": "C2",
    "definition": "in a manner that inspires awe, fear, or profound respect"
  },
  {
    "headword": "formidable",
    "pos": "adjective",
    "cefr": "C2",
    "definition": "inspiring fear, apprehension, or respect through prowess"
  },
  {
    "headword": "squint",
    "pos": "verb",
    "cefr": "C2",
    "definition": "to look at someone or something with one or both eyes partly closed"
  },
  {
    "headword": "hoist",
    "pos": "verb",
    "cefr": "C2",
    "definition": "to raise or lift something into position using ropes or pulleys"
  },
  {
    "headword": "flatout",
    "pos": "adverb",
    "cefr": "C2",
    "definition": "at maximum speed, or without reservation and hesitation"
  },
  {
    "headword": "buzzard",
    "pos": "noun",
    "cefr": "C2",
    "definition": "a large carnivorous bird of prey, or a rapacious person"
  },
  {
    "headword": "bogus",
    "pos": "adjective",
    "cefr": "C2",
    "definition": "not genuine, spurious, counterfeit, or fraudulent"
  },
  {
    "headword": "derision",
    "pos": "noun",
    "cefr": "C2",
    "definition": "contemptuous ridicule, scoffing mockery, and scorn"
  },
  {
    "headword": "derisive",
    "pos": "adjective",
    "cefr": "C2",
    "definition": "expressing contempt or mockery; scornfully mocking"
  },
  {
    "headword": "derisively",
    "pos": "adverb",
    "cefr": "C2",
    "definition": "in an insolently mocking, scornful, or dismissive manner"
  },
  {
    "headword": "truism",
    "pos": "noun",
    "cefr": "C2",
    "definition": "a statement that is obviously true and says nothing interesting"
  },
  {
    "headword": "prurient",
    "pos": "adjective",
    "cefr": "C2",
    "definition": "having or encouraging an excessive interest in sexual matters"
  },
  {
    "headword": "wither",
    "pos": "verb",
    "cefr": "C2",
    "definition": "to shrivel, lose vitality, fade, or decline into desuetude"
  },
  {
    "headword": "prurience",
    "pos": "noun",
    "cefr": "C2",
    "definition": "an excessive or morbid interest in sexual matters"
  },
  {
    "headword": "tetchy",
    "pos": "adjective",
    "cefr": "C2",
    "definition": "bad-tempered, peevish, irritable, and easily irritated"
  },
  {
    "headword": "agile",
    "pos": "adjective",
    "cefr": "C2",
    "definition": "able to move quickly and easily, or mentally nimble"
  },
  {
    "headword": "agility",
    "pos": "noun",
    "cefr": "C2",
    "definition": "ability to move quickly and easily, or think adaptively"
  },
  {
    "headword": "aghast",
    "pos": "adjective",
    "cefr": "C2",
    "definition": "filled with sudden horror, shock, or dismay"
  },
  {
    "headword": "dwarf",
    "pos": "verb",
    "cefr": "C2",
    "definition": "to cause to seem small or insignificant by comparison"
  },
  {
    "headword": "dwarfism",
    "pos": "noun",
    "cefr": "C2",
    "definition": "a medical condition causing unusually short stature"
  },
  {
    "headword": "etch",
    "pos": "verb",
    "cefr": "C2",
    "definition": "to engrave by acid on metal, or carve indelibly into memory"
  },
  {
    "headword": "etching",
    "pos": "noun",
    "cefr": "C2",
    "definition": "a print produced by etching a design onto a metal plate"
  },
  {
    "headword": "rapture",
    "pos": "noun",
    "cefr": "C2",
    "definition": "a feeling of intense pleasure or enthusiasm; ecstatic joy"
  },
  {
    "headword": "rapturous",
    "pos": "adjective",
    "cefr": "C2",
    "definition": "characterized by, feeling, or expressing ecstatic joy"
  },
  {
    "headword": "rapturously",
    "pos": "adverb",
    "cefr": "C2",
    "definition": "with great, ecstatic enthusiasm and radiant delight"
  },
  {
    "headword": "ad lib",
    "pos": "adjective",
    "cefr": "C2",
    "definition": "to speak, sing, or act spontaneously without preparation"
  },
  {
    "headword": "ad-lib",
    "pos": "verb",
    "cefr": "C2",
    "definition": "spoken or performed without preparation or rehearsal"
  },
  {
    "headword": "improvisational",
    "pos": "adjective",
    "cefr": "C2",
    "definition": "created spontaneously without formal rehearsal or script"
  },
  {
    "headword": "acrobatics",
    "pos": "noun",
    "cefr": "C2",
    "definition": "spectacular gymnastic feats of agility, balance, and coordination"
  },
  {
    "headword": "acrobatically",
    "pos": "adverb",
    "cefr": "C2",
    "definition": "with remarkable agility, physical balance, and flexibility"
  },
  {
    "headword": "acrobatic",
    "pos": "adjective",
    "cefr": "C2",
    "definition": "performing or involving spectacular gymnastic feats"
  },
  {
    "headword": "arduous",
    "pos": "adjective",
    "cefr": "C2",
    "definition": "involving or requiring strenuous effort; difficult and tiring"
  },
  {
    "headword": "ardor/ardour",
    "pos": "noun",
    "cefr": "C2",
    "definition": "enthusiasm, intense passion, or fervent devotion"
  },
  {
    "headword": "arduously",
    "pos": "adverb",
    "cefr": "C2",
    "definition": "with great exertion, intense difficulty, and perseverance"
  },
  {
    "headword": "counterproductive",
    "pos": "adjective",
    "cefr": "C2",
    "definition": "having the opposite of the desired effect; self-defeating"
  },
  {
    "headword": "counterproductively",
    "pos": "adverb",
    "cefr": "C2",
    "definition": "in a manner that undermines intended goals and generates harm"
  },
  {
    "headword": "proverbial",
    "pos": "adjective",
    "cefr": "C2",
    "definition": "referred to in a proverb or idiom; well known and typical"
  },
  {
    "headword": "instantaneous",
    "pos": "adjective",
    "cefr": "C2",
    "definition": "occurring, done, or functioning instantly without delay"
  },
  {
    "headword": "instantaneously",
    "pos": "adverb",
    "cefr": "C2",
    "definition": "at once, immediately, and in a fleeting instant"
  },
  {
    "headword": "mull over",
    "pos": "verb",
    "cefr": "C2",
    "definition": "to ponder, contemplate, or think deeply and slowly about"
  },
  {
    "headword": "ruminate",
    "pos": "verb",
    "cefr": "C2",
    "definition": "to think deeply about something, or chew the cud"
  },
  {
    "headword": "rumination",
    "pos": "noun",
    "cefr": "C2",
    "definition": "a deep or considered thought about something; reflection"
  },
  {
    "headword": "ruminant",
    "pos": "adjective",
    "cefr": "C2",
    "definition": "a cud-chewing mammal, or contemplative and thoughtful"
  },
  {
    "headword": "ruminative",
    "pos": "adjective",
    "cefr": "C2",
    "definition": "expressing or manifesting deep, contemplative thought"
  },
  {
    "headword": "hover",
    "pos": "verb",
    "cefr": "C2",
    "definition": "to remain poised in one place in the air, or linger near"
  },
  {
    "headword": "armory/armoury",
    "pos": "noun",
    "cefr": "C2",
    "definition": "a repository where weapons, arms, and ammunition are stored"
  },
  {
    "headword": "apostle",
    "pos": "noun",
    "cefr": "C2",
    "definition": "a vigorous and pioneering advocate of a policy or cause"
  },
  {
    "headword": "blubber",
    "pos": "noun",
    "cefr": "C2",
    "definition": "the fat of sea mammals; or to weep noisily and childishly"
  },
  {
    "headword": "blubbery",
    "pos": "adjective",
    "cefr": "C2",
    "definition": "swollen, soft, or characterized by thick layers of fat"
  },
  {
    "headword": "merger",
    "pos": "noun",
    "cefr": "C2",
    "definition": "a combination of two things, especially commercial companies"
  },
  {
    "headword": "trifle",
    "pos": "noun",
    "cefr": "C2",
    "definition": "a thing of very little value or importance; dessert dish"
  },
  {
    "headword": "trifle",
    "pos": "verb",
    "cefr": "C2",
    "definition": "a thing of very little value or importance; dessert dish"
  },
  {
    "headword": "eke out",
    "pos": "verb",
    "cefr": "C2",
    "definition": "to make a living or supplement something with great difficulty"
  },
  {
    "headword": "paramount",
    "pos": "adjective",
    "cefr": "C2",
    "definition": "more important than anything else; supreme in rank"
  },
  {
    "headword": "squirm",
    "pos": "verb",
    "cefr": "C2",
    "definition": "to wriggle or twist the body from side to side; feel discomfort"
  },
  {
    "headword": "squirmy",
    "pos": "adjective",
    "cefr": "C2",
    "definition": "tending to squirm, wriggle, or fidget restlessly"
  },
  {
    "headword": "floe",
    "pos": "noun",
    "cefr": "C2",
    "definition": "a large sheet of floating ice detached from a larger mass"
  },
  {
    "headword": "embody",
    "pos": "verb",
    "cefr": "C2",
    "definition": "to be an expression of or give a tangible form to an idea"
  },
  {
    "headword": "embodiment",
    "pos": "noun",
    "cefr": "C2",
    "definition": "a tangible or visible form of an idea, quality, or feeling"
  },
  {
    "headword": "wistful",
    "pos": "adjective",
    "cefr": "C2",
    "definition": "permeated by melancholy, pensive yearning, and regret"
  },
  {
    "headword": "wistfully",
    "pos": "adverb",
    "cefr": "C2",
    "definition": "with poignant longing, melancholy nostalgia, or yearning"
  },
  {
    "headword": "mercantile",
    "pos": "adjective",
    "cefr": "C2",
    "definition": "relating to trade or commerce; commercial in orientation"
  },
  {
    "headword": "skew",
    "pos": "verb",
    "cefr": "C2",
    "definition": "to suddenly change direction, or bias and distort facts"
  },
  {
    "headword": "subsist",
    "pos": "verb",
    "cefr": "C2",
    "definition": "to maintain or support oneself, especially at a minimal level"
  },
  {
    "headword": "subsistence",
    "pos": "noun",
    "cefr": "C2",
    "definition": "the action or fact of maintaining or supporting oneself minimally"
  },
  {
    "headword": "subsidy",
    "pos": "noun",
    "cefr": "C2",
    "definition": "a sum of money granted by state to keep prices competitive"
  },
  {
    "headword": "subsidize",
    "pos": "verb",
    "cefr": "C2",
    "definition": "to support financially; pay part of the cost of producing"
  },
  {
    "headword": "legion",
    "pos": "noun",
    "cefr": "C2",
    "definition": "vast in number, or a major military unit of ancient Rome"
  },
  {
    "headword": "confrontational",
    "pos": "adjective",
    "cefr": "C2",
    "definition": "tending toward or inviting aggressive direct conflict"
  },
  {
    "headword": "confrontationally",
    "pos": "adverb",
    "cefr": "C2",
    "definition": "in an aggressively argumentative, belligerent manner"
  },
  {
    "headword": "bout",
    "pos": "noun",
    "cefr": "C2",
    "definition": "a short period of intense activity, or a sporting contest"
  },
  {
    "headword": "gout",
    "pos": "noun",
    "cefr": "C2",
    "definition": "a painful disease characterized by inflammation of the joints"
  },
  {
    "headword": "hinder",
    "pos": "verb",
    "cefr": "C2",
    "definition": "to create difficulties for, delay, or obstruct progress"
  },
  {
    "headword": "hindrance",
    "pos": "noun",
    "cefr": "C2",
    "definition": "a thing that provides resistance, delay, or obstruction"
  },
  {
    "headword": "myriad",
    "pos": "adjective",
    "cefr": "C2",
    "definition": "a countless or extremely great number of people or things"
  },
  {
    "headword": "histrionic",
    "pos": "adjective",
    "cefr": "C2",
    "definition": "overly theatrical, melodramatic, and exaggerated in style"
  },
  {
    "headword": "histrionically",
    "pos": "adverb",
    "cefr": "C2",
    "definition": "in an exaggeratedly melodramatic or theatrical manner"
  },
  {
    "headword": "marketability",
    "pos": "noun",
    "cefr": "C2",
    "definition": "the ease with which a product can be sold commercially"
  },
  {
    "headword": "promotable",
    "pos": "adjective",
    "cefr": "C2",
    "definition": "capable or worthy of being promoted to higher rank"
  },
  {
    "headword": "tacit",
    "pos": "adjective",
    "cefr": "C2",
    "definition": "understood or implied without being stated aloud; unspoken"
  },
  {
    "headword": "tacitly",
    "pos": "adverb",
    "cefr": "C2",
    "definition": "in a way that is understood or implied without being expressed"
  },
  {
    "headword": "taciturn",
    "pos": "adjective",
    "cefr": "C2",
    "definition": "reserved or uncommunicative in speech; saying very little"
  },
  {
    "headword": "taciturnity",
    "pos": "noun",
    "cefr": "C2",
    "definition": "the trait of being reserved and uncommunicative in conversation"
  },
  {
    "headword": "surreptitious",
    "pos": "adjective",
    "cefr": "C2",
    "definition": "kept secret, especially because it would not be approved of"
  },
  {
    "headword": "surreptitiously",
    "pos": "adverb",
    "cefr": "C2",
    "definition": "in a secretive, stealthy, and covert or furtive manner"
  },
  {
    "headword": "allegory",
    "pos": "noun",
    "cefr": "C2",
    "definition": "a story, poem, or picture revealing a hidden moral meaning"
  },
  {
    "headword": "allegorical",
    "pos": "adjective",
    "cefr": "C2",
    "definition": "containing an underlying spiritual or moral meaning"
  },
  {
    "headword": "seedy",
    "pos": "adjective",
    "cefr": "C2",
    "definition": "run down, untrustworthy"
  },
  {
    "headword": "punitive",
    "pos": "adjective",
    "cefr": "C2",
    "definition": "inflicting or intended as a formal judicial punishment"
  },
  {
    "headword": "punitively",
    "pos": "adverb",
    "cefr": "C2",
    "definition": "in a manner intended to punish, penalize, or discipline"
  },
  {
    "headword": "temper",
    "pos": "verb",
    "cefr": "C2",
    "definition": "to act as a neutralizing or counterbalancing force; disposition"
  },
  {
    "headword": "milieu",
    "pos": "noun",
    "cefr": "C2",
    "definition": "a person's social environment, cultural setting, or sphere"
  },
  {
    "headword": "self-aggrandizement/self-aggrandisement",
    "pos": "noun",
    "cefr": "C2",
    "definition": "the action of promoting oneself or increasing one's power"
  },
  {
    "headword": "unadulterated",
    "pos": "adjective",
    "cefr": "C2",
    "definition": "pure, uncorrupted, and completely free from extraneous matter"
  },
  {
    "headword": "adulterate",
    "pos": "verb",
    "cefr": "C2",
    "definition": "to render poorer in quality by adding inferior substances"
  },
  {
    "headword": "patronize/patronise",
    "pos": "verb",
    "cefr": "C2",
    "definition": "to treat with apparent kindness that betrays condescension"
  },
  {
    "headword": "patronizing/patronising",
    "pos": "adjective",
    "cefr": "C2",
    "definition": "apparently kind or helpful but betraying a feeling of superiority"
  },
  {
    "headword": "patronizingly/patronisingly",
    "pos": "adverb",
    "cefr": "C2",
    "definition": "in a condescending or haughtily superior manner"
  },
  {
    "headword": "cogent",
    "pos": "adjective",
    "cefr": "C2",
    "definition": "clear, logical, persuasive, and forcefully convincing"
  },
  {
    "headword": "cogently",
    "pos": "adverb",
    "cefr": "C2",
    "definition": "in a clear, logical, and persuasively compelling manner"
  },
  {
    "headword": "relegate",
    "pos": "verb",
    "cefr": "C2",
    "definition": "to consign or dismiss to an inferior rank or position"
  },
  {
    "headword": "incongruous",
    "pos": "adjective",
    "cefr": "C2",
    "definition": "not in harmony or keeping with the surroundings or aspects"
  },
  {
    "headword": "incongruously",
    "pos": "adverb",
    "cefr": "C2",
    "definition": "in an unsuitable, bizarrely mismatched, or discordant way"
  },
  {
    "headword": "incongruity",
    "pos": "noun",
    "cefr": "C2",
    "definition": "the state of being out of harmony or incompatible with surroundings"
  },
  {
    "headword": "deaden",
    "pos": "verb",
    "cefr": "C2",
    "definition": "to make less intense, numb, or deprive of physical sensation"
  },
  {
    "headword": "attuned",
    "pos": "adjective",
    "cefr": "C2",
    "definition": "receptive, aware, and responsive to surrounding nuances"
  },
  {
    "headword": "attributive",
    "pos": "adjective",
    "cefr": "C2",
    "definition": "expressing an attribute, characteristic, or syntactic quality"
  },
  {
    "headword": "ecotourism",
    "pos": "noun",
    "cefr": "C2",
    "definition": "tourism directed toward exotic natural environments to support conservation"
  },
  {
    "headword": "surge",
    "pos": "verb",
    "cefr": "C2",
    "definition": "a sudden powerful forward or upward movement or rapid increase"
  },
  {
    "headword": "surge",
    "pos": "noun",
    "cefr": "C2",
    "definition": "a sudden powerful forward or upward movement or rapid increase"
  },
  {
    "headword": "farcical",
    "pos": "adjective",
    "cefr": "C2",
    "definition": "relating to or resembling farce; ludicrous and absurd"
  },
  {
    "headword": "incise",
    "pos": "verb",
    "cefr": "C2",
    "definition": "to cut an engraving or mark neatly into a surface"
  },
  {
    "headword": "incipient",
    "pos": "adjective",
    "cefr": "C2",
    "definition": "in an initial stage; beginning to happen or develop"
  },
  {
    "headword": "echolocation",
    "pos": "noun",
    "cefr": "C2",
    "definition": "the location of objects by reflected sound pulses in animals"
  },
  {
    "headword": "echolocate",
    "pos": "verb",
    "cefr": "C2",
    "definition": "to navigate and detect objects by emitting acoustic pulses"
  },
  {
    "headword": "reverb",
    "pos": "noun",
    "cefr": "C2",
    "definition": "an electronically produced echo effect in acoustic sound"
  },
  {
    "headword": "reverberation",
    "pos": "noun",
    "cefr": "C2",
    "definition": "prolongation of a sound; or far-reaching continuing impact"
  },
  {
    "headword": "reverberate",
    "pos": "verb",
    "cefr": "C2",
    "definition": "to be repeated several times as an echo; resonate widely"
  },
  {
    "headword": "ingenuous",
    "pos": "adjective",
    "cefr": "C2",
    "definition": "innocent, unsuspecting, frank, and candid; naive"
  },
  {
    "headword": "ingenuously",
    "pos": "adverb",
    "cefr": "C2",
    "definition": "in an innocent, open, and candid or naive manner"
  },
  {
    "headword": "impresario",
    "pos": "noun",
    "cefr": "C2",
    "definition": "a person who organizes or finances concerts and operas"
  },
  {
    "headword": "elasticity",
    "pos": "noun",
    "cefr": "C2",
    "definition": "the ability to resume original shape, or economic flexibility"
  },
  {
    "headword": "synthesis",
    "pos": "noun",
    "cefr": "C2",
    "definition": "combination of components or ideas to form a connected whole"
  },
  {
    "headword": "salivary",
    "pos": "adjective",
    "cefr": "C2",
    "definition": "relating to saliva or the glands that secrete it"
  },
  {
    "headword": "hypnotherapy",
    "pos": "noun",
    "cefr": "C2",
    "definition": "the use of hypnosis as a therapeutic medical treatment"
  },
  {
    "headword": "wholly",
    "pos": "adverb",
    "cefr": "C2",
    "definition": "entirely, completely, and without reservation or remainder"
  },
  {
    "headword": "remorseful",
    "pos": "adjective",
    "cefr": "C2",
    "definition": "filled with deep regret, guilt, and sorrow for wrongdoing"
  },
  {
    "headword": "remonstrate",
    "pos": "verb",
    "cefr": "C2",
    "definition": "to make a forcefully reproachful protest or complaint"
  },
  {
    "headword": "remonstrance",
    "pos": "noun",
    "cefr": "C2",
    "definition": "a forcefully reproachful protest or formal objection"
  },
  {
    "headword": "unexcused",
    "pos": "adjective",
    "cefr": "C2",
    "definition": "unjustified, unauthorized, and lacking legitimate pardon"
  },
  {
    "headword": "unexceptionally",
    "pos": "adverb",
    "cefr": "C2",
    "definition": "in an ordinary, standard, and unremarkable manner"
  },
  {
    "headword": "unexceptional",
    "pos": "adjective",
    "cefr": "C2",
    "definition": "commonplace, pedestrian, and possessing no distinctive traits"
  },
  {
    "headword": "inexorable",
    "pos": "adjective",
    "cefr": "C2",
    "definition": "impossible to stop, prevent, or persuade; relentless"
  },
  {
    "headword": "inexorably",
    "pos": "adverb",
    "cefr": "C2",
    "definition": "in a relentless, unyielding, and unavoidable manner"
  },
  {
    "headword": "inexorability",
    "pos": "noun",
    "cefr": "C2",
    "definition": "the quality of being impossible to stop, prevent, or soften"
  },
  {
    "headword": "tranquilize/tranquilise",
    "pos": "verb",
    "cefr": "C2",
    "definition": "to make a person or animal calm or unconscious by drug"
  }
];
const VOCABULARY_BY_LEVEL = {
  C1: VOCABULARY_LEXICON.filter(v => v.cefr === 'C1'),
  C2: VOCABULARY_LEXICON.filter(v => v.cefr === 'C2')
};

/**
 * Automatically generate common English inflections and stems for headwords
 */
function generateWordStems(rawHeadword, pos = '') {
  if (!rawHeadword) return [];
  const stems = new Set();
  const baseWords = rawHeadword.split('/').map(w => w.trim().toLowerCase()).filter(Boolean);

  for (const base of baseWords) {
    stems.add(base);

    // If multi-word or phrasal (e.g., "mull over", "dole out", "glory in")
    const parts = base.split(/\s+/);
    if (parts.length > 1) {
      const [vHead, ...rest] = parts;
      const vStems = getBasicVerbStems(vHead);
      for (const vs of vStems) {
        stems.add(`${vs} ${rest.join(' ')}`);
        stems.add(vs);
      }
      continue;
    }

    const p = (pos || '').toLowerCase();
    if (p.includes('verb')) {
      getBasicVerbStems(base).forEach(s => stems.add(s));
    } else if (p.includes('noun')) {
      getBasicNounStems(base).forEach(s => stems.add(s));
    } else if (p.includes('adjective')) {
      getBasicAdjStems(base).forEach(s => stems.add(s));
    } else if (p.includes('adverb')) {
      stems.add(base);
    }
  }

  return Array.from(stems);
}

function getBasicVerbStems(verb) {
  const s = new Set([verb]);
  if (verb.endsWith('y') && !/[aeiou]y$/.test(verb)) {
    s.add(verb.slice(0, -1) + 'ies');
  } else if (/(s|sh|ch|x|z)$/.test(verb)) {
    s.add(verb + 'es');
  } else {
    s.add(verb + 's');
  }

  if (verb.endsWith('e')) {
    s.add(verb + 'd');
  } else if (verb.endsWith('y') && !/[aeiou]y$/.test(verb)) {
    s.add(verb.slice(0, -1) + 'ied');
  } else if (/[bcdfghjklmnpqrstvwxyz][aeiou][bdfgklmnprstvz]$/.test(verb) && verb.length <= 5) {
    const last = verb.slice(-1);
    s.add(verb + last + 'ed');
  } else {
    s.add(verb + 'ed');
  }

  if (verb.endsWith('ie')) {
    s.add(verb.slice(0, -2) + 'ying');
  } else if (verb.endsWith('ee')) {
    s.add(verb + 'ing');
  } else if (verb.endsWith('e')) {
    s.add(verb.slice(0, -1) + 'ing');
  } else if (/[bcdfghjklmnpqrstvwxyz][aeiou][bdfgklmnprstvz]$/.test(verb) && verb.length <= 5) {
    const last = verb.slice(-1);
    s.add(verb + last + 'ing');
  } else {
    s.add(verb + 'ing');
  }

  return Array.from(s);
}

function getBasicNounStems(noun) {
  const s = new Set([noun]);
  if (noun.endsWith('y') && !/[aeiou]y$/.test(noun)) {
    s.add(noun.slice(0, -1) + 'ies');
  } else if (/(s|sh|ch|x|z)$/.test(noun)) {
    s.add(noun + 'es');
  } else {
    s.add(noun + 's');
  }
  return Array.from(s);
}

function getBasicAdjStems(adj) {
  const s = new Set([adj]);
  if (adj.endsWith('y')) {
    s.add(adj.slice(0, -1) + 'ier');
    s.add(adj.slice(0, -1) + 'iest');
    s.add(adj.slice(0, -1) + 'ily');
  } else if (adj.endsWith('e')) {
    s.add(adj + 'r');
    s.add(adj + 'st');
    s.add(adj + 'ly');
  } else {
    s.add(adj + 'er');
    s.add(adj + 'est');
    s.add(adj + 'ly');
  }
  return Array.from(s);
}

function sampleUnique(arr, count) {
  const copy = [...arr];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy.slice(0, count);
}

/**
 * Select exactly 9 words confined by:
 * - 3 Verbs
 * - 2 Nouns
 * - 2 Adjectives
 * - 2 Adverbs
 * Independent of topics.js.
 */
function getRandomVocabularySet(level = 'C1') {
  const isC2 = (level || '').toUpperCase() === 'C2';
  const pool = (isC2 ? VOCABULARY_BY_LEVEL.C2 : VOCABULARY_BY_LEVEL.C1) || VOCABULARY_LEXICON;

  const verbs = pool.filter(w => (w.pos || '').toLowerCase() === 'verb');
  const nouns = pool.filter(w => (w.pos || '').toLowerCase() === 'noun');
  const adjs = pool.filter(w => (w.pos || '').toLowerCase() === 'adjective');
  const advs = pool.filter(w => (w.pos || '').toLowerCase() === 'adverb');

  const allVerbs = VOCABULARY_LEXICON.filter(w => (w.pos || '').toLowerCase() === 'verb');
  const allNouns = VOCABULARY_LEXICON.filter(w => (w.pos || '').toLowerCase() === 'noun');
  const allAdjs = VOCABULARY_LEXICON.filter(w => (w.pos || '').toLowerCase() === 'adjective');
  const allAdvs = VOCABULARY_LEXICON.filter(w => (w.pos || '').toLowerCase() === 'adverb');

  const selectedVerbs = sampleUnique(verbs.length >= 3 ? verbs : allVerbs, 3);
  const selectedNouns = sampleUnique(nouns.length >= 3 ? nouns : allNouns, 3);
  const selectedAdvs = sampleUnique(advs.length >= 2 ? advs : allAdvs, 2);
  const selectedAdjs = sampleUnique(adjs.length >= 2 ? adjs : allAdjs, 2);

  // Paired 5-row by 2-column layout:
  // Column 1 (Left):  Verb 1, Verb 2, Verb 3, Adverb 1, Adverb 2
  // Column 2 (Right): Noun 1, Noun 2, Noun 3, Adjective 1, Adjective 2
  const selected10 = [
    selectedVerbs[0], selectedNouns[0], // Row 1: Verb 1 | Noun 1
    selectedVerbs[1], selectedNouns[1], // Row 2: Verb 2 | Noun 2
    selectedVerbs[2], selectedNouns[2], // Row 3: Verb 3 | Noun 3
    selectedAdvs[0],  selectedAdjs[0],  // Row 4: Adverb 1 | Adjective 1
    selectedAdvs[1],  selectedAdjs[1]   // Row 5: Adverb 2 | Adjective 2
  ];

  return selected10.map(item => ({
    ...item,
    word: item.headword,
    stems: generateWordStems(item.headword, item.pos)
  }));
}



  // ==========================================
  // 2. TOPICS & CEFR DATA
  // ==========================================
/**
 * FluentEdge C1 (Advanced) & C2 (Proficiency) Topics
 * Tree-Structured Topic Architecture:
 * - Main Subjects (Randomized academic root domain)
 * - Sub-Themes (2 randomized universal subtopics available across all main subjects)
 * - Synthesizes dynamic titles, prompt directives, and CEFR metadata.
 */
const MAIN_SUBJECTS = [
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
const SUB_THEMES = [
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
function generateTopicFromTree(mainSubjectRef, subTheme1Ref, subTheme2Ref, targetLevel = 'C1', options = {}) {
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
function generateRandomTreeTopic(targetLevel = 'C1', excludeSubjectId = null) {
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
const TOPICS = [
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
const CEFR_DESCRIPTORS = {
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


  // ==========================================
  // 3. C1/C2 EVALUATOR ENGINE
  // ==========================================
/**
 * FluentEdge C1/C2 Text Assessment Engine
 * Evaluates written submissions according to CEFR C1 Advanced
 * and C2 Proficiency assessment scales:
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

// Informal expressions penalized in formal C1/C2 essays
const INFORMAL_PATTERNS = [
  /\b(gonna|wanna|kinda|sorta|dunno)\b/i,
  /\b(a lot of|lots of|tons of|heaps of)\b/i,
  /\b(kids|guys|cops|stuff|things)\b/i,
  /\b(can't|don't|won't|isn't|aren't|didn't|doesn't|haven't|hasn't|hadn't)\b/i // Contractions discouraged in formal essays
];

// Complex C1/C2 Syntactic Patterns (12 Comprehensive Structures)
const SYNTACTIC_PATTERNS = {
  negativeInversion: {
    name: "Negative / Limiting Inversion",
    description: "Seldom / Rarely / Under no circumstances / Not only... inversion",
    regex: /\b(seldom|rarely|scarcely|hardly|under no circumstances|on no account|in no way|at no time|little did|not only)\s+(did|does|do|had|have|has|is|was|were|can|could|should|will|would)\s+[a-z]+/i,
    weight: 1.2
  },
  cleftSentence: {
    name: "Cleft / Focus Structure",
    description: "What [clause] is/was/remains... or It is/was [focus] that/who...",
    regex: /\b(what\s+[a-z\s]{1,50}\s+(is|was|remains|proves)|it\s+(is|was)\s+[a-z\s]{1,60}\s+(that|who|which))\b/i,
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
    regex: /\b(were\s+[a-z\s]{2,20}\s+to\s+[a-z]+|had\s+[a-z\s]{2,20}\s+[a-z]+(ed|en|t)|should\s+[a-z\s]{2,20}\s+[a-z]+)\b/i,
    weight: 1.1
  },
  complexConcession: {
    name: "Advanced Concession / Contrast Marker",
    description: "Notwithstanding, Albeit, Inasmuch as, Be that as it may",
    regex: /\b(notwithstanding(\s+[a-z]+)?|albeit\s+|inasmuch\s+as|be\s+that\s+as\s+it\s+may|for\s+all\s+that|much\s+as\s+[a-z]+)\b/i,
    weight: 0.9
  },
  participleClause: {
    name: "Fronted Participle / Gerund Clause",
    description: "Having considered... / Confronted with... / Bearing in mind...",
    regex: /(^|[.!?]\s+)(having\s+[a-z]+(ed|en|t)|confronted\s+with|bearing\s+in\s+mind|given\s+the|judging\s+by)\s+[a-z\s,]+/i,
    weight: 0.8
  },
  mandativeSubjunctive: {
    name: "Mandative / Formulaic Subjunctive",
    description: "It is imperative / vital / crucial that [subject] be / remain...",
    regex: /\b(imperative|vital|crucial|essential|paramount|mandatory|critical|prerequisite|demands?|insists?|stipulates?)\s+that\s+[a-z\s]{2,25}\s+(be|remain|adopt|curtail|undergo|scrutinize|implement)\b/i,
    weight: 1.1
  },
  absoluteClause: {
    name: "Nominative Absolute Clause",
    description: "The deliberation having concluded... / All things considered...",
    regex: /(^|[.!?]\s+)(the\s+[a-z\s]{2,30}\s+(having\s+(been\s+)?[a-z]+|concluded|exhausted|settled)|all\s+(things|factors|arguments|options)\s+considered|circumstances\s+permitting)/i,
    weight: 1.2
  },
  mixedConditional: {
    name: "Mixed Unreal Conditional",
    description: "Had [past action]... [present result would be]...",
    regex: /\b(had\s+[a-z\s]{2,20}\s+[a-z]+(ed|en|t)|if\s+[a-z\s]{2,20}\s+had\s+[a-z]+(ed|en|t))\b.*?\b(would|could|might)\s+(not\s+)?(be|remain|appear|exist|now|currently)\b/i,
    weight: 1.1
  },
  prepositionalRelative: {
    name: "Prepositional / Formal Relative Clause",
    description: "the ramifications of which, by virtue of which, the extent to which",
    regex: /\b(by\s+virtue\s+of\s+which|in\s+light\s+of\s+which|the\s+[a-z]+\s+of\s+which|the\s+extent\s+to\s+which|against\s+which|upon\s+which|under\s+which|whereby)\b/i,
    weight: 0.9
  },
  correlativeComparative: {
    name: "Correlative / Proportional Comparative",
    description: "The more..., the greater... / The higher..., the more...",
    regex: /(^|[.!?]\s+)the\s+(more|greater|higher|less|fewer|deeper|further|[a-z]+er)\s+[a-z\s,]{3,35},\s+the\s+(more|greater|higher|less|fewer|deeper|further|[a-z]+er)\b/i,
    weight: 1.0
  },
  invertedConcession: {
    name: "Inverted Concession with Though / As",
    description: "Arduous though it may be... / Compelling as it seems...",
    regex: /\b([a-z]+)\s+(though|as)\s+(it|they|this|he|she|one)\s+(may|might|is|are|was|were|seems?|appears?)(\s+be)?\s*,/i,
    weight: 1.0
  }
};

/**
 * Check if a target word or any of its stems/variants exists in the text
 */
function checkTargetWordUsage(wordObj, text) {
  const normalizedText = text.toLowerCase();
  const rawWord = wordObj.headword || wordObj.word || "";
  const stems = wordObj.stems && wordObj.stems.length > 0 ? wordObj.stems : [rawWord];
  
  for (const stem of stems) {
    if (!stem) continue;
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
function analyzeQuickMetrics(text, targetVocabulary = [], targetLevel = 'C1') {
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
    const word = v.headword || v.word;
    return {
      word: word,
      headword: word,
      pos: v.pos || '',
      cefr: v.cefr || '',
      used: res.used,
      matchedStem: res.matchedStem,
      collocation: v.collocation || '',
      ipa: v.ipa || ''
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

  const isC2 = targetLevel === 'C2';
  const targetMin = isC2 ? 280 : 220;
  const targetMax = isC2 ? 320 : 260;
  const optimalMax = isC2 ? 340 : 280;
  const minRequiredStructures = isC2 ? 6 : 4;
  const structuresMet = detectedGrammar.length >= minRequiredStructures;

  return {
    wordCount,
    paragraphCount: paragraphs.length,
    targetWordsUsed,
    targetWordsTotal,
    vocabStatus,
    detectedGrammar,
    informalFindings,
    targetLevel,
    targetMin,
    targetMax,
    optimalMax,
    minRequiredStructures,
    structuresMet
  };
}

/**
 * Full FluentEdge C1/C2 Assessment Algorithm
 */
function evaluateEssay(text, currentTopic, targetLevel = 'C1', activeVocabulary = null) {
  const words = text.trim() ? text.trim().split(/\s+/) : [];
  const wordCount = words.length;
  const isC2 = targetLevel === 'C2';

  const paragraphs = text
    .split(/\n\s*\n/)
    .map(p => p.trim())
    .filter(p => p.length > 0);

  const sentences = text
    .split(/[.!?]+/)
    .map(s => s.trim())
    .filter(s => s.length > 0);

  // 1. Target Vocabulary Analysis
  const targetVocabulary = (activeVocabulary && activeVocabulary.length > 0)
    ? activeVocabulary
    : ((currentTopic && currentTopic.targetVocabulary) || []);
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

  // Average Sentence Length (C1/C2 target: 18 - 28 words per sentence)
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
  // SCORING ACCORDING TO CEFR SCALES (0-5)
  // ==========================================

  // Scale 1: CONTENT
  let contentScore = 5.0;
  const feedbackContent = [];

  if (isC2) {
    // C2 Target: 280-320 words
    if (wordCount < 240) {
      contentScore -= 2.0;
      feedbackContent.push(`Essay length (${wordCount} words) is critically below C2 Proficiency requirement (280-320 words). Complex discourse demands thorough multi-angle elaboration.`);
    } else if (wordCount < 280) {
      contentScore -= 0.8;
      feedbackContent.push(`Below the 280-word C2 threshold (${wordCount} words). Synthesize both prompt dimensions with deeper analytical nuance.`);
    } else if (wordCount > 380) {
      contentScore -= 0.5;
      feedbackContent.push(`Essay is overly verbose (${wordCount} words). C2 examiners penalize circumlocution and lack of concision.`);
    } else {
      feedbackContent.push(`Optimal word length (${wordCount} words) adhering strictly to C2 Proficiency standards.`);
    }

    if (paragraphs.length < 4) {
      contentScore -= 0.8;
      feedbackContent.push("C2 discursive essays require a sophisticated 4-stage architecture (Introduction, Opposing Arguments, Synthesis/Evaluation, and Conclusion).");
    } else {
      feedbackContent.push(`Flawless essay architecture with ${paragraphs.length} balanced paragraphs.`);
    }
  } else {
    // C1 Target: 220-260 words
    if (wordCount < 180) {
      contentScore -= 2.0;
      feedbackContent.push(`Essay length (${wordCount} words) is critically below C1 recommendation (220-260 words). Insufficient development of arguments.`);
    } else if (wordCount < 220) {
      contentScore -= 0.8;
      feedbackContent.push(`Slightly under the 220-word threshold (${wordCount} words). Expand on your analytical justifications.`);
    } else if (wordCount > 340) {
      contentScore -= 0.5;
      feedbackContent.push(`Essay is verbose (${wordCount} words). Advanced academic writing standards penalize lack of conciseness and redundancy.`);
    } else {
      feedbackContent.push(`Optimal word length (${wordCount} words) adhering strictly to C1 guidelines.`);
    }

    if (paragraphs.length < 3) {
      contentScore -= 1.0;
      feedbackContent.push("Needs clear separation into Introduction, Body Arguments (covering both prompt points), and Conclusion.");
    } else {
      feedbackContent.push(`Strong essay architecture with ${paragraphs.length} structured paragraphs.`);
    }
  }
  contentScore = Math.max(1, Math.min(5, contentScore));

  // Scale 2: COMMUNICATIVE ACHIEVEMENT (Academic tone, register, objective stance)
  let commScore = 4.0;
  const feedbackComm = [];
  if (informalMatches.length > 0) {
    const penalty = Math.min(2.5, informalMatches.length * (isC2 ? 0.7 : 0.5));
    commScore -= penalty;
    feedbackComm.push(`Detected informal colloquialisms or contractions: "${informalMatches.slice(0, 4).join(', ')}". In formal ${isC2 ? 'C2 Proficiency' : 'C1 Advanced'} essays, eliminate contractions ("don't", "can't") and sustain an objective scholarly register.`);
  } else {
    commScore += 0.5;
    feedbackComm.push("Flawless formal academic register maintained with no conversational contractions or colloquialisms.");
  }

  if (identifiedStructures.some(s => s.id === 'passiveReporting' || s.id === 'cleftSentence')) {
    commScore += 0.5;
    feedbackComm.push("Masterful use of objective hedging and cleft framing typical of Band 5 essays.");
  }
  commScore = Math.max(1, Math.min(5, commScore));

  // Scale 3: ORGANISATION (Linking devices, cohesion, discourse markers)
  let orgScore = 3.5;
  const feedbackOrg = [];
  if (paragraphs.length >= 4) orgScore += 0.5;
  
  const minMarkers = isC2 ? 5 : 4;
  if (academicMarkerCount >= minMarkers) {
    orgScore += 0.8;
    feedbackOrg.push(`Exceptional deployment of cohesive devices (${academicMarkerCount} advanced discourse markers detected).`);
  } else if (academicMarkerCount >= 2) {
    orgScore += 0.3;
    feedbackOrg.push(`Adequate transitional markers (${academicMarkerCount} detected), but ${isC2 ? 'C2 Proficiency' : 'C1'} requires more nuanced logical connectors (e.g., 'notwithstanding', 'inasmuch as', 'concomitantly').`);
  } else {
    orgScore -= 0.8;
    feedbackOrg.push("Discourse cohesion is underdeveloped. Integrate formal academic cohesive markers to link paragraphs smoothly.");
  }
  orgScore = Math.max(1, Math.min(5, orgScore));

  // Scale 4: LANGUAGE (Lexical range, target vocabulary, complex syntax)
  let langScore = 2.5;
  const feedbackLang = [];

  // Target vocabulary weight (calibrated for 9-word challenge: 3 verbs, 2 nouns, 2 adj, 2 adv)
  const targetRequired = isC2 ? 6 : 4;

  if (targetVocabulary.length === 0) {
    langScore += 0.8;
  } else if (usedTargetCount >= targetRequired) {
    langScore += 1.5;
    feedbackLang.push(`Outstanding command of required ${targetLevel} target vocabulary (${usedTargetCount}/${targetVocabulary.length} words seamlessly integrated).`);
  } else if (usedTargetCount >= (isC2 ? 4 : 2)) {
    langScore += 0.8;
    feedbackLang.push(`Good integration of target vocabulary (${usedTargetCount}/${targetVocabulary.length} words used), but ${isC2 ? 'C2 mode demands at least 6 items' : 'aim for at least 4 to secure top band'}.`);
  } else {
    langScore -= 0.5;
    feedbackLang.push(`Target vocabulary underutilized: only ${usedTargetCount}/${targetVocabulary.length} required words incorporated. ${targetLevel} demands high lexical precision.`);
  }

  // Syntactic complexity
  const minRequiredStructs = isC2 ? 6 : 4;
  const structsGateMetC2 = identifiedStructures.length >= 6;
  const structsGateMetC1 = identifiedStructures.length >= 4;
  const structsGateMet = isC2 ? structsGateMetC2 : structsGateMetC1;

  if (identifiedStructures.length >= minRequiredStructs) {
    langScore += 1.0;
    feedbackLang.push(`High grammatical ambition demonstrated: successfully incorporated ${identifiedStructures.length} advanced syntactic structures (${identifiedStructures.map(s => s.name).join(', ')}). Fulfills ${targetLevel} requirement (minimum ${minRequiredStructs} required).`);
  } else if (identifiedStructures.length >= 2) {
    langScore += 0.4;
    feedbackLang.push(`Adequate syntactic variety (${identifiedStructures.length}/${minRequiredStructs} structures used: ${identifiedStructures.map(s => s.name).join(', ')}). ${targetLevel} standard requires at least ${minRequiredStructs} distinct complex structures.`);
  } else {
    langScore -= 0.6;
    feedbackLang.push(`Syntax relies on basic structures (${identifiedStructures.length}/${minRequiredStructs} detected). ${targetLevel} requires at least ${minRequiredStructs} complex patterns (inversions, clefts, or participle clauses).`);
  }

  // Lexical diversity
  if (typeTokenRatio > 0.55 && wordCount > 150) {
    langScore += 0.3;
  }
  langScore = Math.max(1, Math.min(5, langScore));

  // Total CEFR Score out of 20 (standard 4 scales * 5)
  const rawTotal = contentScore + commScore + orgScore + langScore; // max 20
  const normalizedPercentage = Math.round((rawTotal / 20) * 100);

  // CEFR Determination
  let cefrResult;
  let meetsC1 = false;
  let meetsC2 = false;

  const targetThresholdMetC2 = targetVocabulary.length > 0
    ? (usedTargetCount >= Math.min(5, Math.ceil(targetVocabulary.length * 0.5)))
    : true;
  const targetThresholdMetC1 = targetVocabulary.length > 0
    ? (usedTargetCount >= Math.min(4, Math.ceil(targetVocabulary.length * 0.4)))
    : true;

  if (normalizedPercentage >= CEFR_DESCRIPTORS.C2.minScore && targetThresholdMetC2 && structsGateMetC2) {
    cefrResult = CEFR_DESCRIPTORS.C2;
    meetsC1 = true;
    meetsC2 = true;
  } else if (normalizedPercentage >= CEFR_DESCRIPTORS.C1.minScore && targetThresholdMetC1 && structsGateMetC1) {
    cefrResult = CEFR_DESCRIPTORS.C1;
    meetsC1 = true;
    meetsC2 = false;
  } else if (normalizedPercentage >= CEFR_DESCRIPTORS.B2.minScore) {
    cefrResult = CEFR_DESCRIPTORS.B2;
    meetsC1 = false;
    meetsC2 = false;
  } else {
    cefrResult = CEFR_DESCRIPTORS.B1;
    meetsC1 = false;
    meetsC2 = false;
  }

  // Determine gatekeeper success based on active targetLevel
  const targetGateMet = targetVocabulary.length > 0
    ? (usedTargetCount >= Math.min(6, Math.ceil(targetVocabulary.length * 0.6)))
    : true;

  const meetsThreshold = isC2
    ? (meetsC2 && normalizedPercentage >= 85 && targetGateMet && structsGateMetC2 && wordCount >= 260)
    : (meetsC1 && normalizedPercentage >= 75 && structsGateMetC1);

  return {
    rawTotal: Number(rawTotal.toFixed(1)),
    percentage: normalizedPercentage,
    cefr: cefrResult,
    targetLevel,
    meetsThreshold,
    meetsC1,
    meetsC2,
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

/**
 * Generates an optimized prompt for external LLMs (ChatGPT, Claude, Gemini, etc.)
 * to craft an essay adhering to FluentEdge's C1/C2 standards and incorporating
 * all compulsory target lexis items.
 */
function generateAiEssayPrompt(topic, targetVocabulary = [], targetLevel = 'C1') {
  const isC2 = targetLevel === 'C2';
  const levelStandard = isC2 ? 'CEFR C2 Proficiency (Mastery)' : 'CEFR C1 Advanced';
  const minWords = isC2 ? 280 : 220;
  const maxWords = isC2 ? 320 : 260;
  const topicTitle = topic ? topic.title : 'Contemporary Issues & Ethics';
  const topicCategory = topic ? topic.category : 'General Academic';
  const topicType = topic ? topic.type : (isC2 ? 'C2 Proficiency Discursive Essay' : 'C1/C2 Academic Essay');
  const topicDirective = (topic && topic.directive) ? `\n- Prompt Directive: "${topic.directive}"` : '';
  const treeDetails = (topic && topic.mainSubject)
    ? `\n- Root Subject: ${topic.mainSubject.name}\n- Sub-Themes: ${topic.subTheme1?.name || ''} & ${topic.subTheme2?.name || ''}`
    : '';

  const vocabItems = targetVocabulary.map((v, i) => {
    const word = v.headword || v.word || '';
    const pos = v.pos ? `[${v.pos}]` : '';
    const def = v.definition ? ` — ${v.definition}` : '';
    const colloc = v.collocation ? ` (collocation: "${v.collocation}")` : '';
    return `${i + 1}. ${word} ${pos}${def}${colloc}`;
  }).join('\n');

  return `Write an academic essay at the ${levelStandard} standard in response to the following topic:

ESSAY TOPIC:
- Title: "${topicTitle}"
- Category: ${topicCategory}
- Genre: ${topicType}${topicDirective}${treeDetails}

MANDATORY CRITERIA & CONSTRAINTS:

1. STRICT LENGTH TARGET:
   - The essay MUST be strictly between ${minWords} and ${maxWords} words.
   - Do not write fewer than ${minWords} words, and do not exceed ${maxWords} words.

2. COMPULSORY TARGET LEXIS (10/10 REQUIRED):
   Incorporate ALL 10 of the following target vocabulary words into the essay. Each word must be used accurately in its exact form or a natural grammatical inflection (e.g., conjugated verb, plural noun, participial form):
${vocabItems}

3. SOPHISTICATED SYNTACTIC STRUCTURES:
   Include at least ${isC2 ? 6 : 4} of the following C1/C2 grammatical structures to satisfy the obligatory ${targetLevel} syntactic complexity benchmark (minimum ${isC2 ? 6 : 4} required):
   - Negative / Limiting Inversion (e.g. "Seldom has...", "Under no circumstances should...", "Not only is...")
   - Cleft / Focus Structure (e.g. "What remains of paramount concern is...", "It is this systemic flaw that...")
   - Passive Reporting Clause (e.g. "It is widely contended that...", "It is commonly maintained that...")
   - Inverted Conditional without 'If' (e.g. "Were authorities to intervene...", "Had society recognized...")
   - Advanced Concession / Contrast Marker (e.g. "Notwithstanding the...", "Albeit challenging,...", "Inasmuch as...")
   - Fronted Participle Clause (e.g. "Having considered the ramifications,...", "Confronted with mounting evidence,...")
   - Mandative Subjunctive (e.g. "It is imperative that authorities be transparent...", "vital that society remain vigilant...")
   - Nominative Absolute Clause (e.g. "The conference having concluded, delegates departed...", "All things considered,...")
   - Mixed Unreal Conditional (e.g. "Had regulators intervened a decade ago, contemporary democracy would not now be vulnerable...")
   - Complex Prepositional / Formal Relative (e.g. "the ramifications of which...", "by virtue of which...", "the extent to which...")
   - Correlative / Proportional Comparative (e.g. "The more interconnected platforms become, the greater the potential risk...")
   - Inverted Concession with Though / As (e.g. "Arduous though it may be,...", "Compelling as the argument seems,...")

4. FORMAL REGISTER & TONE:
   - Maintain a formal, analytical academic register.
   - DO NOT use informal contractions (write "do not", "cannot", "will not", "it is" — avoid "don't", "can't", "won't", "it's").
   - DO NOT use colloquialisms or informal phrasing (avoid "a lot of", "kids", "things", "stuff").

5. PARAGRAPH STRUCTURE:
   - Structure the essay into 3 to 4 distinct, cohesive paragraphs: an introduction with a clear thesis, 2 balanced and critical analytical body paragraphs, and a conclusive synthesis.

OUTPUT INSTRUCTION:
Output ONLY the raw essay text. Do not include a title, heading, introduction, word count notes, commentary, or markdown quotes. Begin immediately with the first sentence of the essay.`;
}



  // ==========================================
  // 4. SPEECH & PRONUNCIATION ENGINE
  // ==========================================
/**
 * FluentEdge Speaking & Pronunciation Evaluation Engine
 * Uses Web Speech Recognition for live spoken analysis,
 * Web Speech Synthesis for native British English model pronunciation,
 * and Web Audio API for real-time waveform visualization.
 */
class SpeechEngine {
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
    this.recognition.lang = 'en-GB'; // British English standard

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
      if (event.error === 'no-speech') {
        // Natural pause in speech while reading; do not terminate session
        return;
      }
      if (event.error === 'not-allowed') {
        if (this.onError) this.onError("Microphone permission denied. Please allow microphone access in your browser settings.");
      } else if (event.error === 'network') {
        if (this.onError) this.onError("Speech recognition network error. Note: Brave and Firefox block cloud speech recognition; please use Google Chrome or Microsoft Edge.");
      } else if (event.error === 'audio-capture') {
        if (this.onError) this.onError("Microphone capture failed. Ensure your microphone is connected and not locked by another application.");
      }
      this.stopListening();
    };

    this.recognition.onend = () => {
      // If recognition paused automatically (e.g., brief silence) while session is active, restart it
      if (this.isListening) {
        try {
          this.recognition.start();
          return;
        } catch (e) {
          // If restart fails, proceed to clean teardown
        }
      }
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

    if (this.isListening) return;

    try {
      if (!this.recognition) {
        this.initRecognition();
      }
      this.recognition.start();
      if (canvasElement) {
        this.startAudioVisualizer(canvasElement).catch(err => {
          console.warn("Visualizer optional mic stream error:", err);
        });
      }
    } catch (err) {
      if (err.name !== 'InvalidStateError') {
        console.error("Failed to start speech recognition:", err);
        if (this.onError) this.onError("Could not start microphone: " + err.message);
      }
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
   * Final C1/C2 Speaking Assessment based on recorded performance
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

    // CEFR Speaking Scales (0-5)
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

    // 2. Fluency & Discourse Speed (C1/C2 Target: 130 - 160 WPM)
    let fluencyScore = 5.0;
    const fluencyFeedback = [];
    if (wpm >= 130 && wpm <= 165) {
      fluencyScore = 5.0;
      fluencyFeedback.push(`Optimal native-speed pacing at ${wpm} WPM with confident, uninterrupted delivery.`);
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
      speakingBand = "Band 4 (Estimated C1 - Advanced Level)";
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
    utterance.rate = rate; // Fluent standard pacing
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

      if (!this.audioContext || this.audioContext.state === 'closed') {
        this.audioContext = new AudioCtx();
      } else if (this.audioContext.state === 'suspended') {
        await this.audioContext.resume();
      }

      // Reuse active media stream if already acquired in this page session
      if (this.mediaStream && this.mediaStream.active) {
        this.mediaStream.getAudioTracks().forEach(track => { track.enabled = true; });
      } else {
        this.mediaStream = await navigator.mediaDevices.getUserMedia({ audio: true, video: false });
        const source = this.audioContext.createMediaStreamSource(this.mediaStream);
        this.analyser = this.audioContext.createAnalyser();
        this.analyser.fftSize = 256;
        source.connect(this.analyser);
      }

      const ctx = canvas.getContext('2d');
      const bufferLength = this.analyser.frequencyBinCount;
      const dataArray = new Uint8Array(bufferLength);

      if (this.visualizerAnimationId) {
        cancelAnimationFrame(this.visualizerAnimationId);
      }

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

          // Elegant Gold-to-Cyan gradient
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
    // Mute tracks while idle so the indicator goes off without destroying the permission handle
    if (this.mediaStream && this.mediaStream.active) {
      this.mediaStream.getAudioTracks().forEach(track => {
        track.enabled = false;
      });
    }
    if (this.audioContext && this.audioContext.state === 'running') {
      try {
        this.audioContext.suspend();
      } catch (e) {
        // ignore
      }
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
  // 5. MAIN APP LOGIC
  // ==========================================
/**
 * FluentEdge: C1–C2 English Training - Main Application Controller
 */
class FluentEdgeApp {
  constructor() {
    this.targetLevel = 'C1';
    try {
      this.targetLevel = localStorage.getItem('fluentedge_target_level') || 'C1';
    } catch (e) {}
    this.currentTopic = generateRandomTreeTopic(this.targetLevel);

    this.activeVocabulary = [];
    this.speechEngine = new SpeechEngine();
    this.lastEvaluationResult = null;
    this.meetsC1Threshold = false;
    this.currentStage = 1;

    this.dom = {};
    this.init();
  }

  init() {
    this.cacheDomElements();
    this.bindEvents();
    this.bindHotkeys();
    this.setupSpeechEngineCallbacks();
    this.setTargetLevel(this.targetLevel, true);
    this.loadTopic(this.currentTopic);
    this.renderHistory();
    this.updateEducationalRequirementsCard();
    this.setStage(1);
  }

  cacheDomElements() {
    this.dom = {
      // Header
      historyDrawerBtn: document.getElementById('historyDrawerBtn'),
      historyDrawer: document.getElementById('historyDrawer'),
      closeHistoryBtn: document.getElementById('closeHistoryBtn'),
      clearHistoryBtn: document.getElementById('clearHistoryBtn'),
      historyList: document.getElementById('historyList'),
      brandCrest: document.getElementById('brandCrest'),
      modeC1Btn: document.getElementById('modeC1Btn'),
      modeC2Btn: document.getElementById('modeC2Btn'),

      // Stepper
      stepIndicator1: document.getElementById('stepIndicator1'),
      stepIndicator2: document.getElementById('stepIndicator2'),
      stepIndicator3: document.getElementById('stepIndicator3'),
      step3LockIcon: document.getElementById('step3LockIcon'),
      step1LexisHint: document.getElementById('step1LexisHint'),
      step2WordCountHint: document.getElementById('step2WordCountHint'),
      targetWordCountHint: document.getElementById('targetWordCountHint'),

      // Workspaces & Stages
      mainWritingWorkspace: document.getElementById('mainWritingWorkspace'),
      stage1Panel: document.getElementById('stage1Panel'),
      stage2Panel: document.getElementById('stage2Panel'),
      speakingStudio: document.getElementById('speakingStudio'),
      proceedToStage2Btn: document.getElementById('proceedToStage2Btn'),
      backToStage1Btn: document.getElementById('backToStage1Btn'),
      writingTopicPill: document.getElementById('writingTopicPill'),
      stage2VocabDock: document.getElementById('stage2LexisDock'),
      stage2VocabChips: document.getElementById('stage2VocabChips'),
      stage2VocabCountDisplay: document.getElementById('stage2VocabCountDisplay'),

      // Educational Requirements Card
      stage1ReqsCard: document.getElementById('stage1ReqsCard'),
      reqsLevelIndicator: document.getElementById('reqsLevelIndicator'),
      reqsLevelTagline: document.getElementById('reqsLevelTagline'),
      reqsHeaderCallout: document.getElementById('reqsHeaderCallout'),
      reqsWordMetric: document.getElementById('reqsWordMetric'),
      reqsWordDesc: document.getElementById('reqsWordDesc'),
      reqsLexisMetric: document.getElementById('reqsLexisMetric'),
      reqsLexisDesc: document.getElementById('reqsLexisDesc'),
      reqsSyntaxMetric: document.getElementById('reqsSyntaxMetric'),
      reqsSyntaxDesc: document.getElementById('reqsSyntaxDesc'),
      reqsPassMetric: document.getElementById('reqsPassMetric'),
      reqsPassDesc: document.getElementById('reqsPassDesc'),

      // Topic Card & Tree Architecture
      rerollTopicBtn: document.getElementById('rerollTopicBtn'),
      topicCategory: document.getElementById('topicCategory'),
      topicType: document.getElementById('topicType'),
      topicTime: document.getElementById('topicTime'),
      topicTitle: document.getElementById('topicTitle'),
      topicMainSubjectText: document.getElementById('topicMainSubjectText'),
      topicSubTheme1Text: document.getElementById('topicSubTheme1Text'),
      topicSubTheme2Text: document.getElementById('topicSubTheme2Text'),
      topicDirective: document.getElementById('topicDirective'),
      vocabGrid: document.getElementById('vocabGrid'),
      vocabUsedCounter: document.getElementById('vocabUsedCounter'),
      rerollVocabBtn: document.getElementById('rerollVocabBtn'),

      // Writing Studio
      essayInput: document.getElementById('essayInput'),
      liveWordCount: document.getElementById('liveWordCount'),
      liveParaCount: document.getElementById('liveParaCount'),
      lengthGuidanceBadge: document.getElementById('lengthGuidanceBadge'),
      radarBadgesRow: document.getElementById('radarBadgesRow'),
      radarCountDisplay: document.getElementById('radarCountDisplay'),
      evaluateEssayBtn: document.getElementById('evaluateEssayBtn'),
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

      // Front-and-Center Requirement Alert Modal
      reqAlertBackdrop: document.getElementById('reqAlertBackdrop'),
      reqAlertCard: document.getElementById('reqAlertCard'),
      reqAlertPill: document.getElementById('reqAlertPill'),
      reqAlertTitle: document.getElementById('reqAlertTitle'),
      reqAlertDesc: document.getElementById('reqAlertDesc'),
      reqAlertBody: document.getElementById('reqAlertBody'),
      reqAlertActionBtn: document.getElementById('reqAlertActionBtn'),
      closeReqAlertBtn: document.getElementById('closeReqAlertBtn'),

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
      toastContainer: document.getElementById('toastContainer'),

      // AI Essay Prompt Generator
      copyAiPromptBtn: document.getElementById('copyAiPromptBtn'),
      copyAiPromptBtnText: document.getElementById('copyAiPromptBtnText'),
      previewAiPromptBtn: document.getElementById('previewAiPromptBtn'),
      reqAlertCopyAiBtn: document.getElementById('reqAlertCopyAiBtn'),
      reqAlertCopyAiBtnText: document.getElementById('reqAlertCopyAiBtnText'),
      aiPromptModalBackdrop: document.getElementById('aiPromptModalBackdrop'),
      aiPromptModalCard: document.getElementById('aiPromptModalCard'),
      closeAiPromptModalBtn: document.getElementById('closeAiPromptModalBtn'),
      copyPromptInsideModalBtn: document.getElementById('copyPromptInsideModalBtn'),
      modalCopyBtnText: document.getElementById('modalCopyBtnText'),
      primaryCopyAiPromptBtn: document.getElementById('primaryCopyAiPromptBtn'),
      primaryCopyBtnLabel: document.getElementById('primaryCopyBtnLabel'),
      aiPromptLevelBadge: document.getElementById('aiPromptLevelBadge'),
      aiPromptWordTargetBadge: document.getElementById('aiPromptWordTargetBadge'),
      aiPromptVocabChips: document.getElementById('aiPromptVocabChips'),
      aiPromptVocabCount: document.getElementById('aiPromptVocabCount'),
      aiPromptTextarea: document.getElementById('aiPromptTextarea')
    };
  }

  bindEvents() {
    // Mode toggle events (overlapping card stack toggle)
    const toggleStandard = () => {
      this.setTargetLevel(this.targetLevel === 'C1' ? 'C2' : 'C1');
    };

    if (this.dom.modeC1Btn) {
      this.dom.modeC1Btn.addEventListener('click', (e) => {
        e.stopPropagation();
        toggleStandard();
      });
    }
    if (this.dom.modeC2Btn) {
      this.dom.modeC2Btn.addEventListener('click', (e) => {
        e.stopPropagation();
        toggleStandard();
      });
    }
    const cefrSwitch = document.querySelector('.cefr-toggle-switch');
    if (cefrSwitch) {
      cefrSwitch.addEventListener('click', toggleStandard);
    }

    // Topic events (Draw New Tree Topic)
    if (this.dom.rerollTopicBtn) {
      this.dom.rerollTopicBtn.addEventListener('click', () => {
        if (this.hasEssayContent()) {
          if (!confirm("You have an essay in progress. Drawing a new topic will clear your draft and generate a fresh subject-subtheme tree. Are you sure you want to change topics?")) {
            return;
          }
        }
        this.rerollTopic();
      });
    }
    if (this.dom.rerollVocabBtn) {
      this.dom.rerollVocabBtn.addEventListener('click', () => {
        if (this.hasEssayContent()) {
          if (!confirm("You have an essay in progress. Rerolling compulsory target lexis will generate a new set of 10 words, and words you have already written may no longer count. Are you sure you want to reroll?")) {
            return;
          }
        }
        this.refreshRandomVocabulary(true);
      });
    }

    // Editor events
    this.dom.essayInput.addEventListener('input', () => this.handleEditorInput());
    this.dom.clearEssayBtn.addEventListener('click', () => this.clearEssay());
    this.dom.evaluateEssayBtn.addEventListener('click', () => this.triggerEvaluation());

    // Modal events
    this.dom.closeEvalModalBtn.addEventListener('click', () => this.closeEvaluationModal());
    this.dom.evalModalBackdrop.addEventListener('click', (e) => {
      if (e.target === this.dom.evalModalBackdrop) this.closeEvaluationModal();
    });
    this.dom.gatekeeperActionBtn.addEventListener('click', () => this.handleGatekeeperAction());

    // Front-and-Center Requirement Alert Modal events
    if (this.dom.closeReqAlertBtn) {
      this.dom.closeReqAlertBtn.addEventListener('click', () => this.closeRequirementAlert());
    }
    if (this.dom.reqAlertActionBtn) {
      this.dom.reqAlertActionBtn.addEventListener('click', () => this.closeRequirementAlert());
    }
    if (this.dom.reqAlertBackdrop) {
      this.dom.reqAlertBackdrop.addEventListener('click', (e) => {
        if (e.target === this.dom.reqAlertBackdrop) this.closeRequirementAlert();
      });
    }

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

    // Guard against accidental window/tab close or refresh when draft exists
    window.addEventListener('beforeunload', (e) => {
      if (this.hasEssayContent()) {
        e.preventDefault();
        e.returnValue = '';
      }
    });

    // Stepper navigation events
    if (this.dom.stepIndicator1) {
      this.dom.stepIndicator1.addEventListener('click', () => this.setStage(1));
      this.dom.stepIndicator1.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); this.setStage(1); }
      });
    }
    if (this.dom.stepIndicator2) {
      this.dom.stepIndicator2.addEventListener('click', () => this.setStage(2));
      this.dom.stepIndicator2.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); this.setStage(2); }
      });
    }
    if (this.dom.stepIndicator3) {
      this.dom.stepIndicator3.addEventListener('click', () => this.setStage(3));
      this.dom.stepIndicator3.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); this.setStage(3); }
      });
    }

    // Stage transition buttons
    if (this.dom.proceedToStage2Btn) {
      this.dom.proceedToStage2Btn.addEventListener('click', () => this.setStage(2));
    }
    if (this.dom.backToStage1Btn) {
      this.dom.backToStage1Btn.addEventListener('click', () => this.setStage(1));
    }

    // AI Essay Prompt Generator events
    if (this.dom.copyAiPromptBtn) {
      this.dom.copyAiPromptBtn.addEventListener('click', () => this.handleQuickCopyAiPrompt());
    }
    if (this.dom.previewAiPromptBtn) {
      this.dom.previewAiPromptBtn.addEventListener('click', () => this.openAiPromptModal());
    }
    if (this.dom.closeAiPromptModalBtn) {
      this.dom.closeAiPromptModalBtn.addEventListener('click', () => this.closeAiPromptModal());
    }
    if (this.dom.copyPromptInsideModalBtn) {
      this.dom.copyPromptInsideModalBtn.addEventListener('click', () => this.handleModalCopyAiPrompt());
    }
    if (this.dom.primaryCopyAiPromptBtn) {
      this.dom.primaryCopyAiPromptBtn.addEventListener('click', () => this.handleModalCopyAiPrompt());
    }
    if (this.dom.aiPromptModalBackdrop) {
      this.dom.aiPromptModalBackdrop.addEventListener('click', (e) => {
        if (e.target === this.dom.aiPromptModalBackdrop) this.closeAiPromptModal();
      });
    }
    if (this.dom.reqAlertCopyAiBtn) {
      this.dom.reqAlertCopyAiBtn.addEventListener('click', () => {
        this.closeRequirementAlert();
        this.handleQuickCopyAiPrompt(true);
      });
    }
  }

  bindHotkeys() {
    document.addEventListener('keydown', (e) => {
      const reqAlertOpen = this.dom.reqAlertBackdrop && (
        this.dom.reqAlertBackdrop.classList.contains('open') ||
        this.dom.reqAlertBackdrop.style.display === 'flex'
      );

      // Escape / Enter when requirement alert is open -> close alert & focus editor
      if (reqAlertOpen && (e.key === 'Escape' || e.key === 'Enter')) {
        e.preventDefault();
        this.closeRequirementAlert();
        return;
      }

      const aiPromptOpen = this.dom.aiPromptModalBackdrop && (
        this.dom.aiPromptModalBackdrop.classList.contains('open') ||
        this.dom.aiPromptModalBackdrop.style.display === 'flex'
      );

      // Escape / Enter when AI prompt modal is open
      if (aiPromptOpen) {
        if (e.key === 'Escape') {
          e.preventDefault();
          this.closeAiPromptModal();
          return;
        }
        if (e.key === 'Enter') {
          e.preventDefault();
          this.handleModalCopyAiPrompt();
          return;
        }
      }

      const modalOpen = (this.dom.evalModalBackdrop.classList.contains('visible') ||
                        this.dom.evalModalBackdrop.style.display === 'flex' ||
                        this.dom.evalModalBackdrop.classList.contains('open')) ||
                        Boolean(reqAlertOpen) ||
                        Boolean(aiPromptOpen);
      const inTextField = ['INPUT', 'TEXTAREA', 'SELECT'].includes(document.activeElement.tagName);

      // Alt+1  →  Stage 1 (Topic & Lexis Educational Guide)
      if (e.altKey && e.key === '1' && !modalOpen) {
        e.preventDefault();
        this.setStage(1);
        return;
      }

      // Alt+2  →  Stage 2 (Writing & Evaluation Studio)
      if (e.altKey && e.key === '2' && !modalOpen) {
        e.preventDefault();
        this.setStage(2);
        return;
      }

      // Alt+3  →  Stage 3 (Speaking Studio)
      if (e.altKey && e.key === '3' && !modalOpen) {
        e.preventDefault();
        this.setStage(3);
        return;
      }

      // Enter on Stage 1 (when outside of text inputs/buttons) -> Proceed to Stage 2
      if (e.key === 'Enter' && this.currentStage === 1 && !inTextField && !modalOpen && !reqAlertOpen) {
        e.preventDefault();
        this.setStage(2);
        return;
      }

      // Alt+P  →  Copy AI Prompt
      if (e.altKey && (e.key === 'p' || e.key === 'P') && !modalOpen) {
        e.preventDefault();
        this.handleQuickCopyAiPrompt();
        return;
      }

      // Alt+M  →  Toggle C1 / C2 Standard Mode
      if (e.altKey && (e.key === 'm' || e.key === 'M') && !modalOpen) {
        e.preventDefault();
        const nextMode = this.targetLevel === 'C1' ? 'C2' : 'C1';
        this.setTargetLevel(nextMode);
        return;
      }

      // Alt+T  →  Draw New Topic (Randomize tree architecture)
      if (e.altKey && (e.key === 't' || e.key === 'T') && !modalOpen) {
        e.preventDefault();
        if (this.hasEssayContent()) {
          if (!confirm("You have an essay in progress. Drawing a new topic will clear your draft and generate a fresh subject-subtheme tree. Are you sure you want to change topics?")) {
            return;
          }
        }
        this.rerollTopic();
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
    };
  }

  setTargetLevel(level, force = false) {
    if (!force && level === this.targetLevel) {
      return;
    }
    if (!force && this.hasEssayContent()) {
      if (!confirm("You have an essay in progress. Switching target standards between C1 and C2 will reconfigure your word count target and compulsory vocabulary. Are you sure you want to switch standards?")) {
        return;
      }
    }
    this.targetLevel = level;
    try {
      localStorage.setItem('fluentedge_target_level', level);
    } catch (e) {}

    const isC2 = level === 'C2';

    if (this.dom.modeC1Btn && this.dom.modeC2Btn) {
      this.dom.modeC1Btn.classList.toggle('active', !isC2);
      this.dom.modeC1Btn.setAttribute('aria-checked', !isC2 ? 'true' : 'false');
      this.dom.modeC2Btn.classList.toggle('active', isC2);
      this.dom.modeC2Btn.setAttribute('aria-checked', isC2 ? 'true' : 'false');
    }

    if (isC2) {
      document.body.classList.add('theme-c2');
    } else {
      document.body.classList.remove('theme-c2');
    }

    if (this.dom.brandCrest) {
      this.dom.brandCrest.textContent = level;
      this.dom.brandCrest.title = isC2
        ? "FluentEdge — Current Standard: C2 Proficiency"
        : "FluentEdge — Current Standard: C1 Advanced";
    }

    if (this.dom.step1LexisHint) {
      this.dom.step1LexisHint.textContent = isC2
        ? "C2 Standards, Criteria & Workflow"
        : "C1 Standards, Criteria & Workflow";
    }
    if (this.dom.step2WordCountHint) {
      this.dom.step2WordCountHint.textContent = isC2
        ? "280-320 Words & Syntactic Complexity"
        : "220-260 Words & Syntactic Complexity";
    }
    if (this.dom.targetWordCountHint) {
      this.dom.targetWordCountHint.textContent = isC2
        ? "(280-320 target)"
        : "(220-260 target)";
    }

    if (this.currentTopic) {
      this.currentTopic.type = isC2 ? 'C2 Proficiency Discursive Essay' : 'C1/C2 Academic Essay';
      this.currentTopic.cefrTarget = isC2 ? 'C2' : 'C1 / C2';
      this.currentTopic.recommendedTime = isC2 ? '50 minutes' : '45 minutes';
      if (this.dom.topicType) this.dom.topicType.textContent = this.currentTopic.type;
      if (this.dom.topicTime) this.dom.topicTime.textContent = this.currentTopic.recommendedTime;
    }

    this.updateEducationalRequirementsCard();

    if (this.dom.essayInput) {
      this.refreshRandomVocabulary(true);
      this.handleEditorInput();
    }
  }

  updateEducationalRequirementsCard() {
    const isC2 = this.targetLevel === 'C2';

    if (this.dom.reqsLevelIndicator) {
      this.dom.reqsLevelIndicator.textContent = isC2 ? 'CEFR C2 STANDARD' : 'CEFR C1 STANDARD';
    }
    if (this.dom.reqsLevelTagline) {
      this.dom.reqsLevelTagline.textContent = isC2
        ? 'Mastery Level Academic Benchmark'
        : 'Effective Operational Proficiency Standard';
    }
    if (this.dom.reqsHeaderCallout) {
      this.dom.reqsHeaderCallout.textContent = isC2
        ? 'The pinnacle of linguistic proficiency: effortless spontaneous expression, conceptual nuance, dialectical argumentation, and authoritative academic rhythm.'
        : 'Academic writing standard: demonstrate clear, smoothly flowing discourse with sophisticated lexical variety, cohesive transitions, and complex syntactic control.';
    }
    if (this.dom.reqsWordMetric) {
      this.dom.reqsWordMetric.textContent = isC2 ? '280 – 360+ words' : '220 – 260 words';
    }
    if (this.dom.reqsWordDesc) {
      this.dom.reqsWordDesc.textContent = isC2
        ? 'Extended discursive architecture across 4–5 paragraphs. Complex dialectical framing: thesis, counter-argument refutation, conceptual nuance, and authoritative synthesis.'
        : 'Concise, balanced synthesis structured across 3–4 coherent paragraphs. Direct thesis formulation, analytical body arguments, and clear concluding deduction.';
    }
    if (this.dom.reqsLexisMetric) {
      this.dom.reqsLexisMetric.textContent = '10 / 10 Obligatory Words';
    }
    if (this.dom.reqsLexisDesc) {
      this.dom.reqsLexisDesc.textContent = isC2
        ? 'Incorporate all 10 allocated C2 words demonstrating mastery of subtle semantic shades, idiomatic academic collocations, and perfect morphological adaptation.'
        : 'Incorporate all 10 allocated C1 words (3 verbs, 3 nouns, 2 adj, 2 adv) into natural, unforced collocation. Every item is locked with zero grammatical distortion.';
    }
    if (this.dom.reqsSyntaxMetric) {
      this.dom.reqsSyntaxMetric.textContent = isC2 ? 'Minimum 6 Structures Required' : 'Minimum 4 Structures Required';
    }
    if (this.dom.reqsSyntaxDesc) {
      this.dom.reqsSyntaxDesc.textContent = isC2
        ? 'Demonstrate elevated syntactic mastery: Mandative Subjunctives, Nominative Absolute Clauses, Mixed Unreal Conditionals, Prepositional Relatives, and Inverted Concessions.'
        : 'Incorporate diverse advanced patterns: Negative Inversions, Cleft Sentences, Passive Reporting Clauses, Inverted Conditionals without "if", and Concession markers.';
    }
    if (this.dom.reqsPassMetric) {
      this.dom.reqsPassMetric.textContent = isC2 ? '≥ 85% Overall Score Required' : '≥ 75% Overall Score Required';
    }
    if (this.dom.reqsPassDesc) {
      this.dom.reqsPassDesc.textContent = isC2
        ? 'Authoritative scholarly voice with sophisticated epistemic stance (hedging), elegant parallelism, varied clause cadences, and seamless conceptual coherence.'
        : 'Strict formal academic register. Objective third-person stance, seamless transitional cohesion, zero informal contractions or colloquial shortcuts.';
    }
  }

  setStage(stageNum) {
    if (stageNum === 3) {
      const text = this.dom.essayInput ? this.dom.essayInput.value.trim() : "";
      if (!text) {
        this.showToast("Please draft your essay in Stage 2 before entering Speaking practice.", "warning");
        this.setStage(2);
        return;
      }
    }

    this.currentStage = stageNum;

    // Toggle Stage 1 Active class on body (hides history drawer on Stage 1)
    document.body.classList.toggle('stage-1-active', stageNum === 1);
    if (this.dom.historyDrawerBtn) {
      this.dom.historyDrawerBtn.style.display = stageNum === 1 ? 'none' : 'inline-flex';
    }

    // Toggle Stage views
    if (this.dom.stage1Panel) {
      this.dom.stage1Panel.style.display = stageNum === 1 ? 'block' : 'none';
      this.dom.stage1Panel.classList.toggle('active-stage', stageNum === 1);
    }
    if (this.dom.stage2Panel) {
      this.dom.stage2Panel.style.display = stageNum === 2 ? 'block' : 'none';
      this.dom.stage2Panel.classList.toggle('active-stage', stageNum === 2);
    }
    if (this.dom.speakingStudio) {
      this.dom.speakingStudio.style.display = stageNum === 3 ? 'block' : 'none';
      this.dom.speakingStudio.classList.toggle('active-stage', stageNum === 3);
    }

    // Update Stepper indicators
    if (this.dom.stepIndicator1) {
      this.dom.stepIndicator1.classList.toggle('active', stageNum === 1);
      this.dom.stepIndicator1.classList.toggle('completed', stageNum > 1);
    }
    if (this.dom.stepIndicator2) {
      this.dom.stepIndicator2.classList.toggle('active', stageNum === 2);
      this.dom.stepIndicator2.classList.toggle('completed', stageNum > 2);
    }
    if (this.dom.stepIndicator3) {
      this.dom.stepIndicator3.classList.toggle('active', stageNum === 3);
      if (stageNum === 3 && this.dom.step3LockIcon) {
        this.dom.step3LockIcon.innerHTML = "3";
      }
    }

    // Stage-specific actions
    if (stageNum === 1) {
      this.updateEducationalRequirementsCard();
    } else if (stageNum === 2) {
      setTimeout(() => {
        if (this.dom.essayInput) this.dom.essayInput.focus();
      }, 50);
      this.handleEditorInput();
    } else if (stageNum === 3) {
      const text = this.dom.essayInput ? this.dom.essayInput.value.trim() : "";
      if (text) {
        this.speechEngine.setTargetText(text);
        this.renderTeleprompterTokens(this.speechEngine.targetTokens);
      }
    }

    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  refreshRandomVocabulary(force = false) {
    if (force || !this.activeVocabulary || this.activeVocabulary.length === 0) {
      this.activeVocabulary = getRandomVocabularySet(this.targetLevel);
    }
    this.renderVocabularyChips();
    if (this.dom.essayInput) {
      this.handleEditorInput();
    }
  }

  // ==========================================
  // ==========================================
  // TOPIC & VOCABULARY ENGINE (Tree Architecture)
  // ==========================================

  loadTopic(topic = null) {
    if (topic && typeof topic === 'object') {
      this.currentTopic = topic;
    } else if (!this.currentTopic) {
      this.currentTopic = generateRandomTreeTopic(this.targetLevel);
    }
    const current = this.currentTopic;

    if (this.dom.topicCategory) this.dom.topicCategory.textContent = current.category;
    if (this.dom.topicType) this.dom.topicType.textContent = current.type;
    if (this.dom.topicTime) this.dom.topicTime.textContent = current.recommendedTime;
    if (this.dom.topicTitle) this.dom.topicTitle.textContent = current.title;

    // Tree nodes: Root Subject, Sub-theme 1, Sub-theme 2
    if (this.dom.topicMainSubjectText) {
      this.dom.topicMainSubjectText.textContent = current.mainSubject?.name || 'Academic Core';
      this.dom.topicMainSubjectText.title = `Domain: ${current.category || ''}`;
    }
    if (this.dom.topicSubTheme1Text) {
      this.dom.topicSubTheme1Text.textContent = current.subTheme1?.shortName || current.subTheme1?.name || 'Theme 1';
      this.dom.topicSubTheme1Text.title = current.subTheme1?.name || '';
    }
    if (this.dom.topicSubTheme2Text) {
      this.dom.topicSubTheme2Text.textContent = current.subTheme2?.shortName || current.subTheme2?.name || 'Theme 2';
      this.dom.topicSubTheme2Text.title = current.subTheme2?.name || '';
    }
    if (this.dom.topicDirective) {
      this.dom.topicDirective.textContent = current.directive || `Write an academic essay examining the implications of this subject for contemporary society.`;
    }

    if (this.dom.writingTopicPill) {
      this.dom.writingTopicPill.textContent = current.title;
      this.dom.writingTopicPill.title = current.title;
    }

    // Draw 10 random target vocabulary items (3 Verbs, 3 Nouns, 2 Adj, 2 Adv)
    this.refreshRandomVocabulary(true);

    // Reset editor analysis for new topic
    this.handleEditorInput();
  }

  rerollTopic(silent = false) {
    const currentSubjectId = this.currentTopic?.mainSubject?.id || null;
    const newTopic = generateRandomTreeTopic(this.targetLevel, currentSubjectId);
    this.currentTopic = newTopic;
    if (this.dom.essayInput) this.dom.essayInput.value = "";
    this.loadTopic(newTopic);
    if (!silent) {
      this.showToast(`New topic drawn: ${newTopic.mainSubject?.shortName || newTopic.mainSubject?.name}`, "info");
    }
  }

  renderVocabularyChips() {
    if (!this.activeVocabulary || this.activeVocabulary.length === 0) {
      this.activeVocabulary = getRandomVocabularySet(this.targetLevel);
    }
    const text = this.dom.essayInput ? (this.dom.essayInput.value || "") : "";

    // Stage 1 Vocab Grid
    if (this.dom.vocabGrid) {
      this.dom.vocabGrid.innerHTML = this.activeVocabulary.map((v) => {
        const usage = checkTargetWordUsage(v, text);
        const headword = v.headword || v.word;
        const posClass = `pos-${(v.pos || 'noun').toLowerCase()}`;
        const definition = v.definition || '';
        return `
          <div class="vocab-chip ${usage.used ? 'used' : ''}" data-word="${headword}">
            <div class="vocab-chip-top">
              <div class="vocab-word-title">
                <span class="vocab-word-text">${headword}</span>
              </div>
              <div class="vocab-chip-actions">
                <span class="vocab-used-check">✓</span>
                <button class="vocab-audio-btn" data-speak="${headword}" title="Listen to RP British pronunciation" aria-label="Listen to pronunciation of ${headword}">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><path d="M15.54 8.46a5 5 0 0 1 0 7.07"></path></svg>
                </button>
              </div>
            </div>
            ${definition ? `<div class="vocab-definition">${definition}</div>` : ''}
            <div class="vocab-pills-row">
              <span class="vocab-pos-pill ${posClass}">${v.pos}</span>
              <span class="vocab-cefr-pill">${v.cefr}</span>
            </div>
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

    // Stage 2 Compact Chips Strip
    if (this.dom.stage2VocabChips) {
      this.dom.stage2VocabChips.innerHTML = this.activeVocabulary.map((v) => {
        const usage = checkTargetWordUsage(v, text);
        const headword = v.headword || v.word;
        const posClass = `pos-${(v.pos || 'noun').toLowerCase()}`;
        const definition = v.definition || '';
        const tooltip = definition ? `${headword} (${v.pos}): ${definition}` : headword;
        return `
          <div class="stage2-mini-chip ${usage.used ? 'used' : ''}" data-word="${headword}" data-tooltip="${tooltip}">
            <span class="stage2-mini-word">${headword}</span>
            <span class="stage2-mini-pos ${posClass}">${v.pos}</span>
            <span class="stage2-mini-check" style="${usage.used ? '' : 'display: none;'}">✓</span>
            <button class="stage2-mini-audio-btn" data-speak="${headword}" title="Listen to pronunciation of ${headword}" aria-label="Listen to pronunciation of ${headword}">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><path d="M15.54 8.46a5 5 0 0 1 0 7.07"></path></svg>
            </button>
          </div>
        `;
      }).join('');

      this.dom.stage2VocabChips.querySelectorAll('.stage2-mini-audio-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
          e.stopPropagation();
          const word = btn.getAttribute('data-speak');
          this.speechEngine.speakText(word, 0.85);
        });
      });
    }
  }

  // ==========================================
  // WRITING STUDIO & REAL-TIME C1 RADAR
  // ==========================================

  handleEditorInput() {
    const text = this.dom.essayInput ? this.dom.essayInput.value : "";
    const metrics = analyzeQuickMetrics(text, this.activeVocabulary, this.targetLevel);

    // Live word count
    this.dom.liveWordCount.textContent = metrics.wordCount;
    this.dom.liveParaCount.textContent = metrics.paragraphCount;

    // Word count color indicator
    this.dom.liveWordCount.className = "metric-live-val";
    const isC2 = this.targetLevel === 'C2';
    const minTarget = isC2 ? 280 : 220;
    const maxTarget = isC2 ? 320 : 260;
    const maxOptimal = isC2 ? 340 : 280;

    if (metrics.wordCount >= minTarget && metrics.wordCount <= maxOptimal) {
      this.dom.liveWordCount.classList.add("optimal");
      this.dom.lengthGuidanceBadge.textContent = isC2
        ? `Optimal C2 Length (${minTarget}-${maxTarget})`
        : `Optimal C1 Length (${minTarget}-${maxTarget})`;
      this.dom.lengthGuidanceBadge.className = "radar-badge active";
    } else if (metrics.wordCount > 0 && metrics.wordCount < minTarget) {
      this.dom.liveWordCount.classList.add("warning");
      this.dom.lengthGuidanceBadge.textContent = `Need ${minTarget - metrics.wordCount} more words (${this.targetLevel} target: ${minTarget}-${maxTarget})`;
      this.dom.lengthGuidanceBadge.className = "radar-badge";
    } else if (metrics.wordCount > maxOptimal) {
      this.dom.liveWordCount.classList.add("warning");
      this.dom.lengthGuidanceBadge.textContent = `Exceeding ${this.targetLevel} target (be concise)`;
      this.dom.lengthGuidanceBadge.className = "radar-badge";
    } else {
      this.dom.lengthGuidanceBadge.textContent = "Awaiting input";
      this.dom.lengthGuidanceBadge.className = "radar-badge";
    }

    // Update target vocabulary chips & counter in both Stage 1 and Stage 2
    this.dom.vocabUsedCounter.textContent = `${metrics.targetWordsUsed}/${metrics.targetWordsTotal}`;
    if (this.dom.stage2VocabCountDisplay) {
      this.dom.stage2VocabCountDisplay.textContent = `${metrics.targetWordsUsed}/${metrics.targetWordsTotal}`;
    }

    metrics.vocabStatus.forEach(status => {
      // Stage 1 chips
      if (this.dom.vocabGrid) {
        const chip = this.dom.vocabGrid.querySelector(`[data-word="${status.word}"]`);
        if (chip) {
          chip.classList.toggle('used', status.used);
        }
      }
      // Stage 2 compact chips
      if (this.dom.stage2VocabChips) {
        const chip2 = this.dom.stage2VocabChips.querySelector(`[data-word="${status.word}"]`);
        if (chip2) {
          chip2.classList.toggle('used', status.used);
          const check = chip2.querySelector('.stage2-mini-check');
          if (check) check.style.display = status.used ? 'inline-flex' : 'none';
        }
      }
    });

    // Real-time grammar radar with obligatory minimum structure threshold (4 for C1, 6 for C2)
    const minRequiredStructures = metrics.minRequiredStructures;
    const detectedStructuresCount = metrics.detectedGrammar.length;
    const structuresMet = detectedStructuresCount >= minRequiredStructures;
    const levelLabel = isC2 ? 'C2' : 'C1';

    if (this.dom.radarCountDisplay) {
      if (detectedStructuresCount === 0) {
        this.dom.radarCountDisplay.textContent = `0/${minRequiredStructures} Structures Required (${levelLabel})`;
        this.dom.radarCountDisplay.className = 'radar-count-badge zero';
      } else if (!structuresMet) {
        const needed = minRequiredStructures - detectedStructuresCount;
        this.dom.radarCountDisplay.textContent = `${detectedStructuresCount}/${minRequiredStructures} Structures Required (Need ${needed} more)`;
        this.dom.radarCountDisplay.className = 'radar-count-badge in-progress';
      } else {
        if (detectedStructuresCount === minRequiredStructures) {
          this.dom.radarCountDisplay.textContent = `✓ ${detectedStructuresCount}/${minRequiredStructures} Structures Met (${levelLabel} Requirement Fulfilled)`;
        } else {
          const extra = detectedStructuresCount - minRequiredStructures;
          this.dom.radarCountDisplay.textContent = `✓ ${detectedStructuresCount}/${minRequiredStructures} Structures Met (Minimum Achieved +${extra} Extra)`;
        }
        this.dom.radarCountDisplay.className = 'radar-count-badge fulfilled';
      }
    }

    if (this.dom.radarBadgesRow) {
      if (detectedStructuresCount > 0) {
        this.dom.radarBadgesRow.innerHTML = metrics.detectedGrammar.map(g => `
          <span class="radar-badge active">
            ✓ ${g.name}
          </span>
        `).join('');
      } else {
        this.dom.radarBadgesRow.innerHTML = `
          <span class="radar-badge-empty">
            No advanced structures detected yet. Incorporate at least ${minRequiredStructures} complex patterns (${levelLabel} standard) to unlock evaluation.
          </span>
        `;
      }
    }

    // Update Evaluate Essay Button state based on BOTH compulsory lexis AND minimum syntax fulfillment
    const allLexisFulfilled = metrics.targetWordsTotal > 0 && metrics.targetWordsUsed >= metrics.targetWordsTotal;
    const allSyntaxFulfilled = structuresMet;
    const allReady = allLexisFulfilled && allSyntaxFulfilled;

    if (this.dom.evaluateEssayBtn) {
      if (allReady) {
        this.dom.evaluateEssayBtn.classList.remove('btn-locked-lexis');
        this.dom.evaluateEssayBtn.classList.add('btn-lexis-ready');
        this.dom.evaluateEssayBtn.setAttribute('aria-disabled', 'false');
        this.dom.evaluateEssayBtn.title = `All ${metrics.targetWordsTotal} compulsory target words and ${detectedStructuresCount}/${minRequiredStructures} syntactic structures fulfilled! Click or press Ctrl+Enter to evaluate.`;
        this.dom.evaluateEssayBtn.innerHTML = `
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4">
            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
            <polyline points="22 4 12 14.01 9 11.01"></polyline>
          </svg>
          Evaluate Text (All Lexis &amp; Syntax Fulfilled)
          <kbd class="hotkey-badge">Ctrl+↵</kbd>
        `;
      } else {
        this.dom.evaluateEssayBtn.classList.remove('btn-lexis-ready');
        this.dom.evaluateEssayBtn.classList.add('btn-locked-lexis');
        this.dom.evaluateEssayBtn.setAttribute('aria-disabled', 'true');

        let statusSummary = '';
        if (!allLexisFulfilled && !allSyntaxFulfilled) {
          statusSummary = `${metrics.targetWordsUsed}/${metrics.targetWordsTotal} Lexis • ${detectedStructuresCount}/${minRequiredStructures} Syntax`;
        } else if (!allLexisFulfilled) {
          statusSummary = `${metrics.targetWordsUsed}/${metrics.targetWordsTotal} Lexis • Syntax Met`;
        } else {
          statusSummary = `Lexis Met • ${detectedStructuresCount}/${minRequiredStructures} Syntax`;
        }

        this.dom.evaluateEssayBtn.title = `Incorporate all ${metrics.targetWordsTotal} compulsory target words and at least ${minRequiredStructures} syntactic structures to unlock evaluation (currently ${metrics.targetWordsUsed}/${metrics.targetWordsTotal} words, ${detectedStructuresCount}/${minRequiredStructures} structures).`;
        this.dom.evaluateEssayBtn.innerHTML = `
          <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2">
            <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
            <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
          </svg>
          Evaluate Text (${statusSummary})
          <kbd class="hotkey-badge">Ctrl+↵</kbd>
        `;
      }
    }
  }

  highlightMissingVocabChips(missingNames) {
    if (!missingNames || missingNames.length === 0 || !this.dom.vocabGrid) return;

    missingNames.forEach(name => {
      const chip = this.dom.vocabGrid.querySelector(`[data-word="${name}"]`);
      if (chip) {
        chip.classList.remove('chip-missing-pulse');
        void chip.offsetWidth; // Force reflow to re-trigger CSS animation
        chip.classList.add('chip-missing-pulse');
        setTimeout(() => {
          chip.classList.remove('chip-missing-pulse');
        }, 1200);
      }
    });

    const vocabSection = document.querySelector('.vocabulary-section');
    if (vocabSection && window.innerWidth <= 1024) {
      vocabSection.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
  }

  hasEssayContent() {
    return Boolean(this.dom.essayInput && this.dom.essayInput.value.trim().length > 0);
  }

  clearEssay() {
    if (this.hasEssayContent()) {
      if (!confirm("Are you sure you want to clear your essay draft? This action cannot be undone.")) {
        return;
      }
    }
    this.dom.essayInput.value = "";
    this.handleEditorInput();
  }

  // ==========================================
  // FLUENTEDGE C1/C2 WRITING ASSESSMENT & GATEKEEPER
  // ==========================================

  showRequirementAlert({
    isTextEmpty,
    isUnderMinWords,
    wordCount,
    minWords,
    targetWordsUsed,
    targetWordsTotal,
    missingLexis,
    detectedStructures = [],
    detectedStructuresCount = 0,
    minRequiredStructures = 4,
    isMissingStructures = false
  }) {
    if (!this.dom.reqAlertBackdrop || !this.dom.reqAlertBody) return;

    this.pendingMissingLexis = missingLexis ? missingLexis.map(m => m.word) : [];

    let itemsHtml = '';

    // 1. Word Count Requirement Item
    if (isTextEmpty) {
      itemsHtml += `
        <div class="req-item item-missing">
          <div class="req-item-icon">✕</div>
          <div class="req-item-content">
            <div class="req-item-title">
              <span>Essay Draft Required</span>
              <span style="font-size: 11px; color: #f87171; font-weight: 700;">0 Words Written</span>
            </div>
            <div class="req-item-subtitle">
              Your essay editor is currently empty. Please write your response to the topic prompt before submitting for evaluation.
            </div>
          </div>
        </div>
      `;
    } else if (isUnderMinWords) {
      const wordsNeeded = minWords - wordCount;
      itemsHtml += `
        <div class="req-item item-missing">
          <div class="req-item-icon">✕</div>
          <div class="req-item-content">
            <div class="req-item-title">
              <span>Minimum Length Required</span>
              <span style="font-size: 11px; color: #f87171; font-weight: 700;">${wordCount} / ${minWords} Words</span>
            </div>
            <div class="req-item-subtitle">
              Your draft contains ${wordCount} words. A minimum of ${minWords} words is required for rigorous CEFR assessment (needs ${wordsNeeded} more word${wordsNeeded === 1 ? '' : 's'}).
            </div>
          </div>
        </div>
      `;
    } else {
      itemsHtml += `
        <div class="req-item item-met">
          <div class="req-item-icon">✓</div>
          <div class="req-item-content">
            <div class="req-item-title">
              <span>Length Requirement Satisfied</span>
              <span style="font-size: 11px; color: #34d399; font-weight: 700;">${wordCount} Words</span>
            </div>
            <div class="req-item-subtitle">
              Draft satisfies the minimum length requirement (${minWords}+ words).
            </div>
          </div>
        </div>
      `;
    }

    // 2. Compulsory Target Lexis Requirement Item
    if (missingLexis && missingLexis.length > 0) {
      const missingChipsHtml = missingLexis.map(item => {
        const tooltip = item.definition ? `${item.word}: ${item.definition}` : `Missing compulsory word: ${item.word}`;
        return `
        <span class="req-missing-chip" title="${tooltip}">
          ${item.pos ? `<span class="pos-tag pos-${(item.pos || '').toLowerCase()}">${item.pos}</span>` : ''}
          ${item.word}
        </span>
      `;
      }).join('');

      itemsHtml += `
        <div class="req-item item-missing">
          <div class="req-item-icon">✕</div>
          <div class="req-item-content">
            <div class="req-item-title">
              <span>Compulsory Target Lexis</span>
              <span style="font-size: 11px; color: #fbbf24; font-weight: 700;">${targetWordsUsed} / ${targetWordsTotal} Used (${missingLexis.length} Missing)</span>
            </div>
            <div class="req-item-subtitle">
              You must incorporate all ${targetWordsTotal} compulsory target words (verbs, nouns, adjectives, adverbs) before evaluation can proceed.
            </div>
            <div class="req-missing-chips-box">
              <div class="req-chips-label">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                  <circle cx="12" cy="12" r="10"></circle>
                  <line x1="12" y1="8" x2="12" y2="12"></line>
                  <line x1="12" y1="16" x2="12.01" y2="16"></line>
                </svg>
                Missing Words to Incorporate:
              </div>
              <div class="req-chips-flex">
                ${missingChipsHtml}
              </div>
            </div>
          </div>
        </div>
      `;
    } else {
      itemsHtml += `
        <div class="req-item item-met">
          <div class="req-item-icon">✓</div>
          <div class="req-item-content">
            <div class="req-item-title">
              <span>Compulsory Target Lexis Satisfied</span>
              <span style="font-size: 11px; color: #34d399; font-weight: 700;">${targetWordsTotal} / ${targetWordsTotal} Used</span>
            </div>
            <div class="req-item-subtitle">
              All ${targetWordsTotal} compulsory target words have been successfully incorporated into your draft.
            </div>
          </div>
        </div>
      `;
    }

    // 3. Syntactic Complexity Requirement Item (Obligatory minimum structures: 4 for C1, 6 for C2)
    if (isMissingStructures) {
      const structuresNeeded = minRequiredStructures - detectedStructuresCount;
      const detectedChipsHtml = (detectedStructures && detectedStructures.length > 0)
        ? detectedStructures.map(g => `<span class="req-structure-chip detected">✓ ${g.name}</span>`).join('')
        : '<span style="font-size: 12px; color: #94a3b8; font-style: italic;">No advanced structures detected yet.</span>';

      const suggestedPatterns = [
        { name: "Inverted Conditional", example: 'Were governments to act... / Had society recognized...' },
        { name: "Negative Inversion", example: 'Seldom has... / Under no circumstances should...' },
        { name: "Cleft / Focus Structure", example: 'What remains of paramount concern is...' },
        { name: "Passive Reporting Clause", example: 'It is widely contended that...' },
        { name: "Advanced Concession Marker", example: 'Notwithstanding the..., / Albeit arduous,...' },
        { name: "Mandative Subjunctive", example: 'It is imperative that authorities remain...' },
        { name: "Correlative Comparative", example: 'The more interconnected platforms become, the greater...' }
      ];

      const detectedNames = new Set((detectedStructures || []).map(g => g.name));
      const unfulfilledSuggestions = suggestedPatterns.filter(p => !detectedNames.has(p.name)).slice(0, 3);

      const suggestionsHtml = unfulfilledSuggestions.map(p => `
        <div style="font-size: 11.5px; color: #cbd5e1; margin-bottom: 4px;">
          <strong style="color: #93c5fd;">• ${p.name}:</strong> <span style="color: #94a3b8; font-style: italic;">e.g. "${p.example}"</span>
        </div>
      `).join('');

      itemsHtml += `
        <div class="req-item item-missing">
          <div class="req-item-icon">✕</div>
          <div class="req-item-content">
            <div class="req-item-title">
              <span>Syntactic Complexity (${this.targetLevel} Requirement)</span>
              <span style="font-size: 11px; color: #fbbf24; font-weight: 700;">${detectedStructuresCount} / ${minRequiredStructures} Met (${structuresNeeded} More Needed)</span>
            </div>
            <div class="req-item-subtitle">
              ${this.targetLevel === 'C2' ? 'C2 Proficiency' : 'C1 Advanced'} standards demand at least ${minRequiredStructures} distinct complex syntactic structures to demonstrate grammatical control (currently ${detectedStructuresCount} detected).
            </div>
            <div class="req-missing-chips-box">
              <div class="req-chips-label">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
                Structures Detected So Far:
              </div>
              <div class="req-chips-flex" style="margin-bottom: 10px;">
                ${detectedChipsHtml}
              </div>
              <div class="req-chips-label" style="color: #93c5fd; margin-top: 8px;">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                  <circle cx="12" cy="12" r="10"></circle>
                  <line x1="12" y1="16" x2="12" y2="12"></line>
                  <line x1="12" y1="8" x2="12.01" y2="8"></line>
                </svg>
                Recommended Structures to Incorporate:
              </div>
              <div>
                ${suggestionsHtml}
              </div>
            </div>
          </div>
        </div>
      `;
    } else {
      itemsHtml += `
        <div class="req-item item-met">
          <div class="req-item-icon">✓</div>
          <div class="req-item-content">
            <div class="req-item-title">
              <span>Syntactic Complexity Satisfied</span>
              <span style="font-size: 11px; color: #34d399; font-weight: 700;">${detectedStructuresCount} / ${minRequiredStructures} Structures Met</span>
            </div>
            <div class="req-item-subtitle">
              Minimum ${this.targetLevel} syntactic complexity requirement achieved (${detectedStructuresCount} advanced pattern${detectedStructuresCount === 1 ? '' : 's'} detected).
            </div>
          </div>
        </div>
      `;
    }

    this.dom.reqAlertBody.innerHTML = itemsHtml;

    // Show modal front and center
    this.dom.reqAlertBackdrop.style.display = 'flex';
    void this.dom.reqAlertBackdrop.offsetWidth; // Force reflow
    this.dom.reqAlertBackdrop.classList.add('open');
    if (this.dom.reqAlertActionBtn) {
      this.dom.reqAlertActionBtn.focus();
    }
  }

  closeRequirementAlert() {
    if (!this.dom.reqAlertBackdrop) return;
    this.dom.reqAlertBackdrop.classList.remove('open');
    setTimeout(() => {
      this.dom.reqAlertBackdrop.style.display = 'none';
      if (this.dom.essayInput) {
        this.dom.essayInput.focus();
      }
      if (this.pendingMissingLexis && this.pendingMissingLexis.length > 0) {
        this.highlightMissingVocabChips(this.pendingMissingLexis);
        this.pendingMissingLexis = null;
      }
    }, 250);
  }

  triggerEvaluation() {
    const text = this.dom.essayInput.value.trim();
    const words = text ? text.split(/\s+/).filter(Boolean) : [];
    const metrics = analyzeQuickMetrics(text, this.activeVocabulary, this.targetLevel);
    const missingVocab = metrics.vocabStatus.filter(v => !v.used);
    const missingLexis = missingVocab.map(v => ({
      word: v.headword || v.word,
      pos: v.pos || '',
      definition: v.definition || ''
    }));

    const isTextEmpty = !text || words.length === 0;
    const isUnderMinWords = !isTextEmpty && words.length < 50;
    const isMissingLexis = missingLexis.length > 0;
    const detectedStructuresCount = metrics.detectedGrammar.length;
    const minRequiredStructures = metrics.minRequiredStructures;
    const isMissingStructures = detectedStructuresCount < minRequiredStructures;

    // Front-and-Center Alert when requirements are not met yet
    if (isTextEmpty || isUnderMinWords || isMissingLexis || isMissingStructures) {
      this.showRequirementAlert({
        isTextEmpty,
        isUnderMinWords,
        wordCount: words.length,
        minWords: 50,
        targetWordsUsed: metrics.targetWordsUsed,
        targetWordsTotal: metrics.targetWordsTotal,
        missingLexis,
        detectedStructures: metrics.detectedGrammar,
        detectedStructuresCount,
        minRequiredStructures,
        isMissingStructures
      });
      return;
    }

    // Confirmation before moving forward to evaluation and assessment modal
    if (!confirm(`Are you ready to submit your essay for evaluation? All ${metrics.targetWordsTotal} compulsory target words and ${detectedStructuresCount} complex syntactic structures have been fulfilled. Your draft will be assessed against the CEFR scales.`)) {
      return;
    }

    const evalResult = evaluateEssay(text, this.currentTopic, this.targetLevel, this.activeVocabulary);
    this.lastEvaluationResult = evalResult;
    this.meetsC1Threshold = evalResult.meetsThreshold;

    const isC2 = this.targetLevel === 'C2';

    // Render results into modal
    this.dom.evalScoreTotal.textContent = evalResult.rawTotal;
    this.dom.evalPercentage.textContent = `${evalResult.percentage}%`;
    this.dom.evalVerdictTitle.textContent = evalResult.cefr.band;
    this.dom.evalVerdictTitle.className = `cefr-verdict-title ${evalResult.meetsThreshold ? 'pass' : 'revise'}`;
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
    if (evalResult.meetsThreshold) {
      this.dom.gatekeeperBanner.className = "gatekeeper-banner unlocked";
      this.dom.gatekeeperHeading.textContent = isC2
        ? "✓ C2 Proficiency Confirmed (Mastery)"
        : "✓ C1 Standard Confirmed";
      this.dom.gatekeeperSubtext.textContent = isC2
        ? "Your text demonstrates the 280+ word discursive architecture, lexical sophistication, and complex syntax required for C2 Proficiency. Proceed to read your text aloud for pronunciation evaluation."
        : "Your text demonstrates the syntactic complexity and vocabulary breadth required for C1–C2 mastery. Proceed to read your text aloud for pronunciation evaluation.";
      this.dom.gatekeeperActionBtn.className = "btn btn-emerald";
      this.dom.gatekeeperActionBtn.textContent = "Proceed to Phase 3: Speaking →";
      
      // Update step indicator
      this.dom.stepIndicator2.classList.add('completed');
      this.dom.stepIndicator3.classList.add('active');
      this.dom.step3LockIcon.innerHTML = "3";
    } else {
      this.dom.gatekeeperBanner.className = "gatekeeper-banner locked";
      this.dom.gatekeeperHeading.textContent = `${this.targetLevel} Threshold Not Reached (Revision Recommended)`;
      this.dom.gatekeeperSubtext.textContent = isC2
        ? `Your draft scored ${evalResult.percentage}%. C2 Proficiency requires a score ≥ 85%, at least 6 target vocabulary words, and multiple advanced syntactic structures. We recommend revising your text using the feedback notes above, or you may choose to practice speaking in Practice Mode.`
        : `Your draft scored below C1 requirements (${evalResult.percentage}%). We recommend revising your text using the feedback notes above, or you may choose to practice speaking in Practice Mode.`;
      this.dom.gatekeeperActionBtn.className = "btn btn-secondary";
      this.dom.gatekeeperActionBtn.textContent = "Practice Speaking Anyway (Override)";
    }

    // Open Modal
    this.dom.evalModalBackdrop.classList.add('open');

    // Save to history
    this.saveSessionToHistory({
      type: 'writing',
      topicId: this.currentTopic.id,
      targetLevel: this.targetLevel,
      topicTitle: this.currentTopic.title,
      text: text,
      score: evalResult.rawTotal,
      percentage: evalResult.percentage,
      band: evalResult.cefr.band,
      meetsThreshold: evalResult.meetsThreshold,
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

    // Strict Guard: Compulsory Target Lexis must be completely fulfilled
    const metrics = analyzeQuickMetrics(text, this.activeVocabulary, this.targetLevel);
    if (metrics.targetWordsTotal > 0 && metrics.targetWordsUsed < metrics.targetWordsTotal) {
      this.showToast(`Cannot advance: All ${metrics.targetWordsTotal} compulsory target words must be used (${metrics.targetWordsUsed}/${metrics.targetWordsTotal} used).`, "warning");
      return;
    }

    this.setStage(3);

    // Reset Speaking metrics
    this.dom.liveSpeakingWpm.textContent = '0';
    this.dom.liveSpeakingAcc.textContent = '0%';
    this.dom.liveSpeakingTime.textContent = '00:00';
    this.dom.speakingReportPanel.style.display = 'none';
  }

  renderTeleprompterTokens(tokens) {
    this.dom.teleprompterText.innerHTML = tokens.map(token => `
      <span class="teleprompter-word ${token.status}" data-index="${token.index}">
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
    this.setStage(2);
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
        <h3>C1–C2 Speaking Practice Assessment</h3>
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
      const history = JSON.parse(localStorage.getItem('fluentedge_history') || '[]');
      history.unshift(entry);
      localStorage.setItem('fluentedge_history', JSON.stringify(history.slice(0, 30)));
      this.renderHistory();
    } catch (e) {
      console.warn("Could not save to localStorage:", e);
    }
  }

  renderHistory() {
    try {
      const history = JSON.parse(localStorage.getItem('fluentedge_history') || '[]');
      if (history.length === 0) {
        this.dom.historyList.innerHTML = `<div style="text-align: center; color: var(--text-muted); padding: 24px; font-size: 13px;">No past sessions yet. Complete an essay or speaking test to track your C1 progression.</div>`;
        return;
      }

      this.dom.historyList.innerHTML = history.map(item => `
        <div class="history-item">
          <div class="history-item-top">
            <span>${item.type === 'writing' ? (item.targetLevel ? `${item.targetLevel} Writing` : 'Writing Task') : 'Speaking Test'}</span>
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
    if (confirm("Clear your FluentEdge training logs?")) {
      localStorage.removeItem('fluentedge_history');
      localStorage.removeItem('fluentedge_topic_progress');
      this.renderHistory();
      this.showToast("History cleared.", "info");
    }
  }

  // ==========================================
  // AI ESSAY PROMPT GENERATOR
  // ==========================================

  getAiEssayPrompt() {
    return generateAiEssayPrompt(this.currentTopic, this.activeVocabulary, this.targetLevel);
  }

  async copyTextToClipboard(text) {
    if (navigator.clipboard && window.isSecureContext) {
      try {
        await navigator.clipboard.writeText(text);
        return true;
      } catch (err) {
        // Fallback to execCommand below
      }
    }
    const textArea = document.createElement('textarea');
    textArea.value = text;
    textArea.style.position = 'fixed';
    textArea.style.left = '-999999px';
    textArea.style.top = '-999999px';
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();
    let successful = false;
    try {
      successful = document.execCommand('copy');
    } catch (err) {
      successful = false;
    }
    document.body.removeChild(textArea);
    return successful;
  }

  async handleQuickCopyAiPrompt(fromAlert = false) {
    const promptText = this.getAiEssayPrompt();
    const success = await this.copyTextToClipboard(promptText);

    if (success) {
      // Animate toolbar button
      if (this.dom.copyAiPromptBtn && this.dom.copyAiPromptBtnText) {
        this.dom.copyAiPromptBtn.classList.add('copied');
        const origText = this.dom.copyAiPromptBtnText.textContent;
        this.dom.copyAiPromptBtnText.textContent = "✓ Prompt Copied!";
        setTimeout(() => {
          this.dom.copyAiPromptBtn.classList.remove('copied');
          this.dom.copyAiPromptBtnText.textContent = origText;
        }, 2600);
      }

      // Animate alert button if triggered from requirement alert
      if (fromAlert && this.dom.reqAlertCopyAiBtnText) {
        this.dom.reqAlertCopyAiBtnText.textContent = "✓ Copied to Clipboard!";
      }

      this.showToast("✓ AI Prompt copied! Paste into ChatGPT, Claude, or Gemini.", "success");
    } else {
      // Fallback: open modal so user can view/copy manually
      this.openAiPromptModal();
      this.showToast("Clipboard write restricted — copy prompt directly from preview.", "info");
    }
  }

  openAiPromptModal() {
    if (!this.dom.aiPromptModalBackdrop) return;

    const isC2 = this.targetLevel === 'C2';
    const promptText = this.getAiEssayPrompt();

    // Badges
    if (this.dom.aiPromptLevelBadge) {
      this.dom.aiPromptLevelBadge.textContent = isC2 ? "C2 PROFICIENCY PROMPT" : "C1 ADVANCED PROMPT";
    }
    if (this.dom.aiPromptWordTargetBadge) {
      this.dom.aiPromptWordTargetBadge.textContent = isC2 ? "280–320 Words Target" : "220–260 Words Target";
    }
    if (this.dom.aiPromptVocabCount) {
      this.dom.aiPromptVocabCount.textContent = `${this.activeVocabulary.length} items`;
    }

    // Render 10 mini vocabulary chips
    if (this.dom.aiPromptVocabChips) {
      this.dom.aiPromptVocabChips.innerHTML = this.activeVocabulary.map(v => {
        const word = v.headword || v.word || '';
        const pos = v.pos || 'lex';
        const posClass = `pos-${pos.toLowerCase()}`;
        const def = v.definition || '';
        const tooltip = def ? `${word} (${pos}) — ${def}` : word;
        return `
          <div class="ai-mini-chip" title="${tooltip}">
            <span class="ai-mini-pos ${posClass}">${pos}</span>
            <span>${word}</span>
          </div>
        `;
      }).join('');
    }

    // Populate textarea
    if (this.dom.aiPromptTextarea) {
      this.dom.aiPromptTextarea.value = promptText;
    }

    // Reset copy button labels
    if (this.dom.modalCopyBtnText) {
      this.dom.modalCopyBtnText.textContent = "Copy Prompt";
    }
    if (this.dom.primaryCopyBtnLabel) {
      this.dom.primaryCopyBtnLabel.textContent = "Copy Prompt to Clipboard";
    }

    // Open modal
    this.dom.aiPromptModalBackdrop.style.display = 'flex';
    void this.dom.aiPromptModalBackdrop.offsetWidth;
    this.dom.aiPromptModalBackdrop.classList.add('open');

    if (this.dom.primaryCopyAiPromptBtn) {
      this.dom.primaryCopyAiPromptBtn.focus();
    }
  }

  closeAiPromptModal() {
    if (!this.dom.aiPromptModalBackdrop) return;
    this.dom.aiPromptModalBackdrop.classList.remove('open');
    setTimeout(() => {
      this.dom.aiPromptModalBackdrop.style.display = 'none';
      if (this.dom.essayInput) {
        this.dom.essayInput.focus();
      }
    }, 250);
  }

  async handleModalCopyAiPrompt() {
    const promptText = this.dom.aiPromptTextarea ? this.dom.aiPromptTextarea.value : this.getAiEssayPrompt();
    const success = await this.copyTextToClipboard(promptText);

    if (success) {
      if (this.dom.modalCopyBtnText) {
        this.dom.modalCopyBtnText.textContent = "✓ Copied!";
      }
      if (this.dom.primaryCopyBtnLabel) {
        this.dom.primaryCopyBtnLabel.textContent = "✓ Prompt Copied to Clipboard!";
      }
      if (this.dom.primaryCopyAiPromptBtn) {
        this.dom.primaryCopyAiPromptBtn.classList.add('copied');
      }

      this.showToast("✓ AI Prompt copied! Paste into ChatGPT, Claude, or Gemini.", "success");

      setTimeout(() => {
        if (this.dom.modalCopyBtnText) this.dom.modalCopyBtnText.textContent = "Copy Prompt";
        if (this.dom.primaryCopyBtnLabel) this.dom.primaryCopyBtnLabel.textContent = "Copy Prompt to Clipboard";
        if (this.dom.primaryCopyAiPromptBtn) this.dom.primaryCopyAiPromptBtn.classList.remove('copied');
      }, 3000);
    } else {
      if (this.dom.aiPromptTextarea) {
        this.dom.aiPromptTextarea.select();
      }
      this.showToast("Prompt selected — press Ctrl+C to copy manually.", "info");
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
    window.app = new FluentEdgeApp();
  });
})();