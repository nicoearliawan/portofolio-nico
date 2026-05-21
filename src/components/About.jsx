import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-16">
      <div className="max-w-2xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl font-semibold mb-6 text-zinc-50">About Me</h2>
          <div className="space-y-4 text-zinc-400 leading-relaxed">
            <p>
              Halo! Saya adalah seorang siswa SMK dan memilih jurusan pengembangan perangkat lunak dengan pengalaman lebih dari 1,5 tahun dalam mengembangkan aplikasi web. Fokus utama pembelajaran saya adalah penguasaan skill teknis dan praktik langsung untuk siap terjun ke dunia kerja dan industri.
            </p>
            <p>
              Saat ini, saya bersekolah di {""} <a target="_blank" className="font-bold underline" href="https://smkwikrama.sch.id/">SMK WIKRAMA Bogor</a> sebagai siswa yang belajar bagaimana teknologi seperti website dan aplikasi berjalan dan dibuat. Saya Berpengalaman di organisasi sekolah seperti Organisasi Siswa Intera Sekolah (OSIS) dan menjadi Koordinator seksi bidang Kedisiplinan.
            </p>
            
            <p>
              Saya mengkhususkan diri dalam React, Laravel , dan Flutter, dengan fokus pada penciptaan pengalaman pengguna yang inovatif dan berkinerja tinggi. Ke depannya, saya bercita-cita menjadi seorang Mobile developer. Melalui portfolio ini, saya mengumpulkan berbagai proyek yang telah saya buat.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
