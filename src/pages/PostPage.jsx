import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import {Link} from "react-router-dom";

function PostPage() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const fetchPosts = async () => {
            const response = await axios.get('https://dummyjson.com/posts');
            setPosts(response.data.posts);
            console.log(response.data.posts);
        };

        fetchPosts();
    }, []);

    return (
        <div>
            <ul>
                    {posts.map((post) => (
                        <li key={post.id}>
                            <Link to={`/${post.id}`}>
                                {post.title.slice(0,25)} ...
                            </Link>
                         </li>
                    ))}
            </ul>
        </div>
    );
}

export default PostPage;






