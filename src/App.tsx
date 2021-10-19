import React from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from './styles/GlobalStyles';
import Layout from './layout/Layout';
import { theme } from './styles/LightTheme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />

      <Layout />
    </ThemeProvider>
  );
}

export default App;
