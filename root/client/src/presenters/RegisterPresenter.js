import { useState } from "react";
import RegisterSuccess from "../views/RegisterSuccess";
import { createApplicantRequest } from "../models/Person";
import RegisterForm from "../views/RegisterForm";

/**
 * Presenter for registring a new user
 * @param {Object} props.model - The model
 */
export default function Register(props) {
    const [registerInfo, setRegisterInfo] = useState();

    async function register(formEvent) {

        const formData = Object.fromEntries(new FormData(formEvent.taget))

        try{
            const result = await createApplicantRequest(formEvent, props.model)
            if (result === "OK") {
                console.log("Login Successful") // remove this before publishing app
                setRegisterInfo("OK")
            }else {
                setRegisterInfo("Register unsuccessful")
            }
        }
        catch (err){
            setRegisterInfo("Server Connection error")
        }
    }

    if(registerInfo === "OK"){
        return (<RegisterSuccess />);
    }
    return (
        <RegisterForm submitRegisterForm={register} registerInfo={registerInfo}/>
    );

}