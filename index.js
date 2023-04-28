const express=require('express')
const app=express();
const cors=require('cors')

const categories=require('./Data/categories.json')
const news=require('./Data/news.json')

const port=process.env.PORT|| 5000

app.use(cors())

app.get('/',(req,res)=>{
    res.send('Hi Suvrodeb')
});

app.get('/categories',(req,res)=>{
    res.send(categories)
})

app.get('/news',(req,res)=>{
    res.send(news)
})



app.get('/news/:id',(req,res)=>{
    const id=req.params.id;
    console.log(id)
    const selectedNews=news.find(n=>n._id===id)
    res.send(selectedNews)
})
app.get('/categories/:id',(req,res)=>{
    const id=req.params.id
    console.log(id)
    if(id==0){
        res.send(news)
    }
    else{
        const categoriesNews=news.filter(n=>n.category_id===id);
        res.send(categoriesNews)
    }
})

app.listen(port,()=>{
    console.log(`Dragon API in Running on port: ${port}`)
})