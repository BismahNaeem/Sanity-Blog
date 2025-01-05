'use client';

import CommentSection from '@/app/components/comments';
import { client } from '@/sanity/lib/client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const query = `*[_type == "blog" && _id == $id][0] {
  _id,
  title,
  discription,
  "imageUrl": image.asset->url,
  publishedAt
}`;

interface BlogPost {
  _id: string;
  title: string;
  discription: string;
  imageUrl: string;
  publishedAt: string;
}

const BlogDetail = ({ params }: { params: { id: string } }) => {
  const [post, setPost] = useState<BlogPost | null>(null);

  useEffect(() => {
    const fetchPost = async () => {
      const data = await client.fetch(query, { id: params.id });
      setPost(data || null);
    };
    fetchPost();
  }, [params.id]);

  if (!post) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <div className="min-h-screen bg-gray-100 py-10 px-4 flex justify-center items-center">
        <div className="bg-white shadow-lg rounded-lg p-6 max-w-3xl w-full animate-slide-in">
          <div className="mb-10">
            <Link href="/">
              <button className="font-bold text-md bg-gray-100 rounded-md">
                Back to blogs
              </button>
            </Link>
          </div>
          {/* Blog Title */}
          <h1 className="text-3xl font-bold text-gray-900 mb-6 text-center">{post.title}</h1>

          {/* Blog Image */}
          <div className="flex justify-center mb-6">
            <Image
              src={post.imageUrl}
              alt={post.title}
              height={500}
              width={500}
              className="rounded-lg"
              style={{ maxWidth: '100%', height: 'auto' }}
            />
          </div>

          {/* Blog Description */}
          <p className="text-gray-700 text-lg mb-6">{post.discription}</p>

          {/* Published Date */}
          <p className="text-sm text-gray-500 text-right">
            <strong>Published on:</strong> {new Date(post.publishedAt).toLocaleDateString()}
          </p>

          {/* Comments Section */}
          <div className="mt-8">
            <h2 className="text-2xl font-semibold mb-4">Comments</h2>
            <ul className="space-y-4">
              <li className="bg-gray-50 p-4 rounded-lg shadow-sm">
                <p>
                  <strong>John Doe:</strong> This is an amazing blog post! Keep it up.
                </p>
              </li>
              <li className="bg-gray-50 p-4 rounded-lg shadow-sm">
                <p>
                  <strong>Jane Smith:</strong> I learned a lot from this post. Thank you!
                </p>
              </li>
              <li className="bg-gray-50 p-4 rounded-lg shadow-sm">
                <p>
                  <strong>Mike Johnson:</strong> Great insights and beautifully written!
                </p>
              </li>
              <CommentSection />
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetail;