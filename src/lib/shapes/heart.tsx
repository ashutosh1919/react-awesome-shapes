/* eslint-disable max-len */
/* eslint-disable react/jsx-sort-props */
import React from 'react';
import styled from '@emotion/styled';
import { BaseShape } from './base';
import { ShapeProps } from './shapes.interface';

export const Heart = ({
  size,
  color,
  top = ``,
  position = `absolute`,
  left = ``,
  right = ``,
  bottom = ``,
  className = `anim-shape-heart`,
  zIndex = `-1`,
  breakpoints = [600, 900, 1200]
}: ShapeProps) => {
  const StyledHeart = styled('div')`
    position: inherit;
    height: inherit;
    width: inherit;
    background: ${color};
    top: inherit;
    right: inherit;
    left: inherit;
    bottom: inherit;
    z-index: inherit;
    clip-path: url(#svgClip);
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
      <StyledHeart />
      <svg width="0" height="0">
        <clipPath id="svgClip" clipPathUnits="objectBoundingBox">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M0.0846512 0.543664C-0.0282171 0.419294 -0.0282171 0.217649 0.0846512 0.093278C0.19752 -0.0310927 0.380515 -0.0310927 0.493384 0.093278L0.498712 0.0993033L0.498782 0.0992265L0.500105 0.100685C0.502232 0.0981869 0.504402 0.0957176 0.506616 0.093278C0.619485 -0.0310927 0.802481 -0.0310927 0.915349 0.093278C1.02822 0.217649 1.02822 0.419294 0.915349 0.543664C0.907764 0.552022 0.899863 0.559818 0.891687 0.567053L0.498782 0.999999L0.0900491 0.549613L0.0901193 0.549536L0.0846512 0.543664Z"
          />
        </clipPath>
      </svg>
    </BaseShape>
  );
};
