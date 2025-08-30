import React from 'react';
import { Rocket } from 'lucide-react';

const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 bg-neutral-950/70 backdrop-blur supports-[backdrop-filter]:bg-neutral-950/60 border-b border-white/10">
      <nav className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2">
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-sky-500 to-blue-600 text-white shadow-lg shadow-blue-500/20">
            <Rocket size={18} />
          </span>
          <span className="font-semibold tracking-tight">TweetPilot</span>
        </a>
        <div className="hidden md:flex items-center gap-8 text-sm">
          <a href="#features" className="text-neutral-300 hover:text-white transition-colors">Features</a>
          <a href="#pricing" className="text-neutral-300 hover:text-white transition-colors">Pricing</a>
          <a href="#" className="text-neutral-300 hover:text-white transition-colors">Docs</a>
        </div>
        <div className="flex items-center gap-3">
          <a href="#pricing" className="hidden sm:inline-flex h-9 items-center rounded-md border border-white/10 px-4 text-sm font-medium text-white/90 hover:bg-white/5 transition-colors">Sign in</a>
          <a href="#pricing" className="inline-flex h-9 items-center rounded-md bg-gradient-to-r from-sky-500 to-blue-600 px-4 text-sm font-semibold text-white shadow-lg shadow-sky-500/20 hover:shadow-sky-500/30 transition-shadow">Get started</a>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
