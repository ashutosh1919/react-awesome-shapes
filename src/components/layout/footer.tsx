import React from 'react';
import { motion } from 'framer-motion';
import { Themed, Box } from 'theme-ui';
import { discordLink, githubLink } from '../../constants/social.constant';

export const Footer = () => {
  const AnimatedBox = motion(Box);

  return (
    <AnimatedBox as="footer" variant="layout.footer">
      &copy; {new Date().getFullYear()} by{` `}
      <Themed.a href={discordLink}>DevSense</Themed.a>
      . All rights reserved.
      <br />
      This website is open source on{` `}
      <Themed.a href={githubLink}>GitHub</Themed.a>.
    </AnimatedBox>
  );
};
