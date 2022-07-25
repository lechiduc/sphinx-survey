import type {} from '@mui/lab/themeAugmentation';
import type { Theme } from '@mui/material/styles';
import merge from 'lodash.merge';

import TextField from './TextField';

const overrides = (theme: Theme) => merge({}, TextField(theme));

export default overrides;
