const ingredients = [
  "AJWAIN", "ALMOND BUTTER", "ALMONDS", "ANCHOVIES", "ALL PURPOSE FLOUR", "ARTICHOKE", "ASAFOETIDA",
  "BABY POTATO", "BASIL", "BASIL SEEDS", "BAKING POWDER", "BAKING SODA", "BASMATI RICE", "BEANS",
  "BELL PEPPERS", "BLACK EYED PEAS", "BLACK PEPPER", "BLACK SALT", "BIRYANI MASALA", "BOTTLE GOURD",
  "BREAD", "BUTTER", "CABBAGE", "CAPERS", "CARDAMOM", "CARROT", "CASHEWS", "CHAAT MASALA", "CHEESE",
  "CHICKEN", "CHICKEN BREAST", "CHICKEN BROTH", "CHICKEN DRUMSTICKS", "CHICKEN LEGS", "CHICKEN STOCK",
  "CHICKEN THIGH", "CHICKEN WINGS", "CHICKPEAS", "CINNAMON", "CLAMS", "CLOVES", "COCONUT",
  "COCONUT MILK", "COCONUT OIL", "COFFEE POWDER", "CORN FLOUR", "CORIANDER", "CORIANDER LEAVES",
  "CORIANDER POWDER", "CREAM", "CRAB", "CRAB MEAT", "CUCUMBER", "CUMIN", "CUMIN POWDER", "CURD",
  "CURRY LEAVES", "CUTTLEFISH", "DRUMSTICK", "EGGPLANT", "EGGS", "FALOODA SEV", "FENNEL POWDER",
  "FENNEL SEEDS", "FENUGREEK LEAVES", "FISH SAUCE", "FLOUR", "FULL-FAT MILK", "FULL_CREAM MILK",
  "GARAM MASALA", "GARLIC", "GARLIC POWDER", "GINGER", "GINGER GARLIC PASTE", "GINGER POWDER",
  "GHEE", "GRAM FLOUR", "GRATED COCONUT", "GREEN BEANS", "GREEN CHILIES", "GREEN PEAS", "HALIBUT",
  "HONEY","ICE", "ICE CREAM", "JAGGERY", "JEERA", "KASHMIRI RED CHILI POWDER", "KELP", "KOMBU",
  "LEMON", "LENTILS", "LIME", "LOBSTER", "MACKEREL", "MAPLE SYRUP","MILK", "MINT", "MINT LEAVES",
  "MOONG DAL", "MUSHROOMS", "MUSTARD SEEDS", "MUTTON", "NORRI SHEETS", "NORI", "OATS",
  "OCTOPUS", "OIL", "ONION", "ONION POWDER", "OREGANO", "OYSTER", "OYSTER SAUCE", "PANEER",
  "PANCAKE MIX", "PAPAD", "PARSLEY", "PASTA", "PEANUT BUTTER", "PEANUTS", "PEAS", "PEPPERCORNS",
  "PISTACHIOS", "PIZZA DOUGH", "POTATO", "PRAWNS", "PULAO MASALA", "PUMPKIN", "QUINOA",
  "RAGI FLOUR", "RAISINS", "RED CHILI POWDER", "RICE", "RICE FLOUR", "ROASTED CUMIN POWDER",
  "ROSE SYRUP", "ROSE WATER", "ROSEMARY", "SAFFRON", "SALT", "SAMBHAR POWDER", "SARDINES",
  "SABUDANA", "SCALLOPS", "SCHEZWAN SAUCE", "SEA ASPARAGUS", "SEA BASS", "SEA BEANS",
  "SEA CUCUMBER", "SEA GRAPES", "SEA LETTUCE", "SEA MOSS", "SEA SALT", "SEA URCHIN",
  "SEAFOOD BROTH", "SEAFOOD CHOWDER", "SEAFOOD MIX", "SEAFOOD PASTA", "SEAFOOD PAELLA",
  "SEAFOOD RISOTTO", "SEAFOOD SOUP", "SEAFOOD STEW", "SESAME SEEDS", "SHRIMP", "SHRIMP PASTE",
  "SOY SAUCE", "SOYA CHUNKS", "SPAGHETTI", "SPINACH", "SPRING ONION", "SPRING ROLL WRAPPERS",
  "STRAWBERRIES", "SUGAR", "SUGAR SYRUP", "SUN DRIED TOMATOES", "SWEET POTATO", "TEA BAG",
  "THYME", "TILAPIA", "TINDORA", "TOMATO", "TOMATO KETCHUP", "TOMATO SAUCE", "TROUT",
  "TUNA", "TURMERIC", "TURMERIC POWDER","URAD DAL", "VANILLA ESSENCE", "VEGETABLE STOCK", "VEGETABLES",
  "VINEGAR", "WAKAME", "WALNUTS", "WATER", "WHEAT FLOUR", "WHIPPED CREAM", "YAM", "YEAST",
  "YOGURT"
];

