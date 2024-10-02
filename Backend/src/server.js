const express = require('express');
require('dotenv').config({path: '../.env'});
const testRoutes = require('./routes/test'); // remove later
const studentRoutes = require('./routes/students');
//const questRoutes = require('./routes/quests');
//const skillRoutes = require('./routes/skills');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use('/api', testRoutes); // remove later
app.use('/api/students', studentRoutes);
//app.use('/api/quests', questRoutes);
//app.use('/api/skills', skillRoutes);

app.get('/', (req, res)=>{
    res.send('Edutale Backend is running');
});

app.listen(port, ()=>{
    console.log(`Server is running on port ${port}`);
});