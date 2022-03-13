import React, { Fragment, ReactNode } from 'react';
import { ResponsiveShape } from '../helpers/responsive';
import { expandValues } from '../utils/utils';
import { checkDim, checkNonDecreasing } from '../helpers/error';

type BaseShapeProps = {
  height: string | string[];
  width: string | string[];
  top?: string | string[];
  left?: string | string[];
  right?: string | string[];
  bottom?: string | string[];
  zIndex?: string;
  className?: string;
  children: ReactNode;
  breakpoints?: number[];
  position?: string;
};

export const BaseShape = ({
  children,
  height,
  width,
  position = `absolute`,
  top = ``,
  left = ``,
  right = ``,
  bottom = ``,
  className = `anim-shapes`,
  zIndex = `-1`,
  breakpoints = [600, 900, 1200]
}: BaseShapeProps) => {
  if (
    !checkNonDecreasing(breakpoints) ||
    !checkDim(top, breakpoints.length) ||
    !checkDim(left, breakpoints.length) ||
    !checkDim(right, breakpoints.length) ||
    !checkDim(bottom, breakpoints.length)
  ) {
    return <Fragment />;
  }
  const responsiveHeight = expandValues(height, breakpoints.length);
  const responsiveWidth = expandValues(width, breakpoints.length);
  const responsiveTop = expandValues(top, breakpoints.length);
  const responsiveLeft = expandValues(left, breakpoints.length);
  const responsiveRight = expandValues(right, breakpoints.length);
  const responsiveBottom = expandValues(bottom, breakpoints.length);

  return (
    <ResponsiveShape
      bottom={responsiveBottom}
      breakpoints={breakpoints}
      className={className}
      height={responsiveHeight}
      left={responsiveLeft}
      position={position}
      right={responsiveRight}
      top={responsiveTop}
      width={responsiveWidth}
      zIndex={zIndex}
    >
      {children}
    </ResponsiveShape>
  );
};
