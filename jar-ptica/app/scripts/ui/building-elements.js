/**
 * Created by AlexBogdan on 13.02.2017.
 */

/*-----------------------------CommonDiv--------------------------------*/
class CommonDiv extends BaseElement{
  constructor(classList){
    super();
    this.classList = classList;
  }

  getElementString(){
    return `<div class="${this.classList}"></div>`;
  }
}
/*-----------------------------END CommonDiv----------------------------*/

/*-----------------------------Hr--------------------------------*/
class Hr extends BaseElement{
  constructor(classList){
    super();
    this.classList = classList;
  }
  getElementString(){
    return `<hr class="${this.classList}">`;
  }
}
/*-----------------------------END Hr----------------------------*/

/*-----------------------------CommonHeader--------------------------------*/
class CommonHeader extends BaseElement{
  constructor(title,size,classList){
    super();
    this.title = title;
    this.classList = classList;
    this.size = size;
  }

  getElementString(){
    return `<h${this.size} class="${this.classList}">${this.title}</h${this.size}>`;
  }
}
/*-----------------------------END CommonHeader----------------------------*/

/*-----------------------------ImageDiv--------------------------------*/
class ImageDiv extends BaseElement{
  constructor(url){
    super();
    this.url = url;
  }

  getElementString(){
    return `<div class="containerForImage" style="background-image: url(${this.url})"></div>`;
  }
}
/*-----------------------------END ImageDiv----------------------------*/

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

/*-----------------------------CommonSpan--------------------------------*/
class CommonSpan extends BaseElement{
  constructor(content,classList){
    super();
    this.content = content;
    this.classList = classList;
  }

  getElementString(){
    return `<Span class="${this.classList}">
              ${this.content}
            </Span>`;
  }
}
/*-----------------------------END CommonSpan----------------------------*/

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

/*-----------------------------SpanForProductPrice--------------------------------*/
class SpanForProductPrice extends BaseElement{
  constructor(serviceCost){
    super();
    this.serviceCost = serviceCost;
  }

  getElementString(){
    return `<Span class="productItemPrice">
              ${this.serviceCost} рублей
            </Span>`;
  }
}
/*-----------------------------END SpanForProductPrice----------------------------*/

/*-----------------------------Button--------------------------------*/
class Button extends BaseElement{
  constructor(item,title){
    super();
    this.title = title;
    this.item = item;
  }

  appendToElement(el){
    super.appendToElement(el);
    this.element.click(() => {
      let item = orderService.addToOrder(this.item);
      let innerli = new OrderedListInnerLi(item,'name');
      innerli.appendToElement($('.orderedList'));
  })
  }


  getElementString(){
    return `<button class="btn btn-bright" type="submit">
              ${this.title}
            </button>`
  }
}
/*-----------------------------END Button----------------------------*/

/*-----------------------------ButtonClose--------------------------------*/
class ButtonClose extends BaseElement{
  constructor(){
    super();
  }

  getElementString(){
    return `<button class="btn btn-close" type="submit" >
              <span class="glyphicon glyphicon-remove" style="font-size: 50px; display: block;"></span>
            </button>`
  }
}
/*-----------------------------END ButtonClose----------------------------*/

/*-----------------------------ButtonNext--------------------------------*/
class ButtonNext extends BaseElement{
  constructor(){
    super();
  }

  getElementString(){
    return `<button class="btn btn-close btnLeft" type="submit" >
              <span class="glyphicon glyphicon-chevron-right" style="font-size: 50px; display: block;"></span>
            </button>`
  }
}
/*-----------------------------END uttonNext----------------------------*/

/*-----------------------------ButtonPrev--------------------------------*/
class ButtonPrev extends BaseElement{
  constructor(){
    super();
  }

  getElementString(){
    return `<button class="btn btn-close btnRight" type="submit" >
              <span class="glyphicon glyphicon-chevron-left" style="font-size: 50px; display: block;"></span>
            </button>`
  }
}
/*-----------------------------END ButtonPrev----------------------------*/

/*-----------------------------CommonTable--------------------------------*/
class CommonTable extends BaseElement{
  constructor(classList){
    super();
    this.classList = classList;
  }

  getElementString(){
    return `<table class="${this.classList}">
            </table>`
  }
}
/*-----------------------------END CommonTable----------------------------*/

/*-----------------------------CommonTableBody--------------------------------*/
class CommonTableBody extends BaseElement{
  constructor(classList){
    super();
    this.classList = classList;
  }

  getElementString(){
    return `<tbody class="${this.classList}">
            </tbody>`
  }
}
/*-----------------------------END CommonTableBody----------------------------*/

/*-----------------------------CommonTr--------------------------------*/
class CommonTr extends BaseElement{
  constructor(classList){
    super();
    this.classList = classList;
  }

  getElementString(){
    return `<tr class="${this.classList}">
            </tr>`
  }
}
/*-----------------------------END CommonTr----------------------------*/

/*-----------------------------CommonTd--------------------------------*/
class CommonTd extends BaseElement{
  constructor(classList){
    super();
    this.classList = classList;
  }

  getElementString(){
    return `<td class="${this.classList}">
            </td>`
  }
}
/*-----------------------------END CommonTd----------------------------*/
