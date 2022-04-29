// const express = require("express")
// const app = express()
const http = require('http')
const dt = require('./Date')
const fs = require('fs')

const PORT = process.env.PORT || 8080

// app.listen(PORT,() =>
//	console.log(`server is running on port ${PORT}`))

// create a server object
http.createServer((req, res) => {
	fs.readFile('testFile.html', (err, data) => {
	//	res.writeHead(200, {'Content-Type': 'text/html'})
		res.write(data)
		// return res.end()
	// })
	// res.writeHead(200, {'Content-Type': 'text/html'})
	res.write('Hello World!')
	res.write('The current date and time is: ' + dt.myDateTime())
	res.end()
	})
}).listen(PORT, () => 
	console.log(`Server is running on http://localhost:${PORT}`)
)
