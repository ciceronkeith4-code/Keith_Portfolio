import { useState } from 'react';

interface OJTImage {
  src: string;
  alt: string;
}

interface OJTExperience {
  company: string;
  role: string;
  duration: string;
  description: string;
  images: OJTImage[];
}

export default function OJT() {
  const [selectedImage, setSelectedImage] = useState<OJTImage | null>(null);

  const experiences: OJTExperience[] = [
    {
      company: 'Your OJT Company',
      role: 'Your OJT Role',
      duration: 'Start Date - End Date',
      description: 'Add your OJT experience details here',
      images: [
        // Add your images here
        // { src: '/images/ojt1.jpg', alt: 'OJT Experience 1' },
      ],
    },
  ];

  return (
    <section id="ojt" className="py-12">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-8">OJT Experience</h2>
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div key={index} className="bg-white/5 border border-white/10 rounded-lg p-6">
              <h3 className="text-2xl font-bold mb-2">{exp.company}</h3>
              <p className="text-gray-400 mb-1">{exp.role}</p>
              <p className="text-sm text-gray-500 mb-4">{exp.duration}</p>
              <p className="text-gray-300 mb-6">{exp.description}</p>
              
              {exp.images.length > 0 && (
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {exp.images.map((image, i) => (
                    <button
                      key={i}
                      onClick={() => setSelectedImage(image)}
                      className="relative group overflow-hidden rounded-lg"
                    >
                      <img
                        src={image.src}
                        alt={image.alt}
                        className="w-full h-32 object-cover group-hover:scale-110 transition duration-300"
                      />
                      <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
                        <p className="text-white text-sm">View</p>
                      </div>
                    </button>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Image Preview Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <img
            src={selectedImage.src}
            alt={selectedImage.alt}
            className="max-w-2xl max-h-[80vh] object-contain rounded-lg"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
}