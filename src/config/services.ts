import service1 from '../assets/service/6.png';
import service2 from '../assets/service/7.png';
import service3 from '../assets/service/8.png';

// Contact Images
import contactLine from '../assets/media/9.png';
import contactCall from '../assets/media/10.png';
import contactForm from '../assets/media/11.png';

export const services = [
  { img: service1, titleKey: 'product.service1' },
  { img: service2, titleKey: 'product.service2' },
  { img: service3, titleKey: 'product.service3' },
];

export const contactButtons = [
  {
    id: 'line',
    img: contactLine,
    alt: 'Line',
    href: 'https://lin.ee/tao11ce',
    target: '_blank',
    gridClass: ''
  },
  {
    id: 'call',
    img: contactCall,
    alt: 'Call',
    href: 'tel:052-102-588',
    gridClass: ''
  },
  {
    id: 'form',
    img: contactForm,
    alt: 'Form',
    href: 'https://forms.gle/1vGG6enSsnyrtxZE6',
    target: '_blank',
    gridClass: ''
  }
];
