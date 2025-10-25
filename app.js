import express from "express";

const app = express();

app.use(express.json());

const port = 3000;


try {
    app.listen(port, ()=>{
        console.log('Listening to port 3000..');
    })
} catch (e) {
    console.log(e);
}

app.get('/Jerick', async (request, response) =>{
    response.status(200).json({message: "Hello, I'm Jerick!"});
});