import { motion } from "framer-motion";
import { Github, Linkedin, Twitter, Instagram, Youtube, Mail } from "lucide-react";

export default function SocialLinks() {
  const socials = [
    {
      name: "GitHub",
      icon: Github,
      url: "https://github.com/nicoearliawan",
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      url: "https://www.linkedin.com/in/nico-dikara-649580322/",
    },
    {
      name: "Instagram",
      icon: Instagram,
      url: "https://instagram.com/nicoallvaro",
    },
    {
      name: "Email",
      icon: Mail,
      url: "mailto:nico.elnino0318@gmail.com",
    },
  ];

  return (
    <section className="py-12">
      <div className="max-w-2xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-xl font-semibold mb-6 text-zinc-50">Connect</h2>
          <div className="flex flex-wrap gap-3">
            {socials.map((social, index) => {
              const Icon = social.icon;
              return (
                <motion.a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center gap-2 px-4 py-2 bg-zinc-900 border border-zinc-800 rounded-lg text-zinc-400 hover:text-zinc-50 hover:border-zinc-700 transition-all"
                >
                  <Icon className="w-5 h-5" />
                  <span className="text-sm">{social.name}</span>
                </motion.a>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
