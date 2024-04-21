import React, { useState } from "react";
import { Form, Fieldset, Display, Button, ButtonSection } from "./styled";

const Calculator = (rateData) => {
    const rates = rateData.rateData;
    console.log(rates);
    const [value, setValue] = useState(0);
    const [multiplier, setMultiplier] = useState(rates.EUR.value);

    const [result, setResult] = useState(0);

    const buttonClick = (event) => {
        event.preventDefault();
        setResult((value / multiplier).toFixed(2));
    };

    return (
        <Form>
            <Fieldset>
                <legend>Kalkulator walut</legend>
                <label>
                    Ilość do kupienia: <input type="number" onChange={(event) => setValue(event.target.value)} name="amount" />
                </label>
                <hr />
                <label>
                    Waluta: <select onChange={(event) => setMultiplier(event.target.value)} name="value">
                        <option value={rates.EUR.value}>Euro</option>
                        <option value={rates.USD.value}>USD</option>
                        <option value={rates.GBP.value}>GBP</option>
                    </select>
                </label>
                <hr />
                <ButtonSection>
                    <Button onClick={buttonClick}>Przelicz</Button>
                </ButtonSection>
                <hr />
                <span>
                    <Display>{result}PLN</Display>
                </span>
            </Fieldset>
        </Form>
    );
};

export default Calculator;