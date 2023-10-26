import { Route, Routes } from "react-router-dom";
import Homepage from "./Mainpages/Homepage";
import Header from "./Component/Header";
import Left_scrollbar from './Component/Left_scrollbar'
function App() {
  return (
    <div>
      <Routes>
          <Route path="/" element={<Homepage/>} />
          {/* <Route path="/" element={<Left_scrollbar/>} /> */}
      </Routes>
    </div>
  );
}

export default App;
