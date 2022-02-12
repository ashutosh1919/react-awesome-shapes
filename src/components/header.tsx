/** @jsxImportSource theme-ui */
import React from 'react';
import { Container, Flex, Box } from 'theme-ui';
import { motion } from 'framer-motion';

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
            sx={{ flexDirection: `column` }}
            transition={{ duration: 1 }}
          >
            <Box
              sx={{ fontFamily: `body`, fontSize: 3, fontWeight: `semibold`, lineHeight: `25px` }}
            >
              Awesome Shapes
            </Box>
            <Box sx={{ fontFamily: `body`, color: `dark` }}>by DevSense</Box>
          </AnimatedFlex>
          <AnimatedFlex
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            initial={{ opacity: 0, y: 20 }}
            sx={{ mt: [4, 0], alignItems: `center` }}
            transition={{ duration: 1 }}
          >
            <a
              href="https://github.com/ashutosh1919"
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
