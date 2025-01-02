import Link from 'next/link';
import { client } from '@/sanity/lib/client';
import Image from 'next/image';

// GROQ query to fetch blog data
const query = `*[_type == "blog"] {
  _id,
  title,
  "imageUrl": image.asset->url
}`;

interface BlogPost {
    _id :string;
    title :string ;
    imageUrl : string;
}

// Fetch data from Sanity
const fetchData = async () => {
  const posts = await client.fetch(query);
  return posts;
};

export default async function Home() {
  const posts = await fetchData();

  return (
    <div>
      <h1 className="text-center text-3xl font-bold mb-10">Blog Posts</h1>
      <div className="text-gray-600 body-font">
        <div className="container px-5 py-12 mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post: BlogPost) => (
              <div
                key={post._id}
                className="p-6 bg-white shadow-lg rounded-lg"
              >
                {/* Blog Title */}
                <h2 className="text-xl font-semibold text-gray-900 mb-4">
                  {post.title}
                </h2>

                {/* Blog Image */}
                <Image
                  src={post.imageUrl}
                  alt={post.title}
                  width={500}
                  height={300}
                  className="rounded-lg mb-4"
                  style={{ objectFit: 'cover' }}
                />

                {/* Learn More Link */}
                <div className="flex items-center justify-between mt-4">
                  <Link href={`/blog/${post._id}`} className="text-indigo-500 inline-flex items-center">
                    Learn More
                    <svg
                      className="w-4 h-4 ml-2"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M5 12h14" />
                      <path d="M12 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>

                {/* View and Comment Icons */}
                <div className="flex items-center text-gray-400 text-sm mt-2">
                  <span className="flex items-center mr-4">
                    <svg
                      className="w-4 h-4 mr-1"
                      stroke="currentColor"
                      strokeWidth={2}
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      viewBox="0 0 24 24"
                    >
                      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                      <circle cx={12} cy={12} r={3} />
                    </svg>
                    1.2K Views
                  </span>
                  <span className="flex items-center">
                    <svg
                      className="w-4 h-4 mr-1"
                      stroke="currentColor"
                      strokeWidth={2}
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      viewBox="0 0 24 24"
                    >
                      <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" />
                    </svg>
                    6 Comments
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}