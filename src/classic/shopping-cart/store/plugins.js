
export const localStoragePlugin = store => {
    store.subscribe((mutation, payload) => {
        console.log(mutation)
    })
}

