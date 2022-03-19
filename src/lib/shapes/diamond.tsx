import React from 'react';
import styled from '@emotion/styled';
import { BaseShape } from './base';
import { ShapeProps } from './shapes.interface';

export const Diamond = ({
  size,
  color,
  top = ``,
  position = `absolute`,
  left = ``,
  right = ``,
  bottom = ``,
  className = `anim-shape-diamond`,
  zIndex = `-1`,
  breakpoints = [600, 900, 1200]
}: ShapeProps) => {
  const StyledDiamond = styled('div')`
    position: inherit;
    height: inherit;
    width: inherit;
    background: ${color};
    top: inherit;
    transform: rotate(45deg);
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
      <StyledDiamond />
    </BaseShape>
  );
};
