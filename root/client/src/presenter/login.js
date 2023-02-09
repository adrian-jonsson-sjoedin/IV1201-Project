import { useState } from "react";
import { useNavigate } from "react-router-dom";
import LoginView from "../view/loginView";
import { loginRequest } from "../model/person";

/**
 * Login presenter
 * @param {Object} props.model - The Model used in the app 
 */
export default function Login(props) {
    const navigate = useNavigate();
    const [loginInfo, setLoginInfo] = useState("");

    // function loginRequest(formEvent) {
    //     fetch("http://localhost:9000/users" , {
    //         method: "POST",
    //         body: JSON.stringify({
    //             userName: formEvent.target.username.value,
    //             password: formEvent.target.password.value
    //         }),
    //         headers: {"Content-type": "application/json; charset=UTF-8"}
    //     })
    //     .then(res => res.json())
    //     .then(res => {
            
    //         console.log(res)

    //         if(res.login === "OK"){
    //             props.model.setCurrentUser(res.user);
    //             navigate("/");
    //         }
    //         else {
    //             setLoginInfo("Login unsuccessful")
    //         }
    //     })
    // }

    return (
        <LoginView submitLoginRequest={loginRequest} loginInfo={loginInfo}/>
    );
}