import 'semantic-ui-css/semantic.min.css';
import React, {Component} from 'react';
import './App.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import LessonPage from "./pages/LessonPage"
import MainPage from "./pages/MainPage";

export default class App extends Component {

    render() {
        return (
  
            <BrowserRouter>
                <Switch>
                    <Route exact path='/' component={MainPage}/>
                    <Route path='/:slug' component={LessonPage}/>
                </Switch>
            </BrowserRouter>

        )
    }
}

