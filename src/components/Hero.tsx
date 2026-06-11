export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16 pb-8">
      <div className="text-center max-w-3xl">
        <h1 className="text-5xl md:text-7xl font-bold mb-4 leading-tight">
          Keith Ciceron
        </h1>
        <p className="text-xl md:text-2xl text-gray-400 mb-4">Full Stack Developer & UI/UX Designer</p>
        <p className="max-w-2xl mx-auto text-gray-300 mb-8 text-sm md:text-base">
          Building modern, scalable, and user-centered digital experiences
        </p>
        <a href="#work" className="inline-block bg-white text-black px-6 py-2 rounded-lg font-semibold hover:bg-gray-200 transition text-sm">
          View My Work
        </a>
      </div>
    </section>
  );
}