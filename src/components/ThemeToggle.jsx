import { useTheme } from "../ThemeContext";

export default function ThemeToggle() {
  const { dark, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="
        px-4 py-1.5 rounded-full text-sm font-medium
        border transition-all duration-300
        bg-white text-black border-black/30
        dark:bg-black dark:text-white dark:border-white/30
        hover:scale-105
      "
    >
      {dark ? "🌙 Dark" : "☀️ Light"}
    </button>
  );
}
