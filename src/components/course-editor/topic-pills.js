import React, {useEffect} from 'react'
import {connect} from 'react-redux'
import EditableItem from "../editable-item";
import {useParams} from "react-router-dom";
import topicsService from "../../services/topic-service"
import "../components.style.client.css"

const TopicPills = (
    {
        topics=[],
        createTopic,
        deleteTopic,
        updateTopic,
        findTopicsForLesson
    }) => {
    const {layout, courseId, moduleId, lessonId, topicId} = useParams();
    useEffect(() => {
        findTopicsForLesson(lessonId)
    }, [moduleId, lessonId])
    return (<div className="col-8">
        <ul className="nav nav-pills justify-content-end">
            {
                topics.map(topic =>
                    <li className="nav-item">
                        <EditableItem
                            to={`/courses/${layout}/edit/${courseId}/${moduleId}/${lessonId}/${topic._id}`}
                            key={topic._id}
                            item={topic}
                            active={topicId === topic._id}
                            deleteItem={deleteTopic}
                            updateItem={updateTopic}>
                        </EditableItem>
                    </li>
                )
            }
            <li className="nav-item text-primary">
                <i className="wbdv-icon fas fa-plus d-flex justify-content-center"
                   onClick={() => createTopic(lessonId)}/>
            </li>
        </ul>
    </div>)
}

const stpm = (state) => {
    return {
        topics: state.topicReducer.topics
    }
}

const dtpm = (dispatch) => ({
    createTopic: (lessonId) => {
        topicsService.createTopic(lessonId, {title: "New Topic"})
            .then(actualTopic =>
                dispatch({
                    type: "CREATE_TOPIC",
                    topic: actualTopic
                }))
    },
    findTopicsForLesson: (lessonId) => {
        topicsService.findTopicsForLesson(lessonId)
            .then(topics => dispatch({
                type: "FIND_TOPICS_FOR_LESSON",
                topics: topics
            }))
    },
    deleteTopic: (item) => {
        topicsService.deleteTopic(item._id)
            .then(status => dispatch({
                type: "DELETE_TOPIC",
                topicToDelete: item
            }))
    },

    updateTopic: (topic) => {
        topicsService.updateTopic(topic._id, topic)
            .then(status => dispatch({
                type: "UPDATE_TOPIC",
                topic
            }))
    }
})

export default connect(stpm, dtpm)
(TopicPills)