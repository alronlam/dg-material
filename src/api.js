const LessonsAPI = {

    groupedLessons: [
        {
            groupTitle: 'Introduction',
            lessons: [
                {slug: "lol-intro", title: "What is the story of life?", content: "Content"},
            ]
        },
        {
            groupTitle: 'Lesson 1: Creation',
            lessons: [
                {slug: "creation-part-one", title: "The Author of Life", content: "Content"},
                {slug: "creation-part-two", title: "Made in His Image and Likeness", content: "Content"},
            ]
        },
        {
            groupTitle: 'Lesson 2: Fall',
            lessons: [
                {slug: "fall-part-one", title: "Original Sin", content: "Content"},
                {slug: "fall-part-two", title: "Consequences of Sin - Part One", content: "Content"},
                {slug: "fall-part-three", title: "Consequences of Sin - Part Two", content: "Content"},
            ]
        },
        {
            groupTitle: 'Lesson 3: Redemption',
            lessons: [
                {slug: "redemption-part-one", title: "Christ the Savior", content: "Content"},
                {slug: "redemption-part-two", title: "The New Covenant", content: "Content"},
            ]
        }


    ],
    getLesson: function (slug) {
        for (let groupedLesson in this.groupedLessons)
            for (let lesson in groupedLesson.lessons)
                if (lesson.slug === slug)
                    return lesson
        return null
    },
    allGroups: function () {
        return this.groupedLessons
    }
}


export default LessonsAPI
