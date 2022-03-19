import React from 'react';
import styled from '@emotion/styled';
import { BaseShape } from './base';
import { messagePath } from './data/messagePath';
import { ShapeWithSize } from './shapes.interface';

export const Message = ({
  color,
  width,
  height,
  top = ``,
  left = ``,
  right = ``,
  bottom = ``,
  className = `anim-shape-message`,
  zIndex = `-1`,
  breakpoints = [600, 900, 1200],
  position = `absolute`
}: ShapeWithSize) => {
  const StyledMessage = styled('div')`
    position: inherit;
    height: inherit;
    width: inherit;
    background: ${color};
    clip-path: ${messagePath};
    top: inherit;
    left: inherit;
    right: inherit;
    bottom: inherit;
    z-index: inherit;
  `;

  return (
    <BaseShape
      bottom={bottom}
      breakpoints={breakpoints}
      className={className}
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
