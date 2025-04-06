import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function Blogs({ user }) {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      const res = await axios.get('http://localhost:5000/blogs');
      setBlogs(res.data);
    };
    fetchBlogs();
  }, []);

  return (
    <div className="min-h-screen bg-gray-900 p-4">
      <nav className="flex justify-between mb-4">
        <h1 className="text-2xl text-white">All Blogs</h1>
        <div>
          <Link to="/home" className="mr-4 text-white">Home</Link>
          <Link to="/profile" className="text-white">Profile</Link>
        </div>
      </nav>
      <div className="space-y-4">
        {blogs.map((blog) => (
          <div key={blog.id} className="bg-white p-4 rounded shadow-md">
            <h2 className="text-xl">{blog.title}</h2>
            <p>{blog.content}</p>
            <p className="text-sm text-gray-500">Posted by: {blog.user_email}</p>
            <p className="text-sm text-gray-500">{new Date(blog.created_at).toLocaleString()}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Blogs;