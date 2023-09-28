import * as colors from '@mui/material/colors';

export const palettes = {
  "mode": "light",
  "primary": {
      "50": "#e0f2f1",
      "100": "#b2dfdb",
      "200": "#80cbc4",
      "300": "#4db6ac",
      "400": "#26a69a",
      "500": "#009688",
      "600": "#00897b",
      "700": "#00796b",
      "800": "#00695c",
      "900": "#004d40",
      "A100": "#a7ffeb",
      "A200": "#64ffda",
      "A400": "#1de9b6",
      "A700": "#00bfa5",
      "main": "#009688",
      "light": "#4db6ac",
      "dark": "#00796b",
      "contrastText": "#fff"
  },
  "secondary": {
      "main": "#64b5f6",
      "light": "rgb(131, 195, 247)",
      "dark": "rgb(70, 126, 172)",
      "contrastText": "rgba(0, 0, 0, 0.87)"
  },
  "error": {
      "main": "#d32f2f",
      "light": "#ef5350",
      "dark": "#c62828",
      "contrastText": "#fff"
  },
  "warning": {
      "main": "#ed6c02",
      "light": "#ff9800",
      "dark": "#e65100",
      "contrastText": "#fff"
  },
  "info": {
      "main": "#0288d1",
      "light": "#03a9f4",
      "dark": "#01579b",
      "contrastText": "#fff"
  },
  "success": {
      "main": "#2e7d32",
      "light": "#4caf50",
      "dark": "#1b5e20",
      "contrastText": "#fff"
  },
  "contrastThreshold": 3,
  "tonalOffset": 0.2,
  "text": {
      "primary": "rgba(0, 0, 0, 0.87)",
      "secondary": "rgba(0, 0, 0, 0.6)",
      "disabled": "rgba(0, 0, 0, 0.38)"
  },
  "divider": "rgba(0, 0, 0, 0.12)",
  "background": {
      "paper": "#fff",
      "default": "#fff"
  },
  "action": {
      "active": "rgba(0, 0, 0, 0.54)",
      "hover": "rgba(0, 0, 0, 0.04)",
      "hoverOpacity": 0.04,
      "selected": "rgba(0, 0, 0, 0.08)",
      "selectedOpacity": 0.08,
      "disabled": "rgba(0, 0, 0, 0.26)",
      "disabledBackground": "rgba(0, 0, 0, 0.12)",
      "disabledOpacity": 0.38,
      "focus": "rgba(0, 0, 0, 0.12)",
      "focusOpacity": 0.12,
      "activatedOpacity": 0.12
  },
  ...colors
}

export const spacing = (value: number) => `${8 * value}px`;