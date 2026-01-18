import ThemeToggle from "./ThemeToggle";

export default function Header() {
  return (
    <header
      className="
        fixed top-0 w-full z-50 backdrop-blur
        bg-white text-black
        dark:bg-black dark:text-white
        transition-colors duration-500
      "
    >
      <nav className="relative max-w-7xl mx-auto flex items-center px-6 py-4">
        {/* LEFT */}
        <div>
          <p className="text-xl font-bold">Prashant Singh</p>
          <p className="text-sm opacity-60">Developer & UX/UI Designer</p>
        </div>

        {/* CENTER */}
        <div className="absolute left-1/2 -translate-x-1/2 hidden md:block">
          <ul className="flex gap-8">
            <li>
              <a href="#intro">About</a>
            </li>
            <li>
              <a href="#cases">Works</a>
            </li>

            <li>
              <a href="#footer">Contact</a>
            </li>
          </ul>
        </div>

        {/* RIGHT */}
        <div className="ml-auto">
          <ThemeToggle />
        </div>
      </nav>
    </header>
  );
}
