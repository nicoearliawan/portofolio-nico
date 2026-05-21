import company_profile from "../assets/company-profile.png"
import ticketing_app from "../assets/ticketing-app.png"
import tixid from "../assets/tixid.png"
import tugasku from "../assets/tugasku.png"
import kalkulator from "../assets/kalkulator.png"
import webportohtml from "../assets/webportohtml.png"
import profilediri from "../assets/profileflutter.png"
import earthquakemonitor from "../assets/earthquake.png"
import courtbooking from "../assets/courtbooking.png"
import figma from "../assets/e-commerce-figma.png"

export const projects = [
  {
    id: 1,
    title: "Company Profile",
    description: "Website company profile yang responsif dan profesional untuk sebuah perusahaan. Dibangun menggunakan Laravel dengan tampilan yang bersih menggunakan Bootstrap.",
    image: company_profile,
    tags: ["Laravel", "CSS Bootstrap"],
    github: "https://github.com/nicoearliawan/laravel-nico",
  },
  {
    id: 2,
    title: "Ticketing App",
    description: "Aplikasi tiket berbasis mobile yang dibuat menggunakan Flutter. Memungkinkan pengguna untuk memesan dan mengelola tiket secara digital dengan tampilan yang modern.",
    image: ticketing_app,
    tags: ["Flutter"],
    github: "https://github.com/nicoearliawan/ticket-app",
  },
  {
    id: 3,
    title: "TIX ID",
    description: "Web pemesanan tiket bioskop dengan fitur pembayaran dan menggunakan database",
    image: tixid,
    tags: ["Laravel", "MySQL", "Bootstrap"],
    github: "https://github.com/nicoearliawan/project_tix-id",
  },
  {
    id: 4,
    title: "Tugasku",
    description: "Web untuk mengumpulkan tugas para siswa dan bisa dikelola oleh guru. web ini terinspirasi dari google classroom.",
    image: tugasku,
    tags: ["Laravel", "MySQL", "Bootstrap"],
    github: "https://github.com/nicoearliawan/Tugasku",
  },
  {
    id: 5,
    title: "Kalkulator",
    description: "Aplikasi kalkulator pada web yang saya buat.",
    image: kalkulator,
    tags: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/nicoearliawan/kalkulator",
    demo: "https://nicoearliawan.github.io/kalkulator/",
  },
  {
    id: 6,
    title: "Portofolio",
    description: "Web portofolio pertama saya menggunakan html css.",
    image: webportohtml,
    tags: ["HTML", "CSS"],
    github: "https://github.com/nicoearliawan/PersonalWeb",
    demo: "https://nicoearliawan.github.io/PersonalWeb/",
  }, {
    id: 6,
    title: "Profile Diri",
    description: "Membuat aplikasi profile sederhana dengan flutter.",
    image: profilediri,
    tags: ["Flutter"],
    github: "https://github.com/nicoearliawan/profile-diri-flutter",
  }, {
    id: 6,
    title: "TerraQuake App",
    description: "Membuat web gempa bumi dengan mengambil publik API realtime earthquake",
    image: earthquakemonitor,
    tags: ["React", "Tailwind"],
    github: "https://github.com/nicoearliawan/earthquake-monitor",
  }, {
    id: 6,
    title: "Court Booking",
    description: "Aplikasi pemesanan lapangan dengan flutter",
    image: courtbooking,
    tags: ["Flutter"],
    github: "https://github.com/nicoearliawan/court-booking.git",
  }, {
    id: 6,
    title: "E-Commerce",
    description: "UI E-Commerce yang saya buat menggunakan figma",
    image: figma,
    tags: ["Figma"],
    demo: "https://www.figma.com/design/kd4SfodUtdmy8Sp3sTqUvL/Belajar-UI-UX?node-id=0-1&t=IcWEQmyg6sCxp8Ma-1",
  }
];
