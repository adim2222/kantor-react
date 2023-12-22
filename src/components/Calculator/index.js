import React, { useState } from "react";

const Calculator = () => {
    const [value, setValue] = useState(0);
    const [multiplier, setMultiplier] = useState(0);

    const [result, setResult] = useState(0);

    const buttonClick = (event) => {
        event.preventDefault();
        setResult((value * multiplier).toFixed(2));
    };

    return (
        <form className="form">
            <fieldset className="form__fieldset">
                <legend>Kalkulator walut</legend>
                <label className="label__amount">
                    Ilość do kupienia: <input type="number" onChange={(event) => setValue(event.target.value)} name="amount" className="amount" />
                </label>
                <hr />
                <label className="label__value">
                    Waluta: <select onChange={(event) => setMultiplier(event.target.value)} name="value" className="value">
                        <option value={4.38}>Euro</option>
                        <option value={4.03}>USD</option>
                        <option value={5.01}>GBP</option>
                    </select>
                </label>
                <hr />
                <div className="button-section">
                    <button onClick={buttonClick} className="button">Przelicz</button>
                </div>
                <hr />
                <span>
                    <p className="display">{result}PLN</p>
                </span>
            </fieldset>
        </form>
    );
};

export default Calculator;