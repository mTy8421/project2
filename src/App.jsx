import { BrowserRouter, Route, Routes } from "react-router-dom";
// import Home from "./components/views/Home";
import Works from "./components/views/Works";
import Login from "./components/views/Login";
import AddWorks from "./components/views/AddWorks";
import History from "./components/views/History";
import AddSubWorks from "./components/views/AddSubWorks";
import CheckWork from "./components/views/CheckWork";
import Test from "./components/views/Test";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* <Route path="/" element={<Home />}></Route> */}
          <Route path="/" element={<Test />}></Route>
          <Route path="/Works" element={<Works />}></Route>
          <Route path="/auth" element={<Login />}></Route>
          <Route path="/history" element={<History />}></Route>
          <Route path="/add" element={<AddWorks />}></Route>
          <Route path="/addsub" element={<AddSubWorks />}></Route>
          <Route path="/checkworks" element={<CheckWork />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
