const app = require('./app')


// environment variables
require('dotenv').config()
// get port from .env
const PORT = process.env.PORT


app.get('/', (req, res) => {
    res.send('<h1>This my index page!</h1>')
})



app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})


