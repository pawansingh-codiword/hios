export const courses = [
    {
        id: "veda-jyoti",
        title: "Veda Jyoti – Foundations of Vedic Science",
        description: "A comprehensive introduction to the core principles of Vedic knowledge, exploring the origin of the Vedas and their scientific relevance today.",
        instructor: "Acharya Vivek",
        price: 999,
        thumbnail: "/images/vedic.png",
        totalLessons: 18,
        learningOutcomes: [
            "Understand the historical context and origin of the Vedas.",
            "Identify the four main Vedas and their primary focus areas.",
            "Learn basic Sanskrit terminology related to Vedic studies.",
            "Explore the relevance of Vedic wisdom in modern daily life."
        ],
        modules: [
            {
                id: "mod-1",
                title: "Origins of Vedic Thought",
                lessons: [
                    { id: "les-vj-1", title: "What are the Vedas?", duration: "12:00", isFree: true },
                    { id: "les-vj-2", title: "The Four Pillars", duration: "18:30", isFree: false },
                    { id: "les-vj-3", title: "Oral Tradition & Memorization", duration: "15:00", isFree: false },
                ]
            },
            {
                id: "mod-2",
                title: "Vedic Sanskrit Basics",
                lessons: [
                    { id: "les-vj-4", title: "Introduction to Devanagari", duration: "25:00", isFree: false },
                    { id: "les-vj-5", title: "Common Vedic Mantras", duration: "20:00", isFree: false },
                ]
            }
        ],
        accessRules: [
            { fee: 0, access: 0 },
            { fee: 25, access: 20 },
            { fee: 50, access: 25 },
            { fee: 75, access: 60 },
            { fee: 100, access: 100 },
        ]
    },
    {
        id: "rishi-gyaan",
        title: "Rishi Gyaan – Ancient Indian Science Program",
        description: "Rediscover the lost scientific advancements of ancient India, from metallurgy to astronomy, as documented by the great Rishis.",
        instructor: "Dr. S. Radhakrishnan",
        price: 1299,
        thumbnail: "/images/geometry.png",
        totalLessons: 24,
        learningOutcomes: [
            "Identify major scientific achievements of ancient Indian scholars.",
            "Understand the principles of Vimanika Shastra (Aeronautics).",
            "Explore ancient metallurgy and chemical science.",
            "Analyze the astronomical observations from the Surya Siddhanta."
        ],
        modules: [
            {
                id: "mod-1",
                title: "Ancient Technology",
                lessons: [
                    { id: "les-rg-1", title: "Vimanika Shastra", duration: "20:00", isFree: true },
                    { id: "les-rg-2", title: "Ancient Metallurgy", duration: "25:00", isFree: false },
                ]
            }
        ],
        accessRules: [
            { fee: 0, access: 0 },
            { fee: 25, access: 20 },
            { fee: 50, access: 25 },
            { fee: 75, access: 60 },
            { fee: 100, access: 100 },
        ]
    },
    {
        id: "veda-vidya",
        title: "Veda Vidya – Science of Conscious Living",
        description: "Learn how to apply Vedic wisdom to modern lifestyle choices, diet, and mental well-being for a balanced and conscious life.",
        instructor: "Swami Nithya",
        price: 799,
        thumbnail: "/images/abstract.png",
        totalLessons: 15,
        learningOutcomes: [
            "Design a daily routine (Dinacharya) based on Vedic principles.",
            "Understand the impact of diet (Ahara) on consciousness.",
            "Practice basic Vedic meditation and breathing techniques.",
            "Apply ethical living (Yamas and Niyamas) in a modern context."
        ],
        modules: [
            {
                id: "mod-1",
                title: "Conscious Habits",
                lessons: [
                    { id: "les-vv-1", title: "Dinacharya: Daily Routine", duration: "15:00", isFree: true },
                ]
            }
        ],
        accessRules: [
            { fee: 0, access: 0 },
            { fee: 25, access: 20 },
            { fee: 50, access: 25 },
            { fee: 75, access: 60 },
            { fee: 100, access: 100 },
        ]
    },
    {
        id: "brahma-tatva",
        title: "Brahma Tatva – Complete Vedic Science Course",
        description: "An advanced course covering the metaphysics of reality, the concept of Brahman, and the interconnectedness of the universe.",
        instructor: "Pandit Ravi Shankar",
        price: 2499,
        thumbnail: "/images/cosmic.png",
        totalLessons: 40,
        learningOutcomes: [
            "Deeply explore the concept of Brahman and Atman.",
            "Understand the Vedantic school of philosophy.",
            "Analyze the relationship between consciousness and the physical world.",
            "Study the major Upanishads and their core messages."
        ],
        modules: [
            {
                id: "mod-1",
                title: "Metaphysics 101",
                lessons: [{ id: "les-bt-1", title: "Nature of Reality", duration: "30:00", isFree: true }]
            }
        ],
        accessRules: [
            { fee: 0, access: 0 },
            { fee: 25, access: 20 },
            { fee: 50, access: 25 },
            { fee: 75, access: 60 },
            { fee: 100, access: 100 },
        ]
    },
    {
        id: "agni-sutra",
        title: "Agni Sutra – Energy & Knowledge in Vedic Science",
        description: "Study the concept of Agni (Fire) as energy and transformation in the physical and spiritual realms according to Vedic tests.",
        instructor: "Dr. Agnihotri",
        price: 899,
        thumbnail: "/images/geometry.png",
        totalLessons: 12,
        learningOutcomes: [
            "Understand the symbolic and physical nature of Agni.",
            "Learn the science behind Yajna (Vedic rituals).",
            "Explore the role of energy in human physiology.",
            "Study the connection between fire and transformation."
        ],
        modules: [
            {
                id: "mod-1",
                title: "Fire Rituals",
                lessons: [{ id: "les-as-1", title: "Science of Yajna", duration: "22:00", isFree: true }]
            }
        ],
        accessRules: [
            { fee: 0, access: 0 },
            { fee: 25, access: 20 },
            { fee: 50, access: 25 },
            { fee: 75, access: 60 },
            { fee: 100, access: 100 },
        ]
    },
    {
        id: "sanatan-science",
        title: "Sanatan Science – Secrets of the Vedas",
        description: "Unlocking the timeless truths (Sanatan Dharma) hidden within the Vedas regarding cosmology, mathematics, and medicine.",
        instructor: "Prof. K. Nair",
        price: 1499,
        thumbnail: "/images/vedic.png",
        totalLessons: 20,
        learningOutcomes: [
            "Identify timeless universal laws within the Vedas.",
            "Learn basic Vedic Mathematics for fast calculations.",
            "Understand the basics of Ayurvedic healing principles.",
            "Explore Vedic cosmology and the creation of the universe."
        ],
        modules: [
            {
                id: "mod-1",
                title: "Vedic Mathematics",
                lessons: [{ id: "les-ss-1", title: "Speed Calculation", duration: "16:00", isFree: true }]
            }
        ],
        accessRules: [
            { fee: 0, access: 0 },
            { fee: 25, access: 20 },
            { fee: 50, access: 25 },
            { fee: 75, access: 60 },
            { fee: 100, access: 100 },
        ]
    },
    {
        id: "veda-prakash",
        title: "Veda Prakash – Applied Vedic Knowledge",
        description: "Practical applications of Vedic theory in modern engineering, architecture (Vastu), and environmental science.",
        instructor: "Ar. Vishwakarma",
        price: 1199,
        thumbnail: "/images/abstract.png",
        totalLessons: 16,
        learningOutcomes: [
            "Apply Vastu Shastra principles to living spaces.",
            "Understand eco-friendly building practices in Vedic tradition.",
            "Explore modern agricultural practices inspired by Vedic texts.",
            "Integrate Vedic engineering concepts in small projects."
        ],
        modules: [
            {
                id: "mod-1",
                title: "Vastu Shastra Introduction",
                lessons: [{ id: "les-vp-1", title: "Directions & Elements", duration: "19:00", isFree: true }]
            }
        ],
        accessRules: [
            { fee: 0, access: 0 },
            { fee: 25, access: 20 },
            { fee: 50, access: 25 },
            { fee: 75, access: 60 },
            { fee: 100, access: 100 },
        ]
    },
    {
        id: "rishi-sutra",
        title: "Rishi Sutra – Ancient Science for Modern Life",
        description: "Bridging the gap between the ancient Rishis' sutras and modern scientific discoveries in quantum physics and biology.",
        instructor: "Dr. Deepak Chopra (AI)",
        price: 1599,
        thumbnail: "/images/cosmic.png",
        totalLessons: 22,
        learningOutcomes: [
            "See parallels between quantum physics and Vedic metaphysics.",
            "Understand the biological impact of meditation and mindset.",
            "Learn how to translate ancient aphorisms into modern action.",
            "Explore the concept of the unified field from both perspectives."
        ],
        modules: [
            {
                id: "mod-1",
                title: "Quantum Consciousness",
                lessons: [{ id: "les-rs-1", title: "Observer Effect", duration: "25:00", isFree: true }]
            }
        ],
        accessRules: [
            { fee: 0, access: 0 },
            { fee: 25, access: 20 },
            { fee: 50, access: 25 },
            { fee: 75, access: 60 },
            { fee: 100, access: 100 },
        ]
    },
    {
        id: "atharva-science",
        title: "Atharva Science – Vedic Wisdom & Natural Laws",
        description: "A deep dive into the Atharva Veda, focusing on Ayurveda, healing, and the manipulation of natural forces.",
        instructor: "Vaidya Mishra",
        price: 899,
        thumbnail: "/images/vedic.png",
        totalLessons: 14,
        learningOutcomes: [
            "Identify healing mantras and rituals from the Atharva Veda.",
            "Understand the connection between nature and human health.",
            "Explore basic herbal formulations for common ailments.",
            "Study the ethical use of power in Vedic traditions."
        ],
        modules: [
            {
                id: "mod-1",
                title: "Ayurvedic Foundations",
                lessons: [{ id: "les-ats-1", title: "The Three Doshas", duration: "20:00", isFree: true }]
            }
        ],
        accessRules: [
            { fee: 0, access: 0 },
            { fee: 25, access: 20 },
            { fee: 50, access: 25 },
            { fee: 75, access: 60 },
            { fee: 100, access: 100 },
        ]
    },
    {
        id: "cosmic-veda",
        title: "Cosmic Veda – Science, Mind & Universe",
        description: "Exploring the Vedic cosmology of the universe's creation, preservation, and dissolution, parallel to modern Big Bang theory.",
        instructor: "Dr. Carl Sagan (Legacy)",
        price: 1999,
        thumbnail: "/images/cosmic.png",
        totalLessons: 30,
        learningOutcomes: [
            "Understand the Vedic concept of time cycles (Yugas).",
            "Be able to compare Big Bang theory with Vedic creation myths.",
            "Explore the concept of Multi-verses in ancient texts.",
            "Analyze the role of consciousness in systemic creation."
        ],
        modules: [
            {
                id: "mod-1",
                title: "Cosmic Cycles",
                lessons: [{ id: "les-cv-1", title: "The Yugas", duration: "35:00", isFree: true }]
            }
        ],
        accessRules: [
            { fee: 0, access: 0 },
            { fee: 25, access: 20 },
            { fee: 50, access: 25 },
            { fee: 75, access: 60 },
            { fee: 100, access: 100 },
        ]
    },
    {
        id: "course-occult-1",
        title: "Occult Science & Mysticism",
        description: "Unveil the hidden laws of nature. Master the study of Hermetic principles, Sacred Geometry, and the metaphysical architecture of reality.",
        instructor: "Dr. Alistair Crowley",
        price: 799,
        thumbnail: "/images/geometry.png",
        totalLessons: 24,
        learningOutcomes: [
            "Deconstruct Hermetic laws and their application.",
            "Master basic Sacred Geometry drawing and theory.",
            "Understand the historical evolution of occult societies.",
            "Learn the basics of metaphysical architecture."
        ],
        modules: [
            {
                id: "mod-1",
                title: "Foundations of the Esoteric",
                lessons: [
                    { id: "les-1", title: "The Kybalion & 7 Principles", duration: "18:00", isFree: true },
                    { id: "les-2", title: "History of Alchemy", duration: "22:30", isFree: false },
                    { id: "les-3", title: "Symbolism in Ancient Texts", duration: "15:45", isFree: false },
                ]
            }
        ],
        accessRules: [
            { fee: 0, access: 0 },
            { fee: 25, access: 20 },
            { fee: 50, access: 25 },
            { fee: 75, access: 60 },
            { fee: 100, access: 100 },
        ]
    }
];
