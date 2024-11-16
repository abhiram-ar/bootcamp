import { useEffect, useState } from "react";
export default function Testing() {
    const [counter, setCounter] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCounter((count) => count + 1);
        }, 1000);

        return () => {
            clearInterval(timer);
        };
    }, []);

    return <p>{counter} seconds have passed</p>;
}
