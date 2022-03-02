import React, {useEffect, useState} from 'react';
import './App.css';

function App() {
    console.log('App')
    const [value, setValue] = useState(0)
    console.log('value: ', value)
    const increment = () => {
        setValue(value + 1)
    }

    useEffect(() => {
        console.log('useEffect with getItem')
        let save = localStorage.getItem('valueKey')
        if (save) {
            let saveValue = JSON.parse(save)
            setValue(saveValue)
        }
    }, [])

    useEffect(() => {
        console.log('useEffect with setItem')
        localStorage.setItem('valueKey', JSON.stringify(value))

    }, [value])


    const resetIncrement = () => {
        localStorage.clear()
        setValue(0)
    }
    console.log('render JSX')
    return (
        <div className="App">
            <h1> {value} </h1>
            <button onClick={increment}>inc</button>
            <button onClick={resetIncrement}>reset</button>
        </div>
    );
}

export default App;
