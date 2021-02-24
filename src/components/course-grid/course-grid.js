import React from 'react'
import CourseCard from "./course-card";
import {Link} from "react-router-dom";
import CourseRow from "../course-table/course-row";

const CourseGrid = (props)=>
    <div className="container">
        <div className="container">
            <div className="gird-nav row">
                <div>Recent Documents</div>
                <div>
                    <select className="form-select">
                        <option value="owned-by-me">Owned by me</option>
                    </select>
                </div>
                <div className="col float-right">
                    <div className="grid-button float-right">
                        <Link to="#"> <i
                            className="fas fa-folder"/></Link>
                        <Link to="#"> <i
                            className="fas fa-sort-alpha-down"/></Link>
                        <Link to="/courses/table">
                            <i className="fas fa-list"/>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
        <div className="row">
            {
                props.courses.map((course) =>
                    <CourseCard
                        key={course._id}
                        updateCourse={props.updateCourse}
                        deleteCourse={props.deleteCourse}
                        course={course}
                        title={course.title}
                    />)
            }
        </div>
    </div>

export default CourseGrid