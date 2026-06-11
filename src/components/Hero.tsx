export default function Hero() {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center pt-20">
      <div className="text-center">
        <h1 className="text-5xl md:text-7xl font-bold mb-6">Keith Ciceron</h1>
        <p className="text-xl md:text-2xl text-gray-400 mb-8">Full Stack Developer & UI/UX Designer</p>
        <p className="max-w-2xl mx-auto text-gray-300 mb-12">Building modern, scalable, and user-centered digital experiences</p>
        <button className="bg-white text-black px-8 py-3 rounded-lg font-semibold hover:bg-gray-200 transition">
          Get In Touch
        </button>
      </div>
    </section>
  );
}