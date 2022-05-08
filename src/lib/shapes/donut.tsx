import React from 'react';
import styled from '@emotion/styled';
import { BaseShape } from './base';
import { DonutProps } from './shapes.interface';

export const Donut = ({
  size,
  color,
  css = ``,
  width,
  top = ``,
  left = ``,
  right = ``,
  bottom = ``,
  className = `anim-shape-donut`,
  zIndex = `unset`,
  breakpoints = [600, 900, 1200],
  position = `absolute`
}: DonutProps) => {
  const StyledDonut = styled('div')`
    height: inherit;
    width: inherit;
    box-sizing: border-box;
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
    background-color: transparent;
    border: ${color};
    border-width: ${width};
    border-style: solid;
    border-radius: 50%;
    ${css}
  `;

  return (
    <BaseShape
      bottom={bottom}
      breakpoints={breakpoints}
      height={size}
      left={left}
      position={position}
      right={right}
      top={top}
      width={size}
      zIndex={zIndex}
    >
      <StyledDonut className={className} />
    </BaseShape>
  );
};
