import { motion } from 'framer-motion';
import { Phone, MessageCircle } from 'lucide-react';
import FloralDivider from '@/components/FloralDivider';

interface Contact {
  name: string;
  nameGu: string;
  role: string;
  roleGu: string;
  phone: string;
}

const contacts: Contact[] = [
  {
    name: 'Raj Patel',
    nameGu: 'રાજ પટેલ',
    role: 'Groom',
    roleGu: 'વરરાજા',
    phone: '9106860523',
  },
  {
    name: 'Kailashbhai Patel',
    nameGu: 'કૈલાશભાઈ પટેલ',
    role: 'Father of Groom',
    roleGu: 'પિતાશ્રી',
    phone: '8128681641',
  },
  {
    name: 'Madhur Natwarlal Patel',
    nameGu: 'મધુર નટવરલાલ પટેલ',
    role: 'Brother',
    roleGu: 'ભાઈ',
    phone: '9016273812',
  },
];

const ContactPage = () => {
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
            Get in Touch
          </h1>
          <p className="font-display text-xl text-foreground/70">સંપર્ક કરો</p>
        </motion.div>

        <FloralDivider />

        {/* Contact Cards */}
        <div className="max-w-2xl mx-auto space-y-6">
          {contacts.map((contact, index) => (
            <motion.div
              key={contact.phone}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="card-floral p-6 floral-border"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                {/* Contact Info */}
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-rose-gold/20 to-peach-light flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl">👤</span>
                  </div>
                  <div>
                    <h3 className="font-display text-lg text-foreground">{contact.name}</h3>
                    <p className="text-sm text-muted-foreground">{contact.nameGu}</p>
                    <div className="inline-block mt-1 px-3 py-0.5 bg-rose-gold/10 rounded-full">
                      <span className="text-xs text-rose-gold">
                        {contact.role} • {contact.roleGu}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Phone & Actions */}
                <div className="flex flex-col items-start md:items-end gap-3">
                  <p className="font-medium text-foreground flex items-center gap-2">
                    <Phone size={16} className="text-rose-gold" />
                    {contact.phone}
                  </p>
                  
                  <div className="flex gap-2">
                    <a
                      href={`https://wa.me/91${contact.phone}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-green-500/90 hover:bg-green-500 text-white rounded-full text-sm transition-colors"
                    >
                      <MessageCircle size={16} />
                      WhatsApp
                    </a>
                    <a
                      href={`tel:+91${contact.phone}`}
                      className="flex items-center gap-2 px-4 py-2 bg-rose-gold/90 hover:bg-rose-gold text-white rounded-full text-sm transition-colors"
                    >
                      <Phone size={16} />
                      Call
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <FloralDivider />

        {/* Message */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-xl mx-auto text-center"
        >
          <div className="card-floral p-8 floral-border">
            <p className="font-display text-lg text-foreground/80 mb-2">
              We'd love to hear from you!
            </p>
            <p className="text-muted-foreground">
              અમને આપની સાથે વાત કરવાનું ગમશે!
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ContactPage;
