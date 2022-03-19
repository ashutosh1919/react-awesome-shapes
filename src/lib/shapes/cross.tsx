import React from 'react';
import styled from '@emotion/styled';
import { BaseShape } from './base';
import { crossPath } from './data/crossPath';
import { ShapeProps } from './shapes.interface';

export const Cross = ({
  size,
  color,
  top = ``,
  position = `absolute`,
  left = ``,
  right = ``,
  bottom = ``,
  className = `anim-shape-star`,
  zIndex = `-1`,
  breakpoints = [600, 900, 1200]
}: ShapeProps) => {
  const StyledCross = styled('div')`
    position: inherit;
    height: inherit;
    width: inherit;
    background: ${color};
    top: inherit;
    clip-path: ${crossPath};
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
      <StyledCross className={className} />
    </BaseShape>
  );
};
