import { useEffect } from 'react';
import useHttp from '../hooks/use-http'
import { getAllQuotes} from '../lib/api'

import QuoteList from '../components/quotes/QuoteList'
import LoadingSpinner from '../components/UI/LoadingSpinner';
import NoQuotesFound from '../components/quotes/NoQuotesFound'


const AllQuotes = () =>{
    const {sendRequest,data:loadedQuotes,error,status} = useHttp(getAllQuotes,true)
    useEffect(()=>{
        sendRequest()

    },[sendRequest])

    if(status === 'pending'){
        return(<div className='centered'>
            <LoadingSpinner></LoadingSpinner>
        </div>);
    }

    if(error){
        return(<p className='centered focus'>{error}</p>);
    }

    if(status === 'completed' && (loadedQuotes.length === 0 || !loadedQuotes)){
        return(<NoQuotesFound></NoQuotesFound>)
    }

    return(<QuoteList quotes={loadedQuotes}></QuoteList>);

}

export default AllQuotes;