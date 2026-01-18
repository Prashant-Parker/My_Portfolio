import Avatar3D from "../components/Avatar3D";

export default function Cases() {
  return (
    <section className="relative min-h-screen bg-bg text-fg px-24 py-32 overflow-hidden">
      {/* Avatar merged into section */}
      <div className="absolute inset-y-0 left-0 w-[45%]">
        <Avatar3D />
      </div>

      {/* Content */}
      <div className="relative max-w-2xl ml-auto">
        <h2 className="text-4xl font-bold mb-6">Case Studies</h2>

        <p className="text-lg text-accent leading-relaxed">
          Calm, focused, and thoughtfully engineered digital experiences
          designed with precision and clarity.
        </p>
      </div>
    </section>
  );
}
