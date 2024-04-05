import axios from "axios";
import { useEffect, useState } from "react";

export const useCurrentRates = () => {
    const [ratesData, setRatesData] = useState({state: "loading"});
    useEffect(async () => {
        try {
            const res = await axios.get("https://api.currencyapi.com/v3/latest?apikey=cur_live_222y2QVMHCzaRW2VVVkTzIOWFU5vyJsMv5q8Wmy1&base_currency=PLN");
            setRatesData(res);
        }
        catch {
            setRatesData({state: "error"});
        }
    }, []);
    return ratesData;
};