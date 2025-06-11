// components/PostForm.tsx
"use client";

import { useState } from "react";
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { Button } from "@/components/ui/button";

export default function PostForm({
  initialData,
  onSubmit,
}: {
  initialData?: any;
  onSubmit: (data: any) => void;
}) {
  const [title, setTitle] = useState(initialData?.title || "");

  const editor = useEditor({
    extensions: [StarterKit],
    content: initialData?.body || "",
  });

  const handleSubmit = (e: any) => {
    e.preventDefault();
    onSubmit({
      title,
      body: editor?.getHTML() || "",
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        type="text"
        className="w-full p-2 border rounded"
        placeholder="Post Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <div className="border rounded p-2">
        <EditorContent editor={editor} />
      </div>
      <Button type="submit" className="cursor-pointer">
        Submit
      </Button>
    </form>
  );
}
