import { X, Download } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function ImageModal({ isOpen, onClose, imageUrl, title }) {
  if (!isOpen || !imageUrl) return null;

  const handleDownload = () => {
    try {
      const link = document.createElement("a");
      link.href = imageUrl;
      link.download = `${title}.png`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (error) {
      console.error("Error downloading image:", error);
      // Fallback: open in new tab
      window.open(imageUrl, '_blank');
    }
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.95, opacity: 0 }}
          className="bg-zinc-900 border border-zinc-800 rounded-lg w-full max-w-4xl flex flex-col shadow-2xl max-h-[90vh]"
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

          {/* Image Viewer */}
          <div className="flex-1 overflow-auto flex items-center justify-center p-4">
            <img
              src={imageUrl}
              alt={title}
              className="max-w-full max-h-full object-contain rounded-lg"
            />
          </div>

          {/* Footer with Download Button */}
          <div className="flex items-center justify-between p-4 border-t border-zinc-800">
            <p className="text-sm text-zinc-400">Certificate Image</p>
            <button
              onClick={handleDownload}
              className="flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors text-sm font-medium"
            >
              <Download className="w-4 h-4" />
              Download Image
            </button>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
