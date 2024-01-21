const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const bcrypt = require('bcrypt');
const pg = require('pg');
const path = require('path');

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(session({ secret: '1111', resave: true, saveUninitialized: true }));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

const pool = new pg.Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'web',
    password: '16112004',
    port: 5432
});

app.get('/', (req, res) => {
    res.render('index', { error: null });
});

app.get('/register', (req, res) => {
    res.sendFile(path.join(__dirname, '/registration.html'));
});

app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, '/login.html'));
});

app.post('/register', async (req, res) => {
    const { username, password } = req.body;

    const hashedPassword = await bcrypt.hash(password, 10);

    pool.query('INSERT INTO users (username, password) VALUES ($1, $2)', [username, hashedPassword], (error, result) => {
        if (error) {
            res.status(500).send('Error registering user');
        } else {
            res.status(200).send('User registered successfully');
        }
    });
});

app.post('/login', async (req, res) => {
    const { username, password } = req.body;

    pool.query('SELECT * FROM users WHERE username = $1', [username], async (error, result) => {
        if (error || result.rows.length === 0) {
            res.render('index', { error: 'Invalid username or password' });
        } else {
            const user = result.rows[0];
            const isPasswordValid = await bcrypt.compare(password, user.password);

            if (isPasswordValid) {
                req.session.userId = user.id;
                res.status(200).send('User login successfully!');
            } else {
                res.render('index', { error: 'Invalid username or password' });
            }
        }
    });
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
