import type { Theme, ThemeOptions } from '@mui/material/styles';

const Button = (_theme: Theme): ThemeOptions['components'] => {
  return {
    MuiButton: {
      defaultProps: {
        variant: 'contained',
        size: 'small',
      },
      styleOverrides: {
        root: {
          textTransform: 'none',
        },
      },
    },
  };
};

export default Button;
