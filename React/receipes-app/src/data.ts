import type { Receipe } from "./model/Receipe";

export const data:Receipe[] = [
  {
    name: "Masala Dosa",
    image:"",
    ingredients: [
      {name:"Rice", amount:"2", measurement:"cups"},
      {name:"Urad dal", amount:"1/2", measurement:"cup"},
      {name:"Potatoes", amount:"3", measurement:"numbers"},
      {name:"Onion", amount:"1", measurement:"number"},
      {name:"Green chilli", amount:"2", measurement:"numbers"},
      {name:"Mustard seeds", amount:"1", measurement:"teaspoon"},
      {name:"Oil", amount:"2", measurement:"tablespoons"}
    ],
    steps: [
      "Soak rice and urad dal for 6 hours and grind to make dosa batter.",
      "Ferment the batter overnight.",
      "Boil potatoes and mash them.",
      "Heat oil, add mustard seeds, onion, chilli and potatoes.",
      "Spread batter on hot dosa pan and cook until crispy.",
      "Add potato masala inside and fold the dosa."
    ]
  },
  {
    name: "Paneer Butter Masala",
    image:"",
    ingredients: [
      {name:"Paneer", amount:"200", measurement:"grams"},
      {name:"Tomatoes", amount:"3", measurement:"numbers"},
      {name:"Butter", amount:"2", measurement:"tablespoons"},
      {name:"Cream", amount:"1/2", measurement:"cup"},
      {name:"Garam masala", amount:"1", measurement:"teaspoon"},
      {name:"Red chilli powder", amount:"1", measurement:"teaspoon"},
      {name:"Salt", amount:"1", measurement:"teaspoon"}
    ],
    steps: [
      "Heat butter in a pan.",
      "Add tomato puree and cook for 5 minutes.",
      "Add chilli powder, garam masala and salt.",
      "Add paneer cubes and cook for 5 minutes.",
      "Add cream and simmer for 2 minutes.",
      "Serve hot with naan or roti."
    ]
  },
  {
    name: "Vegetable Biryani",
    image:"",
    ingredients: [
      {name:"Basmati rice", amount:"2", measurement:"cups"},
      {name:"Mixed vegetables (carrot, beans, peas, cauliflower)", amount:"2", measurement:"cups"},
      {name:"Onion", amount:"1", measurement:"number"},
      {name:"Tomatoes", amount:"2", measurement:"numbers"},
      {name:"Ginger-garlic paste", amount:"1", measurement:"tablespoon"},
      {name:"Biryani masala", amount:"2", measurement:"teaspoons"},
      {name:"Yogurt", amount:"1/2", measurement:"cup"},
      {name:"Oil or ghee", amount:"3", measurement:"tablespoons"},
      {name:"Salt", amount:"1", measurement:"teaspoon"},
      {name:"Coriander leaves", amount:"2", measurement:"tablespoons"},
      {name:"Mint leaves", amount:"2", measurement:"tablespoons"}
    ],
    steps: [
      "Wash and soak rice for 30 minutes.",
      "Heat oil or ghee, sauté onions until golden brown.",
      "Add ginger-garlic paste and tomatoes, cook until soft.",
      "Add mixed vegetables, biryani masala, yogurt, and salt. Cook for 5 minutes.",
      "Layer half-cooked rice over the vegetables, sprinkle coriander and mint leaves.",
      "Cover and cook on low flame (dum) for 15–20 minutes until rice is fully cooked.",
      "Gently mix before serving. Serve hot with raita."
    ]
  },
  {
    name: "Aloo Gobi (Potato & Cauliflower Curry)",
    image:"",
    ingredients: [
      {name:"Potatoes", amount:"2", measurement:"numbers"},
      {name:"Cauliflower", amount:"1", measurement:"medium head"},
      {name:"Onion", amount:"1", measurement:"number"},
      {name:"Tomatoes", amount:"2", measurement:"numbers"},
      {name:"Turmeric powder", amount:"1/2", measurement:"teaspoon"},
      {name:"Red chilli powder", amount:"1", measurement:"teaspoon"},
      {name:"Oil", amount:"2", measurement:"tablespoons"},
      {name:"Salt", amount:"1", measurement:"teaspoon"}
    ],
    steps: [
      "Heat oil and sauté onions until translucent.",
      "Add tomatoes and cook till soft.",
      "Add turmeric, chilli powder and salt.",
      "Add potatoes and cauliflower, cover and cook for 15 minutes.",
      "Stir occasionally and cook until vegetables are tender.",
      "Serve hot with roti or rice."
    ]
  },
  {
    name: "Dal Tadka",
    image:"",
    ingredients: [
      {name:"Toor dal (pigeon peas)", amount:"1", measurement:"cup"},
      {name:"Onion", amount:"1", measurement:"number"},
      {name:"Tomatoes", amount:"2", measurement:"numbers"},
      {name:"Garlic", amount:"3", measurement:"cloves"},
      {name:"Ghee or oil", amount:"2", measurement:"tablespoons"},
      {name:"Cumin seeds", amount:"1", measurement:"teaspoon"},
      {name:"Red chilli powder", amount:"1", measurement:"teaspoon"},
      {name:"Salt", amount:"1", measurement:"teaspoon"}
    ],
    steps: [
      "Boil toor dal until soft.",
      "Heat ghee, add cumin seeds and garlic, sauté until fragrant.",
      "Add onions and cook till golden.",
      "Add tomatoes, red chilli powder and salt.",
      "Pour this tadka over cooked dal and mix well.",
      "Serve hot with steamed rice or roti."
    ]
  }
];