import React from 'react';
import Loader from "../utils/Loader";
import Column from "./Column";

const Kanban = (
    {
        statuses,
        tasks,
        taskError,
        statusesError,
        isTasksLoading,
        isStatusesLoading,
        setModalActive,
        changeStatus,
        changePriority,
        priorities
    }
) => {

    if (isTasksLoading || isStatusesLoading) return <Loader/>

    if (taskError || statusesError) return <h3>{taskError}</h3>

    return (
        <div className="container">
            <div className="row align-items-start">
                {statuses.map(column =>
                    <Column
                        key={column._id}
                        column={column} tasks={tasks}
                        setModalActive={setModalActive}
                        changeStatus={changeStatus}
                        changePriority={changePriority}
                        priorities={priorities}
                    />
                )}

            </div>
        </div>

    );
};

export default Kanban;
