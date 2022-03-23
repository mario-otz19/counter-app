import { useEffect, useState } from "react";

export const CounterEffect = () => {
    const [counter, setCounter] = useState<number>(0);

    const handleClick = (num: number) => setCounter((prev) => prev + num);
 
    useEffect(() => {
        const getCounterLS = () => {
            const counterLS = JSON.parse(localStorage.getItem('counter') ?? '50');
            setCounter(counterLS);
        }

        getCounterLS();
    }, []);

    // useEffect(() => {
    //     localStorage.setItem('counter', JSON.stringify(counter));
    // }, [counter]);

    return (
        <>
            <h1>CounterEffect:</h1>
            <h1>{ counter }</h1>

            <button onClick={ () => handleClick(1) }>
                +1
            </button>

            <button onClick={ () => handleClick(10) }>
                +10
            </button>
        </>
    );
}
