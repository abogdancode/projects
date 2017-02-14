/**
 * Created by AlexBogdan on 13.02.2017.
 */
class BaseElement{
  constructor(){
    this.element = null;
  }

  appendToElement(el){
    this.createElement();
    el.append(this.element);
    el.fadeIn(500);
  }

  createElement(){
    let s = this.getElementString();
    this.element = $(s);
  }

  getElementString() {
    throw 'Please override getElementString() in BaseElement'
  }

  getPrevElem(array,item){
    let prevElem = array.indexOf(item);
    if(prevElem == 0)
      prevElem = array.length-1;
    else
      prevElem--;
    return array[prevElem];
  }
  getNextElem(array,item){
    let nextElem = array.indexOf(item);
    if(nextElem == array.length-1)
      nextElem = 0;
    else
      nextElem++;
    return array[nextElem];
  }
}
