import { BrowserRouter, Route, Routes } from "react-router-dom";
import DashBoard from "./pages/Dashboard";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DashBoard />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<NotFound />}/>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
