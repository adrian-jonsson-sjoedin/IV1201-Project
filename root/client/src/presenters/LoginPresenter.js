import { useState } from "react";
import { useNavigate } from "react-router-dom";
import LoginForm from "../views/LoginForm";
import { loginRequest } from "../models/Person";

/**
 * Login presenter
 * @param {Object} props.model - The Model used in the app 
 */
export default function Login(props) {
    const navigate = useNavigate();
    const [loginInfo, setLoginInfo] = useState("");

    async function login(formEvent) {
        try {
            const result = await loginRequest(formEvent, props.model)
            if (result === "OK") {
                console.log("Login Successful") // remove this before publishing app
                setLoginInfo("Login Successful")
                navigate("/")
            }else {
                setLoginInfo("Login unsuccessful")
            }
        }
        catch (err){
            setLoginInfo("Server connection error")
        }
    }

    return (
        <LoginForm submitLoginRequest={login} loginInfo={loginInfo} />
    );
}