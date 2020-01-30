import {Component} from "react";
import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import {Pagination, getUniqueArrayValues, getMaxAndMinValueFromArray} from "../helpers/utilities";
import RadioButtonsGrooup from "./RadioButtonsGrooup";
import PaginationComponent from "./PaginationComponent";
import EventComponent from "./EventComponent";


export default class Card extends Component {
    constructor(props) {
        super(props);

        this.state = {
            events: [],
            transitionIn: 0,
            filterCategory: [],
            filterPrice: 0,
            filteredString: '',
            favourites: [],
            data: [
                {
                    "id": 1,
                    "title": "Фестиваль света",
                    "slug": "razdnik-festival-sveta",
                    "description": "Петербург славится своими культурными традициями, и одна из них зарождается прямо на наших глазах — это Фестиваль света. Праздник проходит второй год подряд и привлекает тысячи зрителей. В этот раз темой стал юбилей Октябрьской революции.",
                    "image": '/img/event4.jpeg',
                    "body": "4 и 5 ноября в Петербурге пройдёт очередной Фестиваль света. На этот раз действо захватит сразу две площадки — Дворцовую площадь и Петроградскую набережную.\nНа фасады Зимнего дворца и Главного штаба будут транслировать 3D-представление с использованием технологии видеомэппинга, лазерных и пиротехнических эффектов. На стенах штаба зрители увидят спектакль о ключевых моментах 1917 года, причём здание будет принимать облик то Путиловского завода, то особняка Матильды Кшесинской, то Александринского театра. На Зимнем дворце тем временем появятся картины, воспевающие Петербург. Здесь будет всё, что дорого каждому горожанину: мосты, львы и сфинксы, дворы-колодцы, белые ночи и другие символы Северной столицы.\nВ этом году на Дворцовой площади впервые пройдёт конкурс мастеров видео-арта. Команды из Италии, России, Польши, Франции и Испании выберут и проиллюстрируют одну из песен о  Петербурге. Зрители смогут проголосовать за понравившуюся работу и выбрать лучший мультимедийный спектакль.\nШоу займёт весь вечер с 19:00 до 23:00, старт каждые 15 минут. Увидеть это впечатляющее действо можно абсолютно бесплатно.\nКроме светового представления на Дворцовой устроят и шоу реконструкторов. Будет несколько площадок, где воссоздадут разные моменты из истории России.\nВторая площадка фестиваля расположится в месте, которое сейчас ассоциируется с революционными событиями 1917 года. Главным участником действа станет легендарный крейсер «Аврора». Видеопроекции будут транслироваться прямо на корабль, и перед зрителями оживёт его история, неразрывно связанная с судьбой государства. Шоу будет идти два дня с 19:00 до 22:00.\nДо этого все желающие смогут стать зрителями конкурса  «Смотр строя и песни». Он начнётся 4 ноября в 15:00. В воскресенье в дневное время рядом с  «Авророй»  устроят интерактивную зону, проведут викторины и конкурсы, организуют экскурсии по местам революционных событий.\nФестиваль света устраивают в Северной столице в четвёртый раз. В марте этого года площадкой стал стадион «Санкт-Петербург», за который проголосовало большинство горожан.  Прошлой осенью перед зрителями пронеслись история, мифы и легенды Петербурга, ожившие на стенах Исаакиевского собора. А стартовал фестиваль в апреле 2016 года на площади Островского.",
                    "price": 3000,
                    "is_free": false,
                    "categories": [
                        "holiday",
                        "festival"
                    ]
                },
                {
                    "id": 2,
                    "title": "Татьянин день",
                    "slug": "tatianin-den",
                    "description": "25 января отмечается праздник под названием «Татьянин день». В той или иной степени он воспринимается как день студентов уже два с половиной века, однако статус памятного дня России имеет лишь с 2005 года.",
                    "image": '/img/event5.jpeg',
                    "body": "Первоначально Татьянин день был исключительно христианским и народно-христианским праздником, в который совершалась память раннехристианской мученицы Татьяны Римской, пострадавшей в Риме III века при императоре Александре Севере. Он отмечался 12 января по юлианскому календарю, что соответствует 25 января по календарю григорианскому. По одной из версий, камергер Иван Шувалов подал императрице Елизавете Петровне прошение об учреждении Московского университета именно в День святой мученицы Татьяны, поскольку его мать носила это имя. ",
                    "price": 4000,
                    "is_free": false,
                    "categories": [
                        "holiday",
                        "festival"
                    ]
                },
                {
                    "id": 3,
                    "title": "Масленница",
                    "slug": "maslennitsa",
                    "description": "Попробовать блины со всего света, принять участие в задорных конкурсах, выиграть призы от Партнёров, проявить силу и удаль в русских забавах – все это и многое другое ожидает гостей на праздничных гуляньях в Широкая Масленица в «Дубках»",
                    "image": '/img/event1.jpeg',
                    "body": "Масленица – один из самых веселых и долгожданных праздников в году, празднование которого длиться семь дней. В это время люди веселятся, ходят в гости, устраивают гулянья и кушают блины. Масленица в 2018году начнется 12 февраля, а датой её окончания станет 18 февраля.",
                    "price": 100,
                    "is_free": false,
                    "categories": [
                        "holiday",
                        "festival"
                    ]
                },
                {
                    "id": 4,
                    "title": "Международный женский день",
                    "slug": "zhensky-den",
                    "description": "Современное празднование Женского дня уже не имеет цели утверждения равенства, а считается днем весны, женской красоты, нежности, душевной мудрости и внимания к женщине, вне зависимости от её статуса и возраста.",
                    "image": '/img/event6.jpeg',
                    "body": "В этот день женщины всех континентов, нередко разделённые национальными границами или этническими, языковыми, культурными, экономическими и политическими различиями, имеют возможность собраться вместе и вспомнить о традиции, которая олицетворяет собой, по крайней мере, несколько десятилетий борьбы за равенство, справедливость, мир и развитие.",
                    "price": 1000,
                    "is_free": false,
                    "categories": [
                        "holiday",
                        "festival"
                    ]
                },
                {
                    "id": 5,
                    "title": "День всех влюбленных",
                    "slug": "den-vlublonnih",
                    "description": "Считается, что День святого Валентина существует уже более 16 веков, но праздники Любви известны с еще более ранних времен — со времен древних языческих культур. Например, римляне в середине февраля праздновали фестиваль эротизма, называемый Lupercalia, в честь богини любви Juno Februata. ",
                    "image": '/img/event8.jpeg',
                    "body": "У праздника есть и конкретный «виновник» — христианский священник Валентин. Эта история датируется примерно 269 годом, в то время Римской Империей правил император Клавдий II. Воюющая римская армия испытывала острый недостаток солдат для военных походов, и военачальник был убежден, что главный враг его «наполеоновских» планов — браки, ибо женатый легионер о славе империи думает гораздо меньше, чем о том, как семью прокормить. И, дабы сохранить в своих солдатах воинский дух, император издал указ, запрещающий легионерам жениться.\n",
                    "price": null,
                    "is_free": true,
                    "categories": [
                        "holiday",
                        "festival"
                    ]
                },
                {
                    "id": 6,
                    "title": "День России",
                    "slug": "den-rossii",
                    "description": "День России – важный государственный праздник Российской Федерации, отмечаемый ежегодно 12 июня. До 2002 года он именовался как День принятия Декларации о государственном суверенитете России. ",
                    "image": '/img/event9.jpeg',
                    "body": "Кстати, именно 12 июня помимо «независимости» Россия обрела и первого Президента – в этот день, но уже в 1991 году состоялись первые в истории страны всенародные открытые выборы президента, на которых одержал победу Б.Н. Ельцин. Именно он своим указом № 1113 от 2 июня 1994 года придал 12 июня государственное значение, а сам праздник получил название – День принятия Декларации о государственном суверенитете Российской Федерации. Позже, для простоты, его стали называть Днем независимости.",
                    "price": null,
                    "is_free": true,
                    "categories": [
                        "holiday",
                        "festival"
                    ]
                },
                {
                    "id": 7,
                    "title": "День Победы",
                    "slug": "den-pobedi",
                    "description": "День России – важный государственный праздник Российской Федерации, отмечаемый ежегодно 12 июня. До 2002 года он именовался как День принятия Декларации о государственном суверенитете России. ",
                    "image": '/img/event10.jpeg',
                    "body": "Кстати, именно 12 июня помимо «независимости» Россия обрела и первого Президента – в этот день, но уже в 1991 году состоялись первые в истории страны всенародные открытые выборы президента, на которых одержал победу Б.Н. Ельцин. Именно он своим указом № 1113 от 2 июня 1994 года придал 12 июня государственное значение, а сам праздник получил название – День принятия Декларации о государственном суверенитете Российской Федерации. Позже, для простоты, его стали называть Днем независимости.",
                    "price": null,
                    "is_free": true,
                    "categories": [
                        "holiday",
                        "festival"
                    ]
                },
                {
                    "id": 8,
                    "title": "Рождество",
                    "slug": "rozhdestvo",
                    "description": "День России – важный государственный праздник Российской Федерации, отмечаемый ежегодно 12 июня. До 2002 года он именовался как День принятия Декларации о государственном суверенитете России. ",
                    "image": '/img/event7.jpeg',
                    "body": "Кстати, именно 12 июня помимо «независимости» Россия обрела и первого Президента – в этот день, но уже в 1991 году состоялись первые в истории страны всенародные открытые выборы президента, на которых одержал победу Б.Н. Ельцин. Именно он своим указом № 1113 от 2 июня 1994 года придал 12 июня государственное значение, а сам праздник получил название – День принятия Декларации о государственном суверенитете Российской Федерации. Позже, для простоты, его стали называть Днем независимости.",
                    "price": null,
                    "is_free": true,
                    "categories": [
                        "holiday",
                        "event",
                        "festival"
                    ]
                }
            ]
        }
    }

