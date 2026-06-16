import brand1 from '../assets/brand-1.png';
import brand2 from '../assets/brand-2.png';
import brand3 from '../assets/brand-3.png';
import brand4 from '../assets/brand-4.png';
import brand5 from '../assets/brand-5.png';
import brand6 from '../assets/brand-6.png';
import brand7 from '../assets/brand-7.png';
import brand8 from '../assets/brand-8.png';

import behind1 from '../assets/behind-1.png';
import behind2 from '../assets/behind-2.png';
import behind3 from '../assets/behind-3.png';
import behind4 from '../assets/behind-4.png';

export const brands = [
  { name: 'PUREPAW', img: brand1 },
  { name: 'NATURETail', img: brand2 },
  { name: 'ZOOMOOV', img: brand3 },
  { name: 'VELVETCOAT', img: brand4 },
  { name: 'BARK & BATH', img: brand5 },
  { name: 'SHINYPAWS', img: brand6 },
  { name: 'MEOWSTYLE', img: brand7 },
  { name: 'DR.VET', img: brand8 }
];

export const behindImages = [behind1, behind2, behind3, behind4];

export const instPartners = [
  {
    nameKey: 'brand.partnerChula',
    roleKey: 'brand.partnerChulaRole',
    iconType: 'School',
    iconColorClass: 'text-fuchsia-500'
  },
  {
    nameKey: 'brand.partnerNanotec',
    roleKey: 'brand.partnerNanotecRole',
    iconType: 'FlaskConical',
    iconColorClass: 'text-cyan-500'
  },
  {
    nameKey: 'brand.partnerKu',
    roleKey: 'brand.partnerKuRole',
    iconType: 'Microscope',
    iconColorClass: 'text-emerald-500'
  }
];

export const stats = [
  { value: 500, suffix: "+", labelKey: 'brand.statsBrandsLabel' },
  { value: 10, suffixKey: 'brand.statsYearsSuffix', labelKey: 'brand.statsYearsLabel' },
  { value: 50, suffix: "+", labelKey: 'brand.statsFormulasLabel' },
  { value: 100, suffix: "", labelKey: 'brand.statsMoqLabel' }
];
