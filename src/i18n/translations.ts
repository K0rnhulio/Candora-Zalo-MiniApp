import { Language } from "../types";

export interface Translations {
  // Landing page
  landing: {
    eyebrow: string;
    headline: string;
    headlineAccent: string;
    bodyParagraph1: string;
    bodyParagraph2: string;
    ctaButton: string;
    stats: {
      premium: string;
      premiumLabel: string;
      shipping: string;
      shippingLabel: string;
      unique: string;
      uniqueLabel: string;
    };
    badge: string;
  };
  // Quiz
  quiz: {
    step: string;
    of: string;
    back: string;
    questions: {
      id: number;
      text: string;
      options: string[];
    }[];
  };
  // Contact Form
  contactForm: {
    title: string;
    description: string;
    nameLabel: string;
    namePlaceholder: string;
    phoneLabel: string;
    phonePlaceholder: string;
    submitButton: string;
    submitting: string;
    error: string;
    privacy: string;
  };
  // Result page
  result: {
    eyebrow: string;
    formulaTitle: string;
    componentNumber: string;
    reminiscentOf: string;
    reasoningTitle: string;
    restartButton: string;
  };
  // Loading
  loading: {
    title: string;
    subtitle: string;
  };
  // Footer
  footer: string;
  // Language selector
  languageSelector: {
    en: string;
    vi: string;
    ru: string;
  };
}

export const en: Translations = {
  landing: {
    eyebrow: "EXCLUSIVELY YOURS",
    headline: "A Formula for",
    headlineAccent: "Who You Are.",
    bodyParagraph1:
      "A fragrance designed exclusively for you. Answer 8 questions about your style, mood, and character.",
    bodyParagraph2:
      "Our system translates your answers into a formula tailored personally for you, blending high-end accords to create a fragrance that is authentically, undeniably you. We bottle your custom blend and ship it directly to your door.",
    ctaButton: "CREATE MY SCENT NOW",
    stats: {
      premium: "Premium",
      premiumLabel: "Fragrances",
      shipping: "24h",
      shippingLabel: "Ships In",
      unique: "Only",
      uniqueLabel: "Made For You",
    },
    badge: "Personalized",
  },
  quiz: {
    step: "Step",
    of: "of",
    back: "Back",
    questions: [
      {
        id: 1,
        text: "Are you looking for a masculine, feminine, or unisex fragrance composition?",
        options: ["Masculine", "Feminine", "Unisex"],
      },
      {
        id: 2,
        text: "How would you describe your current mood or the vibe you want to achieve?",
        options: [
          "Energetic & Playful",
          "Calm & Meditative",
          "Romantic & Passionate",
          "Focused & Sharp",
          "Luxurious & Sophisticated",
        ],
      },
      {
        id: 3,
        text: "Which scent family naturally appeals to you the most?",
        options: [
          "Fresh & Citrusy",
          "Floral & Romantic",
          "Woody & Earthy",
          "Sweet & Gourmand",
          "Spicy & Exotic",
        ],
      },
      {
        id: 4,
        text: "Where do you envision yourself wearing this scent?",
        options: [
          "A professional work setting",
          "A cozy night at home",
          "An outdoor adventure",
          "A glamorous evening event",
          "A casual daily outing",
        ],
      },
      {
        id: 5,
        text: "If you were a season, which one would you be?",
        options: [
          "Spring (Fresh, blooming)",
          "Summer (Bright, warm)",
          "Autumn (Cozy, spicy)",
          "Winter (Crisp, deep)",
        ],
      },
      {
        id: 6,
        text: "How do you want to be perceived by others?",
        options: [
          "Approachable & Friendly",
          "Mysterious & Alluring",
          "Confident & Powerful",
          "Clean & Put-together",
        ],
      },
      {
        id: 7,
        text: "Which of these textures resonates with you?",
        options: [
          "Smooth Silk",
          "Crisp Linen",
          "Warm Velvet",
          "Cool Stone",
          "Soft Cashmere",
        ],
      },
      {
        id: 8,
        text: "What is your primary goal with this fragrance?",
        options: [
          "To boost my energy",
          "To help me relax/sleep",
          "To feel attractive",
          "To ground myself",
          "To spark creativity",
        ],
      },
    ],
  },
  contactForm: {
    title: "Your Formula is Ready",
    description:
      "We have curated a unique blend based on your profile. Please enter your details below to save this bespoke creation to our registry and reveal the results.",
    nameLabel: "Full Name",
    namePlaceholder: "e.g. Jane Doe",
    phoneLabel: "Phone Number",
    phonePlaceholder: "e.g. +1 (555) 000-0000",
    submitButton: "Reveal My Scent",
    submitting: "Saving...",
    error: "Please fill in all fields to reveal your formula.",
    privacy:
      "Your privacy is paramount. We only use your details to associate your bespoke formula with your profile in our atelier.",
  },
  result: {
    eyebrow: "Your Bespoke Creation",
    formulaTitle: "The Formula",
    componentNumber: "No.",
    reminiscentOf: "Reminiscent of",
    reasoningTitle: "Why this scent suits you",
    restartButton: "Create Another Blend",
  },
  loading: {
    title: "Crafting Your Signature Scent",
    subtitle: "Our AI perfumer is analyzing your preferences...",
  },
  footer: "Candora",
  languageSelector: {
    en: "English",
    vi: "Tiếng Việt",
    ru: "Русский",
  },
};

