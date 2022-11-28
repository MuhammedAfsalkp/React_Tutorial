import { useContext } from "react";
import Loglist from "../components/Loglist";
import { TollContext } from "../../shared/context/toll-context";
import './log.css'
const Logs = ()  => {
    const toll=useContext(TollContext)
    return (
        <table>
            <thead>
         <tr>
            <th>VEHICLE TYPE</th>
            <th>VEHICLE NUMBER</th>
            <th>DATE/TIME</th>
            <th>TOLL NAME</th>
            <th>TARIFF</th>
         </tr>
        </thead>
        <Loglist logs={toll.logs}></Loglist>
        </table>
    )
}

export default Logs;