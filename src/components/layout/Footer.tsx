import { FaGithub, FaLinkedin } from "react-icons/fa6";
import { useLanguage } from "../../context/LanguageContext";
import { site } from "../../data/site";

export function Footer() {
  const { t } = useLanguage();
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border px-6 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 text-center sm:flex-row sm:justify-between sm:text-left">
        <div>
          <p className="text-sm font-medium text-ink">
            © {year} {site.name}
          </p>
          <p className="mt-1 text-xs text-ink-soft">
            {t.footer.rights} · {t.footer.builtWith}
          </p>
        </div>
        <div className="flex items-center gap-4">
          <a
            href={site.social.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="text-ink-soft transition-colors hover:text-gold"
          >
            <FaGithub size={18} />
          </a>
          <a
            href={site.social.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="text-ink-soft transition-colors hover:text-gold"
          >
            <FaLinkedin size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
}
