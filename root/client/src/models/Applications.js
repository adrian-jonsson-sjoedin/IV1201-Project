import { capitalizeFirstLetter } from "../util/util";
/**
 * Fetches the list of competences from the API and returns a mapped array of competences.
 *
 * @async
 * @function fetchCompetenceList
 * @returns {Promise<Array<{competence_id: number, name: string}>>|string} An array of mapped competences or a string "Failed".
 * @throws {Error} If an error occurs during the network request.
 */
async function fetchAllApplications() {
    try {
        const response = await fetch("http://localhost:8080/api/applications");
        const responseData = await response.json();
        console.log("Response data for fetching the all applications: ", responseData);// remove this before publishing app
        if (responseData.status !== 500) {
            const applications = responseData.map(res => ({
                name: capitalizeFirstLetter(res.name),
                surname: capitalizeFirstLetter(res.surname),
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

export {fetchCompetenceList}