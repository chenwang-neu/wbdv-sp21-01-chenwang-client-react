import React, {useEffect} from 'react'
import {connect} from 'react-redux'
import EditableItem from "../editable-item";
import {useParams} from 'react-router-dom';
import moduleService from "../../services/module-service"

const ModuleList = (
    {
        myModules = [],
        createModule,
        deleteModule,
        updateModule,
        findModulesForCourse
    }) => {
    const {layout, courseId, moduleId} = useParams();
    useEffect(() => {
        findModulesForCourse(courseId)
    }, [])
    return (
        <div className="col">
            <ul className="modules-list-group">
                {
                    myModules.map(module =>
                        <li className={`list-group-item ${module._id === moduleId ? 'active' : ''}`}>
                            <EditableItem
                                to={`/courses/${layout}/edit/${courseId}/${module._id}`}
                                key={module._id}
                                item={module}
                                updateItem={updateModule}
                                deleteItem={deleteModule}>
                            </EditableItem>
                        </li>
                    )
                }
                <div className="list-group-item text-primary">
                    <i className="fas fa-plus d-flex justify-content-center"
                       onClick={() => createModule(moduleId)}/>
                </div>
            </ul>
        </div>)
}

const stpm = (state) => {
    return {
        myModules: state.moduleReducer.modules
    }
}

const dtpm = (dispatch) => {
    return {
        createModule: (courseId) => {
            moduleService.createModule(courseId, {title: "New Module"})
                .then(actualModule =>
                    dispatch({
                        type: "CREATE_MODULE",
                        module: actualModule
                    }))
        },
        findModulesForCourse: (courseId) => {
            moduleService.findModulesForCourse(courseId)
                .then(modules => dispatch({
                    type: "FIND_MODULES_FOR_COURSE",
                    modules: modules
                }))
        },
        deleteModule: (item) => {
            moduleService.deleteModule(item._id)
                .then(status => dispatch({
                    type: "DELETE_MODULE",
                    moduleToDelete: item
                }))
        },
        updateModule: (module) => {
            moduleService.updateModule(module._id, module)
                .then(status => dispatch({
                    type: "UPDATE_MODULE",
                    module
                }))
        }
    }
}

export default connect(stpm, dtpm)
(ModuleList)