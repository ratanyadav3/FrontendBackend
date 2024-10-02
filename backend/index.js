import express from 'express';
const app = express();

app.get('/',(req,res)=>{
    res.send("Hi I have just created this server");
})

const port = process.env.PORT || 3000;

app.get('/api/jokes',(req,res)=>{
    const jokes =[
        {
            id:1,
            title:"Title 1",
            content:"Here Goes Content"
        },
        {
            id:2,
            title:"Title 2",
            content:"Here Goes Content"
        },
        {
            id:3,
            title:"Title 3",
            content:"Here Goes Content"
        },
        {
            id:4,
            title:"Title 4",
            content:"Here Goes Content"
        },
        {
            id:5,
            title:"Title 5",
            content:"Here Goes Content"
        },
        {
            id:6,
            title:"Title 6",
            content:"Here Goes Content"
        }
    ]
    res.json(jokes);

    
})

app.listen(port,()=>{
    console.log(`http://localhost:${port}`);
})