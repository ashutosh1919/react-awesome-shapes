import React from 'react';
import styled from '@emotion/styled';
import { BaseShape } from './base';

type DiamondProps = {
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

export const Diamond = ({
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
}: DiamondProps) => {
  const StyledDiamond = styled('div')`
    position: inherit;
    height: inherit;
    width: inherit;
    background: ${color};
<<<<<<< HEAD
    transform: rotate(45deg);
    top: inherit;
=======
    top: inherit;
    transform: rotate(45deg);
>>>>>>> 2316b0cd952bf1d97523672a054789502e1092a4
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
      <StyledDiamond className={className} />
    </BaseShape>
  );
};
