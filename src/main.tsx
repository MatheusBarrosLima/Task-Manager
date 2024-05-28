import React from 'react'
import ReactDOM from 'react-dom/client'
import { AppRoutes } from './routes/index.tsx'
import { ThemeProvider } from 'styled-components';
import { appTheme } from './Styles/theme.ts';
import { GlobalStyles } from './Styles/Global.ts';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider theme={appTheme}>
      <AppRoutes/>
      <GlobalStyles/>
    </ThemeProvider>
  </React.StrictMode>,
);
