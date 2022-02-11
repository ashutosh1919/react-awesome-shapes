import { merge } from "theme-ui"
import { tailwind } from "@theme-ui/presets";
import prism from '@theme-ui/prism/presets/prism.json';

const sharedButtonStyles = {
    border: `none`,
    color: `white`,
    cursor: `pointer`,
    fontFamily: `body`,
    fontWeight: `medium`,
    transition: `all 0.3s ease-in-out`,
    outline: `none`,
}

const sharedHeadingStyles = {
    color: `heading`,
}

export const theme = merge(tailwind, {
    config: {
        initialColorModeName: `light`,
        useCustomProperties: true,
        useColorSchemeMediaQuery: `system`,
      },
    colors: {
        primary: tailwind.colors.indigo[5],
        shadow: tailwind.colors.indigo[8],
        secondary: tailwind.colors.orange[5],
        background: tailwind.colors.gray[9],
        backgroundThemes: tailwind.colors.gray[8],
        textMuted: `#7a889c`,
        text: tailwind.colors.indigo[2],
        textHover: tailwind.colors.indigo[3],
        textGr1: `#6366f1`,
        textGr2: `#f43f5e`,
        textGradient: `linear-gradient(225deg, #6366f1, #f43f5e)`,
        grayDark: tailwind.colors.gray[1],
        heading: tailwind.colors.gray[2],
        dark: tailwind.colors.gray[5],
        muted: tailwind.colors.gray[5],
        light: tailwind.colors.gray[7],
        starsCount: tailwind.colors.gray[7]
    },
    fonts: {
        body: `"SF Pro Regular"`,
        heading: `"SF Pro Bold"`,
    },
    breakpoints: [`600px`, `900px`, `1200px`, `1800px`],
    radii: {
        xl: `1rem`,
    },
    layout: {
        footer: {
            textAlign: `center`,
            display: `block`,
            color: `textMuted`,
            px: [2, 3],
            py: [4, 5],
        },
        container: {
            maxWidth: `1200px`,
            padding: 4,
        },
    },
    styles: {
        root: {
            margin: 0,
            padding: 0,
            boxSizing: `border-box`,
            textRendering: `optimizeLegibility`,
            fontSize: `18px`,
            WebkitFontSmoothing: `antialiased`,
            MozOsxFontSmoothing: `grayscale`,
            color: `text`,
            backgroundColor: `background`,
            fontFamily: `body`,
            lineHeight: `body`,
            fontWeight: `body`,
        },
        p: {
            fontSize: [1, 2],
            letterSpacing: `-0.003em`,
            lineHeight: `body`,
            "--baseline-multiplier": 0.179,
            "--x-height-multiplier": 0.35,
        },
        h1: {
            ...sharedHeadingStyles,
            fontSize: [5, 6],
            mt: 2,
        },
        h2: {
            ...sharedHeadingStyles,
            fontSize: [4, 5],
            mt: 2,
        },
        h3: {
            ...sharedHeadingStyles,
            fontSize: [3, 4],
            mt: 3,
        },
        h4: {
            ...sharedHeadingStyles,
            fontSize: [2, 3],
        },
        h5: {
            ...sharedHeadingStyles,
            fontSize: [1, 2],
        },
        h6: {
            ...sharedHeadingStyles,
            fontSize: 1,
            mb: 2,
        },
    },
    buttons: {
        primary: {
            ...sharedButtonStyles,
            borderRadius: `full`,
            backgroundImage: (t: any) => `linear-gradient(45deg, ${t.colors.indigo[6]}, ${t.colors.indigo[4]})`,
            fontSize: [1, 2],
            px: 4,
            py: `0.6rem`,
            boxShadow: (t: any) => `0px 10px 15px ${t.colors.shadow}`,
            "&:hover": {
                transform: `translateY(-2px)`,
                boxShadow: (t: any) => `0px 20px 25px ${t.colors.shadow}`,
            },
        },
        secondary: {
            ...sharedButtonStyles,
            borderRadius: `full`,
            backgroundImage: (t: any) => `linear-gradient(45deg, ${t.colors.gray[7]}, ${t.colors.gray[5]})`,
            fontSize: 1,
            px: 4,
            py: 1,
            boxShadow: `default`,
            "&:hover": {
                transform: `translateY(-1px)`,
            },
        },
        heroStars: {
            ...sharedButtonStyles,
            fontSize: 1,
            boxShadow: `default`,
            borderRadius: `default`,
            "&:hover,&:focus": {
                transform: `translateY(-1px)`,
            },
        },
        outline: {
            ...sharedButtonStyles,
            backgroundColor: `transparent`,
            borderWidth: 2,
            borderColor: `white`,
            borderStyle: `solid`,
            borderRadius: `full`,
            textAlign: `center`,
            fontSize: 1,
            fontWeight: `semibold`,
            px: 4,
            py: `0.7rem`,
            "&:hover": {
                backgroundColor: `white`,
                color: `primary`,
            },
        },
        white: {
            ...sharedButtonStyles,
            borderRadius: `full`,
            fontSize: 1,
            fontWeight: `semibold`,
            px: 4,
            py: `0.75rem`,
            backgroundColor: `white`,
            color: `primary`,
            "&:hover": {
                transform: `translateY(-1px)`,
            },
        },
        transparent: {
            color: `inherit`,
            bg: `transparent`,
            transition: `all 0.3s ease-in-out`,
            border: `none`,
            "&:hover, &:focus": {
                color: `primary`,
                outline: `none`,
                boxShadow: `outline`,
                cursor: `pointer`,
            },
        },
    }
});