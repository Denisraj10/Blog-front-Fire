import { Link } from 'react-router-dom';

function Profile({ user }) {
  return (
    <div className="min-h-screen bg-gray-900 p-4">
      <nav className="flex justify-between mb-4">
        <h1 className="text-2xl text-white">Profile</h1>
        <div>
          <Link to="/home" className="mr-4 text-white">Home</Link>
          <Link to="/blogs" className="text-white">Blogs</Link>
        </div>
      </nav>
      <div className="bg-white p-6 rounded shadow-md max-w-sm mx-auto">
        <h2 className="text-xl">Welcome, {user.email}</h2>
      </div>
    </div>
  );
}

export default Profile;