class SalesMan {
    constructor(firstname, lastname, sid) {
        this.firstname = firstname;
        this.lastname = lastname;
        this.sid = sid;
    }

    getFirstname() {
        return this.firstname;
    }

    setFirstname(firstname) {
        this.firstname = firstname;
    }

    getLastname() {
        return this.lastname;
    }

    setLastname(lastname) {
        this.lastname = lastname;
    }

    getId() {
        return this.sid;
    }

    setId(sid) {
        this.sid = sid;
    }

    toDocument() {
        return {
            firstname: this.firstname,
            lastname: this.lastname,
            sid: this.sid
        };
    }

    /**
     * Check if two SalesMan objects are equal
     *
     * @param {SalesMan} other Another SalesMan object
     * @return {boolean} true if two SalesMan objects are equal, false otherwise
     */
    equals(other) {
        if (!(other instanceof SalesMan)) return false;
        return (
            this.firstname === other.firstname &&
            this.lastname === other.lastname &&
            this.sid === other.sid
        );
    }
}