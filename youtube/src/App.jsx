import { Route, Routes } from "react-router-dom";
import Practice from './Mainpages/Practice'
import Homepage from "./Mainpages/Homepage";
import Singlepage from "./Mainpages/Singlepage";
import Login from "./Mainpages/Login";
import Register from "./Mainpages/Register";
// import Profile from "./Mainpages/Profile";
// import History from "./Mainpages/History";

function App() {
  return (
    <div>
      <Routes>
          {/* <Route path="/" element={<Practice/>} /> */}
          <Route path="/" element={<Homepage/>} />
          <Route path="/singlepage/:id" element={<Singlepage/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/register" element={<Register/>}/>
          {/* <Route path="/you" element={<Profile/>} />
          <Route path="/history" element={<History/>} /> */}

          {/* <Route path="/practice/:id" element={<Practice/>} /> */}
      </Routes>
    </div>
  );
}

export default App;
