import { Route, Routes } from "react-router-dom";
import Home from "./presenter/home";
import Login  from "./presenter/login";
import Register from "./presenter/register";


function App() {
  return (
    <Routes>
      <Route path="/"  element={<Home />}/>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  );
}

export default App;
