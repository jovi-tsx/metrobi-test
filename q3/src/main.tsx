// ** React
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

// ** Third-party Imports
import { ThemeProvider } from 'contexts/theme';
import { BrowserRouter, Route, Routes } from 'react-router';

// ** Pages
import Home from 'pages/home';

// ** Styles
import { GlobalStyles } from 'global.styles.ts';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider>
      <GlobalStyles />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  </StrictMode>,
);
