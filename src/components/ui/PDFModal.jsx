import { X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function PDFModal({ isOpen, onClose, pdfUrl, title }) {
  if (!isOpen || !pdfUrl) return null;

  const handleDownloadPdf = () => {
    try {
      const link = document.createElement("a");
      link.href = pdfUrl;
      link.download = `${title}.pdf`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (error) {
      console.error("Error downloading PDF:", error);
      // Fallback: open in new tab
      window.open(pdfUrl, '_blank');
    }
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.95, opacity: 0 }}
          className="bg-zinc-900 border border-zinc-800 rounded-lg w-full max-w-4xl h-[80vh] flex flex-col shadow-2xl"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b border-zinc-800">
            <h2 className="text-lg font-semibold text-zinc-50 truncate">{title}</h2>
            <button
              onClick={onClose}
              className="p-2 text-zinc-400 hover:text-zinc-100 transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* PDF Viewer */}
          <div className="flex-1 overflow-hidden">
            <iframe
              src={pdfUrl}
              className="w-full h-full"
              title={title}
            />
          </div>

          {/* Footer with Download Button */}
          <div className="flex items-center justify-between p-4 border-t border-zinc-800">
            <p className="text-sm text-zinc-400">PDF Certificate</p>
            <button
              onClick={handleDownloadPdf}
              className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors text-sm font-medium"
            >
              Download PDF
            </button>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
