import Model from "./Model";

async function loginRequest(loginFormEvent, model) {
    try {
        const response = await fetch("http://localhost:8080/api/person/login", {
            method: "POST",
            body: JSON.stringify({
                username: loginFormEvent.target.username.value,
                password: loginFormEvent.target.password.value,
            }),
            headers: { "Content-type": "application/json; charset=UTF-8" },
        });
        const responseData = await response.json();
        console.log('Response data: ', responseData);
        if (responseData.status !== "Failed") {
            console.log('Setting current user: ', responseData);
            model.setCurrentUser(responseData);
            console.log('Current user: ', model.currentUser);
            return "OK";
        } else {
            return "Failed";
        }
    } catch (error) {
        console.error(error);
    }
}

export { loginRequest };