import { fetchPost } from "@/lib/api";

export default async function PostDetail({
  params,
}: {
  params: { id: string };
}) {
  const post = await fetchPost(Number(params.id));
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-2">{post.title}</h1>
      <p className="text-gray-700">{post.body}</p>
    </div>
  );
}
