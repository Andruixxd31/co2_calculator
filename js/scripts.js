document.getElementById("submitButton").addEventListener("click", insert)

async function getData() {
    try {
        var response = await fetch('https://q0qce7hz5l.execute-api.us-east-1.amazonaws.com/dev/miles');
        response = await response.json();
        console.log(response);
    } catch (err) {
        console.error(err);
    }
}

async function insert(e){
    e.preventDefault();

    //have var of impact to show
    document.getElementById("co2-impact").innerHTML = "co2 impact: 100kg";
    
    var car = parseFloat(document.getElementById("car").value);
    var pbTrans = parseFloat(document.getElementById("public-transport").value);
    var bycicle_walking = parseFloat(document.getElementById("walking-biking").value);
    var airplane = parseFloat(document.getElementById("air").value);
    
    var data = {
        car, "public": pbTrans, bycicle_walking, airplane
    }
    try {
        var response = await fetch('https://q0qce7hz5l.execute-api.us-east-1.amazonaws.com/dev/miles', 
        { 
            method: 'POST',
            body: JSON.stringify(data),
            headers: new Headers({ 'Content-Type': 'application/json' })
        });

        response = await response.json();
        console.log(response);
    } catch (err) {
        console.error(err);
    }
}