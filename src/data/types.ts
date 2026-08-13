import type { IconType } from "react-icons";

export type Lang = "en" | "az" | "tr";

export type LocalizedText = Record<Lang, string>;

export interface UIDict {
  meta: {
    title: string;
    description: string;
  };
  nav: {
    home: string;
    about: string;
    techStack: string;
    projects: string;
    experience: string;
    education: string;
    contact: string;
  };
  hero: {
    greeting: string;
    role: string;
    tagline: string;
    ctaProjects: string;
    ctaResume: string;
    scrollHint: string;
  };
  about: {
    kicker: string;
    title: string;
    body: string[];
    philosophyTitle: string;
    philosophy: { title: string; desc: string }[];
    statLabels: { experience: string; projects: string; technologies: string };
  };
  techStack: {
    kicker: string;
    title: string;
    subtitle: string;
  };
  projects: {
    kicker: string;
    title: string;
    subtitle: string;
    role: string;
    overview: string;
    responsibilities: string;
    techStack: string;
    performance: string;
    responsive: string;
    apiIntegration: string;
    liveWebsite: string;
  };
  experience: {
    kicker: string;
    title: string;
    subtitle: string;
    present: string;
  };
  education: {
    kicker: string;
    title: string;
    subtitle: string;
  };
  contact: {
    kicker: string;
    title: string;
    subtitle: string;
    emailLabel: string;
    linkedinLabel: string;
    githubLabel: string;
    form: {
      name: string;
      email: string;
      subject: string;
      message: string;
      send: string;
      sending: string;
      success: string;
      error: string;
      nameError: string;
      emailError: string;
      subjectError: string;
      messageError: string;
    };
  };
  footer: {
    rights: string;
    builtWith: string;
  };
  commandMenu: {
    placeholder: string;
    empty: string;
    groupNav: string;
    groupActions: string;
    groupSocial: string;
    downloadCV: string;
    copyEmail: string;
    copied: string;
    openGithub: string;
    openLinkedin: string;
    language: string;
  };
  notFound: {
    title: string;
    subtitle: string;
    backHome: string;
  };
  loading: {
    tagline: string;
  };
  a11y: {
    skipToContent: string;
    openMenu: string;
    closeMenu: string;
    commandMenuHint: string;
  };
}

export interface ExperienceItem {
  id: string;
  title: LocalizedText;
  company: string;
  location: string;
  description: LocalizedText;
  from: LocalizedText;
  to: LocalizedText;
  current?: boolean;
}

export interface EducationItem {
  id: string;
  type: LocalizedText;
  institution: string;
  field: LocalizedText;
  from: LocalizedText;
  to: LocalizedText;
}

export interface TechItem {
  name: string;
  icon: IconType;
}

export interface ProjectItem {
  id: string;
  title: string;
  domain: string;
  role: LocalizedText;
  overview: LocalizedText;
  responsibilities: LocalizedText[];
  techStack: string[];
  performance: LocalizedText;
  responsive: LocalizedText;
  apiIntegration: LocalizedText;
  liveUrl: string;
  image: string;
}
