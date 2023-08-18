import { createLogger } from 'vuex'
import { STORAGE_KEY } from './mutations'

const localStoragePlugin = store => {
  store.subscribe((mutation, { todos }) => {
    console.log(mutation, 1)
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(todos))
  })
}

export default process.env.NODE_ENV !== 'production'
    ? [createLogger(), localStoragePlugin]
    : [localStoragePlugin]
