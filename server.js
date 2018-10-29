const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app=express();

app.use(cors())
app.use(bodyParser.json());

app.post('/',(req,res)=>{
   if(req.body.in ==='yes')
   res.redirect('http://192.168.137.152/button2');
   if(req.body.in === 'turn on')
   res.redirect('http://192.168.137.152/button1');
   if(req.body.in==='turn off')
   res.redirect('http://192.168.137.152/button1');

})

app.listen(3000,()=>
{
  console.log('app is running on port 3000')
})
