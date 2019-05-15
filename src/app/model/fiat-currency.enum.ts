export enum FiatCurrency {
  USD = 'USD',
  EUR = 'EUR',
  CNY = 'CNY'
}

export function getEnumByValue(enumValue): FiatCurrency {
  const keys = Object.keys(FiatCurrency).filter(x => FiatCurrency[x] === enumValue);
  return keys.length > 0 ? FiatCurrency[keys[0]] : FiatCurrency.USD;
}
