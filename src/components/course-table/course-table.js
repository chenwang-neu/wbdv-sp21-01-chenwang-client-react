import React from 'react'
import CourseRow from "./course-row";
import {Link} from "react-router-dom";

export default class CourseTable
    extends React.Component {

    constructor(props) {
        super(props)
    }

    render() {
        return(
            <div className="container">
                <table className="table">
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th>Owned by</th>
                            <th>Last modified</th>
                            <th>
                                <div className="table-button">
                                    <Link to="#">
                                        <i className="p-1 fas fa-folder"/></Link>
                                    <Link to="#">
                                        <i className="p-1 fas fa-sort-alpha-down"/></Link>
                                    <Link to="/courses/grid">
                                        <i className="p-1 fas fa-th"/>
                                    </Link>
                                </div>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                    {
                        this.props.courses.map((course) =>
                            <CourseRow
                                updateCourse={this.props.updateCourse}
                                deleteCourse={this.props.deleteCourse}
                                key={course._id}
                                course={course}
                                title={course.title}
                                owner={course.owner}
                                lastModified={course.lastModified}
                            />)
                    }
                    </tbody>
                </table>
            </div>
        )
    }
}