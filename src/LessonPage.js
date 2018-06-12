import React, {Component} from 'react'
import LessonsAPI from "./api";

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
            <div>
                <h1>{lesson.title}</h1>
                <p>
                    {lesson.content}
                </p>
            </div>
        )

    }
}