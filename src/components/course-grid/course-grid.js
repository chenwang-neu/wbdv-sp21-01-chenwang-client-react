import React from 'react'
import CourseCard from "./course-card";
import {Link} from "react-router-dom";
import '../components.style.client.css';

const CourseGrid = (props)=>
    <div className="container">
        <div className="row row-cols-1 row-cols-md-3 row-cols-lg-3">
            <div className="col d-none d-md-block">
                <h5>
                    Recent Documents
                </h5>
            </div>
            <div className="col d-none d-md-block">
                <h5>
                    Owned by me
                    <i className="fas fa-caret-down"/>
                </h5>
            </div>
            <div className="col float-right">
                <div className="float-right">
                    <i className="p-2 fas fa-folder color-black"/>
                    <i className="p-2 fas fa-sort-alpha-down color-black"/>
                    <Link to="/courses/table">
                        <i className="p-2 fas fa-list color-black"/>
                    </Link>
                </div>
            </div>
        </div>
        <div className="row">
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-6">
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
    </div>


export default CourseGrid