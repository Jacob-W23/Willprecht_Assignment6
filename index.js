const express = require('express');
const app = express();
const nodemon = require('nodemon');
app.use(express.json());

const PORT = 1150;

let User = {
    username: "Jacob_W",
    password: "Passw0rd!",
    email: "generic@email.com",
    courses: {
        course: {
            courseId: "CMSC1255",
            courseName: "Server-Side Programming",
            startDate: "08/23/2020",
            endDate: "12/23/2020"
        },
        course1: {
            courseId: "CMSC2204",
            courseName: "Mobile Device Programming",
            startDate: "08/23/2020",
            endDate: "12/23/2020"
        },
        course2: {
            courseId: "CMSC2201",
            courseName: "Database Modeling II",
            startDate: "08/23/2020",
            endDate: "12/23/2020"
        }
    }
}

app.get('/getUser', (req,res) => {
    try {
        return res.status(200).json(User);
    } catch {
        return res.status(500);
    }
});

app.post('/addUser',(req,res) => {
    try {        
        return res.status(200).json("Added user " + req.body.user.username + " successfully!");
    } catch {
        return res.status(500);
    }
});

app.listen(PORT, () => {
    console.log(`Server Started on port ${PORT}`);
})