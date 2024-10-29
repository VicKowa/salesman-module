class SalesmanListImpl extends ManagePersonal{
    constructor() {
        super();
        this.salesmen = []; // Using an array to store SalesMan records
    }

    createSalesMan(salesMan) {
        const existing = this.salesmen.find(s => s.sid === salesMan.sid);
        if (existing) {
            console.log(`Salesman with sid ${salesMan.sid} already exists`);
            return;
        }
        this.salesmen.push(salesMan);
    }

    addSocialPerformanceRecord(record, salesMan) {
        const salesman = this.salesmen.find(s => s.sid === salesMan.sid);
        if (salesman) {
            salesman.socialPerformanceRecords.push(record);
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
        const salesman = this.salesmen.find(s => s.sid === salesMan.sid);
        return salesman ? salesman.socialPerformanceRecords : [];
    }

    removeSalesMan(salesMan) {
        this.salesmen = this.salesmen.filter(s => s.sid !== salesMan.sid);
    }

    removeSocialPerformanceRecord(record, salesMan) {
        const salesman = this.salesmen.find(s => s.sid === salesMan.sid);
        if (salesman) {
            salesman.socialPerformanceRecords = salesman.socialPerformanceRecords.filter(r => r.details !== record.details);
        } else {
            console.log(`Salesman with sid ${salesMan.sid} not found`);
        }
    }
}