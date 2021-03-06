/**
 * Created by AlexBogdan on 13.02.2017.
 */
class ServicesDataService{

  constructor(){
    this.childrenEvents = [];
    this.weddings = [];
    this.balloonsAndDecor = [];
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

  loadData(servicesList){
    let thees = this;
    servicesList.forEach(function(data) {
      switch(data['type']){
        case 'Детские мероприятия':
          if (thees.validateData(data)){
            let event = thees.loadEvents(data);
            if (event)
              thees.childrenEvents.push(event);
          } else{
            let e = new DataError('неверные данные детского мероприятия',data);
            thees.errors.push(e);
          }

          break;

        case 'пример дня рождения':
          if (thees.validateChildrenEvents(data)){
            let event = thees.loadChildrenEvent(data);
            if (event)
              thees.childrenEvents[0].servicesList.push(event);
          } else{
            let e = new DataError('неверные данные примера дня рождения',data);
            thees.errors.push(e);
          }
          break;

        case 'Свадьбы':
          if (thees.validateData(data)){
            let event = thees.loadEvents(data);
            if(event)
              thees.weddings.push(event);
            break;
          }else{
            let e = new DataError('неверные данные свадебного мероприятия',data);
            thees.errors.push(e);
          }
          break;

        case 'Шары и оформление':
          if (thees.validateData(data)){
            let product = thees.loadProductData(data);
            if(product)
              thees.balloonsAndDecor.push(product);
            break;
          }else{
            let e = new DataError('неверные данные шаров и оформлений',data);
            thees.errors.push(e);
          }
          break;

        case 'Цветы':
          if (thees.validateProduct(data)){
            let product = thees.loadProductData(data);
            if(product)
              thees.balloonsAndDecor[0].productList.push(product);
            break;
          }else{
            let e = new DataError('неверные данные 111 цветов',data);
            thees.errors.push(e);
          }
          break;
        case 'Игрушки':
          if (thees.validateProduct(data)){
            let product = thees.loadProductData(data);
            if(product)
              thees.balloonsAndDecor[0].productList.push(product);
            break;
          }else{
            let e = new DataError('неверные данные цветов',data);
            thees.errors.push(e);
          }
          break;
        case 'Стойки':
          if (thees.validateProduct(data)){
            let product = thees.loadProductData(data);
            if(product)
              thees.balloonsAndDecor[1].productList.push(product);
            break;
          }else{
            let e = new DataError('неверные данные стоек',data);
            thees.errors.push(e);
          }
          break;
        case 'Арки':
          if (thees.validateProduct(data)){
            let product = thees.loadProductData(data);
            if(product)
              thees.balloonsAndDecor[1].productList.push(product);
            break;
          }else{
            let e = new DataError('неверные данные арок',data);
            thees.errors.push(e);
          }
          break;
        default:
          let e = new DataError('Введен неверный тип данных',data);
          thees.errors.push(e);
          break;
      }
    });
  }





  loadEvents(event){
    switch(event.type){
      case 'Детские мероприятия':
        try{
          let chEv = new ChildrenEvents(event.type, event.name,event.smallImage,
            event.cost,event.shortDescription,
            event.detailedDescription, event.photoImg1,
            event.photoImg2,event.photoImg3,event.table,event.servicesList);
          return chEv;
        } catch(e){
          this.errors.push(new DataError('Ошибка при загрузке детского мероприятия', event));
        }
        return null;
        break;
      case 'Свадьбы':
        try{
          let wedEv = new Weddings(event.type, event.name,event.smallImage,
            event.cost,event.shortDescription,
            event.detailedDescription, event.photoImg1,
            event.photoImg2,event.photoImg3,event.table,event.servicesList);
          return wedEv;
        } catch(e){
          this.errors.push(new DataError('Ошибка при загрузке детского мероприятия', event));
        }
        return null;
        break;

    }

  }

  loadProductData(product){
    try{
      let data = new BalloonsAndDecor(product.type, product.name,product.smallImage,
        product.cost,product.shortDescription,
        product.detailedDescription, product.photoImg1,
        product.photoImg2,product.productList);
      return data;
    } catch(e){
      this.errors.push(new DataError('Ошибка при загрузке продукта', product));
    }
    return null;
  }

  loadChildrenEvent(product){
    try{
      let data = new ChildrenEventsItem(product.type, product.name,product.smallImage,
        product.cost,product.shortDescription,
        product.detailedDescription, product.photoImg1,
        product.photoImg2,product.productList);
      return data;
    } catch(e){
      this.errors.push(new DataError('Ошибка при загрузке продукта', product));
    }
    return null;
  }

  validateData(data){
    switch(data['type']){
      case 'Детские мероприятия':
        let requiredProps = 'type name smallImage cost shortDescription detailedDescription photoImg1 photoImg2 photoImg3 table servicesList'.split(' ');
        let hasErrors = false;
        requiredProps.forEach(function(field) {
          if(!data[field] && data[field]!==null){
            this.errors.push(new DataError(`неверное поле ${field}`, data));
            hasErrors=true;
          }
        });
        return !hasErrors;
        break;
      case 'Свадьбы':
        let requiredProps1 = 'type name smallImage cost shortDescription detailedDescription photoImg1 photoImg2 photoImg3 table servicesList'.split(' ');
        let hasErrors1 = false;
        requiredProps1.forEach(function(field) {
          if(!data[field] && data[field]!==null){
            this.errors.push(new DataError(`неверное поле ${field}`, data));
            hasErrors1=true;
          }
        });
        return !hasErrors1;
        break;
      case 'Шары и оформление':
        let requiredProps2 = 'type name smallImage cost shortDescription detailedDescription photoImg1 photoImg2 productList'.split(' ');
        let hasErrors2 = false;
        requiredProps2.forEach(function(field) {
          if(!data[field] && data[field]!==null){
            this.errors.push(new DataError(`неверное поле ${field}`, data));
            hasErrors2=true;
          }
        });
        return !hasErrors2;
        break;
    }
  }

  validateProduct(data){
    let requiredProps = 'type name smallImage cost shortDescription detailedDescription photoImg1 photoImg2 productList'.split(' ');
    let hasErrors = false;
    let thees = this;
    requiredProps.forEach(function(field) {
      if(!data[field] && data[field]!==null){
        thees.errors.push(new DataError(`неверное поле ${field}`, data));
        hasErrors=true;
      }
    });
    return !hasErrors;
  }

  validateChildrenEvents(data){
    let requiredProps = 'type name smallImage cost shortDescription detailedDescription photoImg1 photoImg2 productList'.split(' ');
    let hasErrors = false;
    let thees = this;
    requiredProps.forEach(function(field) {
      if(!data[field] && data[field]!==null){
        thees.errors.push(new DataError(`неверное поле ${field}`, data));
        hasErrors=true;
      }
    });
    return !hasErrors;
  }


}
