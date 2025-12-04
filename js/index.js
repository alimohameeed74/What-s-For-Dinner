// Define Main Variables
var photoTag= document.getElementById('food-photo');
var rate= document.getElementById('rating-information');
var info1= document.getElementById('info1');
var info2= document.getElementById('info2');
var info3= document.getElementById('info3');
var signs= document.getElementById('signs');
var title= document.getElementById('title');
var foodDes= document.getElementById('food-p');
var warningNote= document.getElementById('warning-p');
var ingredientsTab = document.getElementById('Ingredients-tab-pane');
var instructionsTab = document.getElementById('Instructions-tab-pane');
var nutritionTab = document.getElementById('Nutrition-content');
var sharedPhotoURL='photo-';
var photoIndex=0;
var ratingBlackBox='';
var signsBlackBox='';
var foodTitle='';
var foodP='';
var ingredientsTabBlackBox='';
var instructionsTabBlackBox='';
var nutritionTabBlackBox='';





var arrOfRatings=[
    [4.5,156],[4.7,367],[4.4,198],[4.7,267],[4.8,445],[4.7,312],[4.9,187],[4.5,189],
    [4.7,412],[4.7,412],[4.7,389],[4.6,421],[4.9,512],[4.9,478],[4.6,289],[4.8,234],
    [4.5,324],[4.8,234],[4.8,356],
]

var arrOfInfo=[[20,35,2],[15,20,2],[15,0,2],[15,60,4],[20,15,2],[15,25,4],[15,20,7],[10,5,2],[15,240,4],[15,20,4],
            [20,30,4],[15,20,4],[90, 12, 2],
            [30,90,4],[20,30,4],[30,60,4],[15,15,4],[15,20,4],[10,15,2],
]

var arrOfSigns=[
    ['Easy','Mediterranean'],             // 0
    ['Easy','Asian'],                     // 1
    ['Easy','Mediterranean'],             // 2
    ['Intermediate','Mediterranean'],     // 3
    ['Intermediate','Asian'],             // 4
    ['Intermediate','Asian'],             // 5
    ['Easy','Seafood'],                  // 6
    ['Easy','Italian'],                  // 7
    ['Easy','American'],                 // 8
    ['Easy','American'],                 // 9
    ['Intermediate','Asian'],            // 10
    ['Easy','American'],                 // 11
    ['Intermediate','Italian'],           // 12
    ['Intermediate','Italian'],           // 13
    ['Easy','Asian'],                     // 14
    ['Intermediate','Mediterranean'] ,    // 15
    ['Easy','Asian']     ,                // 16
    ['Easy','Italian'],                  // 17
    ['Easy','Seafood'],                  // 18
]


var arrOfTitles=[
    'Mediterranean Quinoa Bowl',         // 0
    'Teriyaki Chicken Bowl',             // 1
    'Caesar Salad',                      // 2
    'French Onion Soup',                 // 3
    'Pad Thai',                          // 4
    'Thai Green Curry',                  // 5
    'Honey Garlic Salmon' ,              // 6
    'Caprese Sandwich' ,                 // 7
    'BBQ Pulled Pork',                   // 8
    'Beef Tacos',                        // 9
    'Chicken Tikka Masala',              // 10
    'Classic Beef Burger',               // 11
    'Margherita Pizza',                  // 12
    'Lasagna Bolognese',                 // 13
    'Vegetable Curry',                   // 14
    'Greek Moussaka',                    // 15
    'Chicken Stir-Fry',                  // 16
    'Creamy Spaghetti Carbonara',        // 17
    'Shrimp Scampi',                     // 18
]


