import React from 'react';
import styled from '@emotion/styled';
import { BaseShape } from './base';

type CircleProps = {
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

export const Circle = ({
  size,
  color,
  top = ``,
  position = `absolute`,
  left = ``,
  right = ``,
  bottom = ``,
  className = `anim-shape-circle`,
  zIndex = `-1`,
  breakpoints = [600, 900, 1200]
}: CircleProps) => {
  const StyledCircle = styled('div')`
    position: inherit;
    height: inherit;
    width: inherit;
    background: ${color};
    border-radius: 50%;
    top: inherit;
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
      <StyledCircle className={className} />
    </BaseShape>
  );
};
