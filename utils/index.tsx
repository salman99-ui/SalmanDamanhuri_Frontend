export const addTotalNumber = (value1: number, value2: number): number => value1 + value2;

export const getDateNow = (date: Date): string => date.getMonth().toString();

export const toUpper = (value: string): string => value.toUpperCase();

export const getUppercaseLastname = (
  firstName: string,
  Upper: (value: string) => string,
): string => `${Upper(firstName)}`;