var arrOfDes=[
    'Healthy bowl with quinoa, vegetables, and tahini dressing',    //0
    'Sweet and savory chicken over rice with vegetables',           //1
    'Classic salad with crispy romaine and creamy dressing',        //2
    'Rich beef broth with caramelized onions and melted cheese',    //3
    'Popular Thai stir-fried noodles with shrimp and peanuts',      //4
    'Vibrant and aromatic curry with vegetables and coconut milk',  //5
    'Pan-seared salmon with a sweet and savory glaze',              //6
    'Fresh Italian sandwich with mozzarella, tomato, and basil',    //7
    'Slow-cooked tender pork in smoky barbecue sauce',              //8
    'Flavorful Mexican tacos with seasoned ground beef',            //9
    'Rich and creamy Indian curry with tender chicken pieces',      //10
    'Juicy homemade burger with all the fixings',                   //11
    'Classic Italian pizza with fresh mozzarella and basil',        //12
    'Layered Italian pasta with rich meat sauce and béchamel',      //13
    'Hearty vegetarian curry with coconut milk',                    //14
    'Traditional layered eggplant casserole with lamb',             //15
    'Quick and healthy stir-fry with colorful vegetables',          //16
    'A classic Italian pasta dish with eggs, cheese, and pancetta', //17
    'Garlicky shrimp in white wine butter sauce',                   //18
]

var arrOfIngredients = [
  [
    "1 cup quinoa",
    "Cherry tomatoes, halved",
    "Cucumber, diced",
    "Red onion, sliced",
    "Kalamata olives",
    "Feta cheese, crumbled",
    "Fresh parsley",
    "Tahini dressing"
  ], // 0

  [
    "400g chicken thighs, sliced",
    "1/2 cup teriyaki sauce",
    "2 cups cooked rice",
    "1 broccoli head, florets",
    "1 carrot, julienned",
    "Sesame seeds",
    "Green onions, sliced",
    "1 tablespoon sesame oil"
  ], // 1

  [
    "1 large romaine lettuce",
    "1/2 cup Caesar dressing",
    "1/2 cup parmesan cheese, shaved",
    "1 cup croutons",
    "2 anchovy fillets (optional)",
    "Lemon wedges",
    "Black pepper"
  ], // 2

  [
    "4 large onions, thinly sliced",
    "4 tablespoons butter",
    "1 liter beef broth",
    "1/2 cup white wine",
    "2 bay leaves",
    "Fresh thyme",
    "Baguette slices",
    "200g Gruyère cheese, grated"
  ], // 3

  [
    "200g rice noodles",
    "200g shrimp, peeled",
    "2 eggs",
    "3 tablespoons tamarind paste",
    "2 tablespoons fish sauce",
    "1 tablespoon palm sugar",
    "Bean sprouts",
    "Crushed peanuts",
    "Lime wedges and cilantro"
  ], // 4

  [
    "2 tablespoons green curry paste",
    "400ml coconut milk",
    "300g chicken breast, sliced",
    "1 red bell pepper, sliced",
    "100g green beans",
    "1 eggplant, cubed",
    "2 tablespoons fish sauce",
    "1 tablespoon palm sugar",
    "Fresh Thai basil leaves"
  ], // 5

  [
    "2 salmon fillets (6oz each)",
    "3 tablespoons honey",
    "2 tablespoons soy sauce",
    "4 cloves garlic, minced",
    "1 tablespoon olive oil",
    "1 teaspoon fresh ginger, grated",
    "Sesame seeds for garnish",
    "Green onions, sliced"
  ], // 6

  [
    "1 ciabatta bread",
    "200g fresh mozzarella, sliced",
    "2 large tomatoes, sliced",
    "Fresh basil leaves",
    "3 tablespoons pesto",
    "2 tablespoons balsamic glaze",
    "Olive oil",
    "Salt and pepper"
  ], // 7

  [
    "1kg pork shoulder",
    "1 cup BBQ sauce",
    "1/2 cup apple cider vinegar",
    "2 tablespoons brown sugar",
    "1 tablespoon paprika",
    "1 tablespoon garlic powder",
    "Burger buns",
    "Coleslaw for serving"
  ], // 8

  [
    "500g ground beef",
    "8 taco shells",
    "1 onion, diced",
    "2 tablespoons taco seasoning",
    "Shredded lettuce",
    "Diced tomatoes",
    "Shredded cheddar cheese",
    "Sour cream",
    "Salsa"
  ], // 9

  [
    "600g chicken breast, cubed",
    "1 cup plain yogurt",
    "2 tablespoons tikka masala paste",
    "400ml coconut cream",
    "1 onion, diced",
    "4 cloves garlic, minced",
    "2 tablespoons ginger, grated",
    "400g canned tomatoes",
    "Fresh cilantro for garnish"
  ], // 10

  [
    "500g ground beef (80/20)",
    "4 burger buns",
    "4 slices cheddar cheese",
    "Lettuce leaves",
    "Tomato slices",
    "Red onion, sliced",
    "Pickles",
    "Burger sauce or condiments"
  ], // 11

  [
    "300g pizza dough",
    "200g crushed tomatoes",
    "250g fresh mozzarella",
    "Fresh basil leaves",
    "2 tablespoons olive oil",
    "2 cloves garlic, minced",
    "Salt and pepper to taste",
    "Parmesan cheese for topping"
  ], // 12

  [
    "12 lasagna sheets",
    "500g ground beef",
    "400g canned tomatoes",
    "1 onion, diced",
    "2 carrots, diced",
    "500ml béchamel sauce",
    "200g mozzarella, grated",
    "100g parmesan cheese",
    "Fresh basil"
  ], // 13

  [
    "2 potatoes, cubed",
    "1 cauliflower, florets",
    "2 carrots, sliced",
    "1 can chickpeas",
    "400ml coconut milk",
    "3 tablespoons curry powder",
    "1 onion, diced",
    "3 cloves garlic, minced",
    "Fresh spinach"
  ], // 14

  [
    "3 large eggplants, sliced",
    "500g ground lamb",
    "400g canned tomatoes",
    "1 onion, diced",
    "3 cloves garlic, minced",
    "500ml béchamel sauce",
    "100g parmesan cheese",
    "Cinnamon and oregano",
    "Olive oil"
  ], // 15

  [
    "500g chicken breast, sliced",
    "2 bell peppers, sliced",
    "1 broccoli head, florets",
    "2 carrots, julienned",
    "3 tablespoons soy sauce",
    "2 tablespoons oyster sauce",
    "1 tablespoon sesame oil",
    "2 cloves garlic, minced",
    "Fresh ginger, grated"
  ], // 16

  [
    "400g spaghetti pasta",
    "200g pancetta or guanciale, diced",
    "4 large eggs",
    "100g Pecorino Romano cheese, grated",
    "50g Parmesan cheese, grated",
    "Freshly ground black pepper",
    "Salt for pasta water"
  ], // 17

  [
    "400g large shrimp, peeled",
    "300g linguine pasta",
    "6 cloves garlic, minced",
    "1/2 cup white wine",
    "4 tablespoons butter",
    "2 tablespoons olive oil",
    "Fresh parsley, chopped",
    "Lemon juice and zest",
    "Red pepper flakes"
  ] // 18
];


