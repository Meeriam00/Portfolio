import { motion } from "framer-motion";
import { FiArrowDown, FiDownload } from "react-icons/fi";
import { useLanguage } from "../../context/LanguageContext";
import { site } from "../../data/site";
import { Button } from "../ui/Button";
import { Reveal } from "../ui/Reveal";

export function Hero() {
  const { t } = useLanguage();

  return (
    <section
      id="hero"
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 text-center"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_60%_50%_at_50%_0%,rgba(200,169,106,0.12),transparent)]"
      />

      <Reveal delay={0}>
        <span className="text-sm font-medium uppercase tracking-[0.3em] text-gold">
          {t.hero.greeting}
        </span>
      </Reveal>

      <Reveal delay={0.1}>
        <h1 className="mt-6 max-w-4xl text-5xl font-bold tracking-tight text-ink sm:text-6xl md:text-7xl">
          {t.hero.role}
        </h1>
      </Reveal>

      <Reveal delay={0.2}>
        <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-ink-soft sm:text-lg">
          {t.hero.tagline}
        </p>
      </Reveal>

      <Reveal delay={0.3}>
        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row">
          <Button href="#projects">{t.hero.ctaProjects}</Button>
          <Button href={site.resumeUrl} download variant="secondary">
            {t.hero.ctaResume} <FiDownload size={16} />
          </Button>
        </div>
      </Reveal>

      <motion.a
        href="#about"
        aria-label={t.hero.scrollHint}
        className="absolute bottom-10 flex flex-col items-center gap-2 text-ink-soft"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.6 }}
      >
        <span className="text-xs uppercase tracking-widest">{t.hero.scrollHint}</span>
        <motion.span
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        >
          <FiArrowDown size={16} />
        </motion.span>
      </motion.a>
    </section>
  );
}
