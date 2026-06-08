import actifloxImg from '../assets/actiflox.jfif';
import amoxyvetImg from '../assets/amoxyvet.jfif';

const products = [
  {
    id: 1,
    barcode: 'ACT001',
    name: 'ACTIFLOX',
    image: actifloxImg,
    category: 'Antibiotiques',
    description:
      'Traitement des infections respiratoires chez la volaille.',
    indication:
      'Infections respiratoires et bactériennes chez la volaille.',
    posologie:
      '0,1 ml/kg de poids vif pendant 3 à 5 jours.',
    composition: 'Enrofloxacine',
  },

  {
    id: 2,
    barcode: 'AMX002',
    name: 'AMOXYVET',
    image: amoxyvetImg,
    category: 'Antibiotiques',
    description:
      'Traitement et prévention des infections bactériennes.',
    indication:
      "Infections dues aux germes sensibles à l'amoxicilline.",
    posologie:
      '5 g pour 100 kg de poids vif pendant 5 jours.',
    composition: 'Amoxicilline',
  },
];

export default products;