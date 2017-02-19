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
      executeIterator();
    };
    this.openDescription = (container, elem)=>{
      let popup = new ProductItemPopUp(this,elem);
      popup.appendToElement(container);
      executeIterator();
    };
    this.openNextDescription = (container, elem)=>{
      let nextIndex = elem.indexOf(this);
      if(nextIndex == elem.length-1)
        nextIndex = 0;
      else
        nextIndex++;
      let popup = new ProductItemPopUp(elem[nextIndex],elem);
      container.empty();
      popup.appendToElement(container,'right');
    };
    this.openPrevDescription = (container, elem)=>{
      let prevIndex = elem.indexOf(this);
      if(prevIndex == 0)
        prevIndex = elem.length-1;
      else
        prevIndex--;
      let popup = new ProductItemPopUp(elem[prevIndex],elem);
      container.empty();
      popup.appendToElement(container,'left');
    };


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
