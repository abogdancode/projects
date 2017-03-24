/**
 * Created by AlexBogdan on 23.03.2017.
 */
class BaseElement{
  constructor(){
    this.element = null;
  }

  appendToElement(el){
    this.createElement();

    $('.'+this.element.attr('class')).remove();

    el.append(this.element);
    this.element.css('display','none');
    this.element.fadeIn(500);
  }

  createElement(){
    let s = this.getElementString();
    this.element = $(s);
  }

  getElementString() {
    throw 'Please override getElementString() in BaseElement'
  }

}


/*-----------------------------Blocks--------------------------------*/

/*-----------------------------organs-list-container--------------------------------*/
class OrgansListContainer extends BaseElement{
  constructor(classList,organGroup){
    super();
    this.classList = classList;
    this.organGroup = organGroup;
  }

  createElement(){
    super.createElement();
    let organsListContainer__header = new Header3('organs-list-container__header',this.organGroup.organs[0].type);
    organsListContainer__header.appendToElement(this.element);

    let organsList = new OrgansList('organs-list',this.organGroup.organs);
    organsList.appendToElement(this.element);

    let organsListContainer__description = new Paragraph('organs-list-container__description',this.organGroup.description);
    organsListContainer__description.appendToElement(this.element);
  }


  getElementString(){
    return `<div class="${this.classList}"></div>`;
  }
}
/*-----------------------------END organs-list-container----------------------------*/


/*-----------------------------organs-list--------------------------------*/
class OrgansList extends BaseElement{
  constructor(classList,organs){
    super();
    this.classList = classList;
    this.organs = organs;
  }

  createElement(){
    super.createElement();
    let thees = this;
    this.organs.forEach(function(field) {
      let organList__organ = new OrganList__organ('organ-list__organ',field.name);
      organList__organ.appendToElement(thees.element);
      organList__organ.element.click(()=>{
        let definition = new Definition('definition',field);
        definition.appendToElement($('#disease'));
      })
    });
  }


  getElementString(){
    return `<ul class="${this.classList}"></ul>`;
  }
}
/*-----------------------------END organs-list----------------------------*/


/*-----------------------------definition--------------------------------*/
class Definition extends BaseElement{
  constructor(classList,organ){
    super();
    this.classList = classList;
    this.organ = organ;
  }

  createElement(){
    super.createElement();
    let definition__header_colored = new Header1('definition__header_colored','Определение:');
    definition__header_colored.appendToElement(this.element);
    let definitionRow = new DefinitionRow('definition-row',this.organ);
    definitionRow.appendToElement(this.element);

  }


  getElementString(){
    return `<div class="${this.classList}"></div>`;
  }
}
/*-----------------------------END definition----------------------------*/


/*-----------------------------definition-row--------------------------------*/
class DefinitionRow extends BaseElement{
  constructor(classList,organ){
    super();
    this.classList = classList;
    this.organ = organ;
  }

  createElement(){
    super.createElement();

    let definitionColumnImg = new DefinitionColumnImg('definition-column-img',this.organ);
    definitionColumnImg.appendToElement(this.element);

    let definitionColumnDescription = new DefinitionColumnDescription('definition-column-description',this.organ);
    definitionColumnDescription.appendToElement(this.element);

  }


  getElementString(){
    return `<div class="${this.classList} row"></div>`;
  }
}
/*-----------------------------END definition-row----------------------------*/

/*-----------------------------definition-column-img--------------------------------*/
class DefinitionColumnImg extends BaseElement{
  constructor(classList,organ){
    super();
    this.classList = classList;
    this.organ = organ;
  }

  createElement(){
    super.createElement();
    let definition__image = new Image('definition__image img-responsive',this.organ.photoImg1);
    definition__image.appendToElement(this.element);

  }

  getElementString(){
    return `<div class="${this.classList} col-lg-6 col-md-6 col-sm-6"></div>`;
  }
}
/*-----------------------------END definition-column-img----------------------------*/

