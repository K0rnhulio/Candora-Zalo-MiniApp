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
    // Modal for phone permission
    phoneModal: {
      title: string;
      content: string;
      retry: string;
      cancel: string;
    };
    // Authorization error
    authError: string;
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
    steps: string[];
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
    ctaButton: "BEGIN YOUR SCENT JOURNEY",
  },
  quiz: {
    step: "Step",
    of: "of",
    back: "Back",
    questions: [
      {
        id: 1,
        text: "Let's start with the foundation. What kind of energy should this fragrance radiate?",
        options: ["Deep, bold, and masculine leaning", "Soft, elegant, and feminine leaning", "Neutral, modern, and fluid (Unisex)"],
      },
      {
        id: 2,
        text: "You've just sprayed it on. How does the opening moment make you feel?",
        options: ["Awake and Electric", "Calm and Centered", "Wrapped in Mystery", "Clean and Polished"],
      },
      {
        id: 3,
        text: "If this scent were a drink or a treat, what would it be?",
        options: ["A crisp Gin & Tonic with extra lime", "A rich, dark espresso or spiced chai", "A glass of rosé in a garden", "Vanilla bourbon or a warm pastry"],
      },
      {
        id: 4,
        text: "Close your eyes. Where are you when you're wearing this signature mix?",
        options: ["Domination mode: Boardrooms and city streets", "Intimate mode: Candlelight and close quarters", "Escape mode: Ocean air or deep woods", "Comfort mode: Fresh sheets and a rainy Sunday"],
      },
      {
        id: 5,
        text: "What is the perfect 'temperature' for this scent?",
        options: ["Sunlight on skin (Warm, bright)", "Cool morning mist (Crisp, airy)", "A crackling fireplace (Cozy, smoky)", "Midnight air (Cool, deep)"],
      },
      {
        id: 6,
        text: "You walk past someone and leave a scent trail. What do they think?",
        options: ["That person is effortlessly cool", "That person is powerful", "That person is dangerously attractive", "That person is clean and trustworthy"],
      },
      {
        id: 7,
        text: "If you could touch this scent, what would it feel like?",
        options: ["Crisp white linen", "Heavy black velvet", "Warm cashmere sweater", "Cool polished stone"],
      },
      {
        id: 8,
        text: "Finally, what is the 'Job' this perfume needs to do for you?",
        options: ["Confidence Armor: Make me feel invincible", "Seduction Tool: Make me irresistible", "Mood Lifter: Make me feel happy", "Stress Buster: Make me feel grounded"],
      },
    ],
  },
  contactForm: {
    title: "Your Formula is Ready",
    description:
      "We have curated a unique blend based on your profile. Tap the button below to save this bespoke creation and reveal the results.",
    nameLabel: "Full Name",
    namePlaceholder: "e.g. Jane Doe",
    phoneLabel: "Phone Number",
    phonePlaceholder: "e.g. +1 (555) 000-0000",
    submitButton: "Reveal My Scent",
    submitting: "Saving...",
    error: "Please fill in all fields to reveal your formula.",
    privacy:
      "Your privacy is paramount. We only use your Zalo profile to associate your bespoke formula with your account.",
    phoneModal: {
      title: "Phone Number Required",
      content: "We need your phone number to save your personalized scent formula and contact you about your order. Please grant permission to continue.",
      retry: "Try Again",
      cancel: "Cancel",
    },
    authError: "Unable to get your information. Please try again.",
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
    steps: [
      "Analyzing your personality type...",
      "Matching base notes...",
      "Calculated match: {percentage}%...",
      "Blending final accord...",
    ],
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
    ctaButton: "BẮT ĐẦU HÀNH TRÌNH HƯƠNG THƠM",
  },
  quiz: {
    step: "Bước",
    of: "trên",
    back: "Quay lại",
    questions: [
      {
        id: 1,
        text: "Hãy bắt đầu với nền tảng. Loại năng lượng nào mà hương thơm này nên tỏa ra?",
        options: ["Đậm, mạnh mẽ và nam tính", "Nhẹ nhàng, thanh lịch và nữ tính", "Trung tính, hiện đại và linh hoạt (Unisex)"],
      },
      {
        id: 2,
        text: "Bạn vừa mới xịt nó lên. Khoảnh khắc đầu tiên khiến bạn cảm thấy thế nào?",
        options: ["Tỉnh táo và Đầy năng lượng", "Bình tĩnh và Tập trung", "Được bao trùm bởi sự bí ẩn", "Sạch sẽ và Chỉn chu"],
      },
      {
        id: 3,
        text: "Nếu mùi hương này là một đồ uống hoặc món ăn, nó sẽ là gì?",
        options: ["Một ly Gin & Tonic giòn tan với thêm chanh", "Một ly espresso đậm đà hoặc trà chai cay nồng", "Một ly rượu vang hồng trong vườn", "Rượu bourbon vani hoặc bánh nướng ấm áp"],
      },
      {
        id: 4,
        text: "Hãy nhắm mắt lại. Bạn đang ở đâu khi mặc mùi hương đặc trưng này?",
        options: ["Chế độ thống trị: Phòng họp và đường phố thành thị", "Chế độ thân mật: Ánh nến và không gian gần gũi", "Chế độ trốn thoát: Không khí biển hoặc rừng sâu", "Chế độ thoải mái: Chăn ga mới và ngày chủ nhật mưa"],
      },
      {
        id: 5,
        text: "'Nhiệt độ' hoàn hảo cho mùi hương này là gì?",
        options: ["Ánh nắng trên da (Ấm áp, rực rỡ)", "Sương sớm mát mẻ (Giòn tan, thoáng đãng)", "Lò sưởi tí tách (Ấm cúng, khói)", "Không khí nửa đêm (Mát lạnh, sâu lắng)"],
      },
      {
        id: 6,
        text: "Bạn đi lướt qua ai đó và để lại một vệt hương. Họ nghĩ gì?",
        options: ["Người đó thật ngầu một cách tự nhiên", "Người đó thật quyền lực", "Người đó hấp dẫn một cách nguy hiểm", "Người đó sạch sẽ và đáng tin cậy"],
      },
      {
        id: 7,
        text: "Nếu bạn có thể chạm vào mùi hương này, nó sẽ cảm thấy như thế nào?",
        options: ["Vải lanh trắng giòn", "Nhung đen nặng trĩu", "Áo len cashmere ấm áp", "Đá đánh bóng mát lạnh"],
      },
      {
        id: 8,
        text: "Cuối cùng, 'Công việc' mà nước hoa này cần làm cho bạn là gì?",
        options: ["Áo giáp tự tin: Làm cho tôi cảm thấy bất khả chiến bại", "Công cụ quyến rũ: Làm cho tôi không thể cưỡng lại", "Nâng cao tâm trạng: Làm cho tôi cảm thấy hạnh phúc", "Giảm căng thẳng: Làm cho tôi cảm thấy vững chãi"],
      },
    ],
  },
  contactForm: {
    title: "Công Thức Của Bạn Đã Sẵn Sàng",
    description:
      "Chúng tôi đã tạo ra một hương thơm độc đáo dựa trên hồ sơ của bạn. Nhấn nút bên dưới để lưu sáng tạo này và xem kết quả.",
    nameLabel: "Họ và Tên",
    namePlaceholder: "VD: Nguyễn Văn A",
    phoneLabel: "Số Điện Thoại",
    phonePlaceholder: "VD: 0901 234 567",
    submitButton: "Xem Mùi Hương Của Tôi",
    submitting: "Đang lưu...",
    error: "Vui lòng điền đầy đủ thông tin để xem công thức của bạn.",
    privacy:
      "Quyền riêng tư của bạn là ưu tiên hàng đầu. Chúng tôi chỉ sử dụng thông tin Zalo để liên kết công thức với tài khoản của bạn.",
    phoneModal: {
      title: "Cần Số Điện Thoại",
      content: "Chúng tôi cần số điện thoại của bạn để lưu công thức nước hoa và liên hệ về đơn hàng. Vui lòng cấp quyền để tiếp tục.",
      retry: "Thử Lại",
      cancel: "Hủy",
    },
    authError: "Không thể lấy thông tin của bạn. Vui lòng thử lại.",
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
    steps: [
      "Đang phân tích tính cách của bạn...",
      "Đang tìm kiếm nốt hương phù hợp...",
      "Độ phù hợp: {percentage}%...",
      "Đang pha chế hương thơm cuối cùng...",
    ],
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
    ctaButton: "НАЧНИТЕ СВОЙ ПУТЬ К АРОМАТУ",
  },
  quiz: {
    step: "Шаг",
    of: "из",
    back: "Назад",
    questions: [
      {
        id: 1,
        text: "Начнем с основы. Какую энергию должен излучать этот аромат?",
        options: ["Глубокий, смелый и мужественный", "Мягкий, элегантный и женственный", "Нейтральный, современный и гибкий (Унисекс)"],
      },
      {
        id: 2,
        text: "Вы только что нанесли его. Как вы чувствуете себя в первое мгновение?",
        options: ["Бодрым и Электрическим", "Спокойным и Сосредоточенным", "Окутанным тайной", "Чистым и Собранным"],
      },
      {
        id: 3,
        text: "Если бы этот аромат был напитком или угощением, чем бы он был?",
        options: ["Хрустящим Джин-тоником с лаймом", "Насыщенным темным эспрессо или пряным чаем", "Бокалом розового вина в саду", "Ванильным бурбоном или теплой выпечкой"],
      },
      {
        id: 4,
        text: "Закройте глаза. Где вы находитесь, когда носите этот фирменный микс?",
        options: ["Режим доминирования: Залы совещаний и городские улицы", "Интимный режим: Свет свечей и близкое пространство", "Режим побега: Морской воздух или глубокий лес", "Режим комфорта: Свежие простыни и дождливое воскресенье"],
      },
      {
        id: 5,
        text: "Какова идеальная 'температура' для этого аромата?",
        options: ["Солнечный свет на коже (Теплый, яркий)", "Прохладный утренний туман (Хрустящий, воздушный)", "Потрескивающий камин (Уютный, дымный)", "Полуночный воздух (Прохладный, глубокий)"],
      },
      {
        id: 6,
        text: "Вы проходите мимо кого-то, оставляя шлейф аромата. Что они думают?",
        options: ["Этот человек непринужденно крут", "Этот человек обладает властью", "Этот человек опасно привлекателен", "Этот человек чист и надежен"],
      },
      {
        id: 7,
        text: "Если бы вы могли прикоснуться к этому аромату, каким бы он был на ощупь?",
        options: ["Хрустящий белый лен", "Тяжелый черный бархат", "Теплый кашемировый свитер", "Прохладный полированный камень"],
      },
      {
        id: 8,
        text: "Наконец, какую 'Работу' этот парфюм должен выполнять для вас?",
        options: ["Броня уверенности: Сделать меня непобедимым", "Инструмент соблазнения: Сделать меня неотразимым", "Поднятие настроения: Сделать меня счастливым", "Снятие стресса: Сделать меня заземленным"],
      },
    ],
  },
  contactForm: {
    title: "Ваша Формула Готова",
    description:
      "Мы создали уникальный аромат на основе вашего профиля. Нажмите кнопку ниже, чтобы сохранить это творение и увидеть результаты.",
    nameLabel: "Полное Имя",
    namePlaceholder: "Например: Иван Иванов",
    phoneLabel: "Номер Телефона",
    phonePlaceholder: "Например: +7 (999) 123-45-67",
    submitButton: "Показать Мой Аромат",
    submitting: "Сохранение...",
    error: "Пожалуйста, заполните все поля, чтобы увидеть вашу формулу.",
    privacy:
      "Ваша конфиденциальность превыше всего. Мы используем данные Zalo только для связи формулы с вашим аккаунтом.",
    phoneModal: {
      title: "Требуется Номер Телефона",
      content: "Нам нужен ваш номер телефона, чтобы сохранить формулу аромата и связаться с вами по заказу. Пожалуйста, предоставьте разрешение.",
      retry: "Повторить",
      cancel: "Отмена",
    },
    authError: "Не удалось получить ваши данные. Пожалуйста, попробуйте снова.",
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
    steps: [
      "Анализируем ваш тип личности...",
      "Подбираем базовые ноты...",
      "Совпадение: {percentage}%...",
      "Создаём финальный аккорд...",
    ],
  },
  footer: "Candora",
  languageSelector: {
    en: "English",
    vi: "Tiếng Việt",
    ru: "Русский",
  },
};

export const translations: Record<Language, Translations> = { en, vi, ru };
