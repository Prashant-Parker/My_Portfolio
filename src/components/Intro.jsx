import { useTheme } from "../ThemeContext";
import TechCanvas from "./TechCanvas";

export default function Intro() {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <section id="intro" className="relative min-h-screen overflow-hidden">
      {/* Full canvas, shifted right */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 translate-x-[18%] scale-110">
          <TechCanvas />
        </div>

        {/* soft gradient fade toward text */}
        <div
          className={`absolute inset-0 ${
            isDark
              ? "bg-gradient-to-r from-black via-black/60 to-transparent"
              : "bg-gradient-to-r from-white via-white/60 to-transparent"
          }`}
        />
      </div>

      {/* Content */}
      <div
        className={`relative z-10 flex flex-col justify-center px-10 max-w-xl min-h-screen ${
          isDark ? "text-white" : "text-black"
        }`}
      >
        <h2 className="text-4xl font-bold mb-6">Technology & Design</h2>

        <p className={`text-2xl ${isDark ? "text-white/80" : "text-black/70"}`}>
          Building modern digital systems with clean architecture and creative
          engineering.
        </p>
      </div>
    </section>
  );
}
