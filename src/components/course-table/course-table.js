import React from 'react'
import CourseRow from "./course-row";
import {Link} from "react-router-dom";
import '../components.style.client.css';

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
                            <th className="d-none d-md-table-cell">Owned by</th>
                            <th className="d-none d-lg-table-cell">Last modified</th>
                            <th>
                                <div className="table-button float-right">
                                    <i className="p-1 fas fa-folder color-black"/>
                                    <i className="p-1 fas fa-sort-alpha-down color-black"/>
                                    <Link to="/courses/grid">
                                        <i className="p-1 fas fa-th color-black"/>
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