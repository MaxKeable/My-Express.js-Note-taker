const router = require('express').Router();
const path = require('path');

// Sets up the route that sends the index.html to the client
router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'))
});
// sets up the route that sends notes.html to the client
router.get('/api/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/notes.html'))
});

module.exports = router;