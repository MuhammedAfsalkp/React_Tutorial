import { useState,useEffect,useCallback } from 'react';
import { useParams } from 'react-router';
import classes from './Comments.module.css';
import NewCommentForm from './NewCommentForm';
import useHttp from '../../hooks/use-http';
import { getAllComments } from '../../lib/api';
import LoadingSpinner from '../UI/LoadingSpinner';
import CommentList from './CommentsList'

const Comments = () => {
  const [isAddingComment, setIsAddingComment] = useState(false);
  const params = useParams()
  const {sendRequest,status,data:loadedComments} = useHttp(getAllComments)
  const {id} = params;
  console.log(loadedComments,"comments")


  useEffect(()=>{
    sendRequest(id)

  },[id,sendRequest])

  const startAddCommentHandler = () => {
    setIsAddingComment(true);
  };
  
  const addedCommentHandler =useCallback(() => {
    sendRequest(id)
  },[sendRequest,id]) 
  let comments;
    if(status === 'pending'){
      comments = (<div className='centered'><LoadingSpinner></LoadingSpinner></div>)
      console.log("pensing")

    }
    if(status=== 'completed' && (loadedComments && loadedComments.length > 0)){
      console.log("set")
      comments =<CommentList comments={loadedComments}></CommentList>
    }
    if(status=== 'completed' &&(!loadedComments ||loadedComments.length === 0)){
      comments=<p className='centered'>No comments are added yet!</p>

    }
      
  
  
  return (
    <section className={classes.comments}>
      <h2>User Comments</h2>
      {!isAddingComment && (
        <button className='btn' onClick={startAddCommentHandler}>
          Add a Comment
        </button>
      )}
      {isAddingComment && <NewCommentForm quoteId={id} onAddedComment={addedCommentHandler} />}
      {comments}
    </section>
  );
};

export default Comments;
