import { useState } from 'react';

export default function CallToAction() {
  const [isLoading, setIsLoading] = useState(false);

  const handleViewResume = () => {
    // Open resume in new tab
    window.open('/resume.pdf', '_blank');
  };

  return (
    <section className="py-12 bg-white/5">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Work Together?</h2>
        <p className="text-gray-400 mb-8 text-sm md:text-base">Let's create something amazing</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={handleViewResume}
            className="bg-white text-black px-6 py-2 rounded-lg font-semibold hover:bg-gray-200 transition text-sm"
          >
            View Resume
          </button>
          <a
            href="#work"
            className="bg-white/10 text-white px-6 py-2 rounded-lg font-semibold hover:bg-white/20 transition text-sm border border-white/20"
          >
            See My Work
          </a>
        </div>
      </div>
    </section>
  );
}