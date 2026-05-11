import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import DataImage, { listProyek, listTools } from "../data";

const heroHighlights = [
  "Available for internship opportunities",
  "Mobile development enthusiast using Flutter", 
  "Bridging Data Science with interactive web apps", 
  "Focused on UI/UX and clean interfaces",
  "Building decision-support systems",
  "Passionate about modern and minimalist aesthetics", 
];

function Home() {
  const [highlightIndex, setHighlightIndex] = useState(0);

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setHighlightIndex((currentIndex) => (currentIndex + 1) % heroHighlights.length);
    }, 2800);

    return () => {
      window.clearInterval(intervalId);
    };
  }, []);

  const handleContactSubmit = (event) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const nama = formData.get("nama");
    const email = formData.get("email");
    const pesan = formData.get("pesan");

    const subject = `Kontak Portofolio - ${nama}`;
    const body = [
      "Halo Dava,",
      "",
      "Saya ingin menghubungi melalui website portofolio.",
      "",
      `Nama: ${nama}`,
      `Email: ${email}`,
      "",
      "Pesan:",
      pesan,
      "",
      "Terima kasih.",
    ].join("\n");

    window.location.href = `mailto:dapakyla18@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <>
      <section className="hero grid grid-cols-1 items-center gap-8 pt-10 md:grid-cols-[1.05fr_0.95fr] xl:gap-12" id="beranda">
        <div className="animate__animated animate__fadeInUp animate__delay-2s">
          <div className="mb-6 flex w-fit items-center gap-3 rounded-xl border border-violet-500/20 bg-zinc-800/80 px-4 py-3 shadow-md">
            <span className="h-2.5 w-2.5 rounded-full bg-emerald-400"></span>
            <p key={heroHighlights[highlightIndex]} className="animate__animated animate__fadeIn text-sm font-semibold uppercase tracking-wide text-zinc-200">
              {heroHighlights[highlightIndex]}
            </p>
          </div>
          <h1 className="mb-6 text-4xl font-bold leading-tight text-zinc-100 sm:text-5xl">
            Muhammad Dava Kayla Kalam Perdana
          </h1>
          <p className="mb-4 text-xl font-semibold text-violet-300">
            Computer Science student focused on Web Development, UI/UX, and decision-support systems.
          </p>
          <p className="mb-8 max-w-2xl text-base leading-loose text-zinc-300">
            Saya membangun aplikasi web, antarmuka digital, dan sistem berbasis data dengan perhatian pada alur pengguna, struktur kode, dan hasil yang mudah dipahami oleh pengguna akhir.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
            <a href="/assets/CV_Muhammad Dava Kayla Kalam Perdana.pdf" download className="inline-flex items-center justify-center gap-2 rounded-xl bg-violet-700/90 px-5 py-3 font-semibold text-white shadow transition-colors hover:bg-violet-600/90">
              Download CV <i className="ri-download-line ri-lg"></i>
            </a>
            <a href="/#kontak" className="inline-flex items-center justify-center gap-2 rounded-xl bg-zinc-700/80 px-5 py-3 font-semibold text-white shadow transition-colors hover:bg-zinc-600/90">
              Hubungi Saya <i className="ri-send-plane-line ri-lg"></i>
            </a>
            <a href="/#proyek" className="inline-flex items-center justify-center gap-2 rounded-xl border border-zinc-700/70 px-5 py-3 font-semibold text-zinc-100 transition-colors hover:border-violet-500/70 hover:text-violet-200">
              Lihat Proyek <i className="ri-arrow-down-line ri-lg"></i>
            </a>
          </div>
        </div>
        <div className="relative md:ml-auto">
          <div className="absolute -inset-3 rounded-2xl border border-violet-500/20 bg-violet-700/10"></div>
          <img src={DataImage.HeroImage} alt="Muhammad Dava Kayla Kalam Perdana" className="relative w-full max-w-[440px] rounded-2xl border border-zinc-700/40 bg-zinc-900/40 object-cover shadow-lg md:ml-auto" loading="eager" />
        </div>
      </section>

      <section className="tentang mt-28 py-10" id="tentang">
        <div className="mx-auto w-full rounded-xl border border-zinc-700/40 bg-gradient-to-br from-zinc-800/90 to-violet-900/80 p-7 shadow-md lg:w-3/4 xl:w-2/3" data-aos="fade-up" data-aos-duration="1000">
          <img src={DataImage.HeroImage} alt="Muhammad Dava Kayla Kalam Perdana" className="mb-10 w-12 rounded-md border border-zinc-700/40 sm:hidden" loading="lazy" />
          <p className="mb-10 text-base leading-loose text-zinc-200">
            Hi, perkenalkan saya <span className="font-semibold text-violet-300">Muhammad Dava Kayla Kalam Perdana</span>, seorang <span className="font-semibold text-violet-300">Mahasiswa Ilmu Komputer Semester 6</span> yang berfokus pada pengembangan Web, Mobile, UI/UX Design, dan sistem pendukung keputusan. Saya terbiasa mengerjakan proyek dari tahap perancangan, implementasi, sampai dokumentasi hasil.
          </p>
          <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
            <img src={DataImage.HeroImage} alt="Muhammad Dava Kayla Kalam Perdana" className="hidden w-12 rounded-md border border-zinc-700/40 sm:block" loading="lazy" />
            <div className="grid grid-cols-2 gap-6">
              <div>
                <h2 className="mb-1 text-4xl font-bold text-violet-300">
                  6<span className="text-violet-400">+</span>
                </h2>
                <p className="text-zinc-300">Proyek Selesai</p>
              </div>
              <div>
                <h2 className="mb-1 text-4xl font-bold text-violet-300">
                  4<span className="text-violet-400">+</span>
                </h2>
                <p className="text-zinc-300">Tahun Belajar & Berkarya</p>
              </div>
            </div>
          </div>
        </div>

        <div className="tools mt-28">
          <h2 className="mb-4 text-4xl font-bold leading-snug text-zinc-100" data-aos="fade-up" data-aos-duration="1000">Tools yang Dipakai</h2>
          <p className="w-full text-base leading-loose text-zinc-400 sm:w-3/4 md:w-2/3 lg:w-3/4 xl:w-2/5" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300">
            Beberapa tools dan teknologi yang biasa saya gunakan untuk membuat website, sistem, dan desain antarmuka.
          </p>
          <div className="tools-box mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {listTools.map((tool) => (
              <div className="group flex items-center gap-3 rounded-lg border border-zinc-700/60 p-3 transition-colors hover:bg-zinc-900/80" key={tool.id} data-aos="fade-up" data-aos-duration="1000" data-aos-delay={tool.dad}>
                <img src={tool.gambar} alt={tool.nama} className="w-14 rounded-md border border-zinc-700/40 bg-zinc-800 p-1 group-hover:bg-zinc-900" loading="lazy" />
                <div>
                  <h3 className="font-bold text-zinc-100">{tool.nama}</h3>
                  <p className="text-zinc-400">{tool.ket}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="proyek mt-28 py-10" id="proyek">
        <h2 className="mb-2 text-center text-4xl font-bold text-zinc-100" data-aos="fade-up" data-aos-duration="1000">Proyek</h2>
        <p className="mx-auto max-w-2xl text-center text-base leading-loose text-zinc-400" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300">
          Beberapa proyek yang menunjukkan kemampuan saya dalam pengembangan web, desain UI/UX, sistem data, dan pemecahan masalah.
        </p>
        <div className="proyek-box mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {listProyek.map((proyek) => (
            <article key={proyek.id} className="flex h-full flex-col rounded-xl border border-zinc-700/40 bg-gradient-to-br from-zinc-800/90 to-violet-900/80 p-4 shadow-md" data-aos="fade-up" data-aos-duration="1000" data-aos-delay={proyek.dad}>
              <img src={proyek.gambar} alt={proyek.nama} loading="lazy" className="mb-4 aspect-video w-full rounded-md border border-zinc-700/40 object-cover" />
              <div className="flex flex-1 flex-col">
                <span className="mb-3 w-fit rounded-full border border-emerald-400/30 bg-emerald-400/10 px-3 py-1 text-sm font-semibold text-emerald-200">{proyek.type}</span>
                <h3 className="mb-3 text-2xl font-bold text-zinc-100">{proyek.nama}</h3>
                <p className="mb-4 flex-1 text-base leading-loose text-zinc-300">{proyek.desk}</p>
                <div className="flex flex-wrap gap-2">
                  {proyek.tools.slice(0, 4).map((tool) => (
                    <span className="rounded-md border border-violet-700/60 bg-zinc-700/80 px-3 py-1 font-semibold text-violet-300" key={tool}>{tool}</span>
                  ))}
                  {proyek.tools.length > 4 && (
                    <span className="rounded-md border border-zinc-600/70 bg-zinc-800/80 px-3 py-1 font-semibold text-zinc-300">+{proyek.tools.length - 4}</span>
                  )}
                </div>
                <div className="mt-8 grid gap-2">
                  <Link to={`/project/${proyek.id}`} className="inline-flex items-center justify-center gap-2 rounded-lg bg-violet-700/90 p-3 font-semibold text-white transition-colors hover:bg-violet-600/90">
                    Detail Proyek <i className="ri-arrow-right-line ri-lg"></i>
                  </Link>
                  <div className="grid grid-cols-1 gap-2 sm:grid-cols-3">
                    {proyek.liveUrl ? (
                      <a href={proyek.liveUrl} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-1 rounded-lg border border-emerald-400/40 px-3 py-2 text-sm font-semibold text-emerald-200 transition-colors hover:bg-emerald-400/10">
                        <i className="ri-external-link-line"></i> Live
                      </a>
                    ) : (
                      <span className="inline-flex items-center justify-center gap-1 rounded-lg border border-zinc-700/50 px-3 py-2 text-sm font-semibold text-zinc-500">
                        <i className="ri-external-link-line"></i> Live
                      </span>
                    )}
                    {proyek.githubUrl ? (
                      <a href={proyek.githubUrl} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-1 rounded-lg border border-zinc-500/50 px-3 py-2 text-sm font-semibold text-zinc-200 transition-colors hover:bg-zinc-800/80">
                        <i className={proyek.type === "UI/UX Design" ? "ri-figma-line" : "ri-github-fill"}></i> {proyek.type === "UI/UX Design" ? "Figma" : "GitHub"}
                      </a>
                    ) : (
                      <span className="inline-flex items-center justify-center gap-1 rounded-lg border border-zinc-700/50 px-3 py-2 text-sm font-semibold text-zinc-500">
                        <i className={proyek.type === "UI/UX Design" ? "ri-figma-line" : "ri-github-fill"}></i> {proyek.type === "UI/UX Design" ? "Figma" : "GitHub"}
                      </span>
                    )}
                    <a href={proyek.youtubeUrl} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-1 rounded-lg border border-red-500/40 px-3 py-2 text-sm font-semibold text-red-300 transition-colors hover:bg-red-500/10">
                      <i className="ri-youtube-fill"></i> Demo
                    </a>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="kontak mt-28 p-0 sm:p-10" id="kontak">
        <h2 className="mb-2 text-center text-4xl font-bold text-zinc-100" data-aos="fade-up" data-aos-duration="1000">Kontak</h2>
        <p className="mx-auto mb-10 max-w-2xl text-center text-base leading-loose text-zinc-400" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300">
          Form ini disediakan untuk HR, recruiter, teman, atau pihak perusahaan yang ingin menghubungi saya terkait peluang magang, undangan interview, kerja sama proyek, maupun komunikasi lanjutan secara profesional.
        </p>
        <form onSubmit={handleContactSubmit} className="mx-auto w-full rounded-xl border border-zinc-700/40 bg-gradient-to-br from-zinc-800/90 to-violet-900/80 p-6 shadow-md sm:w-fit sm:p-10" autoComplete="off" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="500">
          <div className="flex flex-col gap-6">
            <p className="text-sm leading-loose text-zinc-300">Mohon mengisi data berikut agar saya dapat mengetahui tujuan pesan Bapak/Ibu dengan jelas.</p>
            <div className="flex flex-col gap-2">
              <label className="font-semibold text-zinc-200">Nama Lengkap & Perusahaan</label>
              <input type="text" name="nama" placeholder="Masukan Nama.." className="rounded-md border border-zinc-700/60 bg-zinc-900/60 p-2 text-zinc-100 placeholder:text-zinc-400" required />
            </div>
            <div className="flex flex-col gap-2">
              <label className="font-semibold text-zinc-200">Email Bapak/Ibu</label>
              <input type="email" name="email" placeholder="Masukan Email.." className="rounded-md border border-zinc-700/60 bg-zinc-900/60 p-2 text-zinc-100 placeholder:text-zinc-400" required />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="pesan" className="font-semibold text-zinc-200">Pesan yang ingin disampaikan ke saya</label>
              <textarea name="pesan" id="pesan" cols="45" rows="7" placeholder="Pesan.." className="rounded-md border border-zinc-700/60 bg-zinc-900/60 p-2 text-zinc-100 placeholder:text-zinc-400" required></textarea>
            </div>
            <div className="text-center">
              <button type="submit" className="w-full cursor-pointer rounded-lg border border-violet-700/60 bg-violet-700/90 p-3 font-semibold text-white transition-colors hover:bg-violet-600/90">Kirim Pesan</button>
            </div>
          </div>
        </form>
      </section>
    </>
  );
}

export default Home;
