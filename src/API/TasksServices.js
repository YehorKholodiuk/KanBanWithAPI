import axios from "axios";


export async function fetchTasks() {
    const res = await axios.get('https://expressjs-server.vercel.app/tasks')
    return res;
}

export async function postTask(task) {
    await axios.post('https://expressjs-server.vercel.app/tasks', task)
}

export async function deleteTask(taskId) {
    await axios.delete(`https://expressjs-server.vercel.app/tasks/${taskId}`)
}

export async function updateTask(taskId, data) {
    await axios.patch(`https://expressjs-server.vercel.app/tasks/${taskId}`, data)
}
