/**
 * Created by AlexBogdan on 08.02.2017.
 */
let childrenEvents = childrenEventsMod(),
    balloonFigures = balloonFiguresMod(),
    decorElements = decorElementsMod(),
    serviceList = serviceListMod();



/*
let b = new Button('Заказать');
b.appendToElement($('#firstLi'));

let i = new Image('../images/services-page/services-list/CildrenEvents/birthday1.jpg');
i.appendToElement($('#firstLi'));

let s = new SpanForServiceName('День рождения');
s.appendToElement($('#firstLi'));


*/

let dataService = new ServicesDataService();
console.log(dataService);
dataService.loadData(serviceList);
dataService.loadData(childrenEvents);
dataService.loadData(decorElements);
dataService.loadData(balloonFigures);


let data = dataService;

let с = new PanelServiseList(data);
с.appendToElement($('#containerForServiceList'));
let list = data.balloonsAndDecor[0];

let orderService = new OrderDataService();

let order = JSON.parse(localStorage.getItem('order'));

order.orderedItems.forEach(function (item) {
  orderService.addToOrder(item);
});

orderService.orderedItems.forEach(function (item) {
  let innerli = new OrderedListInnerLi(item,'name');
  innerli.appendToElement($('.orderedList'));
});

console.log(orderService);