var arrOfInstructions = [
  // 0
  [
    "Rinse quinoa thoroughly. Cook according to package directions, usually 15 minutes.",
    "While quinoa cooks, prepare all vegetables and set aside.",
    "For tahini dressing: mix tahini, lemon juice, garlic, and water until smooth.",
    "Fluff cooked quinoa with a fork and let cool slightly.",
    "Arrange quinoa in bowls. Top with tomatoes, cucumber, onion, and olives.",
    "Sprinkle with feta cheese and fresh parsley. Drizzle with tahini dressing.",
  ],

  // 1
  [
    "Heat sesame oil in a pan. Cook chicken until browned on all sides.",
    "Add teriyaki sauce to chicken, simmer for 5 minutes until sauce thickens.",
    "Meanwhile, steam broccoli and carrots until tender-crisp.",
    "Divide rice between bowls.",
    "Top with teriyaki chicken and steamed vegetables.",
    "Garnish with sesame seeds and green onions. Serve hot.",
  ],

  // 2
  [
    "Wash and dry romaine lettuce thoroughly. Tear into bite-sized pieces.",
    "Place lettuce in a large salad bowl.",
    "Add Caesar dressing and toss until evenly coated.",
    "Add croutons and half the parmesan cheese. Toss gently.",
    "Top with remaining parmesan shavings and anchovies if using.",
    "Serve immediately with lemon wedges and fresh black pepper.",
  ],

  // 3
  [
    "Melt butter in a large pot. Add onions and cook slowly for 40 minutes, stirring occasionally until caramelized.",
    "Add white wine and deglaze the pot, scraping up brown bits.",
    "Pour in beef broth, add bay leaves and thyme. Simmer for 20 minutes.",
    "Meanwhile, toast baguette slices until golden.",
    "Ladle soup into oven-safe bowls. Top with toasted bread and cheese.",
    "Broil for 3-5 minutes until cheese is melted and bubbly. Serve hot.",
  ],

  // 4
  [
    "Soak rice noodles in warm water for 30 minutes. Drain and set aside.",
    "Mix tamarind paste, fish sauce, and palm sugar to make the sauce.",
    "Heat wok over high heat. Scramble eggs and set aside.",
    "Cook shrimp until pink. Add noodles and sauce, toss for 2-3 minutes.",
    "Add scrambled eggs and bean sprouts. Toss everything together.",
    "Serve topped with crushed peanuts, lime wedges, and cilantro.",
  ],

  // 5
  [
    "Heat a large pot or wok over medium heat. Add curry paste and cook for 1 minute until fragrant.",
    "Add half the coconut milk and stir to combine with the curry paste.",
    "Add sliced chicken and cook until no longer pink, about 5 minutes.",
    "Add remaining coconut milk, vegetables, fish sauce, and palm sugar.",
    "Simmer for 15-20 minutes until vegetables are tender and sauce has thickened.",
    "Stir in fresh Thai basil leaves. Serve hot with jasmine rice.",
  ],

  // 6
  [
    "Pat salmon fillets dry with paper towels. Season with salt and pepper.",
    "In a small bowl, whisk together honey, soy sauce, minced garlic, and grated ginger.",
    "Heat olive oil in a large skillet over medium-high heat.",
    "Place salmon fillets skin-side up in the pan. Cook for 4-5 minutes until golden.",
    "Flip salmon and pour honey garlic sauce over the top. Cook for another 4-5 minutes.",
    "Garnish with sesame seeds and sliced green onions. Serve with steamed vegetables or rice.",
  ],

  // 7
  [
    "Slice ciabatta bread in half horizontally.",
    "Toast bread lightly until just crispy.",
    "Spread pesto on both sides of bread.",
    "Layer mozzarella slices, tomato slices, and fresh basil leaves.",
    "Drizzle with olive oil and balsamic glaze. Season with salt and pepper.",
    "Close sandwich, cut in half, and serve immediately.",
  ],

  // 8
  [
    "Heat oil in a large pot. Sauté onion until soft, add garlic and curry powder, cook for 1 minute.",
    "Add potatoes and carrots, cook for 5 minutes.",
    "Pour in coconut milk and 1 cup water. Bring to simmer.",
    "Add cauliflower and chickpeas. Cook for 20 minutes until vegetables are tender.",
    "Stir in fresh spinach and cook until wilted.",
    "Serve hot over basmati rice or with naan bread.",
  ],

  // 9
  [
    "Heat a large skillet over medium-high heat. Cook ground beef until browned.",
    "Add diced onion and cook until softened, about 5 minutes.",
    "Stir in taco seasoning and 1/2 cup water. Simmer for 10 minutes.",
    "Warm taco shells according to package directions.",
    "Fill each shell with seasoned beef.",
    "Top with lettuce, tomatoes, cheese, sour cream, and salsa. Serve immediately.",
  ],

  // 10
  [
    "Marinate chicken in half the yogurt and 1 tablespoon tikka paste for at least 30 minutes.",
    "Heat oil in a large pan, cook marinated chicken until browned. Remove and set aside.",
    "In the same pan, sauté onion until soft. Add garlic and ginger, cook for 1 minute.",
    "Add remaining tikka paste and canned tomatoes. Simmer for 10 minutes.",
    "Stir in coconut cream and remaining yogurt. Add chicken back to the pan.",
    "Simmer for 15 minutes until sauce thickens. Garnish with cilantro and serve with rice.",
  ],

  // 11
  [
    "Divide ground beef into 4 equal portions. Form into patties, making a small indent in the center.",
    "Season patties generously with salt and pepper on both sides.",
    "Heat a grill or skillet over high heat. Cook patties for 4-5 minutes per side for medium.",
    "Add cheese slices in the last minute of cooking and cover to melt.",
    "Toast burger buns lightly on the grill or in a pan.",
    "Assemble burgers with lettuce, tomato, onion, pickles, and your favorite sauce.",
  ],

  // 12
  [
    "Let pizza dough come to room temperature and rest for 1 hour.",
    "Preheat oven to maximum temperature (usually 250°C/480°F).",
    "Mix crushed tomatoes with olive oil, garlic, salt, and pepper for the sauce.",
    "Roll out dough on a floured surface to desired thickness.",
    "Spread tomato sauce, add torn mozzarella pieces, and drizzle with olive oil.",
    "Bake for 10-12 minutes until crust is golden. Top with fresh basil and parmesan.",
  ],

  // 13
  [
    "Cook ground beef with onion and carrots until browned. Add tomatoes and simmer for 30 minutes.",
    "Cook lasagna sheets according to package directions. Drain and set aside.",
    "Preheat oven to 180°C (350°F).",
    "In a baking dish, layer: meat sauce, lasagna sheets, béchamel sauce. Repeat 3-4 times.",
    "Top with béchamel, mozzarella, and parmesan cheese.",
    "Bake for 45 minutes until golden and bubbly. Let rest 10 minutes before serving.",
  ],

  // 14
  [
    "Heat oil in a large pot. Sauté onion until soft, add garlic and curry powder, cook for 1 minute.",
    "Add potatoes and carrots, cook for 5 minutes.",
    "Pour in coconut milk and 1 cup water. Bring to simmer.",
    "Add cauliflower and chickpeas. Cook for 20 minutes until vegetables are tender.",
    "Stir in fresh spinach and cook until wilted.",
    "Serve hot over basmati rice or with naan bread.",
  ],

  // 15
  [
    "Slice eggplants, salt them, and let sit for 30 minutes. Rinse and pat dry.",
    "Brush eggplant slices with olive oil, grill or bake until softened.",
    "Cook ground lamb with onion and garlic. Add tomatoes, cinnamon, oregano. Simmer 20 minutes.",
    "Preheat oven to 180°C (350°F).",
    "Layer in baking dish: eggplant, meat sauce, eggplant, meat sauce. Top with béchamel and parmesan.",
    "Bake for 45 minutes until golden. Let rest 15 minutes before serving.",
  ],

  // 16
  [
    "Mix soy sauce, oyster sauce, and sesame oil for the sauce.",
    "Heat wok over high heat with oil. Cook chicken until golden, remove and set aside.",
    "Add more oil if needed. Stir-fry garlic and ginger for 30 seconds.",
    "Add vegetables, starting with hardest ones (carrots, broccoli). Cook for 3-4 minutes.",
    "Return chicken to wok, add bell peppers and sauce. Toss for 2 minutes.",
    "Serve immediately over steamed rice or noodles.",
  ],

  // 17
  [
    "Bring a large pot of salted water to boil. Cook spaghetti according to package directions until al dente.",
    "While pasta cooks, heat a large skillet over medium heat. Add diced pancetta and cook until crispy, about 5-7 minutes.",
    "In a bowl, whisk together eggs, grated Pecorino Romano, and Parmesan cheese. Add plenty of freshly ground black pepper.",
    "Reserve 1 cup of pasta cooking water before draining. Drain pasta and immediately add to the skillet with pancetta.",
    "Remove skillet from heat. Quickly pour in egg mixture while tossing pasta vigorously. Add reserved pasta water as needed to create a creamy sauce.",
    "Serve immediately with extra cheese and black pepper on top. Enjoy your authentic carbonara!",
  ],

  // 18
  [
    "Cook linguine according to package directions. Reserve 1 cup pasta water.",
    "Heat olive oil and 2 tablespoons butter in a large pan. Add garlic and red pepper flakes, cook for 1 minute.",
    "Add shrimp, cook until pink on both sides, about 3-4 minutes. Remove and set aside.",
    "Add white wine to pan, simmer for 2 minutes. Add remaining butter and lemon juice.",
    "Return shrimp to pan, add cooked pasta and toss. Add pasta water if needed.",
    "Garnish with parsley, lemon zest, and serve immediately.",
  ],
];


