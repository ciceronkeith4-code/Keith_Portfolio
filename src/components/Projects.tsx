export default function Projects() {
  return (
    <section id="projects" className="py-20">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12">Featured Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Add your projects here */}
          <div className="bg-white/5 border border-white/10 rounded-lg p-6">
            <h3 className="text-2xl font-bold mb-4">Project Coming Soon</h3>
            <p className="text-gray-400">More projects will be added here</p>
          </div>
        </div>
      </div>
    </section>
  );
}