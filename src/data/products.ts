export interface Product {
  id: string;
  name: string;
  category: 'organic' | 'mineral' | 'liquid' | 'granular' | 'specialty' | 'powder' | 'liquids';
  image: string;
  shortDescription: string;
  fullDescription: string;
  features: string[];
  usage: string[];
  ingredients: string[];
  safetyTips: string[];
  price: string;
  inStock: boolean;
  application: string;
}

export const products: Product[] = [
  {
    id: 'aamplus',
    name: 'AAM+',
    category: 'specialty',
    image: '/uploads/AAM-plus.png',
    shortDescription: '(Micronutrient Fertilizer Mixture for Mango) FOR FOLIAR SPRAY',
    fullDescription: 'Aam+ is an Essential Micronutrient mixture product for spray application. Aam+ is 100% Watersoluble fertilizer to facilitate efficient absorption of nutrients by the leaves. It helps better utilisation of major nutrients, increases immunity power of plants against adverse conditions, takes part in enzymatic functions acting as a catalytic agent to produce vigorous growth, and helps to increase yield and quality of the farm produce.',
    features: [
      'Helps better utilisation of major nutrients',
      'Increases the immunity power of plants against adverse conditions',
      'Takes part in enzymatic functions and acts as a catalytic agent to produce vigorous growth',
      'Helps to increase yield and quality of the farm produce',
      '100% Watersoluble fertilizer facilitating efficient nutrient absorption'
    ],
    usage: [
      'Use Aam+ 2-3ml per 1 litre of water, Depending upon the Crop age & Growth Stages'
    ],
    ingredients: ['Micronutrient Fertilizer Mixture for Mango'],
    safetyTips: ['Keep out of reach of children', 'Store in a cool, dry place', 'Wear protective gear during application'],
    price: 'Contact for Price',
    inStock: true,
    application: 'Available Packing: 250ml, 500ml, 1000ml & 5 Ltr.'
  },
  {
    id: 'amigrowplus',
    name: 'AMIGROW+',
    category: 'specialty',
    image: '/uploads/AMIGROW-plus.png',
    shortDescription: 'Protein hydrolysate 18% (Animal source) (Liquid) Mixture of Amino Acid Bio Stimulant Product',
    fullDescription: 'AMIGROW+ is a highly effective, natural agent which promotes photosynthesis in turn leading to promotion of carbohydrates, protein, oils and fats. It offers an instant, energy-efficient plant nitrogen supply, increases resistance against diseases like chlorosis and ability to withstand stresses such as drought. Several of the amino acids in AMIGROW+ are recognized plant growth promotants. It also promotes the ripening and colouring process in fruit.',
    features: [
      'Promotes photosynthesis and production of carbohydrates, protein, oils and fats',
      'Protein building - Instant, energy-efficient plant nitrogen supply',
      'Immune support - Increases resistance against diseases and drought stress',
      'Plant growth promotion - Contains recognized plant growth promotants',
      'Promotes ripening and colouring process in fruit'
    ],
    usage: [
      'Dissolve 3-4 ml / 1Ltr. of water',
      '1st SPRAY: 7days after transplantation of early vegetable phase',
      '2nd SPRAY: During Flowering Stage',
      '3rd SPRAY: During panicle initiation or fruit formation stage'
    ],
    ingredients: ['Protein hydrolysate 18% (Animal source)', 'Liquid Mixture of Amino Acid'],
    safetyTips: ['Keep out of reach of children', 'Store in a cool, dry place', 'Wear protective gear during application'],
    price: 'Contact for Price',
    inStock: true,
    application: 'Available Packing: 100ml, 250ml, 500ml, 1000ml & 5 Ltr.'
  },
  {
    id: 'bananaplus',
    name: 'BANANA+',
    category: 'specialty',
    image: '/uploads/BANANA-plus.png',
    shortDescription: '(Micronutrient Fertilizer Mixture) FOR FOLIAR SPRAY',
    fullDescription: 'Banana+ is an Essential Micronutrient mixture product for Spray Application. Banana+ is 100% Watersoluble Fertilizer to facilitate efficient absorption of nutrients by the leaves. It helps better utilisation of major nutrients, increases the immunity power of plants against adverse conditions, takes part in enzymatic functions acting as a catalytic agent to produce vigorous growth, and helps to increase yield and quality of the farm produce.',
    features: [
      'Helps better utilisation of major nutrients',
      'Increases the immunity power of plants against adverse conditions',
      'Takes part in enzymatic functions and acts as a catalytic agent to produce vigorous growth',
      'Helps to increase yield and quality of the farm produce',
      '100% Watersoluble Fertilizer facilitating efficient nutrient absorption'
    ],
    usage: [
      'Use Banana+ 2-3ml per 1 litre of water, Depending upon the Crop age & Growth Stages'
    ],
    ingredients: ['Micronutrient Fertilizer Mixture'],
    safetyTips: ['Keep out of reach of children', 'Store in a cool, dry place', 'Wear protective gear during application'],
    price: 'Contact for Price',
    inStock: true,
    application: 'Available Packing: 250ml, 500ml, 1000ml & 5 Ltr.'
  },
  {
    id: 'nutri-bhushakti',
    name: 'NUTRI BHUSHAKTI',
    category: 'specialty',
    image: '/uploads/NUTRI-BHUSHAKTI.png',
    shortDescription: 'Micronutrient Fertilizer Mixture For Soil Application',
    fullDescription: 'NUTRI BHUSHAKTI is a different product which is having essential micronutrients and traces of macro nutrients which helps the crop in all stages of plant growth and development and finally this product will help to get better yield in terms of qualitatively and quantitatively.',
    features: [
      'Improves photosynthesis in plants and entire plants will become greenish',
      'It will overcome micronutrient deficiency in all crops',
      'Application of NUTRI BHUSHAKTI improves and increases uptake of nutrients available in soil',
      'It contains both macro and micro nutrient in a balance proportion',
      'Improve disease resistance in all crops'
    ],
    usage: [
      'Dosage : 8-10Kg / Acre (125gm to 150gm / Plant)'
    ],
    ingredients: ['Micronutrient Fertilizer Mixture', 'Essential micronutrients', 'Traces of macro nutrients'],
    safetyTips: ['Keep out of reach of children', 'Store in a cool, dry place', 'Wear protective gear during application'],
    price: 'Contact for Price',
    inStock: true,
    application: 'Available Packing : 5KG, 10KG'
  },
  {
    id: 'boron_plus',
    name: 'BORON+',
    category: 'specialty',
    image: '/uploads/BORON-plus.png',
    shortDescription: 'BORAX (SODIUM TETRA BORATE) (B - 10.5%) MICRONUTRIENT FERTILIZER SOIL APPLICATION',
    fullDescription: 'BORON+ is a micronutrient fertilizer for soil application containing Borax (Sodium Tetra Borate) with 10.5% Boron. It plays a vital role in the proper development of roots and shoots, improves germination and metabolic processes, and enhances flowering, tillering, and fruit formation.',
    features: [
      'It plays a vital role in proper development of roots and shoots',
      'Germination, metabolic process can be improved',
      'Flowering, Tillering and fruit formation will be improved'
    ],
    usage: [
      'Dosage : Apply 2-3 kg / acre as a soil application',
      'Crops recommended: Paddy, Maize, Sugarcane, Cotton, Fruits, all vegetables crops like Potato, Tomato, Horticulture crops and plantation crops'
    ],
    ingredients: [
      'BORAX (Sodium Tetra Borate) Na2B4O7.10H2O',
      'Content of Boron (as B) % by wt (minimum) 10.5',
      'pH 9.0-9.5'
    ],
    safetyTips: ['Keep out of reach of children', 'Store in a cool, dry place', 'Wear protective gear during application'],
    price: 'Contact for Price',
    inStock: true,
    application: 'Available Packing : 1 KG, 10 KG, 25 KG'
  },
  {
    id: 'boronplus',
    name: 'BORONPLUS',
    category: 'specialty',
    image: '/uploads/BORONPLUS.png',
    shortDescription: 'Boron 20% (Disodium Octaborate Tetrahydrate) Foliar Application',
    fullDescription: 'BORONPLUS is a water-soluble boron fertilizer containing Boron 20% as Disodium Octaborate Tetrahydrate. It plays a vital role in the proper development of roots and shoots, improves germination and metabolic processes, and enhances flowering, tillering, and fruit formation.',
    features: [
      'Plays a vital role in proper development of roots and shoots',
      'Improves germination and metabolic processes',
      'Enhances flowering, tillering, and fruit formation',
      'Boron 20% Disodium Octaborate Tetrahydrate'
    ],
    usage: [
      'Crops recommended: Paddy, maize, sugarcane, cotton, fruits, all vegetables crop like Potato, Tomato, Horticulture Crops and plantation crops'
    ],
    ingredients: ['Boron 20% (Disodium Octaborate Tetrahydrate)'],
    safetyTips: ['Keep out of reach of children', 'Store in a cool, dry place', 'Wear protective gear during application'],
    price: 'Contact for Price',
    inStock: true,
    application: 'Available Packing: 100g, 250g, 500g & 1Kg'
  },
  {
    id: 'calbon',
    name: 'CALBON',
    category: 'specialty',
    image: '/uploads/CALBON.png',
    shortDescription: 'Micro Nutrient Fertiliser Foliar Application',
    fullDescription: 'CALBON is a specialized Micro Nutrient Fertiliser designed for foliar application. It ensures flower & fruit set at initial levels of development, reduces fruit and bloom abortion, and reduces moisture stress in plants. It maintains adequate uptake of Boron and CALBON into plants, helps in producing stronger cells, makes plants more resistant against diseases, prevents fruit-rot and cracking, improves shelf life of vegetables and fruits, and assures profit to farmers.',
    features: [
      'Ensures flower & fruit set at initial levels of development',
      'Reduces fruit and bloom abortion',
      'Reduces moisture stress in plants',
      'Maintains adequate uptake of Boron and CALBON in to plants',
      'Helps in production stronger cells in the plant and makes it more resistant against diseases',
      'Prevents fruit-rot and cracking',
      'Improves Shelf Life of vegetables and fruits & assures profit to the farmers'
    ],
    usage: [
      'Dissolve 2-3 gms of CALBON per liter of water',
      '2nd sprays is recommended with an interval of 15 days',
      'Crops Recommended : Tomato, Apple, Watermelon, Pomegranate, Wheat, Mustard, Other vegetables and all horticulture crops'
    ],
    ingredients: ['Calcium 18%', 'Boron 5%'],
    safetyTips: ['Keep out of reach of children', 'Store in a cool, dry place', 'Wear protective gear during application'],
    price: 'Contact for Price',
    inStock: true,
    application: 'Available Packing : 100g, 250g, 500g & 1Kg'
  },
  {
    id: 'calon',
    name: 'CALON',
    category: 'specialty',
    image: '/uploads/CALON.png',
    shortDescription: 'Calcium Chloride 27% Straight Micronutrient Fertilizer (Foliar Application)',
    fullDescription: 'CALON is a Calcium Chloride 27% Straight Micronutrient Fertilizer designed for foliar application. It helps increase nutrient uptake, promotes strong stands, and is pivotal for crop yield. It helps maintain soil nutrition balance, reduces salinity, improves water penetration, and reduces plant stress. By promoting the release of reserve calcium from the soil, it provides immediate calcium to plants, strengthening cells and increasing disease resistance. It effectively prevents bitter pits in apples, blossom-end rot in tomatoes, and general fruit-rot and cracking.',
    features: [
      'Helps to increase the uptake of all nutrients',
      'Promotes strong stand and is pivotal in the determination of crop yield',
      'Helps maintain a nutrition balance in the soil, reduce soil salinity, and improve water penetration',
      'Reduces plant stress',
      'Promotes the release of reserve calcium from the soil, providing immediate calcium to the plant',
      'Makes the plants cells stronger and increases resistance against diseases',
      'Prevents bitter pits (Apple), blossom-end rot (Tomatoes), fruit-rot and cracking'
    ],
    usage: [
      'Dissolve 4-5 grams of CALON per liter of water and spray',
      '2-3 sprays are recommended during the cropping season'
    ],
    ingredients: ['Calcium Chloride 27%'],
    safetyTips: ['Keep out of reach of children', 'Store in a cool, dry place', 'Wear protective gear during application'],
    price: 'Contact for Price',
    inStock: true,
    application: 'Available Packing : 1 KG'
  },
  {
    id: 'citronplus',
    name: 'CITRON+',
    category: 'specialty',
    image: '/uploads/CITRON-plus.png',
    shortDescription: '(Micronutrient Fertilizer Mixture) FOR FOLIAR SPRAY',
    fullDescription: 'CITRON + is an Essential Micronutrient mixture product for Spray Application. CITRON + is 100% Watersoluble Fertilizer to facilitate efficient absorption of nutrients by the leaves. It helps better utilisation of major nutrients, increases the immunity power of plants against adverse conditions, takes part in enzymatic functions acting as a catalytic agent to produce vigorous growth, and helps to increase yield and quality of the farm produce.',
    features: [
      'Helps better utilisation of major nutrients',
      'Increases the immunity power of plants against adverse conditions',
      'Takes part in enzymatic functions and acts as a catalytic agent to produce vigorous growth',
      'Helps to increase yield and quality of the farm produce',
      '100% Watersoluble Fertilizer facilitating efficient nutrient absorption'
    ],
    usage: [
      'Use CITRON 2-3ml per 1 litre of water, Depending upon the Crop age & Growth Stages',
      'CITRON + is recommended for Citrus crops'
    ],
    ingredients: ['Micronutrient Fertilizer Mixture'],
    safetyTips: ['Keep out of reach of children', 'Store in a cool, dry place', 'Wear protective gear during application'],
    price: 'Contact for Price',
    inStock: true,
    application: 'Available Packing: 250ml, 500ml, 1000ml & 5 Ltr.'
  },
  {
    id: 'dymond-plus-33',
    name: 'DYMOND + 33',
    category: 'specialty',
    image: '/uploads/DYMOND--plus-33.png',
    shortDescription: 'Zinc Monohydrate-33% Foliar Application',
    fullDescription: 'DYMOND + 33 is a premium Zinc Monohydrate-33% fertilizer designed for foliar application. It is a quality assured Zinc product with 100% purity that effectively controls Zinc deficiency and boosts crop yield and quality. It is particularly effective against yellowing (Khaira) disease in paddy.',
    features: [
      'Mainly controls yellowing (Khaira) disease in paddy',
      'Controls Zinc deficiency in Maize, Sugarcane and all Agri and Horticultural crops',
      'Quality assured Zinc with 100% purity',
      'Boosts the yield and improves the quality of crop',
      'Ensures applied crops will never show deficiency'
    ],
    usage: [
      'Dosage: Apply 2-3 gms/ Litrs of water as a foliar application',
      'Recommended crops: Paddy, Maize, Sugarcane, Cotton, Fruits, all vegetable crops like Potato, Tomato, Horticulture crops and Plantation Crops'
    ],
    ingredients: ['Zinc Monohydrate-33%'],
    safetyTips: ['Keep out of reach of children', 'Store in a cool, dry place', 'Wear protective gear during application'],
    price: 'Contact for Price',
    inStock: true,
    application: 'Available Packing : 250g, 500g, 1 KG'
  },
  {
    id: 'dymond---12',
    name: 'DYMOND - 12',
    category: 'specialty',
    image: '/uploads/DYMOND---12.png',
    shortDescription: 'Chelated Zinc as Zn-EDTA - 12% Zn Straight Micronutrient fertilizer (Foliar Application)',
    fullDescription: 'As per the research in crops required not only micronutrients are most agriculture the high yielding major nutrients but also essential Off micronutrients Zinc element plays an important role in crop production. Because of the Zinc deficiency in the soil now a days crop yield decreasing gradually. To improve the yield and quality of crops SAKASH AGRO TECH PVT. LTD. has introduced ultimate quality Zinc product like Zinc -12% which contains chelated Zinc 12%.',
    features: [
      'Plays an important role in crop production',
      'Addresses Zinc deficiency in soil',
      'Improves yield and quality of crops',
      'Contains chelated Zinc 12%'
    ],
    usage: [
      '2gms/1lt of water or 250gms/1 Acre',
      'For Better yield/result 2 Sprays at an interval of 20days is recommended'
    ],
    ingredients: ['Chelated Zinc as Zn-EDTA - 12% Zn'],
    safetyTips: ['Keep out of reach of children', 'Store in a cool, dry place', 'Wear protective gear during application'],
    price: 'Contact for Price',
    inStock: true,
    application: 'Available Packing : 100g, 250g & 500gm'
  },
  {
    id: 'dymond-21',
    name: 'DYMOND-21',
    category: 'specialty',
    image: '/uploads/DYMOND-21.png',
    shortDescription: 'ZINC SULPHATE (Zn – 21%) MICRONUTRIENT FERTILIZER SOIL APPLICATION',
    fullDescription: 'DYMOND-21 is a ZINC SULPHATE (Zn – 21%) MICRONUTRIENT FERTILIZER for SOIL APPLICATION. Zinc promotes growth hormones and starch formation. It promotes seed maturation and production. It is required by several enzyme systems and auxins in protein synthesis. It also improves disease resistance in plants.',
    features: [
      'Promotes growth hormones and starch formation',
      'Promotes seed maturation and production',
      'Required by several enzyme systems and auxins in protein synthesis',
      'Improves disease resistance in plants'
    ],
    usage: [
      'Soil Application: Apply minimum 5.0 kg per acre at the time of sowing or transplanting',
      'Horticulture crops: Apply 50-75 g per tree/palm, once in six months',
      'Foliar Application: Dissolve 3.0 g in one litre of water and spray on both surface of the leaves'
    ],
    ingredients: ['Zinc 21.0%'],
    safetyTips: ['Keep out of reach of children', 'Store in a cool, dry place', 'Wear protective gear during application'],
    price: 'Contact for Price',
    inStock: true,
    application: 'Available Packing : 1 Kg'
  },
  {
    id: 'green-plus',
    name: 'GREEN PLUS',
    category: 'specialty',
    image: '/uploads/GREEN-PLUS.png',
    shortDescription: '(Micronutrient Fertilizer Mixture) FOR FOLIAR SPRAY',
    fullDescription: 'Green Plus is an Essential Micronutrient mixture product for spray application. Green Plus is 100% Watersoluble fertilizer to facilitate efficient absorption of nutrients by the leaves. It helps better utilisation of major nutrients, increases immunity power of plants against adverse conditions, takes part in enzymatic functions acting as a catalytic agent to produce vigorous growth, and helps to increase yield and quality of the farm produce.',
    features: [
      'Helps better utilisation of major nutrients',
      'Increases the immunity power of plants against adverse conditions',
      'Takes part in enzymatic functions and acts as a catalytic agent to produce vigorous growth',
      'Helps to increase yield and quality of the farm produce',
      '100% Watersoluble fertilizer facilitating efficient nutrient absorption'
    ],
    usage: [
      'Green Plus 2-3 ml per 1 litre of water, Depending upon the Crop age & Growth Stages',
      'Recommended for Cereal crops, Oil Seeds, Vegetables & All Plantation Crops'
    ],
    ingredients: ['Micronutrient Fertilizer Mixture'],
    safetyTips: ['Keep out of reach of children', 'Store in a cool, dry place', 'Wear protective gear during application'],
    price: 'Contact for Price',
    inStock: true,
    application: 'Available Packing: 100ml, 250ml, 500ml, 1000ml & 5 Ltr.'
  },
  {
    id: 'hi-power',
    name: 'HI-POWER',
    category: 'specialty',
    image: '/uploads/HI-POWER.png',
    shortDescription: 'Bio Stimulant Product For Foliar Application',
    fullDescription: 'HI-POWER is a Bio Stimulant Product for Foliar Application. It improves soil structure, promotes root development, and increases yield. It increases microbiological activity of soil and stimulate plant growth.',
    features: [
      'Improve the soil structure by increasing the air availability around root zone and the capacity of water holding and cation exchange',
      'Promote root development & tillers in Paddy & other crops',
      'Improve nutrient uptake by the root system and reduce nutrient losses',
      'Increase microbiological activity of soil and stimulate plant growth (increased biomass production)',
      'Increase yield and improves quality of plants'
    ],
    usage: [
      'Dissolve 2g in one liter of water',
      'Repeat the spray for every 15days interval'
    ],
    ingredients: [
      'Humic Acid - 90%',
      'Fulvic Acid - 10%',
      'Appearance - Shiny Crystal Flakes/ powder',
      'pH: 9 to 10%'
    ],
    safetyTips: ['Keep out of reach of children', 'Store in a cool, dry place', 'Wear protective gear during application'],
    price: 'Contact for Price',
    inStock: true,
    application: 'Available Packing : 100g, 250g, 500g'
  },
  {
    id: 'high-zing',
    name: 'NUTRI HIGH ZINC',
    category: 'specialty',
    image: '/uploads/NUTRI-HIGH-ZINC.png',
    shortDescription: 'Micronutrient Fertilizer Mixture For Soil Application',
    fullDescription: 'NUTRI HIGH ZINC is a different product which is having essential micronutrients and traces of macro nutrients which helps the crop in all stages of plant growth and development and finally this product will help to get better yield in terms of qualitatively and quantitatively.',
    features: [
      'Improves photosynthesis in plants and entire plants will become greenish',
      'It will overcome micronutrient deficiency in all crops',
      'Application of NUTRI HIGH ZINC improves and increases uptake of nutrients available in soil',
      'It contains both macro and micro nutrient in a balance proportion',
      'Improve disease resistance in all crops'
    ],
    usage: [
      'Dosage : 8-10Kg / Acre (125gm to 150gm / Plant)'
    ],
    ingredients: ['Micronutrient Fertilizer Mixture', 'Traces of Macro Nutrients'],
    safetyTips: ['Keep out of reach of children', 'Store in a cool, dry place', 'Wear protective gear during application'],
    price: 'Contact for Price',
    inStock: true,
    application: 'Available Packing : 5KG, 10KG'
  },
  {
    id: 'humigrowplus',
    name: 'HUMIGROW+',
    category: 'specialty',
    image: '/uploads/HUMIGROW-plus.png',
    shortDescription: 'Humic acid and Fulvic acid 19.5 % (Liquid) Bio Stimulant Product',
    fullDescription: 'HUMIGROW+ contains organic constituents like humic, humates & Fulvic acids supported by naturally containing essential trace elements. Humic acids are reported to increase permeability of plant membranes, resulting in higher metabolic activity due to increased nutrient\'s availability & enzyme activity. Humic acids build up organic matter which is required for microbial growth. It stimulates the respiration rates of seeding which leads to quicker germination. It also protects plants from chlorosis, enhance photosynthesis, increases vegetative growth which results in higher yields & healthier crops.',
    features: [
      'Increases permeability of plant membranes',
      'Boosts metabolic activity via increased nutrient availability & enzyme activity',
      'Builds organic matter required for microbial growth',
      'Stimulates respiration rates of seeding for quicker germination',
      'Protects plants from chlorosis and enhances photosynthesis',
      'Increases vegetative growth leading to higher yields & healthier crops'
    ],
    usage: [
      'Dissolve 3-4 ml / 1Ltr. of water',
      '1st SPRAY: 7days after transplantation of early vegetable phase',
      '2nd SPRAY: During Flowering Stage',
      '3rd SPRAY: During panicle initiation or fruit formation stage'
    ],
    ingredients: ['Humic acid and Fulvic acid 19.5 % (Liquid)'],
    safetyTips: ['Keep out of reach of children', 'Store in a cool, dry place', 'Wear protective gear during application'],
    price: 'Contact for Price',
    inStock: true,
    application: 'Available Packing: 100ml, 250ml, 500ml, 1000ml & 5 Ltr.'
  },
  {
    id: 'kalpam',
    name: 'KALPAM',
    category: 'specialty',
    image: '/uploads/KALPAM.png',
    shortDescription: 'Ascophyllum Nodosum 15% (FS) Organic Seaweed Mixture Biostimulant',
    fullDescription: 'KALPAM is an Ascophyllum Nodosum 15% (FS) Organic Seaweed Mixture designed for foliar application. It acts as a biostimulant product suitable for all agriculture crops. It promotes shoot, root, and stem elongation, increases microbial activity in the soil, and enhances root development for maximum nutrient uptake. It also improves photosynthesis, making plants greenish, helps overcome micronutrient deficiency, and develops resistance against pests, diseases, and abiotic stress.',
    features: [
      'Increase Plants Shoot, Root, Stem Elongation',
      'Increase the Microbial Activity in the soil',
      'Improve the better root development that maximise the nutrient uptake',
      'Improves photosynthesis in plants & entire plants will become greenish',
      'Helps to overcome micronutrient deficiency in all crop',
      'Helps to develope resistant against pest, disease & Abiotic stress'
    ],
    usage: [
      '1Kg/ Acre, (use 180-200 Ltr. of Water)',
      'Repeated application with 15-20 days interval will keep crop Healthy Better growth'
    ],
    ingredients: ['Seaweed Extract - 15%', 'Solvant - 2%', 'pH - 10-11%', 'Colour - Dark Brown'],
    safetyTips: ['Keep out of reach of children', 'Store in a cool, dry place', 'Wear protective gear during application'],
    price: 'Contact for Price',
    inStock: true,
    application: 'Available Packing : 100g, 250g, 500g & 1 Kg'
  },
  {
    id: 'nutri-gold',
    name: 'NUTRI GOLD',
    category: 'specialty',
    image: '/uploads/NUTRI-GOLD.png',
    shortDescription: 'Mixture of Seaweed extract and Humic acid (Granule) Biostimulant product SOIL APPLICATION',
    fullDescription: 'NUTRI GOLD Bio stimulant product can be used in agriculture to Improve soil quality. It can improve the chemical, physical, and biological properties of soil. They can also help maintain the soil\'s C:N ratio and increase its water-holding capacity.',
    features: [
      'Increase nutrient uptake: Organic granules can increase the amount of nutrients that plants can absorb',
      'Promote root development: Organic granules can help promote root development in plants',
      'Improve crop yield: Organic granules can help increase the yield of crops',
      'Stimulate soil microorganisms: Organic granules can stimulate the activities of soil microorganisms',
      'Control pests: Organic granules can help control nematodes and fungus',
      'Provide a steady supply of nutrients: Organic granules can provide nutrients to plants gradually, preventing nutrient leaching'
    ],
    usage: [
      '8-10Kg Per 1 Acre'
    ],
    ingredients: ['Mixture of Seaweed extract and Humic acid (Granule)'],
    safetyTips: ['Keep out of reach of children', 'Store in a cool, dry place', 'Wear protective gear during application'],
    price: 'Contact for Price',
    inStock: true,
    application: 'Available Packing : 1 KG'
  },
  {
    id: 'nutri-grow',
    name: 'NUTRI GROW',
    category: 'specialty',
    image: '/uploads/NUTRI-GROW.png',
    shortDescription: 'Micronutrient Fertilizer Mixture (Foliar Application)',
    fullDescription: 'NUTRI GROW is a Micronutrient Fertilizer Mixture designed for Foliar Application. It improves photosynthesis, overcomes micronutrient deficiency, increases nutrient uptake from soil, and improves disease resistance in all crops. Required in small quantity but increases yield both qualitative and quantitatively.',
    features: [
      'Improves photosynthesis in plants and entire plants will become greenish',
      'Helps to overcome micronutrient deficiency in all crops',
      'Improves and increases uptake of nutrients available in soil',
      'Improves disease resistance in all crops',
      'Required in small quantity but increases yield both qualitative and quantitatively'
    ],
    usage: [
      '500ml of NUTRI GROW in 200 ltr of water per acre',
      'Repeated application with 15-20 days interval will keep the crop Healthy'
    ],
    ingredients: ['Micronutrient Fertilizer Mixture'],
    safetyTips: ['Keep out of reach of children', 'Store in a cool, dry place', 'Wear protective gear during application'],
    price: 'Contact for Price',
    inStock: true,
    application: 'Available Packing: 100ml, 250ml, 500ml, 1000ml & 5 Ltr. 20 Ltr'
  },
  {
    id: 'nutri-ferti-12',
    name: 'NUTRI-FERTI 12:61:0',
    category: 'specialty',
    image: '/uploads/NUTRI-FERTI-12-61-0.png',
    shortDescription: '100% Water Soluble Complex Fertilizer N:P:K 12:61:00 Mono Ammonium Phosphate (MAP)',
    fullDescription: 'NUTRI-FERTI (12:61:00) Mono Ammonium Phosphate (MAP) contains Nitrogen and Phosphorus in easily soluble and available form. It improves root, shoot growth along with health of the plants. Reduces flower drop and increases fruit setting. Improves the yield both by quality and quantity. Note: NUTRI-FERTI should not be mixed with Calcium and Magnesium containing fertilizer.',
    features: [
      'Contains Nitrogen and Phosphorus in easily soluble and available form',
      'Improves root and shoot growth along with health of the plants',
      'Reduces flower drop and increases fruit setting',
      'Improves the yield both by quality and quantity',
      'Should not be mixed with Calcium and Magnesium containing fertilizer'
    ],
    usage: [
      'Dissolve 4 to 5 grams in one litre of water and spray on plants',
      'Fertigation: Use 1 to 3 kg of NUTRI-FERTI per acre either through drip or through sprinkler system of irrigation'
    ],
    ingredients: ['12% Nitrogen', 'Phosphorus 61% in 100% water soluble form'],
    safetyTips: ['Keep out of reach of children', 'Store in a cool, dry place', 'Wear protective gear during application'],
    price: 'Contact for Price',
    inStock: true,
    application: 'Available Packing : 1 Kg'
  },
  {
    id: 'nutri-ferti-13',
    name: 'NUTRI-FERTI 13:40:13',
    category: 'specialty',
    image: '/uploads/NUTRI-FERTI-13-40-13.png',
    shortDescription: '100% Water Soluble Complex Fertilizer N:P:K 13:40:13',
    fullDescription: 'NUTRI-FERTI (13:40:13) is a 100% Water Soluble Complex Fertilizer. It helps in better nutrient uptake and thereby increases the yield and quality of the produce.',
    features: [
      '100% Water Soluble Complex Fertilizer',
      'High phosphorous content',
      'Increases yield and quality of produce'
    ],
    usage: [
      'Consult label for specific dosage',
      'Apply during suitable weather',
      'Compatible with most agrochemicals'
    ],
    ingredients: ['13% Nitrogen', '40% Phosphorous', '13% Potassium'],
    safetyTips: ['Keep out of reach of children', 'Store in a cool, dry place', 'Wear protective gear during application'],
    price: 'Contact for Price',
    inStock: true,
    application: 'Available Packing : 1 Kg'
  },
  {
    id: 'nutri-ferti-n',
    name: 'NUTRI-FERTI 0:52:34',
    category: 'specialty',
    image: '/uploads/NUTRI-FERTI-0-52-34.png',
    shortDescription: '100% Water Soluble Complex Fertilizer N:P:K 00:52:34 Mono Potassium Phosphate (MKP)',
    fullDescription: 'NUTRI-FERTI (0:52:34) is a 100% Water Soluble Complex Fertilizer (Mono Potassium Phosphate - MKP). Application of NUTRI-FERTI fertilizer either through foliar spray or fertigation will help in better nutrient uptake and thereby increases the yield and quality of the produce. Plants become healthy and develop resistance against diseases and pests.',
    features: [
      '100% Water Soluble Complex Fertilizer',
      'Better nutrient uptake',
      'Increases yield and quality of produce',
      'Plants become healthy and develop resistance against diseases and pests'
    ],
    usage: [
      'Foliar Spray: Dissolve 3.0 to 5.0 g per litre of water and spray on both the surface of the leaves',
      'Fertigation: 2 to 3 kg per acre'
    ],
    ingredients: ['52% Phosphorous', '34% Potassium in 100% water soluble form'],
    safetyTips: ['Keep out of reach of children', 'Store in a cool, dry place', 'Wear protective gear during application'],
    price: 'Contact for Price',
    inStock: true,
    application: 'Available Packing : 1 Kg'
  },
  {
    id: 'nutri-ferti-p',
    name: 'NUTRI-FERTI 0:0:50',
    category: 'specialty',
    image: '/uploads/NUTRI-FERTI-0-0-50.png',
    shortDescription: '100% Water Soluble Complex Fertilizer N:P:K 00:00:50 Potassium Sulphate (SOP)',
    fullDescription: 'NUTRI-FERTI (0:0:50) Potassium Sulphate (SOP) helps in better absorption of Potassium & Sulphur. It improves fruit development, oil content in seeds, size and color of the fruit. It also helps in plant growth, maturity and enhances yield both by quality and quantity.',
    features: [
      'Better absorption of Potassium & Sulphur',
      'Improves fruit development, oil content in seeds, size and color of the fruit',
      'Helps in plant growth, maturity and enhances yield both by quality and quantity',
      'Contains 50 percent Potassium as K2O (100% water soluble)',
      'Provides sulphur in soluble form'
    ],
    usage: [
      'Foliar Spray: Dissolve 3 to 5 g per litre of water and spray on the both surface of the leaves',
      'Fertigation: Apply 2 to 3 kg per acre'
    ],
    ingredients: ['50% Potassium as K2O (100% water soluble)', 'Sulphur in soluble form'],
    safetyTips: ['Keep out of reach of children', 'Store in a cool, dry place', 'Wear protective gear during application'],
    price: 'Contact for Price',
    inStock: true,
    application: 'Available Packing : 1 Kg'
  },
  {
    id: 'nutri-ferti-pnk',
    name: 'NUTRI-FERTI 13:0:45',
    category: 'specialty',
    image: '/uploads/NUTRI-FERTI-13-0-45.png',
    shortDescription: '100% Water Soluble Complex Fertilizer N:P:K 13:0:45 Potassium Nitrate',
    fullDescription: 'NUTRI-FERTI (13:0:45) Potassium Nitrate helps crops to resist diseases, enhances photosynthesis, provides better resistance to drought and frost, and improves plant health. It also enhances grain weight and thereby increases yield.',
    features: [
      'Helps crops to resist diseases',
      'Enhances photosynthesis',
      'Provides better resistance to drought and frost',
      'Improves health of the plant',
      'Enhances grain weight and increases yield'
    ],
    usage: [
      'Foliar Spray: Dissolve 3.0 to 5.0 g per litre of water and spray on both the sides of the leaf',
      'Crop: All crops'
    ],
    ingredients: ['13% Nitrogen', '45% Potassium in 100% water soluble form'],
    safetyTips: ['Keep out of reach of children', 'Store in a cool, dry place', 'Wear protective gear during application'],
    price: 'Contact for Price',
    inStock: true,
    application: 'Available Packing : 1 Kg'
  },
  {
    id: 'nutri-ferti',
    name: 'NUTRI-FERTI 19:19:19',
    category: 'specialty',
    image: '/uploads/NUTRI-FERTI-19-19-19.png',
    shortDescription: '100% Water Soluble Mixture of Fertilizer (NPK 19:19:19)',
    fullDescription: 'NUTRI-FERTI is a 100% water soluble NPK fertilizer. Hence, it is easily available to the plants. Its foliar spray helps in immediate absorption thereby increasing the yield & quality of produce. It also helps in drought resistance and keep plants healthy and greener.',
    features: [
      '100% water soluble NPK fertilizer',
      'Easily available to the plants',
      'Foliar spray helps in immediate absorption thereby increasing the yield & quality of produce',
      'Helps in drought resistance and keep plants healthy and greener'
    ],
    usage: [
      'Foliar Spray: Dissolve 3.0 to 5.0 g per litre of water and spray on leaves',
      'Fertigation: Apply 2 to 3 kg of NUTRI-FERTI per acre through drip irrigation'
    ],
    ingredients: ['Nitrogen (N)', 'Phosphorous (P)', 'Potassium (K) in the ratio of 19:19:19'],
    safetyTips: ['Keep out of reach of children', 'Store in a cool, dry place', 'Wear protective gear during application'],
    price: 'Contact for Price',
    inStock: true,
    application: 'Available Packing : 1 Kg'
  },
  {
    id: 'nutrical',
    name: 'NUTRICAL',
    category: 'specialty',
    image: '/uploads/NUTRICAL.png',
    shortDescription: 'CALCIUM NITRATE (100% Water Soluble Fertilizer) - Calcium 18.8% and Nitrogen 15.5%',
    fullDescription: 'NUTRICAL is a CALCIUM NITRATE 100% Water Soluble Fertilizer containing Calcium 18.8% and Nitrogen 15.5%. It is effective in controlling bitter pit disease in apple, spongy tissue in mango, fruit cracking in lemon and other fruit crops. It also helps to increase the shelf life of fruits.',
    features: [
      'Controls bitter pit disease in apple',
      'Controls spongy tissue in mango',
      'Controls fruit cracking in lemon and other fruit crops',
      'Helps to increase the shelf life of fruits',
      '100% Water Soluble Fertilizer'
    ],
    usage: [
      'Foliar spray: Dissolve 4.0-5.0 g per litre of water and spray on both the surfaces of leaves',
      'Spray atleast 2-3 sprays during the cropping season',
      'Soil application: Apply 25 kg of NUTRICAL Calcium Nitrate per acre, in 5 split doses'
    ],
    ingredients: ['Calcium - 18.8%', 'Nitrogen - 15.5%'],
    safetyTips: ['Keep out of reach of children', 'Store in a cool, dry place', 'Wear protective gear during application'],
    price: 'Contact for Price',
    inStock: true,
    application: 'Available Packing : 1 Kg'
  },
  {
    id: 'nutrichill',
    name: 'NUTRICHILL',
    category: 'specialty',
    image: '/uploads/NUTRICHILL.png',
    shortDescription: 'Chelated Micro Nutrient Mixtures Foliar Application',
    fullDescription: 'NUTRICHILL is an EDTA chelated micro nutrient mixture, free flowing fine crystalline green colour micro granular powder which dissolves speedily and completely in water. It supplies required six essential micronutrients together in optimum dose to crops. Being chelated with EDTA, it assures fast absorption of all individual micro elements into plants. It is virtually free from chloride, sodium and other harmful elements for plants. NUTRICHILL helps to prevent mix crop deficiencies in different forms occurred gradually at different growth stages of crops.',
    features: [
      'EDTA chelated micro nutrient mixture',
      'Free flowing fine crystalline green colour micro granular powder',
      'Dissolves speedily and completely in water',
      'Supplies six essential micronutrients in optimum dose',
      'Fast absorption of micro elements into plants',
      'Virtually free from chloride, sodium and harmful elements',
      'Prevents mix crop deficiencies at different growth stages'
    ],
    usage: [
      '1.5g - 2g in 1 Ltr water (250gms in 200 Ltr. Water/Acre)',
      'For Best Result - Repeat dose every 15 days'
    ],
    ingredients: ['Chelated Micro Nutrient Mixtures'],
    safetyTips: ['Keep out of reach of children', 'Store in a cool, dry place', 'Wear protective gear during application'],
    price: 'Contact for Price',
    inStock: true,
    application: 'Available Packing : 100g, 250g, 500g'
  },
  {
    id: 'nutriferus-12',
    name: 'NUTRIFERUS-12',
    category: 'specialty',
    image: '/uploads/NUTRIFERUS-12.png',
    shortDescription: 'Chelated Iron as Fe- EDTA (12%Fe) Foliar Application Micro Nutrient Fertilizer',
    fullDescription: 'NUTRIFERUS is a Chelated ferrous 12%, a water-soluble iron supplement that can help prevent iron deficiency in crops at different growth stages. It can also help improve plant growth and health. Chelated ferrous 12% is more effective at helping plants absorb nutrients than conventional micronutrients.',
    features: [
      'Iron activation: Activates enzymes that regulate crop growth and development',
      'Chlorophyll production: Increases chlorophyll in leaves, preventing chlorosis and leaf spiralling',
      'Pest and disease resistance: Promotes resistance to pests and diseases',
      'Yields: Increases growth rate, dry matter accumulation and yields',
      'Nutrient uptake: More effective at helping plants absorb nutrients than conventional micronutrients'
    ],
    usage: [
      '2gms/1lt of water or 250gms/1 Acre',
      'For Better yield/result 2 Sprays at an interval of 20days is recommended'
    ],
    ingredients: ['Chelated Iron as Fe- EDTA (12%Fe)'],
    safetyTips: ['Keep out of reach of children', 'Store in a cool, dry place', 'Wear protective gear during application'],
    price: 'Contact for Price',
    inStock: true,
    application: 'Available Packing : 100g, 250g, 500g'
  },
  {
    id: 'nutrimag',
    name: 'NUTRIMAG',
    category: 'specialty',
    image: '/uploads/NUTRIMAG.png',
    shortDescription: 'Magnesium Sulphate-(Mg-9.5%) Micronutrient Fertilizer Soil Application',
    fullDescription: 'NUTRIMAG is a Magnesium Sulphate-(Mg-9.5%) Micronutrient Fertilizer designed for soil application on all agriculture crops. Magnesium is an essential component of various enzyme systems for energy production, protein synthesis, and growth regulation. It improves chlorophyll content and photosynthesis of plants, and activates many plant enzymes needed for growth and development.',
    features: [
      'Essential component of various enzyme systems for energy production, protein synthesis and growth regulation',
      'Improves chlorophyll content and photosynthesis of plants',
      'Activates many plant enzymes needed for growth and development'
    ],
    usage: [
      '4-5g Per Liter of Water'
    ],
    ingredients: ['Magnesium (Mg): 9.5%', 'Sulphur (S): 12.0%', 'pH: 4.5 - 5.5'],
    safetyTips: ['Keep out of reach of children', 'Store in a cool, dry place', 'Wear protective gear during application'],
    price: 'Contact for Price',
    inStock: true,
    application: 'Available Packing : 1 KG, 10 KG, 25 KG'
  },
  {
    id: 'nutrimix',
    name: 'NUTRIMIX',
    category: 'specialty',
    image: '/uploads/NUTRIMIX.png',
    shortDescription: 'Micronutrient Fertilizer Mixture For Foliar Spray',
    fullDescription: 'NUTRIMIX is a Micronutrient Fertilizer Mixture designed for foliar spray on all agriculture crops. It helps to overcome macronutrient deficiencies, improves nutrient absorption from the soil, enhances photosynthesis making plants greenish, increases tillering, flower and fruit grain setting, imparts disease resistance, and increases crop yield both quantitatively and qualitatively.',
    features: [
      'Helps to overcome macronutrients deficiencies in crop',
      'Improves the absorption of other nutrients from the soil',
      'Improves photosynthesis in plants and entire plant becomes greenish in color',
      'Increases tillering, flower and fruit grain setting in crops',
      'Imparts disease resistance in crops',
      'Increases the crop yield both quantitatively and qualitatively'
    ],
    usage: [
      'Dissolve 4-5gm of NUTRIMIX in 1Ltr. of water',
      'For better result 2-3 sprays are recommended'
    ],
    ingredients: ['Micronutrient Fertilizer Mixture'],
    safetyTips: ['Keep out of reach of children', 'Store in a cool, dry place', 'Wear protective gear during application'],
    price: 'Contact for Price',
    inStock: true,
    application: 'Available Packing : 500Gm, 1 KG'
  },
  {
    id: 'pride-x',
    name: 'PRIDE-X',
    category: 'specialty',
    image: '/uploads/PRIDE-X.png',
    shortDescription: 'Mixture of Seaweed extract, Protein Hydrolysate and Humic acid (Liquid)',
    fullDescription: 'PRIDE-X is a Mixture of Seaweed extract, Protein Hydrolysate and Humic acid (Liquid). It increases plant growth and development in small quantities, develops resistance to abiotic stress, improves vital processes allowing higher yield and good quality products, and helps increase root growth.',
    features: [
      'Increases plant growth & Development in small quantity',
      'Helps to develop resistance to Abiotic stress',
      'Improves performance of plants vital process & allowing higher yield & good quality products',
      'Helps to increase root growing'
    ],
    usage: [
      'It can use all agriculture crop 1-1.5 ml / 1 Ltr. of water',
      'Repeat 2-3 Spray in one crop life yield for best result'
    ],
    ingredients: ['Mixture of Seaweed extract, Protein Hydrolysate and Humic acid (Liquid)'],
    safetyTips: ['Keep out of reach of children', 'Store in a cool, dry place', 'Wear protective gear during application'],
    price: 'Contact for Price',
    inStock: true,
    application: 'Available Packing: 100ml, 250ml, 500ml, 1000ml & 5 Ltr.'
  },
  {
    id: 's-400',
    name: 'S-400',
    category: 'specialty',
    image: '/uploads/S-400.png',
    shortDescription: 'HUMIC ACID 51% (Granular) BIOSTIMULANT - DRENCHING / SOIL APPLICATION',
    fullDescription: 'S-400 is a HUMIC ACID 51% (Granular) BIOSTIMULANT designed for DRENCHING / SOIL APPLICATION. It improves soil structure, promotes root development, and increases yield.',
    features: [
      'Improve the soil structure by increasing the air availability around root zone and the capacity of water holding and cation exchange',
      'Promote root development & tillers in Paddy & other crops',
      'Helps to increase no of roots (white roots & feeding roots) for better absorption Improve nutrient uptake by the root system and reduce nutrient losses',
      'Increase microbiological activity of soil and stimulate plant growth (increased biomass production)',
      'Increase yield and improves quality of plants'
    ],
    usage: [
      'Two Soil Application at 1.5kg / ha'
    ],
    ingredients: ['Humic Acid - 51%'],
    safetyTips: ['Keep out of reach of children', 'Store in a cool, dry place', 'Wear protective gear during application'],
    price: 'Contact for Price',
    inStock: true,
    application: 'Available Packing : 1 KG'
  },
  {
    id: 'sampurna-4g',
    name: 'SAMPURNA-4G',
    category: 'specialty',
    image: '/uploads/SAMPURNA-4G.png',
    shortDescription: 'Advanced agricultural solution for SAMPURNA-4G.',
    fullDescription: 'High-quality SAMPURNA-4G designed to improve crop yield and soil health. Suitable for various agricultural applications.',
    features: ['High efficiency', 'Quality improvement', 'Sustainable', 'Easy application'],
    usage: ['Consult label for specific dosage', 'Apply during suitable weather', 'Compatible with most agrochemicals'],
    ingredients: ['Active Nutrients', 'Inert Ingredients', 'Growth Promoters'],
    safetyTips: ['Keep out of reach of children', 'Store in a cool, dry place', 'Wear protective gear during application'],
    price: 'Contact for Price',
    inStock: true,
    application: 'All Crops'
  },
  {
    id: 'sampurna',
    name: 'SAMPURNA',
    category: 'specialty',
    image: '/uploads/SAMPURNA.png',
    shortDescription: 'Organic Seaweed Extract Mixture (Ascophyllum nodosum 20% (liquid)) Foliar Application',
    fullDescription: 'SAMPURNA is an Organic Seaweed Extract Mixture containing 20% Ascophyllum nodosum in liquid form. It is designed for Foliar Application to improve overall plant health and productivity.',
    features: [
      'Improves photosynthesis in plants',
      'Makes entire plants become greenish',
      'Helps to overcome micronutrient deficiency in all crops',
      'Helps to develop resistance against pests, diseases & Abiotic stress'
    ],
    usage: [
      'Dissolve 2-3ml / 1Ltr of Water',
      'Repeated application with 15-20 days interval will keep crop Healthy Better growth.'
    ],
    ingredients: ['Organic Seaweed Extract Mixture (Ascophyllum nodosum 20% (liquid))'],
    safetyTips: ['Keep out of reach of children', 'Store in a cool, dry place', 'Wear protective gear during application'],
    price: 'Contact for Price',
    inStock: true,
    application: 'Available Packing: 100ml, 250ml, 500ml, 1000ml & 5 Ltr.'
  },
  {
    id: 'super-plus',
    name: 'SUPER PLUS',
    category: 'specialty',
    image: '/uploads/SUPER-PLUS.png',
    shortDescription: '(Micronutrient Fertilizer Mixture) FOR FOLIAR SPRAY',
    fullDescription: 'Super Plus is an Essential Micronutrient mixture product for spray application. It is 100% Watersoluble fertilizer to facilitate efficient absorption of nutrients by the leaves. It helps better utilisation of major nutrients, increases immunity power of plants against adverse conditions, takes part in enzymatic functions acting as a catalytic agent to produce vigorous growth, and helps to increase yield and quality of the farm produce.',
    features: [
      'Helps better utilisation of major nutrients',
      'Increases the immunity power of plants against adverse conditions',
      'Takes part in enzymatic functions and acts as a catalytic agent to produce vigorous growth',
      'Helps to increase yield and quality of the farm produce',
      '100% Watersoluble fertilizer facilitating efficient nutrient absorption'
    ],
    usage: [
      'Use Super Plus 2-3ml Per 1 litre of water, Depending upon the Crop age & Growth Stages',
      'Recommended for Cereal crops, Oil Seeds, Vegetables & All Plantation Crops'
    ],
    ingredients: ['Micronutrient Fertilizer Mixture'],
    safetyTips: ['Keep out of reach of children', 'Store in a cool, dry place', 'Wear protective gear during application'],
    price: 'Contact for Price',
    inStock: true,
    application: 'Available Packing: 100ml, 250ml, 500ml, 1000ml & 5 Ltr.'
  },
  {
    id: 'vajra',
    name: 'VAJRA',
    category: 'specialty',
    image: '/uploads/VAJRA.png',
    shortDescription: '(Micronutrient Fertilizer Mixture for Vegetable Crops) FOR FOLIAR SPRAY',
    fullDescription: 'Vajra is an Essential Micronutrient mixture product for Spray Application. Vajra is 100% Watersoluble Fertilizer to facilitate efficient absorption of nutrients by the leaves. It helps better utilisation of major nutrients, increases immunity power of plants against adverse conditions, takes part in enzymatic functions acting as a catalytic agent to produce vigorous growth, and helps to increase yield and quality of the farm produce.',
    features: [
      'Helps better utilisation of major nutrients',
      'Increases the immunity power of plants against adverse conditions',
      'Takes part in enzymatic functions and acts as a catalytic agent to produce vigorous growth',
      'Helps to increase yield and quality of the farm produce',
      '100% Watersoluble Fertilizer facilitating efficient nutrient absorption'
    ],
    usage: [
      'Vajra 2-3ml per 1 litre of water, Depending upon the Crop age & Growth Stages',
      'Recommended for Cereal crops, Oil Seeds, Vegetables & All Plantation Crops'
    ],
    ingredients: ['Micronutrient Fertilizer Mixture for Vegetable Crops'],
    safetyTips: ['Keep out of reach of children', 'Store in a cool, dry place', 'Wear protective gear during application'],
    price: 'Contact for Price',
    inStock: true,
    application: 'Available Packing: 250ml, 500ml, 1000ml & 5 Ltr.'
  },
  {
    id: 'wet-grow',
    name: 'WET-GROW',
    category: 'specialty',
    image: '/uploads/WET-GROW.png',
    shortDescription: 'Agricultural spray adjuvant For crops and plants (Sticker | Spreader | Activator)',
    fullDescription: 'WET-GROW is an Agricultural spray adjuvant for crops and plants. It functions as a Sticker, Spreader, and Activator to enhance the effectiveness of foliar applications.',
    features: [
      'Helps to firmly stick to the leaf surface',
      'Increases the spray coverage area of the leaf surface leading to maximum chemical absorption',
      'Enhances the performance of pesticide, plant nutrients, growth promoters etc, thus increasing crop yield',
      'Acts as cleaning agent, to clean spray equipments and agricultural machinery at low cost'
    ],
    usage: [
      'Wet-Grow 3-4 ml / 1 liter of water spray on both sides of leaves'
    ],
    ingredients: ['Agricultural spray adjuvant'],
    safetyTips: ['Keep out of reach of children', 'Store in a cool, dry place', 'Wear protective gear during application'],
    price: 'Contact for Price',
    inStock: true,
    application: 'Available Packing: 100ml, 250ml, 500ml, 1000ml & 5 Ltr.'
  },
  {
    id: 'combi-pro',
    name: 'Combi Pro',
    category: 'specialty',
    image: '/uploads/Combi-Pro.png',
    shortDescription: 'Advanced agricultural solution for Combi Pro.',
    fullDescription: 'High-quality Combi Pro designed to improve crop yield and soil health. Suitable for various agricultural applications.',
    features: ['High efficiency', 'Quality improvement', 'Sustainable', 'Easy application'],
    usage: ['Consult label for specific dosage', 'Apply during suitable weather', 'Compatible with most agrochemicals'],
    ingredients: ['Active Nutrients', 'Inert Ingredients', 'Growth Promoters'],
    safetyTips: ['Keep out of reach of children', 'Store in a cool, dry place', 'Wear protective gear during application'],
    price: 'Contact for Price',
    inStock: true,
    application: 'All Crops'
  },
];
