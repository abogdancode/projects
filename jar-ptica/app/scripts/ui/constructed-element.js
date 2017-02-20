/**
 * Created by AlexBogdan on 16.02.2017.
 */


class ConstructedElement extends BaseElement{
  constructor(){
    super();
  }

  appendToElement(el){
    super.appendToElement(el);

    executeIterator();
  }

}

function iterator() {
  let maxHeight = neededHeight-75;
  for(let elem of $('#extServicesList>div')){
    if(elem.offsetHeight>maxHeight){
      maxHeight=elem.offsetHeight;
    }
  }
  return maxHeight;
}

function executeIterator() {
  let resizeHeight;
  setTimeout(`
      resizeHeight=iterator();
      $('#extServicesList').height(resizeHeight);
    `,550);
  console.log('asd');
}
