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
        console.log('Result from loginRequest: ', result); // remove this before publishing app
        if (result === "OK") {
            console.log("Login Successful") // remove this before publishing app
            setLoginInfo("Login Successful")
            navigate("/")
        }else {
            setLoginInfo("Login unsuccessful")
        }
        else {
            setLoginInfo("Login unsuccessful");
        }
    }

    return (
        <LoginView submitLoginRequest={login} loginInfo={loginInfo} />
    );
}