import RegisterView from "../view/registerView";

export default function Register() {

    function registerRequest(formEvent){

    }

    return (
        <RegisterView submitRegisterForm={registerRequest}/>
    );

}