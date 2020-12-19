var user_data = [];
var location_data = [];


/**
 * @class Users
 *
 * Class containing functions to set, get, and start user_data firebase maintenance
 * Note that all methods are static.
 * Wherever you import this class, you will be accessing the same data.
 */
class Users {
  /**
   * Creates a user in the database
   *
   * @param {Object} user - User object
   * @return {Boolean} - Boolean whether operation is successful
   */
    static async database_create_user(user) {
        await firebase.database().ref('user-data/' + user.uid).set({
            displayName: user.displayName,
            email: user.email,
            uid: user.uid,
            role: "volunteer",
            site: null,
            skills: null
        }, function(error) {
            if (error) {
                // The write failed...
                console.log("Error: Could not add user to database!");
                console.log(error);
                return false;
            }
            else {
                // Data saved successfully!
                return true;
            }
        });
    }

    /**
     * Gets the user data from the database
     * @param {String} user_id - Id of user
     * @return {Object} User data
     */
    static async database_get_user_data(user_id) {
        // loads user data into "user_data_static" once
        // firebase.database().ref('user-data/' + user_id).once('value').then(function(snapshot) {
        //     this.user_data_static = snapshot.val();
        // });
        const snapshot = await firebase.database().ref('user-data/' + user_id).once('value');
        //const snapshot = await firebase.database().ref('test/').once('value');
        console.log(user_id);
        return snapshot.val();
    }

    /**
     * Starts user_data variable maintenance with firebase callbacks
     * @param {String} user_id - Id of user
     * @return {Boolean} Boolean of whether this operation is successful
     */
    static async database_init_user_data_update_loop(user_id) {
        // sets up update loop for loading data into "user_data_dynamic"
        // auto - updates user data every time the data change 
        try{
            firebase.database().ref('user-data/' + user_id).on('value', function(snapshot) {
                user_data = snapshot.val();
            });
            return true;
        } catch (error) {
            console.log("Error starting user data update loop!");
            console.log(error);
            return false;
        }
        //console.log(snapshot.val());
    }

    /**
     * Starts location_data variable maintenance with firebase callbacks
     * @param {String} user_id - Id of user
     * @return {Boolean} Boolean of whether this operation is successful
     */
    static async database_init_location_data_update_loop(user_id) {
        try {
            firebase.database().ref('location-data/').on('value', function(snapshot) {
                location_data = snapshot.val();
                console.log(user_id);
            });
            return true;
        } catch (error) {
            console.log("Error starting location data update loop!");
            console.log(error);
            return false;
        }
    }
}


