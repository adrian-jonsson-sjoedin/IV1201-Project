import { useState } from "react";
import { useNavigate } from "react-router-dom";
import LoginView from "../view/loginView";

export default function Login() {
    const navigate = useNavigate();
    const [loginInfo, setLoginInfo] = useState("");

    function loginRequest(formEvent) {
        fetch("http://localhost:9000/users" , {
            method: "POST",
            body: JSON.stringify({
                email: formEvent.target.email.value,
                password: formEvent.target.password.value
            }),
            headers: {"Content-type": "application/json; charset=UTF-8"}
        })
        .then(res => res.json())
        .then(res => {
            console.log(res);

            if(res.login === "OK"){
                navigate("/");
            }
            else {
                setLoginInfo("Login unsuccessful")
            }
        })
    }

    return (
        <LoginView submitLoginRequest={loginRequest} loginInfo={loginInfo}/>
    );
}