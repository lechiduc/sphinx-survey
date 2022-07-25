import type { ThemeOptions } from '@mui/material';

const background = {
  default: '#F9FAFC',
  paper: '#FFFFFF',
};

const primary = {
  main: '#EF4036',
  light: '#FA9F85',
  dark: '#AC1B2B',
  contrastText: '#FFFFFF',
};

const secondary = {
  main: '#61D836',
  light: '#B2F385',
  dark: '#2B9B1B',
  contrastText: '#FFFFFF',
};

const success = {
  main: '#61D836',
  light: '#B2F385',
  dark: '#2B9B1B',
  contrastText: '#FFFFFF',
};

const info = {
  main: '#00A1FF',
  light: '#66D9FF',
  dark: '#005DB7',
  contrastText: '#FFFFFF',
};

const warning = {
  main: '#FFD400',
  light: '#FFEA66',
  dark: '#B79200',
  contrastText: '#FFFFFF',
};

const error = {
  main: '#EF5A2D',
  light: '#FAAE80',
  dark: '#AC2316',
  contrastText: '#FFFFFF',
};

const text = {
  primary: '#121828',
  secondary: '#65748B',
  disabled: 'rgba(55, 65, 81, 0.48)',
};

const lightThemeOptions: ThemeOptions = {
  components: {},
  palette: {
    background,
    error,
    info,
    mode: 'light',
    primary,
    secondary,
    success,
    text,
    warning,
  },
  shadows: [
    'none',
    '0px 1px 1px rgba(100, 116, 139, 0.06), 0px 1px 2px rgba(100, 116, 139, 0.1)',
    '0px 1px 2px rgba(100, 116, 139, 0.12)',
    '0px 1px 4px rgba(100, 116, 139, 0.12)',
    '0px 1px 5px rgba(100, 116, 139, 0.12)',
    '0px 1px 6px rgba(100, 116, 139, 0.12)',
    '0px 2px 6px rgba(100, 116, 139, 0.12)',
    '0px 3px 6px rgba(100, 116, 139, 0.12)',
    '0px 2px 4px rgba(31, 41, 55, 0.06), 0px 4px 6px rgba(100, 116, 139, 0.12)',
    '0px 5px 12px rgba(100, 116, 139, 0.12)',
    '0px 5px 14px rgba(100, 116, 139, 0.12)',
    '0px 5px 15px rgba(100, 116, 139, 0.12)',
    '0px 6px 15px rgba(100, 116, 139, 0.12)',
    '0px 7px 15px rgba(100, 116, 139, 0.12)',
    '0px 8px 15px rgba(100, 116, 139, 0.12)',
    '0px 9px 15px rgba(100, 116, 139, 0.12)',
    '0px 10px 15px rgba(100, 116, 139, 0.12)',
    '0px 12px 22px -8px rgba(100, 116, 139, 0.25)',
    '0px 13px 22px -8px rgba(100, 116, 139, 0.25)',
    '0px 14px 24px -8px rgba(100, 116, 139, 0.25)',
    '0px 10px 10px rgba(31, 41, 55, 0.04), 0px 20px 25px rgba(31, 41, 55, 0.1)',
    '0px 25px 50px rgba(100, 116, 139, 0.25)',
    '0px 25px 50px rgba(100, 116, 139, 0.25)',
    '0px 25px 50px rgba(100, 116, 139, 0.25)',
    '0px 25px 50px rgba(100, 116, 139, 0.25)',
  ],
};

export default lightThemeOptions;
