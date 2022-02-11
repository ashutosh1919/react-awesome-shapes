
export function checkNonDecreasing(values: number[]): boolean {
    if(values.length === 0){
        throw "Breakpoints can't be empty array [].";
        return false;
    }
    for(let i=0; i<values.length-1; i++){
        if(values[i]>values[i+1]){
            throw "Elements in breakpoints must be in non-decreasing order.";
            return false;
        }
    }
    return true;
}

export function checkDim(values: string | string[], lenBreakpoints: number): boolean {
    if(typeof values === 'string' || values.length === lenBreakpoints + 1){
        return true;
    }
    throw "Passed measurements for shape location must be of dimension 1 + length of breakpoints";
    return false;
}