import React, {Component} from 'react'
import {Accordion, Container, Divider, Header, Icon} from 'semantic-ui-react'


export default class LessonGroup extends Component {
    state = {activeIndex: -1}

    handleClick = (e, titleProps) => {
        const {index} = titleProps
        const {activeIndex} = this.state
        const newIndex = activeIndex === index ? -1 : index

        this.setState({activeIndex: newIndex})
    }

    render() {
        const {activeIndex} = this.state

        return (
            <Container fluid>
                <Header as='h2' textAlign='center'>Life on Life </Header>
                <Header sub textAlign='center'>Devotional Group Material</Header>
                <Divider hidden/>
                <Accordion fluid styled>
                    <Accordion.Title active={activeIndex === 0} index={0} onClick={this.handleClick}>
                        <Icon name='dropdown'/>
                        Introduction
                    </Accordion.Title>
                    <Accordion.Content active={activeIndex === 0}>
                        <p>
                            Intro Lesson
                        </p>
                    </Accordion.Content>
                    <Accordion.Title active={activeIndex === 1} index={1} onClick={this.handleClick}>
                        <Icon name='dropdown'/>
                        Creation
                    </Accordion.Title>
                    <Accordion.Content active={activeIndex === 1}>
                        <p>
                        </p>
                    </Accordion.Content>
                    <Accordion.Title active={activeIndex === 2} index={2} onClick={this.handleClick}>
                        <Icon name='dropdown'/>
                        Fall
                    </Accordion.Title>
                    <Accordion.Content active={activeIndex === 2}>
                        <p>
                        </p>
                    </Accordion.Content>
                    <Accordion.Title active={activeIndex === 3} index={3} onClick={this.handleClick}>
                        <Icon name='dropdown'/>
                        Redemption
                    </Accordion.Title>
                    <Accordion.Content active={activeIndex === 3}>
                        <p>
                        </p>
                    </Accordion.Content>

                </Accordion>
            </Container>
        )

    }


}