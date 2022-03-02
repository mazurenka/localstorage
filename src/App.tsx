import React, {useState} from 'react';
import './App.css';

function App() {
    const [value, setValue] = useState(0)
    const increment = () => {
        setValue(value + 1)
    }

    const setLocal = () => {
        localStorage.setItem('valueKey', JSON.stringify(value))
        localStorage.setItem('valueKey + 1', JSON.stringify(value + 1))
    }
    const getLocal = () => {
        let newValue = localStorage.getItem('valueKey')
        if (newValue) {
            let setValueNew = JSON.parse(newValue)
          setValue(setValueNew)
        }
    }
    const clearLocal = () => {
        localStorage.clear()
        setValue(0)
    }
    const clearItemLocal = () => {
        localStorage.removeItem('valueKey + 1')
    }

    return (
        <div className="App">
            <h1> {value} </h1>
            <button onClick={increment}>inc</button>
            <button onClick={setLocal}>setLocalstorage</button>
            <button onClick={getLocal}>getLocalstorage</button>
            <button onClick={clearLocal}>clearLocalstorage</button>
            <button onClick={clearItemLocal}>clearItemLocalstorage</button>

        </div>
    );
}

export default App;
