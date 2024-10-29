
const express = require('express');
var router = express.Router();

// GET Requests
//getAllSalesman
router.get('/salesman', (req, res) => {
    res.send('Get all salesmen (To be implemented)');
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
router.delete('/salesman/:id/spr', (req, res) => {
    req.params.id;
    res.send('Get all salesmen (To be implemented)7');
});

module.exports = router;