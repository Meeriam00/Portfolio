import type { ExperienceItem } from "./types";

export const experience: ExperienceItem[] = [
  {
    id: "matrix-academy",
    title: {
      en: "Front-End Instructor",
      az: "Front-End Təlimçisi",
      tr: "Front-End Eğitmeni",
    },
    company: "Matrix Academy",
    location: "Baku, Azerbaijan",
    description: {
      en: "Teach React, Redux Toolkit, and modern front-end engineering to aspiring developers, translating production-grade practices into clear, hands-on lessons. Mentor students through real-world project builds — reviewing code and guiding component architecture, state management, and API integration. Introduce Git workflows and collaboration standards that mirror professional development teams.",
      az: "Matrix Academy-də tələbələrə React, Redux Toolkit və müasir front-end texnologiyalarını tədris edirəm, istehsalat səviyyəli təcrübələri aydın və praktiki dərslərə çeviririk. Tələbələri real layihələr üzərində mentorluq edirəm — kod icmalı aparır, komponent arxitekturası, state idarəetməsi və API inteqrasiyası üzrə istiqamətləndirirəm. Peşəkar komandaların iş prosesini əks etdirən Git iş axını və əməkdaşlıq standartlarını tədris edirəm.",
      tr: "Matrix Academy'de öğrencilere React, Redux Toolkit ve modern front-end teknolojilerini öğretiyorum; üretim seviyesindeki pratikleri net, uygulamalı derslere dönüştürüyorum. Öğrencilere gerçek projeler üzerinde mentorluk yapıyor, kod incelemesi yapıyor, bileşen mimarisi, state yönetimi ve API entegrasyonu konusunda yol gösteriyorum. Profesyonel geliştirme ekiplerini yansıtan Git iş akışları ve işbirliği standartları öğretiyorum.",
    },
    from: { en: "August 2025", az: "Avqust 2025", tr: "Ağustos 2025" },
    to: { en: "Present", az: "Hazırda", tr: "Halen" },
    current: true,
  },
  {
    id: "webluna-software",
    title: {
      en: "Front-End Developer",
      az: "Front-End Developer",
      tr: "Front-End Geliştirici",
    },
    company: "Webluna Software",
    location: "Baku, Azerbaijan",
    description: {
      en: "Built and shipped scalable, responsive web applications with React and TypeScript. Owned state management with Redux Toolkit and RTK Query, integrated REST APIs with efficient asynchronous data handling, and improved performance through memoization and lazy loading. Collaborated closely with backend engineers and designers in an Agile workflow, managing version control with Git across the team.",
      az: "React və TypeScript ilə miqyaslana bilən, responsiv veb tətbiqlər hazırladım və istifadəyə verdim. Redux Toolkit və RTK Query ilə state idarəetməsini həyata keçirdim, REST API-ləri effektiv asinxron məlumat emalı ilə inteqrasiya etdim, memoization və lazy loading vasitəsilə performansı artırdım. Agile iş prosesində backend mühəndisləri və dizaynerlərlə sıx əməkdaşlıq etdim, komanda daxilində Git ilə versiya nəzarətini idarə etdim.",
      tr: "React ve TypeScript ile ölçeklenebilir, duyarlı web uygulamaları geliştirdim ve yayına aldım. Redux Toolkit ve RTK Query ile state yönetimini üstlendim, REST API'leri verimli asenkron veri işleme ile entegre ettim, memoization ve lazy loading ile performansı artırdım. Agile iş akışında backend mühendisleri ve tasarımcılarla yakın çalıştım, ekip içinde Git ile versiyon kontrolünü yönettim.",
    },
    from: { en: "March 2025", az: "Mart 2025", tr: "Mart 2025" },
    to: { en: "February 2026", az: "Fevral 2026", tr: "Şubat 2026" },
  },
];
