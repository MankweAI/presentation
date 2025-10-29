// src/components/TitleSlide.js

export default function TitleSlide() {
  // Get current date and format it
  const today = new Date();
  const options = { year: "numeric", month: "long", day: "numeric" };
  const formattedDate = today.toLocaleDateString("en-ZA", options); // Using South African locale for potential formatting nuances

  return (
    <section className="relative flex h-screen flex-col items-center justify-center text-center text-white">
      {/* Background Image Container */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/impact.png')" }} // Ensure this uses impact.png
      >
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 p-4">
        <h1 className="text-5xl font-bold md:text-7xl">
          Opportunity is for Everyone
        </h1>
        <p className="mt-4 text-xl md:text-2xl">
          The Bursary Applications WhatsApp Chatbot
        </p>
        <p className="mt-8 text-2xl font-semibold text-amber-300 md:text-3xl">
          A Proposal for TTI Bursary Management
        </p>
        {/* --- ADDED DATE --- */}
        <p className="mt-4 text-lg text-gray-300 md:text-xl">{formattedDate}</p>
      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-10 animate-bounce">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="h-8 w-8 text-white"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m19.5 8.25-7.5 7.5-7.5-7.5"
          />
        </svg>
      </div>
    </section>
  );
}
