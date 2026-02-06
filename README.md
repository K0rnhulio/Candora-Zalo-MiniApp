# Candora - Personalized Scent Quiz

A Zalo Mini App that creates personalized perfume recommendations through an interactive quiz experience.

## Features

- **Interactive Quiz**: 8-question personality quiz to determine scent preferences
- **AI-Powered Recommendations**: Uses Google Gemini AI to generate personalized perfume formulas
- **Multi-language Support**: English, Vietnamese, and Russian
- **Beautiful Loading Experience**: Animated loading screen with progress indicators
- **Mobile-First Design**: Optimized for touch devices and Zalo Mini App environment

## Tech Stack

- **Framework**: React 18 + TypeScript
- **Build Tool**: Vite 5
- **Styling**: Tailwind CSS + SCSS
- **State Management**: Jotai
- **Routing**: React Router DOM
- **AI Integration**: Google Gemini API
- **Platform**: Zalo Mini App SDK

## Setup

### Prerequisites

- [Node.js](https://nodejs.org/) (v18+)
- [Zalo Mini App Extension](https://mini.zalo.me/docs/dev-tools) for VS Code

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd Candora-Zalo-MiniApp
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start development server:
   ```bash
   npm start
   ```

### Environment Variables

Create environment variables or update `app-config.json`:

- `GEMINI_API_KEY`: Google Gemini API key for AI recommendations

## Project Structure

```
src/
├── components/       # Reusable React components
│   ├── quiz-section.tsx
│   ├── layout.tsx
│   └── ...
├── pages/           # Page components
│   ├── welcome/     # Landing + Quiz page
│   ├── loading/     # Loading screen with animations
│   ├── contact/     # User info form
│   └── result/      # Personalized recommendation
├── i18n/            # Internationalization
│   └── translations.ts
├── services/        # API services
│   ├── geminiService.ts
│   └── dbService.ts
├── css/             # Stylesheets
├── hooks.ts         # Custom React hooks
├── state.ts         # Jotai state atoms
├── router.tsx       # Route configuration
└── app.ts           # App entry point
```

## Deployment

1. Login to Zalo Mini App:
   ```bash
   zmp login
   ```

2. Deploy:
   ```bash
   zmp deploy
   ```

## Customization

### Translations

Edit `src/i18n/translations.ts` to modify text content for each language.

### Loading Images

Update the `STEP_IMAGES` array in `src/pages/loading/index.tsx` to customize loading screen images.

### Theme Colors

Modify gold color palette in `tailwind.config.js`:
```js
gold: {
  50: '#fefce8',
  100: '#F9F1D8',
  300: '#fde047',
  500: '#D4AF37',
  700: '#B8860B',
  800: '#92400e',
}
```

## License

Private - All rights reserved.
