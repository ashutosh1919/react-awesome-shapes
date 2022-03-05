import React from 'react';
import styled from '@emotion/styled';
import { BaseShape } from './base';

type PolygonCardProps = {
  size: string | string[];
  color: string;
  height: string | string[];
  width: string | string[];
  top?: string | string[];
  left?: string | string[];
  right?: string | string[];
  bottom?: string | string[];
  className?: string;
  zIndex?: string;
  breakpoints?: number[];
  position?: string;
};

export const PolygonCard = ({
  // size,
  width,
  height,
  color,
  top = ``,
  position = `absolute`,
  left = ``,
  right = ``,
  bottom = ``,
  className = `anim-shape-polygoncard`,
  zIndex = `-1`,
  breakpoints = [600, 900, 1200]
}: PolygonCardProps) => {
  const StyledPolygonCard = styled('div')`
    position: inherit;
    height: inherit;
    width: inherit;
    background: ${color};
    top: inherit;
    border-radius: 10px;
    clip-path: polygon(13% 0, 100% 0, 100% 90%, 87% 100%, 0 100%, 0 10%);
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
