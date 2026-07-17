import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { listProyek, listTools } from "../data";

function ProjectDetail() {
  const { id } = useParams();
  const project = listProyek.find((p) => p.id === Number(id));
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  useEffect(() => {
    setActiveImageIndex(0);
  }, [id]);

  if (!project) {
    return (
      <main className="min-h-screen py-24 text-center text-zinc-100">
        <p className="mb-6 text-2xl font-bold">Proyek tidak ditemukan</p>
        <Link to="/#proyek" className="text-violet-300 hover:text-violet-200">Kembali ke daftar proyek</Link>
      </main>
    );
  }

  const detailBlocks = [
    {
      title: "Masalah yang Diselesaikan",
      icon: "ri-question-answer-line",
      content: project.problem,
    },
    {
      title: "Peran Saya",
      icon: "ri-user-star-line",
      content: project.role,
    },
  ];
  const galleryImages = project.gambarArray?.length ? project.gambarArray : [project.gambar];

  return (
    <main className="min-h-screen py-10 text-zinc-100">
      <div className="mx-auto max-w-5xl">
        <Link to="/#proyek" className="mb-8 inline-flex items-center gap-2 text-violet-300 transition-colors hover:text-violet-200">
          <i className="ri-arrow-left-line"></i>
          Kembali ke Portfolio
        </Link>

        <section className="mb-10 grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <span className="mb-4 inline-flex rounded-full border border-emerald-400/30 bg-emerald-400/10 px-3 py-1 text-sm font-semibold text-emerald-200">{project.type}</span>
            <h1 className="mb-4 text-4xl font-bold leading-tight text-zinc-100 sm:text-5xl">{project.nama}</h1>
            <p className="text-base leading-loose text-zinc-300">{project.desk}</p>
            <div className="mt-6 flex flex-wrap gap-3">
              {project.liveUrl && (
                <a href={project.liveUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-lg border border-emerald-400/40 px-4 py-2 font-semibold text-emerald-200 transition-colors hover:bg-emerald-400/10">
                  <i className="ri-external-link-line"></i> Live Demo
                </a>
              )}
              {project.githubUrl && (
                <a href={project.githubUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-lg border border-zinc-500/50 px-4 py-2 font-semibold text-zinc-200 transition-colors hover:bg-zinc-800/80">
                  <i className={project.type === "UI/UX Design" ? "ri-figma-line" : "ri-github-fill"}></i> {project.type === "UI/UX Design" ? "Figma" : "GitHub"}
                </a>
              )}
              {project.youtubeUrl && (
                <a href={project.youtubeUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-lg border border-red-500/40 px-4 py-2 font-semibold text-red-300 transition-colors hover:bg-red-500/10">
                  <i className="ri-youtube-fill"></i> YouTube Demo
                </a>
              )}
            </div>
          </div>
          <div className="rounded-xl border border-zinc-700/40 bg-zinc-800/50 p-3 shadow-lg">
            <img src={galleryImages[activeImageIndex]} alt={`${project.nama} screenshot ${activeImageIndex + 1}`} className="aspect-video w-full rounded-lg border border-zinc-700/40 object-cover" />
            <div className="mt-3 grid grid-cols-4 gap-2">
              {galleryImages.map((image, index) => (
                <button
                  key={`${image}-${index}`}
                  type="button"
                  className={`overflow-hidden rounded-md border transition-colors ${activeImageIndex === index ? "border-violet-400" : "border-zinc-700/60 hover:border-violet-500/70"}`}
                  aria-label={`Tampilkan screenshot ${index + 1} untuk ${project.nama}`}
                  onClick={() => setActiveImageIndex(index)}
                >
                  <img src={image} alt="" className="aspect-video w-full object-cover" />
                </button>
              ))}
            </div>
          </div>
        </section>

        <section className="mb-10 grid gap-4 md:grid-cols-2">
          {detailBlocks.map((block) => (
            <article key={block.title} className="rounded-xl border border-zinc-700/40 bg-zinc-800/60 p-5">
              <div className="mb-3 flex items-center gap-2 text-violet-300">
                <i className={`${block.icon} ri-lg`}></i>
                <h2 className="text-xl font-bold text-zinc-100">{block.title}</h2>
              </div>
              <p className="text-base leading-loose text-zinc-300">{block.content}</p>
            </article>
          ))}
        </section>

        <section className="mb-10 rounded-xl border border-zinc-700/40 bg-gradient-to-br from-zinc-800/90 to-violet-900/70 p-6">
          <h2 className="mb-4 text-2xl font-bold text-zinc-100">Ringkasan Proyek</h2>
          <p className="text-base leading-loose text-zinc-300">{project.detail}</p>
        </section>

        <section className="mb-10 grid gap-6 lg:grid-cols-2">
          <div>
            <h2 className="mb-4 text-2xl font-bold text-zinc-100">Fitur Utama</h2>
            <div className="grid gap-3">
              {project.features.map((feature) => (
                <div key={feature} className="flex gap-3 rounded-lg border border-zinc-700/50 bg-zinc-800/60 p-4">
                  <i className="ri-check-line mt-1 text-emerald-300"></i>
                  <p className="text-zinc-300">{feature}</p>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h2 className="mb-4 text-2xl font-bold text-zinc-100">Hasil & Pembelajaran</h2>
            <div className="grid gap-3">
              {project.outcomes.map((outcome) => (
                <div key={outcome} className="flex gap-3 rounded-lg border border-zinc-700/50 bg-zinc-800/60 p-4">
                  <i className="ri-lightbulb-line mt-1 text-amber-300"></i>
                  <p className="text-zinc-300">{outcome}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="mb-4 text-2xl font-bold text-zinc-100">Stack Teknologi</h2>
          <div className="flex flex-wrap gap-2">
            {project.tools.map((tool) => (
              <span key={tool} className="rounded-md border border-violet-700/60 bg-zinc-700/80 px-3 py-1 font-semibold text-violet-300">
                {tool}
              </span>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}

export default ProjectDetail;
