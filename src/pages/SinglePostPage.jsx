import React from 'react';
import {useState, useEffect} from "react";
import {useParams} from "react-router-dom";
import axios from "axios";

function SinglePostPage() {
    const [post, setPost] = useState({})
    const {postId} = useParams()

    useEffect(() => {
        const fetchPost = async () => {
            const response = await axios.get(`https://dummyjson.com/posts/${postId}`);
            setPost(response.data);
        };

        fetchPost();
    },[postId])

    return (
        <div>
            Пост с id {postId}
            <h3>{post.title}</h3>
            <p>{post.body}</p>
        </div>
    );
}

export default SinglePostPage;