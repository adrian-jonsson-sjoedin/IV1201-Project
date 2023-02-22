/**
 * Sends a login request to the server and updates the model with the returned 
 * user if login succeed.
 * @async 
 * @param {Event} loginFormEvent - The event object from the login form submission.
 * @param {Model} model - The model used in the app that will be updated with current user data.
 * @returns {Promise<string>} A Promise that resolves to "OK" if the request is successful, or "Failed" otherwise.
 * @throws {Error} If an error occurs during the request.
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

/**
 * Sends a request to create a new applicant with the provided form data. Saves the newly created user
 * to the model as the current user.
 *
 * @async
 * @function createApplicantRequest
 * @param {Event} registerFormEvent - The event object of the form submit event.
 * @param {Model} model - The model object that contains the current user information.
 * @returns {Promise<string>} A Promise that resolves to "OK" if the request is successful, or "Failed" otherwise.
 * @throws {Error} If an error occurs during the request.
 */
async function createApplicantRequest(registerFormEvent, model) {
    try {
        const requestBody = {
            name: registerFormEvent.target.name.value,
            surname: registerFormEvent.target.surname.value,
            pnr: registerFormEvent.target.pnr.value,
            email: registerFormEvent.target.email.value,
            username: registerFormEvent.target.username.value,
            password: registerFormEvent.target.password.value,
          };
          console.log('Request body', JSON.stringify(requestBody)); // remove this before publishing app
        const response = await fetch("http://localhost:8080/api/person/", {
            method: "POST",
            body: JSON.stringify(requestBody),
            headers: { "Content-type": "application/json: charset=UTF-8" },
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

export { loginRequest, createApplicantRequest };