// app/blog/[id]/page.tsx
"use client";

import { useParams } from "next/navigation";
import { useQuery } from "@tanstack/react-query";
import { fetchPost } from "@/lib/api";

export default function BlogPostPage() {
  const { id } = useParams();
  const postId = Number(id);

  const { data: post, isLoading } = useQuery({
    queryKey: ["post", postId],
    queryFn: () => fetchPost(postId),
    enabled: !!postId,
  });

  return (
    <>
      <div className="">
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          <>
            <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
            <div className="prose dark:prose-invert">{post.body}</div>
          </>
        )}
      </div>
    </>
  );
}
