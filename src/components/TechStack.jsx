import { motion } from "framer-motion";
import { techStack } from "../data/techstack";

export default function TechStack() {
  const categories = [
    { title: "Languages", items: techStack.languages },
    { title: "Frameworks & Libraries", items: techStack.frameworks },
    { title: "Databases", items: techStack.databases },
    { title: "Tools & Platforms", items: techStack.tools },
  ];

  const getIconUrl = (iconName) => {
    return `https://cdn.simpleicons.org/${iconName}/ffffff`;
  };

  return (
    <section id="techstack" className="py-16">
      <div className="max-w-2xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl font-semibold mb-6 text-zinc-50">Tech Stack</h2>

          <div className="space-y-8">
            {categories.map((category, categoryIndex) => (
              <div key={categoryIndex}>
                <h3 className="text-sm font-medium text-zinc-400 mb-4">
                  {category.title}
                </h3>
                <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4">
                  {category.items.map((tech, techIndex) => (
                    <motion.div
                      key={techIndex}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: techIndex * 0.05 }}
                      whileHover={{ scale: 1.1 }}
                      className="flex flex-col items-center gap-2 p-3 bg-zinc-900 border border-zinc-800 rounded-lg hover:border-zinc-700 transition-all cursor-pointer"
                    >
                      <img
                        src={getIconUrl(tech.icon)}
                        alt={tech.name}
                        className="w-8 h-8"
                        onError={(e) => {
                          e.target.style.display = "none";
                        }}
                      />
                      <span className="text-xs text-zinc-400 text-center">
                        {tech.name}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
