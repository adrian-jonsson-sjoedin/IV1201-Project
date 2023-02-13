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

    async function login(formEvent) {
        const result = await loginRequest(formEvent, props.model)
        console.log(result);
        if (result === "OK") {
            console.log("test")
            navigate("/")
        }
        else {
            setLoginInfo("Login unsuccessful");
        }
    }

    return (
        <LoginView submitLoginRequest={login} loginInfo={loginInfo} />
    );
}