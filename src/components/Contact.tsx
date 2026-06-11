export default function Contact() {
  return (
    <section id="contact" className="py-20">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center">Get In Touch</h2>
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-gray-400 mb-8">Feel free to reach out for collaborations or just a friendly hello</p>
          <div className="space-y-4">
            <p><a href="mailto:your@email.com" className="hover:text-primary transition">Email</a></p>
            <p><a href="#" className="hover:text-primary transition">GitHub</a></p>
            <p><a href="#" className="hover:text-primary transition">LinkedIn</a></p>
          </div>
        </div>
      </div>
    </section>
  );
}