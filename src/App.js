import React, { Component } from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import 'semantic-ui-css/semantic.min.css';
import { Container, Header, Segment } from 'semantic-ui-react';
import './App.css';
import LessonPage from "./pages/LessonPage";
import MainPage from "./pages/MainPage";

export default class App extends Component {
    constructor(props) {
        super(props)
        document.title = "Life on Life"
    }

    render() {
        return (
            <Container text style={{ marginBottom: '3em' }}>
                <Container fluid textAlign="center">
                    <Segment inverted>
                        <Header as='a' href="/" inverted>
                            Life on Life <br />
                            Discipleship Group Material
                        </Header>
                    </Segment>
                </Container>
                <HashRouter basename='/'>
                    <Switch>
                        <Route exact path='/' component={MainPage} />
                        <Route path='/:slug' component={LessonPage} />
                    </Switch>
                </HashRouter>
            </Container>
        )
    }
}

