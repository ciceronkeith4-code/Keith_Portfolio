import { useState } from 'react';
import ContactModal from './ContactModal';

export default function Navbar() {
  const [showContact, setShowContact] = useState(false);
  const [adminClicks, setAdminClicks] = useState(0);

  const handleLogoClick = () => {
    setAdminClicks(prev => prev + 1);
    if (adminClicks + 1 === 5) {
      window.dispatchEvent(new CustomEvent('openAdmin'));
      setAdminClicks(0);
    } else {
      setTimeout(() => setAdminClicks(0), 2000);
    }
  };

  return (
    <>
      <nav className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex justify-between items-center h-16">
          <div className="flex items-center gap-2 cursor-pointer" onClick={handleLogoClick}>
            <div className="text-xl font-bold text-white">KC</div>
            <span className="text-xs opacity-50">✦</span>
          </div>
          <ul className="hidden md:flex space-x-8 items-center">
            <li><a href="#home" className="hover:text-red-500 transition text-sm text-white">Home</a></li>
            <li><a href="#work" className="hover:text-red-500 transition text-sm text-white">Work</a></li>
            <li>
              <button
                onClick={() => setShowContact(true)}
                className="hover:text-red-500 transition text-sm text-white"
              >
                Contact
              </button>
            </li>
          </ul>
          <button
            onClick={() => setShowContact(true)}
            className="md:hidden text-sm hover:text-red-500 transition text-white"
          >
            Contact
          </button>
        </div>
      </nav>
      {showContact && <ContactModal onClose={() => setShowContact(false)} />}
    </>
  );
}