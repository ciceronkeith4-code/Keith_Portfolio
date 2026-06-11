import { X } from 'lucide-react';

interface ContactModalProps {
  onClose: () => void;
}

export default function ContactModal({ onClose }: ContactModalProps) {
  const contacts = [
    {
      name: 'Facebook',
      icon: '📘',
      url: 'https://www.facebook.com/keith.ciceron/',
      color: 'hover:bg-blue-600',
    },
    {
      name: 'Instagram',
      icon: '📸',
      url: 'https://www.instagram.com/mon.czii',
      color: 'hover:bg-pink-600',
    },
    {
      name: 'TikTok',
      icon: '🎵',
      url: 'https://www.tiktok.com/@keith_ciceron',
      color: 'hover:bg-black',
    },
    {
      name: 'Gmail',
      icon: '📧',
      url: 'mailto:ciceronkeith4@gmail.com',
      color: 'hover:bg-red-600',
    },
  ];

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-background-DEFAULT border border-white/20 rounded-lg p-8 max-w-sm w-full animate-in">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">Reach Me</h2>
          <button
            onClick={onClose}
            className="p-1 hover:bg-white/10 rounded transition"
          >
            <X size={20} />
          </button>
        </div>
        <p className="text-gray-400 mb-6">via Social Media</p>
        <div className="grid grid-cols-2 gap-4">
          {contacts.map((contact) => (
            <a
              key={contact.name}
              href={contact.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`p-4 rounded-lg border border-white/10 text-center transition duration-300 ${contact.color} hover:border-white/30`}
            >
              <div className="text-3xl mb-2">{contact.icon}</div>
              <p className="text-sm font-medium">{contact.name}</p>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}