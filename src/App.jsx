import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './components/Login';
import Home from './components/Home';
import Blogs from './components/Blogs';
import Profile from './components/Profile';

function App() {
  const [user, setUser] = useState(null);

  return (
    <Router>
      <Routes>
        <Route path="/" element={!user ? <Login setUser={setUser} /> : <Navigate to="/home" />} />
        <Route path="/home" element={user ? <Home user={user} /> : <Navigate to="/" />} />
        <Route path="/blogs" element={user ? <Blogs user={user} /> : <Navigate to="/" />} />
        <Route path="/profile" element={user ? <Profile user={user} /> : <Navigate to="/" />} />
      </Routes>
    </Router>
  );
}

export default App;