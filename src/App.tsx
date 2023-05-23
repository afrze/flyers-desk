import { BrowserRouter, Route, Routes } from "react-router-dom";
import Register from "./pages/Register";
import DashBoard from "./pages/Dashboard";
import Login from "./pages/Login";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DashBoard />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