var arrOfNutrition = [
  // 0
  [
    ["Calories", '480 kcal','fa-fire'],
    ["Protein", '18g', 'fa-dumbbell'],
    ["Carbohydrates", '58g', 'fa-wheat-awn '],
    ["Fat", '20g','fa-droplet'],
    ["Fiber", '10g','fa-seedling'],
    ["Sodium" , '540mg','fa-cube']
  ],

  // 1
  [
    ["Calories", '540 kcal','fa-fire'],
    ["Protein", '42g', 'fa-dumbbell'],
    ["Carbohydrates", '58g', 'fa-wheat-awn '],
    ["Fat", '14g','fa-droplet'],
    ["Fiber", '4g','fa-seedling'],
    ["Sodium" , '1240mg','fa-cube']
  ],

  // 2
  [
    ["Calories", '320 kcal','fa-fire'],
    ["Protein", '12g', 'fa-dumbbell'],
    ["Carbohydrates", '18g', 'fa-wheat-awn '],
    ["Fat", '22g','fa-droplet'],
    ["Fiber", '3g','fa-seedling'],
    ["Sodium" , '680mg','fa-cube']
  ],

  // 3
  [
    ["Calories", '380 kcal','fa-fire'],
    ["Protein", '18g', 'fa-dumbbell'],
    ["Carbohydrates", '36g', 'fa-wheat-awn '],
    ["Fat", '18g','fa-droplet'],
    ["Fiber", '4g','fa-seedling'],
    ["Sodium" , '980mg','fa-cube']
  ],

  // 4
  [
    ["Calories", '540 kcal','fa-fire'],
    ["Protein", '32g', 'fa-dumbbell'],
    ["Carbohydrates", '62g', 'fa-wheat-awn '],
    ["Fat", '16g','fa-droplet'],
    ["Fiber", '4g','fa-seedling'],
    ["Sodium" , '1120mg','fa-cube']
  ],

  // 5
  [
    ["Calories", '420 kcal','fa-fire'],
    ["Protein", '26g', 'fa-dumbbell'],
    ["Carbohydrates", '22g', 'fa-wheat-awn '],
    ["Fat", '26g','fa-droplet'],
    ["Fiber", '5g','fa-seedling'],
    ["Sodium" , '890mg','fa-cube']
  ],

  // 6
  [
    ["Calories", '380 kcal','fa-fire'],
    ["Protein", '35g', 'fa-dumbbell'],
    ["Carbohydrates", '28g', 'fa-wheat-awn '],
    ["Fat", '14g','fa-droplet'],
    ["Fiber", '0g','fa-seedling'],
    ["Sodium" , '720mg','fa-cube']
  ],

  // 7
  [
    ["Calories", '480 kcal','fa-fire'],
    ["Protein", '22g', 'fa-dumbbell'],
    ["Carbohydrates", '48g', 'fa-wheat-awn '],
    ["Fat", '22g','fa-droplet'],
    ["Fiber", '3g','fa-seedling'],
    ["Sodium" , '680mg','fa-cube']
  ],

  // 8
  [
    ["Calories", '620 kcal','fa-fire'],
    ["Protein", '48g', 'fa-dumbbell'],
    ["Carbohydrates", '52g', 'fa-wheat-awn '],
    ["Fat", '22g','fa-droplet'],
    ["Fiber", '3g','fa-seedling'],
    ["Sodium" , '1180mg','fa-cube']
  ],

  // 9
  [
    ["Calories", '420 kcal','fa-fire'],
    ["Protein", '26g', 'fa-dumbbell'],
    ["Carbohydrates", '32g', 'fa-wheat-awn '],
    ["Fat", '20g','fa-droplet'],
    ["Fiber", '4g','fa-seedling'],
    ["Sodium" , '780mg','fa-cube']
  ],

  // 10
  [
    ["Calories", '450 kcal','fa-fire'],
    ["Protein", '38g', 'fa-dumbbell'],
    ["Carbohydrates", '24g', 'fa-wheat-awn '],
    ["Fat", '22g','fa-droplet'],
    ["Fiber", '4g','fa-seedling'],
    ["Sodium" , '760mg','fa-cube']
  ],

  // 11
  [
    ["Calories", '650 kcal','fa-fire'],
    ["Protein", '38g', 'fa-dumbbell'],
    ["Carbohydrates", '42g', 'fa-wheat-awn '],
    ["Fat", '35g','fa-droplet'],
    ["Fiber", '2g','fa-seedling'],
    ["Sodium" , '920mg','fa-cube']
  ],

  // 12
  [
    ["Calories", '580 kcal','fa-fire'],
    ["Protein", '24g', 'fa-dumbbell'],
    ["Carbohydrates", '68g', 'fa-wheat-awn '],
    ["Fat", '22g','fa-droplet'],
    ["Fiber", '4g','fa-seedling'],
    ["Sodium" , '920mg','fa-cube']
  ],

  // 13
  [
    ["Calories", '680 kcal','fa-fire'],
    ["Protein", '42g', 'fa-dumbbell'],
    ["Carbohydrates", '58g', 'fa-wheat-awn '],
    ["Fat", '28g','fa-droplet'],
    ["Fiber", '6g','fa-seedling'],
    ["Sodium" , '920mg','fa-cube']
  ],

  // 14
  [
    ["Calories", '380 kcal','fa-fire'],
    ["Protein", '14g', 'fa-dumbbell'],
    ["Carbohydrates", '48g', 'fa-wheat-awn '],
    ["Fat", '16g','fa-droplet'],
    ["Fiber", '12g','fa-seedling'],
    ["Sodium" , '480mg','fa-cube']
  ],

  // 15
  [
    ["Calories", '580 kcal','fa-fire'],
    ["Protein", '36g', 'fa-dumbbell'],
    ["Carbohydrates", '32g', 'fa-wheat-awn '],
    ["Fat", '32g','fa-droplet'],
    ["Fiber", '8g','fa-seedling'],
    ["Sodium" , '820mg','fa-cube']
  ],

  // 16
  [
    ["Calories", '320 kcal','fa-fire'],
    ["Protein", '34g', 'fa-dumbbell'],
    ["Carbohydrates", '18g', 'fa-wheat-awn '],
    ["Fat", '12g','fa-droplet'],
    ["Fiber", '5g','fa-seedling'],
    ["Sodium" , '840mg','fa-cube']
  ],

  // 17
  [
    ["Calories", '520 kcal','fa-fire'],
    ["Protein", '28g', 'fa-dumbbell'],
    ["Carbohydrates", '62g', 'fa-wheat-awn '],
    ["Fat", '18g','fa-droplet'],
    ["Fiber", '3g','fa-seedling'],
    ["Sodium" , '680mg','fa-cube']
  ],

  // 18
  [
    ["Calories", '520 kcal','fa-fire'],
    ["Protein", '36g', 'fa-dumbbell'],
    ["Carbohydrates", '54g', 'fa-wheat-awn '],
    ["Fat", '18g','fa-droplet'],
    ["Fiber", '3g','fa-seedling'],
    ["Sodium" , '620mg','fa-cube']
  ]
];





