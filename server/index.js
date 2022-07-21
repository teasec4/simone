const express = require('express')
const path = require('path')

app = express()

const PORT = process.env.port || 4000


// Have Node serve the files for our built React app
app.use(express.static(path.resolve(__dirname, '../client/build')));


app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'));
});

try{
    app.listen(PORT, () => {
        console.log(`Server is listening on port ${PORT}`)
    })
} catch (err) {
    consle.log(err)
}

