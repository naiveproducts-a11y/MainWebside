import spary1 from '../assets/product/product-01-bio-shampoo.jpeg';
import spary2 from '../assets/product/product-02-shampoo-oil.jpeg';
import spary3 from '../assets/product/product-03-dry-foam.jpeg';
import spary4 from '../assets/product/product-04-coat-treatment.jpeg';

import sparyheader from '../assets/service/6.png';
import skinheader from '../assets/service/7.png';
import shampooheader from '../assets/service/8.png';

import skin1 from '../assets/product/product-05-coat-antibac-spray.jpeg';
import skin2 from '../assets/product/product-06-deodorant-spray.jpeg';
import skin3 from '../assets/product/product-07-antifungal-spray.jpeg';
import skin4 from '../assets/product/product-08-eye-ear-cleaner.jpeg';

import skinGel1 from '../assets/product/product-09-skin-repair-gel.jpeg';
import skinGel2 from '../assets/product/product-10-tear-stain-powder.jpeg';
import skinGel3 from '../assets/product/product-11-body-powder.jpeg';
import skinGel4 from '../assets/product/product-12-custom-formula.jpeg';

export const catalogCategories = [
  {
    titleKey: 'catalog.catCleaning',
    img: sparyheader,
    items: [
      { id: 'bio-shampoo', nameKey: 'catalog.itemBioShampoo', priceKey: 'catalog.itemBioShampooPrice', img: spary1 },
      { id: 'shampoo-oil', nameKey: 'catalog.itemOilShampoo', priceKey: 'catalog.itemOilShampooPrice', img: spary2 },
      { id: 'dry-foam', nameKey: 'catalog.itemDryFoam', priceKey: 'catalog.itemDryFoamPrice', img: spary3 },
      { id: 'coat-treatment', nameKey: 'catalog.itemTreatment', priceKey: 'catalog.itemTreatmentPrice', img: spary4 },
    ]
  },
  {
    titleKey: 'catalog.catSpray',
    img: skinheader,
    items: [
      { id: 'coat-antibac-spray', nameKey: 'catalog.itemSprayNourish', priceKey: 'catalog.itemSprayNourishPrice', img: skin1 },
      { id: 'deodorant-spray', nameKey: 'catalog.itemSprayDeodorize', priceKey: 'catalog.itemSprayDeodorizePrice', img: skin2 },
      { id: 'antifungal-spray', nameKey: 'catalog.itemSprayAntiFungal', priceKey: 'catalog.itemSprayAntiFungalPrice', img: skin3 },
      { id: 'eye-ear-cleaner', nameKey: 'catalog.itemEyeEarCleaner', priceKey: 'catalog.itemEyeEarCleanerPrice', img: skin4 },
    ]
  },
  {
    titleKey: 'catalog.catSkin',
    img: shampooheader,
    items: [
      { id: 'skin-repair-gel', nameKey: 'catalog.itemSkinGel', priceKey: 'catalog.itemSkinGelPrice', img: skinGel1 },
      { id: 'tear-stain-powder', nameKey: 'catalog.itemTearPowder', priceKey: 'catalog.itemTearPowderPrice', img: skinGel2 },
      { id: 'body-powder', nameKey: 'catalog.itemBodyPowder', priceKey: 'catalog.itemBodyPowderPrice', img: skinGel3 },
      { id: 'custom-formula', nameKey: 'catalog.itemCustomFormula', priceKey: 'catalog.itemCustomFormulaPrice', img: skinGel4 },
    ]
  }
];
