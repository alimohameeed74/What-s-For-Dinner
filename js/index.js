// Define Main Variables
var photoTag= document.getElementById('food-photo');
var rate= document.getElementById('rating-information');
var info1= document.getElementById('info1');
var info2= document.getElementById('info2');
var info3= document.getElementById('info3');
var sharedPhotoURL='photo-';
var photoIndex=0;
var ratingBlackBox='';





var arrOfRatings=[
    [4.5,156],[4.7,367],[4.4,198],[4.7,267],[4.8,445],[4.7,312],[4.9,187],[4.5,189],
    [4.7,412],[4.7,412],[4.7,389],[4.6,421],[4.9,512],[4.9,478],[4.6,289],[4.8,234],
    [4.5,324],[4.8,234],[4.8,356],
]

var arrOfInfo=[[20,35,2],[15,20,2],[15,0,2],[15,60,4],[20,15,2],[15,25,4],[15,20,7],[10,5,2],[15,240,4],[15,20,4],
            [20,30,4],[15,20,4],[90, 12, 2],
            [30,90,4],[20,30,4],[30,60,4],[15,15,4],[15,20,4],[10,15,2],
]






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
}









// Start Main Logic
init();