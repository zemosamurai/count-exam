import React, {useState} from 'react';
import './App.css';
import {Counter} from "./Component/Counter";

function App() {
    const minValue = 0
    const maxValue = 5
    const [count, setCount] = useState<number>(minValue)

    return (
        <div>
            <Counter count={count} setCount={setCount} minValue={minValue} maxValue={maxValue}/>
        </div>
    );
}

export default App;
