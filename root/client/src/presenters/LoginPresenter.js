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
    const [isLoading, setIsLoading] = useState();

    async function login(formEvent) {
        setIsLoading({})
        try {
            const result = await loginRequest(formEvent, props.model)
            if (result === "OK") {
                setLoginInfo("Login Successful")
                navigate("/")
            }else {
                setLoginInfo("Login unsuccessful")
            }
        }
        catch (err){
            setLoginInfo("Server connection error")
        }
        setIsLoading(null)
    }

    return (
        <LoginForm submitLoginRequest={login} loginInfo={loginInfo} isLoading={isLoading}/>
    );
}