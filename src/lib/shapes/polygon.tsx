import React, { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import { BaseShape } from './base';

export const clipPathMap = {
  3: 'polygon(50% 0%, 0% 100%, 100% 100%)',
  5: 'polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%);',
  6: 'polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)',
  7: 'polygon(50% 0%, 90% 20%, 100% 60%, 75% 100%, 25% 100%, 0% 60%, 10% 20%)',
  8: 'polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)',
  9: 'polygon(50% 0%, 83% 12%, 100% 43%, 94% 78%, 68% 100%, 32% 100%, 6% 78%, 0% 43%, 17% 12%)',
  10: 'polygon(50% 0%, 80% 10%, 100% 35%, 100% 70%, 80% 90%, 50% 100%, 20% 90%, 0% 70%, 0% 35%, 20% 10%)'
};

type PolygonProps = {
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
  sides?: number;
};

export const Polygon = ({
  width,
  height,
  color,
  top = ``,
  position = `absolute`,
  left = ``,
  right = ``,
  bottom = ``,
  className = `anim-shape-hexagon`,
  zIndex = `-1`,
  breakpoints = [600, 900, 1200],
  sides = 6
}: PolygonProps) => {
  const [clipPath, setClipPath] = useState('');

  useEffect(() => {
    setClipPath(clipPathMap[sides as keyof typeof clipPathMap]);
  }, [sides]);

  const StyledPolygon = styled('div')`
    position: inherit;
    height: inherit;
    width: inherit;
    background: ${color};
    top: inherit;
    clip-path: ${clipPath};
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
      <StyledPolygon className={className} />
    </BaseShape>
  );
};
