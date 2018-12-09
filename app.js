require('dotenv').config(); 

const app = require('express')(); 
const cors = require('cors'); 
const logger = require('./middleware/logger'); 
const ascii = require('./middleware/ascii'); 

app.use(logger); 
app.get('/', ascii, (request, response) => {
    response.send(response.body); 
}); 


app.listen(process.env.PORT, () => {
    console.log("server running on ", process.env.PORT); 
})
