export const theme = {
  colors: {
    // Primary — warm teal
    primary50: "#f0fdfa",
    primary100: "#ccfbf1",
    primary200: "#99f6e4",
    primary300: "#5eead4",
    primary400: "#2dd4bf",
    primary500: "#14b8a6",
    primary600: "#0d9488",
    primary700: "#0f766e",
    primary800: "#115e59",
    primary900: "#134e4a",

    // Secondary — warm amber
    secondary50: "#fffbeb",
    secondary100: "#fef3c7",
    secondary200: "#fde68a",
    secondary300: "#fcd34d",
    secondary400: "#fbbf24",
    secondary500: "#f59e0b",
    secondary600: "#d97706",
    secondary700: "#b45309",
    secondary800: "#92400e",
    secondary900: "#78350f",

    // Accent — coral
    accent50: "#fff1f2",
    accent100: "#ffe4e6",
    accent200: "#fecdd3",
    accent300: "#fda4af",
    accent400: "#fb7185",
    accent500: "#f43f5e",
    accent600: "#e11d48",
    accent700: "#be123c",
    accent800: "#9f1239",
    accent900: "#881337",

    // Success
    success50: "#f0fdf4",
    success500: "#22c55e",
    success700: "#15803d",

    // Warning
    warning50: "#fffbeb",
    warning500: "#f59e0b",
    warning700: "#b45309",

    // Error
    error50: "#fff1f2",
    error500: "#f43f5e",
    error700: "#be123c",

    // Neutrals
    neutral0: "#ffffff",
    neutral50: "#fafafa",
    neutral100: "#f5f5f5",
    neutral200: "#e5e5e5",
    neutral300: "#d4d4d4",
    neutral400: "#a3a3a3",
    neutral500: "#737373",
    neutral600: "#525252",
    neutral700: "#404040",
    neutral800: "#262626",
    neutral900: "#171717",
  },

  typography: {
    fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif",
    fontFamilyDisplay: "'Cal Sans', 'Inter', sans-serif",
    weights: {
      regular: 400,
      medium: 500,
      semibold: 600,
    },
    sizes: {
      xs: "0.75rem",
      sm: "0.875rem",
      base: "1rem",
      lg: "1.125rem",
      xl: "1.25rem",
      "2xl": "1.5rem",
      "3xl": "1.875rem",
      "4xl": "2.25rem",
      "5xl": "3rem",
    },
    lineHeights: {
      tight: "1.2",
      normal: "1.5",
      relaxed: "1.625",
    },
  },

  spacing: {
    1: "4px",
    2: "8px",
    3: "12px",
    4: "16px",
    5: "20px",
    6: "24px",
    8: "32px",
    10: "40px",
    12: "48px",
    16: "64px",
    20: "80px",
    24: "96px",
  },

  radii: {
    sm: "6px",
    md: "10px",
    lg: "16px",
    xl: "20px",
    "2xl": "24px",
    full: "9999px",
  },

  shadows: {
    sm: "0 1px 3px rgba(0,0,0,0.06), 0 1px 2px rgba(0,0,0,0.04)",
    md: "0 4px 12px rgba(0,0,0,0.08), 0 2px 4px rgba(0,0,0,0.04)",
    lg: "0 10px 30px rgba(0,0,0,0.10), 0 4px 8px rgba(0,0,0,0.06)",
    xl: "0 20px 50px rgba(0,0,0,0.12), 0 8px 16px rgba(0,0,0,0.06)",
    card: "0 2px 8px rgba(0,0,0,0.06), 0 0 1px rgba(0,0,0,0.08)",
    cardHover: "0 8px 24px rgba(0,0,0,0.10), 0 2px 6px rgba(0,0,0,0.06)",
  },

  transitions: {
    fast: "150ms ease",
    base: "220ms ease",
    slow: "350ms ease",
  },

  breakpoints: {
    sm: "640px",
    md: "768px",
    lg: "1024px",
    xl: "1280px",
    "2xl": "1536px",
  },
};

export type Theme = typeof theme;
