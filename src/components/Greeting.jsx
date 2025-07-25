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
            <h4>Hey, {name}</h4>
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
        </div>
    )
}

export default Greeting;
