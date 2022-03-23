import { useCounter } from "../hooks/useCounter";

export const CounterHook = () => {
    const { counter, handleClick } = useCounter({});

    return (
        <>
            <h1>CounterHook:</h1>
            <h2>{ counter }</h2>

            <button onClick={ () => handleClick() }>
                +1
            </button>

            {/* <button onClick={ () => handleClick(20) }>
                +20
            </button> */}
        </>
    );
}

