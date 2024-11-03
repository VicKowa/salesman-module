const SpecifiedRecord = require('./SpecifiedRecord');

class SocialPerformanceRecord {
    constructor(department, totalBonus, year, leadershipCompetence, opennessToEmployee, socialBehaviorToEmployee, attitudeToClients, communicationSkills, integrityToCompany) {
        this.department = department;
        this.totalBonus = totalBonus;
        this.year = year; // year should be a Date object
        this.leadershipCompetence = leadershipCompetence;
        this.opennessToEmployee = opennessToEmployee;
        this.socialBehaviorToEmployee = socialBehaviorToEmployee;
        this.attitudeToClients = attitudeToClients;
        this.communicationSkills = communicationSkills;
        this.integrityToCompany = integrityToCompany;
    }

    // Getter methods
    getDepartment() {
        return this.department;
    }

    getTotalBonus() {
        return this.totalBonus;
    }

    getYear() {
        return this.year;
    }

    getLeadershipCompetence() {
        return this.leadershipCompetence;
    }

    getOpennessToEmployee() {
        return this.opennessToEmployee;
    }

    getSocialBehaviorToEmployee() {
        return this.socialBehaviorToEmployee;
    }

    getAttitudeToClients() {
        return this.attitudeToClients;
    }

    getCommunicationSkills() {
        return this.communicationSkills;
    }

    getIntegrityToCompany() {
        return this.integrityToCompany;
    }

    toDocument() {
        return {
            department: this.department,
            totalBonus: this.totalBonus,
            year: this.year, // Ensure this is in a format suitable for your database
            leadershipCompetence: this.leadershipCompetence.toDocument(),
            opennessToEmployee: this.opennessToEmployee.toDocument(),
            socialBehaviorToEmployee: this.socialBehaviorToEmployee.toDocument(),
            attitudeToClients: this.attitudeToClients.toDocument(),
            communicationSkills: this.communicationSkills.toDocument(),
            integrityToCompany: this.integrityToCompany.toDocument()
        };
    }

    static documentToSocialPerformanceRecord(document) {
        const department = document.department;
        const totalBonus = document.totalBonus;
        const year = new Date(document.year); // Convert to Date object

        const leadershipCompetence = SpecifiedRecord.documentToSpecifiedRecord(document.leadershipCompetence);
        const opennessToEmployee = SpecifiedRecord.documentToSpecifiedRecord(document.opennessToEmployee);
        const socialBehaviorToEmployee = SpecifiedRecord.documentToSpecifiedRecord(document.socialBehaviorToEmployee);
        const attitudeToClients = SpecifiedRecord.documentToSpecifiedRecord(document.attitudeToClients);
        const communicationSkills = SpecifiedRecord.documentToSpecifiedRecord(document.communicationSkills);
        const integrityToCompany = SpecifiedRecord.documentToSpecifiedRecord(document.integrityToCompany);

        return new SocialPerformanceRecord(department, totalBonus, year, leadershipCompetence, opennessToEmployee, socialBehaviorToEmployee, attitudeToClients, communicationSkills, integrityToCompany);
    }
}


module.exports = SocialPerformanceRecord;