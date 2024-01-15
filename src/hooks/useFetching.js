import React, {useState} from 'react';

const UseFetching = (callback) => {

    const [isLoader, setIsLoader] = useState(true)
    const [error, setError] = useState(null)

    const fetching = async () => {
        try {
            await callback();
        } catch (e) {
            setError('Something went wring. Please try again later.')
        } finally {
            setIsLoader(false)
        }
    }

    return [fetching, isLoader, error]
};

export default UseFetching;
