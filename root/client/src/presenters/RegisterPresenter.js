import { useState } from "react";
import { useNavigate } from "react-router-dom";
import RegisterSuccess from "../views/RegisterSuccess";
import { createApplicantRequest } from "../models/person";
import RegisterForm from "../views/RegisterForm";

/**
 * Presenter for registring a new user
 */
export default function Register(props) {
    const [registerInfo, setRegisterInfo] = useState();
    const navigate = useNavigate();

    async function register(formEvent) {
        const result = await createApplicantRequest(formEvent, props.model)
        console.log('Result from createApplicantRequest: ', result);
        if (result === "OK") {
            console.log("Login Successful") // remove this before publishing app
            setRegisterInfo("OK")
        }else {
            setRegisterInfo("Register unsuccessful")
        }
    }

    // function registerRequest(formEvent){
    //     fetch("http://localhost:9000/register" , {
    //         method: "POST",
    //         body: JSON.stringify({
    //             firstName: formEvent.target.firstName.value,
    //             lastName: formEvent.target.lastName.value,
    //             userName: formEvent.target.userName.value,
    //             email: formEvent.target.email.value,
    //             password: formEvent.target.password.value
    //         }),
    //         headers: {"Content-type": "application/json; charset=UTF-8"}
    //     })
    //     .then(res => res.json())
    //     .then(res => {
        
    //         if(res.register === "OK"){
    //             navigate("/login");
    //         }
    //         else {
    //             setRegisterInfo("Register unsuccessful")
    //         }
    //     })
    // }

    if(registerInfo === "OK"){
        return (<RegisterSuccess />);
    }
    return (
        <RegisterForm submitRegisterForm={register} registerInfo={registerInfo}/>
    );

}