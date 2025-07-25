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
            <h4>Welcome, {name}</h4>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">What may I call you? </label>
                <input
                    className="inputField"
                    type="text"
                    id="name"
                    name="name"
                    value={inputName}
                    required="required"
                    onChange={e => setInputName(e.target.value)}
                /><br/><br/>
                <input className="inputField" type="submit" value="Ok"/>
            </form>
        </div>
    )
}

export default Greeting;
