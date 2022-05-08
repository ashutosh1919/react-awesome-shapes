import React from 'react';
import styled from '@emotion/styled';
import { BaseShape } from './base';
import { messagePath } from './data/messagePath';
import { ShapeWithSize } from './shapes.interface';

export const Message = ({
  color,
  css = ``,
  width,
  height,
  top = ``,
  left = ``,
  right = ``,
  bottom = ``,
  className = `anim-shape-message`,
  zIndex = `unset`,
  breakpoints = [600, 900, 1200],
  position = `absolute`
}: ShapeWithSize) => {
  const StyledMessage = styled('div')`
    height: inherit;
    width: inherit;
    background: ${color};
    clip-path: ${messagePath};
    ${css}
  `;

  return (
    <BaseShape
      bottom={bottom}
      breakpoints={breakpoints}
      height={height}
      left={left}
      position={position}
      right={right}
      top={top}
      width={width}
      zIndex={zIndex}
    >
      <StyledMessage className={className} />
    </BaseShape>
  );
};
