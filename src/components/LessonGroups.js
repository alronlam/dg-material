import React, {Component} from 'react'
import {Accordion, Icon, List} from 'semantic-ui-react'


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
            <List.Item as='a' key={lesson.slug} href={lesson.slug}>{lesson.title}</List.Item>
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
                    <List selection animated>
                        {lessons.map(item => this.renderLesson(item))}
                    </List>
                </Accordion.Content>
            </div>
        )
    }

    render() {
        const {groups} = this.state

        return (
            <Accordion fluid styled>
                {groups.map((item, index) => this.renderGroup(item, index))}
            </Accordion>
        )

    }


}