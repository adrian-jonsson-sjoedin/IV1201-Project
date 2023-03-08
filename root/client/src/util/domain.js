
const setURL = () => {
    if(process.env.NODE_ENV === "development"){
        return "http://localhost:8080"
    }
    return" https://iv1201-server.up.railway.app"
  
}

export const SERVER_URL = setURL();