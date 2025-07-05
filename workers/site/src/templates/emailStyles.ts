// Brand colors and styling constants for email templates
export const EmailStyles = {
  // Brand Colors
  colors: {
    brandNavy: '#2C2A4E',
    brandRed: '#D74653',
    brandRedDark: '#9E3D51',
    brandBackground: '#EBEDF3',
    white: '#FFFFFF',
    black: '#000000',
    lightGray: '#F8F9FA',
    darkGray: '#6C757D',
    textDark: '#2C2A4E',
    textLight: '#6C757D',
  },

  // Typography
  typography: {
    fontFamily: '"Roboto", "Helvetica Neue", Helvetica, Arial, sans-serif',
    fontFamilyCondensed: '"Roboto Condensed", "Roboto", "Helvetica Neue", Helvetica, Arial, sans-serif',
    
    // Font sizes
    heading1: '30px',
    heading2: '24px',
    heading3: '20px',
    body: '16px',
    small: '14px',
    xsmall: '12px',
    
    // Font weights
    weightRegular: '400',
    weightMedium: '500',
    weightBold: '700',
    
    // Line heights
    lineHeightHeading: '1.2',
    lineHeightBody: '1.5',
  },

  // Layout dimensions
  layout: {
    maxWidth: '600px',
    headerHeight: '80px',
    footerMinHeight: '100px',
    contentPadding: '40px',
    mobilePadding: '20px',
    sectionSpacing: '32px',
  },

  // Component styles
  button: {
    primary: {
      backgroundColor: '#D74653',
      color: '#FFFFFF',
      padding: '12px 24px',
      borderRadius: '6px',
      fontSize: '16px',
      fontWeight: '600',
      textDecoration: 'none',
      display: 'inline-block',
    },
    secondary: {
      backgroundColor: 'transparent',
      color: '#D74653',
      padding: '12px 24px',
      border: '2px solid #D74653',
      borderRadius: '6px',
      fontSize: '16px',
      fontWeight: '600',
      textDecoration: 'none',
      display: 'inline-block',
    },
  },

  // Dark mode styles
  darkMode: {
    backgroundColor: '#1a1a1a',
    textColor: '#ffffff',
    mutedTextColor: '#cccccc',
    borderColor: '#333333',
    cardBackgroundColor: '#2d2d2d',
  },
}

// CSS for dark mode support
export const darkModeCSS = `
  @media (prefers-color-scheme: dark) {
    .email-container {
      background-color: ${EmailStyles.darkMode.backgroundColor} !important;
    }
    .email-content {
      background-color: ${EmailStyles.darkMode.cardBackgroundColor} !important;
      color: ${EmailStyles.darkMode.textColor} !important;
    }
    .email-text {
      color: ${EmailStyles.darkMode.textColor} !important;
    }
    .email-muted-text {
      color: ${EmailStyles.darkMode.mutedTextColor} !important;
    }
    .email-border {
      border-color: ${EmailStyles.darkMode.borderColor} !important;
    }
  }
`

// Google Fonts import
export const googleFontsImport = `
  @import url('https://fonts.googleapis.com/css2?family=Roboto+Condensed:wght@400;500&family=Roboto:wght@400;500;600;700&display=swap');
`