export const vi: Translations = {
  landing: {
    eyebrow: "DÀNH RIÊNG CHO BẠN",
    headline: "Công Thức Dành Cho",
    headlineAccent: "Chính Bạn.",
    bodyParagraph1:
      "Một mùi hương được thiết kế riêng cho bạn. Trả lời 8 câu hỏi về phong cách, tâm trạng và tính cách của bạn.",
    bodyParagraph2:
      "Hệ thống của chúng tôi chuyển đổi câu trả lời của bạn thành công thức được cá nhân hóa, pha trộn các hương liệu cao cấp để tạo ra một mùi hương chân thực, độc đáo của riêng bạn. Chúng tôi đóng chai và giao trực tiếp đến tận nhà bạn.",
    ctaButton: "TẠO MÙI HƯƠNG CỦA TÔI",
    stats: {
      premium: "Cao Cấp",
      premiumLabel: "Nước Hoa",
      shipping: "24h",
      shippingLabel: "Giao Hàng",
      unique: "Duy Nhất",
      uniqueLabel: "Dành Cho Bạn",
    },
    badge: "Cá Nhân Hóa",
  },
  quiz: {
    step: "Bước",
    of: "trên",
    back: "Quay lại",
    questions: [
      {
        id: 1,
        text: "Bạn đang tìm kiếm một mùi hương nam tính, nữ tính hay unisex?",
        options: ["Nam tính", "Nữ tính", "Unisex"],
      },
      {
        id: 2,
        text: "Bạn mô tả tâm trạng hiện tại hoặc cảm giác bạn muốn đạt được như thế nào?",
        options: [
          "Năng động & Vui tươi",
          "Bình tĩnh & Thiền định",
          "Lãng mạn & Đam mê",
          "Tập trung & Sắc bén",
          "Sang trọng & Tinh tế",
        ],
      },
      {
        id: 3,
        text: "Dòng hương nào tự nhiên thu hút bạn nhất?",
        options: [
          "Tươi mát & Cam chanh",
          "Hoa & Lãng mạn",
          "Gỗ & Đất",
          "Ngọt ngào & Gourmand",
          "Cay nồng & Kỳ lạ",
        ],
      },
      {
        id: 4,
        text: "Bạn hình dung mình sẽ sử dụng mùi hương này ở đâu?",
        options: [
          "Môi trường công sở",
          "Đêm ấm cúng ở nhà",
          "Phiêu lưu ngoài trời",
          "Sự kiện sang trọng buổi tối",
          "Dạo chơi hàng ngày",
        ],
      },
      {
        id: 5,
        text: "Nếu bạn là một mùa, bạn sẽ là mùa nào?",
        options: [
          "Xuân (Tươi mới, nở rộ)",
          "Hè (Rực rỡ, ấm áp)",
          "Thu (Ấm cúng, cay nồng)",
          "Đông (Trong lành, sâu lắng)",
        ],
      },
      {
        id: 6,
        text: "Bạn muốn người khác nhìn nhận bạn như thế nào?",
        options: [
          "Thân thiện & Dễ gần",
          "Bí ẩn & Quyến rũ",
          "Tự tin & Mạnh mẽ",
          "Sạch sẽ & Chỉn chu",
        ],
      },
      {
        id: 7,
        text: "Chất liệu nào sau đây phù hợp với bạn?",
        options: [
          "Lụa mềm mại",
          "Vải lanh giòn",
          "Nhung ấm áp",
          "Đá mát lạnh",
          "Cashmere êm ái",
        ],
      },
      {
        id: 8,
        text: "Mục tiêu chính của bạn với mùi hương này là gì?",
        options: [
          "Tăng năng lượng",
          "Giúp thư giãn/ngủ ngon",
          "Cảm thấy quyến rũ",
          "Cân bằng bản thân",
          "Khơi dậy sáng tạo",
        ],
      },
    ],
  },
  contactForm: {
    title: "Công Thức Của Bạn Đã Sẵn Sàng",
    description:
      "Chúng tôi đã tạo ra một hương thơm độc đáo dựa trên hồ sơ của bạn. Vui lòng nhập thông tin bên dưới để lưu sáng tạo này và xem kết quả.",
    nameLabel: "Họ và Tên",
    namePlaceholder: "VD: Nguyễn Văn A",
    phoneLabel: "Số Điện Thoại",
    phonePlaceholder: "VD: 0901 234 567",
    submitButton: "Xem Mùi Hương Của Tôi",
    submitting: "Đang lưu...",
    error: "Vui lòng điền đầy đủ thông tin để xem công thức của bạn.",
    privacy:
      "Quyền riêng tư của bạn là ưu tiên hàng đầu. Chúng tôi chỉ sử dụng thông tin để liên kết công thức với hồ sơ của bạn.",
  },
  result: {
    eyebrow: "Sáng Tạo Dành Riêng Cho Bạn",
    formulaTitle: "Công Thức",
    componentNumber: "Số",
    reminiscentOf: "Gợi nhớ đến",
    reasoningTitle: "Tại sao mùi hương này phù hợp với bạn",
    restartButton: "Tạo Hương Thơm Khác",
  },
  loading: {
    title: "Đang Tạo Mùi Hương Của Bạn",
    subtitle: "Chuyên gia nước hoa AI đang phân tích sở thích của bạn...",
  },
  footer: "Candora",
  languageSelector: {
    en: "English",
    vi: "Tiếng Việt",
    ru: "Русский",
  },
};

