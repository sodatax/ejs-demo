import express from 'express';
const app = express();

//set the view engine
app.set('view engine', 'ejs');

const PORT = 3002;

app.get('/', (req,res) => {
    let user = {
        name: "Hosea",
        color: "Red",
        food: "Pizza",
        // grade: 3.7,
        grade: 0.43,
        age: 21
        // age: 13
        
    }
    res.render('home', {user});
});

app.get('/temp', (req,res) => {
    res.render('temp');
});

app.listen(PORT, () =>{
    console.log(`Server is running on port http://localhost:${PORT}`);
})