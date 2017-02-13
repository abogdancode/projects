/**
 * Created by AlexBogdan on 13.02.2017.
 */
class Events extends AllServices{

  constructor(type, name,smallImage,cost,shortDescription,
              detailedDescription, photoImg1,photoImg2,photoImg3,table){
    super(type, name,smallImage,cost,shortDescription);
    this.detailedDescription = detailedDescription;
    this.photoImg1 =  photoImg1;
    this.photoImg2 = photoImg2;
    this.photoImg3 =  photoImg3;
    this.table =  table;
    this.open = (container)=>{
      return this;
    }
  }
}

class ChildrenEvents extends Events{
  constructor(type, name,smallImage,cost,shortDescription,
              detailedDescription, photoImg1,photoImg2,photoImg3,table) {
    super(type, name, smallImage, cost, shortDescription,detailedDescription,
      photoImg1,photoImg2,photoImg3,table);
  }
}

class Weddings extends Events{
  constructor(type, name,smallImage,cost,shortDescription,
              detailedDescription, photoImg1,photoImg2,photoImg3,table) {
    super(type, name, smallImage, cost, shortDescription,detailedDescription,
      photoImg1,photoImg2,photoImg3,table);
  }
}
