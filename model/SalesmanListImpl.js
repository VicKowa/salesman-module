let ManagePersonal = require('./ManagePersonal');
let Salesman = require('./Salesman');
let SocialPerformanceRecord = require('./SocialPerformanceRecord');
let SpecifiedRecord = require('./SpecifiedRecord');

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
        const records = this.performanceRecordsMap.get(salesMan.sid);

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