import {useState,useCallback} from "react"

const useHttp = () =>{
    console.log("hook start")
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
  
    const sendRequest =useCallback(async (requestConfigure,applyData) => {
      console.log("sending request")
      setIsLoading(true);
      setError(null);
      try {
        const response = await fetch(requestConfigure.url,{
            method:requestConfigure.method?requestConfigure.method:'GET',
            headers:requestConfigure.headers?requestConfigure.headers:{},
            body:requestConfigure.body?JSON.stringify(requestConfigure.body):null
        }
        );
        
  
        if (!response.ok) {
          throw new Error('Request failed!');
        }
  
        const data = await response.json();
        console.log(data);
        applyData(data)
        console.log("returned")
  
      } catch (err) {
        setError(err.message || 'Something went wrong!');
      }
      setIsLoading(false);
    },[]);


    return({isLoading,error,sendRequest})

}

export default useHttp;