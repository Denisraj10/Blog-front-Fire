import { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function Home({ user }) {
  const [showForm, setShowForm] = useState(false);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handlePost = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`${import.meta.env.VITE_SERVER_APP_URL}/blogs`, {
        title,
        content,
        user_email: user.email,
      });
      setTitle('');
      setContent('');
      setShowForm(false);
      alert('Blog posted!');
    } catch (err) {
      alert('Failed to post blog');
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 p-4">
      <nav className="flex justify-between mb-4">
        <h1 className="text-3xl text-white">Home</h1>
        <div>
          <Link to="/blogs" className="mr-4 text-white">Blogs</Link>
          <Link to="/profile" className="text-white">Profile</Link>
        </div>
      </nav>
      <button
        onClick={() => setShowForm(!showForm)}
        className="fixed bottom-4 right-4 bg-orange-400 text-white p-4 rounded-full text-3xl"
      >
        +
      </button>
      {showForm && (
        <form onSubmit={handlePost} className="bg-white p-6 rounded shadow-md max-w-lg mx-auto">
          <input
            type="text"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full p-2 mb-4 border rounded"
          />
          <textarea
            placeholder="Content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="w-full p-2 mb-4 border rounded"
          />
          <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded">
            Post
          </button>
        </form>
      )}
    </div>
  );
}

export default Home;