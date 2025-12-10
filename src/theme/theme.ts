import { createTheme, type ThemeOptions } from '@mui/material/styles';

// Consistent transition timing for all animations
const transitions = {
  fast: "0.2s cubic-bezier(0.4, 0, 0.2, 1)",
  normal: "0.3s cubic-bezier(0.4, 0, 0.2, 1)",
  smooth: "0.4s cubic-bezier(0.4, 0, 0.2, 1)",
  slow: "0.6s cubic-bezier(0.22, 1, 0.36, 1)",
};

// Brick color palette with high contrast
const brickPalette = {
  primary: {
    main: "#FFFFFF", // Pure white for high contrast
    light: "#E0E0E0",
    dark: "#B0B0B0",
    contrastText: "#000000",
  },
  secondary: {
    main: "#2A2A2A", // Dark gray
    light: "#404040",
    dark: "#151515",
    contrastText: "#FFFFFF",
  },
  background: {
    default: "#050505", // Deep smooth black
    paper: "#0F0F0F",
  },
  text: {
    primary: "#FFFFFF",
    secondary: "#888888",
    disabled: "#555555",
  },
  accent: {
    cream: "#1A1A1A",
    charcoal: "#000000",
    warmGray: "#333333",
    terracotta: "#FFFFFF",
  },
  // Semantic colors for better UX
  success: "#4CAF50",
  error: "#f44336",
  warning: "#ff9800",
  info: "#2196f3",
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
      fontWeight: 880,
      fontSize: "clamp(3rem, 7vw, 5.6rem)",
      letterSpacing: "-0.03em",
      lineHeight: 1.03,
    },
    h2: {
      fontFamily: '"Science Gothic", sans-serif',
      fontWeight: 820,
      fontSize: "clamp(2.4rem, 5.6vw, 4rem)",
      letterSpacing: "-0.02em",
      lineHeight: 1.12,
    },
    h3: {
      fontFamily: '"Science Gothic", sans-serif',
      fontWeight: 760,
      fontSize: "clamp(1.8rem, 4.6vw, 2.9rem)",
      letterSpacing: "-0.015em",
      lineHeight: 1.18,
    },
    h4: {
      fontFamily: '"Science Gothic", sans-serif',
      fontWeight: 700,
      fontSize: "clamp(1.45rem, 3.6vw, 2.15rem)",
      lineHeight: 1.24,
    },
    h5: {
      fontFamily: '"Science Gothic", sans-serif',
      fontWeight: 680,
      fontSize: "1.45rem",
      lineHeight: 1.24,
    },
    h6: {
      fontFamily: '"Science Gothic", sans-serif',
      fontWeight: 640,
      fontSize: "1.08rem",
      letterSpacing: "0.015em",
      lineHeight: 1.3,
    },
    subtitle1: {
      fontFamily: '"Science Gothic", sans-serif',
      fontWeight: 620,
      letterSpacing: "0.01em",
    },
    subtitle2: {
      fontFamily: '"Science Gothic", sans-serif',
      fontWeight: 600,
      letterSpacing: "0.02em",
    },
    body1: {
      fontFamily: '"Science Gothic", "Inter", sans-serif',
      fontSize: "1rem",
      lineHeight: 1.7,
      fontWeight: 460,
      letterSpacing: "0.012em",
      fontFeatureSettings: '"cv02" on, "cv03" on, "cv04" on',
    },
    body2: {
      fontFamily: '"Science Gothic", "Inter", sans-serif',
      fontSize: "0.95rem",
      lineHeight: 1.64,
      fontWeight: 440,
      letterSpacing: "0.012em",
      fontFeatureSettings: '"cv02" on, "cv03" on, "cv04" on',
    },
    button: {
      fontFamily: '"Science Gothic", sans-serif',
      fontWeight: 760,
      textTransform: "uppercase",
      letterSpacing: "0.12em",
    },
    overline: {
      fontFamily: '"Science Gothic", sans-serif',
      fontWeight: 640,
      letterSpacing: "0.26em",
    },
  },
  shape: {
    borderRadius: 4,
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        html: {
          scrollBehavior: "smooth",
        },
        body: {
          backgroundColor: brickPalette.background.default,
          backgroundImage:
            "radial-gradient(1200px 800px at 15% 20%, rgba(255, 255, 255, 0.02), transparent), radial-gradient(1000px 600px at 90% 0%, rgba(255, 255, 255, 0.03), transparent), linear-gradient(180deg, #050505 0%, #0A0A0A 100%)",
          overflowX: "hidden",
          color: brickPalette.text.primary,
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
          background: "rgba(255, 255, 255, 0.2)",
          borderRadius: "4px",
        },
        "::-webkit-scrollbar-thumb:hover": {
          background: "rgba(255, 255, 255, 0.35)",
        },
        // Date/Time picker popup styling
        "::-webkit-calendar-picker-indicator": {
          cursor: "pointer",
          filter: "invert(1)",
        },
        "::-webkit-datetime-edit": {
          color: brickPalette.text.primary,
        },
        "::-webkit-datetime-edit-fields-wrapper": {
          backgroundColor: "rgba(255, 255, 255, 0.1)",
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
          colorScheme: "dark",
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
          transition: transitions.normal,
          willChange: "transform",
          "&:hover": {
            transform: "translateY(-2px)",
            boxShadow: "0 10px 40px rgba(255, 255, 255, 0.15)",
          },
          "&:active": {
            transform: "translateY(0)",
          },
        },
        contained: {
          background: `linear-gradient(135deg, ${brickPalette.primary.main} 0%, ${brickPalette.primary.dark} 100%)`,
          color: brickPalette.primary.contrastText,
          "&:hover": {
            background: `linear-gradient(135deg, ${brickPalette.primary.light} 0%, ${brickPalette.primary.main} 100%)`,
          },
        },
        outlined: {
          borderWidth: 2,
          borderColor: "rgba(255, 255, 255, 0.3)",
          color: brickPalette.text.primary,
          "&:hover": {
            borderWidth: 2,
            borderColor: "rgba(255, 255, 255, 0.6)",
            backgroundColor: "rgba(255, 255, 255, 0.05)",
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 4,
          boxShadow: "0 20px 70px rgba(0, 0, 0, 0.3)",
          transition: transitions.smooth,
          background: "linear-gradient(145deg, #0F0F0F, #0A0A0A)",
          border: "1px solid rgba(255, 255, 255, 0.06)",
          backdropFilter: "blur(10px)",
          willChange: "transform, box-shadow",
          "&:hover": {
            transform: "translateY(-8px)",
            boxShadow: "0 25px 80px rgba(0, 0, 0, 0.5)",
            borderColor: "rgba(255, 255, 255, 0.12)",
          },
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundImage: "linear-gradient(160deg, #0F0F0F, #0A0A0A)",
          border: "1px solid rgba(255, 255, 255, 0.06)",
          backdropFilter: "blur(12px)",
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: "rgba(10, 10, 10, 0.85)",
          backdropFilter: "blur(20px)",
          boxShadow: "none",
          borderBottom: "1px solid rgba(255, 255, 255, 0.08)",
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          "& .MuiOutlinedInput-root": {
            borderRadius: 4,
            transition: transitions.normal,
            backgroundColor: "rgba(255, 255, 255, 0.03)",
            "& fieldset": {
              borderColor: "rgba(255, 255, 255, 0.35)",
              borderWidth: "1px",
              transition: transitions.fast,
            },
            "&:hover": {
              boxShadow: "0 4px 20px rgba(0, 0, 0, 0.3)",
              "& fieldset": {
                borderColor: "rgba(255, 255, 255, 0.7)",
              },
            },
            "&.Mui-focused": {
              boxShadow: "0 4px 20px rgba(0, 0, 0, 0.4)",
              "& fieldset": {
                borderColor: "#FFFFFF",
                borderWidth: "2px",
              },
            },
            "&.Mui-error": {
              "& fieldset": {
                borderColor: brickPalette.error,
              },
            },
          },
          "& .MuiInputLabel-root": {
            color: "rgba(255, 255, 255, 0.6)",
            transition: transitions.fast,
            "&.Mui-focused": {
              color: brickPalette.primary.main,
            },
            "&.Mui-error": {
              color: brickPalette.error,
            },
          },
          "& .MuiInputBase-input": {
            color: "#FFFFFF",
            "&::placeholder": {
              color: "rgba(255, 255, 255, 0.4)",
              opacity: 1,
            },
          },
          "& .MuiFormHelperText-root": {
            color: "rgba(255, 255, 255, 0.5)",
            marginTop: "6px",
            fontSize: "0.8rem",
            "&.Mui-error": {
              color: brickPalette.error,
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
    MuiSelect: {
      styleOverrides: {
        root: {
          borderRadius: 4,
          transition: transitions.normal,
          "& .MuiOutlinedInput-notchedOutline": {
            borderColor: "rgba(255, 255, 255, 0.1)",
            transition: transitions.fast,
          },
          "&:hover .MuiOutlinedInput-notchedOutline": {
            borderColor: "rgba(255, 255, 255, 0.25)",
          },
          "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderColor: "rgba(255, 255, 255, 0.5)",
            borderWidth: "2px",
          },
          "& .MuiSelect-select": {
            color: "#FFFFFF",
          },
          "& .MuiSelect-icon": {
            color: "rgba(255, 255, 255, 0.6)",
            transition: transitions.fast,
          },
          "&:hover .MuiSelect-icon": {
            color: "rgba(255, 255, 255, 0.9)",
          },
        },
      },
    },
    MuiFormControl: {
      styleOverrides: {
        root: {
          "& .MuiInputLabel-root": {
            color: "rgba(255, 255, 255, 0.6)",
            "&.Mui-focused": {
              color: brickPalette.primary.main,
            },
            "&.Mui-error": {
              color: brickPalette.error,
            },
          },
          "& .MuiFormHelperText-root": {
            color: "rgba(255, 255, 255, 0.5)",
            "&.Mui-error": {
              color: brickPalette.error,
            },
          },
        },
      },
    },
    MuiMenu: {
      styleOverrides: {
        paper: {
          backgroundColor: "#0F0F0F",
          border: "1px solid rgba(255, 255, 255, 0.1)",
          boxShadow: "0 8px 32px rgba(0, 0, 0, 0.5)",
          borderRadius: 4,
        },
      },
    },
    MuiMenuItem: {
      styleOverrides: {
        root: {
          color: "#FFFFFF",
          transition: transitions.fast,
          "&:hover": {
            backgroundColor: "rgba(255, 255, 255, 0.08)",
          },
          "&.Mui-selected": {
            backgroundColor: "rgba(255, 255, 255, 0.12)",
            "&:hover": {
              backgroundColor: "rgba(255, 255, 255, 0.16)",
            },
          },
        },
      },
    },
    MuiAlert: {
      styleOverrides: {
        root: {
          borderRadius: 4,
          backdropFilter: "blur(10px)",
        },
        standardSuccess: {
          backgroundColor: "rgba(76, 175, 80, 0.15)",
          color: brickPalette.success,
          border: `1px solid ${brickPalette.success}40`,
        },
        standardError: {
          backgroundColor: "rgba(244, 67, 54, 0.15)",
          color: brickPalette.error,
          border: `1px solid ${brickPalette.error}40`,
        },
        standardWarning: {
          backgroundColor: "rgba(255, 152, 0, 0.15)",
          color: brickPalette.warning,
          border: `1px solid ${brickPalette.warning}40`,
        },
        standardInfo: {
          backgroundColor: "rgba(33, 150, 243, 0.15)",
          color: brickPalette.info,
          border: `1px solid ${brickPalette.info}40`,
        },
      },
    },
    MuiCircularProgress: {
      styleOverrides: {
        root: {
          color: brickPalette.primary.main,
        },
      },
    },
    MuiLink: {
      styleOverrides: {
        root: {
          color: brickPalette.text.secondary,
          textDecoration: "none",
          transition: transitions.fast,
          "&:hover": {
            color: brickPalette.primary.main,
          },
        },
      },
    },
    MuiDivider: {
      styleOverrides: {
        root: {
          borderColor: "rgba(255, 255, 255, 0.08)",
        },
      },
    },
    MuiIconButton: {
      styleOverrides: {
        root: {
          color: brickPalette.text.secondary,
          transition: transitions.normal,
          "&:hover": {
            color: brickPalette.primary.main,
            backgroundColor: "rgba(255, 255, 255, 0.08)",
            transform: "scale(1.1)",
          },
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
    background-color: rgba(255, 255, 255, 0.1);
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
    background-color: rgba(255, 255, 255, 0.1);
  }
  
  /* Picker Popper */
  .MuiPickersPopper-paper {
    border-radius: 16px !important;
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.5) !important;
    background-color: #0F0F0F !important;
    border: 1px solid rgba(255, 255, 255, 0.1) !important;
  }
  
  /* Picker text colors */
  .MuiDayCalendar-weekDayLabel {
    color: rgba(255, 255, 255, 0.6) !important;
  }
  .MuiPickersDay-root {
    color: #FFFFFF !important;
  }
  .MuiPickersCalendarHeader-label {
    color: #FFFFFF !important;
  }
  
  /* Picker Layout */
  .MuiPickersLayout-root {
    background-color: #0F0F0F !important;
    color: #FFFFFF !important;
  }
  
  /* Date Calendar */
  .MuiDateCalendar-root {
    background-color: #0F0F0F !important;
    color: #FFFFFF !important;
  }
  
  /* Year and Month buttons */
  .MuiPickersYear-yearButton {
    color: #FFFFFF !important;
  }
  .MuiPickersYear-yearButton:hover {
    background-color: rgba(255, 255, 255, 0.1) !important;
  }
  .MuiPickersMonth-monthButton {
    color: #FFFFFF !important;
  }
  .MuiPickersMonth-monthButton:hover {
    background-color: rgba(255, 255, 255, 0.1) !important;
  }
  
  /* Time Clock */
  .MuiTimeClock-root {
    background-color: #0F0F0F !important;
  }
  .MuiClockNumber-root {
    color: #FFFFFF !important;
  }
  
  /* Digital Clock */
  .MuiDigitalClock-root {
    background-color: #0F0F0F !important;
  }
  .MuiDigitalClock-item {
    color: #FFFFFF !important;
  }
  .MuiDigitalClock-item:hover {
    background-color: rgba(255, 255, 255, 0.1) !important;
  }
  
  /* Multi Section Digital Clock */
  .MuiMultiSectionDigitalClock-root {
    background-color: #0F0F0F !important;
  }
  .MuiMultiSectionDigitalClockSection-root .MuiMenuItem-root {
    color: #FFFFFF !important;
  }
  .MuiMultiSectionDigitalClockSection-item {
    color: #FFFFFF !important;
  }
  .MuiMultiSectionDigitalClockSection-item:hover {
    background-color: rgba(255, 255, 255, 0.1) !important;
  }
`;

export const theme = createTheme(themeOptions);
export { brickPalette, transitions };
