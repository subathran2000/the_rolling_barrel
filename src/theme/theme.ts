import { createTheme, type ThemeOptions } from '@mui/material/styles';

// Brick color palette with high contrast
const brickPalette = {
  primary: {
    main: '#8B2635', // Deep brick red
    light: '#B84756',
    dark: '#5D1A23',
    contrastText: '#FFF5E6'
  },
  secondary: {
    main: '#D4A574', // Warm gold/tan
    light: '#E8C9A8',
    dark: '#A67B4A',
    contrastText: '#1A0A0C'
  },
  background: {
    default: '#FFF9F5', // Warm off-white
    paper: '#FFFFFF'
  },
  text: {
    primary: '#1A0A0C', // Almost black with warm undertone
    secondary: '#4A2C2E'
  },
  accent: {
    cream: '#FFF5E6',
    charcoal: '#2C1810',
    warmGray: '#8C7B75',
    terracotta: '#C45C3E'
  }
};

const themeOptions: ThemeOptions = {
  palette: {
    mode: "light",
    primary: brickPalette.primary,
    secondary: brickPalette.secondary,
    background: brickPalette.background,
    text: brickPalette.text,
  },
  typography: {
    fontFamily:
      '"Science Gothic", "Inter", "Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontFamily: '"Science Gothic", sans-serif',
      fontWeight: 800,
      fontSize: "clamp(2.5rem, 8vw, 5rem)",
      letterSpacing: "-0.02em",
      lineHeight: 1.1,
    },
    h2: {
      fontFamily: '"Science Gothic", sans-serif',
      fontWeight: 700,
      fontSize: "clamp(2rem, 5vw, 3.5rem)",
      letterSpacing: "-0.01em",
      lineHeight: 1.2,
    },
    h3: {
      fontFamily: '"Science Gothic", sans-serif',
      fontWeight: 600,
      fontSize: "clamp(1.5rem, 4vw, 2.5rem)",
      letterSpacing: "0",
      lineHeight: 1.3,
    },
    h4: {
      fontFamily: '"Science Gothic", sans-serif',
      fontWeight: 600,
      fontSize: "clamp(1.25rem, 3vw, 1.75rem)",
      lineHeight: 1.4,
    },
    h5: {
      fontFamily: '"Science Gothic", sans-serif',
      fontWeight: 500,
      fontSize: "1.25rem",
      lineHeight: 1.4,
    },
    h6: {
      fontFamily: '"Science Gothic", sans-serif',
      fontWeight: 500,
      fontSize: "1.1rem",
      lineHeight: 1.4,
    },
    body1: {
      fontFamily: '"Science Gothic", sans-serif',
      fontSize: "1rem",
      lineHeight: 1.7,
      fontWeight: 400,
    },
    body2: {
      fontFamily: '"Science Gothic", sans-serif',
      fontSize: "0.875rem",
      lineHeight: 1.6,
      fontWeight: 400,
    },
    button: {
      fontFamily: '"Science Gothic", sans-serif',
      fontWeight: 600,
      textTransform: "none",
      letterSpacing: "0.02em",
    },
  },
  shape: {
    borderRadius: 16,
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        html: {
          scrollBehavior: "smooth",
        },
        body: {
          backgroundColor: brickPalette.background.default,
          overflowX: "hidden",
        },
        "*": {
          boxSizing: "border-box",
        },
        "::-webkit-scrollbar": {
          width: "8px",
        },
        "::-webkit-scrollbar-track": {
          background: brickPalette.background.default,
        },
        "::-webkit-scrollbar-thumb": {
          background: brickPalette.primary.main,
          borderRadius: "4px",
        },
        "::-webkit-scrollbar-thumb:hover": {
          background: brickPalette.primary.dark,
        },
        // Date/Time picker popup styling
        "::-webkit-calendar-picker-indicator": {
          cursor: "pointer",
          filter:
            "invert(26%) sepia(89%) saturate(1583%) hue-rotate(333deg) brightness(85%) contrast(93%)",
        },
        "::-webkit-datetime-edit": {
          color: brickPalette.text.primary,
        },
        "::-webkit-datetime-edit-fields-wrapper": {
          backgroundColor: "transparent",
        },
        "::-webkit-datetime-edit-text": {
          color: brickPalette.text.secondary,
        },
        "::-webkit-datetime-edit-month-field, ::-webkit-datetime-edit-day-field, ::-webkit-datetime-edit-year-field, ::-webkit-datetime-edit-hour-field, ::-webkit-datetime-edit-minute-field, ::-webkit-datetime-edit-ampm-field":
          {
            color: brickPalette.text.primary,
          },
        // Color scheme for native date/time picker
        'input[type="date"], input[type="time"]': {
          colorScheme: "light",
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 50,
          padding: "12px 32px",
          fontSize: "1rem",
          boxShadow: "none",
          transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
          "&:hover": {
            transform: "translateY(-2px)",
            boxShadow: "0 10px 40px rgba(139, 38, 53, 0.3)",
          },
        },
        contained: {
          background: `linear-gradient(135deg, ${brickPalette.primary.main} 0%, ${brickPalette.primary.dark} 100%)`,
          "&:hover": {
            background: `linear-gradient(135deg, ${brickPalette.primary.light} 0%, ${brickPalette.primary.main} 100%)`,
          },
        },
        outlined: {
          borderWidth: 2,
          "&:hover": {
            borderWidth: 2,
            backgroundColor: "rgba(139, 38, 53, 0.05)",
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 24,
          boxShadow: "0 4px 30px rgba(0, 0, 0, 0.08)",
          transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
          "&:hover": {
            transform: "translateY(-8px)",
            boxShadow: "0 20px 60px rgba(139, 38, 53, 0.15)",
          },
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: "rgba(255, 249, 245, 0.85)",
          backdropFilter: "blur(20px)",
          boxShadow: "none",
          borderBottom: "1px solid rgba(139, 38, 53, 0.1)",
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          "& .MuiOutlinedInput-root": {
            borderRadius: 12,
            transition: "all 0.3s ease",
            "&:hover": {
              boxShadow: "0 4px 20px rgba(139, 38, 53, 0.1)",
            },
            "&.Mui-focused": {
              boxShadow: "0 4px 20px rgba(139, 38, 53, 0.15)",
            },
          },
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: 50,
          fontWeight: 500,
        },
      },
    },
  },
};

