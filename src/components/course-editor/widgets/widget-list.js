import React, {useState, useEffect} from 'react'
import {connect} from 'react-redux'
import HeadingWidget from "./heading-widget";
import ParagraphWidget from "./paragraph-widget";
import ListWidget from "./list-widget";
import ImageWidget from "./image-widget";
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
    //const [editingWidget, setEditingWidget] = useState({});

    useEffect(() => {
        findWidgetsForTopic(topicId)
    }, [findWidgetsForTopic, topicId])

    return(
        <div>
            <i onClick={()=> createWidget(topicId)} className="fas fa-plus fa-2x float-right"/>
            <ul className="list-group">
                {
                    widgets && widgets.map(widget =>
                        <li className="list-group-item" key={widget.id}>
                            {
                                widget.type === "HEADING" &&
                                <HeadingWidget
                                    widget={widget}
                                    widgetToUpdate = {updateWidget}
                                    widgetToDelete = {deleteWidget}
                                />
                            }
                            {
                                widget.type === "PARAGRAPH" &&
                                <ParagraphWidget
                                    widget={widget}
                                    widgetToUpdate = {updateWidget}
                                    widgetToDelete = {deleteWidget}
                                />
                            }
                            {
                                widget.type === "LIST" &&
                                <ListWidget
                                    widget={widget}
                                    widgetToUpdate = {updateWidget}
                                    widgetToDelete = {deleteWidget}
                                />
                            }
                            {
                                widget.type === "IMAGE" &&
                                <ImageWidget
                                    widget={widget}
                                    widgetToUpdate = {updateWidget}
                                    widgetToDelete = {deleteWidget}
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

const dtpm = (dispatch) => ({
    findWidgetsForTopic: (topicId) => {
        widgetService.findWidgetsForTopic(topicId)
            .then(widgets => dispatch({
                type: "FIND_ALL_WIDGETS_FOR_TOPIC",
                widgets: widgets
            }))
    },
    createWidget: (topicId) => {
        widgetService.createWidget(topicId, {type: "HEADING", size: 1, text: "New Widget", widgetOrder:0,
            height: 0, width: 0, src: ''})
            .then(widget => dispatch({
                type: "CREATE_WIDGET",
                widget: widget
            }))
    },
    updateWidget: (widget) => {
        widgetService.updateWidget(widget.id, widget)
            .then(status => dispatch({
                type: "UPDATE_WIDGET",
                updateWidget: widget
            }))
    },
    deleteWidget: (widget) => {
        widgetService.deleteWidget(widget.id)
            .then(status => dispatch({
                type: "DELETE_WIDGET",
                widgetToDelete: widget
            }))
    }
})

export default connect(stpm,dtpm)(WidgetList)