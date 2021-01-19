const cors = require('cors')
const express = require('express')
const axios = require('axios')
const app = express()

app.use(cors())

const port = 2000

app.get('/', async (req, res) => {
    
    //o obj. com data é do response(resposta) dado pelo AXIOS que pode ser estraida diretamente substituido uma linha com response.data.
    const { data } = await axios('https://jsonplaceholder.typicode.com/users') 
    console.log(data)

    return res.json(data)
}
)
app.listen(port, console.log(`http://localhost:${port}`))

