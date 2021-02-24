import React, {useState} from 'react'
import {Link} from "react-router-dom";

const CourseRow = (
    {
        deleteCourse,
        updateCourse,
        course,
        lastModified,
        title,
        owner
    }) => {
    const [editing, setEditing] = useState(false)
    const [newTitle, setNewTitle] = useState(title)

    const saveTitle = () => {
        setEditing(false)
        const newCourse = {
            ...course,
            title: newTitle
        }
        updateCourse(newCourse)
    }

    return (
        <tr>
            <td>
                {
                    !editing &&
                    <Link to="/courses/editor">
                        {title}
                    </Link>
                }
                {
                    editing &&
                    <input
                        onChange={(event) => setNewTitle(event.target.value)}
                        value={newTitle}
                        className="form-control"/>
                }
            </td>
            <td>{owner}</td>
            <td>{lastModified}</td>
            <td>
                {editing && <i onClick={() => deleteCourse(course)} className="fas fa-times"/>}
                <Link to="#">
                    {!editing && <i onClick={() => setEditing(true)} className="fas fa-edit"/>}
                </Link>
                {editing && <i onClick={() => saveTitle()} className="fas fa-check"/>}
            </td>
        </tr>
    )
}
export default CourseRow