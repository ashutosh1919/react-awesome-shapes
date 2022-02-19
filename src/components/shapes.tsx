import React from 'react';
import { Circle } from '../lib';
import { Donut } from '../lib';
import { CircleGrid } from '../lib';
import { Square } from '../lib';
import { Diamond } from '../lib';

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
        top={['300px', '300px', '360px', '360px']}
      />
      <Square
        color="linear-gradient(135deg, #f9a8d4, #ec4899)"
        left={[`-80px`, `50px`, `60px`, `80px`]}
        size="100px"
        top="300px"
      />
      <Square
        color="linear-gradient(135deg, #f9a8d4, #ec4899)"
        right={[`-80px`, `50px`, `60px`, `120px`]}
        size="30px"
        top="100px"
      />
      <Diamond
        bottom="50px"
        color="linear-gradient(225deg, #bbf7d0, #4ade80)"
        left={[`-80px`, `50px`, `60px`, `250px`]}
        size="30px"
      />
      <Donut
        color="#4ade80"
        left={[`-15px`, `-5px`, `-5px`, `20px`]}
        size="30px"
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
    </>
  );
};
