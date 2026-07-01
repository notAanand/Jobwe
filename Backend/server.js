require('dotenv').config()
const dns = require('dns')
const app = require('./src/app')
const connectToDB = require('./src/config/database')

dns.setServers(['1.1.1.1', '8.8.8.8'])

const PORT = process.env.PORT || 3000

async function startServer() {
    try {
        await connectToDB()

        app.listen(PORT, () => {
            console.log(`server is running on port ${PORT}`)
        })
    } catch (err) {
        console.error('failed to start server:', err.message)
        process.exit(1)
    }
}

startServer()
