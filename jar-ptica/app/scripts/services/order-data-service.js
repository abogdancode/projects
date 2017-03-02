/**
 * Created by AlexBogdan on 15.02.2017.
 */
class OrderDataService{
  constructor(){
    this.orderedItems = [];
  }

  addToOrder(item){
    let element = new ChosenItem(item.type, item.name, item.smallImage, item.cost);
    this.orderedItems.push(element);
    this.countSumm();
    return element;
  }
  deleteFromOrder(item){
    let index = this.orderedItems.indexOf(item);
    this.orderedItems.splice(index,1);
    this.countSumm();
  }

  countSumm(){
    let summ = 0;
    this.orderedItems.forEach(function(item){
      summ+=Number(item['cost']);
      });
    this.summ = summ;
  }
}
