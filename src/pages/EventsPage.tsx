import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import FloralDivider from '@/components/FloralDivider';
import { menuData } from '@/data/menuData';
import MenuHint from '@/components/MenuHint';
import EventMenu from '@/components/EventMenu';

interface WeddingEvent {
  id: number;
  nameEn: string;
  nameGu: string;
  date: string;
  time: string;
  descriptionEn: string;
  icon: string;
  color: string;
}

const events: WeddingEvent[] = [
  {
    id: 1,
    nameEn: 'Ganesh Sthapan',
    nameGu: 'ગણેશ સ્થાપન',
    date: '07th February 2026 (Saturday)',
    time: '6:00 PM onwards',
    descriptionEn: 'Seeking blessings from Lord Ganesha to begin the auspicious wedding ceremonies.',
    icon: '🪔',
    color: 'from-peach to-peach-light',
  },
  {
    id: 2,
    nameEn: 'Mehndi & Sangeet',
    nameGu: 'મહેંદી તથા સંગીત',
    date: '10th February 2026 (Tuesday)',
    time: '7:30 PM onwards',
    descriptionEn: 'An evening of beautiful mehndi designs and musical celebrations with family.',
    icon: '🎨',
    color: 'from-lavender to-lavender-deep',
  },
  {
    id: 3,
    nameEn: 'Haldi Ceremony',
    nameGu: 'હલ્દી રસમ',
    date: '11th February 2026 (Wednesday)',
    time: '8:00 AM onwards',
    descriptionEn: 'The traditional turmeric ceremony to bless the groom with health and happiness.',
    icon: '💛',
    color: 'from-peach to-rose-gold-light',
  },
  {
    id: 4,
    nameEn: 'Mandap Muhurat & Gruhshanti',
    nameGu: 'મંડપ મુહૂર્ત-ગૃહશાંતિ',
    date: '11th February 2026 (Wednesday)',
    time: '4:00 PM onwards',
    descriptionEn: 'Setting up the sacred wedding canopy and home purification ceremony.',
    icon: '🏠',
    color: 'from-mint to-mint-light',
  },
  {
    id: 5,
    nameEn: 'Dinner',
    nameGu: 'સ્વરુચિ ભોજન',
    date: '11th February 2026 (Wednesday)',
    time: '6:00 PM onwards',
    descriptionEn: 'Join us for a delicious traditional Gujarati dinner with family and friends.',
    icon: '🍽️',
    color: 'from-lavender to-peach-light',
  },
  {
    id: 6,
    nameEn: 'Varghodo',
    nameGu: 'વરઘોડો',
    date: '11th February 2026 (Wednesday)',
    time: '7:30 PM onwards',
    descriptionEn: "The groom's grand procession with music, dance, and celebration!",
    icon: '🐎',
    color: 'from-rose-gold to-rose-gold-light',
  },
  {
    id: 7,
    nameEn: 'Jaan Prasthan',
    nameGu: 'જાન પ્રસ્થાન',
    date: '12th February 2026 (Thursday)',
    time: '8:00 AM',
    descriptionEn: "The groom's family departs for the bride's place for the wedding ceremony.",
    icon: '🚗',
    color: 'from-mint to-lavender',
  },
  {
    id: 8,
    nameEn: 'Hasta Melap (Wedding)',
    nameGu: 'હસ્ત મેળાપ',
    date: '12th February 2026 (Thursday)',
    time: '12:30 PM',
    descriptionEn: 'The sacred wedding ceremony where two souls unite forever with Vedic rituals.',
    icon: '💒',
    color: 'from-rose-gold to-peach',
  },
  {
    id: 9,
    nameEn: 'Post-Wedding Celebration',
    nameGu: 'સ્નેહ મિલન',
    date: '13th February 2026 (Friday)',
    time: 'Morning',
    descriptionEn: 'A gathering to celebrate the newlyweds with blessings and good food.',
    icon: '🎉',
    color: 'from-peach to-mint',
  },
];

