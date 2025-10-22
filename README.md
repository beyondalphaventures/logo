# @beyondalpha/logo

Official Beyond Alpha logo package providing TypeScript/React components and utilities for consistent branding.

[![npm version](https://img.shields.io/npm/v/@beyondalpha/logo)](https://www.npmjs.com/package/@beyondalpha/logo)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0+-blue.svg)](https://www.typescriptlang.org/)

## Installation

```bash
npm install @beyondalpha/logo
# or
yarn add @beyondalpha/logo
# or
pnpm add @beyondalpha/logo
```

## Usage

### TypeScript/JavaScript

```typescript
import {
  beyondAlphaLogo,
  beyondAlphaLogoMono,
  beyondAlphaLogoWhite,
  beyondAlphaLogoDataUrl,
  getLogo
} from '@beyondalpha/logo';

// Get color logo as SVG string
console.log(beyondAlphaLogo);

// Get logo as data URL
const dataUrl = beyondAlphaLogoDataUrl;

// Get logo with options
const monoLogo = getLogo({ variant: 'mono', format: 'svg' });
```

### React

```tsx
import { Logo } from '@beyondalpha/logo/react';

function App() {
  return (
    <div>
      {/* Color variant */}
      <Logo variant="color" size={64} />

      {/* Monochrome variant */}
      <Logo variant="mono" size={48} />

      {/* White variant for dark backgrounds */}
      <Logo variant="white" size={32} />
    </div>
  );
}
```

## API

### Logo Variants

- `color` - Full color logo (default)
- `mono` - Monochrome logo
- `white` - White logo for dark backgrounds

### Logo Formats

- `svg` - SVG string (default)
- `dataUrl` - Data URL for use in img src
- `base64` - Base64 encoded string

### React Component Props

```typescript
interface LogoProps {
  variant?: 'color' | 'mono' | 'white';
  size?: number;
  className?: string;
  style?: React.CSSProperties;
}
```

## Development

```bash
# Install dependencies
npm install

# Build the package
npm run build

# Watch mode for development
npm run dev

# Run type checking
npm run typecheck

# Generate favicon and icon files
npm run generate
```

## Logo Customization

The logo SVG can be replaced in `src/logos.ts`. Update the `getColorSVG()` function with your actual logo design.

## License

MIT © Beyond Alpha Ventures
