import {preface_content} from "./Preface";
import {usage_content} from "./Usage";
import {lesson_intro_story_of_life_content} from "./Lesson_Intro_Story_Of_Life";
import {lesson_1_1_content} from "./Lesson_1_1";
import {lesson_1_2_content} from "./Lesson_1_2";
import {lesson_2_1_content} from "./Lesson_2_1";
import {lesson_2_2_content} from "./Lesson_2_2";
import {lesson_2_3_content} from "./Lesson_2_3";
import {lesson_3_1_content} from "./Lesson_3_1";
import {lesson_3_2_content} from "./Lesson_3_2";
import {afterword_content} from "./Afterword";

const LessonsAPI = {

    groupedLessons: [
        {
            groupTitle: 'Introduction',
            lessons: [
                {slug:"lol-preface", title: "Preface", content: preface_content},
                {slug:"material-usage", title: "How to Facilitate the use of this Material", content: usage_content},
                {slug: "story-of-life", title: "The Story of Life", content: lesson_intro_story_of_life_content},
            ]
        },
        {
            groupTitle: 'Starter Pack Lesson 1: Creation',
            lessons: [
                {slug: "creation-part-one", title: "The Author of Life", content: lesson_1_1_content},
                {slug: "creation-part-two", title: "Made in His Image and Likeness", content: lesson_1_2_content},
            ]
        },
        {
            groupTitle: 'Starter Pack Lesson 2: Fall',
            lessons: [
                {slug: "fall-part-one", title: "Original Sin", content: lesson_2_1_content},
                {slug: "fall-part-two", title: "Consequences of Sin - Part One", content: lesson_2_2_content},
                {slug: "fall-part-three", title: "Consequences of Sin - Part Two", content: lesson_2_3_content},
            ]
        },
        {
            groupTitle: 'Starter Pack Lesson 3: Redemption',
            lessons: [
                {slug: "redemption-part-one", title: "Christ the Savior", content: lesson_3_1_content},
                {slug: "redemption-part-two", title: "The New Covenant", content: lesson_3_2_content},
            ]
        },
        {
            groupTitle: 'Afterword',
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
