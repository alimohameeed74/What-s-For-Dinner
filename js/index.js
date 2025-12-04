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
var sharedPhotoURL='photo-';
var photoIndex=0;
var ratingBlackBox='';
var signsBlackBox='';
var foodTitle='';
var foodP='';
var ingredientsTabBlackBox='';





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


var recipeObject=
    {
        photoURL: '',
        ratings: [],
        infoArr: [],
        content: {
            signs: [],
            title: '',
            des: '',
            isExtendedPreparationTime: function(){
                return true;
            },
            ingredients: [],
            instructions: [],
            nutrition: [],
            chefTips:[],
        },
    }







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
    loopOningredientsTab(arrOfIngredients[photoIndex]);


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

    loopOningredientsTab(arrOfIngredients[photoIndex]);



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
}

function loopOningredientsTab(arr){
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









// Start Main Logic
init();