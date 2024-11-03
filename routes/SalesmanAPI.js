
const express = require('express');
var router = express.Router();

const SalesmanListImpl = require('../model/SalesmanListImpl');
const SocialPerformanceRecord = require('../model/SocialPerformanceRecord');
const salesmanData = new SalesmanListImpl();

// GET Requests
//getAllSalesman
router.get('/salesman', (req, res) => {
    const salesManList = salesmanData.readAllSalesMen()

    if (salesManList == null) {
        // not found exception
        res.status(404).send("No salesmen found");
        return;
    }

    res.status(200).send(salesManList);
});

// getSalesman(int id)
router.get('/salesman/:id', (req, res) => {
    const userid = req.params.id;
    res.send('your id is ' + userid);
});

//getSocialPerformanceRecord(int id)
router.get('/salesman/:id/spr/', (req, res) => {
    req.params.id;
    res.send('your id is  hallo ');
});

// Post Requests
// createSalesman(int sid, String firstname, String lastname)
router.post('/salesman', (req, res) => {
    res.send('Get all salesmen (To be implemented)4');
});

// addSocialPerformanceRecord(int sid, SPR record)
router.post('/salesman/:id/spr', (req, res) => {
    req.params.id;
    res.send('Get all salesmen (To be implemented)5');
});


// DELETE Requests
// deleteSalesman(int id)
router.delete('/salesman/:id', (req, res) => {
    req.params.id;
    res.send('Get all salesmen (To be implemented)6');
});

// deleteSocialPerformanceRecord(int id, SPR record)
router.delete('/salesman/:id/spr/:idx', (req, res) => {
    const userid = parseInt(req.params.id);
    const idx = parseInt(req.params.idx);

    const salesMan = salesmanData.readSalesMan(userid);

    if (salesMan == null) {
        // not found exception
        res.status(404).send("No salesman found");
        return;
    }

    const salesManRecords = salesmanData.readSocialPerformanceRecord(salesMan);

    if(salesManRecords.length <= idx){
        // not found exception
        res.status(404).send("No record found");
        return;
    }

    salesmanData.removeSocialPerformanceRecord(salesManRecords[idx], salesMan);

    res.status(200).send("The salesman record has been deleted");
});

module.exports = router;