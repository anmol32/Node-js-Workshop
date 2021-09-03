const express = require ('express');
const Joi = require('joi'); // used for validation
const app=express();
app.use(express.json());

const movies=[
    {title:'Ironman',id:1},
    {title:'Batman',id:2},
    {title:'Spiderman',id:3}, 
    {title:'Superman',id:4} 
]

// Read request handlers

app.get('/',(req,res)=>{
    res.send('Hi There!');
});

app.get('/api/movies',(req,res)=>{
    res.send(movies);
})

app.get('/api/movies/:id',(req,res)=>{
    const movie=movies.find(c => c.id === parseInt(req.params.id));
    if(!book) res.status(404).send('<h2 style="font-family:Malgun Gothic; color: darkred;">Ooops... Cant find what you are looking for!</h2>');
    res.send(movie);
});

// CREATE Request HAndler 
app.post('/api/movies', (req, res)=> {
 
    // const { error } = validateMovie(req.body);
    // if (error){
    // res.status(400).send(error.details[0].message)
    // return;
    // }
    const movie = {
    id: movies.length + 1,
    title: req.body.title
    };
    movies.push(movie);
    res.send(movie);
    });
     
    //UPDATE Request Handler
    app.put('/api/movies/:id', (req, res) => {
    const movie = movies.find(c=> c.id === parseInt(req.params.id));
    if (!movie) res.status(404).send('<h2 style="font-family: Malgun Gothic; color: darkred;">Not Found!! </h2>');
     
    // const { error } = validateMovie(req.body);
    // if (error){
    // res.status(400).send(error.details[0].message);
    // return;
    // }
     
      movie.title = req.body.title;
    res.send(movie);
    });
     
    //DELETE Request Handler
    app.delete('/api/movies/:id', (req, res) => {
     
    const movie = movies.find( c=> c.id === parseInt(req.params.id));
    if(!movie) res.status(404).send('<h2 style="font-family: Malgun Gothic; color: darkred;"> Not Found!! </h2>');
     
    const index = movies.indexOf(movie);
    movies.splice(index,1);
     
    res.send(movie);
    });
     
    function validateMovie(movie) {
    const schema = {
    title: Joi.string().min(3).required()
    };
    return Joi.validate(movie, schema);
     
    }
     
    //PORT ENVIRONMENT VARIABLE
    const port = process.env.PORT || 8000;
    app.listen(port, () => console.log(`Listening on port ${port}..`));