import { Route, Routes } from "react-router-dom";
import Homepage from "./Mainpages/Homepage";
import Header from "./Component/Header";
import Left_scrollbar from './Component/Left_scrollbar'
import Login from "./Mainpages/Login";
import Register from "./Mainpages/Register";
import Singlepage from "./Mainpages/Singlepage";
import Profile from "./Mainpages/Profile";
import History from "./Mainpages/History"

function App() {
  return (
    <div>
      <Routes>
          <Route path="/" element={<Homepage/>} />
          <Route path="/singlepage/:videoId" element={<Singlepage/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/register" element={<Register/>}/>
          <Route path="/you" element={<Profile/>} />
          <Route path="/history" element={<History/>} />
          {/* <Route path="/" element={<Left_scrollbar/>} /> */}
      </Routes>
    </div>
  );
}

export default App;
