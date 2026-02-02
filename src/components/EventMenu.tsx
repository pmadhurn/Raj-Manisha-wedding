import { EventMenu as EventMenuType, MenuItem } from '@/data/menuData';
import { motion } from 'framer-motion';

interface EventMenuProps {
  menu: EventMenuType;
}

const MenuItemRow = ({ item }: { item: MenuItem }) => (
  <motion.li
    initial={{ opacity: 0, x: -10 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    className="flex justify-between items-center py-2 border-b border-dashed border-lavender last:border-0"
  >
    <div className="flex items-center gap-3">
      <span className="text-xl">{item.icon}</span>
      <span className="font-medium text-gray-700">{item.nameEn}</span>
      {item.badges?.map(badge => (
        <span key={badge} className="px-2 py-0.5 text-[10px] uppercase font-bold text-white bg-rose-gold rounded-full">
          {badge}
        </span>
      ))}
    </div>
    <span className="font-display italic text-rose-gold text-right">{item.nameGu}</span>
  </motion.li>
);

const EventMenu = ({ menu }: EventMenuProps) => {
  return (
    <div className="mt-4 pt-4 border-t border-peach/30">
      <h4 className="font-display text-xl text-rose-gold mb-4 border-b-2 border-peach pb-2 flex flex-col md:flex-row md:items-baseline gap-2">
        <span>{menu.titleEn}</span>
        <span className="text-base text-rose-gold/70 italic">- {menu.titleGu}</span>
      </h4>

      <div className="space-y-6">
        {/* Render top-level items if any */}
        {menu.items && (
          <ul className="space-y-1">
            {menu.items.map((item, idx) => (
              <MenuItemRow key={idx} item={item} />
            ))}
          </ul>
        )}

        {/* Render sections if any */}
        {menu.sections && menu.sections.map((section, idx) => (
          <div key={idx} className="menu-section">
            <h5 className="font-display text-lg text-rose-gold/90 mb-3 text-center bg-peach/10 py-1 rounded-lg">
              {section.icon && <span className="mr-2">{section.icon}</span>}
              ── {section.titleEn} - {section.titleGu} ──
            </h5>
            <ul className="space-y-1">
              {section.items.map((item, i) => (
                <MenuItemRow key={i} item={item} />
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventMenu;
