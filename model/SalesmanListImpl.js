const ManagePersonal = require('./ManagePersonal');

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
            records.push(record);
        } else {
            console.log(`Salesman with sid ${salesMan.sid} not found`);
        }
    }

    readSalesMan(sid) {
        return this.salesmen.find(s => s.sid === sid) || null;
    }

    readAllSalesMen() {
        return this.salesmen;
    }

    readSocialPerformanceRecord(salesMan) {
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
