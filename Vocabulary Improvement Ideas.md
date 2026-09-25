PROJECT: C1/C2 English Vocabulary Database

GOAL:
Build a personal English-learning vocabulary database using the
CEFR-J / Octanove C1/C2 vocabulary as the initial CEFR foundation.

The database should NOT simply be a list of C1/C2 words.
It should be a structured vocabulary knowledge base that can later
support definitions, examples, frequency, word families, senses,
spaced repetition, learner progress, and learning prioritization.


============================================================
1. CEFR CLASSIFICATION
============================================================

PRIORITY: CRITICAL

Use the Octanove C1/C2 vocabulary profile as the initial source
for CEFR classification.

Do not initially create our own C1/C2 classification.

Keep the original source information so that the classification
can be audited later.

Example:

"cefr": {
    "level": "C2",
    "source": "octanove"
}


============================================================
2. LEMMAS AND WORD FORMS
============================================================

PRIORITY: CRITICAL

Do not treat every CSV row as a completely independent word.

Separate:

- lemma
- actual word form
- part of speech
- word family

Example:

magnanimous
magnanimously
magnanimity

should be connected as a word family.

Recommended structure:

"word_family": {
    "id": "magnanim",
    "members": [
        "magnanimous",
        "magnanimously",
        "magnanimity"
    ]
}


============================================================
3. WORD SENSES
============================================================

PRIORITY: CRITICAL

A word can have multiple meanings.

Do not store only:

{
    "word": "cast",
    "cefr": "C1"
}

Instead, store individual senses.

Example:

cast
    - throw something
    - choose actors
    - plaster cast

Each sense should have its own definition, examples, and potentially
its own CEFR classification.


============================================================
4. DEFINITIONS
============================================================

PRIORITY: CRITICAL

Every useful vocabulary item should eventually have definitions.

Store both:

- simple learner-friendly definition
- dictionary-style definition

Example:

"definition": {
    "simple": "clear, logical, and convincing",
    "dictionary": null,
    "source": null
}

The "simple" definition is useful for flashcards and exercises.


============================================================
5. EXAMPLE SENTENCES
============================================================

PRIORITY: CRITICAL

Every sense should eventually have natural example sentences.

Example:

"examples": [
    {
        "text": "She presented a cogent argument for changing the policy.",
        "source": null
    }
]

Ideally, use 1-3 natural examples per sense.


============================================================
6. FREQUENCY
============================================================

PRIORITY: VERY HIGH

CEFR level alone should not determine learning priority.

Add corpus frequency information.

Example:

"frequency": {
    "rank": 18432,
    "per_million": 3.7,
    "source": "corpus_name"
}

This allows the program to distinguish between:

- advanced + relatively common
- advanced + extremely rare


============================================================
7. LEARNING PRIORITY
============================================================

PRIORITY: VERY HIGH

Do not automatically assume:

C2 = higher learning priority than C1.

Create a separate learning-priority system.

Potential factors:

- CEFR level
- frequency
- general usefulness
- number of common senses
- domain
- learner performance
- learner exposure
- difficulty

Example:

"learning": {
    "priority": null,
    "difficulty": null
}

The actual algorithm can be developed later.


============================================================
8. BRITISH / AMERICAN VARIANTS
============================================================

PRIORITY: HIGH

Do not treat British and American spelling variants as unrelated
vocabulary items.

Examples:

favour / favor
colour / color
recognise / recognize

Recommended structure:

"variants": {
    "british": [
        "favour"
    ],
    "american": [
        "favor"
    ]
}


============================================================
9. DATA QUALITY
============================================================

PRIORITY: HIGH

The original dataset should be validated before being exposed
to the learner.

Check for:

- spelling mistakes
- malformed part-of-speech values
- duplicates
- duplicate word/sense combinations
- capitalization inconsistencies
- punctuation problems
- invalid CEFR values
- British/American duplicates
- suspicious entries
- possible data-entry errors

Do NOT silently delete questionable records.

Instead, flag them.

Example:

"data_quality": {
    "status": "review",
    "issues": [
        "possible_spelling_error"
    ]
}

Possible statuses:

- verified
- review
- questionable
- excluded


============================================================
10. SPECIALIZED VOCABULARY
============================================================

PRIORITY: MEDIUM-HIGH

Do not automatically remove specialized vocabulary.

Some C2 words may be technical:

- medicine
- science
- technology
- law
- finance
- literature

Instead, classify the domain.

Example:

"domains": [
    "medicine"
]

or:

"domains": [
    "general",
    "academic"
]

Possible domains:

- general
- academic
- business
- law
- medicine
- science
- technology
- literature
- politics
- finance
- informal


============================================================
11. SOURCE / PROVENANCE
============================================================

PRIORITY: MEDIUM-HIGH

Track where every important piece of information came from.

Example:

"cefr": {
    "level": "C2",
    "source": "octanove"
}

Example:

"definition": {
    "simple": "clear, logical, and convincing",
    "dictionary": null,
    "source": "wordnet"
}

This is important because multiple datasets will eventually
be combined.


============================================================
12. LEARNER DATA
============================================================

