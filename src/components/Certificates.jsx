import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Calendar, Award, ExternalLink, FileText, Image } from "lucide-react";
import { certificates } from "../data/certificates";
import Card from "./ui/Card";
import Badge from "./ui/Badge";
import PDFModal from "./ui/PDFModal";
import ImageModal from "./ui/ImageModal";

export default function Certificates() {
  const [selectedPdf, setSelectedPdf] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedTitle, setSelectedTitle] = useState("");

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  const handleOpenPdf = (pdf, title) => {
    setSelectedPdf(pdf);
    setSelectedTitle(title);
  };

  const handleOpenImage = (image, title) => {
    setSelectedImage(image);
    setSelectedTitle(title);
  };

  return (
    <section id="certificates" className="py-16">
      <div className="max-w-2xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-semibold text-zinc-50">Certificates</h2>
            <a
              href="/certificates"
              className="text-sm text-zinc-400 hover:text-zinc-50 transition-colors flex items-center gap-1"
            >
              View All <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          <div className="space-y-4">
            {certificates.slice(0,4).map((cert, index) => (
              <motion.div
                key={cert.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card hover className="cursor-pointer">
                  <div className="flex flex-col sm:flex-row gap-4">
                    {/* Certificate Image */}
                    <div className="w-full sm:w-32 h-24 flex-shrink-0">
                      <img
                        src={cert.image}
                        alt={cert.title}
                        className="w-full h-full object-cover rounded-lg"
                      />
                    </div>

                    {/* Certificate Info */}
                    <div className="flex-1">
                      <div className="flex items-start justify-between gap-4 mb-2">
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-1">
                            <Award className="w-4 h-4 text-blue-400" />
                            <h3 className="text-lg font-medium text-zinc-50">
                              {cert.title}
                            </h3>
                          </div>
                          <p className="text-sm text-zinc-400 mb-2">{cert.issuer}</p>
                        </div>
                      </div>

                      {/* Skills Tags */}
                      <div className="flex flex-wrap gap-2 mb-3">
                        {cert.skills.map((skill, idx) => (
                          <Badge key={idx}>{skill}</Badge>
                        ))}
                      </div>

                      {/* Date and Credential */}
                      <div className="flex flex-wrap items-center gap-4 text-xs text-zinc-500">
                        <div className="flex items-center gap-1">
                          <Calendar className="w-3 h-3" />
                          {formatDate(cert.date)}
                        </div>
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            handleOpenImage(cert.image, cert.title);
                          }}
                          className="flex items-center gap-1 text-purple-400 hover:text-purple-300 transition-colors"
                        >
                          <Image className="w-3 h-3" />
                          View Full Image
                        </button>
                        {cert.pdf && (
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              handleOpenPdf(cert.pdf, cert.title);
                            }}
                            className="flex items-center gap-1 text-blue-400 hover:text-blue-300 transition-colors"
                          >
                            <FileText className="w-3 h-3" />
                            View PDF
                          </button>
                        )}
                        {cert.credentialUrl && (
                          <a
                            href={cert.credentialUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-1 text-blue-400 hover:text-blue-300 transition-colors"
                            onClick={(e) => e.stopPropagation()}
                          >
                            <ExternalLink className="w-3 h-3" />
                            Verify Credential
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      <PDFModal
        isOpen={!!selectedPdf}
        onClose={() => setSelectedPdf(null)}
        pdfUrl={selectedPdf}
        title={selectedTitle}
      />

      <ImageModal
        isOpen={!!selectedImage}
        onClose={() => setSelectedImage(null)}
        imageUrl={selectedImage}
        title={selectedTitle}
      />
    </section>
  );
}
