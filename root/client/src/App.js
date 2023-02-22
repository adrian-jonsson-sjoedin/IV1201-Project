import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./presenters/HomePresenter";
import Login  from "./presenters/LoginPresenter";
import Register from "./presenters/RegisterPresenter";
import Model from "./models/Model";
import Apply from "./presenters/ApplyPresenter";
import { ApplicantRoute } from "./routes";


function App() {
  const [model, ] = useState(new Model());
   //for testing
  return (
    <Routes>
      <Route path="/"  element={<Home model={model}/>} />
      <Route element={<ApplicantRoute model={model}/>}>
        <Route path="/apply" element={<Apply model={model}/>}/>
      </Route>
      <Route path="/login" element={<Login model={model}/>} />
      <Route path="/register" element={<Register model={model}/>} />
      <Route path="*" element={<p>There's nothing here: 404!</p>} />
    </Routes>
  );
}


export default App;
