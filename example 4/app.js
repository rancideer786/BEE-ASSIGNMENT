const express = require('express');
const app = express();
const PORT = 3000;
const path = require("path")
const filepath=path.join(__dirname,"/views/profile.ejs")

app.set('view engine', 'ejs');
app.use(express.json())

const users = {
    john: { age: 25, hobby: 'reading' },
    jane: { age: 28, hobby: 'painting' },
    bob: { age: 32, hobby: 'hiking' },
    Goransh: { age:20, hobby: 'riding bike' }   
};


// app.get('/profile/:username', (req, res) => {
//     const username = req.params.username;
//     const user = users[username];

//     if (user) {
//         res.render('profile ', { username, user });
//     } else {
//         res.status(404).send('User not found');
//     }
// });
app.get('/profile/:username', (req, res) => {
    const username = req.params.username;
    const user = users[username];

    if (user) {
        let customMessage = '';

        
        if (username === 'john') {
            customMessage = 'John is an avid reader and book lover!';
        } else if (username === 'jane') {
            customMessage = 'Jane enjoys creating beautiful paintings.';
        } else if (username === 'bob') {
            customMessage = 'Bob loves going on long hikes!';
        }
        else if (username==='Goransh'){
            customMessage ='Goransh loves to drive car!...';
        }

        res.render(filepath, { username, user, customMessage });
    } else {
        res.status(404).send('User not found');
    }
});


app.listen(PORT, () => {
    console.log(`Server is running on${PORT}`);
});