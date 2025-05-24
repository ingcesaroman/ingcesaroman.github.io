const express = require("express")
const app = express()

/* app.use((req, res) => {
    console.log("WE GOT A NEW REQUEST")
    res.send('<h1> Hello Thies is a new Page!! </h1>')
}) */
app.get('', (req, res) => {
  console.log("Root REQUEST")
    res.send('<h1> Hello This is a new Page!! </h1>')
});

app.get('/cats', (req, res) => {
    console.log("CAT REQUEST")
});

app.get('/dogs', (req, res) => {
    console.log("DOG REQUEST")
});

app.listen(8080, () => {
    console.log("LISTENING ON PORT 3000")
})