import { useLanguage } from "../context/LanguageContext";
import { Button } from "../components/ui/Button";
import { Reveal } from "../components/ui/Reveal";

export function NotFound() {
  const { t } = useLanguage();

  return (
    <main className="flex min-h-screen flex-col items-center justify-center px-6 text-center">
      <Reveal>
        <span className="text-8xl font-bold tracking-tight text-gold">{t.notFound.title}</span>
        <p className="mx-auto mt-4 max-w-sm text-base text-ink-soft">
          {t.notFound.subtitle}
        </p>
        <div className="mt-8">
          <Button href="/">{t.notFound.backHome}</Button>
        </div>
      </Reveal>
    </main>
  );
}
