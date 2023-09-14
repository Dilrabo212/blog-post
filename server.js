const express = require('express');
const jsonServer = require('json-server');
const bodyParser = require('body-parser');
const app = express();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();

app.use(middlewares);
app.use(bodyParser.json());

// Custom authentication route
app.post('/login', (req, res) => {
    const { username, password } = req.body;
    const user = router.db.get('users').find({ username, password }).value();

    if (user) {
        // Successful login
        res.json({ success: true, user });
    } else {
        // Failed login
        res.status(401).json({ success: false, message: 'Authentication failed' });
    }
});

// Custom registration route
app.post('/register', (req, res) => {
    const newUser = req.body; // Assuming the request body contains user data

    // Check if the user already exists
    const existingUser = router.db.get('users').find({ username: newUser.username }).value();

    if (existingUser) {
        // User already exists
        res.status(400).json({ success: false, message: 'User already exists' });
    } else {
        // Add the new user to the JSON data
        router.db.get('users').push(newUser).write();

        // Respond with a success message
        res.json({ success: true, message: 'User registered successfully', user: newUser });
    }
});

// Use JSON Server router for other routes
app.use(router);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});