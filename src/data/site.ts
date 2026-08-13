import cvFile from "../assets/img/CV.pdf";
import portraitImg from "../assets/img/personal.webp";

export const site = {
  name: "Meryem Abdullayeva",
  initials: "MA",
  role: "Front-End Developer",
  email: "meeriam.abdullayeva03@gmail.com",
  location: "Baku, Azerbaijan",
  social: {
    github: "https://github.com/Meeriam00",
    linkedin: "https://www.linkedin.com/in/meryem-abdullayeva-552748254",
  },
  resumeUrl: cvFile,
  portrait: portraitImg,
  emailjs: {
    serviceId: "service_bvrb8mp",
    templateId: "template_xo6egu8",
    publicKey: "34Fd6ZenmSzGBOZf3",
  },
} as const;
