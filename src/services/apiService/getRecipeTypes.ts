type RecipeImages = {
  url: string;
  width: number;
  height: number;
};

type Ingredients = {
  text: string;
  quantity: number;
  measure: string;
  food: string;
  weight: string;
  foodCategory: string;
  foodId: string;
  image: string;
};

type Digest = {
  label: string;
  tag: string;
  schemaOrgTag: string;
  total: number;
  hasRDI: boolean;
  daily: number;
  unit: string;
};
type Recipe = {
  uri: string;
  label: string;
  image: string;
  images: {
    THUMBNAIL: RecipeImages;
    SMALL: RecipeImages;
    REGULAR: RecipeImages;
  };

  source: string;
  url: string;
  shareAs: string;
  yield: number;
  dietLabels: string[];
  healthLabs: string[];
  cautions: string[];
  ingredientLines: string[];
  ingredients: Array<Ingredients>;
  calories: number;
  totalWeight: number;
  totalTime: number;
  cuisineType: string[];
  mealType: string[];
  dishType: string[];
  totalNutrients: string[];
  totalDaily: string[];
  digest: Array<Digest>;
};

export type RecipeOnlyWithQuery = {
  from: number;
  to: number;
  count: number;
  _links: {
    next: {
      href: string;
      title: string;
    };
  };
  hits: {
    recipe: Recipe;
    _links: {
      self: {
        title: string;
        href: string;
      };
    };
  };
};
