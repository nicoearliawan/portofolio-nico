import web from '../assets/sertifikat/dasarWeb.png'
import js from '../assets/sertifikat/dasarJS.png'
import ai from '../assets/sertifikat/dasarAI.png'
import webDevelopment from '../assets/sertifikat/webDevelopment.png'
import dart from '../assets/sertifikat/dart.png'
import ldks from '../assets/sertifikat/28.png'
import k3 from '../assets/sertifikat/k3.png'
import gdg from '../assets/sertifikat/gdg.png'

// PDF imports
import webPdf from '../assets/sertifikat/dasarWebPdf.pdf'
import jsPdf from '../assets/sertifikat/dasarJSPdf.pdf'
import aiPdf from '../assets/sertifikat/dasarAIPdf.pdf'
import webDevPdf from '../assets/sertifikat/webDevelopmentPdf.pdf'
import dartPdf from '../assets/sertifikat/dartPdf.pdf'
import k3Pdf from '../assets/sertifikat/K3Pdf.pdf'
import gdgPdf from '../assets/sertifikat/gdgPdf.pdf'


export const certificates = [
  {
    id: 1,
    title: "Belajar Dasar Pemrograman Web",
    date: "2024-10-23",
    credentialUrl: "https://www.dicoding.com/certificates/JMZV430ORXN9",
    image: web,
    pdf: webPdf,
    skills: ["FrontEnd", "HTML", "CSS"],
  },
  {
    id: 2,
    title: "Belajar Dasar Pemrograman JavaScript",
    date: "2025-01-10",
    credentialUrl: "https://www.dicoding.com/certificates/L4PQEMJ6QPO1",
    image: js,
    pdf: jsPdf,
    skills: ["FrontEnd", "JavaScript"],
  },
  {
    id: 3,
    title: "Belajar Dasar AI",
    date: "2025-01-21",
    credentialUrl: "https://www.dicoding.com/certificates/81P2LGVWYZOY",
    image: ai,
    pdf: aiPdf,
    skills: ["AI", "Machine Learning"],
  },
  {
    id: 4,
    title: "Memulai Pemrograman dengan Dart",
    date: "2025-11-18",
    credentialUrl: "https://www.dicoding.com/certificates/L4PQ2Y24OZO1",
    image: dart,
    pdf: dartPdf,
    skills: ["Flutter", "Dart", "Mobile Development"],
  }, 
  {
    id: 5,
    title: "Web Development Fundamentals",
    date: "2024-10-19",
    credentialUrl: "https://www.credly.com/badges/6659c3b1-9bb6-46d9-9e7d-92a77481b180/public_url",
    image: webDevelopment,
    pdf: webDevPdf,
    skills: ["FrontEnd", "HTML", "CSS"],
  }, 
  {
    id: 6,
    title: "Keselamatan dan Kesehatan Kerja",
    date: "2024-08-29",
    credentialUrl: "https://youth4osh.com/eoshlearning/certificate/38535b3940",
    image: k3,
    pdf: k3Pdf,
    skills: ["K3"],
  },
  {
    id: 7,
    title: "Latihan Dasar Kepemimpinan",
    issuer: "Keterangan Sangat Baik",
    date: "2024-09",
    image: ldks,
    skills: ["Leadership", "Problem Solving"],
  },
  {
    id: 8,
    title: "GDG Bogor",
    date: "2026-05-13",
    image: gdg,
    pdf: gdgPdf,
    skills: ["Prompting", "Vibe Coding"],
  },
];
