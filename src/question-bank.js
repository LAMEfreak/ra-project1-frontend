/* Each question has the following properties:
- id: unique identifier
- title: the question title
- type: the question type (trivia, soundbite, picture)
- options: an array of responses
- correctAnswer: the correct answer
- source: to display images or soundplayer
*/

const questionBank = [
  {
    id: 1,
    title: "Which streaming service is this?",
    type: "soundbite",
    options: ["Disney+", "Netflix", "Amazon Prime", "HBO Max"],
    correctAnswer: "Netflix",
    source: "q1.mp3",
  },
  {
    id: 2,
    title: "Can you identify the movie?",
    type: "soundbite",
    options: [
      "500 Days of Summer",
      "Harry Potter",
      "Ready Player One",
      "Wizard of Oz",
    ],
    correctAnswer: "Harry Potter",
    source: "q2.mp3",
  },
  {
    id: 3,
    title: "Can you identify the movie?",
    type: "soundbite",
    options: [
      "The Lord of the Rings",
      "The Avengers",
      "Star Wars",
      "The Hobbit",
    ],
    correctAnswer: "The Lord of the Rings",
    source: "q3.mp3",
  },
  {
    id: 4,
    title: "Can you identify the movie?",
    type: "image",
    options: ["Big Hero 6", "Frozen", "The Incredibles", "Up"],
    correctAnswer: "Up",
    source: "q4.jpg",
  },
  {
    id: 5,
    title: "Can you identify the movie?",
    type: "soundbite",
    options: [
      "Pirates of the Caribbean",
      "Avatar",
      "Apollo 13",
      "Journey to the Center of the Earth",
    ],
    correctAnswer: "Pirates of the Caribbean",
    source: "q5.mp3",
  },
  {
    id: 6,
    title: "Which country's flag is this?",
    type: "image",
    options: ["Germany", "France", "Austria", "Czech Republic"],
    correctAnswer: "Germany",
    source: "q6.png",
  },
  {
    id: 7,
    title: "Guess the famous KPOP song?",
    type: "soundbite",
    options: [
      "New Jeans - Super Shy",
      "BLACKPINK - The Girls",
      "Twice - The Feels",
      "Red Velvet - Bamboleo",
    ],
    correctAnswer: "New Jeans - Super Shy",
    source: "q7.mp3",
  },
  {
    id: 8,
    title: "Guess the Coldplay song?",
    type: "soundbite",
    options: [
      "Viva La Vida",
      "Yellow",
      "Hymn for the Weekend",
      "A Sky Full of Stars",
    ],
    correctAnswer: "Viva La Vida",
    source: "q8.mp3",
  },
  {
    id: 9,
    title:
      "In J.K. Rowling's 'Harry Potter' series, what is the name of Harry's owl?",
    type: "image",
    options: ["Scabbers", "Hedwig", "Crookshanks", "Fawkes"],
    correctAnswer: "Hedwig",
    source: "q9.jpg",
  },
  {
    id: 10,
    title: "Who co-founded Apple with Steve Jobs?",
    type: "image",
    options: ["Bill Gates", "Steve Wozniak", "Mark Zuckerberg", "Jeff Bezos"],
    correctAnswer: "Steve Wozniak",
    source: "q10.jpg",
  },
  {
    id: 11,
    title:
      "What is the name of this device used for immersive digital experiences?",
    type: "image",
    options: [
      "Oculus Rift",
      "Playstation VR",
      "Microsoft HoloLens",
      "Apple Vision Pro",
    ],
    correctAnswer: "Apple Vision Pro",
    source: "q11.jpg",
  },
  {
    id: 12,
    title: "Which Studio Ghibli movie is this?",
    type: "image",
    options: [
      "The Boy and the Heron",
      "Princess Mononoke",
      "Spirited Away",
      "My Neighbor Totoro",
    ],
    correctAnswer: "Spirited Away",
    source: "q12.jpg",
  },
  {
    id: 13,
    title: "What is the capital of Australia?",
    type: "image",
    options: ["Melbourne", "Sydney", "Canberra", "Gold Coast"],
    correctAnswer: "Canberra",
    source: "q13.jpg",
  },
  {
    id: 14,
    title: "Which country does NOT border Switzerland?",
    type: "image",
    options: ["Germany", "Italy", "France", "Slovenia"],
    correctAnswer: "Slovenia",
    source: "q14.jpg",
  },
  {
    id: 15,
    title: "Vienna is affectionately known as the City of ___.",
    type: "image",
    options: ["Music", "Food", "Culture", "Palaces"],
    correctAnswer: "Music",
    source: "q15.jpg",
  },
  {
    id: 16,
    title: "What percentage of a jellyfish is water?",
    type: "image",
    options: ["50%", "65%", "85%", "95%"],
    correctAnswer: "95%",
    source: "q16.jpg",
  },
  {
    id: 17,
    title: "What is the fear of heights called?",
    type: "image",
    options: ["Arachnophobia", "Acrophobia", "Aerophobia", "Anemophobia"],
    correctAnswer: "Acrophobia",
    source: "q17.jpg",
  },
  {
    id: 18,
    title: "Which of these is NOT a term in Golf?",
    type: "image",
    options: ["Birdie", "Eagle", "Albatross", "Vulture"],
    correctAnswer: "Vulture",
    source: "q18.jpg",
  },
  {
    id: 19,
    title:
      "In which country did the first Starbucks open outside of North America?",
    type: "image",
    options: ["Japan", "Canada", "England", "Peru"],
    correctAnswer: "Japan",
    source: "q19.jpg",
  },
  {
    id: 20,
    title: "How many players are on each side of the net in volleyball?",
    type: "image",
    options: [2, 4, 6, 8],
    correctAnswer: 6,
    source: "q20.gif",
  },
  {
    id: 21,
    title: "The Other Mother is a villainous character from which movie?",
    type: "image",
    options: [
      "Coraline",
      "Corpse Bride",
      "The Nightmare Before Christmas",
      "Frankenweenie",
    ],
    correctAnswer: "Coraline",
    source: "q21.gif",
  },
  {
    id: 22,
    title: "Which of these movies is Disney's introductory tune from?",
    type: "soundbite",
    options: [
      "Pinnochio",
      "Snow White and the Seven Dwarfs",
      "Fantasia",
      "Peter Plan",
    ],
    correctAnswer: "Pinnochio",
    source: "q22.mp3",
  },
  {
    id: 23,
    title: "What is Pixar Animation Studios' first feature film?",
    type: "image",
    options: ["A Bug's Life", "Toy Story", "Monsters Inc.", "Finding Nemo"],
    correctAnswer: "Toy Story",
    source: "q23.jpg",
  },
  {
    id: 24,
    title: "How many pairs of chromosomes are found in the average human?",
    type: "image",
    options: [21, 22, 23, 24],
    correctAnswer: 23,
    source: "q24.jpg",
  },
  {
    id: 25,
    title: "Which country gave the US the Statue of Liberty?",
    type: "image",
    options: ["Germany", "Italy", "France", "Sweden"],
    correctAnswer: "France",
    source: "q25.jpg",
  },
  {
    id: 26,
    title: "What is the national animal of Greece?",
    type: "image",
    options: ["Fox", "Deer", "Dolphin", "Marlin"],
    correctAnswer: "Dolphin",
    source: "q26.jpg",
  },
  {
    id: 27,
    title: "Which plant is NOT in the hit game 'Plants vs. Zombies'?",
    type: "image",
    options: ["Sunflower", "Peashooter", "Honeycomb", "Starfruit"],
    correctAnswer: "Honeycomb",
    source: "q27.jpg",
  },
  {
    id: 28,
    title: "Which is the rarest blood type in humans?",
    type: "image",
    options: ["AB-", "AB+", "B", "O"],
    correctAnswer: "AB-",
    source: "q28.jpg",
  },
  {
    id: 29,
    title: "What is the symbol of Gold in the Periodic Table?",
    type: "image",
    options: ["Go", "Au", "Gl", "Si"],
    correctAnswer: "Au",
    source: "q29.jpg",
  },
  {
    id: 30,
    title: "Name this hit Netflix series?",
    type: "soundbite",
    options: [
      "Stranger Things",
      "The Umbrella Academy",
      "The Sandman",
      "The Witcher",
    ],
    correctAnswer: "Stranger Things",
    source: "q30.mp3",
  },
];

export default questionBank;
