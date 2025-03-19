import React, { useState } from "react";

const LikeButton = ({ isLiked }) => {
    const [liked, setLiked] = useState(isLiked);

    const toggleLike = () => {
        setLiked(!liked);
    };

    return (
        <button
            onClick={toggleLike}
            style={{
                backgroundColor: liked ? "red" : "gray",
                color: "white",
                border: "none",
                padding: "10px 20px",
                cursor: "pointer",
                borderRadius: "5px",
            }}
        >
            {liked ? "Liked ❤️" : "Like 🤍"}
        </button>
    );
};

export default LikeButton;