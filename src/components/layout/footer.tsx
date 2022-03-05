import React from 'react';
import { motion } from 'framer-motion';
import { Themed, Box } from 'theme-ui';

export const Footer = () => {
  const AnimatedBox = motion(Box);

  return (
    <AnimatedBox as="footer" variant="layout.footer">
      &copy; {new Date().getFullYear()} by{` `}
      <Themed.a href="https://discord.gg/GkcbM5bwZr">DevSense</Themed.a>
      . All rights reserved.
      <br />
      This website is open source on{` `}
      <Themed.a href="https://github.com/ashutosh1919/react-awesome-shapes">GitHub</Themed.a>.
    </AnimatedBox>
  );
};
