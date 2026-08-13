import { useEffect, useState } from "react";
import { Command } from "cmdk";
import {
  FiHome,
  FiUser,
  FiCode,
  FiFolder,
  FiBriefcase,
  FiBookOpen,
  FiMail,
  FiDownload,
  FiCopy,
  FiGithub,
  FiLinkedin,
} from "react-icons/fi";
import { useLanguage } from "../../context/LanguageContext";
import { site } from "../../data/site";
import { languageLabels, languages } from "../../data/i18n";
import { OPEN_COMMAND_MENU_EVENT } from "../../utils/commandMenuEvent";

const NAV_ITEMS = [
  { id: "hero", icon: FiHome, labelKey: "home" as const },
  { id: "about", icon: FiUser, labelKey: "about" as const },
  { id: "tech-stack", icon: FiCode, labelKey: "techStack" as const },
  { id: "projects", icon: FiFolder, labelKey: "projects" as const },
  { id: "experience", icon: FiBriefcase, labelKey: "experience" as const },
  { id: "education", icon: FiBookOpen, labelKey: "education" as const },
  { id: "contact", icon: FiMail, labelKey: "contact" as const },
];

export default function CommandMenu() {
  const [open, setOpen] = useState(false);
  const { t, lang, setLang } = useLanguage();

  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") {
        event.preventDefault();
        setOpen((prev) => !prev);
      }
    }
    function handleOpenEvent() {
      setOpen(true);
    }
    document.addEventListener("keydown", handleKeyDown);
    window.addEventListener(OPEN_COMMAND_MENU_EVENT, handleOpenEvent);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener(OPEN_COMMAND_MENU_EVENT, handleOpenEvent);
    };
  }, []);

  const runAndClose = (action: () => void) => {
    action();
    setOpen(false);
  };

  const goTo = (id: string) =>
    runAndClose(() => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" }));

  return (
    <Command.Dialog
      open={open}
      onOpenChange={setOpen}
      label="Command Menu"
      overlayClassName="fixed inset-0 z-[85] bg-black/70 backdrop-blur-sm"
      contentClassName="fixed left-1/2 top-24 z-[90] w-[min(90vw,32rem)] -translate-x-1/2"
      className="overflow-hidden rounded-2xl border border-border bg-card shadow-2xl"
    >
      <div className="border-b border-border px-4">
        <Command.Input
          placeholder={t.commandMenu.placeholder}
          className="h-12 w-full bg-transparent text-sm text-ink outline-none placeholder:text-ink-soft"
        />
      </div>
      <Command.List className="max-h-96 overflow-y-auto p-2">
        <Command.Empty className="px-3 py-6 text-center text-sm text-ink-soft">
          {t.commandMenu.empty}
        </Command.Empty>

        <Command.Group
          heading={t.commandMenu.groupNav}
          className="px-2 py-1 text-xs font-medium uppercase tracking-wide text-ink-soft [&_[cmdk-group-items]]:mt-1"
        >
          {NAV_ITEMS.map(({ id, icon: Icon, labelKey }) => (
            <Command.Item
              key={id}
              onSelect={() => goTo(id)}
              className="flex cursor-pointer items-center gap-3 rounded-lg px-3 py-2.5 text-sm text-ink data-[selected=true]:bg-white/5"
            >
              <Icon size={16} className="text-gold" />
              {labelKey === "home" ? site.name : t.nav[labelKey]}
            </Command.Item>
          ))}
        </Command.Group>

        <Command.Group
          heading={t.commandMenu.groupActions}
          className="px-2 py-1 text-xs font-medium uppercase tracking-wide text-ink-soft [&_[cmdk-group-items]]:mt-1"
        >
          <Command.Item
            onSelect={() => runAndClose(() => window.open(site.resumeUrl, "_blank"))}
            className="flex cursor-pointer items-center gap-3 rounded-lg px-3 py-2.5 text-sm text-ink data-[selected=true]:bg-white/5"
          >
            <FiDownload size={16} className="text-gold" />
            {t.commandMenu.downloadCV}
          </Command.Item>
          <Command.Item
            onSelect={() => runAndClose(() => navigator.clipboard.writeText(site.email))}
            className="flex cursor-pointer items-center gap-3 rounded-lg px-3 py-2.5 text-sm text-ink data-[selected=true]:bg-white/5"
          >
            <FiCopy size={16} className="text-gold" />
            {t.commandMenu.copyEmail}
          </Command.Item>
          {languages.map((option) => (
            <Command.Item
              key={option}
              onSelect={() => runAndClose(() => setLang(option))}
              className="flex cursor-pointer items-center justify-between rounded-lg px-3 py-2.5 text-sm text-ink data-[selected=true]:bg-white/5"
            >
              <span>
                {t.commandMenu.language}: {languageLabels[option]}
              </span>
              {option === lang && <span className="text-gold">•</span>}
            </Command.Item>
          ))}
        </Command.Group>

        <Command.Group
          heading={t.commandMenu.groupSocial}
          className="px-2 py-1 text-xs font-medium uppercase tracking-wide text-ink-soft [&_[cmdk-group-items]]:mt-1"
        >
          <Command.Item
            onSelect={() => runAndClose(() => window.open(site.social.github, "_blank"))}
            className="flex cursor-pointer items-center gap-3 rounded-lg px-3 py-2.5 text-sm text-ink data-[selected=true]:bg-white/5"
          >
            <FiGithub size={16} className="text-gold" />
            {t.commandMenu.openGithub}
          </Command.Item>
          <Command.Item
            onSelect={() => runAndClose(() => window.open(site.social.linkedin, "_blank"))}
            className="flex cursor-pointer items-center gap-3 rounded-lg px-3 py-2.5 text-sm text-ink data-[selected=true]:bg-white/5"
          >
            <FiLinkedin size={16} className="text-gold" />
            {t.commandMenu.openLinkedin}
          </Command.Item>
        </Command.Group>
      </Command.List>
    </Command.Dialog>
  );
}
