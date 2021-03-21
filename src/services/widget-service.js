const LESSONS_URL = 'https://wbdv-generic-server.herokuapp.com/api/001051413/lessons';
const TOPICS_URL = 'https://wbdv-generic-server.herokuapp.com/api/001051413/topics';

export const createWidget = (topicId, widget) =>
    fetch(`http://localhost:8080/api/topics/${topicId}/widgets`, {
        method: "POST",
        body: JSON.stringify(widget),
        headers: {
            'content-type': 'application/json'
        }
    })
        .then(response => response.json());

export const updateWidget = (wid, widget) =>
    fetch(`http://localhost:8080/api/widgets/${wid}`, {
        method: "PUT",
        body: JSON.stringify(widget),
        headers: {
            'content-type': 'application/json'
        }
    })
        .then(response => response.json());

export const findWidgetsForTopic = (topicId) =>
    fetch(`http://localhost:8080/api/topics/${topicId}/widgets`)
        .then(response => response.json())

export const deleteWidget = (wid) =>
    fetch(`http://localhost:8080/api/widgets/${wid}`, {
        method: "DELETE",
    }).then(response => response.json());

const api = {
    createWidget, updateWidget, findWidgetsForTopic, deleteWidget
}

export default api;