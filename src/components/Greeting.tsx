import { useState } from 'react';

const Greeting = () => {
    const [name, setName] = useState("Stranger");
    const [inputName, setInputName] = useState("");

    const handleSubmit = (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        setName(inputName);
        setInputName("");
    }

    return (
        <div style={{textAlign: 'center'}} className="greeting">
            <form onSubmit={handleSubmit}>
                <div style={{marginTop: "20px"}}>
                    <label className="labelLeft" htmlFor="name">What may I call you?  </label>
                    <input
                        className="inputField"
                        type="text"
                        id="name"
                        name="name"
                        value={inputName}
                        placeholder="Your name"
                        required={true}
                        onChange={e => setInputName(e.target.value)}
                    />
                <input className="submitButton" type="submit" value="Ok"/>
                </div>
            </form>
            <br/>
            <h1>Hey, {name}!</h1>
        </div>
    )
}

export default Greeting;
