import React, { useState, useEffect } from "react";
import postStore from "../../store/MyStore";
import { getPosts } from "../../actions/actions";

export default function DisplayPost() {

    const [posts, setPosts] = useState(postStore.getPosts());

    useEffect(() => {
        postStore.addChangeListener(onChange);
        console.log(posts)
        if (postStore.getPosts().length === 0) getPosts();
        return () => postStore.removeChangeListener(onChange);
    }, []);

    function onChange() {
        setPosts(postStore.getPosts());
    }


    return (
        <div style={{textAlign:"center"}}>
            {posts.map(post => (
                <div>
                    <h2>Title: {post.title}</h2>
                    <div><span>Author: {post.author} </span><span> Id: {post.id}</span></div>
                    <p>body: {post.body}</p>
                </div>
            ))}
        </div>
    )
}
