export const toDate = (input: string | number | Date): Date | undefined => {
  const date = new Date(input);
  return Number.isNaN(date.getTime()) ? undefined : date;
};
