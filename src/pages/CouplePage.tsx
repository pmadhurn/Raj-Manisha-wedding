import { motion } from 'framer-motion';
import { User } from 'lucide-react';
import FloralDivider from '@/components/FloralDivider';

const CouplePage = () => {
  return (
    <div className="min-h-screen pt-24 pb-16 watercolor-bg">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="font-script text-5xl md:text-6xl text-rose-gold mb-2">
            The Couple
          </h1>
          <p className="font-display text-xl text-foreground/70">યુગલ</p>
        </motion.div>

        {/* Couple Cards Container */}
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 lg:gap-12">

          {/* Groom Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="card-floral p-8 floral-border"
          >
            <div className="text-center">
              {/* Photo Placeholder */}
              <div className="w-48 h-48 mx-auto mb-6 rounded-full bg-gradient-to-br from-peach to-rose-gold-light flex items-center justify-center border-4 border-rose-gold/30 shadow-lg">
                <User size={80} className="text-rose-gold/50" />
              </div>

              <div className="inline-block px-4 py-1 bg-rose-gold/10 rounded-full mb-4">
                <span className="font-display text-sm text-rose-gold">The Groom • વરરાજા</span>
              </div>

              <h2 className="font-script text-4xl md:text-5xl text-rose-gold mb-2">Raj</h2>
              <p className="font-display text-2xl text-foreground/80 mb-1">ચિ. રાજ</p>
              <p className="text-muted-foreground mb-6">Raj Kailashbhai Patel</p>

              <FloralDivider className="py-4" />

              {/* Parents */}
              <div className="text-left space-y-4">
                <h3 className="font-display text-lg text-rose-gold mb-3 text-center">Parents • માતા-પિતા</h3>

                <div className="bg-lavender/30 rounded-xl p-4">
                  <p className="font-medium text-foreground">શ્રી કૈલાશભાઈ કાનજીભાઈ પટેલ</p>
                  <p className="text-sm text-muted-foreground">Shri Kailashbhai Kanjibhai Patel (Father)</p>
                </div>

                <div className="bg-mint-light rounded-xl p-4">
                  <p className="font-medium text-foreground">શ્રીમતી શર્મિલાબેન કૈલાશભાઈ પટેલ</p>
                  <p className="text-sm text-muted-foreground">Smt. Sharmilaben Kailashbhai Patel (Mother)</p>
                </div>
              </div>

              {/* Grandparents */}
              <div className="text-left space-y-4 mt-6">
                <h3 className="font-display text-lg text-rose-gold mb-3 text-center">Grandparents • દાદા-દાદી</h3>

                <div className="bg-peach-light rounded-xl p-4">
                  <p className="font-medium text-foreground">શ્રી કાનજીભાઈ રામજીભાઈ પટેલ</p>
                  <p className="text-sm text-muted-foreground">Shri Kanjibhai Ramjibhai Patel (Grandfather)</p>
                </div>

                <div className="bg-lavender/30 rounded-xl p-4">
                  <p className="font-medium text-foreground">શ્રીમતી મણીબેન કાનજીભાઈ પટેલ</p>
                  <p className="text-sm text-muted-foreground">Smt. Maniben Kanjibhai Patel (Grandmother)</p>
                </div>
              </div>

              {/* Residence */}
              <div className="mt-6 p-4 bg-gradient-to-r from-rose-gold/10 to-peach/20 rounded-xl">
                <p className="text-sm text-muted-foreground">Residence</p>
                <p className="font-medium text-foreground">Dadhvav, Sabarkantha, Gujarat</p>
              </div>
            </div>
          </motion.div>

          {/* Bride Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="card-floral p-8 floral-border"
          >
            <div className="text-center">
              {/* Photo Placeholder */}
              <div className="w-48 h-48 mx-auto mb-6 rounded-full bg-gradient-to-br from-lavender to-rose-gold-light flex items-center justify-center border-4 border-rose-gold/30 shadow-lg">
                <User size={80} className="text-rose-gold/50" />
              </div>

              <div className="inline-block px-4 py-1 bg-rose-gold/10 rounded-full mb-4">
                <span className="font-display text-sm text-rose-gold">The Bride • કન્યા</span>
              </div>

              <h2 className="font-script text-4xl md:text-5xl text-rose-gold mb-2">Manisha</h2>
              <p className="font-display text-2xl text-foreground/80 mb-1">ચિ. મનિષા</p>
              <p className="text-muted-foreground mb-6">Manisha Jayantibhai Patel</p>

              <FloralDivider className="py-4" />

              {/* Parents */}
              <div className="text-left space-y-4">
                <h3 className="font-display text-lg text-rose-gold mb-3 text-center">Parents • માતા-પિતા</h3>

                <div className="bg-lavender/30 rounded-xl p-4">
                  <p className="font-medium text-foreground">શ્રી જયંતીભાઈ ખલાભાઈ પટેલ</p>
                  <p className="text-sm text-muted-foreground">Shri Jayantibhai Khalabhai Patel (Father)</p>
                </div>

                <div className="bg-mint-light rounded-xl p-4">
                  <p className="font-medium text-foreground">શ્રીમતી સરલાબેન જયંતીભાઈ પટેલ</p>
                  <p className="text-sm text-muted-foreground">Smt. Sarlaben Jayantibhai Patel (Mother)</p>
                </div>
              </div>

              {/* Residence */}
              <div className="mt-6 p-4 bg-gradient-to-r from-rose-gold/10 to-lavender/20 rounded-xl">
                <p className="text-sm text-muted-foreground">Residence</p>
                <p className="font-medium text-foreground">Kundol, Gujarat</p>
              </div>

              {/* Our Story Placeholder */}
              <div className="mt-8 p-6 bg-peach-light/50 rounded-xl border border-dashed border-rose-gold/30">
                <h3 className="font-display text-lg text-rose-gold mb-2">Our Story</h3>
                <p className="text-sm text-muted-foreground italic">Coming Soon...</p>
                <p className="text-xs text-muted-foreground mt-1">અમારી કહાની</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default CouplePage;
