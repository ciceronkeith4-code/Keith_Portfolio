import { useState } from 'react';

export default function Contact() {
  const [message, setMessage] = useState('');
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Store message locally for admin
    const messages = JSON.parse(localStorage.getItem('portfolioMessages') || '[]');
    messages.push({ name, email, message, timestamp: new Date().toISOString() });
    localStorage.setItem('portfolioMessages', JSON.stringify(messages));
    
    setSubmitted(true);
    setMessage('');
    setEmail('');
    setName('');
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section id="contact" className="py-12">
      <div className="max-w-2xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Send a Message</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-white placeholder:text-gray-500 focus:outline-none focus:border-white/30 transition text-sm"
          />
          <input
            type="email"
            placeholder="Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-white placeholder:text-gray-500 focus:outline-none focus:border-white/30 transition text-sm"
          />
          <textarea
            placeholder="Your Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
            rows={5}
            className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-white placeholder:text-gray-500 focus:outline-none focus:border-white/30 transition resize-none text-sm"
          />
          <button
            type="submit"
            className="w-full bg-white text-black px-6 py-2 rounded-lg font-semibold hover:bg-gray-200 transition text-sm"
          >
            Send Message
          </button>
        </form>
        {submitted && (
          <p className="text-center text-green-400 mt-4 text-sm">Message sent! Thank you!</p>
        )}
      </div>
    </section>
  );
}