import { FC } from "react";
import { IProps } from "./types";

const PostCard:FC<IProps> = ({post}) => {
    return (
        <h1>{post.title}</h1>
    )
}

export default PostCard;