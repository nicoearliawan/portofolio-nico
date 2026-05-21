export default function Badge({ children, variant = "default", className = "" }) {
  const variants = {
    default: "bg-zinc-800 text-zinc-300 dark:bg-zinc-800 dark:text-zinc-300",
    primary: "bg-blue-500/10 text-blue-400 border-blue-500/20",
    success: "bg-green-500/10 text-green-400 border-green-500/20",
    new: "bg-red-500/10 text-red-400 border-red-500/20",
  };

  return (
    <span
      className={`inline-flex items-center px-2.5 py-0.5 rounded-md text-xs font-medium border ${variants[variant]} ${className}`}
    >
      {children}
    </span>
  );
}
