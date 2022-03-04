import React from 'react';
import styled from '@emotion/styled';
import { BaseShape } from './base';

type StarProps = {
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

export const Star = ({
  size,
  color,
  top = ``,
  position = `absolute`,
  left = ``,
  right = ``,
  bottom = ``,
  className = `anim-shape-star`,
  zIndex = `-1`,
  breakpoints = [600, 900, 1200]
}: StarProps) => {
  const StyledStar = styled('div')`
    position: inherit;
    height: inherit;
    width: inherit;
    background: ${color};
    top: inherit;
    clip-path: polygon(
      50% 0%,
      63% 38%,
      100% 38%,
      69% 59%,
      82% 100%,
      50% 75%,
      18% 100%,
      31% 59%,
      0 38%,
      37% 38%
    );
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
      <StyledStar className={className} />
    </BaseShape>
  );
};
