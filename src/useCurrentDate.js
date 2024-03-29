import { useEffect, useState } from "react";

export const useCurrentDate = () => {
    const [date, setDate] = useState();

    const dateUpdate = () => {
        const dateObject = new Date();

        const weekdays = ["Niedziela", "Poniedziałek", "Wtorek", "Środa", "Czwartek", "Piętek", "Sobota"];
        const months = ["Stycznia", "Lutego", "Marca", "Kwietnia", "Maja", "Czerwca", "Lipca", "Sierpnia", "Września", "Października", "Listopada", "Grudnia"];

        setDate(`${weekdays[dateObject.getDay()]}, ${dateObject.getDate()} ${months[dateObject.getMonth()]}, ${dateObject.getHours()}:${dateObject.getMinutes()}:${dateObject.getSeconds()}`);
    };

    useEffect(dateUpdate, []);

    setInterval(dateUpdate, 1000);

    return date
}