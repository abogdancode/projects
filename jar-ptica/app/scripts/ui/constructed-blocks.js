/**
 * Created by AlexBogdan on 13.02.2017.
 */

/*-----------------------------HeaderForProdList--------------------------------*/
class HeaderForProdList extends BaseElement{
  constructor(title,closingElement){
    super();
    this.title = title;
    this.closingElement = closingElement;
  }
  createElement(){
    super.createElement();
    let buttonClose = new ButtonClose();
    buttonClose.appendToElement(this.element);

    buttonClose.element.click(() => {
      this.closingElement.parents('div').fadeOut(500,()=>{
        this.closingElement.parents('div').css('display','none');
        this.closingElement.parents('div').empty();
      });
    });


  }
  getElementString(){
    return `<div class="contForHeaderProducts">
              <h1 class="headerProducts">${this.title}</h1>
            </div>`
  }
}
/*-----------------------------END HeaderForProdList----------------------------*/




/*-----------------------------DivColumn--------------------------------*/
class DivColumn extends BaseElement{
  constructor(servicesItem){
    super();
    this.serviceItem = servicesItem;
  }

  createElement(){
    super.createElement();
    let divContForServItem = new CommonDiv('containerForServiceItem'),
      divContForSpan = new CommonDiv('containerForSpan'),
      imgDiv = new ImageDiv(this.serviceItem.photoImg1),
      spanServiceName = new SpanForServiceName(this.serviceItem.name),
      spanServicePrice = new SpanForServicePrice(this.serviceItem.cost);

    divContForServItem.appendToElement(this.element);
    divContForServItem.element.click(() => {
      this.serviceItem.open($('#containerForProducts'));
    });
    imgDiv.appendToElement(divContForServItem.element);
    divContForSpan.appendToElement(imgDiv.element);
    spanServiceName.appendToElement(divContForSpan.element);
    spanServicePrice.appendToElement(divContForServItem.element);
  }

  getElementString(){
    return `<div class="column col-lg-4 col-md-4"></div>`
  }
}
/*-----------------------------END DivColumn----------------------------*/

/*-----------------------------DivColumnProducts--------------------------------*/
class DivColumnProducts extends BaseElement{
  constructor(servicesItem,listOfProducts){
    super();
    this.serviceItem = servicesItem;
    this.listOfProducts = listOfProducts;
  }

  createElement(){
    super.createElement();
    let divContForServItem = new CommonDiv('containerForServiceItem'),
      divContForSpan = new CommonDiv('containerForSpan'),
      button = new Button('Добавить в заказ'),
      imgDiv = new ImageDiv(this.serviceItem.photoImg1),
      spanServiceName = new SpanForServiceName(this.serviceItem.name),
      spanServicePrice = new SpanForProductPrice(this.serviceItem.cost);

    divContForServItem.appendToElement(this.element);
    divContForServItem.element.click(() => {
      this.serviceItem.openDescription($('#containerForOneProduct'),this.listOfProducts);
    });
    imgDiv.appendToElement(divContForServItem.element);
    divContForSpan.appendToElement(imgDiv.element);
    spanServiceName.appendToElement(divContForSpan.element);
    spanServicePrice.appendToElement(divContForServItem.element);
    button.appendToElement(this.element);
  }

  getElementString(){
    return `<div class="column col-lg-4 col-md-4"></div>`
  }
}
/*-----------------------------END DivColumnProducts----------------------------*/

/*-----------------------------DivRow--------------------------------*/
class DivRow extends BaseElement{
  constructor(listOfServices){
    super();
    this.listOfServices = listOfServices;
  }

  createElement(){
    super.createElement();

    for (let field of this.listOfServices){
      let divColumn = new DivColumn(field);
      divColumn.appendToElement(this.element);
    }
  }

  getElementString(){

    return `<div class="row"></div>
`
  }
}
/*-----------------------------END DivRow----------------------------*/

/*-----------------------------ListOfProducts--------------------------------*/
class ListOfProducts extends BaseElement{
  constructor(listOfServices){
    super();
    this.listOfServices = listOfServices;
  }

