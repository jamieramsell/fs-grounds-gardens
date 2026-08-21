"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "#services", label: "Services" },
  { href: "#gallery", label: "Gallery" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  // Close the menu when the user presses the Escape key. We listen on `document`, rather than a specific element, because the key can be pressed from anywhere.
  useEffect(() => {
    function handleKey(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    }

    document.addEventListener("keydown", handleKey);

    // Remove the listener on unmount to avoid stacking duplicate listeners
    return () => {
      document.removeEventListener("keydown", handleKey);
    };
  }, []);

  return (
    <header className="bg-brand sticky top-0 z-50 text-white">
      <nav className="mx-auto flex max-w-5xl items-center justify-between p-4">
        <Link href="/" className="text-xl font-bold">
          FS Grounds &amp; Gardens
        </Link>

        {/* Desktop links */}
        <ul className="hidden gap-6 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link href={link.href} className="hover:underline">
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Hamburger button (mobile only) */}
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
          aria-label={isOpen ? "Close menu" : "Open menu"}
          className="md:hidden"
        >
          {isOpen ? "✕" : "☰"}
        </button>
      </nav>

      {/* Mobile menu */}
      {isOpen && (
        <ul id="mobile-menu" className="flex flex-col gap-4 p-4 md:hidden">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                // Close the menu after tapping on a link so that it doesn't cover the page
                onClick={() => setIsOpen(false)}
                className="hover:underline"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}
