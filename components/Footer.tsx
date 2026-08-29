export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-brand-dark text-white">
      <div className="mx-auto flex max-w-5xl flex-col gap-6 p-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="space-y-1">
          <p>© {year} FS Grounds &amp; Gardens</p>
          <p>
            Based in Rothley, Leicestershire. Covering Charnwood and the
            surrounding area.
          </p>
        </div>

        <nav className="flex flex-col gap-2 sm:flex-row sm:gap-6">
          {/*<a href="tel:+441234567890" className="hover:underline">
            Call us
          </a>
          <a href="mailto:email@provider.com" className="hover:underline">
            Email us
          </a>*/}
          <a
            href="https://instagram.com/fs.grounds.gardens"
            className="hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            Instagram
          </a>
          <a
            href="https://www.facebook.com/p/FS-Grounds-Gardens-61593549812509/"
            className="hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            Facebook
          </a>
          <a
            href="/privacy"
            className="hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            Privacy
          </a>
        </nav>
      </div>
    </footer>
  );
}
