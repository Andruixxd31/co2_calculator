/**
 *
 * Event doc: https://docs.aws.amazon.com/apigateway/latest/developerguide/set-up-lambda-proxy-integrations.html#api-gateway-simple-proxy-for-lambda-input-format
 * @param {Object} event - API Gateway Lambda Proxy Input Format
 *
 * Context doc: https://docs.aws.amazon.com/lambda/latest/dg/nodejs-prog-model-context.html 
 * @param {Object} context
 *
 * Return doc: https://docs.aws.amazon.com/apigateway/latest/developerguide/set-up-lambda-proxy-integrations.html
 * @returns {Object} object - API Gateway Lambda Proxy Output Format
 * 
 */

//Requires
const express = require('express');
const mysql = require('mysql');

const app = express();

const db = mysql.createConnection({
    host: 'database-project.cq1sdfmlqcje.us-east-1.rds.amazonaws.com',
    port: 3306,
    user: 'admin',
    password: 'proyectoaws',
    database: 'DBproyecto'
});

db.connect((err) =>{
    if(err){
        console.log(err);
        return;
    }
    console.log("Databased connected")
});

app.use(express.json());

app.get('/getdb', (req, res) => {
    let sql = 'SELECT * FROM miles';
    db.query(sql, (err, result) =>{
        if (err) throw err;
        console.log(result);
        res.send("Info gathered");
    })
    
});

//*--------components of the server ---------*/
//the req res receive the req, res, database and bcrypt 
//This is called dependecy injection
// app.get('/', (req, res) => { res.send(database.users) })
// app.post('/insert', insert.insertInfo())
// app.post('/register', register.handleRegister(db, bcrypt))
// app.get('/profile/:id', profile.handleProfileGet(db) )
// app.put('/image', image.handleImage(db) )

app.listen('5500', () => {
    console.log('Server started on port 5500');
});