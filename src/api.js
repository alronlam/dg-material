const LessonsAPI = {
    lessons: [
        {slug: "title-slug", title: "Title", content: "Content"}
    ],
    all: function () {
        return this.lessons
    },
    get: function (slug) {
        const isLesson = p => p.slug === slug
        return this.lessons.find(isLesson)
    }
}

export default LessonsAPI