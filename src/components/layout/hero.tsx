/** @jsxImportSource theme-ui */
import React from 'react';
import { Container, Flex, Text } from 'theme-ui';
import { motion } from 'framer-motion';
import ReactTooltip from 'react-tooltip';

export const Hero = () => {
  const AnimatedText = motion(Text);

  return (
    <Container sx={{ pb: 0, alignItems: `center`, mt: [`50px`, `50px`, `70px`, `70px`] }}>
      <Flex sx={{ justifyContent: `center`, textAlign: `center` }}>
        <AnimatedText
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          initial={{ opacity: 0, y: 20 }}
          sx={{
            width: [`100%`, '80%', '80%', '80%'],
            fontFamily: `heading`,
            fontSize: [`40px`, `40px`, `60px`, `80px`],
            fontWeight: 'bold',
            color: `text`,
            lineHeight: [`50px`, `50px`, `100px`, `100px`]
          }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          Insert{' '}
          <span
            sx={{
              background: (theme) => [
                `${theme?.colors?.textGr1}`,
                `linear-gradient(225deg, ${theme?.colors?.textGr2}, ${theme?.colors?.textGr1})`,
                null,
                null
              ],
              WebkitBackgroundClip: [`text`, `text`, null, null],
              WebkitTextFillColor: `transparent`
            }}
          >
            {' '}
            Awesome Shapes{' '}
          </span>{' '}
          into Your Site with Ease.
        </AnimatedText>
      </Flex>
      <Flex sx={{ justifyContent: `center` }}>
        <motion.code
          data-tip
          animate={{ opacity: 1, y: 0 }}
          data-for="registerTip"
          exit={{ opacity: 0, y: -20 }}
          initial={{ opacity: 0, y: 20 }}
          sx={{
            cursor: 'pointer',
            ':hover': {
              backgroundColor: `textHover`
            },
            lineHeight: 1.5,
            fontSize: ['14px', '14px', '16px', '16px'],
            fontWeight: 400,
            backgroundColor: `text`,
            color: `background`,
            padding: ['15px', '15px', '20px', '20px'],
            border: '1px solid',
            borderRadius: `10px`,
            maxWidth: '768px',
            overflowX: 'scroll',
            my: '40px'
          }}
          transition={{ duration: 1, delay: 1 }}
        >
          <ReactTooltip
            afterShow={() => {
              navigator.clipboard.writeText('npm install react-awesome-shapes');
            }}
            backgroundColor="#c7d2fe"
            effect="solid"
            event="click"
            id="registerTip"
            place="top"
            textColor="#111827"
          >
            Copied
          </ReactTooltip>
          npm install react-awesome-shapes
        </motion.code>
      </Flex>
    </Container>
  );
};
