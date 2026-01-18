export default function Footer() {
  return (
    <footer
      id="footer"
      className="py-12 transition-colors duration-300 bg-white text-black dark:bg-black dark:text-white"
    >
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Let’s Connect</h2>

        <div className="mt-2 grid md:grid-cols-2 gap-4 place-items-center text-center">
          <div className="space-y-3">
            <a
              href="mailto:parker26052003@gmail.com"
              className="flex items-center gap-3 text-lg font-medium hover:text-indigo-400"
            >
              <svg
                className="w-6 h-6 text-indigo-400"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden
              >
                <rect x="2" y="4" width="20" height="16" rx="2" />
                <path d="M22 6l-10 7L2 6" />
              </svg>
              <span>
                Email:{" "}
                <span className="ml-2 font-semibold">
                  parker26052003@gmail.com
                </span>
              </span>
            </a>
            <a
              href="tel:+918355051768"
              className="flex items-center gap-3 text-lg font-medium hover:text-indigo-400"
            >
              <svg
                className="w-6 h-6 text-indigo-400"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden
              >
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.86 19.86 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.86 19.86 0 0 1 2 4.18 2 2 0 0 1 4 2h3.09a1 1 0 0 1 1 .75c.12.5.3 1 .51 1.46a1 1 0 0 1-.24 1.06L7.7 7.7a16 16 0 0 0 6 6l1.85-1.85a1 1 0 0 1 1.06-.24c.45.21.95.39 1.46.51A1 1 0 0 1 20 14v2.92z" />
              </svg>
              <span>
                Mobile:{" "}
                <span className="ml-2 font-semibold">+91 8355051768</span>
              </span>
            </a>
          </div>

          <div className="space-y-3">
            <a
              href="https://instagram.com/ig_parker2618"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 justify-center text-base font-medium hover:text-pink-400"
            >
              <svg
                className="w-6 h-6"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden
              >
                <rect x="3" y="3" width="18" height="18" rx="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <path d="M17.5 6.5h.01" />
              </svg>
              <span>
                Instagram:{" "}
                <span className="ml-2 font-semibold">@ig_parker2618</span>
              </span>
            </a>

            <a
              href="https://www.linkedin.com/in/prashant-singh-4b337b25a"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 justify-center text-base font-medium hover:text-blue-600"
            >
              <svg
                className="w-6 h-6"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden
              >
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-14h4v2" />
                <rect x="2" y="2" width="4" height="20" rx="1" />
              </svg>
              <span>
                LinkedIn:{" "}
                <span className="ml-2 font-semibold">Prashant-Singh</span>
              </span>
            </a>
          </div>
        </div>

        <div className="mt-4 flex items-center justify-center gap-4">
          <div className="flex items-center space-x-3">
            <a
              href="https://instagram.com/ig_parker2618"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
              className="p-2 rounded hover:bg-gray-100 dark:hover:bg-white/6 transition-colors"
            >
              <svg
                className="w-5 h-5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden
              >
                <rect x="3" y="3" width="18" height="18" rx="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <path d="M17.5 6.5h.01" />
              </svg>
            </a>

            <a
              href="https://facebook.com/PrashantSingh2618"
              target="_blank"
              rel="noreferrer"
              aria-label="Facebook"
              className="p-2 rounded hover:bg-gray-100 dark:hover:bg-white/6 transition-colors"
            >
              <svg
                className="w-5 h-5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden
              >
                <path d="M18 2h-3a4 4 0 0 0-4 4v3H8v4h3v8h4v-8h3l1-4h-4V6a1 1 0 0 1 1-1h3z" />
              </svg>
            </a>

            <a
              href="https://www.linkedin.com/in/prashant-singh-4b337b25a"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn (Prashant Singh)"
              className="p-2 rounded hover:bg-gray-100 dark:hover:bg-white/6 transition-colors"
            >
              <svg
                className="w-5 h-5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden
              >
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-14h4v2" />
                <rect x="2" y="2" width="4" height="20" rx="1" />
              </svg>
            </a>

            <a
              href="https://github.com/Prashant-Parker"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub (Prashant-Parker)"
              className="p-2 rounded hover:bg-gray-100 dark:hover:bg-white/6 transition-colors"
            >
              <svg
                className="w-5 h-5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden
              >
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3a4 4 0 0 0-1-3c3-1 5-3 5-6a4.5 4.5 0 0 0-1.5-3.5" />
                <path d="M9 16c-0.5 1-2 2-3 2" />
              </svg>
            </a>
          </div>
        </div>
        <a
          href="mailto:parker26052003@gmail.com"
          className="inline-flex items-center gap-2 px-6 py-2 border border-black/10 dark:border-white/12 text-black dark:text-white hover:bg-black/5 dark:hover:bg-white/6 transition-colors duration-300 rounded"
        >
          <svg
            className="w-5 h-5"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden
          >
            <rect x="2" y="4" width="20" height="16" rx="2" />
            <path d="M22 6l-10 7L2 6" />
          </svg>
          Contact Me
        </a>

        <p className="mt-4 text-sm opacity-60">
          © {new Date().getFullYear()} Prashant — Built with ♥︎
        </p>
      </div>
    </footer>
  );
}
