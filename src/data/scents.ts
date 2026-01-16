import { Scent, ScentsType } from '../types';

// List 1: Candle Scents (Item Id from PDF)
export const CANDLE_SCENTS: Scent[] = [
  { number: "1", code: "MRF-1701427", name: "Wild Sapphire", category: "Happy & Social", mood: "Refresh & Socialize", notes: "Green Flower, Marine, Bluebell, Jasmine, Orange Blossom", type: ScentsType.CANDLE },
  { number: "10", code: "MRF-1740018", name: "Velvet Rose", category: "Love & Comfort", mood: "Romance & Balance", notes: "Red Rose, Geranium, Woody Notes, Vanilla", type: ScentsType.CANDLE },
  { number: "14", code: "MRF-1740110", name: "Crystal Lotus", category: "Focus & Clarity", mood: "Meditative Clarity", notes: "Lemon, Lotus, Lily of the Valley", type: ScentsType.CANDLE },
  { number: "15", code: "MRF-1740109", name: "Midnight Berry", category: "Luxury & Grounding", mood: "Stability & Sophistication", notes: "Kiwi, Grass, Lily of the Valley, Cedarwood", type: ScentsType.CANDLE },
  { number: "18", code: "MRF-1740136", name: "Scarlet Rose", category: "Love & Comfort", mood: "Passion & Intensity", notes: "Red Rose, Geranium", type: ScentsType.CANDLE },
  { number: "19", code: "MRF-1740107", name: "Peony Silk", category: "Love & Comfort", mood: "Confidence & Grace", notes: "Peony, Jasmine, Amber, Citrus", type: ScentsType.CANDLE },
  { number: "21", code: "MRF-1740328", name: "Golden Nectar", category: "Happy & Social", mood: "Joy & Optimism", notes: "Peach, Honey, Lemon, Nectarine", type: ScentsType.CANDLE },
  { number: "22", code: "MRF-1740325", name: "Mystic Rose", category: "Luxury & Grounding", mood: "Mystery & Deep Relaxation", notes: "Rose, Oud Wood, Jasmine, Berry", type: ScentsType.CANDLE },
  { number: "23", code: "MRF-1740133", name: "Neroli Bloom", category: "Happy & Social", mood: "Cheerfulness & Light", notes: "Orange Blossom, Vanilla, Marine, Berry", type: ScentsType.CANDLE },
  { number: "32", code: "MRF-1740011", name: "Bluebell Dew", category: "Focus & Clarity", mood: "Renewal & Awakening", notes: "Green Flower, Marine, Bluebell", type: ScentsType.CANDLE },
  { number: "34", code: "MRF-1740132", name: "Golden Mimosa", category: "Luxury & Grounding", mood: "Warmth & Creativity", notes: "Cardamom, Spice, Grapefruit, Marine", type: ScentsType.CANDLE },
  { number: "37", code: "MRF-1740348", name: "Orchard Mist", category: "Happy & Social", mood: "Carefree & Lighthearted", notes: "Lemon, Pear, Freesia, Rose", type: ScentsType.CANDLE },
  { number: "104", code: "MRF-1740241", name: "Exotic Petals", category: "Happy & Social", mood: "Energized & Playful", notes: "Fresh Flower, Star Fruit, Rose Water", type: ScentsType.CANDLE },
  { number: "105", code: "MRF-1740249", name: "Cashmere Lavender", category: "Calm & Sleep", mood: "Deep Sleep & Tranquility", notes: "Eucalyptus, Lavender, Camphor", type: ScentsType.CANDLE },
  { number: "134", code: "MRF-1740183", name: "Ruby Pomegranate", category: "Happy & Social", mood: "Playful & Cheerful", notes: "Caramel, Sweet Orange, Berry, Vanilla", type: ScentsType.CANDLE },
  { number: "148", code: "MRF-1740079", name: "Crimson Cherry", category: "Love & Comfort", mood: "Nostalgia & Safety", notes: "Cherry, Cinnamon, Berry, Apple", type: ScentsType.CANDLE },
  { number: "153", code: "MRF-1740153", name: "Lychee Zen", category: "Calm & Sleep", mood: "Mindfulness & Harmony", notes: "Citrus, Clear Tea, Musk Grass", type: ScentsType.CANDLE },
  { number: "181", code: "MRF-1740288", name: "Moonlight Rose", category: "Calm & Sleep", mood: "Dream & Decompress", notes: "Rose, Violet, Lily of the Valley", type: ScentsType.CANDLE },
  { number: "194", code: "MRF-1740322", name: "Azure Coast", category: "Focus & Clarity", mood: "Alertness & Vitality", notes: "Lemon, Marine, Lily of the Valley", type: ScentsType.CANDLE },
  { number: "209", code: "MRF-1740139", name: "Summer Eden", category: "Happy & Social", mood: "Happiness & Nature", notes: "Green Scent, Floral Scent, Fruit Scent", type: ScentsType.CANDLE },
  { number: "211", code: "MRF-1740137", name: "White Bouquet", category: "Luxury & Grounding", mood: "Peace & Purity", notes: "Violet, Freesia, Herbal, Lily", type: ScentsType.CANDLE },
  { number: "224", code: "MRF-1740365", name: "Citrus Grove", category: "Happy & Social", mood: "Motivation & Positivity", notes: "Blood Orange, Grapefruit, Apple", type: ScentsType.CANDLE },
  { number: "236", code: "MRF-1740302", name: "Satin Rose", category: "Love & Comfort", mood: "Gentle Affection", notes: "Sweet Rose Petal Scent", type: ScentsType.CANDLE },
  { number: "242", code: "MRF-1740271", name: "Coastal Grass", category: "Focus & Clarity", mood: "Nature Connection", notes: "Grass, Green Leaf, Jasmine, Marine", type: ScentsType.CANDLE },
  { number: "245", code: "MRF-1740131", name: "Sea Salt & Sage", category: "Focus & Clarity", mood: "Deep Focus & Clarity", notes: "Herbal, Peppermint, Thyme, Cedarwood", type: ScentsType.CANDLE },
  { number: "253", code: "MRF-1740086", name: "Sheer White Tea", category: "Calm & Sleep", mood: "Cleanse & Reset", notes: "Green Flower, White Flower, Rose, Jasmine", type: ScentsType.CANDLE },
  { number: "254", code: "MRF-1740180", name: "Sacred Oud", category: "Luxury & Grounding", mood: "Inner Strength & Grounding", notes: "Agarwood, Sandalwood, Patchouli, Cedarwood", type: ScentsType.CANDLE },
  { number: "258", code: "MRF-1740368", name: "Cocoa Velvet", category: "Love & Comfort", mood: "Indulgence & Comfort", notes: "Caramel, Chocolate", type: ScentsType.CANDLE },
  { number: "263", code: "MRF-1740245", name: "Botanic Chic", category: "Happy & Social", mood: "Social & Trendy", notes: "Fresh Flower, Star Fruit, Rose Water", type: ScentsType.CANDLE },
  { number: "267", code: "MRF-1740130", name: "Sunlit Waves", category: "Happy & Social", mood: "Uplift & Awaken", notes: "Lemon, Marine, Anise, Sandalwood", type: ScentsType.CANDLE },
  { number: "273", code: "MRF-1740080", name: "Spiced Apple", category: "Love & Comfort", mood: "Cozy & Homely", notes: "Cherry, Cinnamon, Herbal, Apple", type: ScentsType.CANDLE },
  { number: "NEW", code: "MRF-1740439", name: "Ocean Rain", category: "Calm & Sleep", mood: "Cool Down & Soothe", notes: "Cucumber, Green Scent, Sea Breeze, Lavender", type: ScentsType.CANDLE }
];

