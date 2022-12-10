const countries: string[] = ['Armenia', 'Japan', 'Greece', 'Italy', 'Iran'];
export const getDefaultRandomCountry = (): string => {
  let randomCountry = countries[Math.floor(Math.random() * countries.length)];
  return randomCountry;
};
