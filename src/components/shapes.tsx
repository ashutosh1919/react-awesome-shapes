/** @jsxImportSource theme-ui */
import React from 'react';
import { keyframes } from '@emotion/react';
import { Circle, Donut, CircleGrid, Square, Diamond } from '../lib';

export const down = keyframes`
  from {
    transform: translate3d(0,0,0);
  }
  to {
    transform: translate3d(0,20px,0);
  }
`;

export const up = keyframes`
  from {
    transform: translate3d(0,0,0);
  }
  to {
    transform: translate3d(0,-20px,0);
  }
`;

export const Shapes = () => {
  return (
    <>
      <Circle
        color="linear-gradient(225deg, #fed7aa, #fb923c)"
        left={[`-50px`, `-50px`, `-70px`, `-50px`]}
        size={['150px', '150px', '210px', '210px']}
        top={['50px', '50px', '100px', '100px']}
      />
      <Circle
        color="linear-gradient(45deg, #c7d2fe, #818cf8)"
        left={[`-5px`, `40px`, `40px`, `40px`]}
        size="35px"
        top={[`165px`, `80px`, `80px`, `80px`]}
      />
      <Circle
        color="linear-gradient(135deg, #f9a8d4, #ec4899)"
        right={[`-80px`, `50px`, `50px`, `50px`]}
        size="120px"
        top="300px"
      />
      <Circle
        color="linear-gradient(225deg, #bbf7d0, #4ade80)"
        right={[`30px`, `180px`, `180px`, `150px`]}
        size="40px"
        sx={{ animation: `${down} 6s ease-in-out infinite alternate` }}
        top={['300px', '300px', '360px', '360px']}
      />
      <Square
        color="linear-gradient(135deg, #93c5fd, #3b82f6)"
        left={[`-80px`, `50px`, `60px`, `80px`]}
        size="80px"
        top="280px"
      />
      {/* <Square
        size="30px"
        color="linear-gradient(135deg, #f9a8d4, #ec4899)"
        top="100px"
        right={[`-80px`, `50px`, `60px`, `120px`]}
      /> */}

      <Diamond
        color="linear-gradient(225deg, #fed7aa, #fb923c)"
        right={[`40px`, `50px`, `60px`, `120px`]}
        size="30px"
        top="100px"
      />

      {/* <PolygonCard
        size="500px"
        height="200px"
        width="150px"
        color="linear-gradient(135deg, #f9a8d4, #ec4899)"
        top={["800px","950px","1100px","1100px"]}
        left={[`-80px`, `-20px`, `20px`, `20px`]}
      /> */}

      <Donut
        color="#4ade80"
        left={[`-15px`, `-5px`, `-5px`, `20px`]}
        size="30px"
        sx={{ animation: `${up} 6s ease-in-out infinite alternate` }}
        top="260px"
        width="10px"
      />
      <Donut
        color="#c084fc"
        left={[`-20px`, `-20px`, `-20px`, `-20px`]}
        size="100px"
        top={['300px', '300px', '400px', '400px']}
        width={[`20px`, `20px`, `50px`, `50px`]}
      />
      <CircleGrid
        color="#c7d2fe"
        right={[`-90px`, `-50px`, `-70px`, `-30px`]}
        size="175px"
        top={['40px', '50px', '150px', '100px']}
      />
      <Donut
        color="#eab308"
        right={[`-80px`, `-20px`, `-20px`, `-20px`]}
        size="300px"
        top="1000px"
        width="60px"
      />
      <Diamond
        color="linear-gradient(225deg, #fca5a5, #ef4444)"
        left={[`40px`, `50px`, `60px`, `120px`]}
        size="60px"
        top="1150px"
      />
      <Circle
        color="linear-gradient(75deg, #7dd3fc, #0ea5e9)"
        left={[`30px`, `180px`, `180px`, `50px`]}
        size="150px"
        top="1050px"
      />
    </>
  );
};
