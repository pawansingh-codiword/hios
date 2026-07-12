// Author / teacher / consultant profiles — used for E-E-A-T signals
// (author bylines + Person schema) across content pages.

export const authors = {
  "guruma-janvi-tripathi": {
    name: "Guruma Janvi Tripathi",
    role: "Senior Astrologer & Spiritual Mentor",
    image: "/images/GurumaJanviTripathi.jpeg",
    bio: "Guruma Janvi Tripathi is a senior teacher at Hamsa Institute of Occult Science, guiding students in astrology, numerology and the sacred sciences. Her teaching blends classical scripture with practical, compassionate guidance.",
    credentials: ["Astrology", "Numerology", "Tarot"],
  },
  "ajay-kumar": {
    name: "Ajay Kumar",
    role: "Senior Astrologer — 20+ Years Experience",
    image: "/images/ajay_kumar_astrologer.png",
    bio: "With over 20 years of professional practice, Ajay Kumar mentors advanced learners in predictive astrology, the KP system and professional consultation at Hamsa Institute of Occult Science.",
    credentials: ["Vedic Astrology", "KP System", "Predictive Astrology"],
  },
  "ekta-tripathi": {
    name: "Ekta Tripathi",
    role: "Senior Angel Card Reader, Tarot Reader & Spiritual Mentor",
    image: "/images/AngelCardReaderTarotReader.png",
    bio: "With more than 10 years of dedicated experience, Ekta Tripathi guides students through Angel Card Reading, Tarot Reading and advanced spiritual practices. Her intuitive approach, practical teaching style and compassionate guidance help learners develop confidence, clarity and a deeper understanding of intuitive sciences.",
    credentials: ["Angel Card Reading", "Tarot Reading", "Spiritual Mentoring"],
  },
};

export const HIOS = {
  name: "Hamsa Institute of Occult Science",
  url: "https://indianoccult.com",
};

export const getAuthor = (id) => authors[id];
