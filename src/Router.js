import React, {Component} from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Lesson from "./Lesson"
import MainPage from "./MainPage";

export default class Router extends Component {

    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route exact path='/' component={MainPage}/>
                    <Route path='/lesson/:slug' component={Lesson}/>
                </Switch>
            </BrowserRouter>
        )
    }
}

