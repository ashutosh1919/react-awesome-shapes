import { keyframes } from '@emotion/react';

import {
  Circle,
  Donut,
  CircleGrid,
  Diamond,
  PolygonCard,
  Polygon,
  Star,
  Cross,
  SquareDonut,
  Arrow
} from '../lib';

export const scope = {
  Circle,
  Donut,
  CircleGrid,
  Diamond,
  PolygonCard,
  Polygon,
  Star,
  Cross,
  SquareDonut,
  Arrow
};

export const circleExample = `<Circle
    color="linear-gradient(135deg, #a5b4fc, #6366f1)"
    size={['150px', '150px', '180px', '180px']}
    zIndex={2}
/>
`;

export const donutExample = `<Donut
    color="#f43f5e"
    size="180px"
    width={['40px', '40px', '60px', '60px']}
    zIndex={2}
/>
`;

export const circleGridExample = `<CircleGrid
    position="relative"
    color="#10b981"
    size="175px"
    zIndex={2}
/>
`;

export const diamondExample = `<Diamond
    color="linear-gradient(135deg, #93c5fd, #3b82f6)"
    size="100px"
    zIndex={2}
/>
`;

export const polygoncardExample = `<PolygonCard
    height="200px"
    width="150px"
    zIndex={2}
    color="linear-gradient(135deg, #f9a8d4, #ec4899)"
/>
`;

export const polygonExample = `<Polygon
    height="180px"
    width="175px"
    zIndex={2}
    color="linear-gradient(135deg, #fca5a5, #ef4444)"
    sides={8}
/>
`;

export const starExample = `<Star
    size="150px"
    zIndex={2}
    color="radial-gradient(circle, #5eead4, #14b8a6);"
/>
`;

export const crossExample = `<Cross
    size="150px"
    zIndex={2}
    color="#0ea5e9"
/>
`;
export const squareDonutExample = `<SquareDonut
    size="150px"
    zIndex={2}
    color="#ef4444"
/>
`;

export const arrowExample = `<Arrow
    color="#8b5cf6"
    size="180px"
    zIndex={2}
/>`;

export const downKeyFrame = keyframes`
  from {
    transform: translate3d(0,0,0);
  }
  to {
    transform: translate3d(0,20px,0);
  }
`;

export const upKeyFrame = keyframes`
  from {
    transform: translate3d(0,0,0);
  }
  to {
    transform: translate3d(0,-20px,0);
  }
`;
