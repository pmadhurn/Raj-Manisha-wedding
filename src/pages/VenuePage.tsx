import { motion } from 'framer-motion';
import { MapPin, Navigation, Phone, Hotel } from 'lucide-react';
import FloralDivider from '@/components/FloralDivider';

const VenuePage = () => {
  const googleMapsUrl = 'https://maps.app.goo.gl/zCtJZHjy5NqAiSnR7';

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
            Wedding Venue
          </h1>
          <p className="font-display text-xl text-foreground/70">લગ્ન સ્થળ</p>
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-8">
          {/* Location Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="card-floral p-8 floral-border"
          >
            <div className="flex items-start gap-4 mb-6">
              <div className="w-12 h-12 rounded-full bg-rose-gold/20 flex items-center justify-center flex-shrink-0">
                <MapPin className="text-rose-gold" size={24} />
              </div>
              <div>
                <h2 className="font-display text-2xl text-foreground mb-1">Dadhvav</h2>
                <p className="text-muted-foreground">Sabarkantha District</p>
                <p className="text-muted-foreground">Gujarat, India</p>
              </div>
            </div>

            {/* Map Embed */}
            <div className="rounded-xl overflow-hidden mb-6 border border-rose-gold/20">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d571.0118876712739!2d73.35848914594459!3d23.936926821229925!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395d83d807d42b85%3A0x1df4ff763d96306!2sMadhur%20N%20Patel%E2%80%99s%20Home!5e0!3m2!1sen!2sin!4v1769258323264!5m2!1sen!2sin"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="grayscale-[30%]"
              />
            </div>

            {/* Get Directions Button */}
            <a
              href={googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-wedding w-full justify-center"
            >
              <Navigation size={18} />
              Open in Google Maps
            </a>
          </motion.div>

          <FloralDivider />

          {/* Dress Code Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="card-floral p-8 floral-border text-center"
          >
            <div className="text-4xl mb-4">👗👔</div>
            <h2 className="font-display text-2xl text-foreground mb-2">What to Wear</h2>
            <p className="font-display text-lg text-rose-gold mb-4">શું પહેરવું</p>

            <div className="bg-gradient-to-r from-peach-light/50 to-lavender/30 rounded-xl p-6 mb-4">
              <p className="font-display text-xl text-rose-gold mb-2">Any Attire is Welcome!</p>
              <p className="text-foreground/80 mb-4">
                Come as you feel comfortable and celebrate with us in your favorite outfit!
              </p>
              <p className="text-muted-foreground">
                આપને જે ગમે તે પહેરીને આવો અને અમારી સાથે ઉજવણી કરો!
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
              <span className="flex items-center gap-1">🎨 No specific color theme</span>
              <span className="flex items-center gap-1">✨ Traditional or Western - Your choice!</span>
            </div>
          </motion.div>

          <FloralDivider />

          {/* Accommodation Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="card-floral p-8 floral-border"
          >
            <div className="flex items-start gap-4 mb-4">
              <div className="w-12 h-12 rounded-full bg-lavender/50 flex items-center justify-center flex-shrink-0">
                <Hotel className="text-rose-gold" size={24} />
              </div>
              <div>
                <h2 className="font-display text-2xl text-foreground mb-1">Accommodation</h2>
                <p className="font-display text-lg text-rose-gold">રહેવાની વ્યવસ્થા</p>
              </div>
            </div>

            <p className="text-foreground/80 mb-6">
              Hotels and stay options are available nearby. Please contact us if you need assistance with booking arrangements.
            </p>

            <div className="bg-peach-light/50 rounded-xl p-4 flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-rose-gold/20 flex items-center justify-center flex-shrink-0">
                <Phone className="text-rose-gold" size={18} />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Contact</p>
                <p className="font-medium text-foreground">Kailashbhai Patel - 8128681641</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default VenuePage;
