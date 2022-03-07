import React from 'react';
import { LiveEdit } from '../common/liveedit';

import {
  Circle,
  Donut,
  CircleGrid,
  Square,
  Diamond,
  PolygonCard,
  Triangle,
  Hexagon,
  Polygon,
  Star,
  Cross
} from '../../lib';

const scope = {
  Circle,
  Donut,
  CircleGrid,
  Square,
  Diamond,
  PolygonCard,
  Triangle,
  Hexagon,
  Polygon,
  Star,
  Cross
};

const circleExample = `
<Circle
    color="linear-gradient(135deg, #a5b4fc, #6366f1)"
    size={['150px', '150px', '180px', '180px']}
    zIndex={2}
/>
`;

const donutExample = `
<Donut
    color="#f43f5e"
    size="180px"
    width={['40px', '40px', '60px', '60px']}
    zIndex={2}
/>
`;

const circleGridExample = `
<CircleGrid
    position="relative"
    color="#10b981"
    size="175px"
    zIndex={2}
/>
`;

const squareExample = `
<Square
    color="linear-gradient(135deg, #fdba74, #f97316)"
    size="150px"
    zIndex={2}
/>
`;

const diamondExample = `
<Diamond
    color="linear-gradient(135deg, #93c5fd, #3b82f6)"
    size="100px"
    zIndex={2}
/>
`;

const polygoncardExample = `
<PolygonCard
    height="200px"
    width="150px"
    zIndex={2}
    color="linear-gradient(135deg, #f9a8d4, #ec4899)"
/>
`;

const triangleExample = `
<Triangle
    size="150px"
    zIndex={2}
    color="linear-gradient(135deg, #fde047, #eab308)"
/>
`;

const hexagonExample = `
<Hexagon
    height="150px"
    width="175px"
    zIndex={2}
    color="linear-gradient(135deg, #c4b5fd, #8b5cf6)"
/>
`;

const polygonExample = `
<Polygon
    height="180px"
    width="175px"
    zIndex={2}
    color="linear-gradient(220deg, #f97316 0%, #dc2626 100%)"
    sides={8}
/>
`;

const starExample = `
<Star
    size="150px"
    zIndex={2}
    color="radial-gradient(circle, rgba(63,94,251,1) 0%, rgba(252,70,107,1) 100%);"
/>
`;

const crossExample = `
<Cross
    size="150px"
    zIndex={2}
    color="#AA4A44;"
/>
`;

export const ShapesDemos = () => {
  return (
    <div>
      <LiveEdit code={circleExample} scope={scope} />
      <LiveEdit code={donutExample} scope={scope} />
      <LiveEdit code={circleGridExample} scope={scope} />
      <LiveEdit code={squareExample} scope={scope} />
      <LiveEdit code={diamondExample} scope={scope} />
      <LiveEdit code={polygoncardExample} scope={scope} />
      <LiveEdit code={triangleExample} scope={scope} />
      <LiveEdit code={hexagonExample} scope={scope} />
      <LiveEdit code={polygonExample} scope={scope} />
      <LiveEdit code={starExample} scope={scope} />
      <LiveEdit code={crossExample} scope={scope} />
    </div>
  );
};
