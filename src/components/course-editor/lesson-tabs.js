import React, {useEffect} from 'react'
import {connect} from 'react-redux'
import EditableItem from "../editable-item";
import {Link, useParams} from "react-router-dom";
import lessonService from "../../services/lesson-service"

const LessonTabs = (
    {
        lessons=[],
        createLesson,
        deleteLesson,
        updateLesson,
        findLessonsForModule
    }) => {
    const {layout,courseId, moduleId} = useParams();
    useEffect(() => {
        findLessonsForModule(moduleId)
    }, [moduleId])
    return (<div className="col-8">
        <ul className="nav nav-tabs justify-content-end">
            {
                lessons.map(lesson =>
                    <li className='nav-item'>
                        <Link className="nav-link" aria-current="page">
                            <EditableItem
                                to={`/courses/${layout}/edit/${courseId}/${moduleId}/${lesson._id}`}
                                key={lesson._id}
                                item={lesson}
                                deleteItem={deleteLesson}
                                updateItem={updateLesson}>
                            </EditableItem>
                        </Link>
                    </li>
                )
            }
            <li className='nav-item'>
                <Link onClick={() => createLesson(moduleId)} className='nav-link active'>
                    +
                </Link>
            </li>
        </ul>
    </div>)
}

const stpm = (state) => ({
    lessons: state.lessonReducer.lessons
})

const dtpm = (dispatch) => {
    return {
        createLesson: (moduleId) => {
            lessonService.createLesson(moduleId, {title: "New Lesson"})
                .then(lessonFromServer =>
                    dispatch({
                        type: 'CREATE_LESSON',
                        lesson: lessonFromServer
                    }))
        },
        findLessonsForModule: (moduleId) => {
            lessonService.findLessonsForModule(moduleId)
                .then(lessons => dispatch({
                    type: "FIND_LESSONS_FOR_MODULE",
                    lessons: lessons
                }))
        },
        deleteLesson: (item) => {
            lessonService.deleteLesson(item._id)
                .then(status => dispatch({
                    type: 'DELETE_LESSON',
                    lessonToDelete: item
                }))
        },
        updateLesson: (lesson) => {
            lessonService.updateLesson(lesson._id, lesson)
                .then(status => dispatch({
                    type: 'UPDATE_LESSON',
                    lesson
                }))
        }
    }
}

export default connect(stpm, dtpm)
(LessonTabs)