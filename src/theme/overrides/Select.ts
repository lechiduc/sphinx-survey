import type { Theme, ThemeOptions } from '@mui/material/styles';

const Select = (_theme: Theme): ThemeOptions['components'] => {
  return {
    MuiSelect: {
      defaultProps: {
        size: 'small',
        MenuProps: {
          disableAutoFocusItem: true,
          PaperProps: {},
        },
      },
    },
  };
};

export default Select;
