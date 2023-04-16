import { SERVER_URL } from "../util/domain";
import { capitalizeFirstLetter } from "../util/util";
/**
 * Fetches the list of applications from the API and returns a mapped array of applications.
 *
 * @async
 * @function fetchAllApplications
 * @returns {Promise<Array<{name: string, surname: string, application_status: string}>>|string} An array of all the application with full name and status, or a string "Failed".
 * @throws {Error} If an error occurs during the network request.
 */
async function fetchAllApplications(token) {
    try {
        const response = await fetch(SERVER_URL + "/api/application", {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });
        const responseData = await response.json();
        console.log("Response status: ", responseData.status);// remove this before publishing app
        if (responseData.status !== 500) {
            const applications = responseData.map(res => ({
                name: capitalizeFirstLetter(res.person.name),
                surname: capitalizeFirstLetter(res.person.surname),
                status: capitalizeFirstLetter(res.application_status),
                id: res.application_id
            }));
            return applications;
        } else {
            return "Failed";
        }
    } catch (error) {
        console.error(error);
        throw new Error("An error occurred while trying to retrieve all applications from the server.");
    }
}

export { fetchAllApplications }