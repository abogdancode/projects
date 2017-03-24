/*Class*/
class Organ {
  constructor(type, name,detailedDescription,photoImg1){
    this.type = type;
    this.name = name;
    this.detailedDescription = detailedDescription;
    this.photoImg1 = photoImg1;
  };
}
/*END Class*/

/*Service---------------------------------------------------------------------*/

class OrganType{
  constructor(location){
    this.organs=[];
    this.description= '';
    this.location= location;
    this.location.click(()=>{
      console.log(this);
      let organsListContainer = new OrgansListContainer('organs-list-container',this);
      organsListContainer.appendToElement($('#disease'));
      if(window.innerWidth<=1200)
      $('#organ-select').animate({'margin-top':'325px'},500);
    });
  }

}

class OrgansService{

  constructor(){
    this.abdomens = new OrganType($('#abdomen'));

    this.thorax = new OrganType($('#thorax'));

    this.errors = [];
  }
  loadData(organsList){
    let thees = this;
    organsList.forEach(function(data) {
      switch(data['type']){
        /*arrays with organs ------------*/
        case 'Органы брюшной полости':
          if (thees.validateData(data)){
            let organ = thees.loadOrgan(data);
            if (organ)
              thees.abdomens.organs.push(organ);
          } else{
            let e = new DataError('неверные данные органа брюшной полости',organ);
            thees.errors.push(e);
          }

          break;

        case 'Органы грудной клетки':
          if (thees.validateData(data)){
            let organ = thees.loadOrgan(data);
            if (organ)
              thees.thorax.organs.push(organ);
          } else{
            let e = new DataError('неверные данные органа грудной клетки',organ);
            thees.errors.push(e);
          }
          break;
        /*END arrays with organs ------------*/

        /*descriptions to types of organs-----*/
        case 'описание: органы брюшной полости':

          if (thees.validateDescription(data)){
            let desc = thees.loadDescription(data);
            if (desc)
              thees.abdomens.description = desc;
          } else{
            let e = new DataError('неверные данные органа брюшной полости',desc);
            thees.errors.push(e);
          }

          break;

        case 'описание: органы грудной клетки':
          if (thees.validateDescription(data)){

            let desc = thees.loadDescription(data);
            if (desc)
              thees.abdomens.description = desc;
          } else{
            let e = new DataError('неверные данные органа грудной клетки',desc);
            thees.errors.push(e);
          }

          break;
        /*END descriptions to types of organs-----*/

        default:
          let e = new DataError('Введен неверный тип данных',data);
          thees.errors.push(e);
          break;
      }
    });
  }

  loadOrgan(data){
    switch(data.type){
      case 'Органы брюшной полости':
        try{
          let organ = new Organ(data.type, data.name,data.detailedDescription, data.photoImg1);
          return organ;
        } catch(e){
          this.errors.push(new DataError('Ошибка при загрузке органа брюшной полости', data));
        }
        return null;
        break;

      case 'Органы грудной клетки':
        try{
          let organ = new Organ(data.type, data.name,data.detailedDescription, data.photoImg1);
          return organ;
        } catch(e){
          this.errors.push(new DataError('Ошибка при загрузке органа грудной клетки', data));
        }
        return null;
        break;

    }

  }

  loadDescription(data){
    switch(data.type){
      case 'описание: органы брюшной полости':
        try{
          let desc = data.description;
          return desc;
        } catch(e){
          this.errors.push(new DataError('Ошибка при загрузке описания органа брюшной полости', data));
        }
        return null;
        break;

      case 'описание: органы грудной клетки':
        try{
          let desc = new Organ(data.description);
          return desc;
        } catch(e){
          this.errors.push(new DataError('Ошибка при загрузке описания органа грудной клетки', data));
        }
        return null;
        break;

    }
  }

  validateData(data){
        let requiredProps = 'type name detailedDescription photoImg1'.split(' ');
        let hasErrors = false;
        requiredProps.forEach(function(field) {
          if(!data[field] && data[field]!==null){
            this.errors.push(new DataError(`неверное поле ${field}`, data));
            hasErrors=true;
          }
        });
        return !hasErrors;
  }

  validateDescription(data){
        let requiredProps = 'type description'.split(' ');
        let hasErrors = false;
        requiredProps.forEach(function(field) {
          if(!data[field] && data[field]!==null){
            this.errors.push(new DataError(`неверное поле ${field}`, data));
            hasErrors=true;
          }
        });
        return !hasErrors;
  }

}
/*END Service-------------------------------------------------------------------*/

