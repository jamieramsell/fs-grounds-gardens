import type { ReactNode } from "react";
import Link from "next/link";

type ButtonProps = {
  children: ReactNode;
  href: string;
  variant?: "primary" | "secondary" | "light" | "lightOutline";
};

// Common button styles, and ones unique to either variant
const base =
  "inline-block rounded-full px-5 py-2.5 font-medium transition-colors";

const variants = {
  primary: "bg-brand text-white hover:bg-brand-dark",
  secondary: "border border-brand text-brand hover:bg-brand hover:text-white",
  light: "bg-white text-brand hover:bg-brand-light hover:text-white",
  lightOutline:
    "border border-white text-white hover:bg-white hover:text-brand",
};

/**
 * Button - a link styled as a call-to-action.
 * @param children - the button label
 * @param href - where the button navigates to
 * @param variant - "primary" (solid) or "secondary" (outline); defaults to "primary".
 */
export default function Button({
  children,
  href,
  variant = "primary",
}: ButtonProps) {
  const classes = `${base} ${variants[variant]}`;

  if (href.startsWith("#") || href.startsWith("/")) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <a
      href={href}
      className={classes}
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
    </a>
  );
}
