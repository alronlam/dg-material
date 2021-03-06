import {preface_content} from "./Preface";
import {usage_content} from "./Usage";
import {lesson_intro_story_of_life_content} from "./starter_pack/Lesson_Intro_Story_Of_Life";
import {lesson_1_1_content} from "./starter_pack/Lesson_1_1";
import {lesson_1_2_content} from "./starter_pack/Lesson_1_2";
import {lesson_2_1_content} from "./starter_pack/Lesson_2_1";
import {lesson_2_2_content} from "./starter_pack/Lesson_2_2";
import {lesson_2_3_content} from "./starter_pack/Lesson_2_3";
import {lesson_3_1_content} from "./starter_pack/Lesson_3_1";
import {lesson_3_2_content} from "./starter_pack/Lesson_3_2";

import {lordship_lesson_1_content} from "./lordship/Lesson_1"
import {lordship_lesson_2_content} from "./lordship/Lesson_2"
import {lordship_lesson_3_content} from "./lordship/Lesson_3"
import {lordship_lesson_4_content} from "./lordship/Lesson_4"
import {lordship_lesson_5_content} from "./lordship/Lesson_5"
import {lordship_lesson_6_content} from "./lordship/Lesson_6"
import {lordship_lesson_7_content} from "./lordship/Lesson_7"
import {lordship_lesson_8_content} from "./lordship/Lesson_8"

import {afterword_content} from "./Afterword";

const LessonsAPI = {

    groupedLessons: [
        {
            groupTitle: 'Introduction',
            lessons: [
                {slug:"lol-preface", title: "The Discipleship Roadmap", content: preface_content},
                {slug:"material-usage", title: "How to Use this Material", content: usage_content},
            ]
        },
        {
            groupTitle: 'Starter Pack',
            lessons:[
                {slug: "story-of-life", title: "Lesson 1: The Story of Life", content: lesson_intro_story_of_life_content},
                {slug: "creation-part-one", title: "Lesson 2: Creation Part 1", content: lesson_1_1_content},
                {slug: "creation-part-two", title: "Lesson 3: Creation Part 2", content: lesson_1_2_content},
                {slug: "fall-part-one", title: "Lesson 4: Fall Part 1", content: lesson_2_1_content},
                {slug: "fall-part-two", title: "Lesson 5: Fall Part 2", content: lesson_2_2_content},
                {slug: "fall-part-three", title: "Lesson 6: Fall Part 3", content: lesson_2_3_content},
                {slug: "redemption-part-one", title: "Lesson 7: Redemption Part 1", content: lesson_3_1_content},
                {slug: "redemption-part-two", title: "Lesson 8: Redemption Part 2", content: lesson_3_2_content},
            ]
        },
        {
            groupTitle: 'Lordship of Jesus',
            lessons:[
                {slug: "repentance-obedience", title:"Lesson 1: Repentance and Obedience", content: lordship_lesson_1_content},
                {slug: "regeneration", title:"Lesson 2: Regeneration", content: lordship_lesson_2_content},
                {slug: "justification", title:"Lesson 3: Justification", content: lordship_lesson_3_content},
                {slug: "solus-christus", title: "Lesson 4: Solus Christus (In Christ Alone)", content: lordship_lesson_4_content},
                {slug: "sola-gratia", title: "Lesson 5: Sola Gratia (By Grace Alone)", content: lordship_lesson_5_content},
                {slug: "sola-fide", title: "Lesson 6: Sola Fide (Through Faith Alone)", content: lordship_lesson_6_content},
                {slug: "sola-scriptura", title: "Lesson 7: Sola Scriptura (As Revealed in Scripture Alone)", content: lordship_lesson_7_content},
                {slug: "soli-deo-gloria", title: "Lesson 8: Soli Deo Gloria (To God Alone Be The Glory)", content: lordship_lesson_8_content},
            ]
        },
        {
            groupTitle: 'Appendix',
            lessons: [
                {slug: "how-shall-we-live", title: "How now shall we live?", content: afterword_content},
            ]
        }


    ],
    getLesson: function (slug) {

        var matchedLesson

        this.groupedLessons.forEach(function (group) {
            group.lessons.forEach(function (lesson) {
                if (lesson.slug === slug) {
                    matchedLesson = lesson
                }
            })
        })

        return matchedLesson
    },
    allGroups: function () {
        return this.groupedLessons
    }
}


export default LessonsAPI
