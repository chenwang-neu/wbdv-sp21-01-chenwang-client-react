import React from "react";

const CourseEditor =({history}) =>
    <div>
        <h2>Course Editor</h2>
        <i onClick={() => history.goBack()} className="fas fa-times float-right"/>
    </div>

export default CourseEditor