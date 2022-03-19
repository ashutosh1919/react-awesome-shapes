import { ReactNode } from 'react';

/**
 * It has all the common props which required to all the shapes
 */
export interface CommonProps {
  top?: string | string[];
  left?: string | string[];
  right?: string | string[];
  bottom?: string | string[];
  className?: string;
  zIndex?: string;
  breakpoints?: number[];
  position?: string;
}

export interface SizeProps {
  height: string | string[];
  width: string | string[];
}

/**
 * This interface is used for the shape which required additional props along with CommonProps
 */
export interface ShapeProps extends CommonProps {
  size: string | string[];
  color: string;
}

/**
 * This interface is used for the shape which required additional props along with ShapeProps
 */
export interface ShapeWithSize extends ShapeProps, SizeProps {}

export interface BaseShapeProps extends CommonProps, SizeProps {
  children: ReactNode;
}

export interface DonutProps extends ShapeProps, Pick<SizeProps, 'width'> {}

export interface PolygonProps extends CommonProps, SizeProps {
  sides?: number;
  color: string;
}
