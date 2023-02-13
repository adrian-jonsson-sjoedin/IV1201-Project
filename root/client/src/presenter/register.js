import { useState } from "react";
import { useNavigate } from "react-router-dom";
import RegisterSuccessView from "../view/registerSuccess";
import RegisterView from "../view/registerView";

/**
 * Presenter for registring a new user
 */
export default function Register() {
    const [registerInfo, setRegisterInfo] = useState("");
    const navigate = useNavigate();

    function registerRequest(formEvent){
        fetch("http://localhost:9000/register" , {
            method: "POST",
            body: JSON.stringify({
                firstName: formEvent.target.firstName.value,
                lastName: formEvent.target.lastName.value,
                userName: formEvent.target.userName.value,
                email: formEvent.target.email.value,
                password: formEvent.target.password.value
            }),
            headers: {"Content-type": "application/json; charset=UTF-8"}
        })
        .then(res => res.json())
        .then(res => {
        
            if(res.register === "OK"){
                setRegisterInfo("OK");
            }
            else {
                setRegisterInfo("Register unsuccessful")
            }
        })
    }

    if(registerInfo === "OK"){
        return (<RegisterSuccessView  />);
    }
    return (<RegisterView submitRegisterForm={registerRequest} registerInfo={registerInfo}/>);
}