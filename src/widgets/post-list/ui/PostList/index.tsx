'use client';

import { FC, useEffect, useState } from "react";
import PostCard from "@/features/posts/ui/PostCard";
import { IProps } from "./types";
import { postApi } from "@/entities/post/api/post.api";
import { Post } from "@/entities/post/post.model";

const PostList: FC<IProps> = ({initialPosts}) => {
    const [posts, setPosts] = useState<Post[]>(initialPosts);
  
    useEffect(() => {
      postApi.getAll().then(setPosts);
    }, []);
    return (
        <div className="flex flex-col gap-1 w-full">
            {posts.map(post => (
                <PostCard post={post} key={post.id} />
            ))}
        </div>
    )
}

export default PostList;
