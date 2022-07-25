import type {} from '@mui/lab/themeAugmentation';
import type { Theme } from '@mui/material/styles';
import merge from 'lodash.merge';

import TextField from './TextField';
import Button from './Button';

const overrides = (theme: Theme) => merge({}, TextField(theme), Button(theme));

export default overrides;
