import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./presenter/home";
import Login  from "./presenter/login";
import Register from "./presenter/register";
import Model from "./model/Model";


function App() {
  const [model, ] = useState(new Model());
  return (
    <Routes>
      <Route path="/"  element={<Home model={model}/>}/>
      <Route path="/login" element={<Login model={model}/>} />
      <Route path="/register" element={<Register model={model}/>} />
    </Routes>
  );
}

export default App;
