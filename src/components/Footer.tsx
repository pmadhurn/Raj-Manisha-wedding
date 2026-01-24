import { Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="py-12 bg-gradient-to-t from-peach-light to-background">
      <div className="container mx-auto px-4 text-center">
        {/* Decorative Element */}
        <div className="flex items-center justify-center gap-4 mb-6">
          <div className="h-px w-16 bg-gradient-to-r from-transparent to-rose-gold/50" />
          <span className="font-script text-3xl text-rose-gold">R & M</span>
          <div className="h-px w-16 bg-gradient-to-l from-transparent to-rose-gold/50" />
        </div>

        {/* Hashtags */}
        <div className="flex flex-wrap justify-center gap-4 mb-6">
          <span className="px-4 py-2 bg-lavender/50 rounded-full text-sm font-medium text-foreground/70">
            #RajWedsManisha
          </span>
          <span className="px-4 py-2 bg-peach-light rounded-full text-sm font-medium text-foreground/70">
            #રાજમનિષાવિવાહ
          </span>
        </div>

        {/* Sanskrit Text */}
        <p className="font-display text-lg text-rose-gold mb-4">॥ શુભ વિવાહ ॥</p>

        {/* Credits */}
        <p className="text-sm text-muted-foreground flex items-center justify-center gap-1">
          Made with <Heart size={14} className="text-rose-gold fill-rose-gold" /> for Raj & Manisha by Madhur
        </p>

        {/* Copyright */}
        <p className="text-xs text-muted-foreground mt-4">
          રાજ & મનિષાના શુભ વિવાહ • February 2026
        </p>
      </div>
    </footer>
  );
};

export default Footer;
