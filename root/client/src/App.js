import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./presenters/HomePresenter";
import Login  from "./presenters/LoginPresenter";
import Register from "./presenters/RegisterPresenter";
import Model from "./models/Model";
import Apply from "./presenters/ApplyPresenter";
import { ApplicantRoute, RecruiterRoute } from "./routes";
import Applications from "./presenters/ApplicationPresenter";


function App() {
  const [model, ] = useState(new Model());
  //model.currentUser = {role_id: 2}
  return (
      <Routes>
        <Route path="/"  element={<Home model={model}/>} />
        <Route element={<ApplicantRoute model={model}/>}>
          <Route path="/apply" element={<Apply model={model}/>}/>
        </Route>
        <Route element={<RecruiterRoute model={model}/>}>
          <Route path="/applications" element={<Applications/>}/>
        </Route>
        <Route path="/login" element={<Login model={model}/>} />
        <Route path="/register" element={<Register model={model}/>} />
        <Route path="*" element={<h1>There's nothing here: 404!</h1>} />
      </Routes>
  );
}


export default App;
