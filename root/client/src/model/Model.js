/**
 * The Model class represents the data model of the application.
 *
 * @class Model
 */
class Model {
    /**
     * Creates a new instance of the Model class with the current user set to null.
     *
     * @constructor
     */
    constructor() {
        this.currentUser = null;
    }

    /**
     * Updates the current user with the specified user data.
     *
     * @function updateCurrentUser
     * @param {Object} user - The user object to set as the current user.
     * @returns {void}
     */
    updateCurrentUser(user) {
        if (user === this.currentUser) {
            return;
        }
        this.setCurrentUser(user);
    }

    /**
     * Sets the current user to the specified user data.
     *
     * @function setCurrentUser
     * @param {Object} user - The user object to set as the current user.
     * @returns {void}
     */
    setCurrentUser(user) {
        this.currentUser = user;
    }
}

export default Model;