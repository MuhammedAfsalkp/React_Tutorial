import { Fragment } from 'react';
import { useHistory,useLocation} from 'react-router-dom'

import QuoteItem from './QuoteItem';
import classes from './QuoteList.module.css';


const sortQuotes = (quotes,ascending) =>{
  return quotes.sort((qa,qb)=>{
    if(ascending){
      return qa.id > qb.id ? 1 :-1;
    }else {
      return qa.id < qb.id ? 1:-1;
    }
  })
}

const QuoteList = (props) => {
  //url=http://localhost:3000/quotes?sort=asc
  //change and manage url
  const history = useHistory()
  //contain information about the currently loaded page eg;query in location.search,pathname....
  const location = useLocation()
  // console.log(location)

  const queryParams = new URLSearchParams(location.search)
  console.log(queryParams.get('sort'),'hgfhfdh')
 const isSortingAscending = queryParams.get('sort') === 'asc';
 console.log(isSortingAscending)

 const sortedQuotes = sortQuotes(props.quotes,isSortingAscending)

const changeSortingHandler = () =>{
  // history.push({
  //   pathname:location.pathname,
  //   search:`sort=${(isSortingAscending ?'desc':'asc')}`
  // })
  // or
  history.push(`${location.pathname}?sort=${(isSortingAscending?'desc':'asc')}`)

}

  return (
    <Fragment>
      <div className={classes.sorting}>
        <button onClick={changeSortingHandler}>Sort {isSortingAscending?'Descending':'Ascending'}</button>
      </div>
      <ul className={classes.list}>
        {sortedQuotes.map((quote) => (
          <QuoteItem
            key={quote.id}
            id={quote.id}
            author={quote.author}
            text={quote.text}
          />
        ))}
      </ul>
    </Fragment>
  );
};

export default QuoteList;
