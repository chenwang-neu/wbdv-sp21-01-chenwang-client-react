import React from 'react'
import CourseTable from "./course-table";
import CourseGrid from "./course-grid";
import CourseEditor from "./course-editor";

class CourseManager extends React.Component {
    state = {
        courses : [
            {title:"CS5610",owner:"alice"},
            {title:"CS5500",owner:"alice"},
            {title:"CS5200",owner:"alice"},
            {title:"CS4300",owner:"alice"},
        ]
    }

    addCourse = () =>{
        const newCourse ={
            title:"New Course",
            owner:"New Owner"
        }
        this.state.courses.push(newCourse)
        this.setState(this.state)
    }

    deleteCourse = (courseToDelete) => {
        const newCourses = this.state.courses
            .filter(course => course !== courseToDelete)
        this.setState({
            courses: newCourses
        })
    }

    render() {
        return(
            <div>
                <h1>Course Manager</h1>
                <button onClick={this.addCourse}>AddCourse</button>
                <CourseTable deleteCourse={this.deleteCourse} courses={this.state.courses}/>
                <CourseGrid deleteCourse={this.deleteCourse} courses={this.state.courses}/>
                <CourseEditor/>
            </div>
            )
    }
}


export default CourseManager
