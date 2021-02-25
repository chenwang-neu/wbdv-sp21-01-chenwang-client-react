import React from "react";
import './editor.style.client.css';

const CourseEditor =({history}) =>{
    return (
        <div className="container">
            <div className="wbdv-editor-header bgcolor-darkgrey">
                <div className="row">
                    <div className="col-1 wbdv-editor-title">
                        <i onClick={() => history.goBack()} className="p-4 fas fa-times"/>
                    </div>
                    <div className="col-5 wbdv-editor-title">
                        Web Dev Selected Course
                    </div>
                </div>
                <div className="row">
                    <div className="col-8">
                        <ul className="nav nav-tabs">
                            <li className="col-2 nav-item">
                                <a className="nav-link color-grey" aria-current="page" href="#">Build</a>
                            </li>
                            <li className="col-2 nav-item">
                                <a className="nav-link bgcolor-black color-white" href="#">Theme</a>
                            </li>
                            <li className="col-2 nav-item">
                                <a className="nav-link color-grey" href="#">Store</a>
                            </li>
                            <li className="col-2 nav-item">
                                <a className="nav-link color-grey" href="#">Apps</a>
                            </li>
                            <li className="col-2 nav-item">
                                <a className="nav-link color-grey" href="#">Settings</a>
                            </li>
                            <i className="p-2 fas fa-plus fa-2x float-right color-white"/>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-4 bgcolor-black">
                    <ul className="list-group">
                        <br/>
                        <span className="p-2 btn btn-block btn-secondary color-white">Module 1 - jQuery
                        <i className="p-2 fas fa-times float-right color-white"/>
                        </span>
                        <span className="p-2 btn btn-block btn-primary color-white">Module 2 - React
                        <i className="p-2 fas fa-times float-right color-white"/>
                        </span>
                        <span className="p-2 btn btn-block btn-secondary color-white">Module 3 - Redux
                        <i className="p-2 fas fa-times float-right color-white"/>
                        </span>
                        <span className="p-2 btn btn-block btn-secondary color-white">Module 4 - Native
                        <i className="p-2 fas fa-times float-right color-white"/>
                        </span>
                        <span className="p-2 btn btn-block btn-secondary color-white">Module 5 - Angular
                        <i className="p-2 fas fa-times float-right color-white"/>
                        </span>
                        <span className="p-2 btn btn-block btn-secondary color-white">Module 6 - Node
                        <i className="p-2 fas fa-times float-right color-white"/>
                        </span>
                        <span className="p-2 btn btn-block btn-secondary color-white">Module 7 - Mongo
                        <i className="p-2 fas fa-times float-right color-white"/>
                        </span>
                        <div className="col-13">
                            <i className="p-3 fas fa-plus float-right color-white"/>
                        </div>
                    </ul>
                </div>
                <div className="col-8">
                    <br/>
                    <ul className="nav nav-pills">
                        <li className="nav-item col-2">
                            <a className="p-2 nav-link bgcolor-grey color-white" href="#">Topic 1</a>
                        </li>
                        <li className="nav-item col-2">
                            <a className="nav-link active color-white" href="#">Topic 2</a>
                        </li>
                        <li className="nav-item col-2">
                            <a className="p-2 nav-link bgcolor-grey color-white" href="#">Topic 3</a>
                        </li>
                        <li className="nav-item col-2">
                            <a className="p-2 nav-link bgcolor-grey color-white" href="#">Topic 4</a>
                        </li>
                        <i className="fas fa-plus-square fa-2x"/>
                    </ul>
                    <div className="p-3 col-13">
                        <i className="fas fa-toggle-off fa-2x icon-config float-right"/>
                        <span className=" btn btn-success color-white float-right">save</span>
                    </div>
                    <br/><br/>
                    <div className="p-2 col-12 wbdv-outer-border">
                        <h3>Heading Widget
                            <i className="fas fa-arrow-down float-right"/>
                            <i className="fas fa-arrow-up float-right"/>
                        </h3>
                        <br/>
                        <div className="col-12 wbdv-grid-border">
                            <h5>heading text</h5>
                        </div>
                        <br/>
                        <div className="col-13">
                            <select id="headingFld" className="form-control">
                                <option>Heading 1</option>
                                <option>Heading 2</option>
                            </select>
                        </div>
                        <br/>
                        <div className="col-13">
                            <input className="form-control"
                                   placeholder="Widget Name"/>
                        </div>
                        <br/>
                        <h5>Preview</h5>
                        <h3>Heading Text</h3>
                    </div>
                    <div className="p-3 col-12">
                        <i className="fas fa-plus-circle fa-2x float-right color-red"/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CourseEditor