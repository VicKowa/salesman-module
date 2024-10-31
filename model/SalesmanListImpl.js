let ManagePersonal = require('./ManagePersonal');
let Salesman = require('./Salesman');
let SocialPerformanceRecord = require('./SocialPerformanceRecord');
let SpecifiedRecord = require('./SpecifiedRecord');

class SalesmanListImpl extends ManagePersonal{
    constructor() {
        super();
        this.salesmen = []; // List of SalesMan records
        this.performanceRecordsMap = new Map(); // Map of SalesMan to their SocialPerformanceRecords

        // example data for testing
        const salesman = new Salesman('John', 'Doe', 1);
        this.createSalesMan(salesman);

        const leadershipCompetence = new SpecifiedRecord('Leadership Competence', 10, 8, 1000);
        const opennessToEmployee = new SpecifiedRecord('Openness to Employee', 10, 8, 1000);
        const socialBehaviorToEmployee = new SpecifiedRecord('Social Behavior to Employee', 10, 8, 1000);
        const attitudeToClients = new SpecifiedRecord('Attitude to Clients', 10, 8, 1000);
        const communicationSkills = new SpecifiedRecord('Communication Skills', 10, 8, 1000);
        const integrityToCompany = new SpecifiedRecord('Integrity to Company', 10, 8, 1000);

        const record = new SocialPerformanceRecord(
            'Department',
            1000,
            2021,
            leadershipCompetence,
            opennessToEmployee,
            socialBehaviorToEmployee,
            attitudeToClients,
            communicationSkills,
            integrityToCompany
        );

        this.addSocialPerformanceRecord(record, salesman);
    }

    createSalesMan(salesMan) {
        const existing = this.salesmen.find(s => s.sid === salesMan.sid);
        if (existing) {
            console.log(`Salesman with sid ${salesMan.sid} already exists`);
            return;
        }
        this.salesmen.push(salesMan);
        this.performanceRecordsMap.set(salesMan, []); // Initialize an empty record list for the new SalesMan
    }

    addSocialPerformanceRecord(record, salesMan) {
        const records = this.performanceRecordsMap.get(salesMan);

        if (records) {
            console.log(`Adding record to ${salesMan.firstname} ${salesMan.lastname}`);

            records.push(record);
            this.performanceRecordsMap.set(salesMan, records);
        } else {
            console.log(`Salesman with sid ${salesMan.sid} not found`);
        }
    }

    readSalesMan(sid) {
        // convert sid to int
        sid = parseInt(sid);

        return this.salesmen.find(s => s.sid === sid) || null;
    }

    readAllSalesMen() {
        return this.salesmen;
    }

    readSocialPerformanceRecord(sid) {
        // parse sid to int
        sid = parseInt(sid);

        // find corresponging salesMan to sid
        const salesMan = this.salesmen.find(s => s.sid === sid);

        if (!salesMan) {
            return [];
        }

        return this.performanceRecordsMap.get(salesMan) || [];
    }

    removeSalesMan(salesMan) {
        this.salesmen = this.salesmen.filter(s => s.sid !== salesMan.sid);
        this.performanceRecordsMap.delete(salesMan);
    }

    removeSocialPerformanceRecord(record, salesMan) {
        const records = this.performanceRecordsMap.get(salesMan);
        if (records) {
            this.performanceRecordsMap.set(
                salesMan,
                records.filter(r => r.details !== record.details)
            );
        } else {
            console.log(`Salesman with sid ${salesMan.sid} not found`);
        }
    }
}

module.exports = SalesmanListImpl;