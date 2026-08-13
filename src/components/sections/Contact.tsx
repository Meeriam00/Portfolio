import { useEffect, useRef, useState, type FormEvent } from "react";
import emailjs from "@emailjs/browser";
import { FiLoader } from "react-icons/fi";
import { useLanguage } from "../../context/LanguageContext";
import { site } from "../../data/site";
import { Reveal } from "../ui/Reveal";
import { Card } from "../ui/Card";
import { Toast, type ToastState } from "../ui/Toast";
import { cn } from "../../utils/cn";

type FieldErrors = Partial<Record<"name" | "email" | "subject" | "message", string>>;

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const inputClasses =
  "w-full rounded-lg border border-border bg-bg px-4 py-3 text-sm text-ink placeholder:text-ink-soft transition-colors focus:border-gold focus:outline-none";

export default function Contact() {
  const { t } = useLanguage();
  const formRef = useRef<HTMLFormElement>(null);
  const [errors, setErrors] = useState<FieldErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [toast, setToast] = useState<ToastState | null>(null);

  useEffect(() => {
    if (!toast) return;
    const timer = setTimeout(() => setToast(null), 5000);
    return () => clearTimeout(timer);
  }, [toast]);

  const fieldValidators: Record<keyof FieldErrors, (value: string) => string | undefined> = {
    name: (value) => (value.trim().length < 2 ? t.contact.form.nameError : undefined),
    email: (value) => (EMAIL_PATTERN.test(value.trim()) ? undefined : t.contact.form.emailError),
    subject: (value) => (value.trim().length < 2 ? t.contact.form.subjectError : undefined),
    message: (value) => (value.trim().length < 10 ? t.contact.form.messageError : undefined),
  };

  function revalidateField(field: keyof FieldErrors, value: string) {
    setErrors((prev) => ({ ...prev, [field]: fieldValidators[field](value) }));
  }

  function validate(data: FormData): FieldErrors {
    return {
      name: fieldValidators.name(String(data.get("from_name") ?? "")),
      email: fieldValidators.email(String(data.get("reply_to") ?? "")),
      subject: fieldValidators.subject(String(data.get("subject") ?? "")),
      message: fieldValidators.message(String(data.get("message") ?? "")),
    };
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!formRef.current) return;

    const data = new FormData(formRef.current);
    const nextErrors = validate(data);
    setErrors(nextErrors);
    if (Object.values(nextErrors).some(Boolean)) return;

    setIsSubmitting(true);
    setToast(null);

    try {
      await emailjs.sendForm(
        site.emailjs.serviceId,
        site.emailjs.templateId,
        formRef.current,
        site.emailjs.publicKey
      );
      setToast({ type: "success", message: t.contact.form.success });
      formRef.current.reset();
    } catch (error) {
      console.error(error);
      setToast({ type: "error", message: t.contact.form.error });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <section id="contact" className="px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-2xl text-center">
        <Reveal>
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
            {t.contact.kicker}
          </span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-ink sm:text-4xl md:text-5xl">
            {t.contact.title}
          </h2>
          <p className="mt-4 text-base text-ink-soft sm:text-lg">{t.contact.subtitle}</p>
        </Reveal>
      </div>

      <Reveal delay={0.1} className="mx-auto mt-12 max-w-xl">
        <Card hoverLift={false}>
          <form ref={formRef} onSubmit={handleSubmit} noValidate className="flex flex-col gap-4">
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label htmlFor="from_name" className="sr-only">
                  {t.contact.form.name}
                </label>
                <input
                  id="from_name"
                  name="from_name"
                  type="text"
                  placeholder={t.contact.form.name}
                  autoComplete="name"
                  onChange={(event) => revalidateField("name", event.target.value)}
                  className={cn(inputClasses, errors.name && "border-red-400/60")}
                />
                {errors.name && <p className="mt-1.5 text-xs text-red-400">{errors.name}</p>}
              </div>
              <div>
                <label htmlFor="reply_to" className="sr-only">
                  {t.contact.form.email}
                </label>
                <input
                  id="reply_to"
                  name="reply_to"
                  type="email"
                  placeholder={t.contact.form.email}
                  autoComplete="email"
                  onChange={(event) => revalidateField("email", event.target.value)}
                  className={cn(inputClasses, errors.email && "border-red-400/60")}
                />
                {errors.email && <p className="mt-1.5 text-xs text-red-400">{errors.email}</p>}
              </div>
            </div>

            <div>
              <label htmlFor="subject" className="sr-only">
                {t.contact.form.subject}
              </label>
              <input
                id="subject"
                name="subject"
                type="text"
                placeholder={t.contact.form.subject}
                onChange={(event) => revalidateField("subject", event.target.value)}
                className={cn(inputClasses, errors.subject && "border-red-400/60")}
              />
              {errors.subject && <p className="mt-1.5 text-xs text-red-400">{errors.subject}</p>}
            </div>

            <div>
              <label htmlFor="message" className="sr-only">
                {t.contact.form.message}
              </label>
              <textarea
                id="message"
                name="message"
                rows={6}
                placeholder={t.contact.form.message}
                onChange={(event) => revalidateField("message", event.target.value)}
                className={cn(inputClasses, "resize-none", errors.message && "border-red-400/60")}
              />
              {errors.message && <p className="mt-1.5 text-xs text-red-400">{errors.message}</p>}
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-ink px-6 py-3 text-sm font-medium tracking-wide text-bg transition-colors duration-300 hover:bg-gold disabled:cursor-not-allowed disabled:opacity-70"
            >
              {isSubmitting && <FiLoader size={16} className="animate-spin" />}
              {isSubmitting ? t.contact.form.sending : t.contact.form.send}
            </button>
          </form>
        </Card>
      </Reveal>

      <Toast toast={toast} />
    </section>
  );
}
