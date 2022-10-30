const connection = require("../config/connection");

class Db_access {
    constructor(connection){
        this.connection = connection;
    }

    getAllDepartments(){
        return this.connection.promise().query(
            "SELECT * FROM department;"
        )
    }
}

// following lines copied at sneak peak provided in class and on the recording
// NEED SOME LINES ADDED TO FINISH(ONLY HALF THE CODE WAS SHOWING)

/* findAllEmployees() {
    return this.connection.promise().query(
        "SELECT id, first_name, last_name FROM employee WHERE id "
    );
 }

 findAllManagers(employeeId) {
    return this.connnection.promise().query(
        "SELECT id, first_name, last_name, FROM employee WHERE id"
        employeeId
    );
 }
*/

module.exports = new Db_access(connection);