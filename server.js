const app = require('./app')

// environment variables
require('dotenv').config()
// get port from .env
const PORT = process.env.PORT

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})


