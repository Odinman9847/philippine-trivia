import type { Question } from '../types/index';
export const CATEGORIES = ['History', 'Geography', 'Culture'];
export const QUESTIONS_PER_GAME = 5;

export const triviaQuestions: Question[] = [
  // --- Geography Questions (20) ---
  {
    questionText: 'What is the capital of the Philippines?',
    options: ['Cebu City', 'Davao City', 'Manila', 'Quezon City'],
    correctAnswerIndex: 2,
    category: 'Geography',
  },
  {
    questionText: 'Which volcano is famous for its "perfect cone" shape?',
    options: ['Mount Pinatubo', 'Mayon Volcano', 'Taal Volcano', 'Mount Apo'],
    correctAnswerIndex: 1,
    category: 'Geography',
  },
  {
    questionText: 'Approximately how many islands make up the Philippines?',
    options: ['1,707', '7,641', '10,210', '5,123'],
    correctAnswerIndex: 1,
    category: 'Geography',
  },
  {
    questionText: 'What are the three main island groups of the Philippines?',
    options: [
      'Luzon, Visayas, and Mindanao',
      'Manila, Cebu, and Davao',
      'Palawan, Boracay, and Siargao',
      'Bicol, Ilocos, and Cordillera',
    ],
    correctAnswerIndex: 0,
    category: 'Geography',
  },
  {
    questionText: 'What is the highest mountain in the Philippines?',
    options: ['Mt. Pulag', 'Mt. Pinatubo', 'Mt. Kanlaon', 'Mt. Apo'],
    correctAnswerIndex: 3,
    category: 'Geography',
  },
  {
    questionText: 'Which province is famous for its Chocolate Hills?',
    options: ['Cebu', 'Bohol', 'Palawan', 'Albay'],
    correctAnswerIndex: 1,
    category: 'Geography',
  },
  {
    questionText: 'What is the longest river in the Philippines?',
    options: [
      'Pasig River',
      'Agusan River',
      'Cagayan River',
      'Rio Grande de Mindanao',
    ],
    correctAnswerIndex: 2,
    category: 'Geography',
  },
  {
    questionText:
      'Which city is known as the "Summer Capital of the Philippines"?',
    options: ['Tagaytay', 'Baguio', 'Cebu', 'Davao'],
    correctAnswerIndex: 1,
    category: 'Geography',
  },
  {
    questionText:
      'The Puerto Princesa Subterranean River is located in which province?',
    options: ['Aklan', 'Cebu', 'Bohol', 'Palawan'],
    correctAnswerIndex: 3,
    category: 'Geography',
  },
  {
    questionText: 'What body of water lies to the east of the Philippines?',
    options: [
      'Sulu Sea',
      'Celebes Sea',
      'West Philippine Sea',
      'Philippine Sea',
    ],
    correctAnswerIndex: 3,
    category: 'Geography',
  },
  {
    questionText: 'Which city is known as the "Queen City of the South"?',
    options: ['Davao City', 'Iloilo City', 'Cebu City', 'Zamboanga City'],
    correctAnswerIndex: 2,
    category: 'Geography',
  },
  {
    questionText:
      'Taal Volcano, one of the most active volcanoes, is located in which province?',
    options: ['Batangas', 'Laguna', 'Cavite', 'Quezon'],
    correctAnswerIndex: 0,
    category: 'Geography',
  },
  {
    questionText: 'The Banaue Rice Terraces are located in which province?',
    options: ['Benguet', 'Mountain Province', 'Ifugao', 'Kalinga'],
    correctAnswerIndex: 2,
    category: 'Geography',
  },
  {
    questionText: 'What is the largest lake in the Philippines?',
    options: ['Taal Lake', 'Lake Lanao', 'Laguna de Bay', 'Lake Mainit'],
    correctAnswerIndex: 2,
    category: 'Geography',
  },
  {
    questionText:
      'Which popular tourist island is famous for its white-sand beaches and nightlife?',
    options: ['Siargao', 'Boracay', 'Batanes', 'Camiguin'],
    correctAnswerIndex: 1,
    category: 'Geography',
  },
  {
    questionText:
      'What is the common name for the strait that separates Luzon and Samar?',
    options: [
      'San Bernardino Strait',
      'Surigao Strait',
      'Mindoro Strait',
      'Cebu Strait',
    ],
    correctAnswerIndex: 0,
    category: 'Geography',
  },
  {
    questionText:
      'Which Philippine region is known for being the northernmost part of the country, famous for its stone houses?',
    options: ['Ilocos Region', 'Cagayan Valley', 'Cordillera', 'Batanes'],
    correctAnswerIndex: 3,
    category: 'Geography',
  },
  {
    questionText:
      'The Philippines is located in what is known as the "Ring of Fire", an area known for frequent...',
    options: [
      'Typhoons and Monsoons',
      'Hurricanes and Tornadoes',
      'Earthquakes and Volcanic Eruptions',
      'Blizzards and Hailstorms',
    ],
    correctAnswerIndex: 2,
    category: 'Geography',
  },
  {
    questionText: 'What is the largest city in the Philippines by land area?',
    options: ['Quezon City', 'Manila', 'Cebu City', 'Davao City'],
    correctAnswerIndex: 3,
    category: 'Geography',
  },
  {
    questionText:
      'Which province is known as the "Mango Capital of the Philippines"?',
    options: ['Zambales', 'Pangasinan', 'Guimaras', 'Cebu'],
    correctAnswerIndex: 2,
    category: 'Geography',
  },

  // --- History Questions (20) ---
  {
    questionText: 'Who is the national hero of the Philippines?',
    options: [
      'Andres Bonifacio',
      'Emilio Aguinaldo',
      'Jose Rizal',
      'Apolinario Mabini',
    ],
    correctAnswerIndex: 2,
    category: 'History',
  },
  {
    questionText:
      'Who led the Filipino forces against Ferdinand Magellan in the Battle of Mactan?',
    options: ['Rajah Humabon', 'Lapu-Lapu', 'Rajah Sulayman', 'Datu Puti'],
    correctAnswerIndex: 1,
    category: 'History',
  },
  {
    questionText: 'Philippine Independence Day is celebrated every...',
    options: ['July 4', 'August 21', 'December 30', 'June 12'],
    correctAnswerIndex: 3,
    category: 'History',
  },
  {
    questionText: 'Who was the first President of the Philippine Republic?',
    options: [
      'Manuel L. Quezon',
      'Andres Bonifacio',
      'Emilio Aguinaldo',
      'Jose P. Laurel',
    ],
    correctAnswerIndex: 2,
    category: 'History',
  },
  {
    questionText: 'The Philippines was named after which monarch?',
    options: [
      'King Philip I of France',
      'King Philip II of Spain',
      'Queen Elizabeth I of England',
      'King Philip of Macedonia',
    ],
    correctAnswerIndex: 1,
    category: 'History',
  },
  {
    questionText:
      'What is the name of the revolutionary society founded by Andres Bonifacio?',
    options: [
      'La Liga Filipina',
      'Magdalo',
      'Katipunan',
      'Propaganda Movement',
    ],
    correctAnswerIndex: 2,
    category: 'History',
  },
  {
    questionText: 'The Bataan Death March occurred during which war?',
    options: [
      'Philippine-American War',
      'Spanish-American War',
      'World War I',
      'World War II',
    ],
    correctAnswerIndex: 3,
    category: 'History',
  },
  {
    questionText: 'Who was known as the "Brains of the Revolution"?',
    options: [
      'Emilio Jacinto',
      'Jose Rizal',
      'Apolinario Mabini',
      'Marcelo H. del Pilar',
    ],
    correctAnswerIndex: 2,
    category: 'History',
  },
  {
    questionText:
      'What event in 1986 led to the ousting of President Ferdinand Marcos?',
    options: [
      'The First Quarter Storm',
      'The EDSA People Power Revolution',
      'The Battle of Manila',
      'The Malolos Congress',
    ],
    correctAnswerIndex: 1,
    category: 'History',
  },
  {
    questionText: 'What were the two famous novels written by Jose Rizal?',
    options: [
      'Noli Me Tángere and El Filibusterismo',
      'Florante at Laura and Ibong Adarna',
      'The Woman Who Had Two Navels and Cave and Shadows',
      'Banaag at Sikat and Mga Ibong Mandaragit',
    ],
    correctAnswerIndex: 0,
    category: 'History',
  },
  {
    questionText: 'Who was the first female president of the Philippines?',
    options: [
      'Imelda Marcos',
      'Gloria Macapagal Arroyo',
      'Corazon Aquino',
      'Leni Robredo',
    ],
    correctAnswerIndex: 2,
    category: 'History',
  },
  {
    questionText:
      'What was the former name of Luneta Park, where Jose Rizal was executed?',
    options: ['Plaza Goiti', 'Bagumbayan', 'Plaza Miranda', 'Fort Santiago'],
    correctAnswerIndex: 1,
    category: 'History',
  },
  {
    questionText:
      'The GOMBURZA were three Filipino priests executed by the Spanish. What were their names?',
    options: [
      'Gomez, Burgos, and Zamora',
      'Guerrero, Bonifacio, and Zaragoza',
      'Garcia, Blanco, and Zulueta',
      'Gonzales, Baltazar, and Zapanta',
    ],
    correctAnswerIndex: 0,
    category: 'History',
  },
  {
    questionText: 'Who was the president of the Philippine Commonwealth?',
    options: [
      'Sergio Osmeña',
      'Manuel Roxas',
      'Elpidio Quirino',
      'Manuel L. Quezon',
    ],
    correctAnswerIndex: 3,
    category: 'History',
  },
  {
    questionText: 'Who is known as the "Father of the Katipunan"?',
    options: [
      'Emilio Jacinto',
      'Apolinario Mabini',
      'Jose Rizal',
      'Andres Bonifacio',
    ],
    correctAnswerIndex: 3,
    category: 'History',
  },
  {
    questionText:
      'The Treaty of Paris in 1898 ended the Spanish-American War, leading Spain to cede the Philippines to which country?',
    options: ['Japan', 'United Kingdom', 'United States', 'France'],
    correctAnswerIndex: 2,
    category: 'History',
  },
  {
    questionText: 'Melchora Aquino is also known by what nickname?',
    options: [
      'Gabriela Silang',
      'Prinsesa Urduja',
      'Tandang Sora',
      'Reyna Juana',
    ],
    correctAnswerIndex: 2,
    category: 'History',
  },
  {
    questionText:
      'What significant event is commemorated every August 21st in the Philippines?',
    options: [
      'The Cry of Pugad Lawin',
      'The Declaration of Martial Law',
      'The Assassination of Ninoy Aquino',
      'The Founding of Manila',
    ],
    correctAnswerIndex: 2,
    category: 'History',
  },
  {
    questionText: 'For how many years were the Philippines under Spanish rule?',
    options: ['111 years', '222 years', '333 years', '444 years'],
    correctAnswerIndex: 2,
    category: 'History',
  },
  {
    questionText: 'What was the first book published in the Philippines?',
    options: [
      'Noli Me Tángere',
      'Doctrina Christiana',
      'Florante at Laura',
      'Urbana at Feliza',
    ],
    correctAnswerIndex: 1,
    category: 'History',
  },

  // --- Culture Questions (20) ---
  {
    questionText: 'What is the national language of the Philippines?',
    options: ['English', 'Tagalog', 'Filipino', 'Cebuano'],
    correctAnswerIndex: 2,
    category: 'Culture',
  },
  {
    questionText: 'What is the name of the traditional Filipino martial art?',
    options: ['Sikaran', 'Yaw-Yan', 'Arnis', 'Buno'],
    correctAnswerIndex: 2,
    category: 'Culture',
  },
  {
    questionText:
      'Which of these is a famous Filipino folk dance that mimics the movement of a bird?',
    options: ['Pandanggo sa Ilaw', 'Maglalatik', 'Cariñosa', 'Tinikling'],
    correctAnswerIndex: 3,
    category: 'Culture',
  },
  {
    questionText:
      'What is the iconic and colorful public transportation vehicle in the Philippines, originally made from US military jeeps?',
    options: ['Tricycle', 'Kalesa', 'Jeepney', 'Bus'],
    correctAnswerIndex: 2,
    category: 'Culture',
  },
  {
    questionText:
      'What is the Filipino term for the spirit of communal unity and cooperation?',
    options: ['Pakikisama', 'Bayanihan', 'Utang na Loob', 'Harana'],
    correctAnswerIndex: 1,
    category: 'Culture',
  },
  {
    questionText: 'What is the national flower of the Philippines?',
    options: ['Rose', 'Sampaguita', 'Orchid', 'Ylang-ylang'],
    correctAnswerIndex: 1,
    category: 'Culture',
  },
  {
    questionText:
      'Which Filipino dish consists of meat marinated in vinegar, soy sauce, garlic, and black peppercorns?',
    options: ['Sinigang', 'Adobo', 'Lechon', 'Kare-kare'],
    correctAnswerIndex: 1,
    category: 'Culture',
  },
  {
    questionText: 'What is the traditional formal wear for Filipino men?',
    options: ["Baro't Saya", 'Malong', 'Bahag', 'Barong Tagalog'],
    correctAnswerIndex: 3,
    category: 'Culture',
  },
  {
    questionText:
      'What is the famous Filipino dessert made of crushed ice, evaporated milk, and various ingredients like sweet beans, fruits, and jellies?',
    options: ['Leche Flan', 'Taho', 'Halo-halo', 'Bibingka'],
    correctAnswerIndex: 2,
    category: 'Culture',
  },
  {
    questionText: 'The use of "po" and "opo" in conversation signifies...',
    options: ['Agreement', 'Excitement', 'Respect for elders', 'A question'],
    correctAnswerIndex: 2,
    category: 'Culture',
  },
  {
    questionText: 'What is the national bird of the Philippines?',
    options: ['Maya', 'Philippine Eagle', 'Kalaw', 'Sarimanok'],
    correctAnswerIndex: 1,
    category: 'Culture',
  },
  {
    questionText:
      'What do Filipinos traditionally call the nine-day series of dawn masses preceding Christmas?',
    options: ['Pasko', 'Noche Buena', 'Panunuluyan', 'Simbang Gabi'],
    correctAnswerIndex: 3,
    category: 'Culture',
  },
  {
    questionText: 'What is a "sari-sari" store?',
    options: [
      'A large supermarket',
      'A wet market',
      'A small neighborhood convenience store',
      'A souvenir shop',
    ],
    correctAnswerIndex: 2,
    category: 'Culture',
  },
  {
    questionText: 'Which Filipino boxer is known worldwide as "PacMan"?',
    options: [
      'Nonito Donaire',
      'Manny Pacquiao',
      'Gerry Peñalosa',
      'Flash Elorde',
    ],
    correctAnswerIndex: 1,
    category: 'Culture',
  },
  {
    questionText: 'What is the ancient Filipino script or writing system?',
    options: ['Alibata', 'Kawi', 'Baybayin', 'Sanskrit'],
    correctAnswerIndex: 2,
    category: 'Culture',
  },
  {
    questionText: 'What is "Sinigang"?',
    options: [
      'A sweet rice cake',
      'A sour soup',
      'A type of grilled meat',
      'A noodle dish',
    ],
    correctAnswerIndex: 1,
    category: 'Culture',
  },
  {
    questionText:
      'A Filipino coming-of-age celebration for a young woman on her 18th birthday is called a...',
    options: ['Fiesta', 'Debut', 'Binyag', 'Kasal'],
    correctAnswerIndex: 1,
    category: 'Culture',
  },
  {
    questionText:
      'Which of the following is a mythical creature in Philippine folklore, often depicted as a man-eating, self-segmenting monster?',
    options: ['Diwata', 'Kapre', 'Manananggal', 'Sirena'],
    correctAnswerIndex: 2,
    category: 'Culture',
  },
  {
    questionText: 'What is a "Balut"?',
    options: [
      'A type of bread',
      'A fruit shake',
      'A fermented rice wine',
      'A developing bird embryo that is boiled and eaten',
    ],
    correctAnswerIndex: 3,
    category: 'Culture',
  },
  {
    questionText: 'The "Mano" or "Pagmamano" is a Filipino gesture of...',
    options: [
      'Waving goodbye',
      'Greeting friends',
      'Showing respect to elders',
      'Making a promise',
    ],
    correctAnswerIndex: 2,
    category: 'Culture',
  },
];
