export default function Stats() {
  const stats = [
    { label: 'Projects', value: '10+' },
    { label: 'Experience', value: '2+ years' },
    { label: 'Clients', value: '5+' },
  ];

  return (
    <section className="py-12 bg-black border-y border-white/10">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <p className="text-3xl md:text-4xl font-bold mb-2 text-white">{stat.value}</p>
              <p className="text-gray-400 text-sm">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}