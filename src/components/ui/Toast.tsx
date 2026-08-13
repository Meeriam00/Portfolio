import { AnimatePresence, motion } from "framer-motion";
import { FiCheckCircle, FiAlertCircle } from "react-icons/fi";
import { cn } from "../../utils/cn";

export interface ToastState {
  type: "success" | "error";
  message: string;
}

export function Toast({ toast }: { toast: ToastState | null }) {
  return (
    <div className="pointer-events-none fixed inset-x-0 bottom-6 z-[95] flex justify-center px-6">
      <AnimatePresence>
        {toast && (
          <motion.div
            initial={{ opacity: 0, y: 16, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.96 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            role="status"
            aria-live="polite"
            className={cn(
              "pointer-events-auto flex max-w-sm items-start gap-3 rounded-2xl border bg-card px-5 py-4 shadow-2xl",
              toast.type === "success" ? "border-gold/40" : "border-red-400/30"
            )}
          >
            {toast.type === "success" ? (
              <FiCheckCircle size={20} className="mt-0.5 shrink-0 text-gold" />
            ) : (
              <FiAlertCircle size={20} className="mt-0.5 shrink-0 text-red-400" />
            )}
            <p className="text-sm leading-relaxed text-ink">{toast.message}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
