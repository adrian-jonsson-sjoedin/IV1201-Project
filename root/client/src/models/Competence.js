import { SERVER_URL } from "../util/domain";
import { capitalizeFirstLetter } from "../util/util";
/**
 * Fetches the list of competences from the API and returns a mapped array of competences.
 *
 * @async
 * @function fetchCompetenceList
 * @returns {Promise<Array<{competence_id: number, name: string}>>|string} An array of mapped competences or a string "Failed".
 * @throws {Error} If an error occurs during the network request.
 */
async function fetchCompetenceList() {
    try {
        const response = await fetch(SERVER_URL + "/api/competence/");
        const responseData = await response.json();
        if (responseData.status !== 500) {
            const competences = responseData.map(res => ({
                competence_id: res.competence_id,
                name: capitalizeFirstLetter(res.name) 
            }));
            return competences;
        } else {
            return "Failed";
        }
    } catch (error) {
        throw new Error("An error occurred while trying to retrieve the list of competences from the server."); 
    }
}

export {fetchCompetenceList}