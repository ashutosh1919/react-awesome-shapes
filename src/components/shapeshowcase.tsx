/** @jsxImportSource theme-ui */
import React from 'react';
import { Container, Flex, Text } from 'theme-ui';
import { motion } from 'framer-motion';

export const ShapesShowcase = () => {
  const AnimatedText = motion(Text);

  return (
    <Container sx={{ pb: 0, alignItems: `center`, mt: [`50px`, `50px`, `100px`, `120px`] }}>
      <Flex sx={{ justifyContent: `center`, textAlign: `center` }}>
        <AnimatedText
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          initial={{ opacity: 0, y: 20 }}
          sx={{
            fontFamily: `heading`,
            fontSize: [`20px`, `20px`, `40px`, `60px`],
            fontWeight: 'bold',
            color: `text`,
            lineHeight: [`50px`, `50px`, `100px`, `100px`]
          }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          Shapes
        </AnimatedText>
      </Flex>
    </Container>
  );
};
