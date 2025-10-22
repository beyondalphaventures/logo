import type { LogoSettings, LogoOptions } from './types.js';

// Beyond Alpha logo settings
export const LOGO_SETTINGS: LogoSettings = {
  color: {
    viewBox: '0 0 100 100',
    width: 100,
    height: 100
  },
  mono: {
    strokeWidth: 2
  }
};

/**
 * Generate Beyond Alpha color SVG logo
 * TODO: Replace with actual Beyond Alpha logo design
 */
export function getColorSVG(): string {
  return `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <circle cx="50" cy="50" r="45" fill="#0A0A0A"/>
    <text x="50" y="60" font-family="Arial, sans-serif" font-size="40" font-weight="bold" fill="#D4AF37" text-anchor="middle">BA</text>
  </svg>`;
}

/**
 * Generate monochrome SVG logo
 */
export function getMonoSVG(): string {
  return `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <circle cx="50" cy="50" r="45" fill="none" stroke="black" stroke-width="2"/>
    <text x="50" y="60" font-family="Arial, sans-serif" font-size="40" font-weight="bold" fill="black" text-anchor="middle">BA</text>
  </svg>`;
}

/**
 * Generate tightly cropped color SVG logo
 */
export function getColorSVGCropped(): string {
  return getColorSVG();
}

/**
 * Generate white SVG logo (for dark backgrounds)
 */
export function getWhiteSVG(): string {
  return `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <circle cx="50" cy="50" r="45" fill="none" stroke="white" stroke-width="2"/>
    <text x="50" y="60" font-family="Arial, sans-serif" font-size="40" font-weight="bold" fill="white" text-anchor="middle">BA</text>
  </svg>`;
}

/**
 * Generate monochrome SVG for menu bar (filled, tightly cropped)
 */
export function getMenuBarSVG(): string {
  return `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <circle cx="50" cy="50" r="45" fill="currentColor"/>
    <text x="50" y="60" font-family="Arial, sans-serif" font-size="40" font-weight="bold" fill="white" text-anchor="middle">BA</text>
  </svg>`;
}

/**
 * Get logo as data URL
 */
export function getLogoDataUrl(options: LogoOptions = {}): string {
  const { variant = 'color' } = options;
  let svg = '';

  switch (variant) {
    case 'mono':
      svg = getMonoSVG();
      break;
    case 'white':
      svg = getWhiteSVG();
      break;
    default:
      svg = getColorSVG();
  }

  const base64 = btoa(unescape(encodeURIComponent(svg)));
  return `data:image/svg+xml;base64,${base64}`;
}

/**
 * Get logo as base64 string
 */
export function getLogoBase64(options: LogoOptions = {}): string {
  const { variant = 'color' } = options;
  let svg = '';

  switch (variant) {
    case 'mono':
      svg = getMonoSVG();
      break;
    case 'white':
      svg = getWhiteSVG();
      break;
    default:
      svg = getColorSVG();
  }

  return btoa(unescape(encodeURIComponent(svg)));
}

/**
 * Get logo in requested format
 */
export function getLogo(options: LogoOptions = {}): string {
  const { variant = 'color', format = 'svg' } = options;

  switch (format) {
    case 'dataUrl':
      return getLogoDataUrl({ variant });
    case 'base64':
      return getLogoBase64({ variant });
    default:
      switch (variant) {
        case 'mono':
          return getMonoSVG();
        case 'white':
          return getWhiteSVG();
        default:
          return getColorSVG();
      }
  }
}

// Export pre-generated versions for convenience
export const beyondAlphaLogo = getColorSVG();
export const beyondAlphaLogoMono = getMonoSVG();
export const beyondAlphaLogoWhite = getWhiteSVG();
export const beyondAlphaLogoDataUrl = getLogoDataUrl();
export const beyondAlphaLogoMonoDataUrl = getLogoDataUrl({ variant: 'mono' });
export const beyondAlphaLogoWhiteDataUrl = getLogoDataUrl({ variant: 'white' });
