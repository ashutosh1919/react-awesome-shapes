import React from 'react';
import {
  arrowExample,
  circleExample,
  circleGridExample,
  crossExample,
  diamondExample,
  donutExample,
  polygoncardExample,
  polygonExample,
  scope,
  squareDonutExample,
  starExample
} from '../../constants/shapes.constant';
import { LiveEdit } from '../common/liveedit';

export const ShapesDemos = () => {
  return (
    <div>
      <LiveEdit code={circleExample} scope={scope} />
      <LiveEdit code={donutExample} scope={scope} />
      <LiveEdit code={circleGridExample} scope={scope} />
      <LiveEdit code={diamondExample} scope={scope} />
      <LiveEdit code={polygoncardExample} scope={scope} />
      <LiveEdit code={polygonExample} scope={scope} />
      <LiveEdit code={starExample} scope={scope} />
      <LiveEdit code={crossExample} scope={scope} />
      <LiveEdit code={squareDonutExample} scope={scope} />
      <LiveEdit code={arrowExample} scope={scope} />
    </div>
  );
};
