import HeroImage from "/assets/hero-img.webp";

import Tools1 from "/assets/tools/vscode.png";
import Tools2 from "/assets/tools/reactjs.png";
import Tools4 from "/assets/tools/tailwind.png";
import Tools5 from "/assets/tools/bootstrap.png";
import Tools6 from "/assets/tools/js.png";
import Tools7 from "/assets/tools/nodejs.png";
import Tools8 from "/assets/tools/github.png";
import Tools9 from "/assets/tools/ai.png";
import Tools10 from "/assets/tools/canva.png";
import Tools11 from "/assets/tools/figma.png";

import Proyek1 from "/assets/proyek/proyek1.webp";
import Proyek2 from "/assets/proyek/proyek2.webp";
import Proyek3 from "/assets/proyek/proyek3.webp";
import Proyek4 from "/assets/proyek/proyek4.webp";
import Proyek5 from "/assets/proyek/proyek5.webp";
import Proyek6 from "/assets/proyek/proyek6.webp";

const Image = {
  HeroImage,
};

export default Image;

export const listTools = [
  {
    id: 1,
    gambar: Tools1,
    nama: "Visual Studio Code",
    ket: "Code Editor",
    dad: "100",
  },
  {
    id: 2,
    gambar: Tools2,
    nama: "React JS",
    ket: "Framework",
    dad: "200",
  },
  {
    id: 4,
    gambar: Tools4,
    nama: "Tailwind CSS",
    ket: "Framework",
    dad: "400",
  },
  {
    id: 5,
    gambar: Tools5,
    nama: "Bootstrap",
    ket: "Framework",
    dad: "500",
  },
  {
    id: 6,
    gambar: Tools6,
    nama: "Javascript",
    ket: "Language",
    dad: "600",
  },
  {
    id: 7,
    gambar: Tools7,
    nama: "Node JS",
    ket: "Javascript Runtime",
    dad: "700",
  },
  {
    id: 8,
    gambar: Tools8,
    nama: "Github",
    ket: "Repository",
    dad: "800",
  },
  {
    id: 9,
    gambar: Tools9,
    nama: "Adobe Illustrator",
    ket: "Design App",
    dad: "900",
  },
  {
    id: 10,
    gambar: Tools10,
    nama: "Canva",
    ket: "Design App",
    dad: "1000",
  },
  {
    id: 11,
    gambar: Tools11,
    nama: "Figma",
    ket: "Design App",
    dad: "1100",
  },
];

