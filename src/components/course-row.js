import React from "react";

const CourseRow = ({deleteCourse,course,title,owner}) =>
    <tr>
        <td>{title}</td>
        <td>{owner}</td>
        <td>
            <i onClick={() => deleteCourse(course)} className="fas fa-trash"></i>
        </td>
    </tr>

export default CourseRow