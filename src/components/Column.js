import React from 'react';
import Card from "./Card";

const Column = ({column, tasks, setModalActive, changeStatus, changePriority, priorities}) => {
    return (
        <div className="col">
            <h3>{column.title}</h3>
            {tasks
                .filter(task => task.status === column.title)
                .map(task =>
                    <Card
                        key={task._id}
                        task={task}
                        setModalActive={setModalActive}
                        changeStatus={changeStatus}
                        changePriority={changePriority}
                        priorities={priorities}
                    />
                )}
        </div>
    );
};

export default Column;
