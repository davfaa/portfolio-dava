import { useEffect, useState } from "react";

const navItems = [
  { id: "beranda", label: "Beranda", href: "/#beranda" },
  { id: "tentang", label: "Tentang", href: "/#tentang" },
  { id: "proyek", label: "Proyek", href: "/#proyek" },
  { id: "kontak", label: "Kontak", href: "/#kontak" },
];

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("beranda");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);

      const currentSection = navItems.findLast((item) => {
        const section = document.getElementById(item.id);
        return section && section.offsetTop - 140 <= window.scrollY;
      });

      if (currentSection) {
        setActiveSection(currentSection.id);
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleNavClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className={`sticky top-0 z-40 -mx-4 px-4 transition-colors sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8 ${isScrolled ? "border-b border-zinc-800/80 bg-zinc-900/90 backdrop-blur-md" : "bg-zinc-900"}`}>
      <nav className="mx-auto flex max-w-7xl items-center justify-between py-5">
        <a href="/#beranda" className="group flex items-center gap-2" onClick={handleNavClick}>
          <span className="text-xl font-bold text-zinc-100 transition-colors group-hover:text-cyan-100 sm:text-2xl">
            Dava Kayla
          </span>
          <span className="rounded-full border border-purple-400/30 bg-purple-400/10 px-2.5 py-1 text-xs font-semibold uppercase tracking-wide text-purple-200 shadow-sm shadow-purple-950/30 transition-colors group-hover:border-amber-300/40 group-hover:bg-amber-300/10 group-hover:text-amber-100">
            Portfolio
          </span>
        </a>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-zinc-700/70 text-zinc-100 md:hidden"
          aria-label={isMenuOpen ? "Tutup menu navigasi" : "Buka menu navigasi"}
          aria-expanded={isMenuOpen}
          onClick={() => setIsMenuOpen((current) => !current)}
        >
          <i className={`${isMenuOpen ? "ri-close-line" : "ri-menu-line"} ri-xl`}></i>
        </button>

        <ul className="hidden items-center gap-2 md:flex">
          {navItems.map((item) => (
            <li key={item.id}>
              <a
                href={item.href}
                className={`rounded-lg px-4 py-2 text-base font-semibold transition-colors ${activeSection === item.id ? "bg-violet-700/80 text-white" : "text-zinc-300 hover:bg-zinc-800/80 hover:text-white"}`}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {isMenuOpen && (
        <div className="pb-5 md:hidden">
          <ul className="grid gap-2 rounded-xl border border-zinc-700/70 bg-zinc-800/95 p-3 shadow-lg">
            {navItems.map((item) => (
              <li key={item.id}>
                <a
                  href={item.href}
                  onClick={handleNavClick}
                  className={`block rounded-lg px-4 py-3 font-semibold transition-colors ${activeSection === item.id ? "bg-violet-700/80 text-white" : "text-zinc-300 hover:bg-zinc-700/80 hover:text-white"}`}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;
