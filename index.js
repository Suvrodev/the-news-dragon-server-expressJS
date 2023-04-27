const express=require('express')
const app=express();
const cors=require('cors')

const categories=require('./Data/categories.json')
const port=process.env.PORT|| 5000

app.use(cors())

app.get('/',(req,res)=>{
    res.send('Hi Suvrodeb')
});

app.get('/data',(req,res)=>{
    res.send(categories)
})

app.listen(port,()=>{
    console.log(`Dragon API in Running on port: ${port}`)
})