function buildSizes(labels, soldOutLabels = []) {
  return labels.map((label) => ({
    label,
    soldOut: soldOutLabels.includes(label)
  }));
}

const CLOTHING_SIZES = buildSizes(['P', 'M', 'G', 'GG']);
const SHOE_SIZES = buildSizes(['38', '39', '40', '41', '42', '43']);
const ONE_SIZE = buildSizes(['Único']);

const CATEGORIES = {
  camisetas: 'Camisetas',
  moletons: 'Moletons',
  calcas: 'Calças',
  cargos: 'Cargos',
  bermudas: 'Bermudas',
  jaquetas: 'Jaquetas',
  tenis: 'Tênis',
  acessorios: 'Acessórios'
};

const PRODUCTS = [
  {
    id: 'calca-shadow',
    category: 'calcas',
    brand: 'PACE Company',
    name: 'Calça "Shadow" Cargo Tech - Black',
    price: 890,
    oldPrice: 1150,
    images: ['calca-shadow-1.jpg', 'calca-shadow-2.jpg', 'calca-shadow-3.jpg', 'calca-shadow-4.jpg'],
    colors: [
      { name: 'Preto obsidiana', hex: '#0a0a0a' },
      { name: 'Grafite', hex: '#3a3a3a' },
      { name: 'Cinza claro', hex: '#d9d9d6' }
    ],
    sizes: buildSizes(['P', 'M', 'G', 'GG'], ['GG']),
    description: 'A calça "Shadow" Cargo Tech representa a essência da estética técnica da PACE. Construída em nylon de alta gramatura com acabamento repelente à água, apresenta corte relaxado e bolsos utilitários estratégicos. Detalhes em fita de gorgurão e ajustes de velcro na barra.',
    material: 'Nylon de alta gramatura com acabamento repelente à água.'
  },
  {
    id: 'cargo-olive',
    category: 'cargos',
    brand: 'CLASS',
    name: 'Cargo Ripstop Olive',
    price: 420,
    badge: 'Em alta',
    badgeIsHot: true,
    images: ['cargo-olive.jpg'],
    colors: [{ name: 'Verde oliva', hex: '#5b6340' }],
    sizes: CLOTHING_SIZES,
    description: 'Cargo em ripstop leve com bolsos laterais volumosos e barra ajustável. Caimento reto, pensada para o dia a dia.',
    material: 'Ripstop 100% algodão.'
  },
  {
    id: 'cargo-phantom',
    category: 'cargos',
    brand: 'GNDR LAB',
    name: 'Calça Cargo Wide "Phantom"',
    price: 349,
    images: ['cargo-phantom.jpg'],
    colors: [{ name: 'Cinza fantasma', hex: '#7d7f82' }],
    sizes: CLOTHING_SIZES,
    description: 'Modelagem wide com cintura elástica e múltiplos bolsos. Tecido encorpado que mantém a forma.',
    material: 'Sarja de algodão com elastano.'
  },
  {
    id: 'cargo-khaki',
    category: 'cargos',
    brand: 'PALM ANGELS',
    name: 'Cargo Khaki Utility',
    price: 459,
    images: ['cargo-khaki.jpg'],
    colors: [{ name: 'Khaki', hex: '#a89a74' }],
    sizes: CLOTHING_SIZES,
    description: 'Cargo utilitária em tom khaki, com costuras reforçadas e bolsos com aba.',
    material: 'Sarja 100% algodão.'
  },

  {
    id: 'camiseta-arch-white',
    category: 'camisetas',
    brand: 'SUFGANG',
    name: 'Camiseta Oversized "Arch Logo" White',
    price: 259,
    oldPrice: 319,
    badge: 'Novo',
    images: ['camiseta-arch-white.jpg'],
    colors: [{ name: 'Branco', hex: '#f2f2f0' }],
    sizes: CLOTHING_SIZES,
    description: 'Oversized com estampa Arch Logo no peito. Malha 220 g/m² com toque macio e gola reforçada.',
    material: '100% algodão penteado.'
  },
  {
    id: 'camiseta-boxy-offwhite',
    category: 'camisetas',
    brand: 'PACE',
    name: 'Camiseta Boxy "Trial" Off-White',
    price: 289,
    images: ['camiseta-boxy-offwhite.jpg'],
    colors: [{ name: 'Off-white', hex: '#e8e3d6' }],
    sizes: CLOTHING_SIZES,
    description: 'Corte boxy com ombro caído e comprimento curto. Estampa discreta nas costas.',
    material: '100% algodão.'
  },
  {
    id: 'camiseta-heavy-gray',
    category: 'camisetas',
    brand: 'CLASS',
    name: 'Camiseta Essential Heavy Gray',
    price: 89.9,
    badge: 'Em alta',
    badgeIsHot: true,
    images: ['camiseta-heavy-gray.jpg'],
    colors: [
      { name: 'Cinza', hex: '#8d8d8d' },
      { name: 'Marrom', hex: '#6b4f3a', image: 'camiseta-heavy-brown.jpg' }
    ],
    sizes: CLOTHING_SIZES,
    description: 'Básica heavyweight com caimento estruturado. Perfeita para compor qualquer look.',
    material: '100% algodão, 240 g/m².'
  },
  {
    id: 'camiseta-tech-long-black',
    category: 'camisetas',
    brand: 'CLASS',
    name: 'Camiseta Tech Long Black',
    price: 119.9,
    images: ['camiseta-tech-long-black.jpg'],
    colors: [{ name: 'Preto', hex: '#0a0a0a' }],
    sizes: CLOTHING_SIZES,
    description: 'Modelagem alongada em tecido técnico de secagem rápida.',
    material: 'Poliamida com elastano.'
  },
  {
    id: 'camiseta-raw-sand',
    category: 'camisetas',
    brand: 'VIRTUE',
    name: 'Camiseta Oversized "Raw" Heavyweight',
    price: 189.9,
    badge: 'New in',
    images: ['camiseta-raw-sand.jpg'],
    colors: [{ name: 'Areia', hex: '#cdbb98' }],
    sizes: CLOTHING_SIZES,
    description: 'Acabamento cru com barras abertas e lavagem leve. Peso alto e caimento oversized.',
    material: '100% algodão.'
  },
  {
    id: 'camiseta-essential-black',
    category: 'camisetas',
    brand: 'Urban Supply',
    name: 'Camiseta Oversized Essential',
    price: 129.9,
    images: ['camiseta-essential-black.jpg'],
    colors: [
      { name: 'Preto', hex: '#0a0a0a' },
      { name: 'Off-white', hex: '#ece8dc', image: 'camiseta-essential-offwhite.jpg' },
      { name: 'Azul', hex: '#4a6c9b', image: 'camiseta-essential-blue.jpg' }
    ],
    sizes: CLOTHING_SIZES,
    description: 'A camiseta essencial da Urban Supply: oversized, malha pesada e três cores.',
    material: '100% algodão.'
  },
  {
    id: 'camiseta-palm-white',
    category: 'camisetas',
    brand: 'PALM ANGELS',
    name: 'Camiseta Palm Classic White',
    price: 349,
    badge: 'Novo',
    images: ['camiseta-palm-white.jpg'],
    colors: [{ name: 'Branco', hex: '#f2f2f0' }],
    sizes: CLOTHING_SIZES,
    description: 'Clássica com estampa de palmeira nas costas e logo discreto no peito.',
    material: '100% algodão.'
  },
  {
    id: 'camiseta-street-navy',
    category: 'camisetas',
    brand: 'SUFREESH',
    name: 'T-Shirt Street Navy',
    price: 169,
    images: ['camiseta-street-navy.jpg'],
    colors: [{ name: 'Azul-marinho', hex: '#1f2a44' }],
    sizes: CLOTHING_SIZES,
    description: 'Camiseta street em azul-marinho profundo com malha encorpada.',
    material: '100% algodão.'
  },
  {
    id: 'camiseta-boxy-sage',
    category: 'camisetas',
    brand: 'PIET',
    name: 'Camiseta Boxy Sage',
    price: 199,
    images: ['camiseta-boxy-sage.jpg'],
    colors: [{ name: 'Verde sálvia', hex: '#9aa88a' }],
    sizes: CLOTHING_SIZES,
    description: 'Boxy em verde sálvia, ombro caído e gola canelada.',
    material: '100% algodão.'
  },

  {
    id: 'moletom-arch-black',
    category: 'moletons',
    brand: 'SUFGANG',
    name: 'Moletom "Arch Logo"',
    price: 389.9,
    oldPrice: 489,
    badge: 'Novo',
    images: ['moletom-arch-black.jpg'],
    colors: [{ name: 'Preto', hex: '#0a0a0a' }],
    sizes: CLOTHING_SIZES,
    description: 'Moletom com capuz e logo bordado. Felpa interna macia e bolso canguru.',
    material: '80% algodão, 20% poliéster.'
  },
  {
    id: 'moletom-origin-charcoal',
    category: 'moletons',
    brand: 'PACE',
    name: 'Moletom "Origin" Heavy Oversized',
    price: 640,
    badge: 'Novo',
    images: ['moletom-origin-charcoal.jpg'],
    colors: [{ name: 'Chumbo', hex: '#3b3d40' }],
    sizes: CLOTHING_SIZES,
    description: 'Heavy oversized em tom chumbo com lavagem suave. Peça de inverno com muita presença.',
    material: '100% algodão, 450 g/m².'
  },
  {
    id: 'moletom-sand',
    category: 'moletons',
    brand: 'VIRTUE',
    name: 'Moletom Canguru Essential Sand',
    price: 279,
    oldPrice: 329,
    badge: '-15%',
    badgeIsHot: true,
    images: ['moletom-sand.jpg'],
    colors: [{ name: 'Areia', hex: '#cdbb98' }],
    sizes: CLOTHING_SIZES,
    description: 'Canguru essencial em tom areia, com punhos e barra de ribana.',
    material: '80% algodão, 20% poliéster.'
  },
  {
    id: 'moletom-core-white',
    category: 'moletons',
    brand: 'Urban Supply',
    name: 'Hoodie Core White',
    price: 109.9,
    images: ['moletom-core-white.jpg'],
    colors: [{ name: 'Branco', hex: '#f2f2f0' }],
    sizes: CLOTHING_SIZES,
    description: 'Hoodie básico branco, leve e versátil.',
    material: '70% algodão, 30% poliéster.'
  },
  {
    id: 'moletom-grayscale',
    category: 'moletons',
    brand: 'CLASS',
    name: 'Moletom Grayscale',
    price: 119.9,
    images: ['moletom-grayscale-black.jpg'],
    colors: [
      { name: 'Preto', hex: '#0a0a0a', image: 'moletom-grayscale-black.jpg' },
      { name: 'Cinza', hex: '#9a9a9a', image: 'moletom-grayscale-gray.jpg' }
    ],
    sizes: CLOTHING_SIZES,
    description: 'Moletom liso em escala de cinza, corte reto e toque macio.',
    material: '70% algodão, 30% poliéster.'
  },
  {
    id: 'moletom-palm-black',
    category: 'moletons',
    brand: 'PALM ANGELS',
    name: 'Moletom Canguru Palm Black',
    price: 520,
    images: ['moletom-palm-black.jpg'],
    colors: [{ name: 'Preto', hex: '#0a0a0a' }],
    sizes: CLOTHING_SIZES,
    description: 'Canguru preto com estampa de palmeiras nas costas.',
    material: '100% algodão.'
  },

  {
    id: 'tenis-vantage',
    category: 'tenis',
    brand: 'VIRTUE',
    name: 'Sneaker L-01 "Vantage"',
    price: 890,
    images: ['tenis-vantage.jpg'],
    colors: [{ name: 'Branco', hex: '#f2f2f0' }],
    sizes: SHOE_SIZES,
    description: 'Sneaker de couro com solado vulcanizado e linhas limpas.',
    material: 'Couro legítimo e borracha.'
  },
  {
    id: 'tenis-arch-white',
    category: 'tenis',
    brand: 'PALM ANGELS',
    name: 'Tênis Branco Arch',
    price: 790,
    images: ['tenis-arch-white.jpg'],
    colors: [{ name: 'Branco', hex: '#f2f2f0' }],
    sizes: SHOE_SIZES,
    description: 'Tênis branco de cano baixo com detalhe em arco lateral.',
    material: 'Couro sintético premium.'
  },

  {
    id: 'jaqueta-jeans-indigo',
    category: 'jaquetas',
    brand: 'RARE FOUND',
    name: 'Jaqueta Jeans Índigo',
    price: 419,
    images: ['jaqueta-jeans.jpg'],
    colors: [{ name: 'Azul índigo', hex: '#1f2d4d' }],
    sizes: CLOTHING_SIZES,
    description: 'Jaqueta jeans índigo com botões metálicos, bolsos frontais com aba e corte reto.',
    material: '100% algodão denim.'
  },
  {
    id: 'bermuda-esportiva-preta',
    category: 'bermudas',
    brand: 'RARE FOUND',
    name: 'Bermuda Esportiva Preta',
    price: 249,
    images: ['bermuda-preta.jpg'],
    colors: [{ name: 'Preto', hex: '#0a0a0a' }],
    sizes: CLOTHING_SIZES,
    description: 'Bermuda com cintura elástica e cordão, bolsos laterais com zíper e caimento solto.',
    material: 'Poliéster com elastano.'
  },

  {
    id: 'bone-trucker',
    category: 'acessorios',
    brand: 'HIGH COMPANY',
    name: 'Boné Trucker Global',
    price: 189,
    images: ['bone-trucker.jpg'],
    colors: [{ name: 'Padrão', hex: '#2a2a2a' }],
    sizes: ONE_SIZE,
    description: 'Boné trucker com tela traseira e regulagem snapback.',
    material: 'Algodão e poliéster.'
  },
  {
    id: 'tote-archive',
    category: 'acessorios',
    brand: 'VIRTUE',
    name: 'Tote Bag Canvas "Archive"',
    price: 120,
    images: ['tote-archive.jpg'],
    colors: [{ name: 'Cru', hex: '#e2d9c4' }],
    sizes: ONE_SIZE,
    description: 'Tote bag de lona resistente com estampa Archive.',
    material: '100% algodão canvas.'
  },
  {
    id: 'bucket-hat',
    category: 'acessorios',
    brand: 'HIGH COMPANY',
    name: 'Bucket Hat 2.0',
    price: 149,
    images: ['bucket-hat.jpg'],
    colors: [{ name: 'Preto', hex: '#0a0a0a' }],
    sizes: ONE_SIZE,
    description: 'Bucket hat com aba média e etiqueta bordada.',
    material: '100% algodão.'
  },
  {
    id: 'meias-logo',
    category: 'acessorios',
    brand: 'CLASS',
    name: 'Logo Socks (3-pack)',
    price: 79.9,
    images: ['meias-logo.jpg'],
    colors: [{ name: 'Branco', hex: '#f2f2f0' }],
    sizes: ONE_SIZE,
    description: 'Kit com 3 pares de meias cano médio com logo.',
    material: '80% algodão, 20% poliamida.'
  },
  {
    id: 'cinto-couro-largo',
    category: 'acessorios',
    brand: 'GNDR LAB',
    name: 'Cinto Couro Largo',
    price: 139,
    images: ['cinto-couro.jpg'],
    colors: [{ name: 'Caramelo', hex: '#8a4a2b' }],
    sizes: ONE_SIZE,
    description: 'Cinto largo de couro com fivela dourada em formato arredondado.',
    material: 'Couro e metal.'
  }
];

function productById(id) {
  return PRODUCTS.find((product) => product.id === id);
}
