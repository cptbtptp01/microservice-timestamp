const express = require('express');
const app = express();

// route handler
// define a route handling http get requests
// define endpoint for the timestamp api
app.get('/api/timestamp/:date_string?', (req, res) =>
{
    // access date_string parameter provided in the url
    // parsing and validating date string
    const dateString = req.params.date_string;
    let date;

    if (!dateString) {
        date = new Date();
    } else if (!isNaN(Date.parse(dateString))){
        // parse date string
        date = new Date(dateString);
    } else if (!isNaN(parseInt(dateString))) {
        // parse unix code
        date = new Date(parseInt(dateString));
    } else {
        return res.json({error: 'Invalid Date'});
    }

    res.json({
        unix: date.getTime(), 
        utc: date.toUTCString()
    });
});

const port = 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});