// Date Picker CSS styles to be injected via global styles
export const datePickerStyles = `
  /* Date Picker Day Selection */
  .MuiPickersDay-root.Mui-selected {
    background-color: ${brickPalette.primary.main} !important;
    color: ${brickPalette.primary.contrastText} !important;
  }
  .MuiPickersDay-root.Mui-selected:hover {
    background-color: ${brickPalette.primary.dark} !important;
  }
  .MuiPickersDay-root.Mui-selected:focus {
    background-color: ${brickPalette.primary.main} !important;
  }
  .MuiPickersDay-root:hover {
    background-color: rgba(139, 38, 53, 0.1);
  }
  .MuiPickersDay-today:not(.Mui-selected) {
    border-color: ${brickPalette.primary.main} !important;
  }
  
  /* Year Selection */
  .MuiYearCalendar-root .MuiPickersYear-yearButton.Mui-selected {
    background-color: ${brickPalette.primary.main} !important;
    color: ${brickPalette.primary.contrastText} !important;
  }
  .MuiYearCalendar-root .MuiPickersYear-yearButton.Mui-selected:hover {
    background-color: ${brickPalette.primary.dark} !important;
  }
  
  /* Month Selection */
  .MuiMonthCalendar-root .MuiPickersMonth-monthButton.Mui-selected {
    background-color: ${brickPalette.primary.main} !important;
    color: ${brickPalette.primary.contrastText} !important;
  }
  .MuiMonthCalendar-root .MuiPickersMonth-monthButton.Mui-selected:hover {
    background-color: ${brickPalette.primary.dark} !important;
  }
  
  /* Time Clock */
  .MuiClock-pin {
    background-color: ${brickPalette.primary.main} !important;
  }
  .MuiClockPointer-root {
    background-color: ${brickPalette.primary.main} !important;
  }
  .MuiClockPointer-thumb {
    background-color: ${brickPalette.primary.main} !important;
    border-color: ${brickPalette.primary.main} !important;
  }
  .MuiClockNumber-root.Mui-selected {
    background-color: ${brickPalette.primary.main} !important;
    color: ${brickPalette.primary.contrastText} !important;
  }
  
  /* Digital Clock */
  .MuiDigitalClock-item.Mui-selected {
    background-color: ${brickPalette.primary.main} !important;
    color: ${brickPalette.primary.contrastText} !important;
  }
  .MuiDigitalClock-item.Mui-selected:hover {
    background-color: ${brickPalette.primary.dark} !important;
  }
  .MuiMultiSectionDigitalClockSection-item.Mui-selected {
    background-color: ${brickPalette.primary.main} !important;
    color: ${brickPalette.primary.contrastText} !important;
  }
  .MuiMultiSectionDigitalClockSection-item.Mui-selected:hover {
    background-color: ${brickPalette.primary.dark} !important;
  }
  
  /* Calendar Header */
  .MuiPickersCalendarHeader-switchViewIcon {
    color: ${brickPalette.primary.main};
  }
  .MuiPickersArrowSwitcher-button {
    color: ${brickPalette.primary.main};
  }
  .MuiPickersArrowSwitcher-button:hover {
    background-color: rgba(139, 38, 53, 0.1);
  }
  
  /* Picker Popper */
  .MuiPickersPopper-paper {
    border-radius: 16px !important;
    box-shadow: 0 8px 32px rgba(139, 38, 53, 0.15) !important;
  }
`;

export const theme = createTheme(themeOptions);
export { brickPalette };
