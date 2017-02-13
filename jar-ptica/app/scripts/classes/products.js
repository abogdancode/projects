/**
 * Created by AlexBogdan on 13.02.2017.
 */

class Products extends AllServices{

  constructor(type, name,smallImage,cost,shortDescription,
              detailedDescription, photoImg1,photoImg2,productList){
    super(type, name,smallImage,cost,shortDescription);
    this.detailedDescription = detailedDescription;
    this.photoImg1 =  photoImg1;
    this.photoImg2 = photoImg2;
    this.productList = productList;
    this.open = (container)=>{
      let popup = new ListOfProducts(this.productList);
      popup.appendToElement(container);
      return this.productList;
    }
  }
}
class BalloonsAndDecor extends Products{
  constructor(type, name,smallImage,cost,shortDescription,
              detailedDescription, photoImg1,photoImg2,productList) {
    super(type, name,smallImage,cost,shortDescription,
      detailedDescription, photoImg1,photoImg2,productList);
  }
}
class DecorElements extends Products{
  constructor(type, name,smallImage,cost,shortDescription,
              detailedDescription, photoImg1,photoImg2,productList) {
    super(type, name,smallImage,cost,shortDescription,
      detailedDescription, photoImg1,photoImg2,productList);
  }
}
