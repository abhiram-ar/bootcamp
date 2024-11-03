import "./App.css"
import ProfileCard from "./profie";

const data = [
    { id: 1, name: "Abhiram S Sajeev", email: "abhiramars@gmail.com" },
    { id: 2, name: "sneah sukumaran", email: "suku@gmail.com" },
];

export default function App() {
    return (
        <div className="app">
            {data.map((user) => {
                return (
                    <ProfileCard
                        key={user.id}
                        name={user.name}
                        email={user.email}
                    />
                );
            })}
        </div>
    );
}
