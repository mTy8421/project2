import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/views/Home";
import Works from "./components/views/Works";
import Login from "./components/views/Login";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/Works" element={<Works />}></Route>
          <Route path="/auth" element={<Login />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
