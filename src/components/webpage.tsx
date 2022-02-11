/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, ThemeProvider, Themed } from 'theme-ui'
import { theme } from './theme'
import { Header } from './header'
import { Hero } from './hero'
import { ShapesShowcase } from './shapeshowcase'


export const WebPage = () => {
    return (
        <ThemeProvider theme={theme}>
            <Header />
            <Hero />
            <ShapesShowcase />
      </ThemeProvider>
    );
}