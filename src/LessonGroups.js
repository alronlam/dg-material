import React, {Component} from 'react'
import {Accordion, Container, Divider, Header, Icon} from 'semantic-ui-react'


export default class LessonGroups extends Component {


    constructor(props) {
        super(props)

        const {groups} = props

        this.state = {
            activeIndex: -1,
            groups: groups
        }
    }

    handleClick = (e, titleProps) => {
        const {index} = titleProps
        const {activeIndex} = this.state
        const newIndex = activeIndex === index ? -1 : index

        this.setState({activeIndex: newIndex})
    }

    renderLesson(lesson) {
        return (
            <p key={lesson.slug}>{lesson.title}</p>
        )
    }

    renderGroup(group, index) {
        const {groupTitle} = group
        const {lessons} = group
        const {activeIndex} = this.state

        return (
            <div>
                <Accordion.Title active={activeIndex === index} index={index} onClick={this.handleClick}>
                    <Icon name='dropdown'/>
                    {groupTitle}
                </Accordion.Title>
                <Accordion.Content active={activeIndex === index}>
                    {lessons.map(item => this.renderLesson(item))}
                </Accordion.Content>
            </div>
        )
    }

    render() {
        const {groups} = this.state

        return (
            <Container fluid>
                <Header as='h2' textAlign='center'>Life on Life </Header>
                <Header sub textAlign='center'>Devotional Group Material</Header>
                <Divider hidden/>
                <Accordion fluid styled>
                    {groups.map((item, index) => this.renderGroup(item, index))}
                </Accordion>
            </Container>
        )

    }


}