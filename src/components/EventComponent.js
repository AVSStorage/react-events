import * as React from 'react';
import NoMoneySVG from "../no-money.svg";

export default function EventComponent({event}) {
    return (
        <div key={event.id} className={"card uk-width-1-4 uk-margin-medium-left uk-margin-medium-bottom"}>
        <div className="content  uk-width-1-4">

            <div className="front">

                <div className="uk-inline uk-width-1-1">
                    <img className="uk-padding-remove card-image" src={process.env.PUBLIC_URL + event.image} alt={event.title}/>
                    <div
                        className="uk-overlay uk-overlay-primary uk-position-bottom ">
                        <h3>{event.title}</h3>
                        <p>{event.description.substring(0, 70) + '....'}</p>
                        {event.is_free ? (<img width={'60'} height={'60'} src={NoMoneySVG}/>) : (
                            <p>{event.price + ' ₽'}</p>
                        )}
                    </div>
                </div>
            </div>
            <div className="back">
                <button className="uk-button uk-button-default uk-background-default uk-button-small button-fav" onClick={() => this.addToFavorite(event)}>В избранное</button>
                {event.body.substring(0, 250) + '....'}
                <a href={`/events/${event.slug}`}>Подробнее</a>
            </div>
        </div>
    </div>
    )
}