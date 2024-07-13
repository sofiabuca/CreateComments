import React, {useState, useEffect} from 'react';
import {useParams} from"react-router-dom";
import axios from "axios";

function Post() {
    const [postObject, setPostObject] =useState({}); //Create at empty object
    let {id} = useParams();


    useEffect(() =>{
        axios.get(`http://localhost:3001/posts/byId/${id}`).then((response) =>{
            setPostObject(response.data);
        });
    });


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
            Comment section
        </div>
     
    </div>
  );
};

export default Post;
