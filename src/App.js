import 'semantic-ui-css/semantic.min.css';
import React, {Component} from 'react';
import './App.css';
import {Button, Container, Header, Icon, Segment} from 'semantic-ui-react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import LessonPage from "./pages/LessonPage"
import MainPage from "./pages/MainPage";

export default class App extends Component {

    render() {
        return (
            <Container text style={{ marginBottom: '3em'}}>
                <Container fluid textAlign="center">
                    <Segment inverted>
                        <Header as='a' href="/" inverted>
                            Life on Life <br/>
                            Devotional Group Material
                        </Header>
                    </Segment>
                </Container>
                <BrowserRouter>
                    <Switch>
                        <Route exact path='/' component={MainPage}/>
                        <Route path='/:slug' component={LessonPage}/>
                    </Switch>
                </BrowserRouter>
            </Container>
        )
    }
}

