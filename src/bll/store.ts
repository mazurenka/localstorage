import {applyMiddleware, combineReducers, createStore} from "redux";
import {counterReducer} from "./counter-reducer";
import thunk from 'redux-thunk'

const rootReducer = combineReducers({
    counter: counterReducer
})

let preloadedState
const persistedValueString = localStorage.getItem('app-state')
if (persistedValueString) {
    preloadedState = JSON.stringify(persistedValueString)
}

export const store = createStore(rootReducer, applyMiddleware(thunk))

store.subscribe( () => {
    localStorage.setItem('app-state', JSON.stringify(store.getState()))
})

export type AppStateType = ReturnType<typeof rootReducer>
type AppStoreType = typeof store