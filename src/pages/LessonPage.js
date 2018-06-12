import React, {Component} from 'react'
import {Container, Header} from 'semantic-ui-react'
import LessonsAPI from "../lessons/api";

export default class LessonPage extends Component {

    constructor(props) {
        super(props)

        const {slug} = this.props.match.params

        this.state = {
            lesson: LessonsAPI.getLesson(slug)
        }
    }

    render() {
        const {lesson} = this.state

        if (!lesson)
            return "Error, lesson not found!"

        return (
            <Container text style={{marginTop: '7em'}}>
                <Header as='h1'> {lesson.title} </Header>
                <p>
                    {lesson.content}
                </p>
            </Container>
        )

    }
}