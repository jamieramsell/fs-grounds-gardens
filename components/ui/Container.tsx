import type { ReactNode } from "react";

type ContainerProps = {
  children: ReactNode;
};

/**
 * Container - centres content and caps its width for consistent page gutters.
 * @param children - the content to constrain
 */
export default function Container({ children }: ContainerProps) {
  return <div className="mx-auto max-w-5xl px-4">{children}</div>;
}
