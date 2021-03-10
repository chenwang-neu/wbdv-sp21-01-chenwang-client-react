import React from 'react'
import CourseTable from "./course-table/course-table";
import CourseGrid from "./course-grid/course-grid";
import CourseEditor from "./course-editor/course-editor";
import {Route} from "react-router-dom";
import courseService from "../services/course-service";
import CourseNavigation from "./course-navigation";
import './components.style.client.css';

class CourseManager extends React.Component {
    state = {
        courses: [],
        courseTitle: "",
    }

    componentDidMount = () =>
        courseService.findAllCourses()
            .then(courses => this.setState({courses}))

    addCourse = (newTitle) => {
        const newCourse = {
            owner: "Me",
            lastModified: "1/1/2021"
        }
        if (newTitle === '') {
            newCourse.title = "New Course"
        } else {
            newCourse.title = newTitle
        }
        courseService.createCourse(newCourse)
            .then(course => this.setState(
                (prevState) => ({
                    ...prevState,
                    courses: [
                        ...prevState.courses, course
                    ],
                    courseTitle: "",
                })))
    }

    deleteCourse = (courseToDelete) => {
        courseService.deleteCourse(courseToDelete._id)
            .then(status => {
                this.setState((prevState) => ({
                    ...prevState,
                    courses: prevState.courses.filter
                    (course => course._id !== courseToDelete._id)
                }))
            })
    }

    updateCourse = (course) => {
        courseService.updateCourse(course._id, course)
            .then(status => this.setState((prevState) => ({
                ...prevState,
                courses: prevState.courses.map(
                    (c) => c._id === course._id ? course : c)
            })))
    }

    render() {
        return(
            <div>
                <Route path="/courses/table" exact={true}>
                    <CourseNavigation
                        addCourse={this.addCourse}/>
                    <CourseTable
                        updateCourse={this.updateCourse}
                        deleteCourse={this.deleteCourse}
                        courses={this.state.courses}/>
                </Route>
                <Route path="/courses/grid" exact={true}>
                    <CourseNavigation
                        addCourse={this.addCourse}/>
                    <CourseGrid
                        updateCourse={this.updateCourse}
                        deleteCourse={this.deleteCourse}
                        courses={this.state.courses}/>
                </Route>
                <Route path={[
                    "/courses/:layout/edit/:courseId",
                    "/courses/:layout/edit/:courseId/:moduleId",
                    "/courses/:layout/edit/:courseId/:moduleId/:lessonId",
                    "/courses/:layout/edit/:courseId/:moduleId/:lessonId/:topicId"
                ]}
                       exact={true}
                       render={(props) => <CourseEditor {...props}/>}>
                </Route>
            </div>
        )
    }
}

export default CourseManager