import { useState, useEffect, useCallback } from "react";
import { Search, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function CommandPalette({ isOpen, onClose }) {
  const [search, setSearch] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(0);

  const commands = [
    { name: "Home", action: () => scrollToSection("home") },
    { name: "About", action: () => scrollToSection("about") },
    { name: "Projects", action: () => scrollToSection("projects") },
    { name: "Education", action: () => scrollToSection("experience") },
    { name: "Tech Stack", action: () => scrollToSection("techstack") },
    { name: "Certificates", action: () => scrollToSection("certificates") },
    { name: "Contact", action: () => scrollToSection("contact") },
  ];

  const filteredCommands = commands.filter((cmd) =>
    cmd.name.toLowerCase().includes(search.toLowerCase())
  );

  const scrollToSection = useCallback((id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      onClose();
    }
  }, [onClose]);

  const handleKeyDown = useCallback((e) => {
    if (e.key === "Escape") {
      onClose();
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      setSelectedIndex((prev) =>
        prev < filteredCommands.length - 1 ? prev + 1 : prev
      );
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setSelectedIndex((prev) => (prev > 0 ? prev - 1 : 0));
    } else if (e.key === "Enter") {
      e.preventDefault();
      if (filteredCommands[selectedIndex]) {
        filteredCommands[selectedIndex].action();
      }
    }
  }, [filteredCommands, selectedIndex, onClose]);

  useEffect(() => {
    setSelectedIndex(0);
  }, [search]);

  useEffect(() => {
    if (!isOpen) return;

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, handleKeyDown]);

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-start justify-center pt-20"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.95, opacity: 0 }}
          className="bg-zinc-900 border border-zinc-800 rounded-lg w-full max-w-lg mx-4 overflow-hidden shadow-2xl"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex items-center gap-3 px-4 py-3 border-b border-zinc-800">
            <Search className="w-5 h-5 text-zinc-400" />
            <input
              type="text"
              placeholder="Search commands..."
              className="flex-1 bg-transparent outline-none text-zinc-100 placeholder-zinc-500"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              autoFocus
            />
            <button
              onClick={onClose}
              className="text-zinc-400 hover:text-zinc-100 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="max-h-96 overflow-y-auto">
            {filteredCommands.length > 0 ? (
              filteredCommands.map((cmd, index) => (
                <button
                  key={index}
                  onClick={cmd.action}
                  className={`w-full px-4 py-3 text-left transition-colors border-b border-zinc-800/50 last:border-0 ${
                    index === selectedIndex
                      ? "bg-zinc-700 text-zinc-100"
                      : "hover:bg-zinc-800 text-zinc-100"
                  }`}
                >
                  {cmd.name}
                </button>
              ))
            ) : (
              <div className="px-4 py-8 text-center text-zinc-500">
                No commands found
              </div>
            )}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
