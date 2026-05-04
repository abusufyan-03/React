import { useState } from "react";

const User = () => {
    const [count] = useState(0);
    const [count2] = useState(1);
    return (
        <div>
            <h1>COUNT: {count}</h1>
            <h1>COUNT2: {count2}</h1>
            <h2>Name: Sasuke</h2>
            <h2>Location: hidden Leaf</h2>
            <h2>Contant: sasuke.exist</h2>
        </div>
    )
}

export default User;