// Define Main Functions
function init(){
    photoIndex=Math.floor(arrOfRatings.length*(Math.random()));
    photoTag.setAttribute("src", `img/Photos/${sharedPhotoURL}${photoIndex}.avif`);
    ratingBlackBox=`
    <i class="fa-solid fa-star me-1"></i>
    <span id="rate" class="rate-num fw-semibold me-1"> ${arrOfRatings[photoIndex][0]} </span>
    <span id="reviews" class="reviews fw-normal">
      (${arrOfRatings[photoIndex][1]} reviews)
    </span>
    `
    signsBlackBox=`
    <span class="me-3 rounded-pill fw-semibold py-1 px-3 green-bg"
    >
    ${arrOfSigns[photoIndex][0]}
    </span>
    <span class="rounded-pill fw-semibold py-1 px-3 blue-bg">
    ${arrOfSigns[photoIndex][1]}

    </span>
    `;
    foodTitle=`${arrOfTitles[photoIndex]}`

    foodP= arrOfDes[photoIndex];

    if(arrOfInfo[photoIndex][0] + arrOfInfo[photoIndex][1] > 45){
        warningNote.classList.remove('d-none')
    }
    else{
        warningNote.classList.add('d-none')
    }
    loopOnIngredientsTab(arrOfIngredients[photoIndex]);
    loopOnInstructionsTab(arrOfInstructions[photoIndex]);
    loopOnNutritionTab(arrOfNutrition[photoIndex]);

    assignChangings();
   

}