    componentWillMount() {
        this.setState({events: Pagination(this.state.data, 1, 6), transitionIn: this.state.transitionIn + 1})

    }

    paginate = (page) => {
        this.setState({events: Pagination(this.state.data, page, 6), transitionIn: this.state.transitionIn + 1})
    }

    handleCategory = (category) => {
        let filteredItems = this.state.data.filter((event) => event.categories.includes(category));
       this.setState({events: Pagination(filteredItems, 1, 6), filterCategory : category}, (state) => this.setState({transitionIn: this.state.transitionIn + 1}));
    }

    filterByPrice = (price) => {
        let filteredItems = this.state.data.filter((event) => event.price <= price);
        this.setState({events: Pagination(filteredItems, 1, 6), filterPrice : price});
    }

    filterByTitle = (title) => {
        let filteredItems = this.state.data.filter((event) => event.title.toLowerCase().indexOf(title.toLowerCase()) !== -1 || event.description.toLowerCase().indexOf(title.toLowerCase()) !== -1 );
        this.setState({events: Pagination(filteredItems, 1, 6) ,filteredString: title, transitionIn: this.state.transitionIn + 1});
    }

    addToFavorite = (item) => {
        this.setState({favourites : [...this.state.favourites,item]});
    }

    showFavorites = (evt) => {
        evt.preventDefault();
        this.setState({events: Pagination(this.state.favourites, 1, 6), transitionIn: this.state.transitionIn + 1})
    }

