const express = require('express');
const app = express();
const PORT = 3000;

//Middleware

function authentication(req, res, next){
    const token = req.headers['authentication'];
    if(!token || token !== 'VALID_TOKEN'){
        res.status(401).send('Unauthorized');
    }

    next();
}

function areNumbers(num1, num2){
    return !isNaN(num1) && !isNaN(num2);
}

app.get('/sum', authentication, (req, res)=>{
    const {num1, num2} = req.query;
    if(areNumbers(num1, num2)){
        res.send(`The sum is: ${parseInt(num1) + parseInt(num2)}`);
    }else{
        res.status(400).send('Invalid input');
    }
});

app.listen(PORT, ()=> console.log(`Server running on port ${PORT}`));