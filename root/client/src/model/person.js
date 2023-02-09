function loginRequest(loginFormEvent) {
    fetch("http://localhost:8080/api/person/login", {
        method: "POST",
        body: JSON.stringify({
            username: loginFormEvent.target.username.value,
            password: loginFormEvent.target.password.value
        }),
        headers: { "Content-type": "application/json; charset=UTF-8" }
    }).then(response => response.json()).then(response => {
        console.log(response)
    })
    
}
export {loginRequest}