  createElement(){
    super.createElement();

    let header = new HeaderForProdList(this.listOfServices[0].type,this.element);
    header.appendToElement(this.element);
    let divRow = new CommonDiv('row');
    divRow.appendToElement(this.element);
    for (let field of this.listOfServices){
      let divColumn = new DivColumnProducts(field,this.listOfServices);
      divColumn.appendToElement(divRow.element);
    }
  }

  getElementString(){
    return `<div id="popupProductList" class="contForGeneratedProducts"></div>`
  }
}
/*-----------------------------END ListOfProducts----------------------------*/


/*-----------------------------PanelServiseList----------------------------*/

class PanelServiseList extends BaseElement{
  constructor(allServices){
    super();
    this.allServices = allServices;
  }

  createElement(){
    super.createElement();
    let count = 0;
    for(let eventType in this.allServices) {
      if (eventType!="errors"){
        let rowEvent = new DivRow(this.allServices[eventType]);
        count++;
        rowEvent.appendToElement(this.element.find(`#Li${count}`));
      }
    }
  }

  getElementString(){
    let divRowStr = '';
    let count = 0;
    for(let eventType in this.allServices) {
      if (eventType!="errors"){
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
          <div id="Li${count}" class="panel-body">
           
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


/*-----------------------------ProductItemPopUp----------------------------*/

class ProductItemPopUp extends BaseElement{
  constructor(productItem,listOfProducts){
    super();
    this.productItem = productItem;
    this.listOfProducts = listOfProducts;
  }

  appendToElement(el,direction){

    this.createElement(direction);
    el.append(this.element);
    el.fadeIn(500);

  };

  animate(el,prevEl,nextEl,direction){
    let prevElem;
    $(prevEl).css('position', 'absolute');
    $(nextEl).css('position', 'absolute');
    switch (direction){
      case 'left':
        prevElem = nextEl;
        $(prevElem).css('left',0);
        $(el).css('left',-productPopUpImgWidth);
        $(prevElem).animate({left: productPopUpImgWidth}, 500);
        $(el).animate({left: "0"}, 500);
            break;
      case 'right':
        prevElem = prevEl;
        $(prevElem).css('left',0);
        $(el).css('left',productPopUpImgWidth);
        $(prevElem).animate({left: -productPopUpImgWidth}, 500);
        $(el).animate({left: "0"}, 500);
            break;
      default:
    }
  };

  createElement(direction){
    super.createElement();

    let prevElem = this.getPrevElem(this.listOfProducts,this.productItem);
    let nextElem = this.getNextElem(this.listOfProducts,this.productItem);


    let header = new HeaderForProdList(this.productItem.name,this.element);
    header.appendToElement(this.element);
    let divCont = new CommonDiv('contForProductItem');
    divCont.appendToElement(this.element);
    let viewport = new CommonDiv('viewport');
    viewport.appendToElement(divCont.element);

    let imagePrev = new Image(prevElem.photoImg1);
    imagePrev.appendToElement(viewport.element);

    let image = new Image(this.productItem.photoImg1);
    image.appendToElement(viewport.element);


    let imageNext = new Image(nextElem.photoImg1);
    imageNext.appendToElement(viewport.element);
    this.animate(image.element,imagePrev.element,imageNext.element,direction);

    let spanPrice = new SpanForProductPrice(this.productItem.cost);
    spanPrice.appendToElement(divCont.element);
    let spanDesc = new CommonSpan(this.productItem.shortDescription,'description');
    spanDesc.appendToElement(divCont.element);
    let button = new Button('Добавить в заказ');
    button.appendToElement(divCont.element);
    let buttonNext = new ButtonNext();
    buttonNext.appendToElement(divCont.element);
    buttonNext.element.click(() => {
      this.productItem.openNextDescription($('#containerForOneProduct'),this.listOfProducts,'right');
    });

    let buttonPrev = new ButtonPrev();
    buttonPrev.appendToElement(divCont.element);
    buttonPrev.element.click(() => {
      this.productItem.openPrevDescription($('#containerForOneProduct'),this.listOfProducts,'left');
    });


  }

  getElementString(){
    return `<div id="popupProductItem" class="contForGeneratedProductItem ">
            </div>`
  }
}

/*-----------------------------END ProductItemPopUp----------------------------*/
