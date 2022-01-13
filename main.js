const movies = require("./lev1_2_express.js-api_moviedatabase.js")
const express = require("express")

const server = express()

server.get("/api", (req, res) => {
    res.end(JSON.stringify(movies.movies))
})

server.get("/api/year/:year", (req, res) => {
    const year = req.params.year
    res.end(JSON.stringify(movies.movies.filter(elt => {
        return elt.year === year
    })))
})


server.get("/api/title/:title", (req, res) => {
    const title = req.params.title.toLowerCase()
    res.json(movies.movies.filter(elt => elt.title.toLowerCase().includes(title)))
})

server.use((_, res) => {
    res.end(`<h1>Error 404 - Page not found ;)</h1>
    <a href="/api">Back to movies api</a>`)
})

const port = 1341
server.listen(port, () => console.log("listening on port " + port))
