const FloralDivider = ({ className = '' }: { className?: string }) => {
  return (
    <div className={`flex items-center justify-center py-8 ${className}`}>
      <div className="flex items-center gap-4">
        <div className="h-px w-12 md:w-24 bg-gradient-to-r from-transparent to-rose-gold/50" />
        <svg
          width="40"
          height="40"
          viewBox="0 0 40 40"
          fill="none"
          className="text-rose-gold opacity-60"
        >
          {/* Center flower */}
          <circle cx="20" cy="20" r="4" fill="currentColor" />
          {/* Petals */}
          {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => (
            <ellipse
              key={i}
              cx="20"
              cy="10"
              rx="3"
              ry="6"
              fill="currentColor"
              opacity={0.6}
              transform={`rotate(${angle} 20 20)`}
            />
          ))}
        </svg>
        <div className="h-px w-12 md:w-24 bg-gradient-to-l from-transparent to-rose-gold/50" />
      </div>
    </div>
  );
};

export default FloralDivider;