const recipes = [
  {
    name: "Plain Roti",
    ingredients: ['WHEAT FLOUR', 'WATER', 'SALT'],
    preparationTime: "10 minutes",
    cookingTime: "5 minutes",
    dishType: "Flatbread",
    cuisine: "Indian",
    steps: [
      "1. In a large mixing bowl, combine 1 cup wheat flour and 0.5 tsp salt. 2. Gradually add 0.5 cup water in small portions while mixing the flour with your hand or spoon. Continue adding water until the dough comes together into a smooth, soft consistency. 3. Knead the dough for about 5-7 minutes until it becomes smooth and elastic.",
      "1. Divide the dough into 8-10 small equal-sized balls. 2. Roll each ball between your palms to form a smooth, round shape. 3. On a clean, flat surface, dust the surface lightly with flour. Roll each ball into a round shape about 6-8 inches in diameter. 4. Heat a tawa or griddle on medium heat. Place the roti on the tawa and cook for 1-2 minutes until bubbles form. Flip the roti and press gently with a cloth or spatula to help it puff up. Cook the second side for 1-2 minutes until golden brown spots appear. 5. Serve hot with curry or raita.",
    ],
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7PttQWZ6RSf11x1UnY2VYP3bhHCjrYYxULw&s"
  },
  {
    name: "Tandoori Roti",
    ingredients: ['WHEAT FLOUR', 'YOGURT', 'BAKING POWDER', 'SALT', 'WATER'],
    preparationTime: "15 minutes",
    cookingTime: "8 minutes",
    dishType: "Flatbread",
    cuisine: "Indian",
    steps: [
      "1. In a large mixing bowl, combine 1 cup wheat flour, 0.5 tsp salt, and 0.5 tsp baking powder. 2. Add 2 tbsp yogurt and mix. Gradually add 0.5 cup water to form a smooth dough. 3. Knead the dough for about 5-7 minutes. 4. Cover the dough with a damp cloth and let it rest for 10-15 minutes.",
      "1. Preheat the tandoor or oven to 250°C (482°F). 2. Divide the dough into 8 small balls and roll each ball into a flat circle. 3. Place the rolled-out dough on a damp cloth or stick it to the sides of the tandoor. 4. Cook for 3-4 minutes until the roti is golden brown and slightly charred. 5. Brush with ghee or butter and serve hot.",
    ],
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsvL085SjADnnuvkRZU2pF8EPmMufyzE30Mw&s"
  },
  {
    name: "Butter Naan",
    ingredients: ['WHEAT FLOUR', 'YOGURT', 'BAKING POWDER', 'SALT', 'WATER', 'BUTTER'],
    preparationTime: "12 minutes",
    cookingTime: "7 minutes",
    dishType: "Flatbread",
    cuisine: "Indian",
    steps: [
      "1. Combine 1 cup wheat flour, 0.5 tsp salt, and 0.5 tsp baking powder in a bowl. 2. Add 2 tbsp yogurt and 2 tbsp melted butter. Gradually add 0.5 cup water to form a smooth dough. 3. Knead for 5-7 minutes. Cover and let it rest for 10-15 minutes.",
      "1. Preheat a tawa or griddle on medium-high heat. 2. Divide the dough into small balls and roll them out into a round shape. 3. Cook each side on the tawa for 2 minutes, flipping when bubbles appear. 4. Brush the naan with butter immediately after cooking. 5. Serve hot with curry or dal.",
    ],
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLZ7K3zDimLSh_zPQzYJpxsLuKFFlohsgjhQ&s"
  },
  {
    name: "Garlic Naan",
    ingredients: ['WHEAT FLOUR', 'YOGURT', 'BAKING POWDER', 'SALT', 'WATER', 'GARLIC', 'BUTTER'],
    preparationTime: "12 minutes",
    cookingTime: "8 minutes",
    dishType: "Flatbread",
    cuisine: "Indian",
    steps: [
      "1. In a large mixing bowl, combine 1 cup wheat flour, 0.5 tsp salt, and 0.5 tsp baking powder. 2. Add 2 tbsp yogurt and 2 tbsp melted butter. Gradually add 0.5 cup water to form a smooth dough. 3. Knead for 5-7 minutes and let it rest for 10-15 minutes.",
      "1. Chop 2-3 garlic cloves and mix into the dough. 2. Preheat the tawa or griddle on medium-high heat. 3. Divide the dough into small balls, roll them out, and cook each side for 2 minutes, flipping when bubbles appear. 4. Brush with butter and garlic mixture. 5. Serve hot.",
    ],
    imageUrl: "https://www.cookwithmanali.com/wp-content/uploads/2018/09/Garlic-Naan-500x500.jpg"
  },
  {
    name: "Lachha Paratha",
    ingredients: ['WHEAT FLOUR', 'GHEE', 'SALT', 'WATER'],
    preparationTime: "15 minutes",
    cookingTime: "10 minutes",
    dishType: "Flatbread",
    cuisine: "Indian",
    steps: [
      "1. Combine 1 cup wheat flour and 0.5 tsp salt in a bowl. Gradually add 0.5 cup water and knead to form a smooth dough. 2. Rest the dough for 10-15 minutes.",
      "1. Divide the dough into equal balls. 2. Roll each ball into a flat circle. 3. Apply ghee, fold, and roll again into a ball. 4. Roll out again and cook each side on a tawa for 2 minutes. 5. Brush with ghee and serve hot.",
    ],
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpbO-fETdav2oxzc8sJGtaChyhBYbsyYDORg&s"
  },
  {
    name: "Aloo Paratha",
    ingredients: ['WHEAT FLOUR', 'POTATO', 'SALT', 'GREEN CHILIES', 'CORIANDER'],
    preparationTime: "15 minutes",
    cookingTime: "12 minutes",
    dishType: "Flatbread",
    cuisine: "Indian",
    steps: [
      "1. Boil 2 medium potatoes and mash them. 2. Add 0.5 tsp salt, chopped green chili, and coriander leaves to the mashed potatoes. 3. Combine 1 cup wheat flour, 0.5 tsp salt, and water to form a dough. Rest for 10-15 minutes.",
      "1. Divide the dough into small balls and stuff with the potato mixture. 2. Roll out into a flat circle and cook on a tawa for 2-3 minutes on each side. 3. Serve hot with yogurt or pickle.",
    ],
    imageUrl: "https://cookingfromheart.com/wp-content/uploads/2020/09/Aloo-Paratha-4.jpg"
  },
  {
    name: "Gobi Paratha",
    ingredients: ['WHEAT FLOUR', 'CAULIFLOWER', 'SALT', 'GREEN CHILIES', 'CORIANDER'],
    preparationTime: "15 minutes",
    cookingTime: "12 minutes",
    dishType: "Flatbread",
    cuisine: "Indian",
    steps: [
      "1. Grate 1 small cauliflower and squeeze out the excess water. 2. Add 0.5 tsp salt, chopped green chili, and coriander leaves. 3. Make a dough with 1 cup wheat flour, 0.5 tsp salt, and water. Rest for 10-15 minutes.",
      "1. Divide the dough into small balls, stuff with the cauliflower mixture, and roll out into a flat circle. 2. Cook on a tawa for 2-3 minutes on each side. 3. Serve hot with yogurt or pickle.",
    ],
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBXmu2UfjQ1LKmoIoZi3bxk402GwXqAN6DQw&s"
  },
  {
    name: "Paneer Paratha",
    ingredients: ['WHEAT FLOUR', 'PANEER', 'SALT', 'GREEN CHILIES', 'CORIANDER'],
    preparationTime: "15 minutes",
    cookingTime: "12 minutes",
    dishType: "Flatbread",
    cuisine: "Indian",
    steps: [
      "1. Grate 100g paneer and add 0.5 tsp salt, chopped green chili, and coriander leaves. 2. Combine 1 cup wheat flour, 0.5 tsp salt, and water to form a dough. Rest for 10-15 minutes.",
      "1. Stuff the dough balls with the paneer mixture, roll out into a flat circle, and cook on a tawa for 2-3 minutes on each side. 2. Serve hot with yogurt or pickle.",
    ],
    imageUrl: "https://parcelkaro.in/wp-content/uploads/2023/01/Aloo-Paneer-paratha.webp"
  },
  {
    name: "Methi Paratha",
    ingredients: ['WHEAT FLOUR', 'FENUGREEK LEAVES', 'SALT', 'WATER'],
    preparationTime: "15 minutes",
    cookingTime: "10 minutes",
    dishType: "Flatbread",
    cuisine: "Indian",
    steps: [
      "1. Wash and chop 1 cup fenugreek leaves (methi). 2. Combine with 1 cup wheat flour, 0.5 tsp salt, and water to form a dough. Rest for 10-15 minutes.",
      "1. Divide the dough into small balls, roll them out, and cook on a tawa for 2-3 minutes on each side. 2. Serve hot with yogurt or pickle.",
    ],
    imageUrl: "https://www.ohmyveg.co.uk/wp-content/uploads/2024/05/methi-parathas-4-900x1200.jpg"
  },
  {
    name: "Missi Roti",
    ingredients: ['WHEAT FLOUR', 'GRAM FLOUR', 'SALT', 'AJWAIN', 'CUMIN', 'WATER'],
    preparationTime: "15 minutes",
    cookingTime: "8 minutes",
    dishType: "Flatbread",
    cuisine: "Indian",
    steps: [
      "1. Combine 1 cup wheat flour and 0.5 cup gram flour with 0.5 tsp salt, ajwain, and cumin. Gradually add water to form a dough. Knead for 5-7 minutes. Rest for 10-15 minutes.",
      "1. Divide the dough into small balls, roll them out, and cook on a tawa for 2 minutes on each side. 2. Serve hot with yogurt or pickle.",
    ],
    imageUrl: "https://img-global.cpcdn.com/recipes/9f37646ed0a28ebf/400x400cq70/photo.jpg"
  },
  {
    name: "Rumali Roti",
    ingredients: ['WHEAT FLOUR', 'SALT', 'WATER'],
    preparationTime: "20 minutes",
    cookingTime: "10 minutes",
    dishType: "Flatbread",
    cuisine: "Indian",
    steps: [
      "1. Combine 1 cup wheat flour and 0.5 tsp salt in a bowl. Gradually add 0.5 cup water to form a soft dough. Knead for 5-7 minutes.",
      "1. Divide the dough into small balls. Roll each ball out thinly. 2. Cook each side on a hot tawa for 2 minutes. 3. Serve hot.",
    ],
    imageUrl: "https://cdn.tarladalal.com/members/9306/big/big_rumali_roti-16779.jpg"
  },
  {
    name: "Kulcha (Plain)",
    ingredients: ['WHEAT FLOUR', 'BAKING POWDER', 'SALT', 'WATER'],
    preparationTime: "15 minutes",
    cookingTime: "7 minutes",
    dishType: "Flatbread",
    cuisine: "Indian",
    steps: [
      "1. Combine 1 cup wheat flour, 0.5 tsp baking powder, and 0.5 tsp salt in a bowl. 2. Gradually add 0.5 cup water to form a dough. Knead for 5-7 minutes and rest for 10-15 minutes.",
      "1. Divide the dough into small balls, roll them into circles, and cook on a tawa for 2 minutes on each side. 2. Serve hot with curry or raita.",
    ],
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYmK1GTDdcu4nY6kZM0zwTKapCPDRZ5T6P2Q&s"
  },
  {
    name: "Amritsari Kulcha",
    ingredients: ['WHEAT FLOUR', 'YOGURT', 'BAKING POWDER', 'SALT', 'WATER', 'PANEER'],
    preparationTime: "20 minutes",
    cookingTime: "12 minutes",
    dishType: "Flatbread",
    cuisine: "Indian",
    steps: [
      "1. Combine 1 cup wheat flour, 0.5 tsp baking powder, and 0.5 tsp salt in a bowl. 2. Add 2 tbsp yogurt and 0.5 cup water to form a dough. Rest for 10-15 minutes.",
      "1. Stuff with paneer, roll into a circle, and cook on a tawa for 2 minutes on each side. 2. Serve hot with curry or raita.",
    ],
    imageUrl: "https://i.pinimg.com/736x/cd/92/1e/cd921e3acb47e90f46d7d3c50d50f7f0.jpg"
  },
  {
    name: "Plain Steamed Rice",
    ingredients: ['RICE', 'WATER', 'SALT'],
    preparationTime: "20 minutes",
    cookingTime: "10 minutes",
    dishType: "Rice Dish",
    cuisine: "Indian",
    steps: [
      "1. Wash 1 cup rice under running water until it runs clear. 2. Soak the rice for 10-15 minutes. 3. In a pot, add 2 cups water, bring it to a boil, and add 0.5 tsp salt. 4. Add soaked rice and cook until the water is absorbed.",
      "1. Fluff the rice with a fork and serve hot with curry or any dish of your choice.",
    ],
    imageUrl: "https://static.toiimg.com/thumb/54504752.cms?width=1200&height=900"
  },
  {
    name: "Jeera Rice",
    ingredients: ['RICE', 'CUMIN', 'GHEE', 'SALT', 'WATER'],
    preparationTime: "20 minutes",
    cookingTime: "12 minutes",
    dishType: "Rice Dish",
    cuisine: "Indian",
    steps: [
      "1. Wash 1 cup rice and soak for 10 minutes. 2. In a pan, heat 1 tbsp ghee and add 1 tsp cumin seeds. 3. When cumin seeds splutter, add 2 cups water and bring it to a boil. Add the soaked rice and 0.5 tsp salt.",
      "1. Cook until the water is absorbed and rice is soft. Fluff and serve hot.",
    ],
    imageUrl: "https://myfoodstory.com/wp-content/uploads/2018/07/Perfect-Jeera-Rice-Indian-Cumin-Rice-4-500x500.jpg"
  },
  {
    name: "Veg Biryani",
    ingredients: ['BASMATI RICE', 'ONION', 'TOMATO', 'GINGER', 'GARLIC', 'YOGURT', 'BIRYANI MASALA', 'SALT', 'GHEE', 'WATER'],
    preparationTime: "25 minutes",
    cookingTime: "30 minutes",
    dishType: "Rice Dish",
    cuisine: "Indian",
    steps: [
      "1. Wash and soak 1 cup basmati rice for 30 minutes. 2. Heat 1 tbsp ghee in a pan, add 1 sliced onion, and saute until golden. 3. Add chopped tomatoes, ginger, garlic paste, and biryani masala. Cook for 5-7 minutes.",
      "1. Add mixed vegetables, yogurt, salt, and water. Cook until vegetables are tender. Layer rice and vegetables, cook for another 10 minutes. Serve hot.",
    ],
    imageUrl: "https://www.indianhealthyrecipes.com/wp-content/uploads/2019/04/veg-biryani-recipe-500x500.jpg"
  },
  {
    name: "Chicken Biryani",
    ingredients: ['BASMATI RICE', 'CHICKEN', 'ONION', 'TOMATO', 'GINGER', 'GARLIC', 'YOGURT', 'BIRYANI MASALA', 'SALT', 'GHEE', 'WATER'],
    preparationTime: "30 minutes",
    cookingTime: "40 minutes",
    dishType: "Rice Dish",
    cuisine: "Indian",
    steps: [
      "1. Wash and soak 1 cup basmati rice for 30 minutes. 2. Heat ghee, saute sliced onions until golden, then add chopped tomatoes, ginger, garlic paste, and biryani masala. Cook for 5-7 minutes.",
      "1. Add chicken pieces, yogurt, and water. Cook until chicken is tender. Layer rice on top and cook for 10 more minutes. Serve hot.",
    ],
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwaF6-1Auf1DuOXo9FhalxTrx1j-BnkoOu4A&s"
  },
  {
    name: "Mutton Biryani",
    ingredients: ['BASMATI RICE', 'MUTTON', 'ONION', 'TOMATO', 'GINGER', 'GARLIC', 'YOGURT', 'BIRYANI MASALA', 'SALT', 'GHEE', 'WATER'],
    preparationTime: "35 minutes",
    cookingTime: "45 minutes",
    dishType: "Rice Dish",
    cuisine: "Indian",
    steps: [
      "1. Wash and soak 1 cup basmati rice for 30 minutes. 2. In a pan, heat ghee and saute sliced onions until golden. 3. Add chopped tomatoes, ginger, garlic paste, and biryani masala, cook for 7 minutes.",
      "1. Add mutton pieces, yogurt, and water. Cook until mutton is tender. Layer rice on top and cook for 10 minutes. Serve hot.",
    ],
    imageUrl: "https://www.cubesnjuliennes.com/wp-content/uploads/2021/03/Best-Mutton-Biryani-Recipe.jpg"
  },
  {
    name: "Egg Biryani",
    ingredients: ['BASMATI RICE', 'EGGS', 'ONION', 'TOMATO', 'GINGER', 'GARLIC', 'BIRYANI MASALA', 'SALT', 'GHEE', 'WATER'],
    preparationTime: "25 minutes",
    cookingTime: "35 minutes",
    dishType: "Rice Dish",
    cuisine: "Indian",
    steps: [
      "1. Wash and soak 1 cup basmati rice for 30 minutes. 2. Heat ghee, saute onions until golden, then add tomatoes, ginger, garlic paste, and biryani masala. Cook for 5 minutes.",
      "1. Add hard-boiled eggs and water, cook until rice is ready. Layer and serve hot.",
    ],
    imageUrl: "https://www.indianhealthyrecipes.com/wp-content/uploads/2020/02/instant-pot-egg-biryani-500x500.jpg"
  },
  {
    name: "Prawn Biryani",
    ingredients: ['BASMATI RICE', 'PRAWNS', 'ONION', 'TOMATO', 'GINGER', 'GARLIC', 'BIRYANI MASALA', 'SALT', 'GHEE', 'WATER'],
    preparationTime: "30 minutes",
    cookingTime: "40 minutes",
    dishType: "Rice Dish",
    cuisine: "Indian",
    steps: [
      "1. Wash and soak 1 cup basmati rice for 30 minutes. 2. In a pan, heat ghee and saute onions until golden. 3. Add chopped tomatoes, ginger, garlic paste, and biryani masala. Cook for 7 minutes.",
      "1. Add prawns, yogurt, and water, cook for 5 minutes. Layer rice and cook for 10 more minutes. Serve hot.",
    ],
    imageUrl: "https://www.cubesnjuliennes.com/wp-content/uploads/2020/12/Prawn-Biryani-Recipe.jpg"
  },
  {
    name: "Hyderabadi Biryani (Veg)",
    ingredients: ['BASMATI RICE', 'ONION', 'TOMATO', 'GINGER', 'GARLIC', 'BIRYANI MASALA', 'SALT', 'GHEE', 'WATER'],
    preparationTime: "30 minutes",
    cookingTime: "35 minutes",
    dishType: "Rice Dish",
    cuisine: "Indian",
    steps: [
      "1. Soak 1 cup basmati rice for 30 minutes. 2. Saute onions and tomatoes with biryani masala in ghee. Add chopped vegetables, yogurt, and water.",
      "1. Layer rice and cook for 15 minutes until fully done. Serve hot with raita.",
    ],
    imageUrl: "https://www.indianhealthyrecipes.com/wp-content/uploads/2022/02/hyderabadi-biryani-recipe-chicken.jpg"
  },
  {
    name: "Hyderabadi Biryani (Non-Veg)",
    ingredients: ['BASMATI RICE', 'CHICKEN', 'ONION', 'TOMATO', 'GINGER', 'GARLIC', 'BIRYANI MASALA', 'SALT', 'GHEE', 'WATER'],
    preparationTime: "35 minutes",
    cookingTime: "45 minutes",
    dishType: "Rice Dish",
    cuisine: "Indian",
    steps: [
      "1. Soak 1 cup basmati rice for 30 minutes. 2. Saute onions, tomatoes, and biryani masala in ghee. Add chicken pieces and cook for 10 minutes.",
      "1. Add water and rice, cook for 15 minutes until rice is cooked through. Serve hot.",
    ],
    imageUrl: "https://www.indianhealthyrecipes.com/wp-content/uploads/2022/02/hyderabadi-biryani-recipe-chicken.jpg"
  },
  {
    name: "Lemon Rice",
    ingredients: ['RICE', 'LEMON', 'GREEN CHILIES', 'MUSTARD SEEDS', 'TURMERIC', 'SALT', 'GHEE'],
    preparationTime: "15 minutes",
    cookingTime: "20 minutes",
    dishType: "Rice Dish",
    cuisine: "Indian",
    steps: [
      "1. Cook 1 cup rice and set aside. 2. In a pan, heat ghee and add mustard seeds, green chilies, and turmeric. Cook for 2-3 minutes.",
      "1. Add the rice to the pan, mix in lemon juice, and salt. Stir-fry for 2-3 minutes. Serve hot.",
    ],
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsDhP_3GxHU27qgD0whesQEDg-vUFBvFbXWA&s"
  },
  {
    name: "Tamarind Rice",
    ingredients: ['RICE', 'TAMARIND PASTE', 'MUSTARD SEEDS', 'GREEN CHILIES', 'TURMERIC', 'SALT', 'GHEE'],
    preparationTime: "20 minutes",
    cookingTime: "25 minutes",
    dishType: "Rice Dish",
    cuisine: "Indian",
    steps: [
      "1. Cook 1 cup rice and set aside. 2. Heat ghee, add mustard seeds, green chilies, and turmeric. Cook for 2-3 minutes.",
      "1. Add tamarind paste, salt, and the rice. Stir-fry for 3-4 minutes. Serve hot.",
    ],
    imageUrl: "https://www.vegrecipesofindia.com/wp-content/uploads/2016/10/tamarind-rice-recipe-1-500x375.jpg"
  },
  {
    name: "Coconut Rice",
    ingredients: ['RICE', 'GRATED COCONUT', 'GREEN CHILIES', 'MUSTARD SEEDS', 'TURMERIC', 'SALT', 'GHEE'],
    preparationTime: "20 minutes",
    cookingTime: "25 minutes",
    dishType: "Rice Dish",
    cuisine: "Indian",
    steps: [
      "1. Cook 1 cup rice and set aside. 2. In a pan, heat ghee, add mustard seeds, green chilies, and turmeric. Cook for 2-3 minutes.",
      "1. Add grated coconut, salt, and the cooked rice. Stir-fry for 3-4 minutes. Serve hot.",
    ],
    imageUrl: "https://www.indianhealthyrecipes.com/wp-content/uploads/2021/05/coconut-rice-recipe.jpg"
  },
  {
    name: "Khichdi (Plain)",
    ingredients: ['RICE', 'MOONG DAL', 'WATER', 'SALT', 'GHEE'],
    preparationTime: "20 minutes",
    cookingTime: "25 minutes",
    dishType: "Rice Dish",
    cuisine: "Indian",
    steps: [
      "1. Wash 1 cup rice and 0.5 cup moong dal. 2. In a pressure cooker, add rice, dal, 4 cups water, and salt. Cook for 3-4 whistles.",
      "1. Serve hot with ghee or pickle.",
    ],
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFhMfAmJRiY6RN-rUWPBN5aGezlvfsl0OZiQ&s"
  },
  {
    name: "Masala Khichdi",
    ingredients: ['RICE', 'MOONG DAL', 'CARROT', 'PEAS', 'BEANS', 'POTATO', 'ONION', 'GINGER', 'CUMIN', 'SALT', 'GHEE'],
    preparationTime: "20 minutes",
    cookingTime: "30 minutes",
    dishType: "Rice Dish",
    cuisine: "Indian",
    steps: [
      "1. Wash 1 cup rice and 0.5 cup moong dal. 2. In a pressure cooker, heat ghee and add cumin seeds. Add ginger and saute vegetables for 5-7 minutes.",
      "1. Add rice, dal, 4 cups water, and salt. Cook for 3-4 whistles. Serve hot.",
    ],
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPpZmutBRPlj3icycbSPV4rPr_MMtq8tJboQ&s"
  },
  {
    name: "Curd Rice",
    ingredients: ['RICE', 'CURD', 'GINGER', 'GREEN CHILIES', 'MUSTARD SEEDS', 'CURRY LEAVES', 'SALT'],
    preparationTime: "20 minutes",
    cookingTime: "25 minutes",
    dishType: "Rice Dish",
    cuisine: "Indian",
    steps: [
      "1. Cook 1 cup rice and cool slightly. 2. In a pan, heat ghee, add mustard seeds, green chilies, ginger, and curry leaves. Cook for 2 minutes.",
      "1. Add rice to the pan and mix with curd. Serve chilled.",
    ],
    imageUrl: "https://www.indianhealthyrecipes.com/wp-content/uploads/2022/02/curd-rice-thayir-sadam.jpg"
  },
  {
    name: "Vegetable Pulao",
    ingredients: ['RICE', 'ONION', 'GINGER', 'GARLIC', 'PULAO MASALA', 'SALT', 'GHEE', 'WATER'],
    preparationTime: "25 minutes",
    cookingTime: "30 minutes",
    dishType: "Rice Dish",
    cuisine: "Indian",
    steps: [
      "1. Wash 1 cup rice and soak for 15 minutes. 2. In a pan, heat ghee, saute onions, ginger, and garlic. Add mixed vegetables and pulao masala.",
      "1. Add water, rice, and salt. Cook for 15",
    ],
    imageUrl: "https://www.indianhealthyrecipes.com/wp-content/uploads/2018/07/pulao-recipe.jpg"
  },
  {
    name: "Peas Pulao",
    ingredients: ['RICE', 'GREEN PEAS', 'ONION', 'GINGER', 'GARLIC', 'PULAO MASALA', 'SALT', 'GHEE', 'WATER'],
    preparationTime: "20 minutes",
    cookingTime: "25 minutes",
    dishType: "Rice Dish",
    cuisine: "Indian",
    steps: [
      "1. Wash 1 cup rice and soak for 15 minutes. 2. In a pan, heat ghee, saute onions, ginger, and garlic. Add green peas and pulao masala. Cook for 5 minutes.",
      "1. Add rice, water, and salt. Cook until the rice is done. Serve hot with raita or curry.",
    ],
    imageUrl: "https://www.whiskaffair.com/wp-content/uploads/2021/03/Peas-Pulao-2-3.jpg"
  },
  {
    name: "Kashmiri Pulao",
    ingredients: ['RICE', 'ALMONDS', 'CASHEWS', 'RAISINS', 'SAFFRON', 'CINNAMON', 'CLOVES', 'CARDAMOM', 'SALT', 'GHEE', 'WATER'],
    preparationTime: "25 minutes",
    cookingTime: "30 minutes",
    dishType: "Rice Dish",
    cuisine: "Indian",
    steps: [
      "1. Wash 1 cup rice and soak for 15 minutes. 2. In a pan, heat ghee, add cinnamon, cloves, cardamom, and saute for 2 minutes. Add mixed dry fruits and saffron water.",
      "1. Add rice, water, and salt. Cook until rice is tender and dry fruits are evenly distributed. Serve hot.",
    ],
    imageUrl: "https://www.vegrecipesofindia.com/wp-content/uploads/2021/06/kashmiri-pulao-3.jpg"
  },
  {
    name: "Fried Rice (Veg)",
    ingredients: ['RICE', 'CARROT', 'PEAS', 'BEANS', 'SOY SAUCE', 'GINGER', 'GARLIC', 'SPRING ONION', 'SALT', 'OIL'],
    preparationTime: "20 minutes",
    cookingTime: "20 minutes",
    dishType: "Rice Dish",
    cuisine: "Chinese",
    steps: [
      "1. Cook 1 cup rice and set aside. 2. In a wok, heat oil, saute ginger, garlic, and mixed vegetables for 5 minutes.",
      "1. Add rice and soy sauce, stir-fry for 3-4 minutes. Garnish with spring onions and serve hot.",
    ],
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNPwIjsEARR3sI92Eeqao0gv_edGHlNUarfg&s"
  },
  {
    name: "Fried Rice (Egg)",
    ingredients: ['RICE', 'EGGS', 'SOY SAUCE', 'CARROT', 'PEAS', 'SALT', 'OIL'],
    preparationTime: "20 minutes",
    cookingTime: "20 minutes",
    dishType: "Rice Dish",
    cuisine: "Chinese",
    steps: [
      "1. Cook 1 cup rice and set aside. 2. In a pan, heat oil and scramble 2 eggs. Add vegetables and stir-fry for 5 minutes.",
      "1. Add rice and soy sauce, stir-fry for 3-4 minutes. Serve hot.",
    ],
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNPwIjsEARR3sI92Eeqao0gv_edGHlNUarfg&s"
  },
  {
    name: "Fried Rice (Chicken)",
    ingredients: ['RICE', 'CHICKEN', 'SOY SAUCE', 'CARROT', 'PEAS', 'SALT', 'OIL'],
    preparationTime: "25 minutes",
    cookingTime: "25 minutes",
    dishType: "Rice Dish",
    cuisine: "Chinese",
    steps: [
      "1. Cook 1 cup rice and set aside. 2. In a pan, heat oil, saute chicken pieces until cooked, then add vegetables and cook for 5 minutes.",
      "1. Add rice and soy sauce, stir-fry for 3-4 minutes. Serve hot.",
    ],
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNPwIjsEARR3sI92Eeqao0gv_edGHlNUarfg&s"
  },
  {
    name: "Schezwan Fried Rice",
    ingredients: ['RICE', 'SCHEZWAN SAUCE', 'CARROT', 'PEAS', 'BEANS', 'SOY SAUCE', 'GINGER', 'GARLIC', 'SPRING ONION', 'SALT', 'OIL'],
    preparationTime: "25 minutes",
    cookingTime: "30 minutes",
    dishType: "Rice Dish",
    cuisine: "Chinese",
    steps: [
      "1. Cook 1 cup rice and set aside. 2. In a wok, heat oil, saute ginger, garlic, and vegetables for 5 minutes. Add Schezwan sauce and soy sauce.",
      "1. Add rice, stir-fry for 3-4 minutes. Garnish with spring onions and serve hot.",
    ],
    imageUrl: "https://www.sharmispassions.com/wp-content/uploads/2014/11/SchezwanFriedRice5.jpg"
  },
  {
    name: "Dal Tadka",
    ingredients: ['TOOR DAL', 'ONION', 'TOMATO', 'GINGER', 'GARLIC', 'GREEN CHILIES', 'CUMIN', 'GHEE', 'SALT', 'TURMERIC', 'RED CHILI POWDER', 'WATER'],
    preparationTime: "20 minutes",
    cookingTime: "25 minutes",
    dishType: "Legume Dish",
    cuisine: "Indian",
    steps: [
      "1. Wash 1 cup toor dal under running water. 2. In a pressure cooker, add dal with 3 cups of water, cook for 2-3 whistles. 3. In a pan, heat 2 tbsp ghee. Add 1 tsp cumin seeds and let them splutter. 4. Add 1 finely chopped onion, saute until golden brown. 5. Add 1 tsp ginger-garlic paste and saute for 2 minutes. 6. Add 1 chopped tomato, cook for 5 minutes until soft. 7. Add 1/2 tsp turmeric, 1 tsp red chili powder, salt to taste, and cook for 2 minutes.",
      "1. Add the cooked dal to the pan, mix well. 2. Add 1/2 cup water to adjust the consistency. 3. Simmer for 10 minutes on low heat. 4. Garnish with fresh coriander leaves and serve hot with rice or roti.",
    ],
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSD4dKcPnFlczSSGURgI9-sPaHCHNteNbYAyA&s"
  },
  {
    name: "Dal Fry",
    ingredients: ['TOOR DAL', 'ONION', 'TOMATO', 'GINGER', 'GARLIC', 'GREEN CHILIES', 'CUMIN', 'GHEE', 'SALT', 'TURMERIC', 'RED CHILI POWDER', 'WATER'],
    preparationTime: "20 minutes",
    cookingTime: "25 minutes",
    dishType: "Legume Dish",
    cuisine: "Indian",
    steps: [
      "1. Cook 1 cup toor dal in a pressure cooker with 3 cups water for 2-3 whistles. 2. In a pan, heat 2 tbsp ghee. Add 1 tsp cumin seeds and allow them to splutter. 3. Add 1 finely chopped onion and saute till golden brown. 4. Add 1 tsp ginger-garlic paste, cook for 1 minute. 5. Add 1 chopped tomato, cook till soft and mushy. 6. Add 1/2 tsp turmeric powder, 1 tsp red chili powder, salt to taste, and cook for 2 minutes.",
      "1. Pour in the cooked dal, mix well, and add water as needed to reach your desired consistency. 2. Simmer for 10 minutes. 3. Garnish with fresh coriander leaves and serve with roti or rice.",
    ],
    imageUrl: "https://shwetainthekitchen.com/wp-content/uploads/2021/12/Dal-Fry-Recipe.jpg"
  },
  {
    name: "Dal Makhani",
    ingredients: ['URAD DAL', 'RAJMA', 'ONION', 'TOMATO', 'GINGER', 'GARLIC', 'BUTTER', 'CREAM', 'SALT', 'TURMERIC', 'GARAM MASALA', 'WATER'],
    preparationTime: "30 minutes",
    cookingTime: "40 minutes",
    dishType: "Legume Dish",
    cuisine: "Indian",
    steps: [
      "1. Soak 1 cup urad dal and 1/4 cup rajma overnight. 2. Pressure cook the dal and rajma mixture for 6-7 whistles. 3. In a pan, heat 2 tbsp ghee, add 1 tsp cumin seeds and allow to splutter. 4. Add 1 finely chopped onion and saute till golden brown. 5. Add 1 tsp ginger-garlic paste, saute for 2 minutes. 6. Add 2 chopped tomatoes, cook till soft. 7. Add 1/2 tsp turmeric powder, 1 tsp red chili powder, salt to taste, and cook for 3-4 minutes.",
      "1. Add the cooked dal and rajma to the pan, add 1 cup water, and simmer for 15 minutes. 2. Add 2 tbsp butter and 1/4 cup cream. Stir well, let it simmer for another 10 minutes. 3. Garnish with fresh coriander leaves. Serve with naan or rice.",
    ],
    imageUrl: "https://www.cookwithmanali.com/wp-content/uploads/2019/04/Restaurant-Style-Dal-Makhani.jpg"
  },
  {
    name: "Moong Dal (Yellow)",
    ingredients: ['YELLOW MOONG DAL', 'ONION', 'TOMATO', 'GINGER', 'GARLIC', 'CUMIN', 'GHEE', 'SALT', 'TURMERIC', 'WATER'],
    preparationTime: "15 minutes",
    cookingTime: "20 minutes",
    dishType: "Legume Dish",
    cuisine: "Indian",
    steps: [
      "1. Wash 1 cup moong dal under running water. 2. Cook in a pressure cooker with 3 cups water for 2 whistles. 3. In a pan, heat 2 tbsp ghee. Add 1 tsp cumin seeds, saute till they splutter. 4. Add 1 finely chopped onion, saute till golden. 5. Add 1 tsp ginger-garlic paste, saute for 1 minute. 6. Add 1 chopped tomato, cook for 5 minutes till soft. 7. Add 1/2 tsp turmeric, salt to taste, and cook for 2 minutes.",
      "1. Add the cooked dal to the pan, mix well, and simmer for 5 minutes on low heat. 2. Garnish with coriander leaves. Serve with rice or roti.",
    ],
    imageUrl: "https://www.indianhealthyrecipes.com/wp-content/uploads/2021/07/moong-dal-recipe.jpg"
  },
  {
    name: "Chana Dal",
    ingredients: ['CHANA DAL', 'ONION', 'TOMATO', 'GINGER', 'GARLIC', 'GREEN CHILIES', 'CUMIN', 'GHEE', 'SALT', 'TURMERIC', 'RED CHILI POWDER', 'WATER'],
    preparationTime: "25 minutes",
    cookingTime: "30 minutes",
    dishType: "Legume Dish",
    cuisine: "Indian",
    steps: [
      "1. Wash and soak 1 cup chana dal for 1 hour. 2. Pressure cook the dal with 3 cups water for 3 whistles. 3. In a pan, heat 2 tbsp ghee, add 1 tsp cumin seeds, let them splutter. 4. Add 1 finely chopped onion, saute till golden. 5. Add 1 tsp ginger-garlic paste, saute for 1 minute. 6. Add 1 chopped tomato, cook till soft. 7. Add 1/2 tsp turmeric powder, 1 tsp red chili powder, salt to taste, and cook for 2 minutes.",
      "1. Add the cooked dal to the pan, mix well, and simmer for 10 minutes. 2. Garnish with fresh coriander leaves and serve hot with rice or roti.",
    ],
    imageUrl: "https://shwetainthekitchen.com/wp-content/uploads/2023/01/chana-dal-500x500.jpg"
  },
  {
    name: "Masoor Dal",
    ingredients: ['MASOOR DAL', 'ONION', 'TOMATO', 'GINGER', 'GARLIC', 'GREEN CHILIES', 'CUMIN', 'GHEE', 'SALT', 'TURMERIC', 'WATER'],
    preparationTime: "15 minutes",
    cookingTime: "20 minutes",
    dishType: "Legume Dish",
    cuisine: "Indian",
    steps: [
      "1. Wash 1 cup masoor dal under running water. 2. Cook the dal in a pressure cooker with 3 cups water for 2-3 whistles. 3. In a pan, heat 2 tbsp ghee. Add 1 tsp cumin seeds, saute till they splutter. 4. Add 1 finely chopped onion, saute till golden. 5. Add 1 tsp ginger-garlic paste, saute for 1 minute. 6. Add 1 chopped tomato, cook for 5 minutes till soft. 7. Add 1/2 tsp turmeric powder, salt to taste, and cook for 2 minutes.",
      "1. Add the cooked dal to the pan, mix well, and simmer for 5-10 minutes. 2. Garnish with fresh coriander leaves and serve with rice or roti.",
    ],
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHAFX_GFaAPW7cF17H0cVrMPttC6XsIQh90Q&s"
  },
  {
    name: "Toor Dal",
    ingredients: ['TOOR DAL', 'ONION', 'TOMATO', 'GINGER', 'GARLIC', 'GREEN CHILIES', 'CUMIN', 'GHEE', 'SALT', 'TURMERIC', 'WATER'],
    preparationTime: "20 minutes",
    cookingTime: "25 minutes",
    dishType: "Legume Dish",
    cuisine: "Indian",
    steps: [
      "1. Wash 1 cup toor dal under running water. 2. Cook the dal in a pressure cooker with 3 cups water for 3 whistles. 3. In a pan, heat 2 tbsp ghee. Add 1 tsp cumin seeds, saute till they splutter. 4. Add 1 finely chopped onion, saute till golden brown. 5. Add 1 tsp ginger-garlic paste, saute for 1 minute. 6. Add 1 chopped tomato, cook for 5 minutes till soft. 7. Add 1/2 tsp turmeric, salt to taste, and cook for 2 minutes.",
      "1. Add the cooked dal to the pan, mix well, and simmer for 10 minutes. 2. Garnish with fresh coriander leaves. Serve hot with rice or roti.",
    ],
    imageUrl: "https://www.whiskaffair.com/wp-content/uploads/2020/04/North-Indian-Homestyle-Toor-Dal-2-3.jpg"
  },
  {
    name: "Gujarati Dal",
    ingredients: ['TOOR DAL', 'TAMARIND', 'JAGGERY', 'GINGER', 'GARLIC', 'GREEN CHILIES', 'CUMIN', 'MUSTARD SEEDS', 'GHEE', 'SALT', 'TURMERIC', 'WATER'],
    preparationTime: "30 minutes",
    cookingTime: "35 minutes",
    dishType: "Legume Dish",
    cuisine: "Indian",
    steps: [
      "1. Wash 1 cup toor dal under running water. 2. Cook the dal in a pressure cooker with 3 cups water for 3 whistles. 3. In a pan, heat 2 tbsp ghee, add 1 tsp cumin seeds, 1/2 tsp mustard seeds, and saute till they splutter. 4. Add 1 tsp ginger-garlic paste, saute for 2 minutes. 5. Add 1 chopped tomato, cook till soft. 6. Add 1 tbsp jaggery, 1 tbsp tamarind pulp, 1/2 tsp turmeric, salt to taste, and cook for 5 minutes.",
      "1. Add the cooked dal to the pan, mix well, and simmer for 10 minutes. 2. Garnish with fresh coriander leaves and serve hot with rice.",
    ],
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRvpDqSJD1AdvmX9h797PO5Lv84EZpIw0Yng&s"
  },
  {
    name: "Rajma Masala",
    ingredients: ['RAJMA', 'ONION', 'TOMATO', 'GINGER', 'GARLIC', 'GREEN CHILIES', 'CUMIN', 'GHEE', 'SALT', 'TURMERIC', 'RED CHILI POWDER', 'GARAM MASALA', 'WATER'],
    preparationTime: "30 minutes",
    cookingTime: "40 minutes",
    dishType: "Legume Dish",
    cuisine: "Indian",
    steps: [
      "1. Soak 1 cup rajma overnight. 2. Cook the rajma in a pressure cooker with 3 cups water for 4-5 whistles. 3. In a pan, heat 2 tbsp ghee, add 1 tsp cumin seeds, saute till they splutter. 4. Add 1 finely chopped onion, saute till golden brown. 5. Add 1 tsp ginger-garlic paste, saute for 2 minutes. 6. Add 1 chopped tomato, cook for 5 minutes till soft. 7. Add 1/2 tsp turmeric, 1 tsp red chili powder, salt to taste, and cook for 3-4 minutes.",
      "1. Add the cooked rajma to the pan, mix well, and simmer for 15 minutes. 2. Add 1 tsp garam masala and cook for another 5 minutes. 3. Garnish with fresh coriander leaves and serve with rice or roti.",
    ],
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToaeTcAuJ7MP3e2mXgI3s5EeKemMMqVtPk6g&s"
  },
  {
    name: "Lobia Curry (Black-Eyed Peas)",
    ingredients: ['LOBIA', 'ONION', 'TOMATO', 'GINGER', 'GARLIC', 'GREEN CHILIES', 'CUMIN', 'GHEE', 'SALT', 'TURMERIC', 'RED CHILI POWDER', 'GARAM MASALA', 'WATER'],
    preparationTime: "25 minutes",
    cookingTime: "30 minutes",
    dishType: "Legume Dish",
    cuisine: "Indian",
    steps: [
      "1. Wash 1 cup black-eyed peas under running water. 2. Soak overnight or for at least 4 hours. 3. In a pressure cooker, cook the soaked lobia with 3 cups water for 4-5 whistles. 4. In a pan, heat 2 tbsp ghee. Add 1 tsp cumin seeds and let them splutter. 5. Add 1 finely chopped onion, saute until golden brown. 6. Add 1 tsp ginger-garlic paste, saute for 2 minutes. 7. Add 2 chopped tomatoes, cook till soft. 8. Add 1/2 tsp turmeric powder, 1 tsp red chili powder, and salt to taste. Cook for 2 minutes.",
      "1. Add the cooked lobia to the pan and mix well. 2. Add water as needed to adjust the consistency. 3. Simmer for 10-15 minutes, then add 1 tsp garam masala. 4. Garnish with fresh coriander leaves and serve hot with rice or roti.",
    ],
    imageUrl: "https://shwetainthekitchen.com/wp-content/uploads/2021/02/Lobia-Masala.jpg"
  },
  {
    name: "Pindi Chole (Chickpeas)",
    ingredients: ['CHICKPEAS', 'ONION', 'TOMATO', 'GINGER', 'GARLIC', 'GREEN CHILIES', 'CUMIN', 'ASAFOETIDA', 'GHEE', 'SALT', 'TURMERIC', 'RED CHILI POWDER', 'GARAM MASALA', 'TEA BAG', 'WATER'],
    preparationTime: "30 minutes",
    cookingTime: "40 minutes",
    dishType: "Legume Dish",
    cuisine: "Indian",
    steps: [
      "1. Soak 1 cup chickpeas overnight. 2. Pressure cook the soaked chickpeas with 3 cups water and a tea bag for 4-5 whistles. 3. In a pan, heat 2 tbsp ghee. Add 1 tsp cumin seeds and a pinch of asafoetida. 4. Add 1 finely chopped onion, saute till golden brown. 5. Add 1 tsp ginger-garlic paste and saute for 2 minutes. 6. Add 2 chopped tomatoes, cook until soft. 7. Add 1/2 tsp turmeric powder, 1 tsp red chili powder, and salt to taste, cook for 3-4 minutes.",
      "1. Add the cooked chickpeas to the pan, mix well, and add water to adjust consistency. 2. Simmer for 10-15 minutes. 3. Add 1 tsp garam masala and cook for 2 minutes. 4. Garnish with fresh coriander leaves and serve with rice or roti.",
    ],
    imageUrl: "https://i0.wp.com/upbeetanisha.com/wp-content/uploads/2023/01/DSC_1609.jpg?w=1200&ssl=1"
  },
  {
    name: "Dhaba Style Dal",
    ingredients: ['MOONG DAL', 'MASOOR DAL', 'TOOR DAL', 'ONION', 'TOMATO', 'GINGER', 'GARLIC', 'GREEN CHILIES', 'CUMIN', 'GHEE', 'SALT', 'TURMERIC', 'RED CHILI POWDER', 'GARAM MASALA', 'WATER'],
    preparationTime: "30 minutes",
    cookingTime: "40 minutes",
    dishType: "Legume Dish",
    cuisine: "Indian",
    steps: [
      "1. Wash 1/4 cup moong dal, 1/4 cup masoor dal, and 1/4 cup toor dal. 2. Cook the mixed lentils in a pressure cooker with 3 cups water for 2-3 whistles. 3. In a pan, heat 2 tbsp ghee. Add 1 tsp cumin seeds, let them splutter. 4. Add 1 finely chopped onion, saute till golden brown. 5. Add 1 tsp ginger-garlic paste and saute for 1 minute. 6. Add 2 chopped tomatoes, cook until soft. 7. Add 1/2 tsp turmeric powder, 1 tsp red chili powder, and salt to taste. Cook for 2 minutes.",
      "1. Add the cooked lentils to the pan, mix well, and simmer for 10 minutes. 2. Add 1 tsp garam masala and cook for another 5 minutes. 3. Garnish with fresh coriander leaves and serve with rice or roti.",
    ],
    imageUrl: "https://cookingfromheart.com/wp-content/uploads/2021/09/Dhaba-Style-Dal-Fry-1.jpg"
  },
  {
    name: "Dal Panchmel",
    ingredients: ['MOONG DAL', 'MASOOR DAL', 'TOOR DAL', 'CHANA DAL', 'URAD DAL', 'ONION', 'TOMATO', 'GINGER', 'GARLIC', 'GREEN CHILIES', 'CUMIN', 'MUSTARD SEEDS', 'GHEE', 'SALT', 'TURMERIC', 'RED CHILI POWDER', 'GARAM MASALA', 'WATER'],
    preparationTime: "40 minutes",
    cookingTime: "45 minutes",
    dishType: "Legume Dish",
    cuisine: "Indian",
    steps: [
      "1. Wash 1/4 cup each of moong dal, masoor dal, toor dal, chana dal, and urad dal. 2. Pressure cook the mixed lentils with 4 cups of water for 4-5 whistles. 3. In a pan, heat 2 tbsp ghee. Add 1 tsp cumin seeds, 1/2 tsp mustard seeds, and let them splutter. 4. Add 1 finely chopped onion, saute till golden brown. 5. Add 1 tsp ginger-garlic paste, saute for 1 minute. 6. Add 2 chopped tomatoes, cook until soft. 7. Add 1/2 tsp turmeric powder, 1 tsp red chili powder, salt to taste. Cook for 3-4 minutes.",
      "1. Add the cooked lentils to the pan, mix well, and simmer for 10 minutes. 2. Add 1 tsp garam masala and cook for another 5 minutes. 3. Garnish with fresh coriander leaves and serve hot with rice or roti.",
    ],
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiIpTFL7vImAtKVjj5M3dbQiJyT73vyDy3BQ&s"
  },
  {
    name: "Sambar",
    ingredients: ['TOOR DAL', 'ONION', 'TOMATO', 'CARROT', 'DRUMSTICK', 'TAMARIND', 'SAMBAR POWDER', 'MUSTARD SEEDS', 'CURRY LEAVES', 'GREEN CHILIES', 'GHEE', 'SALT', 'TURMERIC', 'WATER'],
    preparationTime: "40 minutes",
    cookingTime: "50 minutes",
    dishType: "Legume Dish",
    cuisine: "Indian",
    steps: [
      "1. Wash 1 cup toor dal and cook it in a pressure cooker with 3 cups water for 4-5 whistles. 2. In a pan, heat 2 tbsp ghee. Add 1 tsp mustard seeds and let them splutter. 3. Add 1 chopped onion and saute till golden brown. 4. Add 1 chopped tomato, 1 chopped carrot, and 2-3 drumsticks. 5. Add 1 tsp sambar powder, 1/2 tsp turmeric, salt to taste, and cook for 5 minutes.",
      "1. Add the cooked dal to the pan, mix well, and simmer for 10 minutes. 2. Add 1 tbsp tamarind pulp and water to adjust the consistency. 3. Garnish with curry leaves and serve hot with rice or idli.",
    ],
    imageUrl: "https://www.indianhealthyrecipes.com/wp-content/uploads/2021/05/sambar.jpg"
  },
  {
    name: "Aloo Gobi",
    ingredients: ['POTATO', 'CAULIFLOWER', 'ONION', 'TOMATO', 'GINGER', 'GARLIC', 'GREEN CHILIES', 'CUMIN', 'TURMERIC', 'RED CHILI POWDER', 'GARAM MASALA', 'SALT', 'WATER'],
    preparationTime: "25 minutes",
    cookingTime: "30 minutes",
    dishType: "Vegetable Dish",
    cuisine: "Indian",
    steps: [
      "1. Peel and chop 2 medium-sized potatoes and 1/2 head of cauliflower into small pieces. 2. In a pan, heat 2 tbsp oil and add 1 tsp cumin seeds. Let them splutter. 3. Add 1 chopped onion and saute until golden brown. 4. Add 1 tsp ginger-garlic paste and saute for 1 minute. 5. Add 2 chopped tomatoes and cook until soft. 6. Add 1/2 tsp turmeric, 1 tsp red chili powder, and salt to taste. Stir and cook for 2 minutes.",
      "1. Add the chopped potatoes and cauliflower to the pan, mix well. 2. Add 1/2 cup of water and cover the pan. Let it cook for 15-20 minutes, stirring occasionally. 3. Add 1 tsp garam masala and cook for another 2-3 minutes. 4. Garnish with fresh coriander leaves and serve hot with roti or rice.",
    ],
    imageUrl: "https://www.indianhealthyrecipes.com/wp-content/uploads/2022/03/aloo-gobi-recipe.jpg"
  },
  {
    name: "Aloo Matar",
    ingredients: ['POTATO', 'GREEN PEAS', 'ONION', 'TOMATO', 'GINGER', 'GARLIC', 'CUMIN', 'TURMERIC', 'RED CHILI POWDER', 'GARAM MASALA', 'SALT', 'WATER'],
    preparationTime: "25 minutes",
    cookingTime: "30 minutes",
    dishType: "Vegetable Dish",
    cuisine: "Indian",
    steps: [
      "1. Peel and chop 2 medium potatoes into cubes. 2. In a pan, heat 2 tbsp oil and add 1 tsp cumin seeds. Let them splutter. 3. Add 1 chopped onion and saute until golden brown. 4. Add 1 tsp ginger-garlic paste and saute for 1 minute. 5. Add 2 chopped tomatoes and cook until soft. 6. Add 1/2 tsp turmeric, 1 tsp red chili powder, and salt to taste. Stir and cook for 2 minutes.",
      "1. Add the chopped potatoes and 1 cup of green peas to the pan, mix well. 2. Add 1/2 cup of water and cover the pan. Let it cook for 15-20 minutes. 3. Add 1 tsp garam masala and cook for another 2-3 minutes. 4. Garnish with fresh coriander leaves and serve hot with roti or rice.",
    ],
    imageUrl: "https://www.cubesnjuliennes.com/wp-content/uploads/2020/07/Punjabi-Aloo-Matar-Recipe.jpg"
  },
  {
    name: "Bhindi Masala",
    ingredients: ['BHINDI', 'ONION', 'TOMATO', 'GINGER', 'GARLIC', 'GREEN CHILIES', 'CUMIN', 'TURMERIC', 'RED CHILI POWDER', 'GARAM MASALA', 'SALT', 'OIL'],
    preparationTime: "20 minutes",
    cookingTime: "25 minutes",
    dishType: "Vegetable Dish",
    cuisine: "Indian",
    steps: [
      "1. Wash and chop 250g okra (bhindi) into 1-inch pieces. 2. In a pan, heat 2 tbsp oil and add 1 tsp cumin seeds. Let them splutter. 3. Add 1 chopped onion and saute until golden brown. 4. Add 1 tsp ginger-garlic paste and saute for 1 minute. 5. Add 2 chopped tomatoes and cook until soft. 6. Add 1/2 tsp turmeric, 1 tsp red chili powder, and salt to taste. Stir and cook for 2 minutes.",
      "1. Add the chopped okra to the pan, mix well, and cook on medium heat for 10-15 minutes, stirring occasionally. 2. Add 1 tsp garam masala and cook for another 2-3 minutes. 3. Garnish with fresh coriander leaves and serve hot with roti or rice.",
    ],
    imageUrl: "https://aromaticessence.co/wp-content/uploads/2022/06/punjabi_bhindi_masala_gravy_featured.jpg"
  },
  {
    name: "Baingan Bharta",
    ingredients: ['EGGPLANT', 'ONION', 'TOMATO', 'GINGER', 'GARLIC', 'GREEN CHILIES', 'CUMIN', 'TURMERIC', 'RED CHILI POWDER', 'GARAM MASALA', 'SALT', 'OIL'],
    preparationTime: "30 minutes",
    cookingTime: "40 minutes",
    dishType: "Vegetable Dish",
    cuisine: "Indian",
    steps: [
      "1. Roast 1 large eggplant directly on the flame or in an oven until the skin is charred and the flesh is soft. 2. Peel the skin off and mash the eggplant. 3. In a pan, heat 2 tbsp oil and add 1 tsp cumin seeds. Let them splutter. 4. Add 1 chopped onion and saute until golden brown. 5. Add 1 tsp ginger-garlic paste and saute for 1 minute. 6. Add 2 chopped tomatoes and cook until soft. 7. Add 1/2 tsp turmeric, 1 tsp red chili powder, and salt to taste. Stir and cook for 2 minutes.",
      "1. Add the mashed eggplant to the pan and mix well. 2. Cook for 5-7 minutes on medium heat. 3. Add 1 tsp garam masala and cook for another 2 minutes. 4. Garnish with fresh coriander leaves and serve hot with roti or rice.",
    ],
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToZymFb9d6t8RUEVxKCBqRsVV8GUfyxbGHhQ&s"
  },
  {
    name: "Lauki Sabzi",
    ingredients: ['BOTTLE GOURD', 'ONION', 'TOMATO', 'GINGER', 'GARLIC', 'GREEN CHILIES', 'CUMIN', 'TURMERIC', 'RED CHILI POWDER', 'GARAM MASALA', 'SALT', 'WATER'],
    preparationTime: "20 minutes",
    cookingTime: "25 minutes",
    dishType: "Vegetable Dish",
    cuisine: "Indian",
    steps: [
      "1. Peel and chop 1 medium bottle gourd (lauki) into cubes. 2. In a pan, heat 2 tbsp oil and add 1 tsp cumin seeds. Let them splutter. 3. Add 1 chopped onion and saute until golden brown. 4. Add 1 tsp ginger-garlic paste and saute for 1 minute. 5. Add 2 chopped tomatoes and cook until soft. 6. Add 1/2 tsp turmeric, 1 tsp red chili powder, and salt to taste. Stir and cook for 2 minutes.",
      "1. Add the chopped lauki to the pan, mix well, and cook for 10-15 minutes, stirring occasionally. 2. Add 1/2 cup of water and let it simmer until the lauki is cooked. 3. Add 1 tsp garam masala and cook for another 2 minutes. 4. Garnish with fresh coriander leaves and serve hot with roti or rice.",
    ],
    imageUrl: "https://dinedelicious.in/wp-content/uploads/2020/09/Lauki-ki-Sabzi-6-500x500.jpg"
  },
  {
    name: "Tindora Fry",
    ingredients: ['TINDORA', 'ONION', 'CUMIN', 'TURMERIC', 'RED CHILI POWDER', 'SALT', 'OIL'],
    preparationTime: "20 minutes",
    cookingTime: "25 minutes",
    dishType: "Vegetable Dish",
    cuisine: "Indian",
    steps: [
      "1. Wash and slice 200g tindora (ivy gourd) into thin rounds. 2. In a pan, heat 2 tbsp oil and add 1 tsp cumin seeds. Let them splutter. 3. Add 1 chopped onion and saute until golden brown. 4. Add 1/2 tsp turmeric, 1 tsp red chili powder, and salt to taste. Stir and cook for 2 minutes.",
      "1. Add the sliced tindora to the pan, mix well, and cook on medium heat for 10-12 minutes, stirring occasionally. 2. Cook until the tindora turns golden and crispy. 3. Garnish with fresh coriander leaves and serve hot with roti or rice.",
    ],
    imageUrl: "https://www.whiskaffair.com/wp-content/uploads/2017/12/Tindora-Fry-2-3.jpg"
  },
  {
    name: "Cabbage Sabzi",
    ingredients: ['CABBAGE', 'ONION', 'TOMATO', 'GINGER', 'GARLIC', 'GREEN CHILIES', 'CUMIN', 'TURMERIC', 'RED CHILI POWDER', 'GARAM MASALA', 'SALT', 'OIL'],
    preparationTime: "25 minutes",
    cookingTime: "30 minutes",
    dishType: "Vegetable Dish",
    cuisine: "Indian",
    steps: [
      "1. Shred 1 small cabbage and set aside. 2. In a pan, heat 2 tbsp oil and add 1 tsp cumin seeds. Let them splutter. 3. Add 1 chopped onion and saute until golden brown. 4. Add 1 tsp ginger-garlic paste and saute for 1 minute. 5. Add 2 chopped tomatoes and cook until soft. 6. Add 1/2 tsp turmeric, 1 tsp red chili powder, and salt to taste. Stir and cook for 2 minutes.",
      "1. Add the shredded cabbage to the pan, mix well, and cook on medium heat for 10-15 minutes, stirring occasionally. 2. Add 1 tsp garam masala and cook for another 2 minutes. 3. Garnish with fresh coriander leaves and serve hot with roti or rice.",
    ],
    imageUrl: "https://cdn.tarladalal.com/members/9306/procstepimgs/step-18_cabbage-sabzi-18-201140.jpg"
  },
  {
    name: "Pumpkin Curry (Kaddu)",
    ingredients: ['PUMPKIN', 'ONION', 'TOMATO', 'GINGER', 'GARLIC', 'GREEN CHILIES', 'CUMIN', 'TURMERIC', 'RED CHILI POWDER', 'GARAM MASALA', 'SALT', 'WATER'],
    preparationTime: "25 minutes",
    cookingTime: "30 minutes",
    dishType: "Vegetable Dish",
    cuisine: "Indian",
    steps: [
      "1. Peel and chop 300g pumpkin into cubes. 2. In a pan, heat 2 tbsp oil and add 1 tsp cumin seeds. Let them splutter. 3. Add 1 chopped onion and saute until golden brown. 4. Add 1 tsp ginger-garlic paste and saute for 1 minute. 5. Add 2 chopped tomatoes and cook until soft. 6. Add 1/2 tsp turmeric, 1 tsp red chili powder, and salt to taste. Stir and cook for 2 minutes.",
      "1. Add the chopped pumpkin to the pan, mix well, and cook on medium heat for 10-15 minutes, stirring occasionally. 2. Add 1/2 cup of water and let it simmer until the pumpkin is tender. 3. Add 1 tsp garam masala and cook for another 2 minutes. 4. Garnish with fresh coriander leaves and serve hot with roti or rice.",
    ],
    imageUrl: "https://www.indianhealthyrecipes.com/wp-content/uploads/2022/10/pumpkin-curry-recipe.jpg"
  },
  {
    name: "Palak Paneer",
    ingredients: ['SPINACH', 'PANEER', 'ONION', 'TOMATO', 'GINGER', 'GARLIC', 'GREEN CHILIES', 'CUMIN', 'TURMERIC', 'RED CHILI POWDER', 'GARAM MASALA', 'SALT', 'WATER'],
    preparationTime: "20 minutes",
    cookingTime: "25 minutes",
    dishType: "Vegetable Dish",
    cuisine: "Indian",
    steps: [
      "1. Wash and blanch 2 cups of spinach (palak). Blend it into a smooth puree. 2. In a pan, heat 2 tbsp oil and add 1 tsp cumin seeds. Let them splutter. 3. Add 1 chopped onion and saute until golden brown. 4. Add 1 tsp ginger-garlic paste and saute for 1 minute. 5. Add 2 chopped tomatoes and cook until soft. 6. Add 1/2 tsp turmeric, 1 tsp red chili powder, and salt to taste. Stir and cook for 2 minutes.",
      "1. Add the spinach puree to the pan and cook for 5-7 minutes on medium heat. 2. Add 200g cubed paneer to the pan, mix gently, and cook for another 5 minutes. 3. Add 1 tsp garam masala and cook for another 2 minutes. 4. Garnish with fresh cream and serve hot with roti or rice.",
    ],
    imageUrl: "https://www.indianhealthyrecipes.com/wp-content/uploads/2020/06/palak-paneer-recipe-500x375.jpg"
  },
  {
    name: "Methi Malai Paneer",
    ingredients: ['FENUGREEK LEAVES', 'PANEER', 'ONION', 'TOMATO', 'GINGER', 'GARLIC', 'GREEN CHILIES', 'CUMIN', 'TURMERIC', 'RED CHILI POWDER', 'GARAM MASALA', 'SALT', 'CREAM'],
    preparationTime: "30 minutes",
    cookingTime: "35 minutes",
    dishType: "Vegetable Dish",
    cuisine: "Indian",
    steps: [
      "1. Wash and chop 1 cup of fresh fenugreek leaves (methi). 2. In a pan, heat 2 tbsp oil and add 1 tsp cumin seeds. Let them splutter. 3. Add 1 chopped onion and saute until golden brown. 4. Add 1 tsp ginger-garlic paste and saute for 1 minute. 5. Add 2 chopped tomatoes and cook until soft. 6. Add 1/2 tsp turmeric, 1 tsp red chili powder, and salt to taste. Stir and cook for 2 minutes.",
      "1. Add the chopped methi leaves to the pan and cook for 3-4 minutes. 2. Add 200g cubed paneer to the pan, mix gently, and cook for another 5 minutes. 3. Add 1/4 cup cream, 1 tsp garam masala, and cook for another 2 minutes. 4. Garnish with fresh coriander leaves and serve hot with roti or rice.",
    ],
    imageUrl: "https://www.whiskaffair.com/wp-content/uploads/2020/03/Methi-Malai-Paneer-2-3.jpg"
  },
  {
    name: "Kadai Paneer",
    ingredients: ['PANEER', 'BELL PEPPERS', 'ONION', 'TOMATO', 'GINGER', 'GARLIC', 'GREEN CHILIES', 'CUMIN', 'CORIANDER POWDER', 'CUMIN POWDER', 'RED CHILI POWDER', 'TURMERIC', 'GARAM MASALA', 'SALT', 'OIL'],
    preparationTime: "25 minutes",
    cookingTime: "30 minutes",
    dishType: "Vegetable Dish",
    cuisine: "Indian",
    steps: [
      "1. Cut 200g paneer into cubes and set aside. 2. In a pan, heat 2 tbsp oil and add 1 tsp cumin seeds. Let them splutter. 3. Add 1 chopped onion and saute until golden brown. 4. Add 1 tsp ginger-garlic paste and saute for 1 minute. 5. Add 2 chopped tomatoes and cook until soft. 6. Add 1 tsp coriander powder, 1 tsp cumin powder, 1/2 tsp turmeric, and 1 tsp red chili powder. Stir and cook for 2 minutes.",
      "1. Add the bell peppers (1 green, 1 red, and 1 yellow) chopped into cubes to the pan and cook for 3-4 minutes. 2. Add the paneer cubes to the pan and mix gently. 3. Add 1 tsp garam masala and salt to taste. Stir well and cook for another 5 minutes. 4. Garnish with fresh coriander leaves and serve hot with roti or rice.",
    ],
    imageUrl: "https://www.indianhealthyrecipes.com/wp-content/uploads/2022/04/kadai-paneer-recipe.jpg"
  },
  {
    name: "Shahi Paneer",
    ingredients: ['PANEER', 'ONION', 'TOMATO', 'GINGER', 'GARLIC', 'CASHEWS', 'ALMONDS', 'CREAM', 'GREEN CARDAMOM', 'CLOVES', 'CINNAMON', 'TURMERIC', 'RED CHILI POWDER', 'GARAM MASALA', 'SALT', 'OIL'],
    preparationTime: "30 minutes",
    cookingTime: "40 minutes",
    dishType: "Vegetable Dish",
    cuisine: "Indian",
    steps: [
      "1. Cut 200g paneer into cubes and set aside. 2. In a pan, heat 2 tbsp oil and add 1-2 green cardamoms, 2 cloves, and 1 small cinnamon stick. Let them splutter. 3. Add 1 chopped onion and saute until golden brown. 4. Add 1 tsp ginger-garlic paste and saute for 1 minute. 5. Add 2 chopped tomatoes and cook until soft. 6. Grind 10-12 cashews and 8-10 almonds into a smooth paste using water.",
      "1. Add the cashew-almond paste to the pan and cook for 5 minutes. 2. Add 1/2 tsp turmeric, 1 tsp red chili powder, and salt to taste. Stir and cook for 2 minutes. 3. Add 1/4 cup cream and mix well. 4. Add the paneer cubes to the gravy and cook for another 5-7 minutes. 5. Add 1 tsp garam masala, stir, and cook for 2 more minutes. 6. Garnish with fresh cream and serve hot with naan or rice.",
    ],
    imageUrl: "https://www.indianhealthyrecipes.com/wp-content/uploads/2021/08/shahi-paneer-recipe.jpg"
  },
  {
    name: "Malai Kofta",
    ingredients: ['PANEER', 'POTATO', 'ONION', 'TOMATO', 'GINGER', 'GARLIC', 'GREEN CHILIES', 'CASHEWS', 'CREAM', 'RAISINS', 'GARAM MASALA', 'RED CHILI POWDER', 'TURMERIC', 'CUMIN POWDER', 'SALT', 'OIL'],
    preparationTime: "35 minutes",
    cookingTime: "45 minutes",
    dishType: "Vegetable Dish",
    cuisine: "Indian",
    steps: [
      "1. Boil 2 medium-sized potatoes and mash them. 2. Grate 100g paneer and mix with the mashed potatoes. 3. Add 1 tbsp cornstarch, 1/2 tsp garam masala, salt to taste, and knead into a smooth dough. 4. Shape into small balls (koftas) and fry them in hot oil until golden brown. 5. In a pan, heat 2 tbsp oil and add 1 tsp cumin seeds. Let them splutter. 6. Add 1 chopped onion and saute until golden brown. 7. Add 1 tsp ginger-garlic paste and saute for 1 minute. 8. Add 2 chopped tomatoes and cook until soft. 9. Add 1/2 tsp turmeric, 1 tsp red chili powder, 1 tsp cumin powder, and salt to taste. Stir and cook for 2 minutes.",
      "1. Add 1/2 cup of water and cook for 5 minutes. 2. Add 1/4 cup cream and stir to make a smooth gravy. 3. Add the fried koftas to the gravy and cook for another 5 minutes. 4. Garnish with raisins and serve hot with naan or rice.",
    ],
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-9PHkX4-frjiFjDB1flXY9Dz7xSCGMui2cw&s"
  },
  {
    name: "Vegetable Kofta",
    ingredients: ['CARROT', 'PEAS', 'BEANS', 'POTATO', 'ONION', 'GINGER', 'GARLIC', 'GREEN CHILIES', 'CUMIN', 'CORIANDER POWDER', 'CUMIN POWDER', 'RED CHILI POWDER', 'GARAM MASALA', 'SALT', 'OIL'],
    preparationTime: "30 minutes",
    cookingTime: "40 minutes",
    dishType: "Vegetable Dish",
    cuisine: "Indian",
    steps: [
      "1. Grate 1 carrot, 1/2 cup beans, 1 potato, and 1/2 cup peas. 2. In a pan, heat 1 tbsp oil and saute 1 chopped onion, 1 tsp ginger-garlic paste, and 1 green chili until golden brown. 3. Add the grated vegetables to the pan and cook for 5-7 minutes. 4. Add 1 tsp coriander powder, 1 tsp cumin powder, 1/2 tsp red chili powder, and salt to taste. Stir well and cook for 2 more minutes. 5. Let the mixture cool down and shape into small balls (koftas).",
      "1. Deep fry the koftas in hot oil until golden brown. 2. In a pan, heat 2 tbsp oil and add 1 tsp cumin seeds. Let them splutter. 3. Add 1 chopped onion and sauté until golden brown. 4. Add 1 tsp ginger-garlic paste and sauté for 1 minute. 5. Add 2 chopped tomatoes and cook until soft. 6. Add 1/2 tsp turmeric, 1 tsp red chili powder, and salt to taste. Stir and cook for 2 minutes. 7. Add 1/2 cup water and let it simmer. 8. Add the fried koftas to the gravy and cook for 5 more minutes. 9. Garnish with fresh coriander leaves and serve hot with naan or rice.",
    ],
    imageUrl: "https://vegecravings.com/wp-content/uploads/2018/03/Veg-Kofta-Recipe-Step-By-Step-Instructions.jpg"
  },
  {
    name: "Dum Aloo (Kashmiri Style)",
    ingredients: ['BABY POTATO', 'ONION', 'TOMATO', 'GINGER', 'GARLIC', 'KASHMIRI RED CHILI POWDER', 'TURMERIC', 'GARAM MASALA', 'FENNEL SEEDS', 'YOGURT', 'SALT', 'OIL'],
    preparationTime: "30 minutes",
    cookingTime: "40 minutes",
    dishType: "Vegetable Dish",
    cuisine: "Indian",
    steps: [
      "1. Boil and peel 10-12 baby potatoes. 2. In a pan, heat 2 tbsp oil and add 1 tsp fennel seeds. Let them splutter. 3. Add 1 chopped onion and saute until golden brown. 4. Add 1 tsp ginger-garlic paste and saute for 1 minute. 5. Add 2 chopped tomatoes and cook until soft. 6. Add 1/2 tsp turmeric, 1 tsp Kashmiri red chili powder, and salt to taste. Stir and cook for 2 minutes.",
      "1. Add the boiled potatoes to the pan, stir well, and cook for 5 minutes. 2. Add 1/4 cup yogurt and cook for another 5 minutes. 3. Add 1 tsp garam masala and cook for 2 more minutes. 4. Garnish with fresh coriander leaves and serve hot with naan or rice.",
    ],
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7jNP4d2QxgG75_1PaQrRBhdlCtH7y4g_7Vw&s"
  },
  {
    name: "Dum Aloo (North Indian Style)",
    ingredients: ['POTATO', 'ONION', 'TOMATO', 'GINGER', 'GARLIC', 'GREEN CHILIES', 'TURMERIC', 'RED CHILI POWDER', 'GARAM MASALA', 'CUMIN POWDER', 'CORIANDER POWDER', 'SALT', 'OIL'],
    preparationTime: "25 minutes",
    cookingTime: "35 minutes",
    dishType: "Vegetable Dish",
    cuisine: "Indian",
    steps: [
      "1. Peel and chop 4 medium-sized potatoes into cubes. 2. In a pan, heat 2 tbsp oil and add 1 tsp cumin seeds. Let them splutter. 3. Add 1 chopped onion and saute until golden brown. 4. Add 1 tsp ginger-garlic paste and saute for 1 minute. 5. Add 2 chopped tomatoes and cook until soft. 6. Add 1/2 tsp turmeric, 1 tsp red chili powder, 1 tsp cumin powder, 1 tsp coriander powder, and salt to taste. Stir and cook for 2 minutes.",
      "1. Add the chopped potatoes to the pan, mix well, and cook on medium heat for 10-15 minutes, stirring occasionally. 2. Add 1/2 cup water, cover the pan, and cook for another 10 minutes. 3. Add 1 tsp garam masala and cook for another 2 minutes. 4. Garnish with fresh coriander leaves and serve hot with roti or rice.",
    ],
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7jNP4d2QxgG75_1PaQrRBhdlCtH7y4g_7Vw&s"
  },
  {
    name: "Mixed Vegetable Curry",
    ingredients: ['CARROT', 'BEANS', 'PEAS', 'POTATO', 'CAULIFLOWER', 'ONION', 'TOMATO', 'GINGER', 'GARLIC', 'GREEN CHILIES', 'CUMIN', 'TURMERIC', 'RED CHILI POWDER', 'GARAM MASALA', 'SALT', 'OIL'],
    preparationTime: "30 minutes",
    cookingTime: "35 minutes",
    dishType: "Vegetable Dish",
    cuisine: "Indian",
    steps: [
      "1. Chop mixed vegetables (carrot, beans, peas, potato, cauliflower) into small pieces. 2. In a pan, heat 2 tbsp oil and add 1 tsp cumin seeds. Let them splutter. 3. Add 1 chopped onion and saute until golden brown. 4. Add 1 tsp ginger-garlic paste and saute for 1 minute. 5. Add 2 chopped tomatoes and cook until soft. 6. Add 1/2 tsp turmeric, 1 tsp red chili powder, and salt to taste. Stir and cook for 2 minutes.",
      "1. Add the chopped mixed vegetables to the pan, mix well, and cook for 5-7 minutes. 2. Add 1/2 cup of water and let it simmer for 10-15 minutes until the vegetables are cooked. 3. Add 1 tsp",
    ],
    imageUrl: "https://shwetainthekitchen.com/wp-content/uploads/2023/03/mixed-vegetable-curry.jpg"
  },
  {
    name: "Gatte Ki Sabzi",
    ingredients: ['GRAM FLOUR', 'YOGURT', 'ONION', 'GINGER', 'GARLIC', 'GREEN CHILIES', 'CUMIN', 'CORIANDER POWDER', 'CUMIN POWDER', 'TURMERIC', 'RED CHILI POWDER', 'GARAM MASALA', 'SALT', 'OIL'],
    preparationTime: "40 minutes",
    cookingTime: "50 minutes",
    dishType: "Vegetable Dish",
    cuisine: "Indian",
    steps: [
      "1. In a bowl, mix 1 cup gram flour, 1/2 tsp turmeric, 1/2 tsp red chili powder, 1/2 tsp cumin powder, and salt. 2. Add water gradually to make a stiff dough. 3. Divide the dough into small portions and roll them into cylindrical shapes. 4. Boil these cylindrical pieces in water for 10-15 minutes until they float. Remove and slice them into small pieces. 5. In a pan, heat 2 tbsp oil, add 1 tsp cumin seeds, and let them splutter. 6. Add 1 chopped onion and saute until golden brown. 7. Add 1 tsp ginger-garlic paste and saute for 1 minute. 8. Add 2 chopped tomatoes and cook until soft.",
      "1. Add 1 tsp coriander powder, 1/2 tsp cumin powder, 1/2 tsp red chili powder, and salt. Stir and cook for 2 minutes. 2. Add 1/2 cup yogurt and cook for 3 minutes. 3. Add the gatte (boiled gram flour rolls) and cook for another 5 minutes. 4. Add 1 tsp garam masala and cook for 2 minutes. 5. Garnish with fresh coriander leaves and serve hot with roti or rice.",
    ],
    imageUrl: "https://www.vegrecipesofindia.com/wp-content/uploads/2018/05/gatte-ki-sabji-recipe-1-500x375.jpg"
  },
  {
    name: "Paneer Butter Masala",
    ingredients: ['PANEER', 'BUTTER', 'ONION', 'TOMATO', 'GINGER', 'GARLIC', 'CREAM', 'CASHEWS', 'RED CHILI POWDER', 'GARAM MASALA', 'SALT', 'OIL'],
    preparationTime: "25 minutes",
    cookingTime: "35 minutes",
    dishType: "Vegetable Dish",
    cuisine: "Indian",
    steps: [
      "1. Cut 200g paneer into cubes and set aside. 2. In a pan, heat 2 tbsp butter, add 1 chopped onion, and saute until golden brown. 3. Add 1 tsp ginger-garlic paste and saute for 1 minute. 4. Add 2 chopped tomatoes and cook until soft. 5. Grind 8-10 cashews into a smooth paste using a little water.",
      "1. Add the cashew paste to the pan and cook for 5 minutes. 2. Add 1/2 tsp red chili powder, 1/2 tsp turmeric, and salt to taste. Stir and cook for 2 minutes. 3. Add the paneer cubes and 1/4 cup cream. Stir gently and cook for 5 minutes. 4. Add 1 tsp garam masala, stir, and cook for 2 more minutes. 5. Garnish with fresh cream and serve hot with naan or rice.",
    ],
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpiCiOVd2z7Qhnu1FDY90QF7zkYcLfP1jgyA&s"
  },
  {
    name: "Matar Paneer",
    ingredients: ['PANEER', 'GREEN PEAS', 'ONION', 'TOMATO', 'GINGER', 'GARLIC', 'GREEN CHILIES', 'RED CHILI POWDER', 'TURMERIC', 'GARAM MASALA', 'CUMIN POWDER', 'SALT', 'OIL'],
    preparationTime: "25 minutes",
    cookingTime: "30 minutes",
    dishType: "Vegetable Dish",
    cuisine: "Indian",
    steps: [
      "1. Cut 200g paneer into cubes and set aside. 2. In a pan, heat 2 tbsp oil, add 1 tsp cumin seeds, and let them splutter. 3. Add 1 chopped onion and saute until golden brown. 4. Add 1 tsp ginger-garlic paste and saute for 1 minute. 5. Add 2 chopped tomatoes and cook until soft. 6. Add 1/2 tsp turmeric, 1 tsp red chili powder, 1/2 tsp cumin powder, and salt to taste. Stir and cook for 2 minutes.",
      "1. Add 1/2 cup of water and cook for 5 minutes. 2. Add the green peas (1/2 cup) and cook for 10 minutes. 3. Add the paneer cubes to the pan and stir gently. 4. Add 1 tsp garam masala, stir, and cook for 5 more minutes. 5. Garnish with fresh coriander leaves and serve hot with roti or rice.",
    ],
    imageUrl: "https://www.indianhealthyrecipes.com/wp-content/uploads/2021/03/matar-paneer.jpg"
  },
  {
    name: "Mushroom Masala",
    ingredients: ['MUSHROOMS', 'ONION', 'TOMATO', 'GINGER', 'GARLIC', 'GREEN CHILIES', 'CUMIN', 'TURMERIC', 'RED CHILI POWDER', 'GARAM MASALA', 'SALT', 'OIL'],
    preparationTime: "25 minutes",
    cookingTime: "30 minutes",
    dishType: "Vegetable Dish",
    cuisine: "Indian",
    steps: [
      "1. Clean and slice 200g mushrooms. 2. In a pan, heat 2 tbsp oil, add 1 tsp cumin seeds, and let them splutter. 3. Add 1 chopped onion and saute until golden brown. 4. Add 1 tsp ginger-garlic paste and saute for 1 minute. 5. Add 2 chopped tomatoes and cook until soft. 6. Add 1/2 tsp turmeric, 1 tsp red chili powder, and salt to taste. Stir and cook for 2 minutes.",
      "1. Add the sliced mushrooms and cook for 10 minutes. 2. Add 1 tsp garam masala, stir, and cook for 2 more minutes. 3. Garnish with fresh coriander leaves and serve hot with roti or rice.",
    ],
    imageUrl: "https://shwetainthekitchen.com/wp-content/uploads/2023/03/mutter-mushroom.jpg"
  },
  {
    name: "Corn Palak",
    ingredients: ['CORN', 'SPINACH', 'ONION', 'TOMATO', 'GINGER', 'GARLIC', 'GREEN CHILIES', 'RED CHILI POWDER', 'GARAM MASALA', 'CUMIN POWDER', 'SALT', 'OIL'],
    preparationTime: "30 minutes",
    cookingTime: "35 minutes",
    dishType: "Vegetable Dish",
    cuisine: "Indian",
    steps: [
      "1. Boil 1 cup of corn kernels and set aside. 2. In a pan, heat 2 tbsp oil, add 1 tsp cumin seeds, and let them splutter. 3. Add 1 chopped onion and saute until golden brown. 4. Add 1 tsp ginger-garlic paste and saute for 1 minute. 5. Add 2 chopped tomatoes and cook until soft. 6. Add 1/2 tsp red chili powder, 1/2 tsp cumin powder, and salt to taste. Stir and cook for 2 minutes.",
      "1. Add the boiled corn and cook for 5 minutes. 2. Add 2 cups spinach (palak) leaves and cook until the spinach wilts. 3. Add 1 tsp garam masala and stir well. 4. Cook for 5 more minutes, then garnish with fresh coriander leaves. 5. Serve hot with roti or rice.",
    ],
    imageUrl: "https://www.vegrecipesofindia.com/wp-content/uploads/2021/07/palak-corn-3.jpg"
  },
  {
    name: "Capsicum Masala",
    ingredients: ['BELL PEPPERS', 'ONION', 'TOMATO', 'GINGER', 'GARLIC', 'GREEN CHILIES', 'CUMIN', 'RED CHILI POWDER', 'TURMERIC', 'GARAM MASALA', 'SALT', 'OIL'],
    preparationTime: "20 minutes",
    cookingTime: "25 minutes",
    dishType: "Vegetable Dish",
    cuisine: "Indian",
    steps: [
      "1. Chop 2-3 capsicums (bell peppers) into pieces. 2. In a pan, heat 2 tbsp oil, add 1 tsp cumin seeds, and let them splutter. 3. Add 1 chopped onion and saute until golden brown. 4. Add 1 tsp ginger-garlic paste and saute for 1 minute. 5. Add 2 chopped tomatoes and cook until soft. 6. Add 1/2 tsp turmeric, 1 tsp red chili powder, and salt to taste. Stir and cook for 2 minutes.",
      "1. Add the chopped capsicum pieces to the pan, stir well, and cook for 5-7 minutes. 2. Add 1 tsp garam masala and cook for 2 more minutes. 3. Garnish with fresh coriander leaves and serve hot with roti or rice.",
    ],
    imageUrl: "https://cdn2.foodviva.com/static-content/food-images/curry-recipes/capsicum-masala-curry/capsicum-masala-curry.jpg"
  },
  {
    name: "Drumstick Curry",
    ingredients: ['DRUMSTICK', 'ONION', 'TOMATO', 'GINGER', 'GARLIC', 'GREEN CHILIES', 'RED CHILI POWDER', 'TURMERIC', 'GARAM MASALA', 'SALT', 'OIL'],
    preparationTime: "30 minutes",
    cookingTime: "40 minutes",
    dishType: "Vegetable Dish",
    cuisine: "Indian",
    steps: [
      "1. Peel and chop 4-5 drumsticks into 2-inch pieces. 2. In a pan, heat 2 tbsp oil, add 1 tsp cumin seeds, and let them splutter. 3. Add 1 chopped onion and saute until golden brown. 4. Add 1 tsp ginger-garlic paste and saute for 1 minute. 5. Add 2 chopped tomatoes and cook until soft. 6. Add 1/2 tsp turmeric, 1 tsp red chili powder, and salt to taste. Stir and cook for 2 minutes.",
      "1. Add the drumstick pieces and cook for 10 minutes. 2. Add 1/2 cup water and simmer for 15 minutes. 3. Add 1 tsp garam masala and cook for another 5 minutes. 4. Garnish with fresh coriander leaves and serve hot with roti or rice.",
    ],
    imageUrl: "https://www.indianhealthyrecipes.com/wp-content/uploads/2019/12/drumstick-curry-recipe.jpg"
  },
  {
    name: "Butter Chicken",
    ingredients: ['CHICKEN', 'BUTTER', 'CREAM', 'ONION', 'TOMATO', 'GINGER', 'GARLIC', 'CASHEWS', 'RED CHILI POWDER', 'TURMERIC', 'GARAM MASALA', 'SALT', 'OIL'],
    preparationTime: "30 minutes",
    cookingTime: "45 minutes",
    dishType: "Chicken Dish",
    cuisine: "Indian",
    steps: [
      "1. Cut 500g chicken into cubes. 2. In a bowl, mix 1 tbsp red chili powder, 1/2 tsp turmeric, 1 tsp garam masala, and salt. Marinate the chicken with this mixture for 30 minutes. 3. In a pan, heat 2 tbsp oil, add 1 chopped onion, and saute until golden brown. 4. Add 1 tsp ginger-garlic paste and saute for 1 minute. 5. Add 2 chopped tomatoes and cook until soft.",
      "1. Grind 8-10 cashews into a smooth paste. 2. Add the cashew paste to the pan, cook for 3 minutes. 3. Add 1/2 tsp red chili powder, 1/2 tsp garam masala, and salt to taste. Stir and cook for 2 minutes. 4. Add the marinated chicken and cook for 10 minutes. 5. Add 1/2 cup cream and cook for 5 minutes. 6. Garnish with fresh coriander leaves and serve hot with naan or rice.",
    ],
    imageUrl: "https://www.indianhealthyrecipes.com/wp-content/uploads/2022/07/chicken-butter-masala-recipe.jpg"
  },
  {
    name: "Chicken Tikka Masala",
    ingredients: ['CHICKEN', 'YOGURT', 'ONION', 'TOMATO', 'GINGER', 'GARLIC', 'GREEN CHILIES', 'RED CHILI POWDER', 'TURMERIC', 'GARAM MASALA', 'CORIANDER POWDER', 'SALT', 'OIL'],
    preparationTime: "35 minutes",
    cookingTime: "50 minutes",
    dishType: "Chicken Dish",
    cuisine: "Indian",
    steps: [
      "1. Marinate 500g chicken with 1/2 cup yogurt, 1 tsp red chili powder, 1/2 tsp turmeric, 1 tsp garam masala, and salt. Rest for 30 minutes. 2. In a pan, heat 2 tbsp oil, add 1 chopped onion, and saute until golden brown. 3. Add 1 tsp ginger-garlic paste and saute for 1 minute. 4. Add 2 chopped tomatoes and cook until soft.",
      "1. Add 1 tsp coriander powder, 1/2 tsp red chili powder, 1/2 tsp garam masala, and salt. Stir and cook for 2 minutes. 2. Add the marinated chicken and cook for 15 minutes. 3. Add 1/2 cup cream and cook for another 5 minutes. 4. Garnish with fresh coriander leaves and serve hot with naan or rice.",
    ],
    imageUrl: "https://www.indianhealthyrecipes.com/wp-content/uploads/2022/06/chicken-tikka-masala.jpg"
  },
  {
    name: "Chicken Curry",
    ingredients: ['CHICKEN', 'ONION', 'TOMATO', 'GINGER', 'GARLIC', 'GREEN CHILIES', 'RED CHILI POWDER', 'TURMERIC', 'GARAM MASALA', 'CORIANDER POWDER', 'SALT', 'OIL'],
    preparationTime: "40 minutes",
    cookingTime: "60 minutes",
    dishType: "Chicken Dish",
    cuisine: "Indian",
    steps: [
      "1. Cut 500g chicken into pieces. 2. In a pan, heat 2 tbsp oil, add 1 chopped onion, and saute until golden brown. 3. Add 1 tsp ginger-garlic paste and saute for 1 minute. 4. Add 2 chopped tomatoes and cook until soft.",
      "1. Add 1 tsp coriander powder, 1/2 tsp red chili powder, 1/2 tsp turmeric, and salt to taste. Stir and cook for 2 minutes. 2. Add the chicken pieces and cook for 10 minutes. 3. Add 1/2 cup water and cook for 15 minutes. 4. Add 1 tsp garam masala and cook for 5 more minutes. 5. Garnish with fresh coriander leaves and serve hot with roti or rice.",
    ],
    imageUrl: "https://www.whiskaffair.com/wp-content/uploads/2021/10/Andhra-Chicken-Curry-2-3.jpg"
  },
  {
    name: "Chicken Chettinad",
    ingredients: ['CHICKEN', 'ONION', 'TOMATO', 'GINGER', 'GARLIC', 'GREEN CHILIES', 'RED CHILI POWDER', 'TURMERIC', 'CHETTINAD MASALA', 'COCONUT', 'SALT', 'OIL'],
    preparationTime: "50 minutes",
    cookingTime: "70 minutes",
    dishType: "Chicken Dish",
    cuisine: "Indian",
    steps: [
      "1. Cut 500g chicken into pieces. 2. In a pan, heat 2 tbsp oil, add 1 chopped onion, and saute until golden brown. 3. Add 1 tsp ginger-garlic paste and saute for 1 minute. 4. Add 2 chopped tomatoes and cook until soft. 5. Add 2 tbsp Chettinad masala and cook for 2 minutes.",
      "1. Add the chicken pieces and cook for 10 minutes. 2. Add 1/4 cup grated coconut and cook for 5 more minutes. 3. Add 1/2 cup water and cook for 15 minutes. 4. Garnish with fresh coriander leaves and serve hot with rice or roti.",
    ],
    imageUrl: "https://www.whiskaffair.com/wp-content/uploads/2020/09/Chicken-Chettinad-Curry-2-3.jpg"
  },
  {
    name: "Kadai Chicken",
    ingredients: ['CHICKEN', 'ONION', 'TOMATO', 'GINGER', 'GARLIC', 'GREEN CHILIES', 'RED CHILI POWDER', 'TURMERIC', 'CORIANDER POWDER', 'CUMIN POWDER', 'GARAM MASALA', 'BELL PEPPERS', 'SALT', 'OIL'],
    preparationTime: "40 minutes",
    cookingTime: "50 minutes",
    dishType: "Chicken Dish",
    cuisine: "Indian",
    steps: [
      "1. Cut 500g chicken into pieces. 2. In a pan, heat 2 tbsp oil, add 1 chopped onion, and saute until golden brown. 3. Add 1 tsp ginger-garlic paste and saute for 1 minute. 4. Add 2 chopped tomatoes and cook until soft. 5. Add 1/2 tsp turmeric, 1 tsp red chili powder, 1/2 tsp coriander powder, and salt to taste. Stir and cook for 2 minutes.",
      "1. Add 1 sliced bell pepper and cook for 3 minutes. 2. Add the chicken pieces and cook for 10 minutes. 3. Add 1 tsp garam masala and cook for another 5 minutes. 4. Garnish with fresh coriander leaves and serve hot with naan or rice.",
    ],
    imageUrl: "https://www.whiskaffair.com/wp-content/uploads/2020/09/Kadai-Chicken-2-3.jpg"
  },
  {
    name: "Chicken Korma",
    ingredients: ['CHICKEN', 'ONION', 'TOMATO', 'GINGER', 'GARLIC', 'GREEN CHILIES', 'YOGURT', 'ALMONDS', 'CASHEWS', 'RED CHILI POWDER', 'TURMERIC', 'GARAM MASALA', 'SALT', 'OIL'],
    preparationTime: "45 minutes",
    cookingTime: "60 minutes",
    dishType: "Chicken Dish",
    cuisine: "Indian",
    steps: [
      "1. Cut 500g chicken into pieces. 2. In a pan, heat 2 tbsp oil, add 1 chopped onion, and saute until golden brown. 3. Add 1 tsp ginger-garlic paste and saute for 1 minute. 4. Add 2 chopped tomatoes and cook until soft. 5. Grind 8-10 almonds and 8-10 cashews into a smooth paste with a little water.",
      "1. Add the ground paste to the pan, cook for 3 minutes. 2. Add 1/2 tsp turmeric, 1 tsp red chili powder, and salt to taste. Stir and cook for 2 minutes. 3. Add the chicken pieces and cook for 15 minutes. 4. Add 1/2 cup yogurt and cook for another 5 minutes. 5. Garnish with fresh coriander leaves and serve hot with naan or rice.",
    ],
    imageUrl: "https://www.indianhealthyrecipes.com/wp-content/uploads/2022/08/chicken-korma-recipe.jpg"
  },
  {
    name: "Chicken 65",
    ingredients: ['CHICKEN', 'YOGURT', 'GINGER', 'GARLIC', 'GREEN CHILIES', 'RED CHILI POWDER', 'TURMERIC', 'CORN FLOUR', 'RICE FLOUR', 'SALT', 'OIL'],
    preparationTime: "25 minutes",
    cookingTime: "35 minutes",
    dishType: "Chicken Dish",
    cuisine: "Indian",
    steps: [
      "1. Cut 500g chicken into bite-sized pieces. 2. In a bowl, mix 1/2 cup yogurt, 1 tsp red chili powder, 1/2 tsp turmeric, 1 tsp ginger-garlic paste, and salt. Marinate the chicken for 30 minutes. 3. Add 2 tbsp corn flour and 2 tbsp rice flour to the marinated chicken. Mix well.",
      "1. In a pan, heat oil for deep frying. Fry the chicken pieces in batches until golden brown and crispy. 2. Remove the chicken from the oil and drain excess oil on a paper towel. 3. Garnish with fried curry leaves and green chilies. Serve hot as an appetizer or snack.",
    ],
    imageUrl: "https://www.indianhealthyrecipes.com/wp-content/uploads/2022/03/chicken-65-restaurant-style.jpg"
  },
  {
    name: "Egg Curry",
    ingredients: ['EGGS', 'ONION', 'TOMATO', 'GINGER', 'GARLIC', 'GREEN CHILIES', 'RED CHILI POWDER', 'TURMERIC', 'CORIANDER POWDER', 'GARAM MASALA', 'SALT', 'OIL'],
    preparationTime: "30 minutes",
    cookingTime: "40 minutes",
    dishType: "Egg Dish",
    cuisine: "Indian",
    steps: [
      "1. Boil 4 eggs, peel and set aside. 2. In a pan, heat 2 tbsp oil, add 1 chopped onion, and saute until golden brown. 3. Add 1 tsp ginger-garlic paste and saute for 1 minute. 4. Add 2 chopped tomatoes and cook until soft. 5. Add 1/2 tsp turmeric, 1 tsp red chili powder, 1/2 tsp coriander powder, and salt to taste. Stir and cook for 2 minutes.",
      "1. Add 1/2 cup water and cook for 5 minutes. 2. Add the boiled eggs and cook for 10 minutes. 3. Add 1 tsp garam masala and cook for 5 more minutes. 4. Garnish with fresh coriander leaves and serve hot with roti or rice.",
    ],
    imageUrl: "https://www.indianhealthyrecipes.com/wp-content/uploads/2022/04/egg-curry-recipe.jpg"
  },
  {
    name: "Egg Bhurji",
    ingredients: ['EGGS', 'ONION', 'TOMATO', 'GREEN CHILIES', 'GINGER', 'GARLIC', 'RED CHILI POWDER', 'TURMERIC', 'CORIANDER POWDER', 'GARAM MASALA', 'SALT', 'OIL'],
    preparationTime: "20 minutes",
    cookingTime: "30 minutes",
    dishType: "Egg Dish",
    cuisine: "Indian",
    steps: [
      "1. Heat 2 tbsp oil in a pan. Add 1 chopped onion and saute until golden brown. 2. Add 1 tsp ginger-garlic paste and saute for 1 minute. 3. Add 1 chopped tomato and cook until soft. 4. Add 1/2 tsp turmeric, 1 tsp red chili powder, 1/2 tsp coriander powder, and salt to taste. Stir for 2 minutes.",
      "1. Break 4 eggs into the pan and scramble them. 2. Cook for 5-7 minutes, stirring occasionally. 3. Add 1 tsp garam masala and cook for 2 more minutes. 4. Garnish with fresh coriander leaves and serve hot with roti or bread.",
    ],
    imageUrl: "https://spicecravings.com/wp-content/uploads/2023/03/Egg-Bhurji-Featured-1-500x500.jpg"
  },
  {
    name: "Mutton Curry",
    ingredients: ['MUTTON', 'ONION', 'TOMATO', 'GINGER', 'GARLIC', 'GREEN CHILIES', 'RED CHILI POWDER', 'TURMERIC', 'CORIANDER POWDER', 'GARAM MASALA', 'SALT', 'OIL'],
    preparationTime: "50 minutes",
    cookingTime: "70 minutes",
    dishType: "Mutton Dish",
    cuisine: "Indian",
    steps: [
      "1. Cut 500g mutton into pieces. 2. In a pressure cooker, heat 2 tbsp oil, add 1 chopped onion and saute until golden brown. 3. Add 1 tsp ginger-garlic paste and saute for 1 minute. 4. Add 2 chopped tomatoes and cook until soft. 5. Add 1/2 tsp turmeric, 1 tsp red chili powder, 1 tsp coriander powder, and salt to taste. Stir and cook for 2 minutes.",
      "1. Add the mutton pieces and cook for 10 minutes. 2. Add 1/2 cup water and pressure cook for 30 minutes or until the mutton is tender. 3. Open the cooker, add 1 tsp garam masala, and cook for 5 more minutes. 4. Garnish with fresh coriander leaves and serve hot with roti or rice.",
    ],
    imageUrl: "https://www.currytrail.in/wp-content/uploads/2017/06/Black-pepper-mutton-curry_2.jpg"
  },
  {
    name: "Mutton Rogan Josh",
    ingredients: ['MUTTON', 'ONION', 'TOMATO', 'GINGER', 'GARLIC', 'GREEN CHILIES', 'RED CHILI POWDER', 'TURMERIC', 'CINNAMON', 'CLOVES', 'CARDAMOM', 'YOGURT', 'SALT', 'OIL'],
    preparationTime: "60 minutes",
    cookingTime: "90 minutes",
    dishType: "Mutton Dish",
    cuisine: "Indian",
    steps: [
      "1. Cut 500g mutton into pieces. 2. In a pan, heat 2 tbsp oil, add 1 chopped onion, and saute until golden brown. 3. Add 1 tsp ginger-garlic paste and saute for 1 minute. 4. Add 2 chopped tomatoes and cook until soft. 5. Add 1/2 tsp turmeric, 1 tsp red chili powder, 2-3 cardamom, 2-3 cloves, and 1 cinnamon stick. Stir and cook for 2 minutes.",
      "1. Add the mutton pieces and cook for 10 minutes. 2. Add 1/2 cup yogurt and cook for another 15 minutes. 3. Add 1/2 cup water and cook for 30 minutes or until the mutton is tender. 4. Garnish with fresh coriander leaves and serve hot with naan or rice.",
    ],
    imageUrl: "https://static.toiimg.com/thumb/53192600.cms?width=1200&height=900"
  },
  {
    name: "Keema Matar",
    ingredients: ['MINCED MUTTON', 'ONION', 'TOMATO', 'GREEN CHILIES', 'GINGER', 'GARLIC', 'RED CHILI POWDER', 'TURMERIC', 'CORIANDER POWDER', 'GARAM MASALA', 'PEAS', 'SALT', 'OIL'],
    preparationTime: "40 minutes",
    cookingTime: "50 minutes",
    dishType: "Mutton Dish",
    cuisine: "Indian",
    steps: [
      "1. In a pan, heat 2 tbsp oil, add 1 chopped onion, and saute until golden brown. 2. Add 1 tsp ginger-garlic paste and saute for 1 minute. 3. Add 2 chopped tomatoes and cook until soft. 4. Add 1/2 tsp turmeric, 1 tsp red chili powder, 1 tsp coriander powder, and salt to taste. Stir and cook for 2 minutes.",
      "1. Add 500g minced mutton and cook for 10 minutes. 2. Add 1/2 cup peas and cook for 10 minutes. 3. Add 1 tsp garam masala and cook for another 5 minutes. 4. Garnish with fresh coriander leaves and serve hot with roti or rice.",
    ],
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8Nd6ltf3jggU7MDISL9-weMgvuNLz9NkA9Q&s"
  },
  {
    name: "Mutton Korma",
    ingredients: ['MUTTON', 'ONION', 'TOMATO', 'GINGER', 'GARLIC', 'GREEN CHILIES', 'YOGURT', 'ALMONDS', 'CASHEWS', 'RED CHILI POWDER', 'TURMERIC', 'GARAM MASALA', 'SALT', 'OIL'],
    preparationTime: "50 minutes",
    cookingTime: "70 minutes",
    dishType: "Mutton Dish",
    cuisine: "Indian",
    steps: [
      "1. Cut 500g mutton into pieces. 2. In a pan, heat 2 tbsp oil, add 1 chopped onion, and saute until golden brown. 3. Add 1 tsp ginger-garlic paste and saute for 1 minute. 4. Add 2 chopped tomatoes and cook until soft. 5. Grind 8-10 almonds and 8-10 cashews into a smooth paste with a little water.",
      "1. Add the ground paste to the pan, cook for 3 minutes. 2. Add 1/2 tsp turmeric, 1 tsp red chili powder, and salt to taste. Stir and cook for 2 minutes. 3. Add the mutton pieces and cook for 10 minutes. 4. Add 1/2 cup yogurt and cook for another 15 minutes or until the mutton is tender. 5. Garnish with fresh coriander leaves and serve hot with naan or rice.",
    ],
    imageUrl: "https://static.toiimg.com/thumb/52554168.cms?imgsize=572669&width=800&height=800"
  },
  {
    name: "Fish Curry (South Indian Style)",
    ingredients: ['FISH', 'ONION', 'TOMATO', 'GINGER', 'GARLIC', 'GREEN CHILIES', 'RED CHILI POWDER', 'TURMERIC', 'TAMARIND', 'COCONUT', 'MUSTARD SEEDS', 'SALT', 'OIL'],
    preparationTime: "45 minutes",
    cookingTime: "60 minutes",
    dishType: "Seafood Dish",
    cuisine: "Indian",
    steps: [
      "1. Cut 500g fish fillets into pieces. 2. In a pan, heat 2 tbsp oil, add 1 tsp mustard seeds and wait for them to splutter. 3. Add 1 chopped onion, saute until golden brown. 4. Add 1 tsp ginger-garlic paste and saute for 1 minute. 5. Add 2 chopped tomatoes and cook until soft.",
      "1. Add 1/2 tsp turmeric, 1 tsp red chili powder, and salt to taste. Stir and cook for 2 minutes. 2. Add 1/4 cup tamarind paste and 1/2 cup grated coconut. Cook for 5 minutes. 3. Add the fish pieces and cook for 10 minutes or until the fish is cooked through. 4. Garnish with fresh coriander leaves and serve hot with rice.",
    ],
    imageUrl: "https://www.licious.in/blog/wp-content/uploads/2022/03/shutterstock_1891229335-min.jpg"
  },
  {
    name: "Fish Curry (North Indian Style)",
    ingredients: ['FISH', 'ONION', 'TOMATO', 'GINGER', 'GARLIC', 'GREEN CHILIES', 'RED CHILI POWDER', 'TURMERIC', 'CORIANDER POWDER', 'GARAM MASALA', 'SALT', 'OIL'],
    preparationTime: "45 minutes",
    cookingTime: "60 minutes",
    dishType: "Seafood Dish",
    cuisine: "Indian",
    steps: [
      "1. Cut 500g fish fillets into pieces. 2. In a pan, heat 2 tbsp oil, add 1 chopped onion and saute until golden brown. 3. Add 1 tsp ginger-garlic paste and saute for 1 minute. 4. Add 2 chopped tomatoes and cook until soft. 5. Add 1/2 tsp turmeric, 1 tsp red chili powder, 1 tsp coriander powder, and salt to taste. Stir and cook for 2 minutes.",
      "1. Add the fish pieces and cook for 10 minutes. 2. Add 1/2 cup water and cook for 10 more minutes. 3. Add 1 tsp garam masala and cook for 5 more minutes. 4. Garnish with fresh coriander leaves and serve hot with rice.",
    ],
    imageUrl: "https://www.licious.in/blog/wp-content/uploads/2022/03/shutterstock_1891229335-min.jpg"
  },
  {
    name: "Prawn Masala",
    ingredients: ['PRAWNS', 'ONION', 'TOMATO', 'GINGER', 'GARLIC', 'GREEN CHILIES', 'RED CHILI POWDER', 'TURMERIC', 'CORIANDER POWDER', 'GARAM MASALA', 'SALT', 'OIL'],
    preparationTime: "35 minutes",
    cookingTime: "45 minutes",
    dishType: "Seafood Dish",
    cuisine: "Indian",
    steps: [
      "1. Clean and de-vein 500g prawns. 2. In a pan, heat 2 tbsp oil, add 1 chopped onion and saute until golden brown. 3. Add 1 tsp ginger-garlic paste and saute for 1 minute. 4. Add 2 chopped tomatoes and cook until soft. 5. Add 1/2 tsp turmeric, 1 tsp red chili powder, 1 tsp coriander powder, and salt to taste. Stir and cook for 2 minutes.",
      "1. Add the prawns and cook for 5-7 minutes. 2. Add 1 tsp garam masala and cook for 3 more minutes. 3. Garnish with fresh coriander leaves and serve hot with rice or roti.",
    ],
    imageUrl: "https://www.whiskaffair.com/wp-content/uploads/2023/02/Shrimp-Masala-2-3.jpg"
  },
  {
    name: "Goan Prawn Curry",
    ingredients: ['PRAWNS', 'ONION', 'TOMATO', 'GINGER', 'GARLIC', 'GREEN CHILIES', 'COCONUT MILK', 'RED CHILI POWDER', 'TURMERIC', 'CORIANDER POWDER', 'TAMARIND', 'SALT', 'OIL'],
    preparationTime: "45 minutes",
    cookingTime: "60 minutes",
    dishType: "Seafood Dish",
    cuisine: "Indian",
    steps: [
      "1. Clean and de-vein 500g prawns. 2. In a pan, heat 2 tbsp oil, add 1 chopped onion and saute until golden brown. 3. Add 1 tsp ginger-garlic paste and saute for 1 minute. 4. Add 2 chopped tomatoes and cook until soft. 5. Add 1/2 tsp turmeric, 1 tsp red chili powder, and salt to taste. Stir and cook for 2 minutes.",
      "1. Add 1/2 cup coconut milk and cook for 5 minutes. 2. Add the prawns and cook for 5-7 minutes or until they are cooked through. 3. Add 1 tbsp tamarind paste and cook for 2 more minutes. 4. Garnish with fresh coriander leaves and serve hot with rice.",
    ],
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhu8gkk0yx21Dr2nf5z8UKLJA8VklryBZpfg&s"
  },
  {
    name: "Samosa",
    ingredients: ['POTATO', 'PEAS', 'ONION', 'GREEN CHILIES', 'GINGER', 'GARLIC', 'GARAM MASALA', 'CUMIN', 'FENNEL SEEDS', 'RED CHILI POWDER', 'TURMERIC', 'CORIANDER POWDER', 'SALT', 'OIL', 'SAMOSA PASTRY SHEETS'],
    preparationTime: "45 minutes",
    cookingTime: "60 minutes",
    dishType: "Snack",
    cuisine: "Indian",
    steps: [
      "1. Boil 4-5 potatoes and mash them. 2. Heat 2 tbsp oil in a pan, add 1 tsp cumin seeds, 1 tsp fennel seeds, and let them splutter. 3. Add 1 chopped onion, 1 tsp ginger-garlic paste, and saute until golden brown. 4. Add 1/2 cup peas, 1/2 tsp turmeric, 1 tsp red chili powder, 1 tsp coriander powder, 1 tsp garam masala, and salt to taste. Cook for 5 minutes.",
      "1. Add the mashed potatoes to the mixture, stir well, and cook for 5 more minutes. 2. Let the filling cool. 3. Stuff the samosa pastry sheets with the filling and fold them into triangular shapes. 4. Deep fry the samosas in hot oil until golden brown. Serve hot with tamarind chutney or green chutney.",
    ],
    imageUrl: "https://www.indianhealthyrecipes.com/wp-content/uploads/2021/12/samosa-recipe.jpg"
  },
  {
    name: "Aloo Tikki",
    ingredients: ['POTATO', 'ONION', 'GREEN CHILIES', 'GINGER', 'GARAM MASALA', 'RED CHILI POWDER', 'TURMERIC', 'CORIANDER POWDER', 'SALT', 'OIL'],
    preparationTime: "30 minutes",
    cookingTime: "45 minutes",
    dishType: "Snack",
    cuisine: "Indian",
    steps: [
      "1. Boil 4-5 potatoes and mash them. 2. Heat 1 tbsp oil in a pan, add 1 chopped onion, and saute until golden brown. 3. Add 1 tsp ginger-garlic paste, 1-2 chopped green chilies, 1/2 tsp turmeric, 1 tsp red chili powder, 1 tsp garam masala, 1 tsp coriander powder, and salt to taste. Stir for 2 minutes.",
      "1. Add the mashed potatoes to the pan, stir and cook for 5 minutes. 2. Let the mixture cool, then shape it into round or flat tikkis. 3. Shallow fry the tikkis in oil until golden brown on both sides. Serve with green chutney and tamarind chutney.",
    ],
    imageUrl: "https://sinfullyspicy.com/wp-content/uploads/2023/03/1-1.jpg"
  },
  {
    name: "Kachori",
    ingredients: ['REFINED FLOUR', 'MOONG DAL', 'ONION', 'CUMIN', 'CORIANDER POWDER', 'RED CHILI POWDER', 'GARAM MASALA', 'FENNEL SEEDS', 'SALT', 'OIL'],
    preparationTime: "45 minutes",
    cookingTime: "60 minutes",
    dishType: "Snack",
    cuisine: "Indian",
    steps: [
      "1. Soak 1/2 cup lentils for 30 minutes. 2. Grind the lentils into a coarse paste. 3. Heat 2 tbsp oil in a pan, add 1 tsp cumin seeds, 1 tsp fennel seeds, and let them splutter. 4. Add 1 chopped onion, saute until golden brown. 5. Add 1/2 tsp red chili powder, 1 tsp coriander powder, 1 tsp garam masala, and salt to taste.",
      "1. Add the lentil paste to the pan, stir well and cook for 5 minutes. 2. Let the filling cool. 3. Roll the dough into small balls, stuff with the filling, and form into round shapes. 4. Deep fry the kachoris in hot oil until golden brown. Serve with green chutney or tamarind chutney.",
    ],
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqO0ieyO6huc4rGemgOq5lK5L-66kFU7BwPA&s"
  },
  {
    name: "Pani Puri",
    ingredients: ['PANI PURI SHELLS', 'POTATO', 'CHICKPEAS', 'TAMARIND CHUTNEY', 'MINT LEAVES', 'CORIANDER', 'GREEN CHILIES', 'GINGER', 'CUMIN POWDER', 'BLACK SALT', 'RED CHILI POWDER', 'SALT'],
    preparationTime: "30 minutes",
    cookingTime: "40 minutes",
    dishType: "Snack",
    cuisine: "Indian",
    steps: [
      "1. Boil 4-5 potatoes and mash them. 2. Boil 1/2 cup chickpeas and mash them. 3. Mix the mashed potatoes and chickpeas with 1 tsp cumin powder, 1/2 tsp black salt, and salt to taste. 4. Fill the puris with the mixture.",
      "1. For the water, blend a handful of mint leaves, coriander leaves, 1-2 green chilies, 1 tsp ginger, and tamarind chutney. Add 1/2 tsp cumin powder, 1/2 tsp red chili powder, and salt to taste. 2. Fill each puri with the flavored water and serve immediately.",
    ],
    imageUrl: "https://cdn1.foodviva.com/static-content/food-images/snacks-recipes/pani-puri/pani-puri.jpg"
  },
  {
    name: "Sev Puri",
    ingredients: ['PANI PURI SHELLS', 'POTATO', 'ONION', 'TOMATO', 'SEV', 'GREEN CHUTNEY', 'TAMARIND CHUTNEY', 'CHAAT MASALA', 'CORIANDER', 'SALT'],
    preparationTime: "30 minutes",
    cookingTime: "40 minutes",
    dishType: "Snack",
    cuisine: "Indian",
    steps: [
      "1. Boil 4-5 potatoes and mash them. 2. Finely chop 1 onion and 1 tomato. 3. Spread the puris on a plate and top with mashed potatoes, chopped onions, and tomatoes.",
      "1. Drizzle green chutney, tamarind chutney, and sprinkle sev, chaat masala, and salt. 2. Garnish with coriander leaves and serve immediately.",
    ],
    imageUrl: "https://www.spiceupthecurry.com/wp-content/uploads/2015/05/sev-puri-1.jpg"
  },
  {
    name: "Bhel Puri",
    ingredients: ['PUFFED RICE', 'SEV', 'ONION', 'TOMATO', 'CUCUMBER', 'POMEGRANATE', 'CORIANDER', 'TAMARIND CHUTNEY', 'GREEN CHUTNEY', 'CHAAT MASALA', 'SALT'],
    preparationTime: "30 minutes",
    cookingTime: "40 minutes",
    dishType: "Snack",
    cuisine: "Indian",
    steps: [
      "1. In a large bowl, mix 2 cups puffed rice, 1/2 cup sev, 1 chopped onion, 1 chopped tomato, and 1/2 chopped cucumber. 2. Add 1/4 cup pomegranate and chopped coriander leaves.",
      "1. Add 2 tbsp tamarind chutney, 2 tbsp green chutney, 1/2 tsp chaat masala, and salt to taste. Mix well and serve immediately.",
    ],
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Indian_cuisine-Chaat-Bhelpuri-03.jpg/1200px-Indian_cuisine-Chaat-Bhelpuri-03.jpg"
  },
  {
    name: "Ragda Pattice",
    ingredients: ['POTATO', 'WHITE PEAS', 'ONION', 'GINGER', 'GARLIC', 'GREEN CHILIES', 'TOMATO', 'CHAAT MASALA', 'RED CHILI POWDER', 'TURMERIC', 'TAMARIND CHUTNEY', 'GREEN CHUTNEY', 'SALT'],
    preparationTime: "45 minutes",
    cookingTime: "60 minutes",
    dishType: "Snack",
    cuisine: "Indian",
    steps: [
      "1. Soak 1/2 cup white peas overnight and boil them. 2. Boil 4-5 potatoes and mash them. 3. Heat 2 tbsp oil in a pan, add 1 chopped onion, 1 tsp ginger-garlic paste, and saute until golden brown. 4. Add 2 chopped tomatoes and cook until soft. 5. Add 1/2 tsp turmeric, 1 tsp red chili powder, and salt to taste.",
      "1. Add the boiled peas to the pan and cook for 10 minutes. 2. Shape the mashed potatoes into patties and shallow fry them. 3. Serve the patties topped with the ragda and chutneys. Garnish with chopped onions, coriander leaves, and sev.",
    ],
    imageUrl: "https://www.cookwithmanali.com/wp-content/uploads/2019/07/Ragda-Patties.jpg"
  },
  {
    name: "Pav Bhaji",
    ingredients: ['POTATO', 'TOMATO', 'ONION', 'GREEN CHILIES', 'GINGER', 'GARLIC', 'PAV BHAJI MASALA', 'RED CHILI POWDER', 'TURMERIC', 'CORIANDER POWDER', 'CUMIN POWDER', 'BUTTER', 'PAV', 'SALT'],
    preparationTime: "45 minutes",
    cookingTime: "60 minutes",
    dishType: "Snack",
    cuisine: "Indian",
    steps: [
      "1. Boil 4-5 potatoes and mash them. 2. Heat 2 tbsp butter in a pan, add 1 chopped onion, 1 tsp ginger-garlic paste, and saute until golden brown. 3. Add 2 chopped tomatoes, 1 chopped green chili, and cook until soft. 4. Add 1/2 tsp turmeric, 1 tsp red chili powder, 1 tsp coriander powder, and salt to taste. Stir for 2 minutes.",
      "1. Add the mashed potatoes and mix well. 2. Add 1 tsp pav bhaji masala and 1/2 cup water. Let it cook for 10 minutes. 3. Toast the pavs with butter and serve with the bhaji, topped with chopped onions and coriander.",
    ],
    imageUrl: "https://www.cookwithmanali.com/wp-content/uploads/2018/05/Best-Pav-Bhaji-Recipe.jpg"
  },
  {
    name: "Vada Pav",
    ingredients: ['POTATO', 'ONION', 'GREEN CHILIES', 'GINGER', 'GARLIC', 'RED CHILI POWDER', 'TURMERIC', 'CORIANDER POWDER', 'PAV', 'CHUTNEY', 'SALT', 'OIL'],
    preparationTime: "30 minutes",
    cookingTime: "45 minutes",
    dishType: "Snack",
    cuisine: "Indian",
    steps: [
      "1. Boil 4-5 potatoes and mash them. 2. Heat 1 tbsp oil in a pan, add 1 chopped onion, and saute until golden brown. 3. Add 1 tsp ginger-garlic paste, 1-2 chopped green chilies, 1/2 tsp turmeric, 1 tsp red chili powder, 1 tsp coriander powder, and salt to taste. Stir well.",
      "1. Add the mashed potatoes to the mixture, stir and cook for 5 minutes. 2. Let the mixture cool and shape it into round balls. 3. Dip the balls in a batter made of flour and deep fry them. 4. Serve the vada inside pav with chutneys.",
    ],
    imageUrl: "https://ministryofcurry.com/wp-content/uploads/2024/06/vada-pav-3.jpg"
  },
  {
    name: "Onion Pakora",
    ingredients: ['ONION', 'GRAM FLOUR', 'RICE FLOUR', 'RED CHILI POWDER', 'CUMIN', 'CORIANDER', 'SALT', 'OIL'],
    preparationTime: "30 minutes",
    cookingTime: "40 minutes",
    dishType: "Snack",
    cuisine: "Indian",
    steps: [
      "1. Slice 2 onions thinly and place them in a bowl. 2. Add 1 cup besan, 1/4 cup rice flour, 1/2 tsp red chili powder, 1/2 tsp cumin seeds, and salt to taste. 3. Add chopped coriander leaves and mix well.",
      "1. Add water little by little to make a batter. 2. Heat oil in a pan and deep fry the batter in small portions until golden brown. Serve hot with chutney.",
    ],
    imageUrl: "https://www.whiskaffair.com/wp-content/uploads/2020/07/Onion-Pakoda-2-3.jpg"
  },
  {
    name: "Potato Pakora",
    ingredients: ['POTATO', 'GRAM FLOUR', 'RICE FLOUR', 'RED CHILI POWDER', 'CUMIN', 'TURMERIC', 'CORIANDER', 'SALT', 'OIL'],
    preparationTime: "30 minutes",
    cookingTime: "40 minutes",
    dishType: "Snack",
    cuisine: "Indian",
    steps: [
      "1. Boil 4-5 potatoes and mash them. 2. Add 1 cup besan, 1/4 cup rice flour, 1/2 tsp red chili powder, 1/2 tsp cumin seeds, 1/2 tsp turmeric, and salt to taste. 3. Add chopped coriander leaves and mix well.",
      "1. Shape the mixture into round or oval balls. 2. Heat oil in a pan and deep fry the pakoras until golden brown. Serve with chutney.",
    ],
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUwE1IwSFvi4QssLhYHq9N_H65ggnGPBKVWg&s"
  },
  {
    name: "Bread Pakora",
    ingredients: ['BREAD', 'POTATO', 'ONION', 'GREEN CHILIES', 'GINGER', 'GARLIC', 'RED CHILI POWDER', 'TURMERIC', 'CORIANDER POWDER', 'SALT', 'GRAM FLOUR', 'OIL'],
    preparationTime: "30 minutes",
    cookingTime: "40 minutes",
    dishType: "Snack",
    cuisine: "Indian",
    steps: [
      "1. Boil 4-5 potatoes and mash them. 2. Heat 1 tbsp oil in a pan, add 1 chopped onion, and saute until golden brown. 3. Add 1 tsp ginger-garlic paste, 1-2 chopped green chilies, 1/2 tsp red chili powder, 1/2 tsp turmeric, 1 tsp coriander powder, and salt to taste. Stir well.",
      "1. Stuff the bread slices with the mashed potato mixture. 2. Dip the stuffed bread in a besan batter and deep fry until golden brown. Serve hot with chutney.",
    ],
    imageUrl: "https://static.toiimg.com/photo/84629641.cms"
  },
  {
    name: "Paneer Pakora",
    ingredients: ['PANEER', 'GRAM FLOUR', 'RICE FLOUR', 'RED CHILI POWDER', 'CUMIN', 'CORIANDER', 'SALT', 'OIL'],
    preparationTime: "30 minutes",
    cookingTime: "40 minutes",
    dishType: "Snack",
    cuisine: "Indian",
    steps: [
      "1. Cut 200g paneer into cubes. 2. In a bowl, mix 1 cup besan, 1/4 cup rice flour, 1/2 tsp red chili powder, 1/2 tsp cumin seeds, and salt to taste. 3. Add chopped coriander leaves and mix.",
      "1. Dip the paneer cubes in the batter and deep fry them in hot oil until golden brown. Serve with chutney.",
    ],
    imageUrl: "https://www.indianhealthyrecipes.com/wp-content/uploads/2016/06/paneer-pakoda.jpg"
  },
  {
    name: "Spinach Pakora",
    ingredients: ['SPINACH', 'GRAM FLOUR', 'RICE FLOUR', 'RED CHILI POWDER', 'CUMIN', 'TURMERIC', 'SALT', 'OIL'],
    preparationTime: "30 minutes",
    cookingTime: "40 minutes",
    dishType: "Snack",
    cuisine: "Indian",
    steps: [
      "1. Wash and chop a bunch of spinach leaves. 2. In a bowl, add 1 cup besan, 1/4 cup rice flour, 1/2 tsp red chili powder, 1/2 tsp cumin seeds, 1/2 tsp turmeric, and salt to taste. 3. Add the chopped spinach leaves and mix well.",
      "1. Add water little by little to make a batter. 2. Heat oil in a pan and deep fry spoonfuls of the batter until golden brown. Serve hot with chutney.",
    ],
    imageUrl: "https://www.indianhealthyrecipes.com/wp-content/uploads/2021/01/palak-pakoda-spinach-pakora.jpg"
  },
  {
    name: "Dahi Puri",
    ingredients: ['PANI PURI SHELLS', 'POTATO', 'YOGURT', 'TAMARIND CHUTNEY', 'GREEN CHUTNEY', 'CHAAT MASALA', 'RED CHILI POWDER', 'CORIANDER', 'SALT'],
    preparationTime: "30 minutes",
    cookingTime: "40 minutes",
    dishType: "Snack",
    cuisine: "Indian",
    steps: [
      "1. Boil 4-5 potatoes and mash them. 2. Fill the puris with mashed potatoes and arrange them on a plate.",
      "1. Drizzle yogurt, tamarind chutney, and green chutney on the puris. 2. Sprinkle chaat masala, red chili powder, and salt. Garnish with coriander leaves and serve immediately.",
    ],
    imageUrl: "https://ministryofcurry.com/wp-content/uploads/2022/07/Dahi-Puri_-3.jpg"
  },
  {
    name: "Dahi Bhalla",
    ingredients: ['URAD DAL', 'YOGURT', 'TAMARIND CHUTNEY', 'GREEN CHUTNEY', 'CHAAT MASALA', 'RED CHILI POWDER', 'SALT'],
    preparationTime: "45 minutes",
    cookingTime: "60 minutes",
    dishType: "Snack",
    cuisine: "Indian",
    steps: [
      "1. Soak 1 cup urad dal overnight. 2. Grind the soaked dal into a smooth batter. 3. Heat oil in a pan, shape the batter into small balls, and deep fry them.",
      "1. Soak the fried balls in water for 10 minutes. 2. Squeeze out excess water and arrange them on a plate. 3. Drizzle yogurt, tamarind chutney, green chutney, and sprinkle chaat masala, red chili powder, and salt. Serve immediately.",
    ],
    imageUrl: "https://i0.wp.com/binjalsvegkitchen.com/wp-content/uploads/2021/11/Dahi-Vada-H1.jpg?fit=600%2C900&ssl=1"
  },
  {
    name: "Aloo Chaat",
    ingredients: ['POTATO', 'TAMARIND CHUTNEY', 'GREEN CHUTNEY', 'CHAAT MASALA', 'RED CHILI POWDER', 'SALT', 'CORIANDER'],
    preparationTime: "30 minutes",
    cookingTime: "40 minutes",
    dishType: "Snack",
    cuisine: "Indian",
    steps: [
      "1. Boil 4-5 potatoes and cut them into small cubes. 2. In a bowl, mix the potato cubes with tamarind chutney, green chutney, chaat masala, red chili powder, and salt to taste.",
      "1. Garnish with coriander leaves and serve immediately.",
    ],
    imageUrl: "https://www.indianhealthyrecipes.com/wp-content/uploads/2021/07/aloo-chaat-recipe.jpg"
  },
  {
    name: "Chana Chaat",
    ingredients: ['CHICKPEAS', 'ONION', 'TOMATO', 'CUCUMBER', 'GREEN CHILIES', 'TAMARIND CHUTNEY', 'GREEN CHUTNEY', 'CHAAT MASALA', 'SALT'],
    preparationTime: "30 minutes",
    cookingTime: "40 minutes",
    dishType: "Snack",
    cuisine: "Indian",
    steps: [
      "1. Soak 1/2 cup chickpeas overnight and boil them. 2. Chop 1 onion, 1 tomato, and 1 cucumber. 3. Mix the boiled chickpeas with the chopped vegetables.",
      "1. Add tamarind chutney, green chutney, chaat masala, and salt to taste. Mix well and serve immediately.",
    ],
    imageUrl: "https://hemamagesh.com/wp-content/uploads/2022/05/Aloo-chana-chaat-featured-image.jpg"
  },
  {
    name: "Masala Corn",
    ingredients: ['CORN KERNELS', 'BUTTER', 'RED CHILI POWDER', 'CHAAT MASALA', 'LEMON', 'SALT'],
    preparationTime: "30 minutes",
    cookingTime: "40 minutes",
    dishType: "Snack",
    cuisine: "Indian",
    steps: [
      "1. Boil 2 cups corn kernels. 2. Heat 1 tbsp butter in a pan, add the boiled corn, and saute for 2-3 minutes.",
      "1. Sprinkle red chili powder, chaat masala, and salt to taste. Squeeze lemon juice over the corn and serve hot.",
    ],
    imageUrl: "https://www.vegrecipesofindia.com/wp-content/uploads/2016/08/masala-corn-recipe-2.jpg"
  },
  {
    name: "Veg Cutlet",
    ingredients: ['POTATO', 'CARROT', 'GREEN PEAS', 'CORN KERNELS', 'ONION', 'GREEN CHILIES', 'GINGER', 'CORIANDER POWDER', 'RED CHILI POWDER', 'TURMERIC', 'SALT', 'BREAD CRUMBS', 'OIL'],
    preparationTime: "45 minutes",
    cookingTime: "60 minutes",
    dishType: "Snack",
    cuisine: "Indian",
    steps: [
      "1. Boil 4-5 potatoes and mash them. 2. Boil 1/2 cup green peas and 1/2 cup corn kernels. 3. Grate 1 carrot and chop 1 onion and 1-2 green chilies. 4. Heat 2 tbsp oil in a pan, saute the onions, ginger, and chilies.",
      "1. Add the boiled potatoes, peas, corn, grated carrot, 1 tsp coriander powder, 1/2 tsp red chili powder, 1/2 tsp turmeric, and salt to taste. Mix well. 2. Shape the mixture into cutlets, coat with bread crumbs, and shallow fry in oil. Serve hot with chutney.",
    ],
    imageUrl: "https://www.indianhealthyrecipes.com/wp-content/uploads/2023/06/cutlet-recipe-veg-cutlet.jpg"
  },
  {
    name: "Bread Rolls",
    ingredients: ['BREAD', 'POTATO', 'ONION', 'GREEN CHILIES', 'GINGER', 'GARLIC', 'CORIANDER POWDER', 'RED CHILI POWDER', 'TURMERIC', 'SALT', 'OIL'],
    preparationTime: "30 minutes",
    cookingTime: "45 minutes",
    dishType: "Snack",
    cuisine: "Indian",
    steps: [
      "1. Boil 4-5 potatoes and mash them. 2. Heat 1 tbsp oil in a pan, add 1 chopped onion, and saute until golden brown. 3. Add 1 tsp ginger-garlic paste, 1-2 chopped green chilies, 1/2 tsp turmeric, 1 tsp coriander powder, 1/2 tsp red chili powder, and salt to taste. Stir well.",
      "1. Stuff the bread slices with the mashed potato mixture. 2. Roll the bread slices, dip them in batter, and deep fry until golden brown. Serve hot with chutney.",
    ],
    imageUrl: "https://www.indianhealthyrecipes.com/wp-content/uploads/2024/06/potato-bread-roll-recipe.jpg"
  },
  {
    name: "Hara Bhara Kebab",
    ingredients: ['SPINACH', 'PANEER', 'POTATO', 'PEAS', 'ONION', 'GREEN CHILIES', 'GINGER', 'GARLIC', 'CUMIN', 'CORIANDER POWDER', 'RED CHILI POWDER', 'GARAM MASALA', 'BREAD CRUMBS', 'SALT', 'OIL'],
    preparationTime: "45 minutes",
    cookingTime: "60 minutes",
    dishType: "Snack",
    cuisine: "Indian",
    steps: [
      "1. Boil 4-5 potatoes and mash them. 2. Blanch a bunch of spinach leaves and chop them finely. 3. Boil 1/2 cup green peas. 4. Grate 100g paneer and chop 1 onion and 1-2 green chilies.",
      "1. Heat 2 tbsp oil in a pan, sauté the onions and ginger-garlic paste. 2. Add the chopped spinach, peas, and mashed potatoes, and cook for 5 minutes. 3. Shape the mixture into kebabs, coat with bread crumbs, and shallow fry until golden brown. Serve with chutney.",
    ],
    imageUrl: "https://www.indianhealthyrecipes.com/wp-content/uploads/2021/05/hara-bhara-kabab.jpg"
  },
  {
    name: "Poha",
    ingredients: ['POHA', 'ONION', 'GREEN CHILIES', 'MUSTARD SEEDS', 'CURRY LEAVES', 'PEAS', 'POTATO', 'LEMON', 'SALT', 'TURMERIC', 'OIL'],
    preparationTime: "30 minutes",
    cookingTime: "40 minutes",
    dishType: "Breakfast",
    cuisine: "Indian",
    steps: [
      "1. Wash 2 cups poha under running water and set aside. 2. Heat 1 tbsp oil in a pan, add 1 tsp mustard seeds, curry leaves, and chopped green chilies. 3. Add 1 chopped onion and saute until translucent. 4. Add 1 diced potato and peas, and cook until soft.",
      "1. Add poha to the pan, sprinkle turmeric and salt, mix well, and cook for 2-3 minutes. 2. Squeeze lemon juice and serve hot with coriander leaves.",
    ],
    imageUrl: "https://www.indianhealthyrecipes.com/wp-content/uploads/2020/01/poha.jpg"
  },
  {
    name: "Upma",
    ingredients: ['SEMOLINA', 'ONION', 'GREEN CHILIES', 'MUSTARD SEEDS', 'CURRY LEAVES', 'PEAS', 'CARROT', 'SALT', 'OIL', 'WATER'],
    preparationTime: "30 minutes",
    cookingTime: "40 minutes",
    dishType: "Breakfast",
    cuisine: "Indian",
    steps: [
      "1. Heat 1 tbsp oil in a pan, add mustard seeds, curry leaves, and chopped green chilies. 2. Add 1 chopped onion, saute until soft. 3. Add 1/2 cup chopped carrot and 1/4 cup peas.",
      "1. Add 1 cup semolina (rava) and roast it for 2-3 minutes. 2. Boil 2 cups of water, add it to the semolina, and stir. 3. Cook for 3-4 minutes, then serve hot.",
    ],
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTY53aX95ngx4daNRLz5ykPUHXLCgUCB98Ltw&s"
  },
  {
    name: "Idli",
    ingredients: ['RICE', 'URAD DAL', 'SALT'],
    preparationTime: "180 minutes",
    cookingTime: "40 minutes",
    dishType: "Breakfast",
    cuisine: "Indian",
    steps: [
      "1. Soak 1 cup rice and 1/4 cup urad dal overnight. 2. Grind the rice and dal into a smooth batter. 3. Let the batter ferment for 12-24 hours.",
      "1. Grease idli molds and pour the batter into them. 2. Steam for 10-12 minutes, then serve hot with chutney and sambar.",
    ],
    imageUrl: "https://www.indianhealthyrecipes.com/wp-content/uploads/2022/04/idli-recipe-500x500.jpg"
  },
  {
    name: "Rava Idli",
    ingredients: ['SEMOLINA', 'YOGURT', 'MUSTARD SEEDS', 'GREEN CHILIES', 'CURRY LEAVES', 'CASHEWS', 'SALT', 'WATER', 'OIL'],
    preparationTime: "30 minutes",
    cookingTime: "40 minutes",
    dishType: "Breakfast",
    cuisine: "Indian",
    steps: [
      "1. Heat 1 tbsp oil in a pan, add mustard seeds, green chilies, curry leaves, and cashews. 2. Add 1 cup semolina (rava) and roast for 2-3 minutes.",
      "1. Add 1/2 cup yogurt, 1/4 cup water, and salt, and mix into a smooth batter. 2. Grease idli molds, pour the batter, and steam for 10-12 minutes. Serve hot with chutney.",
    ],
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRjdTC6J5ZX1BDDulpbUKZXfK8XHTygmgk0g&s"
  },
  {
    name: "Masala Dosa",
    ingredients: ['RICE', 'URAD DAL', 'POTATO', 'ONION', 'GREEN CHILIES', 'MUSTARD SEEDS', 'CURRY LEAVES', 'TAMARIND PASTE', 'SALT', 'OIL'],
    preparationTime: "120 minutes",
    cookingTime: "80 minutes",
    dishType: "Breakfast",
    cuisine: "Indian",
    steps: [
      "1. Soak 1 cup rice and 1/4 cup urad dal overnight. 2. Grind into a smooth batter, and let it ferment for 12-24 hours.",
      "1. Prepare a filling by sautéing boiled potatoes, onions, green chilies, mustard seeds, curry leaves, tamarind paste, and salt. 2. Make thin dosa from the batter, fill with the potato mixture, and serve hot.",
    ],
    imageUrl: "https://www.indianhealthyrecipes.com/wp-content/uploads/2021/06/masala-dosa-recipe.jpg"
  },
  {
    name: "Plain Dosa",
    ingredients: ['RICE', 'URAD DAL', 'SALT'],
    preparationTime: "120 minutes",
    cookingTime: "80 minutes",
    dishType: "Breakfast",
    cuisine: "Indian",
    steps: [
      "1. Soak 1 cup rice and 1/4 cup urad dal overnight. 2. Grind into a smooth batter, and let it ferment for 12-24 hours.",
      "1. Heat a griddle, pour a ladle of batter, and spread into a thin circle. 2. Cook until crispy and serve hot with chutney and sambar.",
    ],
    imageUrl: "https://www.awesomecuisine.com/wp-content/uploads/2009/06/Plain-Dosa.jpg"
  },
  {
    name: "Uttapam",
    ingredients: ['RICE', 'URAD DAL', 'ONION', 'TOMATO', 'GREEN CHILIES', 'CARROT', 'CURRY LEAVES', 'SALT', 'OIL'],
    preparationTime: "120 minutes",
    cookingTime: "80 minutes",
    dishType: "Breakfast",
    cuisine: "Indian",
    steps: [
      "1. Soak 1 cup rice and 1/4 cup urad dal overnight. 2. Grind into a smooth batter and let it ferment for 12-24 hours.",
      "1. Pour the batter onto a heated griddle and top with chopped onions, tomatoes, green chilies, and grated carrots. 2. Cook until crispy and serve hot with chutney.",
    ],
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPdlM2cZKdgNNeW_B_nnajSJRfEtsBzxGiuA&s"
  },
  {
    name: "Pesarattu",
    ingredients: ['GREEN GRAM', 'RICE', 'GINGER', 'GREEN CHILIES', 'ONION', 'SALT', 'OIL'],
    preparationTime: "120 minutes",
    cookingTime: "80 minutes",
    dishType: "Breakfast",
    cuisine: "Indian",
    steps: [
      "1. Soak 1 cup green gram overnight. 2. Grind it along with 1/4 cup rice, ginger, and green chilies into a smooth batter.",
      "1. Pour the batter onto a heated griddle, spread into a thin circle, and cook until golden brown. Serve hot with chutney.",
    ],
    imageUrl: "https://www.indianhealthyrecipes.com/wp-content/uploads/2014/11/pesarattu-recipe.jpg"
  },
  {
    name: "Thepla",
    ingredients: ['WHEAT FLOUR', 'FENUGREEK LEAVES', 'CUMIN', 'RED CHILI POWDER', 'TURMERIC', 'SALT', 'OIL'],
    preparationTime: "30 minutes",
    cookingTime: "40 minutes",
    dishType: "Breakfast",
    cuisine: "Indian",
    steps: [
      "1. In a bowl, mix 2 cups wheat flour, 1/2 cup chopped fenugreek leaves, 1 tsp cumin seeds, 1/2 tsp red chili powder, 1/2 tsp turmeric, and salt.",
      "1. Add water to make a smooth dough. 2. Roll into small balls, flatten, and cook on a griddle with oil until golden brown. Serve hot with yogurt or chutney.",
    ],
    imageUrl: "https://www.indianhealthyrecipes.com/wp-content/uploads/2018/08/thepla-recipe-500x500.jpg"
  },
  {
    name: "Akuri (Parsi-Style Scrambled Eggs)",
    ingredients: ['EGGS', 'ONION', 'GREEN CHILIES', 'TOMATO', 'GINGER', 'CORIANDER', 'TURMERIC', 'SALT', 'BUTTER'],
    preparationTime: "30 minutes",
    cookingTime: "40 minutes",
    dishType: "Breakfast",
    cuisine: "Indian",
    steps: [
      "1. Heat 1 tbsp butter in a pan, saute 1 chopped onion, 1 chopped green chili, and 1 tsp ginger. 2. Add 2 chopped tomatoes and cook until soft.",
      "1. Crack 2 eggs into the pan, stir continuously, and cook for 2-3 minutes. 2. Add turmeric, salt, and coriander leaves. Serve hot with bread or pav.",
    ],
    imageUrl: "https://www.whiskaffair.com/wp-content/uploads/2017/11/Akuri-2-3.jpg"
  },
  {
    name: "Moong Dal Cheela",
    ingredients: ['MOONG DAL', 'ONION', 'GREEN CHILIES', 'CUMIN', 'CORIANDER', 'SALT', 'OIL'],
    preparationTime: "30 minutes",
    cookingTime: "40 minutes",
    dishType: "Breakfast",
    cuisine: "Indian",
    steps: [
      "1. Soak 1 cup moong dal for 2-3 hours. 2. Grind the soaked dal into a smooth batter, adding chopped onions, green chilies, and salt.",
      "1. Heat a griddle, pour a ladle of batter, and spread into a thin circle. 2. Cook until golden brown, flipping if needed. Serve hot with chutney.",
    ],
    imageUrl: "https://www.indianhealthyrecipes.com/wp-content/uploads/2022/07/moong-dal-chilla.jpg"
  },
  {
    name: "Neer Dosa",
    ingredients: ['RICE', 'COCONUT', 'SALT', 'WATER'],
    preparationTime: "120 minutes",
    cookingTime: "80 minutes",
    dishType: "Breakfast",
    cuisine: "Indian",
    steps: [
      "1. Soak 1 cup rice for 4-5 hours. 2. Grind rice with 1/4 cup coconut into a smooth batter, adding salt.",
      "1. Pour the batter onto a heated griddle and spread into a thin layer. 2. Cook for 2-3 minutes, then serve hot with chutney or curry.",
    ],
    imageUrl: "https://www.indianhealthyrecipes.com/wp-content/uploads/2021/12/neer-dosa-recipe.jpg"
  },
  {
    name: "Chole Bhature",
    ingredients: ['CHICKPEAS', 'ONION', 'TOMATO', 'GREEN CHILIES', 'GINGER', 'GARLIC', 'TAMARIND', 'CHOLE MASALA', 'SALT', 'FLOUR', 'YOGURT', 'OIL'],
    preparationTime: "120 minutes",
    cookingTime: "80 minutes",
    dishType: "Lunch",
    cuisine: "Indian",
    steps: [
      "1. Soak 1 cup chickpeas overnight and boil. 2. Heat oil in a pan, saute onions, tomatoes, green chilies, ginger, and garlic.",
      "1. Add chole masala, tamarind paste, boiled chickpeas, and salt. Cook until thick. 2. For bhature, mix flour, yogurt, and salt, knead into dough, and deep fry. Serve with chutney.",
    ],
    imageUrl: "https://images.news18.com/ibnkhabar/uploads/2021/06/chole-bhature.jpg?im=FitAndFill,width=1200,height=900"
  },
  {
    name: "Aloo Poori",
    ingredients: ['WHEAT FLOUR', 'POTATO', 'ONION', 'GREEN CHILIES', 'CUMIN', 'CORIANDER POWDER', 'SALT', 'OIL'],
    preparationTime: "60 minutes",
    cookingTime: "90 minutes",
    dishType: "Lunch",
    cuisine: "Indian",
    steps: [
      "1. Boil 2-3 potatoes and mash them. 2. Heat oil in a pan, saute chopped onions, green chilies, cumin seeds, and coriander powder.",
      "1. Add mashed potatoes, salt, and cook for 5 minutes. 2. For poori dough, mix wheat flour and salt, knead into a smooth dough. 3. Roll out small balls and deep fry until golden brown. Serve hot with the potato mixture.",
    ],
    imageUrl: "https://www.vegrecipesofindia.com/wp-content/uploads/2012/05/aloo-poori-recipe03-1.jpg"
  },
  {
    name: "Gulab Jamun",
    ingredients: ['MILK POWDER', 'ALL PURPOSE FLOUR', 'BAKING SODA', 'GHEE', 'MILK', 'SUGAR', 'WATER', 'CARDAMOM', 'ROSE WATER'],
    preparationTime: "10 minutes",
    cookingTime: "15 minutes",
    dishType: "Dessert",
    cuisine: "Indian",
    steps: [
      "1. In a bowl, mix 1 cup milk powder, 1/4 cup all-purpose flour, and a pinch of baking soda. 2. Gradually add 1/4 cup milk and knead into a smooth dough. 3. Shape the dough into small balls.",
      "1. Heat ghee in a pan. Fry the balls on low heat until golden brown. 2. In another pan, prepare sugar syrup with 1 cup sugar, 1 cup water, cardamom, and rose water. 3. Soak the fried balls in the syrup for 1-2 hours before serving.",
    ],
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3aJrkMZfZWaRkqQu36Y9TBzYlCrkKHvy7mw&s"
  },
  {
    name: "Rasgulla",
    ingredients: ['FULL_FAT MILK', 'LEMON', 'SUGAR', 'WATER', 'CARDAMOM'],
    preparationTime: "10 minutes",
    cookingTime: "20 minutes",
    dishType: "Dessert",
    cuisine: "Indian",
    steps: [
      "1. Boil 1 liter of full-fat milk. 2. Add lemon juice to curdle the milk. 3. Strain the curds and wash the chhena with cold water. 4. Knead the chhena into a smooth dough.",
      "1. Roll the chhena into small balls. 2. Boil water with sugar and cardamom to prepare the syrup. 3. Add the balls to the syrup and cook for 10-15 minutes until they double in size. 4. Serve chilled.",
    ],
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSy8fgsUvkDA1DKvs_W5C1okrbaroFS_MLKZg&s"
  },
  {
    name: "Jalebi",
    ingredients: ['ALL PURPOSE FLOUR', 'CORNSTARCH', 'YOGURT', 'BAKING POWDER', 'SAFFRON', 'SUGAR', 'WATER', 'ROSE WATER', 'GHEE'],
    preparationTime: "15 minutes",
    cookingTime: "20 minutes",
    dishType: "Dessert",
    cuisine: "Indian",
    steps: [
      "1. Mix 1 cup flour, 1 tbsp cornstarch, a pinch of baking powder, and 1 tbsp yogurt with water to form a thick batter. 2. Let it rest for 15 minutes. 3. Prepare sugar syrup by boiling 1 cup sugar, 1/2 cup water, saffron, and rose water.",
      "1. Heat ghee in a pan. Fill the batter into a piping bag. 2. Squeeze the batter into spiral shapes and fry until crispy. 3. Dip the fried jalebis in the warm sugar syrup for 1-2 minutes and serve hot.",
    ],
    imageUrl: "https://i0.wp.com/binjalsvegkitchen.com/wp-content/uploads/2023/10/Instant-Jalebi-H3.jpg?resize=600%2C904&ssl=1"
  },
  {
    name: "Kheer (Rice Pudding)",
    ingredients: ['RICE', 'MILK', 'SUGAR', 'CARDAMOM', 'SAFFRON', 'ALMONDS', 'CASHEWS', 'RAISINS'],
    preparationTime: "10 minutes",
    cookingTime: "30 minutes",
    dishType: "Dessert",
    cuisine: "Indian",
    steps: [
      "1. Wash 1/2 cup rice and soak it for 10 minutes. 2. Boil 4 cups milk and add soaked rice. 3. Cook on low heat until rice is soft and milk thickens. 4. Add sugar, cardamom, and saffron.",
      "1. Stir occasionally and cook until the pudding reaches a creamy consistency. 2. Garnish with almonds, cashews, and raisins. 3. Serve chilled or warm.",
    ],
    imageUrl: "https://shivanilovesfood.com/wp-content/uploads/2024/01/Creamy-Kheer-4.jpg"
  },
  {
    name: "Gajar Ka Halwa",
    ingredients: ['CARROT', 'MILK', 'SUGAR', 'GHEE', 'CARDAMOM', 'ALMONDS', 'CASHEWS'],
    preparationTime: "10 minutes",
    cookingTime: "25 minutes",
    dishType: "Dessert",
    cuisine: "Indian",
    steps: [
      "1. Grate 3-4 carrots. 2. Heat 1 tbsp ghee in a pan, saute the grated carrots for 5-6 minutes. 3. Add 2 cups milk and cook until the milk is absorbed.",
      "1. Add sugar and cardamom powder. Stir and cook for 10-15 minutes until it thickens. 2. Garnish with almonds and cashews. 3. Serve warm.",
    ],
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Cuisine_%28268%29_44.jpg/640px-Cuisine_%28268%29_44.jpg"
  },
  {
    name: "Besan Ladoo",
    ingredients: ['GRAM FLOUR', 'GHEE', 'SUGAR', 'CARDAMOM', 'CASHEWS', 'RAISINS'],
    preparationTime: "10 minutes",
    cookingTime: "15 minutes",
    dishType: "Dessert",
    cuisine: "Indian",
    steps: [
      "1. Heat 1 cup ghee in a pan, add 1 cup gram flour, and roast on low heat for 10-12 minutes until golden brown and aromatic. 2. Add cardamom powder.",
      "1. Add sugar and mix well. 2. Once the mixture cools slightly, shape it into round balls. 3. Garnish with cashews and raisins. 4. Let it cool completely before serving.",
    ],
    imageUrl: "https://www.indianhealthyrecipes.com/wp-content/uploads/2021/09/besan-ladoo-recipe.jpg"
  },
  {
    name: "Modak",
    ingredients: ['RICE FLOUR', 'JAGGERY', 'COCONUT', 'GHEE', 'CARDAMOM', 'WATER'],
    preparationTime: "15 minutes",
    cookingTime: "20 minutes",
    dishType: "Dessert",
    cuisine: "Indian",
    steps: [
      "1. In a pan, heat 1/2 cup ghee, add 1/2 cup grated coconut, and 1/2 cup jaggery. Cook until the jaggery melts. 2. Add cardamom powder for flavor.",
      "1. Prepare a dough by mixing rice flour with warm water. 2. Shape the dough into small cups. 3. Stuff the coconut-jaggery mixture inside the dough, and shape it into a modak. 4. Steam the modaks for 10-12 minutes. 5. Serve hot.",
    ],
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLVlXSzEPd62-WfRGTqr6R4XMnHe4OR4HKzA&s"
  },
  {
    name: "Mysore Pak",
    ingredients: ['GRAM FLOUR', 'GHEE', 'SUGAR', 'WATER'],
    preparationTime: "10 minutes",
    cookingTime: "15 minutes",
    dishType: "Dessert",
    cuisine: "Indian",
    steps: [
      "1. In a pan, heat 1 cup ghee. 2. Add 1/2 cup gram flour and roast until golden brown.",
      "1. Add 1 cup sugar and 1/2 cup water to the pan and cook until the mixture thickens. 2. Once it reaches a fudge-like consistency, pour it into a greased tray and allow it to set. 3. Cut into pieces and serve.",
    ],
    imageUrl: "https://static.toiimg.com/thumb/53376135.cms?imgsize=204335&width=800&height=800"
  },
  {
    name: "Shrikhand",
    ingredients: ['YOGURT', 'SUGAR', 'CARDAMOM', 'SAFFRON', 'PISTACHIOS', 'ALMONDS'],
    preparationTime: "10 minutes",
    cookingTime: "5 minutes",
    dishType: "Dessert",
    cuisine: "Indian",
    steps: [
      "1. Strain 2 cups yogurt to remove excess water. 2. Add 1/2 cup sugar, cardamom powder, and saffron to the yogurt and mix well.",
      "1. Garnish with pistachios and almonds. 2. Serve chilled.",
    ],
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpZZ26zhK5iatF8QBxheK-TMim0JAb2hEwag&s"
  },
  {
    name: "Rabri",
    ingredients: ['FULL_FAT MILK', 'SUGAR', 'CARDAMOM', 'SAFFRON', 'ALMONDS', 'PISTACHIOS'],
    preparationTime: "15 minutes",
    cookingTime: "30 minutes",
    dishType: "Dessert",
    cuisine: "Indian",
    steps: [
      "1. Boil 1 liter of full-fat milk. 2. Reduce the milk by half on low heat, stirring frequently. 3. Add 1/2 cup sugar, cardamom, and saffron for flavor.",
      "1. Continue to simmer until the milk thickens. 2. Garnish with almonds and pistachios. 3. Serve warm or chilled.",
    ],
    imageUrl: "https://www.indianhealthyrecipes.com/wp-content/uploads/2020/10/rabri-rabdi.jpg"
  },
  {
    name: "Kulfi",
    ingredients: ['FULL_FAT MILK', 'SUGAR', 'CARDAMOM', 'ALMONDS', 'PISTACHIOS', 'SAFFRON'],
    preparationTime: "15 minutes",
    cookingTime: "10 minutes",
    dishType: "Dessert",
    cuisine: "Indian",
    steps: [
      "1. Boil 1 liter milk, and reduce it to 1/3rd of the original quantity. 2. Add sugar, cardamom, and saffron to the milk.",
      "1. Pour the mixture into kulfi molds and freeze for 6 hours or overnight. 2. Garnish with chopped almonds and pistachios before serving.",
    ],
    imageUrl: "https://www.sharmispassions.com/wp-content/uploads/2016/06/MalaiKulfi2.jpg"
  },
  {
    name: "Malpua",
    ingredients: ['ALL PURPOSE FLOUR', 'SUGAR', 'CARDAMOM', 'MILK', 'GHEE'],
    preparationTime: "10 minutes",
    cookingTime: "15 minutes",
    dishType: "Dessert",
    cuisine: "Indian",
    steps: [
      "1. Mix 1 cup all-purpose flour, 1/2 cup sugar, and cardamom powder. 2. Add milk to make a thick batter.",
      "1. Heat ghee in a pan. Pour spoonfuls of the batter into the ghee and fry until golden. 2. Serve with sugar syrup or honey.",
    ],
    imageUrl: "https://www.indianhealthyrecipes.com/wp-content/uploads/2021/12/malpua.jpg"
  },
  {
    name: "Coconut Barfi",
    ingredients: ['GRATED COCONUT', 'SUGAR', 'MILK', 'GHEE', 'CARDAMOM'],
    preparationTime: "10 minutes",
    cookingTime: "15 minutes",
    dishType: "Dessert",
    cuisine: "Indian",
    steps: [
      "1. In a pan, heat 1 cup grated coconut with 1/2 cup sugar. 2. Add 1/2 cup milk and cook until the mixture thickens.",
      "1. Grease a tray and pour the mixture into it. 2. Let it set for 30 minutes before cutting into pieces. 3. Garnish with cardamom and serve.",
    ],
    imageUrl: "https://www.indianhealthyrecipes.com/wp-content/uploads/2022/07/coconut-burfi-coconut-barfi.jpg"
  },
  {
    name: "Badam Halwa",
    ingredients: ['ALMONDS', 'GHEE', 'MILK', 'SUGAR', 'CARDAMOM'],
    preparationTime: "15 minutes",
    cookingTime: "20 minutes",
    dishType: "Dessert",
    cuisine: "Indian",
    steps: [
      "1. Soak 1/2 cup almonds in hot water for 10 minutes. 2. Peel the almonds and grind into a paste.",
      "1. Heat 1/2 cup ghee in a pan, add almond paste and cook until aromatic. 2. Add milk, sugar, and cardamom. Cook until it thickens. 3. Serve warm.",
    ],
    imageUrl: "https://shwetainthekitchen.com/wp-content/uploads/2022/10/Badam-Halwa.jpg"
  },
  {
    name: "Rasmalai",
    ingredients: ['MILK', 'SUGAR', 'CARDAMOM', 'SAFFRON', 'CHHENA', 'ROSE WATER'],
    preparationTime: "15 minutes",
    cookingTime: "20 minutes",
    dishType: "Dessert",
    cuisine: "Indian",
    steps: [
      "1. Prepare rasgullas using milk and lemon juice. 2. In another pan, boil milk with sugar and cardamom. Add saffron and rose water.",
      "1. Soak the rasgullas in the milk syrup. 2. Garnish with chopped pistachios and serve chilled.",
    ],
    imageUrl: "https://www.indianhealthyrecipes.com/wp-content/uploads/2013/10/rasmalai-recipe-1.jpg"
  },
  {
    name: "Masala Chai",
    ingredients: ['WATER', 'TEA LEAVES', 'MILK', 'SUGAR', 'GINGER', 'CARDAMOM', 'CLOVES', 'CINNAMON', 'FENNEL SEEDS'],
    preparationTime: "5 minutes",
    cookingTime: "10 minutes",
    dishType: "Drink",
    cuisine: "Indian",
    steps: [
      "1. Boil 1 cup water in a pot. 2. Add crushed ginger, cardamom, cloves, cinnamon, and fennel seeds. 3. Let the spices infuse for 2-3 minutes.",
      "1. Add 2 tsp tea leaves and boil for another 2 minutes. 2. Pour in 1 cup milk and sugar to taste. 3. Let the tea simmer for 2 minutes. 4. Strain and serve hot.",
    ],
    imageUrl: "https://foodandroad.com/wp-content/uploads/2021/04/masala-chai-indian-drink-3.jpg"
  },
  {
    name: "Filter Coffee",
    ingredients: ['COFFEE POWDER', 'WATER', 'MILK', 'SUGAR'],
    preparationTime: "5 minutes",
    cookingTime: "10 minutes",
    dishType: "Drink",
    cuisine: "South Indian",
    steps: [
      "1. Boil water and pour it into the coffee filter. 2. Add 1-2 tbsp coffee powder to the filter.",
      "1. Let the coffee drip through the filter for 5-7 minutes. 2. In a cup, add boiled milk and sugar to taste. 3. Pour the filtered coffee into the cup and stir. 4. Serve hot.",
    ],
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAnlcMD1wqeHYIRamyXE35xkYanY4fQfz21g&s"
  },
  {
    name: "Lassi (Sweet)",
    ingredients: ['YOGURT', 'WATER', 'SUGAR', 'ROSE WATER', 'ICE'],
    preparationTime: "5 minutes",
    cookingTime: "5 minutes",
    dishType: "Drink",
    cuisine: "Indian",
    steps: [
      "1. In a blender, combine 1 cup yogurt, 1/2 cup water, and 2 tbsp sugar. 2. Add 1 tsp rose water.",
      "1. Blend until smooth. 2. Add ice cubes and blend again. 3. Serve chilled with a garnish of rose petals or cardamom powder.",
    ],
    imageUrl: "https://www.indianveggiedelight.com/wp-content/uploads/2023/01/sweet-lassi-recipe-featured.jpg"
  },
  {
    name: "Lassi (Salted)",
    ingredients: ['YOGURT', 'WATER', 'SALT', 'ROASTED CUMIN POWDER', 'MINT LEAVES'],
    preparationTime: "5 minutes",
    cookingTime: "5 minutes",
    dishType: "Drink",
    cuisine: "Indian",
    steps: [
      "1. In a blender, combine 1 cup yogurt and 1/2 cup water. 2. Add 1/4 tsp salt and 1/2 tsp roasted cumin powder.",
      "1. Blend until smooth. 2. Garnish with mint leaves. 3. Serve chilled.",
    ],
    imageUrl: "https://cdn3.foodviva.com/static-content/food-images/north-indian-recipes/salted-lassi/salted-lassi.jpg"
  },
  {
    name: "Buttermilk",
    ingredients: ['YOGURT', 'WATER', 'SALT', 'ROASTED CUMIN POWDER', 'CORIANDER'],
    preparationTime: "5 minutes",
    cookingTime: "5 minutes",
    dishType: "Drink",
    cuisine: "Indian",
    steps: [
      "1. In a blender, mix 1 cup yogurt and 2 cups water. 2. Add salt and roasted cumin powder to taste.",
      "1. Blend until smooth. 2. Garnish with chopped coriander leaves. 3. Serve chilled.",
    ],
    imageUrl: "https://cdn3.foodviva.com/static-content/food-images/north-indian-recipes/salted-lassi/salted-lassi.jpg"
  },
  {
    name: "Aam Panna",
    ingredients: ['RAW MANGOES', 'SUGAR', 'SALT', 'BLACK SALT', 'CUMIN POWDER', 'MINT LEAVES'],
    preparationTime: "10 minutes",
    cookingTime: "15 minutes",
    dishType: "Drink",
    cuisine: "Indian",
    steps: [
      "1. Boil 2 raw mangoes until soft. 2. Peel the mangoes and extract the pulp. 3. Add sugar, salt, black salt, and cumin powder to taste.",
      "1. Blend the pulp with 1 cup water and mint leaves. 2. Serve chilled with ice cubes.",
    ],
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiR575KhfAQgjqy_ot9ZqspUvHIcpNL0D4Eg&s"
  },
  {
    name: "Nimbu Pani",
    ingredients: ['LEMON', 'WATER', 'SUGAR', 'SALT', 'CUMIN POWDER', 'MINT LEAVES'],
    preparationTime: "5 minutes",
    cookingTime: "5 minutes",
    dishType: "Drink",
    cuisine: "Indian",
    steps: [
      "1. Squeeze the juice of 2 lemons into a glass. 2. Add 1-2 tsp sugar, a pinch of salt, and cumin powder.",
      "1. Add 1 cup water and stir until the sugar dissolves. 2. Garnish with mint leaves and serve chilled.",
    ],
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-pqyA_On-5rgpumy9JLEHloNHxKSCORr4Dw&s"
  },
  {
    name: "Jaljeera",
    ingredients: ['CUMIN', 'CORIANDER POWDER', 'GINGER', 'LEMON', 'MINT LEAVES', 'BLACK SALT', 'SUGAR'],
    preparationTime: "5 minutes",
    cookingTime: "5 minutes",
    dishType: "Drink",
    cuisine: "Indian",
    steps: [
      "1. Roast 1 tsp cumin seeds and grind it into powder. 2. In a glass, add 1 tsp roasted cumin powder, 1/4 tsp coriander powder, ginger, black salt, and sugar.",
      "1. Add 1 tbsp lemon juice, mint leaves, and 1 cup water. 2. Stir well and serve chilled.",
    ],
    imageUrl: "https://spicecravings.com/wp-content/uploads/2021/07/Jaljeera-3.jpg"
  },
  {
    name: "Thandai",
    ingredients: ['ALMONDS', 'CASHEWS', 'PISTACHIOS', 'FENNEL SEEDS', 'PEPPERCORNS', 'CARDAMOM', 'SAFFRON', 'MILK', 'SUGAR'],
    preparationTime: "15 minutes",
    cookingTime: "15 minutes",
    dishType: "Drink",
    cuisine: "Indian",
    steps: [
      "1. Soak 10 almonds, 10 cashews, and 10 pistachios in water for 2-3 hours. 2. Grind them with fennel seeds, peppercorns, cardamom, and saffron to make a paste.",
      "1. Boil 1 cup milk and add the paste along with 1/4 cup sugar. 2. Let it cool and serve chilled.",
    ],
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSP7iAd2D0k3W9gUZ19TyVkgoiz4u8Ym7ofjQ&s"
  },
  {
    name: "Medu Vada",
    ingredients: ['URAD DAL', 'RICE', 'GINGER', 'GREEN CHILIES', 'CUMIN', 'CURRY LEAVES', 'SALT', 'OIL'],
    preparationTime: "10 minutes",
    cookingTime: "20 minutes",
    dishType: "Snack",
    cuisine: "South Indian",
    steps: [
      "1. Soak 1 cup urad dal and 1/4 cup rice for 4-5 hours. 2. Grind the dal and rice mixture into a smooth batter. 3. Add chopped ginger, green chilies, cumin seeds, curry leaves, and salt.",
      "1. Heat oil in a pan. Shape the batter into small donuts and fry until golden brown. 2. Serve with chutney.",
    ],
    imageUrl: "https://www.sharmispassions.com/wp-content/uploads/2011/01/MeduVadai3.jpg"
  },
  {
    name: "Dahi Vada",
    ingredients: ['URAD DAL', 'RICE', 'YOGURT', 'CUMIN POWDER', 'SALT', 'CORIANDER', 'TAMARIND CHUTNEY'],
    preparationTime: "10 minutes",
    cookingTime: "20 minutes",
    dishType: "Snack",
    cuisine: "Indian",
    steps: [
      "1. Soak 1 cup urad dal and 1/4 cup rice for 4-5 hours. 2. Grind the mixture into a smooth batter.",
      "1. Fry the batter into small vadas and soak them in warm water for 5 minutes. 2. Dip the vadas in yogurt and garnish with cumin powder, salt, and tamarind chutney. 3. Serve chilled.",
    ],
    imageUrl: "https://www.vegrecipesofindia.com/wp-content/uploads/2021/01/dahi-vada-recipe-1-500x500.jpg"
  },
  {
    name: "Ven Pongal",
    ingredients: ['RICE', 'MOONG DAL', 'GINGER', 'BLACK PEPPER', 'CUMIN', 'CASHEWS', 'GHEE', 'CURRY LEAVES'],
    preparationTime: "10 minutes",
    cookingTime: "20 minutes",
    dishType: "Main Course",
    cuisine: "South Indian",
    steps: [
      "1. Wash 1 cup rice and 1/4 cup moong dal. 2. In a pan, roast the dal for 3-4 minutes.",
      "1. Cook the rice and dal mixture in 3 cups of water. 2. In another pan, heat ghee, add cumin seeds, ginger, black pepper, and curry leaves. 3. Add the tempering to the cooked rice-dal mixture. 4. Serve hot.",
    ],
    imageUrl: "https://www.indianhealthyrecipes.com/wp-content/uploads/2021/01/pongal-ven-pongal-500x500.jpg"
  },
  {
    name: "Mysore Bonda",
    ingredients: ['URAD DAL', 'RICE', 'GINGER', 'GREEN CHILIES', 'CUMIN', 'CURRY LEAVES', 'OIL'],
    preparationTime: "10 minutes",
    cookingTime: "20 minutes",
    dishType: "Snack",
    cuisine: "South Indian",
    steps: [
      "1. Soak 1 cup urad dal and 1/4 cup rice for 4-5 hours. 2. Grind the mixture into a smooth batter. 3. Add chopped ginger, green chilies, cumin seeds, curry leaves, and salt.",
      "1. Heat oil in a pan. Shape the batter into small balls and fry until golden brown. 2. Serve with chutney.",
    ],
    imageUrl: "https://www.indianhealthyrecipes.com/wp-content/uploads/2016/04/mysore-bonda-1.jpg"
  },
  {
    name: "Pachadi (Yogurt-Based Side Dish)",
    ingredients: ['YOGURT', 'CUCUMBER', 'CARROT', 'GREEN CHILIES', 'MUSTARD SEEDS', 'CURRY LEAVES', 'SALT', 'OIL'],
    preparationTime: "5 minutes",
    cookingTime: "10 minutes",
    dishType: "Side Dish",
    cuisine: "South Indian",
    steps: [
      "1. Grate cucumber and carrot. 2. In a bowl, mix the grated vegetables with 1 cup yogurt.",
      "1. In a pan, heat oil, add mustard seeds and curry leaves. 2. Pour the tempering over the yogurt mixture and mix well. 3. Serve chilled.",
    ],
    imageUrl: "https://www.sharmispassions.com/wp-content/uploads/2022/08/cucumber-pachadi5.jpg"
  },
  {
    name: "Kuzhambu (Tamarind-Based Curry)",
    ingredients: ['TAMARIND', 'CARROT', 'PEAS', 'BEANS', 'POTATO', 'ONION', 'SAMBAR POWDER', 'TURMERIC', 'MUSTARD SEEDS', 'CURRY LEAVES', 'OIL'],
    preparationTime: "10 minutes",
    cookingTime: "20 minutes",
    dishType: "Main Course",
    cuisine: "South Indian",
    steps: [
      "1. Soak tamarind in water and extract the juice. 2. Cut vegetables like brinjal, okra, and drumsticks into pieces.",
      "1. Heat oil in a pan, add mustard seeds and curry leaves. 2. Add the vegetables and cook for 5 minutes. 3. Add tamarind juice, sambar powder, turmeric, and salt. 4. Cook for 10-15 minutes and serve hot.",
    ],
    imageUrl: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.archanaskitchen.com%2Forange-peel-kuzhambu-recipe-orange-peel-tamarind-based-curry&psig=AOvVaw1DKcMa5_MpuUhSk-PTrDFO&ust=1736441417271000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCKiH2srK5ooDFQAAAAAdAAAAABAE"
  },
  {
    name: "Pizza (Veg)",
    ingredients: ['PIZZA DOUGH', 'TOMATO SAUCE', 'CHEESE', 'BELL PEPPERS', 'OLIVES', 'MUSHROOMS', 'ONION', 'OREGANO', 'BASIL'],
    preparationTime: "20 minutes",
    cookingTime: "15 minutes",
    dishType: "Main Course",
    cuisine: "Italian",
    steps: [
      "1. Preheat the oven to 220�0.5C. 2. Roll out the pizza dough to your desired thickness. 3. Spread tomato sauce over the dough.",
      "1. Top with cheese, bell peppers, olives, mushrooms, onions, oregano, and basil. 2. Bake for 12-15 minutes until the crust is golden and the cheese is bubbly. 3. Serve hot.",
    ],
    imageUrl: "https://www.indianhealthyrecipes.com/wp-content/uploads/2015/10/pizza-recipe-1.jpg"
  },
  {
    name: "Pizza (Non-Veg)",
    ingredients: ['PIZZA DOUGH', 'TOMATO SAUCE', 'CHEESE', 'CHICKEN', 'SAUSAGE', 'BELL PEPPERS', 'OLIVES', 'ONION', 'OREGANO'],
    preparationTime: "20 minutes",
    cookingTime: "15 minutes",
    dishType: "Main Course",
    cuisine: "Italian",
    steps: [
      "1. Preheat the oven to 220�0.5C. 2. Roll out the pizza dough. 3. Spread tomato sauce over the dough.",
      "1. Top with cheese, cooked chicken, sausage, bell peppers, olives, onions, and oregano. 2. Bake for 12-15 minutes until the crust is golden and the cheese is bubbly. 3. Serve hot.",
    ],
    imageUrl: "https://www.indianhealthyrecipes.com/wp-content/uploads/2015/10/pizza-recipe-1.jpg"
  },
  {
    name: "Pasta (Arrabbiata)",
    ingredients: ['PASTA', 'TOMATO', 'GARLIC', 'OLIVE OIL', 'RED CHILI FLAKES', 'BASIL', 'PARMESAN'],
    preparationTime: "15 minutes",
    cookingTime: "15 minutes",
    dishType: "Main Course",
    cuisine: "Italian",
    steps: [
      "1. Cook pasta according to the package instructions. 2. Blanch tomatoes and peel off the skin.",
      "1. Heat olive oil, sauté garlic, and red chili flakes. 2. Add the tomatoes and cook for 5 minutes. 3. Add cooked pasta and toss. 4. Garnish with basil and parmesan, and serve.",
    ],
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2Bc9s7f1zQsryU1cCeSncAfJHtBd0Y7Xpbw&s"
  },
  {
    name: "Pasta (Alfredo)",
    ingredients: ['PASTA', 'BUTTER', 'GARLIC', 'CREAM', 'PARMESAN', 'SALT', 'PEPPER'],
    preparationTime: "15 minutes",
    cookingTime: "15 minutes",
    dishType: "Main Course",
    cuisine: "Italian",
    steps: [
      "1. Cook pasta according to the package instructions. 2. In a pan, melt butter and saute garlic.",
      "1. Add cream, parmesan, salt, and pepper. 2. Cook until the sauce thickens, then toss in the pasta. 3. Serve hot with extra parmesan.",
    ],
    imageUrl: "https://www.licious.in/blog/wp-content/uploads/2020/12/Penne-Alfredo.jpg"
  },
  {
    name: "Spaghetti",
    ingredients: ['SPAGHETTI', 'TOMATO', 'GARLIC', 'OLIVE OIL', 'BASIL', 'PARMESAN'],
    preparationTime: "15 minutes",
    cookingTime: "15 minutes",
    dishType: "Main Course",
    cuisine: "Italian",
    steps: [
      "1. Cook spaghetti according to the package instructions. 2. Blanch and peel the tomatoes.",
      "1. Heat olive oil, sauté garlic, and add chopped tomatoes. 2. Simmer for 5 minutes, then add the cooked spaghetti. 3. Toss and serve with basil and parmesan.",
    ],
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9Mv1sVQZt7cZD_kfSmODg8VBqVov12redkw&s"
  },
  {
    name: "Veg Burger",
    ingredients: ['BURGER BUNS', 'VEG PATTY', 'LETTUCE', 'TOMATO', 'ONION', 'CHEESE', 'KETCHUP', 'MUSTARD'],
    preparationTime: "10 minutes",
    cookingTime: "10 minutes",
    dishType: "Main Course",
    cuisine: "American",
    steps: [
      "1. Prepare a veg patty using mashed potatoes, vegetables, and spices. 2. Grill the patty until crispy.",
      "1. Toast the burger buns. 2. Assemble the burger with the patty, lettuce, tomato, onion, cheese, ketchup, and mustard. 3. Serve hot.",
    ],
    imageUrl: "https://www.vegrecipesofindia.com/wp-content/uploads/2020/12/burger-recipe-1.jpg"
  },
  {
    name: "Chicken Burger",
    ingredients: ['BURGER BUNS', 'CHICKEN PATTY', 'LETTUCE', 'TOMATO', 'ONION', 'CHEESE', 'KETCHUP', 'MAYONNAISE'],
    preparationTime: "10 minutes",
    cookingTime: "10 minutes",
    dishType: "Main Course",
    cuisine: "American",
    steps: [
      "1. Grill the chicken patty until cooked. 2. Toast the burger buns.",
      "1. Assemble the burger with the chicken patty, lettuce, tomato, onion, cheese, ketchup, and mayonnaise. 2. Serve hot.",
    ],
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnwgvxNWfja4mulSR6q39XisNPTYA_kDdOnQ&s"
  },
  {
    name: "Veg Momos",
    ingredients: ['MOMO WRAPPERS', 'CABBAGE', 'CARROT', 'ONION', 'GINGER', 'GARLIC', 'SOY SAUCE', 'SALT', 'OIL'],
    preparationTime: "10 minutes",
    cookingTime: "20 minutes",
    dishType: "Snack",
    cuisine: "Indian",
    steps: [
      "1. Finely chop cabbage, carrot, onion, and garlic. 2. Saute the vegetables in oil with ginger, garlic, and soy sauce.",
      "1. Fill the momo wrappers with the filling. 2. Steam the momos for 10-15 minutes. 3. Serve with chutney.",
    ],
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCRRZOYcodfwoTHCriK920kdfGjqs_DhkZZQ&s"
  },
  {
    name: "Chicken Momos",
    ingredients: ['MOMO WRAPPERS', 'GROUND CHICKEN', 'ONION', 'GARLIC', 'GINGER', 'SOY SAUCE', 'SALT', 'OIL'],
    preparationTime: "10 minutes",
    cookingTime: "20 minutes",
    dishType: "Snack",
    cuisine: "Indian",
    steps: [
      "1. Mix ground chicken with chopped onion, garlic, ginger, and soy sauce. 2. Prepare the momo wrappers.",
      "1. Fill the momo wrappers with the chicken mixture. 2. Steam the momos for 10-15 minutes. 3. Serve with chutney.",
    ],
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCRRZOYcodfwoTHCriK920kdfGjqs_DhkZZQ&s"
  },
  {
    name: "French Fries",
    ingredients: ['POTATO', 'SALT', 'OIL'],
    preparationTime: "10 minutes",
    cookingTime: "15 minutes",
    dishType: "Snack",
    cuisine: "American",
    steps: [
      "1. Peel and cut potatoes into thin strips. 2. Soak them in water for 15-20 minutes.",
      "1. Heat oil in a pan and fry the potatoes until crispy and golden. 2. Sprinkle with salt and serve.",
    ],
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoGUYEhU28EuTSoYl1Xm56q64LVajt97CQoQ&s"
  },
  {
    name: "Garlic Bread",
    ingredients: ['BREAD', 'GARLIC', 'BUTTER', 'PARSLEY', 'CHEESE'],
    preparationTime: "5 minutes",
    cookingTime: "10 minutes",
    dishType: "Snack",
    cuisine: "Italian",
    steps: [
      "1. Preheat the oven to 180�0.5C. 2. Mix softened butter, garlic, parsley, and cheese.",
      "1. Spread the garlic butter mixture on the bread slices. 2. Bake for 5-7 minutes until golden and serve.",
    ],
    imageUrl: "https://www.allrecipes.com/thmb/ymrjQ3GFq_Fc7Fu2yfvIj108tcM=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/21080-great-garlic-bread-DDMFS-4x3-e1c7b5c79fde4d629a9b7bce6c0702ed.jpg"
  },
  {
    name: "Hakka Noodles",
    ingredients: ['NOODLES', 'CABBAGE', 'CARROT', 'BELL PEPPERS', 'SOY SAUCE', 'VINEGAR', 'GARLIC', 'OIL'],
    preparationTime: "10 minutes",
    cookingTime: "15 minutes",
    dishType: "Main Course",
    cuisine: "Chinese",
    steps: [
      "1. Cook noodles according to the package instructions. 2. Chop the vegetables into thin strips.",
      "1. Heat oil in a wok, sauté garlic, and vegetables. 2. Add soy sauce, vinegar, and cooked noodles. 3. Stir-fry for 2-3 minutes and serve hot.",
    ],
    imageUrl: "https://thechutneylife.com/wp-content/uploads/2017/09/hakka2.jpeg"
  },
  {
    name: "Veg Manchurian",
    ingredients: ['CABBAGE', 'CARROT', 'CORN FLOUR', 'SOY SAUCE', 'GINGER', 'GARLIC', 'SPRING ONION', 'OIL'],
    preparationTime: "10 minutes",
    cookingTime: "15 minutes",
    dishType: "Main Course",
    cuisine: "Chinese",
    steps: [
      "1. Grate cabbage and carrot. 2. Mix them with corn flour, soy sauce, and spices to form a dough.",
      "1. Shape into small balls and deep fry until golden. 2. Heat oil in a pan, sauté ginger and garlic, and add the fried balls. 3. Toss in the sauce, and serve hot.",
    ],
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxR1_LCBWnDJECZq7-d0Cr2JNY3Sm-Ga7BFA&s"
  },
  {
    name: "Chilli Paneer",
    ingredients: ['PANEER', 'BELL PEPPERS', 'ONION', 'SOY SAUCE', 'CORN FLOUR', 'GREEN CHILIES', 'GARLIC', 'GINGER', 'OIL'],
    preparationTime: "10 minutes",
    cookingTime: "15 minutes",
    dishType: "Main Course",
    cuisine: "Chinese",
    steps: [
      "1. Cut paneer into cubes and coat with corn flour. 2. Chop vegetables and garlic.",
      "1. Fry the paneer cubes until crispy. 2. Heat oil in a pan, sauté garlic, ginger, and vegetables. 3. Add soy sauce and toss the fried paneer. 4. Serve hot.",
    ],
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeNJVW8TceaTMG3heNmii66Fs6pQ7Veltqfw&s"
  },
  {
    name: "Chilli Chicken",
    ingredients: ['CHICKEN', 'BELL PEPPERS', 'ONION', 'SOY SAUCE', 'CORN FLOUR', 'GREEN CHILIES', 'GARLIC', 'GINGER', 'OIL'],
    preparationTime: "10 minutes",
    cookingTime: "15 minutes",
    dishType: "Main Course",
    cuisine: "Chinese",
    steps: [
      "1. Marinate chicken with soy sauce, corn flour, and spices. 2. Chop vegetables.",
      "1. Fry the chicken until crispy. 2. Heat oil, sauté garlic, ginger, and vegetables. 3. Add soy sauce and toss the chicken. 4. Serve hot.",
    ],
    imageUrl: "https://www.indianhealthyrecipes.com/wp-content/uploads/2018/07/chilli-chicken-recipe-500x500.jpg"
  },
  {
    name: "Sushi",
    ingredients: ['SUSHI RICE', 'NORI SHEETS', 'FISH', 'CUCUMBER', 'AVOCADO', 'SOY SAUCE', 'VINEGAR'],
    preparationTime: "15 minutes",
    cookingTime: "20 minutes",
    dishType: "Main Course",
    cuisine: "Japanese",
    steps: [
      "1. Cook sushi rice and mix with vinegar. 2. Slice fish, cucumber, and avocado into thin strips.",
      "1. Place nori sheets on a mat, spread rice, and add fish, cucumber, and avocado. 2. Roll tightly and cut into pieces. 3. Serve with soy sauce.",
    ],
    imageUrl: "https://www.allrecipes.com/thmb/XT7-9MROYJZvNyQR4J40HGOVDmQ=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/19511smoked-salmon-sushi-rollfabeveryday4x3-159a22b4d3ac49fe9a146db94b53c930.jpg"
  },
  {
    name: "Aloo Palak",
    ingredients: ['POTATO', 'SPINACH', 'ONION', 'TOMATO', 'GREEN CHILIES', 'GINGER', 'GARLIC', 'CUMIN', 'TURMERIC', 'RED CHILI POWDER', 'GARAM MASALA', 'SALT', 'CORIANDER'],
    preparationTime: "15 minutes",
    cookingTime: "25 minutes",
    dishType: "Vegetable Dish",
    cuisine: "Indian",
    steps: [
      "Peel and cube potatoes. Wash and chop spinach.",
      "1. Heat oil in a pan, sauté cumin seeds, and add chopped onions, ginger, garlic, and green chilies. 2. Add chopped tomatoes and cook until soft. 3. Add turmeric, red chili powder, garam masala, and salt. Stir well. 4. Add potatoes and cook for 5 minutes. 5. Add spinach and cook until tender. 6. Garnish with fresh coriander.",
    ],
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIzcEtujPjvltW1syLmOLH-97nTx0sbDxXkw&s"
  },
  {
    name: "Matar Mushroom",
    ingredients: ['GREEN PEAS', 'MUSHROOMS', 'ONION', 'TOMATO', 'GREEN CHILIES', 'GINGER', 'GARLIC', 'CUMIN', 'TURMERIC', 'RED CHILI POWDER', 'GARAM MASALA', 'SALT', 'CORIANDER'],
    preparationTime: "10 minutes",
    cookingTime: "20 minutes",
    dishType: "Vegetable Dish",
    cuisine: "Indian",
    steps: [
      "Chop mushrooms and onions. Keep peas ready.",
      "1. Heat oil in a pan, sauté cumin seeds, and add chopped onions, ginger, garlic, and green chilies. 2. Add chopped tomatoes and cook until soft. 3. Add turmeric, red chili powder, garam masala, and salt. Stir well. 4. Add mushrooms and cook until soft. 5. Add peas, mix well, and cook for another 5 minutes. 6. Garnish with fresh coriander.",
    ],
    imageUrl: "https://www.indianhealthyrecipes.com/wp-content/uploads/2018/08/matar-mushroom.jpg"
  },
  {
    name: "Paneer Tikka Masala",
    ingredients: ['PANEER', 'ONION', 'TOMATO', 'YOGURT', 'GREEN CHILIES', 'GINGER', 'GARLIC', 'CUMIN', 'CORIANDER', 'TURMERIC', 'RED CHILI POWDER', 'GARAM MASALA', 'SALT', 'CORIANDER'],
    preparationTime: "15 minutes",
    cookingTime: "30 minutes",
    dishType: "Vegetable Dish",
    cuisine: "Indian",
    steps: [
      "Cut paneer into cubes. Prepare marinade using yogurt, spices, and a little salt. Marinate paneer for 15 minutes.",
      "1. Heat oil in a pan, sauté cumin seeds, and add chopped onions, ginger, garlic, and green chilies. 2. Add chopped tomatoes and cook until soft. 3. Add turmeric, red chili powder, coriander, garam masala, and salt. Mix well. 4. Add marinated paneer cubes and cook for 5-7 minutes. 5. Garnish with fresh coriander.",
    ],
    imageUrl: "https://www.cookwithmanali.com/wp-content/uploads/2014/04/Paneer-Tikka-Masala.jpg"
  },
  {
    name: "Bharwa Baingan (Stuffed Eggplant)",
    ingredients: ['SMALL EGGPLANTS', 'ONION', 'TOMATO', 'GARLIC', 'GINGER', 'GREEN CHILIES', 'CUMIN', 'TURMERIC', 'RED CHILI POWDER', 'CORIANDER POWDER', 'GARAM MASALA', 'SALT', 'CORIANDER', 'OIL'],
    preparationTime: "20 minutes",
    cookingTime: "30 minutes",
    dishType: "Vegetable Dish",
    cuisine: "Indian",
    steps: [
      "Slit the eggplants lengthwise, keeping the stems intact. Prepare the stuffing by mixing chopped onions, tomatoes, garlic, ginger, green chilies, and spices.",
      "1. Heat oil in a pan, sauté cumin seeds, and add the stuffing mixture. Stir and cook for 5 minutes. 2. Stuff the eggplants with the prepared mixture. 3. Heat oil in a pan, and cook stuffed eggplants on low heat, turning occasionally until they become tender and the stuffing is cooked. 4. Garnish with fresh coriander.",
    ],
    imageUrl: "https://www.indianhealthyrecipes.com/wp-content/uploads/2024/05/bharwa-baingan-recipe.jpg"
  },
  {
    name: "Dahi Wale Aloo",
    ingredients: ['POTATO', 'YOGURT', 'ONION', 'GREEN CHILIES', 'GINGER', 'GARLIC', 'CUMIN', 'TURMERIC', 'RED CHILI POWDER', 'GARAM MASALA', 'SALT', 'CORIANDER'],
    preparationTime: "12 minutes",
    cookingTime: "20 minutes",
    dishType: "Vegetable Dish",
    cuisine: "Indian",
    steps: [
      "Peel and cube potatoes.",
      "1. Heat oil in a pan, sauté cumin seeds, and add chopped onions, ginger, garlic, and green chilies. 2. Add turmeric, red chili powder, garam masala, and salt. Mix well. 3. Add cubed potatoes and cook for 10 minutes. 4. Add beaten yogurt and cook for another 5 minutes. 5. Garnish with fresh coriander.",
    ],
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCT-tPIWtGqVqQifVORcUaJl7UdGZwiW0PCw&s"
  },
  {
    name: "Tinda Masala",
    ingredients: ['TINDA', 'ONION', 'TOMATO', 'GREEN CHILIES', 'GINGER', 'GARLIC', 'TURMERIC', 'RED CHILI POWDER', 'GARAM MASALA', 'SALT', 'CORIANDER'],
    preparationTime: "10 minutes",
    cookingTime: "25 minutes",
    dishType: "Vegetable Dish",
    cuisine: "Indian",
    steps: [
      "Peel and cut tinda into small pieces.",
      "1. Heat oil in a pan, add cumin seeds and sauté until they splutter. 2. Add chopped onions, ginger, garlic, and green chilies. Sauté until onions turn golden. 3. Add chopped tomatoes and cook until they soften. 4. Add turmeric, red chili powder, garam masala, and salt. Stir well. 5. Add tinda and cook on medium heat until they are soft and tender, stirring occasionally. 6. Garnish with fresh coriander.",
    ],
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7tnCEKMfBG3q9EATiJY7DvnYa0p-l5-jUnA&s"
  },
  {
    name: "Aloo Capsicum",
    ingredients: ['POTATO', 'BELL PEPPERS', 'ONION', 'GREEN CHILIES', 'GINGER', 'GARLIC', 'CUMIN', 'TURMERIC', 'RED CHILI POWDER', 'GARAM MASALA', 'SALT', 'CORIANDER'],
    preparationTime: "12 minutes",
    cookingTime: "20 minutes",
    dishType: "Vegetable Dish",
    cuisine: "Indian",
    steps: [
      "Peel and cube the potatoes. Cut capsicum into small pieces.",
      "1. Heat oil in a pan, add cumin seeds and sauté. 2. Add chopped onions, ginger, garlic, and green chilies. Sauté until onions turn golden. 3. Add turmeric, red chili powder, garam masala, and salt. Mix well. 4. Add cubed potatoes and sauté for 5-7 minutes. 5. Add chopped capsicum and cook for another 5 minutes until both vegetables are tender. 6. Garnish with fresh coriander.",
    ],
    imageUrl: "https://www.whiskaffair.com/wp-content/uploads/2021/05/Dry-Aloo-Capsicum-2-3.jpg"
  },
  {
    name: "Bhindi Fry",
    ingredients: ['BHINDI', 'ONION', 'TOMATO', 'GREEN CHILIES', 'CUMIN', 'TURMERIC', 'RED CHILI POWDER', 'SALT', 'CORIANDER'],
    preparationTime: "10 minutes",
    cookingTime: "15 minutes",
    dishType: "Vegetable Dish",
    cuisine: "Indian",
    steps: [
      "Wash and cut okra into small pieces.",
      "1. Heat oil in a pan and sauté cumin seeds until fragrant. 2. Add chopped onions, green chilies, and ginger. Sauté until onions turn golden. 3. Add chopped tomatoes and cook until they soften. 4. Add turmeric, red chili powder, and salt. Mix well. 5. Add okra and cook on medium heat until they are crisp and tender, stirring occasionally. 6. Garnish with fresh coriander.",
    ],
    imageUrl: "https://www.indianhealthyrecipes.com/wp-content/uploads/2018/07/bhindi-fry-500x500.jpg"
  },
  {
    name: "Chana Masala",
    ingredients: ['CHICKPEAS', 'ONION', 'TOMATO', 'GREEN CHILIES', 'GINGER', 'GARLIC', 'CUMIN', 'TURMERIC', 'RED CHILI POWDER', 'CORIANDER', 'GARAM MASALA', 'SALT', 'CORIANDER'],
    preparationTime: "15 minutes",
    cookingTime: "30 minutes",
    dishType: "Legume Dish",
    cuisine: "Indian",
    steps: [
      "Soak chickpeas overnight and cook them in a pressure cooker until tender.",
      "1. Heat oil in a pan, add cumin seeds and sauté. 2. Add chopped onions, ginger, garlic, and green chilies. Sauté until onions turn golden. 3. Add chopped tomatoes and cook until they soften. 4. Add turmeric, red chili powder, coriander, and garam masala. Mix well. 5. Add cooked chickpeas, salt, and a little water to make the gravy. Simmer for 10 minutes. 6. Garnish with fresh coriander.",
    ],
    imageUrl: "https://www.indianhealthyrecipes.com/wp-content/uploads/2021/08/chana-masala-recipe.jpg"
  },
  {
    name: "Kadhi Pakora",
    ingredients: ['GRAM FLOUR', 'YOGURT', 'ONION', 'GINGER', 'GARLIC', 'CUMIN', 'TURMERIC', 'RED CHILI POWDER', 'SALT', 'GARAM MASALA', 'CORIANDER', 'OIL'],
    preparationTime: "20 minutes",
    cookingTime: "25 minutes",
    dishType: "Main Course",
    cuisine: "Indian",
    steps: [
      "Make pakoras by mixing gram flour, water, salt, turmeric, red chili powder, and chopped onions. Shape into small balls and fry until golden.",
      "1. Heat oil in a pan and add cumin seeds. Once they splutter, add ginger, garlic, and sauté. 2. Add yogurt, turmeric, red chili powder, and salt. Mix well. 3. Add water and bring it to a boil. Simmer for 10 minutes. 4. Add the fried pakoras and cook for another 5 minutes. 5. Garnish with fresh coriander.",
    ],
    imageUrl: "https://www.indianhealthyrecipes.com/wp-content/uploads/2023/03/kadhi-recipe-kadhi-pakora.jpg"
  },
  {
    name: "Gujarati Undhiyu",
    ingredients: ['SWEET POTATO', 'POTATO', 'YAM', 'GREEN BEANS', 'EGGPLANT', 'FENUGREEK LEAVES', 'GREEN CHILIES', 'GINGER', 'GARLIC', 'CUMIN', 'MUSTARD SEEDS', 'TURMERIC', 'RED CHILI POWDER', 'GARAM MASALA', 'CORIANDER POWDER', 'ASAFOETIDA', 'CORIANDER'],
    preparationTime: "15 minutes",
    cookingTime: "40 minutes",
    dishType: "Vegetable Dish",
    cuisine: "Indian",
    steps: [
      "Cut all vegetables into cubes.",
      "1. Heat oil in a pan and sauté mustard seeds, cumin seeds, and asafoetida. 2. Add ginger, garlic, and green chilies. Sauté for a minute. 3. Add chopped vegetables and sauté for 5 minutes. 4. Add spices (turmeric, red chili powder, garam masala, coriander powder, salt). Stir well. 5. Add water, cover, and cook on low heat until vegetables are tender. 6. Garnish with fresh coriander.",
    ],
    imageUrl: "https://cdn3.foodviva.com/static-content/food-images/gujarati-recipes/undhiyu/undhiyu.jpg"
  },
  {
    name: "Pavakkai Poriyal (Bitter Gourd Fry)",
    ingredients: ['BITTER GOURD', 'ONION', 'TOMATO', 'GREEN CHILIES', 'TURMERIC', 'RED CHILI POWDER', 'SALT', 'CORIANDER'],
    preparationTime: "10 minutes",
    cookingTime: "20 minutes",
    dishType: "Vegetable Dish",
    cuisine: "Indian",
    steps: [
      "Wash and slice bitter gourd. Sprinkle salt on it and set aside for 15 minutes to reduce bitterness.",
      "1. Heat oil in a pan and sauté chopped onions, green chilies, and ginger. 2. Add chopped tomatoes and cook until soft. 3. Add turmeric, red chili powder, and salt. Mix well. 4. Add bitter gourd slices and cook on low heat until tender. 5. Garnish with fresh coriander.",
    ],
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvdpiC8NOROrFduOaw-S9BjZFob-0TjOrGQg&s"
  },
  {
    name: "Vegetable Stew (Kerala Style)",
    ingredients: ['CARROT', 'POTATO', 'BEANS', 'PEAS', 'CAULIFLOWER', 'COCONUT MILK', 'GINGER', 'GREEN CHILIES', 'CUMIN', 'MUSTARD SEEDS', 'TURMERIC', 'SALT', 'FRESH CURRY LEAVES', 'COCONUT OIL'],
    preparationTime: "15 minutes",
    cookingTime: "30 minutes",
    dishType: "Vegetable Dish",
    cuisine: "Indian",
    steps: [
      "Cut vegetables into small cubes.",
      "1. Heat coconut oil in a pan, add mustard seeds, cumin seeds, and curry leaves. Sauté for a minute. 2. Add chopped ginger and green chilies. Sauté for another minute. 3. Add vegetables and sauté for 2 minutes. 4. Add water and bring to a boil. Cook until vegetables are tender. 5. Add coconut milk and salt, and cook for another 5 minutes. 6. Garnish with curry leaves and serve with appam or rice.",
    ],
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrR60aX_BG21W3euQSoYh4YrQpJX38JDcQdw&s"
  },
  {
    name: "Soya Chunk Curry",
    ingredients: ['SOYA CHUNKS', 'ONION', 'TOMATO', 'GREEN CHILIES', 'GINGER', 'GARLIC', 'CUMIN', 'TURMERIC', 'RED CHILI POWDER', 'GARAM MASALA', 'SALT', 'CORIANDER'],
    preparationTime: "10 minutes",
    cookingTime: "25 minutes",
    dishType: "Vegetable Dish",
    cuisine: "Indian",
    steps: [
      "Soak soya chunks in hot water for 15 minutes, then drain.",
      "1. Heat oil in a pan, sauté cumin seeds, and add chopped onions, ginger, garlic, and green chilies. 2. Add chopped tomatoes and cook until soft. 3. Add turmeric, red chili powder, garam masala, and salt. 4. Add soya chunks and mix well. 5. Add water, cover, and cook on low heat for 10-15 minutes. 6. Garnish with fresh coriander.",
    ],
    imageUrl: "https://www.indianhealthyrecipes.com/wp-content/uploads/2021/05/soya-chunks-curry-recipe.jpg"
  },
  {
    name: "Baingan Aloo (Eggplant and Potato Curry)",
    ingredients: ['EGGPLANT', 'POTATO', 'ONION', 'TOMATO', 'GREEN CHILIES', 'GINGER', 'GARLIC', 'CUMIN', 'TURMERIC', 'RED CHILI POWDER', 'GARAM MASALA', 'SALT', 'CORIANDER'],
    preparationTime: "15 minutes",
    cookingTime: "30 minutes",
    dishType: "Vegetable Dish",
    cuisine: "Indian",
    steps: [
      "Peel and cube potatoes. Cut eggplant into chunks.",
      "1. Heat oil in a pan, sauté cumin seeds and add chopped onions, ginger, garlic, and green chilies. 2. Add chopped tomatoes and cook until they soften. 3. Add turmeric, red chili powder, garam masala, and salt. Mix well. 4. Add potatoes and eggplant, sauté for 5 minutes. 5. Add water, cover, and cook until the vegetables are tender. 6. Garnish with fresh coriander.",
    ],
    imageUrl: "https://www.indianhealthyrecipes.com/wp-content/uploads/2021/07/aloo-baingan-recipe.jpg"
  },
  {
    name: "Sabudana Khichdi",
    ingredients: ['SABUDANA', 'POTATO', 'GREEN CHILIES', 'CUMIN', 'PEANUTS', 'LEMON', 'CORIANDER', 'SALT'],
    preparationTime: "10 minutes",
    cookingTime: "15 minutes",
    dishType: "Main Course",
    cuisine: "Indian",
    steps: [
      "Soak sabudana in water for 4-6 hours. Peel and chop potatoes into small cubes. Dry roast peanuts and crush them into small pieces.",
      "1. Heat oil in a pan, add cumin seeds, and let them splutter. 2. Add chopped green chilies and sauté for 1-2 minutes. 3. Add chopped potatoes and cook for 5 minutes until they become soft. 4. Add soaked sabudana and groundnuts, stir well, and cook for 5-7 minutes. 5. Season with salt and cook until the sabudana turns translucent. 6. Garnish with fresh coriander leaves and squeeze lemon juice over the khichdi. Serve hot.",
    ],
    imageUrl: "https://www.indianhealthyrecipes.com/wp-content/uploads/2021/06/sabudana-khichdi-recipe.jpg"
  },
  {
    name: "Ragi Dosa",
    ingredients: ['RAGI FLOUR', 'RICE FLOUR', 'WATER', 'SALT', 'OIL'],
    preparationTime: "10 minutes",
    cookingTime: "20 minutes",
    dishType: "Breakfast",
    cuisine: "Indian",
    steps: [
      "Prepare the batter by mixing ragi flour, rice flour, salt, and water until a smooth batter forms.",
      "1. Heat a non-stick pan or griddle and pour a ladle of batter onto it. 2. Spread the batter evenly in a circular motion to form a thin dosa. 3. Drizzle oil around the edges of the dosa and cook for 2-3 minutes until the bottom turns golden brown. 4. Flip the dosa and cook the other side for 1-2 minutes. 5. Serve hot with chutney or sambar.",
    ],
    imageUrl: "https://myfoodstory.com/wp-content/uploads/2024/04/Instant-Ragi-Dosa-3-500x500.jpg"
  },
  {
    name: "Appam",
    ingredients: ['RICE FLOUR', 'COCONUT MILK', 'YEAST', 'SUGAR', 'SALT', 'WATER'],
    preparationTime: "15 minutes",
    cookingTime: "30 minutes",
    dishType: "Breakfast",
    cuisine: "Indian",
    steps: [
      "Prepare the batter by mixing rice flour, coconut milk, sugar, and yeast. Let the batter rest for 4-6 hours to ferment.",
      "1. Heat an appam pan and pour a ladle of the batter in the center. 2. Swirl the pan to spread the batter thinly around the edges. 3. Cover and cook for 2-3 minutes until the center of the appam is soft and spongy. 4. Remove from the pan and serve hot with vegetable stew or curry.",
    ],
    imageUrl: "https://www.vegrecipesofindia.com/wp-content/uploads/2021/08/appam-1-500x500.jpg"
  },
  {
    name: "Puttu",
    ingredients: ['RICE FLOUR', 'GRATED COCONUT', 'SALT', 'WATER'],
    preparationTime: "15 minutes",
    cookingTime: "25 minutes",
    dishType: "Breakfast",
    cuisine: "Indian",
    steps: [
      "Mix rice flour, grated coconut, and salt in a bowl. Gradually add water to form a dough.",
      "1. Fill a puttu maker with layers of dough and grated coconut. 2. Steam the dough in the puttu maker for 10-12 minutes until it cooks through. 3. Serve the steamed puttu hot with banana, sugar, or curry.",
    ],
    imageUrl: "https://lh3.googleusercontent.com/blogger_img_proxy/AEn0k_tZIfO20I0kLkl2_1CRlwZfvq92gO9agQ_leTe-SiXD45_sWcn1t1KqiCTF8i0b9r4BgpZhIg1dUXHZLZ-A4IM2-mlaESbmY4m_Dp_AHxm2FTtOztKJyyOGMB9GNkS0BtI3cw=w1200-h630-p-k-no-nu"
  },
  {
    name: "Idiyappam",
    ingredients: ['RICE FLOUR', 'WATER', 'SALT', 'COCONUT MILK'],
    preparationTime: "10 minutes",
    cookingTime: "20 minutes",
    dishType: "Breakfast",
    cuisine: "Indian",
    steps: [
      "Prepare the dough by mixing rice flour, salt, and hot water. Knead into a smooth dough. Press the dough into idiyappam maker.",
      "1. Fill the idiyappam maker with the dough and press it onto a steaming tray. 2. Steam for 8-10 minutes until the idiyappams are cooked through. 3. Serve with coconut milk or curry.",
    ],
    imageUrl: "https://rakskitchen.net/wp-content/uploads/2021/09/idiyappam-nool-puttu.jpg"
  },
  {
    name: "Chana Dal Pancakes",
    ingredients: ['CHANA DAL', 'ONION', 'GREEN CHILIES', 'GINGER', 'CUMIN', 'TURMERIC', 'SALT', 'CORIANDER'],
    preparationTime: "15 minutes",
    cookingTime: "20 minutes",
    dishType: "Breakfast",
    cuisine: "Indian",
    steps: [
      "Soak chana dal for 2 hours. Drain and grind into a coarse paste with green chilies, ginger, and spices.",
      "1. Heat oil in a pan, add cumin seeds, and sauté them until they splutter. 2. Add chopped onions and sauté until they soften. 3. Add the chana dal paste along with turmeric, salt, and cook for 5 minutes. 4. Once the mixture thickens, pour it onto a hot griddle and spread it to form pancakes. 5. Cook both sides until golden brown. 6. Garnish with fresh coriander and serve with chutney.",
    ],
    imageUrl: "https://cdn.tarladalal.com/members/9306/big/big_chana_dal_pancakes-8656.jpg"
  },
  {
    name: "Rava Upma",
    ingredients: ['SEMOLINA', 'ONION', 'TOMATO', 'GREEN CHILIES', 'GINGER', 'MUSTARD SEEDS', 'URAD DAL', 'CHANA DAL', 'CURRY LEAVES', 'SALT', 'CORIANDER'],
    preparationTime: "10 minutes",
    cookingTime: "15 minutes",
    dishType: "Breakfast",
    cuisine: "Indian",
    steps: [
      "Roast rava in a pan until golden brown. Chop onions and tomatoes into small pieces.",
      "1. Heat oil in a pan, add mustard seeds and let them splutter. 2. Add urad dal, chana dal, green chilies, and sauté for 1-2 minutes. 3. Add chopped onions and tomatoes, cook until soft. 4. Add water and salt, bring to a boil. 5. Add roasted rava, mix well, and cook until the water is absorbed and the upma thickens. 6. Garnish with fresh coriander and serve hot.",
    ],
    imageUrl: "https://rakskitchen.net/wp-content/uploads/2013/02/upma-recipe-feat.jpg"
  },
  {
    name: "Misal Pav",
    ingredients: ['SPROUTED MOONG', 'POTATO', 'ONION', 'TOMATO', 'GREEN CHILIES', 'GINGER', 'GARLIC', 'CUMIN', 'CORIANDER', 'TURMERIC', 'GARAM MASALA', 'RED CHILI POWDER', 'SALT', 'PAV', 'LEMON', 'CORIANDER'],
    preparationTime: "20 minutes",
    cookingTime: "30 minutes",
    dishType: "Breakfast",
    cuisine: "Indian",
    steps: [
      "Soak and sprout moong beans for 2 days. Boil potatoes and chop them into small cubes.",
      "1. Heat oil in a pan, sauté cumin seeds, chopped ginger, garlic, onions, and green chilies until golden brown. 2. Add chopped tomatoes, cook until soft. 3. Add spices like turmeric, red chili powder, garam masala, and salt, and cook for 5 minutes. 4. Add sprouted moong, boiled potatoes, and water. Let it cook for 10 minutes to bring the flavors together. 5. Serve with pav, garnished with lemon juice and fresh coriander.",
    ],
    imageUrl: "https://www.ohmyveg.co.uk/wp-content/uploads/2023/12/Misal-Pav-2-2-e1722869218662-540x720.jpg"
  },
  {
    name: "Masala Oats",
    ingredients: ['OATS', 'ONION', 'TOMATO', 'GREEN CHILIES', 'CUMIN', 'TURMERIC', 'RED CHILI POWDER', 'GARAM MASALA', 'SALT', 'CORIANDER'],
    preparationTime: "10 minutes",
    cookingTime: "15 minutes",
    dishType: "Breakfast",
    cuisine: "Indian",
    steps: [
      "Chop onions, tomatoes, and green chilies.",
      "1. Heat oil in a pan, sauté cumin seeds, green chilies, onions, and tomatoes for 2-3 minutes. 2. Add spices like turmeric, red chili powder, garam masala, and salt, and cook for 3-4 minutes. 3. Add oats, water, and salt, cook for 5-7 minutes until oats are cooked. 4. Garnish with fresh coriander leaves and serve hot.",
    ],
    imageUrl: "https://www.indianhealthyrecipes.com/wp-content/uploads/2023/06/masala-oats-recipe.jpg"
  },
  {
    name: "Bombay Sandwich",
    ingredients: ['BREAD', 'POTATO', 'CUCUMBER', 'TOMATO', 'ONION', 'GREEN CHILIES', 'CORIANDER CHUTNEY', 'SALT', 'PEPPER', 'LEMON'],
    preparationTime: "15 minutes",
    cookingTime: "10 minutes",
    dishType: "Snack",
    cuisine: "Indian",
    steps: [
      "Boil and mash potatoes. Slice cucumbers, tomatoes, onions, and green chilies.",
      "1. Apply coriander chutney on one side of the bread slices. 2. Layer mashed potatoes, cucumber, tomato, onion, and green chilies on one slice. 3. Sprinkle salt, pepper, and squeeze lemon juice on top. 4. Place another bread slice on top and toast if desired.",
    ],
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXvYtWG6QyXsDMoonvrMFDLXMMd1sI2iw18A&s"
  },
  {
    name: "Masala Papad",
    ingredients: ['PAPAD', 'ONION', 'TOMATO', 'GREEN CHILIES', 'CORIANDER', 'CHAAT MASALA', 'LEMON'],
    preparationTime: "10 minutes",
    cookingTime: "5 minutes",
    dishType: "Side Dish",
    cuisine: "Indian",
    steps: [
      "Chop onions, tomatoes, green chilies, and coriander. Prepare chaat masala mix.",
      "1. Roast or fry the papad until crisp. 2. Top with chopped onions, tomatoes, green chilies, coriander, chaat masala, and a squeeze of lemon juice. 3. Serve immediately as a crunchy snack or appetizer.",
    ],
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeLow68XMeCXcb79OmEKBrTxUnF8fMdiVxVA&s"
  },
  {
    name: "Dhokla (Khaman)",
    ingredients: ['GRAM FLOUR', 'YOGURT', 'GREEN CHILIES', 'GINGER', 'MUSTARD SEEDS', 'CURRY LEAVES', 'SUGAR', 'LEMON', 'CORIANDER'],
    preparationTime: "20 minutes",
    cookingTime: "20 minutes",
    dishType: "Snack",
    cuisine: "Indian",
    steps: [
      "Prepare the batter by mixing gram flour, yogurt, water, green chilies, ginger, and salt until smooth.",
      "1. Steam the batter in a steamer for 15-20 minutes until cooked through. 2. Heat oil in a pan, sauté mustard seeds and curry leaves. 3. Pour the tempering over the steamed dhokla. 4. Garnish with fresh coriander and serve with chutney.",
    ],
    imageUrl: "https://rakskitchen.net/wp-content/uploads/2011/09/khaman-besan.jpg"
  },
  {
    name: "Khandvi",
    ingredients: ['GRAM FLOUR', 'YOGURT', 'GINGER', 'GREEN CHILIES', 'TURMERIC', 'CUMIN', 'MUSTARD SEEDS', 'CURRY LEAVES', 'SALT', 'CORIANDER'],
    preparationTime: "15 minutes",
    cookingTime: "20 minutes",
    dishType: "Snack",
    cuisine: "Indian",
    steps: [
      "Prepare a smooth batter by mixing gram flour, yogurt, water, and salt.",
      "1. Cook the batter in a pan over low heat until it thickens and starts to leave the sides of the pan. 2. Spread the thick batter on a flat surface and let it cool. 3. Once cool, roll the batter into tight cylindrical shapes. 4. Heat oil in a pan, sauté mustard seeds, cumin seeds, and curry leaves, and pour the tempering over the khandvi rolls. 5. Garnish with fresh coriander and serve with chutney.",
    ],
    imageUrl: "https://rakskitchen.net/wp-content/uploads/2013/11/10921796334_c5b1f9fcda_z.jpg"
  },
  {
    name: "Veg Spring Rolls",
    ingredients: ['SPRING ROLL WRAPPERS', 'CABBAGE', 'CARROT', 'BEANS', 'ONION', 'GARLIC', 'SOY SAUCE', 'SALT', 'PEPPER', 'OIL'],
    preparationTime: "20 minutes",
    cookingTime: "20 minutes",
    dishType: "Snack",
    cuisine: "Chinese",
    steps: [
      "Finely chop cabbage, carrots, beans, and onions. Prepare a stir-fry mixture with garlic and soy sauce.",
      "1. Heat oil in a pan and sauté garlic and onions. 2. Add the vegetables and cook until soft. 3. Add soy sauce, salt, and pepper, and cook for a few more minutes. 4. Let the mixture cool. 5. Place a spoonful of the filling in a spring roll wrapper and roll it tightly. 6. Fry the spring rolls in hot oil until golden and crispy. 7. Serve hot with dipping sauce.",
    ],
    imageUrl: "https://www.indianhealthyrecipes.com/wp-content/uploads/2013/12/spring-rolls.jpg"
  },
  {
    name: "Aloo Patties",
    ingredients: ['POTATO', 'BREAD CRUMBS', 'ONION', 'GREEN CHILIES', 'GINGER', 'GARAM MASALA', 'CORIANDER', 'SALT', 'OIL'],
    preparationTime: "15 minutes",
    cookingTime: "15 minutes",
    dishType: "Snack",
    cuisine: "Indian",
    steps: [
      "Boil and mash potatoes. Finely chop onions, green chilies, and coriander.",
      "1. In a bowl, mix mashed potatoes with onions, green chilies, ginger, garam masala, salt, and bread crumbs. 2. Shape the mixture into small patties. 3. Heat oil in a pan and fry the patties until golden brown on both sides. 4. Serve hot with chutney or ketchup.",
    ],
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmagD2C-7uMtuJGqz6Ec2X5z5XGYSckEgxgw&s"
  },
  {
    name: "Cheese Balls",
    ingredients: ['POTATO', 'CHEESE', 'CORN FLOUR', 'SALT', 'PEPPER', 'OIL'],
    preparationTime: "15 minutes",
    cookingTime: "15 minutes",
    dishType: "Snack",
    cuisine: "Indian",
    steps: [
      "Boil and mash potatoes. Grate cheese.",
      "1. Mix mashed potatoes with cheese, salt, and pepper. 2. Shape into small balls and roll them in cornflour. 3. Heat oil in a pan and deep fry the cheese balls until golden brown. 4. Serve hot with chutney or sauce.",
    ],
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuJfPOj-tOx8C1qxaay-idMe9l5DoorGMFog&s"
  },
  {
    name: "Veg Seekh Kebab",
    ingredients: ['PANEER', 'ONION', 'GREEN CHILIES', 'CUMIN', 'CORIANDER', 'GARAM MASALA', 'CORIANDER', 'SALT'],
    preparationTime: "20 minutes",
    cookingTime: "20 minutes",
    dishType: "Snack",
    cuisine: "Indian",
    steps: [
      "Grate mixed vegetables. Crumble cottage cheese and finely chop onions and green chilies.",
      "1. Mix grated vegetables, crumbled cottage cheese, chopped onions, green chilies, and spices into a dough. 2. Shape the mixture around skewers and cook them in a preheated oven or grill until golden and cooked through. 3. Serve hot with green chutney.",
    ],
    imageUrl: "https://www.indianhealthyrecipes.com/wp-content/uploads/2016/06/veg-seekh-kabab-recipe-500x500.jpg"
  },
  {
    name: "Mutton Seekh Kebab",
    ingredients: ['MINCED MUTTON', 'ONION', 'GREEN CHILIES', 'GINGER', 'GARLIC', 'CUMIN', 'GARAM MASALA', 'CORIANDER', 'CORIANDER', 'SALT'],
    preparationTime: "20 minutes",
    cookingTime: "25 minutes",
    dishType: "Mutton Dish",
    cuisine: "Indian",
    steps: [
      "Grind mutton with ginger, garlic, onions, and spices into a smooth mixture.",
      "1. Mix the ground mutton with chopped green chilies, coriander, spices, and salt. 2. Shape the mixture into kebabs and skewer them. 3. Grill the kebabs until they are cooked through and golden brown. 4. Serve hot with chutney or naan.",
    ],
    imageUrl: "https://www.licious.in/blog/wp-content/uploads/2020/12/Mutton-Seekh-Kebab.jpg"
  },
  {
    name: "Chicken Lollipop",
    ingredients: ['CHICKEN WINGS', 'GINGER-GARLIC PASTE', 'SOY SAUCE', 'VINEGAR', 'CORN FLOUR', 'SALT', 'PEPPER', 'OIL'],
    preparationTime: "15 minutes",
    cookingTime: "15 minutes",
    dishType: "Chicken Dish",
    cuisine: "Indian",
    steps: [
      "Marinate chicken wings with ginger-garlic paste, soy sauce, vinegar, salt, and pepper.",
      "1. Coat the marinated chicken wings with cornflour. 2. Heat oil in a pan and deep fry the chicken lollipops until golden and crispy. 3. Serve hot with dipping sauce or chutney.",
    ],
    imageUrl: "https://www.yummytummyaarthi.com/wp-content/uploads/2021/11/chicken-lollipop-1.jpeg"
  },
  {
    name: "Paneer Tikka",
    ingredients: ['PANEER', 'YOGURT', 'GINGER-GARLIC PASTE', 'LEMON', 'GARAM MASALA', 'CUMIN', 'RED CHILI POWDER', 'SALT', 'OIL'],
    preparationTime: "20 minutes",
    cookingTime: "15 minutes",
    dishType: "Snack",
    cuisine: "Indian",
    steps: [
      "Cut paneer into cubes and prepare a marinade with yogurt, ginger-garlic paste, lemon juice, and spices.",
      "1. Marinate the paneer cubes in the mixture for at least 30 minutes. 2. Skewer the marinated paneer and grill it until golden brown and cooked through. 3. Serve hot with green chutney and lemon wedges.",
    ],
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBKvqnEq2iBJXQcsNlV1z85shATqEmM69l-w&s"
  },
  {
    name: "Hakka Mushroom",
    ingredients: ['MUSHROOMS', 'ONION', 'BELL PEPPERS', 'GARLIC', 'SOY SAUCE', 'VINEGAR', 'SALT', 'PEPPER', 'OIL'],
    preparationTime: "10 minutes",
    cookingTime: "15 minutes",
    dishType: "Snack",
    cuisine: "Chinese",
    steps: [
      "Slice mushrooms, onions, and bell peppers. Mince garlic.",
      "1. Heat oil in a wok, sauté garlic, onions, and bell peppers. 2. Add mushrooms, soy sauce, vinegar, salt, and pepper. 3. Stir fry for 5-7 minutes until the mushrooms are cooked and the sauce thickens. 4. Serve hot with rice or noodles.",
    ],
    imageUrl: "https://cdn.tarladalal.com/members/9306/big/big_hakka_mushrooms-11879.jpg"
  },
  {
    name: "Corn Fritters",
    ingredients: ['CORN KERNELS', 'FLOUR', 'GREEN CHILIES', 'ONION', 'CORIANDER', 'CUMIN', 'SALT', 'OIL'],
    preparationTime: "15 minutes",
    cookingTime: "15 minutes",
    dishType: "Snack",
    cuisine: "Indian",
    steps: [
      "Grind corn kernels coarsely. Finely chop onions, green chilies, and coriander.",
      "1. Mix ground corn with flour, chopped onions, green chilies, coriander, cumin seeds, and salt. 2. Shape into small fritters. 3. Heat oil in a pan and fry the fritters until golden brown. 4. Serve hot with chutney or ketchup.",
    ],
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRECko9q_0eBOjFCfPD6O-tNVJg8LBnJ0APYg&s"
  },
  {
    name: "Pav Sandwich",
    ingredients: ['PAV', 'ONION', 'TOMATO', 'CUCUMBER', 'CHEESE', 'CHUTNEY', 'SALT', 'PEPPER'],
    preparationTime: "10 minutes",
    cookingTime: "10 minutes",
    dishType: "Snack",
    cuisine: "Indian",
    steps: [
      "Chop onions, tomatoes, and cucumber. Slice cheese.",
      "1. Slice the pav rolls and spread chutney on both sides. 2. Layer with sliced onion, tomato, cucumber, and cheese. 3. Sprinkle salt and pepper. 4. Close the sandwich and serve.",
    ],
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGFE1zga_aCdWxz4tzz_KmlmZOoZ-epr-OpA&s"
  },
  {
    name: "Rasam",
    ingredients: ['TAMARIND', 'TOMATO', 'GARLIC', 'GREEN CHILIES', 'MUSTARD SEEDS', 'CURRY LEAVES', 'CORIANDER', 'SALT', 'PEPPER', 'WATER'],
    preparationTime: "15 minutes",
    cookingTime: "10 minutes",
    dishType: "Lunch",
    cuisine: "Indian",
    steps: [
      "Soak tamarind in water and extract juice. Chop tomatoes and garlic.",
      "1. Heat oil in a pot, add mustard seeds, curry leaves, garlic, and green chilies. 2. Add chopped tomatoes and cook for 2-3 minutes. 3. Add tamarind juice, water, salt, and pepper, and bring to a boil. 4. Simmer for 5-7 minutes and garnish with coriander. Serve hot with rice.",
    ],
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGFE1zga_aCdWxz4tzz_KmlmZOoZ-epr-OpA&s"
  },
  {
    name: "Tomato Rice",
    ingredients: ['RICE', 'TOMATO', 'ONION', 'GREEN CHILIES', 'GINGER-GARLIC PASTE', 'CUMIN', 'TURMERIC', 'RED CHILI POWDER', 'GARAM MASALA', 'SALT', 'OIL'],
    preparationTime: "15 minutes",
    cookingTime: "20 minutes",
    dishType: "Rice Dish",
    cuisine: "Indian",
    steps: [
      "Cook rice and chop tomatoes and onions. Prepare ginger-garlic paste.",
      "1. Heat oil in a pan, sauté onions, green chilies, and ginger-garlic paste. 2. Add chopped tomatoes and cook until soft. 3. Add spices like cumin, turmeric, red chili powder, and salt. 4. Add cooked rice and mix well. Cook for 5 minutes, garnish with coriander. Serve hot.",
    ],
    imageUrl: "https://static.toiimg.com/thumb/54673775.cms?width=1200&height=900"
  },
  {
    name: "Curd Pachadi",
    ingredients: ['YOGURT', 'CUCUMBER', 'COCONUT', 'GREEN CHILIES', 'MUSTARD SEEDS', 'CURRY LEAVES', 'SALT', 'OIL'],
    preparationTime: "10 minutes",
    cookingTime: "10 minutes",
    dishType: "Side Dish",
    cuisine: "Indian",
    steps: [
      "Grate cucumber and prepare coconut paste. Soak mustard seeds in water.",
      "1. Mix yogurt with grated cucumber and coconut paste. 2. Heat oil in a pan, add mustard seeds, curry leaves, and sauté for 1-2 minutes. 3. Pour the tempering over the yogurt mixture. 4. Serve as a side dish with rice or roti.",
    ],
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyrSllA9q7aLmTmmyfmm_4_XwatHdJN1CB_Q&s"
  },
  {
    name: "Vatha Kuzhambu",
    ingredients: ['TAMARIND', 'ONION', 'TOMATO', 'GARLIC', 'RED CHILIES', 'MUSTARD SEEDS', 'CURRY LEAVES', 'CUMIN', 'CORIANDER', 'TURMERIC', 'RED CHILI POWDER', 'SALT'],
    preparationTime: "20 minutes",
    cookingTime: "25 minutes",
    dishType: "Side Dish",
    cuisine: "Indian",
    steps: [
      "Soak tamarind and extract juice. Chop onions, tomatoes, and garlic.",
      "1. Heat oil in a pan, sauté mustard seeds, curry leaves, garlic, and onions. 2. Add tomatoes and cook until soft. 3. Add tamarind juice, spices, and water. 4. Let the gravy simmer for 10-12 minutes. Serve hot with rice or roti.",
    ],
    imageUrl: "https://blendofspicesbysara.com/wp-content/uploads/2021/02/PXL_20210217_215031192.PORTRAIT-01.jpeg"
  },
  {
    name: "Banana Chips",
    ingredients: ['BANANAS', 'SALT', 'TURMERIC', 'OIL'],
    preparationTime: "15 minutes",
    cookingTime: "15 minutes",
    dishType: "Snack",
    cuisine: "Indian",
    steps: [
      "Peel bananas and slice them thinly. Prepare a turmeric solution.",
      "1. Heat oil in a pan. 2. Dip the banana slices in turmeric water and fry in hot oil until crispy and golden. 3. Drain excess oil and sprinkle salt. Serve as a snack.",
    ],
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4ELjzk6-duEf-6SvJAMnBMktCkc2XHAKuaA&s"
  },
  {
    name: "Paruppu Usili",
    ingredients: ['TOOR DAL', 'GREEN BEANS', 'ONION', 'GREEN CHILIES', 'MUSTARD SEEDS', 'CURRY LEAVES', 'SALT', 'OIL'],
    preparationTime: "20 minutes",
    cookingTime: "20 minutes",
    dishType: "Vegetable Dish",
    cuisine: "Indian",
    steps: [
      "Soak toor dal for 1 hour. Chop onions and green chilies.",
      "1. Cook soaked toor dal until soft. 2. Heat oil in a pan, add mustard seeds, curry leaves, onions, and green chilies. 3. Add cooked dal and green beans. Cook for 5-7 minutes, add salt, and mix well. 4. Serve hot with rice or roti.",
    ],
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgpBdZ-gxuDjXKUwFbkqHhxU1QuaQn102Wsg&s"
  },
  {
    name: "Cabbage Poriyal",
    ingredients: ['CABBAGE', 'COCONUT', 'MUSTARD SEEDS', 'URAD DAL', 'GREEN CHILIES', 'SALT', 'OIL'],
    preparationTime: "10 minutes",
    cookingTime: "10 minutes",
    dishType: "Vegetable Dish",
    cuisine: "Indian",
    steps: [
      "Chop cabbage and green chilies. Grate coconut.",
      "1. Heat oil in a pan, add mustard seeds and urad dal. 2. Add chopped cabbage and sauté for 5-7 minutes. 3. Add grated coconut, green chilies, and salt. Cook for 2-3 minutes. 4. Serve hot with rice or roti.",
    ],
    imageUrl: "https://www.indianhealthyrecipes.com/wp-content/uploads/2022/02/cabbage-poriyal-recipe.jpg"
  },
  {
    name: "Phirni",
    ingredients: ['RICE FLOUR', 'MILK', 'SUGAR', 'CARDAMOM', 'SAFFRON', 'ALMONDS', 'PISTACHIOS'],
    preparationTime: "10 minutes",
    cookingTime: "20 minutes",
    dishType: "Dessert",
    cuisine: "Indian",
    steps: [
      "Soak rice flour in milk for 30 minutes. Grind almonds and pistachios.",
      "1. Boil milk and add sugar. 2. Mix soaked rice flour into the boiling milk, stirring continuously. 3. Add cardamom and saffron, cook until the mixture thickens. 4. Garnish with ground almonds and pistachios. 5. Serve chilled.",
    ],
    imageUrl: "https://www.indianhealthyrecipes.com/wp-content/uploads/2021/10/phirni-firni-recipe.jpg"
  },
  {
    name: "Peda",
    ingredients: ['FULL_CREAM MILK', 'SUGAR', 'GHEE', 'CARDAMOM', 'CASHEWS', 'ALMONDS', 'PISTACHIOS'],
    preparationTime: "15 minutes",
    cookingTime: "20 minutes",
    dishType: "Dessert",
    cuisine: "Indian",
    steps: [
      "Boil milk and reduce it to a thick consistency. Prepare nuts for garnish.",
      "1. Boil milk in a heavy pan until it thickens. 2. Add sugar, ghee, and cardamom. 3. Stir continuously to prevent burning. 4. Once it reaches a dough-like consistency, shape into pedas and garnish with chopped nuts. 5. Serve warm or at room temperature.",
    ],
    imageUrl: "https://www.secondrecipe.com/wp-content/uploads/2017/08/mathura-peda-1-500x375.jpg"
  },
  {
    name: "Sandesh",
    ingredients: ['PANEER', 'SUGAR', 'CARDAMOM', 'ROSE WATER', 'SAFFRON', 'PISTACHIOS'],
    preparationTime: "10 minutes",
    cookingTime: "15 minutes",
    dishType: "Dessert",
    cuisine: "Indian",
    steps: [
      "Grate paneer and mix with sugar and cardamom.",
      "1. Heat the grated paneer and sugar in a pan until it thickens. 2. Add cardamom and rose water for flavor. 3. Shape the mixture into small discs or mold shapes. 4. Garnish with saffron and pistachios. 5. Let it cool and serve.",
    ],
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-P5pVHFog8VgSKCBnI9Y3udK2p4bZgwAnYQ&s"
  },
  {
    name: "Soan Papdi",
    ingredients: ['SUGAR', 'FLOUR', 'GHEE', 'CARDAMOM', 'PISTACHIOS', 'ALMONDS'],
    preparationTime: "15 minutes",
    cookingTime: "25 minutes",
    dishType: "Dessert",
    cuisine: "Indian",
    steps: [
      "Sift flour and cardamom powder. Prepare a ghee-flavored syrup.",
      "1. Heat ghee in a pan, add flour, and cook until it turns golden brown. 2. In another pan, make a syrup by boiling sugar and water. 3. Mix the syrup with flour, stirring constantly until it forms a soft dough. 4. Shape into pieces and garnish with pistachios and almonds. 5. Let it cool and serve.",
    ],
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBxs6Bm9-gQ5KHe0avE6RoSnG1cKZgvNcaWQ&s"
  },
  {
    name: "Ghevar",
    ingredients: ['FLOUR', 'GHEE', 'SUGAR', 'SAFFRON', 'ROSE WATER', 'CARDAMOM', 'ALMONDS', 'PISTACHIOS'],
    preparationTime: "20 minutes",
    cookingTime: "30 minutes",
    dishType: "Dessert",
    cuisine: "Indian",
    steps: [
      "Prepare a batter using flour and ghee. Soak saffron in milk.",
      "1. Heat ghee in a deep pan and slowly pour in the batter to form a ring shape. 2. Fry the ghevar until it turns golden and crisp. 3. Make a sugar syrup with sugar, rose water, and cardamom. 4. Dip the fried ghevar into the syrup and garnish with saffron and nuts. 5. Serve cooled.",
    ],
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTA4djFv7cqa7TXvKUh21eIsKCeLwVioQl6Jg&s"
  },
  {
    name: "Mohanthal",
    ingredients: ['GRAM FLOUR', 'SUGAR', 'GHEE', 'CARDAMOM', 'ALMONDS', 'CASHEWS'],
    preparationTime: "20 minutes",
    cookingTime: "30 minutes",
    dishType: "Dessert",
    cuisine: "Indian",
    steps: [
      "Roast gram flour in ghee. Prepare sugar syrup with cardamom.",
      "1. Roast the gram flour in ghee until it turns golden. 2. Prepare a sugar syrup with sugar, water, and cardamom. 3. Mix the syrup with the roasted flour and cook until it thickens. 4. Pour the mixture into a greased tray and set. 5. Garnish with chopped almonds and cashews. 6. Let it cool and cut into pieces.",
    ],
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlc8PiXZiSqgFK4OPSh_y6v_TkcH2LNO8vzg&s"
  },
  {
    name: "Chhena Poda",
    ingredients: ['PANEER', 'SUGAR', 'CARDAMOM', 'RAISINS', 'NUTS'],
    preparationTime: "20 minutes",
    cookingTime: "25 minutes",
    dishType: "Dessert",
    cuisine: "Indian",
    steps: [
      "Prepare fresh paneer or use store-bought. Soak raisins.",
      "1. Mix paneer with sugar, cardamom, and soaked raisins. 2. Shape the mixture into a round form and bake in a preheated oven at 180°C for 20 minutes. 3. Once golden, remove and let it cool. 4. Garnish with chopped nuts. 5. Serve in slices.",
    ],
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7IamMKruzQ0sYhWiIaUQVkep9d8p2Cm9mgA&s"
  },
  {
    name: "Kalakand",
    ingredients: ['MILK', 'SUGAR', 'CARDAMOM', 'GHEE', 'PANEER', 'ALMONDS'],
    preparationTime: "15 minutes",
    cookingTime: "20 minutes",
    dishType: "Dessert",
    cuisine: "Indian",
    steps: [
      "Boil milk and reduce it to a thick consistency. Crumble paneer.",
      "1. Boil the milk and reduce it to half. 2. Add sugar and crumbled paneer to the milk. 3. Cook on low heat until it thickens. 4. Grease a tray with ghee and pour the mixture into it. 5. Let it cool and set. 6. Garnish with chopped almonds. 7. Cut into pieces and serve.",
    ],
    imageUrl: "https://www.nestleprofessional.in/sites/default/files/2022-07/Kalakand.jpg"
  },
  {
    name: "Seviyan Kheer",
    ingredients: ['VERMICELLI', 'MILK', 'SUGAR', 'CARDAMOM', 'RAISINS', 'CASHEWS', 'ALMONDS'],
    preparationTime: "15 minutes",
    cookingTime: "15 minutes",
    dishType: "Dessert",
    cuisine: "Indian",
    steps: [
      "Roast seviyan in ghee. Chop nuts and soak raisins.",
      "1. Roast the seviyan in ghee until golden brown. 2. Boil milk and add sugar. 3. Add the roasted seviyan and cook until the milk thickens. 4. Add cardamom, raisins, and chopped nuts. 5. Let it simmer for a few minutes, then serve warm or chilled.",
    ],
    imageUrl: "https://www.secondrecipe.com/wp-content/uploads/2020/11/sevayin-kheer.jpg"
  },
  {
    name: "Payasam",
    ingredients: ['RICE', 'MILK', 'SUGAR', 'CARDAMOM', 'CASHEWS', 'ALMONDS', 'RAISINS'],
    preparationTime: "20 minutes",
    cookingTime: "15 minutes",
    dishType: "Dessert",
    cuisine: "Indian",
    steps: [
      "Soak rice for 30 minutes. Roast nuts.",
      "1. Cook rice in milk until soft. 2. Add sugar, cardamom, and cook until the milk thickens. 3. Add roasted nuts and raisins. 4. Simmer for a few minutes and serve warm or chilled.",
    ],
    imageUrl: "https://www.indianhealthyrecipes.com/wp-content/uploads/2021/07/semiya-payasam-vermicelli-payasam-500x500.jpg"
  },
  {
    name: "Keema Pav",
    ingredients: ['MUTTON', 'ONION', 'TOMATO', 'GINGER', 'GARLIC', 'PAV', 'CUMIN', 'GARAM MASALA', 'CHILI POWDER', 'CORIANDER', 'SALT'],
    preparationTime: "20 minutes",
    cookingTime: "25 minutes",
    dishType: "Mutton Dish",
    cuisine: "Indian",
    steps: [
      "Chop onions, tomatoes, and garlic. Prepare ginger-garlic paste.",
      "1. Heat oil in a pan, sauté onions, ginger, and garlic. 2. Add minced meat and cook until browned. 3. Add tomatoes and cook until soft. 4. Add spices and cook until the oil separates. 5. Toast pav buns and serve with the keema mixture.",
    ],
    imageUrl: "https://ministryofcurry.com/wp-content/uploads/2017/06/Kheema-Pav-2.jpg"
  },
  {
    name: "Anda Bhurji Pav",
    ingredients: ['EGGS', 'ONION', 'TOMATO', 'GREEN CHILIES', 'TURMERIC', 'RED CHILI POWDER', 'GARAM MASALA', 'PAV'],
    preparationTime: "10 minutes",
    cookingTime: "10 minutes",
    dishType: "Egg Dish",
    cuisine: "Indian",
    steps: [
      "Chop onions, tomatoes, and green chilies. Prepare spices.",
      "1. Heat oil in a pan and sauté onions and green chilies. 2. Add tomatoes and cook until soft. 3. Add spices and crack eggs into the mixture. 4. Scramble the eggs and cook until done. 5. Toast pav buns and serve the Anda Bhurji inside.",
    ],
    imageUrl: "https://myfoodstory.com/wp-content/uploads/2020/03/Street-Style-Egg-Bhurji-4.jpg"
  },
  {
    name: "Bombay Masala Toast",
    ingredients: ['BREAD', 'POTATO', 'ONION', 'TOMATO', 'GREEN CHILIES', 'CHAAT MASALA', 'RED CHILI POWDER', 'BUTTER'],
    preparationTime: "10 minutes",
    cookingTime: "10 minutes",
    dishType: "Snack",
    cuisine: "Indian",
    steps: [
      "Boil and mash potatoes. Chop onions, tomatoes, and chilies.",
      "1. Mix mashed potatoes with chopped onions, tomatoes, and spices. 2. Spread butter on bread slices and apply the potato mixture. 3. Toast the bread on a pan until golden. 4. Serve hot with chutney or ketchup.",
    ],
    imageUrl: "https://cdn.tarladalal.com/members/9306/procstepimgs/masala_toast_dsc_7396-(2)-16-185296.jpg"
  },
  {
    name: "Egg Roll (Kolkata Style)",
    ingredients: ['EGGS', 'PARATHA', 'ONION', 'TOMATO', 'GREEN CHILIES', 'CHAAT MASALA', 'GARAM MASALA', 'SAUCE'],
    preparationTime: "15 minutes",
    cookingTime: "15 minutes",
    dishType: "Egg Dish",
    cuisine: "Indian",
    steps: [
      "Prepare parathas. Chop onions, tomatoes, and chilies.",
      "1. Heat oil in a pan and scramble the eggs with spices. 2. Place the scrambled eggs on a paratha, top with onions, tomatoes, and green chilies. 3. Roll it up and serve hot with sauce.",
    ],
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhP-bfUH4VHlLj3BgcL1zM1Jd3CO1T7AvAdA&s"
  },
  {
    name: "Chicken Shawarma",
    ingredients: ['CHICKEN', 'YOGURT', 'LEMON', 'GARLIC', 'CUMIN', 'PAPRIKA', 'TURMERIC', 'CORIANDER', 'PITA BREAD'],
    preparationTime: "20 minutes",
    cookingTime: "25 minutes",
    dishType: "Chicken Dish",
    cuisine: "Middle Eastern",
    steps: [
      "Marinate chicken with yogurt, garlic, and spices.",
      "1. Marinate chicken in yogurt, lemon juice, garlic, and spices for 2 hours. 2. Grill or roast the chicken until cooked through. 3. Slice the chicken and serve in pita bread with veggies and sauces.",
    ],
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeIPgm6k3dhLRMsYcOl97_7sE7wYP0medhmg&s"
  },
  {
    name: "Veg Frankie",
    ingredients: ['PARATHA', 'PANEER', 'ONION', 'TOMATO', 'GREEN CHILIES', 'CHAAT MASALA', 'GARAM MASALA', 'SAUCE'],
    preparationTime: "15 minutes",
    cookingTime: "15 minutes",
    dishType: "Snack",
    cuisine: "Indian",
    steps: [
      "Prepare parathas. Chop onions, tomatoes, and chilies.",
      "1. Sauté paneer with onions, tomatoes, and spices. 2. Place the mixture in a paratha and roll it up. 3. Serve hot with sauce or chutney.",
    ],
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiFd2D4H51WXz0ysakRvJ1xhJ2oyx3aIBt8g&s"
  },
  {
    name: "Chicken Frankie",
    ingredients: ['PARATHA', 'CHICKEN', 'ONION', 'TOMATO', 'GREEN CHILIES', 'CHAAT MASALA', 'GARAM MASALA', 'SAUCE'],
    preparationTime: "15 minutes",
    cookingTime: "20 minutes",
    dishType: "Chicken Dish",
    cuisine: "Indian",
    steps: [
      "Prepare parathas. Chop onions, tomatoes, and chilies.",
      "1. Cook chicken with onions, tomatoes, and spices. 2. Place the chicken mixture in a paratha and roll it up. 3. Serve with sauce or chutney.",
    ],
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiFd2D4H51WXz0ysakRvJ1xhJ2oyx3aIBt8g&s"
  },
  {
    name: "Veg Lasagna",
    ingredients: ['LASAGNA SHEETS', 'TOMATO SAUCE', 'SPINACH', 'MUSHROOMS', 'CHEESE', 'GARLIC', 'ONION', 'OLIVE OIL'],
    preparationTime: "20 minutes",
    cookingTime: "30 minutes",
    dishType: "Main Course",
    cuisine: "Italian",
    steps: [
      "Prepare tomato sauce. Chop vegetables.",
      "1. Boil lasagna sheets. 2. Prepare the tomato sauce with garlic, onion, and spices. 3. Layer the lasagna with tomato sauce, vegetables, and cheese. 4. Bake in the oven until golden and bubbly. 5. Serve hot.",
    ],
    imageUrl: "https://cdn.loveandlemons.com/wp-content/uploads/2023/12/vegetarian-lasagna-scaled.jpg"
  },
  {
    name: "Chicken Lasagna",
    ingredients: ['LASAGNA SHEETS', 'CHICKEN', 'TOMATO SAUCE', 'CHEESE', 'GARLIC', 'ONION', 'OLIVE OIL'],
    preparationTime: "20 minutes",
    cookingTime: "30 minutes",
    dishType: "Main Course",
    cuisine: "Italian",
    steps: [
      "Prepare chicken filling. Chop garlic and onion.",
      "1. Boil lasagna sheets and prepare the chicken filling with tomato sauce and spices. 2. Layer the lasagna with chicken, tomato sauce, and cheese. 3. Bake in the oven until golden. 4. Serve hot.",
    ],
    imageUrl: "https://cdn.loveandlemons.com/wp-content/uploads/2023/12/vegetarian-lasagna-scaled.jpg"
  },
  {
    name: "Hakka Chilli Potato",
    ingredients: ['POTATO', 'CORN FLOUR', 'SOY SAUCE', 'CHILI SAUCE', 'GARLIC', 'GREEN CHILIES', 'ONION', 'VINEGAR'],
    preparationTime: "15 minutes",
    cookingTime: "15 minutes",
    dishType: "Vegetable Dish",
    cuisine: "Chinese",
    steps: [
      "Boil and fry potatoes. Prepare sauce mixture.",
      "1. Fry the boiled potatoes until crispy. 2. Sauté garlic, green chilies, and onions. 3. Add the fried potatoes and toss with soy sauce, chili sauce, and vinegar. 4. Serve hot.",
    ],
    imageUrl: "https://www.hookedonheat.com/wp-content/uploads/2021/09/Chilli-Potatoes-HOHV.jpg"
  },
  {
    name: "Mango Shake",
    ingredients: ['MANGO', 'MILK', 'SUGAR', 'ICE CREAM'],
    preparationTime: "5 minutes",
    cookingTime: "5 minutes",
    dishType: "Drink",
    cuisine: "Indian",
    steps: [
      "Peel and chop mangoes. Blend ingredients.",
      "1. Blend mangoes with milk, sugar, and ice cream until smooth. 2. Serve chilled.",
    ],
    imageUrl: "https://www.indianhealthyrecipes.com/wp-content/uploads/2021/04/mango-milkshake-recipe.jpg"
  },
  {
    name: "Rose Milk",
    ingredients: ['ROSE SYRUP', 'MILK', 'SUGAR', 'ICE'],
    preparationTime: "5 minutes",
    cookingTime: "5 minutes",
    dishType: "Drink",
    cuisine: "Indian",
    steps: [
      "Mix rose syrup with milk. Add sugar if desired.",
      "1. Mix rose syrup with milk and sugar. 2. Add ice cubes and serve chilled.",
    ],
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRt_rAnk-Ju1dZODfz3YJXMHzxyr3GA5RhTvw&s"
  },
  {
    name: "Badam Milk",
    ingredients: ['ALMONDS', 'MILK', 'SUGAR', 'CARDAMOM', 'SAFFRON'],
    preparationTime: "10 minutes",
    cookingTime: "15 minutes",
    dishType: "Drink",
    cuisine: "Indian",
    steps: [
      "Soak almonds overnight. Blend almonds and milk.",
      "1. Soak almonds overnight and grind into a paste. 2. Heat milk and add the almond paste, sugar, cardamom, and saffron. 3. Boil for a few minutes and serve warm.",
    ],
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTds5AThoT8SExkYiKl3aLhmP18sHLXWChxQg&s"
  },
  {
    name: "Falooda",
    ingredients: ['FALOODA SEV', 'ROSE SYRUP', 'MILK', 'ICE CREAM', 'BASIL SEEDS'],
    preparationTime: "15 minutes",
    cookingTime: "10 minutes",
    dishType: "Drink",
    cuisine: "Indian",
    steps: [
      "Soak basil seeds. Prepare falooda sev.",
      "1. Boil falooda sev and soak basil seeds. 2. In a glass, layer falooda sev, rose syrup, and milk. 3. Add ice cream and basil seeds. 4. Serve chilled.",
    ],
    imageUrl: "https://www.indianhealthyrecipes.com/wp-content/uploads/2021/05/falooda-faluda-recipe.jpg"
  },
];
module.exports = { ingredients, recipes };
