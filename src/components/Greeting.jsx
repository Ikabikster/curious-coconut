import { useState } from 'react';

const Greeting = () => {
    const [name, setName] = useState("Stranger");
    const [inputName, setInputName] = useState("");
    const [textDisplay, setTextDisplay] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setName(inputName);
        setInputName("");
        setTextDisplay(true);
    }

    return (
        <div style={{textAlign: 'center'}} className="greeting">
            <form onSubmit={handleSubmit}>
                <div style={{marginTop: "20px"}}>
                    <label-left className="labelLeft" htmlFor="name">What may I call you?</label-left>
                    <input
                        className="inputField"
                        type="text"
                        id="name"
                        name="name"
                        value={inputName}
                        placeholder="Your name"
                        required="required"
                        onChange={e => setInputName(e.target.value)}
                    />
                    <input className="submitButton" type="submit" value="Ok"/>
                </div>
            </form>
            <br/>
            <h1>Hey, {name}!</h1>
            {textDisplay
                ? <p>How nice to see you :)</p>
                : <></>}

        </div>
    )
}

export default Greeting;
