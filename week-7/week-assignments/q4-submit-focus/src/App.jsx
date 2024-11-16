import { useEffect } from "react";
import { useRef } from "react";
import { useState } from "react";
import "./App.css"
export default function App() {
    const [name, setName] = useState("");
    const inputRef = useRef(null);

    useEffect(() => {
        inputRef.current.focus();
    }, []);

    function handleSubmit(e) {
        e.preventDefault();
        if (!e.target.username.value.trim()) return

        console.log(e.target.username.value);

        e.target.username.value = "";
    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="in">Enter your name</label>
            <input
                id="in"
                ref={inputRef}
                type="text"
                name="username"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <button type="submit">submit</button>
        </form>
    );
}
