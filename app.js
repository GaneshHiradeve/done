const express = require('express');
const app = express();

// Root route
app.get('/', (req, res) => {
    res.send('Hello, World!');
});

// Example route
app.get('/about', (req, res) => {
    res.send('This is a simple Express app.');
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
