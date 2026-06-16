export interface PricingItem {
  size: string;
  q100?: string;
  q500?: string;
  q1000?: string;
  q2000?: string;
  [key: string]: string | undefined;
}

export interface BenefitItem {
  title: string;
  desc: string;
  titleEn: string;
  descEn: string;
}

export interface IngredientItem {
  name: string;
  desc: string;
  nameEn: string;
  descEn: string;
}

export interface TestResultItem {
  lab: string;
  test: string;
  result: string;
  labEn: string;
  testEn: string;
  resultEn: string;
}

export interface Product {
  id: string;
  num: string;
  category: string;
  categoryEn?: string;
  categoryTh: string;
  categoryColor: string;
  name: string;
  nameEn: string;
  tagline: string;
  pitch: string;
  pitchEn?: string;
  image: string;
  price: string;
  unit: string;
  unitEn?: string;
  moq: string;
  moqEn?: string;
  leadTime: string;
  leadTimeEn?: string;
  volume: string;
  pricingMode: string;
  starterBudget: string;
  claims: string[];
  pricing: PricingItem[];
  benefits: BenefitItem[];
  ingredients: IngredientItem[];
  testResults: TestResultItem[];
}
