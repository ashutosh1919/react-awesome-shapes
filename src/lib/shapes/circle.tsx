import styled from '@emotion/styled';
import { BaseShape } from './base';

type CircleProps = {
    size: string | string[]
    color: string
    top?: string | string[]
    left?: string | string[]
    right?: string | string[]
    bottom?: string | string[]
    className?: string
    zIndex?: string
    breakpoints?: number[]
    position?: string
}

export const Circle = ({
        size,
        color,
        top=``,
        position=`absolute`,
        left = ``,
        right = ``,
        bottom = ``,
        className = `anim-shape-circle`,
        zIndex = `-1`,
        breakpoints=[600, 900, 1200] }: CircleProps) => {
    
    const StyledCircle = styled('div')`
        position: inherit;
        height: inherit;
        width: inherit;
        background: ${color};
        border-radius: 50%;
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
            <StyledCircle className={className} />
    </BaseShape>;
}
  