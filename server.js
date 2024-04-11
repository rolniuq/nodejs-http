import http from 'http'

const PORT = 3000
const HOST = 'localhost'

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    return res.end('Hello world')
  }

  if (req.url === '/api') {
    return res.end('Api')
  }
})

server.listen(PORT, HOST, () => {
  console.log(`Server is running on http://${HOST}:${PORT}`)
})