/*-----------------------------definition-column-description--------------------------------*/
class DefinitionColumnDescription extends BaseElement{
  constructor(classList,organ){
    super();
    this.classList = classList;
    this.organ = organ;
  }

  createElement(){
    super.createElement();
    let definitionColumnCell = new DefinitionColumnCell('definition-column-cell',this.organ);
    definitionColumnCell.appendToElement(this.element);
  }

  getElementString(){
    return `<div class="${this.classList} col-lg-6 col-md-6 col-sm-6"></div>`;
  }
}
/*-----------------------------END definition-column-img----------------------------*/

/*-----------------------------definition-column-cell--------------------------------*/
class DefinitionColumnCell extends BaseElement{
  constructor(classList,organ){
    super();
    this.classList = classList;
    this.organ = organ;
  }

  createElement(){
    super.createElement();
    let definition__header_big = new Header1('definition__header_big',this.organ.name);
    definition__header_big.appendToElement(this.element);

    let definition__description = new Paragraph('definition__description',this.organ.detailedDescription);
    definition__description.appendToElement(this.element);

    let commonDiv0 = new CommonDiv('angle angle_top_left');
    let commonDiv1 = new CommonDiv('angle angle_top_right');
    let commonDiv2 = new CommonDiv('angle angle_bot_left');
    let commonDiv3 = new CommonDiv('angle angle_bot_right');
    commonDiv0.appendToElement(this.element);
    commonDiv1.appendToElement(this.element);
    commonDiv2.appendToElement(this.element);
    commonDiv3.appendToElement(this.element);

  }

  getElementString(){
    return `<div class="${this.classList}"></div>`;
  }
}
/*-----------------------------END definition-column-cell----------------------------*/




/*-------------------------end blocks-------------------------------------------------*/


/*-------------------------elements-------------------------------------------------*/






/*-----------------------------image--------------------------------*/
class Image extends BaseElement{
  constructor(classList,imageSrc){
    super();
    this.classList = classList;
    this.imageSrc = imageSrc;
  }

  getElementString(){
    return `<img src="${this.imageSrc}" alt="" class="${this.classList}">`;
  }
}
/*-----------------------------END Header1----------------------------*/


/*-----------------------------Header1--------------------------------*/
class Header1 extends BaseElement{
  constructor(classList,text){
    super();
    this.classList = classList;
    this.text = text;
  }

  getElementString(){
    return `<h1 class="${this.classList}">${this.text}</h1>`;
  }
}
/*-----------------------------END Header1----------------------------*/

/*-----------------------------Header3--------------------------------*/
class Header3 extends BaseElement{
  constructor(classList,text){
    super();
    this.classList = classList;
    this.text = text;
  }

  getElementString(){
    return `<h3 class="${this.classList}">${this.text}</h3>`;
  }
}
/*-----------------------------END Header3----------------------------*/


/*-----------------------------organ-list__organ--------------------------------*/
class OrganList__organ extends BaseElement{
  constructor(classList, name){
    super();
    this.classList = classList;
    this.name = name;
  }

  getElementString(){
    return `<li class="${this.classList}"><a href="#definition">${this.name}</a></li>`;
  }
}
/*-----------------------------END organ-list__organ----------------------------*/

/*-----------------------------organs-list-container__description--------------------------------*/
class Paragraph extends BaseElement{
  constructor(classList, text){
    super();
    this.classList = classList;
    this.text = text;
  }

  getElementString(){
    return `<p class="${this.classList}">${this.text}</p>`;
  }
}
/*-----------------------------END organs-list-container__description----------------------------*/

/*-----------------------------organs-list-container__description--------------------------------*/
class CommonDiv extends BaseElement{
  constructor(classList){
    super();
    this.classList = classList;
  }

  getElementString(){
    return `<div class="${this.classList}"></div>`;
  }
}
/*-----------------------------END organs-list-container__description----------------------------*/


