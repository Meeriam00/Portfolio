import type { EducationItem } from "./types";

export const education: EducationItem[] = [
  {
    id: "ascca",
    type: {
      en: "Bachelor's Degree",
      az: "Bakalavr Dərəcəsi",
      tr: "Lisans Derecesi",
    },
    institution: "Academy of the State Customs Committee (ASCCA)",
    field: {
      en: "Information Technology — English-taught program",
      az: "İnformasiya Texnologiyaları — ingilis dilində tədris proqramı",
      tr: "Bilişim Teknolojileri — İngilizce eğitim programı",
    },
    from: { en: "September 2022", az: "Sentyabr 2022", tr: "Eylül 2022" },
    to: { en: "June 2026", az: "İyun 2026", tr: "Haziran 2026" },
  },
  {
    id: "girls-code",
    type: {
      en: "Certificate Program",
      az: "Sertifikat Proqramı",
      tr: "Sertifika Programı",
    },
    institution: "Girls Code Azerbaijan × Matrix Academy",
    field: {
      en: "Front-End Development",
      az: "Front-End Proqramlaşdırma",
      tr: "Front-End Programlama",
    },
    from: { en: "June 2024", az: "İyun 2024", tr: "Haziran 2024" },
    to: { en: "January 2025", az: "Yanvar 2025", tr: "Ocak 2025" },
  },
  {
    id: "xploit-academy",
    type: {
      en: "Certificate Program",
      az: "Sertifikat Proqramı",
      tr: "Sertifika Programı",
    },
    institution: "Xploit Academy, Baku",
    field: {
      en: "Manual QA & Software Testing",
      az: "Manual QA və Proqram Təminatının Testi",
      tr: "Manuel QA ve Yazılım Testi",
    },
    from: { en: "February 2025", az: "Fevral 2025", tr: "Şubat 2025" },
    to: { en: "June 2025", az: "İyun 2025", tr: "Haziran 2025" },
  },
];
