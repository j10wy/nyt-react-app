require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 3001;
const app = express();
const apiRoutes = require('./routes/apiRoutes');

// Serve up static assets
app.use(express.static(`${__dirname}/nytreact/build`));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

// Use apiRoutes
app.use('/api', apiRoutes);

// Send every request to the React app
// Define any API routes before this runs
app.get('*', function(req, res) {
  res.sendFile(`${__dirname}/nytreact/build/index.html`);
});

app.listen(PORT, function() {
  console.log(`Server running on port http://localhost:${PORT}!`);
});
