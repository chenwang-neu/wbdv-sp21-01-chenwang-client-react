import React, {useState, useEffect} from 'react'
import {connect} from 'react-redux'
import HeadingWidget from "./heading-widget";
import ParagraphWidget from "./paragraph-widget";
import widgetService from "../../../services/widget-service";
import {useParams} from "react-router-dom";

const WidgetList = (
    {
        widgets = [],
        createWidget,
        deleteWidget,
        updateWidget,
        findWidgetsForTopic

    }) => {
    const {layout,courseId,moduleId,lessonId,topicId} = useParams()
    const [editingWidget, setEditingWidget] = useState({});

    useEffect(() => {
        findWidgetsForTopic(topicId)
    }, [findWidgetsForTopic, topicId])

    return(
        <div>
            {JSON.stringify(widgets)}
            <i onClick={()=> createWidget(topicId)} className="fas fa-plus fa-2x float-right"/>
            <ul className="list-group">
                {
                    widgets.map(widget =>
                        <li className="list-group-item" key={widget.id}>
                            {
                                widget.type === "HEADING" &&
                                <HeadingWidget
                                    widget={widget}
                                    updateWidget = {updateWidget}
                                    deleteWidget = {deleteWidget}
                                />
                            }
                            {
                                widget.type === "PARAGRAPH" &&
                                <ParagraphWidget
                                    widget={widget}
                                    updateWidget = {updateWidget}
                                    deleteWidget = {deleteWidget}
                                />
                            }
                        </li>
                    )
                }
            </ul>
        </div>
    )
}

const stpm =(state)=>{
    return {
        widgets:state.widgetReducer.widgets
    }
}

const dtpm =(dispatch)=>({
    findWidgetsForTopic:(topicId)=>{
        widgetService.findWidgetsForTopic(topicId)
            .then(widgets=> dispatch({
                type:'FIND_ALL_WIDGETS_FOR_TOPIC',
                widgets
            }))
    },

    createWidget:(topicId)=>{
        widgetService.createWidget(topicId, {type: "HEADING", size: 1, text: "New Widget"})
            .then(widget => dispatch({
                type:'CREATE_WIDGET',
                widget
            }))
    },

    updateWidgetForTopic: (widget) =>{
        widgetService.updateWidget(widget.id,widget)
            .then(status =>dispatch({
                type:'UPDATE_WIDGET',
                widget
            }))
    },

    deleteWidgetForTopic: (widget) =>{
        widgetService.deleteWidget(widget.id)
            .then(status=>dispatch({
                type:'DELETE_WIDGET',
                widgetToDelete:widget
            }))
    }
})

export default connect(stpm,dtpm)(WidgetList)