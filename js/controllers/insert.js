const insertInfo = (req, res) => { //*Signins
    const {car, public, biike, airplane} = req.body;
    var sqlQuery='INSERT INTO miles (car,bycicle_walking, public, airplane) VALUES('+mysql.escape(req.body.car)+','+mysql.escape(req.body.biike)+','+mysql.escape(req.body.public)+','+req.body.airplane+';';
        connection.query(sqlQuery, function (error, results, fields) {
            if (error) throw error;
        });
    connection.end(function(err) {
    if (err) throw err;
    response= {
        'statusCode': 200,
        "headers": {"Content-Type": "*/*"},
        };
    callback(null,response);
    });

}

module.exports = {
    insertInfo: insertInfo
}