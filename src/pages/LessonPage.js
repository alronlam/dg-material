import React, { Component } from 'react';
import { Button, Container, Header, Icon } from 'semantic-ui-react';
import Divider from "semantic-ui-react/dist/es/elements/Divider/Divider";
import LessonsAPI from "../lessons/api";

export default class LessonPage extends Component {

    constructor(props) {
        super(props)

        const { slug } = this.props.match.params

        this.state = {
            lesson: LessonsAPI.getLesson(slug)
        }
    }

    render() {
        const { lesson } = this.state

        if (!lesson)
            return "Error, lesson not found!"

        return (
            <div>
                <Container text textAlign="justified" style={{ marginTop: '3em', marginBottom: '3em' }}>
                    <Header textAlign="center" as='h1'> {lesson.title} </Header>
                    <Divider />
                    <div dangerouslySetInnerHTML={{ __html: lesson.content }} />

                </Container>
                <Container textAlign={"center"}>
                    <Button color='black' icon labelPosition='left' href={'#'}>
                        <Icon name='backward' />
                        Back
                    </Button>
                </Container>
            </div>
        )

    }
}