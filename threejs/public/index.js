const express = require('express');
const app = express();
const port = 3001;
const path = require('path');

// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, 'public')));

// *****  Bug no. 2 instead of res.render use res.sendFile *****
// Serve the HTML file for the root route, Sends a static file (like an HTML file) directly to the client
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Start the server
app.listen(port, () => {
    console.log(`Server is listening on http://localhost:${port}`);
});


// *** Also index.js should be in the public folder and not in the root folder. ****