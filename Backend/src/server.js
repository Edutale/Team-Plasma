const express = require('express');
const dotenv = require('dotenv');
const testRoutes = require('./routes/test');

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use('/api', testRoutes);
app.use(express.json());

app.get('/', (req, res)=>{
    res.send('Edutale Backend is running');
});

app.listen(port, ()=>{
    console.log('Server is running on port ${3000}');
});