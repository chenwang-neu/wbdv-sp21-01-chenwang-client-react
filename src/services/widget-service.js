//const WIDGET_URL = 'https://wbdv-sp21-01-chenwang-server.herokuapp.com/api';
const WIDGET_URL = 'http://localhost:8080/api'

export const createWidget = (topicId, widget) =>
    fetch(`${WIDGET_URL}/topics/${topicId}/widgets`, {
        method: "POST",
        body: JSON.stringify(widget),
        headers: {
            'content-type': 'application/json'
        }
    })
        .then(response => response.json());

export const updateWidget = (wid, widget) =>
    fetch(`${WIDGET_URL}/widgets/${wid}`, {
        method: "PUT",
        body: JSON.stringify(widget),
        headers: {
            'content-type': 'application/json'
        }
    })
        .then(response => response.json());

export const findWidgetsForTopic = (topicId) =>
    fetch(`${WIDGET_URL}/${topicId}/widgets`)
        .then(response => response.json())

export const deleteWidget = (wid) =>
    fetch(`${WIDGET_URL}/widgets/${wid}`, {
        method: "DELETE",
    }).then(response => response.json());

const api = {
    createWidget, updateWidget, findWidgetsForTopic, deleteWidget
}

export default api;