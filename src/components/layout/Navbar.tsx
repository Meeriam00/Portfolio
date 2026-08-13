import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FiMenu, FiX } from "react-icons/fi";
import { useLanguage } from "../../context/LanguageContext";
import { useActiveSection } from "../../hooks/useActiveSection";
import { site } from "../../data/site";
import { LanguageToggle } from "./LanguageToggle";
import { OPEN_COMMAND_MENU_EVENT } from "../../utils/commandMenuEvent";
import { cn } from "../../utils/cn";

const SECTION_IDS = ["hero", "about", "tech-stack", "projects", "experience", "education", "contact"];

export function Navbar() {
  const { t } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const activeId = useActiveSection(SECTION_IDS);

  const navItems: { id: string; label: string }[] = [
    { id: "hero", label: t.nav.home },
    { id: "about", label: t.nav.about },
    { id: "tech-stack", label: t.nav.techStack },
    { id: "projects", label: t.nav.projects },
    { id: "experience", label: t.nav.experience },
    { id: "contact", label: t.nav.contact },
  ];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-colors duration-300",
        scrolled
          ? "border-b border-border bg-bg/80 backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
      )}
    >
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <a
          href="#hero"
          className="text-sm font-bold uppercase tracking-[0.2em] text-ink"
        >
          {site.initials}
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                className={cn(
                  "text-sm font-medium transition-colors duration-300 hover:text-gold",
                  activeId === item.id
                    ? "text-gold"
                    : "text-ink-soft"
                )}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-2 md:flex">
          <button
            type="button"
            onClick={() => window.dispatchEvent(new CustomEvent(OPEN_COMMAND_MENU_EVENT))}
            title={t.a11y.commandMenuHint}
            className="flex h-9 items-center gap-2 rounded-full border border-border px-3 text-xs text-ink-soft transition-colors duration-300 hover:border-gold hover:text-gold"
          >
            <span>⌘K</span>
          </button>
          <LanguageToggle />
        </div>

        <button
          type="button"
          className="flex h-9 w-9 items-center justify-center text-ink md:hidden"
          aria-label={mobileOpen ? t.a11y.closeMenu : t.a11y.openMenu}
          aria-expanded={mobileOpen}
          aria-controls="mobile-menu"
          onClick={() => setMobileOpen((prev) => !prev)}
        >
          {mobileOpen ? <FiX size={22} /> : <FiMenu size={22} />}
        </button>
      </nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden border-b border-border bg-bg md:hidden"
          >
            <ul className="flex flex-col gap-1 px-6 py-4">
              {navItems.map((item) => (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    onClick={() => setMobileOpen(false)}
                    className={cn(
                      "block rounded-lg px-3 py-2.5 text-base font-medium transition-colors",
                      activeId === item.id
                        ? "text-gold"
                        : "text-ink-soft"
                    )}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
            <div className="flex items-center justify-center border-t border-border px-6 py-4">
              <LanguageToggle />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
