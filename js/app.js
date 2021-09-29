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
const express = require('express');
let response;

exports.lambdaHandler =  (event, context, callback) => {
    try {
            var mensaje="";
            var mysql      = require('mysql');
            var connection = mysql.createConnection({
                host     : 'database-project.cq1sdfmlqcje.us-east-1.rds.amazonaws.com',
                user     : 'admin',
                password : 'proyectoaws',
                database: 'DBproyecto'
            });
            var sqlQuery='SELECT * FROM miles';
                    connection.query(sqlQuery, function (error, results, fields) {
                        if (error) throw error;
                        results.forEach( (row) => {
                            console.log(`NOMBRE: ${row.car} CORREO: ${row.public}`);
                            mensaje=mensaje+" - "+ row.Nombre;
                        });
                    });
            connection.end(function(err) {
                if (err) throw err;
                response= {
                    'statusCode': 200,
                    "headers": {"Content-Type": "*/*"},
                    'body': JSON.stringify({message: mensaje,})
                    };
                callback(null,response);
            });
         //return response
    } catch (err) {
        console.log("----------------->",err);
        callback (null, err);
    }
};


const app = express();
app.use(express.json());

//*--------components of the server ---------*/
//the req res receive the req, res, database and bcrypt 
//This is called dependecy injection
app.get('/', (req, res) => { res.send(database.users) })
app.post('/insert', insert.insertInfo())
app.post('/register', register.handleRegister(db, bcrypt))
app.get('/profile/:id', profile.handleProfileGet(db) )
app.put('/image', image.handleImage(db) )
