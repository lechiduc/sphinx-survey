import type { Theme } from '@mui/material';
import { createTheme, responsiveFontSizes } from '@mui/material/styles';
import overrides from './overrides';
import light from './palettes/light';

const createAppTheme = (): Theme => {
  const theme = createTheme(light);

  theme.components = overrides(theme);

  return responsiveFontSizes(theme);
};

export default createAppTheme;
