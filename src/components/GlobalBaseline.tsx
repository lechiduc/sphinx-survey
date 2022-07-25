import GlobalStyles from '@mui/material/GlobalStyles';
import { memo } from 'react';

const GlobalBaseline = () => {
  return (
    <GlobalStyles
      styles={{
        'html, body, #root': {
          height: '100%',
          width: '100%',
        },
        '#root': {
          display: 'flex',
          flex: '1 1 auto',
          flexDirection: 'column',
        },
        '#nprogress': {
          pointerEvents: 'none',
        },
        '#nprogress .bar': {
          backgroundColor: '#00AB55',
          position: 'fixed',
          zIndex: 1998,
          top: 0,
          left: 0,
          width: '100%',
          height: 3,
        },
      }}
    />
  );
};

export default memo(GlobalBaseline);
