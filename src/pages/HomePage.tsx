import { motion } from 'framer-motion';
import CountdownTimer from '@/components/CountdownTimer';
import FloralDivider from '@/components/FloralDivider';
import heroFloralBg from '@/assets/hero-floral-bg.jpg';

const HomePage = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section
        className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
        style={{
          backgroundImage: `url(${heroFloralBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        {/* Overlay for text readability */}
        <div className="absolute inset-0 bg-background/40 backdrop-blur-[2px]" />

        {/* Decorative circles */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-peach/30 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-lavender/40 rounded-full blur-3xl" />
        <div className="absolute top-1/3 right-1/4 w-24 h-24 bg-mint/30 rounded-full blur-2xl" />

        <div className="container mx-auto px-4 text-center relative z-10">
          {/* Sacred Invocations */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <p className="font-display text-lg md:text-xl text-rose-gold mb-1">
              ॥ શ્રી ગણેશાય નમઃ ॥
            </p>
            <p className="font-display text-lg md:text-xl text-rose-gold">
              ॥ શ્રી અંબુદા માતાય નમઃ ॥
            </p>
          </motion.div>

          {/* Names */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1 className="font-script text-6xl md:text-8xl lg:text-9xl text-rose-gold mb-4 text-shadow-soft">
              Raj & Manisha
            </h1>
            <p className="font-display text-2xl md:text-3xl text-foreground/80 mb-2">
              રાજ & મનિષા
            </p>
          </motion.div>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="font-body text-lg md:text-xl text-muted-foreground mt-4 mb-8"
          >
            Together Forever | સાથે સદાકાળ
          </motion.p>

          <FloralDivider />

          {/* Wedding Date */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="mb-12"
          >
            <div className="inline-block px-8 py-6 rounded-2xl bg-card/80 backdrop-blur-sm border border-rose-gold/20 shadow-lg">
              <p className="font-display text-2xl md:text-3xl text-foreground mb-2">
                12th February 2026
              </p>
              <p className="font-display text-lg text-rose-gold mb-1">
                ૧૨ ફેબ્રુઆરી ૨૦૨૬
              </p>
              <p className="text-sm text-muted-foreground">
                સંવત ૨૦૮૨, મહા વદ-૧૦
              </p>
            </div>
          </motion.div>

          {/* Countdown */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
          >
            <CountdownTimer />
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <div className="w-6 h-10 rounded-full border-2 border-rose-gold/40 flex justify-center">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1.5 h-3 bg-rose-gold/60 rounded-full mt-2"
            />
          </div>
        </motion.div>
      </section>

      {/* Welcome Message */}
      <section className="py-20 bg-gradient-to-b from-background to-lavender/20">
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h2 className="font-script text-4xl md:text-5xl text-rose-gold mb-8">
              You're Invited
            </h2>

            <div className="card-floral p-8 md:p-12 floral-border">
              <p className="font-body text-lg md:text-xl leading-relaxed text-foreground/80 mb-6">
                With the blessings of Lord Ganesha and Arbuda Mata, we joyfully invite you to celebrate the union of our beloved Raj and Manisha. Your presence will make our celebration complete.
              </p>

              <FloralDivider className="py-4" />

              <p className="font-body text-lg leading-relaxed text-foreground/70">
                શ્રી ગણેશજી અને અર્બુદા માતાજીના આશીર્વાદથી, અમે આપને અમારા વ્હાલા રાજ અને મનિષાના શુભ વિવાહ પ્રસંગે હાર્દિક આમંત્રણ પાઠવીએ છીએ. આપની ઉપસ્થિતિથી અમારો આનંદ દ્વિગુણિત થશે.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
