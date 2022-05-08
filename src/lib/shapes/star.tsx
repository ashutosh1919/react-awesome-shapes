import React from 'react';
import styled from '@emotion/styled';
import { BaseShape } from './base';
import { starPath } from './data/starPath';
import { ShapeProps } from './shapes.interface';

export const Star = ({
  size,
  color,
  css = ``,
  top = ``,
  position = `absolute`,
  left = ``,
  right = ``,
  bottom = ``,
  className = `anim-shape-star`,
  zIndex = `unset`,
  breakpoints = [600, 900, 1200]
}: ShapeProps) => {
  const StyledStar = styled('div')`
    height: inherit;
    width: inherit;
    background: ${color};
    clip-path: ${starPath};
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
      <StyledStar className={className} />
    </BaseShape>
  );
};
