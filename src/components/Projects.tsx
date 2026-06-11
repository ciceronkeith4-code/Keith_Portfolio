export default function Projects() {
  const projects = [
    {
      title: 'Project Coming Soon',
      description: 'More projects will be added here',
      tags: ['React', 'TypeScript'],
    },
  ];

  return (
    <section id="work" className="py-12">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-8">Featured Work</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <div key={index} className="bg-white/5 border border-white/10 rounded-lg p-6 hover:border-white/20 transition">
              <h3 className="text-xl font-bold mb-3">{project.title}</h3>
              <p className="text-gray-400 text-sm mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, i) => (
                  <span key={i} className="text-xs bg-white/10 px-2 py-1 rounded">{tag}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}