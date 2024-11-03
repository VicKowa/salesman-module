class ManagePersonal {
    createSalesMan(salesMan) {
        throw new Error("Method 'createSalesMan' must be implemented.");
    }

    addSocialPerformanceRecord(record, salesMan) {
        throw new Error("Method 'addSocialPerformanceRecord' must be implemented.");
    }

    readSalesMan(sid) {
        throw new Error("Method 'readSalesMan' must be implemented.");
    }

    readAllSalesMen() {
        throw new Error("Method 'readAllSalesMen' must be implemented.");
    }

    readSocialPerformanceRecord(salesMan) {
        throw new Error("Method 'readSocialPerformanceRecord' must be implemented.");
    }

    removeSalesMan(record) {
        throw new Error("Method 'removeSalesMan' must be implemented.");
    }

    removeSocialPerformanceRecord(record, salesMan) {
        throw new Error("Method 'removeSocialPerformanceRecord' must be implemented.");
    }
}

module.exports = ManagePersonal;