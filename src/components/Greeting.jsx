import { useState } from 'react';

const Greeting = () => {
    const [name, setName] = useState("Stranger");
    const [inputName, setInputName] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        setName(inputName);
        setInputName("");
    }

    return (
        <div style={{textAlign: 'center'}} className="greeting">
            <form onSubmit={handleSubmit}>
                <div style={{marginTop: "20px"}}>
                    <label-left htmlFor="name">What may I call you? </label-left>
                    <input
                        className="inputField"
                        type="text"
                        id="name"
                        name="name"
                        value={inputName}
                        required="required"
                        onChange={e => setInputName(e.target.value)}
                    />
                </div>
                <br/>
                <input className="inputField" type="submit" value="Ok"/>
            </form>
            <br/>
            <h1>Hey, {name}!</h1>
        </div>
    )
}

export default Greeting;
