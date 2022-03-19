import React from 'react';
import { useMediaQuery } from 'react-responsive';
import styled from '@emotion/styled';
import { ResponsiveShapeProps, ShapeDivProps } from './responsive.interface';

const ShapeDiv = ({
  children,
  height,
  width,
  position,
  top,
  left,
  right,
  bottom,
  className,
  zIndex
}: ShapeDivProps) => {
  const Div = styled('div')`
    position: ${position};
    height: ${height};
    width: ${width};
    top: ${top};
    right: ${right};
    left: ${left};
    bottom: ${bottom};
    z-index: ${zIndex};
  `;

  return <Div className={className}>{children}</Div>;
};

export const ResponsiveShape = ({
  children,
  height,
  width,
  position,
  top,
  left,
  right,
  bottom,
  className,
  zIndex,
  breakpoints
}: ResponsiveShapeProps) => {
  const queries = [];
  for (let i = 0; i < breakpoints.length + 1; i++) {
    let query;
    if (i === 0) {
      query = useMediaQuery({ maxWidth: breakpoints[i] });
    } else if (i === breakpoints.length) {
      query = useMediaQuery({ minWidth: breakpoints[breakpoints.length - 1] + 1 });
    } else {
      query = useMediaQuery({ minWidth: breakpoints[i - 1] + 1, maxWidth: breakpoints[i] });
    }
    queries.push(query);
  }
  for (let i = 0; i < queries.length; i++) {
    const query = queries[i];
    if (query) {
      return (
        <ShapeDiv
          bottom={bottom[i]}
          className={className}
          height={height[i]}
          left={left[i]}
          position={position}
          right={right[i]}
          top={top[i]}
          width={width[i]}
          zIndex={zIndex}
        >
          {children}
        </ShapeDiv>
      );
    }
  }

  return <></>;
};
