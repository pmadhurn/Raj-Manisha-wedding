import { motion } from 'framer-motion';
import FloralDivider from '@/components/FloralDivider';

const children = [
  { name: 'Maanya', nameGu: 'માન્યા', emoji: '🌸' },
  { name: 'Aadhya', nameGu: 'આધ્યા', emoji: '🌺' },
  { name: 'Moksh', nameGu: 'મોક્ષ', emoji: '🌻' },
  { name: 'Freya', nameGu: 'ફ્રેયા', emoji: '🌷' },
  { name: 'Prayan', nameGu: 'પ્રયાણ', emoji: '🌼' },
  { name: 'Aarav', nameGu: 'આરવ', emoji: '🪻' },
  { name: 'Pransh', nameGu: 'પ્રાંશ', emoji: '🌹' },
  { name: 'Nayra', nameGu: 'નાયરા', emoji: '💐' },
  { name: 'Aarya', nameGu: 'આર્યા', emoji: '🪷' },
  { name: 'Krisha', nameGu: 'કૃષા', emoji: '🏵️' },
];

const FamilyPage = () => {
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
            Our Family
          </h1>
          <p className="font-display text-xl text-foreground/70">અમારો પરિવાર</p>
        </motion.div>

        {/* Groom's Family Section */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto mb-16"
        >
          <div className="text-center mb-8">
            <h2 className="font-display text-3xl text-foreground mb-1">Groom's Family</h2>
            <p className="font-display text-xl text-rose-gold">વરપક્ષ</p>
          </div>

          <div className="space-y-6">
            {/* Grandparents */}
            <div className="card-floral p-6 floral-border">
              <h3 className="font-display text-lg text-rose-gold mb-4 text-center">
                Grandparents • દાદા-દાદી
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-peach-light/50 rounded-xl p-4 text-center">
                  <span className="text-2xl mb-2 block">👴</span>
                  <p className="font-medium text-foreground">શ્રી કાનજીભાઈ રામજીભાઈ પટેલ</p>
                  <p className="text-sm text-muted-foreground">Shri Kanjibhai Ramjibhai Patel</p>
                  <p className="text-xs text-rose-gold mt-1">Grandfather • દાદા</p>
                </div>
                <div className="bg-lavender/30 rounded-xl p-4 text-center">
                  <span className="text-2xl mb-2 block">👵</span>
                  <p className="font-medium text-foreground">શ્રીમતી મણીબેન કાનજીભાઈ પટેલ</p>
                  <p className="text-sm text-muted-foreground">Smt. Maniben Kanjibhai Patel</p>
                  <p className="text-xs text-rose-gold mt-1">Grandmother • દાદી</p>
                </div>
              </div>
            </div>

            {/* Parents */}
            <div className="card-floral p-6 floral-border">
              <h3 className="font-display text-lg text-rose-gold mb-4 text-center">
                Parents • માતા-પિતા
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-mint-light rounded-xl p-4 text-center">
                  <span className="text-2xl mb-2 block">👨</span>
                  <p className="font-medium text-foreground">શ્રી કૈલાશભાઈ કાનજીભાઈ પટેલ</p>
                  <p className="text-sm text-muted-foreground">Shri Kailashbhai Kanjibhai Patel</p>
                  <p className="text-xs text-rose-gold mt-1">Father • પિતા</p>
                </div>
                <div className="bg-peach-light/50 rounded-xl p-4 text-center">
                  <span className="text-2xl mb-2 block">👩</span>
                  <p className="font-medium text-foreground">શ્રીમતી શર્મિલાબેન કૈલાશભાઈ પટેલ</p>
                  <p className="text-sm text-muted-foreground">Smt. Sharmilaben Kailashbhai Patel</p>
                  <p className="text-xs text-rose-gold mt-1">Mother • માતા</p>
                </div>
              </div>
            </div>

            {/* Uncle & Aunt */}
            <div className="card-floral p-6 floral-border">
              <h3 className="font-display text-lg text-rose-gold mb-4 text-center">
                Uncle & Aunt • કાકા-કાકી
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-lavender/30 rounded-xl p-4 text-center">
                  <span className="text-2xl mb-2 block">👨</span>
                  <p className="font-medium text-foreground">શ્રી નટવરલાલ કાનજીભાઈ પટેલ</p>
                  <p className="text-sm text-muted-foreground">Shri Natwarlal Kanjibhai Patel</p>
                  <p className="text-xs text-rose-gold mt-1">Uncle • કાકા</p>
                </div>
                <div className="bg-mint-light rounded-xl p-4 text-center">
                  <span className="text-2xl mb-2 block">👩</span>
                  <p className="font-medium text-foreground">શ્રીમતી સંગીતાબેન નટવરલાલ પટેલ</p>
                  <p className="text-sm text-muted-foreground">Smt. Sangitaben Natwarlal Patel</p>
                  <p className="text-xs text-rose-gold mt-1">Aunt • કાકી</p>
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        <FloralDivider />

        {/* Host Family Section */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto mb-16"
        >
          <div className="text-center mb-8">
            <h2 className="font-display text-3xl text-foreground mb-1">Host Family</h2>
            <p className="font-display text-xl text-rose-gold">સ્વાગતાતુર</p>
          </div>

          <div className="space-y-6">
            {/* Sisters & Brothers-in-law */}
            <div className="card-floral p-6 floral-border">
              <h3 className="font-display text-lg text-rose-gold mb-4 text-center">
                Sisters & Brothers-in-law • બહેનો અને જીજાજી
              </h3>
              <div className="space-y-4">
                <div className="bg-peach-light/50 rounded-xl p-4">
                  <p className="font-medium text-foreground">પ્રિયંકાબેન & મહેશકુમાર એસ. પટેલ</p>
                  <p className="text-sm text-muted-foreground">Priyankaben & Maheshkumar S. Patel</p>
                </div>
                <div className="bg-lavender/30 rounded-xl p-4">
                  <p className="font-medium text-foreground">પ્રિયાંશીબેન & આકાશકુમાર ટી. પટેલ</p>
                  <p className="text-sm text-muted-foreground">Priyanshiben & Akashkumar T. Patel</p>
                </div>
                <div className="bg-mint-light rounded-xl p-4">
                  <p className="font-medium text-foreground">અંજલીબેન & નિકુંજકુમાર પી. પટેલ</p>
                  <p className="text-sm text-muted-foreground">Anjaliben & Nikunjkumar P. Patel</p>
                </div>
              </div>
            </div>

            {/* Brother */}
            <div className="card-floral p-6 floral-border">
              <h3 className="font-display text-lg text-rose-gold mb-4 text-center">
                Brother • ભાઈ
              </h3>
              <div className="bg-gradient-to-r from-rose-gold/10 to-peach/20 rounded-xl p-4 text-center">
                <p className="font-medium text-foreground">મધુર નટવરલાલ પટેલ</p>
                <p className="text-sm text-muted-foreground">Madhur Natwarlal Patel</p>
              </div>
            </div>
          </div>
        </motion.section>

        <FloralDivider />

        {/* Children Section */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <div className="text-center mb-8">
            <h2 className="font-display text-3xl text-foreground mb-1">The Little Stars</h2>
            <p className="font-display text-xl text-rose-gold">બાળવૃંદ ✨</p>
            <p className="text-muted-foreground mt-2">અમારા પરિવારના નાના તારલાઓ</p>
          </div>

          <div className="grid grid-cols-3 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {children.map((child, index) => (
              <motion.div
                key={child.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="card-floral p-4 text-center cursor-default"
              >
                <span className="text-3xl mb-2 block">{child.emoji}</span>
                <p className="font-display text-sm text-foreground">{child.name}</p>
                <p className="text-xs text-muted-foreground">{child.nameGu}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>
      </div>
    </div>
  );
};

export default FamilyPage;
