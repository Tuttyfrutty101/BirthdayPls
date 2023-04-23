const express = require('express');
const cors = require('cors');
const fetch = require('node-fetch');

const app = express();
app.use(cors());

const API_KEY = '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';

app.get('/birthdays', (req, res) => {
    const month = req.query.month;
    const day = req.query.day;
    const url = `https://api.openai.com/v1/data/birthdays?month=${month}&day=${day}`;

    fetch(url, {
        headers: {
            "Authorization": `Bearer ${API_KEY}`
        }
    })
    .then(response => response.json())
    .then(data => {
        res.json(data);
    })
    .catch(error => {
        console.error(error);
        res.status(500).send('Error getting birthdays');
    });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});
