export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-background-DEFAULT/80 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold">KC</div>
        <ul className="hidden md:flex space-x-8">
          <li><a href="#hero" className="hover:text-primary transition">Home</a></li>
          <li><a href="#about" className="hover:text-primary transition">About</a></li>
          <li><a href="#projects" className="hover:text-primary transition">Projects</a></li>
          <li><a href="#contact" className="hover:text-primary transition">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
}