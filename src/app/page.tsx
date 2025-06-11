"use client";
import { useQuery } from "@tanstack/react-query";
import { fetchPosts } from "@/lib/api";
import PostCard from "@/components/PostCard";
import { PostData } from "@/lib/types";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
export default function Home() {
  const MAX_DISPLAY = 5;
  const { data: posts, isLoading } = useQuery({
    queryKey: ["posts"],
    queryFn: fetchPosts,
  });

  if (isLoading) return <p>Loading...</p>;

  return (
    <div className="mx-auto max-w-3xl px-4 sm:px-6 xl:max-w-5xl xl:px-0">
      <Header />
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pt-6 pb-8 md:space-y-5">
          <h1 className="text-3xl leading-9 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14 dark:text-gray-100">
            Latest
          </h1>
          <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
            Blogs
          </p>
        </div>

        <ul className="divide-y divide-gray-200 dark:divide-gray-700"></ul>
        <ul className="divide-y divide-gray-200 dark:divide-gray-700">
          {!posts.length && "No posts found."}
          {posts.slice(0, MAX_DISPLAY).map((post: PostData) => {
            return <PostCard key={post.id} post={post} />;
          })}
        </ul>
      </div>
      {posts.length > MAX_DISPLAY && (
        <div className="flex justify-end text-base leading-6 font-medium mb-10">
          <Button>
            <Link
              href="/blog"
              className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
              aria-label="All posts"
            >
              All Posts &rarr;
            </Link>
          </Button>
        </div>
      )}
    </div>
  );
}
