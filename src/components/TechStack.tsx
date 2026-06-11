export default function TechStack() {
  const technologies = [
    { name: 'React', emoji: '⚛️' },
    { name: 'TypeScript', emoji: '📘' },
    { name: 'Tailwind CSS', emoji: '🎨' },
    { name: 'JavaScript', emoji: '✨' },
    { name: 'Node.js', emoji: '🟢' },
    { name: 'Next.js', emoji: '⬛' },
    { name: 'HTML/CSS', emoji: '🌐' },
    { name: 'Git', emoji: '📦' },
  ];

  return (
    <section className="py-12 bg-zinc-950 border-y border-white/10">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-white">Tech Stack</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {technologies.map((tech, index) => (
            <div key={index} className="bg-black border border-white/10 rounded-lg p-4 text-center hover:border-white/20 hover:bg-zinc-900/50 transition">
              <p className="text-3xl mb-2">{tech.emoji}</p>
              <p className="font-medium text-sm text-white">{tech.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}