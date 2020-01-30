import React from 'react';
import './App.css';
import './index.css';
import Event from "./components/Event";
import Card from "./components/Card";
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";

function App() {

    return (
        <div className="App">
            <header className="uk-width-1-1@l uk-flex uk-flex-center uk-flex-wrap uk-padding-medium-bottom">
                <nav className="uk-width-1-1@l uk-navbar-container">
                    <div className="uk-navbar-left  uk-width-1-2  uk-flex uk-flex-between uk-margin-auto">
                        <ul className="uk-navbar-nav">
                            <li className="uk-active"><a href="">События</a></li>
                            <li><a href="">Выставки</a></li>
                            <li><a href="">Фестивали</a></li>
                            <li><a href="">Концерты</a></li>
                            <li><a href="">Развлечения</a></li>
                        </ul>
                        <ul className="uk-navbar-nav">

                            <li><a href="">Вход</a></li>
                            <li><a href="">Регистрация</a></li>
                        </ul>
                    </div>
                </nav>

                <Router>
                    <div className={"uk-width-1-1@l"}>

                        <hr />
                        <Switch>
                            <Route exact path={'/'}>
                                <div  className="uk-width-1-1@l uk-flex uk-flex-center uk-flex-wrap uk-padding-medium-bottom">

                                <Card/>
                                </div>
                            </Route>
                            <Route exact render={(props) => <Event  {...props} /> }  path="/events/:slug" />
                        </Switch>
                    </div>
                </Router>


            </header>
        </div>
    );
}

export default App;
