import type {} from '@mui/lab/themeAugmentation';
import type { Theme } from '@mui/material/styles';
import merge from 'lodash.merge';

import TextField from './TextField';
import Button from './Button';
import Select from './Select';

const overrides = (theme: Theme) =>
  merge({}, TextField(theme), Button(theme), Select(theme));

export default overrides;
