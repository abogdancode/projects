/**
 * Created by AlexBogdan on 15.02.2017.
 */

/*-----------------------------OrderedListUl--------------------------------*/
class OrderedListUl extends BaseElement{
  constructor(classList){
    super();
    this.classList = classList;
  }

  getElementString(){
    return `<ul class="${this.classList}"></ul>`;
  }
}
/*-----------------------------END OrderedListUl----------------------------*/

/*-----------------------------OrderedListLi--------------------------------*/
class OrderedListLi extends BaseElement{
  constructor(item,classList){
    super();
    this.classList = classList;
    this.item = item;
  }

  appendToElement(el){
    super.appendToElement(el);
  }

  createElement(){
    super.createElement();

  }

  getElementString(){
    return `<li class="${this.classList}"><span>${this.item.type}</span></li>`;
  }
}
/*-----------------------------END OrderedListLi----------------------------*/

/*-----------------------------OrderedListInnerLi--------------------------------*/
class OrderedListInnerLi extends BaseElement{
  constructor(item,classList){
    super();
    this.classList = classList;
    this.item = item;
  }

  appendToElement(el){

    if(!$('.typeCont')[0]){
      let ul = new OrderedListUl('typeCont');
      ul.appendToElement($('.orderedList'));

    }

      if(!$(`.type:contains(${this.item.type})`)[0]){

        let li = new OrderedListLi(this.item,'type');
        li.appendToElement($('.typeCont'));

        let inTrCont = new CommonTable('inTrCont table table-hover');
        inTrCont.appendToElement(li.element);

        let tableBody = new CommonTableBody('inTrCont ');
        tableBody.appendToElement(inTrCont.element);
      }
      super.appendToElement($(`.type:contains(${this.item.type})`).children('table').children('tbody'));

    let popUpOrdered = new PopUpOrderedDiv('popUpOrdered',this.item.name);
    popUpOrdered.appendToElement($('.headerForOrderPanel'));

  }

  createElement(){
    super.createElement();


    let tdName = new CommonTd('orderedItemName');
    tdName.appendToElement(this.element);

    let spanName = new CommonSpan(this.item.name,'name');
    spanName.appendToElement(tdName.element);

    let tdPrice = new CommonTd('orderedItemPrice');
    tdPrice.appendToElement(this.element);

    let spanPrice = new SpanForProductPrice(this.item.cost);
    spanPrice.appendToElement(tdPrice.element);

    let tdDelete = new CommonTd('orderedItemDelete');
    tdDelete.appendToElement(this.element);

    let buttonDelete = new ButtonDelete(this.element);
    buttonDelete.appendToElement(tdDelete.element);
    buttonDelete.element.click(()=>{
      let parentUl = this.element.parent('tbody');
      let parentLi = this.element.closest('li.type');
      this.element.fadeOut(200, ()=>{
        this.element.remove();
        if(!$.trim(parentUl.text()))
          parentLi.remove();
      });
      orderService.deleteFromOrder(this.item);
      updateStorage(orderService);
      let summ = new SpanForProductPrice(orderService.summ);
      $('#summCont').empty();
      summ.appendToElement($('#summCont'));
    });
    let summ = new SpanForProductPrice(orderService.summ);
    $('#summCont').empty();
    summ.appendToElement($('#summCont'));
  }

  getElementString(){
    return `<tr class="${this.classList}"></tr>`;
  }
}
/*-----------------------------END OrderedInnerListLi----------------------------*/

/*-----------------------------ButtonDelete--------------------------------*/
class ButtonDelete extends BaseElement{
  constructor(item){
    super();
    this.item = item;
  }


  getElementString(){
    return `<button class="btn btn-delete">
              <span class="glyphicon glyphicon-trash" style="display: block;"></span>
            </button>`
  }
}
/*-----------------------------END ButtonDelete----------------------------*/


/*-----------------------------PopUpOrderedDiv--------------------------------*/
class PopUpOrderedDiv extends BaseElement{
  constructor(classList, name){
    super();
    this.classList = classList;
    this.name =name;
  }

  appendToElement(el){
    super.appendToElement(el);
    $(this.element).fadeOut(5000,()=>$(this.element).detach());
  }

  createElement(){
    super.createElement();
    let span = new CommonSpan(`${this.name} теперь в вашем заказе!`);
    span.appendToElement(this.element);
  }


  getElementString(){
    return `<div class="${this.classList}"></div>`;
  }
}
/*-----------------------------END PopUpOrderedDiv----------------------------*/

