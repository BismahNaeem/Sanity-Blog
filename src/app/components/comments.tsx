"use client"
import React, { useState } from 'react';

export default function CommentSection() {
  // State to store the list of comments (each comment will have a name and text)
  const [comments, setComments] = useState<{ name: string; text: string }[]>([]);
  // State to track the name input
  const [name, setName] = useState<string>('');
  // State to track the comment input
  const [newComment, setNewComment] = useState<string>('');

  // Function to handle adding a new comment
  const handleAddComment = () => {
    if (name.trim() && newComment.trim()) { // Ensure both fields are filled
      // Add the new comment (prepend it to the list)
      setComments([{ name, text: newComment }, ...comments]);
      setName(''); // Clear the name field
      setNewComment(''); // Clear the comment field
    }
  };

  return (
    <div style={{ marginTop: '20px', padding: '10px', border: '1px solid #ddd' }}>
      <h2>Comments</h2>

      {/* Input for Name */}
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Your name..."
        style={{ padding: '8px', width: '70%', marginRight: '10px' }}
      />

      {/* Input for Comment */}
      <input
        type="text"
        value={newComment}
        onChange={(e) => setNewComment(e.target.value)}
        placeholder="Write a comment..."
        style={{ padding: '8px', width: '70%', marginRight: '10px', marginTop: '10px' }}
      />

      {/* Button to Add Comment */}
      <button onClick={handleAddComment} style={{ padding: '8px 12px', marginTop: '10px' }}>
        Add Comment
      </button>

      {/* Display the List of Comments */}
      <div style={{ marginTop: '20px' }}>
        {comments.map((comment, index) => (
          <div
            key={index}
            style={{
              border: '1px solid #ccc',
              padding: '10px',
              marginBottom: '10px',
              borderRadius: '5px',
              backgroundColor: '#f9f9f9',
            }}
          >
            <strong>{comment.name}:</strong>
            <p>{comment.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}