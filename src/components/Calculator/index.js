import React, { useState } from "react";
import { Form, Fieldset, Display, Button, ButtonSection } from "./styled";

const Calculator = () => {
    const [value, setValue] = useState(0);
    const [multiplier, setMultiplier] = useState(4.38);

    const [result, setResult] = useState(0);

    const buttonClick = (event) => {
        event.preventDefault();
        setResult((value * multiplier).toFixed(2));
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
                        <option value={4.38}>Euro</option>
                        <option value={4.03}>USD</option>
                        <option value={5.01}>GBP</option>
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