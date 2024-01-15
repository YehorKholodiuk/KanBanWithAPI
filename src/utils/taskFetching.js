export async function taskFetching(fetchFunction, callback, errorMessage) {

    try {
        await fetchFunction()
        await callback()
    } catch(e) {
        alert(errorMessage)
    }
}
