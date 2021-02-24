import React from 'react'
import CourseTable from "./course-table/course-table";
import CourseGrid from "./course-grid/course-grid";
import CourseEditor from "./course-editor/course-editor";
import {Route} from "react-router-dom";
import courseService from "../services/course-service";

class CourseManager extends React.Component {
    state = {
        courses: [],
        courseTitle: "",
    }

    componentDidMount = () =>
        courseService.findAllCourses()
            .then(courses => this.setState({courses}))

    addCourse = () => {
        const newCourse = {
            owner: "Me",
            lastModified: "1/1/2021"
        }
        if (this.state.courseTitle === '') {
            newCourse.title = "Default Course Title"
        } else {
            newCourse.title = this.state.courseTitle
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
                <Route path="/courses/table">
                    <div className="wbdv-sticky-nav-bar container">
                        <div className="row">
                            <div className="col-1">
                                <i className="p-2 fas fa-bars float-right fa-2x"/></div>
                            <div className="p-2 col-2">
                                <h4>
                                    CourseManager
                                </h4>
                            </div>
                            <div className="p-2 col-8">
                                <input type="text" className="form-control wbdv-input"
                                       id="search for course" placeholder="New Course Title"
                                       value={this.state.courseTitle}
                                       onChange={(event) =>
                                           this.setState({courseTitle: event.target.value})}/>
                            </div>
                            <div className="col-1">
                                <i onClick={this.addCourse}
                                   className="p-2 fa-plus-circle float-right fas fa-2x">
                                </i>
                            </div>
                            <div style={{position:'fixed',right:'20px',bottom:'20px'}}>
                                <i onClick={this.addCourse}
                                   className="p-2 fa-plus-circle fas fa-4x">
                                </i>
                            </div>
                        </div>
                    </div>
                    <CourseTable
                        updateCourse={this.updateCourse}
                        deleteCourse={this.deleteCourse}
                        courses={this.state.courses}/>
                </Route>
                <Route path="/courses/grid">
                    <div className="wbdv-sticky-nav-bar container">
                        <div className="row">
                            <div className="col-1">
                                <i className="p-2 icon-white fas fa-bars float-right fa-2x"/>
                            </div>
                            <div className="p-2 col-2">
                                <h4>
                                    CourseManager
                                </h4>
                            </div>
                            <div className="p-2 col-8">
                                <input type="text" className="form-control wbdv-input"
                                       id="search for course" placeholder="New Course Title"
                                       value={this.state.courseTitle}
                                       onChange={(event) =>
                                           this.setState({courseTitle: event.target.value})}/>
                            </div>
                            <div className="col-1">
                                <i onClick={this.addCourse}
                                   className="p-2 fa-plus-circle float-right fas fa-2x"/>
                            </div>
                            <div style={{position:'fixed',right:'20px',bottom:'20px'}}>
                                <i onClick={this.addCourse}
                                   className="p-2 fa-plus-circle fas fa-4x"/>
                            </div>
                        </div>
                    </div>
                    <CourseGrid
                        updateCourse={this.updateCourse}
                        deleteCourse={this.deleteCourse}
                        courses={this.state.courses}/>
                </Route>
                <Route path="/courses/editor"
                       render={(props) => <CourseEditor {...props}/>}>
                </Route>
            </div>
        )
    }
}

export default CourseManager