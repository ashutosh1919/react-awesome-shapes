/** @jsxRuntime classic */
import React from 'react';
import { ThemeProvider } from 'theme-ui';
import { theme } from './theme';
import { Header } from './header';
import { Hero } from './hero';
import { ShapesShowcase } from './shapeshowcase';

export const WebPage = () => {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <Hero />
      <ShapesShowcase />
    </ThemeProvider>
  );
};
