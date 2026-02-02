
export interface MenuItem {
  nameEn: string;
  nameGu: string;
  icon?: string;
  badges?: string[];
}

export interface MenuSection {
  titleEn: string;
  titleGu: string;
  icon?: string;
  items: MenuItem[];
}

export interface EventMenu {
  titleEn: string;
  titleGu: string;
  sections?: MenuSection[];
  items?: MenuItem[];
}

export const menuData: Record<number, EventMenu> = {
  3: { // Haldi
    titleEn: 'Morning Breakfast',
    titleGu: 'સવારનો નાસ્તો',
    items: [
      { nameEn: 'Gathiya', nameGu: 'ગાંઠિયા', icon: '🥨' },
      { nameEn: 'Papaya Sambhar', nameGu: 'પપૈયા સંભાર', icon: '🥗' },
      { nameEn: 'Tea', nameGu: 'ચા', icon: '☕' },
      { nameEn: 'Coffee', nameGu: 'કોફી', icon: '☕' },
    ]
  },
  4: { // Mandap Muhurat
    titleEn: 'Afternoon Lunch',
    titleGu: 'બપોરનું ભોજન',
    items: [
      { nameEn: 'Gajar Ka Halwa', nameGu: 'ગાજર કા હલવો', icon: '🍮' },
      { nameEn: 'Mung Masala', nameGu: 'મગ મસાલા', icon: '🫘' },
      { nameEn: 'Green Sabji', nameGu: 'લીલા શાક', icon: '🥬' },
      { nameEn: 'Dal', nameGu: 'દાળ', icon: '🍲' },
      { nameEn: 'Rice', nameGu: 'ભાત', icon: '🍚' },
      { nameEn: 'Puri', nameGu: 'પૂરી', icon: '🫓' },
    ]
  },
  5: { // Dinner
    titleEn: 'Evening Dinner',
    titleGu: 'સાંજનું ભોજન',
    sections: [
      {
        titleEn: 'STARTERS',
        titleGu: 'સ્ટાર્ટર્સ',
        icon: '🥣',
        items: [
          { nameEn: 'Hot and Sour Soup', nameGu: 'હોટ એન્ડ સોર સૂપ', icon: '🍜' },
          { nameEn: 'Small Slice Pizza', nameGu: 'સ્મોલ સ્લાઈસ પિઝા', icon: '🍕' },
          { nameEn: 'Palak Pakodi', nameGu: 'પાલક પકોડી', icon: '🥬' },
          { nameEn: 'Crispy Cone', nameGu: 'ક્રિસ્પી કોન', icon: '🍦' },
          { nameEn: 'Pakodi', nameGu: 'પકોડી', icon: '🧆' },
          { nameEn: 'Mix Bhajiya', nameGu: 'મિક્સ ભજીયા', icon: '🧅' },
        ]
      },
      {
        titleEn: 'SWEETS',
        titleGu: 'મીઠાઈ',
        icon: '🍬',
        items: [
          { nameEn: 'Panchratna Halwa', nameGu: 'પંચરત્ન હલવો', icon: '🍮' },
          { nameEn: 'Rasmalai', nameGu: 'રસમલાઈ', icon: '🍨' },
          { nameEn: 'Live Jalebi', nameGu: 'લાઈવ જલેબી', icon: '🥨', badges: ['LIVE'] },
        ]
      },
      {
        titleEn: 'MAIN COURSE',
        titleGu: 'મુખ્ય વાનગીઓ',
        icon: '🍛',
        items: [
          { nameEn: 'Live Tawa Sabji', nameGu: 'લાઈવ તવા શાક', icon: '🍳', badges: ['LIVE'] },
          { nameEn: 'Kaju Curry', nameGu: 'કાજુ કરી', icon: '🥜' },
          { nameEn: 'Dal Tadka', nameGu: 'દાળ તડકા', icon: '🍲' },
          { nameEn: 'Jeera Rice', nameGu: 'જીરા રાઈસ', icon: '🍚' },
          { nameEn: 'Roti', nameGu: 'રોટી', icon: '🫓' },
          { nameEn: 'Puri', nameGu: 'પૂરી', icon: '🫓' },
          { nameEn: 'Methi Puri', nameGu: 'મેથી પૂરી', icon: '🌿' },
        ]
      },
      {
        titleEn: 'ACCOMPANIMENTS',
        titleGu: 'સાથે',
        icon: '🥗',
        items: [
          { nameEn: 'Red Chutney', nameGu: 'લાલ ચટણી', icon: '🌶️' },
          { nameEn: 'Green Chutney', nameGu: 'લીલી ચટણી', icon: '🌿' },
          { nameEn: 'Papad', nameGu: 'પાપડ', icon: '🫓' },
          { nameEn: 'Salad', nameGu: 'સલાડ', icon: '🥗' },
        ]
      }
    ]
  },
  6: { // Varghodo (Same as Dinner)
    titleEn: 'Evening Dinner',
    titleGu: 'સાંજનું ભોજન',
    sections: [
      {
        titleEn: 'STARTERS',
        titleGu: 'સ્ટાર્ટર્સ',
        icon: '🥣',
        items: [
          { nameEn: 'Hot and Sour Soup', nameGu: 'હોટ એન્ડ સોર સૂપ', icon: '🍜' },
          { nameEn: 'Small Slice Pizza', nameGu: 'સ્મોલ સ્લાઈસ પિઝા', icon: '🍕' },
          { nameEn: 'Palak Pakodi', nameGu: 'પાલક પકોડી', icon: '🥬' },
          { nameEn: 'Crispy Cone', nameGu: 'ક્રિસ્પી કોન', icon: '🍦' },
          { nameEn: 'Pakodi', nameGu: 'પકોડી', icon: '🧆' },
          { nameEn: 'Mix Bhajiya', nameGu: 'મિક્સ ભજીયા', icon: '🧅' },
        ]
      },
      {
        titleEn: 'SWEETS',
        titleGu: 'મીઠાઈ',
        icon: '🍬',
        items: [
          { nameEn: 'Panchratna Halwa', nameGu: 'પંચરત્ન હલવો', icon: '🍮' },
          { nameEn: 'Rasmalai', nameGu: 'રસમલાઈ', icon: '🍨' },
          { nameEn: 'Live Jalebi', nameGu: 'લાઈવ જલેબી', icon: '🥨', badges: ['LIVE'] },
        ]
      },
      {
        titleEn: 'MAIN COURSE',
        titleGu: 'મુખ્ય વાનગીઓ',
        icon: '🍛',
        items: [
          { nameEn: 'Live Tawa Sabji', nameGu: 'લાઈવ તવા શાક', icon: '🍳', badges: ['LIVE'] },
          { nameEn: 'Kaju Curry', nameGu: 'કાજુ કરી', icon: '🥜' },
          { nameEn: 'Dal Tadka', nameGu: 'દાળ તડકા', icon: '🍲' },
          { nameEn: 'Jeera Rice', nameGu: 'જીરા રાઈસ', icon: '🍚' },
          { nameEn: 'Roti', nameGu: 'રોટી', icon: '🫓' },
          { nameEn: 'Puri', nameGu: 'પૂરી', icon: '🫓' },
          { nameEn: 'Methi Puri', nameGu: 'મેથી પૂરી', icon: '🌿' },
        ]
      },
      {
        titleEn: 'ACCOMPANIMENTS',
        titleGu: 'સાથે',
        icon: '🥗',
        items: [
          { nameEn: 'Red Chutney', nameGu: 'લાલ ચટણી', icon: '🌶️' },
          { nameEn: 'Green Chutney', nameGu: 'લીલી ચટણી', icon: '🌿' },
          { nameEn: 'Papad', nameGu: 'પાપડ', icon: '🫓' },
          { nameEn: 'Salad', nameGu: 'સલાડ', icon: '🥗' },
        ]
      }
    ]
  },
  7: { // Jaan Prasthan
    titleEn: 'Morning Breakfast',
    titleGu: 'સવારનો નાસ્તો',
    items: [
      { nameEn: 'Bataka Poha', nameGu: 'બટાકા પોહા', icon: '🥔' },
      { nameEn: 'Tea', nameGu: 'ચા', icon: '☕' },
      { nameEn: 'Coffee', nameGu: 'કોફી', icon: '☕' },
    ]
  },
  8: { // Hasta Melap (Wedding)
    titleEn: 'Evening Meal',
    titleGu: 'સાંજનું ભોજન',
    items: [
      { nameEn: 'Dal Bati Churma', nameGu: 'દાળ બાટી ચૂરમા', icon: '🫓' },
      { nameEn: 'Chaas (Buttermilk)', nameGu: 'છાસ', icon: '🥛' },
    ]
  },
  9: { // Post-Wedding Celebration
    titleEn: 'Morning Feast',
    titleGu: 'સવારનું ભોજન',
    items: [
      { nameEn: 'Kala Jamun', nameGu: 'કાલા જામુન', icon: '🍬' },
      { nameEn: 'Chole', nameGu: 'છોલે', icon: '🫘' },
      { nameEn: 'Moti Puri', nameGu: 'મોટી પૂરી', icon: '🫓' },
      { nameEn: 'Kadhi', nameGu: 'કઢી', icon: '🍲' },
      { nameEn: 'Pulav', nameGu: 'પુલાવ', icon: '🍚' },
      { nameEn: 'Chaas (Buttermilk)', nameGu: 'છાસ', icon: '🥛' },
      { nameEn: 'Papad', nameGu: 'પાપડ', icon: '🫓' },
    ]
  }
};
