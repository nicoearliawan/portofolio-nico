import { motion } from "framer-motion";
import Badge from "./ui/Badge";
import { Volume2 } from "lucide-react";
import profileImage from "../assets/profile.png";

export default function Hero() {
  const pronounceName = () => {
    const utterance = new SpeechSynthesisUtterance("Nico Alvaro Dikara");
    utterance.lang = "en-US";
    speechSynthesis.speak(utterance);
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16">
      <div className="max-w-2xl mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-6"
        >
          <img
            src={profileImage}
            alt="Nico Alvaro Dikara"
            className="w-80 h-80 rounded-full mx-auto border-4 border-zinc-800 shadow-xl object-cover"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="space-y-4"
        >
          <div className="flex items-center justify-center gap-2">
            <h1 className="text-4xl sm:text-5xl font-semibold text-zinc-50">
              Nico Alvaro Dikara
            </h1>
            <button
              onClick={pronounceName}
              className="p-2 text-zinc-400 hover:text-zinc-50 transition-colors"
              aria-label="Pronounce name"
            >
              <Volume2 className="w-5 h-5" />
            </button>
          </div>

          <p className="text-xl text-zinc-400">Frontend Developer</p>

          <div className="flex items-center justify-center gap-2">
            <Badge variant="success">Open to Work</Badge>
          </div>

          <p className="text-zinc-400 max-w-xl mx-auto mt-6">
            Seorang siswa SMK yang mempunyai minat di bidang teknologi, pengembangan web, dan pengembangan aplikasi.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
