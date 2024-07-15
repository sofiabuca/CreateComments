import React, {useState, useEffect} from 'react';
import {useParams} from"react-router-dom";
import axios from "axios";

function Post() {
    const [postObject, setPostObject] =useState({}); //Create at empty object
    const [comments, setComments] = useState([]); //Passing a list of comments

    let {id} = useParams();


    useEffect(() =>{
        axios.get(`http://localhost:3001/posts/byId/${id}`).then((response) =>{
            setPostObject(response.data);
        });

        //Call the comments
        axios.get(`http://localhost:3001/comments/${id}`).then((response) =>{
            setComments(response.data);
        });
    }, [id]);


  return (
    <div className="postPage">
        {/*Display the data of the comments */}
        <div className="leftside">
            <div className="post" id="individual">
                <div className="title">{postObject.title}</div>
                <div className="body">{postObject.postText}</div>
                <div className="footer">{postObject.userName}</div>
            </div>
        </div>
        <div className="rightSide">
            <div className="addCommentContainer">
                <input type='text' placeholder="Comment.." autoComplete="off" />
                <button>Add Comment</button>
            </div>
            <div className="listOfComments"></div>
            {comments.map((comment, key) => {
                return <div key={key} className="comment">{comment.commentBody}</div>
            })}

            
        </div>
     
    </div>
  );
};

export default Post;
