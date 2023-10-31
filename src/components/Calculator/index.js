import React, { useState } from "react";

const Calculator = () => {

    const [value, setValue] = useState(0);
    const [multiplier, setMultiplier] = useState(0);

    const [result, setResult] = useState(0);

    const buttonClick = (event) => {
        event.preventDefault();
        setResult(value * multiplier);
    };

    return (
        <form className="form">
            <fieldset className="form__fieldset">
                <legend>Kalkulator walut</legend>
                <label className="label__amount">
                    Ilość do kupienia: <input type="number" onChange={(event) => setValue(event.target.value)} name="amount" className="amount"/>
                </label>
                <hr/>
                <label className="label__value">
                    Aktualny kurs: <input type="number" onChange={(event) => setMultiplier(event.target.value)} name="value" className="value"/>
                </label>
                <hr/>
                <div className="button__section">
                <button onClick={buttonClick} className="button">Przelicz</button>
                </div>
                <hr/>
                <span>
                    <p className="display">{result}PLN</p>
                </span>
            </fieldset>
        </form>
    );
};

export default Calculator;