    resetForm = (evt) => {
        evt.preventDefault();
        this.setState({events: Pagination(this.state.data, 1, 6), transitionIn: this.state.transitionIn + 1,filteredString:'',filterPrice:'',filterCategory:''});
    }
    render() {
        let {data} = this.state.events;
        let {page, paginateLinksArray} = this.state.events;


        let {min: minPrice, max: maxPrice} = getMaxAndMinValueFromArray(this.state.data,'price');

        return (

                <ReactCSSTransitionGroup
                    transitionName="example"
                    transitionAppear={true}
                    className={"uk-width-1-1@l"}
                    transitionAppearTimeout={500}
                    transitionEnterTimeout={500}
                    transitionLeaveTimeout={1000}
                   >
                    <form onSubmit={this.resetForm} className="uk-flex uk-flex-wrap uk-flex-between uk-search uk-form-stacked uk-width-1-2@l uk-margin-auto uk-margin-medium-bottom  uk-search-navbar">
                        <div className="uk-width-1-1@l uk-margin-auto">
                            <input  onBlur={(evt) => this.filterByTitle(evt.target.value)} className="uk-input uk-form-width-large uk-form-large" type="text" placeholder="Поиск по событиям"/>
                        </div>
                        <div className="uk-width-1-1@l uk-margin uk-grid-small uk-flex-center uk-flex uk-child-width-auto uk-grid">
                            <RadioButtonsGrooup checkedRadioButton={this.state.filterCategory} radioButtons={getUniqueArrayValues(this.state.data,'categories')} handleCategory={this.handleCategory}/>
                        </div>
                        <div className={"uk-margin uk-width-1-1@l uk-flex uk-flex-center"}>
                          <div className={"uk-flex uk-width-1-2@l uk-flex-column uk-margin-medium-right"}>
                            <label for={"price"}>Фильтр по цене</label>
                        <input id={"price"} className="uk-range" type="range" min={minPrice} max={maxPrice} step={1} onChange={(evt) => this.filterByPrice(evt.target.value)}/>
                          </div>
                            <input className={"uk-input uk-form-width-medium"} type={"text"} disabled={true} value={this.state.filterPrice}/>
                        </div>
                        <button className={"uk-button uk-button-default"}>Сбросить</button>
                        <button onClick={this.showFavorites} className={"uk-button uk-button-default"}>Посмотреть избранное</button>
                    </form>
                    <div key={this.state.transitionIn} className={"uk-width-1-1@l uk-flex uk-flex-center uk-flex-wrap example"}>
                        {data.map(event => <EventComponent event={event}/>)}
                      <PaginationComponent currentPage={page} paginate={this.paginate} paginateLinksArray={paginateLinksArray}/>
                    </div>
                </ReactCSSTransitionGroup>


        )


    }
}
