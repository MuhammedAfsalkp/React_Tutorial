import React,{useEffect} from 'react';
import {Route,useParams,Link,useRouteMatch} from 'react-router-dom'
 import Comments from '../components/comments/Comments'
 import HighlightedQuotes from '../components/quotes/HighlightedQuote'
 import useHttp from '../hooks/use-http';
 import {getSingleQuote} from '../lib/api'
 import LoadingSpinner from '../components/UI/LoadingSpinner';


const QuotesDetails = () =>{
    const {data:loadedQuote,error,status,sendRequest} = useHttp(getSingleQuote,true)
    const match = useRouteMatch()
    const params = useParams()
    const {id} = params;
   

    useEffect(()=>{
        sendRequest(id)

    },[id,sendRequest])


    
    if(status === 'pending'){
        return(<div className='centered'>
            <LoadingSpinner></LoadingSpinner>
        </div>);
    }

    if(error){
        return(<p className='centered focus'>{error}</p>);
    }
    if(!loadedQuote.text){
        return (<h1>Not Quotes Found</h1>);
    }
    //match.path contain quotes/:id
    //match.url contain quotes/q2
    //ie;-whenever we change the main path it is inconvinient to change in the nested-so use useRouteMatch

    return(<React.Fragment>
        <HighlightedQuotes text={loadedQuote.text} author={loadedQuote.author}></HighlightedQuotes>
        <Route path={`${match.path}/` } exact>
        <div className='centered'>
            <Link className='btn--flat' to={`${match.url}/comments`}>Load Comments</Link>
        </div>
        </Route>
    
        <Route path={`${match.path}/comments`}>
            <Comments></Comments>

        </Route>
        </React.Fragment>);

}

export default QuotesDetails;