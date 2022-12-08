export type RecipesWithParams = {
  //Filter by number of ingredients (MIN+, MIN-MAX, MAX),
  //where MIN and MAX are integer numbers.
  //Example: ingr=5-8
  ingr?: string;
  //Diet label. multiple
  diet?: Array<string>;
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
};
