import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const navItems = [
  { path: '/', label: 'Home', labelGu: 'હોમ' },
  { path: '/couple', label: 'Couple', labelGu: 'યુગલ' },
  { path: '/events', label: 'Events', labelGu: 'પ્રસંગો' },
  { path: '/family', label: 'Family', labelGu: 'પરિવાર' },
  { path: '/venue', label: 'Venue', labelGu: 'સ્થળ' },
  { path: '/contact', label: 'Contact', labelGu: 'સંપર્ક' },
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
  const location = useLocation();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-rose-gold/10">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <span className="font-script text-2xl md:text-3xl text-rose-gold">R & M</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  location.pathname === item.path
                    ? 'bg-rose-gold text-highlight-foreground'
                    : 'text-foreground/70 hover:text-rose-gold hover:bg-peach-light'
                }`}
              >
                {item.label}
              </Link>
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
            className="md:hidden bg-background border-b border-rose-gold/10"
          >
            <div className="container mx-auto px-4 py-4 space-y-2">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className={`block px-4 py-3 rounded-lg text-center transition-all ${
                    location.pathname === item.path
                      ? 'bg-rose-gold text-highlight-foreground'
                      : 'text-foreground/70 hover:bg-peach-light'
                  }`}
                >
                  <span className="font-medium">{item.label}</span>
                  <span className="block text-xs opacity-70">{item.labelGu}</span>
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navigation;
