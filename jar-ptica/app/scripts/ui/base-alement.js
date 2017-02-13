/**
 * Created by AlexBogdan on 13.02.2017.
 */
class BaseElement{
  constructor(){
    this.element = null;
  }

  appendToElement(el){
    this.createElement();

    el.fadeIn(500);
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
