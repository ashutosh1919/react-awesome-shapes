import React from 'react';
import styled from '@emotion/styled';
import { BaseShape } from './base';
import { ShapeProps } from './shapes.interface';

export const Diamond = ({
  size,
  color,
  css = ``,
  top = ``,
  position = `absolute`,
  left = ``,
  right = ``,
  bottom = ``,
  className = `anim-shape-diamond`,
  zIndex = `unset`,
  breakpoints = [600, 900, 1200]
}: ShapeProps) => {
  const StyledDiamond = styled('div')`
    height: inherit;
    width: inherit;
    background: ${color};
    transform: rotate(45deg);
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
      <StyledDiamond className={className} />
    </BaseShape>
  );
};
