/**
 * Created by AlexBogdan on 08.02.2017.
 */

let serviceList = serviceListMod();



class AllServices {
  constructor(name,smallImage,cost,shortDescription){
    this.name = name;
    this.smallImage = smallImage ;
    this.cost = cost;
    this.shortDescription = shortDescription;
  }

}

class Events extends AllServices{

  constructor(name,smallImage,cost,shortDescription,
              detailedDescription, photoImg1,photoImg2,photoImg3,table){
    super(name,smallImage,cost,shortDescription);
      this.detailedDescription = detailedDescription;
      this.photoImg1 =  photoImg1;
      this.photoImg2 = photoImg2;
      this.photoImg3 =  photoImg3;
      this.table =  table;
  }
}

class ChildrenEvents extends Events{
  constructor(name,smallImage,cost,shortDescription,
              detailedDescription, photoImg1,photoImg2,photoImg3,table) {
    super(name, smallImage, cost, shortDescription,detailedDescription,
      photoImg1,photoImg2,photoImg3,table);
  }

}

class Weddings extends Events{
  constructor(name,smallImage,cost,shortDescription,
              detailedDescription, photoImg1,photoImg2,photoImg3,table) {
    super(name, smallImage, cost, shortDescription,detailedDescription,
      photoImg1,photoImg2,photoImg3,table);
  }
}

class DataError{
  constructor(message, data){
    this.message = message;
    this.data = data;
  }
}


class ServicesDataService{

  constructor(){
    this['childrenEvents'] = [];
    this.weddings = [];
    this.errors = [];
  }

  getServiceByProp(serviceName,property,propertyValue){
    return this[serviceName].find(function (event) {
      return event[property] === propertyValue;
    });
  }

  getServicesSortedByPrice(serviceType){
    return this[serviceType].sort(function (elem1, elem2) {
      if (elem1.cost < elem2.cost)
        return -1;
      if (elem1.cost > elem2.cost)
        return 1;
      return 0;
    });
  }
  filterServicesByProp(serviceName,property,filterValue){
    return this[serviceName].filter(elem => elem[property].indexOf(filterValue)>=0);
  }

  loadData(serviesList){
    for(let data of serviesList){
      switch(data.type){
        case 'childrenEvents':
          if (this.validateChildEvData(data)){
            let event = this.loadEvents(data);
            if (event)
              this.childrenEvents.push(event);
          } else{
            let e = new DataError('неверные данные детского мероприятия',data);
            this.errors.push(e);
          }

              break;
        case 'weddings':
          if (this.validateChildEvData(data)){
            let event = this.loadEvents(data);
            if(event)
            this.weddings.push(event);
            break;
          }else{
            let e = new DataError('неверные данные садебного мероприятия',data);
            this.errors.push(e);
          }
        default:
              let e = new DataError('Введен неверный тип услуги',data);
              this.errors.push(e);
              break;
      }
    }
  }

  loadEvents(event){
    switch(event.type){
      case 'childrenEvents':
        try{
          let chEv = new ChildrenEvents(event.name,event.smallImage,
            event.cost,event.shortDescription,
            event.detailedDescription, event.photoImg1,
            event.photoImg2,event.photoImg3,event.table);
          return chEv;
        } catch(e){
          this.errors.push(new DataError('Ошибка при загрузке детского мероприятия', event));
        }
        return null;
      break;
      case 'weddings':
        try{
          let wedEv = new Weddings(event.name,event.smallImage,
            event.cost,event.shortDescription,
            event.detailedDescription, event.photoImg1,
            event.photoImg2,event.photoImg3,event.table);
          return wedEv;
        } catch(e){
          this.errors.push(new DataError('Ошибка при загрузке детского мероприятия', event));
        }
        return null;
      break;
    }

  }

  validateChildEvData(data){
    let requiredProps = 'name smallImage cost shortDescription detailedDescription photoImg1 photoImg2 photoImg3 table'.split(' ');
    let hasErrors = false;
    console.log(requiredProps);
    console.log(data);
    for (let field of requiredProps){
      if(!data[field] && data[field]!==null){
        this.errors.push(new DataError(`неверное поле ${field}`, data));
        hasErrors=true;
      }
    }
    return !hasErrors;
  }
}

let dataService = new ServicesDataService();
dataService.loadData(serviceList);
console.log(dataService.weddings);
for (let ev of dataService.errors)
  console.log(ev.message);

let events = dataService.filterServicesByProp('weddings','name','в');

for (let service of events)
  console.log(service.name);
