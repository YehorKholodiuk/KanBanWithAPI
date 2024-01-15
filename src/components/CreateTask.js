import React, {useState} from 'react';

const CreateTask = ({priorities, statuses, setModalActive, createTask}) => {

    const [newTask, setNewTask] = useState(
        {name: '', description: '', status: 'todo', priority: '1'})

    const clearForm = () => {
        setNewTask({name: '', description: '', status: 'todo', priority: '1'})
    }
    const onSubmit = () => {
        createTask(newTask)
        setModalActive({open: false, mode: null, data: null})
        clearForm()
    }

    const onCancel = () => {
        clearForm()
        setModalActive({open: false, mode: null, data: null})
    }

    return (
        <div>
            <h2>Create new Task</h2>
            <div className="input-group mb-3">
                <input type="text" className="form-control" placeholder="Task name"
                       aria-describedby="basic-addon1"
                       value={newTask.name}
                       onChange={(e) => setNewTask({...newTask, name: e.target.value})}
                />
            </div>
            <div className="input-group mb-3">
                <input type="text" className="form-control" placeholder="Task description"
                       aria-describedby="basic-addon1"
                       value={newTask.description}
                       onChange={(e) => setNewTask({...newTask, description: e.target.value})}
                />
            </div>
            <div className="input-group mb-3">
                <select className="form-select" aria-label="Priorities"
                        value={newTask.priority}
                        onChange={(e) => setNewTask({...newTask, priority: e.target.value})}
                >
                    {priorities.map(el =>
                        <option value={el}>{el}</option>
                    )}
                </select>
            </div>
            <div className="input-group mb-3">
                <select className="form-select" aria-label="Priorities"
                        value={newTask.status}
                        onChange={(e) => setNewTask({...newTask, status: e.target.value})}
                >
                    {statuses.map(el =>
                        <option value={el.title}>{el.title}</option>
                    )}
                </select>
            </div>
            <div className="modal-footer">
                <button
                    type="button"
                    style={{margin: "5px"}}
                    className="btn btn-outline-info"
                    onClick={onSubmit}
                >Create
                </button>
                <button
                    type="button"
                    style={{margin: "5px"}}
                    className="btn btn-outline-info"
                    onClick={onCancel}
                >Cancel
                </button>
            </div>
        </div>
    );
};

export default CreateTask;
