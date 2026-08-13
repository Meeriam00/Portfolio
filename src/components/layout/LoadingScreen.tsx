import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { site } from "../../data/site";
import { useLanguage } from "../../context/LanguageContext";

const SESSION_KEY = "intro-played";

export function LoadingScreen() {
  const { t } = useLanguage();
  const [visible, setVisible] = useState(() => !sessionStorage.getItem(SESSION_KEY));

  useEffect(() => {
    if (!visible) return;
    const timer = setTimeout(() => {
      sessionStorage.setItem(SESSION_KEY, "true");
      setVisible(false);
    }, 1400);
    return () => clearTimeout(timer);
  }, [visible]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center gap-4 bg-bg"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="text-4xl font-bold tracking-tight text-ink"
          >
            {site.initials}
          </motion.span>
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="text-xs uppercase tracking-[0.3em] text-ink-soft"
          >
            {t.loading.tagline}
          </motion.span>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
            className="h-px w-24 origin-left bg-gold"
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
