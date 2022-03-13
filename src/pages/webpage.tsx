/** @jsxRuntime automatic */
import React, { Fragment } from 'react';
import { ThemeProvider } from 'theme-ui';
import { Shapes } from '../components/shapes';
import { theme } from '../components/theme/theme';
import { Header } from '../components/layout/header';
import { Hero } from '../components/layout/hero';
import { ShapesShowcase } from '../components/shapeshowcase';
import { Footer } from '../components/layout/footer';

export const WebPage = () => {
  return (
    <Fragment>
      <ThemeProvider theme={theme}>
        <Header />
        <Hero />
        <ShapesShowcase />
        <Footer />
      </ThemeProvider>
      <Shapes />
    </Fragment>
  );
};
