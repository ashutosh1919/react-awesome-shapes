import styled from "@emotion/styled";
import { useMediaQuery } from "react-responsive";
import { MediaQueryAllQueryable } from "react-responsive/dist/types";

type ResponsiveShapeProps = {
  height: string[];
  width: string[];
  top: string[];
  left: string[];
  right: string[];
  bottom: string[];
  zIndex: string;
  className: string;
  children: any;
  breakpoints: number[];
  position: string;
};

type ShapeDivProps = {
  height: string;
  width: string;
  top: string;
  left: string;
  right: string;
  bottom: string;
  zIndex: string;
  className: string;
  children: any;
  position: string;
};

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
  zIndex,
}: ShapeDivProps) => {
  const Div = styled("div")`
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

export const GetQuery = (mediaSettings: MediaQueryAllQueryable) => {
  const query = useMediaQuery(mediaSettings);
  return query;
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
  breakpoints,
}: ResponsiveShapeProps) => {
  let queries = [];
  for (let i = 0; i < breakpoints.length + 1; i++) {
    let query;
    if (i === 0) {
      query = GetQuery({ maxWidth: breakpoints[i] });
    } else if (i === breakpoints.length) {
      query = GetQuery({
        minWidth: breakpoints[breakpoints.length - 1] + 1,
      });
    } else {
      query = GetQuery({
        minWidth: breakpoints[i - 1] + 1,
        maxWidth: breakpoints[i],
      });
    }
    queries.push(query);
  }
  for (let i = 0; i < queries.length; i++) {
    let query = queries[i];
    if (query) {
      return (
        <ShapeDiv
          height={height[i]}
          width={width[i]}
          position={position}
          top={top[i]}
          left={left[i]}
          right={right[i]}
          bottom={bottom[i]}
          className={className}
          zIndex={zIndex}
        >
          {children}
        </ShapeDiv>
      );
    }
  }
  return <></>;
};
