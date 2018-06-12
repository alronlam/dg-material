import React, {Component} from 'react'
import {render} from 'react-dom'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import App from "./App"
import Lesson from "./Lesson"

export default class Router extends Component {

    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route exact path='/' component={App}/>
                    <Route path='/lesson/:slug' component={Lesson}/>
                </Switch>
            </BrowserRouter>
        )
    }
}

