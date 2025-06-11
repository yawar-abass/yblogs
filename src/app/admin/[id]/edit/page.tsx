"use client";

import { useRouter, useParams } from "next/navigation";
import { useQuery, useMutation } from "@tanstack/react-query";
import { fetchPost, updatePost } from "@/lib/api";
import PostForm from "@/components/PostForm";
import SidebarLayout from "@/components/SidebarLayout";
import { PostData } from "@/lib/types";

export default function EditPostPage() {
  const router = useRouter();
  const params = useParams();
  const id = Number(params.id);

  const { data, isLoading } = useQuery({
    queryKey: ["post", id],
    queryFn: () => fetchPost(id),
  });

  const mutation = useMutation({
    mutationFn: (data: PostData) => updatePost(id, data),
    onSuccess: () => router.push("/admin"),
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
      <PostForm
        initialData={data}
        onSubmit={(formData) =>
          mutation.mutate({ ...formData, userId: data.userId ?? 1 })
        }
      />
    </SidebarLayout>
  );
}
