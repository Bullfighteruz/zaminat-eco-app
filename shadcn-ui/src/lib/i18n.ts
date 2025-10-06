import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Import translation files
import enProfile from '../locales/en/profile.json';
import ruProfile from '../locales/ru/profile.json';
import uzProfile from '../locales/uz/profile.json';

export const translations = {
  en: {
    // Navigation
    home: 'Home',
    ecoMap: 'Eco Map',
    ecoVote: 'Eco Vote',
    actions: 'Actions',
    shop: 'Shop',
    stories: 'Stories',
    profile: 'Profile',
    
    // Common
    loading: 'Loading...',
    error: 'Error',
    retry: 'Retry',
    save: 'Save',
    cancel: 'Cancel',
    delete: 'Delete',
    edit: 'Edit',
    add: 'Add',
    remove: 'Remove',
    confirm: 'Confirm',
    
    // Home page
    welcomeMessage: 'Welcome to EcoApp',
    todaysActions: "Today's Actions",
    ecoScore: 'Eco Score',
    weeklyGoal: 'Weekly Goal',
    
    // Map page
    nearbyLocations: 'Nearby Eco Locations',
    recyclingCenters: 'Recycling Centers',
    cleanupEvents: 'Cleanup Events',
    
    // Vote page
    activePolls: 'Active Environmental Polls',
    vote: 'Vote',
    results: 'Results',
    
    // Actions page
    upcomingActions: 'Upcoming Actions',
    joinAction: 'Join Action',
    createAction: 'Create Action',
    whyJoinOurEcoActions: 'Why Join Our Eco Actions',
    whyJoinOurEcoActionsDesc: 'Join environmental events organized by the ZAMINAT.eco team. Change the world for the better by earning eco-points and meeting like-minded people.',
    sustainableFuture: 'Sustainable Future',
    sustainableFutureDesc: 'Profit finances environmental projects and infrastructure',
    earnEcoPoints: 'Earn Eco Points',
    earnEcoPointsDesc: 'Get rewarded for your environmental contributions',
    meetLikeMindedPeople: 'Meet Like-Minded People',
    meetLikeMindedPeopleDesc: 'Connect with others who share your passion for the environment',
    communityImpact: 'Community Impact',
    communityImpactDesc: 'Join thousands of eco-warriors making real environmental change in Uzbekistan through organized community actions.',
    requirements: 'Requirements',
    whatToBring: 'What to Bring',
    benefits: 'Benefits',
    volunteerEvents: 'Volunteer Events',
    eventsDescription: 'Join meaningful environmental events that create lasting impact while building a stronger, more sustainable community.',
    upcoming: 'Upcoming',
    joined: 'Joined',
    ecoPoints: 'Eco Points',
    myEvents: 'My Events',
    allEvents: 'All Events',
    organizer: 'Organizer',
    environmentalImpact: 'Environmental Impact',
    joinEvent: 'Join Event',
    eventJoined: 'Event Joined',
    
    // Shop page
    ecoProducts: 'Eco-Friendly Products',
    addToCart: 'Add to Cart',
    cart: 'Cart',
    
    // Stories page
    ecoStories: 'Eco Stories',
    readMore: 'Read More',
    share: 'Share',
    
    // Profile page
    myProfile: 'My Profile',
    settings: 'Settings',
    achievements: 'Achievements',
    statistics: 'Statistics',
    
    // Profile page detailed translations
    ...enProfile
  },
  ru: {
    // Navigation
    home: 'Главная',
    ecoMap: 'Эко Карта',
    ecoVote: 'Эко Голосование',
    actions: 'Действия',
    shop: 'Магазин',
    stories: 'Истории',
    profile: 'Профиль',
    
    // Common
    loading: 'Загрузка...',
    error: 'Ошибка',
    retry: 'Повторить',
    save: 'Сохранить',
    cancel: 'Отмена',
    delete: 'Удалить',
    edit: 'Редактировать',
    add: 'Добавить',
    remove: 'Удалить',
    confirm: 'Подтвердить',
    
    // Home page
    welcomeMessage: 'Добро пожаловать в EcoApp',
    todaysActions: 'Сегодняшние действия',
    ecoScore: 'Эко рейтинг',
    weeklyGoal: 'Недельная цель',
    
    // Map page
    nearbyLocations: 'Ближайшие эко локации',
    recyclingCenters: 'Центры переработки',
    cleanupEvents: 'События по уборке',
    
    // Vote page
    activePolls: 'Активные экологические опросы',
    vote: 'Голосовать',
    results: 'Результаты',
    
    // Actions page
    upcomingActions: 'Предстоящие действия',
    joinAction: 'Присоединиться',
    createAction: 'Создать действие',
    whyJoinOurEcoActions: 'Почему стоит присоединиться к нашим эко-акциям',
    whyJoinOurEcoActionsDesc: 'Присоединяйтесь к мероприятиям сообщества, организованным командой ZAMINAT.eco. Меняйте мир к лучшему, зарабатывая эко-баллы и знакомясь с единомышленниками.',
    sustainableFuture: 'Устойчивое будущее',
    sustainableFutureDesc: 'Прибыль финансирует экологические проекты и инфраструктуру',
    earnEcoPoints: 'Зарабатывайте эко-баллы',
    earnEcoPointsDesc: 'Получайте вознаграждение за ваш вклад в экологию',
    meetLikeMindedPeople: 'Знакомьтесь с единомышленниками',
    meetLikeMindedPeopleDesc: 'Общайтесь с людьми, которые разделяют вашу страсть к экологии',
    communityImpact: 'Влияние на сообщество',
    communityImpactDesc: 'Присоединяйтесь к тысячам эко-воинов, которые создают реальные экологические изменения в Узбекистане через организованные общественные акции.',
    requirements: 'Требования',
    whatToBring: 'Что взять с собой',
    benefits: 'Преимущества',
    volunteerEvents: 'Волонтерские события',
    eventsDescription: 'Присоединяйтесь к значимым экологическим мероприятиям, которые создают долгосрочное воздействие, укрепляя более сильное и устойчивое сообщество.',
    upcoming: 'Предстоящие',
    joined: 'Присоединились',
    ecoPoints: 'Эко-баллы',
    myEvents: 'Мои события',
    allEvents: 'Все события',
    organizer: 'Организатор',
    environmentalImpact: 'Экологическое влияние',
    joinEvent: 'Присоединиться к событию',
    eventJoined: 'Присоединился к событию',
    
    // Shop page
    ecoProducts: 'Эко товары',
    addToCart: 'В корзину',
    cart: 'Корзина',
    
    // Stories page
    ecoStories: 'Эко истории',
    readMore: 'Читать далее',
    share: 'Поделиться',
    
    // Profile page
    myProfile: 'Мой профиль',
    settings: 'Настройки',
    achievements: 'Достижения',
    statistics: 'Статистика',
    
    // Profile page detailed translations
    ...ruProfile
  },
  uz: {
    // Navigation
    home: 'Bosh sahifa',
    ecoMap: 'Eko Xarita',
    ecoVote: 'Eko Ovoz',
    actions: 'Harakatlar',
    shop: 'Do\'kon',
    stories: 'Hikoyalar',
    profile: 'Profil',
    
    // Common
    loading: 'Yuklanmoqda...',
    error: 'Xatolik',
    retry: 'Qayta urinish',
    save: 'Saqlash',
    cancel: 'Bekor qilish',
    delete: 'O\'chirish',
    edit: 'Tahrirlash',
    add: 'Qo\'shish',
    remove: 'Olib tashlash',
    confirm: 'Tasdiqlash',
    
    // Home page
    welcomeMessage: 'EcoApp ga xush kelibsiz',
    todaysActions: 'Bugungi harakatlar',
    ecoScore: 'Eko reyting',
    weeklyGoal: 'Haftalik maqsad',
    
    // Map page
    nearbyLocations: 'Yaqin eko joylar',
    recyclingCenters: 'Qayta ishlash markazlari',
    cleanupEvents: 'Tozalash tadbirlari',
    
    // Vote page
    activePolls: 'Faol ekologik so\'rovlar',
    vote: 'Ovoz berish',
    results: 'Natijalar',
    
    // Actions page
    upcomingActions: 'Kelgusi harakatlar',
    joinAction: 'Qo\'shilish',
    createAction: 'Harakat yaratish',
    whyJoinOurEcoActions: 'Nega bizning eko harakatlarimizga qo\'shilish kerak',
    whyJoinOurEcoActionsDesc: 'ZAMINAT.eco jamoasi tomonidan tashkil etilgan jamiyat tadbirlariga qo\'shiling. Eko-ball to\'plab va hamfikr odamlar bilan tanishib dunyoni yaxshiroq tomonga o\'zgartiring.',
    sustainableFuture: 'Barqaror kelajak',
    sustainableFutureDesc: 'Foyda ekologik loyihalar va infratuzilmani moliyalashtiradi',
    earnEcoPoints: 'Eko-ball to\'plang',
    earnEcoPointsDesc: 'Ekologiyadagi hissangiz uchun mukofot oling',
    meetLikeMindedPeople: 'Hamfikr odamlar bilan tanishing',
    meetLikeMindedPeopleDesc: 'Ekologiyaga bo\'lgan muhabbatingizni baham ko\'radigan odamlar bilan muloqot qiling',
    communityImpact: 'Jamiyatga ta\'sir',
    communityImpactDesc: 'Tashkil etilgan jamiyat harakatlari orqali O\'zbekistonda haqiqiy ekologik o\'zgarishlar yaratayotgan minglab eko-jangchilar bilan qo\'shiling.',
    requirements: 'Talablar',
    whatToBring: 'Nima olib kelish kerak',
    benefits: 'Foydalari',
    volunteerEvents: 'Ixtiyoriy tadbirlar',
    eventsDescription: 'Kuchliroq va barqarorroq jamiyat qurishda uzoq muddatli ta\'sir yaratadigan mazmunli ekologik tadbirlarga qo\'shiling.',
    upcoming: 'Kelgusi',
    joined: 'Qo\'shildi',
    ecoPoints: 'Eko-ball',
    myEvents: 'Mening tadbirlarim',
    allEvents: 'Barcha tadbirlar',
    organizer: 'Tashkilotchi',
    environmentalImpact: 'Ekologik ta\'sir',
    joinEvent: 'Tadbirga qo\'shilish',
    eventJoined: 'Tadbirga qo\'shildi',
    
    // Shop page
    ecoProducts: 'Eko mahsulotlar',
    addToCart: 'Savatga qo\'shish',
    cart: 'Savat',
    
    // Stories page
    ecoStories: 'Eko hikoyalar',
    readMore: 'Batafsil',
    share: 'Baham ko\'rish',
    
    // Profile page
    myProfile: 'Mening profilim',
    settings: 'Sozlamalar',
    achievements: 'Yutuqlar',
    statistics: 'Statistika',
    
    // Profile page detailed translations
    ...uzProfile
  }
};

// Initialize i18n
i18n
  .use(initReactI18next)
  .init({
    resources: translations,
    lng: 'en', // default language
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;

export type Language = keyof typeof translations;
export type TranslationKey = keyof typeof translations.en;