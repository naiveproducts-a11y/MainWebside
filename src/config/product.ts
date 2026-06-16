import { 
  CircleDollarSign, 
  Package, 
  Clock, 
  Box as BoxIcon,
  Droplets,
  ShieldCheck,
  HeartPulse,
  Leaf,
  Dna,
  Flower2,
  ShieldAlert,
  Zap,
  FlaskConical,
  ClipboardCheck,
  Timer,
  MessageCircle,
  ShoppingBag,
  Palette,
  Factory,
  Truck
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

export interface ProductFeature {
  icon: LucideIcon;
  titleKey: string;
  valueKey: string;
  colorClass: string;
}

export interface ProductWhyFeature {
  icon: LucideIcon;
  titleKey: string;
  descKey: string;
}

export interface TechnologyCard {
  id: string;
  icon: LucideIcon;
  badgeKey: string;
  titleKey: string;
  descKey: string;
  labelKey: string;
  valueKey: string;
  colorType: 'cyan' | 'fuchsia';
}

export interface Ingredient {
  icon: LucideIcon;
  titleKey: string;
  descKey: string;
}

export interface LabResult {
  icon: LucideIcon;
  instKey: string;
  testKey: string;
  resultKey: string;
}

export interface PricingRow {
  size: string;
  p100: string;
  p500: string;
  p1000: string;
}

export interface OrderStep {
  icon: LucideIcon;
  titleKey: string;
  descKey: string;
  durationKey: string;
  durationValue: string;
}

export interface Certification {
  image: string;
  titleKey: string;
  orgKey: string;
}

export interface RelatedProduct {
  image: string;
  groupKey: string;
  titleKey: string;
  priceKey: string;
  priceValue?: string; // For hardcoded values
  moq: number;
}

export interface ProductFAQ {
  id: string;
  questionKey: string;
  answerKey: string;
}

// Data Exports
export const productHeroFeatures: ProductFeature[] = [
  {
    icon: CircleDollarSign,
    titleKey: 'productPage.hero.costTitle',
    valueKey: 'productPage.hero.costValue',
    colorClass: 'from-blue-100 to-cyan-50 text-blue-600'
  },
  {
    icon: Package,
    titleKey: 'productPage.hero.moqTitle',
    valueKey: 'productPage.hero.moqValue',
    colorClass: 'from-emerald-100 to-teal-50 text-emerald-600'
  },
  {
    icon: Clock,
    titleKey: 'productPage.hero.leadTimeTitle',
    valueKey: 'productPage.hero.leadTimeValue',
    colorClass: 'from-orange-100 to-amber-50 text-orange-600'
  },
  {
    icon: BoxIcon,
    titleKey: 'productPage.hero.sizeTitle',
    valueKey: 'productPage.hero.sizeValue',
    colorClass: 'from-fuchsia-100 to-purple-50 text-fuchsia-600'
  }
];

export const productWhyFeatures: ProductWhyFeature[] = [
  {
    icon: Droplets,
    titleKey: 'productPage.whyProduct.f1',
    descKey: 'productPage.whyProduct.f1Desc'
  },
  {
    icon: ShieldCheck,
    titleKey: 'productPage.whyProduct.f2',
    descKey: 'productPage.whyProduct.f2Desc'
  },
  {
    icon: HeartPulse,
    titleKey: 'productPage.whyProduct.f3',
    descKey: 'productPage.whyProduct.f3Desc'
  },
  {
    icon: Leaf,
    titleKey: 'productPage.whyProduct.f4',
    descKey: 'productPage.whyProduct.f4Desc'
  }
];

export const productTechnologies: TechnologyCard[] = [
  {
    id: 'tech-01',
    icon: Dna,
    badgeKey: 'productPage.tech.t1',
    titleKey: 'productPage.tech.t1Title',
    descKey: 'productPage.tech.t1Desc',
    labelKey: 'productPage.tech.t1Label',
    valueKey: 'productPage.tech.t1Value',
    colorType: 'cyan'
  },
  {
    id: 'tech-02',
    icon: ShieldCheck,
    badgeKey: 'productPage.tech.t2',
    titleKey: 'productPage.tech.t2Title',
    descKey: 'productPage.tech.t2Desc',
    labelKey: 'productPage.tech.t2Label',
    valueKey: 'productPage.tech.t2Value',
    colorType: 'fuchsia'
  }
];

export const productIngredients: Ingredient[] = [
  {
    icon: Flower2,
    titleKey: 'productPage.ingredients.i1Title',
    descKey: 'productPage.ingredients.i1Desc'
  },
  {
    icon: Zap,
    titleKey: 'productPage.ingredients.i2Title',
    descKey: 'productPage.ingredients.i2Desc'
  },
  {
    icon: ShieldAlert,
    titleKey: 'productPage.ingredients.i3Title',
    descKey: 'productPage.ingredients.i3Desc'
  },
  {
    icon: Leaf,
    titleKey: 'productPage.ingredients.i4Title',
    descKey: 'productPage.ingredients.i4Desc'
  }
];

export const productLabResults: LabResult[] = [
  {
    icon: FlaskConical,
    instKey: 'productPage.labResults.r1Inst',
    testKey: 'productPage.labResults.r1Test',
    resultKey: 'productPage.labResults.r1Result'
  },
  {
    icon: ClipboardCheck,
    instKey: 'productPage.labResults.r2Inst',
    testKey: 'productPage.labResults.r2Test',
    resultKey: 'productPage.labResults.r2Result'
  },
  {
    icon: Timer,
    instKey: 'productPage.labResults.r3Inst',
    testKey: 'productPage.labResults.r3Test',
    resultKey: 'productPage.labResults.r3Result'
  }
];

export const productPricingData: PricingRow[] = [
  { size: '100 ml.', p100: '46 (4,600)', p500: '42 (21,000)', p1000: '38 (38,000)' },
  { size: '200 ml.', p100: '88 (8,800)', p500: '82 (41,000)', p1000: '75 (75,000)' },
  { size: '300 ml.', p100: '125 (12,500)', p500: '118 (59,000)', p1000: '110 (110,000)' },
  { size: '1,000 ml. (Gallon)', p100: '355 (35,500)', p500: '320 (160,000)', p1000: '290 (290,000)' }
];

export const productHowToOrderSteps: OrderStep[] = [
  {
    icon: MessageCircle,
    titleKey: 'productPage.howToOrder.s1',
    descKey: 'productPage.howToOrder.s1Desc',
    durationKey: 'productPage.howToOrder.dayBadge',
    durationValue: '1-3'
  },
  {
    icon: ShoppingBag,
    titleKey: 'productPage.howToOrder.s2',
    descKey: 'productPage.howToOrder.s2Desc',
    durationKey: 'productPage.howToOrder.dayBadge',
    durationValue: '5-7'
  },
  {
    icon: Palette,
    titleKey: 'productPage.howToOrder.s3',
    descKey: 'productPage.howToOrder.s3Desc',
    durationKey: 'productPage.howToOrder.dayBadge',
    durationValue: '7-10'
  },
  {
    icon: Factory,
    titleKey: 'productPage.howToOrder.s4',
    descKey: 'productPage.howToOrder.s4Desc',
    durationKey: 'productPage.howToOrder.dayBadge',
    durationValue: '15-20'
  },
  {
    icon: Truck,
    titleKey: 'productPage.howToOrder.s5',
    descKey: 'productPage.howToOrder.s5Desc',
    durationKey: 'productPage.howToOrder.dayBadge',
    durationValue: '1-2'
  }
];

export const productCertifications: Certification[] = [
  {
    image: "https://images.unsplash.com/photo-1576086213369-97a306d36557?q=80&w=400&auto=format&fit=crop",
    titleKey: 'productPage.certified.subtitle',
    orgKey: 'productPage.certified.globalLab'
  },
  {
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=400&auto=format&fit=crop",
    titleKey: 'productPage.certified.subtitle',
    orgKey: 'productPage.certified.globalLab'
  },
  {
    image: "https://images.unsplash.com/photo-1532187875605-1ef6c237ef5e?q=80&w=400&auto=format&fit=crop",
    titleKey: 'productPage.certified.subtitle',
    orgKey: 'productPage.certified.globalLab'
  },
  {
    image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=400&auto=format&fit=crop",
    titleKey: 'productPage.certified.subtitle',
    orgKey: 'productPage.certified.globalLab'
  }
];

export const productRelatedItems: RelatedProduct[] = [
  {
    image: "https://images.unsplash.com/photo-1599420186946-7b6fb4e297f0?q=80&w=400&auto=format&fit=crop",
    groupKey: 'navbar.cleaningAndGrooming',
    titleKey: 'navbar.bioShampoo',
    priceKey: 'productPage.related.startAt',
    priceValue: '355',
    moq: 100
  },
  {
    image: "https://images.unsplash.com/photo-1628144501254-07204439c0bc?q=80&w=400&auto=format&fit=crop",
    groupKey: 'navbar.cleaningAndGrooming',
    titleKey: 'navbar.dryFoamShampoo',
    priceKey: 'productPage.related.startAt',
    priceValue: '400',
    moq: 100
  },
  {
    image: "https://images.unsplash.com/photo-1591342978285-f13702119861?q=80&w=400&auto=format&fit=crop",
    groupKey: 'navbar.cleaningAndGrooming',
    titleKey: 'navbar.coatTreatment',
    priceKey: 'productPage.related.startAt',
    priceValue: '320',
    moq: 100
  },
  {
    image: "https://images.unsplash.com/photo-1599420186946-7b6fb4e297f0?q=80&w=400&auto=format&fit=crop",
    groupKey: 'navbar.sprayAndCare',
    titleKey: 'navbar.coatBacteria',
    priceKey: 'productPage.related.startAt',
    priceValue: '400',
    moq: 100
  }
];

export const productFaqs: ProductFAQ[] = [
  {
    id: 'panel1',
    questionKey: 'productPage.faq.q1',
    answerKey: 'productPage.faq.a1'
  },
  {
    id: 'panel2',
    questionKey: 'productPage.faq.q2',
    answerKey: 'productPage.faq.a2'
  },
  {
    id: 'panel3',
    questionKey: 'productPage.faq.q3',
    answerKey: 'productPage.faq.a3'
  },
  {
    id: 'panel4',
    questionKey: 'productPage.faq.q4',
    answerKey: 'productPage.faq.a4'
  },
  {
    id: 'panel5',
    questionKey: 'productPage.faq.q5',
    answerKey: 'productPage.faq.a5'
  }
];
