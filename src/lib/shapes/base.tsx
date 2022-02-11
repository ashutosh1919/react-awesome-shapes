import React from 'react';
import { ResponsiveShape } from '../helpers/responsive';
import {expandValues} from '../helpers/utils';
import { checkDim, checkNonDecreasing } from '../helpers/error';

type BaseShapeProps = {
    height: string | string[]
    width: string | string[]
    top?: string | string[]
    left?: string | string[]
    right?: string | string[]
    bottom?: string | string[]
    zIndex?: string
    className?: string
    children: any
    breakpoints?: number[]
    position?: string
}

export const BaseShape = ({
        children,
        height,
        width,
        position=`absolute`,
        top=``,
        left=``,
        right=``,
        bottom=``,
        className=`anim-shapes`,
        zIndex=`-1`,
        breakpoints=[600, 900, 1200]}: BaseShapeProps) => {
    
    if(!checkNonDecreasing(breakpoints) ||
       !checkDim(top, breakpoints.length) ||
       !checkDim(left, breakpoints.length) ||
       !checkDim(right, breakpoints.length) ||
       !checkDim(bottom, breakpoints.length)){
        return <></>;
    }
    let responsiveHeight = expandValues(height, breakpoints.length);
    let responsiveWidth = expandValues(width, breakpoints.length);
    let responsiveTop = expandValues(top, breakpoints.length);
    let responsiveLeft = expandValues(left, breakpoints.length);
    let responsiveRight = expandValues(right, breakpoints.length);
    let responsiveBottom = expandValues(bottom, breakpoints.length);
    return <ResponsiveShape
                height={responsiveHeight}
                width={responsiveWidth}
                top={responsiveTop}
                left={responsiveLeft}
                right={responsiveRight}
                bottom={responsiveBottom}
                position={position}
                className={className}
                zIndex={zIndex}
                breakpoints={breakpoints}>{children}</ResponsiveShape>;
}