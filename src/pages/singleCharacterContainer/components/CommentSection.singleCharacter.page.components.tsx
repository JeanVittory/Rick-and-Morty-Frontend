import { useState } from 'react';
import dayjs from 'dayjs';

export const CommentSection = () => {
  const [comments, setComments] = useState<{ text: string; date: string }[]>([]);
  const [newComment, setNewComment] = useState('');

  const handleAddComment = () => {
    if (newComment.trim()) {
      const now = new Date();
      const formattedDate = dayjs(now).format('DD MMM YYYY, hh:mm A');
      setComments([...comments, { text: newComment, date: formattedDate }]);
      setNewComment('');
    }
  };

  return (
    <div className='mt-6 p-4'>
      <h3 className='font-nunito font-bold text-lg mb-2'>Comments:</h3>
      <div className='flex gap-2'>
        <input
          type='text'
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          placeholder='Write a comment...'
          className='border rounded-md p-2 w-full'
        />
        <button
          onClick={handleAddComment}
          className='bg-[#c7f9cc] text-black p-2 rounded-md hover:bg-[#92ff9d] transition-colors'
        >
          Send
        </button>
      </div>
      <ul className='mt-4 space-y-2'>
        {comments.map((comment, index) => (
          <li key={index} className='bg-gray-100 p-2 rounded-md flex justify-between'>
            <p>{comment.text}</p>
            <span className='text-xs text-gray-500'>{comment.date}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};
