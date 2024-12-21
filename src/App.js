import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./components/Index";
import Register from "./components/Register";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import ForgotPassword from "./components/ForgotPassword";

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Index/>}></Route>
    <Route path="/register" element={<Register/>}></Route>
    <Route path="/login" element={<Login/>}></Route>
    <Route path="/dashboard" element={<Dashboard/>}></Route>
    <Route path="/forgot-password" element={<ForgotPassword/>}></Route>

    </Routes>
</BrowserRouter>
</>
  );
}

export default App;
