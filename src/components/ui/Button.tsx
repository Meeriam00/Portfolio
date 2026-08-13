import { motion, type HTMLMotionProps } from "framer-motion";
import type { ReactNode } from "react";
import { cn } from "../../utils/cn";

type Variant = "primary" | "secondary" | "ghost";

const variantStyles: Record<Variant, string> = {
  primary: "bg-ink text-bg hover:bg-gold hover:text-bg",
  secondary:
    "border border-border text-ink hover:border-gold hover:text-gold",
  ghost: "text-ink hover:text-gold",
};

const baseStyles =
  "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-medium tracking-wide transition-colors duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold";

interface CommonProps {
  variant?: Variant;
  children: ReactNode;
  className?: string;
}

type ButtonAsButton = CommonProps &
  Omit<HTMLMotionProps<"button">, "children"> & { href?: undefined };

type ButtonAsAnchor = CommonProps &
  Omit<HTMLMotionProps<"a">, "children"> & { href: string };

type ButtonProps = ButtonAsButton | ButtonAsAnchor;

export function Button({ variant = "primary", children, className, ...props }: ButtonProps) {
  const classes = cn(baseStyles, variantStyles[variant], className);

  if ("href" in props && props.href !== undefined) {
    const { href, ...anchorProps } = props as ButtonAsAnchor;
    return (
      <motion.a
        href={href}
        className={classes}
        whileHover={{ y: -2 }}
        whileTap={{ scale: 0.97 }}
        {...anchorProps}
      >
        {children}
      </motion.a>
    );
  }

  const buttonProps = props as ButtonAsButton;
  return (
    <motion.button
      className={classes}
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.97 }}
      {...buttonProps}
    >
      {children}
    </motion.button>
  );
}
