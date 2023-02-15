/**
 * Sends a login request to the server and updates the model with the returned 
 * user if login succeed.
 * @async 
 * @param {Event} loginFormEvent - The event object from the login form submission.
 * @param {Model} model - The model used in the app that will be updated with current user data.
 * @returns {Promise<string>} A promise that resolves to "OK" if login succeeds, or "Failed" if 
 * unsuccessful.
 */
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
        console.log('Response data: ', responseData); // remove this before publishing app
        if (responseData.status !== "Failed") {
            console.log('Setting current user: ', responseData); // remove this before publishing app
            model.updateCurrentUser(responseData);
            console.log('Current user: ', model.currentUser); // remove this before publishing app
            return "OK";
        } else {
            return "Failed";
        }
    } catch (error) {
        console.error(error);
    }
}

export { loginRequest };