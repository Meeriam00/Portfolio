import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FiGlobe } from "react-icons/fi";
import { useLanguage } from "../../context/LanguageContext";
import { languageLabels, languages } from "../../data/i18n";
import { cn } from "../../utils/cn";

export function LanguageToggle() {
  const { lang, setLang, t } = useLanguage();
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div ref={containerRef} className="relative">
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        aria-label={t.commandMenu.language}
        aria-expanded={open}
        className="flex h-9 items-center gap-1.5 rounded-full px-2.5 text-sm font-medium text-ink transition-colors duration-300 hover:text-gold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
      >
        <FiGlobe size={16} />
        <span className="uppercase">{lang}</span>
      </button>
      <AnimatePresence>
        {open && (
          <motion.ul
            initial={{ opacity: 0, y: -6, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -6, scale: 0.98 }}
            transition={{ duration: 0.15 }}
            className="absolute right-0 top-11 z-50 min-w-36 overflow-hidden rounded-xl border border-border bg-card py-1 shadow-lg"
          >
            {languages.map((option) => (
              <li key={option}>
                <button
                  type="button"
                  onClick={() => {
                    setLang(option);
                    setOpen(false);
                  }}
                  className={cn(
                    "block w-full px-4 py-2 text-left text-sm text-ink-soft transition-colors hover:bg-white/5 hover:text-ink",
                    option === lang && "text-gold"
                  )}
                >
                  {languageLabels[option]}
                </button>
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
}
