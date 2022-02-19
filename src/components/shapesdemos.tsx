import React, { Component } from 'react';
import LiveEdit from './liveedit';
import { Circle } from '../lib';

const scope = { Circle };

const circleExample = `
<Circle
    color="linear-gradient(225deg, #fed7aa, #fb923c)"
    size={['150px', '150px', '210px', '210px']}
    zIndex={2}
/>
`;

class ShapesDemos extends Component {
  render() {
    return (
      <div>
        <LiveEdit code={circleExample} scope={scope} />
        <LiveEdit code={circleExample} scope={scope} />
      </div>
    );
  }
}

export default ShapesDemos;
