import React from 'react';
import styled from '@emotion/styled';
import { BaseShape } from './base';
import { ShapeProps } from './shapes.interface';

export const Circle = ({
  size,
  color,
  css = ``,
  top = ``,
  position = `absolute`,
  left = ``,
  right = ``,
  bottom = ``,
  className = `anim-shape-circle`,
  zIndex = `unset`,
  breakpoints = [600, 900, 1200]
}: ShapeProps) => {
  const StyledCircle = styled('div')`
    height: inherit;
    width: inherit;
    background: ${color};
    border-radius: 50%;
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
      <StyledCircle className={className} />
    </BaseShape>
  );
};
