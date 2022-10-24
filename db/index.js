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

module.exports = new Db_access(connection);