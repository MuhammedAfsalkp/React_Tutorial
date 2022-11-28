import MainHeader from "./MainHead";
import Logs from "./Logs/pages/Logs";
import MainNavigation from "./shared/components/Navigation/MainNavigation";
import Tolls from "./shared/components/Tolls/pages/Tolls";
import { TollContext } from "./shared/context/toll-context";
import { useToll } from "./shared/hooks/toll-hook";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from 'react-router-dom';


function App() {
  const { logs, tolls, vehicleType, addLog, addToll } = useToll()
 let routes= (<Switch>
        <Route path="/" exact>
          <Logs></Logs>
        </Route>
        <Route path="/toll">
          <Tolls></Tolls>
        </Route>
        <Redirect to="/" />
      </Switch> )


  return (
    <TollContext.Provider
      value={{
        logs: logs,
        tolls: tolls,
        vehicleType: vehicleType,
        addLog: addLog,
        addToll: addToll
      }}>
        <Router>
        <MainHeader></MainHeader>
        <MainNavigation></MainNavigation>
        <main>{routes}</main>
        </Router>
    
    </TollContext.Provider>
  );
}

export default App;
