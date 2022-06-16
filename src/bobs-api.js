const axios = require('axios');

//implement the ID here, with math.random from 1 to 333
let ID = Math.random() * 333;
let burgerId = Math.round(ID);

async function getBurger() {
    let response = await axios.get(`https://bobsburgers-api.herokuapp.com/burgerOfTheDay/${burgerId}`, {
        headers: {
            Accept: 'application/json'
        }
    });
    return response.data.name;
}

getBurger().then(response => {
    console.log(response);
}).catch(error => {
    console.log(error);
})

module.exports = {
    getBurger
}