export default function Experience() {
  const experiences = [
    {
      title: 'Your Job Title',
      company: 'Company Name',
      duration: 'Start Date - End Date',
      description: 'Add your experience details here',
    },
  ];

  return (
    <section id="experience" className="py-12 bg-black">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-white">Work Experience</h2>
        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <div key={index} className="border-l-2 border-red-600 pl-6">
              <h3 className="text-xl font-bold text-white">{exp.title}</h3>
              <p className="text-gray-400 text-sm">{exp.company}</p>
              <p className="text-xs text-gray-500 mt-1">{exp.duration}</p>
              <p className="text-gray-300 text-sm mt-2">{exp.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}