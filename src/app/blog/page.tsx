// app/blog/page.tsx
"use client";

import { useQuery } from "@tanstack/react-query";
import { fetchPosts } from "@/lib/api";
import PostCard from "@/components/PostCard";
import { PostData } from "@/lib/types";

export default function BlogPage() {
  const { data: posts, isLoading } = useQuery({
    queryKey: ["blog-posts"],
    queryFn: fetchPosts,
  });

  return (
    <div className="">
      <h1 className="text-3xl font-bold mb-6">Blogs</h1>
      {isLoading ? (
        <p>Loading posts...</p>
      ) : (
        <ul className="divide-y divide-gray-200 dark:divide-gray-700">
          {posts.map((post: PostData) => (
            <PostCard key={post.id} post={post} />
          ))}
        </ul>
      )}
    </div>
  );
}
