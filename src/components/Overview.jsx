import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Globe, User } from "lucide-react";
import Card from "./ui/Card";

export default function Overview() {
  const info = [
    {
      icon: <MapPin className="w-4 h-4" />,
      label: "Location",
      value: "Bogor, Indonesia",
    },
    {
      icon: <Phone className="w-4 h-4" />,
      label: "Phone",
      value: "+62 895-4147-97154",
      blur: true,
    },
    {
      icon: <Mail className="w-4 h-4" />,
      label: "Email",
      value: "nico.elnino0318@gmail.com",
    },
    {
      icon: <Globe className="w-4 h-4" />,
      label: "Website",
      value: "nicoalvaro.vercel.app",
      link: "https://nicoalvaro.vercel.app",
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
          <Card>
            <h2 className="text-xl font-semibold mb-6 text-zinc-50">Overview</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {info.map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="text-zinc-400 mt-0.5">{item.icon}</div>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs text-zinc-500 mb-1">{item.label}</p>
                    {item.link ? (
                      <a
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-zinc-300 hover:text-zinc-50 transition-colors"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p
                        className={`text-sm text-zinc-300 ${
                          item.blur ? "blur-sm hover:blur-none transition-all cursor-pointer" : ""
                        }`}
                      >
                        {item.value}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
