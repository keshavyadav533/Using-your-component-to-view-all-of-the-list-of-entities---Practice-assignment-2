import React from "react";
import LikeButton from "./likebutton";

const PostCard = ({ post }) => {
    return (
        <div
            style={{
                border: "1px solid #ddd",
                padding: "15px",
                margin: "15px",
                borderRadius: "10px",
                width: "300px",
                boxShadow: "2px 2px 10px rgba(0,0,0,0.1)",
                textAlign: "center",
            }}
        >
            <img
                src={post.profileImage}
                alt={post.username}
                style={{ width: "70px", height: "70px", borderRadius: "50%" }}
            />
            <h3>@{post.username}</h3>
            <p>{post.content}</p>
            <LikeButton isLiked={post.isLiked} />
        </div>
    );
};

export default PostCard;