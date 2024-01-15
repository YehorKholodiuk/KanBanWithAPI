import './App.css';
import React, {useEffect, useMemo, useRef, useState} from "react";
import {fetchStatuses} from "./API/StatusesServices";
import {deleteTask, fetchTasks, postTask, updateTask} from "./API/TasksServices";
import 'bootstrap/dist/css/bootstrap.css'
import useFetching from "./hooks/useFetching";
import Kanban from "./components/Kanban";
import MyModal from "./components/UI/modal/MyModal";
import CreateTask from "./components/CreateTask";
import DeleteModal from "./components/DeleteModal";
import {taskFetching} from "./utils/taskFetching";
import MyInput from "./components/UI/input/MyInput";
import {useSearch} from "./hooks/useSearch";


function App() {

  const [statuses, setStatuses] = useState([]);
  const [tasks, setTasks] = useState([]);
  const [modalActive, setModalActive] = useState({open: false, mode: null, data: null})
  const [priorities, setPriorities] = useState([1, 2, 3, 4, 5])

  const [getStatuses, isStatusesLoading, statusesError] = useFetching(async () => {
    const res = await fetchStatuses()
    setStatuses(res.data)
  })

  const [getTasks, isTasksLoading, taskError] = useFetching(async () => {
    const res = await fetchTasks()
    setTasks(res.data)
  })

  const createTask = (task) => {
    taskFetching(
        async () => await postTask(task),
        getTasks,
        'Task was not created')
  }

  const removeTask =  (taskId) => {
    taskFetching(
        async () => await deleteTask(taskId),
        getTasks,
        'Task was not deleted')
  }

  const changeStatus = async (taskId, status, direction)=> {
    const statusesStr = statuses.map(el => el.status)
    const currentIndex = statusesStr.indexOf(status)
    const newStatus = statusesStr[currentIndex + direction]
    taskFetching(
        async ()=> await updateTask(taskId, {status: newStatus}),
        getTasks,
        'Status was not changed')
  }

  const changePriority = async (taskId, newPriority)=> {
    taskFetching(
        async () => await updateTask(taskId, {priority: newPriority}),
        getTasks,
        'Priority was not changed')
  }

  useEffect(() => {
    getStatuses()
    getTasks()
  }, [])

  // пример с useRef
  //const inputRef = useRef();

  const [inputQuery, setInputQuery] = useState('')

  //    33333    ВАРИАНТ C ХУКОМ

  const [searchedTasks] = useSearch(inputQuery, tasks)

  //    22222    ВАРИАНТ C USEMEMO БЕЗ ХУКА

  // const searchedTasks = useMemo(() => {
  //     if (inputQuery) {
  //         return tasks.filter(el => el.name.toLowerCase().includes(inputQuery.toLowerCase()))
  //     }
  //     return tasks;
  // }, [inputQuery, tasks])



  //   -------111111-------    ВАРИАНТ БЕЗ USEMEMO

  // const search = () => {
  //     console.log("function was called")
  //     if (inputQuery) {
  //         console.log("if")
  //         return tasks.filter(el => el.name.toLowerCase().includes(inputQuery.toLowerCase()))
  //     }
  //     return tasks;
  // }
  // const searchedTasks = search()

  return (
      <div className="App">
        <h1>Kanban bord</h1>

        <MyInput
            value={inputQuery}
            onChange={e => setInputQuery(e.target.value)}
            // ref={inputRef}
            type="text"/>

        {/*<button onClick={() => console.log(inputRef.current.value)}>ok</button>*/}

        <div>
          <button
              onClick={() => setModalActive({...modalActive, open: true, mode: 'create'})}
              type="button"
              className="btn btn-outline-info"
          >
            Create new task
          </button>
        </div>
        <Kanban
            taskError={taskError}
            statusesError={statusesError}
            isTasksLoading={isTasksLoading}
            isStatusesLoading={isStatusesLoading}
            statuses={statuses}
            tasks={searchedTasks}
            setModalActive={setModalActive}
            changeStatus={changeStatus}
            changePriority={changePriority}
            priorities={priorities}
        />
        <MyModal modalActive={modalActive} setModalActive={setModalActive}>
          <CreateTask
              priorities={priorities}
              statuses={statuses}
              setModalActive={setModalActive}
              createTask={createTask}
          />
          <DeleteModal
              modalActive={modalActive}
              setModalActive={setModalActive}
              removeTask={removeTask}
          />
        </MyModal>
      </div>
  );
}

export default App;
