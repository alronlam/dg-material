import React, {Component} from 'react'
import LessonGroups from "../components/LessonGroups";
import LessonsAPI from "../lessons/api"


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