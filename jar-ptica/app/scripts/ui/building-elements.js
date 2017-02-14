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

/*-----------------------------SpanForServiceName--------------------------------*/
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
/*-----------------------------END SpanForServiceName----------------------------*/

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
  constructor(title){
    super();
    this.title = title;
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
    return `<button class="btn btn-close" type="submit" >
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
    return `<button class="btn btn-close" type="submit" >
              <span class="glyphicon glyphicon-chevron-left" style="font-size: 50px; display: block;"></span>
            </button>`
  }
}
/*-----------------------------END ButtonPrev----------------------------*/
