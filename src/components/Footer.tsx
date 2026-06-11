import { Code2, Heart, Download } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t-2 border-white/5 py-6 relative overflow-hidden">
      <div className="container-max px-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-sm bg-crimson-DEFAULT flex items-center justify-center">
              <Code2 size={12} className="text-white" />
            </div>
            <span className="text-neutral-500 text-xs font-pixel">Keith Ciceron</span>
          </div>

          {/* Download Source Code */}
          <a
            href="/source-code.zip"
            download="keith-portfolio-source.zip"
            className="flex items-center gap-2 text-xs font-pixel text-neutral-400 hover:text-crimson-400 border-2 border-white/10 hover:border-crimson-400/50 px-3 py-1.5 rounded-sm transition-all duration-200 hover:-translate-y-0.5"
          >
            <Download size={12} />
            Download Source Code
          </a>

          <div className="flex flex-col items-center sm:items-end gap-1">
            <p className="text-neutral-600 text-xs flex items-center gap-1">
              Built with <Heart size={10} className="text-crimson-400 fill-crimson-400" /> React & ✨ pixel vibes
            </p>
            <p className="text-neutral-700 text-xs">
              &copy; {currentYear} Keith Czimonne Anderson Ciceron
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
