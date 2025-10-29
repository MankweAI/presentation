// src/components/AskSlide.js

export default function AskSlide() {
  return (
    <section className="flex h-screen flex-col items-center justify-center bg-gray-900 p-8 text-center text-white">
      <div className="max-w-3xl">
        <h1 className="text-5xl font-bold md:text-7xl">
          Let&apos;s Build It Together
        </h1>
        <p className="mt-6 text-xl font-light text-gray-300 md:text-2xl">
          Seeking pilot partners and strategic alliances to create South
          Africa&apos;s most inclusive opportunity platform.
        </p>

        <div className="mt-12">
          <p className="text-2xl font-bold text-emerald-400">
            Mankwe Mokgabudi
          </p>
          <a
            href="mailto:mankwemokgabudi@outlook.com" // IMPORTANT: Replace with your actual email
            className="mt-2 inline-block text-xl text-gray-200 underline transition hover:text-white"
          >
            mankwemokgabudi@outlook.com
          </a>
        </div>
      </div>
    </section>
  );
}
