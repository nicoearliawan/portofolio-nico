import { motion } from "framer-motion";
import { Award, Calendar, ExternalLink } from "lucide-react";
import { certificates } from "../data/certificates";
import Card from "../components/ui/Card";
import Badge from "../components/ui/Badge";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function CertificatesPage({ onOpenCommandPalette }) {
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-50">
      <Navbar onOpenCommandPalette={onOpenCommandPalette} />
      
      <div className="pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-4xl font-semibold mb-4">Certificates & Achievements</h1>
            <p className="text-zinc-400 mb-12">
              Professional certifications and completed courses
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {certificates.map((cert) => (
                <Card key={cert.id} hover>
                  <div className="mb-4">
                    <img
                      src={cert.image}
                      alt={cert.title}
                      className="w-full h-48 object-cover rounded-lg"
                    />
                  </div>

                  <div className="flex items-start gap-2 mb-2">
                    <Award className="w-5 h-5 text-blue-400 flex-shrink-0 mt-1" />
                    <h2 className="text-xl font-medium text-zinc-50">
                      {cert.title}
                    </h2>
                  </div>

                  <p className="text-zinc-400 mb-4">{cert.issuer}</p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {cert.skills.map((skill, idx) => (
                      <Badge key={idx}>{skill}</Badge>
                    ))}
                  </div>

                  <div className="flex flex-col gap-2 text-sm">
                    <div className="flex items-center gap-2 text-zinc-500">
                      <Calendar className="w-4 h-4" />
                      <span>Issued: {formatDate(cert.date)}</span>
                    </div>

                  

                    {cert.credentialUrl && (
                      <a
                        href={cert.credentialUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors mt-2"
                      >
                        <ExternalLink className="w-4 h-4" />
                        <span>Verify Credential</span>
                      </a>
                    )}
                  </div>
                </Card>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
