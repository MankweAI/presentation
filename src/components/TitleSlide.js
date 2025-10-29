// src/components/TitleSlide.js

export default function TitleSlide() {
  return (
    // This div represents a single "slide" and takes up the full screen height.
    <section className="relative flex h-screen flex-col items-center justify-center text-center text-white">
      {/* Background Image Container */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        // IMPORTANT: Replace 'impact-bg.jpg' with the actual name of your image file.
        style={{ backgroundImage: "url('/images/impact-bg.jpg')" }}
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
      </div>
    </section>
  );
}
