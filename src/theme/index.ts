import type { Theme } from '@mui/material';
import { createTheme, responsiveFontSizes } from '@mui/material/styles';
import overrides from './overrides';

const createAppTheme = (): Theme => {
  const theme = createTheme();

  theme.components = overrides(theme);

  return responsiveFontSizes(theme);
};

export default createAppTheme;
