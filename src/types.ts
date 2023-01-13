import {store} from './core/store';

export type AppDispatch = typeof store.dispatch;

export interface RecipesWithParams {
  [key: string]: any;
  //Filter by number of ingredients (MIN+, MIN-MAX, MAX),
  //where MIN and MAX are integer numbers.
  //Example: ingr=5-8
  ingr?: string;
  //Diet label. multiple
  diet?: string | Array<string>;
  //Health label. multiple
  health?: Array<string>;
  //The type of cuisine of the recipe
  cuisineType?: Array<string>;
  //The type of meal a recipe belongs to
  mealType?: Array<string>;
  //The dish type a recipe belongs to
  dishType?: Array<string>;
  //The format is calories=RANGE where RANGE is in one of
  //MIN+, MIN-MAX or MAX, where MIN and MAX are non-negative \
  //floating point numbers.
  //The + symbol needs to be properly encoded. \
  //Examples: “calories=100-300” will return all recipes with which have between
  //100 and 300 kcal per serving.
  colories?: string;
  //Time range for the total cooking and prep time for a recipe .
  //The format is time=RANGE where RANGE is one of MIN+,
  //MIN-MAX or MAX, where MIN and MAX are non-negative integer numbers.
  //The + symbol needs to be properly encoded. Examples: “time=1%2B” will return
  //all recipes with available total time greater then 1 minute
  time?: string;
  //Show only recipes, which have images with selected sizes
  imageSize?: Array<string>;
  //Filter by glycemic index. The format is FLOAT-RANGE
  glycemicIndex?: string;
  //Excluding recipes with certain ingredients.
  //The format is excluded=FOOD where FOOD is replaced by the name of the specific food
  //you don’t want to be present in the recipe results.
  //More than one food can be excluded at the same time.
  //Example: excluded=vinegar&excluded=pretzel will exclude any recipes which contain
  //vinegar or pretzels in their ingredient list
  excluded?: Array<string>;
  //Select whether you want this query to respond with a random selection of 20 recipes
  //based on the criteria filled. If there were only 20 or less possible results,
  //this will return those results in random order.
  random?: boolean;
  //-------NUTRIENTS-----
  //For example: nutrients[CA]=50+ means minimum 50mg calcium,
  //where ‘50+’ has to be properly encoded as ‘50%2B’ nutrients[FAT]=30 means maximum 30g fat
  //and nutrients[FE]=5-10 means iron between 5mg and 10mg inclusive
  'nutrients[CA]'?: string;
  'nutrients[CHOCDF]'?: string;
  'nutrients[CHOCDF.net]'?: string;
  'nutrients[CHOLE]'?: string;
  'nutrients[ENERC_KCAL]'?: string;
  'nutrients[FAMS]'?: string;
  'nutrients[FAPU]'?: string;
  'nutrients[FASAT]'?: string;
  'nutrients[FAT]'?: string;
  'nutrients[FATRN]'?: string;
  'nutrients[FE]'?: string;
  'nutrients[FIBTG]'?: string;
  'nutrients[FOLAC]'?: string;
  'nutrients[FOLDFE]'?: string;
  'nutrients[FOLFD]'?: string;
  'nutrients[K]'?: string;
  'nutrients[MG]'?: string;
  'nutrients[NA]'?: string;
  'nutrients[NIA]'?: string;
  'nutrients[P]'?: string;
  'nutrients[PROCNT]'?: string;
  'nutrients[RIBF]'?: string;
  'nutrients[SUGAR]'?: string;
  'nutrients[SUGAR.added]'?: string;
  'nutrients[Sugar.alcohol]'?: string;
  'nutrients[THIA]'?: string;
  'nutrients[TOCPHA]'?: string;
  'nutrients[VITA_RAE]'?: string;
  'nutrients[VITB12]'?: string;
  'nutrients[VITB6A]'?: string;
  'nutrients[VITC]'?: string;
  'nutrients[VITD]'?: string;
  'nutrients[VITK1]'?: string;
  'nutrients[WATER]'?: string;
  'nutrients[ZN]'?: string;
  //Recipe fields to be included in the response.
  field?: Array<string>;
  //(BETA) Filter recipes by their CO2 footprint.
  co2EmissionsClass?: string;
  //Only show recipes with the specified tags.
  tag?: Array<string>;
}
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

export type Hits = {
  recipe: Recipe;
  _links: {
    self: {
      title: string;
      href: string;
    };
  };
};
export type Recipes = {
  from: number;
  to: number;
  count: number;
  _links: {
    next: {
      href: string;
      title: string;
    };
  };
  hits: Hits;
};
export interface IState {
  recipes: IRecipes;
  recipe: Recipe;
  randomRecipes: IRecipes;
  theme: ThemeSlice;
  recipesTypes: IRecipesTypesSlice;
}

export interface IRecipe {
  recipe: Array<any>;
  loading: boolean;
  error: undefined | string;
}

export interface IRecipes {
  recipes: Array<Recipes>;
  loading: boolean;
  error: undefined | string;
}

export type Theme = {
  colors: {
    background: {
      100: string;
      200: string;
      300: string;
    };
    text: {
      100: string;
      200: string;
      300: string;
    };
    buttonBackground: {
      100: string;
      200: string;
      300: string;
    };
    buttonText: {
      100: string;
      200: string;
      300: string;
    };
    frost: {
      frost1: string;
      frost2: string;
      frost3: string;
      frost4: string;
    };
    aurora: {
      red: string;
      orange: string;
      yellow: string;
      green: string;
      darkPink: string;
    };
  };
  sizes: {
    text: {
      text: number;
      onButtonText: number;
      title: number;
      cartText: number;
    };
    image: {
      cartImage: number;
      largeImage: number;
    };
    padding: {
      screen: number;
      button: number;
      smallButton: number;
    };
    radius: {
      button: number;
    };
  };
};
export interface ThemeSlice {
  theme: Theme;
  darkThemeEnabled: boolean;
}
export type RecipeType = {
  value: string;
  selected: boolean;
};
export type RecipesTypes = {
  diet: Array<RecipeType>;
  health: Array<RecipeType>;
  meal: Array<RecipeType>;
};

export interface IRecipesTypesSlice {
  recipesTypes: RecipesTypes;
}
