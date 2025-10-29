// src/components/FounderSlide.js

import Image from "next/image";

// A simple checkmark icon component for our list
const CheckIcon = () => (
  <svg
    className="h-6 w-6 flex-shrink-0 text-emerald-500"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={2.5}
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M4.5 12.75l6 6 9-13.5"
    />
  </svg>
);

export default function FounderSlide() {
  return (
    <section className="flex min-h-screen items-center justify-center bg-slate-50 px-4 py-20 md:py-32">
      <div className="flex w-full max-w-5xl flex-col items-center gap-10 md:flex-row md:gap-16">
        {/* Image Column */}
        <div className="flex-shrink-0">
          <Image
            src="/images/profile.png"
            alt="Mankwe Mokgabudi, Founder"
            width={256}
            height={256}
            className="h-48 w-48 rounded-full object-cover shadow-lg md:h-64 md:w-64"
          />
        </div>

        {/* Text Content Column */}
        <div className="text-center md:text-left">
          <h2 className="text-4xl font-bold text-emerald-600 md:text-5xl">
            Mankwe Mokgabudi
          </h2>
          <p className="mt-2 text-xl text-gray-600">
            Founder & Purpose-Driven Developer
          </p>

          <ul className="mt-6 flex flex-col space-y-4 text-left">
            <li className="flex items-start gap-3">
              <CheckIcon />
              <span className="text-lg text-gray-700">
                <strong>12 Years Corporate Tech</strong> (SARS, Huawei)
              </span>
            </li>
            <li className="flex items-start gap-3">
              <CheckIcon />
              <span className="text-lg text-gray-700">
                From Network Engineer to Software Solutions
              </span>
            </li>
            {/* --- UPDATED PORTFOLIO SECTION WITH BUTTONS --- */}
            <li className="flex items-start gap-3">
              <CheckIcon />
              <div className="flex flex-col items-start">
                <span className="text-lg text-gray-700">
                  <strong>Portfolio:</strong>
                </span>
                <div className="mt-3 flex flex-wrap gap-3">
                  <a
                    href="https://www.exambuddy.online"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block transform rounded-full bg-emerald-600 px-4 py-2 text-sm font-semibold text-white shadow-md transition-transform hover:-translate-y-1 hover:bg-emerald-700"
                  >
                    ExamBuddy
                  </a>
                  <a
                    href="https://www.effluentic.co.za"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block transform rounded-full bg-emerald-600 px-4 py-2 text-sm font-semibold text-white shadow-md transition-transform hover:-translate-y-1 hover:bg-emerald-700"
                  >
                    Effluentic
                  </a>
                  <a
                    href="http://manytools.co.za/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block transform rounded-full bg-emerald-600 px-4 py-2 text-sm font-semibold text-white shadow-md transition-transform hover:-translate-y-1 hover:bg-emerald-700"
                  >
                    ManyTools
                  </a>
                  <span className="inline-block cursor-not-allowed rounded-full bg-gray-300 px-4 py-2 text-sm font-semibold text-gray-600">
                    The Goat
                  </span>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
