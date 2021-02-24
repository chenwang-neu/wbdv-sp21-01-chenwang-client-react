import React,{useState} from 'react'
import {Link} from "react-router-dom";

const CourseCard = (
    {
        deleteCourse,
        updateCourse,
        course,
        title,
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

    return(
        <div className="col-4">
            <div className="card">
                <img src="https://www.valuecoders.com/blog/wp-content/uploads/2016/08/react.png" className="card-img-top"
                     alt="..."/>
                <div className="card-body">
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
                    <p className="card-text">Some description.</p>
                    <Link to="/courses/editor" className="btn btn-primary">
                        {course.title}
                    </Link>
                    {editing && <i onClick={() => deleteCourse(course)} className="fas fa-times"/>}
                    <Link to="#">
                        {!editing && <i onClick={() => setEditing(true)} className="fas fa-edit"/>}
                    </Link>
                    {editing && <i onClick={() => saveTitle()} className="fas fa-check"/>}
                </div>
            </div>
        </div>
    )


}
export default CourseCard