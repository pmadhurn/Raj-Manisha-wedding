import { useEffect, useState } from 'react';

interface Petal {
  id: number;
  left: number;
  delay: number;
  duration: number;
  size: number;
  color: string;
}

const FloatingPetals = () => {
  const [petals, setPetals] = useState<Petal[]>([]);

  useEffect(() => {
    const colors = [
      'hsl(25 100% 82%)',    // Peach
      'hsl(351 50% 80%)',    // Rose
      'hsl(240 67% 94%)',    // Lavender
      'hsl(120 60% 85%)',    // Mint light
      'hsl(351 35% 70%)',    // Rose gold
    ];

    const newPetals: Petal[] = Array.from({ length: 15 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 10,
      duration: 15 + Math.random() * 10,
      size: 8 + Math.random() * 12,
      color: colors[Math.floor(Math.random() * colors.length)],
    }));
    setPetals(newPetals);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-10">
      {petals.map((petal) => (
        <div
          key={petal.id}
          className="absolute animate-petal opacity-60"
          style={{
            left: `${petal.left}%`,
            animationDelay: `${petal.delay}s`,
            animationDuration: `${petal.duration}s`,
          }}
        >
          <svg
            width={petal.size}
            height={petal.size * 1.2}
            viewBox="0 0 20 24"
            fill={petal.color}
          >
            <path d="M10 0C10 0 0 8 0 14C0 20 4 24 10 24C16 24 20 20 20 14C20 8 10 0 10 0Z" />
          </svg>
        </div>
      ))}
    </div>
  );
};

export default FloatingPetals;