// List 2: Perfumes (Item Id from PDF)
export const PERFUMES: Scent[] = [
  { number: "1", code: "MRF-1700015", name: "Terra Gold", category: "Luxury & Grounding", mood: "Stability & Confidence", notes: "Orange, Grapefruit, Black Pepper, Cedarwood", type: ScentsType.PERFUME, gender: "Male", similarTo: "Hermes Terre d'Hermes" },
  { number: "2", code: "MRF-1700032", name: "Azure Mist", category: "Focus & Clarity", mood: "Refresh & Revitalize", notes: "Marine Notes, Lemon, Jasmine, Amber", type: ScentsType.PERFUME, gender: "Male", similarTo: "Acqua di Gio" },
  { number: "4", code: "MRF-1700035", name: "Amethyst Bloom", category: "Calm & Sleep", mood: "Soothe & Dream", notes: "Violet, Vanilla, Pink Grapefruit, Iris", type: ScentsType.PERFUME, gender: "Female", similarTo: "Bvlgari Omnia Amethyste" },
  { number: "5", code: "MRF-1700045", name: "Gardenia Glow", category: "Happy & Social", mood: "Radiance & Joy", notes: "Gardenia, Tuberose, Pear, Brown Sugar", type: ScentsType.PERFUME, gender: "Female", similarTo: "Gucci Flora Gorgeous Gardenia" },
  { number: "6", code: "MRF-1700048", name: "Sicilian Breeze", category: "Happy & Social", mood: "Energy & Light", notes: "Sicilian Lemon, Green Apple, Cedar, Musk", type: ScentsType.PERFUME, gender: "Female", similarTo: "D&G Light Blue" },
  { number: "9", code: "MRF-1700087", name: "Crystal Peony", category: "Love & Comfort", mood: "Softness & Grace", notes: "Pomegranate, Peony, Lotus, Amber", type: ScentsType.PERFUME, gender: "Female", similarTo: "Versace Bright Crystal" },
  { number: "10", code: "MRF-1700814", name: "Blushing Bouquet", category: "Love & Comfort", mood: "Romance & Sweetness", notes: "Sweet Rose, Violet, Mandarin, Musk", type: ScentsType.PERFUME, gender: "Female", similarTo: "Miss Dior Cherie" },
  { number: "11", code: "MRF-1700942", name: "Midnight Storm", category: "Luxury & Grounding", mood: "Confidence & Power", notes: "Bergamot, Sichuan Pepper, Ambroxan, Patchouli", type: ScentsType.PERFUME, gender: "Male", similarTo: "Dior Sauvage" },
  { number: "13", code: "MRF-1701309", name: "Tender Pink", category: "Happy & Social", mood: "Optimism & Softness", notes: "Grapefruit, Quince, Hyacinth, Jasmine", type: ScentsType.PERFUME, gender: "Female", similarTo: "Chance Eau Tendre" },
  { number: "14", code: "MRF-1701335", name: "Leather Ember", category: "Luxury & Grounding", mood: "Warmth & Intensity", notes: "Leather, Violet, Nutmeg, Mandarin", type: ScentsType.PERFUME, gender: "Male", similarTo: "Dior Fahrenheit" },
  { number: "15", code: "MRF-1701442", name: "Parisian Chic", category: "Love & Comfort", mood: "Elegance & Balance", notes: "Orange, Patchouli, Turkish Rose, Jasmine", type: ScentsType.PERFUME, gender: "Female", similarTo: "Chanel Coco Mademoiselle" },
  { number: "16", code: "MRF-1702102", name: "Pure Unity", category: "Focus & Clarity", mood: "Balance & Harmony", notes: "Green Tea, Lemon, Papaya, Violet", type: ScentsType.PERFUME, gender: "Unisex", similarTo: "CK One" },
  { number: "19", code: "MRF-17510168", name: "Alpine Stream", category: "Focus & Clarity", mood: "Cool & Revitalize", notes: "Green Tea, Blackcurrant, Bergamot, Musk", type: ScentsType.PERFUME, gender: "Unisex", similarTo: "Creed Silver Mountain Water" },
  { number: "20", code: "MRF-1759004", name: "Royal Success", category: "Luxury & Grounding", mood: "Power & Focus", notes: "Pineapple, Birch Wood, Blackcurrant, Musk", type: ScentsType.PERFUME, gender: "Male", similarTo: "Creed Aventus" },
  { number: "23", code: "MRF-1759084", name: "Glamour Pop", category: "Happy & Social", mood: "Playful & Confident", notes: "Passionfruit, Peony, Vanilla Orchid, Pine", type: ScentsType.PERFUME, gender: "Female", similarTo: "VS Bombshell" },
  { number: "24", code: "MRF-1759088", name: "Secret Garden", category: "Calm & Sleep", mood: "Softness & Peace", notes: "Honeysuckle, Gala Apple, Jasmine, Musk", type: ScentsType.PERFUME, gender: "Female", similarTo: "VS Secret Charm" },
  { number: "25", code: "MRF-1759107", name: "Velvet Vanilla", category: "Love & Comfort", mood: "Safety & Warmth", notes: "Pure Vanilla, Orchid, Amber, Musk", type: ScentsType.PERFUME, gender: "Female", similarTo: "VS Vanilla Lace" },
  { number: "29", code: "MRF-1759146", name: "Victory Gold", category: "Happy & Social", mood: "Energy & Triumph", notes: "Lemon, Pink Pepper, Lavender, Vanilla", type: ScentsType.PERFUME, gender: "Male", similarTo: "Invictus Victory" },
  { number: "32", code: "MRF-1759182", name: "Mythic Amber", category: "Love & Comfort", mood: "Passion & Desire", notes: "Mint Leaf, Green Apple, Tonka Bean, Vanilla", type: ScentsType.PERFUME, gender: "Male", similarTo: "Versace Eros" },
  { number: "33", code: "MRF-1759591", name: "Pink Cloud", category: "Love & Comfort", mood: "Sweetness & Nostalgia", notes: "Sparkling Pear, Vanilla Orchid, Sugar, Musk", type: ScentsType.PERFUME, gender: "Female", similarTo: "Pink Chiffon" },
  { number: "34", code: "MRF-1759747", name: "Freedom Floral", category: "Happy & Social", mood: "Boldness & Freedom", notes: "Lavender, Orange Blossom, Vanilla, Cedar", type: ScentsType.PERFUME, gender: "Female", similarTo: "YSL Libre" },
  { number: "35", code: "MRF-1759797", name: "Dark Matter", category: "Luxury & Grounding", mood: "Mystery & Depth", notes: "Blackcurrant, Agarwood (Oud), Narcissus", type: ScentsType.PERFUME, gender: "Female", similarTo: "LV Matière Noire" },
  { number: "36", code: "MRF-1759839", name: "Nomad's Shadow", category: "Luxury & Grounding", mood: "Meditation & Infinity", notes: "Oud Wood, Benzoin, Raspberry, Incense", type: ScentsType.PERFUME, gender: "Unisex", similarTo: "LV Ombre Nomade" },
  { number: "37", code: "MRF-1759913", name: "Amber Paradox", category: "Happy & Social", mood: "Warmth & Innovation", notes: "Neroli, Amber, White Musk, Pear", type: ScentsType.PERFUME, gender: "Female", similarTo: "Prada Paradoxe" }
];

