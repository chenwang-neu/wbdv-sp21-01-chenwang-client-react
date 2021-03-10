import React, {useEffect, useState}from "react";
import {Link, useParams} from "react-router-dom";
import ModuleList from "./module-list";
import moduleReducer from "../../reducers/module-reducer";
import lessonReducer from "../../reducers/lesson-reducer";
import {combineReducers, createStore} from "redux";
import {Provider} from "react-redux";
import LessonTabs from "./lesson-tabs";
import TopicPills from "./topic-pills";
import topicReducer from "../../reducers/topic-reducer";
import courseService from "../../services/course-service"


const reducer = combineReducers({
    moduleReducer: moduleReducer,
    lessonReducer: lessonReducer,
    topicReducer: topicReducer
})

const store = createStore(reducer)

const CourseEditor = () => {
    const {layout, courseId} = useParams();
    const [title, setTitle] = useState("")

     useEffect(() => {
         courseService.findCourseById(courseId).then((actualCourse) => setTitle(actualCourse.title))
     }, [])

    return (
        <Provider store={store}>
            <div className="container">
                <div className="row">
                    <Link to={`/courses/${layout}`}>
                        <i className="p-4 fas fa-2x fa-times"/>
                    </Link>
                    <h2>CourseEditor
                        <br/>
                        <h3>WebDev - {title}</h3>
                    </h2>
                </div>
                <div className="row">
                    <div className="col-4">
                        <ModuleList/>
                    </div>
                    <div className="col-8">
                        <LessonTabs/>
                        <br/>
                        <TopicPills/>
                    </div>
                </div>
            </div>
        </Provider>
    )
}

export default CourseEditor


