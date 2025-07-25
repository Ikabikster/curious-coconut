import { useState } from 'react';

const Greeting = () => {
    const [name, setName] = useState("Stranger");
    const [inputName, setInputName] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        setName(inputName);
    }

    return (
        <div style={{textAlign: 'center'}} className="greeting">
            <h3>Welcome, {name}</h3>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">What to call you: </label>
                <input
                    className="input"
                    type="text"
                    id="name"
                    name="name"
                    value={inputName}
                    required="required" pattern="^[a-zA-Z]+$"
                    onChange={e => setInputName(e.target.value)}
                /><br/><br/>
                <input className="input" type="submit" value="Ok"/>
            </form>
        </div>
    )
}

export default Greeting;
