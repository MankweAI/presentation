// src/components/ProblemSlide.js

import Image from "next/image";

export default function ProblemSlide() {
  return (
    <section className="bg-white px-8 py-20 md:py-32">
      <div className="mx-auto grid max-w-6xl items-center gap-16 md:grid-cols-2">
        {/* Image Column */}
        <div>
          <Image
            src="/images/struggle.png"
            alt="A student facing the digital divide"
            width={600}
            height={600}
            className="rounded-lg object-cover shadow-xl"
          />
        </div>

        {/* Text Content Column */}
        <div className="flex flex-col gap-12">
          <div>
            <p className="text-6xl font-bold text-amber-500 md:text-8xl">
              {">60%"}
            </p>
            <h2 className="mt-2 text-2xl font-light tracking-wide text-gray-700 md:text-3xl">
              Lack Reliable Internet Access
            </h2>
          </div>
          <div>
            <h2 className="text-4xl font-bold text-gray-800 md:text-5xl">
              The &quot;Next Step&quot; Digital Wall
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              After finding learning resources on platforms like FundaMate,
              students hit a wall when bursary applications demand expensive
              data and powerful devices they don&apos;t have.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
