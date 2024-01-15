import React from 'react';
import UpdateModal from "./UpdateModal";

const Card = ({task, setModalActive, changeStatus, changePriority, priorities}) => {

    const onDelete = () => {
        setModalActive({open: true, mode: 'delete', data: task})
    }

    return (
        <div className="card">
            <div className="card-header">
                {task.name}
            </div>
            <div className="card-body">
                <h5 className="card-title">{task.description}</h5>
                <p className="card-text">{task.status}</p>

                <p className="card-text">Priority: {task.priority} {' '}
                    <button type="button" className="btn btn-outline-info"
                            onClick={() => changePriority(task._id, +task.priority + 1)}
                    >↑
                    </button>
                    <button type="button" className="btn btn-outline-info"
                            onClick={() => changePriority(task._id, +task.priority - 1)}
                    >↓
                    </button>
                </p>

                <button
                    type="button"
                    className="btn btn-outline-info"
                    onClick={() => changeStatus(task._id, task.status, -1)}
                >{'<-'}
                </button>
                <UpdateModal task={task} priorities={priorities}/>
                <button
                    type="button"
                    className="btn btn-outline-info"
                    onClick={onDelete}
                >Delete
                </button>
                <button type="button" className="btn btn-outline-info"
                        onClick={() => changeStatus(task._id, task.status, 1)}

                >{'->'}
                </button>
            </div>
        </div>
    );
};

export default Card;