const EventsPage = () => {
  const [openEventId, setOpenEventId] = useState<number | null>(null);

  const toggleMenu = (eventId: number) => {
    // Check if menu exists for this event
    if (!menuData[eventId]) return;

    setOpenEventId(prev => prev === eventId ? null : eventId);
  };

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
            Wedding Celebrations
          </h1>
          <p className="font-display text-xl text-foreground/70">માંગલિક પ્રસંગો</p>
        </motion.div>

        <FloralDivider />

        <MenuHint />

        {/* Events Timeline */}
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-rose-gold via-peach to-lavender" />

            {events.map((event, index) => {
              const hasMenu = !!menuData[event.id];
              const isOpen = openEventId === event.id;

              return (
                <motion.div
                  key={event.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ delay: index * 0.1 }}
                  className={`relative mb-8 ${
                    index % 2 === 0 ? 'md:pr-[50%] md:text-right' : 'md:pl-[50%] md:text-left'
                  }`}
                >
                  {/* Timeline dot */}
                  <div className={`absolute top-6 w-8 h-8 rounded-full bg-gradient-to-br ${event.color} flex items-center justify-center text-lg shadow-lg border-2 border-background left-0 md:left-1/2 md:-translate-x-1/2 z-10`}>
                    {event.icon}
                  </div>

                  {/* Event Card */}
                  <div className={`ml-12 md:ml-0 ${index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'}`}>
                    <div
                      onClick={() => hasMenu && toggleMenu(event.id)}
                      onKeyDown={(e) => {
                        if (hasMenu && (e.key === 'Enter' || e.key === ' ')) {
                          e.preventDefault();
                          toggleMenu(event.id);
                        }
                      }}
                      role={hasMenu ? "button" : undefined}
                      tabIndex={hasMenu ? 0 : undefined}
                      aria-expanded={hasMenu ? isOpen : undefined}
                      className={`card-floral p-6 bg-gradient-to-br ${event.color}/10 transition-all duration-300
                        ${hasMenu ? 'cursor-pointer hover:scale-[1.02] hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-rose-gold focus:ring-offset-2' : ''}
                        ${isOpen ? 'ring-2 ring-rose-gold/30' : ''}
                      `}
                    >
                      <div className="flex flex-col gap-1 mb-3">
                        <div className={`flex items-start justify-between ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                          <h3 className="font-display text-xl md:text-2xl text-foreground">
                            {event.nameEn}
                          </h3>
                          {hasMenu && (
                            <span className="text-sm font-medium text-rose-gold bg-white/50 px-2 py-1 rounded-full border border-rose-gold/20 flex items-center gap-1 shrink-0">
                              🍽️ <span className="hidden sm:inline">View Menu</span>
                              <motion.span
                                animate={{ rotate: isOpen ? 180 : 0 }}
                                transition={{ duration: 0.3 }}
                              >
                                ▼
                              </motion.span>
                            </span>
                          )}
                        </div>
                        <p className="font-display text-lg text-rose-gold">
                          {event.nameGu}
                        </p>
                      </div>

                      <div className={`flex flex-wrap gap-2 mb-3 ${index % 2 === 0 ? 'md:justify-end' : 'md:justify-start'}`}>
                        <span className="px-3 py-1 bg-background/80 rounded-full text-sm text-foreground/70">
                          📅 {event.date}
                        </span>
                        <span className="px-3 py-1 bg-background/80 rounded-full text-sm text-foreground/70">
                          🕐 {event.time}
                        </span>
                      </div>

                      <p className="text-muted-foreground text-sm md:text-base mb-2">
                        {event.descriptionEn}
                      </p>

                      <AnimatePresence>
                        {isOpen && hasMenu && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.4, ease: "easeInOut" }}
                            className="overflow-hidden"
                          >
                            <EventMenu menu={menuData[event.id]} />
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventsPage;
