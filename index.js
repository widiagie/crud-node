const express = require('express');
const app = express();
const port = 3000;

// Import CORS
const cors = require('cors');

// Use CORS
app.use(cors());

// Import body-parser
const bodyParser = require('body-parser');

// Parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// Parse application/json
app.use(bodyParser.json());

// Import and use route posts
const postsRouter = require('./routes/posts');
app.use('/api/posts', postsRouter); 

// Import and use route weather
const weatherRouter = require('./routes/weather');
app.use('/api/weather', weatherRouter);

app.listen(port, () => {
  console.log(`app running at http://localhost:${port}`);
});
