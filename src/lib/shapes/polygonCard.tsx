import React from 'react';
import styled from '@emotion/styled';
import { BaseShape } from './base';
import { ShapeWithSize } from './shapes.interface';

export const PolygonCard = ({
  width,
  height,
  color,
  css = ``,
  top = ``,
  position = `absolute`,
  left = ``,
  right = ``,
  bottom = ``,
  className = `anim-shape-polygoncard`,
  zIndex = `unset`,
  breakpoints = [600, 900, 1200]
}: ShapeWithSize) => {
  const StyledPolygonCard = styled('div')`
    height: inherit;
    width: inherit;
    background: ${color};
    border-radius: 10px;
    clip-path: polygon(13% 0, 100% 0, 100% 90%, 87% 100%, 0 100%, 0 10%);
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
      <StyledPolygonCard className={className} />
    </BaseShape>
  );
};
