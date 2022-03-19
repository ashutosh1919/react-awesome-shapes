import React from 'react';
import styled from '@emotion/styled';
import { BaseShape } from './base';
import { ShapeProps } from './shapes.interface';

export const Circle = ({
  size,
  color,
  top = ``,
  position = `absolute`,
  left = ``,
  right = ``,
  bottom = ``,
  className = `anim-shape-circle`,
  zIndex = `-1`,
  breakpoints = [600, 900, 1200]
}: ShapeProps) => {
  const StyledCircle = styled('div')`
    position: inherit;
    height: inherit;
    width: inherit;
    background: ${color};
    border-radius: 50%;
    top: inherit;
    right: inherit;
    left: inherit;
    bottom: inherit;
    z-index: inherit;
  `;

  return (
    <BaseShape
      bottom={bottom}
      breakpoints={breakpoints}
      className={className}
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
