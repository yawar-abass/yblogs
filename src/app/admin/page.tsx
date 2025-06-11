"use client";

import Link from "next/link";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { fetchPosts, deletePost } from "@/lib/api";
import { Button } from "@/components/ui/button";
import SidebarLayout from "@/components/SidebarLayout";
import { PostData } from "@/lib/types";

export default function AdminPage() {
  const queryClient = useQueryClient();
  const { data: posts, isLoading } = useQuery({
    queryKey: ["admin-posts"],
    queryFn: fetchPosts,
  });

  const deleteMutation = useMutation({
    mutationFn: deletePost,
    onMutate: async (deletedId: number) => {
      await queryClient.cancelQueries({ queryKey: ["admin-posts"] });

      const previousPosts = queryClient.getQueryData<PostData[]>([
        "admin-posts",
      ]);

      if (previousPosts) {
        queryClient.setQueryData<PostData[]>(
          ["admin-posts"],
          previousPosts.filter((post) => post.id !== deletedId)
        );
      }

      return { previousPosts };
    },
    onError: (err, deletedId, context) => {
      if (context?.previousPosts) {
        queryClient.setQueryData(["admin-posts"], context.previousPosts);
      }
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ["admin-posts"] });
    },
  });

  if (isLoading) {
    return (
      <SidebarLayout>
        <p>Loading...</p>
      </SidebarLayout>
    );
  }

  return (
    <SidebarLayout>
      <div className="p-6">
        <Link href="/admin/new" className="mb-4 inline-block">
          <Button className="cursor-pointer">Add New Post</Button>
        </Link>
        <div className="space-y-4">
          {posts.map((post: PostData) => (
            <div key={post.id} className="border p-4 rounded shadow">
              <h3 className="font-bold text-lg">{post.title}</h3>
              <div className="mt-2 space-x-2">
                <Link href={`/admin/${post.id}/edit`}>
                  <Button variant="outline" className="cursor-pointer">
                    Edit
                  </Button>
                </Link>
                <Button
                  onClick={() =>
                    post.id !== undefined && deleteMutation.mutate(post.id)
                  }
                  variant="destructive"
                  className="cursor-pointer"
                >
                  Delete
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </SidebarLayout>
  );
}