export const ru: Translations = {
  landing: {
    eyebrow: "ЭКСКЛЮЗИВНО ДЛЯ ВАС",
    headline: "Формула для",
    headlineAccent: "Вашей Индивидуальности.",
    bodyParagraph1:
      "Аромат, созданный исключительно для вас. Ответьте на 8 вопросов о вашем стиле, настроении и характере.",
    bodyParagraph2:
      "Наша система преобразует ваши ответы в персональную формулу, смешивая премиальные аккорды для создания аромата, который подлинно и неоспоримо ваш. Мы разливаем ваш индивидуальный бленд и доставляем прямо к вашей двери.",
    ctaButton: "СОЗДАТЬ МОЙ АРОМАТ",
    stats: {
      premium: "Премиум",
      premiumLabel: "Ароматы",
      shipping: "24ч",
      shippingLabel: "Доставка",
      unique: "Только",
      uniqueLabel: "Для Вас",
    },
    badge: "Персонализированный",
  },
  quiz: {
    step: "Шаг",
    of: "из",
    back: "Назад",
    questions: [
      {
        id: 1,
        text: "Вы ищете мужской, женский или унисекс аромат?",
        options: ["Мужской", "Женский", "Унисекс"],
      },
      {
        id: 2,
        text: "Как бы вы описали своё текущее настроение или атмосферу, которую хотите создать?",
        options: [
          "Энергичный и игривый",
          "Спокойный и медитативный",
          "Романтичный и страстный",
          "Сосредоточенный и острый",
          "Роскошный и утончённый",
        ],
      },
      {
        id: 3,
        text: "Какое семейство ароматов вам больше всего нравится?",
        options: [
          "Свежие и цитрусовые",
          "Цветочные и романтичные",
          "Древесные и земляные",
          "Сладкие и гурманские",
          "Пряные и экзотические",
        ],
      },
      {
        id: 4,
        text: "Где вы представляете себя с этим ароматом?",
        options: [
          "В офисе",
          "Уютный вечер дома",
          "Приключение на природе",
          "Гламурное вечернее мероприятие",
          "Повседневная прогулка",
        ],
      },
      {
        id: 5,
        text: "Если бы вы были временем года, каким бы вы были?",
        options: [
          "Весна (Свежая, цветущая)",
          "Лето (Яркое, тёплое)",
          "Осень (Уютная, пряная)",
          "Зима (Свежая, глубокая)",
        ],
      },
      {
        id: 6,
        text: "Как вы хотите, чтобы вас воспринимали окружающие?",
        options: [
          "Дружелюбный и открытый",
          "Загадочный и притягательный",
          "Уверенный и сильный",
          "Аккуратный и собранный",
        ],
      },
      {
        id: 7,
        text: "Какая из этих текстур вам ближе?",
        options: [
          "Гладкий шёлк",
          "Хрустящий лён",
          "Тёплый бархат",
          "Прохладный камень",
          "Мягкий кашемир",
        ],
      },
      {
        id: 8,
        text: "Какова ваша главная цель с этим ароматом?",
        options: [
          "Повысить энергию",
          "Помочь расслабиться/уснуть",
          "Чувствовать себя привлекательным",
          "Обрести внутреннюю гармонию",
          "Пробудить креативность",
        ],
      },
    ],
  },
  contactForm: {
    title: "Ваша Формула Готова",
    description:
      "Мы создали уникальный аромат на основе вашего профиля. Пожалуйста, введите свои данные ниже, чтобы сохранить это творение и увидеть результаты.",
    nameLabel: "Полное Имя",
    namePlaceholder: "Например: Иван Иванов",
    phoneLabel: "Номер Телефона",
    phonePlaceholder: "Например: +7 (999) 123-45-67",
    submitButton: "Показать Мой Аромат",
    submitting: "Сохранение...",
    error: "Пожалуйста, заполните все поля, чтобы увидеть вашу формулу.",
    privacy:
      "Ваша конфиденциальность превыше всего. Мы используем ваши данные только для связи вашей персональной формулы с вашим профилем.",
  },
  result: {
    eyebrow: "Ваше Уникальное Творение",
    formulaTitle: "Формула",
    componentNumber: "№",
    reminiscentOf: "Напоминает",
    reasoningTitle: "Почему этот аромат подходит вам",
    restartButton: "Создать Другой Аромат",
  },
  loading: {
    title: "Создаём Ваш Аромат",
    subtitle: "парфюмер анализирует ваши предпочтения...",
  },
  footer: "Candora",
  languageSelector: {
    en: "English",
    vi: "Tiếng Việt",
    ru: "Русский",
  },
};

export const translations: Record<Language, Translations> = { en, vi, ru };
