import React, {useState} from 'react'
import {Link} from "react-router-dom";
import '../components.style.client.css';

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
                    <Link to={`/courses/table/edit/${course._id}`}>
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
            <td className="d-none d-md-table-cell">{owner}</td>
            <td className="d-none d-lg-table-cell">{lastModified}</td>
            <td>
                <Link className="d-none d-lg-table-cell" to={`/courses/${course._id}/quizzes`}>
                    quizzes
                </Link>
            </td>
            <td>
                <div className="table-btn">
                    {editing && <i onClick={() => deleteCourse(course)} className="p-2 fas fa-times color-red float-right"/>}
                    {!editing && <i onClick={() => setEditing(true)} className="p-2 fas fa-edit float-right"/>}
                    {editing && <i onClick={() => saveTitle()} className="p-2 fas fa-check color-green float-right"/>}
                </div>
            </td>
        </tr>
    )
    }
export default CourseRow