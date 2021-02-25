import React, {useState} from 'react'
import './components.style.client.css';


const CourseNavigation =({addCourse}) => {
    const [newTitle, setNewTitle] = useState("")

    const saveTitle = () => {
        addCourse(newTitle)
        setNewTitle( "")
    }

    return (
        <div className="wbdv-sticky-nav-bar container">
            <div className="row">
                <div className="col-1 nav-btn">
                    <i className="p-2 fas fa-bars float-right fa-2x"/></div>
                <div className="p-2 col-3 d-none d-lg-block">
                    <h4>
                        Course Manager
                    </h4>
                </div>
                <div className="wbdv-input p-2 col-lg-7 col-9">
                    <input type="text" className="form-control wbdv-input"
                           id="search for course" placeholder="New Course Title"
                           value={newTitle}
                           onChange={(event) =>
                               setNewTitle(event.target.value)}/>
                </div>
                <div className="col-1 nav-btn">
                    <i onClick={() => saveTitle()}
                       className="p-2 fa-plus-circle float-right fas fa-2x color-red">
                    </i>
                </div>
                <div className="add-bottom-right">
                    <i onClick={() => saveTitle()}
                       className="p-2 fa-plus-circle fas fa-4x color-red">
                    </i>
                </div>
            </div>
        </div>
    )
}

export default CourseNavigation