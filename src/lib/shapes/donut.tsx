import styled from '@emotion/styled';
import { BaseShape } from './base';

type DonutProps = {
    size: string | string[]
    color: string
    width: string | string[]
    top?: string | string[]
    left?: string | string[]
    right?: string | string[]
    bottom?: string | string[]
    className?: string
    zIndex?: string
    breakpoints?: number[]
    position?: string
}

export const Donut = ({
        size,
        color,
        width,
        top=``,
        left=``,
        right=``,
        bottom=``,
        className=`anim-shape-donut`,
        zIndex=`-1`,
        breakpoints=[600, 900, 1200],
        position=`absolute`}: DonutProps) => {
    
    const StyledDonut = styled('div')`
        position: inherit;
        height: inherit;
        width: inherit;
        background-color: transparent;
        border: ${color};
        border-width: ${width};
        border-style: solid;
        border-radius: 50%;
        top: inherit;
        left: inherit;
        right: inherit;
        zIndex: inherit;
    `;
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
        <StyledDonut className={className} />
    </BaseShape>;
}