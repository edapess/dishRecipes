const countries: string[] = ['Armenia', 'Japan', 'Greece', 'Italy', 'Iran'];

export const getDefaultRandomCountry = (): string => {
  let randomCountry = countries[Math.floor(Math.random() * countries.length)];
  return randomCountry;
};

const diets: string[] = [
  'balanced',
  'high-fiber',
  'high-protein',
  'low-carb',
  'low-fat',
  'low-sodium',
];
export const getDefaultDiet = (): string => {
  let randomDiet = diets[Math.floor(Math.random() * diets.length)];
  return randomDiet;
};
