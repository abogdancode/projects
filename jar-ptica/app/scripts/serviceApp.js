/**
 * Created by AlexBogdan on 08.02.2017.
 */
let balloonFigures = balloonFiguresMod(),
    decorElements = decorElementsMod(),
    serviceList = serviceListMod();

class AllServices {
  constructor(type, name,smallImage,cost,shortDescription){
    this.type = type;
    this.name = name;
    this.smallImage = smallImage ;
    this.cost = cost;
    this.shortDescription = shortDescription;
  }
}
/*------------------------------Events----------------------------------------*/
class Events extends AllServices{

  constructor(type, name,smallImage,cost,shortDescription,
              detailedDescription, photoImg1,photoImg2,photoImg3,table){
    super(type, name,smallImage,cost,shortDescription);
      this.detailedDescription = detailedDescription;
      this.photoImg1 =  photoImg1;
      this.photoImg2 = photoImg2;
      this.photoImg3 =  photoImg3;
      this.table =  table;
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
/*------------------------------END Events----------------------------------------*/

/*------------------------------Products----------------------------------------*/

class Products extends AllServices{

  constructor(type, name,smallImage,cost,shortDescription,
              detailedDescription, photoImg1,photoImg2,productList){
    super(type, name,smallImage,cost,shortDescription);
    this.detailedDescription = detailedDescription;
    this.photoImg1 =  photoImg1;
    this.photoImg2 = photoImg2;
    this.productList = productList;
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




/*------------------------------END Prooducts----------------------------------------*/

class DataError{
  constructor(message, data){
    this.message = message;
    this.data = data;
  }
}


class ServicesDataService{

  constructor(){
    this.childrenEvents = [];
    this.weddings = [];
    this.balloonsAndDecor = [];
//    this.decorElements = [];
    this.errors = [];
  }

  getServiceByProp(serviceName,property,propertyValue){
    return this[serviceName].find(function (event) {
      return event[property] === propertyValue;
    });
  }

  getServicesSortedByPrice(serviceType){
    return this[serviceType].sort(function (elem1, elem2) {
      if (elem1.cost < elem2.cost)
        return -1;
      if (elem1.cost > elem2.cost)
        return 1;
      return 0;
    });
  }
  filterServicesByProp(serviceName,property,filterValue){
    return this[serviceName].filter(elem => elem[property].indexOf(filterValue)>=0);
  }

  loadData(servicesList){
    for(let data of servicesList){
      switch(data.type){
        case 'Детские мероприятия':
          if (this.validateData(data)){
            let event = this.loadEvents(data);
            if (event)
              this.childrenEvents.push(event);
          } else{
            let e = new DataError('неверные данные детского мероприятия',data);
            this.errors.push(e);
          }

              break;
        case 'Свадьбы':
          if (this.validateData(data)){
            let event = this.loadEvents(data);
            if(event)
            this.weddings.push(event);
            break;
          }else{
            let e = new DataError('неверные данные свадебного мероприятия',data);
            this.errors.push(e);
          }
              break;

        case 'Шары и оформление':
          if (this.validateData(data)){
            let product = this.loadProductData(data);
            if(product)
              this.balloonsAndDecor.push(product);
            break;
          }else{
            let e = new DataError('неверные данные шаров и оформлений',data);
            this.errors.push(e);
          }
          break;
        /*case 'Элементы оформленния':
          if (this.validateProduct(data)){

            let product = this.loadProductData(data);
            if(product)
              this.decorElements.push(product);
            break;
          }else{
            let e = new DataError('неверные данные элементов оформления',data);
            this.errors.push(e);
          }
          break;*/
        case 'Цветы':
          if (this.validateProduct(data)){
            let product = this.loadProductData(data);
            if(product)
            this.balloonsAndDecor[0].productList.push(product);
            break;
          }else{
            let e = new DataError('неверные данные 111 цветов',data);
            this.errors.push(e);
          }
          break;
        case 'Игрушки':
          if (this.validateProduct(data)){
            let product = this.loadProductData(data);
            if(product)
            this.balloonsAndDecor[0].productList.push(product);
            break;
          }else{
            let e = new DataError('неверные данные цветов',data);
            this.errors.push(e);
          }
          break;
        case 'Стойки':
          if (this.validateProduct(data)){
            let product = this.loadProductData(data);
            if(product)
            this.balloonsAndDecor[1].productList.push(product);
            break;
          }else{
            let e = new DataError('неверные данные стоек',data);
            this.errors.push(e);
          }
          break;
        case 'Арки':
          if (this.validateProduct(data)){
            let product = this.loadProductData(data);
            if(product)
            this.balloonsAndDecor[1].productList.push(product);
            break;
          }else{
            let e = new DataError('неверные данные арок',data);
            this.errors.push(e);
          }
          break;
        default:
              let e = new DataError('Введен неверный тип данных',data);
              this.errors.push(e);
              break;
      }
    }
  }





  loadEvents(event){
    switch(event.type){
      case 'Детские мероприятия':
        try{
          let chEv = new ChildrenEvents(event.type, event.name,event.smallImage,
            event.cost,event.shortDescription,
            event.detailedDescription, event.photoImg1,
            event.photoImg2,event.photoImg3,event.table);
          return chEv;
        } catch(e){
          this.errors.push(new DataError('Ошибка при загрузке детского мероприятия', event));
        }
        return null;
      break;
      case 'Свадьбы':
        try{
          let wedEv = new Weddings(event.type, event.name,event.smallImage,
            event.cost,event.shortDescription,
            event.detailedDescription, event.photoImg1,
            event.photoImg2,event.photoImg3,event.table);
          return wedEv;
        } catch(e){
          this.errors.push(new DataError('Ошибка при загрузке детского мероприятия', event));
        }
        return null;
      break;

    }

  }

  loadProductData(product){
    try{
      let data = new BalloonsAndDecor(product.type, product.name,product.smallImage,
        product.cost,product.shortDescription,
        product.detailedDescription, product.photoImg1,
        product.photoImg2,product.productList);
      return data;
    } catch(e){
      this.errors.push(new DataError('Ошибка при загрузке продукта', product));
    }
    return null;
  }

  validateData(data){

    switch(data.type){
      case 'Детские мероприятия' || 'Свадьбы':
        let requiredProps = 'type name smallImage cost shortDescription detailedDescription photoImg1 photoImg2 photoImg3 table'.split(' ');
        let hasErrors = false;
        for (let field of requiredProps){
          if(!data[field] && data[field]!==null){
            this.errors.push(new DataError(`неверное поле ${field}`, data));
            hasErrors=true;
          }
        }
        return !hasErrors;
      break;
      case 'Свадьбы':
        let requiredProps1 = 'type name smallImage cost shortDescription detailedDescription photoImg1 photoImg2 photoImg3 table'.split(' ');
        let hasErrors1 = false;
        for (let field of requiredProps1){
          if(!data[field] && data[field]!==null){
            this.errors.push(new DataError(`неверное поле ${field}`, data));
            hasErrors1=true;
          }
        }
        return !hasErrors1;
        break;
      case 'Шары и оформление':
        let requiredProps2 = 'type name smallImage cost shortDescription detailedDescription photoImg1 photoImg2 productList'.split(' ');
        let hasErrors2 = false;
        for (let field of requiredProps2){
          if(!data[field] && data[field]!==null){
            this.errors.push(new DataError(`неверное поле ${field}`, data));
            hasErrors2=true;
          }
        }
        return !hasErrors2;
        break;
    }
  }

  validateProduct(data){
        let requiredProps = 'type name smallImage cost shortDescription detailedDescription photoImg1 photoImg2 productList'.split(' ');
        let hasErrors = false;
        for (let field of requiredProps){
          if(!data[field] && data[field]!==null){
            this.errors.push(new DataError(`неверное поле ${field}`, data));
            hasErrors=true;
          }
        }
        return !hasErrors;
  }



}

/*------------------------------------------------View--------------------------------------*/

class BaseElement{
  constructor(){
    this.element = null;
  }

  appendToElement(el){
    this.createElement();
    el.append(this.element);
  }

  createElement(){
    let s = this.getElementString();
    this.element = $(s);
  }

  getElementString() {
    throw 'Please override getElementString() in BaseElement'
  }
}

/*-----------------------------Image--------------------------------*/
class Image extends BaseElement{
  constructor(fileName){
    super();
    this.fileName = fileName;
  }

  getElementString(){
    return `<img class="imageForServiceItem" src="${this.fileName}" alt="">`;
  }
}
/*-----------------------------END Image----------------------------*/

/*-----------------------------SpanForServiceName--------------------------------*/
class SpanForServiceName extends BaseElement{
  constructor(serviceName){
    super();
    this.serviceName = serviceName;
  }

  getElementString(){
    return `<Span class="serviceItemName">
              ${this.serviceName}
            </Span>`;
  }
}
/*-----------------------------END SpanForServiceName----------------------------*/

/*-----------------------------SpanForServicePrice--------------------------------*/
class SpanForServicePrice extends BaseElement{
  constructor(serviceCost){
    super();
    this.serviceCost = serviceCost;
  }

  getElementString(){
    return `<Span class="serviceItemPrice">
              От ${this.serviceCost} рублей
            </Span>`;
  }
}
/*-----------------------------END SpanForServicePrice----------------------------*/

/*-----------------------------Button--------------------------------*/
class Button extends BaseElement{
  constructor(title){
    super();
    this.title = title;
  }

  getElementString(){
    return `<button class="submit btn btn-bright makeOrder" type="submit">
              ${this.title}
            </button>`
  }
}
/*-----------------------------END Button----------------------------*/

/*-----------------------------DivColumn--------------------------------*/
class DivColumn extends BaseElement{
  constructor(servicesItem){
    super();
    this.serviceItem = servicesItem;
  }

  getElementString(){

    let image = new Image(this.serviceItem.photoImg1),
        spanForServiceName = new SpanForServiceName(this.serviceItem.name),
        spanForServicePrice = new SpanForServicePrice(this.serviceItem.cost);
    return `<div class="col-lg-4 col-md-4">
               <div class="containerForServiceItem">
               <div class="containerForImage" style="background-image: url(${this.serviceItem.photoImg1})"> 
                <div class="containerForSpan">
                  ${spanForServiceName.getElementString()}
                </div>             
               </div>               
               ${spanForServicePrice.getElementString()}               
               </div>
            </div>`
  }
}
/*-----------------------------END DivRow----------------------------*/

/*-----------------------------DivRow--------------------------------*/
class DivRow extends BaseElement{
  constructor(listOfServices){
    super();
    this.listOfServices = listOfServices;
  }

  getElementString(){
    let divColumnStr = '';
    for (let field of this.listOfServices){
      let divColumn = new DivColumn(field);
      divColumnStr += (divColumn.getElementString());
    }
    return `<div class="row">
              ${divColumnStr}
            </div>
`
  }
}
/*-----------------------------END DivRow----------------------------*/


/*-----------------------------PanelServiseList----------------------------*/

class PanelServiseList extends BaseElement{
  constructor(allServices){
    super();
    this.allServices = allServices;
  }

  getElementString(){
    let divRowStr = '';
    let count = 0;
    for(let eventType in this.allServices) {
      if (eventType!="errors"){
        let rowEvent = new DivRow(this.allServices[eventType]);
        let type = this.allServices[eventType][0].type;
        count++;
        divRowStr += `<div class="panel panel-default">
        <div class="panel-heading" role="tab" id="heading${count}">
          <h4 class="panel-title">
            <a role="button" data-toggle="collapse" data-parent="#accordion" href="#collapse${count}" aria-expanded="true" aria-controls="collapse${count}">
              ${type}
            </a>
          </h4>
        </div>
        <div id="collapse${count}" class="panel-collapse collapse" role="tabpane${count}" aria-labelledby="heading${count}">
          <div id="firstLi" class="panel-body">
            ${rowEvent.getElementString()}
          </div>
        </div>
      </div>`;
      }

    }




    return `<div class="panel-group" id="accordion" role="tablist" aria-multiselectable="true">
            ${divRowStr} 
            </div>`
  }
}
/*-----------------------------END PanelServiseList----------------------------*/


/*------------------------------------------------End View----------------------------------*/

/*
let b = new Button('Заказать');
b.appendToElement($('#firstLi'));

let i = new Image('../images/services-page/services-list/CildrenEvents/birthday1.jpg');
i.appendToElement($('#firstLi'));

let s = new SpanForServiceName('День рождения');
s.appendToElement($('#firstLi'));


*/
let dataService = new ServicesDataService();
dataService.loadData(serviceList);
dataService.loadData(decorElements);
dataService.loadData(balloonFigures);


let data = dataService;
console.log(data);

let с = new PanelServiseList(data);
с.appendToElement($('#containerForServiceList'));
let list = data.balloonsAndDecor[0].productList;
let popup = new DivRow(list);
popup.appendToElement($('#containerForProducts'));
