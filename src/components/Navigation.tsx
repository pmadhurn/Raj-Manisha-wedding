import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const navItems = [
  { path: '#home', label: 'Home', labelGu: 'હોમ' },
  { path: '#couple', label: 'Couple', labelGu: 'યુગલ' },
  { path: '#events', label: 'Events', labelGu: 'પ્રસંગો' },
  { path: '#family', label: 'Family', labelGu: 'પરિવાર' },
  { path: '#venue', label: 'Venue', labelGu: 'સ્થળ' },
  { path: '#contact', label: 'Contact', labelGu: 'સંપર્ક' },
];

/**
 * Glass Effect Configuration
 * To adjust the glass effect, modify the following classes in the <nav> element:
 * 1. Background Opacity: `bg-white/10` -> Lower number = more transparent, Higher = more opaque.
 * 2. Blur Amount: `backdrop-blur-md` -> `backdrop-blur-xl` -> `backdrop-blur-2xl` -> Higher = more blurry background.
 * 3. Border: `border-white/20` -> Controls the subtle edge. Adjust opacity as needed.
 * 4. Shadow: `shadow-sm` or `shadow-md` -> Adds depth.
 */

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/10 backdrop-blur-xl border-b border-white/20 shadow-sm supports-[backdrop-filter]:bg-white/10">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-2">
            <span className="font-script text-2xl md:text-3xl text-rose-gold drop-shadow-sm">R & M</span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <a
                key={item.path}
                href={item.path}
                className="px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 text-foreground/80 hover:text-rose-gold hover:bg-white/20 hover:backdrop-blur-sm"
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-rose-gold hover:bg-white/20 rounded-full transition-colors"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white/30 backdrop-blur-2xl border-b border-white/20"
          >
            <div className="container mx-auto px-4 py-4 space-y-2">
              {navItems.map((item) => (
                <a
                  key={item.path}
                  href={item.path}
                  onClick={() => setIsOpen(false)}
                  className="block px-4 py-3 rounded-lg text-center transition-all text-foreground/80 hover:bg-white/40 hover:text-rose-gold"
                >
                  <span className="font-medium">{item.label}</span>
                  <span className="block text-xs opacity-70">{item.labelGu}</span>
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navigation;
