import { useContext } from "react";
import Tolllist from "../components/Tolllist";
import { TollContext } from "../../../context/toll-context";
import './Toll.css'
const Tolls = ()  => {
    const toll=useContext(TollContext)
    return (
        <table>
            <thead>
         <tr>
            <th>TOLL NAME</th>
            <th>CAR/JEEP/VAN</th>
            <th>DATE/LCV</th>
            <th>TRUCK/BUS</th>
            <th>HEAVY VEHICLE</th>
         </tr>
        </thead>
        <Tolllist tolls={toll.tolls}></Tolllist>
        </table>
    )
}

export default Tolls;