import TechBackground from "./TechBackground";

export default function Hero() {
  return (
    <section
      className="
        relative min-h-screen overflow-hidden flex items-center justify-center pt-20
        bg-gradient-to-b from-purple-200 via-purple-100 to-indigo-50 text-black
        dark:bg-gradient-to-b dark:from-black dark:via-black/90 dark:to-purple-900 dark:text-white
      "
    >
      {/* 3D BACKGROUND */}
      {/* decorative purple gradient shape */}
      <div className="absolute -top-32 -left-32 w-[60rem] h-[60rem] rounded-full bg-gradient-to-br from-purple-500 via-pink-500 to-indigo-400 opacity-60 dark:opacity-36 blur-2xl transform -rotate-12 z-10 pointer-events-none float-slow" />

      {/* nebula subtle overlay */}
      <div className="absolute inset-0 z-11 nebula pointer-events-none mix-blend-screen" />

      {/* CSS-only spiral galaxy */}
      <div className="galaxy" />

      <div className="absolute inset-0 z-0 opacity-100">
        <TechBackground />
      </div>

      {/* starfield layers */}
      <div className="absolute inset-0 -z-10 starfield layer-slow pointer-events-none" />
      <div className="absolute inset-0 -z-20 starfield layer-fast pointer-events-none" />

      {/* vignette for darker edges */}
      <div className="absolute inset-0 vignette pointer-events-none" />

      {/* dark overlay to deepen colors */}
      <div className="absolute inset-0 bg-transparent z-[12] pointer-events-none dark:bg-black/20" />

      {/* HERO CARD */}
      <div
        className="
          relative z-20 text-center
          px-10 md:px-20 py-16
          rounded-2xl
          border
          backdrop-blur-[1.5px]
          transition-colors
          
          bg-white/70 border-black/10 text-black
          dark:bg-black/50 dark:border-white/12 dark:text-white
        "
      >
        <p className="uppercase tracking-[0.35em] text-xs opacity-70 mb-6">
          Creative Developer
        </p>

        <h1 className="text-5xl md:text-7xl font-bold leading-tight">
          Hey !
          <br />
          You want to build something amazing together?
        </h1>

        <p className="mt-6 opacity-80 max-w-xl mx-auto">
          I am a developer and UX/UI designer based in India.
        </p>

        <a
          href="mailto:parker26052003@gmail.com?subject=Website%20Inquiry&body=Hi%20Prashant%2C%0A%0AI%20saw%20your%20portfolio%20and%20would%20like%20to%20get%20in%20touch.%20Could%20we%20discuss%20a%20project%20or%20collaboration%3F%0A%0AThanks%2C"
          className="
            inline-block mt-12 px-12 py-4
            border transition
            border-black/40
            hover:bg-black hover:text-white
            dark:border-gray-400/70
            dark:hover:bg-white dark:hover:text-black
          "
        >
          Contact me
        </a>
      </div>
    </section>
  );
}