PRIORITY: MEDIUM

Do NOT put learner progress directly inside the vocabulary record.

Keep vocabulary information separate from user learning information.

VOCABULARY:

{
    "id": "cogent",
    "lemma": "cogent",
    ...
}

LEARNER DATA:

{
    "word_id": "cogent",
    "status": "learning",
    "times_seen": 8,
    "times_correct": 6,
    "last_reviewed": "2026-09-22",
    "next_review": "2026-09-25"
}

This will make spaced repetition and future multi-user support
much easier.


============================================================
13. RECOMMENDED DATABASE ARCHITECTURE
============================================================

VOCABULARY
|
+-- word information
|
+-- CEFR classification
|
+-- frequency
|
+-- spelling variants
|
+-- word family
|
+-- domains
|
+-- senses
|     |
|     +-- definitions
|     |
|     +-- examples
|     |
|     +-- sense-specific CEFR
|
+-- data quality
|
+-- sources


LEARNER DATA
|
+-- learning status
|
+-- review history
|
+-- difficulty
|
+-- retention
|
+-- next review
|
+-- performance


============================================================
14. RECOMMENDED JSON STRUCTURE
============================================================

{
    "id": "cogent",

    "lemma": "cogent",

    "forms": [
        {
            "form": "cogent",
            "part_of_speech": "adjective"
        }
    ],

    "cefr": {
        "level": "C2",
        "source": "octanove"
    },

    "frequency": {
        "rank": null,
        "per_million": null,
        "source": null
    },

    "variants": {
        "british": [],
        "american": []
    },

    "word_family": {
        "id": "cogent",
        "members": [
            "cogent"
        ]
    },

    "domains": [
        "general",
        "academic"
    ],

    "senses": [
        {
            "id": "cogent-1",

            "definition": {
                "simple": "clear, logical, and convincing",
                "dictionary": null,
                "source": null
            },

            "examples": [
                {
                    "text": "She presented a cogent argument for changing the policy.",
                    "source": null
                }
            ],

            "cefr": {
                "level": "C2",
                "source": "octanove"
            }
        }
    ],

    "learning": {
        "priority": null,
        "difficulty": null
    },

    "data_quality": {
        "status": "verified",
        "issues": []
    },

    "sources": [
        {
            "name": "Octanove Vocabulary Profile",
            "type": "cefr"
        }
    ]
}


============================================================
15. RECOMMENDED LEARNER RECORD
============================================================

Keep this in a separate collection/table.

{
    "word_id": "cogent",

    "status": "learning",

    "times_seen": 8,

    "times_correct": 6,

    "times_incorrect": 2,

    "last_reviewed": "2026-09-22",

    "next_review": "2026-09-25",

    "difficulty": 0.6,

    "retention": 0.75,

    "notes": ""
}


============================================================
16. DEVELOPMENT PRIORITY
============================================================

IMPLEMENT IN THIS ORDER:

1. Import Octanove C1/C2 data
2. Clean and validate the raw data
3. Normalize lemmas
4. Normalize parts of speech
5. Handle duplicates
6. Handle British/American variants
7. Create word families
8. Separate words from senses
9. Add definitions
10. Add example sentences
11. Add frequency information
12. Add domain classification
13. Add learning-priority calculation
14. Create separate learner-progress tables
15. Add spaced-repetition functionality


============================================================
17. IMPORTANT DESIGN PRINCIPLE
============================================================

DO NOT BUILD:

"word -> C1/C2"

BUILD:

"word
 -> forms
 -> parts of speech
 -> CEFR
 -> senses
 -> definitions
 -> examples
 -> frequency
 -> variants
 -> word family
 -> domains
 -> sources
 -> data quality"

AND KEEP:

"learner progress"

IN A SEPARATE DATA MODEL.


============================================================
18. FINAL OBJECTIVE
============================================================

The final database should allow the application to answer questions
such as:

- What C1 words does the learner not know?
- What C2 words does the learner not know?
- Which advanced words are most frequent?
- Which words belong to the same word family?
- What are the different meanings of this word?
- Which meaning does the learner struggle with?
- Which words are British/American variants?
- Which words are academic or technical?
- Which words should be reviewed today?
- Which C1/C2 words are high priority for this learner?
- Which words have questionable source data?
- Where did the CEFR classification come from?


============================================================
CORE DATA MODEL
============================================================

VOCABULARY WORD
    |
    +-- lemma
    |
    +-- forms[]
    |
    +-- part_of_speech
    |
    +-- cefr
    |
    +-- frequency
    |
    +-- variants
    |
    +-- word_family
    |
    +-- domains[]
    |
    +-- senses[]
    |      |
    |      +-- definition
    |      +-- examples[]
    |      +-- sense-specific CEFR
    |
    +-- learning metadata
    |
    +-- data quality
    |
    +-- sources[]


LEARNER WORD
    |
    +-- word_id
    +-- status
    +-- times_seen
    +-- times_correct
    +-- times_incorrect
    +-- difficulty
    +-- retention
    +-- last_reviewed
    +-- next_review
    +-- notes
