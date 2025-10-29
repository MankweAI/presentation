// src/components/VisionSlide.js

// Simple SVG icons for visual flair
const GraduationCapIcon = () => (
  <svg
    className="h-12 w-12 text-emerald-600"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.905 59.905 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0l-3.07-.715A48.294 48.294 0 0012 3.493a48.294 48.294 0 009.372 5.935l-3.07.715M12 21.75a3 3 0 01-3-3h6a3 3 0 01-3 3z"
    />
  </svg>
);
const BriefcaseIcon = () => (
  <svg
    className="h-12 w-12 text-emerald-600"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M20.25 14.15v4.07a2.25 2.25 0 01-2.25 2.25H5.92a2.25 2.25 0 01-2.25-2.25v-4.07a2.25 2.25 0 01.92-1.758l3.09-2.06a2.25 2.25 0 00.92-1.758V8.25a2.25 2.25 0 012.25-2.25h3.83a2.25 2.25 0 012.25 2.25v1.07a2.25 2.25 0 00.92 1.758l3.09 2.06a2.25 2.25 0 01.92 1.758z"
    />
  </svg>
);

export default function VisionSlide() {
  return (
    <section className="flex h-screen flex-col items-center justify-center bg-white p-8 text-center">
      <div className="max-w-4xl">
        <h2 className="text-2xl font-semibold text-gray-600">
          Today: The Most Accessible Application Tool
        </h2>

        <div className="my-8 h-px w-24 bg-gray-300 mx-auto"></div>

        <h1 className="text-4xl font-bold text-gray-900 md:text-6xl">
          The Vision: A Single Gateway to Opportunity
        </h1>

        <div className="mt-12 grid grid-cols-2 gap-8 md:grid-cols-4">
          <div className="flex flex-col items-center">
            <GraduationCapIcon />
            <p className="mt-2 text-xl font-bold">Bursaries</p>
          </div>
          <div className="flex flex-col items-center">
            <GraduationCapIcon />
            <p className="mt-2 text-xl font-bold">NSFAS</p>
          </div>
          <div className="flex flex-col items-center">
            <BriefcaseIcon />
            <p className="mt-2 text-xl font-bold">Learnerships</p>
          </div>
          <div className="flex flex-col items-center">
            <BriefcaseIcon />
            <p className="mt-2 text-xl font-bold">Internships</p>
          </div>
        </div>
      </div>
    </section>
  );
}
