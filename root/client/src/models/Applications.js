import { capitalizeFirstLetter } from "../util/util";
/**
 * Fetches the list of applications from the API and returns a mapped array of applications.
 *
 * @async
 * @function fetchAllApplications
 * @returns {Promise<Array<{name: string, surname: string, application_status: string}>>|string} An array of all the application with full name and status, or a string "Failed".
 * @throws {Error} If an error occurs during the network request.
 */
async function fetchAllApplications() {
    try {
        const response = await fetch(SERVER_URL + "/api/competence/");
        const responseData = await response.json();
        console.log("Response data for fetching the all applications: ", responseData);// remove this before publishing app
        if (responseData.status !== 500) {
            const applications = responseData.map(res => ({
                name: capitalizeFirstLetter(res.person.name),
                surname: capitalizeFirstLetter(res.person.surname),
                status: capitalizeFirstLetter(res.application_status)
            }));
            console.log("Returned object: ", applications);
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