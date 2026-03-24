# flux-react-native-assets

**Shared resources for the Flux React Native Design System.** Centralized strings, icons, and localization — type-safe and multi-language ready.

`flux-react-native-assets` provides all non-code resources consumed by Flux components and apps: localized strings, icon mappings, and an i18n provider with RTL support.

**23 localized strings | 24 icon mappings | 2 languages (EN/AR) | RTL support**

---

## Features

- **Type-safe string access** — Structured accessor with autocompletion
- **24 icon constants** — Ionicons mappings organized by category
- **i18n provider** — React Context-based with automatic RTL detection
- **2 languages** — English (LTR) and Arabic (RTL) out of the box
- **RTL support** — Automatic layout direction via `I18nManager`

---

## Installation

```bash
npm install @anthropic-flux/react-native-assets
# or
yarn add @anthropic-flux/react-native-assets
```

**Peer dependencies:** `react`, `react-native`

---

## Quick Start

Wrap your app with the i18n provider:

```tsx
import { FluxI18nProvider } from '@anthropic-flux/react-native-assets';

export default function App() {
  return (
    <FluxI18nProvider>
      <YourApp />
    </FluxI18nProvider>
  );
}
```

Use strings and icons in components:

```tsx
import { useFluxStrings, FluxImages } from '@anthropic-flux/react-native-assets';

function LoginScreen() {
  const strings = useFluxStrings();

  return (
    <>
      <Text>{strings.auth.login}</Text>
      <FluxIcon source="ionicon" name={FluxImages.Navigation.home} />
    </>
  );
}
```

---

## Localized Strings

### useFluxStrings Hook

Returns a structured object with all localized strings for the current locale:

```tsx
const strings = useFluxStrings();
strings.common.ok       // "OK"
strings.auth.login      // "Login"
strings.dashboard.title // "Dashboard"
strings.payment.pay     // "Pay"
```

### String Categories

| Category | Keys |
|----------|------|
| **Common** | `ok`, `cancel`, `done`, `save`, `delete`, `edit`, `close`, `retry`, `loading`, `error`, `success` |
| **Auth** | `login`, `logout`, `signUp`, `email`, `password`, `forgotPassword` |
| **Dashboard** | `title`, `welcome` |
| **Payment** | `title`, `amount`, `pay`, `confirmPayment` |

### Supported Languages

| Language | Code | Direction | File |
|----------|------|-----------|------|
| English | `en` | LTR | `src/i18n/locales/en.json` |
| Arabic | `ar` | RTL | `src/i18n/locales/ar.json` |

---

## i18n System

### FluxI18nProvider

React Context provider that manages the active locale and RTL direction:

```tsx
<FluxI18nProvider defaultLocale="en">
  <App />
</FluxI18nProvider>
```

### useFluxI18n Hook

Low-level hook for translation and locale management:

```tsx
import { useFluxI18n } from '@anthropic-flux/react-native-assets';

const { t, locale, isRTL, setLocale } = useFluxI18n();

t('common.ok');     // "OK"
t('auth.login');    // "Login"
locale;             // "en"
isRTL;              // false

setLocale('ar');    // Switches to Arabic, enables RTL
```

When switching to Arabic, the provider automatically calls `I18nManager.forceRTL(true)` to flip the layout direction.

---

## Icon Mappings (FluxImages)

24 icon constants mapped to Ionicons names, organized by category:

| Category | Icon | Ionicons Name |
|----------|------|---------------|
| **Navigation** | `home` | `home` |
| | `profile` | `person` |
| | `settings` | `settings` |
| | `notifications` | `notifications` |
| | `search` | `search` |
| | `back` | `arrow-back` |
| | `forward` | `arrow-forward` |
| **Editing** | `close` | `close` |
| | `check` | `checkmark` |
| | `plus` | `add` |
| | `minus` | `remove` |
| | `trash` | `trash` |
| | `edit` | `create` |
| | `share` | `share` |
| **Media** | `heart` | `heart` |
| | `star` | `star` |
| **Status** | `warning` | `warning` |
| | `error` | `close-circle` |
| | `success` | `checkmark-circle` |
| | `info` | `information-circle` |
| **Financial** | `creditCard` | `card` |
| **Security** | `lock` | `lock-closed` |
| | `eye` | `eye` |
| | `eyeSlash` | `eye-off` |

```tsx
import { FluxImages } from '@anthropic-flux/react-native-assets';

<Ionicons name={FluxImages.Navigation.home} size={24} />
<Ionicons name={FluxImages.Status.success} size={20} color="green" />
```

---

## File Structure

```
flux-react-native-assets/
|-- package.json
|-- tsconfig.json
|-- LICENSE
|-- README.md
+-- src/
    |-- index.ts                          (barrel exports)
    |-- i18n/
    |   |-- FluxI18nProvider.tsx           (React Context + RTL manager)
    |   |-- useFluxI18n.ts                (translation hook)
    |   +-- locales/
    |       |-- en.json                   (23 English strings)
    |       +-- ar.json                   (23 Arabic strings)
    |-- strings/
    |   +-- FluxStrings.ts                (type-safe structured accessor)
    +-- images/
        +-- FluxImages.ts                 (24 Ionicons mappings)
```

---

## License

MIT License - Copyright (c) 2026 Afzal Siddiqui
