import { useEffect, useState } from "react";
import ProfileCard from "./Profile";
import "./App.css";

export default function App() {
    const [id, setId] = useState(1);
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
            .then((response) => response.json())
            .then((data) => setData(data))
            .catch((error) => {
                console.log(`error while fetching`);
                setError(error);
            });
    }, [id]);

    if (error) return <p>error while fetching user data</p>;

    function incermentId() {
        if (id < 10) setId(id + 1);
    }

    function decrementId() {
        if (id > 1) setId(id - 1);
    }

    return (
        <div>
            <h1>{id}</h1>
            {data ? (
                <ProfileCard name={data.name} email={data.email} />
            ) : (
                <p>Loading...</p>
            )}

            <button onClick={incermentId}>+</button>
            <button onClick={decrementId}>-</button>
        </div>
    );
}



///ref

// import { useEffect, useState } from "react";
// import ProfileCard from "./Profile";
// import "./App.css";

// export default function App() {
//     const [id, setId] = useState(1);
//     const [data, setData] = useState(null);
//     const [error, setError] = useState(null);
//     const [loading, setLoading] = useState(false);

//     useEffect(() => {
//         setLoading(true);
//         setError(null);

//         fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
//             .then((response) => {
//                 if (!response.ok) {
//                     throw new Error(`Error: ${response.status}`);
//                 }
//                 return response.json();
//             })
//             .then((data) => {
//                 setData({ name: data.name, email: data.email });
//                 setLoading(false);
//             })
//             .catch((error) => {
//                 console.error("Error fetching data:", error);
//                 setError(error.message);
//                 setLoading(false);
//             });
//     }, [id]);

//     const incrementId = () => {
//         if (id < 10) setId((prevId) => prevId + 1);
//     };

//     const decrementId = () => {
//         if (id > 1) setId((prevId) => prevId - 1);
//     };

//     if (error) return <p>{`Error: ${error}`}</p>;

//     return (
//         <div>
//             <h1>User ID: {id}</h1>
            
//             {loading ? (
//                 <p>Loading...</p>
//             ) : (
//                 data && <ProfileCard name={data.name} email={data.email} />
//             )}
            
//             <div>
//                 <button onClick={incrementId}>+</button>
//                 <button onClick={decrementId}>-</button>
//             </div>
//         </div>
//     );
// }
