import React, {useEffect, useState} from 'react';
import './App.css';

function App() {
    const [value, setValue] = useState(0)
    const increment = () => {
        setValue(value + 1)
    }

    useEffect(() => {
        let save = localStorage.getItem('valueKey')
        if (save) {
            let saveValue = JSON.parse(save)
            setValue(saveValue)
        }
    }, [])

    useEffect(() => {
        localStorage.setItem('valueKey', JSON.stringify(value))
    }, [value])

    return (
        <div className="App">
            <h1> {value} </h1>
            <button onClick={increment}>inc</button>
        </div>
    );
}

export default App;
