import { useMemo, useState } from "react";

function slowsum(num) {
    let sum = 0
    for (let i = 0; i < 1000000000; i++) sum += i;
    return sum;
}

function App() {
    const [num, setNum] = useState(0);
    const sum = useMemo(()=>slowsum(100),[])

    console.log(num);
    return (
        <>
            <input
                type="number"
                value={num}
                onChange={(e) => setNum(parseInt(e.target.value))}
            />
            <p>sum is :{sum}</p>
        </>
    );
}

export default App;
