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
      let resizeHeight;
      setTimeout(`
      resizeHeight=iterator();
      $('#extServicesList').height(resizeHeight);
    `,1000);
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
      $(window).scrollTop(0);
    });
    imgDiv.appendToElement(divContForServItem.element);
    divContForSpan.appendToElement(imgDiv.element);
    spanServiceName.appendToElement(divContForSpan.element);
    spanServicePrice.appendToElement(divContForServItem.element);
  }

  getElementString(){
    return '<div class="column col-lg-4 col-md-4 col-sm-6"></div>'
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
      button = new Button(this.serviceItem,'Добавить в заказ'),
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
    return '<div class="column col-lg-3 col-md-4 col-sm-6"></div>'
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
    return `<div id="popupProductList" class="contForGeneratedProducts" style="min-height: ${neededHeight - 100}px"></div>`
  }
}
/*-----------------------------END ListOfProducts----------------------------*/


/*-----------------------------PanelServiseList----------------------------*/

class PanelServiseList extends ConstructedElement{
  constructor(allServices){
    super();
    this.allServices = allServices;
  }

  appendToElement(el){
    super.appendToElement(el);
    $('.panel-heading').click((el)=>{
      let offsetPanelItem = $(el.currentTarget);
      let opened = $(el.currentTarget).parent().find('.in')[0];
      if (opened){
        $('body,html').animate({
          scrollTop: 0
        }, 300);
      }
      if(winWidth<=768&&!opened)
      setTimeout(()=>{scrollToHeader(offsetPanelItem)},550);
      let prevHeight;
      let resizeHeight;
      setTimeout(`
      prevHeight = $('#extServicesList').height()
      resizeHeight=iterator();
      $('#extServicesList').height(resizeHeight);
      if(resizeHeight < prevHeight)
      unfix($('footer')[0].offsetTop);
    `,500);
    });
  }


  createElement(){
    super.createElement();
    let count = 0;
    for(let eventType in this.allServices) {
      if (eventType!='errors'){
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
      if (eventType!='errors'){
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
function  scrollToHeader(offsetPanelItem){

  $('body,html').animate({
    scrollTop: offsetPanelItem.offset().top-125
}, 300);
}

/*-----------------------------ProductItemPopUp----------------------------*/

class ProductItemPopUp extends ConstructedElement{
  constructor(productItem,listOfProducts){
    super();
    this.productItem = productItem;
    this.listOfProducts = listOfProducts;
  }

  appendToElement(el,direction){
    this.createElement(direction);
    el.append(this.element);
    el.fadeIn(500);
    executeIterator();
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
        $(el).animate({left: '0'}, 500);
            break;
      case 'right':
        prevElem = prevEl;
        $(prevElem).css('left',0);
        $(el).css('left',productPopUpImgWidth);
        $(prevElem).animate({left: -productPopUpImgWidth}, 500);
        $(el).animate({left: '0'}, 500);
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
    let button = new Button(this.productItem,'Добавить в заказ');
    button.appendToElement(divCont.element);
    let buttonNext = new ButtonNext();
    buttonNext.appendToElement(viewport.element);
    buttonNext.element.click(() => {
      this.productItem.openNextDescription($('#containerForOneProduct'),this.listOfProducts,'right');
    });

    let buttonPrev = new ButtonPrev();
    buttonPrev.appendToElement(viewport.element);
    buttonPrev.element.click(() => {
      this.productItem.openPrevDescription($('#containerForOneProduct'),this.listOfProducts,'left');
    });
  }

  getElementString(){
    return `<div class="contForGeneratedProductItem normalWidth" style="min-height: ${neededHeight - 100}px">
            </div>`
  }
}

/*-----------------------------END ProductItemPopUp----------------------------*/

/*-----------------------------ServicesItemPopUp--------------------------------*/
class ServicesItemPopUp extends ConstructedElement{
  constructor(serviceItem){
    super();
    this.serviceItem = serviceItem;
  }

  createElement(){
    super.createElement();

    let header = new HeaderForProdList(this.serviceItem.name,this.element);
    header.appendToElement(this.element);

    let divContForOneService = new CommonDiv('divContForOneService');
    divContForOneService.appendToElement(this.element);

    let imageMain = new Image(this.serviceItem.photoImg1);
    imageMain.appendToElement(divContForOneService.element);

    let commonSpan = new CommonSpan(this.serviceItem.detailedDescription);
    commonSpan.appendToElement(divContForOneService.element);

    let divContForServicesItems = new CommonDiv('divContForServicesItems');
    divContForServicesItems.appendToElement(this.element);
    let count = 0;
    for (let field of this.serviceItem.servicesList){
      let divRow = new CommonDiv('row');
      divRow.appendToElement(divContForServicesItems.element);


      let divColumn1 = new CommonDiv('column col-lg-6 col-md-6');
      divColumn1.appendToElement(divRow.element);


      let divColumn2 = new CommonDiv('column col-lg-6 col-md-6');
      divColumn2.appendToElement(divRow.element);
      let hr = new Hr('line');
      hr.appendToElement(divRow.element);

      let cont1 = divColumn1;
      let cont2 = divColumn2;
      if (chequerwise){
        count++;
        if (count%2==0){
          cont1 = divColumn2;
          cont2 = divColumn1;
        }else{
          cont1 = divColumn1;
          cont2 = divColumn2;
        }
      }

      let ImageServiceItem = new Image(field.photoImg1);
      ImageServiceItem.appendToElement(cont1.element);

      let commonHeader = new CommonHeader(field.name,'2','headerForServiceItem');
      commonHeader.appendToElement(cont2.element);

      let commonSpan = new CommonSpan(field.detailedDescription);
      commonSpan.appendToElement(cont2.element);

     /* let commonSpanForPrice = new CommonSpan('Цена за 1 час:','commonSpanForPrice');
      commonSpanForPrice.appendToElement(cont2.element);

      let spanProductPrice = new SpanForProductPrice(field.cost);
      spanProductPrice.appendToElement(cont2.element);*/

      let button = new Button(field,'Выбрать тип мероприятия');
      button.appendToElement(cont2.element);

    }
  }

  getElementString(){
    return '<div id="popupService" class="contForGeneratedService"></div>'
  }
}

/*-----------------------------END ServicesItemPopUp----------------------------*/
