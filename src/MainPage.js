import React, {Component} from 'react'
import LessonGroups from "./LessonGroups";
import LessonsAPI from "./api"


export default class MainPage extends Component {

    constructor() {
        super()
        this.state = {
            groups: LessonsAPI.allGroups()
        }
    }

    render() {

        const {groups} = this.state

        return (
            <LessonGroups groups={groups}/>
        )

    }


}