/**
 * Capitalizes the first letter of a string.
 * 
 * @param {string} string - The string whose first letter we wish to capitalize.
 * @returns {string} The input string with the first letter capitalized.
 */
export function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

