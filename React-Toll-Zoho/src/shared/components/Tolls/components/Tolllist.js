import './Tolllist.css'
const Tolllist = (props) => {
    return(
        <tbody>
        {props.tolls.map(toll => (
            <tr key={toll.id}>
                <td>{toll.tollName}</td>
                
                {toll.fareAmount.map( e => (
                   <td>{`${e.singleJourney}/${e.returnJourney}`} </td> 
                    ))
                }
                
            </tr> 
          ))}
          </tbody>
    )
}


export default Tolllist;