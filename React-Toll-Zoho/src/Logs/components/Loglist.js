import './Loglist.css'
const Loglist = (props) => {
    return(
        <tbody>
        {props.logs.map(log => (
            <tr key={log.id}>
                <td>{log.vehicleType}</td>
                <td>{log.vehicleNumber}</td>
                <td>{log.date}</td>
                <td>{log.tollName}</td>
                <td>{log.tariff}</td>
            </tr> 
          ))}
          </tbody>
    )
}


export default Loglist;