export default function Card({ children, className = "", hover = false }) {
  return (
    <div
      className={`
        bg-zinc-900 dark:bg-zinc-900 
        border border-zinc-800 dark:border-zinc-800 
        rounded-lg p-6
        ${hover ? "transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:shadow-zinc-900/50" : ""}
        ${className}
      `}
    >
      {children}
    </div>
  );
}
