import type { Theme, ThemeOptions } from '@mui/material/styles';

const TextField = (_theme: Theme): ThemeOptions['components'] => {
  return {
    MuiTextField: {
      defaultProps: {
        size: 'small',
        variant: 'outlined',
      },
    },
  };
};

export default TextField;
