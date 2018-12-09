const ascii = require('ascii-art')

module.exports = (request, response, next) => {
    // ascii.font("Some text"); 
    response.body = "some ascii thingy"; 
    next(); 
}
