import {Route,Switch,Redirect} from 'react-router-dom'

import AllQuotes from './pages/AllQuotes';
import NewQuotes from './pages/NewQuotes';
import QuotesDetails from './pages/QuotesDetails';
import NotFound from './pages/NotFound';

import Layout from './components/layout/Layout';


function App() {
  return (
    <Layout>
    <Switch>
      <Route path='/' exact> <Redirect to='/quotes'></Redirect></Route>
      <Route path='/quotes' exact> <AllQuotes></AllQuotes></Route>
      <Route path='/quotes/:id'> <QuotesDetails></QuotesDetails></Route>
      <Route path='/new-quotes'> <NewQuotes></NewQuotes></Route>
      <Route path='*'><NotFound></NotFound></Route>
    </Switch>
    </Layout>
  );
}

export default App;
