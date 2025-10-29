// src/components/ProblemSlide.js

export default function ProblemSlide() {
  return (
    <section className="relative flex h-screen flex-col items-center justify-center bg-gray-900 text-center text-white">
      {/* Background Image Container */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        // Using your 'struggle.png' asset
        style={{ backgroundImage: "url('/images/struggle.png')" }}
      >
        {/* A slightly stronger overlay to emphasize the 'problem' mood */}
        <div className="absolute inset-0 bg-black opacity-60"></div>
      </div>

      {/* Content Container - uses space-y to separate the two main points */}
      <div className="relative z-10 flex flex-col space-y-24 p-8">
        {/* First Point: The Statistic */}
        <div>
          <p className="text-6xl font-bold text-amber-400 md:text-8xl">
            {">60%"}
          </p>
          <h2 className="mt-2 text-2xl font-light tracking-wide md:text-3xl">
            Lack Reliable Internet Access
          </h2>
        </div>

        {/* Second Point: The Concept */}
        <div>
          <h2 className="text-4xl font-bold md:text-5xl">
            The &quot;Next Step&quot; Digital Wall
          </h2>
        </div>
      </div>
    </section>
  );
}

