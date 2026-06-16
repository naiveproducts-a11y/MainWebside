export type NavItemType = 'default' | 'mega';

export interface NavItem {
  label: string;
  path?: string;
  type?: NavItemType;
  children?: NavItem[];
}

export const navbarConfig: NavItem[] = [
  {
    label: 'navbar.home',
    path: '/',
    type: 'default'
  },
  {
    label: 'navbar.allProducts',
    type: 'mega',
    children: [
      {
        label: 'navbar.cleaningAndGrooming',
        children: [
          { label: 'navbar.bioShampoo', path: '/cleaning/bio-shampoo' },
          { label: 'navbar.shampooOil', path: '/cleaning/shampoo-oil' },
          { label: 'navbar.dryFoamShampoo', path: '/cleaning/dry-foam' },
          { label: 'navbar.coatTreatment', path: '/cleaning/coat-treatment' },
        ]
      },
      {
        label: 'navbar.sprayAndCare',
        children: [
          { label: 'navbar.coatBacteria', path: '/spray/coat-antibac-spray' },
          { label: 'navbar.deodorizer', path: '/spray/deodorant-spray' },
          { label: 'navbar.antiFungal', path: '/spray/antifungal-spray' },
          { label: 'navbar.eyeEarCleaner', path: '/spray/eye-ear-cleaner' },
        ]
      },
      {
        label: 'navbar.skinAndPowder',
        children: [
          { label: 'navbar.healingGel', path: '/skin/skin-repair-gel' },
          { label: 'navbar.tearStainPowder', path: '/skin/tear-stain-powder' },
          { label: 'navbar.bodyPowder', path: '/skin/body-powder' },
        ]
      },
      {
        label: 'navbar.rd',
        children: [
          { label: 'navbar.rdPetProducts', path: '/rd/custom-formula' },
        ]
      }
    ]
  },
  {
    label: 'navbar.branding',
    type: 'default',
    children: [
      { label: 'navbar.brandingSteps', path: '/branding/steps' },
      { label: 'navbar.innovation', path: '/branding/innovation' },
    ]
  },
  {
    label: 'navbar.news',
    type: 'default',
    children: [
      { label: 'navbar.trendsActivities', path: '/news/activities-new' },
      { label: 'navbar.videos', path: '/news/videos' },
    ]
  },
  {
    label: 'navbar.contactUs',
    type: 'default',
    children: [
      { label: 'navbar.appointment', path: '/content' },
      { label: 'navbar.faq', path: '/contact/faq' },
    ]
  },
];
