import React, { Component } from 'react';
import LiveEdit from './liveedit';
import { Circle, Donut, CircleGrid, Square, Diamond } from '../lib';

const scope = { Circle, Donut, CircleGrid, Square, Diamond };

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

class ShapesDemos extends Component {
  render() {
    return (
      <div>
        <LiveEdit code={circleExample} scope={scope} />
        <LiveEdit code={donutExample} scope={scope} />
        <LiveEdit code={circleGridExample} scope={scope} />
        <LiveEdit code={squareExample} scope={scope} />
        <LiveEdit code={diamondExample} scope={scope} />
      </div>
    );
  }
}

export default ShapesDemos;
