export function validateString(value: string | null | undefined) {
  if (!value || value && (value === '' || value === null || value === undefined || typeof value !== 'string')) {
    return null;
  }

  return (value).toString();
}



export function stringLowCase(value: string | null | undefined) {
  if (!value || !validateString(value)) {
    return null;
  }

  return value?.toLowerCase();
}



export function stringCapitalize(value: string | null | undefined) {
  if (!value || !validateString(value)) {
    return null;
  }

  return (value.slice(0, 1).toUpperCase() + value.toLowerCase().slice(1, value.length)).toString();
}



export function stringWordCapitalize(value: string) {
  if (!value || !validateString(value)) {
    return null;
  }

  return value.toLowerCase()
    .split(' ')
    .map((word) => {
      return word.charAt(0).toUpperCase() + word.slice(1);
    })
    .join(' ');
}



export function stringFullWordCapitalize(value: string) {
  if (!value || !validateString(value)) {
    return null;
  }

  const fullString = value
    .toLowerCase()
    .split(' ')
    .map((word) => {
      let capitalizedWord = '';
      let shouldCapitalize = true;

      for (let i = 0; i < word.length; i++) {
        if (word[i] === '(' || word[i] === '[' || word[i] === '-') {
          shouldCapitalize = true;
          capitalizedWord += word[i];
        }
        else if (shouldCapitalize) {
          capitalizedWord += word[i].toUpperCase();
          shouldCapitalize = false;
        }
        else {
          capitalizedWord += word[i];
        }
      }

      return capitalizedWord;
    })
    .join(' ');
  return fullString;
}



export function stringUpperCase(value: string | null | undefined) {
  if (!value || !validateString(value)) {
    return null;
  }

  return value.toUpperCase();
}



export function stringRawDataText(value: string | null | undefined) {
  if (!value || !validateString(value)) {
    return null;
  }

  return value.normalize('NFD').replace(/[\u0300-\u036f]/g, '').replaceAll(/\s/g, '').replace(/[^\w\s]/gi, '').trim();
}



export function normalizeRawText(value: string | null | undefined) {
  if (!value || !validateString(value)) {
    return null;
  }

  return value.normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/[^\w\s]/gi, '').trim();
}



export function textOrEmpty(text: string, pre?: string) {
  if (!validateString(text) || (pre && !validateString(pre))) {
    return null;
  }

  return text ? (pre ? pre + text : text) : '';
};



export const getInitials = (name = '') => {
  const returnInitials = name
    .replace(/\s+/, ' ')
    .split(' ')
    .slice(0, 2)
    .map((v) => v && v[0].toUpperCase())
    .join('');

  return returnInitials;
};
