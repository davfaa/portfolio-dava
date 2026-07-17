const Footer = () => {
  const year = new Date().getFullYear();
  const socialLinks = [
    {
      label: "GitHub",
      href: "https://github.com/davfaa",
      icon: "ri-github-fill",
    },
    {
      label: "Instagram",
      href: "https://instagram.com/dvaakyla_",
      icon: "ri-instagram-fill",
    },
    {
      label: "YouTube",
      href: "https://youtube.com/@dvaakylaa?si=PxWDtw6TLKuCIi-3",
      icon: "ri-youtube-fill",
    },
  ];

  return (
  <footer className="mt-32 border-t border-zinc-800/80 py-8">
    <div className="grid gap-8 md:grid-cols-[1.2fr_0.8fr_1fr] md:items-start">
      <div>
        <h2 className="mb-3 text-2xl font-bold text-zinc-100">Dava Kayla</h2>
        <p className="max-w-md text-sm leading-loose text-zinc-400">
          Computer Science student focused on web development, UI/UX, decision-support systems, and interactive data-based applications.
        </p>
      </div>

      <nav aria-label="Navigasi footer">
        <p className="mb-3 font-semibold text-zinc-100">Navigasi</p>
        <div className="grid gap-2 text-sm text-zinc-400">
          <a className="transition-colors hover:text-violet-200" href="/#beranda">Beranda</a>
          <a className="transition-colors hover:text-violet-200" href="/#tentang">Tentang</a>
          <a className="transition-colors hover:text-violet-200" href="/#proyek">Proyek</a>
          <a className="transition-colors hover:text-violet-200" href="/#kontak">Kontak</a>
        </div>
      </nav>

      <div>
        <p className="mb-3 font-semibold text-zinc-100">Terhubung</p>
        <div className="mb-4 flex flex-wrap items-center gap-3">
          {socialLinks.map((link) => (
            <a key={link.label} href={link.href} target="_blank" rel="noreferrer" aria-label={link.label} className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-zinc-700/70 text-zinc-200 transition-colors hover:border-violet-500/70 hover:bg-violet-500/10 hover:text-violet-100">
              <i className={`${link.icon} ri-lg`}></i>
            </a>
          ))}
        </div>
        <a href="mailto:dapakyla18@gmail.com" className="text-sm font-semibold text-violet-200 transition-colors hover:text-violet-100">dapakyla18@gmail.com</a>
      </div>
    </div>
    <div className="mt-8 flex flex-col gap-2 border-t border-zinc-800/80 pt-5 text-sm text-zinc-500 sm:flex-row sm:items-center sm:justify-between">
      <p>© {year} Muhammad Dava Kayla Kalam Perdana.</p>
      <p>Built with React, Vite, and Tailwind CSS.</p>
    </div>
  </footer>
  );
}

export default Footer;
