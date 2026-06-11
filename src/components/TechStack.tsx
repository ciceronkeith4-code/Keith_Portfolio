export default function TechStack() {
  const technologies = ['React', 'TypeScript', 'Tailwind CSS', 'Vite', 'Node.js', 'Next.js'];

  return (
    <section className="py-20 bg-white/5">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12">Tech Stack</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {technologies.map((tech, index) => (
            <div key={index} className="bg-white/5 border border-white/10 rounded-lg p-4 text-center">
              <p className="font-semibold">{tech}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}