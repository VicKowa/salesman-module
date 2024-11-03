const express = require('express');
var router = express.Router();
const SalesmanListImpl = require('../model/SalesmanListImpl');
const SalesmanData = new SalesmanListImpl();
const SocialPerformanceRecord = require('../model/SocialPerformanceRecord');

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

    console.log(salesmanData.readSalesMan(userid));

    if (salesmanData.readSalesMan(userid) === null) {
        // not found exception
        res.status(404).send('Salesman not found');
    } else {
        res.status(200).send(salesmanData.readSalesMan(userid));
    }
});

//getSocialPerformanceRecord(int id)
router.get('/salesman/:id/spr/', (req, res) => {
    const userid = req.params.id;

    if (salesmanData.readSalesMan(userid) === null) {
        // not found exception
        res.status(404).send('Salesman not found');
    } else {
        res.status(200).send(salesmanData.readSocialPerformanceRecord(userid));
    }
});

// Post Requests
// createSalesman(int sid, String firstname, String lastname)
router.post('/salesman', (req, res) => {
    const body = req.body;

    if (!body.sid || !body.firstname || !body.lastname) {
        res.status(400).send('Please provide all required fields');
        return;
    }
    if(SalesmanData.readSalesMan(body.sid)) {
        res.status(400).send('Salesman with sid already exists');
        return;
    }
    const sid = body.sid;
    const firstname = body.firstname;
    const lastname = body.lastname;

    SalesmanData.createSalesMan({sid, firstname, lastname});
    res.send('Salesman created successfully');

});

// addSocialPerformanceRecord(int sid, SPR record)
router.post('/salesman/:id/spr', (req, res) => {
    const userid = req.params.id;
    const body = req.body;

    if(!userid) {
        res.status(400).send('Please provide a valid id');
        return;
    }
    if(!body) {
        res.status(400).send('Please provide body!');
        return;
    }
    if(!SalesmanData.readSalesMan(userid)) {
        res.status(400).send('Salesman with sid does not exists');
        return;
    }

    const salesman = SalesmanData.readSalesMan(userid);
    const socialPerformanceRecord = SocialPerformanceRecord.documentToSocialPerformanceRecord(body);
    SalesmanData.addSocialPerformanceRecord(socialPerformanceRecord, salesman);
    res.send('Social Performance Record added successfully');
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