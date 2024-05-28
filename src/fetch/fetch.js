import axios from 'axios'

function setAuthHeader(token) {
    axios.defaults.headers.common.Authorization = token
}

function deleteAuthHeader() {
     axios.defaults.headers.common.Authorization = '';
}

const BASE_URL = ''
const END_POINTS = ''
    const url = `${BASE_URL}${END_POINTS}`

async function getTasks() {

    const response = await axios.get(url)
    return response.data
}


async function addTask(data) {

    const response = await axios.post(url, data)
    return response.data

}


async function deleteTask(id) {
    const deleteUrl = `${url}/${id}`
    const response = await axios.delete(deleteUrl)
    return response.data.id
}

async function registerFetch(data) {

}

async function logInFetch(data) {

}

async function logOutFetch() {
    
    deleteAuthHeader()
}

export {getTasks, addTask, deleteTask, registerFetch, logInFetch, logOutFetch, setAuthHeader}