const initialState = {
    topics: []
}

const topicReducer = (state=initialState, action) => {
    switch (action.type) {
        case "FIND_TOPICS_FOR_LESSON":
            return {
                ...state,
                topics: action.topics
            }
        case "CREATE_TOPIC":
            return {
                topics: [
                    ...state.topics,
                    action.topic
                ]
            }
        case "DELETE_TOPIC":
            return {
                topics: state.topics.filter(topic => {
                    return topic._id !== action.topicToDelete._id;
                })
            }
        case "UPDATE_TOPIC":
            return {
                topics: state.topics.map(topic => {
                    if(topic._id === action.topic._id) {
                        return action.topic
                    } else {
                        return topic
                    }
                })
            }
        default:
            return state
    }
}

export default topicReducer