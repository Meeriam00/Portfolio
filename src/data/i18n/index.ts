import type { Lang, UIDict } from "../types";
import { en } from "./en";
import { az } from "./az";
import { tr } from "./tr";

export const dictionaries: Record<Lang, UIDict> = { en, az, tr };

export const languageLabels: Record<Lang, string> = {
  en: "English",
  az: "Azərbaycan",
  tr: "Türkçe",
};

export const languages: Lang[] = ["en", "az", "tr"];
