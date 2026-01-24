import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface TimeUnit {
  value: number;
  labelEn: string;
  labelGu: string;
}

const CountdownTimer = () => {
  const weddingDate = new Date('2026-02-12T12:30:00');
  const [timeLeft, setTimeLeft] = useState<TimeUnit[]>([]);

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date();
      const difference = weddingDate.getTime() - now.getTime();

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((difference / 1000 / 60) % 60);
        const seconds = Math.floor((difference / 1000) % 60);

        setTimeLeft([
          { value: days, labelEn: 'Days', labelGu: 'દિવસ' },
          { value: hours, labelEn: 'Hours', labelGu: 'કલાક' },
          { value: minutes, labelEn: 'Minutes', labelGu: 'મિનિટ' },
          { value: seconds, labelEn: 'Seconds', labelGu: 'સેકન્ડ' },
        ]);
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex flex-wrap justify-center gap-3 md:gap-6">
      {timeLeft.map((unit, index) => (
        <motion.div
          key={unit.labelEn}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
          className="flex flex-col items-center"
        >
          <div className="relative">
            <div className="w-16 h-16 md:w-24 md:h-24 rounded-2xl bg-gradient-to-br from-rose-gold/20 to-peach-light flex items-center justify-center border border-rose-gold/20 shadow-lg">
              <span className="font-display text-2xl md:text-4xl font-bold text-rose-gold">
                {String(unit.value).padStart(2, '0')}
              </span>
            </div>
            {/* Decorative corner */}
            <div className="absolute -top-1 -right-1 w-3 h-3 border-t-2 border-r-2 border-rose-gold/40 rounded-tr-lg" />
            <div className="absolute -bottom-1 -left-1 w-3 h-3 border-b-2 border-l-2 border-rose-gold/40 rounded-bl-lg" />
          </div>
          <div className="mt-2 text-center">
            <p className="text-xs md:text-sm font-medium text-foreground/70">{unit.labelEn}</p>
            <p className="text-xs text-muted-foreground">{unit.labelGu}</p>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default CountdownTimer;
