const express = require('express');

const PORT = 8000;

// inistialize express app

const app = express();

//set the view engine to ejs

app.set('view engine', 'ejs');

// listen server on port 8000
 
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

