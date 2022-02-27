/** @jsxImportSource theme-ui */
import React from 'react';
import { Container, Flex, Box } from 'theme-ui';
import { motion } from 'framer-motion';
import { Logo } from './logo';

export const Header = () => {
  const AnimatedFlex = motion(Flex);

  return (
    <header>
      <Container sx={{ pb: 0 }}>
        <Flex
          sx={{
            alignItems: `center`,
            justifyContent: `space-between`,
            flexDirection: [`column`, `row`]
          }}
        >
          <AnimatedFlex
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            initial={{ opacity: 0, y: 20 }}
            transition={{ duration: 1 }}
          >
            <a
              aria-label="Link to the theme creator's website"
              href="https://github.com/ashutosh1919/react-awesome-shapes"
              sx={{ color: `text`, '&:hover,&:focus': { color: `primary`, boxShadow: `none` } }}
            >
              <Logo sx={{ width: 12, height: 12 }} />
            </a>
            <Box
              aria-hidden="true"
              sx={{ height: 12, width: 1, backgroundColor: `primary`, borderRadius: `full`, mx: 3 }}
            />
            <Flex sx={{ flexDirection: `column` }}>
              <Box
                sx={{ fontFamily: `body`, fontSize: 3, fontWeight: `semibold`, lineHeight: `25px` }}
              >
                Awesome Shapes
              </Box>
              <Box sx={{ fontFamily: `body`, color: `primary` }}>
                <a
                  href="https://discord.gg/GkcbM5bwZr"
                  sx={{ textDecoration: `none`, fontFamily: `body`, color: `primary` }}
                >
                  by DevSense
                </a>
              </Box>
            </Flex>
          </AnimatedFlex>
          <AnimatedFlex
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            initial={{ opacity: 0, y: 20 }}
            sx={{ mt: [4, 0], alignItems: `center` }}
            transition={{ duration: 1 }}
          >
            <a
              href="https://github.com/ashutosh1919/react-awesome-shapes"
              sx={{ fontFamily: `body`, variant: `buttons.secondary`, textDecoration: `none` }}
            >
              GitHub
            </a>
          </AnimatedFlex>
        </Flex>
      </Container>
    </header>
  );
};
