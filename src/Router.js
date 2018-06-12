import React, {Component} from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import LessonPage from "./LessonPage"
import MainPage from "./MainPage";

export default class Router extends Component {

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

