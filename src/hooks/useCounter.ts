import { useEffect, useState } from "react";

export const useCounter = ({ counterVal = 0 }) => {
    const [counter, setCounter] = useState(counterVal);

    const handleClick = (num: number = 1) => setCounter((prev) => prev + num);

    useEffect(() => {
        const getCounterLS = () => {
            const counterLS = JSON.parse(localStorage.getItem('counter') ?? '0');

            if(counterLS > 0 && counterVal > 0) {
                setCounter(prev => prev + counterLS);
            }
            
            else {
                setCounter(counterLS);
            }
        }

        getCounterLS();
    }, []);

    useEffect(() => {
        localStorage.setItem('counter', JSON.stringify(counter));
    }, [counter]);   

    return {
        counter,
        handleClick
    }
}
