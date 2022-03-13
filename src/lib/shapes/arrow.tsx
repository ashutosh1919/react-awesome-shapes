import React from 'react';
import styled from '@emotion/styled';
import { BaseShape } from './base';
import { arrowPath } from './data/arrowPath';

type ArrowProps = {
  size: string | string[];
  color: string;
  top?: string | string[];
  left?: string | string[];
  right?: string | string[];
  bottom?: string | string[];
  className?: string;
  zIndex?: string;
  breakpoints?: number[];
  position?: string;
};

export const Arrow = ({
  size,
  color,
  top = ``,
  position = `absolute`,
  left = ``,
  right = ``,
  bottom = ``,
  className = `anim-shape-arrow`,
  zIndex = `-1`,
  breakpoints = [600, 900, 1200]
}: ArrowProps) => {
  const StyledArrow = styled('div')`
    position: inherit;
    height: inherit;
    width: inherit;
    background: ${color};
    top: inherit;
    clip-path: ${arrowPath};
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
      <StyledArrow className={className} />
    </BaseShape>
  );
};
