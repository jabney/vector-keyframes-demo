let express = require('express')
let app = express()
let port = process.env.PORT || 3000

app.use(express.static('dist'))

app.listen(port, function() {
    console.log('server listening on port ' + port)
})
