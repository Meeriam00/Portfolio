import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import { FiMail, FiDownload } from "react-icons/fi";
import { site } from "../../data/site";
import { useLanguage } from "../../context/LanguageContext";

const itemClasses =
  "flex h-10 w-10 items-center justify-center rounded-full text-ink-soft transition-colors duration-300 hover:text-gold";

export function SocialDock() {
  const { t } = useLanguage();

  const links = [
    { href: site.social.github, icon: FaGithub, label: t.commandMenu.openGithub, external: true },
    { href: site.social.linkedin, icon: FaLinkedin, label: t.commandMenu.openLinkedin, external: true },
    { href: `mailto:${site.email}`, icon: FiMail, label: t.contact.emailLabel, external: false },
    { href: site.resumeUrl, icon: FiDownload, label: t.commandMenu.downloadCV, external: false },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, x: 24 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 1, duration: 0.5 }}
      className="fixed right-5 top-1/2 z-40 hidden -translate-y-1/2 flex-col gap-2 rounded-full border border-border bg-card/80 p-2 shadow-lg backdrop-blur-md lg:flex"
    >
      {links.map(({ href, icon: Icon, label, external }) => (
        <a
          key={label}
          href={href}
          aria-label={label}
          {...(external ? { target: "_blank", rel: "noreferrer" } : {})}
          {...(href === site.resumeUrl ? { download: true } : {})}
          className={itemClasses}
        >
          <motion.span whileHover={{ y: -3, scale: 1.1 }} className="flex">
            <Icon size={17} />
          </motion.span>
        </a>
      ))}
    </motion.div>
  );
}
