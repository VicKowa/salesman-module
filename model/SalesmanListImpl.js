const ManagePersonal = require('./ManagePersonal');
const Salesman = require('./Salesman');
const SocialPerformanceRecord = require('./SocialPerformanceRecord');
const SpecifiedRecord = require('./SpecifiedRecord');

class SalesmanListImpl extends ManagePersonal{
    constructor() {
        super();
        this.salesmen = []; // List of SalesMan records
        this.performanceRecordsMap = new Map(); // Map of SalesMan Ids to their SocialPerformanceRecords (Array)
    }

    createSalesMan(salesMan) {
        const existing = this.salesmen.find(s => s.sid === salesMan.sid);
        if (existing) {
            console.log(`Salesman with sid ${salesMan.sid} already exists`);
            return;
        }
        this.salesmen.push(salesMan);
        this.performanceRecordsMap.set(salesMan.sid, []); // Initialize an empty record list for the new SalesMan
    }

    addSocialPerformanceRecord(record, salesMan) {
        console.log('Adding record: ');
        console.log(salesMan);

        console.log(typeof salesMan.sid);
        console.log('---');

        const records = this.performanceRecordsMap.get(salesMan.sid);

        if (records) {
            console.log(`Adding record to ${salesMan.firstname} ${salesMan.lastname}`);

            records.push(record);
            this.performanceRecordsMap.set(salesMan, records);
        } else {
            console.log(`Salesman with sid ${salesMan.sid} not found`);
        }
    }

    checkSalesMan(sid) {
        return this.salesmen.find(s => s.sid === sid);
    }

    readSalesMan(sid) {
        // convert sid to int
        sid = parseInt(sid);

        return this.salesmen.find(s => s.sid === sid) || null;
    }

    readAllSalesMen() {
        return this.salesmen;
    }

    readSocialPerformanceRecord(salesMan) {
        console.log('Reading record: ');
        console.log(salesMan);

        console.log(typeof salesMan.sid);
        console.log('---');

        return this.performanceRecordsMap.get(salesMan.sid) || [];
    }

    removeSalesMan(salesMan) {
        this.salesmen = this.salesmen.filter(s => s.sid !== salesMan.sid);
        this.performanceRecordsMap.delete(salesMan.sid);
    }

    removeSocialPerformanceRecord(record, salesMan) {
        const records = this.performanceRecordsMap.get(salesMan.sid);
        if (records) {
            this.performanceRecordsMap.set(
                salesMan.sid,
                records.filter(r => r.details !== record.details)
            );
        } else {
            console.log(`Salesman with sid ${salesMan.sid} not found`);
        }
    }
}

module.exports = SalesmanListImpl;