export const ALL_SCENTS = [...PERFUMES, ...CANDLE_SCENTS];

export const QUESTIONS = [
  {
    id: 1,
    text: "Are you looking for a masculine, feminine, or unisex fragrance composition?",
    options: ["Masculine", "Feminine", "Unisex"]
  },
  {
    id: 2,
    text: "How would you describe your current mood or the vibe you want to achieve?",
    options: ["Energetic & Playful", "Calm & Meditative", "Romantic & Passionate", "Focused & Sharp", "Luxurious & Sophisticated"]
  },
  {
    id: 3,
    text: "Which scent family naturally appeals to you the most?",
    options: ["Fresh & Citrusy", "Floral & Romantic", "Woody & Earthy", "Sweet & Gourmand", "Spicy & Exotic"]
  },
  {
    id: 4,
    text: "Where do you envision yourself wearing this scent?",
    options: ["A professional work setting", "A cozy night at home", "An outdoor adventure", "A glamorous evening event", "A casual daily outing"]
  },
  {
    id: 5,
    text: "If you were a season, which one would you be?",
    options: ["Spring (Fresh, blooming)", "Summer (Bright, warm)", "Autumn (Cozy, spicy)", "Winter (Crisp, deep)"]
  },
  {
    id: 6,
    text: "How do you want to be perceived by others?",
    options: ["Approachable & Friendly", "Mysterious & Alluring", "Confident & Powerful", "Clean & Put-together"]
  },
  {
    id: 7,
    text: "Which of these textures resonates with you?",
    options: ["Smooth Silk", "Crisp Linen", "Warm Velvet", "Cool Stone", "Soft Cashmere"]
  },
  {
    id: 8,
    text: "What is your primary goal with this fragrance?",
    options: ["To boost my energy", "To help me relax/sleep", "To feel attractive", "To ground myself", "To spark creativity"]
  }
];
