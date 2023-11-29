const express = require('express');
const bodyParser = require('body-parser');

const cors = require('cors');
const Sequelize = require('./util/database')

const routes = require('./routes/routes')

const User = require('./model/expense')

const app = express();

app.use(bodyParser.urlencoded({ extended:false}));
app.use(cors());
app.use(bodyParser.json())

app.use('/expense',routes);

Sequelize.sync()
.then(()=>{
    const port = 4000;
    console.log(`server running ${port}`);
    app.listen(port);
})
.catch(err=>console.log(err));