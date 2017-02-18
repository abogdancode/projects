/**
 * Created by AlexBogdan on 15.02.2017.
 */
let screenWidth = $(window).width();

let productPopUpImgWidth = 300,
    chequerwise = true;


if (screenWidth>=992){
  productPopUpImgWidth = 300;
  chequerwise = true
} else{
  if (screenWidth<992){
    chequerwise = false
  }
}
