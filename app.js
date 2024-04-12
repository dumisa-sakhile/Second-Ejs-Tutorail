const express = require('express');
const app = express();
require('dotenv').config();
const expressLayouts = require('express-ejs-layouts');

app.use(express.static('public'))
app.use(expressLayouts)
app.set('view engine' , 'ejs')
app.set('layout','./layouts/default')

app.use('/' , require('./routes/defaultRouter'))

app.all("*",(req,res)=>{
    data = {
        title : '404 Page'
    }
    res.status(404).render('404',data)
})



const port = 5000 || process.env.PORT;

app.listen(port,console.log(`Live on port ${port}`))
