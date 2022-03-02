import React from 'react';
import styled from '@emotion/styled';
import { BaseShape } from './base';

type HexagonProps = {
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

export const Hexagon = ({
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
  breakpoints = [600, 900, 1200]
}: HexagonProps) => {
  const StyledHexagon = styled('div')`
    position: inherit;
    height: inherit;
    width: inherit;
    background: ${color};
    top: inherit;
    border-radius: 10px;
    clip-path: polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%);
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
      <StyledHexagon className={className} />
    </BaseShape>
  );
};