export const listProyek = [
  {
    id: 1,
    gambar: Proyek1,
    gambarArray: [Proyek1, Proyek2, Proyek3, Proyek4],
    youtubeUrl: "https://youtu.be/ESzt0kQ74JY?si=qsZucskw-MhTZdpd",
    liveUrl: "",
    githubUrl: "https://github.com/davfaa/ETSSPK-DecisionSystem-Group7.git",
    type: "Decision Support System",
    nama: "Sistem Penunjang Keputusan",
    desk: "Aplikasi web berbasis Flask untuk membantu pengambilan keputusan multi-kriteria dengan beberapa metode analisis.",
    detail: "Sistem ini mengintegrasikan fitur evaluasi perbandingan berpasangan dan mendukung beberapa metode pengambilan keputusan, termasuk AHP, Bayes, SAW, PROMETHEE II, CPI, MPE, dan Yager KMKK.",
    problem: "Pengambilan keputusan multi-kriteria sering membutuhkan perhitungan yang panjang, konsisten, dan mudah dibandingkan hasilnya.",
    role: "Merancang alur sistem, mengimplementasikan metode perhitungan, membangun antarmuka, dan menguji hasil keputusan.",
    features: [
      "Input kriteria, alternatif, dan bobot keputusan.",
      "Implementasi 7 metode pengambilan keputusan.",
      "Perbandingan hasil melalui model hybrid 3 tahap.",
      "Tampilan hasil analisis yang mudah dibaca pengguna.",
    ],
    outcomes: [
      "Memperkuat pemahaman implementasi algoritma matematis ke aplikasi web.",
      "Membuat proses analisis keputusan lebih terstruktur dan terdokumentasi.",
    ],
    tools: ["Python", "Flask", "HTML", "CSS", "Javascript", "PHP", "Sqlite"],
    dad: "200",
  },
  {
    id: 2,
    gambar: Proyek2,
    gambarArray: [Proyek2, Proyek3, Proyek4, Proyek5],
    youtubeUrl: "https://youtu.be/EBfPzOfHEsU?si=WeAleBRdBXBFmPfu",
    liveUrl: "",
    githubUrl: "https://github.com/davfaa/mustanicekos.git",
    type: "Web App",
    nama: "Sistem Manajemen Kos",
    desk: "Aplikasi web berbasis PHP untuk mengelola data penghuni, admin, pemilik kos, dan informasi operasional kos.",
    detail: "Sistem manajemen rumah kos dengan landing page premium, autentikasi pengguna, dan alur registrasi yang dirancang agar mudah digunakan oleh calon penghuni maupun pengelola.",
    problem: "Pengelolaan kos membutuhkan pencatatan penghuni, komunikasi, dan akses data yang rapi agar operasional tidak tersebar manual.",
    role: "Membangun struktur halaman, mengatur alur pengguna, dan membuat tampilan sistem yang profesional.",
    features: [
      "Landing page dengan CTA registrasi dan login.",
      "Portal pengguna untuk penghuni, administrator, dan pemilik kos.",
      "Tampilan responsif berbasis Bootstrap.",
      "Struktur informasi kos yang mudah dipahami.",
    ],
    outcomes: [
      "Menghasilkan rancangan sistem kos yang lebih terpusat.",
      "Melatih penerapan UI profesional untuk sistem operasional.",
    ],
    tools: ["HTML", "CSS", "MySQL", "PHP", "Bootstrap"],
    dad: "300",
  },
  {
    id: 3,
    gambar: Proyek3,
    gambarArray: [Proyek3, Proyek1, Proyek5, Proyek6],
    youtubeUrl: "https://youtu.be/Jdc-to7yvz0?si=cSy7Ked93eE8fjrv",
    liveUrl: "https://bettanusa.unpak.ac.id/",
    githubUrl: "https://github.com/davfaa/bettanusa.git",
    type: "E-Commerce",
    nama: "Website Penjualan Ikan Hias Betta",
    desk: "Website e-commerce untuk menampilkan dan menjual produk ikan Betta serta perlengkapannya.",
    detail: "Platform e-commerce tematik dengan palet biru akuatik, pencarian produk, produk unggulan, testimoni pelanggan, dan portal login admin.",
    problem: "Penjual membutuhkan etalase digital yang mampu menampilkan produk secara menarik dan memudahkan calon pelanggan menemukan produk.",
    role: "Mendesain tampilan, membangun halaman produk, dan menyiapkan elemen interaksi dasar untuk pembelian.",
    features: [
      "Etalase produk unggulan.",
      "Pencarian produk yang mudah digunakan.",
      "Testimoni pelanggan.",
      "Portal login khusus administrator.",
    ],
    outcomes: [
      "Menciptakan pengalaman belanja yang lebih visual dan tematik.",
      "Melatih struktur e-commerce sederhana dengan PHP dan MySQL.",
    ],
    tools: ["PHP", "MySQL", "Bootstrap", "HTML", "CSS", "Javascript"],
    dad: "400",
  },
  {
    id: 4,
    gambar: Proyek4,
    gambarArray: [Proyek4, Proyek1, Proyek2, Proyek6],
    youtubeUrl: "https://youtu.be/DlkCehzpB4c?si=xMmlrN4NYelQabi-",
    liveUrl: "",
    githubUrl: "https://github.com/davfaa/galleryofhirono.git",
    type: "Static Website",
    nama: "Gallery of Hirono",
    desk: "Website statis bertema galeri digital untuk menampilkan seri art toys Hirono.",
    detail: "Proyek antarmuka web yang berpusat pada visual produk, navigasi sederhana, dan penyajian konten galeri dengan skema warna yang estetik.",
    problem: "Konten koleksi visual membutuhkan halaman yang ringan, mudah dijelajahi, dan menonjolkan gambar sebagai fokus utama.",
    role: "Membuat struktur halaman, navigasi, styling, dan tata letak galeri.",
    features: [
      "Navigasi Home, About, Series, dan News.",
      "Layout galeri dengan fokus gambar produk.",
      "Tampilan statis yang ringan.",
      "Tema visual yang konsisten.",
    ],
    outcomes: [
      "Memperkuat dasar HTML, CSS, dan JavaScript.",
      "Menerapkan penyajian konten visual yang rapi.",
    ],
    tools: ["HTML", "CSS", "JavaScript"],
    dad: "500",
  },
  {
    id: 5,
    gambar: Proyek5,
    gambarArray: [Proyek5, Proyek1, Proyek3, Proyek4],
    youtubeUrl: "https://youtu.be/__XTXZsET_8?si=N_2PLe1P1EYhZ_DT",
    liveUrl: "https://www.figma.com/proto/DXkdjBjgl1DGZcYo5de5A7/002-DAVA---Ticketing-APP-UTP-UI-UX?node-id=8-49&starting-point-node-id=8%3A49&t=8oy8DE1yoG96uIJJ-1",
    githubUrl: "https://www.figma.com/design/DXkdjBjgl1DGZcYo5de5A7/002-DAVA---Ticketing-APP-UTP-UI-UX?node-id=0-1&t=hJlaBpj7spAkbOT2-1",
    type: "UI/UX Design",
    nama: "Ticketing App for Music Concerts",
    desk: "Desain aplikasi mobile untuk pengalaman pencarian, pemilihan, dan pembelian tiket konser musik.",
    detail: "Eksplorasi UI/UX mobile berbasis dark mode dengan aksen kontras, carousel acara unggulan, filter kategori, daftar acara mendatang, dan bottom navigation.",
    problem: "Pengguna membutuhkan alur pembelian tiket yang cepat, jelas, dan nyaman digunakan melalui perangkat mobile.",
    role: "Mendesain alur layar, hierarki visual, komponen mobile, dan prototipe UI di Figma.",
    features: [
      "Homepage event dengan carousel.",
      "Filter kategori berbasis chips.",
      "Daftar konser mendatang.",
      "Bottom navigation untuk akses cepat.",
    ],
    outcomes: [
      "Menghasilkan desain mobile yang mudah dipindai pengguna.",
      "Melatih konsistensi komponen dan hierarki visual di Figma.",
    ],
    tools: ["Figma"],
    dad: "600",
  },
  {
    id: 6,
    gambar: Proyek6,
    gambarArray: [Proyek6, Proyek2, Proyek4, Proyek5],
    youtubeUrl: "https://youtu.be/J-YCtZElIPE?si=xCDGEPU0ramJkcdr",
    liveUrl: "",
    githubUrl: "https://github.com/davfaa/citradigital.git",
    type: "Image Processing",
    nama: "Pengolahan Citra Digital",
    desk: "Aplikasi interaktif berbasis Python untuk mengunggah gambar dan menerapkan parameter pengolahan citra secara langsung.",
    detail: "Aplikasi pipeline pengolahan citra digital berbasis Streamlit yang memfasilitasi upload gambar, pemrosesan parameter, dan tampilan hasil real-time.",
    problem: "Eksperimen pengolahan citra membutuhkan alat yang cepat untuk mencoba parameter dan melihat hasil perubahan gambar.",
    role: "Membangun alur upload, kontrol parameter, pemrosesan gambar, dan tampilan hasil interaktif.",
    features: [
      "Upload gambar dari pengguna.",
      "Kontrol parameter pemrosesan citra.",
      "Preview hasil secara real-time.",
      "Identitas dan informasi proyek ditampilkan dinamis.",
    ],
    outcomes: [
      "Memahami pipeline dasar pengolahan citra digital.",
      "Membuat antarmuka eksperimen yang praktis untuk kebutuhan praktikum.",
    ],
    tools: ["Python", "Streamlit", "HTML", "CSS", "Javascript"],
    dad: "700",
  },
];
