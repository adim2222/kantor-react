import axios from "axios";
import { useEffect, useState } from "react";

export const useCurrentRates = () => {
    const [ratesData, setRatesData] = useState({state: "loading"});
    useEffect(() => {
        const getRatesData = async () => {
            try {
                const res = await axios.get("https://api.currencyapi.com/v3/latest?apikey=cur_live_F5cZh8xZQbbbuJXMb96MMbM2pjSN3TLER0SnHHDQ&base_currency=PLN");
                setRatesData(res.data.data);
            }
            catch {
                setRatesData({state: "error"});
            }
        };
        getRatesData();
    }, []);
    return ratesData;
};