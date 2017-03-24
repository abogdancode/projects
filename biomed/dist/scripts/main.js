"use strict";function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function organListMod(){return[{type:"описание: органы брюшной полости",description:"Спереди и с боков их расположение ограничивает брюшная стенка, пронизанная мышцами, жировой клетчаткой и соеди- нительнотканными образованиями. За кровоснабжение отве- чают кровеносные сосуды."},{type:"Органы брюшной полости",name:"надпочечники",detailedDescription:"(gl. suprarenalis) — парные эндокринные железы, расположенные над верхней частью почек позвоночных животных и человека.",photoImg1:"images/disease/organs/abdomen/adrenal-glands.jpg"},{type:"Органы брюшной полости",name:"почки",detailedDescription:"(лат. ren) — парный бобовидный орган, выполняющий посредством функции мочеобразования регуляцию химического гомеостаза организма.",photoImg1:"images/disease/organs/abdomen/kidneys.jpg"},{type:"Органы брюшной полости",name:"желчный пузырь",detailedDescription:"(лат. vesica biliaris) — орган позвоночных животных и человека, в котором накапливается поступающая из печени жёлчь для высвобождения в тонкий кишечник под воздействием гормона холецистокинина.",photoImg1:"images/disease/organs/abdomen/gallbladder.jpg"},{type:"Органы брюшной полости",name:"мочеточник",detailedDescription:"полый трубчатый орган, соединяющий почку с мочевым пузырём (у большинства млекопитающих) или клоакой (у птиц, рептилий и земноводных)",photoImg1:"images/disease/organs/abdomen/ureter.jpg"},{type:"Органы брюшной полости",name:"печень",detailedDescription:"(лат. jecur, jecor, hepar, др.-греч.) — жизненно важная железа внешнейсекреции позвоночных животных, втом числе и человека, находящаясяв брюшной полости (полости живота)под диафрагмой и выполняющаябольшое количество различных фи-зиологических функций. Печень явля-ется самой крупной железой позво-ночных.",photoImg1:"images/disease/organs/abdomen/liver.jpg"},{type:"Органы брюшной полости",name:"селезенка",detailedDescription:"(лат. splen, lien, др.-греч. σπλήν) — непарный паренхиматозный орган брюшной полости; самый крупный лимфоидный орган у позвоночных.",photoImg1:"images/disease/organs/abdomen/spleen.jpg"},{type:"Органы брюшной полости",name:"желудочно-кишечный тракт",detailedDescription:"Пищевари́тельный, или желу́дочно-кише́чный тракт (ЖКТ). Система органов у человека, предназначенная для переработки и извлечения из пищи питательных веществ, всасывания их в кровь и лимфу и выделения из организма непереваренных остатков.",photoImg1:"images/disease/organs/abdomen/gastrointestinal-tract.jpg"}]}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var _get=function e(t,n,r){null===t&&(t=Function.prototype);var i=Object.getOwnPropertyDescriptor(t,n);if(void 0===i){var s=Object.getPrototypeOf(t);return null===s?void 0:e(s,n,r)}if("value"in i)return i.value;var a=i.get;if(void 0!==a)return a.call(r)},_createClass=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),BaseElement=function(){function e(){_classCallCheck(this,e),this.element=null}return _createClass(e,[{key:"appendToElement",value:function(e){this.createElement(),$("."+this.element.attr("class")).remove(),e.append(this.element),this.element.css("display","none"),this.element.fadeIn(500)}},{key:"createElement",value:function(){var e=this.getElementString();this.element=$(e)}},{key:"getElementString",value:function(){throw"Please override getElementString() in BaseElement"}}]),e}(),OrgansListContainer=function(e){function t(e,n){_classCallCheck(this,t);var r=_possibleConstructorReturn(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return r.classList=e,r.organGroup=n,r}return _inherits(t,e),_createClass(t,[{key:"createElement",value:function(){_get(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"createElement",this).call(this),new Header3("organs-list-container__header",this.organGroup.organs[0].type).appendToElement(this.element),new OrgansList("organs-list",this.organGroup.organs).appendToElement(this.element),new Paragraph("organs-list-container__description",this.organGroup.description).appendToElement(this.element)}},{key:"getElementString",value:function(){return'<div class="'+this.classList+'"></div>'}}]),t}(BaseElement),OrgansList=function(e){function t(e,n){_classCallCheck(this,t);var r=_possibleConstructorReturn(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return r.classList=e,r.organs=n,r}return _inherits(t,e),_createClass(t,[{key:"createElement",value:function(){_get(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"createElement",this).call(this);var e=this;this.organs.forEach(function(t){var n=new OrganList__organ("organ-list__organ",t.name);n.appendToElement(e.element),n.element.click(function(){new Definition("definition",t).appendToElement($("#disease"))})})}},{key:"getElementString",value:function(){return'<ul class="'+this.classList+'"></ul>'}}]),t}(BaseElement),Definition=function(e){function t(e,n){_classCallCheck(this,t);var r=_possibleConstructorReturn(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return r.classList=e,r.organ=n,r}return _inherits(t,e),_createClass(t,[{key:"createElement",value:function(){_get(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"createElement",this).call(this),new Header1("definition__header_colored","Определение:").appendToElement(this.element),new DefinitionRow("definition-row",this.organ).appendToElement(this.element)}},{key:"getElementString",value:function(){return'<div class="'+this.classList+'"></div>'}}]),t}(BaseElement),DefinitionRow=function(e){function t(e,n){_classCallCheck(this,t);var r=_possibleConstructorReturn(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return r.classList=e,r.organ=n,r}return _inherits(t,e),_createClass(t,[{key:"createElement",value:function(){_get(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"createElement",this).call(this),new DefinitionColumnImg("definition-column-img",this.organ).appendToElement(this.element),new DefinitionColumnDescription("definition-column-description",this.organ).appendToElement(this.element)}},{key:"getElementString",value:function(){return'<div class="'+this.classList+' row"></div>'}}]),t}(BaseElement),DefinitionColumnImg=function(e){function t(e,n){_classCallCheck(this,t);var r=_possibleConstructorReturn(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return r.classList=e,r.organ=n,r}return _inherits(t,e),_createClass(t,[{key:"createElement",value:function(){_get(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"createElement",this).call(this),new Image("definition__image img-responsive",this.organ.photoImg1).appendToElement(this.element)}},{key:"getElementString",value:function(){return'<div class="'+this.classList+' col-lg-6 col-md-6 col-sm-6"></div>'}}]),t}(BaseElement),DefinitionColumnDescription=function(e){function t(e,n){_classCallCheck(this,t);var r=_possibleConstructorReturn(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return r.classList=e,r.organ=n,r}return _inherits(t,e),_createClass(t,[{key:"createElement",value:function(){_get(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"createElement",this).call(this),new DefinitionColumnCell("definition-column-cell",this.organ).appendToElement(this.element)}},{key:"getElementString",value:function(){return'<div class="'+this.classList+' col-lg-6 col-md-6 col-sm-6"></div>'}}]),t}(BaseElement),DefinitionColumnCell=function(e){function t(e,n){_classCallCheck(this,t);var r=_possibleConstructorReturn(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return r.classList=e,r.organ=n,r}return _inherits(t,e),_createClass(t,[{key:"createElement",value:function(){_get(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"createElement",this).call(this),new Header1("definition__header_big",this.organ.name).appendToElement(this.element),new Paragraph("definition__description",this.organ.detailedDescription).appendToElement(this.element);var e=new CommonDiv("angle angle_top_left"),n=new CommonDiv("angle angle_top_right"),r=new CommonDiv("angle angle_bot_left"),i=new CommonDiv("angle angle_bot_right");e.appendToElement(this.element),n.appendToElement(this.element),r.appendToElement(this.element),i.appendToElement(this.element)}},{key:"getElementString",value:function(){return'<div class="'+this.classList+'"></div>'}}]),t}(BaseElement),Image=function(e){function t(e,n){_classCallCheck(this,t);var r=_possibleConstructorReturn(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return r.classList=e,r.imageSrc=n,r}return _inherits(t,e),_createClass(t,[{key:"getElementString",value:function(){return'<img src="'+this.imageSrc+'" alt="" class="'+this.classList+'">'}}]),t}(BaseElement),Header1=function(e){function t(e,n){_classCallCheck(this,t);var r=_possibleConstructorReturn(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return r.classList=e,r.text=n,r}return _inherits(t,e),_createClass(t,[{key:"getElementString",value:function(){return'<h1 class="'+this.classList+'">'+this.text+"</h1>"}}]),t}(BaseElement),Header3=function(e){function t(e,n){_classCallCheck(this,t);var r=_possibleConstructorReturn(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return r.classList=e,r.text=n,r}return _inherits(t,e),_createClass(t,[{key:"getElementString",value:function(){return'<h3 class="'+this.classList+'">'+this.text+"</h3>"}}]),t}(BaseElement),OrganList__organ=function(e){function t(e,n){_classCallCheck(this,t);var r=_possibleConstructorReturn(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return r.classList=e,r.name=n,r}return _inherits(t,e),_createClass(t,[{key:"getElementString",value:function(){return'<li class="'+this.classList+'"><a href="#definition">'+this.name+"</a></li>"}}]),t}(BaseElement),Paragraph=function(e){function t(e,n){_classCallCheck(this,t);var r=_possibleConstructorReturn(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return r.classList=e,r.text=n,r}return _inherits(t,e),_createClass(t,[{key:"getElementString",value:function(){return'<p class="'+this.classList+'">'+this.text+"</p>"}}]),t}(BaseElement),CommonDiv=function(e){function t(e){_classCallCheck(this,t);var n=_possibleConstructorReturn(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return n.classList=e,n}return _inherits(t,e),_createClass(t,[{key:"getElementString",value:function(){return'<div class="'+this.classList+'"></div>'}}]),t}(BaseElement),_createClass=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),Organ=function e(t,n,r,i){_classCallCheck(this,e),this.type=t,this.name=n,this.detailedDescription=r,this.photoImg1=i},OrganType=function e(t){var n=this;_classCallCheck(this,e),this.organs=[],this.description="",this.location=t,this.location.click(function(){console.log(n),new OrgansListContainer("organs-list-container",n).appendToElement($("#disease")),window.innerWidth<=1200&&$("#organ-select").animate({"margin-top":"325px"},500)})},OrgansService=function(){function e(){_classCallCheck(this,e),this.abdomens=new OrganType($("#abdomen")),this.thorax=new OrganType($("#thorax")),this.errors=[]}return _createClass(e,[{key:"loadData",value:function(e){var t=this;e.forEach(function(e){switch(e.type){case"Органы брюшной полости":if(t.validateData(e)){var n=t.loadOrgan(e);n&&t.abdomens.organs.push(n)}else{var r=new DataError("неверные данные органа брюшной полости",organ);t.errors.push(r)}break;case"Органы грудной клетки":if(t.validateData(e)){var i=t.loadOrgan(e);i&&t.thorax.organs.push(i)}else{var s=new DataError("неверные данные органа грудной клетки",organ);t.errors.push(s)}break;case"описание: органы брюшной полости":if(t.validateDescription(e)){var a=t.loadDescription(e);a&&(t.abdomens.description=a)}else{var o=new DataError("неверные данные органа брюшной полости",desc);t.errors.push(o)}break;case"описание: органы грудной клетки":if(t.validateDescription(e)){var l=t.loadDescription(e);l&&(t.abdomens.description=l)}else{var c=new DataError("неверные данные органа грудной клетки",desc);t.errors.push(c)}break;default:var u=new DataError("Введен неверный тип данных",e);t.errors.push(u)}})}},{key:"loadOrgan",value:function(e){switch(e.type){case"Органы брюшной полости":try{return new Organ(e.type,e.name,e.detailedDescription,e.photoImg1)}catch(t){this.errors.push(new DataError("Ошибка при загрузке органа брюшной полости",e))}return null;case"Органы грудной клетки":try{return new Organ(e.type,e.name,e.detailedDescription,e.photoImg1)}catch(t){this.errors.push(new DataError("Ошибка при загрузке органа грудной клетки",e))}return null}}},{key:"loadDescription",value:function(e){switch(e.type){case"описание: органы брюшной полости":try{return e.description}catch(t){this.errors.push(new DataError("Ошибка при загрузке описания органа брюшной полости",e))}return null;case"описание: органы грудной клетки":try{return new Organ(e.description)}catch(t){this.errors.push(new DataError("Ошибка при загрузке описания органа грудной клетки",e))}return null}}},{key:"validateData",value:function(e){var t="type name detailedDescription photoImg1".split(" "),n=!1;return t.forEach(function(t){e[t]||null===e[t]||(this.errors.push(new DataError("неверное поле "+t,e)),n=!0)}),!n}},{key:"validateDescription",value:function(e){var t="type description".split(" "),n=!1;return t.forEach(function(t){e[t]||null===e[t]||(this.errors.push(new DataError("неверное поле "+t,e)),n=!0)}),!n}}]),e}(),organsList=organListMod(),organsService=new OrgansService;organsService.loadData(organsList),console.log(organsService);