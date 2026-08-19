import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    template: "%s | FS Grounds & Gardens",
    default: "FS Grounds & Gardens",
  },
  description:
    "Reliable garden maintenance based in Rothley, Leicestershire. Hedge trimming, lawns, pruning, clearances and tidy-ups. Get a free quote today.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en-GB" className={`${montserrat.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col">
        <Header />
        <main id="main" tabIndex={-1}>
          {children}
        </main>{" "}
        {/* Main block used for keyboard navigation */}
        <Footer />
      </body>
    </html>
  );
}
