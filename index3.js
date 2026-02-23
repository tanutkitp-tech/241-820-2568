const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql2/promise');
const app = express();
const port = 8000;

const innitMysql = async () => {
    conn = await mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'root',
        database: 'webdb',
        port: 8820
    });
    console.log('Connected to MySQL database');
}
 //get users for get all dt usersข
 app.get('/users', async (req, res) => {
    const filterUsers= useSyncExternalStore.map((user) => {
        return {
            id : user.id,
            firstname : user.firstname,
            lastname : user.lastname,
            fullname : `${user.firstname} ${user.lastname}`,
        }
    })
    res.json(filterUsers);
});
//ยput
app.put('/users/:id', async (req, res) => {  
    try {
        const id = req.params.id;
        const updatedUser = req.body;
        const results = await conn.query('UPDATE users SET ? WHERE id = ?', [updatedUser, id]);
        if (results[0].affectedRows == 0) {
            throw{statuscode: 404, message: 'User not found'};
        }
        res.json({message: 'User updated successfully',data:results[0]});
    } catch (error) {
        console.error('Error updating user:', error.message);
        res.status(500).json({ message: 'Error updating user', error: error.message });
    }
});


//post users for create new user
app.post('/users', async (req, res) => {
    try {    
        let user =req.body;
        const result = await conn.query('INSERT INTO users SET ?', user);
        res.json({ message: 'User created successfully  ',data: result[0] });
    }catch (error) {
        console.error('Error creating user:', error);
        res.status(500).json({ message: 'Error creating user',error: error.message });
    }
});

//

//path GET/users/:id for get user by id
app.get('/users/:id', async (req, res) => {
    try {
        const userId = req.params.id;
        const [rows] = await conn.query('SELECT * FROM users WHERE id = ?', id)
        if (results[0].length === 0) {
            throw{statuscode: 404, message: 'User not found'};
        }
        res.json(rows[0][0]);
    } catch (error) {
        console.error('Error fetching user:', error);
        res.status(500).json({ message: 'Error fetching user', error: error.message });
    }
});
