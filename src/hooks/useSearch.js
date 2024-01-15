import {useMemo} from "react";

export const useSearch = (inputQuery, tasks) => {

    const searchedTasks = useMemo(() => {
        if (inputQuery) {
            return tasks.filter(el => el.name.toLowerCase().includes(inputQuery.toLowerCase()))
        }
        return tasks;
    }, [inputQuery, tasks])

    return [searchedTasks]
}
