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
    <section className="flex h-screen items-center justify-center bg-slate-50 px-4 py-12">
      <div className="flex w-full max-w-5xl flex-col items-center gap-10 md:flex-row md:gap-16">
        {/* Image Column */}
        <div className="flex-shrink-0">
          <Image
            // Use your profile.png asset
            src="/images/profile.png"
            alt="Mankwe Mokgabudi, Founder"
            width={256} // The width of the image in pixels
            height={256} // The height of the image in pixels
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

          <ul className="mt-6 flex flex-col items-center space-y-4 text-left md:items-start">
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
            <li className="flex items-start gap-3">
              <CheckIcon />
              <span className="text-lg text-gray-700">
                <strong>Portfolio:</strong> The Goat, ExamBuddy.online,
                Effluentic
              </span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
