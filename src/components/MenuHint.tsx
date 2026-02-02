import { motion } from 'framer-motion';

const MenuHint = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="max-w-xl mx-auto mb-10 px-4"
    >
      <div
        className="relative overflow-hidden rounded-xl border-2 border-dashed border-rose-gold bg-gradient-to-br from-peach/20 to-lavender/20 p-4 text-center shadow-sm"
      >
        <motion.div
          animate={{
            boxShadow: [
              "0 0 5px rgba(183,110,121,0.3)",
              "0 0 15px rgba(183,110,121,0.5)",
              "0 0 5px rgba(183,110,121,0.3)"
            ]
          }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="absolute inset-0 pointer-events-none rounded-xl"
        />

        <div className="relative z-10 flex flex-col items-center justify-center gap-2">
          <p className="font-display text-rose-gold text-lg italic flex flex-wrap items-center justify-center gap-2">
            <span>✨</span>
            <span>Tip: Click on any event to discover the delicious menu!</span>
            <span>🍽️</span>
          </p>
          <p className="font-display text-rose-gold text-base italic flex flex-wrap items-center justify-center gap-2">
            <span>✨</span>
            <span>ટિપ: મેનુ જોવા માટે કોઈપણ પ્રસંગ પર ક્લિક કરો!</span>
            <span>🍽️</span>
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default MenuHint;
