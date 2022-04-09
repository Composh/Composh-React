export function validateString(value: string) {
  if (value && (value !== null || value !== '' || value !== undefined)) {
    return (value).toString();
  }
  else {
    return null;
  }
}



export function validateNumber(value: string) {
  if (value && (value !== null || value !== '' || value !== undefined)) {
    return Number(value);
  }
  else {
    return null;
  }
}



export function stringCapitalize(value: string) {
  if (validateString(value)) {
    return (value.slice(0, 1).toUpperCase() + value.toLowerCase().slice(1, value.length)).toString();
  }
  else {
    return null;
  }
}



export function stringUpperCase(value: string) {
  if (validateString(value)) {
    return value.toUpperCase();
  }
  else {
    return null;
  }
}