function getAnotherFood(){

    photoIndex=Math.floor(arrOfRatings.length*(Math.random()));
    photoTag.setAttribute("src", `img/Photos/${sharedPhotoURL}${photoIndex}.avif`);
    // window.scrollTo({ top: 0, behavior: "smooth" });
    ratingBlackBox=`
    <i class="fa-solid fa-star me-1"></i>
    <span id="rate" class="rate-num fw-semibold me-1"> ${arrOfRatings[photoIndex][0]} </span>
    <span id="reviews" class="reviews fw-normal">
      (${arrOfRatings[photoIndex][1]} reviews)
    </span>
    `
    signsBlackBox=`
    <span class="me-3 rounded-pill fw-semibold py-1 px-3 green-bg"
    >
    ${arrOfSigns[photoIndex][0]}
    </span>
    <span class="rounded-pill fw-semibold py-1 px-3 blue-bg">
    ${arrOfSigns[photoIndex][1]}

    </span>
    `;
    foodTitle=`${arrOfTitles[photoIndex]}`

    foodP= arrOfDes[photoIndex];

    if(arrOfInfo[photoIndex][0] + arrOfInfo[photoIndex][1] > 45){
        warningNote.classList.remove('d-none')
    }
    else{
        warningNote.classList.add('d-none')
    }

    loopOnIngredientsTab(arrOfIngredients[photoIndex]);
    loopOnInstructionsTab(arrOfInstructions[photoIndex]);
    loopOnNutritionTab(arrOfNutrition[photoIndex]);
    assignChangings();
}


