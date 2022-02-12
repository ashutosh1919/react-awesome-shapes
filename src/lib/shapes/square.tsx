import styled from "@emotion/styled";
import {BaseShape} from "./base";

type SquareProps = {
    size : string | string[]
    color : string
    top? : string | string[]
    left?: string | string[]
    right?: string | string[]
    bottom?: string | string[]
    className?: string
    zIndex?: string
    breakpoints?: number[]
    position?: string

}


export const Square = ({
    size,
    color,
    top=``,
    position=`absolute`,
    left = ``,
    right = ``,
    bottom = ``,
    className = `anim-shape-square`,
    zIndex = `-1`,
    breakpoints=[600, 900, 1200] }: SquareProps) => {

const StyledSquare= styled('div')`
    position: inherit;
    height: inherit;
    width: inherit;
    background: ${color};
    top: inherit;
    right: inherit;
    left: inherit;
    bottom: inherit;
    z-index: inherit;
`

return <BaseShape
          height={size}
          width={size}
          top={top}
          left={left}
          right={right}
          bottom={bottom}
          zIndex={zIndex}
          className={className}
          position={position}
          breakpoints={breakpoints}>
        <StyledSquare className={className} />
</BaseShape>;
}


