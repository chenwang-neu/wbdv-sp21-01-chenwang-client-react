import React,{useState} from 'react'
import {Link} from "react-router-dom";
import '../components.style.client.css';

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
        <div className="col">
            <div className="card">
                <img src="https://www.valuecoders.com/blog/wp-content/uploads/2016/08/react.png"
                     className="card-img-top"
                     alt="..."/>
                <div className="card-body">
                    {
                        !editing && <p>{title}</p>
                    }
                    {
                        editing &&
                        <input
                            onChange={(event) => setNewTitle(event.target.value)}
                            value={newTitle}
                            className="form-control"/>
                    }
                    <p className="card-text">Some description.</p>
                    <Link to={`/courses/grid/edit/${course._id}`} className="btn btn-primary btn-block">
                        {course.title}
                    </Link>
                    <Link to="#">
                        {!editing && <i onClick={() => setEditing(true)} className="p-2 fas fa-edit card-bottom-right"/>}
                    </Link>
                    <div className="card-top-right">
                        {editing && <i onClick={() => saveTitle()} className="p-2 fas fa-check color-green"/>}
                        {editing && <i onClick={() => deleteCourse(course)} className="p-2 fas fa-times color-red"/>}
                    </div>
                </div>
            </div>
        </div>
    )

}
export default CourseCard