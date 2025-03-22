export function validateNumber(value: number | null | undefined) {
  if (!value || value && (value === null || value === undefined || typeof value !== 'number')) {
    return null;
  }

  return Number(value);
}



export function formatNumber(value: number) {
  // TODO
  return value;
}
