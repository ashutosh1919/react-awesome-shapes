export function expandValues(values: string | string[], lenBreakpoints: number) {
  if (typeof values === 'string') {
    return Array(lenBreakpoints + 1).fill(values);
  }

  return values;
}

function findUnit(values: string) {
  const units = ['cm', 'mm', 'in', 'pt', 'px', 'em', 'ex', 'rem', 'lh', 'vw', 'vh', 'vmin', 'vmax'];
  for (let i = 0; i < units.length; i++) {
    if (values.endsWith(units[i])) {
      return units[i];
    }
  }

  return 'px';
}

export function findSizeUnit(values: string | string[]) {
  if (typeof values === 'string') {
    return findUnit(values);
  }
  const units = [];
  for (let i = 0; i < values.length; i++) {
    units.push(findUnit(values[i]));
  }

  return units;
}

function parseStringAsNum(values: string) {
  return parseInt(values, 10);
}

export function parseSizeAsNum(values: string | string[]) {
  if (typeof values === 'string') {
    return parseStringAsNum(values);
  }
  const size = [];
  for (let i = 0; i < values.length; i++) {
    size.push(parseStringAsNum(values[i]));
  }

  return size;
}

export function recombineNumAsString(values: number | number[], units: string | string[]) {
  if (typeof units === 'string' || typeof values === 'number') {
    return '' + values + units;
  }
  const size = [];
  for (let i = 0; i < values.length; i++) {
    size.push('' + values[i] + units[i]);
  }

  return size;
}
