import { PostData } from "@/lib/types";
import { getRandomFutureDate } from "@/lib/utils";
import Link from "next/link";

export default function PostCard({ post }: { post: PostData }) {
  const { id, title, body } = post;
  const randomDate: string = getRandomFutureDate();

  return (
    <li className="py-12">
      <article>
        <div className="space-y-2 xl:grid xl:grid-cols-4 xl:items-baseline xl:space-y-0">
          <dl>
            <dt className="sr-only">Published on</dt>
            <dd className="text-base leading-6 font-medium text-gray-500 dark:text-gray-400">
              <time dateTime={randomDate}>{randomDate}</time>
            </dd>
          </dl>
          <div className="space-y-5 xl:col-span-3">
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl leading-8 font-bold tracking-tight">
                  <Link
                    href={`/blog/${id}`}
                    className="text-gray-900 dark:text-gray-100"
                  >
                    {title}
                  </Link>
                </h2>
              </div>
              <div className="prose max-w-none text-gray-500 dark:text-gray-400">
                {body}
              </div>
            </div>
            <div className="text-base leading-6 font-medium">
              <Link
                href={`/blog/${id}`}
                className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                aria-label={`Read more: "${title}"`}
              >
                Read more &rarr;
              </Link>
            </div>
          </div>
        </div>
      </article>
    </li>
  );
}
