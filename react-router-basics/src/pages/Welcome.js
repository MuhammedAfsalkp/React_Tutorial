import { Route } from 'react-router-dom'

const Welcome = () =>{
    return(
        <section>
            <h1>Welcome</h1>
            {/* ot works only if the specified path is active-like in app-here nested */}
            <Route path='/welcome/new-user'>
                <p>Welcome new user.</p>
            </Route>
            
        </section>
    );
}


export default Welcome;