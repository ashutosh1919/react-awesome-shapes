export function checkNonDecreasing(values: number[]): boolean {
  if (values.length === 0) {
    return false;
  }
  for (let i = 0; i < values.length - 1; i++) {
    if (values[i] > values[i + 1]) {
      return false;
    }
  }

  return true;
}

export function checkDim(values: string | string[], lenBreakpoints: number): boolean {
  if (typeof values === 'string' || values.length === lenBreakpoints + 1) {
    return true;
  }

  return false;
}
