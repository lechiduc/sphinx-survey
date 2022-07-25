import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import GlobalBaseline from 'components/GlobalBaseline';
import { useMemo } from 'react';
import createAppTheme from 'theme';
import SurveyForm from 'views/Survey';

const App = () => {
  const theme = useMemo(() => createAppTheme(), []);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <GlobalBaseline />
      <SurveyForm />
    </ThemeProvider>
  );
};

export default App;
