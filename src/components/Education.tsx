export default function Education() {
  const education = [
    {
      degree: 'Your Degree',
      school: 'School/University Name',
      year: 'Graduation Year',
      details: 'Add your education details',
    },
  ];

  return (
    <section id="education" className="py-12 bg-white/5">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-8">Education</h2>
        <div className="space-y-6">
          {education.map((edu, index) => (
            <div key={index} className="border-l-2 border-white/20 pl-6">
              <h3 className="text-xl font-bold">{edu.degree}</h3>
              <p className="text-gray-400 text-sm">{edu.school}</p>
              <p className="text-xs text-gray-500 mt-1">{edu.year}</p>
              <p className="text-gray-300 text-sm mt-2">{edu.details}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}