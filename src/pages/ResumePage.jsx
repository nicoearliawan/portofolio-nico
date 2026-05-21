import { motion } from "framer-motion";
import { Download } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const handleDownload = () => {
  const link = document.createElement("a");
  link.href = "/resume.pdf"; // nanti ganti dengan file kamu
  link.download = "Nico-Alvaro-Resume.pdf"; // nama file saat didownload
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

export default function ResumePage({ onOpenCommandPalette }) {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-50">
      <Navbar onOpenCommandPalette={onOpenCommandPalette} />
      
      <div className="pt-24 pb-16">
        <div className="max-w-2xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >

          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="text-4xl font-semibold mb-2">Resume & CV</h1>
            </div>
            <button onClick={handleDownload} className="flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors">
              <Download className="w-4 h-4" />
              Download CV 
            </button>
          </div>

          <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-8">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-semibold mb-2">Nico Alvaro Dikara</h2>
              <p className="text-zinc-400">Software Engineer</p>
              <p className="text-sm text-zinc-500 mt-2">
                nico.elnino0318@gmail.com | +62 895 4147 97154 | Bogor, Indonesia
              </p>
            </div>

            <div className="space-y-8">
              <section>
                <h3 className="text-xl font-semibold mb-4 border-b border-zinc-800 pb-2">
                  Summary
                </h3>
                <p className="text-zinc-400">
                  Berpengalaman sebagai Software Engineer selama 1,5 tahun dan mempelajari beberapa bahasa pemrograman seperti
                  JavaScript, PHP, dan Dart. Ikut dalam Organisasi Siswa Intra Sekolah (OSIS) dan menjadi Koordinator seksi bidang
                  Kedisiplinan.
                </p>
              </section>

              <section>
                <h3 className="text-xl font-semibold mb-4 border-b border-zinc-800 pb-2">
                  Experience
                </h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium text-zinc-50">
                      Senior Software Engineer
                    </h4>
                    <p className="text-sm text-zinc-400">
                      SMK WIKRAMA Bogor | July 2024 - Present
                    </p>
                    <ul className="list-disc list-inside text-sm text-zinc-400 mt-2 space-y-1">
                      <li>Membuat project fullstack </li>
                      <li>Berkontribusi dalam kelompok membuat Web E-Commerce sederhana</li>
                      <li>Anggota OSIS sebagai Koordinator Seksi Bidang Kedisiplinan</li>
                    </ul>
                  </div>
                </div>
              </section>

              <section>
                <h3 className="text-xl font-semibold mb-4 border-b border-zinc-800 pb-2">
                  Education
                </h3>
                <div>
                  <h4 className="font-medium text-zinc-50">
                    SMK WIKRAMA Bogor
                  </h4>
                  <p className="text-sm text-zinc-400">
                    Pengembangan Perangkat Lunak dan Gim | 2024 - Sekarang
                  </p>
                </div>
              </section>

              <section>
                <h3 className="text-xl font-semibold mb-4 border-b border-zinc-800 pb-2">
                  Skills
                </h3>
                <div className="flex flex-wrap gap-2">
                  {[
                    "HTML",
                    "CSS",
                    "JavaScript",
                    "Node.js",
                    "Dart",
                    "Express.js",
                    "MySQL",
                    "MongoDB",
                  ].map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-zinc-800 text-zinc-300 rounded-md text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </section>
            </div>
          </div>
        </motion.div>
      </div>
    </div>

    <Footer />
    </div>
  );
}
