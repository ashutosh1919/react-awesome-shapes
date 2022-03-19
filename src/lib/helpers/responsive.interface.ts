import { ReactNode } from 'react';

export interface ResponsiveShapeProps {
  height: string[];
  width: string[];
  top: string[];
  left: string[];
  right: string[];
  bottom: string[];
  zIndex: string;
  className: string;
  children: ReactNode;
  breakpoints: number[];
  position: string;
}

export interface ShapeDivProps {
  height: string;
  width: string;
  top: string;
  left: string;
  right: string;
  bottom: string;
  zIndex: string;
  className: string;
  children: ReactNode;
  position: string;
}
