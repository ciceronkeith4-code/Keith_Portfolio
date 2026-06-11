import { X, Trash2 } from 'lucide-react';
import { useState, useEffect } from 'react';

interface AdminModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface Message {
  name: string;
  email: string;
  message: string;
  timestamp: string;
}

export default function AdminModal({ isOpen, onClose }: AdminModalProps) {
  const [messages, setMessages] = useState<Message[]>([]);

  useEffect(() => {
    if (isOpen) {
      const stored = localStorage.getItem('portfolioMessages');
      if (stored) {
        setMessages(JSON.parse(stored));
      }
    }
  }, [isOpen]);

  const deleteMessage = (index: number) => {
    const updated = messages.filter((_, i) => i !== index);
    setMessages(updated);
    localStorage.setItem('portfolioMessages', JSON.stringify(updated));
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4 backdrop-blur-sm">
      <div className="bg-zinc-900 border border-white/20 rounded-lg p-6 max-w-2xl w-full max-h-[80vh] overflow-y-auto">
        <div className="flex justify-between items-center mb-6 sticky top-0 bg-zinc-900 z-10">
          <h2 className="text-2xl font-bold text-white">Admin Panel</h2>
          <button
            onClick={onClose}
            className="p-1 hover:bg-white/10 rounded transition"
          >
            <X size={20} />
          </button>
        </div>

        <h3 className="text-lg font-semibold mb-4 text-white">Messages ({messages.length})</h3>

        {messages.length === 0 ? (
          <p className="text-gray-400 text-center py-8">No messages yet</p>
        ) : (
          <div className="space-y-4">
            {messages.map((msg, index) => (
              <div key={index} className="bg-black/50 border border-white/10 rounded-lg p-4">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <p className="font-semibold text-white">{msg.name}</p>
                    <p className="text-sm text-gray-400">{msg.email}</p>
                    <p className="text-xs text-gray-500 mt-1">
                      {new Date(msg.timestamp).toLocaleString()}
                    </p>
                  </div>
                  <button
                    onClick={() => deleteMessage(index)}
                    className="p-1 hover:bg-red-500/20 rounded transition text-red-400"
                  >
                    <Trash2 size={16} />
                  </button>
                </div>
                <p className="text-gray-300 text-sm whitespace-pre-wrap">{msg.message}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}