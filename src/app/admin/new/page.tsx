"use client";

import { useRouter } from "next/navigation";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createPost } from "@/lib/api";
import PostForm from "@/components/PostForm";
import { PostData } from "@/lib/types";
import SidebarLayout from "@/components/SidebarLayout";

export default function NewPostPage() {
  const router = useRouter();
  const queryClient = useQueryClient();

  const createPostMutation = useMutation({
    mutationFn: createPost,
    onMutate: async (newPost: PostData) => {
      await queryClient.cancelQueries({ queryKey: ["admin-posts"] });

      const previousPosts = queryClient.getQueryData<PostData[]>([
        "admin-posts",
      ]);

      const fakeId = Date.now();
      const optimisticPost = { ...newPost, id: fakeId };

      if (previousPosts) {
        queryClient.setQueryData<PostData[]>(
          ["admin-posts"],
          [optimisticPost, ...previousPosts]
        );
      }

      return { previousPosts };
    },
    onError: (err, newPost, context) => {
      if (context?.previousPosts) {
        queryClient.setQueryData(["admin-posts"], context.previousPosts);
      }
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ["admin-posts"] });
    },
    onSuccess: () => {
      router.push("/admin");
    },
  });

  return (
    <SidebarLayout>
      <PostForm
        onSubmit={(data) => {
          // Ensure userId is a number; replace 1 with the actual user id as needed
          createPostMutation.mutate({ ...data, userId: 1 });
        }}
      />
    </SidebarLayout>
  );
}
