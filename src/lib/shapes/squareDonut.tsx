import React from 'react';
import styled from '@emotion/styled';
import { BaseShape } from './base';
import { squareDonutPath } from './data/squareDonutPath';
import { ShapeProps } from './shapes.interface';

export const SquareDonut = ({
  size,
  color,
  css = ``,
  top = ``,
  position = `absolute`,
  left = ``,
  right = ``,
  bottom = ``,
  className = `anim-shape-square-donut`,
  zIndex = `unset`,
  breakpoints = [600, 900, 1200]
}: ShapeProps) => {
  const StyledSquareDonut = styled('div')`
    height: inherit;
    width: inherit;
    background: ${color};
    clip-path: ${squareDonutPath};
    ${css}
  `;

  return (
    <BaseShape
      bottom={bottom}
      breakpoints={breakpoints}
      height={size}
      left={left}
      position={position}
      right={right}
      top={top}
      width={size}
      zIndex={zIndex}
    >
      <StyledSquareDonut className={className} />
    </BaseShape>
  );
};
