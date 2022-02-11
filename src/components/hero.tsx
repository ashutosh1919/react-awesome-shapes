/** @jsxImportSource theme-ui */
import { Container, jsx, Flex, Text, Theme } from 'theme-ui';
import { useState } from 'react';
import { motion } from 'framer-motion';
import prism from '@theme-ui/prism/presets/vs-dark.json';
import ReactTooltip from 'react-tooltip';

export const Hero = () => {
    let AnimatedText = motion(Text);
    return (
        <Container sx={{ pb: 0, alignItems: `center`, mt: [`50px`, `50px`, `70px`, `70px`] }}>
            <Flex sx={{ justifyContent: `center`, textAlign: `center` }}>
            <AnimatedText
                animate={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 20 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 1, delay: 0.5 }}
                sx={{
                    width: [`100%`, '80%', '80%', '80%'],
                    fontFamily: `heading`,
                    fontSize: [`40px`, `40px`, `60px`, `80px`],
                    fontWeight: 'bold',
                    color: `text`,
                    lineHeight: [`50px`, `50px`, `100px`, `100px`],
                }}>
                Insert <span sx={{ background: theme => `linear-gradient(225deg, ${theme?.colors?.textGr2}, ${theme?.colors?.textGr1})`, WebkitBackgroundClip: `text`, WebkitTextFillColor: `transparent` }}> Awesome Shapes </span> into Your Site with Ease.
            </AnimatedText>
            </Flex>
            <Flex sx={{ justifyContent: `center` }}>
                <motion.code 
                    data-tip data-for="registerTip"
                    animate={{ opacity: 1, y: 0 }}
                    initial={{ opacity: 0, y: 20 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 1, delay: 1 }}
                    sx={{
                    ...prism,
                    cursor: "pointer",
                    ":hover": {
                        backgroundColor: `textHover`,
                    },
                    lineHeight: 1.5, 
                    fontSize: ['14px', '14px', '16px','16px'],
                    fontWeight: 400,
                    backgroundColor: `text`,
                    color: `background`,
                    padding: ['15px', '15px', '20px', '20px'],
                    border: '1px solid',
                    borderRadius: `10px`,
                    maxWidth: '768px',
                    overflowX: 'scroll',
                    my: '40px'
                    }}>
                    <ReactTooltip id="registerTip" event="click" place="top" effect="solid" backgroundColor='#c7d2fe' textColor='#111827' afterShow={(e)=> {navigator.clipboard.writeText('npm install react-awesome-shapes');}}>
                        Copied
                    </ReactTooltip>
                    npm install react-awesome-shapes
                </motion.code>
            </Flex>
        </Container>
    );
}