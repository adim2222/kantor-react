import { useCurrentDate } from "../../useCurrentDate";
import { ClockDisplay } from "./styled";

const Clock = () => {

    const date = useCurrentDate();

    return (
        <ClockDisplay>
            Dzisiaj jest {date}
        </ClockDisplay>
    )
}

export default Clock;