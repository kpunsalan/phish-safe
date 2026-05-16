# PhishSafe 🛡️

A cybersecurity awareness app that helps everyday people recognize and respond to phishing, smishing, and vishing attacks — before they become victims.

---

## Why PhishSafe?

Phishing attacks are no longer easy to spot. Scammers have become sophisticated, and the people most targeted — older adults and everyday users — often have the least guidance on what to look for. PhishSafe was built out of personal experience: watching family members fall victim to these attacks and believing that better awareness is the best defense.

---

## Features

- **Email Phishing Guide** — Learn what a phishing email looks like with an interactive mockup that highlights real red flags
- **Smishing Guide** — See how SMS-based scams work, with a fake text thread showing suspicious elements
- **Vishing Guide** — Read through a fake scam call transcript and learn what phrases should raise alarm bells
- **Universal Red Flags** — A quick-reference list of warning signs that apply across all attack types
- **Incident Response Walkthrough** — A step-by-step guide for people who think they may have already been targeted

---

## Intended Audience

PhishSafe is designed for everyone — but especially for people who may not be deeply familiar with cybersecurity: older adults, non-technical users, and anyone who has ever received a suspicious email, text, or phone call and wasn't sure what to do.

---

## Reporting Resources

If you or someone you know has been targeted, here are official places to report:

- **FTC:** [reportfraud.ftc.gov](https://reportfraud.ftc.gov)
- **FBI IC3:** [ic3.gov](https://www.ic3.gov)
- **CISA:** [cisa.gov/report](https://www.cisa.gov/report)

---

## License

MIT License — free to use, share, and build on.

---

*Built to protect the people we love.*

# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
