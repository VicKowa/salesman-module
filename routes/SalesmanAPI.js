const express = require('express');
var router = express.Router();

const SalesmanListImpl = require('../model/SalesmanListImpl');
const SalesmanData = new SalesmanListImpl();
const SocialPerformanceRecord = require('../model/SocialPerformanceRecord');

// GET Requests
//getAllSalesman
router.get('/salesman', (req, res) => {
    res.send('Get all salesmen (To be implemented)');
});

// getSalesman(int id)
router.get('/salesman/:id', (req, res) => {
    const userid = req.params.id;

    console.log(SalesmanData.readSalesMan(userid));

    if (SalesmanData.readSalesMan(userid) === null) {
        // not found exception
        res.status(404).send('Salesman not found');
    } else {
        res.status(200).send(SalesmanData.readSalesMan(userid));
    }
});

//getSocialPerformanceRecord(int id)
router.get('/salesman/:id/spr/', (req, res) => {
    const userid = req.params.id;

    if (SalesmanData.readSalesMan(userid) === null) {
        // not found exception
        res.status(404).send('Salesman not found');
    } else {
        res.status(200).send(SalesmanData.readSocialPerformanceRecord(userid));
    }
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
router.delete('/salesman/:id/spr', (req, res) => {
    req.params.id;
    res.send('Get all salesmen (To be implemented)7');
});

module.exports = router;