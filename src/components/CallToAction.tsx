export default function CallToAction() {
  const handleViewResume = () => {
    window.open('/resume.pdf', '_blank');
  };

  return (
    <section className="py-12 bg-zinc-950 border-y border-white/10">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Ready to Work Together?</h2>
        <p className="text-gray-400 mb-8 text-sm md:text-base">Let's create something amazing</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={handleViewResume}
            className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-lg font-semibold transition text-sm"
          >
            View Resume
          </button>
          <a
            href="#work"
            className="bg-white/10 hover:bg-white/20 text-white px-6 py-2 rounded-lg font-semibold transition text-sm border border-white/20"
          >
            See My Work
          </a>
        </div>
      </div>
    </section>
  );
}