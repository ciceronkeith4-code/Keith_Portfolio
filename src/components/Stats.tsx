export default function Stats() {
  const stats = [
    { label: 'Projects', value: '10+' },
    { label: 'Experience', value: '2+ years' },
    { label: 'Technologies', value: '15+' },
  ];

  return (
    <section className="py-20 bg-white/5">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <p className="text-4xl font-bold mb-2">{stat.value}</p>
              <p className="text-gray-400">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}