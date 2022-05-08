import React from 'react';
import styled from '@emotion/styled';
import { BaseShape } from './base';
import { arrowPath } from './data/arrowPath';
import { ShapeProps } from './shapes.interface';

export const Arrow = ({
  size,
  color,
  css = ``,
  top = ``,
  position = `absolute`,
  left = ``,
  right = ``,
  bottom = ``,
  className = `anim-shape-arrow`,
  zIndex = `unset`,
  breakpoints = [600, 900, 1200]
}: ShapeProps) => {
  const StyledArrow = styled('div')`
    height: inherit;
    width: inherit;
    background: ${color};
    clip-path: ${arrowPath};
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
      <StyledArrow className={className} />
    </BaseShape>
  );
};
