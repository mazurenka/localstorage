import React, {useEffect} from 'react';
import './App.css';
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "./bll/store";
import {incValueAC} from "./bll/counter-reducer";

function App() {

    const value = useSelector<AppStateType, number>(state => state.counter.value)
    const dispatch = useDispatch()

    useEffect(() => {

    }, [])

    const increment = () => {
        dispatch(incValueAC())
    }

    const resetIncrement = () => {

    }

    return (
        <div className="App">
            <h1> {value} </h1>
            <button onClick={increment}>inc</button>
            <button onClick={resetIncrement}>reset</button>
        </div>
    );
}

export default App;
