import {createStore, createLogger} from 'vuex'
import cart from './modules/cart'
import products from './modules/products'
import {STORAGE_KEY} from "@/classic/todomvc/store/mutations.js";
import {localStoragePlugin} from "./plugins.js";


const debug = process.env.NODE_ENV !== 'production'

export default createStore({
    modules: {
        cart,
        products
    },
    state: {
        name: 'messi',
        age: 36
    },
    getters: {
        getName: (state, getters) => {
            return state;
        }
    },
    mutations: {
        changeName: (state, payload) => {
            state.name = payload
        }
    },
    actions: {
        changeName: (store, payload) => {
            store.commit('changeName', payload)
        }
    },
    strict: debug,
    // plugins: debug ? [createLogger()] : []
    // plugins: debug ? [localStoragePlugin] : []
});

