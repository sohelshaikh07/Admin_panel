import Sidebar from './Component/Sidebar/Sidebar';
import Topbar from './Component/Topbar/Topbar'
import Home from './Component/Pages/Home/Home';
import UserList from './Component/Pages/UserList/UserList';
import User from './Component/Pages/User/User';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css'

function App() {
  return (
    <Router>
      <Topbar />
      <div className="container">
        <Sidebar />
        <Routes >
          <Route exact path="/" element={<Home />}/>
          <Route path="/users" element={<UserList />} />
          <Route path="/user/:userId" element={<User />}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