function assignChangings(){
    rate.innerHTML=ratingBlackBox;
    info1.innerHTML=`
    ${arrOfInfo[photoIndex][0]} min
    `
    info2.innerHTML=`
    ${arrOfInfo[photoIndex][1]} min
    `
    info3.innerHTML=`
    ${arrOfInfo[photoIndex][2]} people
    `
    signs.innerHTML=signsBlackBox;
    title.innerHTML=foodTitle;
    foodDes.innerHTML=foodP;
    ingredientsTab.innerHTML=ingredientsTabBlackBox;
    instructionsTab.innerHTML=instructionsTabBlackBox;
    nutritionTab.innerHTML=nutritionTabBlackBox;
}


function loopOnIngredientsTab(arr){
    ingredientsTabBlackBox='';
    for (let i=0;i<arr.length;i++){
        ingredientsTabBlackBox+=`
        <div
            class="Ingredients-item mb-3 d-flex justify-content-start align-items-center"
          >
            <span
              class="me-2 p-2 Ingredients-item-n fw-bold text-white rounded-circle d-flex justify-content-center align-items-center"
            >
              ${i+1}</span
            >
            <p class="Ingredients-item-p fw-normal mb-0">
              ${arr[i]}
            </p>
          </div>`
    }
}



function loopOnInstructionsTab(arr){
    instructionsTabBlackBox='';
    for (let i=0;i<arr.length;i++){
        instructionsTabBlackBox+=`
        <div
        class="Instructions-item mb-4 d-flex justify-content-start align-items-center"
        >
        <span
            class="me-2 Instructions-item-n fw-bold text-white rounded-4 d-flex"
        >
            ${i+1}</span
        >
        <p class="Instructions-item-p fw-normal mb-0">
            ${arr[i]}
        </p>
        </div>`
    }
}



function loopOnNutritionTab(arr){
    nutritionTabBlackBox='';
    for (let i=0;i<arr.length;i++){
        nutritionTabBlackBox+=`
        <div class="col-sm-6">
        <div
        class="p-3 Nutrition-item rounded-4 d-flex justify-content-start align-items-center"
        >
        <i
            class="fa-solid ${arr[i][2]} icon-adjustment me-3 rounded-3 d-flex align-items-center justify-content-center"
        ></i>
        <span class="Nutrition-item-name">${arr[i][0]}</span>
        <span class="Nutrition-item-quantity ms-auto">
            ${arr[i][1]} 
        </span>
        </div>
        </div>`
    }
}









// Start Main Logic
init();