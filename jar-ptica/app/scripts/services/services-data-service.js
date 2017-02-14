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
    for(let data of servicesList){
      switch(data.type){
        case 'Детские мероприятия':
          if (this.validateData(data)){
            let event = this.loadEvents(data);
            if (event)
              this.childrenEvents.push(event);
          } else{
            let e = new DataError('неверные данные детского мероприятия',data);
            this.errors.push(e);
          }

          break;
        case 'Свадьбы':
          if (this.validateData(data)){
            let event = this.loadEvents(data);
            if(event)
              this.weddings.push(event);
            break;
          }else{
            let e = new DataError('неверные данные свадебного мероприятия',data);
            this.errors.push(e);
          }
          break;

        case 'Шары и оформление':
          if (this.validateData(data)){
            let product = this.loadProductData(data);
            if(product)
              this.balloonsAndDecor.push(product);
            break;
          }else{
            let e = new DataError('неверные данные шаров и оформлений',data);
            this.errors.push(e);
          }
          break;
        /*case 'Элементы оформленния':
         if (this.validateProduct(data)){

         let product = this.loadProductData(data);
         if(product)
         this.decorElements.push(product);
         break;
         }else{
         let e = new DataError('неверные данные элементов оформления',data);
         this.errors.push(e);
         }
         break;*/
        case 'Цветы':
          if (this.validateProduct(data)){
            let product = this.loadProductData(data);
            if(product)
              this.balloonsAndDecor[0].productList.push(product);
            break;
          }else{
            let e = new DataError('неверные данные 111 цветов',data);
            this.errors.push(e);
          }
          break;
        case 'Игрушки':
          if (this.validateProduct(data)){
            let product = this.loadProductData(data);
            if(product)
              this.balloonsAndDecor[0].productList.push(product);
            break;
          }else{
            let e = new DataError('неверные данные цветов',data);
            this.errors.push(e);
          }
          break;
        case 'Стойки':
          if (this.validateProduct(data)){
            let product = this.loadProductData(data);
            if(product)
              this.balloonsAndDecor[1].productList.push(product);
            break;
          }else{
            let e = new DataError('неверные данные стоек',data);
            this.errors.push(e);
          }
          break;
        case 'Арки':
          if (this.validateProduct(data)){
            let product = this.loadProductData(data);
            if(product)
              this.balloonsAndDecor[1].productList.push(product);
            break;
          }else{
            let e = new DataError('неверные данные арок',data);
            this.errors.push(e);
          }
          break;
        default:
          let e = new DataError('Введен неверный тип данных',data);
          this.errors.push(e);
          break;
      }
    }
  }





  loadEvents(event){
    switch(event.type){
      case 'Детские мероприятия':
        try{
          let chEv = new ChildrenEvents(event.type, event.name,event.smallImage,
            event.cost,event.shortDescription,
            event.detailedDescription, event.photoImg1,
            event.photoImg2,event.photoImg3,event.table);
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
            event.photoImg2,event.photoImg3,event.table);
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

  validateData(data){

    switch(data.type){
      case 'Детские мероприятия' || 'Свадьбы':
        let requiredProps = 'type name smallImage cost shortDescription detailedDescription photoImg1 photoImg2 photoImg3 table'.split(' ');
        let hasErrors = false;
        for (let field of requiredProps){
          if(!data[field] && data[field]!==null){
            this.errors.push(new DataError(`неверное поле ${field}`, data));
            hasErrors=true;
          }
        }
        return !hasErrors;
        break;
      case 'Свадьбы':
        let requiredProps1 = 'type name smallImage cost shortDescription detailedDescription photoImg1 photoImg2 photoImg3 table'.split(' ');
        let hasErrors1 = false;
        for (let field of requiredProps1){
          if(!data[field] && data[field]!==null){
            this.errors.push(new DataError(`неверное поле ${field}`, data));
            hasErrors1=true;
          }
        }
        return !hasErrors1;
        break;
      case 'Шары и оформление':
        let requiredProps2 = 'type name smallImage cost shortDescription detailedDescription photoImg1 photoImg2 productList'.split(' ');
        let hasErrors2 = false;
        for (let field of requiredProps2){
          if(!data[field] && data[field]!==null){
            this.errors.push(new DataError(`неверное поле ${field}`, data));
            hasErrors2=true;
          }
        }
        return !hasErrors2;
        break;
    }
  }

  validateProduct(data){
    let requiredProps = 'type name smallImage cost shortDescription detailedDescription photoImg1 photoImg2 productList'.split(' ');
    let hasErrors = false;
    for (let field of requiredProps){
      if(!data[field] && data[field]!==null){
        this.errors.push(new DataError(`неверное поле ${field}`, data));
        hasErrors=true;
      }
    }
    return !hasErrors;
  }



}
