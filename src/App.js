import "./App.css";
import Sidebar from "./Components/Side_Navbar/Sidebar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import New from "./Pages/New";
import Patient from "./Pages/Patient";
import Folder from "./Pages/Folder";
import Upload from "./Pages/Uplaod";
import Report from "./Pages/Report";
import Setting from "./Pages/Setting";
import Logout from "./Pages/Logout";

const App = () => {
  return (
    <div className="App">
      <Router>
        <Sidebar>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/new" element={<New />} />
            <Route path="/patient" element={<Patient />} />
            <Route path="/folder" element={<Folder />} />
            <Route path="/upload" element={<Upload />} />
            <Route path="/report" element={<Report />} />
            <Route path="/setting" element={<Setting />} />
            <Route path="/logout" element={<Logout />} />
          </Routes>
        </Sidebar>
      </Router>
    </div>
  );
};

export default App;
